---
title: Команда "Повернуть влево"
---
|  |
| --- |
| Std ViewRotateLeft |
| Расположение в меню |
| Вид → Стандартные виды → Повернуть влево |
| Верстаки |
| All |
| Быстрые клавиши |
| Shift+Left |
| Представлено в версии |
| - |
| См. также |
| [Std ViewRotateRight](/Std_ViewRotateRight/ru "Std ViewRotateRight/ru") |
|  |

## Описание

The **Std ViewRotateLeft** command rotates the camera in the active [3D view](/3D_view "3D view") around the view direction in 90-degree increments towards the left (counterclockwise).

## Применение

1. There are several ways to invoke the command:
   * Select the **View → Standard views → ![](/images/Std_ViewRotateLeft.svg) Rotate Left** option from the menu.
   * Select the **Standard views → ![](/images/Std_ViewRotateLeft.svg) Rotate Left** option from the [3D view](/3D_view "3D view") context menu.
   * Use the keyboard shortcut: Shift+Left.

## Scripting

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Use the `viewRotateLeft` method of the View object to rotate the view to the left. The `viewRotateRight` method is also available.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewRotateLeft()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewRotateLeft/ru&oldid=1449642>"