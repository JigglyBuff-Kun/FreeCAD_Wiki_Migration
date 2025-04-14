---
title: Arch Equipment
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch Equipment                        |
| Menu location                         |
| 3D/BIM → Equipment                    |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| E Q                                   |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The **Arch Equipment** tool offers you a simple and convenient way to insert non-structural, standalone elements such as pieces of furniture, hydro-sanitary equipments or electrical appliances to your projects. Equipments are based on [Part shapes](/Part_Workbench "Part Workbench"), which allow them to benefit from the solidity and possibilities of BRep geometry, and generate nice views when rendered to plan and section views.

![](/images/Arch_equipment_example.jpg)

Furniture objects enclosed in an [Arch Equipment](/Arch_Equipment "Arch Equipment") object. The flat projections can be obtained by the [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") tool

As of version 0.17, equipment objects also have a Data**HiRes** property where a [Mesh](/Mesh_Workbench "Mesh Workbench") object can be attached. Equipment objects can then be made to display that mesh in the 3D view instead of their shape, which allows to use any high-resolution mesh objects such as detailed pieces of furniture commonly found on websites.

![](/images/Arch_equipment_mesh.jpg)

Furniture objects enclosed in an [Arch Equipment](/Arch_Equipment "Arch Equipment") object, with a high resolution mesh attached

When using the Arch OBJ exporter, all equipment objects that are in mesh display mode will be exported as their mesh instead of their shape.

## Usage

1. Select a [Part](/Part_Workbench "Part Workbench") shape, and optionally a [Mesh](/Mesh_Workbench "Mesh Workbench") object.
2. Press the ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment") button, or press E then Q keys.

## Properties

An Arch Equipment object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

- Data**Model**: A description of the model of this equipment.
- Data**Url**: An URL of the product page where more information about this equipment can be found.
- Data**Mesh**: A [Mesh](/Mesh_Workbench "Mesh Workbench") representation to use for this equipment. When set, the **Mesh** display mode becomes available.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Equipment tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

- Creates an `Equipment` object from the given `baseobj`, which can be a `Part` or a `Mesh`.
- If a `placement` is given, it is used.
- It returns `None` if the operation fails.

Example:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/en&oldid=1539660>"
