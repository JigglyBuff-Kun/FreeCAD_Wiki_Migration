---
title: FreeGrid StorageBox
---
|  |
| --- |
| FreeGrid StorageBox |
| Menu location |
| FreeeGrid → Storage box |
| Workbenches |
| [FreeGrid](/FreeGrid_Workbench "FreeGrid Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The [FreeGrid StorageBox](/FreeGrid_StorageBox "FreeGrid StorageBox") tool creates a storage box.

This tool is part of the [FreeGrid Workbench](/FreeGrid_Workbench "FreeGrid Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Usage

1. There are several ways to invoke the tool:
   * Press the ![](/images/FreeGrid_StorageBox.svg) [Storage box](/FreeGrid_StorageBox "FreeGrid StorageBox") button.
   * Select the **FreeGrid → ![](/images/FreeGrid_StorageBox.svg) Storage box** option from the menu.
2. A storage box is created with properties based on the current preferences.
3. Optionally select the object and change its properties in the [Property editor](/Property_editor "Property editor").

## Properties

A FreeGrid StorageBox object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Box features

* DANE**Box Grip** (`Bool`): Default is `true`. Add grip/label area at the rear of the box.
* DANE**Box Grip Depth** (`Length`): Default is `15 mm`. Depth of the grip.
* DANE**Box Open Front** (`Bool`): Default is `false`. Leave the front of the box open.
* DANE**Box Ramp** (`Bool`): Default is `true`. Add a scoop inside the front of the box.
* DANE**Floor Support** (`Bool`): Default is `true`. Add integral floor support.

Internal divisions

* DANE**Division Height** (`Percent`): Default is `100`. Height of internal divisions relative to the height of the box.
* DANE**Divisions X** (`IntegerConstraint`): Default is `1`. Number of divisions along the X axis.
* DANE**Divisions Y** (`IntegerConstraint`): Default is `1`. Number of divisions along the Y axis.

Magnet mount

* DANE**Magnet Diameter** (`Length`): Default is `6 mm`. Diameter of the magnets.
* DANE**Magnet Height** (`Length`): Default is `2 mm`. Height of the magnets.
* DANE**Magnet Option** (`Enumeration`): Default is `allIntersections`. Positions of the magnets. The other options are: `cornersOny` and `noMagnets`.

Position on grid

* DANE**Position X** (`IntegerConstraint`): Default is `0`. Object position on the grid along the X axis. Starts at zero.
* DANE**Position Y** (`IntegerConstraint`): Default is `0`. Object position on the grid along the Y axis. Starts at zero.

Size

* DANE**Depth** (`IntegerConstraint`): Default is `1`. Number of 50 mm units in the Y direction of the object.
* DANE**Height** (`Length`): Default is `50 mm`. Height of the object.
* DANE**Width** (`IntegerConstraint`): Default is `1`. Number of 50 mm units in the X direction of the object.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_StorageBox/pl&oldid=1512349>"