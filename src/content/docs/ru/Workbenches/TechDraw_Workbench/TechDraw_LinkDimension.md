---
title: TechDraw "Связать размер с 3D геометрией"
---
:::caution
TheTechDraw LinkDimensiontool isDEPRECATEDand will be removed in a future version. It should only be used with old (< v0.19) FreeCAD versions and files.In newer versions theTechDraw DimensionRepairtool should be used to change both 2D and 3D references.
:::

|  |
| --- |
| Связать размер с 3D геометрией |
| Расположение в меню |
| TechDraw → Размеры → Связать размер с 3D геометрией |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Вставить Вид](/TechDraw_View/ru "TechDraw View/ru"), [Вставить группу проекций](/TechDraw_ProjectionGroup/ru "TechDraw ProjectionGroup/ru") |
|  |

## Описание

The **TechDraw LinkDimension** tool creates a link between 3D geometry and one or more existing projected Dimensions on a Page. This link allows the Dimension to use actual 3D values instead of 2D projected values.

The Link Dimension tool's most common use is in dimensioning isometric views in a ProjectionGroup. The projected length of an Edge in an isometric view will, of course, not necessarily equal the actual length of the Edge. In an orthogonal view the projected and actual lengths will be equal.

The link instructs the Dimension to compute it's value directly from the 3D geometry.

## Применение

1. Create an appropriate dimension on the drawing page using any of [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension"), [TechDraw HorizontalDimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension"), etc. This dimension will be in the right place on the Page, but will show the projected dimension value.
2. Select the geometry in the 3D view, for example, an edge, that corresponds to the projected geometry of your dimension.
3. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_LinkDimension.svg) [Link Dimension to 3D Geometry](/TechDraw_LinkDimension "TechDraw LinkDimension") button.
   * Select the **TechDraw → Dimensions → ![](/images/TechDraw_LinkDimension.svg) Link Dimension to 3D Geometry** option from the menu.
4. A task panel opens.
5. Select one or more Dimensions to be linked to the selected 3D geometry.
6. Press OK.

The link operation changes the Данные**MeasureType** property of the dimension from `Projected` to `True`.

## Ограничения

Dimension objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". See [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension") for more information. It is recommended that linking dimensions be one of the last steps in your drawing process.

The link tool will not stop you from making illogical links, so you need to choose the correct edge from the 3D view when creating the link.

There is currently no way to break a link; you can change the Данные**MeasureType** back to `Projected` so that the dimension will use the projected value instead of the linked value.

Note that if the Dimension to be linked is based on two vertices, you should select two vertices in the 3D view. Similarly if the Dimension is based on an edge, you should select an edge in the 3D view.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The TechDraw LinkDimension tool is not directly usable in macros, but changing the Данные**References 3D** property can accomplish the same result.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LinkDimension/ru&oldid=1486071>"