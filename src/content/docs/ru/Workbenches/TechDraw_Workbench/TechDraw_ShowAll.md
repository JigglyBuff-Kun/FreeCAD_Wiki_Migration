---
title: TechDraw "Показать/скрыть невидимые грани"
---
|  |
| --- |
| Показать/скрыть невидимые края |
| Расположение в меню |
| TechDraw → ShowAll |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Изменить внешний вид линий](/TechDraw_DecorateLine/ru "TechDraw DecorateLine/ru") |
|  |

## Описание

The **TechDraw ShowAll** tool is intended to temporarily show, and then hide, invisible lines in a View. Lines can be made invisible with the [TechDraw DecorateLine](/TechDraw_DecorateLine "TechDraw DecorateLine") tool. Note that "invisible" is a cosmetic state, not to be confused with hidden lines which are geometric constructs.

## Применение

1. Select a View with invisible lines on a Page or in the [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_ShowAll.svg) [Show/Hide Invisible Edges](/TechDraw_ShowAll "TechDraw ShowAll") button.
   * Select the **TechDraw → Add Lines → ![](/images/TechDraw_ShowAll.svg) Show/Hide Invisible Edges** option from the menu.
3. All invisible lines in the View are either shown or hidden.

## Notes

* To make invisible lines permanently visible use ![](/images/TechDraw_DecorateLine.svg) [TechDraw DecorateLine](/TechDraw_DecorateLine "TechDraw DecorateLine").

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The effect of the ShowAll tool can be duplicated in [macros](/Macros "Macros") or the [Python](/Python "Python") console.

```
v = App.ActiveDocument.View
vvo = v.ViewObject
vvo.ShowAllEdges = True
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ShowAll/ru&oldid=1292701>"