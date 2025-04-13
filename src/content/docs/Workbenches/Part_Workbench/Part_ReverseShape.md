---
title: Part ReverseShape
---

|                                          |
| ---------------------------------------- |
| Part ReverseShape                        |
| Menu location                            |
| Part → Reverse shapes                    |
| Workbenches                              |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

The ![](/src/assets/images/Part_ReverseShape.svg) **Part ReverseShape** command creates parametric copies with reversed face normals from selected objects.

## Usage

1. Select one or more objects.
2. Select the **Part → ![](/src/assets/images/Part_ReverseShape.svg) Reverse shapes** option from the menu.
3. For each selected object a reversed shape is created.

## Notes

- [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as source objects. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- To see the effect of the command change the View**Lighting** property of the reversed shape to `On side` and if required change **Edit → Preferences... → Display → 3D View → Rendering → Backlight color**.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part ReverseShape object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional property:

### Data

Reverse

- Data**Source** (`Link`): specifies the linked source shape.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ReverseShape/en&oldid=1466416>"
