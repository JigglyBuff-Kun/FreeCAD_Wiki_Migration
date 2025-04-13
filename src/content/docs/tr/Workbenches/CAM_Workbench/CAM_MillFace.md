---
title: CNC G-Kodu Yüzeyden
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Yüzeyden |
| Menü konumu |
| CNC G-Kodu → Yüzeyden |
| Tezgahlar |
| [CNC G-Kodu](/Path_Workbench/tr "Path Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| *Hiçbiri* |
|  |

|  |
| --- |
| CAM MillFace |
| Menu location |
| CAM → Face |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/CAM_MillFace.svg) [Mill Face](/CAM_MillFace "CAM MillFace") tool creates a path to perform a facing operation on a horizontal surface. This operation is generally used:

* to smooth out a rough stock surface,
* to mill selected face(s) to desired depth in preparation for performing subsequent clearing operations within the boundary of the regions affected by this operation,
* or to apply a finishing surface to the selected face(s).

This operation contains a Veri**BoundaryShape** property that allows for a modified selection area based upon the selected face(s).

![Sample image of Mill Face operation used to prepare stock surface for subsequent clearing operation.](/images/MillFace_Sample.png)

Sample image of Mill Face operation used to prepare stock surface for subsequent clearing operation.

## Usage

1. Select one or more faces to be surfaced. **Note:** If selected faces exist at different heights, then all will be milled to the Final Depth setting.
2. There are several ways to invoke the command:
   * Press the ![](/images/CAM_MillFace.svg) [CAM MillFace](/CAM_MillFace "CAM MillFace") button.
   * Select the **CAM → ![](/images/CAM_MillFace.svg) Face** option from the menu.
3. Select the correct Veri**BoundaryShape** setting to modify the milling area based on the face(s) selected as **Base Geometry**.
4. Adjust the other properties as needed. They are listed further below.

## Caveats

* Using it on an inclined plane may produce unexpected results: it will still produce a path to cut a horizontal surface. The extent of the cut will be the vertical projection of the inclined plane, performed at a height corresponding to the lowest point in that plane.

* Since the CAM tools work on the geometry of the selected edges/faces only, and do not relate to the rest of the 3D model, the paths will not go beyond the bounds of the chosen plane, even if it is surrounded by unused stock or air. This will leave unmachined corners. These can sometimes removed with one of the dress-up tools to be found on the *CAM* menu.

## Vertical face milling

* This tool will not work on a **vertical plane** or vertical non planar surface. Vertical operations can be achieved by using the [face profile](/CAM_Profile "CAM Profile") tool or [edge profile](/CAM_Profile "CAM Profile") tool. These will need the selection of a face or closed loop of edges *including the top or bottom edge of the vertical surface desired*). The extent of the path can then be reduced using the [Boundary Dress-up](/CAM_DressupPathBoundary "CAM DressupPathBoundary") tool to be found on the *CAM* menu. With the Dress-up tool, select *Create Box* option and reduce the size to limit the scope of the profile path. These settings will not allow the origin of the boundary box to be moved, however. This must be done by adjusting the Placement settings in the [tree view](/Tree_view "Tree view").
* This will work on compound surfaces such as several vertical planes or cylindrical surfaces joined together, so long as they form one continuous surface.

## Options

Empty

## Properties

***Note*** : The names of some Properties in this list differ a little from the same settings used in the Task Window Editor.

### Data

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Veri**Placement**: Overall placement [position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Veri**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Veri**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Veri**X**: X axis value
    - Veri**Y**: Y axis value
    - Veri**Z**: Z axis value
  + Veri**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Veri**X**: X distance value
    - Veri**Y**: Y distance value
    - Veri**Z**: Z distance value
* Veri**Label**: User-provided name of the object (UTF-8)

Depth

* Veri**Clearance Height**: The height needed to clear clamps and obstructions
* Veri**Final Depth**: Final Depth of Tool- lowest value in Z
* Veri**Finish Depth**: Maximum material removed on final pass.
* Veri**Safe Height**: The above which Rapid motions are allowed.
* Veri**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Veri**Step Down**: Incremental Step Down of Tool

Face

* Veri**BoundaryShape**: Shape to use for calculating Boundary
* Veri**ClearEdges**: Clear edges of surface (Only applicable to BoundBox)
* Veri**ExcludeRaisedAreas**: Exclude milling raised areas inside the face.
* Veri**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Veri**Active**: Make False, to prevent operation from generating code
* Veri**Base**: The base geometry for this operation
* Veri**Comment**: An optional comment for this Operation
* Veri**Coolant Mode**: The coolant mode for this operation.
* Veri**Cycle Time**: The cycle time estimation for this operation.
* Veri**Tool Controller**: Defines the Tool controller used in the Operation
* Veri**User Label**: User assigned label

Pocket

* Veri**Cut Mode**: The direction that the toolpath should go around the part ClockWise (CW) or CounterClockWise (CCW)
* Veri**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent.
* Veri**StartAt**: Start pocketing at center or boundary
* Veri**Step Over**: Percent of cutter diameter to step over on each pass
* Veri**Zig Zag Angle**: Angle of the zigzag pattern
* Veri**Offset Pattern**: Clearing pattern to use
* Veri**Min Travel**: Use 3D Sorting of Path
* Veri**Keep Tool Down**: Attempts to avoid unnecessary retractions.

Rotation

* Veri**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* Veri**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
* Veri**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Veri**Limit Depth To Face**: Enforce the Z-depth of the selected face as the lowest value for final depth. Higher user values for final depth will be observed.
* Veri**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

* Veri**Start Point**: The custom start point for the path of this operation.
  + Veri**X**: X distance value
  + Veri**Y**: Y distance value
  + Veri**Z**: Z distance value
* Veri**Use Start Point**: Make True, if manually specifying a Start Point. Set the start point in the property data Start Point field.

### View

Empty

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_MillFace/tr&oldid=1386530>"