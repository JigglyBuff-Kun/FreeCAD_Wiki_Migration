---
title: TechDraw "Добавить вершины по центрам граней"
---
|  |
| --- |
| Добавить вершины по центрам граней |
| Расположение в меню |
| TechDraw → Добавить Вершины → Add Midpoints Vertices |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Добавить вспомогательную вершину](/TechDraw_CosmeticVertex/ru "TechDraw CosmeticVertex/ru"), [Добавить 4-ре вершины по краям окружности](/TechDraw_Quadrants/ru "TechDraw Quadrants/ru") |
|  |

## Описание

The **TechDraw Midpoints** tool adds [cosmetic vertices](/TechDraw_CosmeticVertex "TechDraw CosmeticVertex") at the midpoint of one or more selected edges.

![](/images/TechDraw_CosmeticMidpoint_Sample.png)

Cosmetic vertices at the midpoint of edges

## Применение

1. Select one or more edges in a view.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_Midpoints.svg) [Add Midpoint Vertices](/TechDraw_Midpoints "TechDraw Midpoints") button.
   * Select the **TechDraw → Add Vertices → ![](/images/TechDraw_Midpoints.svg) Add Midpoint Vertices** option from the menu.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Midpoints/ru&oldid=1402773>"