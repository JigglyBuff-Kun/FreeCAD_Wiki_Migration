---
title: Arch 3Views/es
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above.
:::

|  |
| --- |
| Arch 3Views |
| Ubicación en el Menú |
| Arch → Utilities → 3 Views from mesh |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

**Este comando no está actualmente en uso**. Servirá para generar vistas planas y basadas en la forma desde un objeto basado en  [Mesh](/Mesh_Workbench "Mesh Workbench"), para ser utilizado por la herramienta [Arch Equipment](/Arch_Equipment "Arch Equipment").

## Utilización

1. Select a Mesh object.
2. Select the ![](/images/Arch_3Views.svg) button, or Arch → Utilities → ![](/images/Arch_3Views.svg) [3Views](/Arch_3Views "Arch 3Views") from the top menu.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
shape = createMeshView(obj, direction=FreeCAD.Vector(0, 0, -1), outeronly=False, largestonly=False)

```

* Creates a flat `shape` that is the projection of the given mesh object (`obj`) in the given `direction`.
* If `outeronly` is `True` only the outer contour is taken into consideration, discarding the inner holes.
* If `largestonly` is `True` only the largest segment of the given mesh will be used.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/es&oldid=1467137>"