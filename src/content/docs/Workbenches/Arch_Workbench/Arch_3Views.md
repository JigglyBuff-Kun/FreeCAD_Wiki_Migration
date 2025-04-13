---
title: Arch 3Views
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above.
:::

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| Arch 3Views                                                                                                  |
| Menu location                                                                                                |
| Arch → Utilities → 3 Views from mesh                                                                         |
| Workbenches                                                                                                  |
| [Arch](/Arch_Workbench "Arch Workbench")                                                                     |
| Default shortcut                                                                                             |
| _None_                                                                                                       |
| Introduced in version                                                                                        |
| -                                                                                                            |
| See also                                                                                                     |
| [Arch SplitMesh](/Arch_SplitMesh "Arch SplitMesh"), [Arch MeshToShape](/Arch_MeshToShape "Arch MeshToShape") |
|                                                                                                              |

## Description

_This command is currently not in use._ It will serve to generate flat, shape-based views from a [Mesh](/Mesh_Workbench "Mesh Workbench") based object, to be used by the ![](/src/assets/images/Arch_Equipment.svg) [Arch Equipment](/Arch_Equipment "Arch Equipment") tool.

## Usage

1. Select a Mesh object.
2. Select the ![](/src/assets/images/Arch_3Views.svg) button, or Arch → Utilities → ![](/src/assets/images/Arch_3Views.svg) [3Views](/Arch_3Views "Arch 3Views") from the top menu.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
shape = createMeshView(obj, direction=FreeCAD.Vector(0, 0, -1), outeronly=False, largestonly=False)

```

- Creates a flat `shape` that is the projection of the given mesh object (`obj`) in the given `direction`.
- If `outeronly` is `True` only the outer contour is taken into consideration, discarding the inner holes.
- If `largestonly` is `True` only the largest segment of the given mesh will be used.

Use `Part.show()` to display the resulting flat shape.

Example:

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"
FreeCAD.ActiveDocument.recompute()

XAxis = FreeCAD.Vector(1, 0, 0)
YAxis = FreeCAD.Vector(0, 1, 0)
ZAxis = FreeCAD.Vector(0, 0, -1)

s1 = Arch.createMeshView(mesh_obj, ZAxis)
s2 = Arch.createMeshView(mesh_obj, XAxis)
s3 = Arch.createMeshView(mesh_obj, YAxis)

Part.show(s1)
Part.show(s2)
Part.show(s3)

Wall.ViewObject.Visibility = False
mesh_obj.ViewObject.Visibility = False

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/en&oldid=1467140>"
