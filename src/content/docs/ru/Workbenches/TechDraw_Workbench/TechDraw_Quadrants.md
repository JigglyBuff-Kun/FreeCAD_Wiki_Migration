---
title: TechDraw "Добавить 4-ре вершины по краям окружности"
---
|  |
| --- |
| Добавить 4-ре вершины по краям окружности |
| Расположение в меню |
| TechDraw → Добавить Вершины → Добавить 4-ре вершины по краям окружности |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Добавить Вспомогательную Вершину](/TechDraw_CosmeticVertex/ru "TechDraw CosmeticVertex/ru"), [Добавить Средние Вершины](/TechDraw_Midpoints/ru "TechDraw Midpoints/ru") |
|  |

## Описание

The **TechDraw Quadrant** tool adds three [cosmetic vertices](/TechDraw_CosmeticVertex "TechDraw CosmeticVertex") along the length of one or more selected edges. The vertices are placed at 25%, 50% and 75% of the length of the edges. For a circular edge this results in cosmetic vertices at 90°, 180° and 270°, in addition to its geometric vertex at 0°.

![](/images/TechDraw_CosmeticQuadrant_Sample.png)

Cosmetic vertices at quadrant points of a circle

## Применение

1. Select one or more edges in a view. Any edge can be selected, not just circles.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_Quadrants.svg) [Add Quadrant Vertices](/TechDraw_Quadrants "TechDraw Quadrants") button.
   * Select the **TechDraw → Add Vertices → ![](/images/TechDraw_Quadrants.svg) Add Quadrant Vertices** option from the menu.

## Notes

* The created cosmetic vertices are not parametrically linked to the selected edges.
* To delete a cosmetic vertex select it and press Delete. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Свойства

Cosmetic vertices have no properties of their own, as they are not document objects. They share color and size settings with regular geometry vertices.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Cosmetic vertices are not accessible from [macros](/Macros "Macros") or the [Python](/Python "Python") console at this time. This snippet will remove all cosmetic vertices from the view.

```
v = App.ActiveDocument.View
v.clearCV()
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Quadrants/ru&oldid=1402783>"