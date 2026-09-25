# Documentación
Para hacer la limpieza y el análisis de los datos se tomaron en cuenta los parámetros que como grupo decidimos iban a estar orientados a responder nuestra hipótesis, enfocándonos en la calidad, el estado y el equipamiento de los espacios públicos de las comunas urbanas de la Región Metropolitana.

## 1. Procesos y limpieza
El tratamiento de los datos raw se estructuró de la siguiente forma:
* **Herramientas utilizadas:** Microsoft Excel para la revisión inicial y Python para la carga y validación final del archivo en formato `.csv`.
* **Filtros:** Se aislaron los registros correspondientes al ámbito urbano de la RM para mantener la coherencia con los parámetros de comparación socioeconómica del reportaje.
* **Extra:** Se validó la correcta lectura del archivo delimitado por punto y coma (`;`) y se conservaron las variables clave de superficie, equipamiento e índices de calidad, asegurando que no existieran saltos erróneos de línea en los campos descriptivos extensos.

## 2. Preguntas respondidas con la base limpia
¿Cómo se distribuyen los parques y plazas según su categoría (Superior, Intermedio o Inferior) en las comunas urbanas? Permite identificar qué comunas concentran los espacios públicos mejor evaluados y cuáles tienen una mayor proporción de áreas verdes deterioradas.

¿Qué comunas presentan mayores problemas de infraestructura básica (como luminarias o basureros en mal estado o ausentes)? Permite cruzar variables de equipamiento urbano para evidenciar las deficiencias físicas de los espacios públicos según el sector.