---
title: Toothbrush Head Stand
---
|  |
| --- |
| Tutorial |
| Topic |
| Modeling |
| Level |
| Beginner |
| Time to complete |
| 1 hour |
| Authors |
| [EmmanuelG](/User:EmmanuelG "User:EmmanuelG") |
| FreeCAD version |
| 0.16 or greater |
| Example files |
| [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| See also |
| *None* |
|  |

## A daily-life problem

Periuțele electrice de dinți mai rar vin cu un suport pentru cap, în timp ce într-o familie, veți vedea adesea mai multe capete folosite cu un singur corp. Mulți oameni se confruntă cu o problemă comună, ceea ce duce la o varietate de soluții, după cum puteți vedea pe Thingiverse (200 la 800 de proiecte sunt legate de acest lucru). Iată primul răspuns și cum să îl proiectăm.

This tutorial will take you through the steps needed to model the part shown in the image below using basic tools from the [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench") (many of the tools and capabilities are not covered).

![](/images/TBHS-model.png)

## First idea : a plate

## First idea : a plate

* From the start-page, select ![](/images/Workbench_PartDesign.png) *Part Design*, or create a new document and select the *Part Design* workbench.

![](/images/TBHS-0.png)

![](/images/TBHS-0.png)

### Create a sketch

* Click on ![](/images/Sketcher_NewSketch.svg) [**New sketch**](/Sketcher_NewSketch "Sketcher NewSketch"). Either from the contextual task menu at the left, or the toolbar above or from the Part Design menu at the top.

![](/images/TBHS-1.JPG)

A dialog prompts you to choose the sketch orientation and provide an offset.

* We will pick the XY Plane as shown in the image above (that orientation correspond to the common build plate of most 3D printers), then click OK.

![](/images/TBHS-2.JPG)

You now are facing the XY plane from above, and have access to the drawing tools.

* Click on ![](/images/Sketcher_CreateRectangle.svg) [**Rectangle**](/Sketcher_CreateRectangle "Sketcher CreateRectangle").
* Click to place a first point.
* Click to place the opposite corner.
* Press ESC or click the right mouse button to stop using the tool.

![](/images/TBHS-3.JPG)

You now have a floating rectangle of unspecified dimensions.

* Click on a line of the rectangle, you now have access to the constraint tools at the right of the toolbar (depending of the size of your screen you may need to drag them to the left in order to see them all)
* Click on ![](/images/Sketcher_ConstrainDistance.png) [**Distance**](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")
* A dialog prompts you to set a dimension. Enter 80mm, click OK.
* Repeat with the other side of the rectangle, also 80mm.

![](/images/TBHS-4.JPG)

You now have a floating square.

* Click on the lower left point of the square.
* Click on the origin of the XY plane (at the intersection of the two thick lines).
* Click on ![](/images/Constraint_PointOnPoint.svg) [**Coincident**](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident").

![](/images/TBHS-5.JPG)

You now have a totally constrained sketch, as you are told by the solver on the left and the change of color. It is a good practice to always have a totally constrained sketch.

An under-constrained sketch can leave room for unwanted change, if you modify something later on.

On the opposite, an over-constrained sketch is also not good. In that case the solver warn you of redundant constraints and you should remove some of them.

* To leave the sketch, click either on the "Close" button on the left, or the ![](/images/Sketcher_LeaveSketch.png) icon in the toolbar, or press ESC.

![](/images/TBHS-6.JPG)

You now only see the square, and the contextual task menu on the left show you more options than before.

### Create a pad

* Click on ![](/images/View-axometric.svg) **Axonometric** among the standard views, to better see what will happen.
* Click on ![](/images/PartDesign_Pad.svg) **Pad**.
* Enter 4mm and click OK.

![](/images/TBHS-7.JPG)

Your sketch is now in volume!

### Create a sketch on it

* Select the upper face

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

* Click on ![](/images/View-axometric.svg) **Axonometric** among the standard views, to better see what will happen.
* Click on ![](/images/PartDesign_Pad.svg) **Pad**.
* Enter 25mm and click OK.

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

The above model make a good starting point to use FreeCAD, but as a toothbrush head stand it have its flaws : due to the print orientation and small surface the sticks are prone to break.

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

* Click on ![](/images/View-axometric.svg) **Axonometric** among the standard views, to better see what will happen.
* Click on ![](/images/PartDesign_Pad.svg) **Pad**.
* Enter 4mm and click OK.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Toothbrush_Head_Stand/ro&oldid=1366494>"