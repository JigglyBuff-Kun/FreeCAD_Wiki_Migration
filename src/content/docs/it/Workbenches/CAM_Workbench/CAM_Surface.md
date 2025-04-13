---
title: Path Sfacciatura 3D
---
:::caution
This is an unfinished experimental feature.Enable Experimental Features
:::
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Sfacciatura 3D |
| Posizione nel menu |
| Path → Sfacciatura 3D |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Questo strumento crea una nuova operazione di Sfacciatura 3D. Un'operazione di sfacciatura 3D utilizza l'intera superficie superiore del Modello 3D per generare il codice G per la lavorazione.

The ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operation is also capable of generating basic rotational 3D surfacing paths. The rotational capabilities are limited to the entire model, and do not allow for specific faces or regions to be isolated. The rotational paths are also limited to line cut patterns.

Lo strumento Sfacciatura 3D si interfaccia con OCL.pyd, un modulo Open Source di terze parti denominato OpenCamLib, che genera percorsi utensile da un modello 3D. OpenCamLib non è integrato direttamente in FreeCAD per garantire che la sua licenza non sia violata. Richiede che [Experimental Features](/Path_experimental/it "Path experimental/it") siano abilitate.

**Note:** In order to use the 3D Surface operation you must:

1. Properly install [OpenCamLib](/OpenCamLib "OpenCamLib").
2. Enable [Experimental Features](/CAM_experimental "CAM experimental") for the CAM Workbench.
3. Check **Edit → Preferences... → CAM → Advanced → Enable OCL dependent features**.

## Usage

Usage instructions for multiple variations of the [3D Surface](/CAM_Surface "CAM Surface") operation are presented here.

#### Basic Operation

1. Premere il pulsante ![](/images/Path_Surface.svg) [Sfacciatura 3D](/Path_Surface "Path Surface").
2. Selezionare il controller dello strumento l'operazione dalla finestra pop up di dialogo del controller dello strumento.
3. Impostare la profondità di finitura Finish Depth.
4. Selezionare tra Dropcutter e Waterline per l'algoritmo dello strumento.
5. Applica, e poi OK per confermare.

To achieve different, or more complex, effects, adjust additional operation properties within the Data tab of the Properties View for the operation.

#### Rotational Scans (4th-axis)

1. Initiate a [Basic Operation](#Basic_Operation) as described above and set the **Scan Type** to **Rotational**.
2. **Note:** Face selection is unavailable for Rotational scans, so changes to Base Geometry are ignored.
3. Locate the Data tab and Properties View for the new [3D Surface](/CAM_Surface "CAM Surface") operation. A **Rotation** section should be available with additional properties to adjust, listed below.  
   It is recommended that you set the desired rotation properties all at once before recomputing. This is done by clicking the ENTER key immediately after changing a property setting. This process will allow you to change and save multiple properties before recomputing the operation.
4. Adjust the following settings as needed:
   * Set Dati**Cutter Tilt** to the offset index(angle) [0-90]. (Used for ball mill cutters)
   * Change Dati**Drop Cutter Dir** to the axis of travel for the cutter(spindle).
   * Change Dati**Drop Cutter Extra Offset** to extend the BoundBox in the X and Y directions.
   * Set Dati**Rotation Axis** to the desired axis.
   * Adjust Dati**Start Index** to start index(angle) [0-360].
   * Adjust Dati**Stop Index** to stop index(angle) [0-360].
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
2. Switch to the Model tab and increase the Dati**Linear Deflection** value. For example change from 2.5um to 20um
3. Switch back to the Tasks tab to complete setting up the operation.
4. Click OK button to confirm and generate paths.

To make this value the default for all new ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations, change the **GeometryTolerance** parameter.  
**Tools → Edit Parameters ... → Preferences → Mod → CAM → GeometryTolerance** .   
Note as of version 0.19 the Dati**Linear Deflection** default = GeometryTolerance / 4

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

* Dati**Placement**: Overall placement [position and rotation] of the object - with respect to the origin (or origin of parent object container)
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

Clearing Options

* Dati**Bound Box**: Should the operation be limited by the stock object or by the bounding box of the base object
* Dati**Cut Mode**: The direction that the toolpath should go around the part: Climb(ClockWise) or Conventional(CounterClockWise)
* Dati**Cut Pattern**: Clearing pattern to use
* Dati**Cut Pattern Reversed**: Reverse the cut order of the stepover paths. For circular cut patterns, begin at the outside and work toward the center
* Dati**Depth Offset**: Z-axis offset from the surface of the object
* Dati**Layer Mode**: The completion mode for the operation: single or multi-pass
* Dati**Pattern Center At**: Choose location of the center point for starting the cut pattern
* Dati**Pattern Center Custom**: Set the start point for the cut pattern
* Dati**Profile Edges**: Profile the edges of the selection. There are the following options (images can be seen in this forum post: <https://forum.freecad.org/viewtopic.php?p=676452#p676452>):
  + Dati**None**: Don't create a profile
  + Dati**Only**: Create only a profile and no inner paths
  + Dati**First**: Start with the profile and then do the rest
  + Dati**Last**: Start with the rest and then do the profile
* Dati**Sample Interval**: The Sample Interval. Small values cause long wait times
* Dati**Step Over**: Step over percentage of the drop cutter path

Depth

* Dati**Clearance Height**: The height needed to clear clamps and obstructions
* Dati**Final Depth**: Final Depth of Tool- lowest value in Z
* Dati**Safe Height**: The above which Rapid motions are allowed.
* Dati**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Dati**Step Down**: Incremental Step Down of Tool

Mesh Conversion

* Dati**Angular Deflection**: Smaller values yield a finer, more accurate mesh. Smaller values increase processing time a lot
* Dati**Linear Deflection**: Smaller values yield a finer, more accurate mesh. Smaller values do not increase processing time much but can increase memory comsumption

Optimization

* Dati**Circular Use G2 G3**: Convert co-planar arcs to G2/G3 gcode commands for `Circular` and `CircularZigZag` cut patterns
* Dati**Gap Sizes**: Feedback: three smallest gaps identified in the path geometry
* Dati**Gap Threshold**: Collinear and co-radial artifact gaps that are smaller than this threshold are closed in the path
* Dati**Optimize Linear Paths**: Enable optimization of linear paths (co-linear points). Removes unnecessary co-linear points from G-Code output
* Dati**Optimize Step Over Transitions**: Enable separate optimization of transitions between, and breaks within, each step over path

Path

* Dati**Active**: Make False, to prevent operation from generating code
* Dati**Base**: The base geometry for this operation
* Dati**Comment**: An optional comment for this Operation
* Dati**Coolant Mode**: Coolant mode for this operation
* Dati**Cycle Time**: Operations Cycle Time Estimation
* Dati**Tool Controller**: Defines the Tool controller used in the Operation
* Dati**User Label**: User assigned label

Rotation

* Dati**Cutter Tilt**: Set the cutter (spindle) tilt angle.
* Dati**Drop Cutter Dir**: The direction along which dropcutter lines are created
* Dati**Drop Cutter Extra Offset**: Additional offset to the selected bounding box - use sub-properties to set values
  + Dati**X**: X distance value
  + Dati**Y**: Y distance value
  + Dati**Z**: Z distance value
* Dati**Rotation Axis**: Set the axis for model rotation.
* Dati**Start Index**: Start index(angle) for rotation
* Dati**Stop Index**: Stop index(angle) for rotation

Selected Geometry Settings

* Dati**Avoid Last X Faces**: Avoid cutting the last 'N' faces in the Base Geometry list of selected faces
* Dati**Avoid Last X Internal Features**: Do not cut internal features on avoided faces
* Dati**Boundary Adjustment**: Positive values push the cutter toward, or beyond, the boundary. Negative values retract the cutter away from the boundary
* Dati**Boundary Enforcement**: If true, the cutter will remain inside the boundaries of the model or selected face(s)
* Dati**Handle Multiple Features**: Choose how to process multiple Base Geometry features
* Dati**Internal Features Adjustment**: Positive values push the cutter toward, or into, the feature. Negative values retract the cutter away from the feature
* Dati**Internal Features Cut**: Cut internal feature areas within a larger selected face

Start Point

* Dati**Start Point**: The custom start point for the path of this operation, set in sub-properties: X, Y, Z
  + Dati**X**: X axis value
  + Dati**Y**: Y axis value
  + Dati**Z**: Z axis value
* Dati**Use Start Point**: Make True, if specifying a Start Point

Surface

* Dati**Scan Type**: Planar: Flat, 3D surface scan. Rotational: 4th-axis rotational scan.

Waste

* Dati**Ignore Waste**: Ignore areas that proceed below specified depth.
* Dati**Ignore Waste Depth**: Depth used to identify waste areas to ignore.
* Dati**Release From Waste**: Cut through waste to depth at model edge, releasing the model.

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

* Dati**Start Depth**
* Dati**Final Depth**
* Dati**Step Down**

### Height

* Dati**Safe Height**
* Dati**Clearance Height**

### Operation

* Dati**Tool Controller**
* Dati**Coolant Mode**

* Dati**BoundBox**
* Dati**Scan Type**
* Dati**Layer Mode**
* Dati**BoundBox extra offset X**
* Dati**BoundBox extra offset Y**
* Dati**Drop Cutter Direction**
* Dati**Depth Offset**
* Dati**Step Over**
* Dati**Sample Interval**
* Dati**Optimize Output Enabled**

* Dati**Use Start Point**
* Dati**Boundary Enforcement**
* Dati**Optimize Linear Paths**

## Resources

* G-code(path) simulator: [NCViewer](https://ncviewer.com/)
* G-code(path) simulator: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Surface/it&oldid=1482946>"