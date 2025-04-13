---
title: FreeGrid StorageBox
---

|                                                      |
| ---------------------------------------------------- |
| FreeGrid StorageBox                                  |
| Menu location                                        |
| FreeeGrid → Storage box                              |
| Workbenches                                          |
| [FreeGrid](/FreeGrid_Workbench "FreeGrid Workbench") |
| Default shortcut                                     |
| _None_                                               |
| Introduced in version                                |
| -                                                    |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The [FreeGrid StorageBox](/FreeGrid_StorageBox "FreeGrid StorageBox") tool creates a storage box.

This tool is part of the [FreeGrid Workbench](/FreeGrid_Workbench "FreeGrid Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/FreeGrid_StorageBox.svg) [Storage box](/FreeGrid_StorageBox "FreeGrid StorageBox") button.
   - Select the **FreeGrid → ![](/src/assets/images/FreeGrid_StorageBox.svg) Storage box** option from the menu.
2. A storage box is created with properties based on the current preferences.
3. Optionally select the object and change its properties in the [Property editor](/Property_editor "Property editor").

## Properties

A FreeGrid StorageBox object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Box features

- Data**Box Grip** (`Bool`): Default is `true`. Add grip/label area at the rear of the box.
- Data**Box Grip Depth** (`Length`): Default is `15 mm`. Depth of the grip.
- Data**Box Open Front** (`Bool`): Default is `false`. Leave the front of the box open.
- Data**Box Ramp** (`Bool`): Default is `true`. Add a scoop inside the front of the box.
- Data**Floor Support** (`Bool`): Default is `true`. Add integral floor support.

Internal divisions

- Data**Division Height** (`Percent`): Default is `100`. Height of internal divisions relative to the height of the box.
- Data**Divisions X** (`IntegerConstraint`): Default is `1`. Number of divisions along the X axis.
- Data**Divisions Y** (`IntegerConstraint`): Default is `1`. Number of divisions along the Y axis.

Magnet mount

- Data**Magnet Diameter** (`Length`): Default is `6 mm`. Diameter of the magnets.
- Data**Magnet Height** (`Length`): Default is `2 mm`. Height of the magnets.
- Data**Magnet Option** (`Enumeration`): Default is `allIntersections`. Positions of the magnets. The other options are: `cornersOny` and `noMagnets`.

Position on grid

- Data**Position X** (`IntegerConstraint`): Default is `0`. Object position on the grid along the X axis. Starts at zero.
- Data**Position Y** (`IntegerConstraint`): Default is `0`. Object position on the grid along the Y axis. Starts at zero.

Size

- Data**Depth** (`IntegerConstraint`): Default is `1`. Number of 50 mm units in the Y direction of the object.
- Data**Height** (`Length`): Default is `50 mm`. Height of the object.
- Data**Width** (`IntegerConstraint`): Default is `1`. Number of 50 mm units in the X direction of the object.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_StorageBox/en&oldid=1507911>"
