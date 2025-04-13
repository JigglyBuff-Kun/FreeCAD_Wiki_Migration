---
title: Команда "Увеличить"
---
|  |
| --- |
| Увеличить |
| Расположение в меню |
| Вид → Масштаб‏‎ → Увеличить |
| Верстаки |
| All |
| Быстрые клавиши |
| Ctrl++ |
| Представлено в версии |
| - |
| См. также |
| [Уменьшить](/Std_ViewZoomOut/ru "Std ViewZoomOut/ru"), [Увеличить область](/Std_ViewBoxZoom/ru "Std ViewBoxZoom/ru") |
|  |

## Описание

The **Std ViewZoomIn** command zooms in in the active [3D view](/3D_view "3D view").

## Применение

1. There are several ways to invoke the command:
   * Select the **View → Zoom → ![](/images/Std_ViewZoomIn.svg) Zoom In** option from the menu.
   * Use the keyboard shortcut: Ctrl++.

## Примечания

* With almost all [mouse navigation styles](/Mouse_navigation "Mouse navigation") it is also possible to zoom with the scroll wheel of the mouse.

## Настройки

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* The zoom factor can be changed: **Edit → Preferences... → Display → Navigation → Zoom step**. This setting also affects scroll wheel zoom.

## Scripting

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Use the `zoomIn` method of the View object to zoom in. The `zoomOut` method is also available.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.zoomIn()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewZoomIn/ru&oldid=1449762>"