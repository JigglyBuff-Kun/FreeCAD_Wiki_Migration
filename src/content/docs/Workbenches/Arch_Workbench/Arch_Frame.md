---
title: Arch Frame
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch Frame                            |
| Menu location                         |
| 3D/BIM → Frame                        |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| F R                                   |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Description

The **Arch Frame** tool is used to build all kinds of frame objects based on a profile and a layout. The profile is extruded along the edges of the layout, which can be any 2D object such as a [sketch](/Sketcher_Workbench "Sketcher Workbench"), or a [Draft object](/Draft_Workbench "Draft Workbench"). It is especially useful to create railings, or frame walls. Frame objects can then easily be turned into [wall](/Arch_Wall "Arch Wall") or [structure](/Arch_Structure "Arch Structure") objects.

![](/images/Arch_Frame_example.jpg)

Frame object created from a [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") of a [Draft Line](/Draft_Line "Draft Line"), using a [Draft Circle](/Draft_Circle "Draft Circle") as profile

## Usage

1. Create a layout object and a profile object, for example with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
2. Select the layout object first, then, with Ctrl pressed, select the profile object.
3. Press the ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame") button, or press F then R keys.

## Options

- The frame object can be placed at a certain distance from the layout object, by setting its Offset property.
- The profile will be copied at the base of each edge of the layout object, then extruded along it. You can control how the profile is placed at the base of each edge with the Align and Rotation properties.

## Properties

An Arch Frame object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

- Data**Base** (`Link`): The layout this frame is based on.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Frame

- Data**Align** (`Bool`): Specifies if the profile must be rotated to have its normal axis aligned with each edge.
- Data**Base Point** (`Integer`): Zero-based index indicating the crossing point of the path on the profile:
  - `0`: The **Base** of the **Placement** of the profile. This point is also used in case of an invalid index.
  - `1`: The midpoint of the 1st edge of the profile.
  - `2`: The endpoint of the 1st edge of the profile.
  - `3`: The midpoint of the 2nd edge of the profile.
  - `4`: The endpoint of the 2nd edge of the profile.
  - ...
  - `n*2-1`: The midpoint of the nth edge of the profile.
  - `n*2`: The endpoint of the nth edge of the profile.
- Data**Edges** (`Enumeration`): The type of edges to consider. The options are:
  - `All edges`
  - `Vertical edges`
  - `Horizontal edges`
  - `Bottom horizontal edges`: Based of the global Z coordinate of the center of mass of the edge.
  - `Top horizontal edges`: Idem.
- Data**Fuse** (`Bool`): If true, overlapping solids are fused.
- Data**Offset** (`VectorDistance`): An optional distance between the layout object and the frame object.
- Data**Profile** (`Link`): The profile this frame is based on.
- Data**Profile Placement** (`Placement`): An optional additional placement to add to the profile before extruding it. Only the **Rotation** of the **Placement** is used. Ignored if Data**Align** is `true`.
- Data**Rotation** (`Angle`): The rotation of the profile around its extrusion axis.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Frame tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Frame = makeFrame(baseobj, profile)

```

- Creates a `Frame` object from the given `baseobj` and `profile`.
  - `baseobj` is any object containing wires, like a [Draft Wire](/Draft_Wire "Draft Wire"), or a [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") with a collection of them.
  - `profile` is an extrudable 2D object containing faces or closed wires.

Example:

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/en&oldid=1539674>"
