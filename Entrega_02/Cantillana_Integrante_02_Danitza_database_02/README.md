# Documentación del Proceso de Datos: Calidad de Zonas Verdes
El presente documento consigna el registro histórico de los procesos, decisiones metodológicas y herramientas utilizadas para el manejo de la base de datos de calidad de zonas verdes en las comunas urbanas de la Región Metropolitana. Su propósito es garantizar la transparencia, trazabilidad y replicabilidad del trabajo periodístico de investigación.

## 1. Procesos y limpieza
El tratamiento de los datos raw se estructuró de la siguiente forma:
* **Herramientas utilizadas:** Microsoft Excel para la revisión inicial y Python (Google Colab con Pandas) para la carga y validación final del archivo en formato `.csv`.
* **Filtros territoriales:** Se aislaron los registros correspondientes al ámbito urbano de la Región Metropolitana para mantener la coherencia con los parámetros de comparación socioeconómica del reportaje.
* **Depuración estructural:** Se validó la correcta lectura del archivo delimitado por punto y coma (`;`) y se conservaron las variables clave de superficie, equipamiento e índices de calidad, asegurando que no existieran saltos erróneos de línea en los campos descriptivos extensos.

## 3. Preguntas respondidas con la base Limpia
1. ¿Cómo se distribuyen los parques y plazas según su categoría de `RANGO_CALIDAD` (Superior, Intermedio, Inferior) a nivel comunal?
2. ¿Qué comunas presentan mayores déficit de infraestructura básica (como luminarias o basureros en mal estado o ausentes)?
3. ¿Existe correlación directa entre la superficie total de un espacio verde (`SUP_TOTAL_M2`) y su puntaje ponderado de `CALIDAD`?