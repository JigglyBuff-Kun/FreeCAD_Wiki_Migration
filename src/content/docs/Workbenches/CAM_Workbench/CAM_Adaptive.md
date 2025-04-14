---
title: CAM Adaptive
---

|                                       |
| ------------------------------------- |
| CAM Adaptive                          |
| Menu location                         |
| CAM → Adaptive                        |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive") operation algorithm creates clearing and profiling paths. The operation varies cutter engagement so that the material removal never exceeds a maximum value.

## Usage

Usage instructions for the [Adaptive](/CAM_Adaptive "CAM Adaptive") operation are presented here.

### Basic Operation

1. Press the ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive") icon, or select the CAM → ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive") from the top menu.
2. Select the tool controller for the Operation from the Tool controller dialogue pop up window, if prompted.
3. Adjust the operation depths as needed in the Depths tab: Start Depth, Finish Depth, Step Down.
4. Make adjustments in Heights tab if needed.
5. Configure settings in the Operations tab:
   1. (**See the [Properties](#Properties) → Adaptive section below.**)
   2. Set the Step Over value as a percentage of the diameter of the Tool.
6. If you wish to preview the result before accepting the settings, click Apply
7. Click OK button to confirm and generate paths.

### Preliminary Notes About Adaptive Clearing

- Depending on the size and complexity of the area for the operation, is might be better to not recompute the operation after every property change; rather, consider:
  - deactivate the operation with the ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") toggle tool, make your changes to the operation's properties, then click the ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") icon again to re-activate the operation - which triggers a recompute internally.
- The ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive") operation might contain a few bugs yet to be clearly identified. Please report bugs and issues in the [FreeCAD Path/CAM Forum](https://forum.freecadweb.org/viewforum.php?f=15).
- All tool shapes may not be respected with this operation. Check the FreeCAD forum for further details.
- Should you choose to run the path simulator in the CAM Workbench, it only uses the standard end mill to simulate paths. Therefore, you will not see tool-shape-specific material removal. Material removal is shown using the end mill shape.

## Properties

**_Note_** : The names of some Properties in this list differ a little from the same settings used in the Task Window Editor.

Adaptive

- Data**Force Inside-Out**: Force plunging into material inside and clearing towards the edges
- Data**Helix Angle**: Helix ramp entry angle (degrees)
- Data**Helix Cone Angle**: Angle (degrees) of conical helix
- Data**Helix Diameter Limit**: Limit helix entry diameter, if limit larger than tool diameter or 0, tool diameter is used
- Data**Keep Tool Down Ratio**: Max length of keep tool down path compared to direct distance between points
- Data**Lift Distance**: Lift distance for rapid moves
- Data**Operation Type**: Type of adaptive operation: Clearing or Profiling
- Data**Side**: Side of selected faces that tool should cut: Inside or Outside
- Data**Step Over**: Percent of cutter diameter to step over on each pass
- Data**Stock to Leave**: How much stock to leave (i.e. for a separate finishing operation)
- Data**Tolerance**: Influences accuracy and performance
- Data**Use Helix Arcs**: Use Arcs (G2) for helix ramp

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

Depth

- Data**Clearance Height**: The height needed to clear clamps and obstructions
- Data**Final Depth**: Final Depth of Tool- lowest value in Z
- Data**Finish Depth**: Maximum material removed on final pass.
- Data**Safe Height**: The above which Rapid motions are allowed.
- Data**Start Depth**: Starting Depth of Tool- first cut depth in Z
- Data**Step Down**: Incremental Step Down of Tool

Path

- Data**Active**: Make False, to prevent operation from generating code
- Data**Comment**: An optional comment for this Operation
- Data**Tool Controller**: Defines the Tool controller used in the Operation
- Data**User Label**: User assigned label

## Tasks Window Editor Layout

_Descriptions for these settings are provided in the Properties list above._

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

- **Add**: Adds selected element(s) which should be the base(s) for the path(s).
- **Delete**: Delete the selected item(s) in the Base Geometry list.
- **Clear**: Clear all items in the Base Geometry list.

### Depths

- Data**Start Depth**
- Data**Final Depth**
- Data**Finish Depth**
- Data**Step Down**

### Heights

- Data**Safe Height**
- Data**Clearance Height**

### Operation

- Data**Tool Controller**
- Data**Cut Region** (Side)
- Data**Operation Type**
- Data**Step Over Percent**
- Data**Accuracy vs Performance** (Tolerance)
- Data**Helix Ramp Angle**
- Data**Helix Cone Angle**
- Data**Helix Max Diameter** (Helix Diameter Limit)
- Data**Lift Distance**
- Data**Keep Tool Down Ratio**
- Data**Stock to Leave**
- Data**Force Clearing Inside-Out**
- Data**Stop**

## Known Issues

In case CAM Adaptive creates some unwanted paths, try with a Data**Stock to Leave** set to `0.001 mm` or more. You can reduce the diameter of the tool by double that amount to keep the paths exact.

A proposed bugfix is available (but no one is working on integrating it):

<https://github.com/FreeCAD/FreeCAD/pull/5276>

## Resources

- Author's GitHub page for the original project: [kreso-t/FreeCAD_Mod_Adaptive_Path](https://github.com/kreso-t/FreeCAD_Mod_Adaptive_Path)
- Active topic in FreeCAD forums for Path Adaptive operation: [Adaptive Path/CAM Operation](https://forum.freecadweb.org/viewtopic.php?f=15&t=30127)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Adaptive/en&oldid=1477984>"
