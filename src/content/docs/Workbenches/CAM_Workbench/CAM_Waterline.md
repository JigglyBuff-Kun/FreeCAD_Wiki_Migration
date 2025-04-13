---
title: CAM Waterline
---

:::caution
This is an unfinished experimental feature.Enable Experimental Features
:::
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                       |
| ------------------------------------- |
| CAM Waterline                         |
| Menu location                         |
| CAM → Waterline                       |
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

The tool ![](/src/assets/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline") creates a new Waterline operation. As of 0.19_pre, the operation works on the entire model to generate G-code for the Job. Currently, within the operation's settings there is no functionality to select specific areas, faces, or regions of the model.

The Waterline operation has two algorithms: OCL Drop Cutter and Experimental.

- The OCL Drop Cutter algorithm interfaces to OCL.pyd, a 3rd party Open Source module titled [OpenCamLib](/OpenCamLib "OpenCamLib"), that generates tool paths from a 3D Model. OpenCamLib is not integrated directly into FreeCAD.
- The Experimental algorithm makes use of the built-in Path.Area() class.

**_Note_** : In order to use the Waterline operation you must:

1. Properly install [OpenCamLib](/OpenCamLib "OpenCamLib").
2. Enable [Experimental Features](/CAM_experimental "CAM experimental") for the CAM Workbench.
3. Check **Edit → Preferences... → CAM → Advanced → Enable OCL dependent features**.

## Usage

Usage instructions for multiple variations of the [Waterline](/CAM_Waterline "CAM Waterline") operation are presented here.

#### Basic Operation

1. Press the ![](/src/assets/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline") icon, or select the [Waterline](/CAM_Waterline "CAM Waterline") tool from the **CAM** menu.
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

- It does not handle overhangs correctly.
- It only returns paths for an End Mill type cutter (tool bit).
- It might not correctly catch all interior features.
- It is just that, experimental, and not ready for mainstream integration. Please inspect paths with the built-in ![](/src/assets/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator"), or other 3rd-party G-code inspection tools, before cutting with your machine.

#### Available Tool (Cutter) Shapes

When using the **_OCL Dropcutter_** algorithm, the Waterline operation uses OpenCamLib [OCL|OCL] to extract paths from the part base. As such, a tool translation is required between the FreeCAD tool controller and OCL in order to complete the scan with your chosen tool(cutter) shape. These tool shapes are(should be) respected and available for the OCL Dropcutter so long as the built-in tool shapes are used, whether Legacy or ToolBit tools:

- End mill
- Ball end mill
- Bull nose end mill
- Chamfer bit
- Engraver

#### Additional Notes

- Should you choose to run the path simulator, ![](/src/assets/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator"), in the CAM Workbench, you might not see tool-shape-specific material removal. Be cautious. A small trial job using foam or other very non-dense material is recommended to verify paths are correct with your selected tool controller.
- As of May 2020, only the End Mill has any type of testing to determine accuracy of the FreeCAD-to-OCL tool settings translation. Please post any feedback for non-end-mill usage to the [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) section in the FreeCAD forums.

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

Clearing Options

- Data**Algorithm**: The library to use to generate the path
- Data**BoundBox**: Should the operation be limited by the stock object or by the bounding box of the base object
- Data**Clear Last Layer**: Set to clear last layer in `Multi-pass` operation.
- Data**Cut Mode**: The direction that the toolpath should go around the part: Climb (ClockWise) or Conventional (CounterClockWise)
- Data**Cut Pattern**: Clearing pattern to use
- Data**Depth Offset**:
- Data**Ignore Outer Above**:
- Data**Layer Mode**: The completion mode for the operation: single or multi-pass
- Data**Step Over**:

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions
- Data**Final Depth**: Final Depth of Tool- lowest value in Z
- Data**Safe Height**: The above which Rapid motions are allowed.
- Data**Start Depth**: Starting Depth of Tool- first cut depth in Z
- Data**Step Down**: Incremental Step Down of Tool

Path

- Data**Active**: Make False, to prevent operation from generating code
- Data**Base**: The base geometry for this operation
- Data**Comment**: An optional comment for this Operation
- Data**Coolant Mode**:
- Data**Cycle Time**:
- Data**Tool Controller**: Defines the Tool controller used in the Operation
- Data**User Label**: User assigned label

Start Point

- Data**Start Point**: The custom start point for the path of this operation.
  - Data**X**: X distance value
  - Data**Y**: Y distance value
  - Data**Z**: Z distance value
- Data**Use Start Point**: Make True, if specifying a Start Point

## Tasks Window Editor Layout

_Descriptions for the settings are provided in the Properties list above._

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Location

- **Add**: Adds selected element(s) which should be the base(s) for the path(s).
- **Remove**: Remove the selected item(s) in the Base Location list.
- **Edit**: Clear all items in the Base Location list.

### Depths

- Data**Start Depth**
- Data**Final Depth**
- Data**Step Down**

### Heights

- Data**Safe Height**
- Data**Clearance Height**

### Operation

- Data**Tool Controller**
- Data**Coolant Mode**
- Data**Algorithm**
- Data**BoundBox**
- Data**Layer Mode**
- Data**Cut Pattern**~
- Data**Boundary Adjustment**~
- Data**Sample Interval**~

~Visibility changes with other settings.

## Resources

- G-code(path) simulator: [NCViewer](https://ncviewer.com/)
- G-code(path) simulator: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Waterline/en&oldid=1391234>"
