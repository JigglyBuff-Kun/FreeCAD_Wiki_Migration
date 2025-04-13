---
title: Меню "Верстак"
---
|  |
| --- |
| Std Workbench |
| Расположение в меню |
| [Вид](/Std_View_Menu/ru "Std View Menu/ru") → Верстак |
| Верстаки |
| [Верстаки](/Workbenches/ru "Workbenches/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **Std Workbench** command activates a selected [workbench](/Workbenches "Workbenches").

![](/images/Std_Workbench_ComboBox_Icons_And_Text.png)

The default ComboBox Workbench selector type

![](/images/Std_Workbench_TabBar_Icons_Only.png)

The optional TabBar Workbench selector type (here displayed with icons only) [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Применение

1. There are several ways to invoke the command:
   * Select a workbench from the ComboBox or TabBar ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) in the Workbench toolbar.
   * Press the ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) button on the TabBar to select a workbench that has been disabled in the [preferences](/Preferences_Editor#Available_Workbenches "Preferences Editor") from the menu that opens.
   * Select a workbench from the **View → Workbench** sub-menu.

## Примечания

* Additional [External Workbenches](/External_Workbenches "External Workbenches") can be downloaded with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Настройки

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* A [page with related preferences](/Preferences_Editor#Available_Workbenches "Preferences Editor") is available: **Edit → Preferences... → Workbenches → Available Workbenches**. You can change the **Start up workbench**, the **Workbench selector type**, and more. The ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) button on the TabBar gives access to this page via its menu.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

To change the workbench use the `activateWorkbench` method of the FreeCADGui module.

```
import FreeCADGui

FreeCADGui.activateWorkbench("PartDesignWorkbench")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Workbench/ru&oldid=1494631>"