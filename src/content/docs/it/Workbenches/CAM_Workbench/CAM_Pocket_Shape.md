---
title: Path Tasca
---
|  |
| --- |
| Tasca |
| Posizione nel menu |
| Path → Tasca |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| P,O |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Questo strumento crea un'operazione di scavo basato sulle facce o sulle pareti inferiori selezionate in una o più tasche dell'oggetto in lavorazione.

L'oggetto Tasca di Path è fatto per essere parte di una [Lavorazione](/Path_Job/it "Path Job/it").

![](/images/Path_Pocket_Shape_example.png)

## Utilizzo

1. Selezionare una faccia o una parete inferiore di una tasca. Mentre di solito è più facile selezionare il fondo, le parete devono essere selezionati quando una tasca passa attraverso tutto.
2. Premere il pulsante ![](/images/Path_Pocket.png) [Tasca](/Path_Pocket_Shape/it "Path Pocket Shape/it")
3. Regolare le proprietà desiderate

## Proprietà

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Dati**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Dati**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Dati**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Dati**X**: X axis value
    - Dati**Y**: Y axis value
    - Dati**Z**: Z axis value
  + Dati**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Dati**X**: X distance value
    - Dati**Y**: Y distance value
    - Dati**Z**: Z distance value
* Dati**Label**: User-provided name of the object (UTF-8)

Depth

![](/images/Path-DepthsAndHeights.gif)

Descrizione delle proprietà dello strumento tasca

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

Extension

* Dati**Extension Corners**: When enabled connected extension edges are combined to wires.
* Dati**Extension Length Default**: Default length of extensions.

Face

* Dati**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Dati**Active**: Make False, to prevent operation from generating code
* Dati**Comment**: An optional comment for this Operation
* Dati**User Label**: User assigned label
* Dati**Tool Controller**: Defines the Tool controller used in the Operation

Pocket

* Dati**Cut Mode**: Specifies a CW or CCW move for the cut
* Dati**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent. (Extra value to stay away from final profile *good for roughing toolpath*)
* Dati**Keep Tool Down**: Attempts to avoid unnecessary retractions.
* Dati**Min Travel**: Use 3D Sorting of Path (when multiple base geometries used).
* Dati**Start At**: Start pocketing at center or boundary.
* Dati**Step Over**: Select the horizontal step over (**Percent** of tool diameter: 100% = tool diameter).
* Dati**Use Outline**: Uses the outline of the base geometry.
* Dati**Zig Zag Angle**: Angle of the zigzag pattern. (Select the path angle relative to X axis.)

Rotation

* Dati**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* ~~Dati**B\_Axis Error Override**: Visually orient B(y) rotations to model (error in FreeCAD rendering).~~
* Dati**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
* Dati**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Dati**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

* Dati**Start Point**: The start point of this path.
* Dati**Use Start Point**: Make True, if manually specifying a Start Point, then enter Start Points in the property data Start Points field.

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

* **Add**: Adds selected element(s) which should be the base(s) for the path(s)
* **Delete**: Delete the selected item(s) in the Base Geometry list
* **Clear**: Clear all items in the Base Geometry list

### Extensions

* Dati**Show All**: If selected, all potential extensions are visualized. Enabled extensions in purple, disabled extensions in yellow.
* Dati**Extension Corners**
* Dati**Extension Length Default**
* **Enable**
* **Disable**
* **Clear**

### Depths

* Dati**Start Depth**
* Dati**Final Depth**
* Dati**Step Down**

### Heights

* Dati**Safe Height**
* Dati**Clearance Height**

### Operation

* Dati**Tool Controller**
* Dati**Cut Mode**
* Dati**Pattern** (Offset Pattern)
* Dati**Angle** (Zig Zag Angle)
* Dati**Step Over Percent** (Step Over)
* Dati**Pass Extension**: The distance the facing operation will extend beyond the boundary shape (base geometry)

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/it&oldid=1386527>"