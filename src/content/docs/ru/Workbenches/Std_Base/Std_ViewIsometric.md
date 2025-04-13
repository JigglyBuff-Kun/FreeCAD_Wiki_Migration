---
title: Команда "Изометрическая"
---
|  |
| --- |
| Изометрическая |
| Расположение в меню |
| Вид → Стандартные виды‏‎ → Axonometric → Изометрическая |
| Верстаки |
| Все |
| Быстрые клавиши |
| 0 |
| Представлено в версии |
| - |
| См. также |
| [Диметрическая](/Std_ViewDimetric/ru "Std ViewDimetric/ru"), [Триметрическая](/Std_ViewTrimetric/ru "Std ViewTrimetric/ru") |
|  |

## Описание

Команда **Std ViewIsometric** перестраивает камеру в активном [окне трёхмерного вида](/3D_view/ru "3D view/ru") для получения [изометрического](https://en.wikipedia.org/wiki/Isometric_projection) вида. Для истинно изометрического вида трехмерный вид должен находиться в [ортогональном режиме](/Std_OrthographicCamera/ru "Std OrthographicCamera/ru"), но команда также работает, если вид находится в [режиме перспективы](/Std_PerspectiveCamera/ru "Std PerspectiveCamera/ru").

![](/images/Std_ViewIsometric_example.svg)

The [axis cross](/Std_AxisCross "Std AxisCross") and a cube in isometric view

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_ViewIsometric.svg) [Isometric](/Std_ViewIsometric "Std ViewIsometric") button.
   * Select the **View → Standard views → Axonometric → ![](/images/Std_ViewIsometric.svg) Isometric** option from the menu.
   * Select the **Standard views → ![](/images/Std_ViewIsometric.svg) Isometric** option from the [3D view](/3D_view "3D view") context menu.
   * Select the **![](/images/Std_ViewIsometric.svg) Isometric** option from the Mini-cube menu of the [Navigation Cube](/Navigation_Cube "Navigation Cube").
   * Use the keyboard shortcut: 0.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Use the `viewIsometric` method of the View object to change to isometric view. The `viewDimetric` and `viewTrimetric` methods are also available.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewIsometric()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIsometric/ru&oldid=1449550>"