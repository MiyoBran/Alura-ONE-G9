# GitHub Copilot Instructions - Portafolio Alura ONE G9

## 🎯 Contexto General del Proyecto

Este es el portafolio de **MiyoBran** para la formación **"Principiante en Programación"** del programa **Oracle Next Education (ONE)** en colaboración con **Alura LATAM**. El proyecto documenta la evolución completa desde no tener conocimientos previos en programación hasta desarrollar aplicaciones funcionales.

### 📋 Estructura del Repositorio

```
Alura-ONE-G9/
├── index.html                                    # Página principal del portafolio
├── style.css                                     # Estilos principales
├── app.js                                        # JavaScript interactivo
├── README.md                                     # Documentación principal
├── .gitignore                                    # Exclusiones de Git
├── .github/
│   └── copilot-instructions.md                  # Este archivo
├── 2035-logica-programacion-1-ProyectoInicial/  # Curso inicial
├── 2035-logica-programacion-2-Aula1/            # Conceptos básicos
├── 2035-logica-programacion-2-Aula2/            # Funciones avanzadas
├── 2035-logica-programacion-2-Aula3/            # Algoritmos
├── 2035-logica-programacion-2-Aula4/            # Optimización
├── 2035-logica-programacion-2-Aula5/            # Proyecto final
├── js-curso-2-Desafio/                          # Desafío final
└── challenge-amigo-secreto_esp-main/            # Challenge principal
```

## 🎨 Identidad Visual y Estilo

### Paleta de Colores
```css
--primary-color: #667eea       /* Azul principal */
--secondary-color: #764ba2     /* Púrpura */
--accent-color: #f093fb        /* Rosa */
--bg-primary: #0f0f23          /* Fondo oscuro */
--text-primary: #ffffff        /* Texto principal */
```

### Principios de Diseño
- **Dark Mode** como tema principal
- **Responsive Design** mobile-first
- **Gradientes** para elementos destacados
- **Animaciones suaves** con CSS transforms
- **Typography moderna** (Inter + Merriweather)

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
- **Live Server** para desarrollo local

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
6. **Actualizar README.md** principal
7. **Commit y push** con mensaje descriptivo

### Para Actualizaciones
1. **Identificar sección** a actualizar
2. **Mantener consistencia** de estilo
3. **Probar funcionalidad** en diferentes dispositivos
4. **Validar enlaces** y navegación
5. **Actualizar documentación** correspondiente

## 📞 Contacto y Soporte

- **GitHub**: [@MiyoBran](https://github.com/MiyoBran)
- **Proyecto**: Alura ONE G9 - Principiante en Programación
- **Institución**: Alura LATAM + Oracle

---

**Nota**: Este archivo debe actualizarse cada vez que se agreguen nuevos proyectos o se modifique la estructura del portafolio.
