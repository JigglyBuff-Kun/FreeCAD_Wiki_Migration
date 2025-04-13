---
title: Drawing ProjectShape/ru
---
|  |
| --- |
| Drawing ProjectShape |
| Расположение в меню |
| Чертёж → Проекция фигуры |
| Верстаки |
| [Drawing](/Drawing_Workbench/ru "Drawing Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
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
|  | The projection parameters can be edited in the Property editor.    Base   * Данные**Label** : * Данные**Placement** :   Projection   * Данные**Direction** : defines the direction of the projection. This is the normal vector of the projection plane. For example, to project the object onto the xy plane, use (0,0,1). To reverse the projection, use negative values. * Данные**HCompound** : * Данные**Iso Line HCompound** : * Данные**Iso Line VCompound** : * Данные**Out Line HCompound** : * Данные**Out Line VCompound** : * Данные**Rg1 Line HCompound** : * Данные**Rg1 Line VCompound** : * Данные**Rg NLine HCompound** : * Данные**Rg NLine VCompound** : * Данные**Source** : the object being projected * Данные**VCompound** : |

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_ProjectShape/ru&oldid=999836>"