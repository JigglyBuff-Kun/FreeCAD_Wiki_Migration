---
title: BIM Layers
---

|                                       |
| ------------------------------------- |
| BIM Layers                            |
| Menu location                         |
| Manage → Manage layers...             |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The **Layers Manager** allows you to manage [layers](/Draft_Layer "Draft Layer"). Layers are a special kind of group that controls the visual properties of objects placed inside of it. By changing the properties of the Layer, such as line width, line color, shape color and transparency, the changes are propagated to its child objects. Layers don't interfere with any other FreeCAD structure such as [groups](/Std_Group "Std Group") or [Building parts](/Arch_BuildingPart "Arch BuildingPart"), so any object can be at the same time part of a layer and part of a group.

![](/images/BIM_layers_screenshot.png)

Layers manager

Layers are imported and exported from/to [IFC](/Arch_IFC "Arch IFC") and [DXF/DWG](/Draft_DXF "Draft DXF").

The layers manager allow you to manage your layers, add or remove layers, or change their visual properties. To add objects to a layer, simply drag them into the layer in the [tree view](/Tree_view "Tree view"). To remove them, drag them from the layer and drop them into the document root.

## Native IFC

This tool is the exact same as the [Draft LayerManager](/Draft_LayerManager "Draft LayerManager") tool, and creates the same layer object. There is only one difference: It has support for [[Native\_IFC[Native IFC]] objects:

- An IFC icon will indicate if a layer is part of an IFC project or not
- An **Assign IFC** button allows to move a layer to an IFC project and with that turn it into an IFC layer

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Layers/en&oldid=1545408>"
