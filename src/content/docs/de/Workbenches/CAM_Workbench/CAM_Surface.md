---
title: CAM Surface/de
---
:::caution
This is an unfinished experimental feature.Enable Experimental Features
:::
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM Surface |
| Menu location |
| CAM → 3D Surface |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Beschreibung

This tool creates a new ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation which is capable of generating G-code paths for the entire top surface of a 3D model (or is able to work with selected faces) and allows for faces to be avoided. This operation offers multiple cut patterns: Line, Zigzag, Circular, Circular Zigzag, Offset, and Spiral (similar to an adaptive pattern). As of version 0.19, this operation offers many customizations to allow for greater productivity.

The ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation is also capable of generating basic rotational 3D surfacing paths. The rotational capabilities are limited to the entire model, and do not allow for specific faces or regions to be isolated. The rotational paths are also limited to line cut patterns.

The 3D Surface Tool interfaces to OCL.pyd, a 3rd party Open Source module titled [OpenCamLib](/OpenCamLib "OpenCamLib"), that generates tool paths from a 3D model. OpenCamLib is not integrated directly into FreeCAD.

**Note:** In order to use the 3D Surface operation you must:

1. Properly install [OpenCamLib](/OpenCamLib "OpenCamLib").
2. Enable [Experimental Features](/CAM_experimental "CAM experimental") for the CAM Workbench.
3. Check **Edit → Preferences... → CAM → Advanced → Enable OCL dependent features**.

## Anwendung

Usage instructions for multiple variations of the [3D Surface](/CAM_Surface "CAM Surface") operation are presented here.

#### Basic Operation

1. Press the ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") icon, or select **CAM → 3D Surface** from the dropdown menu.
2. Select the tool controller for the Operation from the Tool controller dialogue pop up window, if presented.
3. In the Base Geometry tab, select any specific faces you wish to focus on and/or avoid for the operation.
4. Adjust the operation depths as needed in the Depths tab: Start Depth, Finish Depth, Step Down.
5. Make adjustments in Heights tab if needed.
6. Configure settings in the Operations tab as needed:
   * Choose your Coolant Mode.
   * Choose the BoundBox: Stock or BaseBoundBox
   * Set the Scan Type for the operation: Planar or Rotational
   * Select the Layer Mode for the operation: Single-pass or Multi-pass
     1. Single-pass is for a finishing pass
     2. Multi-pass could be used for clearing in combination with the use of Depth Offset to leave a thin surface layer for a finish pass
   * Add additional BoundBox Extra Offset to X and Y as desired (*Rotational scans only*)
   * Set the Drop Cutter Direction: X or Y. This is the linear direction the cutter(spindle) will travel. (*Rotational scans only*)
   * Add a Depth Offset value if you wish to leave a specified thickness of material on the surface, for say a final finish pass
   * Set the Sample Interval used for the OCL scan.
   * Set the Step Over value as a percentage of the diameter of the Tool.
   * Check the Use Start Point box if you wish to provide a start point for the operation in the properties view of the data tab for the operation.
   * Boundary Enforcement is enabled by default. This forces the cutter to remain inside the boundaries of the feature geometry for the operation, like a pocketing operation. Disable to allow the cutter to extend to the outside of the feature geometry. The Boundary Adjustment property supersedes this property.
   * Optimize Linear Paths is enabled by default. Disabling will yield a longer gcode result and likely increase cut time.
7. If you wish to preview the result before accepting the settings, click Apply
8. Click OK button to confirm and generate paths.

To achieve different, or more complex, effects, adjust additional operation properties within the Data tab of the Properties View for the operation.

#### Rotational Scans (4th-axis)

1. Initiate a [Basic Operation](#Basic_Operation) as described above and set the **Scan Type** to **Rotational**.
2. **Note:** Face selection is unavailable for Rotational scans, so changes to Base Geometry are ignored.
3. Locate the Data tab and Properties View for the new [3D Surface](/CAM_Surface "CAM Surface") operation. A **Rotation** section should be available with additional properties to adjust, listed below.  
   It is recommended that you set the desired rotation properties all at once before recomputing. This is done by clicking the ENTER key immediately after changing a property setting. This process will allow you to change and save multiple properties before recomputing the operation.
4. Adjust the following settings as needed:
   * Set Daten**Cutter Tilt** to the offset index(angle) [0-90]. (Used for ball mill cutters)
   * Change Daten**Drop Cutter Dir** to the axis of travel for the cutter(spindle).
   * Change Daten**Drop Cutter Extra Offset** to extend the BoundBox in the X and Y directions.
   * Set Daten**Rotation Axis** to the desired axis.
   * Adjust Daten**Start Index** to start index(angle) [0-360].
   * Adjust Daten**Stop Index** to stop index(angle) [0-360].
5. Click the ![](/images/View-refresh.svg) [Refresh](/Std_Refresh "Std Refresh") icon in the tool bar.
6. Wait for the results...

##### Notes About Rotational Scans

* **Rotational** scans require much more time and processing than **Planar** scans. Factors affecting processing time include: Sample Interval, Step Over, tool diameter, and model size. Again, rotational scans can take a long time. Some might take 3, 5 or 10 minutes or longer.
* For time purposes, it is better that you not recompute a rotational scan after every property change; rather, consider one of the following:
  + use the ' *change all settings with ENTER key* ' technique mentioned in Step 2 above, then ![](/images/View-refresh.svg) [Refresh](/Std_Refresh "Std Refresh") the operation.
  + deactivate the operation with the ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") toggle tool, make your changes to the operation's properties, then click the ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") icon again to re-activate the operation - which triggers a recompute internally.
* The ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation is still considered an *experimental feature* as of 2019-06-25. As such, it may contain a few bugs yet to be clearly identified. Please report bugs and issues in the [FreeCAD Path/CAM Forum](https://forum.freecadweb.org/viewforum.php?f=15).
* The built in ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator") does NOT support 4th-axis simulation. You will need to use a third party simulator to inspect or verify paths visually. See the [Resources](#Resources) section below for suggestions.
* You will likely see red rotational lines around your model in the viewport. This is normal in FreeCAD for the time being.

##### Notes About Scans of complex models

Excessively long processing times (longer than 10 minutes) can occur when processing large complex models. In addition to the factors already mentioned the following steps could help identify potential causes and solutions.

***Low Memory***  
Check how much memory is available while the scan is running using a tool such as the Windows **Task Manager, Memory tab**. If more than 90% of memory is consistently being used then a small **Linear Deflection** parameter could be generating a mesh that is too large for the available memory.  
To confirm this ...

1. Create a new ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation.
2. Switch to the Model tab and increase the Daten**Linear Deflection** value. For example change from 2.5um to 20um
3. Switch back to the Tasks tab to complete setting up the operation.
4. Click OK button to confirm and generate paths.

To make this value the default for all new ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations, change the **GeometryTolerance** parameter.  
**Tools → Edit Parameters ... → Preferences → Mod → CAM → GeometryTolerance** .   
Note as of version 0.19 the Daten**Linear Deflection** default = GeometryTolerance / 4

***Invalid Geometry***  
If a model contains invalid geometry the scanning time can increase significantly. A model can be checked using the [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") function in ![](/images/Workbench_Part.svg)**Part Workbench**.   
To run the tool:

1. Switch to the ![](/images/Workbench_Part.svg)**Part Workbench** and select the model to check
2. Click on the ![](/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") button available in the Part workbench toolbar OR use the **Part → ![](/images/Part_CheckGeometry.svg) Check geometry** entry from the top menu.
3. Click the **Run Check** button and review the results.

If the results includes items like *BOPAlgo SelfIntersect* then the geometry is invalid and should be corrected by adjusting the model.   
(Hint: Boolean operations and Loft commands can sometimes introduce *Self Intersections*)

#### Available Tool (Cutter) Shapes

This 3D Surface op currently uses [OpenCamLib](/OpenCamLib "OpenCamLib") to extract paths from the part base. As such, a tool setting translation is required between the FreeCAD tool controller and OCL in order to complete the scan with your chosen tool(cutter) shape.

These tool shapes are respected and available for this 3D Surface operation:

* End mill
* Ball end mill
* Bull nose end mill
* Chamfer bit
* Engraver

Should you choose to run the path simulator in the CAM Workbench, it only uses the standard end mill to simulate paths. Therefore, you will not see tool-shape-specific material removal. Material removal is shown using the end mill shape.

NOTE: As of May 2019, only the End Mill has any type of testing to determine accuracy of the FreeCAD-to-OCL tool settings translation. Please post any feedback for non-end-mill usage to the [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) section in the FreeCAD forums.

## Properties: Version 0.19

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

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

Clearing Options

* Daten**Bound Box**: Should the operation be limited by the stock object or by the bounding box of the base object
* Daten**Cut Mode**: The direction that the toolpath should go around the part: Climb(ClockWise) or Conventional(CounterClockWise)
* Daten**Cut Pattern**: Clearing pattern to use
* Daten**Cut Pattern Reversed**: Reverse the cut order of the stepover paths. For circular cut patterns, begin at the outside and work toward the center
* Daten**Depth Offset**: Z-axis offset from the surface of the object
* Daten**Layer Mode**: The completion mode for the operation: single or multi-pass
* Daten**Pattern Center At**: Choose location of the center point for starting the cut pattern
* Daten**Pattern Center Custom**: Set the start point for the cut pattern
* Daten**Profile Edges**: Profile the edges of the selection. There are the following options (images can be seen in this forum post: <https://forum.freecad.org/viewtopic.php?p=676452#p676452>):
  + Daten**None**: Don't create a profile
  + Daten**Only**: Create only a profile and no inner paths
  + Daten**First**: Start with the profile and then do the rest
  + Daten**Last**: Start with the rest and then do the profile
* Daten**Sample Interval**: The Sample Interval. Small values cause long wait times
* Daten**Step Over**: Step over percentage of the drop cutter path

Depth

* Daten**Clearance Height**: The height needed to clear clamps and obstructions
* Daten**Final Depth**: Final Depth of Tool- lowest value in Z
* Daten**Safe Height**: The above which Rapid motions are allowed.
* Daten**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Daten**Step Down**: Incremental Step Down of Tool

Mesh Conversion

* Daten**Angular Deflection**: Smaller values yield a finer, more accurate mesh. Smaller values increase processing time a lot
* Daten**Linear Deflection**: Smaller values yield a finer, more accurate mesh. Smaller values do not increase processing time much but can increase memory comsumption

Optimization

* Daten**Circular Use G2 G3**: Convert co-planar arcs to G2/G3 gcode commands for `Circular` and `CircularZigZag` cut patterns
* Daten**Gap Sizes**: Feedback: three smallest gaps identified in the path geometry
* Daten**Gap Threshold**: Collinear and co-radial artifact gaps that are smaller than this threshold are closed in the path
* Daten**Optimize Linear Paths**: Enable optimization of linear paths (co-linear points). Removes unnecessary co-linear points from G-Code output
* Daten**Optimize Step Over Transitions**: Enable separate optimization of transitions between, and breaks within, each step over path

Path

* Daten**Active**: Make False, to prevent operation from generating code
* Daten**Base**: The base geometry for this operation
* Daten**Comment**: An optional comment for this Operation
* Daten**Coolant Mode**: Coolant mode for this operation
* Daten**Cycle Time**: Operations Cycle Time Estimation
* Daten**Tool Controller**: Defines the Tool controller used in the Operation
* Daten**User Label**: User assigned label

Rotation

* Daten**Cutter Tilt**: Set the cutter (spindle) tilt angle.
* Daten**Drop Cutter Dir**: The direction along which dropcutter lines are created
* Daten**Drop Cutter Extra Offset**: Additional offset to the selected bounding box - use sub-properties to set values
  + Daten**X**: X distance value
  + Daten**Y**: Y distance value
  + Daten**Z**: Z distance value
* Daten**Rotation Axis**: Set the axis for model rotation.
* Daten**Start Index**: Start index(angle) for rotation
* Daten**Stop Index**: Stop index(angle) for rotation

Selected Geometry Settings

* Daten**Avoid Last X Faces**: Avoid cutting the last 'N' faces in the Base Geometry list of selected faces
* Daten**Avoid Last X Internal Features**: Do not cut internal features on avoided faces
* Daten**Boundary Adjustment**: Positive values push the cutter toward, or beyond, the boundary. Negative values retract the cutter away from the boundary
* Daten**Boundary Enforcement**: If true, the cutter will remain inside the boundaries of the model or selected face(s)
* Daten**Handle Multiple Features**: Choose how to process multiple Base Geometry features
* Daten**Internal Features Adjustment**: Positive values push the cutter toward, or into, the feature. Negative values retract the cutter away from the feature
* Daten**Internal Features Cut**: Cut internal feature areas within a larger selected face

Start Point

* Daten**Start Point**: The custom start point for the path of this operation, set in sub-properties: X, Y, Z
  + Daten**X**: X axis value
  + Daten**Y**: Y axis value
  + Daten**Z**: Z axis value
* Daten**Use Start Point**: Make True, if specifying a Start Point

Surface

* Daten**Scan Type**: Planar: Flat, 3D surface scan. Rotational: 4th-axis rotational scan.

Waste

* Daten**Ignore Waste**: Ignore areas that proceed below specified depth.
* Daten**Ignore Waste Depth**: Depth used to identify waste areas to ignore.
* Daten**Release From Waste**: Cut through waste to depth at model edge, releasing the model.

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Location

* **Base Geometry import selection**: Use this list to select Base Geometry to be imported from the selected, existing operation
* **Import**: Imports the selected operation's Base Geometry into the current operations Base Geometry list
* **Base Geometry list for current operation**: List of Base Geometry for current operation, if any selected
* **Add**: Adds selected element(s) which should be the base(s) for the path(s)
* **Remove**: Remove the selected item(s) in the Base Location list
* **Clear**: Clear all items in the Base Location list

### Depth

* Daten**Start Depth**
* Daten**Final Depth**
* Daten**Step Down**

### Height

* Daten**Safe Height**
* Daten**Clearance Height**

### Operation

* Daten**Tool Controller**
* Daten**Coolant Mode**

* Daten**BoundBox**
* Daten**Scan Type**
* Daten**Layer Mode**
* Daten**BoundBox extra offset X**
* Daten**BoundBox extra offset Y**
* Daten**Drop Cutter Direction**
* Daten**Depth Offset**
* Daten**Step Over**
* Daten**Sample Interval**
* Daten**Optimize Output Enabled**

* Daten**Use Start Point**
* Daten**Boundary Enforcement**
* Daten**Optimize Linear Paths**

## Resources

* G-code(path) simulator: [NCViewer](https://ncviewer.com/)
* G-code(path) simulator: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Surface/de&oldid=1482944>"