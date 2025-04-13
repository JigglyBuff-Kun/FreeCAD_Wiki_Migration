---
title: Команда "Отвязать"
---
|  |
| --- |
| Отвязать |
| Расположение в меню |
| Нет |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Создать ссылку](/Std_LinkMake/ru "Std LinkMake/ru"), [Ссылка](/Std_LinkMakeRelative/ru "Std LinkMakeRelative/ru"), [Заменить ссылкой](/Std_LinkReplace/ru "Std LinkReplace/ru") |
|  |

## Описание

![](/images/Std_LinkUnlink.svg) Отвязать является по существу операцией, противоположной ![](/images/Std_LinkReplace.svg) [Заменить ссылкой](/Std_LinkReplace/ru "Std LinkReplace/ru").

This operation is used to remove a Link from a container like ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and instead place the real object inside.

## Применение

1. Make sure you have a Link that is inside a container, for example, a Link to a ![](/images/Part_Sphere.svg) [Part Sphere](/Part_Sphere "Part Sphere") inside a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part").
2. Select the internal Link in the [tree view](/Tree_view "Tree view").
3. Press ![](/images/Std_LinkUnlink.svg) [Unlink](/Std_LinkUnlink "Std LinkUnlink").

The original ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere") must now be inside the ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and the Link must be outside. Now this Link can be deleted if it's no longer needed, and it won't break the container.

![](/images/Std_Link_tree_replace_fuse_2_example.png) ![](/images/Std_Link_tree_unlink_1_example.png)

A Link inside another object is unlinked, and the real object is placed inside instead.

![](/images/Std_Link_tree_replace_part_2_examples.png) ![](/images/Std_Link_tree_unlink_2_example.png)

A Link inside a group is unlinked, and the real object is placed inside instead.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkUnlink/ru&oldid=1452935>"