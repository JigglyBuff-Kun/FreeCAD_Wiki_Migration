---
title: FreeGrid BitCartridgeHolder
---

|                                                      |
| ---------------------------------------------------- |
| FreeGrid BitCartridgeHolder                          |
| Menu location                                        |
| FreeeGrid → Bit cartridge holder                     |
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

The [FreeGrid BitCartridgeHolder](/FreeGrid_BitCartridgeHolder "FreeGrid BitCartridgeHolder") tool creates a bit cartridge holder.

This tool is part of the [FreeGrid Workbench](/FreeGrid_Workbench "FreeGrid Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/images/FreeGrid_BitCartridgeHolder.svg) [Bit cartridge holder](/FreeGrid_BitCartridgeHolder "FreeGrid BitCartridgeHolder") button.
   - Select the **FreeGrid → ![](/images/FreeGrid_BitCartridgeHolder.svg) Bit cartridge holder** option from the menu.
2. A bit cartridge holder is created with properties based on the current preferences.
3. Optionally select the object and change its properties in the [Property editor](/Property_editor "Property editor").

## Properties

A FreeGrid BitCartridgeHolder object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Bit Cartridge Holder features

- Data**Side Length** (`Length`): Default is `15.0 mm`. Length of the longest side of the holder.

Box features

- Data**Floor Support** (`Bool`): Default is `true`. Add integral floor support.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_BitCartridgeHolder/en&oldid=1507935>"
