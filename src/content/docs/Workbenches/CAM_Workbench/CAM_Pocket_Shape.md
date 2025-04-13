---
title: CAM Pocket Shape
---

|                                       |
| ------------------------------------- |
| CAM Pocket Shape                      |
| Menu location                         |
| CAM → Pocket Shape                    |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/src/assets/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") tool creates a pocketing operation from selected bottom faces, or walls, of one or more pockets of the jobs base object.

The CAM Pocket Shape object is made to be part of a ![](/src/assets/images/CAM_Job.svg) [CAM Job](/CAM_Job "CAM Job").

![](/src/assets/images/Path_Pocket_Shape_example.png)

## Usage

1. Select the bottom or the wall(s) of a pocket. While it is usually easier to select the bottom, the walls have to be selected when a pocket goes through all.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/CAM_Pocket_Shape.svg) [CAM Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") button.
   - Select the **CAM → ![](/src/assets/images/CAM_Pocket_Shape.svg) Pocket Shape** option from the menu.
3. Adjust the desired properties.

## Properties

**_Note_** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

- Data**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  - Data**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  - Data**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Data**X**: X axis value
    - Data**Y**: Y axis value
    - Data**Z**: Z axis value
  - Data**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Data**X**: X distance value
    - Data**Y**: Y distance value
    - Data**Z**: Z distance value
- Data**Label**: User-provided name of the object (UTF-8)

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions
- Data**Final Depth**: Final Depth of Tool- lowest value in Z
- Data**Finish Depth**: Maximum material removed on final pass. The height (thickness) of the last cutting level - _set for a better finish_.
- Data**Safe Height**: The height above which Rapid motions are allowed. (Rapid safety height between locations)
- Data**Start Depth**: Starting depth of Tool - _first cut depth in Z_
- Data**Step Down**: Incremental step down of Tool during operation

![](/src/assets/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Extension

- Data**Extension Corners**: When enabled connected extension edges are combined to wires.
- Data**Extension Length Default**: Default length of extensions.

Face

- Data**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

- Data**Active**: Make False, to prevent operation from generating code
- Data**Comment**: An optional comment for this Operation
- Data**User Label**: User assigned label
- Data**Tool Controller**: Defines the Tool controller used in the Operation

Pocket

- Data**Cut Mode**: Specifies a CW or CCW move for the cut
- Data**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent. (Extra value to stay away from final profile _good for roughing toolpath_)
- Data**Keep Tool Down**: Attempts to avoid unnecessary retractions.
- Data**Min Travel**: Use 3D Sorting of Path (when multiple base geometries used).
- Data**Start At**: Start pocketing at center or boundary.
- Data**Step Over**: Select the horizontal step over (**Percent** of tool diameter: 100% = tool diameter).
- Data**Use Outline**: Uses the outline of the base geometry.
- Data**Zig Zag Angle**: Angle of the zigzag pattern. (Select the path angle relative to X axis.)

Rotation

- Data**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
- ~~Data**B_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
- Data**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
- Data**Inverse Angle**: Inverse the angle of the rotation. **\*Example:** change a rotation from -22.5 to 22.5 degrees.\*
- Data**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

- Data**Start Point**: The start point of this path.
- Data**Use Start Point**: Make True, if manually specifying a Start Point, then enter Start Points in the property data Start Points field.

## Tasks Window Editor Layout

_Descriptions for the settings are provided in the Properties list above._

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

- **Add**: Adds selected element(s) which should be the base(s) for the path(s)
- **Delete**: Delete the selected item(s) in the Base Geometry list
- **Clear**: Clear all items in the Base Geometry list

### Extensions

- Data**Show All**: If selected, all potential extensions are visualized. Enabled extensions in purple, disabled extensions in yellow.
- Data**Extension Corners**
- Data**Extension Length Default**
- **Enable**
- **Disable**
- **Clear**

### Depths

- Data**Start Depth**
- Data**Final Depth**
- Data**Step Down**

### Heights

- Data**Safe Height**
- Data**Clearance Height**

### Operation

- Data**Tool Controller**
- Data**Cut Mode**
- Data**Pattern** (Offset Pattern)
- Data**Angle** (Zig Zag Angle)
- Data**Step Over Percent** (Step Over)
- Data**Pass Extension**: The distance the facing operation will extend beyond the boundary shape (base geometry)

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/en&oldid=1386519>"
