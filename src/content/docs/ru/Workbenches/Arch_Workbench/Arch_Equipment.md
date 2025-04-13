---
title: Arch Оборудование (и предметы интерьера)
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Оборудование |
| Расположение в меню |
| Arch → Оборудование |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| E Q |
| Представлено в версии |
| - |
| См. также |
| [3 вида на основе полигональной сетки](/Arch_3Views/ru "Arch 3Views/ru") |
|  |

## Описание

Инструмент "Оборудование" предлагает вам простой и удобный способ добавления в интерьер ваших проектов неструктурных, автономных элементов, таких как: предметы мебели, бытовая техника, сантехническое оборудование или электроприборы. Оборудование основано на [деталях верстака Part](/Part_Workbench/ru "Part Workbench/ru"), что позволяет извлечь выгоду из солидных возможностей геометрии BRep и создавать красивые виды при визуализации в виде плана и сечения.

![](/images/Arch_equipment_example.jpg)

Furniture objects enclosed in an [Arch Equipment](/Arch_Equipment "Arch Equipment") object. The flat projections can be obtained by the [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") tool

Начиная с версии 0.17, объекты оборудования также имеют свойство Данные**HiRes (высокая детализация)**, к которому может быть присоединен [Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru") объект. Объекты оборудования затем могут быть созданы для отображения этой высокоспециализированной модели в 3D-представлении вместо их формы, что позволяет использовать любые объекты с высокой детализацией, такие как реалистичные предметы мебели, обычно встречающиеся на веб-сайтах.

![](/images/Arch_equipment_mesh.jpg)

Furniture objects enclosed in an [Arch Equipment](/Arch_Equipment "Arch Equipment") object, with a high resolution mesh attached

При использовании экспортера Arch OBJ все объекты оборудования, находящиеся в режиме отображения сетки, будут экспортироваться как mesh сетка, а не как форма.

## Применение

1. Select a [Part](/Part_Workbench "Part Workbench") shape, and optionally a [Mesh](/Mesh_Workbench "Mesh Workbench") object.
2. Press the ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment") button, or press E then Q keys.

## Свойства

* Оборудование обладает такими же общими свойствами и моделью поведения, как и все остальные [компоненты верстака Arch](/Arch_Component/ru "Arch Component/ru")

* Данные**Model**: A description of the model of this equipment.
* Данные**Url**: An URL of the product page where more information about this equipment can be found.
* Данные**Mesh**: A [Mesh](/Mesh_Workbench "Mesh Workbench") representation to use for this equipment. When set, the **Mesh** display mode becomes available.

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Equipment tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

* Creates an `Equipment` object from the given `baseobj`, which can be a `Part` or a `Mesh`.
* If a `placement` is given, it is used.
* It returns `None` if the operation fails.

Пример:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/ru&oldid=1539662>"