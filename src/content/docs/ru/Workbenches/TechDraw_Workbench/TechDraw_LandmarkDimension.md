---
title: TechDraw "Вставить размер знака"
---
|  |
| --- |
| Вставить размер знака |
| Расположение в меню |
| TechDraw → Размеры → Вставить размер знака |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Указать горизонтальный размер](/TechDraw_HorizontalDimension/ru "TechDraw HorizontalDimension/ru"), [Указать вертикальный размер](/TechDraw_VerticalDimension/ru "TechDraw VerticalDimension/ru") |
|  |

## Описание

The **TechDraw LandmarkDimension** tool adds a linear dimension to a View. The dimension is based on two point objects ([Draft Point](/Draft_Point "Draft Point"), [Part Point](/Part_Point "Part Point") or [PartDesign Point](/PartDesign_Point "PartDesign Point") objects) from the 3D model.

The purpose of this tool is to provide a workaround to the corruption of dimensions caused by the "[topological naming](/Topological_naming_problem "Topological naming problem")" issues. The source points should use [Expressions](/Expressions "Expressions") or other containing mechanisms to establish their position. Since the points are [Document Objects](/App_DocumentObject "App DocumentObject"), and not shape components, their name does not change with recomputes, and hence they are easily found.

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Limitation "TechDraw LengthDimension") for more on dimensions and topological naming.

## Применение

1. Select two point objects in the [3D view](/3D_view "3D view") or [Tree view](/Tree_view "Tree view").
2. Add the correct TechDraw View to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_LandmarkDimension.svg) [Insert Landmark Dimension - EXPERIMENTAL](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension") button.
   * Select the **TechDraw → Dimensions → ![](/images/TechDraw_LandmarkDimension.svg) Insert Landmark Dimension - EXPERIMENTAL** option from the menu.
4. A dimension is added to the View.
5. The dimension may be dragged to the desired position.
6. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension").

## Ограничения

The Landmark Dimension tool is initially limited to "Distance" dimensions. Other types may be added if demand warrants.

## Notes

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Notes "TechDraw LengthDimension").

## Свойства

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Properties "TechDraw LengthDimension").

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Landmark Dimension tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::LandmarkDimension", "Landmark")
dim1.Type = "Distance"
dim1.References2D = [(TDView, "Vertex1")]
dim1.References3D = [(Point3d1, "Vertex1")]
dim1.References3D = [(Point3d2, "Vertex1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LandmarkDimension/ru&oldid=1342697>"