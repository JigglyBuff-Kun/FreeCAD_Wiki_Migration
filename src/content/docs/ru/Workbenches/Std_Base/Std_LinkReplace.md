---
title: Команда "Заменить ссылкой"
---
|  |
| --- |
| Заменить ссылкой |
| Расположение в меню |
| Нет |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Создать ссылку](/Std_LinkMake/ru "Std LinkMake/ru"), [Ссылка](/Std_LinkMakeRelative/ru "Std LinkMakeRelative/ru"), [Отвязать](/Std_LinkUnlink/ru "Std LinkUnlink/ru") |
|  |

## Описание

![](/images/Std_LinkReplace.svg) [Std LinkReplace](/Std_LinkReplace "Std LinkReplace") replaces an object that is inside another for an [App Link](/App_Link "App Link") version of the former.

This operation acts on the "children" of a "parent" object as seen in the [tree view](/Tree_view "Tree view"). For example, given two objects (A and B) that participate in a ![](/images/Part_Boolean.svg) [Part Boolean](/Part_Boolean "Part Boolean") operation, say, `C = A + B`, the A object can be replaced by a Link, so that `C = A_link + B`.

This operation can be done to replace nested objects that are in a complex [assembly](/Assembly "Assembly") for a Link, which may be more efficient if that nested object is used many times in different sub-assemblies. The inverse operation is ![](/images/Std_LinkUnlink.svg) [Std LinkUnlink](/Std_LinkUnlink "Std LinkUnlink"). To create a generic Link see ![](/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake").

## Применение

1. Make sure you have one object that is inside another one. For example, consider that a ![](/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse") was used with two previously created objects, a ![](/images/Part_Sphere.svg) [Part Sphere](/Part_Sphere "Part Sphere") and a ![](/images/Part_Cylinder.svg) [Part Cylinder](/Part_Cylinder "Part Cylinder").
2. Select the ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere") in the [tree view](/Tree_view "Tree view").
3. Press ![](/images/Std_LinkReplace.svg) [Replace with link](/Std_LinkReplace "Std LinkReplace").

The original ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere") must now be outside the ![](/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse"), and inside there must be a Link instead (a small overlay arrow is shown in the icon).

![](/images/Std_Link_tree_replace_fuse_1_example.png) ![](/images/Std_Link_tree_replace_fuse_2_example.png)

An object inside another one is replaced by a Link; the Link is now inside, and the real object is placed outside.

This can also be done with objects contained inside ![](/images/Std_Part.svg) [Std Parts](/Std_Part "Std Part") and ![](/images/Std_Group.svg) [Std Groups](/Std_Group "Std Group").

![](/images/Std_Link_tree_replace_part_1_examples.png) ![](/images/Std_Link_tree_replace_part_2_examples.png)

An object inside a container is replaced by a Link; the Link is now inside, and the real object is placed outside.

## Свойства

Данная команда создает новый [App Link](/App_Link/ru "App Link/ru"); его свойства описанны на странице команды ![](/images/Std_LinkMake.svg) ["Создать ссылку"](/Std_LinkMake/ru "Std LinkMake/ru").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkReplace/ru&oldid=1452928>"