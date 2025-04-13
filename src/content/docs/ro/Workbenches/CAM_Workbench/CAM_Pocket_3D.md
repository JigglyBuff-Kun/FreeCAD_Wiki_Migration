---
title: Path Buzunar/Cavitate 3D
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                          |
| ---------------------------------------- |
| Path 3DPocket                            |
| Menu location                            |
| Path → 3D Pocket                         |
| Workbenches                              |
| [Path](/Path_Workbench "Path Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Descriere

Acest instrument crează o operație tip un buzunar 3D. Un buzunare 3 D ia în considerarea suprafața inferioară a buzunarului

![](/images/Path_3D_Pocket_Sample.png)

Sample image of 3D Pocket operation used to clear cylindrical battery holder.

## Utilizare

1. Selectați partea de jos a buzunarului pe care doriți să-l muriți
2. Apăsați tasta ![](/images/Path-3DPocket.png) [3D Pocket](/Path_Pocket_3D "Path Pocket 3D") .
3. Selectați controlerul de instrumente pe care doriți să-l utilizați
4. Reglați proprietățile dorite
5. Aplicați

6. From within a Job, select one or more Faces from the Job Model to include as the Base Geometry.
7. Invoke the ![](/images/CAM_3DPocket.svg) [Pocket 3D](/CAM_Pocket_3D "CAM Pocket 3D") or select CAM → ![](/images/CAM_3DPocket.svg) [Pocket 3D](/CAM_Pocket_3D "CAM Pocket 3D") command from the top menu.
8. Choose a Tool controller from the pop up selection dialogue window.
9. Add or subtract Base Geometry elements as needed to configure the Operation.
10. Check the Depths tab to ensure the Start Depth, Finish Depth, and Step Down percentage are correct. The Final Depth is determined by the Body Geometry selection and is not modifiable.
11. Check the Heights tab to ensure the Safe and Clearance Heights are appropriate.
12. Check the Operation tab where the Tool controller can be re-selected, the Cut mode can be configured for Climb or Conventional milling, the Pattern can be set, the Step Over percentage can be adjusted, and Pass Extension can be applied.
13. Click Apply to observe the milling path for the passes of the Operation. Adjust parameters until satisfied with the Operation.
14. Click OK to save the Operation.

## Notes

- All paths generated from this operation are based on a standard end mill using the diameter of the tool you selected for this 3D Pocket operation.
- Ball end mills and other shapes are not respected for path generation even if selected as the tool for this operation.

## Options

- Use the Date**Adaptive Pocket Finish** property to attempt to minimize air milling below a 3D Pocket in cases where the pocket is a hole through the model.
- Use the Date**Adaptive Pocket Start** property to attempt to minimize air milling upon entry to the pocket. For example, look at the sample image above in the [Description](/CAM_Pocket_3D#Description "CAM Pocket 3D") section of this page. In order to reduce the air milling above that 3D Pocket, toggle this property to True and the paths will begin closer to the pocket, much nearer to where the pocket actually begins. See the following image and note the difference in the path start height. The air milling is reduced.

![](/images/3D_Pocket_Sample_Adaptive_Start.png)

Sample image of 3D Pocket operation used to clear cylindrical battery holder with the Adaptive Pocket Start enabled in order to reduce air milling upon entry.

- If you wish to process the entire model and stock as a whole, use the Date**Process Stock Area** property set to True with no Base Geometry selected.

## Properties

### Data

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

- Date**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  - Date**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  - Date**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Date**X**: X axis value
    - Date**Y**: Y axis value
    - Date**Z**: Z axis value
  - Date**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Date**X**: X distance value
    - Date**Y**: Y distance value
    - Date**Z**: Z distance value
- Date**Label**: User-provided name of the object (UTF-8)

Depth

- Date**Clearance Height**: The height needed to clear clamps and obstructions
- Date**Final Depth**: Final Depth of Tool- lowest value in Z
- Date**Finish Depth**: Maximum material removed on final pass.
- Date**Safe Height**: The above which Rapid motions are allowed.
- Date**Start Depth**: Starting Depth of Tool- first cut depth in Z
- Date**Step Down**: Incremental Step Down of Tool

Face

- Date**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

- Date**Active**: Make False, to prevent operation from generating code
- Date**Base**: The base geometry for this operation
- Date**Comment**: An optional comment for this Operation
- Date**Coolant Mode**: The coolant mode for this operation.
- Date**Cycle Time**: The cycle time estimation for this operation.
- Date**Tool Controller**: Defines the Tool controller used in the Operation
- Date**User Label**: User assigned label

Pocket

- Date**Adaptive Pocket Finish**: Use adaptive algorithm to eliminate excessive air milling below planar pocket bottom.
- Date**Adaptive Pocket Start**: Use adaptive algorithm to eliminate excessive air milling above planar pocket top.
- Date**Cut Mode**: The direction that the toolpath should go around the part ClockWise (CW) or CounterClockWise (CCW)
- Date**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent.
- Date**Handle Multiple Features**: Choose how to process multiple Base Geometry features.
- Date**Keep Tool Down**: Attempts to avoid unnecessary retractions.
- Date**Min Travel**: Use 3D Sorting of Path
- Date**Process Stock Area**: Process the model and stock in an operation with no Base Geometry selected.
- Date**Start At**: Start pocketing at center or boundary
- Date**Step Over**: Percent of cutter diameter to step over on each pass
- Date**Zig Zag Angle**: Angle of the zigzag pattern

Rotation

Note: Rotation is not available for 3D Pocket as of 0.19.

- Date**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.

Start Point

- Date**Start Point**: The custom start point for the path of this operation.
  - Date**X**: X distance value
  - Date**Y**: Y distance value
  - Date**Z**: Z distance value
- Date**Use Start Point**: Make True, if manually specifying a Start Point. Set the start point in the property data Start Point field.

### View

Empty

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_3D/ro&oldid=1386554>"
