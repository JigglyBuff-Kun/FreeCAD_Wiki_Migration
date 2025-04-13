---
title: Команда "Откл/вкл выделяемость"
---
|  |
| --- |
| Std ToggleSelectability |
| Расположение в меню |
| Вид → Видимость → Откл/вкл выделяемость |
| Верстаки |
| All |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **Std ToggleSelectability** command toggles the selectability of objects in [3D views](/3D_view "3D view").

## Применение

1. Select one or more objects.
2. There are several ways to invoke the command:
   * Select the **View → Visibility → ![](/images/Std_ToggleSelectability.svg) Toggle selectability** option from the menu.
   * Select the **![](/images/Std_ToggleSelectability.svg) Toggle selectability** option from the [Tree view](/Tree_view "Tree view") context menu or 3D view context menu.

## Примечания

* The selectability of an object can also be changed through its related Данные**Selectable** property in the [Property editor](/Property_editor "Property editor").

## Scripting

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The `Selectable` property of an object determines its selectability.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

obj.Selectable = not obj.Selectable

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleSelectability/ru&oldid=1451250>"