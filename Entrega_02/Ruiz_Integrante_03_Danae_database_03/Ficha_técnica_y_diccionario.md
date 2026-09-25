# Ficha técnica y diccionario de datos

## 1. Fuente de los datos

La base de datos fue construida a partir del documento **“Índice de Prioridad Social de Comunas 2022”**, elaborado por el **Área de Estudios e Inversiones de la Secretaría Regional Ministerial de Desarrollo Social y Familia de la Región Metropolitana de Santiago**, publicado en mayo de 2022.

El Índice de Prioridad Social (IPS) es un indicador compuesto que permite comparar el nivel de desarrollo socioeconómico relativo de las comunas de la Región Metropolitana. El índice considera tres dimensiones: **ingresos, educación y salud**.

**Fuente original:** Secretaría Regional Ministerial de Desarrollo Social y Familia, Región Metropolitana de Santiago.

---

## 2. Metodología de construcción de la base

La base fue construida mediante la extracción y organización de información contenida en el documento oficial del IPS 2022.

En primer lugar, se identificaron las **52 comunas de la Región Metropolitana** incluidas en el documento. Posteriormente, se incorporaron los datos correspondientes al ranking y puntaje del IPS 2022, además de los resultados del IPS 2020 utilizados como referencia comparativa.

Para esta base se utilizó un **formato largo (long format)**. Esto significa que cada comuna puede aparecer más de una vez, ya que cada fila representa una combinación entre una comuna y un indicador. Por ejemplo, una misma comuna tiene una fila para `Poblacion_40pct_RSH_2021_pct` y otra para `Ingreso_imponible_AFC_2020`.

El IPS original utiliza ocho indicadores distribuidos en tres dimensiones: dos indicadores de ingresos, tres de educación y tres de salud. Los indicadores son previamente normalizados en una escala de 0 a 100 y posteriormente se calculan los valores correspondientes a cada dimensión y al índice final.

La metodología original establece que el IPS se obtiene a partir del promedio de los valores estandarizados de las tres dimensiones:

**IPS = (Promedio de Ingresos + Promedio de Educación + Promedio de Salud) / 3**

El valor 100 representa una mayor prioridad social relativa y el valor 0 una menor prioridad social relativa.

---

## 3. Alcance de los datos

La base contempla información correspondiente a las **52 comunas de la Región Metropolitana de Santiago**.

El archivo contiene **104 registros**, correspondientes a:

* 52 comunas.
* 2 observaciones por comuna.
* 2 indicadores actualmente incluidos en la base:

  * Porcentaje de población perteneciente al 40% de menores ingresos según el Registro Social de Hogares.
  * Ingreso imponible promedio de los afiliados vigentes al Seguro de Cesantía.

Además, la base contiene información de contexto sobre el ranking y puntaje del IPS 2022 y 2020.

El período de referencia de los datos no es único, ya que los indicadores originales utilizan distintos años y períodos de medición. Por ejemplo, el porcentaje de población perteneciente al 40% de menores ingresos utiliza información del Registro Social de Hogares, mientras que el ingreso imponible corresponde a información del Seguro de Cesantía.

---

## 4. Características de los datos

Los datos son principalmente **cuantitativos y categóricos**.

Las variables `Rk_IPS_2022` y `Rk_IPS_2020` corresponden a variables numéricas de tipo entero, mientras que `IPS_2022`, `IPS_2020` y `Valor` representan valores numéricos asociados a los indicadores.

La variable `Comuna` corresponde a una variable categórica nominal, ya que identifica a cada comuna de la Región Metropolitana.

La variable `Categoria_IPS_2022` corresponde a una variable categórica ordinal, debido a que clasifica a las comunas en categorías de prioridad social.

La variable `Indicador` permite identificar qué indicador representa el valor contenido en la columna `Valor`.

---

## 5. Otras observaciones

* La base utiliza **formato largo**, por lo que una comuna puede aparecer en varias filas.
* Los nombres de las variables fueron estandarizados utilizando guiones bajos (`_`) para facilitar su utilización en programas como Python, R, Excel o herramientas de visualización.
* Los datos originales utilizan coma como separador decimal. En la versión CSV se recomienda mantener una convención numérica consistente para facilitar el procesamiento computacional.
* El IPS es un indicador **relativo**: su valor permite comparar las comunas entre sí y no debe interpretarse como una medición absoluta de pobreza o desarrollo socioeconómico.
* El documento original considera ocho indicadores para construir el IPS, pero **la base entregada para este análisis contiene actualmente solo dos indicadores en la columna `Indicador`**. Por lo tanto, no se debe afirmar que este CSV contiene todos los indicadores utilizados originalmente para calcular el IPS.
* Los períodos de referencia varían según el indicador, por lo que no corresponde interpretar todos los valores como mediciones realizadas durante el mismo año.
* La clasificación del IPS 2022 se divide en cinco categorías: **Alta Prioridad Social, Media Alta Prioridad Social, Media Baja Prioridad Social, Baja Prioridad Social y Sin Prioridad Social**.

---

# 6. Diccionario de datos

| Variable             | Descripción                                                                                     | Tipo de dato               | Valores posibles                                                                                                             | Observaciones editoriales                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `Comuna`             | Nombre de la comuna de la Región Metropolitana a la que corresponde el registro.                | Categórico nominal / texto | 52 comunas de la Región Metropolitana                                                                                        | Cada comuna puede aparecer varias veces debido al formato largo.                                                            |
| `Rk_IPS_2022`        | Posición de la comuna en el ranking del Índice de Prioridad Social 2022.                        | Numérico entero            | 1–52                                                                                                                         | Un número menor corresponde a una posición más alta en el ranking de prioridad social.                                      |
| `IPS_2022`           | Puntaje del Índice de Prioridad Social correspondiente a 2022.                                  | Numérico                   | Valores entre 0 y 100 aproximadamente                                                                                        | En el archivo CSV los valores pueden requerir conversión de escala para representar correctamente los decimales originales. |
| `Categoria_IPS_2022` | Categoría de prioridad social asignada a la comuna según el IPS 2022.                           | Categórico ordinal         | Alta Prioridad Social; Media Alta Prioridad Social; Media Baja Prioridad Social; Baja Prioridad Social; Sin Prioridad Social | La clasificación corresponde a la categorización presentada en el documento original.                                       |
| `Rk_IPS_2020`        | Posición de la comuna en el ranking del IPS 2020.                                               | Numérico entero            | 1–52                                                                                                                         | Se utiliza como referencia para comparar con el resultado de 2022.                                                          |
| `IPS_2020`           | Puntaje del Índice de Prioridad Social correspondiente a 2020.                                  | Numérico                   | Valores entre 0 y 100 aproximadamente                                                                                        | Permite comparar el valor del índice entre 2020 y 2022.                                                                     |
| `Indicador`          | Identifica el indicador al que corresponde el valor registrado en la variable `Valor`.          | Categórico nominal / texto | `Poblacion_40pct_RSH_2021_pct`; `Ingreso_imponible_AFC_2020`                                                                 | La base actual contiene solamente estos dos indicadores.                                                                    |
| `Valor`              | Valor observado para el indicador especificado en `Indicador` y para la comuna correspondiente. | Numérico                   | Depende del indicador                                                                                                        | Su unidad de medida depende del indicador.                                                                                  |

---

## 7. Indicadores contenidos actualmente en la base

### `Poblacion_40pct_RSH_2021_pct`

Corresponde al porcentaje de población comunal perteneciente al **40% de menores ingresos de la Calificación Socioeconómica (CSE)** considerada por el Registro Social de Hogares (RSH).

Es un indicador de la dimensión **Ingresos** del IPS. Un mayor valor representa una mayor proporción de población ubicada dentro del 40% de menores ingresos.

### `Ingreso_imponible_AFC_2020`

Corresponde al **ingreso promedio imponible de los afiliados vigentes al Seguro de Cesantía**, utilizado como segundo indicador de la dimensión **Ingresos**.

A diferencia del indicador anterior, este indicador tiene una relación inversa con la prioridad social: mayores ingresos representan una mejor situación relativa.

---

## 8. Unidad de análisis

La unidad de análisis principal es la **comuna**.

Sin embargo, debido al formato largo de la base, cada registro representa específicamente la relación:

**Comuna + Indicador + Valor**

Por esta razón, las 52 comunas aparecen dos veces en la base actual, una por cada indicador incluido.
=======
# Ficha técnica y diccionario de datos

## 1. Fuente de los datos

La base de datos fue construida a partir del documento **“Índice de Prioridad Social de Comunas 2022”**, elaborado por el **Área de Estudios e Inversiones de la Secretaría Regional Ministerial de Desarrollo Social y Familia de la Región Metropolitana de Santiago**, publicado en mayo de 2022.

El Índice de Prioridad Social (IPS) es un indicador compuesto que permite comparar el nivel de desarrollo socioeconómico relativo de las comunas de la Región Metropolitana. El índice considera tres dimensiones: **ingresos, educación y salud**.

**Fuente original:** Secretaría Regional Ministerial de Desarrollo Social y Familia, Región Metropolitana de Santiago.

---

## 2. Metodología de construcción de la base

La base fue construida mediante la extracción y organización de información contenida en el documento oficial del IPS 2022.

En primer lugar, se identificaron las **52 comunas de la Región Metropolitana** incluidas en el documento. Posteriormente, se incorporaron los datos correspondientes al ranking y puntaje del IPS 2022, además de los resultados del IPS 2020 utilizados como referencia comparativa.

Para esta base se utilizó un **formato largo (long format)**. Esto significa que cada comuna puede aparecer más de una vez, ya que cada fila representa una combinación entre una comuna y un indicador. Por ejemplo, una misma comuna tiene una fila para `Poblacion_40pct_RSH_2021_pct` y otra para `Ingreso_imponible_AFC_2020`.

El IPS original utiliza ocho indicadores distribuidos en tres dimensiones: dos indicadores de ingresos, tres de educación y tres de salud. Los indicadores son previamente normalizados en una escala de 0 a 100 y posteriormente se calculan los valores correspondientes a cada dimensión y al índice final.

La metodología original establece que el IPS se obtiene a partir del promedio de los valores estandarizados de las tres dimensiones:

**IPS = (Promedio de Ingresos + Promedio de Educación + Promedio de Salud) / 3**

El valor 100 representa una mayor prioridad social relativa y el valor 0 una menor prioridad social relativa.

---

## 3. Alcance de los datos

La base contempla información correspondiente a las **52 comunas de la Región Metropolitana de Santiago**.

El archivo contiene **104 registros**, correspondientes a:

* 52 comunas.
* 2 observaciones por comuna.
* 2 indicadores actualmente incluidos en la base:

  * Porcentaje de población perteneciente al 40% de menores ingresos según el Registro Social de Hogares.
  * Ingreso imponible promedio de los afiliados vigentes al Seguro de Cesantía.

Además, la base contiene información de contexto sobre el ranking y puntaje del IPS 2022 y 2020.

El período de referencia de los datos no es único, ya que los indicadores originales utilizan distintos años y períodos de medición. Por ejemplo, el porcentaje de población perteneciente al 40% de menores ingresos utiliza información del Registro Social de Hogares, mientras que el ingreso imponible corresponde a información del Seguro de Cesantía.

---

## 4. Características de los datos

Los datos son principalmente **cuantitativos y categóricos**.

Las variables `Rk_IPS_2022` y `Rk_IPS_2020` corresponden a variables numéricas de tipo entero, mientras que `IPS_2022`, `IPS_2020` y `Valor` representan valores numéricos asociados a los indicadores.

La variable `Comuna` corresponde a una variable categórica nominal, ya que identifica a cada comuna de la Región Metropolitana.

La variable `Categoria_IPS_2022` corresponde a una variable categórica ordinal, debido a que clasifica a las comunas en categorías de prioridad social.

La variable `Indicador` permite identificar qué indicador representa el valor contenido en la columna `Valor`.

---

## 5. Otras observaciones

* La base utiliza **formato largo**, por lo que una comuna puede aparecer en varias filas.
* Los nombres de las variables fueron estandarizados utilizando guiones bajos (`_`) para facilitar su utilización en programas como Python, R, Excel o herramientas de visualización.
* Los datos originales utilizan coma como separador decimal. En la versión CSV se recomienda mantener una convención numérica consistente para facilitar el procesamiento computacional.
* El IPS es un indicador **relativo**: su valor permite comparar las comunas entre sí y no debe interpretarse como una medición absoluta de pobreza o desarrollo socioeconómico.
* El documento original considera ocho indicadores para construir el IPS, pero **la base entregada para este análisis contiene actualmente solo dos indicadores en la columna `Indicador`**. Por lo tanto, no se debe afirmar que este CSV contiene todos los indicadores utilizados originalmente para calcular el IPS.
* Los períodos de referencia varían según el indicador, por lo que no corresponde interpretar todos los valores como mediciones realizadas durante el mismo año.
* La clasificación del IPS 2022 se divide en cinco categorías: **Alta Prioridad Social, Media Alta Prioridad Social, Media Baja Prioridad Social, Baja Prioridad Social y Sin Prioridad Social**.

---

# 6. Diccionario de datos

| Variable             | Descripción                                                                                     | Tipo de dato               | Valores posibles                                                                                                             | Observaciones editoriales                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `Comuna`             | Nombre de la comuna de la Región Metropolitana a la que corresponde el registro.                | Categórico nominal / texto | 52 comunas de la Región Metropolitana                                                                                        | Cada comuna puede aparecer varias veces debido al formato largo.                                                            |
| `Rk_IPS_2022`        | Posición de la comuna en el ranking del Índice de Prioridad Social 2022.                        | Numérico entero            | 1–52                                                                                                                         | Un número menor corresponde a una posición más alta en el ranking de prioridad social.                                      |
| `IPS_2022`           | Puntaje del Índice de Prioridad Social correspondiente a 2022.                                  | Numérico                   | Valores entre 0 y 100 aproximadamente                                                                                        | En el archivo CSV los valores pueden requerir conversión de escala para representar correctamente los decimales originales. |
| `Categoria_IPS_2022` | Categoría de prioridad social asignada a la comuna según el IPS 2022.                           | Categórico ordinal         | Alta Prioridad Social; Media Alta Prioridad Social; Media Baja Prioridad Social; Baja Prioridad Social; Sin Prioridad Social | La clasificación corresponde a la categorización presentada en el documento original.                                       |
| `Rk_IPS_2020`        | Posición de la comuna en el ranking del IPS 2020.                                               | Numérico entero            | 1–52                                                                                                                         | Se utiliza como referencia para comparar con el resultado de 2022.                                                          |
| `IPS_2020`           | Puntaje del Índice de Prioridad Social correspondiente a 2020.                                  | Numérico                   | Valores entre 0 y 100 aproximadamente                                                                                        | Permite comparar el valor del índice entre 2020 y 2022.                                                                     |
| `Indicador`          | Identifica el indicador al que corresponde el valor registrado en la variable `Valor`.          | Categórico nominal / texto | `Poblacion_40pct_RSH_2021_pct`; `Ingreso_imponible_AFC_2020`                                                                 | La base actual contiene solamente estos dos indicadores.                                                                    |
| `Valor`              | Valor observado para el indicador especificado en `Indicador` y para la comuna correspondiente. | Numérico                   | Depende del indicador                                                                                                        | Su unidad de medida depende del indicador.                                                                                  |

---

## 7. Indicadores contenidos actualmente en la base

### `Poblacion_40pct_RSH_2021_pct`

Corresponde al porcentaje de población comunal perteneciente al **40% de menores ingresos de la Calificación Socioeconómica (CSE)** considerada por el Registro Social de Hogares (RSH).

Es un indicador de la dimensión **Ingresos** del IPS. Un mayor valor representa una mayor proporción de población ubicada dentro del 40% de menores ingresos.

### `Ingreso_imponible_AFC_2020`

Corresponde al **ingreso promedio imponible de los afiliados vigentes al Seguro de Cesantía**, utilizado como segundo indicador de la dimensión **Ingresos**.

A diferencia del indicador anterior, este indicador tiene una relación inversa con la prioridad social: mayores ingresos representan una mejor situación relativa.

---

## 8. Unidad de análisis

La unidad de análisis principal es la **comuna**.

Sin embargo, debido al formato largo de la base, cada registro representa específicamente la relación:

**Comuna + Indicador + Valor**

Por esta razón, las 52 comunas aparecen dos veces en la base actual, una por cada indicador incluido.
>>>>>>> 32eca4f4a497fad4681b68f14542a18357db93c2
