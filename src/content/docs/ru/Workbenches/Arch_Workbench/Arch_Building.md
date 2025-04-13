---
title: Arch Здание
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Здание |
| Расположение в меню |
| Arch → Здание |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| B U |
| Представлено в версии |
| - |
| См. также |
| [Строительная деталь](/Arch_BuildingPart/ru "Arch BuildingPart/ru"), [Местность](/Arch_Site/ru "Arch Site/ru") |
|  |

## Описание

Arch Building - это особый тип объекта группы FreeCAD, который особенно подходит для представления целого здания. Они в основном используются для организации вашей модели с помощью объектов  [floor](/Arch_Floor "Arch Floor").

## Применение

1. Optionally, select one or more objects to be included in your new building.
2. Press the ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building") button, or press the B then U keys.

## Опции

* Starting from FreeCAD version 0.18, the Building object is actually a [BuildingPart](/Arch_BuildingPart "Arch BuildingPart") with its Данные**IFC Type** property set to "Building". You can convert any BuildingPart to a Building simply by changing its IFC Type.
* After creating a building, you can add more objects to it by drag and dropping them in the Tree View or by using the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.
* You can remove objects from a building by drag and dropping them out of it the Tree View or by using the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

## Свойства

* Данные**Building Type**: The type of this building, to choose from a list

## Scripting

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Building tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

* Creates a `Building` object from `objectslist`, which is a list of objects, or `baseobj`, which is a `Shape`.

Пример:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/ru&oldid=1432804>"