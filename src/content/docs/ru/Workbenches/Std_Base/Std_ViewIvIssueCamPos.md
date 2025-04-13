---
title: Команда "Выводить положения камеры"
---
|  |
| --- |
| Std ViewIvIssueCamPos |
| Расположение в меню |
| Вид → Стерео → Выводить положения камеры |
| Верстаки |
| All |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Std FreezeViews](/Std_FreezeViews/ru "Std FreezeViews/ru") |
|  |

## Описание

The **Std ViewIvIssueCamPos** command prints the camera settings of the active [3D view](/3D_view "3D view") in the [Report view](/Report_view "Report view") and the [Python console](/Python_console "Python console").

```
OrthographicCamera {   viewportMapping ADJUST_CAMERA   position 57.73505 -57.73502 57.735027   orientation 0.74290609 0.30772209 0.59447283  1.2171158   nearDistance 81.588844   farDistance 109.60551   aspectRatio 1   focalDistance 100   height 100  }

```

Example output: camera settings after changing to [isometric view](/Std_ViewIsometric "Std ViewIsometric") in a new document

## Применение

1. Выберите из меню опцию **Вид → Стерео → ![](/images/Std_ViewIvIssueCamPos.svg) Выводить положения камеры**.

## Примечания

* The camera settings can be used to add frozen views to a \*.cam file. See [Std FreezeViews](/Std_FreezeViews "Std FreezeViews").

## Scripting

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The `getCamera` method of the View object returns the same camera settings in a single string.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.getCamera()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvIssueCamPos/ru&oldid=1449746>"