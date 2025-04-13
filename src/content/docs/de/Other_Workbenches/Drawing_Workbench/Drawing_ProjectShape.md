---
title: Drawing ProjectShape/de
---
|  |
| --- |
| Drawing ProjectShape |
| Menüeintrag |
| Drawing → Project shape |
| Arbeitsbereich |
| [Drawing](/Drawing_Workbench/de "Drawing Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
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
|  | The projection parameters can be edited in the Property editor.    Base   * Daten**Label** : * Daten**Placement** :   Projection   * Daten**Direction** : defines the direction of the projection. This is the normal vector of the projection plane. For example, to project the object onto the xy plane, use (0,0,1). To reverse the projection, use negative values. * Daten**HCompound** : * Daten**Iso Line HCompound** : * Daten**Iso Line VCompound** : * Daten**Out Line HCompound** : * Daten**Out Line VCompound** : * Daten**Rg1 Line HCompound** : * Daten**Rg1 Line VCompound** : * Daten**Rg NLine HCompound** : * Daten**Rg NLine VCompound** : * Daten**Source** : the object being projected * Daten**VCompound** : |

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_ProjectShape/de&oldid=1003101>"