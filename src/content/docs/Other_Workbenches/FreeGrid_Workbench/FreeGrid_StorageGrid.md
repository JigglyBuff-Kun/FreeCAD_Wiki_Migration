---
title: FreeGrid StorageGrid
---

|                                                      |
| ---------------------------------------------------- |
| FreeGrid StorageGrid                                 |
| Menu location                                        |
| FreeeGrid → Storage grid                             |
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

The [FreeGrid StorageGrid](/FreeGrid_StorageGrid "FreeGrid StorageGrid") tool creates a storage grid.

This tool is part of the [FreeGrid Workbench](/FreeGrid_Workbench "FreeGrid Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/images/FreeGrid_StorageGrid.svg) [Storage grid](/FreeGrid_StorageGrid "FreeGrid StorageGrid") button.
   - Select the **FreeGrid → ![](/images/FreeGrid_StorageGrid.svg) Storage grid** option from the menu.
2. A storage grid is created with properties based on the current preferences.
3. Optionally select the object and change its properties in the [Property editor](/Property_editor "Property editor").

## Properties

A FreeGrid StorageBox object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Grid features

- Data**Corner Connectors** (`Bool`): Default is `true`. Add cavities for corner connectors.
- Data**Extra Bottom Material** (`Length`): Default is `16 mm`. Extra thickness under the grid.
- Data**Is Subtractive** (`Bool`): Default is `false`. Create a grid suitable for subtractive manufacturing.

Magnet mount

- Data**Include Magnets** (`Bool`): Default is `true`. Include magnet receptacles.
- Data**Magnet Diameter** (`Length`): Default is `6 mm`. Diameter of the magnets.
- Data**Magnet Height** (`Length`): Default is `2 mm`. Height of the magnets.

Size

- Data**Depth** (`IntegerConstraint`): Default is `2`. Number of 50 mm units in the Y direction of the object.
- Data**Width** (`IntegerConstraint`): Default is `3`. Number of 50 mm units in the X direction of the object.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_StorageGrid/en&oldid=1507955>"
