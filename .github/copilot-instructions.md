# GitHub Copilot Instructions - Portafolio Alura ONE G9

## 🎯 Contexto General del Proyecto

Este es el portafolio de **MiyoBran** para la trayectoria completa de **Oracle Next Education (ONE)** en colaboración con **Alura LATAM**. El proyecto documenta la evolución desde fundamentos de programación hasta data science, ETL y machine learning.

### 📋 Estructura del Repositorio

```
Alura-ONE-G9/
├── index.html                                    # Página principal del portafolio
├── style.css                                     # Estilos principales
├── app.js                                        # JavaScript interactivo
├── README.md                                     # Documentación principal
├── package.json                                  # Configuración Node.js y scripts
├── update-portfolio.js                          # Script automatización portfolio
├── .gitignore                                    # Exclusiones de Git
├── .gitattributes                               # Control line endings Git
├── .editorconfig                                 # Estándares código editores
├── .github/
│   ├── copilot-instructions.md                  # Este archivo
│   └── .instructions.md                         # Instrucciones cortas Copilot
├── .vscode/
│   ├── settings.json                            # Configuración VS Code workspace
│   └── tasks.json                               # Tareas automatizadas VS Code
├── formacion-programacion-primeros-pasos-grupo9-one/ # Cursos principales
│   ├── 2035-logica-programacion-2-Aula5/      # Proyecto final completo
│   ├── 2067-html-css-desarrollo-...aula3/     # Curso HTML/CSS
│   ├── js-curso-2-Desafio/                    # Desafío final
│   └── challenge-amigo-secreto_esp-main/      # Challenge principal
├── formacion-fundamentos-de-python-y-datos-grupo9-one/
├── formacion-Aprendiendo-a-hacer-ETL-G9-ONE/
├── formacion-estadisticas-y-machine-learning-grupo9-one/
└── Assets-IA-Tools/
```

## 🎨 Identidad Visual y Estilo

### Paleta de Colores
```css
--primary-color: #14b8a6       /* Teal principal */
--secondary-color: #0f766e     /* Teal oscuro */
--accent-color: #a3e635        /* Lima */
--bg-primary: #0b1220          /* Fondo oscuro */
--text-primary: #e2e8f0        /* Texto principal */
```

### Principios de Diseño
- **Dark Mode** como tema principal
- **Responsive Design** mobile-first
- **Gradientes** para elementos destacados
- **Animaciones suaves** con CSS transforms
- **Typography moderna** (Space Grotesk + Fraunces)

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5** semántico y accesible
- **CSS3** con variables, Grid y Flexbox
- **JavaScript ES6+** vanilla (sin frameworks)
- **Font Awesome** para iconografía
- **Google Fonts** para tipografía

### Herramientas de Desarrollo
- **Git** para control de versiones
- **GitHub** para hosting y colaboración
- **VS Code** como editor principal
- **Node.js v18.19.1** para automatización
- **npm** para gestión dependencias y scripts
- **Live Server** para desarrollo local

### Automatización y Scripts
- **update-portfolio.js** - Script Node.js para actualizar estadísticas del portfolio automáticamente
- **package.json** - Configuración de dependencias y scripts npm
- **VS Code Tasks** - Tareas automatizadas para desarrollo y deployment
- **npm scripts** - Comandos rápidos: `npm run update-portfolio`, `npm start`, `npm run serve`

## 📝 Guías de Actualización

### 🏠 Cómo Actualizar la Página Principal (index.html)

#### Agregar un Nuevo Proyecto
1. **Ubicación**: Buscar la sección `<div class="projects-grid">` en `index.html`
2. **Estructura del proyecto**:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-[ICONO-APROPIADO]"></i>
    </div>
    <div class="project-content">
        <div class="project-header">
            <h3 class="project-title">[NOMBRE-PROYECTO]</h3>
            <span class="project-badge [course|challenge]">[TIPO]</span>
        </div>
        <p class="project-description">
            [DESCRIPCIÓN-DETALLADA]
        </p>
        <div class="project-tech">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">HTML5</span>
            <span class="tech-tag">CSS3</span>
        </div>
        <div class="project-links">
            <a href="[CARPETA-PROYECTO]/index.html" class="btn btn-sm btn-primary">
                <i class="fas fa-external-link-alt"></i>
                Ver Demo
            </a>
            <a href="[CARPETA-PROYECTO]/" class="btn btn-sm btn-outline">
                <i class="fas fa-code"></i>
                Ver Código
            </a>
        </div>
    </div>
</div>
```

#### Tipos de Badges Disponibles
- `project-badge course` - Para cursos (color amarillo)
- `project-badge challenge` - Para challenges (color verde)

#### Seccion Formaciones
1. **Ubicacion**: Buscar la seccion `<section id="tracks">` en `index.html`
2. **Estructura**:
```html
<div class="track-card">
    <div class="track-header">
        <h3 class="track-title">[NOMBRE-FORMACION]</h3>
        <span class="track-status [completed|in-progress|not-started]">[X/Y]</span>
    </div>
    <p class="track-description">[DESCRIPCION]</p>
    <a href="[RUTA-README]" class="track-link">Ver README</a>
</div>
```

#### Iconos Recomendados (Font Awesome)
- `fas fa-brain` - Lógica de programación
- `fas fa-gift` - Amigo secreto / sorteos
- `fas fa-puzzle-piece` - Ejercicios
- `fas fa-cogs` - Funciones avanzadas
- `fas fa-lightbulb` - Algoritmos
- `fas fa-rocket` - Optimización
- `fas fa-trophy` - Proyectos finales
- `fas fa-star` - Desafíos especiales

#### Actualizar Estadísticas
En la sección "about", actualizar los contadores:
```html
<div class="stat-card">
    <div class="stat-number">[NÚMERO]</div>
    <div class="stat-label">[DESCRIPCIÓN]</div>
</div>
```

### 📖 Cómo Actualizar el README Principal

#### Sección de Proyectos
1. **Ubicación**: Buscar `## 📋 Proyectos Incluidos`
2. **Agregar nuevo proyecto**:
```markdown
### 🏆 **Challenges** / 📚 **Cursos** / 🎯 **Desafíos**
[NÚMERO]. **[NOMBRE-PROYECTO]** - [DESCRIPCIÓN-BREVE]
```

#### Actualizar Estadísticas del Autor
1. **Ubicación**: Buscar `### 🎓 **Mi Trayectoria**`
2. **Actualizar números**:
```markdown
- ✅ **Resultado**: [X] proyectos funcionales desarrollados
```

#### Mantener Consistencia en el Lenguaje
- Usar **negritas** para términos importantes
- Emojis al inicio de secciones principales
- Código en `backticks` para términos técnicos
- Enlaces en formato `[texto](url)`

### 📄 Crear README para Nuevos Proyectos

#### Template Base
```markdown
# 🎯 [NOMBRE-PROYECTO]

## 📖 Descripción
[Descripción detallada del proyecto y sus objetivos]

## ⚡ Funcionalidades
- ✅ [Funcionalidad 1]
- ✅ [Funcionalidad 2]
- ✅ [Funcionalidad 3]

## 🛠️ Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript

## 🚀 Cómo usar
1. Instrucción 1
2. Instrucción 2
3. Instrucción 3

## 👨‍💻 Autor
**MiyoBran** - Proyecto desarrollado durante la formación "Principiante en Programación" de Alura ONE G9
```

## 🎯 Mejores Prácticas

### Código
- **Indentación consistente** (2 espacios)
- **Nombres descriptivos** para variables y funciones
- **Comentarios explicativos** en español
- **Validaciones** siempre presentes
- **Funciones modulares** y reutilizables

### Estructura de Archivos
- `index.html` - Página principal
- `style.css` - Estilos principales
- `app.js` - JavaScript funcional
- `README.md` - Documentación completa
- `assets/` o `img/` - Recursos multimedia

### Commits
- Usar **mensajes descriptivos** en español
- Formato: `[tipo]: descripción breve`
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`
- Ejemplo: `feat: agregar proyecto de lógica programación aula 3`

### Documentación
- **README.md** en cada proyecto
- **Comentarios** en código JavaScript
- **Descripciones claras** de funcionalidades
- **Instrucciones de uso** paso a paso

## 🎓 Contexto Educativo

### Programa ONE
- **Objetivo**: Formar nuevos talentos en tecnología
- **Enfoque**: Principiantes sin conocimientos previos
- **Metodología**: Proyectos prácticos incrementales
- **Resultado**: Portfolio profesional completo

### Formación "Principiante en Programación"
- **Base**: Lógica de programación fundamental
- **Evolución**: De conceptos básicos a aplicaciones complejas
- **Tecnologías**: HTML5, CSS3, JavaScript ES6+
- **Meta**: Preparación para el mercado tecnológico

## 🔄 Workflow de Desarrollo

### Para Nuevos Proyectos
1. **Crear carpeta** con nombre descriptivo
2. **Estructurar archivos** básicos (HTML, CSS, JS)
3. **Desarrollar funcionalidad** según requisitos
4. **Crear README.md** del proyecto
5. **Actualizar index.html** principal
6. **Ejecutar automatización**: `npm run update-portfolio`
7. **Actualizar README.md** principal
8. **Commit y push** con mensaje descriptivo

### Para Actualizaciones
1. **Identificar sección** a actualizar
2. **Mantener consistencia** de estilo
3. **Probar funcionalidad** en diferentes dispositivos
4. **Validar enlaces** y navegación
5. **Ejecutar script de actualización**: `npm run update-portfolio`
6. **Actualizar documentación** correspondiente

### Comandos de Automatización
- `npm run update-portfolio` - Actualiza estadísticas del portfolio
- `npm start` - Abre el portfolio en el navegador
- `npm run serve` - Inicia servidor de desarrollo local
- `npm run dev` - Alias para servidor de desarrollo

### Tareas de VS Code
Usar `Ctrl+Shift+P` → "Tasks: Run Task" para ejecutar:
- `open-portfolio` - Abre la página principal del portfolio
- `open-amigo-secreto` - Abre el challenge Amigo Secreto
- `serve-portfolio` - Inicia servidor HTTP para desarrollo
- `update-portfolio` - Ejecuta el script de actualización
- `validate-html` - Validación HTML (requiere extensiones)

## 📞 Contacto y Soporte

- **GitHub**: [@MiyoBran](https://github.com/MiyoBran)
- **Proyecto**: Alura ONE G9 - Principiante en Programación
- **Institución**: Alura LATAM + Oracle

---

**Nota**: Este archivo debe actualizarse cada vez que se agreguen nuevos proyectos o se modifique la estructura del portafolio.
