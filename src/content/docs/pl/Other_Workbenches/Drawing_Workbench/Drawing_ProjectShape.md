---
title: Kreślenie Rzut przestrzenny obiektu
---
|  |
| --- |
| Drawing ProjectShape |
| Menu location |
| Drawing → Project shape |
| Workbenches |
| [Drawing](/Drawing_Workbench "Drawing Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

This tool creates a projection of the selected object (Source) in the 3D view.

![](/images/ProjectShape1_it.png)

## Usage

|  |  |
| --- | --- |
|  | 1. Select an object in the 3D view or in the project tree 2. from the Drawing menu, click **Project shape** 3. set the desired options in the Task Dialog 4. click OK   A projection object (**objectname\_proj**) will be added to the project. For subsequent projections of the same Source object, the projection object will be named **objectname\_projXXX**, where **XXX** is a three digit number. |

### Edit an existing projection

|  |  |
| --- | --- |
|  | The projection parameters can be edited in the Property editor.    Base   * DANE**Label** : * DANE**Placement** :   Projection   * DANE**Direction** : defines the direction of the projection. This is the normal vector of the projection plane. For example, to project the object onto the xy plane, use (0,0,1). To reverse the projection, use negative values. * DANE**HCompound** : * DANE**Iso Line HCompound** : * DANE**Iso Line VCompound** : * DANE**Out Line HCompound** : * DANE**Out Line VCompound** : * DANE**Rg1 Line HCompound** : * DANE**Rg1 Line VCompound** : * DANE**Rg NLine HCompound** : * DANE**Rg NLine VCompound** : * DANE**Source** : the object being projected * DANE**VCompound** : |

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_ProjectShape/pl&oldid=1074143>"