---
title: Part Compound
---

|                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Compound‏‎                                                                                                                                                              |
| Menu location                                                                                                                                                                |
| Part → Make compound                                                                                                                                                         |
| Workbenches                                                                                                                                                                  |
| [Part](/Part_Workbench "Part Workbench")                                                                                                                                     |
| Default shortcut                                                                                                                                                             |
| _None_                                                                                                                                                                       |
| Introduced in version                                                                                                                                                        |
| 0.14                                                                                                                                                                         |
| See also                                                                                                                                                                     |
| [Part Fuse](/Part_Fuse "Part Fuse"), [Part CompoundFilter](/Part_CompoundFilter "Part CompoundFilter"), [Part ExplodeCompound](/Part_ExplodeCompound "Part ExplodeCompound") |
|                                                                                                                                                                              |

## Description

This command creates a compound of objects with a topological shape such as solid objects and other objects with faces and/or edges. It cannot handle meshes as they do not have a topological shape.

## Usage

1. Mark the topological shapes to be added to the compound in the [tree view](/Tree_view "Tree view")
2. Choose **Part → Compound → Make Compound** entry in the Part menu or click on the ![](/src/assets/images/Part_Compound.svg) button.

## Notes

A compound containing pieces that intersect or touch is **invalid** for Boolean operations. Because of performance issues, checking if the pieces intersect is not done by default. Automatic geometry check (available for Boolean operations) is disabled for part compound as well.

To turn this check on go to **Tools → Edit Parameters → Preferences... → Mod → Part → CheckGeometry → RunBOPCheck** and set the parameter to `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/en&oldid=1466647>"
