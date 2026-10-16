## Cómo se realizó

La idea detrás de este gráfico era evidenciar de una forma muy visual que el problema de las áreas verdes en Santiago no es solo cuántos metros cuadrados hay, sino en qué condiciones se encuentran. Por eso elegí un gráfico de barras ordenado de mayor a menor, ya que permite comparar el estándar de calidad y equipamiento entre las comunas. Usé Altair porque, además de dar una estructura limpia, le suma interactividad: si pones el cursor encima de las barras, muestra el número exacto del índice de calidad, lo que ayuda un montón a complementar la lectura del gráfico sin llenarlo de números fijos.

Para este trabajo usé la misma base de datos limpia de la entrega pasada (los registros del MINVU sobre los espacios públicos de Santiago). Para armar este gráfico específico filtramos y nos quedamos con las columnas clave: la comuna y el puntaje de calidad, que incluye variables de mantenimiento, luminarias y estado general, dejando fuera los datos que no sumaban para este análisis de infraestructura.

Para resolver algunos detalles técnicos con el código (como ordenar bien las barras y darle más espacio vertical a los nombres de las comunas para que no quedaran amontonadas), me apoyé en herramientas de IA para ajustar la visualización en Python.


### Preguntas que se pueden responder:  

¿Cómo evalúan los datos el estado real de los parques y plazas en una comuna en particular? 

¿Qué comunas se quedan con los mejores estándares de mantenimiento y equipamiento urbano? 

¿Cuáles son las comunas que muestran peores índices de abandono en sus espacios públicos? 

¿Se nota una diferencia clara en la calidad del verde urbano dependiendo de la comuna?