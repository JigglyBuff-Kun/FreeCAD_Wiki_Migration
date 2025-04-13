---
title: CAM Surface
---

:::caution
This is an unfinished experimental feature.Enable Experimental Features
:::
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                       |
| ------------------------------------- |
| CAM Surface                           |
| Menu location                         |
| CAM → 3D Surface                      |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| 0.19                                  |
| See also                              |
| _None_                                |
|                                       |

## Description

This tool creates a new ![](/src/assets/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation which is capable of generating G-code paths for the entire top surface of a 3D model (or is able to work with selected faces) and allows for faces to be avoided. This operation offers multiple cut patterns: Line, Zigzag, Circular, Circular Zigzag, Offset, and Spiral (similar to an adaptive pattern). As of version 0.19, this operation offers many customizations to allow for greater productivity.

The ![](/src/assets/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation is also capable of generating basic rotational 3D surfacing paths. The rotational capabilities are limited to the entire model, and do not allow for specific faces or regions to be isolated. The rotational paths are also limited to line cut patterns.

The 3D Surface Tool interfaces to OCL.pyd, a 3rd party Open Source module titled [OpenCamLib](/OpenCamLib "OpenCamLib"), that generates tool paths from a 3D model. OpenCamLib is not integrated directly into FreeCAD.

**Note:** In order to use the 3D Surface operation you must:

1. Properly install [OpenCamLib](/OpenCamLib "OpenCamLib").
2. Enable [Experimental Features](/CAM_experimental "CAM experimental") for the CAM Workbench.
3. Check **Edit → Preferences... → CAM → Advanced → Enable OCL dependent features**.

## Usage

Usage instructions for multiple variations of the [3D Surface](/CAM_Surface "CAM Surface") operation are presented here.

#### Basic Operation

1. Press the ![](/src/assets/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") icon, or select **CAM → 3D Surface** from the dropdown menu.
2. Select the tool controller for the Operation from the Tool controller dialogue pop up window, if presented.
3. In the Base Geometry tab, select any specific faces you wish to focus on and/or avoid for the operation.
4. Adjust the operation depths as needed in the Depths tab: Start Depth, Finish Depth, Step Down.
5. Make adjustments in Heights tab if needed.
6. Configure settings in the Operations tab as needed:
   - Choose your Coolant Mode.
   - Choose the BoundBox: Stock or BaseBoundBox
   - Set the Scan Type for the operation: Planar or Rotational
   - Select the Layer Mode for the operation: Single-pass or Multi-pass
     1. Single-pass is for a finishing pass
     2. Multi-pass could be used for clearing in combination with the use of Depth Offset to leave a thin surface layer for a finish pass
   - Add additional BoundBox Extra Offset to X and Y as desired (_Rotational scans only_)
   - Set the Drop Cutter Direction: X or Y. This is the linear direction the cutter(spindle) will travel. (_Rotational scans only_)
   - Add a Depth Offset value if you wish to leave a specified thickness of material on the surface, for say a final finish pass
   - Set the Sample Interval used for the OCL scan.
   - Set the Step Over value as a percentage of the diameter of the Tool.
   - Check the Use Start Point box if you wish to provide a start point for the operation in the properties view of the data tab for the operation.
   - Boundary Enforcement is enabled by default. This forces the cutter to remain inside the boundaries of the feature geometry for the operation, like a pocketing operation. Disable to allow the cutter to extend to the outside of the feature geometry. The Boundary Adjustment property supersedes this property.
   - Optimize Linear Paths is enabled by default. Disabling will yield a longer gcode result and likely increase cut time.
7. If you wish to preview the result before accepting the settings, click Apply
8. Click OK button to confirm and generate paths.

To achieve different, or more complex, effects, adjust additional operation properties within the Data tab of the Properties View for the operation.

#### Rotational Scans (4th-axis)

1. Initiate a [Basic Operation](#Basic_Operation) as described above and set the **Scan Type** to **Rotational**.
2. **Note:** Face selection is unavailable for Rotational scans, so changes to Base Geometry are ignored.
3. Locate the Data tab and Properties View for the new [3D Surface](/CAM_Surface "CAM Surface") operation. A **Rotation** section should be available with additional properties to adjust, listed below.  
   It is recommended that you set the desired rotation properties all at once before recomputing. This is done by clicking the ENTER key immediately after changing a property setting. This process will allow you to change and save multiple properties before recomputing the operation.
4. Adjust the following settings as needed:
   - Set Data**Cutter Tilt** to the offset index(angle) [0-90]. (Used for ball mill cutters)
   - Change Data**Drop Cutter Dir** to the axis of travel for the cutter(spindle).
   - Change Data**Drop Cutter Extra Offset** to extend the BoundBox in the X and Y directions.
   - Set Data**Rotation Axis** to the desired axis.
   - Adjust Data**Start Index** to start index(angle) [0-360].
   - Adjust Data**Stop Index** to stop index(angle) [0-360].
5. Click the ![](/src/assets/images/View-refresh.svg) [Refresh](/Std_Refresh "Std Refresh") icon in the tool bar.
6. Wait for the results...

##### Notes About Rotational Scans

- **Rotational** scans require much more time and processing than **Planar** scans. Factors affecting processing time include: Sample Interval, Step Over, tool diameter, and model size. Again, rotational scans can take a long time. Some might take 3, 5 or 10 minutes or longer.
- For time purposes, it is better that you not recompute a rotational scan after every property change; rather, consider one of the following:
  - use the ' _change all settings with ENTER key_ ' technique mentioned in Step 2 above, then ![](/src/assets/images/View-refresh.svg) [Refresh](/Std_Refresh "Std Refresh") the operation.
  - deactivate the operation with the ![](/src/assets/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") toggle tool, make your changes to the operation's properties, then click the ![](/src/assets/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") icon again to re-activate the operation - which triggers a recompute internally.
- The ![](/src/assets/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation is still considered an _experimental feature_ as of 2019-06-25. As such, it may contain a few bugs yet to be clearly identified. Please report bugs and issues in the [FreeCAD Path/CAM Forum](https://forum.freecadweb.org/viewforum.php?f=15).
- The built in ![](/src/assets/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator") does NOT support 4th-axis simulation. You will need to use a third party simulator to inspect or verify paths visually. See the [Resources](#Resources) section below for suggestions.
- You will likely see red rotational lines around your model in the viewport. This is normal in FreeCAD for the time being.

##### Notes About Scans of complex models

Excessively long processing times (longer than 10 minutes) can occur when processing large complex models. In addition to the factors already mentioned the following steps could help identify potential causes and solutions.

**_Low Memory_**  
Check how much memory is available while the scan is running using a tool such as the Windows **Task Manager, Memory tab**. If more than 90% of memory is consistently being used then a small **Linear Deflection** parameter could be generating a mesh that is too large for the available memory.  
To confirm this ...

1. Create a new ![](/src/assets/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation.
2. Switch to the Model tab and increase the Data**Linear Deflection** value. For example change from 2.5um to 20um
3. Switch back to the Tasks tab to complete setting up the operation.
4. Click OK button to confirm and generate paths.

To make this value the default for all new ![](/src/assets/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations, change the **GeometryTolerance** parameter.  
**Tools → Edit Parameters ... → Preferences → Mod → CAM → GeometryTolerance** .  
Note as of version 0.19 the Data**Linear Deflection** default = GeometryTolerance / 4

**_Invalid Geometry_**  
If a model contains invalid geometry the scanning time can increase significantly. A model can be checked using the [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") function in ![](/src/assets/images/Workbench_Part.svg)**Part Workbench**.  
To run the tool:

1. Switch to the ![](/src/assets/images/Workbench_Part.svg)**Part Workbench** and select the model to check
2. Click on the ![](/src/assets/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") button available in the Part workbench toolbar OR use the **Part → ![](/src/assets/images/Part_CheckGeometry.svg) Check geometry** entry from the top menu.
3. Click the **Run Check** button and review the results.

If the results includes items like _BOPAlgo SelfIntersect_ then the geometry is invalid and should be corrected by adjusting the model.  
(Hint: Boolean operations and Loft commands can sometimes introduce _Self Intersections_)

#### Available Tool (Cutter) Shapes

This 3D Surface op currently uses [OpenCamLib](/OpenCamLib "OpenCamLib") to extract paths from the part base. As such, a tool setting translation is required between the FreeCAD tool controller and OCL in order to complete the scan with your chosen tool(cutter) shape.

These tool shapes are respected and available for this 3D Surface operation:

- End mill
- Ball end mill
- Bull nose end mill
- Chamfer bit
- Engraver

Should you choose to run the path simulator in the CAM Workbench, it only uses the standard end mill to simulate paths. Therefore, you will not see tool-shape-specific material removal. Material removal is shown using the end mill shape.

NOTE: As of May 2019, only the End Mill has any type of testing to determine accuracy of the FreeCAD-to-OCL tool settings translation. Please post any feedback for non-end-mill usage to the [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) section in the FreeCAD forums.

## Properties: Version 0.19

**_Note_** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

- Data**Placement**: Overall placement [position and rotation] of the object - with respect to the origin (or origin of parent object container)
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

Clearing Options

- Data**Bound Box**: Should the operation be limited by the stock object or by the bounding box of the base object
- Data**Cut Mode**: The direction that the toolpath should go around the part: Climb(ClockWise) or Conventional(CounterClockWise)
- Data**Cut Pattern**: Clearing pattern to use
- Data**Cut Pattern Reversed**: Reverse the cut order of the stepover paths. For circular cut patterns, begin at the outside and work toward the center
- Data**Depth Offset**: Z-axis offset from the surface of the object
- Data**Layer Mode**: The completion mode for the operation: single or multi-pass
- Data**Pattern Center At**: Choose location of the center point for starting the cut pattern
- Data**Pattern Center Custom**: Set the start point for the cut pattern
- Data**Profile Edges**: Profile the edges of the selection. There are the following options (images can be seen in this forum post: <https://forum.freecad.org/viewtopic.php?p=676452#p676452>):
  - Data**None**: Don't create a profile
  - Data**Only**: Create only a profile and no inner paths
  - Data**First**: Start with the profile and then do the rest
  - Data**Last**: Start with the rest and then do the profile
- Data**Sample Interval**: The Sample Interval. Small values cause long wait times
- Data**Step Over**: Step over percentage of the drop cutter path

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions
- Data**Final Depth**: Final Depth of Tool- lowest value in Z
- Data**Safe Height**: The above which Rapid motions are allowed.
- Data**Start Depth**: Starting Depth of Tool- first cut depth in Z
- Data**Step Down**: Incremental Step Down of Tool

Mesh Conversion

- Data**Angular Deflection**: Smaller values yield a finer, more accurate mesh. Smaller values increase processing time a lot
- Data**Linear Deflection**: Smaller values yield a finer, more accurate mesh. Smaller values do not increase processing time much but can increase memory comsumption

Optimization

- Data**Circular Use G2 G3**: Convert co-planar arcs to G2/G3 gcode commands for `Circular` and `CircularZigZag` cut patterns
- Data**Gap Sizes**: Feedback: three smallest gaps identified in the path geometry
- Data**Gap Threshold**: Collinear and co-radial artifact gaps that are smaller than this threshold are closed in the path
- Data**Optimize Linear Paths**: Enable optimization of linear paths (co-linear points). Removes unnecessary co-linear points from G-Code output
- Data**Optimize Step Over Transitions**: Enable separate optimization of transitions between, and breaks within, each step over path

Path

- Data**Active**: Make False, to prevent operation from generating code
- Data**Base**: The base geometry for this operation
- Data**Comment**: An optional comment for this Operation
- Data**Coolant Mode**: Coolant mode for this operation
- Data**Cycle Time**: Operations Cycle Time Estimation
- Data**Tool Controller**: Defines the Tool controller used in the Operation
- Data**User Label**: User assigned label

Rotation

- Data**Cutter Tilt**: Set the cutter (spindle) tilt angle.
- Data**Drop Cutter Dir**: The direction along which dropcutter lines are created
- Data**Drop Cutter Extra Offset**: Additional offset to the selected bounding box - use sub-properties to set values
  - Data**X**: X distance value
  - Data**Y**: Y distance value
  - Data**Z**: Z distance value
- Data**Rotation Axis**: Set the axis for model rotation.
- Data**Start Index**: Start index(angle) for rotation
- Data**Stop Index**: Stop index(angle) for rotation

Selected Geometry Settings

- Data**Avoid Last X Faces**: Avoid cutting the last 'N' faces in the Base Geometry list of selected faces
- Data**Avoid Last X Internal Features**: Do not cut internal features on avoided faces
- Data**Boundary Adjustment**: Positive values push the cutter toward, or beyond, the boundary. Negative values retract the cutter away from the boundary
- Data**Boundary Enforcement**: If true, the cutter will remain inside the boundaries of the model or selected face(s)
- Data**Handle Multiple Features**: Choose how to process multiple Base Geometry features
- Data**Internal Features Adjustment**: Positive values push the cutter toward, or into, the feature. Negative values retract the cutter away from the feature
- Data**Internal Features Cut**: Cut internal feature areas within a larger selected face

Start Point

- Data**Start Point**: The custom start point for the path of this operation, set in sub-properties: X, Y, Z
  - Data**X**: X axis value
  - Data**Y**: Y axis value
  - Data**Z**: Z axis value
- Data**Use Start Point**: Make True, if specifying a Start Point

Surface

- Data**Scan Type**: Planar: Flat, 3D surface scan. Rotational: 4th-axis rotational scan.

Waste

- Data**Ignore Waste**: Ignore areas that proceed below specified depth.
- Data**Ignore Waste Depth**: Depth used to identify waste areas to ignore.
- Data**Release From Waste**: Cut through waste to depth at model edge, releasing the model.

## Tasks Window Editor Layout

_Descriptions for the settings are provided in the Properties list above._

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Location

- **Base Geometry import selection**: Use this list to select Base Geometry to be imported from the selected, existing operation
- **Import**: Imports the selected operation's Base Geometry into the current operations Base Geometry list
- **Base Geometry list for current operation**: List of Base Geometry for current operation, if any selected
- **Add**: Adds selected element(s) which should be the base(s) for the path(s)
- **Remove**: Remove the selected item(s) in the Base Location list
- **Clear**: Clear all items in the Base Location list

### Depth

- Data**Start Depth**
- Data**Final Depth**
- Data**Step Down**

### Height

- Data**Safe Height**
- Data**Clearance Height**

### Operation

- Data**Tool Controller**
- Data**Coolant Mode**

- Data**BoundBox**
- Data**Scan Type**
- Data**Layer Mode**
- Data**BoundBox extra offset X**
- Data**BoundBox extra offset Y**
- Data**Drop Cutter Direction**
- Data**Depth Offset**
- Data**Step Over**
- Data**Sample Interval**
- Data**Optimize Output Enabled**

- Data**Use Start Point**
- Data**Boundary Enforcement**
- Data**Optimize Linear Paths**

## Resources

- G-code(path) simulator: [NCViewer](https://ncviewer.com/)
- G-code(path) simulator: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Surface/en&oldid=1482943>"
