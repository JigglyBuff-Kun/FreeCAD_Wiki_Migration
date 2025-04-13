---
title: Path Cavidade Shape
---
|  |
| --- |
| Path Pocket |
| Localização do menu |
| Path → Pocket Shape → Cavidade |
| Bancadas de trabalho |
| [Path](/Path_Workbench/pt "Path Workbench/pt") |
| Atalho padrão |
| P,O |
| Introduzido na versão |
| - |
| Veja também |
| *Nenhum* |
|  |

## Description

The ![](/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") tool creates a pocketing operation from selected bottom faces, or walls, of one or more pockets of the jobs base object.

The CAM Pocket Shape object is made to be part of a ![](/images/CAM_Job.svg) [CAM Job](/CAM_Job "CAM Job").

![](/images/Path_Pocket_Shape_example.png)

## Usage

1. Select the bottom or the wall(s) of a pocket. While it is usually easier to select the bottom, the walls have to be selected when a pocket goes through all.
2. There are several ways to invoke the command:
   * Press the ![](/images/CAM_Pocket_Shape.svg) [CAM Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") button.
   * Select the **CAM → ![](/images/CAM_Pocket_Shape.svg) Pocket Shape** option from the menu.
3. Adjust the desired properties.

## Properties

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Dados**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Dados**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Dados**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Dados**X**: X axis value
    - Dados**Y**: Y axis value
    - Dados**Z**: Z axis value
  + Dados**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Dados**X**: X distance value
    - Dados**Y**: Y distance value
    - Dados**Z**: Z distance value
* Dados**Label**: User-provided name of the object (UTF-8)

Depth

* Dados**Clearance Height**: The height needed to clear clamps and obstructions
* Dados**Final Depth**: Final Depth of Tool- lowest value in Z
* Dados**Finish Depth**: Maximum material removed on final pass. The height (thickness) of the last cutting level - *set for a better finish*.
* Dados**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
* Dados**Start Depth**: Starting depth of Tool - *first cut depth in Z*
* Dados**Step Down**: Incremental step down of Tool during operation

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Extension

* Dados**Extension Corners**: When enabled connected extension edges are combined to wires.
* Dados**Extension Length Default**: Default length of extensions.

Face

* Dados**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Dados**Active**: Make False, to prevent operation from generating code
* Dados**Comment**: An optional comment for this Operation
* Dados**User Label**: User assigned label
* Dados**Tool Controller**: Defines the Tool controller used in the Operation

Pocket

* Dados**Cut Mode**: Specifies a CW or CCW move for the cut
* Dados**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent. (Extra value to stay away from final profile *good for roughing toolpath*)
* Dados**Keep Tool Down**: Attempts to avoid unnecessary retractions.
* Dados**Min Travel**: Use 3D Sorting of Path (when multiple base geometries used).
* Dados**Start At**: Start pocketing at center or boundary.
* Dados**Step Over**: Select the horizontal step over (**Percent** of tool diameter: 100% = tool diameter).
* Dados**Use Outline**: Uses the outline of the base geometry.
* Dados**Zig Zag Angle**: Angle of the zigzag pattern. (Select the path angle relative to X axis.)

Rotation

* Dados**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* ~~Dados**B\_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
* Dados**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
* Dados**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Dados**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

* Dados**Start Point**: The start point of this path.
* Dados**Use Start Point**: Make True, if manually specifying a Start Point, then enter Start Points in the property data Start Points field.

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

* **Add**: Adds selected element(s) which should be the base(s) for the path(s)
* **Delete**: Delete the selected item(s) in the Base Geometry list
* **Clear**: Clear all items in the Base Geometry list

### Extensions

* Dados**Show All**: If selected, all potential extensions are visualized. Enabled extensions in purple, disabled extensions in yellow.
* Dados**Extension Corners**
* Dados**Extension Length Default**
* **Enable**
* **Disable**
* **Clear**

### Depths

* Dados**Start Depth**
* Dados**Final Depth**
* Dados**Step Down**

### Heights

* Dados**Safe Height**
* Dados**Clearance Height**

### Operation

* Dados**Tool Controller**
* Dados**Cut Mode**
* Dados**Pattern** (Offset Pattern)
* Dados**Angle** (Zig Zag Angle)
* Dados**Step Over Percent** (Step Over)
* Dados**Pass Extension**: The distance the facing operation will extend beyond the boundary shape (base geometry)

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/pt-br&oldid=1386544>"