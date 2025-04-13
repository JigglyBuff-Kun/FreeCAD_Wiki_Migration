---
title: TechDraw "Добавить вспомогательную линию между 2-мя точками"
---
|  |
| --- |
| Добавить вспомогательную линию между 2-мя точками |
| Расположение в меню |
| TechDraw → Добавить Линии → Добавить вспомогательную линию между 2-мя точками |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Добавить осевую линию к граням](/TechDraw_FaceCenterLine/ru "TechDraw FaceCenterLine/ru"), [Добавить осевую линию между 2 линиями](/TechDraw_2LineCenterLine/ru "TechDraw 2LineCenterLine/ru") |
|  |

## Описание

The **TechDraw 2PointCosmeticLine** tool adds a cosmetic line between two points. The points can be 2D or 3D. The resulting line can be used for dimensioning.

![](/images/CosLine2PointsSample.png)

Cosmetic line between two points

## Применение

1. Select two points in a TechDraw View or two points in the [3D view](/3D_view "3D view").
2. If you have selected points in the 3D view: add the correct TechDraw View to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_2PointCosmeticLine.svg) [Add Cosmetic Line Through 2 points](/TechDraw_2PointCosmeticLine "TechDraw 2PointCosmeticLine") button.
   * Select the **TechDraw → Add Lines → ![](/images/TechDraw_2PointCosmeticLine.svg) Add Cosmetic Line Through 2 points** option from the menu.
4. A task panel opens.
5. Optionally adjust the coordinates of the points.
6. Press the OK button.
7. A cosmetic line connecting the two points is added. In the case of 3D points, the line connects the projection of the points.

## Usage edit

To change the endpoints of a cosmetic line:

1. Select the cosmetic line.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_2PointCosmeticLine.svg) [Add Cosmetic Line Through 2 points](/TechDraw_2PointCosmeticLine "TechDraw 2PointCosmeticLine") button.
   * Select the **TechDraw → Add Lines → ![](/images/TechDraw_2PointCosmeticLine.svg) Add Cosmetic Line Through 2 points** option from the menu.
3. A task panel opens.
4. Adjust the coordinates of the points.
5. Press the OK button.

## Notes

* To delete a cosmetic line select it and press Delete. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* To change the appearance of a cosmetic line use ![](/images/TechDraw_DecorateLine.svg) [TechDraw DecorateLine](/TechDraw_DecorateLine "TechDraw DecorateLine").

## Свойства

Cosmetic lines have no properties of their own, as they are not document objects.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Cosmetic lines can be created using the `makeCosmeticLine(v1, v2)` or `makeCosmeticLine3d(v1, v2)` methods of DrawViewPart.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_2PointCosmeticLine/ru&oldid=1402891>"