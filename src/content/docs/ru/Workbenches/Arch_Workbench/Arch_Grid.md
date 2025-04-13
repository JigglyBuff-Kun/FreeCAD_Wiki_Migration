---
title: Arch Сетка
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Grid |
| Расположение в меню |
| Arch → Axis tools → Grid |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Arch Axis/ru](/Arch_Axis/ru "Arch Axis/ru"), [Arch AxisSystem/ru](/Arch_AxisSystem/ru "Arch AxisSystem/ru") |
|  |

## Описание

The **Arch Grid** tool allows you to place a grid-like object in the document. This object is meant to serve as a base to build Arch objects that need a regular but complex frame, such as windows, curtain walls, column grids, railings, etc. The Grid object is editable like a spreadsheet, where you can add or remove columns and rows, define their size, and merge cells.

The Grid is a 2D object, and can therefore be used anywhere a 2D shape such as a [Draft](/Draft_Workbench "Draft Workbench") or [Sketch](/Sketcher_Workbench "Sketcher Workbench") is needed, but it can also behave as a [Arch AxisSystem](/Arch_AxisSystem "Arch AxisSystem"), and be used to propagate the placement of other Arch objects.

![](/images/Arch_Grid_example.jpg)

An array of columns, a railing system, and a window, each based on an [Arch Grid](/Arch_Grid "Arch Grid") object.

## Применение

1. Press the ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid") button.
2. Set the **Width** and **Height** of the grid in the properties.
3. Enter edit mode by double-clicking the grid object in the tree view.
4. Add rows and columns.
5. Set the desired width and height of rows and columns by double-clicking the row or column headers.

## Опции

* A column width or row height of 0 means its size will be adapted automatically to fit the total width/height of the grid.
* Cells can be merged and unmerged by selecting them and clicking the appropriate button.
* When used as the Данные**Axis** property of other Arch objects, the grid will drive the positioning of these objects. The Данные**Points Output** property defines how the other objects are placed on the grid: At vertices, edge midpoints or face centers.
* By setting the Данные**Auto Height** or Данные**Auto Width** properties to a non-zero value, the total number of rows/columns and their individual heights/widths is ignored. Instead, the maximum number of columns or rows of the given auto width/height get automatically created.

## Свойства

* Данные**Rows**: The number of rows
* Данные**Columns**: The number of columns
* Данные**Row Size**: The sizes for rows
* Данные**Column Size**: The sizes of columns
* Данные**Points Output**: The type of 3D points produced by this grid object
* Данные**Width**: The total width of this grid
* Данные**Height**: The total height of this grid
* Данные**Auto Width**: Creates automatic column divisions (set to 0 to disable)
* Данные**Auto Height**: Creates automatic row divisions (set to 0 to disable)
* Данные**Reorient**: When in edge midpoint mode, if this grid must reorient its children along edge normals or not
* Данные**Hidden Faces**: The indices of faces to hide

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Grid tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Grid = makeGrid(name="Grid")

```

* Creates a `Grid` object.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/ru&oldid=1435457>"