---
title: Arch 3Views
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above.
:::

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| Arch 3Views                                                                                                  |
| poziția meniului                                                                                             |
| Arch → Utilities → 3 Views from mesh                                                                         |
| Ateliere                                                                                                     |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                               |
| scurtătură                                                                                                   |
| _Nici unul_                                                                                                  |
| Prezentat în versiune                                                                                        |
| -                                                                                                            |
| A se vedea, de asemenea,                                                                                     |
| [Arch SplitMesh](/Arch_SplitMesh "Arch SplitMesh"), [Arch MeshToShape](/Arch_MeshToShape "Arch MeshToShape") |
|                                                                                                              |

## Descriere

**Această comandă nu este în prezent utilizată** . Acesta va servi la generarea de vizualizări plane, bazate pe forme dintr-un obiect [Mesh](/Mesh_Workbench "Mesh Workbench"), care va fi utilizat de instrumentul [Arch Equipment](/Arch_Equipment "Arch Equipment")

## Cum se folosește

1. Selectați un obeict tip Plasă/Mesh
2. Selectași meniul Arch → Utilities → ![](/images/Arch_3Views.png) [3Views](/Arch_3Views "Arch 3Views")

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/ro&oldid=1467139>"
