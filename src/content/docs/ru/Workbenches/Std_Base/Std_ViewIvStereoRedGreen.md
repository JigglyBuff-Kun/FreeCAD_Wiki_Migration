---
title: Команда "Стерео красный/голубой"
---
|  |
| --- |
| Стерео красный/голубой |
| Расположение в меню |
| Вид → Стерео → Стерео красный/голубой |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Четверная буферизация стерео](/Std_ViewIvStereoQuadBuff/ru "Std ViewIvStereoQuadBuff/ru"), [Стерео с чередованием строк](/Std_ViewIvStereoInterleavedRows/ru "Std ViewIvStereoInterleavedRows/ru"), [Стерео с чередованием столбцов](/Std_ViewIvStereoInterleavedColumns/ru "Std ViewIvStereoInterleavedColumns/ru"), [Выключить стерео](/Std_ViewIvStereoOff/ru "Std ViewIvStereoOff/ru") |
|  |

## Описание

The **Std ViewIvStereoRedGreen** command changes the active [3D view](/3D_view "3D view") to red/cyan, [anaglyph](https://en.wikipedia.org/wiki/Anaglyph_3D), stereo view mode. To use this stereo mode glasses with colored lenses are required.

## Применение

1. Select the **View → Stereo → ![](/images/Std_ViewIvStereoRedGreen.svg) Stereo red/cyan** option from the menu.

## Настройки

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* Расстояние между глаз может быть изменено в настройках: **Правка → Настройки... → Отображение → Трёхмерный вид → Расстояние между глаз для стерео режима**. Смотри [Редактор настроек](/Preferences_Editor/ru#3D_View "Preferences Editor/ru").

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Use the `setStereoType` method of the View object to change the stereo mode. The available modes are `"Anaglyph"`, `"QuadBuffer"`, `"InterleavedRows"`, `"InterleavedColumns"` and `"None"`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setStereoType("Anaglyph")
view.getStereoType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvStereoRedGreen/ru&oldid=1449699>"