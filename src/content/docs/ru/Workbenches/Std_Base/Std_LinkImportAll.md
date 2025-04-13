---
title: Команда "Импорт всех ссылок"
---
|  |
| --- |
| Импорт всех ссылок |
| Расположение в меню |
| Нет |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Создать ссылку](/Std_LinkMake/ru "Std LinkMake/ru"), [Ссылка](/Std_LinkMakeRelative/ru "Std LinkMakeRelative/ru"), [Импорт ссылок](/Std_LinkImport/ru "Std LinkImport/ru") |
|  |

## Описание

![](/images/Std_LinkImportAll.svg) [Std LinkImportAll](/Std_LinkImportAll "Std LinkImportAll") imports all Данные**Linked Object**s from Links into the current document, and then changes the attachment to point to these imported objects.

This command essentially runs ![](/images/Std_LinkImport.svg) [Std LinkImport](/Std_LinkImport "Std LinkImport") for all Links in a document.

## Применение

1. Make sure you have a "source" document with original objects, and a second "target" document with Links to those objects.
2. Open the target document and press ![](/images/Std_LinkImportAll.svg) [Import all links](/Std_LinkImportAll "Std LinkImportAll").

![](/images/Std_Link_tree_import_all_1_example.png) ![](/images/Std_Link_tree_import_all_2_example.png)

Left: various Links that point to objects in the "source" document. Right: the original objects were imported (copied) into the "target" document, and the existing Links were changed to point to these copies, so they no longer point to objects in "source".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImportAll/ru&oldid=1458248>"