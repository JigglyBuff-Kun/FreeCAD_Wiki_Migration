---
title: Drawing ProjectShape
---

|                                                   |
| ------------------------------------------------- |
| Drawing ProjectShape                              |
| Menu location                                     |
| Drawing → Project shape                           |
| Workbenches                                       |
| [Drawing](/Drawing_Workbench "Drawing Workbench") |
| Default shortcut                                  |
| _None_                                            |
| Introduced in version                             |
| -                                                 |
| See also                                          |
| _None_                                            |
|                                                   |

## Description

This tool creates a projection of the selected object (Source) in the 3D view.

![](/src/assets/images/ProjectShape1_it.png)

## Usage

|     |                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | 1. Select an object in the 3D view or in the project tree 2. from the Drawing menu, click **Project shape** 3. set the desired options in the Task Dialog 4. click OK A projection object (**objectname_proj**) will be added to the project. For subsequent projections of the same Source object, the projection object will be named **objectname_projXXX**, where **XXX** is a three digit number. |

### Edit an existing projection

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | The projection parameters can be edited in the Property editor. Base _ Data**Label** : _ Data**Placement** : Projection _ Data**Direction** : defines the direction of the projection. This is the normal vector of the projection plane. For example, to project the object onto the xy plane, use (0,0,1). To reverse the projection, use negative values. _ Data**HCompound** : _ Data**Iso Line HCompound** : _ Data**Iso Line VCompound** : _ Data**Out Line HCompound** : _ Data**Out Line VCompound** : _ Data**Rg1 Line HCompound** : _ Data**Rg1 Line VCompound** : _ Data**Rg NLine HCompound** : _ Data**Rg NLine VCompound** : _ Data**Source** : the object being projected _ Data**VCompound** : |

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_ProjectShape/en&oldid=981322>"
