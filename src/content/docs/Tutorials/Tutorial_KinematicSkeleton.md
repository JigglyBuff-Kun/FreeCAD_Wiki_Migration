---
title: Tutorial KinematicSkeleton
---

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tutorial                                                                                                                                                                             |
| Topic                                                                                                                                                                                |
| Assembly3, a kinematic skeleton                                                                                                                                                      |
| Level                                                                                                                                                                                |
| Basic knowledge of Assembly3 and Sketcher tools is helpful                                                                                                                           |
| Time to complete                                                                                                                                                                     |
| 40 minutes                                                                                                                                                                           |
| Authors                                                                                                                                                                              |
| [FBXL5](/User:FBXL5 "User:FBXL5")                                                                                                                                                    |
| FreeCAD version                                                                                                                                                                      |
| 0.20 and later                                                                                                                                                                       |
| Example files                                                                                                                                                                        |
| _None_                                                                                                                                                                               |
| See also                                                                                                                                                                             |
| [Tutorial KinematicAssembly](/Tutorial_KinematicAssembly "Tutorial KinematicAssembly"), [Tutorial KinematicController](/Tutorial_KinematicController "Tutorial KinematicController") |
|                                                                                                                                                                                      |

## Introduction

This tutorial is about how to set up a simple 2D mechanism and attach 3D objects, mainly with the tools from the external ![](/images/Assembly3_workbench_icon.svg) [Assembly3 Workbench](/Assembly3_Workbench "Assembly3 Workbench").

This tutorial does not use the skeleton sketch principle (see Assembly3 [Create-Skeleton-Sketch](https://github.com/realthunder/FreeCAD_assembly3/wiki/Create-Skeleton-Sketch) on GitHub).

Instead we will use ![](/images/PartDesign_Body.svg) [PartDesign Bodies](/PartDesign_Body "PartDesign Body") containing only one ![](/images/Workbench_Sketcher.svg) [Sketch](/Sketcher_Workbench "Sketcher Workbench") each, to build a 2D mechanism, a **multi sketch skeleton**.

The dimensions, and the colours as well, are taken from the [SolveSpace tutorial](http://solvespace.com/linkage.pl) which is referred to on the Assembly3 GitHub page (see above).

## Multi sketch skeleton

This so-called multi sketch skeleton consists of several individual ![](/images/PartDesign_Body.svg) [Bodies](/PartDesign_Body "PartDesign Body") and an ![](/images/Assembly_New_Assembly.svg) [Assembly](/Assembly3_CreateAssembly "Assembly3 CreateAssembly") container. To be able to attach further objects each body is put into a separate Assembly container.

### 2D Body objects

The bodies, and their sketches, that are used in this assembly:

- A base plate (green)
- A crank (blue)
- Two movable plates (red and grey)
- Four connecting rods (white, yellow, purple, and brown)

![](/images/Assembly3_SketchSkeleton-01.png)

All eight sketches individually coloured and manually positioned by moving their parent bodies

The shape can deviate from that of the real part, but the position of the joint defining geometry must be accurate.

### Assembly containers

#### Parent assembly

To fix or control the positions of all bodies we need an ![](/images/Assembly_New_Assembly.svg) Assembly object. It adds an assembly branch to the [Tree view](/Tree_view "Tree view").

- Press the ![](/images/Assembly_New_Assembly.svg) [Create assembly](/Assembly3_CreateAssembly "Assembly3 CreateAssembly") button to create an assembly branch in the [Tree view](/Tree_view "Tree view").

#### Sub-assemblies

Repeat above action to create an Assembly object for each Body and drag the Body into its Parts container. Then fix the Body to its Assembly:

1. Activate the Assembly object (double-click).
2. Select a circle/arc belonging the Body object.
3. Press the ![](/images/Assembly_ConstraintLock.svg) [Create "Locked" constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") button to fix the Body in its sub-assembly.

The Crank-Assembly, for example, should look like this:

![](/images/Assembly3_SketchSkeleton-25.png)

The Crank's sub-assembly branch in the Tree view and the Crank with its locked Element in the 3D view

#### Assembly tree

In the Tree view drag all sub-assembly branches into the Parts container of the parent Assembly object.

![](/images/Assembly3_SketchSkeleton-26.png)

Assembly branch in the Tree view

Now they are ready to be arranged.

### Fixed base plate

First we need a fixed part. To fix the Base completely we would usually select a face, but in this case a circle will do as well.

1. Select a circle of the Base.
2. Press the ![](/images/Assembly_ConstraintLock.svg) [Create "Locked" constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") button to fix the Base.

![](/images/Assembly3_SketchSkeleton-02.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-03.png)

Selected circle → Fixed Base with the created Element object and element coordinate system (ECS) displayed (green)

### Joints

For hinge-like joints we select one circle of each sketch and use the ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") constraint. It not only sets both Element's XY planes coplanar, but sets their Z axes colinear, too.

1. Select a circle of each object to connect.
2. Press the ![](/images/Assembly_ConstraintCoincidence.svg) [Create "Plane Coincidence" constraint](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") button.

#### Base - Crank

![](/images/Assembly3_SketchSkeleton-04.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-05.png)

Circles on Base and Crank selected → Relocated Crank with the created Element objects and ECSs displayed (green)

#### Base - Upper Plate

![](/images/Assembly3_SketchSkeleton-06.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-07.png)

Circles on Base and Upper Plate selected → Relocated Upper Plate

Previously created joints can be identified by their constraint representations (red).

#### Crank - Rod 1

![](/images/Assembly3_SketchSkeleton-08.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-09.png)

Circles on Crank and Rod 1 selected → Relocated Rod 1 and tilted Crank

#### Upper Plate - Rod 1

The last link in this kinematic chain connects two Elements whose Z directions are already defined and a ![](/images/Assembly_ConstraintPointOnLine.svg) [Point on line](/Assembly3_ConstraintPointOnLine "Assembly3 ConstraintPointOnLine") constraint is all we need.

1. Select a circle of each object to connect.
2. Press the ![](/images/Assembly_ConstraintPointOnLine.svg) [Create "PointOnLine" constraint](/Assembly3_ConstraintPointOnLine "Assembly3 ConstraintPointOnLine") button.

![](/images/Assembly3_SketchSkeleton-10.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-11.png)

Circles on Upper Plate and Rod 1 selected → Relocated Rod 1, and tilted Crank and Upper Plate

If the Z axes of three elements or joints are parallel and lie on the same virtual plane, the solver may fail to rearrange them in a following step because it is unable to decide in which direction the middle joint should be rotated. This can occur for the Rod 1 element, the Crank - Rod 1 joint, and the Base - Crank joint we have here. If this happens we need to help the solver and rotate one object (e.g. the Crank) manually using the ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove") tool.

#### Upper Plate - Rod 2

Another kinematic (sub-)chain starts with ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") constraints.

![](/images/Assembly3_SketchSkeleton-12.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-13.png)

Circles on Upper Plate (or Base) and Rod 2 selected → Relocated Rod 2

#### Rod 2 - Lower Plate

![](/images/Assembly3_SketchSkeleton-14.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-15.png)

Circles on Rod 2 and Lower Plate selected → Relocated Lower Plate and tilted Rod 2

#### Upper Plate - Rod 3

![](/images/Assembly3_SketchSkeleton-16.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-17.png)

Circles on Upper Plate and Rod 3 selected → Relocated Rod 3 and rearranged upper kinematic sub-chain

#### Lower Plate - Rod 3

And this kinematic (sub-)chain ends with a ![](/images/Assembly_ConstraintPointOnLine.svg) [Point on line](/Assembly3_ConstraintPointOnLine "Assembly3 ConstraintPointOnLine") constraint, too.

![](/images/Assembly3_SketchSkeleton-18.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-19.png)

Circles on Lower Plate and Rod 3 selected → Relocated Rod 3 and rearranged ukinematic sub-chains

To connect both kinematic sub-chains we use Rod 4 with a ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") constraint on one end and a ![](/images/Assembly_ConstraintPointOnLine.svg) [Point on line](/Assembly3_ConstraintPointOnLine "Assembly3 ConstraintPointOnLine") constraint on the other.

#### Crank - Rod 4

![](/images/Assembly3_SketchSkeleton-20.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-21.png)

Circles on Crank and Rod 4 selected → Relocated Rod 4

#### Lower Plate - Rod 4

![](/images/Assembly3_SketchSkeleton-22.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-23.png)

Circles on Lower Plate and Rod 4 selected → Relocated Rod 4 and final layout of kinematic assembly

### Actuator

Since Assembly3 doesn't provide any means to control kinematic assemblies, we need external assistance such as this [kinematic controller](/Tutorial_KinematicController "Tutorial KinematicController"). To use this controller we need to mark one constraint's label with the suffix `"Driver"` to make it a driving constraint. It may be separated by a `"."` or `"-"` for clarity, as the controller will only check if the label ends with `"Driver"`.

We therefore change the label of the Base-Crank joint to `Base-Crank.Driver`.

### Finished skeleton

The finished kinematic assembly with deactivated representation of Elements and Constraints should look like this:

![](/images/Assembly3_SketchSkeleton-24.png)

Finished assembly in the [Tree view](/Tree_view "Tree view") and the [3D view](/3D_view "3D view")

![](/images/Assembly3_SketchSkeleton-27.gif)

GIF animation made from an image sequence from this [kinematic controller](/Tutorial_KinematicController "Tutorial KinematicController")

## Attaching 3D geometry

My expectations about attaching a new object to a base object belonging to a kinematic assembly were something like:

- Put the new object into the base object's Parts container.
- Position the new object in relation to the base object.
- Fix the relative offset and orientation using the Attachment constraint.

But that would have been too easy.

The ![](/images/Assembly_ConstraintAttachment.svg) [Assembly3 ConstraintAttachment](/Assembly3_ConstraintAttachment "Assembly3 ConstraintAttachment") tool, like any Assembly3 constraint tool, relies on the use of Element objects and their element coordinate systems (ECSs) for positioning tasks.

And so attaching objects is just another way of adding objects to a (sub-)assembly.

Let's attach Rod 4-3D to Rod 4 for example:

The objects have a different orientation and the 3D object should have an offset from the 2D object.

1. Put the new object into the base object's Parts container.
2. Select two corresponding circles or arcs.
3. Press the ![](/images/Assembly_ConstraintAttachment.svg) [Create "Attachment" constraint](/Assembly3_ConstraintAttachment "Assembly3 ConstraintAttachment") button.

: ![](/images/Assembly3_SketchSkeleton-28.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-29.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-30.png)

Rod 4 (locked) and Rod 4-3D → Selected arcs → Relocated Rod 4-3D (both ECSs are in the same place with identical orientation)

It is now plain to see that the ![](/images/Assembly_ConstraintAttachment.svg) [Assembly3 ConstraintAttachment](/Assembly3_ConstraintAttachment "Assembly3 ConstraintAttachment") tool ignores the offset and orientation between both objects.

However the position is already defined as we wanted and so we only need to adapt the angle manually and define the desired offset:

- Set the Data**Offset, Angle** of the first Element in the Attachment container to match the orientation.
- Set the Data**Offset, Position, z** of the same Element to apply an offset.

In case we set the properties of the second Element, the movement of angle and offset would go in the opposite direction.

: ![](/images/Assembly3_SketchSkeleton-30.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-31.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-32.png)

As attached → Angle adapted → Offset defined

If there is a 3D object attached to each 2D object, it could look like this:

![](/images/Assembly3_SketchSkeleton-33.gif)

## Notes

The section [Attaching 3D geometry](#Attaching_3D_geometry) just scratches the surface of extending a sub-assembly, and other constraints or combinations of constraints may be more suitable than the attachment constraint.

It is important to move such a kinematic assembly in tiny steps or the solver will give up and fail. It is almost impossible to use ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") or ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove") for this task.

The ![](/images/Assembly_ConstraintCoincidence.svg) [Assembly3_ConstraintCoincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") constraint is used to drive the kinematic assembly, its property Data**Angle** (enabled by the property Data**Lock Angle**) accepts positive or negative floating point numbers greater than 360 and so could do several full turns.

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicSkeleton/en&oldid=1164880>"
