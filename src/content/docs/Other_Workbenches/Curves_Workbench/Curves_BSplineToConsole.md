---
title: Curves BSplineToConsole
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves BSplineToConsole                        |
| Menu location                                  |
| Misc. → BSpline to Console                     |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_BSplineToConsole.svg) **Curves BSplineToConsole** tool creates a Python script to (re-)create the selected B-spline or Bézier geometries.

## Usage

1. Select one or more Bezier or BSpline curves or surfaces in the [3D View](/3D_view "3D view").
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_BSplineToConsole.svg) BSpline to Console button.
   - Select the **Misc. → ![](/src/assets/images/Curves_BSplineToConsole.svg) BSpline to Console** option from the menu.
3. A **BSplineCurve** object is created for each selected curve, and a **BSplineSurface** object for each selected surface, and a related Python script to (re)create each curve or surface can be found in the [Python console](/Python_console "Python console").

## Properties

See also: [Property editor](/Property_editor "Property editor").

Both **BSplineCurve** object and **BSplineSurface** object are derived from a Part::Spline object and have no additional properties

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BSplineToConsole&oldid=1570350>"
