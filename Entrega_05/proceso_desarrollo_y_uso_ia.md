## Síntesis del proceso completo de desarrollo
Comenzamos la investigación con la idea de exponer desigualdades territoriales entre comunas de Santiago. Para no “hacer más de lo mismo” y hablar de niveles socioeconómicos, decidimos enfocar la investigación en la desigualdad de áreas verdes. Acotamos aún más la investigación a 41 comunas que corresponden a comunas urbanas del Gran Santiago (ya que consideramos que poner comunas rurales no sería representativo debido a la cantidad de áreas verdes). Para demostrar o refutar nuestra hipótesis incluimos tres bases de datos: la primera sobre la cantidad de metros cuadrados de áreas verdes por persona en cada comuna, la segunda sobre la calidad de las áreas verdes y la tercera sobre el nivel de prioridad social según ingresos socioeconómicos. Quisimos que las visualizaciones fueran lo más simples de entender teniendo como foco principal el impacto en la audiencia y que el dato fuera el protagonista.

## Especificación breve de lo que la webstory debía comunicar y cómo debía comportarse
La webstory debía informar al usuario respecto a la desigualdad territorial respecto a las áreas verdes, que es un problema que puede ver en su día a día y que merece prestarle atención. 

## Registro de los principales encargos realizados a herramientas de IA o vibecoding
Principalmente la implementación de la IA vino al momento de querer hacer modificaciones a las visualizaciones exportadas desde altair. Cómo se puede ver en entregas anteriores, las visualizaciones en un inicio eran gráficos de barras simples, la IA nos ayudó a añadir los elementos de interactividad y diseño a las visualizaciones. 

También se usó para crear la web, replicamos lo practicado en clases con la tarea 3 y modificamos el prompt con las características de nuestro reportaje. 

## Cambios realizados por el equipo sobre el código generado o sugerido
Principalmente los cambios fueron para cambiar la estética de las visualizaciones, se insertaros los png de los pictogramas usados (árbol, monedas, etc) y también para modificar los tamaños de los iconos. Y, como mencionamos anteriormente, los códigos de color que también ya habíamos definido en nuestro manual de identidad visual. 

## Problemas encontrados, iteraciones y soluciones aplicadas
Nuestros principales problemas giraron entorno a las visualizaciones, primero a qué se exportaran de forma correcta desde altair, segundo a qué la IA fuera capaz de aplicar los cambios necesarios para que cambiará las barras por pictogramas, que aplicará los códigos de color de nuestro manual de identidad. Lo que más demoró fue adecuar el tamaño de los pictogramas de las visualizaciones ya que tuvimos varios intentos fallidos donde se sobre ponían unos con otros, o eran muy grandes y tapaban las leyendas. Pero logramos, en parte, entender las fallas que exigía el código para poder arreglarlo.

## Pruebas finales de contenido
Hasta este momento la página puede ver todas las visualizaciones y los elementos interactivos funcionan, también se logró implementar el manual de identidad visual respetando los colores y tipografías. Sin embargo, la lectura en celulares no está de todo correcta, en parte porque no nos enfocamos en este dispositivo, siempre lo pensamos como una webstory vista desde un computador.

## Identificación de las decisiones que fueron tomadas directamente por los integrantes
Decidimos todo respecto al foco y la estética del reportaje (incluyendo tipografías, colores, iconos, logo, etc). También respecto a las bases de datos utilizadas para que estuvieran en función de comprobar o refutar nuestra hipótesis. También fue una decisión que las visualizaciones se complementaras y se añadieran en contexto unas con otras para crear una narrativa pensando en los tipos de usuario que establecimos. Finalmente, la IA se hizo presente como una ayuda para cambiar aspectos de los scripts de las visualizaciones o para la creación del HTML de la página.