---
title: Montagem
---
## Introdução

In FreeCAD the word "[Assembly](/Assembly "Assembly")" is normally used to refer to a [3D model](/Model "Model") that is composed of several distinguishable parts, that are put together in some way to create a functional object, just like real life products are made.

For example, a bolt, a washer and a nut are three separate bodies that when put together comprise an assembly.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

Left: three individual contiguous solids, each of them modelled by a [PartDesign Body](/PartDesign_Body "PartDesign Body"). Right: the individual Bodies put together inside a [Std Part](/Std_Part "Std Part") to create an assembly.

## Utilização

### Manual assembly

In general terms, you don't need special tools to create assemblies, you just need to have many different [bodies](/Body "Body") arranged in some way.

To position the bodies where you want them, you can

* use the [Std TransformManip](/Std_TransformManip "Std TransformManip") tool,
* use the ![](/images/Std_Placement.svg) [Std Placement](/Std_Placement "Std Placement") dialog, or
* modify the [placement](/Placement "Placement") property directly in the [property editor](/Property_editor "Property editor").

You may use one of the pseudo-assembly [external workbenches](/External_workbenches "External workbenches"), like Lattice2, Manipulator, Part-o-magic, or WorkFeature, to help you find intersections, measure distances, and distribute your objects in the desired way.

In general, the ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") object was designed to serve as the basic building block to create assemblies. This object is used to group several [bodies](/Body "Body") and move them together as a unit, that is, as a sub-assembly. Then this sub-assembly can be placed next to, or used inside of other sub-assemblies in order to create the final assembly.

### Constrained assembly

You can also use the built-in [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") or its add-on counterparts, like ![](/images/A2p_workbench.svg) [A2plus](/A2plus_Workbench "A2plus Workbench"), ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench "Assembly3 Workbench"), or ![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench "Assembly4 Workbench"). Please note that [Assembly2](/Assembly2_Workbench "Assembly2 Workbench") is unmaintained, so it is not recommended for new models.

The assembly workbenches use constraints and expressions to create relationships between the objects in your model, in order to mathematically tie the objects in place, for example, "this face should stick to this other face", "this cylinder should be concentric to that circle", "this point should follow this edge", etc.

This is an advanced usage of the software that is normally used in complex mechanical systems. If your [model](/Model "Model") is not very complex, then using an assembly workbench may not be necessary.

## Notas

* Since FreeCAD 1.0, there is an official [Assembly workbench](/Assembly_Workbench "Assembly Workbench") included by default with the system.

* Please note that assembly workbenches are generally incompatible with each other. If you create an assembly with one of these workbenches, you should stick to it, and not use another assembly workbench to work with the same document.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly/pt-br&oldid=1479211>"