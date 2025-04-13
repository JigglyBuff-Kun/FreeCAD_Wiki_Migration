---
title: PartDesign Создать клон
---
|  |
| --- |
| Создать клон |
| Расположение в меню |
| Part Design → Создать клон |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Клонировать](/Draft_Clone/ru "Draft Clone/ru") |
|  |

## Описание

**PartDesign Clone** creates a linked copy of a selected object which will follow any future edits to the original object (except placement). For example, one use case is when you want to do [PartDesign Boolean](/PartDesign_Boolean "PartDesign Boolean") on an object created in another workbench. Most types of objects are accepted, as long as they are single solids. If you need to clone multiple objects (i.e., bodies) or a [Part Container](/Std_Part "Std Part"), you may use [Draft Workbench's clone](/Draft_Clone "Draft Clone"). One caveat is that the Part Design Workbench's clone sets the current placement of the clone as zero (both Cartesian translation and spatial orientations). While the Draft's workbenches clone calculates and sets the numerical values of the current placement and orientation of the cloned objects with respect to the cloned object container.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Clone of the inner gear while being translated in 3D space as an independent object

## Применение

1. In the Model tree, select the object to be cloned.
2. Press the ![](/images/PartDesign_Clone.svg) **Create a clone** button.

## Свойства

* Данные**Base Feature**: sets the original object the clone is based on. To replace, press the ... button to get a list of available objects.
* Данные**Placement**: defines the orientation and position of the Clone in the 3D space. See [Placement](/Placement "Placement").
* Данные**Label**: label given to the Clone object. Change to suit your needs.

## Ограничения

* Only a single object can be used for a PartDesign Clone.
* Only objects that consist of a single solid are supported. Hence, [compounds](/Glossary#Compound "Glossary") like [Part container](/Std_Part "Std Part"), [Part Compound](/Part_Compound "Part Compound") or [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") are not supported.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/ru&oldid=1424769>"