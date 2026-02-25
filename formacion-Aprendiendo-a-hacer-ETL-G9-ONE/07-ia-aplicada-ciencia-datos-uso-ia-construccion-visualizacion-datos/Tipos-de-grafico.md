# Tipos de Gráficos en Análisis de Datos

## Introducción

La visualización de datos es una habilidad fundamental en el análisis. La elección del tipo de gráfico adecuado depende de:

- **Tipo de dato:** Numérico, categórico, temporal, proporcional
- **Objetivo:** Comparar, mostrar tendencias, identificar proporciones, correlaciones
- **Cantidad de variables:** Una, dos, tres o más dimensiones
- **Contexto:** Informe, presentación, exploración de datos

En esta guía revisaremos los principales tipos de gráficos, cuándo usarlos, sus ventajas y desventajas, y ejemplos prácticos de su aplicación.

## Gráfico de Columnas y Barras Horizontales

### Gráfico de Columnas
Un gráfico de columnas es ideal para representar valores numéricos de una o más categorías de datos, sean discretas o de intervalos definidos. Facilita una comparación rápida y directa entre diferentes categorías, siendo uno de los gráficos más utilizados en informes y presentaciones.

![Ejemplo de Gráfico de Columnas](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Matplotlib_bar_chart.png/400px-Matplotlib_bar_chart.png)

**Ventajas:**
- Fácil de interpretar
- Excelente para comparar categorías
- Permite mostrar múltiples series de datos

**Desventajas:**
- Puede resultar confuso con muchas categorías
- No es ideal para series temporales largas

### Gráfico de Barras Horizontales
El gráfico de barras horizontales es ideal cuando queremos presentar las categorías a la izquierda de forma horizontal, siendo la forma más fluida de leer textos que puedan ser extensos. El enfoque de este tipo de gráfico está primero en la categoría de los datos y, en segundo lugar, en los valores numéricos.

![Ejemplo de Gráfico de Barras Horizontales](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Matplotlib_horizontal_bar_chart.png/400px-Matplotlib_horizontal_bar_chart.png)

**Ventajas:**
- Mejor legibilidad de etiquetas largas
- Más natural para textos en idiomas horizontales
- Facilita comparaciones visuales

**Cuándo usarlo:**
- Cuando los nombres de categorías son largos
- Para rankings o clasificaciones
- Cuando hay muchas categorías

## Gráfico de Columnas Agrupadas y Apiladas

### Columnas Agrupadas
Un gráfico de columnas agrupadas es ideal cuando queremos comparar diferentes categorías respecto a una variable, mostrando cómo los valores se comparan dentro de cada categoría (por ejemplo, trimestres) en columnas separadas (por ejemplo, productos A, B y C) y entre los diferentes grupos, facilitando la visualización de patrones y diferencias entre ellos.

![Ejemplo de Gráfico de Columnas Agrupadas](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Matplotlib_grouped_bar_chart.png/400px-Matplotlib_grouped_bar_chart.png)

**Ventajas:**
- Permite comparar múltiples series fácilmente
- Muestra valores absolutos claramente
- Ideal para comparaciones lado a lado

**Desventajas:**
- Puede resultar abarrotado con muchas series
- Difícil de leer con más de 3-4 grupos

### Columnas Apiladas
Un gráfico de columnas apiladas es útil cuando queremos añadir a la comparación entre periodos o categorías, la comparación dentro de cada una. Este tipo de gráfico permite observar la composición de cada columna según la variable deseada (por ejemplo, las preferencias de consumo de café o té).

![Ejemplo de Gráfico de Columnas Apiladas](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matplotlib_stacked_bar_chart.png/400px-Matplotlib_stacked_bar_chart.png)

**Ventajas:**
- Muestra composición dentro de cada categoría
- Facilita ver el total por categoría
- Menos espacio visual que columnas agrupadas

**Cuándo usarlo:**
- Para mostrar composición de un total
- Cuando los subtotales son relevantes
- Para analizar proporciones dentro de grupos

## Gráfico de Línea

Los gráficos de línea son ideales para representar tendencias a lo largo del tiempo o una secuencia ordenada. Cuando se tiene una gran cantidad de periodos, vale la pena usar gráficos de líneas para representar series temporales.

![Ejemplo de Gráfico de Línea](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Matplotlib_line_chart.png/400px-Matplotlib_line_chart.png)

**Ventajas:**
- Excelente para mostrar tendencias temporales
- Facilita identificar puntos de inflexión o cambios
- Permite comparar múltiples series simultáneamente

**Desventajas:**
- No es ideal para pocas categorías o datos aislados
- Puede ser engañoso si no se usan escalas correctas

### Múltiples Series Temporales

Los gráficos de líneas pueden añadir una variable categórica a los análisis, permitiendo la comparación de series temporales en períodos de tiempo cortos o largos. Por ejemplo, se puede observar la facturación por región dividida por trimestres de un año. Es posible comparar las facturaciones en cada región en diferentes momentos utilizando solo una visualización.

**Cuándo usarlo:**
- Análisis de series temporales
- Seguimiento de tendencias
- Comparación de evoluciones en el tiempo
- Proyecciones y forecasting

## Gráfico de Pastel y de Dona

### Gráfico de Pastel (Pie Chart)
El gráfico de pastel se usa para representar proporciones de diferentes categorías o partes de un todo. Es ideal para composiciones estáticas, ya sea por valores numéricos o porcentajes.

![Ejemplo de Gráfico de Pastel](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pie_chart.svg/400px-Pie_chart.svg.png)

**Ventajas:**
- Intuitivo para mostrar composición porcentual
- Visualmente atractivo
- Fácil de entender para audiencias no técnicas

**Desventajas:**
- Difícil comparar valores similares
- No es ideal con muchas categorías
- Los ángulos pueden ser difíciles de interpretar

**Buenas prácticas:**
- Usar máximo 5 categorías
- Evitar proporciones muy similares
- Ordenar por tamaño de mayor a menor

### Gráfico de Dona (Donut Chart)
El gráfico de dona es una alternativa moderna al gráfico de pastel, adecuado cuando queremos reducir la superficie colorida, pasando a utilizar coronas circulares. Ambos gráficos son ideales para pocas categorías de datos.

![Ejemplo de Gráfico de Dona](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Donut_chart.svg/400px-Donut_chart.svg.png)

**Ventajas:**
- Menos abrumador visualmente que pastel
- Permite mostrar información adicional en el centro
- Mismo uso que gráfico de pastel

**Cuándo usarlo:**
- Cuando se necesita mostrar proporciones de un total
- Presupuestos o distribución de recursos
- Composición de mercado

## Gráfico de Cascada

Los gráficos de cascada se usan para visualizar ajustes incrementales a un valor inicial, lo que los hace ideales para ver flujos o fluctuaciones de valores numéricos a lo largo del tiempo.

**Ventajas:**
- Muestra cómo cambian los valores paso a paso
- Facilita seguimiento de cambios positivos y negativos
- Excelente para explicar variaciones de totales

**Desventajas:**
- Puede resultar complejo de interpretar
- No es ideal para comparaciones simples

**Cuándo usarlo:**
- Análisis de variaciones presupuestarias
- Explicación de cambios en ingresos o costos
- Flujos de efectivo o waterfall analysis
- Descomposición de cambios agregados

## Histograma

Los histogramas se utilizan para observar la distribución de los datos en un intervalo dado. Estos intervalos, llamados "bins", muestran cuántas observaciones caen dentro de esa franja.

![Ejemplo de Histograma](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Histogram_of_arrivals_per_minute.svg/400px-Histogram_of_arrivals_per_minute.svg.png)

**Ventajas:**
- Muestra distribución de frecuencias claramente
- Facilita identificar patrones de dispersión
- Ideal para análisis de normalidad

**Desventajas:**
- Requiere elegir el número correcto de bins
- Puede ser engañoso con bins mal elegidos
- No permite comparar múltiples distribuciones fácilmente

**Conceptos clave:**
- **Bins/Intervalos:** Rangos de valores agrupados
- **Frecuencia:** Cantidad de observaciones en cada bin
- **Distribución:** patrón de los datos (normal, sesgada, bimodal)

**Cuándo usarlo:**
- Análisis de distribuciones de variables
- Detección de outliers o anomalías
- Validar supuestos de normalidad
- Comprender el rango y dispersión de datos

## Gráfico de Dispersión (Scatter Plot)

Los gráficos de dispersión se utilizan para representar la relación o distribución entre dos variables numéricas. Cada punto en el gráfico representa una combinación de coordenadas, facilitando la identificación de patrones, tendencias y correlaciones importantes para el aprendizaje automático y análisis exploratorio.

![Ejemplo de Gráfico de Dispersión](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Scatter_plot.svg/400px-Scatter_plot.svg.png)

**Ventajas:**
- Muestra correlaciones entre variables claramente
- Facilita identificar outliers y patrones
- Ideal para análisis de relaciones

**Desventajas:**
- Puede resultar abarrotado con muchos datos
- Difícil ver patrones con gran cantidad de puntos superpuestos
- Solo compara dos variables a la vez

**Variantes:**
- **Scatter + tamaño:** Añade tercera dimensión con tamaño de punto
- **Scatter + color:** Añade categoría con colores
- **Bubble chart:** Combina tamaño y color para más dimensiones

**Cuándo usarlo:**
- Análisis de correlación entre variables
- Identificación de outliers
- Exploración de relaciones no lineales
- Validación de hipótesis de relación

---

# Guía de Selección: Qué Gráfico Usar en Análisis de DataFrames

## Matriz de Decisión por Tipo de Análisis

### 1. **Comparación de Categorías**
| Tipo de Comparación | Gráfico Recomendado | Ejemplo |
|---|---|---|
| Valores por categoría | Columnas o Barras | Ventas por región |
| Múltiples métricas por categoría | Columnas Agrupadas | Ventas vs Ganancias por región |
| Composición del total | Columnas Apiladas | Desglose de ingresos por producto |
| Proporciones simples | Pastel o Dona | Distribución de mercado (%) |

### 2. **Análisis Temporal**
| Tipo de Análisis | Gráfico Recomendado | Ejemplo |
|---|---|---|
| Tendencia única | Línea | Precio de acción en el tiempo |
| Múltiples series | Línea múltiple | Ventas de varios productos |
| Cambios incrementales | Cascada | Variación de presupuesto |
| Distribución en tiempo | Histograma | Frecuencia de transacciones/hora |

### 3. **Análisis de Relaciones y Distribuciones**
| Tipo de Análisis | Gráfico Recomendado | Ejemplo |
|---|---|---|
| Relación entre 2 variables | Dispersión | Edad vs Ingresos |
| Relación + tercera variable | Bubble Chart | Edad vs Ingresos vs Cliente |
| Distribución de frecuencias | Histograma | Distribución de salarios |
| Densidad de distribución | KDE Plot | Curva de distribución normal |

---

## Casos de Uso Comunes en Análisis de DataFrames

### Análisis Exploratorio de Datos (EDA)

**1. Entender la Distribución de Variables**
```python
# Para variables numéricas
df['variable'].hist()  # Histograma
df.boxplot()          # Box plot

# Para variables categóricas
df['categoria'].value_counts().plot(kind='barh')  # Barras horizontales
```

**2. Identificar Relaciones entre Variables**
```python
# Correlación entre 2 variables numéricas
df.plot.scatter(x='var1', y='var2')

# Comparar distribuciones por grupo
df.boxplot(column='variable', by='grupo')
```

### Análisis por Categorías

**3. Comparar Grupos o Segmentos**
```python
# Totales por categoría
df.groupby('categoria')['valor'].sum().plot(kind='bar')

# Múltiples métricas por categoría
df.groupby('categoria')[['ventas', 'ganancias']].sum().plot(kind='bar')

# Composición dentro de cada grupo
df.groupby('categoria')['subcategoria'].value_counts().unstack().plot(kind='bar', stacked=True)
```

### Análisis Temporal

**4. Seguimiento de Tendencias**
```python
# Tendencia a lo largo del tiempo
df.set_index('fecha')['valor'].plot(kind='line')

# Múltiples series temporales
df.set_index('fecha').groupby('grupo')['valor'].plot()

# Cambios mes a mes
df.set_index('fecha')['valor'].resample('M').sum().plot()
```

### Análisis de Concentración y Proporciones

**5. Mostrar Composición Un Total**
```python
# Proporciones simples
df['categoria'].value_counts().plot(kind='pie')

# Composición por período
df.groupby(['periodo', 'categoria']).size().unstack().plot(kind='bar', stacked=True)
```

---

## Recomendaciones Finales

### Mejores Prácticas en Visualización

1. **Simplicidad:** Menos es más. Evita gráficos innecesariamente complejos.

2. **Contexto:** Siempre proporciona título, etiquetas de eje y unidades.

3. **Color:** Usa colores significativos:
   - Rojo/Verde para ganancias/pérdidas
   - Gradientes para variables continuas
   - Colores distintos para categorías

4. **Escalas:** Verifica que las escalas no sean engañosas:
   - No excluyas el cero sin razón válida
   - Usa escalas consistentes para comparaciones justas

5. **Volumen de Datos:**
   - Menos de 100 filas: Tablas o gráficos simples
   - 100-1000 filas: Visualizaciones estándar
   - Más de 1000 filas: Agregación + gráficos

### Preguntarse Antes de Graficar

- ¿Cuál es el mensaje principal?
- ¿Qué acción se espera del visualizador?
- ¿Es el gráfico más efectivo que una tabla?
- ¿Necesita más de un gráfico para contar la historia?

---

**Recuerda:** La mejor visualización es la que comunica claramente el insight sin ambigüedades.