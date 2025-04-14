---
title: Std LinkUnlink
---

|                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std LinkUnlink                                                                                                                                                            |
| Menu location                                                                                                                                                             |
| None                                                                                                                                                                      |
| Workbenches                                                                                                                                                               |
| All                                                                                                                                                                       |
| Default shortcut                                                                                                                                                          |
| _None_                                                                                                                                                                    |
| Introduced in version                                                                                                                                                     |
| 0.19                                                                                                                                                                      |
| See also                                                                                                                                                                  |
| [Std LinkMake](/Std_LinkMake "Std LinkMake"), [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative"), [Std LinkReplace](/Std_LinkReplace "Std LinkReplace") |
|                                                                                                                                                                           |

## Description

![](/images/Std_LinkUnlink.svg) [Std LinkUnlink](/Std_LinkUnlink "Std LinkUnlink") is essentially the opposite operation to ![](/images/Std_LinkReplace.svg) [Std LinkReplace](/Std_LinkReplace "Std LinkReplace").

This operation is used to remove a Link from a container like ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and instead place the real object inside.

## Usage

1. Make sure you have a Link that is inside a container, for example, a Link to a ![](/images/Part_Sphere.svg) [Part Sphere](/Part_Sphere "Part Sphere") inside a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part").
2. Select the internal Link in the [tree view](/Tree_view "Tree view").
3. Press ![](/images/Std_LinkUnlink.svg) [Unlink](/Std_LinkUnlink "Std LinkUnlink").

The original ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere") must now be inside the ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and the Link must be outside. Now this Link can be deleted if it's no longer needed, and it won't break the container.

![](/images/Std_Link_tree_replace_fuse_2_example.png) ![](/images/Std_Link_tree_unlink_1_example.png)

A Link inside another object is unlinked, and the real object is placed inside instead.

![](/images/Std_Link_tree_replace_part_2_examples.png) ![](/images/Std_Link_tree_unlink_2_example.png)

A Link inside a group is unlinked, and the real object is placed inside instead.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkUnlink/en&oldid=1452931>"
