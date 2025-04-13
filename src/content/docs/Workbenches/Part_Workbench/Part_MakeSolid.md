---
title: Part MakeSolid
---

|                                                                |
| -------------------------------------------------------------- |
| Part MakeSolid                                                 |
| Menu location                                                  |
| Part → Convert to solid                                        |
| Workbenches                                                    |
| [Part](/Part_Workbench "Part Workbench")                       |
| Default shortcut                                               |
| _None_                                                         |
| Introduced in version                                          |
| -                                                              |
| See also                                                       |
| [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") |
|                                                                |

## Description

The ![](/src/assets/images/Part_MakeSolid.svg) **Part MakeSolid** command creates solids from shape objects.

This command is typically used as one of the steps to create a solid from a mesh. See [Part ShapeFromMesh](/Part_ShapeFromMesh#Usage "Part ShapeFromMesh") for more information.

## Usage

1. Select one or more shape objects.
2. Select the **Part → ![](/src/assets/images/Part_MakeSolid.svg) Convert to solid** option from the menu.
3. For each selected object a solid is created as a separate new object.

## Notes

- The selected shape objects or not analyzed or validated.
- It is recommended to use [Part RefineShape](/Part_RefineShape "Part RefineShape") before converting to a solid.

## Properties

See also: [Property editor](/Property_editor "Property editor").

The created objects are [Part Feature](/Part_Feature "Part Feature") objects with no additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_MakeSolid/en&oldid=1469275>"
