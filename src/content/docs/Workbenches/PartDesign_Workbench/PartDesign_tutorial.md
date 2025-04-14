---
title: PartDesign tutorial
---

|                                                              |
| ------------------------------------------------------------ |
| Tutorial                                                     |
| Topic                                                        |
| Sketcher                                                     |
| Level                                                        |
| Beginner                                                     |
| Time to complete                                             |
| 15 minutes                                                   |
| Authors                                                      |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD version                                              |
| 0.16 or above                                                |
| Example files                                                |
|                                                              |
| See also                                                     |
| _None_                                                       |
|                                                              |

### Introduction

This tutorial is meant to introduce the reader to the basic workflow of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
The reader will see how to create 3D objects based on Sketches, perform subtraction operations and how to replicate specific features in a pattern.

![](/images/Sketcher_tutorial_result.png)

### Requirements

- FreeCAD version 0.17 or above
- The reader has finished the [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial")

### Procedure

#### Creating 3D geometry

The purpose of the **PartDesign Workbench** is to allow the user to create geometry in 3D space. As such, it is equipped with tools to make use of sketches and convert them to 3D objects.

To achieve this, two tools are exist: ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad") and ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution"). Alongside their subtractive counterparts (![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") and ![](/images/PartDesign_Groove.svg) [Groove](/PartDesign_Groove "PartDesign Groove")) they make up most of the common actions used by this workbench.

1. Switch to the PartDesign Workbench
2. With the sketch selected in the [tree view](/Tree_view "Tree view"), press ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), choose the default XY-plane, and press OK. The sketch should appear now inside the Body.
3. Select ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad")
4. Set the distance to 5 mm
5. Select **Ok**

Another way to create 3D geometry is with the ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution") tool.

![](/images/PartDesign_revolution_exercise.png)

1. Create a new body ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), and then a sketch based on the image above.
2. The sketch can be on any plane, but should be co-incident with the horizontal axis.
3. Select ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution")
4. Set the "Axis" to the "Horizontal Sketch Axis"
5. Set the angle to 360°

#### Subtracting Features

We'll begin by creating a sketch with the shape we want to subtract.

1. Select the top flat face of the "Revolution"
2. Select ![](/images/Sketcher_NewSketch.svg) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch")
3. Select ![](/images/Sketcher_External.svg) [External Geometry](/Sketcher_External "Sketcher External")
4. Approach the edge of the pad. An arc should be highlighted
5. Select the arc. An arc of a different color should appear in the sketch
6. Create a hexagon centered on the same point as the arc and set the radius of the reference circle to 5 mm

**External Geometry**

When a 3D element has been created it is possible to create references to it within a sketch.

1. Select ![](/images/Sketcher_External.svg) [External Geometry](/Sketcher_External "Sketcher External").
2. Approach the element that you wish to reference, the edge of a **Pad** for example.
3. Click on it
4. New elements of a different color should appear on the sketch in the location of the feature you wish to reference.

![](/images/PartDesign_pocket_exercise.png)

Afterwards, we'll proceed to apply a **Pocket** feature.

1. Select the sketch
2. Select ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket")
3. Set the distance to **Through all**

#### Pattern Features

Recall the extruded profile that was created at the start of the tutorial.

1. Select the top face of the object
2. Create a new Sketch
3. Create reference geometry linked to the top arm of the figure
4. Create a circle constrained to the center of the reference arc
5. Set its radius to 3 mm
6. Pocket the sketch through all the workpiece

Instead of creating a circle for each hole in the sketch, we will introduce the concept of **Pattern Features**. These tools operate by replicating a feature in the workpiece that has already been created and that we wish to reproduce in a linear or circular arrangement.
We will use a combination of **Linear** and **Polar** pattern features simulatneously to obtain the final workpiece.

1. Select the Pocket feature that we just created in the **Tree View**
2. Select ![](/images/PartDesign_MultiTransform.svg) [MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")

In the Combo View we are now asked to introduce the **Transformations** that we desire. Notice that in the **MultiTransform parameters** menu we see that FreeCAD has identified the Pocket as the **Original feature** and a second box requests us to **Right click it** to introduce the pattern features.

1. Right click the box
2. Select **Add Linear Pattern**
3. Set the **Direction** to **Vertical Sketch Axis**
4. Set length to 10 mm
5. Leave occurrences at 2
6. Click OK
7. Right click the box again to add a **Polar Pattern**. Notice that the 3D view has now added the linear pattern.
8. Set occurrences to 5
9. Click OK twice

After completing this task you should have the following result.

![](/images/PartDesign_multitransform_exercise.png)

If not, re-edit the MultiTransform operation by double clicking on it in the Tree View. Check both pattern features to detect necessary modifications, such as the **Axis** and if the **Direction** needs to be reversed.

We are now finished with the basic workflow for the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_tutorial/en&oldid=759377>"
