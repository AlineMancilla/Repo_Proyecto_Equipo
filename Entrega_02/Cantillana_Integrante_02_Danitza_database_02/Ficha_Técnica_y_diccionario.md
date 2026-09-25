# Ficha Técnica y Diccionario de Datos: Calidad de zonas verdes

## 1. Ficha técnica
* **Fuente de los datos:** Ministerio de Vivienda y Urbanismo (MINVU) / Catastro de Espacios Públicos y Áreas Verdes.
* **Metodología de construcción:** Levantamiento técnico en terreno realizado por el Estado para catastrar y calificar las condiciones físicas, de vegetación y de equipamiento de plazas y parques.
* **Alcance de los datos:** Cobertura de espacios públicos (parques y plazas) emplazados a lo largo del país.
* **Características de los datos:** Datos de tipo cuantitativo (superficie total en metros cuadrados de cada registro) y cualitativo (Rango de calidad).
* **Limitación del dato:** Representa una evaluación estandarizada en un periodo determinado, por lo que los índices de calidad pueden requerir actualización frente a intervenciones urbanas recientes.

## 2. Diccionario de datos
| Variable | Descripción |
| :--- | :--- |
| `COMUNA` | Nombre de la comuna donde se emplaza el espacio público. |
| `TIPO_EP` | Tipo de espacio público (ej. Parque o Plaza). |
| `SUP_TOTAL_M2` | Superficie total del espacio medida en metros cuadrados. |
| `Bancas_escanos` | Estado o presencia de bancas y escaños en el lugar. |
| `Luminarias` | Evaluación de la presencia y estado del sistema lumínico. |
| `Basureros` | Disponibilidad y estado de los contenedores de basura. |
| `CALIDAD` | Índice ponderado final de calidad del espacio público. |
| `RANGO_CALIDAD` | Categorización del puntaje de calidad en Rango Superior, Intermedio o Inferior. |