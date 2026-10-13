## Cómo se realizó
Quería que fuera un gráfico donde a simple vista se pueda identificar la diferencia en la cantidad de áreas verdes por comuna, creo que un gráfico de barras es una de las mejores opciones en este caso. Elegí ese gráfico desde Altair porque también permite algo de interactividad: si se pasa sobre las barras da la cantidad exacta de áreas verdes, que complementa el eje Y. Además, si se presiona sobre alguna de las barras resalta por sobre el resto. 


![alt text](![alt text](image.png))

![alt text](![alt text](c:\Users\aline\OneDrive\Imágenes\Capturas de pantalla\Captura de pantalla 2026-10-13 183324.png))



En base al código del gráfico de Altair adicionalmente le pedía ayuda a la IA para agregar los elementos de interactividad.  

El gráfico está basado en los datos de la base de datos de la entrega 2 que tiene como nombre “Aline_database_limpia.csv” cuyo contenido son la cantidad de áreas verde por persona en metros cuadrados en las comunas urbanas del Gran Santiago. El único cambio es que para realizar el gráfico no considere la columna “CLASIFICACIÓN PNDR” ya que no otorgaba información relevante (ya que se explicita que estamos trabajando con esas 41 comunas) 