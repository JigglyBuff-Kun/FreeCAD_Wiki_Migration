---
title: Команда "Спереди"
---
|  |
| --- |
| Спереди |
| Расположение в меню |
| Вид → Стандартные виды‏‎ → Спереди |
| Верстаки |
| Все |
| Быстрые клавиши |
| 1 |
| Представлено в версии |
| - |
| См. также |
| [Сверху](/Std_ViewTop/ru "Std ViewTop/ru"), [Справа](/Std_ViewRight/ru "Std ViewRight/ru") |
|  |

## Описание

Команда **Std ViewFront** направляет камеру в активном [окне трёхмерного просмотра](/3D_view/ru "3D view/ru") в положительном направлении оси Y.

![](/images/FreeCAD_views_front.svg)

Стрелка 1 указывает в сторону вида спереди

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_ViewFront.svg) [Front](/Std_ViewFront "Std ViewFront") button.
   * Select the **View → Standard views → ![](/images/Std_ViewFront.svg) Front** option from the menu.
   * Select the **Standard views → ![](/images/Std_ViewFront.svg) Front** option from the [3D view](/3D_view "3D view") context menu.
   * Use the keyboard shortcut: 1.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Use the `viewFront` method of the View object to change to front view. Methods for the other main view orientations are also available: `viewTop`, `viewRight`, `viewRear`, `viewBottom` and `viewRight`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewFront()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFront/ru&oldid=1449587>"