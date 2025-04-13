---
title: Команда "Габариты"
---
|  |
| --- |
| Габариты |
| Расположение в меню |
| Вид → Габариты |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Стиль представления](/Std_DrawStyle/ru "Std DrawStyle/ru") |
|  |

## Описание

The **Std SelBoundingBox** command toggles the global bounding box highlighting mode. If this mode is switched on, selected objects are marked in a [3D view](/3D_view "3D view") with a highlighted bounding box even if their Вид**Selection Style** is set to 'Shape'.

## Применение

1. Select the **View → ![](/images/Std_SelBoundingBox.svg) Bounding box** option from the menu.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

To change the ShowSelectionBoundingBox parameter use the `SetBool` method of the appropriate ParameterGrp.

```
import FreeCAD, FreeCADGui

grp = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/View")
if grp.GetBool("ShowSelectionBoundingBox"):
    grp.SetBool("ShowSelectionBoundingBox", False)
else:
    grp.SetBool("ShowSelectionBoundingBox", True)

FreeCADGui.updateCommands()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SelBoundingBox/ru&oldid=1449688>"