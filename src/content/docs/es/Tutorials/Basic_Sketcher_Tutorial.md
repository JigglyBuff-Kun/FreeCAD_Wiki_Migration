---
title: Tutorial Básico Croquizador
---
|  |
| --- |
| Tutorial |
| Tema |
| Croquizador |
| Nivel |
| Principiante |
| Tiempo para completar |
| 60 minutos |
| Autores |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) y vocx |
| Versión de FreeCAD |
| 0.19 |
| Archivos de ejemplos |
| [Basic Sketcher tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| Ver también |
| *None* |
|  |

## Introducción

Este tutorial fue escrito originalmente por Drei, y fue reescrito e ilustrado por vocx.

Este tutorial pretende introducir al lector en el flujo de trabajo básico del ![](/images/Workbench_Sketcher.svg) [Ambiente de trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es").

El [Ambiente de trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") existe como un módulo independiente, por lo que puede ser utilizado para dibujar objetos genéricos en 2D (planos). Sin embargo, se utiliza principalmente junto con el ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo de DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es"). Un croquis cerrado se utiliza normalmente para crear una cara o un perfil que se extruirá en un [cuerpo](/PartDesign_Body/es "PartDesign Body/es") sólido con una operación como ![](/images/PartDesign_Pad.svg) [DiseñoPiezas Pastilla](/PartDesign_Pad/es "PartDesign Pad/es").

El lector practicará:

* La creación de geometría de construcción
* Creación de geometría real
* Aplicación de restricciones geométricas
* Aplicación de restricciones de datos
* Obtención de un perfil cerrado

Para una descripción más profunda del croquizador, lee la [Referencia del croquizador](/index.php?title=Sketcher_reference/es&action=edit&redlink=1 "Sketcher reference/es (page does not exist)").

![](/images/00_Sk01_Sketcher_fully_constrained_final.png)

Resultado final del croquis, con toda la geometría totalmente restringida, incluida la geometría de construcción para el soporte.

## Instalación

1. Abre FreeCAD, crea un nuevo documento vacío con **Archivo → ![](/images/Std_New.svg) [Nuevo](/Std_New/es "Std New/es")**.

:   1.1. Cambie al [Ambiente de trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") desde el [selector ambiente de trabajo](/Std_Workbench/es "Std Workbench/es"), o el menú **[Vista](/Std_View_Menu/es "Std View Menu/es") → Ambiente de trabajo → Croquizador**.

Algunas acciones para recordar:

* Pulsar el botón derecho del ratón, o pulsar Esc en el teclado una vez, para deseleccionar la herramienta activa en el modo de edición.
* Para salir del modo de edición de croquis, pulse el botón Cerrado en el [panel de tareas](/Task_panel/es "Task panel/es"), o pulse Esc dos veces en el teclado.
* Para entrar de nuevo en el modo de edición, haz doble clic en el croquis en la [vista de árbol](/Tree_view/es "Tree view/es"), o selecciónalo, y luego haz clic en el ![](/images/Sketcher_EditSketch.svg) [Editar croquis](/Sketcher_EditSketch/es "Sketcher EditSketch/es").

## Crear un croquis

2. Haga clic en ![](/images/Sketcher_NewSketch.svg) [Nuevo croquis](/Sketcher_NewSketch/es "Sketcher NewSketch/es").

:   2.1. Elige la orientación del croquis, es decir, uno de los planos base XY, XZ o YZ. Elija también si desea una orientación invertida, y un desplazamiento del plano base.
:   2.2. Utilizaremos el plano y las opciones por defecto.
:   2.3. Haga clic en Aceptar para empezar a construir el croquis.

Ahora estamos dentro del modo de edición de croquis. Dentro de él, podemos hacer uso de la mayoría de las herramientas de este ambiente de trabajo.

*Nota:* la [vista de árbol](/Tree_view/es "Tree view/es") cambiará al [panel de tareas](/Task_panel/es "Task panel/es"); en esta interfaz expande la sección **Controles de edición**, y asegúrate de que la opción **Restricciones automáticas** está activada. Otras opciones se pueden cambiar, incluyendo el tamaño de la rejilla visible, y si queremos ajustarnos a ella; en este tutorial no nos ajustaremos a la rejilla y también la ocultaremos. En otras secciones del [panel de tareas](/Task_panel/es "Task panel/es") también se puede ver qué elementos geométricos y restricciones se han definido.

![](/images/01_Sk01_Sketcher_Task_panel.png)

Parte superior del [panel de tareas](/Task_panel/es "Task panel/es") del croquizador.

## Geometría de la construcción

3. La geometría de construcción se utiliza para guiar la creación de la geometría "real". La geometría real será la que se muestre fuera del modo de edición del croquis, mientras que la geometría de construcción sólo se mostrará dentro del modo de edición. Por lo tanto, puede utilizar tanta geometría de construcción como necesite para construir formas reales.

:   3.1. Haz clic en ![](/images/Sketcher_ToggleConstruction.svg) [Conmutar construcción](/Sketcher_ToggleConstruction/es "Sketcher ToggleConstruction/es"). Ahora los elementos geométricos se dibujarán en **Modo de construcción**.
:   3.2. Haz clic en ![](/images/Sketcher_Line.svg) [Crear línea](/Sketcher_CreateLine/es "Sketcher CreateLine/es").
:   3.3. Acércate al **origen** del croquis, el punto debe resaltar y cerca de tu cursor el ![](/images/Constraint_PointOnPoint.svg) [coincidente de restricción](/Sketcher_ConstrainCoincident/es "Sketcher ConstrainCoincident/es") aparecerá.
:   3.4. Haga clic en el punto y mueva el puntero para empezar a dibujar una nueva línea a partir de él. Mueva el puntero para que la línea tenga una longitud de alrededor de `30 mm`. No tiene que ser muy preciso en este paso; más tarde estableceremos la dimensión correcta.
:   3.5. Repita este procedimiento cuatro veces más para colocar las líneas de construcción en forma de estrella. No te preocupes demasiado por su tamaño o posición, simplemente extiéndelas en los cuatro cuadrantes.
:   3.6. Ahora sal del modo de construcción haciendo clic de nuevo en ![](/images/Sketcher_ToggleConstruction.svg) [Conmutar construcción](/Sketcher_ToggleConstruction/es "Sketcher ToggleConstruction/es").

*Nota:* hasta este punto la herramienta [línea](/Sketcher_CreateLine/es "Sketcher CreateLine/es") sigue activa. Esto significa que podemos seguir haciendo clic en la [Vista 3D](/3D_view/es "3D view/es") para dibujar todas las líneas que queramos. Si queremos salir de esta herramienta, podemos pulsar el botón derecho del ratón, o pulsar Esc en el teclado una vez. Al hacer esto el puntero ya no creará líneas, sólo será un puntero que nos permitirá seleccionar los objetos que acabamos de crear. En este modo de puntero podemos elegir y arrastrar los puntos finales de cada línea para ajustar su colocación.

*Nota 2:* no pulse Esc por segunda vez, ya que saldrá del modo de edición de croquis. Si lo hace, vuelva a entrar en el modo de edición haciendo doble clic en el croquis en la [vista de árbol](/Tree_view/es "Tree view/es").

Echa un vistazo al [panel de tareas](/Task_panel/es "Task panel/es") de nuevo. La sección **Mensajes del solucionador** ya indica que el croquis está poco restringido, y menciona el número de *grados de libertad*.

Mira las secciones **Restricciones** y **Elementos** para ver la nueva lista de restricciones y líneas. Cuando tus croquis tengan muchos elementos, puede ser difícil seleccionarlos en la [Vista 3D](/3D_view/es "3D view/es"), así que puedes usar estas listas para seleccionar el objeto que desees exactamente.

![](/images/02_Sk01_Sketcher_construction.png)

Líneas de construcción que forman una forma de estrella con su centro en el origen.

## Geometría real

La geometría real debe hacer una forma cerrada si se va a utilizar como un perfil que pueda ser extruido por herramientas como ![](/images/PartDesign_Pad.svg) [DiseñoPiezas Pastilla](/PartDesign_Pad/es "PartDesign Pad/es").

Asegúrate de que no estás en modo construcción haciendo clic en ![](/images/Sketcher_ToggleConstruction.svg) [Conmutar construcción](/Sketcher_ToggleConstruction/es "Sketcher ToggleConstruction/es"), si no has salido previamente de este modo.

### Arcos exteriores

4. Crea un círculo.

:   4.1. Haz clic en ![](/images/Sketcher_Circle.svg) [Crear círculo](/Sketcher_CreateCircle/es "Sketcher CreateCircle/es").
:   4.2. Haz clic en el **origen** del croquis para posicionar su punto central.
:   4.3. Haga clic en cualquier lugar de la [Vista 3D](/3D_view/es "3D view/es") para establecer el radio de la circunferencia como una distancia desde el origen. Que sea aproximadamente `8 mm`. De nuevo, la dimensión se fijará más tarde.

5. Crea una serie de arcos.

:   5.1. Haga clic en ![](/images/Sketcher_Arc.svg) [Crear arco](/Sketcher_CreateArc/es "Sketcher CreateArc/es").
:   5.2. Acércate al punto final de una de las líneas de construcción y haz clic sobre ella. Esto hará que el punto central del arco circular sea ![](/images/Constraint_PointOnPoint.svg) [coincidente](/Sketcher_ConstrainCoincident/es "Sketcher ConstrainCoincident/es") con el punto final de esta línea.
:   5.3. Haga clic una vez en la [Vista 3D](/3D_view/es "3D view/es") en un lugar arbitrario para establecer simultáneamente el radio del arco, y el primer punto final del mismo. Defina un radio aproximado de `8 mm`.
:   5.4. Mueva el puntero en sentido contrario a las agujas del reloj para trazar un arco cuya concavidad apunte hacia el origen del croquis. Haga clic para fijar el punto final del arco, definiendo un arco circular que barre aproximadamente `180°` o media circunferencia.
:   5.5. Repita estos pasos con cada línea de construcción, de modo que cada una de ellas tenga un arco circular en su extremo. Llamaremos a estos arcos O por arcos hacia afuera.

![](/images/03_Sk01_Sketcher_outer_arcs.png)

Arcos circulares añadidos en los puntos finales de las líneas de construcción. También un círculo central.

### Arcos interiores

6. Crear un arco entre cada par de los anteriores O-arcos.

:   6.1. Todavía con el ![](/images/Sketcher_Arc.svg) [Crear arco](/Sketcher_CreateArc/es "Sketcher CreateArc/es") hierramenta activo, haz clic en algún lugar entre dos O-arcos pero más lejos del origen del croquis, para establecer el punto central de un nuevo arco.
:   6.2. Haga clic en algún lugar cerca del punto final de un arco en O, y mueva el puntero para barrer otro arco que termine cerca de otro punto final de un arco en O diferente, como si tratara de unir los puntos finales. Esta vez la concavidad debe apuntar lejos del origen.
:   6.3. Repite estos pasos, de modo que cada par de arcos en O tenga un nuevo arco entre ellos. Los llamaremos arcos I por arcos hacia adentro.

En resumen, los arcos O deben tener su curvatura hacia fuera y su concavidad hacia el origen del croquis; los arcos I deben tener su curvatura hacia dentro y su concavidad hacia fuera del mismo origen.

![](/images/04_Sk01_Sketcher_inner_arcs.png)

Arcos circulares añadidos entre el primer conjunto de arcos colocados.

## Restricciones

Vuelve a echar un vistazo al [panel de tareas](/Task_panel/es "Task panel/es"). Debido a los nuevos elementos geométricos que hemos dibujado, la sección **Mensajes del solucionador** indica aún más *grados de libertad*. Un *grado de libertad* (DOF) indica un posible movimiento de un elemento. Por ejemplo, un punto se puede mover tanto en dirección horizontal como vertical, por lo que tiene dos grados de libertad. Una línea está definida por dos puntos, por lo que en total tiene cuatro grados de libertad. Si fijamos uno de esos puntos, entonces todo el sistema sólo dispone de dos grados de libertad; si además fijamos el movimiento horizontal del punto restante, sólo nos queda un grado de libertad; y si también fijamos el movimiento vertical de este punto, entonces el último grado de libertad desaparece, y la línea ya no puede moverse de su posición.

Hasta ahora, cuando hemos dibujado líneas y curvas, el croquis ha añadido restricciones automáticas por nosotros, las que mantienen las líneas atadas al origen, y los arcos en O atados a las líneas de construcción. Pero no hemos añadido otras restricciones explícitas para que las formas geométricas puedan seguir moviéndose en muchas direcciones. Las restricciones son "reglas" que nos dicen bajo qué condiciones puede moverse un objeto geométrico y en qué medida". Sirven para eliminar los grados de libertad de forma que el boceto tenga una forma estable. Si eliminamos todos los grados de libertad, entonces el croquis está *totalmente restringido*, y tiene una forma fija, es decir, sus puntos no pueden moverse en absoluto. En general, es una buena idea restringir completamente los croquis porque esto dará lugar a modelos estables.

Hay dos tipos principales de restricciones:

* *Las restricciones geométricas* definen las características de las formas sin especificar las dimensiones exactas, por ejemplo, la horizontalidad, la verticalidad, el paralelismo, la perpendicularidad y la tangencia.
* *Las restricciones de datos* definen las características de las formas especificando las dimensiones, por ejemplo, una longitud numérica o un ángulo.

## Restricciones geométricas

### Igualdad de longitud y radio

7. Geometrically constrain the lines and arcs.

:   7.1 Select all five construction lines. You only need to click once to select an element.
:   7.2. Press ![](/images/Constraint_EqualLength.svg) [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
:   *Note:* this creates only four constraints. The constraints are chained, the first line has the same length as the second one, which has the same length as the third one, which again has the same length as the fourth one, which has the same length as the fifth one. So in this case, the first and the fifth have the same length.

:   7.3. Select all five O-arcs, those centered on an endpoint of a construction line.
:   7.4. Press ![](/images/Constraint_EqualLength.svg) [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
:   7.5. Repeat with all I-arcs, those between the O-arcs.
:   *Note:* again the constraints are chained. Therefore all O-arcs will have the same radius, and all I-arcs will have the same radius. At this moment, the specific value of these lengths is not fixed. You may use the pointer to drag a point and see how the sketch is updated while respecting the constraints in place.

:   7.6. Select the construction line that is closest to the vertical axis.
:   7.7. Press ![](/images/Constraint_Vertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") (optional). If you drew the construction line downwards over the Y axis, an automatic ![](/images/Constraint_PointOnObject.svg) [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") was already placed, keeping the construction line vertical. In this case, no additional ![](/images/Constraint_Vertical.svg) [Vertical constraint](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") is necessary.

*Note:* as you add constraints, overlay symbols indicating the type of constraint appear over the geometry in the [3D view](/3D_view "3D view"). If these symbols obfuscate your view, you can hide them by unchecking the constraint in the [task panel](/Task_panel "Task panel"). Also note that the number of degrees of freedom decreases after adding each constraint.

*Note 2:* if you wish to temporarily disable the constraint, you may select it and press ![](/images/Sketcher_ToggleActiveConstraint.svg) [Toggle active constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"). When you want to apply it again, press again the same button.

![](/images/05a_Sk01_Sketcher_equality_constraints_lines.png) ![](/images/05b_Sk01_Sketcher_equality_constraints_O-arcs.png)

![](/images/05c_Sk01_Sketcher_equality_constraints_I-arcs.png)

Sketch with equality constraints applied to the construction lines, and to the two sets of arcs.

### Tangencia

8. Apply tangency to the arcs.

:   8.1. Select one endpoint of an O-arc and then the closest endpoint of the adjacent I-arc.
:   8.2. Press ![](/images/Constraint_Tangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"). This makes the two adjacent arcs connect smoothly at their endpoints.
:   8.3. Repeat for all endpoints of the O-arcs and I-arcs to obtain a closed profile.

*Note:* applying the tangential constraint very often will move the geometry around in order to produce a smooth connection. You may have to use the pointer to reposition the points a bit before applying the next tangential constraint. Try placing the endpoints in such a way that two arcs aren't too far apart, so they can be connected with a short line rather than a long line.

As of this step, we have now created a closed profile, as all arcs have been tied together. Now we can provide datum constraints to fix the shape of the sketch. While the dimensions of lines and arcs remain unfixed, we can drag the points of the sketch and observe how the entire sketch changes.

![](/images/06_Sk01_Sketcher_tangency_constraints.png)

Sketch with tangential constraints applied to the arcs, which closes the shape.

## Restricciones de los datos

These constraints specify the numerical distances between two points, and angles between two lines.

### Distancias y ángulos

9. Adjust the size of the construction lines.

:   9.1. Select the vertically constrained construction line.
:   9.2. Press ![](/images/Constraint_VerticalDistance.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY").
:   9.3. Set the length to `30 mm`. Because all construction lines are constrained to have the same length, all these lines adjust their sizes at the same time.

10. Adjust the angle between the construction lines.

:   10.1. Select the vertical construction line and the construction line closest to it.
:   10.2. Press ![](/images/Constraint_InternalAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle").
:   10.3. Set the angle to `72°`.
:   10.4. Repeat the same procedure for each pair of construction lines, and use the same angle.
:   *Note:* at this stage, the sketch may have very few degrees of freedom left, meaning that its shape cannot be changed too much. If you attempt to add more constraints, these may cause a conflict with the previously added constraints. If this is the case, do not add these constraints, and proceed with the next steps.

![](/images/07a_Sk01_Sketcher_length_constraint.png) ![](/images/07b_Sk01_Sketcher_angle_constraint.png)

Sketch with length constraint applied to one vertical construction line (left), and angle constraints to three pairs of construction lines (right).

### Radio

11. Adjust the size of the arcs.

:   11.1. Select one of the O-arcs, centered on the endpoint of a construction line.
:   11.2. Press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.3. Set the radius to `8 mm`. Because all O-arcs are constrained to have the same radius, all these arcs adjust their sizes at the same time.
:   11.4. Select one of the I-arcs, between two O-arcs.
:   11.5. Press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.6. Set the radius to `11 mm`. Because all I-arcs are constrained to have the same radius, all these arcs adjust their sizes at the same time.

![](/images/08a_Sk01_Sketcher_radius_1_constraint.png) ![](/images/08b_Sk01_Sketcher_radius_2_constraint.png)

Sketch with radius constraints applied to the outwards arcs (left), and inwards arcs (right).

:   11.7. Finally, select the circle in the center of the sketch, press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"), and set the value to `8 mm`.

We should end up with a fully constrained sketch. It can be confirmed by noticing the change in color of the real geometry, and by the message that is shown in the [task panel](/Task_panel "Task panel").

![](/images/09_Sk01_Sketcher_fully_constrained.png)

Sketch with all geometrical and datum constraints applied.

## Extrusión

12. Ahora que tenemos un croquis totalmente restringido, puede utilizarse para crear un cuerpo sólido.

:   12.1. Salga del modo de edición del croquis pulsando el botón Cerrar, o pulsando Esc dos veces. El boceto debería aparecer en la [vista de árbol](/Tree_view/es "Tree view/es") y en la [vista 3D](/3D_view/es "3D view/es").
:   12.2. Cambie al [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es").
:   12.3. Con el croquis seleccionado en la [vista de árbol](/Tree_view/es "Tree view/es"), pulse ![](/images/PartDesign_Body.svg) [DiseñoPieza Cuerpo](/PartDesign_Body/es "PartDesign Body/es"), elija el plano XY por defecto y pulse OK. El croquis debería aparecer ahora dentro del Cuerpo.
:   12.4. Seleccione el croquis, y luego pulse ![](/images/PartDesign_Pad.svg) [DiseñoPieza Pastilla](/PartDesign_Pad/es "PartDesign Pad/es"), elija las opciones por defecto y pulse OK para crear una extrusión sólida.

![](/images/09b_Sk01_Sketcher_fully_constrained_clean.png) ![](/images/10_Sk01_Sketcher_solid_extrusion.png)

Izquierda: croquis totalmente restringido en el que sólo se muestran las restricciones más importantes. Derecha: extrusión sólida producida con [DiseñoPiezas Pastilla](/PartDesign_Pad/es "PartDesign Pad/es").

## Información adicional

Para una descripción más profunda del croquizador, visita la documentación de [Ambiente de trabajo Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") y lee también la [Referencia Croquizador](/index.php?title=Sketcher_reference/es&action=edit&redlink=1 "Sketcher reference/es (page does not exist)").

La restricción de un croquis puede hacerse de muchas maneras diferentes. En general, se recomienda utilizar primero las restricciones geométricas y minimizar el número de restricciones de datos, ya que esto simplifica la tarea del solucionador de restricciones internas. Para investigar esto, repita este ejemplo, ahora añadiendo las restricciones en diferente orden.

* Primero limite las líneas de construcción antes de dibujar los arcos.
* O restringir el tamaño de los arcos antes de hacerlos tangentes.
* O bien, establezca el ángulo de las líneas de construcción antes de añadir más elementos.
* Intente utilizar otra geometría de construcción.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Sketcher_Tutorial/es&oldid=1467837>"