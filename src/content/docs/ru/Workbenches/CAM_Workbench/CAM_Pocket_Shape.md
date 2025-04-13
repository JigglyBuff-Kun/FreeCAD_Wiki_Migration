---
title: CAM Pocket Shape/ru
---
|  |
| --- |
| Path Pocket |
| Расположение в меню |
| Path → Pocket Shape |
| Верстаки |
| [Path](/Path_Workbench/ru "Path Workbench/ru") |
| Быстрые клавиши |
| P O |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The ![](/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") tool creates a pocketing operation from selected bottom faces, or walls, of one or more pockets of the jobs base object.

The CAM Pocket Shape object is made to be part of a ![](/images/CAM_Job.svg) [CAM Job](/CAM_Job "CAM Job").

![](/images/Path_Pocket_Shape_example.png)

## Применение

1. Select the bottom or the wall(s) of a pocket. While it is usually easier to select the bottom, the walls have to be selected when a pocket goes through all.
2. There are several ways to invoke the command:
   * Press the ![](/images/CAM_Pocket_Shape.svg) [CAM Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") button.
   * Select the **CAM → ![](/images/CAM_Pocket_Shape.svg) Pocket Shape** option from the menu.
3. Adjust the desired properties.

## Свойства

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Данные**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Данные**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Данные**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Данные**X**: X axis value
    - Данные**Y**: Y axis value
    - Данные**Z**: Z axis value
  + Данные**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Данные**X**: X distance value
    - Данные**Y**: Y distance value
    - Данные**Z**: Z distance value
* Данные**Label**: User-provided name of the object (UTF-8)

Depth

* Данные**Clearance Height**: The height needed to clear clamps and obstructions
* Данные**Final Depth**: Final Depth of Tool- lowest value in Z
* Данные**Finish Depth**: Maximum material removed on final pass. The height (thickness) of the last cutting level - *set for a better finish*.
* Данные**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
* Данные**Start Depth**: Starting depth of Tool - *first cut depth in Z*
* Данные**Step Down**: Incremental step down of Tool during operation

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Extension

* Данные**Extension Corners**: When enabled connected extension edges are combined to wires.
* Данные**Extension Length Default**: Default length of extensions.

Face

* Данные**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Данные**Active**: Make False, to prevent operation from generating code
* Данные**Comment**: An optional comment for this Operation
* Данные**User Label**: User assigned label
* Данные**Tool Controller**: Defines the Tool controller used in the Operation

Pocket

* Данные**Cut Mode**: Specifies a CW or CCW move for the cut
* Данные**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent. (Extra value to stay away from final profile *good for roughing toolpath*)
* Данные**Keep Tool Down**: Attempts to avoid unnecessary retractions.
* Данные**Min Travel**: Use 3D Sorting of Path (when multiple base geometries used).
* Данные**Start At**: Start pocketing at center or boundary.
* Данные**Step Over**: Select the horizontal step over (**Percent** of tool diameter: 100% = tool diameter).
* Данные**Use Outline**: Uses the outline of the base geometry.
* Данные**Zig Zag Angle**: Angle of the zigzag pattern. (Select the path angle relative to X axis.)

Rotation

* Данные**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* ~~Данные**B\_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
* Данные**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
* Данные**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Данные**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

* Данные**Start Point**: The start point of this path.
* Данные**Use Start Point**: Make True, if manually specifying a Start Point, then enter Start Points in the property data Start Points field.

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

* **Add**: Adds selected element(s) which should be the base(s) for the path(s)
* **Delete**: Delete the selected item(s) in the Base Geometry list
* **Clear**: Clear all items in the Base Geometry list

### Extensions

* Данные**Show All**: If selected, all potential extensions are visualized. Enabled extensions in purple, disabled extensions in yellow.
* Данные**Extension Corners**
* Данные**Extension Length Default**
* **Enable**
* **Disable**
* **Clear**

### Depths

* Данные**Start Depth**
* Данные**Final Depth**
* Данные**Step Down**

### Heights

* Данные**Safe Height**
* Данные**Clearance Height**

### Operation

* Данные**Tool Controller**
* Данные**Cut Mode**
* Данные**Pattern** (Offset Pattern)
* Данные**Angle** (Zig Zag Angle)
* Данные**Step Over Percent** (Step Over)
* Данные**Pass Extension**: The distance the facing operation will extend beyond the boundary shape (base geometry)

## Scripting

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/ru&oldid=1386523>"