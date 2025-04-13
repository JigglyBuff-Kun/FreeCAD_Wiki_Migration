---
title: Trayectoria de vaciado 3D
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Path 3DPocket |
| Menu location |
| Trayectoria → Vaciado 3D |
| Workbenches |
| [Banco de trabajo Trayectoria](/Path_Workbench "Path Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

This command inserts a path ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") object into the Job. This operation takes into account the bottom surface of the pocket, as well as selected walls that are not vertical. In its current state, this operation is used to rough out a pocket with non-vertical walls and/or non-horizontal bottom. A common finishing technique is to use a ball end mill with the experimental ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation.

![](/images/Path_3D_Pocket_Sample.png)

Sample image of 3D Pocket operation used to clear cylindrical battery holder.

## Usage

### Creating a 3D Pocket

1. From within a Job, select one or more Faces from the Job Model to include as the Base Geometry.
2. Invoke the ![](/images/CAM_3DPocket.svg) [Pocket 3D](/CAM_Pocket_3D "CAM Pocket 3D") or select  CAM → ![](/images/CAM_3DPocket.svg) [Pocket 3D](/CAM_Pocket_3D "CAM Pocket 3D") command from the top menu.
3. Choose a Tool controller from the pop up selection dialogue window.
4. Add or subtract Base Geometry elements as needed to configure the Operation.
5. Check the Depths tab to ensure the Start Depth, Finish Depth, and Step Down percentage are correct. The Final Depth is determined by the Body Geometry selection and is not modifiable.
6. Check the Heights tab to ensure the Safe and Clearance Heights are appropriate.
7. Check the Operation tab where the Tool controller can be re-selected, the Cut mode can be configured for Climb or Conventional milling, the Pattern can be set, the Step Over percentage can be adjusted, and Pass Extension can be applied.
8. Click Apply to observe the milling path for the passes of the Operation. Adjust parameters until satisfied with the Operation.
9. Click OK to save the Operation.

## Notes

* All paths generated from this operation are based on a standard end mill using the diameter of the tool you selected for this 3D Pocket operation.
* Ball end mills and other shapes are not respected for path generation even if selected as the tool for this operation.

## Options

* Use the Datos**Adaptive Pocket Finish** property to attempt to minimize air milling below a 3D Pocket in cases where the pocket is a hole through the model.
* Use the Datos**Adaptive Pocket Start** property to attempt to minimize air milling upon entry to the pocket. For example, look at the sample image above in the [Description](/CAM_Pocket_3D#Description "CAM Pocket 3D") section of this page. In order to reduce the air milling above that 3D Pocket, toggle this property to True and the paths will begin closer to the pocket, much nearer to where the pocket actually begins. See the following image and note the difference in the path start height. The air milling is reduced.

![](/images/3D_Pocket_Sample_Adaptive_Start.png)

Sample image of 3D Pocket operation used to clear cylindrical battery holder with the Adaptive Pocket Start enabled in order to reduce air milling upon entry.

* If you wish to process the entire model and stock as a whole, use the Datos**Process Stock Area** property set to True with no Base Geometry selected.

## Properties

### Data

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Datos**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Datos**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Datos**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Datos**X**: X axis value
    - Datos**Y**: Y axis value
    - Datos**Z**: Z axis value
  + Datos**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Datos**X**: X distance value
    - Datos**Y**: Y distance value
    - Datos**Z**: Z distance value
* Datos**Label**: User-provided name of the object (UTF-8)

Depth

* Datos**Clearance Height**: The height needed to clear clamps and obstructions
* Datos**Final Depth**: Final Depth of Tool- lowest value in Z
* Datos**Finish Depth**: Maximum material removed on final pass.
* Datos**Safe Height**: The above which Rapid motions are allowed.
* Datos**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Datos**Step Down**: Incremental Step Down of Tool

Face

* Datos**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Datos**Active**: Make False, to prevent operation from generating code
* Datos**Base**: The base geometry for this operation
* Datos**Comment**: An optional comment for this Operation
* Datos**Coolant Mode**: The coolant mode for this operation.
* Datos**Cycle Time**: The cycle time estimation for this operation.
* Datos**Tool Controller**: Defines the Tool controller used in the Operation
* Datos**User Label**: User assigned label

Pocket

* Datos**Adaptive Pocket Finish**: Use adaptive algorithm to eliminate excessive air milling below planar pocket bottom.
* Datos**Adaptive Pocket Start**: Use adaptive algorithm to eliminate excessive air milling above planar pocket top.
* Datos**Cut Mode**: The direction that the toolpath should go around the part ClockWise (CW) or CounterClockWise (CCW)
* Datos**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent.
* Datos**Handle Multiple Features**: Choose how to process multiple Base Geometry features.
* Datos**Keep Tool Down**: Attempts to avoid unnecessary retractions.
* Datos**Min Travel**: Use 3D Sorting of Path
* Datos**Process Stock Area**: Process the model and stock in an operation with no Base Geometry selected.
* Datos**Start At**: Start pocketing at center or boundary
* Datos**Step Over**: Percent of cutter diameter to step over on each pass
* Datos**Zig Zag Angle**: Angle of the zigzag pattern

Rotation

Note: Rotation is not available for 3D Pocket as of 0.19.

* Datos**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.

Start Point

* Datos**Start Point**: The custom start point for the path of this operation.
  + Datos**X**: X distance value
  + Datos**Y**: Y distance value
  + Datos**Z**: Z distance value
* Datos**Use Start Point**: Make True, if manually specifying a Start Point. Set the start point in the property data Start Point field.

### View

Empty

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_3D/es&oldid=1386525>"