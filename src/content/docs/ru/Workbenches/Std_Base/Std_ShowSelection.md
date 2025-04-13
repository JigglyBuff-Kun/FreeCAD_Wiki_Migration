---
title: Команда "Показать выделенное"
---
|  |
| --- |
| Std ShowSelection |
| Расположение в меню |
| Вид → Видимость → Показать выделенные |
| Верстаки |
| All |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Std ToggleVisibility](/Std_ToggleVisibility/ru "Std ToggleVisibility/ru"), [Std HideSelection](/Std_HideSelection/ru "Std HideSelection/ru"), [Std ToggleObjects](/Std_ToggleObjects/ru "Std ToggleObjects/ru"), [Std ShowObjects](/Std_ShowObjects/ru "Std ShowObjects/ru"), [Std HideObjects](/Std_HideObjects/ru "Std HideObjects/ru") |
|  |

## Описание

The **Std ShowSelection** command shows selected objects in [3D views](/3D_view "3D view").

## Применение

1. Select one or more objects.
   * Invisible objects can be selected in the [Tree view](/Tree_view "Tree view").
   * Be careful when you use Ctrl+A to select all objects in the Tree view. This will also selects sub-elements of [PartDesign bodies](/PartDesign_Body "PartDesign Body") and objects used for [Part Booleans](/Part_Boolean "Part Boolean"). In most cases these should stay invisible.
   * Objects used for [Part Booleans](/Part_Boolean "Part Boolean") are also selected when you use Ctrl+A in a 3D view.
2. There are several ways to invoke the command:
   * Select the **View → Visibility → ![](/images/Std_ShowSelection.svg) Show selection** option from the menu.
   * Select the **![](/images/Std_ShowSelection.svg) Show selection** option from the Tree view context menu.

## Примечания

See [Std ToggleVisibility](/Std_ToggleVisibility#Notes "Std ToggleVisibility").

## Scripting

See [Std ToggleVisibility](/Std_ToggleVisibility#Scripting "Std ToggleVisibility").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ShowSelection/ru&oldid=1451198>"