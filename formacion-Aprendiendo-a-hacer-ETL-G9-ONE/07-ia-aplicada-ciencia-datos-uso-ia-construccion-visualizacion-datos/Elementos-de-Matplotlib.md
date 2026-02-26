# 📊 Elementos Fundamentales de Matplotlib en Data Science

## Introducción

Matplotlib es la biblioteca estándar de visualización en Python para Data Science. Más allá de crear gráficos básicos, la verdadera potencia radica en personalizar y mejorar la claridad de nuestras visualizaciones mediante elementos específicos. Este documento explora los componentes esenciales de Matplotlib con ejemplos prácticos para proyectos reales.

---

## 🎯 Estructura de un Gráfico en Matplotlib

Antes de adentraremos en los detalles, es importante entender que un gráfico en Matplotlib está compuesto por varios elementos:

```
┌─────────────────────────────────────────┐
│         Figure (Todo el gráfico)        │
│  ┌──────────────────────────────────┐   │
│  │  Axes (Área de ploteo)           │   │
│  │  ┌────────────────────────────┐  │   │
│  │  │  Lines/Bars/Points (Datos) │  │   │
│  │  └────────────────────────────┘  │   │
│  │  X-axis ──────────────────────   │   │
│  │  Y-axis  │                       │   │
│  │  │       Title                   │   │
│  │  │       Legend                  │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 1️⃣ Etiquetas de Ejes: `xlabel()` y `ylabel()`

### ¿Qué es?
Las etiquetas de ejes describen qué mide cada eje. Son **fundamentales** para que cualquiera que vea el gráfico entienda los datos sin necesidad de contexto adicional.

### Mejor Práctica
```python
import matplotlib.pyplot as plt
import numpy as np

# Datos de ejemplo: Ventas de productos por mes
meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
ventas = [150, 220, 180, 310, 280]

plt.figure(figsize=(10, 6))
plt.plot(meses, ventas, marker='o', linewidth=2, color='#14b8a6')

# ✅ BUENA PRÁCTICA: Labels descriptivos con unidades
plt.xlabel('Meses del Año', fontsize=12, fontweight='bold', color='#0f766e')
plt.ylabel('Ventas (USD)', fontsize=12, fontweight='bold', color='#0f766e')

plt.title('Análisis de Ventas Mensuales - Q1 2024', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()
```

### Consejos Importantes
- ✅ Incluir **unidades de medida** (USD, kg, %, etc.)
- ✅ Usar **fontsize consistente** con el resto del gráfico
- ✅ Usar **colores coherentes** con la paleta del proyecto
- ❌ Evitar labels demasiado largos o con abreviaciones crípticas

---

## 2️⃣ Marcas en Ejes: `xticks()` y `yticks()`

### ¿Qué es?
Las marcas (ticks) son los valores mostrados en los ejes. Personalizarlos mejora la legibilidad especialmente cuando tienes muchos datos o valores específicos que quieres destacar.

### Mejor Práctica - Ejes X
```python
import matplotlib.pyplot as plt
import pandas as pd

# Datos: Temperatura promedio por hora
horas = list(range(0, 24))
temperaturas = [15, 14, 13, 12, 12, 13, 15, 18, 22, 25, 28, 30, 
                 31, 30, 29, 28, 26, 24, 22, 20, 18, 17, 16, 15]

plt.figure(figsize=(12, 6))
plt.plot(horas, temperaturas, marker='s', linewidth=2, color='#a3e635')

# ✅ BUENA PRÁCTICA: Mostrar solo horas clave
horas_etiquetas = list(range(0, 24, 3))
horas_nombres = [f'{h:02d}:00' for h in horas_etiquetas]

plt.xticks(horas_etiquetas, horas_nombres, fontsize=10, rotation=45)
plt.yticks(fontsize=10)

plt.xlabel('Hora del Día', fontsize=12, fontweight='bold')
plt.ylabel('Temperatura (°C)', fontsize=12, fontweight='bold')
plt.title('Variación de Temperatura por Hora', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3, linestyle='--')
plt.tight_layout()
plt.show()
```

### Mejor Práctica - Ejes Y
```python
import matplotlib.pyplot as plt

# Datos: Participación de mercado por empresa
empresas = ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D']
participacion = [35, 28, 22, 15]  # Porcentaje

plt.figure(figsize=(10, 6))
barras = plt.bar(empresas, participacion, color=['#14b8a6', '#0f766e', '#a3e635', '#94a3b8'])

# ✅ BUENA PRÁCTICA: Mostrar porcentajes en lugar de decimales
plt.yticks([0, 10, 20, 30, 40], ['0%', '10%', '20%', '30%', '40%'], fontsize=10)

# Agregar valores sobre las barras
for i, (empresa, valor) in enumerate(zip(empresas, participacion)):
    plt.text(i, valor + 1, f'{valor}%', ha='center', fontsize=10, fontweight='bold')

plt.xlabel('Empresas', fontsize=12, fontweight='bold')
plt.ylabel('Participación de Mercado', fontsize=12, fontweight='bold')
plt.title('Cuota de Mercado por Empresa - 2024', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()
```

### Consejos Importantes
- ✅ Usar **solo ticks relevantes** (evitar saturación)
- ✅ **Rotar etiquetas** en X si es necesario (`rotation=45`)
- ✅ Convertir a **formatos legibles** (% en lugar de decimales)
- ✅ Mantener **espaciado uniforme** entre ticks
- ❌ No mostrar más de 8-10 ticks en un eje

---

## 3️⃣ Anotaciones Directas: `text()`

### ¿Qué es?
`text()` permite escribir texto en posiciones específicas del gráfico. Útil para destacar valores clave, conclusiones o puntos de interés.

### Mejor Práctica
```python
import matplotlib.pyplot as plt
import numpy as np

# Datos: Crecimiento de usuarios mensuales
meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
usuarios = [1000, 1500, 2200, 2800, 3500, 4200]

plt.figure(figsize=(10, 6))
plt.plot(meses, usuarios, marker='o', linewidth=2.5, markersize=8, color='#14b8a6')

# ✅ BUENA PRÁCTICA: Anotar valor máximo
max_index = np.argmax(usuarios)
plt.text(max_index, usuarios[max_index] + 200, 
         f'Máximo: {usuarios[max_index]} usuarios',
         ha='center', fontsize=10, fontweight='bold',
         bbox=dict(boxstyle='round,pad=0.5', facecolor='#a3e635', alpha=0.7))

# Anotar tendencia importante
plt.text(3, 3000, 'Crecimiento\nAcelerado', 
         ha='center', fontsize=11, style='italic', color='#0f766e',
         bbox=dict(boxstyle='round', facecolor='yellow', alpha=0.3))

plt.xlabel('Mes', fontsize=12, fontweight='bold')
plt.ylabel('Número de Usuarios', fontsize=12, fontweight='bold')
plt.title('Crecimiento de Usuarios - Primestre 2024', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

### Parámetros Clave
- `x, y`: Coordenadas donde colocar el texto
- `ha`: Alineación horizontal ('left', 'center', 'right')
- `va`: Alineación vertical ('top', 'center', 'bottom')
- `fontsize`: Tamaño del texto
- `fontweight`: Grosor ('normal', 'bold')
- `bbox`: Cuadro de fondo con propiedades

### Consejos Importantes
- ✅ Usar **cajas de fondo** para mejorar legibilidad
- ✅ Anotar solo **valores críticos** o datos destacados
- ✅ Mantener **coherencia de estilos**
- ❌ No sobrecargar el gráfico con demasiadas anotaciones

---

## 4️⃣ Anotaciones Avanzadas: `annotate()`

### ¿Qué es?
`annotate()` es más potente que `text()`. Permite conectar una anotación a un punto específico del gráfico con una flecha, útil para destacar eventos o anomalías.

### Mejor Práctica - Señalando Anomalías
```python
import matplotlib.pyplot as plt

# Datos: Tráfico de sitio web por día
dias = list(range(1, 31))
trafico = [1200, 1350, 1180, 1400, 1350, 1420, 1380, 1500,
           800, 750, 770, 800, 1100, 1250, 1300, 1350,
           2500, 2200, 1900, 1850, 1600, 1400, 1350, 1300,
           1250, 1200, 1150, 1100, 1050, 1000]

plt.figure(figsize=(12, 6))
plt.plot(dias, trafico, marker='o', linewidth=2, color='#14b8a6')

# ✅ BUENA PRÁCTICA: Anotar caída importante
plt.annotate('⚠️ Caída de tráfico\n(Mantenimiento del servidor)',
             xy=(9, 750), xytext=(6, 500),
             arrowprops=dict(arrowstyle='->', color='red', lw=2),
             fontsize=10, fontweight='bold', color='red',
             bbox=dict(boxstyle='round,pad=0.5', facecolor='#ffcccc', alpha=0.8))

# Anotar pico importante
plt.annotate('📈 Mayor tráfico\n(Campaña viral)',
             xy=(17, 2500), xytext=(20, 2800),
             arrowprops=dict(arrowstyle='->', color='green', lw=2),
             fontsize=10, fontweight='bold', color='green',
             bbox=dict(boxstyle='round,pad=0.5', facecolor='#ccffcc', alpha=0.8))

plt.xlabel('Día del Mes', fontsize=12, fontweight='bold')
plt.ylabel('Trafico de Sitio (sesiones)', fontsize=12, fontweight='bold')
plt.title('Análisis de Tráfico Web - Abril 2024', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3, linestyle='--')
plt.tight_layout()
plt.show()
```

### Mejor Práctica - Comparación entre Puntos
```python
import matplotlib.pyplot as plt

# Datos: Precio vs Rendimiento de diferentes modelos
modelos = ['Modelo A', 'Modelo B', 'Modelo C', 'Modelo D']
precio = [500, 800, 1200, 1500]
rendimiento = [75, 82, 89, 95]

plt.figure(figsize=(10, 7))
scatter = plt.scatter(precio, rendimiento, s=300, c=precio, 
                      cmap='viridis', alpha=0.6, edgecolors='black', linewidth=2)

# ✅ BUENA PRÁCTICA: Anotar cada punto
for i, modelo in enumerate(modelos):
    plt.annotate(modelo, 
                 xy=(precio[i], rendimiento[i]),
                 xytext=(10, 10), textcoords='offset points',
                 fontsize=10, fontweight='bold',
                 bbox=dict(boxstyle='round,pad=0.3', facecolor='yellow', alpha=0.5),
                 arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0'))

plt.xlabel('Precio (USD)', fontsize=12, fontweight='bold')
plt.ylabel('Rendimiento (puntos)', fontsize=12, fontweight='bold')
plt.title('Relación Precio vs Rendimiento', fontsize=14, fontweight='bold')
plt.colorbar(scatter, label='Precio')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

### Parámetros Clave
- `xy`: Coordenadas del punto a anotar
- `xytext`: Coordenadas donde aparecerá el texto
- `arrowprops`: Propiedades de la flecha de conexión
- `textcoords`: Sistema de coordenadas ('data', 'offset points', etc.)

### Consejos Importantes
- ✅ Usar **flechas claras** para conectar texto con datos
- ✅ Mantener **distancia apropiada** para evitar solapamientos
- ✅ Usar **colores significativos** (rojo para problemas, verde para éxito)
- ❌ Evitar crear anotaciones que confundan, no que clarifiquen

---

## 5️⃣ Líneas y Elementos Adicionales

### Línea Vertical: `axvline()`
```python
import matplotlib.pyplot as plt

# Datos: Ventas antes y después de campaña
semanas = list(range(1, 13))
ventas = [100, 110, 105, 115, 120, 130, 145, 160, 155, 150, 140, 135]

plt.figure(figsize=(10, 6))
plt.plot(semanas, ventas, marker='o', linewidth=2, color='#14b8a6')

# ✅ Marcar semana de inicio de campaña
plt.axvline(x=6.5, color='red', linestyle='--', linewidth=2, alpha=0.7, label='Inicio Campaña')
plt.text(6.5, 170, 'Campaña\nIniciada', ha='center', fontsize=10, fontweight='bold')

plt.xlabel('Semana', fontsize=12, fontweight='bold')
plt.ylabel('Ventas (USD)', fontsize=12, fontweight='bold')
plt.title('Impacto de Campaña en Ventas', fontsize=14, fontweight='bold')
plt.legend(fontsize=10)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

### Línea Horizontal: `axhline()`
```python
import matplotlib.pyplot as plt

# Datos: Satisfacción de clientes por mes
meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
satisfaccion = [7.5, 7.8, 8.1, 8.0, 8.3, 8.5]
promedio = sum(satisfaccion) / len(satisfaccion)

plt.figure(figsize=(10, 6))
plt.bar(meses, satisfaccion, color='#14b8a6', alpha=0.7, edgecolor='black', linewidth=1.5)

# ✅ Mostrar promedio como línea de referencia
plt.axhline(y=promedio, color='red', linestyle='--', linewidth=2, label=f'Promedio: {promedio:.2f}')

# Anotar el promedio
plt.text(5.5, promedio + 0.1, f'Meta: {promedio:.2f}', ha='right', fontsize=10, fontweight='bold')

plt.ylabel('Satisfacción (1-10)', fontsize=12, fontweight='bold')
plt.title('Índice de Satisfacción de Clientes', fontsize=14, fontweight='bold')
plt.legend(fontsize=10)
plt.ylim(0, 10)
plt.tight_layout()
plt.show()
```

---

## 6️⃣ Cuadrículas: `grid()`

### ¿Qué es?
La cuadrícula ayuda a leer valores precisos del gráfico sin tener que resolver el gráfico mentalmente.

### Mejor Práctica
```python
import matplotlib.pyplot as plt

# Datos: Consumo de energía por hora
horas = list(range(0, 24))
consumo = [30, 25, 20, 18, 15, 20, 35, 50, 60, 55, 50, 45,
           40, 35, 38, 42, 48, 55, 60, 58, 50, 40, 35, 32]

plt.figure(figsize=(12, 6))
plt.plot(horas, consumo, marker='o', linewidth=2, color='#14b8a6')

# ✅ BUENA PRÁCTICA: Cuadrícula moderada
plt.grid(True, alpha=0.3, linestyle='--', linewidth=0.5)  # Sutil
plt.xticks(range(0, 24, 2))

plt.xlabel('Hora del Día', fontsize=12, fontweight='bold')
plt.ylabel('Energía (kWh)', fontsize=12, fontweight='bold')
plt.title('Consumo de Energía - 24 Horas', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()
```

### Consejos Importantes
- ✅ Usar **alpha bajo** (0.2-0.4) para no saturar
- ✅ Usar **líneas discontinuas** (--) para que no compitan con datos
- ✅ Activar solo cuando **ayuda a la lectura**
- ❌ No saturar el gráfico con cuadículas prominentes

---

## 7️⃣ Leyenda: `legend()`

### Mejor Práctica
```python
import matplotlib.pyplot as plt

# Datos: Comparación de ventas de dos regiones
meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
región_norte = [100, 120, 115, 140, 160, 180]
región_sur = [80, 90, 110, 120, 130, 125]

plt.figure(figsize=(10, 6))

# Dos líneas con etiquetas
plt.plot(meses, región_norte, marker='o', linewidth=2, label='Región Norte', color='#14b8a6')
plt.plot(meses, región_sur, marker='s', linewidth=2, label='Región Sur', color='#a3e635')

# ✅ BUENA PRÁCTICA: Leyenda posicionada inteligentemente
plt.legend(loc='upper left', fontsize=11, framealpha=0.95, shadow=True)

plt.xlabel('Mes', fontsize=12, fontweight='bold')
plt.ylabel('Ventas (USD)', fontsize=12, fontweight='bold')
plt.title('Ventas por Región - Primer Semestre', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

### Localizaciones Recomendadas
- `'upper left'`, `'upper right'`, `'lower left'`, `'lower right'`
- `'upper center'`, `'lower center'`
- La **mejor ubicación** es donde hay menos datos

### Consejos Importantes
- ✅ Ubicar leyenda en **área no-conflictiva**
- ✅ Usar `shadow=True` para mejor legibilidad
- ✅ Nombrar series **claramente**
- ❌ No crear leyendas confusas o redundantes

---

## 8️⃣ Títulos y Subtítulos

### Mejor Práctica
```python
import matplotlib.pyplot as plt

# Datos
categorías = ['A', 'B', 'C', 'D', 'E']
valores = [45, 38, 52, 41, 39]

fig, ax = plt.subplots(figsize=(10, 6))
bars = ax.bar(categorías, valores, color='#14b8a6', edgecolor='black', linewidth=1.5)

# ✅ BUENA PRÁCTICA: Título principal y subtítulo
fig.suptitle('Análisis de Rendimiento por Categoría', 
             fontsize=16, fontweight='bold', y=0.98)

ax.set_title('Datos del Q1 2024 - Empresa XYZ', 
             fontsize=12, style='italic', color='gray', pad=20)

ax.set_ylabel('Rendimiento (%)', fontsize=12, fontweight='bold')
ax.set_xlabel('Categoría', fontsize=12, fontweight='bold')

plt.tight_layout()
plt.show()
```

---

## 🎓 Ejemplo Integrado: Proyecto Completo

```python
"""
PROYECTO: Análisis de Datos de Ventas Online
Objetivo: Crear un dashboard simple con visualizaciones profesionales
"""

import matplotlib.pyplot as plt
import numpy as np

# Datos simulados
productos = ['Laptop', 'Mouse', 'Monitor', 'Teclado', 'Webcam']
ventas = [450, 280, 320, 190, 150]
ingresos = [45000, 1400, 9600, 950, 900]

# Crear figura con dos subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# ===== GRÁFICO 1: Ventas por Producto =====
colors = ['#14b8a6', '#0f766e', '#a3e635', '#94a3b8', '#64748b']
bars = ax1.bar(productos, ventas, color=colors, edgecolor='black', linewidth=1.5)

# Agregar valores sobre barras
for i, (bar, venta) in enumerate(zip(bars, ventas)):
    height = bar.get_height()
    ax1.text(bar.get_x() + bar.get_width()/2., height,
             f'{venta} unid.',
             ha='center', va='bottom', fontsize=9, fontweight='bold')

ax1.set_ylabel('Unidades Vendidas', fontsize=11, fontweight='bold')
ax1.set_xlabel('Producto', fontsize=11, fontweight='bold')
ax1.set_title('Ventas por Producto - Marzo 2024', fontsize=12, fontweight='bold')
ax1.grid(True, axis='y', alpha=0.3, linestyle='--')

# ===== GRÁFICO 2: Ingresos por Producto =====
bars2 = ax2.barh(productos, ingresos, color=colors, edgecolor='black', linewidth=1.5)

# Agregar valores en barras horizontales
for i, (bar, ingreso) in enumerate(zip(bars2, ingresos)):
    width = bar.get_width()
    ax2.text(width, bar.get_y() + bar.get_height()/2.,
             f'${ingreso:,.0f}',
             ha='left', va='center', fontsize=9, fontweight='bold', 
             bbox=dict(boxstyle='round,pad=0.3', facecolor='yellow', alpha=0.3))

ax2.set_xlabel('Ingresos (USD)', fontsize=11, fontweight='bold')
ax2.set_title('Ingresos por Producto - Marzo 2024', fontsize=12, fontweight='bold')
ax2.grid(True, axis='x', alpha=0.3, linestyle='--')

# Título general
fig.suptitle('Dashboard de Análisis de Ventas Online', 
             fontsize=16, fontweight='bold', y=1.00)

plt.tight_layout(rect=[0, 0, 1, 0.97])
plt.show()
```

---

## 📋 Checklist: Buenas Prácticas en Matplotlib

### Antes de Presentar tu Gráfico
- [ ] ¿Tiene título descriptivo?
- [ ] ¿Tienen etiquetas los ejes (xlabel, ylabel)?
- [ ] ¿Se muestran unidades de medida?
- [ ] ¿La leyenda está clara y bien posicionada?
- [ ] ¿Los colores son coherentes y profesionales?
- [ ] ¿Se destacan valores o patrones importantes con anotaciones?
- [ ] ¿La cuadrícula no satura ni distrae?
- [ ] ¿El tamaño de fuente es legible?
- [ ] ¿Los ticks son claros y relevantes?
- [ ] ¿El gráfico cumple su objetivo de comunicación?

---

## 🚀 Próximos Pasos

1. **Practica** con tus propios datos
2. **Experimenta** con diferentes tipos de gráficos
3. **Usa IA** (ChatGPT, Copilot) para generar código
4. **Combina elementos** para crear visualizaciones más complejas
5. **Documenta** tus proyectos con README.md detallados

---

## 📚 Recursos Adicionales

- [Documentación oficial de Matplotlib](https://matplotlib.org/)
- [Galería de ejemplos](https://matplotlib.org/stable/gallery/index.html)
- [Tutorial de Pandas + Matplotlib](https://pandas.pydata.org/docs/user_guide/visualization.html)

---

**Autor**: Formación Oracle Next Education (ONE) - Alura LATAM
**Tema**: IA Aplicada a Ciencia de Datos - Construcción de Visualizaciones
**Fecha**: Febrero 2026
