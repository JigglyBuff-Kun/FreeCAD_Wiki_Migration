---
title: Arch IfcSpreadsheet
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch IfcSpreadsheet                   |
| Menu location                         |
| Utils → Create IFC spreadsheet...     |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| I P                                   |
| Introduced in version                 |
| -                                     |
| See also                              |
| [Arch IFC](/Arch_IFC "Arch IFC")      |
|                                       |

## Description

This tool creates a spreadsheet to store [IFC](/Arch_IFC "Arch IFC") properties of an object.

## Usage

1. Select an object.
2. There are several ways to invoke the tool:
   - Select the **Utils → ![](/images/Arch_IfcSpreadsheet.svg) Create IFC spreadsheet...** option from the menu.
   - Use the keyboard shortcut: I then P.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
spreadsheet = makeIfcSpreadsheet(archobj=None)

```

- Creates a `spreadsheet` object. Optionally an `archobj` can be given.

Example:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

spreadsheet = Arch.makeIfcSpreadsheet(Wall)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IfcSpreadsheet/en&oldid=1455964>"
