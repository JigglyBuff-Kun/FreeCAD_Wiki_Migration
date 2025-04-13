---
title: Команда "Перейти на самый глубокий связанный объект"
---
|  |
| --- |
| Перейти на самый глубокий связанный объект |
| Расположение в меню |
| *Нет* |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Перейти к связанному объекту](/Std_LinkSelectLinked/ru "Std LinkSelectLinked/ru"), [Выбрать все ссылки](/Std_LinkSelectAllLinks/ru "Std LinkSelectAllLinks/ru"), [Назад](/Std_SelBack/ru "Std SelBack/ru"), [Вперёд](/Std_SelForward/ru "Std SelForward/ru") |
|  |

## Описание

The **Std LinkSelectLinkedFinal** command selects the Данные**Linked Object**, the source object, of an [App Link](/App_Link "App Link") object, a link. But if that source object is also a link its linked object is selected instead. This is repeated until the linked object is not a link. This final source object is the deepest linked object.

## Применение

1. Select a link.
2. There are several ways to invoke the command:
   * Select the **View → Link navigation → ![](/images/Std_LinkSelectLinkedFinal.svg) Go to the deepest linked object** option from the menu.
   * Select the **Link actions → ![](/images/Std_LinkSelectLinkedFinal.svg) Go to the deepest linked object** option from the [Tree view](/Tree_view "Tree view") context menu.
   * Use the keyboard shortcut: S then D.
3. The deepest linked object is selected. If this object belongs to an external document that document is activated.
4. Optionally use ![](/images/Std_SelBack.svg) [Std SelBack](/Std_SelBack "Std SelBack") to reselect the link.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkSelectLinkedFinal/ru&oldid=1453510>"