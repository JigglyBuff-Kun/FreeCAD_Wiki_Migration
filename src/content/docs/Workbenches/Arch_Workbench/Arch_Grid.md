---
title: Arch Grid
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Arch Grid                                                                                  |
| Menu location                                                                              |
| Annotation → Grid                                                                          |
| Workbenches                                                                                |
| [BIM](/BIM_Workbench "BIM Workbench")                                                      |
| Default shortcut                                                                           |
| _None_                                                                                     |
| Introduced in version                                                                      |
| -                                                                                          |
| See also                                                                                   |
| [Arch Axis](/Arch_Axis "Arch Axis"), [Arch AxisSystem](/Arch_AxisSystem "Arch AxisSystem") |
|                                                                                            |

## Description

The **Arch Grid** tool allows you to place a grid-like object in the document. This object is meant to serve as a base to build Arch objects that need a regular but complex frame, such as windows, curtain walls, column grids, railings, etc. The Grid object is editable like a spreadsheet, where you can add or remove columns and rows, define their size, and merge cells.

The Grid is a 2D object, and can therefore be used anywhere a 2D shape such as a [Draft](/Draft_Workbench "Draft Workbench") or [Sketch](/Sketcher_Workbench "Sketcher Workbench") is needed, but it can also behave as a [Arch AxisSystem](/Arch_AxisSystem "Arch AxisSystem"), and be used to propagate the placement of other Arch objects.

![](/images/Arch_Grid_example.jpg)

An array of columns, a railing system, and a window, each based on an [Arch Grid](/Arch_Grid "Arch Grid") object.

## Usage

1. Press the ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid") button.
2. Set the **Width** and **Height** of the grid in the properties.
3. Enter edit mode by double-clicking the grid object in the tree view.
4. Add rows and columns.
5. Set the desired width and height of rows and columns by double-clicking the row or column headers.

## Options

- A column width or row height of 0 means its size will be adapted automatically to fit the total width/height of the grid.
- Cells can be merged and unmerged by selecting them and clicking the appropriate button.
- When used as the Data**Axis** property of other Arch objects, the grid will drive the positioning of these objects. The Data**Points Output** property defines how the other objects are placed on the grid: At vertices, edge midpoints or face centers.
- By setting the Data**Auto Height** or Data**Auto Width** properties to a non-zero value, the total number of rows/columns and their individual heights/widths is ignored. Instead, the maximum number of columns or rows of the given auto width/height get automatically created.

## Properties

- Data**Rows**: The number of rows
- Data**Columns**: The number of columns
- Data**Row Size**: The sizes for rows
- Data**Column Size**: The sizes of columns
- Data**Points Output**: The type of 3D points produced by this grid object
- Data**Width**: The total width of this grid
- Data**Height**: The total height of this grid
- Data**Auto Width**: Creates automatic column divisions (set to 0 to disable)
- Data**Auto Height**: Creates automatic row divisions (set to 0 to disable)
- Data**Reorient**: When in edge midpoint mode, if this grid must reorient its children along edge normals or not
- Data**Hidden Faces**: The indices of faces to hide

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Grid tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Grid = makeGrid(name="Grid")

```

- Creates a `Grid` object.

Its `Width`, `Height`, `Rows`, and `Columns` attributes can be changed directly to define the appearance of the grid.

```
import FreeCAD, Draft, Arch
Grid = Arch.makeGrid()

Grid.Width = 5000
Grid.Height = 5000
Grid.Rows = 4
Grid.Columns = 6
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = Grid
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/en&oldid=1435523>"
