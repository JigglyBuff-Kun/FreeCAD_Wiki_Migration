---
title: Команда "Уместить всё"
---
|  |
| --- |
| Уместить всё |
| Расположение в меню |
| Вид → Стандартные виды‏‎ → Уместить всё |
| Верстаки |
| Все |
| Быстрые клавиши |
| V F |
| Представлено в версии |
| - |
| См. также |
| [Уместить выделенное](/Std_ViewFitSelection/ru "Std ViewFitSelection/ru") |
|  |

## Описание

The **Std ViewFitAll** command zooms and pans the camera so that all visible objects fit inside the active [3D view](/3D_view "3D view").

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_ViewFitAll.svg) [Fit all](/Std_ViewFitAll "Std ViewFitAll") button.
   * Select the **View → Standard views → ![](/images/Std_ViewFitAll.svg) Fit all** option from the menu.
   * Select the **![](/images/Std_ViewFitAll.svg) Fit all** option from the [3D view](/3D_view "3D view") context menu.
   * Select the **![](/images/Std_ViewFitAll.svg) Fit all** option from the Mini-cube menu of the [Navigation Cube](/Navigation_Cube "Navigation Cube").
   * Use the keyboard shortcut: V then F.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Use the `fitAll` method of the View object to zoom to fit all.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.fitAll()

```

For the active view the `SendMsgToActiveView` method of the FreeCADGui object can also be used.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitAll/ru&oldid=1449509>"