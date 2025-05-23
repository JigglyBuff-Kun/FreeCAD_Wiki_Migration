---
title: TechDraw MoveView
---

:::caution
This tool is obsolete, it is not available in1.0 and above.Views can now be dragged and dropped between pages in theTree view.
:::

|                                                                |
| -------------------------------------------------------------- |
| TechDraw MoveView                                              |
| Menu location                                                  |
| TechDraw → TechDraw Views → Move View                          |
| Workbenches                                                    |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")           |
| Default shortcut                                               |
| _None_                                                         |
| Introduced in version                                          |
| 0.20                                                           |
| See also                                                       |
| [TechDraw ShareView](/TechDraw_ShareView "TechDraw ShareView") |
|                                                                |

## Description

The **TechDraw MoveView** tool moves a View and all its dependents (Balloons, Dimensions, etc) to a different Page.

## Usage

1. Optionally select a View, a from Page and a to Page. The pages must be selected in that order.
2. There are several ways to invoke the tool:
   - Press the ![](/images/TechDraw_MoveView.svg) [Move View](/TechDraw_MoveView "TechDraw MoveView") button.
   - Select the **TechDraw → TechDraw Views → ![](/images/TechDraw_MoveView.svg) Move View** option from the menu.
3. A dialog will open to allow you to select a View, from Page and to Page.
4. Press the OK button.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The MoveView tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
import TechDrawTools
TechDrawTools.MoveView(viewName, fromPageName, toPageName)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_MoveView/en&oldid=1458177>"
