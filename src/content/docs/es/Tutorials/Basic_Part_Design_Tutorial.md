---
title: Tutorial básico de Part Design 0.17
---

|                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutorial                                                                                                                                                         |
| Tema                                                                                                                                                             |
| Modeling                                                                                                                                                         |
| Nivel                                                                                                                                                            |
| Beginner                                                                                                                                                         |
| Tiempo para completar                                                                                                                                            |
| Less than an hour                                                                                                                                                |
| Autores                                                                                                                                                          |
| HarryGeier ([HarryGeier](/index.php?title=User:HarryGeier&action=edit&redlink=1 "User:HarryGeier (page does not exist)"))                                        |
| Versión de FreeCAD                                                                                                                                               |
| 0.17 or higher                                                                                                                                                   |
| Archivos de ejemplos                                                                                                                                             |
| [Basic Part Design for v0.17](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd) |
| Ver también                                                                                                                                                      |
| _None_                                                                                                                                                           |
|                                                                                                                                                                  |

Este tutorial presenta al nuevo usuario algunas de las herramientas y técnicas utilizadas en [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench"). Este tutorial no es una guía completa de Part Design Workbench y muchas de las herramientas y capacidades no están cubiertas. Este tutorial llevará al usuario a través de los pasos necesarios para modelar la parte que se muestra en la siguiente imagen usando "sketches".

![](/images/Tut17_final_refined.png)

Un video de todo el proceso esta aquí: <https://youtu.be/geIrH1cOCzc>

(cada sección tiene su propio video dividido a continuación)

## Antes de comenzar

## The Task

## La tarea

En este tutorial, utilizará el Ambiente de trabajo Part Design para crear un modelo sólido 3D de la pieza que se muestra en [Drawing](/Drawing_Workbench "Drawing Workbench") a continuación. Se dan todas las dimensiones necesarias para completar esta tarea. Comenzarás por crear una forma central a partir de un boceto base y luego construir sobre esa forma, agregando lo que se conoce como "Características". Estas características agregarán material o eliminarán material del sólido mediante el uso de sketches adicionales y las operaciones de funciones que lo acompañan. Este tutorial no usará todas las características y herramientas disponibles dentro del Ambiente de trabajo Part Design, pero debe usar lo suficiente para brindar al usuario de este tutorial una base mínima sobre la cual desarrollar sus conocimientos y habilidades.

## La Pieza

![](/images/Tutorial_Drawing_Sheet.png)

## Constructing The Part

### Startup

## Construyendo la pieza

### Puesta en marcha

Primero, asegúrese de estar en el Anbiente de trabajo Part Design. Una vez allí, querrá crear un nuevo documento si aún no lo ha hecho. Es un buen hábito guardar su trabajo a menudo, así que antes de nada guarde el nuevo documento, dándole el nombre que guste.

Todo el trabajo en Part Design comienza con un [Body](/Glossary#Body "Glossary"). Luego construiremos el sólido dentro del cuerpo comenzando con un [sketch](/Glossary#Sketch "Glossary").

1. Haga clic en ![](/images/PartDesign_Body.png) [Create new body](/PartDesign_Body "PartDesign Body") para crear y activar un nuevo contenedor de cuerpo. "Nota: este paso puede ser omitido. Al crear un boceto, si no se encuentra un cuerpo existente, se creará y activará automáticamente uno nuevo".
2. Haga clic en ![](/images/PartDesign_NewSketch.png) [Create new sketch](/PartDesign_NewSketch "PartDesign NewSketch"). Esto creará el boceto/sketch dentro del cuerpo recién creado.
3. Necesitamos definir dónde se adjuntará el boceto/sketch. Lo adjuntaremos a un plano desde el [Origin](/Glossary#Origin "Glossary") del Cuerpo.
4. En la pestaña Tareas de la vista Combo, seleccione **YZ_Plane** en la lista y presione OK:

5. Click on ![](/images/PartDesign_Body.svg) [Create new body](/PartDesign_Body "PartDesign Body") to create and activate a new Body Container. _Note: this step can be omitted. When creating a sketch, if no existing Body is found, a new one will be automatically created and activated._
6. Click on ![](/images/PartDesign_NewSketch.svg) [Create new sketch](/PartDesign_NewSketch "PartDesign NewSketch"). This will create the sketch within the just created body.
7. We need to define where the sketch will be attached. We will attach it to a plane from the Body´s [Origin](/Glossary#Origin "Glossary").
8. In the [Tasks tab](/Task_panel "Task panel") from the [Combo view](/Combo_view "Combo view"), select **YZ_Plane** in the list and press OK:

![](/images/Tut17_sketchplanes.png)

"Nota: es posible que el botón OK no esté visible si el panel lateral no es lo suficientemente ancho. Puede hacerlo más ancho arrastrando su borde derecho. Coloque el puntero del mouse sobre el borde; cuando el puntero se convierta en una flecha bidireccional, mantenga presionado el botón izquierdo del mouse y arrastre".

Una vez que hace clic en Aceptar, FreeCAD cambia automáticamente a [Sketcher workbench](/Sketcher_Workbench "Sketcher Workbench") y abre el boceto/sketch en modo de edición:

![](/images/Tut17_sketcherempty.png)

### Create the sketch

### Crear el Sketch

A continuación, deberá usar la herramienta ![](/images/Sketcher_CreatePolyline.png) [Polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") y hacer una forma más o menos así en la imagen siguiente. No necesita ser perfecto ya que la forma final se hace con restricciones. Una vez que tenga la forma básica, comenzaremos a aplicar las restricciones. Si tenía restricciones automáticas activadas, algunas de estas restricciones se aplicarán automáticamente, de lo contrario, haga lo siguiente.

_NOTE: Since this tutorial was written there have been improvements to the sketcher solver, if it detects a redundant constraint it will turn the sketch orange in colour, and before further constraints are added, the redundant constraint should be removed. (The redundant constraint is shown in the Task view, click on the blue reference and press delete.)_

1. Seleccione las dos líneas horizontales con el mouse haciendo clic en ellas, y una vez seleccionada, haga clic en la restricción horizontal ![](/images/Constraint_Horizontal.png).
2. Seleccione la línea vertical a la derecha y luego haga clic en la restricción vertical ![](/images/Constraint_Vertical.png).
3. Seleccione los puntos de inicio y fin de su polilínea y haga clic en la restricción de coincidencia ![](/images/Sketcher_ConstrainCoincident.png) para cerrar la polilínea.
4. Seleccione la línea horizontal inferior y la línea vertical derecha y aplique ![](/images/Sketcher_ConstrainEqual.png) restricción de igualdad.
5. Seleccione la línea horizontal o vertical y aplique la correspondiente restricción de distancia vertical ![](/images/Sketcher_ConstrainDistanceX.png) horizontal o ![](/images/Sketcher_ConstrainDistanceY.png) y asígnele un valor de 26 mm .
6. Seleccione la línea horizontal superior y aplique la restricción de distancia horizontal y asígnele un valor de 5 mm
7. Seleccione el punto inferior derecho, (vertice) de la línea horizontal Origen y luego el punto central de la cuadrícula y aplique la restricción de coincidencia ![](/images/Sketcher_ConstrainCoincident.png) para fijar la forma.

En este punto, debe tener un boceto totalmente restringido, tal como lo indica el cambio de color y el mensaje que se muestra en la vista combinada. Ahora debería verse exactamente como la imagen de abajo.

![](/images/Tut17B_profile.png)

Ahora en la vista combinada, haga clic en el botón Cerrar para salir del modo de edición de bocetos y seleccione ![](/images/PartDesign_Pad.png) Pad desde la barra de herramientas o desde el menú Part Disign. Esto le dará un diálogo de Pad en la Combo View. Usando ese diálogo, primero usando el menú desplegable Tipo, seleccione dos dimensiones. El dibujo presentado al comienzo de este tutorial muestra que la pieza mide 53 mm de largo. Lo hacemos rellenando nuestro boceto en ambos sentidos desde el plano central para compensar esa distancia, es decir, hacer que el pad sea simétrico en relación con el plano de boceto. La razón de esto se ve más adelante al crear otros rasgos. Por ahora, dado que queremos que tenga 53 mm de longitud en total, ingresaremos 26.5 para Longitud y 26.5 nuevamente para la segunda longitud. Alternativamente, puede proporcionar una longitud única de 53 mm y hacer clic en la casilla de verificación simétrica al plano. Una vez hecho esto, ahora tenemos nuestra base sólida sobre la cual agregaremos características adicionales para construir nuestra pieza.

Un video de los pasos utilizados en esta parte del tutorial está aquí:
<https://youtu.be/cUyPnCMeTgg>

### Features with pocket and external geometry

### Funciones con hueco y geometría externa

Con el mouse o los iconos de la vista, gire el modelo para que pueda ver su parte posterior. Una vez que la parte posterior de la parte esté visible, seleccione la cara posterior haciendo clic en ella como se ve en la siguiente imagen.

![](/images/PD_WB_Tutorial003.png)

Después de seleccionar la cara, haga clic en el ícono Nuevo boceto en la barra de herramientas o en el menú Part Design y eso correlacionará nuestro siguiente boceto con la cara posterior de la pieza. Ahora seleccione la herramienta de rectángulo ![](/images/Sketcher_CreateRectangle.png) y coloque un rectángulo en la cara posterior de la pieza de forma similar a la que se muestra a continuación. Ahora, siguiendo los pasos enumerados, restrinja el boceto.

1. Seleccione una de las líneas horizontales y aplique una restricción de distancia horizontal y un valor de 5 mm.
2. Seleccione una de las líneas verticales y asígnele una restricción de distancia vertical y un valor de 11 mm.
3. Utilice ![](/images/Sketcher_External.png) Herramienta de geometría externa y seleccione el vértice superior derecho de la cara y haga clic en él para que se le proporcione un punto de la geometría externa para vincular nuestro boceto.

![](/images/Tut17_slot_unconstrained.png)

1. Right click to end the External geometry mode
2. Select that point you just made available with the External geometry tool and then select the upper right vertex of the rectangle and click on the ![](/images/Sketcher_ConstrainCoincident.svg) [Constrain coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"). At this point the sketch should be fully constrained and look like the next image.

![](/images/Tut17_slote_constrained.png)

Una vez hecho esto, haga clic en el botón Cerrar en la parte superior de la pestaña Tareas en la ventana de Combo View, luego seleccione ![](/images/PartDesign_Pocket.png) Herramienta Pocket/hueco de la barra de herramientas o del menú Part Design. Usar esta herramienta es lo opuesto a la herramienta Pad. A medida que la herramienta Pad agrega material a la pieza, la herramienta Pocket/hueco elimina el material de la pieza. Ambas operaciones se llaman "features". En esta operación de hueco, queremos seleccionar "A través de todo" en el menú desplegable y luego hacer clic en el botón Aceptar.

Para la próxima operación, asegúrese de que esté seleccionado "Pocket/hueco" en la vista Model tree y, una vez hecho, haga clic en ![](/images/PartDesign_Mirrored.png) la función Espejo en la barra de herramientas o desde el menú Part Design. En el cuadro de diálogo Espejo en el Combo View, seleccione Eje de boceto horizontal en el Plane pulldown menu. Luego haz clic en OK. La función Mirror funciona de esta manera porque la característica base de nuestro modelo fue implementada en ambos sentidos desde el plano horizontal en la primera operación con el boceto base. Si todo ha ido bien, ahora deberías tener una parte que se parece a la imagen de abajo después de que orbites alrededor del frente.

![](/images/Tut17_profilewithslots.png)

Un video de los pasos utilizados en esta parte del tutorial está aquí:
<https://youtu.be/wiGXV9G7mrM>

### Features with pad and external geometry

### Funciones con pad y geometría externa

Después de echar un vistazo, orbitar alrededor y una vez más seleccionar la cara posterior de la pieza y seleccionar esa cara para mapear el siguiente boceto.

![](/images/Tut17_profilewithslotsrearplane.png)

Seleccione Nuevo boceto y haga un nuevo rectángulo de similar manera a la que se muestra a continuación en la siguiente imagen. Luego proceda a agregar restricciones dimensionales al rectángulo.

1. Seleccione una línea horizontal y aplique una restricción de distancia horizontal con un valor de 16.7.
2. Seleccione una línea vertical y aplique una restricción de distancia vertical de 7 mm
3. Utilizando la herramienta de geometría externa, seleccione el vértice superior izquierdo de la cara de la pieza.

![](/images/Tut17_sidblockunconstrained.png)

Ahora seleccionando el vértice superior izquierdo del rectángulo y el punto de geometría externa, haga clic en la restricción coincidente para restringir completamente el boceto.

![](/images/Tut17_sideblockconstraind.png)

Close the Sketcher.

A continuación, haremos clic en la función Pad y en el cuadro de diálogo Pad, en la vista combinada, queremos una longitud de 26 mm, dejando el tipo como dimensión y luego marcando la casilla Invertir. El uso de la casilla de verificación Invertido hará que el Pad entre en la pieza en lugar de alejarse de ésta. Esta operación proporciona el siguiente resultado.

![](/images/Tut17_sideblock.png)

Una vez más, use la función Espejo para obtener la segunda pad. Primero asegúrese de que el Pad creado esté seleccionado en la vista en árbol, luego haga clic en Espejo en la barra de herramientas para seleccionarlo desde el menú Part Desgin. Repetiremos la operación que hicimos para Pocket/hueco arriba y seleccionaremos el eje de croquis horizontal en el menú desplegable del Plano.

![](/images/Tut17_profilewithsideblocks.png)

Un video de los pasos utilizados en esta parte del tutorial está aquí:
<https://youtu.be/Ido1owp8ubc>

### Feature with pocket and external geometry

### Detalles con pocket/hueco y geometría externa

En este punto, orbitando la parte que está al frente, podemos ver que nuestra parte ahora está empezando a parecerse a la parte del dibujo acotado al comienzo de este tutorial. Una vez que tenga la vista del frente, haga clic en la cara inclinada con el mouse para seleccionar la cara que usaremos para el siguiente boceto.

![](/images/Tut17_innerplane.png)

Aquí utilizaremos la herramienta rectangular y colocaremos un rectángulo en nuestro boceto y, una vez hecho esto, aplicaremos las siguientes restricciones.

1. Seleccione una línea horizontal y una línea vertical, y después de que ambos estén seleccionados, haga clic en la restricción Igual.
2. Seleccione una línea horizontal o vertical y aplique la restricción de distancia horizontal o vertical correspondiente con un valor de 17 mm
3. Usando la herramienta de geometría externa, seleccione el vértice superior derecho como se muestra en la imagen a continuación.

![](/images/Tut17_rechtangleholeunconstrained.png)

Ahora usando las dimensiones del dibujo, aplique las siguientes restricciones.

1. Seleccione el punto de geometría externa y el vértice superior derecho del ahora cuadrado boceto y aplique una restricción de distancia horizontal de 7 mm
2. Seleccione el punto de geometría externa y el vértice superior derecho del ahora cuadrado boceto y aplique una restricción de distancia vertical de 11 mm

El resultado debería ser el siguiente.

![](/images/Tut17_rectangleholeconstrained.png)

En este punto, si tuviéramos que simplemente ahuecar este boceto, el orificio resultante sería perpendicular a la cara inclinada a la que está asignado, y esto no es lo que queremos.

![](/images/Tut17_wrongplaneforpocket.png)

Queremos que el orificio sea perpendicular a la cara posterior, pero las dimensiones proyectadas no son las dimensiones de 17 mm x 17 mm que se dan en el dibujo. Ahora, podemos hacer los cálculos y calcular las dimensiones necesarias, o podemos usar las herramientas provistas en FreeCAD para hacer esa proyección para nosotros.

Un video de los pasos utilizados en esta parte del tutorial está aquí:
<https://youtu.be/x4d5nZPWCLQ>

Para crear un hueco que tenga el rectángulo inclinado como salida, dibujamos un nuevo rectángulo en la parte posterior, usando la proyección del rectángulo inclinado como referencia externa.
Orbita el sólido alrededor para ver la cara posterior de la parte una vez más y selecciona la cara posterior para mapear el boceto final.

![](/images/Tut17_profilewithsideblocksrearplane.png)

Seleccione \*_Nuevo boceto_- ![](/images/PartDesign_NewSketch.png) desde la barra de herramientas o el menú Part Design. Ahora en el modo de edición de bosquejos, no vemos el rectángulo esbozado de la pendiente. Para que sea seleccionable, cambiamos la ventana Combo View a la pestaña Modelo y seleccionamos el último boceto realizado (Sketch003) en el plano inclinado. Luego, usando la barra espaciadora, hazla visible. Luego, seleccione la función de espejo arriba (mirrored001) y nuevamente usando la barra espaciadora, escóndalo. Entonces deberías ver el rectángulo dentro de la Vista 3D. Puede continuar trabajando con la pestaña del modelo visible o volver a la pestaña de tareas. Usando la herramienta de geometría externa ![](/images/Sketcher_External.png), seleccione los bordes horizontales superior e inferior del rectángulo inclinado.

![](/images/Tut17_rectangleunconstrained.png)

1. Seleccione el vértice superior izquierdo del rectángulo y el punto superior izquierdo de la geometría externa y haga clic en la restricción de coincidencia.
2. Haga clic en el vértice inferior derecho del rectángulo y en el punto inferior derecho de la geometría externa y haga clic en la restricción de coincidencia.

Y deberíamos terminar con esto.

![](/images/Tut17_rectangleconstrained.png)

Para el último paso de este tutorial, cierre la ventana del sketcher usando la edición close o fish editing desde el menú contextual de sketch004 y luego seleccione la función Pocket/hueco de ![](/images/PartDesign_Pocket.png) desde la barra de herramientas o desde el menú Part Design. Desde el menú desplegable Type, seleccione **A través de todos** y haga clic en el botón Aceptar.

![](/images/Tut17_final.png)

En este punto, verá algunas líneas que provienen de las características de intersección. En este caso, el "bloque lateral" se cruza con el "perfil base", lo que permite que aparezca como un bloque triangular sobre el perfil. Para eliminar estas líneas, puede activar "refinar la forma" en la configuración de diseño de la pieza o, para ahorrar algo de velocidad de procesamiento y aún tener estas líneas durante la construcción, enciéndala individualmente en cada detalle, lo que creará dichas líneas. El ajuste en el nivel de Feature se puede hacer en la pestaña "datos" de la Feature. Establezca la **_refine_ property** en TRUE para invocar el refinado.

![](/images/Tut17_refine.png)

![](/images/Tut17_final_refined.png)

Un video de estos pasos del tutorial está aquí:
<https://youtu.be/UYI0gvxCYeI>

Este tutorial y tu modelo están completos.

## Recursos Adicionales

- Archivo de FreeCAD para comparación (hecho con 0.17) [Descarga](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial/es&oldid=1351660>"
