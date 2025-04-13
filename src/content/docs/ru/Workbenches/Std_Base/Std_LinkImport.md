---
title: Команда "Импорт"
---
|  |
| --- |
| Импорт ссылок |
| Расположение в меню |
| Нет |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Создать ссылку](/Std_LinkMake/ru "Std LinkMake/ru"), [Ссылка](/Std_LinkMakeRelative/ru "Std LinkMakeRelative/ru"), [Импорт всех ссылок](/Std_LinkImportAll/ru "Std LinkImportAll/ru") |
|  |

## Описание

![](/images/Std_LinkImport.svg) [Std LinkImport](/Std_LinkImport "Std LinkImport") imports the Данные**Linked Object** from a Link into the current document, and then changes the attachment to this object.

This operation is helpful when working with [assemblies](/Assembly "Assembly") in order to organize re-usable models that may be located in other documents.

Use ![](/images/Std_LinkImportAll.svg) [Std LinkImportAll](/Std_LinkImportAll "Std LinkImportAll") to import all linked objects.

## Применение

1. Make sure you have a "source" document with an original object, say, a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and a second "target" document with a Link to that object.
2. Open the target document and select the Link to the object; its Данные**Linked Object** should show something like `source#Part`.
3. Press ![](/images/Std_LinkImport.svg) [Import link](/Std_LinkImport "Std LinkImport").

A copy of the original ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") must now be inside the current "target" document. The Данные**Linked Object** property of the Link must now show `Part`, indicating that the Link no longer points to `Part` in "source", but to `Part` in the current document ("target").

![](/images/Std_Link_tree_import_1_example.png) ![](/images/Std_Link_tree_import_2_example.png)

Left: a Link points to the object in the "source" document. Right: the original object was imported (copied) into the "target" document, and the existing Link was changed to point to this copy, so it no longer points to the object in "source".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImport/ru&oldid=1235215>"