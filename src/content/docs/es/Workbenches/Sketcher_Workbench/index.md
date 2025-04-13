---
title: Ambiente de trabajo Croquizador
---

![](/images/Workbench_Sketcher.svg)

El icono del Ambiente de trabajo Croquizador

## Introducción

El FreeCAD ![](/images/Workbench_Sketcher.svg) Ambiente de trabajo Croquizador se utiliza para crear geometrías 2D destinadas a ser utilizadas en el ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es"), ![](/images/Workbench_Arch.svg) y otros Ambiente de trabajo. Generalmente, un dibujo 2D se considera el punto de partida para la mayoría de los modelos CAD, ya que un boceto 2D puede ser "extruido" para crear una forma 3D; otros bocetos 2D pueden ser utilizados para crear otras características como bolsas, crestas o extrusiones sobre las formas 3D previamente construidas. Junto con las operaciones booleanas definidas en el ![](/images/Workbench_Part.svg) [Ambiente de trabajo piezas](/Part_Workbench/es "Part Workbench/es"), el Croquis forma la base de la [geometría sólida constructiva](/Constructive_solid_geometry/es "Constructive solid geometry/es") (CSG) método de construcción de sólidos. Además, junto con el ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es") operaciones, el Sketcher también forma la base de la [edición de características](/Feature_editing/es "Feature editing/es") metodología de la creación de sólidos.

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

El ambiente de trabajo Croquizador presenta "restricciones", que permiten que las formas 2D sigan definiciones geométricas precisas en términos de longitud, ángulos y relaciones (horizontalidad, verticalidad, perpendicularidad, etc.). Un solucionador de restricciones calcula el alcance de las restricciones de la geometría 2D y permite la exploración interactiva de los grados de libertad del croquis.

#### ¿Para qué no es bueno el entorno de croquizado?

El Croquizador no está pensado para producir planos detallados en 2D. Una vez que los croquis se utilizan para generar un sólido, son automáticamente ocultados. Las cotas son sólo visibles en el modo de edición del croquis.

![](/images/FC_ConstrainedSketch.png)

Un croquis completamente restringido‎

## Constraints

#### ¿Qué son las restricciones?

Las restricciones se utilizan para limitar los grados de libertad de un objeto. Por ejemplo, una línea tiene 4 [grados de libertad](#Degrees_Of_Freedom) (en inglés Degrees Of Freedom, generalmente abreviado como " DOF "): Se puede mover horizontal o verticalmente, se puede estirar, y puede girarse.

Aplicando una restricción horizontal o vertical, o una restricción angular (relativa a otra línea o a uno de los ejes), se limitará su capacidad de girar, aunque seguirá con 3 grados de libertad. Bloqueando uno de sus extremos en relación con el origen eliminará otros 2 grados de libertad. Y aplicando una restricción dimensional se eliminará el último grado de libertad. La línea se considerará que está entonces **completamente restringida**.

Múltiples objetos pueden ser restringidos con respecto a otro. Dos líneas se pueden unir por uno de sus puntos con la restricción de coincidencia de puntos. Un ángulo se puede definir entre ellas, o se pueden establecer como perpendiculares. Una línea puede ser tangente a un arco o a una circunferencia, etc. Un Croquis complejo puede tener diferentes soluciones y **restringir completamente** significa encontrar una de esas posibles soluciones mediante el uso de restricciones.

Existen dos tipos de restricciones: geométricas y dimensionales. Ambas son explicadas en la sección [#Las herramientas](#Las_herramientas) más abajo.

### Edit constraints

When a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, and if the **Ask for value after creating a dimensional constraint** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is selected (default), a dialog opens to edit its value.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

You can enter a numerical value or an [expression](/Expressions "Expressions"), and it is possible to name the constraint to facilitate its use in other expressions. You can also check the **Reference** checkbox to switch the constrain to [reference mode](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint").

To edit the value of an existing dimensional constraint do one of the following:

- Double-click the constraint value in the [3D view](/3D_view "3D view").
- Double-click the constraint in the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
- Right-click the constraint in the Sketcher Dialog and select the **Change value** option from the context menu.

### Reposition constraints

Dimensional constraints can be repositioned in the 3D view by dragging. Hold down the left mouse button over the constraint value and move the mouse. The symbols of geometric constraints are positioned automatically and cannot be moved.

## Profile sketches

To create a sketch that can be used as a profile for generating solids certain rules must be followed:

- The sketch must contain only closed contours. Gaps between endpoints, however small, are not allowed.
- Contours can be nested, to create voids, but should not self-intersect or intersect other contours.
- Contours cannot share edges with other contours. Duplicate edges must be avoided.
- T-connections, that is more than two edges sharing a common point, or a point touching an edge, are not allowed.

These rules do not apply to construction geometry (default color blue), which is not shown outside edit mode, or if the sketch is used for a different purpose. Depending on the workbench and the tool that will use the profile sketch, additional restrictions may apply.

## Drawing aids

The Sketcher Workbench has several drawing aids and other features that can help when creating geometry and applying constraints.

### Continue modes

There are two continue modes: **Geometry creation "Continue Mode"** and **Constraint creation "Continue Mode"**. If these are checked (default) in the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), related tools will restart after finishing. To exit a continuous tool press Esc or the right mouse button. This must be repeated if a continuous geometry tool has already received input. You can also exit a continuous tool by starting another geometry or constraint creation tool. Note that pressing Esc if no tool is active will exit sketch edit mode. Uncheck the **Esc can leave sketch edit mode** [preference](/Sketcher_Preferences#General "Sketcher Preferences") if you often inadvertently press Esc too many times.

### Auto constraints

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the Vista**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

The following constraints are applied automatically:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")
- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")
- ![](/images/Sketcher_ConstrainTangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") (line midpoint)

### Snapping

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to [snap](/Sketcher_Snap "Sketcher Snap") to grid lines and grid intersection, to edges of geometry and midpoints of lines and arcs, and to certain angles. Please note that snapping does not produce constraints in and of itself. For example, only if [Auto constraints](#Auto_constraints) is switched on will snapping to an edge produce a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). But just picking a point on the edge would then have the same result.

### On-View-Parameters

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Depending on the selected option in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences") only the dimensional On-View-Parameters or both the dimensional and the positional On-View-Parameters can be enabled. Positional parameters allow the input of exact coordinates, for example the center of a circle, or the start point of a line. Dimensional parameters allow the input of exact dimensions, for example the radius of a circle, or the length and angle of a line. On-View-Parameters are not available for all tools.

![](/images/Sketcher_On_view_parameters_positional.png)

Determining the center point of a circle with the positional parameters enabled

![](/images/Sketcher_On_view_parameters_dimensional.png)

Determining the radius of a circle with the dimensional parameters enabled

If values are entered and confirmed by pressing Enter or Tab, related constraints are added automatically. If two parameters are displayed at the same time, for example the X and Y coordinate of a point, it is possible to enter one value and pick a point to define the other. Depending on the object additional constraints may be required to fully constrain it. Constraints resulting from On-View-Parameters take precedence over those that may result from [Auto constraints](/Sketcher_Dialog#Constraints "Sketcher Dialog").

![](/images/Sketcher_ArcExample3.png)

Arc created by entering all On-View-Parameters with resulting automatically created constraints

### Coordinate display

If the **Show coordinates beside cursor while editing** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is checked (default), the parameters of the current geometry tool (coordinates, radius, or length and angle) are displayed next to the cursor. This is deactivated while On-View-Parameters are shown.

## Selection methods

While a sketch is in edit mode the following selection methods can be used:

### 3D view element selection

As elsewhere in FreeCAD, an element can be selected in the [3D view](/3D_view "3D view") with a single left mouse click. But there is no need to hold down the Ctrl key when selecting multiple elements. Holding down that key is possible though and has the advantage that you can miss-click without losing the selection. Edges, points and constraints can be selected in this manner.

### 3D view box selection

Box selection in the 3D view works without using [Std BoxSelection](/Std_BoxSelection "Std BoxSelection") or [Std BoxElementSelection](/Std_BoxElementSelection "Std BoxElementSelection"):

1. Make sure that no tool is active.
2. Do one of the following:
   - Click in an empty area and drag a rectangle from left to right to select elements that lie completely inside the rectangle.
   - Click in an empty area and drag a rectangle from right to left to also select elements that touch or cross the rectangle.

You can box-select edges and points, constraints cannot be box-selected.

### 3D view connected geometry selection

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Double-clicking an edge in the 3D view will select all edges directly and indirectly connected with that edge via endpoints. There is no need for the edges to be connected with [Coincident constraints](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"), endpoints need only have the same coordinates.

### Sketcher Dialog selection

Edges and points can also be selected from the Elements section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog"), and constraints from the Constraints section of that dialog.

## Copy, cut and paste

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The standard keyboard shortcuts, Ctrl+C, Ctrl+X and Ctrl+V, can be used to copy, cut and paste selected Sketcher geometry including related constraints. But these tools are also available from the **Sketch → Sketcher tools** menu. They can be used within the same sketch but also between different sketches or separate instances of FreeCAD. Since the data is copied to the clipboard in the form of Python code, it can be used in other ways too (e.g. shared on the forum).

## Tools

## Las herramientas

Todas las herramientas del Ambiente de Trabajo Croquiz se encuentran en el menú Boceto que aparece al cargar el Ambiente de Trabajo Croquiz.

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

### General

#### Sketcher toolbar

- ![](/images/Sketcher_NewSketch.svg) [Nuevo croquis](/Sketcher_NewSketch/es "Sketcher NewSketch/es"): Crea un nuevo croquis en la cara o plano seleccionado. Si no se selecciona ninguna cara mientras se ejecuta esta herramienta, se le pide al usuario que seleccione un avión en una ventana emergente.

- ![](/images/Sketcher_EditSketch.svg) [Editar croquis](/Sketcher_EditSketch/es "Sketcher EditSketch/es"): Edita el croquis seleccionado. Esto abrirá el [Diálogo de Croquis](/index.php?title=Sketcher_Dialog/es&action=edit&redlink=1 "Sketcher Dialog/es (page does not exist)").

- ![](/images/Sketcher_MapSketch.svg) [Fijar croquis a cara](/Sketcher_MapSketch/es "Sketcher MapSketch/es"): Traza un boceto de la cara previamente seleccionada de un sólido.

- ![](/images/Sketcher_ReorientSketch.svg)[Reorientar croquis](/Sketcher_ReorientSketch/es "Sketcher ReorientSketch/es"): Permite adjuntar el boceto a uno de los planos principales.

- ![](/images/Sketcher_ValidateSketch.svg)[Validar el boceto](/Sketcher_ValidateSketch/es "Sketcher ValidateSketch/es"): Verificar la tolerancia de los diferentes puntos y ajustarlos.

- ![](/images/Sketcher_MergeSketch.svg) [Fusionar croquis](/Sketcher_MergeSketches/es "Sketcher MergeSketches/es"): Fusiona dos o más croquis

- ![](/images/Sketcher_MirrorSketch.svg) [Reflejar croquis](/Sketcher_MirrorSketch/es "Sketcher MirrorSketch/es"):

Reflejar un boceto a lo largo del eje X, el eje Y o el origen.

#### Sketcher Edit Mode toolbar

- ![](/images/Sketcher_LeaveSketch.svg) [Abandonar el croquis](/Sketcher_LeaveSketch/es "Sketcher LeaveSketch/es"): Abandona el modo de edición del croquis.

- ![](/images/Sketcher_ViewSketch.svg) [Vista de croquis](/Sketcher_ViewSketch/es "Sketcher ViewSketch/es"): Establece la vista del modelo perpendicular al plano del croquis.

- ![](/images/Sketcher_ViewSection.svg) [Ver sección](/index.php?title=Sketcher_ViewSection/es&action=edit&redlink=1 "Sketcher ViewSection/es (page does not exist)"): Crea un plano de sección que oculta temporalmente cualquier materia delante del plano de dibujo.

#### Sketcher edit tools toolbar

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Other

- ![](/images/Sketcher_StopOperation.svg) [Detener la operación](/Sketcher_StopOperation/es "Sketcher StopOperation/es"): cuando esté en el modo de edición, detenga la operación actual, ya sea el dibujo, la configuración de restricciones, etc.

### Geometrías de croquis

Estas son las herramientas para la creación de objetos.

- ![](/images/Sketcher_CreatePoint.svg) [Punto](/Sketcher_CreatePoint/es "Sketcher CreatePoint/es"): Dibuja un punto.

- ![](/images/Sketcher_CreatePolyline.svg) [Polilínea (línea de múltiples puntos)](/Sketcher_CreatePolyline/es "Sketcher CreatePolyline/es"): Dibuja una línea creada por múltiples segmentos de línea. Presionando la tecla M se puede iterar entre los diferents modos.

- ![](/images/Sketcher_Line.svg) [Línea](/Sketcher_CreateLine/es "Sketcher CreateLine/es"): Dibuja un segmento de línea entre 2 puntos. Las líneas son infinitas en lo que respecta a ciertas restricciones.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_Arc.svg) [Arco](/Sketcher_CreateArc/es "Sketcher CreateArc/es"): Dibuja un segmento de arco dada por el centro, radio, ángulo inicial y ángulo final.

- ![](/images/Sketcher_Create3PointArc.svg) [Arco a través de 3 Puntos](/Sketcher_Create3PointArc/es "Sketcher Create3PointArc/es"): Dibuja un segmento de arco entre dos puntos y un tercer punto que se haya en la circumferencia.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"): Creates an arc of ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"): Creates an arc of hyperbola.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"): Creates an arc of parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_Circle.svg) [Círculo](/Sketcher_CreateCircle/es "Sketcher CreateCircle/es"): Dibuja un círculo desde el centro y el radio.

- ![](/images/Sketcher_Create3PointCircle.svg) [Círculo de 3 puntos](/Sketcher_Create3PointCircle/es "Sketcher Create3PointCircle/es"): Dibuja un círculo de tres puntos en la circunferencia.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"): Creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by both endpoints of one of its axes and a point along the ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse by 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Creates an ellipse by the endpoints of one of its axes and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") but with a different initial mode.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.svg) [Rectángulo](/Sketcher_CreateRectangle/es "Sketcher CreateRectangle/es"): Dibuja un rectángulo dado por 2 puntos opuestos

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Rectángulo Centrado](/index.php?title=Sketcher_CreateRectangle_Center/es&action=edit&redlink=1 "Sketcher CreateRectangle Center/es (page does not exist)"): Dibuja un rectángulo a partir de un punto central y un punto de borde. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

- ![](/images/Sketcher_CreateOblong.svg) [Rectángulo Redondeado](/index.php?title=Sketcher_CreateOblong/es&action=edit&redlink=1 "Sketcher CreateOblong/es (page does not exist)"): Dibuja un rectángulo redondeado desde 2 puntos opuestos. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.svg) [Triángulo](/Sketcher_CreateTriangle/es "Sketcher CreateTriangle/es"): Dibuja un triángulo regular inscrito en un círculo de geometría de construcción.

- ![](/images/Sketcher_CreateSquare.svg) [Cuadrado](/Sketcher_CreateSquare/es "Sketcher CreateSquare/es"): Dibuja un cuadrado regular inscrito en una circumferencia en modo construcción.

- ![](/images/Sketcher_CreatePentagon.svg) [Pentagon](/Sketcher_CreatePentagon/es "Sketcher CreatePentagon/es"): Dibuja un pentágono regular inscrito en una circumferencia en modo construcción.

- ![](/images/Sketcher_CreateHexagon.svg) [Hexagon](/Sketcher_CreateHexagon/es "Sketcher CreateHexagon/es"): Dibuja un hexágono regular inscrito en un círculo de geometría de construcción.

- ![](/images/Sketcher_CreateHeptagon.svg) [Heptagon](/Sketcher_CreateHeptagon/es "Sketcher CreateHeptagon/es"): Dibuja un heptágono regular inscrito en un círculo de geometría de construcción.

- ![](/images/Sketcher_CreateOctagon.svg) [Octagon](/Sketcher_CreateOctagon/es "Sketcher CreateOctagon/es"): Dibuja un octágono regular inscrito en un círculo de geometría de construcción.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Crear polígono regular](/Sketcher_CreateRegularPolygon/es "Sketcher CreateRegularPolygon/es") : Dibuja un polígono regular seleccionando el número de lados y eligiendo dos puntos: el centro y una esquina.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.svg) [Ranura](/Sketcher_CreateSlot/es "Sketcher CreateSlot/es"): Dibuja un óvalo seleccionando el centro de un semicírculo y un punto final del otro semicírculo.

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline"): Creates a B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by knot points.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline by control points](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"): Creates a periodic (closed) B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") but with a different initial mode.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.svg) [Modo de construcción](/Sketcher_ToggleConstruction/es "Sketcher ToggleConstruction/es"): Cambia la geometría del boceto del modo de construcción. La geometría de la construcción se muestra en azul y se descarta fuera del modo de edición del boceto.

### Restricciones de croquis

Las restricciones son utilizadas para establecer reglas entre los elementos del croquis, y para bloquear el croquis a lo largo de los ejes verticales y horizontales. Algunas restricciones crean restricciones auxiliares adicionales [Restricciones auxiliares](/Sketcher_helper_constraint/es "Sketcher helper constraint/es")

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Distancia Horizontal](/Sketcher_ConstrainDistanceX/es "Sketcher ConstrainDistanceX/es"): Fija la distancia horizontal entre dos puntos o puntos finales de líneas. Si solo se selecciona uno, la distancia se define respecto al origen.

- ![](/images/Sketcher_ConstrainDistanceY.svg)[Distancia Vertical](/Sketcher_ConstrainDistanceY/es "Sketcher ConstrainDistanceY/es"): Fija la distancia vertical entre dos puntos o puntos finales de líneas. Si solo se selecciona uno, la distancia se define respecto al origen.

- ![](/images/Sketcher_ConstrainDistance.svg) [Distancia](/Sketcher_ConstrainDistance/es "Sketcher ConstrainDistance/es"): Define la distancia de una línea seleccionada limitando su longitud, o define la distancia entre dos puntos limitando la distancia entre ellos.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Auto radius/diameter](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Fixes the radius of arcs and B-spline weight circles, and the diameter of circles.

- ![](/images/Sketcher_ConstrainRadius.svg) [Radio](/Sketcher_ConstrainRadius/es "Sketcher ConstrainRadius/es"): Define el radio de un arco o círculo seleccionado restringiendo el radio.
- ![](/images/Sketcher_ConstrainDiameter.svg) [Diámetro](/Sketcher_ConstrainDiameter/es "Sketcher ConstrainDiameter/es"): Define el diámetro de un arco o círculo seleccionado restringiendo el diámetro.
- ![](/images/Sketcher_ConstrainRadiam.svg) [Radiam](/index.php?title=Sketcher_ConstrainRadiam/es&action=edit&redlink=1 "Sketcher ConstrainRadiam/es (page does not exist)"): Define automáticamente el radio/diámetro de un arco o círculo seleccionado (peso para un polo B-spline, diámetro para un círculo completo, radio para un arco) [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")
- ![](/images/Sketcher_ConstrainAngle.svg) [Ángulo](/Sketcher_ConstrainAngle/es "Sketcher ConstrainAngle/es"): Define el ángulo interno entre dos líneas seleccionadas.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Fixes the diameter of circles and arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Fixes the angle between two edges, the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

- ![](/images/Sketcher_ConstrainLock.svg) [Bloquear](/Sketcher_ConstrainLock/es "Sketcher ConstrainLock/es"): Restringe el artículo seleccionado estableciendo distancias verticales y horizontales relativas al origen, bloqueando así la ubicación de ese artículo. Estas distancias de restricción pueden ser editadas más tarde.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincidente](/Sketcher_ConstrainCoincident/es "Sketcher ConstrainCoincident/es"): Pone un punto en (coincidente con) uno o más puntos.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Punto sobre objeto](/Sketcher_ConstrainPointOnObject/es "Sketcher ConstrainPointOnObject/es"): Pone un punto sobre otro objeto como una línea, un arco o un eje.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/es "Sketcher ConstrainHorizontal/es"): Limita las líneas o elementos de polilínea seleccionados a una verdadera orientación horizontal. Se puede seleccionar más de un objeto antes de aplicar esta restricción.

- ![](/images/Sketcher_ConstrainVertical.svg)[Vertical](/Sketcher_ConstrainVertical/es "Sketcher ConstrainVertical/es"): Limita las líneas o elementos de polilínea seleccionados a una verdadera orientación vertical. Se puede seleccionar más de un objeto antes de aplicar esta restricción.

- ![](/images/Sketcher_ConstrainParallel.svg)[Paralelo](/Sketcher_ConstrainParallel/es "Sketcher ConstrainParallel/es"): Restringir dos o más líneas paralelas entre sí.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Perpendicular](/Sketcher_ConstrainPerpendicular/es "Sketcher ConstrainPerpendicular/es"): Restringe dos líneas perpendiculares entre sí, o restringe una línea perpendicular a un punto final de un arco.

- ![](/images/Sketcher_ConstrainTangent.svg) [Tangente](/Sketcher_ConstrainTangent/es "Sketcher ConstrainTangent/es"): Crea una restricción tangente entre dos entidades seleccionadas, o una restricción co-lineal entre dos segmentos de línea. Un segmento de línea no tiene que estar situado directamente en un arco o círculo para ser restringido tangencialmente a ese arco o círculo.

- ![](/images/Sketcher_ConstrainEqual.svg) [Iguales](/Sketcher_ConstrainEqual/es "Sketcher ConstrainEqual/es"): Limita a dos entidades seleccionadas iguales entre sí. Si se usan en círculos o arcos, sus radios serán iguales.

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Simétrico](/Sketcher_ConstrainSymmetric/es "Sketcher ConstrainSymmetric/es"): Restringe dos puntos simétricamente sobre una línea, o restringe los dos primeros puntos seleccionados simétricamente sobre un tercer punto seleccionado.

- ![](/images/Sketcher_ConstrainBlock.svg) [Bloqueo](/Sketcher_ConstrainBlock/es "Sketcher ConstrainBlock/es"): bloquea el movimiento de un borde, es decir, impide que sus vértices cambien su posición actual. Debería ser particularmente útil para fijar la posición de las Líneas B. Ver el [Tema de foro Bloqueo de restricción](https://forum.freecadweb.org/viewtopic.php?f=9&t=26572).

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Ley de Snell](/Sketcher_ConstrainSnellsLaw/es "Sketcher ConstrainSnellsLaw/es"): restringe dos líneas para obedecer una ley de refracción para simular la luz que pasa a través de una interfaz.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Cambiar la conducción/restricción de referencia](/Sketcher_ToggleDrivingConstraint/es "Sketcher ToggleDrivingConstraint/es"): Conmuta la barra de herramientas o las restricciones seleccionadas a/desde el modo de referencia.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activar/Desactivar restricción](/index.php?title=Sketcher_ToggleActiveConstraint/es&action=edit&redlink=1 "Sketcher ToggleActiveConstraint/es (page does not exist)"): Activar o desactivar una restricción ya colocada. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

### Herriamentas de croquis

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.svg) [Redondeo](/Sketcher_CreateFillet/es "Sketcher CreateFillet/es"): Hace un redondeo entre dos líneas unidas en un punto. Selecciona ambas líneas o haz clic en el punto de la esquina, y luego activa la herramienta.

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.svg) [Recortar](/Sketcher_Trimming/es "Sketcher Trimming/es"): Recorta una línea, círculo o arco con respecto al punto designado.

- ![](/images/Sketcher_Split.svg) [Dividir](/Sketcher_Split/es "Sketcher Split/es"): Divide una línea o un arco en dos, convierte un círculo en un arco manteniendo la mayoría de las restricciones. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

- ![](/images/Sketcher_Extend.svg) [Extender](/Sketcher_Extend/es "Sketcher Extend/es"): Extiende una línea o un arco a una línea límite, arco, elipse, arco de elipse o un punto en el espacio.

- ![](/images/Sketcher_External.svg) [Geometría externa](/Sketcher_External/es "Sketcher External/es"): Crea una arista enlazada a geometría externa.

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [CarbonoCopia](/Sketcher_CarbonCopy/es "Sketcher CarbonCopy/es"): Copia la geometría de otro boceto.

- ![](/images/Sketcher_SelectOrigin.svg) [Seleccionar el origen](/Sketcher_SelectOrigin/es "Sketcher SelectOrigin/es"): Selecciona el origen del croquis

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Seleccionar el eje horizontal](/Sketcher_SelectHorizontalAxis/es "Sketcher SelectHorizontalAxis/es"): Selecciona el eje horizontal del croquis

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Seleccionar el eje vertical](/Sketcher_SelectVerticalAxis/es "Sketcher SelectVerticalAxis/es"): Selecciona el eje vertical del croquis

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.svg) [Symmetría](/Sketcher_Symmetry/es "Sketcher Symmetry/es"): Copia un elemento del croquis manteniéndolo simétrico a una línea seleccionada

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Eliminar la alineación de los ejes](/index.php?title=Sketcher_RemoveAxesAlignment/es&action=edit&redlink=1 "Sketcher RemoveAxesAlignment/es (page does not exist)"): Elimina la alineación de los ejes intentando conservar la relación de restricción de la selección [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Eliminar toda la geometría](/index.php?title=Sketcher_DeleteAllGeometry/es&action=edit&redlink=1 "Sketcher DeleteAllGeometry/es (page does not exist)"): Elimina toda la geometría del boceto.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Eliminar todas las restricciones](/index.php?title=Sketcher_DeleteAllConstraints/es&action=edit&redlink=1 "Sketcher DeleteAllConstraints/es (page does not exist)"): Elimina todas las restricciones del boceto.

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Herramientas B-spline de Croquizador

- ![](/images/Sketcher_BSplineApproximate.svg) [Convertir la geometría en B-spline](/index.php?title=Sketcher_BSplineApproximate/es&action=edit&redlink=1 "Sketcher BSplineApproximate/es (page does not exist)")

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Aumentar el grado de B-spline](/index.php?title=Sketcher_BSplineIncreaseDegree/es&action=edit&redlink=1 "Sketcher BSplineIncreaseDegree/es (page does not exist)")

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Disminuir el grado de la B-spline](/index.php?title=Sketcher_BSplineDecreaseDegree/es&action=edit&redlink=1 "Sketcher BSplineDecreaseDegree/es (page does not exist)"), [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Aumentar la multiplicidad de nudos](/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/es&action=edit&redlink=1 "Sketcher BSplineIncreaseKnotMultiplicity/es (page does not exist)")

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Disminuir la multiplicidad de nudos](/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/es&action=edit&redlink=1 "Sketcher BSplineDecreaseKnotMultiplicity/es (page does not exist)")

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Selecciona los DOF del solucionador](/Sketcher_SelectElementsWithDoFs/es "Sketcher SelectElementsWithDoFs/es"): Resalta en verde la geometría con grados de libertad (DOFs), es decir, no totalmente restringida.

- ![](/images/Sketcher_SelectConstraints.svg) [Seleccione Restricciones](/Sketcher_SelectConstraints/es "Sketcher SelectConstraints/es"): Selecciona las restricciones de un elemento de dibujo

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Seleccionar elementos asociados con restricciones](/Sketcher_SelectElementsAssociatedWithConstraints/es "Sketcher SelectElementsAssociatedWithConstraints/es"): Seleccionar los elementos de bosquejo asociados a las restricciones

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Seleccionar restricciones redundantes](/Sketcher_SelectRedundantConstraints/es "Sketcher SelectRedundantConstraints/es"): Selecciona las restricciones redundantes del croquis

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Seleccionar restricciones conflictivas](/Sketcher_SelectConflictingConstraints/es "Sketcher SelectConflictingConstraints/es"): Selecciona las restricciones conflictivas del croquis

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Mostrar/ocultar el grado de B-spline](/index.php?title=Sketcher_BSplineDegree/es&action=edit&redlink=1 "Sketcher BSplineDegree/es (page does not exist)")

- ![](/images/Sketcher_BSplinePolygon.svg) [Mostrar/ocultar el polígono de control de la B-spline](/index.php?title=Sketcher_BSplinePolygon/es&action=edit&redlink=1 "Sketcher BSplinePolygon/es (page does not exist)")

- ![](/images/Sketcher_BSplineComb.svg) [Mostrar/ocultar peine de curvatura B-spline](/index.php?title=Sketcher_BSplineComb/es&action=edit&redlink=1 "Sketcher BSplineComb/es (page does not exist)")

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Mostrar/ocultar multiplicidad de nudos B-spline](/Sketcher_BSplineKnotMultiplicity/de "Sketcher BSplineKnotMultiplicity/de")

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Mostrar/ocultar el peso del punto de control de la B-spline](/index.php?title=Sketcher_BSplinePoleWeight/es&action=edit&redlink=1 "Sketcher BSplinePoleWeight/es (page does not exist)"), [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Mostrar/Ocultar geometría interna](/Sketcher_RestoreInternalAlignmentGeometry/es "Sketcher RestoreInternalAlignmentGeometry/es"): Recrea la geometría interna que falta/elimina la innecesaria de una elipse, arco de elipse/hiperbola/parábola o B-spline seleccionados.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Cambiar el espacio virtual](/index.php?title=Sketcher_SwitchVirtualSpace/es&action=edit&redlink=1 "Sketcher SwitchVirtualSpace/es (page does not exist)"): Permite ocultar todas las restricciones de un boceto y hacerlas visibles de nuevo.

### Obsolete tools

- ![](/images/Sketcher_Clone.svg) [Clonar](/Sketcher_Clone/es "Sketcher Clone/es"): Clona un elemento del croquis

- ![](/images/Sketcher_CloseShape.svg) [Forma cercana](/Sketcher_CloseShape/es "Sketcher CloseShape/es"): Crea una forma cerrada aplicando restricciones coincidentes a los puntos finales

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.svg) [Conecta los bordes](/Sketcher_ConnectLines/es "Sketcher ConnectLines/es"): Conectar los elementos del esbozo aplicando restricciones coincidentes a los puntos finales

- ![](/images/Sketcher_Copy.svg) [Copiar](/Sketcher_Copy/es "Sketcher Copy/es"): Copia un elemento del croquis

- ![](/images/Sketcher_Move.svg) [Muévete](/Sketcher_Move/es "Sketcher Move/es"): Mueve la geometría seleccionada tomando como referencia el último punto seleccionado.

- ![](/images/Sketcher_RectangularArray.svg) [ordenación rectangular](/Sketcher_RectangularArray/es "Sketcher RectangularArray/es"): Crea un conjunto de elementos seleccionados de croquis

### Preferencias

- ![](/images/Preferences-general.svg) [Preferencias](/Sketcher_Preferences/es "Sketcher Preferences/es"): Preferencias para el ambiente de trabajo _Croquis_.

## Best practices

## Buenas practicas

Cada usuario de CAD desarrolla su propia forma de trabajar a lo largo del tiempo, pero hay algunos principios generales útiles a seguir.

- Una serie de croquis simples es más sencilla de manejar que un croquis complejo. Por ejemplo, un primer croquis se puede crear para la operación base 3D (ya sea un saliente o una revolución), mientras una segunda puede contener taladros o cajeras. Algunos detalles se pueden dejar fuera, para realizar luego como operaciones 3D. Puedes elegir evitar los redondeos en tu croquis si son muchos, y añadirlos como una operación 3D.

- Crea siempre un perfil cerrado, o tu croquis no producirá un sólido, sino un conjunto de caras abiertas. Si no quieres que alguno de los objetos sea incluido en la creación del sólido, cámbialos a elementos de construcción con la herramienta de Modo de Contrucción.

- Utiliza las restricciones automáticas para limitar el número de restricciones que tendrás que añadir manualmente.

- Como regla general, aplica las restricciones geométricas primero, luego las restricciones dimensionales, y bloquea tu croquis al final. Pero recuerda: Las reglas se hacen para romperlas. Si tienes problemas manipulando tu croquis, puede ser útil restringir algunos objetos antes de completar el perfil.

- Si es posible, centra tu croquis en el origen (0,0) con la restricción de bloqueo. Si tu croquis no es simétrico, ubica uno de sus puntos en el origen, o selecciona un buen número para las distancias de bloqueo. En la v0.12, las restricciones externas (restringiendo el croquis con respecto a geometría 3D como aristas u otros croquis) no están implementada. Esto significa q2ue para ubicar las siguientes geometrías de croquis a tu primer croquis, necesitaras definir distancias relativas a tu primer croquis manualmente. Una restricción de bloqueo de (25,75) desde el origen es más fácil de recordar que (23.47,73.02).

- Si tienes la posibilidad de seleccionar entre la Restricción Distancia y las restricciones de Distancia Vertical o Distancia Horizontal, es mejor que utilices las últimas pues se comportan mejor a nivel de consumo de memoria.

- En general, las mejores restricciones a utilizar son: Restricciones horizontales/verticales; Restricciones de distancia horizontal o vertical y tangencia en puntos finales. De ser posible, conviene limitar el uso de: Restricciones de Distancia; tangencia entre aristas; Punto en Objeto y simetría.

- Si tiene dudas sobre la validez de un boceto una vez completado (las características se vuelven verdes), cierre el cuadro de diálogo Sketcher, cambie al ![](/images/Workbench_Part.svg) [Ambiente de trabajos piezas](/Part_Workbench/es "Part Workbench/es") y ejecuta ![](/images/Part_CheckGeometry.svg) [Comprobar geometría](/Part_CheckGeometry/es "Part CheckGeometry/es").

## Tutoriales

- [Tutorial de croquis](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) por Chrisb. Este es un documento PDF de 70 páginas que sirve como un manual detallado para el croquis. Explica los fundamentos del uso del croquis, y entra en muchos detalles sobre la creación de formas geométricas, y cada una de las restricciones.
- [Tutorial básico de dibujo](/Basic_Sketcher_Tutorial/es "Basic Sketcher Tutorial/es") para principiantes
- [Coquis Micro Tutorial - Prácticas de Restricción](/index.php?title=Sketcher_Micro_Tutorial_-_Constraint_Practices/es&action=edit&redlink=1 "Sketcher Micro Tutorial - Constraint Practices/es (page does not exist)")
- [Requisito por un boceto](/Sketcher_requirement_for_a_sketch/es "Sketcher requirement for a sketch/es") Requisito mínimo de un boceto y determinación completa de un boceto

## Guión

La página [Croquizador Guión](/Sketcher_scripting/es "Sketcher scripting/es") contiene ejemplos sobre cómo crear restricciones a partir de scripts de Python.

## Examples

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](/Sketcher_Examples "Sketcher Examples").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/es&oldid=1537984>"
