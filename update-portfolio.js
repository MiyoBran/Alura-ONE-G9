#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Actualizando información del portfolio Alura ONE G9...');

// Función para obtener información de un proyecto
function getProjectInfo(projectPath) {
  const indexPath = path.join(projectPath, 'index.html');
  const readmePath = path.join(projectPath, 'README.md');

  const info = {
    name: path.basename(projectPath),
    hasIndex: fs.existsSync(indexPath),
    hasReadme: fs.existsSync(readmePath),
    path: projectPath
  };

  // Intentar obtener el título del README si existe
  if (info.hasReadme) {
    try {
      const readmeContent = fs.readFileSync(readmePath, 'utf8');
      const titleMatch = readmeContent.match(/^#\s+(.+)$/m);
      if (titleMatch) {
        info.title = titleMatch[1].replace(/🎯|📋|🚀|⚡|🛠️/g, '').trim();
      }
    } catch (error) {
      console.warn(`No se pudo leer README de ${info.name}`);
    }
  }

  return info;
}

// Función para escanear proyectos
function scanProjects() {
  const projectDirs = fs.readdirSync(__dirname)
    .filter(dir => {
      const fullPath = path.join(__dirname, dir);
      return fs.statSync(fullPath).isDirectory() &&
             !dir.startsWith('.') &&
             dir !== 'node_modules' &&
             (dir.includes('2035-logica-programacion-2-Aula5') ||  // Solo la versión final
              dir.includes('challenge') || 
              dir.includes('js-curso') ||
              dir.includes('html-css'));
    });

  return projectDirs.map(dir => getProjectInfo(path.join(__dirname, dir)));
}// Función para actualizar estadísticas en index.html
function updatePortfolioStats() {
  const indexPath = path.join(__dirname, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ No se encontró index.html');
    return;
  }

  const projects = scanProjects();
  const completedProjects = projects.filter(p => p.hasIndex).length;
  const totalProjects = projects.length;

  console.log(`📊 Proyectos encontrados: ${totalProjects}`);
  console.log(`✅ Proyectos completados: ${completedProjects}`);

  // Leer el archivo index.html
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Actualizar estadísticas si están presentes
  const statsRegex = /<div class="stat-number">(\d+)<\/div>/g;
  const matches = [...indexContent.matchAll(statsRegex)];

  if (matches.length >= 2) {
    // Actualizar primera estadística (proyectos completados)
    indexContent = indexContent.replace(
      /<div class="stat-number">\d+<\/div>/,
      `<div class="stat-number">${completedProjects}</div>`
    );

    // Escribir archivo actualizado
    fs.writeFileSync(indexPath, indexContent);
    console.log('✨ Estadísticas actualizadas en index.html');
  }
}

// Función principal
function main() {
  try {
    updatePortfolioStats();

    const projects = scanProjects();

    console.log('\n📋 Resumen de proyectos:');
    projects.forEach(project => {
      const status = project.hasIndex ? '✅' : '⏳';
      const title = project.title || project.name;
      console.log(`${status} ${title}`);
    });

    console.log('\n🎉 Portfolio actualizado correctamente!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main();
}

module.exports = { scanProjects, updatePortfolioStats };
