---
title: Команда "Обновить"
---
|  |
| --- |
| Обновить |
| Расположение в меню |
| Правка → Обновить |
| Верстаки |
| Все |
| Быстрые клавиши |
| F5 |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **Std Refresh** command recomputes the active document. The command is disabled if the document does not require a recompute.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_Refresh.svg) [Refresh](/Std_Refresh "Std Refresh") button.
   * Select the **Edit → ![](/images/Std_Refresh.svg) Refresh** option from the menu.
   * Use the keyboard shortcut: F5.

## Опции

* To force a recompute select the document or one or more objects in the [Tree view](/Tree_view "Tree view"), choose the **![](/images/Std_MarkToRecompute.svg) Mark to recompute** option from the context menu, and invoke the command.
* For objects, but not for documents, you can also choose **Recompute object** from the same context menu.

## Примечания

* For a macro that will recompute the active document see: [Macro ForceRecompute](/Macro_ForceRecompute "Macro ForceRecompute").

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Для обновления документа используйте метод `recompute` объекта document.

```
import FreeCAD

doc = FreeCAD.newDocument()
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Refresh/ru&oldid=1448944>"