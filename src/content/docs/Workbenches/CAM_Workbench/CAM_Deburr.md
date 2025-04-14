---
title: CAM Deburr
---

|                                       |
| ------------------------------------- |
| CAM Deburr                            |
| Menu location                         |
| CAM → Deburr                          |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| 0.18                                  |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr") tool is primarily for Deburring an edge.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr") button.
   - Select the **CAM → ![](/images/CAM_Deburr.svg) Deburr** option from the menu.
2. The **Deburr** task panel opens. See [Options](#Options).
3. Select **Base Geometry**.
4. Specify the required parameters.
5. Press the OK button.

## Options

After selecting the geometry in the **Base Geometry** section of the task panel you can press Apply to see the tool path as defined by the default options.

Next you can check your depths/step down and heights, just like with other path commands.

The Final step is to activate the **Operation** section where you can specify the following:

- **Tool controller**: Select the tool to use.
- **Coolant Mode**: Select `None`, `Flood` or `Mist`.
- **Directions**: Select `CW` (clockwise) or `CCW` (counter-clockwise).
- **W**: The dimension of your edge.
- **h**: The offset from the bottom of the tool. It's a safety feature because if the tip gets above the edge it won't cut anymore.

: ![Deburring interface with the options](/images/Path_Deburr_Operations-tab.png)

## Properties

### Data

Base

- Data**Placement**:
- Data**Label**: User name of the object (UTF-8)

Deburr

- Data**Direction**: `CCW` or `CW`.
- Data**Entry Point**: Entry point of the operation, if set to 2 it will go in 2 corners from the default.
- Data**Extra depth**: Extra depth (**h** in the task panel).
- Data (Hidden)**Join**: How to join chamfer segments, `Round` or `Miter`.
- Data (Hidden)**Side**: Side of the operation, `Outside` or `Inside`.
- Data**Width**: The width of the chamfer (**W** in the task panel).

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions (set by default to `OpStockZMax + SetupSheet.ClearanceHeightOffset`).
- Data**Safe Height**: The height above which rapid motions are allowed. (set to `OpStockZMax + SetupSheet.SafeHeightOffset`).
- Data**Start Depth**: Starting depth of of the tool, first cut depth in Z.
- Data**Step Down**: Incremental step down of the tool.

Op Values

- Data**Op Stock ZMax**: The maximum Z value of the stock.
- Data**Op Stock ZMin**: The minimum Z value of the stock.
- Data**Op Tool Diameter**: The diameter of the tool.

Path

- Data**Active**: Make `false`, to prevent operation from generating code.
- Data**Base**: The base geometry for this operation, edges or a face.
- Data**Comment**: An optional comment for this operation.
- Data**Coolant Mode**: Coolant mode for this operation.
- Data**Cycle Time**: Estimated cycle time for this operation.
- Data**Tool Controller**: The tool controller that will be used to calculate the path.
- Data**User Label**: User assigned label.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Deburr/en&oldid=1387975>"
