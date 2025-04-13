---
title: Std RecallWorkingView/ru
---
|  |
| --- |
| Std RecallWorkingView |
| Menu location |
| View → Standard views → Recall working view |
| Workbenches |
| All |
| Default shortcut |
| End |
| Introduced in version |
| 0.21 |
| See also |
| [Std StoreWorkingView](/Std_StoreWorkingView "Std StoreWorkingView"), [Std FreezeViews](/Std_FreezeViews "Std FreezeViews") |
|  |

## Описание

The **Std RecallWorkingView** recalls the active [3D view](/3D_view "3D view")'s stored working view. For more information see [Std StoreWorkingView](/Std_StoreWorkingView "Std StoreWorkingView").

## Применение

1. Make sure a [3D view](/3D_view "3D view") is active for which the [Std StoreWorkingView](/Std_StoreWorkingView "Std StoreWorkingView") command has been used at least once.
2. There are several ways to invoke the command:
   * Select the **View → Standard views → Recall working view** option from the menu.
   * Use the keyboard shortcut: End.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

To recall the stored working view of the active 3D view:

```
import FreeCADGui

FreeCADGui.runCommand("Std_RecallWorkingView", 0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_RecallWorkingView/ru&oldid=1449664>"