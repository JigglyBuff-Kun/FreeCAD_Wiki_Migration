---
title: Arch CutPlane
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch CutPlane                         |
| Menu location                         |
| Modify → Cut with plane               |
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

The **Arch CutPlane** tool cuts a solid Arch object like an [Arch Wall](/Arch_Wall "Arch Wall") or [Arch Structure](/Arch_Structure "Arch Structure") with a planar face.

![](/src/assets/images/Arch_CutPlane_example.jpg)

Left: Before applying the CutPlane tool. Middle: resulting wall after the cut is done. Right: yet another optional result

## Usage

1. If the cutting plane is to be derived from a straight edge ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) optionally align the [working plane](/Draft_SelectPlane "Draft SelectPlane"):
   - The selected edge cannot be parallel to the normal of the working plane.
   - The generated cutting face will be perpendicular to the working plane.
2. Select the object to be cut.
3. Do one of the following:
   - Select an object with a single planar face. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
   - Select a planar face in the [3D view](/3D_view "3D view").
   - Select an object with a single straight edge. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
   - Select a straight edge in the [3D view](/3D_view "3D view"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
4. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Arch_CutPlane.svg) [Cut with plane](/Arch_CutPlane "Arch CutPlane") button.
   - Select the **Modify → ![](/src/assets/images/Arch_CutPlane.svg) Cut with plane** option from the menu.
5. Choose **Behind** or **Front** to indicate on which side of the cutting face material should be removed.
6. Press the OK button.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The CutPlane tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
cutObj = cutComponentwithPlane(archObject, cutPlane, sideFace)

```

- Creates a `cutObj` object from the given `archObject`, which is cut by `cutPlane`, which is the face of another object.
  - `archObject` should be a `SelectionObject` obtained from `FreeCADGui.Selection.SelectionEx()[0]`.
  - `cutPlane` should be a `FaceObject` obtained from `FreeCADGui.Selection.SelectionEx()[0].SubObjects[0]`.
- `sideFace` specifies on which side of the `FaceObject` a volume will be created; this volume will then be used to subtract from the `archObject`. If `sideFace` is `0` it will create a volume in the rear of the face, otherwise it create it in front of the face.

Example:

```
import FreeCAD, FreeCADGui, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select the Wall
main_object = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall2
selection = FreeCADGui.Selection.getSelectionEx()[0]
cut_face = selection.SubObjects[0]

cutObj = Arch.cutComponentwithPlane(main_object, cut_face, 0)
FreeCAD.ActiveDocument.recompute()

Wall3 = Draft.move(Wall, FreeCAD.Vector(-4000, 0, 0), copy=True)
Wall4 = Draft.move(Wall2, FreeCAD.Vector(-4000, 0, 0), copy=True)
FreeCAD.ActiveDocument.recompute()

# Select the Wall3
main_object2 = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall4
selection2 = FreeCADGui.Selection.getSelectionEx()[0]
cut_face2 = selection2.SubObjects[0]

cutObj2 = Arch.cutComponentwithPlane(main_object2, cut_face2, 1)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutPlane/en&oldid=1432925>"
