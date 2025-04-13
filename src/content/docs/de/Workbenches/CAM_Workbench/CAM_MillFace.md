---
title: CAM FlächeFräsen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM FlächeFräsen |
| Menüeintrag |
| CAM → Fläche |
| Arbeitsbereich |
| [CAM](/CAM_Workbench/de "CAM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

The ![](/images/CAM_MillFace.svg) [Mill Face](/CAM_MillFace "CAM MillFace") tool creates a path to perform a facing operation on a horizontal surface. This operation is generally used:

* to smooth out a rough stock surface,
* to mill selected face(s) to desired depth in preparation for performing subsequent clearing operations within the boundary of the regions affected by this operation,
* or to apply a finishing surface to the selected face(s).

This operation contains a Daten**BoundaryShape** property that allows for a modified selection area based upon the selected face(s).

![Sample image of Mill Face operation used to prepare stock surface for subsequent clearing operation.](/images/MillFace_Sample.png)

Sample image of Mill Face operation used to prepare stock surface for subsequent clearing operation.

## Anwendung

1. Select one or more faces to be surfaced. **Note:** If selected faces exist at different heights, then all will be milled to the Final Depth setting.
2. There are several ways to invoke the command:
   * Press the ![](/images/CAM_MillFace.svg) [CAM MillFace](/CAM_MillFace "CAM MillFace") button.
   * Select the **CAM → ![](/images/CAM_MillFace.svg) Face** option from the menu.
3. Select the correct Daten**BoundaryShape** setting to modify the milling area based on the face(s) selected as **Base Geometry**.
4. Adjust the other properties as needed. They are listed further below.

## Caveats

* Using it on an inclined plane may produce unexpected results: it will still produce a path to cut a horizontal surface. The extent of the cut will be the vertical projection of the inclined plane, performed at a height corresponding to the lowest point in that plane.

* Since the CAM tools work on the geometry of the selected edges/faces only, and do not relate to the rest of the 3D model, the paths will not go beyond the bounds of the chosen plane, even if it is surrounded by unused stock or air. This will leave unmachined corners. These can sometimes removed with one of the dress-up tools to be found on the *CAM* menu.

## Vertikalflächenfräsen

* This tool will not work on a **vertical plane** or vertical non planar surface. Vertical operations can be achieved by using the [face profile](/CAM_Profile "CAM Profile") tool or [edge profile](/CAM_Profile "CAM Profile") tool. These will need the selection of a face or closed loop of edges *including the top or bottom edge of the vertical surface desired*). The extent of the path can then be reduced using the [Boundary Dress-up](/CAM_DressupPathBoundary "CAM DressupPathBoundary") tool to be found on the *CAM* menu. With the Dress-up tool, select *Create Box* option and reduce the size to limit the scope of the profile path. These settings will not allow the origin of the boundary box to be moved, however. This must be done by adjusting the Placement settings in the [tree view](/Tree_view "Tree view").
* This will work on compound surfaces such as several vertical planes or cylindrical surfaces joined together, so long as they form one continuous surface.

## Optionen

Empty

## Eigenschaften

***Note*** : The names of some Properties in this list differ a little from the same settings used in the Task Window Editor.

### Daten

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Daten**Placement**: Overall placement [position and rotation] of the object - with respect to the origin (or origin of parent object container)
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
* Daten**Finish Depth**: Maximum material removed on final pass.
* Daten**Safe Height**: The above which Rapid motions are allowed.
* Daten**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Daten**Step Down**: Incremental Step Down of Tool

Face

* Daten**BoundaryShape**: Shape to use for calculating Boundary
* Daten**ClearEdges**: Clear edges of surface (Only applicable to BoundBox)
* Daten**ExcludeRaisedAreas**: Exclude milling raised areas inside the face.
* Daten**Offset Pattern**: Clearing pattern to use. (Select in which manner the horizontal movements should be done.)

Path

* Daten**Active**: Make False, to prevent operation from generating code
* Daten**Base**: The base geometry for this operation
* Daten**Comment**: An optional comment for this Operation
* Daten**Coolant Mode**: The coolant mode for this operation.
* Daten**Cycle Time**: The cycle time estimation for this operation.
* Daten**Tool Controller**: Defines the Tool controller used in the Operation
* Daten**User Label**: User assigned label

Pocket

* Daten**Cut Mode**: The direction that the toolpath should go around the part ClockWise (CW) or CounterClockWise (CCW)
* Daten**Extra Offset**: Extra offset to apply to the operation. Direction is operation dependent.
* Daten**StartAt**: Start pocketing at center or boundary
* Daten**Step Over**: Percent of cutter diameter to step over on each pass
* Daten**Zig Zag Angle**: Angle of the zigzag pattern
* Daten**Offset Pattern**: Clearing pattern to use
* Daten**Min Travel**: Use 3D Sorting of Path
* Daten**Keep Tool Down**: Attempts to avoid unnecessary retractions.

Rotation

* Daten**Attempt Inverse Angle**: Automatically attempt Inverse Angle if initial rotation is incorrect.
* Daten**Enable Rotation**: Enable rotation to gain access to pockets or areas not normal to Z axis.
* Daten**Inverse Angle**: Inverse the angle of the rotation.  ***Example:** change a rotation from -22.5 to 22.5 degrees.*
* Daten**Limit Depth To Face**: Enforce the Z-depth of the selected face as the lowest value for final depth. Higher user values for final depth will be observed.
* Daten**Reverse Direction**: Reverse orientation of Operation by 180 degrees.

Start Point

* Daten**Start Point**: The custom start point for the path of this operation.
  + Daten**X**: X distance value
  + Daten**Y**: Y distance value
  + Daten**Z**: Z distance value
* Daten**Use Start Point**: Make True, if manually specifying a Start Point. Set the start point in the property data Start Point field.

### View

Empty

## Skripten

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_MillFace/de&oldid=1393390>"