---
title: Команда "Показать/скрыть оси координат"
---
|  |
| --- |
| Std AxisCross |
| Расположение в меню |
| Вид → Показать/скрыть оси координат |
| Верстаки |
| All |
| Быстрые клавиши |
| A C |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **Std AxisCross** command toggles the axis cross in the active [3D view](/3D_view "3D view").

The axis cross consists of three arrows representing the positive X, Y and Z axis of the global coordinate system. Their common start point is the origin of the global coordinate system.

![](/images/Std_AxisCross_example.svg)

The axis cross (the letters are not part of the axis cross)

## Применение

1. There are several ways to invoke the command:
   * Select the **View → ![](/images/Std_AxisCross.svg) Toggle axis cross** option from the menu.
   * Use the keyboard shortcut: A then C.

## Примечания

* FreeCAD can display a smaller coordinate system indicator in the bottom right corner of 3D views: **Edit → Preferences... → Display → 3D View → Show coordinate system in the corner**. See [Preferences Editor](/Preferences_Editor#3D_View "Preferences Editor").
* The [Navigation Cube](/Navigation_Cube "Navigation Cube") also includes a coordinate system indicator.

## Настройки

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* The default for the axis cross can be changed: **Edit → Preferences... → Display → 3D view → Show axis cross by default**.

## Scripting

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Чтобы показать или скрыть оси координат, используйте метод `setAxisCross`объекта ActiveView. Этот метод не доступен, когда FreeCAD в режиме консоли.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setAxisCross(True)
view.hasAxisCross()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AxisCross/ru&oldid=1451155>"