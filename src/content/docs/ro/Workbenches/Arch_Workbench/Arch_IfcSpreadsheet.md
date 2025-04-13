---
title: Arch MakeIfcSpreadsheet
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch\_MakeIfcSpreadsheet |
| poziția meniului |
| Arch → Utilities → Create schedule... |
| Ateliere |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| I P |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Arch IFC](/Arch_IFC "Arch IFC"), [Arch IfcExplorer](/Arch_IfcExplorer "Arch IfcExplorer") |
|  |

## Description

This tool creates a spreadsheet to store [IFC](/Arch_IFC "Arch IFC") properties of an object.

## Usage

1. Select an object.
2. There are several ways to invoke the tool:
   * Select the **Utils → ![](/images/Arch_IfcSpreadsheet.svg) Create IFC spreadsheet...** option from the menu.
   * Use the keyboard shortcut: I then P.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
spreadsheet = makeIfcSpreadsheet(archobj=None)

```

* Creates a `spreadsheet` object. Optionally an `archobj` can be given.

Example:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

spreadsheet = Arch.makeIfcSpreadsheet(Wall)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IfcSpreadsheet/ro&oldid=1455960>"