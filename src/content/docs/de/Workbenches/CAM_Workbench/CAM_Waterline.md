---
title: CAM Waterline/de
---
:::caution
This is an unfinished experimental feature.Enable Experimental Features
:::
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM Waterline |
| Menu location |
| CAM → Waterline |
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

The tool ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline") creates a new Waterline operation. As of 0.19\_pre, the operation works on the entire model to generate G-code for the Job. Currently, within the operation's settings there is no functionality to select specific areas, faces, or regions of the model.

The Waterline operation has two algorithms: OCL Drop Cutter and Experimental.

* The OCL Drop Cutter algorithm interfaces to OCL.pyd, a 3rd party Open Source module titled [OpenCamLib](/OpenCamLib "OpenCamLib"), that generates tool paths from a 3D Model. OpenCamLib is not integrated directly into FreeCAD.
* The Experimental algorithm makes use of the built-in Path.Area() class.

***Note*** : In order to use the Waterline operation you must:

1. Properly install [OpenCamLib](/OpenCamLib "OpenCamLib").
2. Enable [Experimental Features](/CAM_experimental "CAM experimental") for the CAM Workbench.
3. Check **Edit → Preferences... → CAM → Advanced → Enable OCL dependent features**.

## Anwendung

Usage instructions for multiple variations of the [Waterline](/CAM_Waterline "CAM Waterline") operation are presented here.

#### Basic Operation

1. Press the ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline") icon, or select the [Waterline](/CAM_Waterline "CAM Waterline") tool from the **CAM** menu.
2. Select the tool controller for the Operation from the Tool controller dialogue pop up window.
3. Adjust the operation depths as needed in the Depths tab: Start Depth, Final Depth, Step Down.
4. Make adjustments in Heights tab if needed.
5. Configure settings in the Operations tab based on the Algorithm selected:
   1. OCL Dropcutter
      1. Choose the BoundBox: Stock or BaseBoundBox.
      2. Set the Layer Mode: Single-pass or Multi-pass.
      3. Set the Sample Interval used for the OCL scan.
   2. Experimental
      1. Choose the BoundBox: Stock or BaseBoundBox.
      2. Set the Layer Mode: Single-pass or Multi-pass.
      3. Set the Cut Pattern if clearing is desired at each layer.
      4. Set the Boundary Adjustment (material allowance).
6. If you wish to preview the result before accepting the settings, click Apply
7. Click **OK** button to confirm and generate paths.

To achieve different, or more complex, effects, adjust additional operation properties within the Data tab of the Properties View for the operation.

##### Notes About Experimental Algorithm

* It does not handle overhangs correctly.
* It only returns paths for an End Mill type cutter (tool bit).
* It might not correctly catch all interior features.
* It is just that, experimental, and not ready for mainstream integration. Please inspect paths with the built-in ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator"), or other 3rd-party G-code inspection tools, before cutting with your machine.

#### Available Tool (Cutter) Shapes

When using the  ***OCL Dropcutter***  algorithm, the Waterline operation uses OpenCamLib [OCL|OCL] to extract paths from the part base. As such, a tool translation is required between the FreeCAD tool controller and OCL in order to complete the scan with your chosen tool(cutter) shape. These tool shapes are(should be) respected and available for the OCL Dropcutter so long as the built-in tool shapes are used, whether Legacy or ToolBit tools:

* End mill
* Ball end mill
* Bull nose end mill
* Chamfer bit
* Engraver

#### Additional Notes

* Should you choose to run the path simulator, ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator"), in the CAM Workbench, you might not see tool-shape-specific material removal. Be cautious. A small trial job using foam or other very non-dense material is recommended to verify paths are correct with your selected tool controller.
* As of May 2020, only the End Mill has any type of testing to determine accuracy of the FreeCAD-to-OCL tool settings translation. Please post any feedback for non-end-mill usage to the [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) section in the FreeCAD forums.

## Eigenschaften

***Note*** : Not all of these Properties are available in the Task Window Editor. Some are only accessible in the Data tab of the Properties View panel for this Operation.

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Daten**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
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

* Daten**Algorithm**: The library to use to generate the path
* Daten**BoundBox**: Should the operation be limited by the stock object or by the bounding box of the base object
* Daten**Clear Last Layer**: Set to clear last layer in `Multi-pass` operation.
* Daten**Cut Mode**: The direction that the toolpath should go around the part: Climb (ClockWise) or Conventional (CounterClockWise)
* Daten**Cut Pattern**: Clearing pattern to use
* Daten**Depth Offset**:
* Daten**Ignore Outer Above**:
* Daten**Layer Mode**: The completion mode for the operation: single or multi-pass
* Daten**Step Over**:

Depth

* Daten**Clearance Height**: The height needed to clear clamps and obstructions
* Daten**Final Depth**: Final Depth of Tool- lowest value in Z
* Daten**Safe Height**: The above which Rapid motions are allowed.
* Daten**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Daten**Step Down**: Incremental Step Down of Tool

Path

* Daten**Active**: Make False, to prevent operation from generating code
* Daten**Base**: The base geometry for this operation
* Daten**Comment**: An optional comment for this Operation
* Daten**Coolant Mode**:
* Daten**Cycle Time**:
* Daten**Tool Controller**: Defines the Tool controller used in the Operation
* Daten**User Label**: User assigned label

Start Point

* Daten**Start Point**: The custom start point for the path of this operation.
  + Daten**X**: X distance value
  + Daten**Y**: Y distance value
  + Daten**Z**: Z distance value
* Daten**Use Start Point**: Make True, if specifying a Start Point

## Tasks Window Editor Layout

*Descriptions for the settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Location

* **Add**: Adds selected element(s) which should be the base(s) for the path(s).
* **Remove**: Remove the selected item(s) in the Base Location list.
* **Edit**: Clear all items in the Base Location list.

### Depths

* Daten**Start Depth**
* Daten**Final Depth**
* Daten**Step Down**

### Heights

* Daten**Safe Height**
* Daten**Clearance Height**

### Operation

* Daten**Tool Controller**
* Daten**Coolant Mode**
* Daten**Algorithm**
* Daten**BoundBox**
* Daten**Layer Mode**
* Daten**Cut Pattern**~
* Daten**Boundary Adjustment**~
* Daten**Sample Interval**~

~Visibility changes with other settings.

## Resources

* G-code(path) simulator: [NCViewer](https://ncviewer.com/)
* G-code(path) simulator: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Waterline/de&oldid=1406298>"