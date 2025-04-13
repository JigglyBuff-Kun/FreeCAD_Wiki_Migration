---
title: Tutorial Sketcher
---
|  |
| --- |
| Tutorial |
| Topic |
| Sketcher |
| Level |
| Beginner |
| Time to complete |
| 10 minutes |
| Authors |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD version |
| 0.16 or above |
| Example files |
|  |
| See also |
| *None* |
|  |

### Introducere

Acest tutorial are rolul de a introduce cititorul în fluxul de lucru de bază al aplicației [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). Vom crea o schiță similară celei prezentate mai jos.

This tutorial was originally written by Drei, and it was rewritten and illustrated by vocx.

This tutorial is meant to introduce the reader to the basic workflow of the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

Atelierul de lucru Sketcher există ca modul independent, dar este accesibil și din cadrul [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") atunci când este necesar să creați un **profil**.

The reader will practice:

* Creating construction geometry
* Creating real geometry
* Applying geometric constraints
* Applying datum constraints
* Obtaining a closed profile

For a more in depth description of the sketcher, read the [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture").

![](/images/00_Sk01_Sketcher_fully_constrained_final.png)

![](/images/Sketcher_tutorial_result.png)

### Cerințe

* Versiunea FreeCAD 0.16 sau mai recentă

1. Open FreeCAD, create a new empty document with **File → ![](/images/Std_New.svg) [New](/Std_New "Std New")**.

:   1.1. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") from the [workbench selector](/Std_Workbench "Std Workbench"), or the menu **[View](/Std_View_Menu "Std View Menu") → Workbench → Sketcher**.

Some actions to remember:

* Press the right mouse button, or press Esc in the keyboard once, to deselect the active tool in edit mode.
* To exit the sketch edit mode, press the Close button in the [task panel](/Task_panel "Task panel"), or press Esc twice in the keyboard.
* To enter again edit mode, double click on the sketch in the [tree view](/Tree_view "Tree view"), or select it, and then click on ![](/images/Sketcher_EditSketch.svg) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch").

### Procedură

#### Crearea unei Sketch

1. Creați un nou document
2. Comutați la Sketcher Workbench utilizând meniul contextual **drop-down menu** sau făcând click pe **View menu > Workbench > Sketcher**.
3. Selectați ![](/images/Sketcher_NewSketch.png) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch")
4. Ar trebui să vedeți un dialog care vă solicită să alegeți orientarea schiței și să oferiți o compensare. Nu vom folosi offset și vom folosi planul implicit
5. Faceți clic pe OK și putem începe să construim schița

2. Click on ![](/images/Sketcher_NewSketch.svg) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch").

:   2.1. Choose the sketch orientation, that is, one of the base XY, XZ, or YZ planes. Also choose if you want an inverted orientation, and an offset from the base plane.
:   2.2. We will use the default plane and options.
:   2.3. Click OK to start constructing the sketch.

Suntem acum în mediul Sketcher. În cadrul acestuia, putem folosi majoritatea instrumentelor disponibile în acest atelier de lucru.

In the **Combo View**, expand the option **Edit controls** and make sure **Autoconstraints** are enabled.

![](/images/01_Sk01_Sketcher_Task_panel.png)

Upper part of the [task panel](/Task_panel "Task panel") of the sketcher.

#### Creating geometry

##### Sketcher construction geometry

Construction geometry is used as guides for the creation of complex profiles. To access it, we need to enable **Construction mode** .

1. Selectați ![](/images/Sketcher_ToggleConstruction.png) [Construction Mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction")
2. Select ![](/images/Sketcher_Line.png) [Line by 2 point](/Sketcher_CreateLine "Sketcher CreateLine")
3. Apropiați **origin point** din schiță, punctul ar trebui să evidențieze lângă cursorul această pictogramă ![](/images/Sketcher_ConstrainCoincident.png) va apărea.
4. Selectați punctul și extindeți linia în diagonală până la o lungime arbitrară.
5. Repetați această procedură până când creați cinci linii de **construction**. Asigurați-vă că păstrați-le pe toate diagonale.
6. Pentru a ieși din modul construcție, doar faceți click din nou pe ![](/images/Sketcher_ToggleConstruction.png) [Construction Mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction")

*Note:* up to this point the [line tool](/Sketcher_CreateLine "Sketcher CreateLine") is still active. This means we can keep clicking on the [3D view](/3D_view "3D view") to draw as many lines as we want. If we wish to exit this tool, we can press the right mouse button, or press Esc in the keyboard once. By doing this the pointer won't create lines any more, it will just be a pointer allowing us to select the objects we just created. In this pointer mode we can pick and drag the endpoints of each line to adjust its placement.

*Note 2:* do not press Esc a second time as this will exit the sketch edit mode. If you do this, re-enter the edit mode by double clicking on the sketch in the [tree view](/Tree_view "Tree view").

Take a look at the [task panel](/Task_panel "Task panel") again. The **Solver messages** section already indicates that the sketch is under-constrained, and it mentions the number of *degrees of freedom*.

Look at the **Constraints** and **Elements** sections to see the new listed constraints and lines. Once your sketches have many elements, it may be difficult to select them in the [3D view](/3D_view "3D view"), so you can use these lists to select the object that you wish exactly.

![](/images/02_Sk01_Sketcher_construction.png)

Construction lines forming a star shape with its center in the origin.

##### Geometria Sketcher

Geometria Sketcher este folosită pentru a crea profilurile închise necesare pentru a efectua operații 3D în Atelierul**PartDesign** .

1. Selectați ![](/images/Sketcher_Circle.png) [Circle](/Sketcher_CreateCircle "Sketcher CreateCircle")
2. Poziționați **centerpoint** acestuia pe oringinea sketch.
3. Extindeți circumferința cu o lungime arbitrară.

1. Selectați ![](/images/Sketcher_Arc.png) [Arc](/Sketcher_CreateArc "Sketcher CreateArc")
2. Apropiați **endpoint** de una de liniile de construcție.
3. Definiți **centerpoint** arcului de cerc pentru a **coincide** cu punctul de capăt.
4. Selectați o locație arbitrară a cursorului dvs pentru a fi definit ca începutul arcului , făcând click o dată.
5. Extindeți arcul de cerc în mod arbitar, asigurându-vă că circumferința se deschide spre exterior (spațiul gol se îndreaptă spre cercul pe care l-ați creat mai devreme).
6. Repetați acești pași pentru fiecare linie de construcție.

Make sure you are not in construction mode by clicking on ![](/images/Sketcher_ToggleConstruction.svg) [Toggle construction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"), if you have not previously exited this mode.

### Outer arcs

4. Create a circle.

:   4.1. Click on ![](/images/Sketcher_Circle.svg) [Create circle](/Sketcher_CreateCircle "Sketcher CreateCircle").
:   4.2. Click on the **origin** of the sketch to position its center point.
:   4.3. Click anywhere in the [3D view](/3D_view "3D view") to set the circumference radius as a distance from the origin. Make it approximately `8 mm`. Again the dimension will be fixed later.

5. Create a series of arcs.

:   5.1. Click on ![](/images/Sketcher_Arc.svg) [Create arc](/Sketcher_CreateArc "Sketcher CreateArc").
:   5.2. Approach the endpoint of one of the construction lines, and click on it. This will set the center point of the circular arc to be ![](/images/Constraint_PointOnPoint.svg) [coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") with this line's endpoint.
:   5.3. Click once in the [3D view](/3D_view "3D view") at an arbitrary location to set simultaneously the radius of the arc, and the first endpoint of it. Define an approximate radius of `8 mm`.
:   5.4. Move the pointer in an anti-clockwise direction to trace an arc that has its concavity pointing towards the origin of the sketch. Click to set the final endpoint of the arc, defining a circular arc that approximately sweeps `180°` or half a circle.
:   5.5. Repeat these steps with each construction line, so that each of them has a circular arc at its tip. We will call these O-arcs for outwards-arcs.

![](/images/03_Sk01_Sketcher_outer_arcs.png)

Circular arcs added at the endpoints of the construction lines. Also a central circle.

### Inner arcs

1. Creați un arc între fiecare pereche de arce anterioare, cu circumferința lor îndreptată către cerc.

To summarize, the O-arcs should have their curvature pointing outwards, and their concavity pointing towards the origin of the sketch; the I-arcs should have their curvature pointing inwards, and their concavity pointing away from the same origin.

![](/images/04_Sk01_Sketcher_inner_arcs.png)

Circular arcs added between the first set of arcs placed.

## Constraints

Take a look at the [task panel](/Task_panel "Task panel") again. Due to the new geometrical elements that we have drawn, the **Solver messages** section indicates even more *degrees of freedom*. A *degree of freedom* (DOF) indicates a possible movement of one element. For example, a point can be moved both in horizontal and vertical directions, so it has two degrees of freedom. A line is defined by two points, therefore in total it has four degrees of freedom. If we fix one of those points, then the entire system has only two degrees of freedom available; if we additionally fix the horizontal movement of the remaining point, we only have one degree of freedom left; and if we also fix the vertical movement of this point, then the last degree of freedom disappears, and the line cannot move from its position any more.

#### Constrângeri

Constrângerile sunt folosite pentru a reduce **Degrees of Freedom** a punctelor și curbelor din schiță.

There are two principal types of constraints:

* *Geometric constraints* define characteristics of the shapes without specifying exact dimensions, for example, horizontality, verticality, parallelism, perpendicularity, and tangency.
* *Datum constraints* define characteristics of the shapes by specifying dimensions, for example, a numeric length or an angle.

##### Constrângeri Geometrice

Ele sunt folosite pentru a stabili relațiile dintre puncte și curbe fără a utiliza dimensiuni.

### Equal length and radius

1. Selectați toate cele cinci linii de construcție.
2. Selectați ![](/images/Sketcher_ConstrainEqual.png) [Equal Length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual")

:   7.3. Select all five O-arcs, those centered on an endpoint of a construction line.
:   7.4. Press ![](/images/Constraint_EqualLength.svg) [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
:   7.5. Repeat with all I-arcs, those between the O-arcs.
:   *Note:* again the constraints are chained. Therefore all O-arcs will have the same radius, and all I-arcs will have the same radius. At this moment, the specific value of these lengths is not fixed. You may use the pointer to drag a point and see how the sketch is updated while respecting the constraints in place.

1. Selectați linia de construcție care este închisă pe axa verticală .
2. Selectați ![](/images/Constraint_Vertical.png) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")

*Note:* as you add constraints, overlay symbols indicating the type of constraint appear over the geometry in the [3D view](/3D_view "3D view"). If these symbols obfuscate your view, you can hide them by unchecking the constraint in the [task panel](/Task_panel "Task panel"). Also note that the number of degrees of freedom decreases after adding each constraint.

*Note 2:* if you wish to temporarily disable the constraint, you may select it and press ![](/images/Sketcher_ToggleActiveConstraint.svg) [Toggle active constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"). When you want to apply it again, press again the same button.

![](/images/05a_Sk01_Sketcher_equality_constraints_lines.png) ![](/images/05b_Sk01_Sketcher_equality_constraints_O-arcs.png)

![](/images/05c_Sk01_Sketcher_equality_constraints_I-arcs.png)

Sketch with equality constraints applied to the construction lines, and to the two sets of arcs.

### Tangency

1. Selectați punctul de capăt al arcului de cer și punctul de capăt cel mai apropiat de el.
2. Selectați ![](/images/Constraint_Tangent.png) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")
3. Repetați pentru fiecare punct de capăt, până se închide profilul creat.

*Note:* applying the tangential constraint very often will move the geometry around in order to produce a smooth connection. You may have to use the pointer to reposition the points a bit before applying the next tangential constraint. Try placing the endpoints in such a way that two arcs aren't too far apart, so they can be connected with a short line rather than a long line.

Până la acest pas, am creat un profil închis, care poate fi ajustat cu dimensiunile dorite.

![](/images/06_Sk01_Sketcher_tangency_constraints.png)

Sketch with tangential constraints applied to the arcs, which closes the shape.

##### Constrângeri de Referință

Acestea sunt folosite pentru a specifica distanța dintre punctele dintr-o anumită direcție și dimensiunile curbelor.

These constraints specify the numerical distances between two points, and angles between two lines.

### Distances and angles

1. Selectați constrângerea verticală pentru linia de construit.
2. Selectați ![](/images/Sketcher_ConstrainDistanceY.png) [Vertical Distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY")
3. Definiți lungimea la 30 mm.

1. Selectați linia verticală de construcție și linia cea mai apropiată de aceasta
2. Selectați ![](/images/Constraint_InternalAngle.png) [Internal Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle")
3. Definiți unghiul la 72°
4. Repetați aceeași procedură pentru fiecare pereche de linii adiacente.

![](/images/07a_Sk01_Sketcher_length_constraint.png) ![](/images/07b_Sk01_Sketcher_angle_constraint.png)

Sketch with length constraint applied to one vertical construction line (left), and angle constraints to three pairs of construction lines (right).

### Radius

1. Selectați unul dintre arcele de cerc centrate pe puctul de capăt al liniei.
2. Selectați ![](/images/Sketcher_ConstrainRadius.png) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius")
3. Definiți raza la 8 mm.
4. Faceți același lucru pentru un arc de cerc necentrat pe un punct de capăt. Definiți raza la 11 mm.
5. Modificați raza cercului de centru la 10 mm.

![](/images/08a_Sk01_Sketcher_radius_1_constraint.png) ![](/images/08b_Sk01_Sketcher_radius_2_constraint.png)

Sketch with radius constraints applied to the outwards arcs (left), and inwards arcs (right).

:   11.7. Finally, select the circle in the center of the sketch, press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"), and set the value to `8 mm`.

Ar trebui să finalizați cu o schiță complet constrânsă. Aceasta poate fi confirmată prin observarea modificării culorii tuturor curbelor.

![](/images/09_Sk01_Sketcher_fully_constrained.png)

Sketch with all geometrical and datum constraints applied.

## Extrusion

12. Now that we have a fully constrained sketch, it can be used to create a solid body.

:   12.1. Exit the sketch edit mode by pressing the Close button, or pressing Esc twice. The sketch should appear in the [tree view](/Tree_view "Tree view") and the [3D view](/3D_view "3D view").
:   12.2. Switch to the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
:   12.3. With the sketch selected in the [tree view](/Tree_view "Tree view"), press ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), choose the default XY-plane, and press OK. The sketch should appear now inside the Body.
:   12.4. Select the sketch, and then press ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad"), choose the default options, and press OK to create a solid extrusion.

![](/images/09b_Sk01_Sketcher_fully_constrained_clean.png) ![](/images/10_Sk01_Sketcher_solid_extrusion.png)

Left: fully constrained sketch with only the most important constraints showing. Right: solid extrusion produced with [PartDesign Pad](/PartDesign_Pad "PartDesign Pad").

## Additional information

For a more in depth description of the sketcher, visit the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") documentation and also read the [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture").

Constraining a sketch can be done in many different ways. In general, it is recommended to use geometrical constraints first, and minimize the number of datum constraints, as this simplifies the task of the internal constraint solver. To investigate this, repeat this example, now adding the constraints in different order.

* First constrain the construction lines before drawing the arcs.
* Or constrain the size of the arcs before making them tangent.
* Or set the angle of the construction lines before adding more elements.
* Try using other construction geometry.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Sketcher_Tutorial/ro&oldid=1467831>"