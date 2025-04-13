---
title: CAM Entgraten
---
|  |
| --- |
| CAM Entgraten |
| Menüeintrag |
| CAM → Entgraten |
| Arbeitsbereich |
| [CAM](/CAM_Workbench/de "CAM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

The ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr") tool is primarily for Deburring an edge.

## Anwendung

1. There are several ways to invoke the command:
   * Press the ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr") button.
   * Select the **CAM → ![](/images/CAM_Deburr.svg) Deburr** option from the menu.
2. The **Deburr** task panel opens. See [Options](#Options).
3. Select **Base Geometry**.
4. Specify the required parameters.
5. Press the OK button.

## Options

After selecting the geometry in the **Base Geometry** section of the task panel you can press Apply to see the tool path as defined by the default options.

Next you can check your depths/step down and heights, just like with other path commands.

The Final step is to activate the **Operation** section where you can specify the following:

* **Tool controller**: Select the tool to use.
* **Coolant Mode**: Select `None`, `Flood` or `Mist`.
* **Directions**: Select `CW` (clockwise) or `CCW` (counter-clockwise).
* **W**: The dimension of your edge.
* **h**: The offset from the bottom of the tool. It's a safety feature because if the tip gets above the edge it won't cut anymore.

:   ![Deburring interface with the options](/images/Path_Deburr_Operations-tab.png)

## Eigenschaften

### Daten

Basis

* Daten**Placement**:
* Daten**Label**: User name of the object (UTF-8)

Deburr

* Daten**Direction**: `CCW` or `CW`.
* Daten**Entry Point**: Entry point of the operation, if set to 2 it will go in 2 corners from the default.
* Daten**Extra depth**: Extra depth (**h** in the task panel).
* Daten (Hidden)**Join**: How to join chamfer segments, `Round` or `Miter`.
* Daten (Hidden)**Side**: Side of the operation, `Outside` or `Inside`.
* Daten**Width**: The width of the chamfer (**W** in the task panel).

Depth

* Daten**Clearance Height**: The height needed to clear clamps and obstructions (set by default to `OpStockZMax + SetupSheet.ClearanceHeightOffset`).
* Daten**Safe Height**: The height above which rapid motions are allowed. (set to `OpStockZMax + SetupSheet.SafeHeightOffset`).
* Daten**Start Depth**: Starting depth of of the tool, first cut depth in Z.
* Daten**Step Down**: Incremental step down of the tool.

Op Values

* Daten**Op Stock ZMax**: The maximum Z value of the stock.
* Daten**Op Stock ZMin**: The minimum Z value of the stock.
* Daten**Op Tool Diameter**: The diameter of the tool.

Path

* Daten**Active**: Make `false`, to prevent operation from generating code.
* Daten**Base**: The base geometry for this operation, edges or a face.
* Daten**Comment**: An optional comment for this operation.
* Daten**Coolant Mode**: Coolant mode for this operation.
* Daten**Cycle Time**: Estimated cycle time for this operation.
* Daten**Tool Controller**: The tool controller that will be used to calculate the path.
* Daten**User Label**: User assigned label.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Deburr/de&oldid=1406292>"