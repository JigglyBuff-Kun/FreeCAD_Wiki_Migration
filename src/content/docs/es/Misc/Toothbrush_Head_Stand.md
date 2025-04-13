---
title: Soporte para la cabeza del cepillo de dientes
---
|  |
| --- |
| Tutorial |
| Tema |
| Modeling |
| Nivel |
| Beginner |
| Tiempo para completar |
| 1 hour |
| Autores |
| [EmmanuelG](/User:EmmanuelG "User:EmmanuelG") |
| Versión de FreeCAD |
| 0.16 or greater |
| Archivos de ejemplos |
| [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| Ver también |
| *None* |
|  |

## Un problema de la vida diaria

Los cepillos de dientes eléctricos rara vez vienen con un soporte para el cabezal, mientras que en una familia a menudo se ven varios cabezales utilizados con un solo cuerpo. Muchas personas que se enfrentan a un problema común nos llevan a una variedad de soluciones, como se puede ver en Thingiverse (200-800 proyectos están relacionados con eso). Aquí está la primera respuesta y cómo diseñarla.

Este tutorial le llevará a través de los pasos necesarios para modelar la pieza que se muestra en la imagen de abajo utilizando las herramientas básicas del [Ambiente de trabajo DiseñoPiezas](/PartDesign_Workbench/de "PartDesign Workbench/de"). (muchas de las herramientas y capacidades no están cubiertas).

![](/images/TBHS-model.png)

## First idea : a plate

## Primera idea : una placa

* Desde la página de inicio, seleccione ![](/images/Workbench_PartDesign.svg) *DiseñoPieza*, o crea un nuevo documento y selecciona el ambiente de trabajo *DiseñoPieza*.

![](/images/TBHS-0.png)

![](/images/TBHS-0.png)

### Create a sketch

### Crear un croquis

* Haz clic en ![](/images/Sketcher_NewSketch.svg) [**Nuevo croquis**](/Sketcher_NewSketch/es "Sketcher NewSketch/es"). Ya sea desde el menú contextual de tareas de la izquierda, o desde la barra de herramientas de arriba o desde el menú Diseño Pieza de la parte superior.

![](/images/TBHS-1.JPG)

![](/images/TBHS-1.JPG)

Un cuadro de diálogo le pide que elija la orientación del croquis y que proporcione un desplazamiento.

* Elegiremos el Plano XY como se muestra en la imagen de arriba (esa orientación corresponde a la placa de construcción común de la mayoría de las impresoras 3D), luego haz clic en OK.

![](/images/TBHS-2.JPG)

Ahora se encuentra frente al plano XY desde arriba, y tiene acceso a las herramientas de dibujo.

* Haz clic en ![](/images/Sketcher_CreateRectangle.svg) [**Rectangle**](/Sketcher_CreateRectangle/es "Sketcher CreateRectangle/es").
* Haz clic para colocar un primer punto.
* Haz clic para colocar la esquina opuesta.
* Pulsa ESC o haz clic con el botón derecho del ratón para dejar de usar la herramienta.

![](/images/TBHS-3.JPG)

Ahora tiene un rectángulo flotante de dimensiones no especificadas.

* Haga clic en una línea del rectángulo, ahora tiene acceso a las herramientas de restricción a la derecha de la barra de herramientas (dependiendo del tamaño de su pantalla puede que tenga que arrastrarlas a la izquierda para verlas todas)
* Haga clic en ![](/images/Sketcher_ConstrainDistance.png) [**Distancia**](/Sketcher_ConstrainDistance/es "Sketcher ConstrainDistance/es")
* Un diálogo le pide que establezca una dimensión. Insertar 80mm, haga clic en OK.
* Repite con el otro lado del rectángulo, también 80mm.

![](/images/TBHS-4.JPG)

Ahora tienes un cuadrado flotante.

* Haga clic en el punto inferior izquierdo del cuadrado.
* Haga clic en el origen del plano XY (en la intersección de las dos líneas gruesas).
* Haga clic en ![](/images/Constraint_PointOnPoint.svg) [**Coincidente**](/Sketcher_ConstrainCoincident/es "Sketcher ConstrainCoincident/es").

![](/images/TBHS-5.JPG)

Ahora tiene un boceto totalmente restringido, como le indica el solucionador de la izquierda y el cambio de color.
Es una buena práctica tener siempre un croquis totalmente restringido.

Un boceto poco restringido puede dejar espacio para cambios no deseados, si se modifica algo más tarde.
Por el contrario, un croquis con demasiadas restricciones tampoco es bueno. En ese caso, el solucionador le advierte de las restricciones redundantes y debe eliminar algunas de ellas.

On the opposite, an over-constrained sketch is also not good. In that case the solver warn you of redundant constraints and you should remove some of them.

* To leave the sketch, click either on the "Close" button on the left, or the ![](/images/Sketcher_LeaveSketch.png) icon in the toolbar, or press ESC.

![](/images/TBHS-6.JPG)

You now only see the square, and the contextual task menu on the left show you more options than before.

### Create a pad

### Crear una pastilla

* Haga clic en ![](/images/View-axometric.svg) **Axonométrico** entre las vistas estándar, para ver mejor lo que ocurrirá.
* Haga clic en ![](/images/PartDesign_Pad.svg) **Pastilla**.
* Introduzca 4mm y haga clic en OK.

![](/images/TBHS-7.JPG)

Your sketch is now in volume!

### Create a sketch on it

### Crear un croquis en él

* Selecciona la cara superior

![](/images/TBHS-8.JPG)

The color of the face change and you have more options in the contextual task menu.

* Click on ![](/images/Sketcher_NewSketch.svg) **New sketch**. As a face was selected it will not ask you to choose a plane.

![](/images/TBHS-9.JPG)

* Click on ![](/images/Sketcher_Circle.svg) [**Circle**](/Sketcher_CreateCircle "Sketcher CreateCircle"), click to place the center, move the pointer and click to define the radius.
* Draw 4 circles on the pad (of any size)
* Press ESC or click the right mouse button to stop using the tool.

![](/images/TBHS-10.JPG)

* Select the circles
* Click on ![](/images/Sketcher_ConstrainEqual.png) [**Equal Length**](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual")

![](/images/TBHS-11.JPG)

Now the circles share the same radius.

* Click on ![](/images/Sketcher_External.svg) [**External geometry**](/Sketcher_External "Sketcher External").
* Click on the four sides of the square, it add lines, color magenta.

![](/images/TBHS-12.JPG)

Theses lines will serve as reference to position the circles.

* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance").
* Click on a center of a circle.
* Click on a magenta line.
* Set distance (20mm from each side).

![](/images/TBHS-13.JPG)

* Click on a circle
* Click on ![](/images/Sketcher_ConstrainRadius.svg) [**Radius**](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") and set it at 1,5mm.

![](/images/TBHS-14.JPG)

* To leave the sketch, click either on the "Close" button on the left, or the ![](/images/Sketcher_LeaveSketch.png) icon in the toolbar, or press ESC.

![](/images/TBHS-15.JPG)

### Create a pad

### Crear una pastilla

* Haga clic en ![](/images/View-axometric.svg) **Axonométrico** entre las vistas estándar, para ver mejor lo que ocurrirá.
* Haga clic en ![](/images/PartDesign_Pad.svg) **Pastilla**.
* Insertar 25mm y haga clic en OK.

![](/images/TBHS-16.JPG)

You have the basic shape, it just need final touches.

### Rounding the corners

* Holding CTRL click on the vertical edge at each corner to select the four of them.

Don't hesitate to help you by switching the display mode (just at the left of the Axonometric View) between ![](/images/DrawStyleWireFrame.svg) **Wireframe** and ![](/images/DrawStyleFlatLines.svg) **Wireframe and shadow**.

![](/images/TBHS-17.JPG)

* Click on ![](/images/PartDesign_Fillet.svg) [**Fillet**](/PartDesign_Fillet "PartDesign Fillet").
* Set the radius at 20mm.

![](/images/TBHS-18.JPG)

Much better.

### Making it more robust

```
We need to add material at the base of the cylinders to make them less prone to snap. Because of the printing orientation these small surfaces will be fragile at the junction with the base.

```

* Select the circles at the base of the cylinders

![](/images/TBHS-19.JPG)

* Click on ![](/images/PartDesign_Chamfer.svg) [**Chamfer**](/PartDesign_Chamfer "PartDesign Chamfer").
* Set it to 2mm.

![](/images/TBHS-20.JPG)

### Chamfer the edges

* Select the face under the base, add a ![](/images/PartDesign_Chamfer.svg) **Chamfer** of 0,5mm.

The first layer of plastic is often being squashed a little too much, this will compensate that and save you time in cleaning the model. If the first layer is ok that will make it only nicer

![](/images/TBHS-21.JPG)

* Select the edges at the border of the upper face (holding CTRL ).

![](/images/TBHS-23.JPG)

* Add a ![](/images/PartDesign_Chamfer.svg) **Chamfer** of 1mm. This one is only aesthetic.

![](/images/TBHS-22.JPG)

Tadaa!

## Export as a .STL

* In the Combo View on the left, select the tree view instead of the contextual task menu, click on the last feature (the chamfer).

![](/images/TBHS-24.JPG)

* Now you can select "Export..." from the File menu at the top left, and select the file format .STL.
* Just print it :-)

## Inspiration

## Inspiración

El modelo anterior es un buen punto de partida para utilizar FreeCAD, pero como soporte de cabezal de cepillo de dientes tiene sus defectos: debido a la orientación de la impresión y a la pequeña superficie los palos son propensos a romperse.

Inspired by the variety of solutions other people came up with, we will make this second version which will be much better.

![](/images/TBHS-v2.jpg)

Don't worry it is often needed to go through several revision for an idea (e.g. : once the prototype on the picture was used, we added more space between the heads so that they should not touch).

In this second part you will also learn to use more tools, like the powerful *Linear repetition*.

## Second idea : a band

* Create a new document and select the ![](/images/Workbench_PartDesign.svg) *Part Design* workbench.

### Create a sketch

* Create a ![](/images/Sketcher_NewSketch.svg) **New sketch**, on the XY plane.

![](/images/TBHS-1.JPG)

* Draw a ![](/images/Sketcher_CreateSlot.svg) [**Slot**](/Sketcher_CreateSlot "Sketcher CreateSlot")
  + Click to place the first center
  + Move to define the length and radius
  + Click to set the second center.

![](/images/TBHS2-1.JPG)

You now have a floating slot of unspecified dimensions.

* Click on one of the horizontal lines of the slot
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 75mm, click OK.
  + that's for a 3 head stand, count 25mm for each, if you want more

![](/images/TBHS2-2.JPG)

* Click on one point of the horizontal line
* Click on one point of the other horizontal line
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 29mm, click OK.

![](/images/TBHS2-3.JPG)

* Draw a ![](/images/Sketcher_CreateSlot.svg) [**Slot**](/Sketcher_CreateSlot "Sketcher CreateSlot") around the first slot.

![](/images/TBHS2-4.JPG)

* Make the centers of the second slot coincident with the centers of the first slot with ![](/images/Constraint_PointOnPoint.svg) [**Coincident**](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident").

![](/images/TBHS2-5.JPG)

* Click on one point of the horizontal line of the first slot
* Click on one point of the nearest horizontal line of the second slot
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 3mm, click OK.

![](/images/TBHS2-6.JPG)

* To make the sketch fully constrained
  + Click on the lower left point of the second slot
  + Click on the origin of the XY plan
  + Click on ![](/images/Constraint_PointOnPoint.svg) [**Coincident**](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")

![](/images/TBHS2-7.JPG)

* To leave the sketch, click either on the "Close" button on the left, or the ![](/images/Sketcher_LeaveSketch.png) icon in the toolbar, or press ESC.

![](/images/TBHS2-8.JPG)

### Create a pad

* Click on ![](/images/View-axometric.svg) **Axonometric** among the standard views, to better see what will happen.
* Click on ![](/images/PartDesign_Pad.svg) **Pad**.
* Enter 30mm and click OK.

![](/images/TBHS2-9.JPG)

### Create a sketch on it

* Select the upper face

![](/images/TBHS2-10.JPG)

* Create a ![](/images/Sketcher_NewSketch.svg) **New sketch**. As a face was selected it will not ask you to choose a plane.

![](/images/TBHS2-11.JPG)

* Draw an ![](/images/Sketcher_CreateHexagon.svg) [**Hexagon**](/Sketcher_CreateHexagon "Sketcher CreateHexagon")
  + Click to place the center
  + Move to define the radius
  + Click to set

![](/images/TBHS2-12.JPG)

* Click on an edge of the hexagon
* Click on ![](/images/Constraint_Horizontal.svg) [**Horizontal**](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")

![](/images/TBHS2-13.JPG)

* Click on the center of the hexagon
* Click on the horizontal line of the XY plane
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 15mm, click OK.

![](/images/TBHS2-14.JPG)

* Click on the center of the hexagon
* Click on the vertical of the XY plane
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 10mm, click OK.

![](/images/TBHS2-15.JPG)

* Click on the blue circle of the hexagon
* Click on ![](/images/Sketcher_ConstrainRadius.svg) [**Radius**](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius")
* A dialog prompts you to set a dimension. Enter 8mm, click OK.

![](/images/TBHS2-16.JPG)

* To leave the sketch, click either on the "Close" button on the left, or the ![](/images/Sketcher_LeaveSketch.png) icon in the toolbar, or press ESC.

![](/images/TBHS2-17.JPG)

### Create a hole

* Click on ![](/images/View-axometric.svg) **Axonometric** among the standard views, to better see what will happen.
* Click on ![](/images/PartDesign_Pocket.svg) [**Pocket**](/PartDesign_Pocket "PartDesign Pocket").
* Select *to the first* in the dropdown menu and click OK.

![](/images/TBHS2-18.JPG)

### Linear repetition

* In the Combo View on the left, select the tree view instead of the contextual task menu, click on the pocket feature.
* Click on ![](/images/PartDesign_LinearPattern.svg) [**LinearPattern**](/PartDesign_LinearPattern "PartDesign LinearPattern").
* Set the length at 55mm and occurencies at 3, then click OK.

![](/images/TBHS2-19.JPG)

### Create a sketch on it

* Select the inner face

![](/images/TBHS2-20.JPG)

* Create a ![](/images/Sketcher_NewSketch.svg) **New sketch**. As a face was selected it will not ask you to choose a plane.

![](/images/TBHS2-21.JPG)

* Click on ![](/images/Sketcher_Circle.svg) [**Circle**](/Sketcher_CreateCircle "Sketcher CreateCircle"), click to place the center, move the pointer and click to define the radius.

![](/images/TBHS2-22.JPG)

* Click on the center of the circle
* Click on the horizontal line of the XY plane
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 15mm, click OK.

![](/images/TBHS2-23.JPG)

* Click on the center of the circle
* Click on the vertical of the XY plane
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 10mm, click OK.

![](/images/TBHS2-24.JPG)

* Click on the circle
* Click on ![](/images/Sketcher_ConstrainRadius.svg) [**Radius**](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius")
* A dialog prompts you to set a dimension. Enter 3.5mm, click OK.

![](/images/TBHS2-25.JPG)

* To leave the sketch, click either on the "Close" button on the left, or the ![](/images/Sketcher_LeaveSketch.png) icon in the toolbar, or press ESC.

![](/images/TBHS2-26.JPG)

### Create a pad

### Crear una pastilla

* Haz clic en ![](/images/View-axometric.svg) **Axonométrico** entre las vistas estándar, para ver mejor lo que ocurrirá.
* Haga clic en ![](/images/PartDesign_Pad.svg) **Pastilla**.
* Insertar 4mm y haga clic en OK.

![](/images/TBHS2-27.JPG)

![](/images/TBHS2-27.JPG)

### Linear repetition

* In the Combo View on the left, select the tree view instead of the contextual task menu, click on the pad feature.
* Click on ![](/images/PartDesign_LinearPattern.svg) [**LinearPattern**](/PartDesign_LinearPattern "PartDesign LinearPattern").
* Set the length at 55mm and occurencies at 3, then click OK.

![](/images/TBHS2-28.JPG)

### Draft

* Select the side of each round pads

![](/images/TBHS2-29.JPG)

* Click on ![](/images/PartDesign_Draft.svg) [**Draft**](/PartDesign_Draft "PartDesign Draft").
* Set the draft angle at 40°.
* Click on "Neutral plane" and select the face on which the sketch is drawn.
* Tick "Invert the draft direction".

![](/images/TBHS2-30.JPG)

We could have used a chamfer to do something similar, but the draft is more appropriate in this case.

Chamfer = left / Draft = right

![](/images/TBHS2-30-chamfer.JPG)![](/images/TBHS2-30-draft.JPG)

### Finishes

* Holding CTRL select the bottom and top faces.

![](/images/TBHS2-31-bottom.JPG)![](/images/TBHS2-31-top.JPG)

* + Add a ![](/images/PartDesign_Chamfer.svg) **Chamfer** of 0,5mm.

![](/images/TBHS2-31.JPG)

Perfect!

## Export as a .STL

* In the Combo View on the left, select the tree view instead of the contextual task menu, click on the last feature (the chamfer).

![](/images/TBHS2-32.JPG)

* Now you can select "Export..." from the File menu at the top left, and select the file format .STL.
* Print it instead of the first version or to replace it if it eventually broke ;-)

Retrieved from "<http://wiki.freecad.org/index.php?title=Toothbrush_Head_Stand/es&oldid=1366493>"