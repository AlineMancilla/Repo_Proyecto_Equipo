# Documentación: Historial de procesos y decisiones

## 1. Proceso de limpieza y construcción de la base de datos

El objetivo del proceso de limpieza fue transformar la información presentada en el documento original del **Índice de Prioridad Social de Comunas 2022 (IPS)** en una base estructurada, consistente y utilizable para el análisis periodístico.

El proceso se realizó en varias etapas: identificación de la fuente, revisión de la información disponible, selección de variables, extracción de los datos, organización de las columnas, estandarización de nombres, revisión de tipos de datos y control de consistencia.

### 1.1. Identificación y revisión de la fuente

La fuente principal utilizada fue el documento **“Índice de Prioridad Social de Comunas 2022”**, elaborado por el Área de Estudios e Inversiones de la Secretaría Regional Ministerial de Desarrollo Social y Familia de la Región Metropolitana de Santiago.

Antes de extraer los datos, revisé la estructura completa del documento para identificar qué tablas e indicadores eran relevantes para nuestro análisis. Esto fue necesario porque la información no estaba presentada originalmente como una base de datos única, sino distribuida en diferentes tablas.

El documento contiene información de las **52 comunas de la Región Metropolitana** y considera indicadores relacionados con las dimensiones de **ingresos, educación y salud**. Además, presenta el ranking y puntaje del IPS 2022 y datos del IPS 2020 que permiten realizar comparaciones entre ambos períodos.

Una consideración importante fue que los indicadores no necesariamente corresponden al mismo año. Por ejemplo, existen variables construidas con información de 2021, 2020, 2019 y otros períodos. Por esta razón, se mantuvo el período de referencia de cada indicador en el nombre de las variables cuando correspondía.

---

### 1.2. Selección de los datos

Después de revisar el documento, seleccionamos los datos que podían ser utilizados para nuestro reportaje y que permitían establecer comparaciones entre las distintas comunas.

La unidad de análisis utilizada fue la **comuna**. Se trabajó con las 52 comunas incluidas en el IPS.

Entre las variables consideradas se encuentran:

* Comuna.
* Ranking IPS 2022.
* Puntaje IPS 2022.
* Categoría de prioridad social.
* Ranking IPS 2020.
* Puntaje IPS 2020.
* Porcentaje de población perteneciente al 40% de menores ingresos según el Registro Social de Hogares.
* Ingreso imponible promedio de los afiliados al Seguro de Cesantía.
* Indicadores educacionales.
* Indicadores relacionados con salud.

La selección buscó conservar información suficiente para realizar análisis comparativos, sin incorporar variables que no tuvieran una utilidad clara para el objetivo del reportaje.

---

### 1.3. Extracción y organización

Una vez identificadas las variables, los datos fueron trasladados desde las tablas del documento a una estructura tabular.

El formato principal utilizado fue **CSV**, ya que permite almacenar los datos de manera estructurada y puede ser utilizado tanto en programas de hojas de cálculo como en herramientas de análisis y visualización.

La primera organización se realizó utilizando una fila por comuna. Posteriormente, para determinados análisis, se utilizó también un **formato largo**, en el que cada fila representa una combinación entre una comuna, un indicador y su valor.

Por ejemplo, una misma comuna puede aparecer en dos filas cuando se consideran los indicadores:

`Poblacion_40pct_RSH_2021_pct`

e

`Ingreso_imponible_AFC_2020`

Esta transformación permite trabajar con los indicadores de manera más flexible y facilita la generación de tablas dinámicas y visualizaciones.

---

### 1.4. Estandarización de nombres

Uno de los pasos de limpieza consistió en estandarizar los nombres de las variables.

Se eliminaron espacios y se utilizaron guiones bajos para separar palabras. También se incorporó información temporal en los nombres cuando era necesaria para identificar correctamente el período del indicador.

Por ejemplo:

`Poblacion_40pct_RSH_2021_pct`

permite identificar que la variable corresponde al porcentaje de población perteneciente al 40% de menores ingresos según el Registro Social de Hogares y que utiliza información correspondiente a 2021.

De manera similar:

`Ingreso_imponible_AFC_2020`

identifica el ingreso imponible asociado al Seguro de Cesantía y su período de referencia.

Esta estandarización facilita el uso de la base en herramientas como Excel, Python, R y otras plataformas de análisis de datos.

---

### 1.5. Revisión de valores numéricos

Durante la limpieza se revisaron especialmente los valores numéricos, ya que algunos datos extraídos de las tablas podían presentar problemas relacionados con los separadores decimales.

Por ejemplo, un puntaje del IPS presentado originalmente como **88,03** debía conservarse como 88,03. Si el separador decimal no se interpretaba correctamente durante la conversión, podía transformarse erróneamente en un valor como 8803.

Por esta razón, se revisó que los puntajes del IPS mantuvieran su escala original de aproximadamente 0 a 100.

También se diferenciaron las unidades de medida de cada indicador. Esto fue importante porque un porcentaje, un puntaje del IPS y un ingreso monetario no pueden ser tratados de la misma manera.

Los ingresos se mantuvieron como valores monetarios, mientras que los porcentajes y puntajes conservaron sus respectivas escalas.

---

### 1.6. Revisión de comunas

Otro aspecto de la limpieza fue revisar que los nombres de las comunas fueran consistentes.

Esto es particularmente importante cuando se combinan diferentes tablas, porque una diferencia mínima en el nombre de una comuna puede impedir que dos registros sean reconocidos como correspondientes al mismo territorio.

Se revisaron nombres como **Til-Til**, además de caracteres especiales presentes en nombres como **Peñalolén, Ñuñoa y María Pinto**, para evitar inconsistencias durante el procesamiento.

También se verificó que estuvieran representadas las **52 comunas de la Región Metropolitana**.

---

### 1.7. Revisión de duplicados y estructura

La existencia de varias filas para una misma comuna no necesariamente representa un error, ya que depende del formato utilizado.

En el formato largo, por ejemplo, una comuna puede aparecer varias veces porque cada fila representa un indicador diferente. Por lo tanto, no se eliminaron registros simplemente por encontrar nombres de comuna repetidos.

En cambio, se revisó que las repeticiones tuvieran una razón asociada al indicador correspondiente.

Esta decisión fue importante para no eliminar información válida durante el proceso de limpieza.

---

## 2. Herramientas utilizadas

Para realizar el proceso se utilizaron principalmente las siguientes herramientas:

### Documento PDF

El documento del IPS 2022 fue utilizado como **fuente primaria** para identificar, extraer y verificar los datos.

### CSV

El formato CSV fue utilizado como estructura principal para almacenar la base limpia. Se eligió porque es un formato abierto, liviano y compatible con distintas herramientas de análisis.

### Herramientas de procesamiento de datos

Se utilizaron herramientas de procesamiento de datos para ordenar las columnas, revisar valores, estandarizar nombres, transformar formatos y verificar la consistencia de los registros.

### GitHub

GitHub fue utilizado para almacenar y organizar los archivos correspondientes al proyecto. La utilización de un repositorio permite mantener una estructura ordenada y facilita la trazabilidad de los archivos utilizados durante el desarrollo del reportaje.

---

## 3. Decisiones tomadas durante la limpieza

Una de las principales decisiones fue **mantener los valores originales siempre que fuera posible**, realizando modificaciones únicamente relacionadas con la estructura y el formato de los datos.

También decidimos mantener los períodos de referencia de los indicadores, ya que eliminarlos podía generar una interpretación incorrecta de la información.

Otra decisión fue separar claramente el **ranking** del **puntaje IPS**. El ranking representa la posición relativa de una comuna entre las 52 comunas consideradas, mientras que el puntaje corresponde al valor obtenido por la comuna en el índice.

También mantuvimos la categoría de prioridad social porque permite realizar análisis agrupados sin tener que calcular nuevamente la clasificación.

En cuanto al formato, utilizamos nombres de variables estandarizados para facilitar su procesamiento posterior.

Finalmente, cuando encontramos diferencias entre la forma en que aparecía un dato en el documento y la forma en que podía ser interpretado en un archivo CSV, se priorizó la representación que conservara el significado y la escala original del dato.

---

## 4. Fuentes de datos utilizadas

La fuente principal fue el **Índice de Prioridad Social de Comunas 2022**, elaborado por la Secretaría Regional Ministerial de Desarrollo Social y Familia de la Región Metropolitana.

Se eligió esta fuente porque corresponde al documento original en el que se presentan los indicadores utilizados para construir el IPS y porque permite conocer tanto los valores como las definiciones y períodos de referencia de los datos.

La utilización de la fuente primaria también permite verificar los datos de la base y mantener la trazabilidad del proceso de extracción.

No se utilizaron fuentes secundarias para reemplazar los datos del documento original. Las fuentes secundarias pueden ser útiles como contexto, pero para la construcción de la base se priorizó la información proveniente directamente del documento oficial.

---

## 5. Preguntas que se pueden responder con la base limpia

La base permite formular distintas preguntas de carácter periodístico y descriptivo. Algunas de ellas son:

### Pregunta 1: ¿Cómo se distribuyen las comunas según su nivel de prioridad social?

Esta pregunta puede responderse utilizando las variables `Comuna`, `IPS_2022` y `Categoria_IPS_2022`.

Una tabla dinámica permitiría contar cuántas comunas pertenecen a cada categoría de prioridad social y comparar la distribución entre categorías.

---

### Pregunta 2: ¿Qué relación existe entre el porcentaje de población perteneciente al 40% de menores ingresos y el IPS?

Para responder esta pregunta se pueden cruzar las variables `Poblacion_40pct_RSH_2021_pct` e `IPS_2022`.

Se puede ordenar la información por comuna y comparar ambos valores. También se podría construir un gráfico de dispersión para observar la relación entre ambas variables.

---

### Pregunta 3: ¿Cómo cambiaron las posiciones de las comunas entre el IPS 2020 y el IPS 2022?

Esta pregunta utiliza `Rk_IPS_2020` y `Rk_IPS_2022`.

Al comparar ambos rankings es posible identificar los cambios de posición de cada comuna entre los dos períodos.

También se pueden comparar `IPS_2020` e `IPS_2022` para analizar los cambios en los puntajes del índice.

---

### Pregunta 4: ¿Cómo se relacionan los ingresos imponibles con el nivel de prioridad social de las comunas?

Para esta pregunta se pueden utilizar `Ingreso_imponible_AFC_2020` e `IPS_2022`.

La base permite ordenar las comunas según su ingreso imponible y posteriormente comparar esos resultados con el puntaje o ranking del IPS.

---

### Pregunta 5: ¿Qué diferencias existen entre las comunas de la Región Metropolitana según sus indicadores sociales?

La base permite comparar distintas variables entre las 52 comunas. Esto permite analizar diferencias territoriales y buscar patrones entre indicadores de ingresos, educación, salud y prioridad social.

Una tabla dinámica puede utilizar `Comuna` como fila y diferentes indicadores como valores, permitiendo comparar las características de las comunas en una misma estructura.

---
