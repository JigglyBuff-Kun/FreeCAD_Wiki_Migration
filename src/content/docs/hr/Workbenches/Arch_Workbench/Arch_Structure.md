---
title: Arch Structure/hr
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Structure |
| Lokacija izbornika |
| Arch → Structure |
| Radni stolovi |
| [Arch](/Arch_Workbench "Arch Workbench") |
| Zadani prečac |
| S T |
| Bemutatták verzióban |
| - |
| Vidi također |
| [Arch Wall](/Arch_Wall "Arch Wall"), [Arch Rebar](/Arch_Rebar "Arch Rebar") |
|  |

## Description

The [Arch Structure](/Arch_Structure "Arch Structure") tool allows you to build structural elements such as columns or beams, by specifying their width, length and height, or by basing them on a 2D profile (face, wire or sketch).

If no profile is given, a set of presets are available to quickly build a structural element from a predefined standard profile.

![](/images/Arch_Structure_example.jpg)

Column based on a 2D base profile; a column and a beam defined by their height, length and width, without a base profile; a metallic structure based on a 2D face

## Usage

1. Select a 2D shape (Draft object, face or sketch) (optional).
2. Select the **Utils → Structure tools → ![](/images/Arch_Structure.svg) Structure** option from the menu.
3. Adjust the desired properties.

## Options

* When no base 2D object is selected, the structure tool has 2 drawing modes: Column and beam:
  + In column mode, you are asked to pick one point on screen or by entering coordinates. The new structural object will be placed at that point.
  + In beam mode, you are asked to pick two points on screen or by entering coordinates. The new structural object will span between these two points.
* The height, width and length of a structure can be adjusted after creation
* Press Esc or the Cancel button to abort the current command.
* Double-clicking on the structure in the tree view after it is created allows you to enter edit mode and access and modify its additions and subtractions
* In edit mode, it is also possible to add [axes systems](/Arch_Axis "Arch Axis") to the structural element. When adding one axes system, the structural element will be copied once on each axis of the system. When adding two axes systems, the structural element will be copied once on each intersection of the two systems.

## Properties

An Arch Structure object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Podaci

* Podaci**Tool**: an optional extrusion path, which can be any type of wire. If this property is empty, the extrusion will be straight, and happen in the direction given by the Normal property
* Podaci**Normal**: specifies the direction in which the base face of this structure will be extruded. If this property is kept to (0,0,0), the direction will be automatically set to the normal direction of the base face.
* Podaci**Face Maker**: specifies the type of face generation algorithm to use to build the profile. The options are:
  + `None`
  + `Simple`: makes faces from all closed wires, ignoring overlaps.
  + `Cheese`: makes faces with holes, but no faces within holes.
  + `Bullseye`: makes faces with holes, including islands within holes.
* Podaci**Length**: specifies the length of the structure. This is only used if the structure is not based on a profile.
* Podaci**Width**: specifies the width of the structure. This is only used if the structure is not based on a profile.
* Podaci**Height**: specifies the height of the structure, or the extrusion length when based on a profile. If no height is given, and the structure is inside an [Arch Floor](/Arch_Floor "Arch Floor") object with its height defined, the structure will automatically take the value of the floor height.
* Podaci**Nodes Offset**: specifies an optional offset between the centerline and the nodes line.

### Pregled

* Pregled**Nodes Type**: The type of structural nodes of this object, linear or area.
* Pregled**Show Nodes**: Shows or hides the structural nodes.

## Presets

The Structure tool also features a series of presets that allow to quickly build standard metallic profiles or precast concrete elements.

![](/images/Arch_presets_example.jpg)

Some presets for steel structures

The presets are obtained by choosing a **Category** from the structure options panel. Available categories are **Precast concrete** or any of the industry-standard metallic profiles such as **HEA**, **HEB** or **INP**. For each of these categories, a number of presets are available. Once a preset is chosen, its individual parameters such as **Length**, **Width** or **Height** can be adjusted. However, for metallic profiles, the profile size is set by the preset and cannot be changed.

The **Switch L/H** button can be used to switch Length and Height values, and therefore building a horizontal beam rather than a vertical column.

![](/images/Arch_precast_example.jpg)

Some presets for precast concrete structures

## Structural nodes

Structural objects also have the ability to display structural nodes. Structural nodes are a sequence of 3D points stored in a "Nodes" property. By switching the "Show Nodes" view property on/off, one can see the structural nodes of a structural element:

![](/images/Arch_structural_nodes.jpg)

Structural nodes made visible for a set of structures

* Nodes are calculated and updated automatically, as long as you don't modify them manually. If you did, they won't be updated if the shape of the structural object changes, unless you use the "Reset nodes" tool below.
* Arch structures can have not only linear nodes, but also planar nodes. For this, 1- There must be at least 3 vectors in the "Nodes" property of the object, 2- the "NodesType" property of their ViewObject must be set to "Area".
* When the nodes calculation is automatic (that is, if you never touched them manually), when setting the "Role" property of a structure to "Slab", it will automatically become a planar node (there will be more than 3 vectors and the NodesType will be set to "Area").
* When editing a structure object (double-click), a couple of node tools are available in the task view:
  + Reset the nodes to automatic calculation, in case you modified them manually
  + Edit the nodes graphically, works the same way as [Draft Edit](/Draft_Edit "Draft Edit")
  + Extend the nodes of the edited object until it touches the node of another object
  + Make the node of this object and another one coincident
  + Toggle the display of all nodes of all structural objects of the document on/off

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Structure tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
structure = makeStructure(baseobj=None, height=None)
structure = makeStructure(baseobj=None, length=None, width=None, height=None, name="Structure")

```

* Creates a `structure` object from the given `baseobj`, which is a closed profile, and the given extrusion `height`.
  + If no `baseobj` is given, you can provide the numerical values for the `length`, `width`, and `height` to create a block structure.
  + The `baseobj` can also be any existing solid object.

Example:

```
import FreeCAD, Draft, Arch

rect = Draft.make_rectangle(200, 300)
structure1 = Arch.makeStructure(rect, height=2000)
FreeCAD.ActiveDocument.recompute()

structure2 = Arch.makeStructure(None, length=500, width=1000, height=3000)
Draft.move(structure2, FreeCAD.Vector(2000, 0, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Structure/hr&oldid=1539765>"