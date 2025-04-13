---
title: Adaptativo
---
|  |
| --- |
| CAM Adaptive |
| Menu location |
| CAM → Adaptive |
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

* Depending on the size and complexity of the area for the operation, is might be better to not recompute the operation after every property change; rather, consider:
  + deactivate the operation with the ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") toggle tool, make your changes to the operation's properties, then click the ![](/images/CAM_OpActiveToggle.svg) [Active](/CAM_OpActiveToggle "CAM OpActiveToggle") icon again to re-activate the operation - which triggers a recompute internally.
* The ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive") operation might contain a few bugs yet to be clearly identified. Please report bugs and issues in the [FreeCAD Path/CAM Forum](https://forum.freecadweb.org/viewforum.php?f=15).
* All tool shapes may not be respected with this operation. Check the FreeCAD forum for further details.
* Should you choose to run the path simulator in the CAM Workbench, it only uses the standard end mill to simulate paths. Therefore, you will not see tool-shape-specific material removal. Material removal is shown using the end mill shape.

## Properties

***Note*** : The names of some Properties in this list differ a little from the same settings used in the Task Window Editor.

Adaptive

* Dados**Force Inside-Out**: Force plunging into material inside and clearing towards the edges
* Dados**Helix Angle**: Helix ramp entry angle (degrees)
* Dados**Helix Cone Angle**: Angle (degrees) of conical helix
* Dados**Helix Diameter Limit**: Limit helix entry diameter, if limit larger than tool diameter or 0, tool diameter is used
* Dados**Keep Tool Down Ratio**: Max length of keep tool down path compared to direct distance between points
* Dados**Lift Distance**: Lift distance for rapid moves
* Dados**Operation Type**: Type of adaptive operation: Clearing or Profiling
* Dados**Side**: Side of selected faces that tool should cut: Inside or Outside
* Dados**Step Over**: Percent of cutter diameter to step over on each pass
* Dados**Stock to Leave**: How much stock to leave (i.e. for a separate finishing operation)
* Dados**Tolerance**: Influences accuracy and performance
* Dados**Use Helix Arcs**: Use Arcs (G2) for helix ramp

Base

Note: It is suggested that you do not edit the Placement property of path operations. Rather, move or rotate the CAM Job model as needed.

* Dados**Placement**: Overall placement[position and rotation] of the object - with respect to the origin (or origin of parent object container)
  + Dados**Angle**: Angle in degrees applied to rotation of the object around Axis property value
  + Dados**Axis**: Axis (one or multiple) around which to rotate the object, set in sub-properties: X, Y, Z
    - Dados**X**: X axis value
    - Dados**Y**: Y axis value
    - Dados**Z**: Z axis value
  + Dados**Position**: Position of the object, set in sub-properties: X, Y, Z - with respect to the origin (or origin of parent object container)
    - Dados**X**: X distance value
    - Dados**Y**: Y distance value
    - Dados**Z**: Z distance value
* Dados**Label**: User-provided name of the object (UTF-8)

Depth

* Dados**Clearance Height**: The height needed to clear clamps and obstructions
* Dados**Final Depth**: Final Depth of Tool- lowest value in Z
* Dados**Finish Depth**: Maximum material removed on final pass.
* Dados**Safe Height**: The above which Rapid motions are allowed.
* Dados**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Dados**Step Down**: Incremental Step Down of Tool

Path

* Dados**Active**: Make False, to prevent operation from generating code
* Dados**Comment**: An optional comment for this Operation
* Dados**Tool Controller**: Defines the Tool controller used in the Operation
* Dados**User Label**: User assigned label

## Tasks Window Editor Layout

*Descriptions for these settings are provided in the Properties list above.*

This section is simply a layout map of the settings in the window editor for the Operation.

### Base Geometry

* **Add**: Adds selected element(s) which should be the base(s) for the path(s).
* **Delete**: Delete the selected item(s) in the Base Geometry list.
* **Clear**: Clear all items in the Base Geometry list.

### Depths

* Dados**Start Depth**
* Dados**Final Depth**
* Dados**Finish Depth**
* Dados**Step Down**

### Heights

* Dados**Safe Height**
* Dados**Clearance Height**

### Operation

* Dados**Tool Controller**
* Dados**Cut Region** (Side)
* Dados**Operation Type**
* Dados**Step Over Percent**
* Dados**Accuracy vs Performance** (Tolerance)
* Dados**Helix Ramp Angle**
* Dados**Helix Cone Angle**
* Dados**Helix Max Diameter** (Helix Diameter Limit)
* Dados**Lift Distance**
* Dados**Keep Tool Down Ratio**
* Dados**Stock to Leave**
* Dados**Force Clearing Inside-Out**
* Dados**Stop**

## Known Issues

In case CAM Adaptive creates some unwanted paths, try with a Dados**Stock to Leave** set to `0.001 mm` or more. You can reduce the diameter of the tool by double that amount to keep the paths exact.

A proposed bugfix is available (but no one is working on integrating it):

<https://github.com/FreeCAD/FreeCAD/pull/5276>

## Resources

* Author's GitHub page for the original project: [kreso-t/FreeCAD\_Mod\_Adaptive\_Path](https://github.com/kreso-t/FreeCAD_Mod_Adaptive_Path)
* Active topic in FreeCAD forums for Path Adaptive operation: [Adaptive Path/CAM Operation](https://forum.freecadweb.org/viewtopic.php?f=15&t=30127)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Adaptive/pt-br&oldid=1477980>"