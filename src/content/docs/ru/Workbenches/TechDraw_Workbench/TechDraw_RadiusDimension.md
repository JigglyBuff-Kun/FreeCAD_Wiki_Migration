---
title: TechDraw "Указать радиус"
---
|  |
| --- |
| Указать радиус |
| Расположение в меню |
| TechDraw → Размеры → Указать радиус |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Указать диаметр](/TechDraw_DiameterDimension/ru "TechDraw DiameterDimension/ru") |
|  |

## Описание

The **TechDraw RadiusDimension** tool adds a radius dimension to a View. The dimension may be applied to any edge which is a circle or circular arc.

![](/images/TechDraw_Dimension_Radius_example.png)

Measuring a circle, indicating the radius

## Применение

1. Select a circle or circular arc. The geometry may be selected in the [3D view](/3D_view "3D view") or in the drawing. Note some arcs which appear to be circular are actually ellipses or B-splines. You cannot make a radius dimension in these cases.
2. If you have selected geometry in the 3D view: add the correct TechDraw View to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/TechDraw_RadiusDimension.svg) Insert Radius Dimension** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/TechDraw_RadiusDimension.svg) [Insert Radius Dimension](/TechDraw_RadiusDimension "TechDraw RadiusDimension") button.
   * Select the **TechDraw → Dimensions → ![](/images/TechDraw_RadiusDimension.svg) Insert Radius Dimension** option from the menu.
4. A dimension is added to the View.
5. The dimension may be dragged to the desired position.
6. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

### Display 3D measurement

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Display_3D_measurement "TechDraw LengthDimension").

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension").

## Ограничения

Dimension objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". See [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension").

## Notes

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Notes "TechDraw LengthDimension").

## Свойства

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Properties "TechDraw LengthDimension").

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Radius Dimension tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Radius"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RadiusDimension/ru&oldid=1486712>"