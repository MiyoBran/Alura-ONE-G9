#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Actualizando información del portfolio Alura ONE G9...');

// Función para obtener información de un proyecto
function getProjectInfo(projectPath) {
  const indexPath = path.join(projectPath, 'index.html');
  
  // Buscar README independientemente de mayúsculas/minúsculas
  let readmePath = null;
  try {
    const files = fs.readdirSync(projectPath);
    const readmeFile = files.find(file => file.toLowerCase() === 'readme.md');
    if (readmeFile) {
      readmePath = path.join(projectPath, readmeFile);
    }
  } catch (error) {
    // Ignorar error
  }
  
  // Detectar si hay archivos de trabajo real
  const hasWork = hasWorkFiles(projectPath);

  const info = {
    name: path.basename(projectPath),
    hasIndex: fs.existsSync(indexPath),
    hasReadme: readmePath !== null,
    hasWork: hasWork,
    path: projectPath
  };

  // Un proyecto se considera completado SOLO si:
  // - Tiene index.html (proyecto web completado) O
  // - Tiene archivos Jupyter (curso con notebooks) O scripts Python
  info.isCompleted = info.hasWork;

  // Intentar obtener el título del README si existe
  if (readmePath) {
    try {
      const readmeContent = fs.readFileSync(readmePath, 'utf8');
      const titleMatch = readmeContent.match(/^#\s+(.+)$/m);
      if (titleMatch) {
        info.title = titleMatch[1].replace(/🎯|📋|🚀|⚡|🛠️|📊|🔢|🔄|📈|🎨|🤖|🎲|✈️/g, '').trim();
      }
    } catch (error) {
      console.warn(`No se pudo leer README de ${info.name}`);
    }
  }

  return info;
}

// Función para detectar archivos Jupyter
function checkForJupyterFiles(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    return files.some(file => file.endsWith('.ipynb'));
  } catch (error) {
    return false;
  }
}

// Función para verificar si un proyecto tiene archivos de trabajo real (notebooks o código)
function hasWorkFiles(dirPath) {
  try {
    return checkFilesRecursive(dirPath);
  } catch (error) {
    return false;
  }
}

// Función auxiliar para buscar archivos de manera recursiva
function checkFilesRecursive(dirPath, maxDepth = 5, currentDepth = 0) {
  if (currentDepth >= maxDepth) {
    return false;
  }
  
  try {
    const files = fs.readdirSync(dirPath);
    
    // Buscar archivos de trabajo reales en el nivel actual
    for (const file of files) {
      if (file.endsWith('.ipynb') ||  // Notebooks Jupyter
          file.endsWith('.html') ||   // Proyectos web
          file.endsWith('.py') ||     // Scripts Python
          file.endsWith('.sql')) {    // Scripts SQL
        return true;
      }
    }
    
    // Buscar en subdirectorios
    for (const file of files) {
      if (file.startsWith('.')) {
        continue;
      }
      
      const filePath = path.join(dirPath, file);
      try {
        if (fs.statSync(filePath).isDirectory() && 
            checkFilesRecursive(filePath, maxDepth, currentDepth + 1)) {
          return true;
        }
      } catch (error) {
        // Ignorar errores de acceso
      }
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

// Función para escanear proyectos
function scanProjects() {
  const rootFormations = [
    'formacion-programacion-primeros-pasos-grupo9-one',
    'formacion-fundamentos-de-python-y-datos-grupo9-one',
    'formacion-Aprendiendo-a-hacer-ETL-G9-ONE',
    'formacion-estadisticas-y-machine-learning-grupo9-one'
  ];

  const projects = [];
  const formations = {};

  rootFormations.forEach(rootDir => {
    const rootPath = path.join(__dirname, rootDir);
    if (!fs.existsSync(rootPath) || !fs.statSync(rootPath).isDirectory()) {
      return;
    }

    const subDirs = fs.readdirSync(rootPath)
      .filter(entry => {
        if (entry.startsWith('.')) {
          return false;
        }

        const entryPath = path.join(rootPath, entry);
        return fs.statSync(entryPath).isDirectory();
      });

    const subProjects = subDirs.map(subDir => getProjectInfo(path.join(rootPath, subDir)));
    subProjects.forEach(project => {
      projects.push(project);
    });

    // Contar formaciones completadas
    const completed = subProjects.filter(p => p.isCompleted).length;
    const total = subProjects.length;
    
    formations[rootDir] = {
      completed,
      total,
      projects: subProjects
    };
  });

  return { projects, formations };
}

// Función para actualizar los tracks en el HTML
function updateTrackStatus(indexContent, formations) {
  let updated = indexContent;

  // Mapeo de carpetas de formación a nombres en HTML (deben coincidir exactamente)
  const trackMappings = {
    'formacion-programacion-primeros-pasos-grupo9-one': {
      name: 'Principiante en Programacion'
    },
    'formacion-fundamentos-de-python-y-datos-grupo9-one': {
      name: 'Fundamentos de Python y Datos'
    },
    'formacion-Aprendiendo-a-hacer-ETL-G9-ONE': {
      name: 'Aprendiendo a hacer ETL'
    },
    'formacion-estadisticas-y-machine-learning-grupo9-one': {
      name: 'Estadisticas y Machine Learning'
    }
  };

  // Actualizar estado de cada track - proceso más cuidadoso
  Object.entries(formations).forEach(([formationKey, formationData]) => {
    const mapping = trackMappings[formationKey];
    if (!mapping) return;

    const { completed, total } = formationData;
    const newStatus = completed === total ? 'completed' : 'in-progress';
    
    // Crear un patrón más específico para buscar el track completo
    const trackPattern = new RegExp(
      `(<div class="track-card">\\s*<div class="track-header">\\s*<h3 class="track-title">${mapping.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</h3>\\s*<span class="track-status )[^"]*(">[\\d]+/[\\d]+</span>)`,
      's'
    );
    
    updated = updated.replace(trackPattern, `$1${newStatus}$2`);
    
    // También reemplazar el contador numérico
    const counterPattern = new RegExp(
      `(<h3 class="track-title">${mapping.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</h3>\\s*<span class="track-status [^"]*">)[\\d]+/[\\d]+(</span>)`,
      's'
    );
    
    updated = updated.replace(counterPattern, `$1${completed}/${total}$2`);
  });

  return updated;
}

// Función para actualizar estadísticas en index.html
function updatePortfolioStats() {
  const indexPath = path.join(__dirname, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ No se encontró index.html');
    return;
  }

  const result = scanProjects();
  const projects = result.projects;
  const formations = result.formations;
  
  const completedProjects = projects.filter(p => p.isCompleted).length;
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
  }

  // Actualizar estados de los tracks
  indexContent = updateTrackStatus(indexContent, formations);

  // Escribir archivo actualizado
  fs.writeFileSync(indexPath, indexContent);
  console.log('✨ Estadísticas y tracks actualizados en index.html');
}

// Función principal
function main() {
  try {
    updatePortfolioStats();

    const result = scanProjects();
    const projects = result.projects;
    const formations = result.formations;

    console.log('\n📋 Resumen de proyectos:');
    projects.forEach(project => {
      const status = project.isCompleted ? '✅' : '⏳';
      const title = project.title || project.name;
      console.log(`${status} ${title}`);
    });

    console.log('\n📚 Resumen de formaciones:');
    Object.entries(formations).forEach(([key, data]) => {
      console.log(`  ${data.completed}/${data.total} - ${key}`);
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
