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

![Gráfico de Columnas](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/01_columnas_metodos_pago.webp)

**Ventajas:**
- Fácil de interpretar
- Excelente para comparar categorías
- Permite mostrar múltiples series de datos

**Desventajas:**
- Puede resultar confuso con muchas categorías
- No es ideal para series temporales largas

### Gráfico de Barras Horizontales
El gráfico de barras horizontales es ideal cuando queremos presentar las categorías a la izquierda de forma horizontal, siendo la forma más fluida de leer textos que puedan ser extensos. El enfoque de este tipo de gráfico está primero en la categoría de los datos y, en segundo lugar, en los valores numéricos.

![Gráfico de Barras Horizontales](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/02_barras_horizontales_facturacion_categoria.webp)

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

![Columnas Agrupadas](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/03_columnas_agrupadas_facturacion_region_sexo.webp)

**Ventajas:**
- Permite comparar múltiples series fácilmente
- Muestra valores absolutos claramente
- Ideal para comparaciones lado a lado

**Desventajas:**
- Puede resultar abarrotado con muchas series
- Difícil de leer con más de 3-4 grupos

### Columnas Apiladas
Un gráfico de columnas apiladas es útil cuando queremos añadir a la comparación entre periodos o categorías, la comparación dentro de cada una. Este tipo de gráfico permite observar la composición de cada columna según la variable deseada (por ejemplo, las preferencias de consumo de café o té).

![Columnas Apiladas](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/04_columnas_apiladas_facturacion_trimestre_metodo.webp)

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

![Gráfico de Línea](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/05_linea_ventas_mensuales.webp)

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

![Gráfico de Pastel](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/06_pastel_proporcion_sexo.webp)

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

![Gráfico de Dona](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/07_dona_cashback.webp)

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

![Histograma](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/08_histograma_notas.webp)

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

![Scatter Plot](https://raw.githubusercontent.com/MiyoBran/Alura-ONE-G9/main/formacion-Aprendiendo-a-hacer-ETL-G9-ONE/07-ia-aplicada-ciencia-datos-uso-ia-construccion-visualizacion-datos/graficos_zoop/09_scatter_edad_nota.webp)

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

# 🎨 Principios de Diseño Visual para Gráficos

Más allá de elegir el tipo de gráfico correcto, la calidad visual es esencial para la comunicación efectiva. Existen tres pilares fundamentales del diseño visual que garantizan gráficos profesionales y legibles.

## 1. Uso Correcto de Colores

El color es uno de los elementos más poderosos en visualización de datos. Su uso correcto requiere dos parámetros clave:

### Contraste
El contraste es la diferencia entre colores en comparación. Contrastes fuertes = colores más diferenciados; contrastes débiles = colores muy similares.

**Importancia:**
- Colores similares dificultan la identificación de elementos en el gráfico
- El contraste insuficiente reduce la legibilidad especialmente en gráficos de pastel o dona
- Un buen contraste permite que cada elemento se destaque correctamente

**Mejores prácticas:**
- Evita usar colores muy similares en serie
- Asegura que todos los colores tengan suficiente separación visual
- Valida en escala de grises para verificar que se sigan distinguiendo los elementos

### Consistencia
En proyectos con múltiples gráficos, debe existir un patrón cromático consistente.

**Importancia:**
- Proporciona cohesión visual al conjunto de materiales
- Transmite profesionalismo y atención al detalle
- Facilita que el lector reconozca patrones entre gráficos

**Mejores prácticas:**
- Define una paleta de colores al inicio del proyecto
- Usa los mismos colores para las mismas categorías en todos los gráficos
- Mantén coherencia: si "Ventas" es azul en un gráfico, debe serlo en todos

---

## 2. Tipografía Legible

El texto en los gráficos (títulos, etiquetas, leyendas) debe ser fácil de leer. Dos atributos son críticos:

### Tamaño de Fuente

| Contexto | Tamaño Mínimo |
|----------|---------------|
| Impreso (papel) | 10 pt |
| Presentación digital | 20 pt |
| Web/Pantalla | 14-16 pt |
| Proyector | 32 pt o mayor |

**Recomendación:** Cuando dudes, aumenta el tamaño. Es mejor que el texto sea demasiado grande a que sea ilegible.

### Estilo de Fuente

**Evitar:**
- ❌ Tipografías muy ornamentadas
- ❌ Cursivas en extensiones largas
- ❌ Estilos con características excesivamente acentuadas
- ❌ Múltiples familias tipográficas diferentes

**Preferir:**
- ✅ Familias tipográficas simples y limpias (Arial, Helvetica, Roboto, Open Sans)
- ✅ Sans-serif para gráficos digitales
- ✅ Consistencia de fuentes en todo el proyecto
- ✅ Máximo dos familias tipográficas

**Ejemplo:**
- Bueno: "Ventas Q1" en Arial regular
- Malo: "Ventas Q1" en script cursiva ornamentada

---

## 3. Jerarquía de la Información

En comunicación visual, **no todo puede ser importante al mismo tiempo**. Si intentas destacar todo, terminas sin destacar nada.

### Principio Clave
Define **1 a 2 elementos como protagonistas** y permite que el resto juegue un papel de apoyo.

### Implementación Práctica

**Controla los Colores:**
- ✅ Usa colores "fuertes" o llamativos SOLO para los elementos principales
- ✅ Colores más neutrales o apagados para elementos secundarios
- ❌ Evita usar múltiples colores saturados (rojo, turquesa, amarillo limón juntos)

**Controla la Tipografía:**
- ✅ **Título:** Grande, bold, contraste alto
- ✅ **Datos principales:** Tamaño medio, legible
- ✅ **Leyendas/Etiquetas:** Pequeño pero legible
- ❌ No hagas todo igual de grande o del mismo peso visual

**Ejemplo de Jerarquía:**
```
TÍTULO PRINCIPAL                    ← Más grande, más contraste
Eje Y: "Ganancias ($)"             ← Tamaño normal
[Datos visuales]
Categoría A  Categoría B  Categoría C  ← Más pequeño
```

**Antes (Saturado) vs Después (Optimizado):**
- Antes: Muchos colores fuertes, tipografía inconsistente, todo destaca
- Después: Paleta limitada, tipografía ordenada, solo los datos protagonizan

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