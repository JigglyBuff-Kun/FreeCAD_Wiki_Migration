---
title: CAM Taschenform
---
|  |
| --- |
| CAM Pocket Shape |
| Menu location |
| CAM → Pocket Shape |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

Das Werkzeug ![](/images/CAM_Pocket_Shape.svg) Taschenform erzeugt eine Taschenbearbeitung von ausgewählten Bodenflächen oder Wänden einer oder mehrerer Taschen des Basisobjekts des Auftrags.

Das Path-Pocket\_Shape-Objekt ist dazu gedacht, Teil eines ![](/images/CAM_Job.svg) [CAM-Auftrags](/CAM_Job/de "CAM Job/de") zu sein.

![](/images/Path_Pocket_Shape_example.png)

## Anwendung

1. Select the bottom or the wall(s) of a pocket. While it is usually easier to select the bottom, the walls have to be selected when a pocket goes through all.
2. There are several ways to invoke the command:
   * Press the ![](/images/CAM_Pocket_Shape.svg) [CAM Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") button.
   * Select the **CAM → ![](/images/CAM_Pocket_Shape.svg) Pocket Shape** option from the menu.
3. Adjust the desired properties.

## Eigenschaften

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Daten**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Daten**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Daten**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Daten**X**: X axis value
    - Daten**Y**: Y axis value
    - Daten**Z**: Z axis value
  + Daten**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Daten**X**: X distance value
    - Daten**Y**: Y distance value
    - Daten**Z**: Z distance value
* Daten**Label**: User-provided name of the object (UTF-8)

Depth

* Daten**Clearance Height**: The height needed to clear clamps and obstructions
* Daten**Final Depth**: Final Depth of Tool- lowest value in Z
* Daten**Finish Depth**: Maximum material removed on final pass. The height (thickness) of the last cutting level - *set for a better finish*.
* Daten**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
* Daten**Start Depth**: Starting depth of Tool - *first cut depth in Z*
* Daten**Step Down**: Incremental step down of Tool during operation

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Extension

* Daten**Extension Corners**: When enabled connected extension edges are combined to wires.
* Daten**Extension Length Default**: Default length of extensions.

Face

* Daten**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Daten**Active**: Make False, to prevent operation from generating code
* Daten**Comment**: An optional comment for this Operation
* Daten**User Label**: User assigned label
* Daten**Tool Controller**: Defines the Tool controller used in the Operation

Pocket

* Daten**Cut Mode**: Specifies a CW or CCW move for the cut
* Daten**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent. (Extra value to stay away from final profile *good for roughing toolpath*)
* Daten**Keep Tool Down**: Attempts to avoid unnecessary retractions.
* Daten**Min Travel**: Use 3D Sorting of Path (when multiple base geometries used).
* Daten**Start At**: Start pocketing at center or boundary.
* Daten**Step Over**: Select the horizontal step over (**Percent** of tool diameter: 100% = tool diameter).
* Daten**Use Outline**: Uses the outline of the base geometry.
* Daten**Zig Zag Angle**: Angle of the zigzag pattern. (Select the path angle relative to X axis.)

Rotation

* Daten**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* ~~Daten**B\_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
* Daten**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
* Daten**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Daten**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

* Daten**Start Point**: The start point of this path.
* Daten**Use Start Point**: Make True, if manually specifying a Start Point, then enter Start Points in the property data Start Points field.

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Basisgeometrie

* **Add**: Adds selected element(s) which should be the base(s) for the path(s)
* **Delete**: Delete the selected item(s) in the Base Geometry list
* **Clear**: Clear all items in the Base Geometry list

### Extensions

* Daten**Show All**: If selected, all potential extensions are visualized. Enabled extensions in purple, disabled extensions in yellow.
* Daten**Extension Corners**
* Daten**Extension Length Default**
* **Enable**
* **Disable**
* **Clear**

### Depths

* Daten**Start Depth**
* Daten**Final Depth**
* Daten**Step Down**

### Heights

* Daten**Safe Height**
* Daten**Clearance Height**

### Operation

* Daten**Tool Controller**
* Daten**Cut Mode**
* Daten**Pattern** (Offset Pattern)
* Daten**Angle** (Zig Zag Angle)
* Daten**Step Over Percent** (Step Over)
* Daten**Pass Extension**: The distance the facing operation will extend beyond the boundary shape (base geometry)

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/de&oldid=1393380>"