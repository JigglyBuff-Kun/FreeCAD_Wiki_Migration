---
title: Arch Dividi Mesh
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch SplitMesh                                                                                                                                            |
| Menu location                                                                                                                                             |
| Arch → Utilità → Dividi Mesh                                                                                                                              |
| Workbenches                                                                                                                                               |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                                                            |
| Default shortcut                                                                                                                                          |
| _None_                                                                                                                                                    |
| Introduced in version                                                                                                                                     |
| -                                                                                                                                                         |
| See also                                                                                                                                                  |
| [Seleziona mesh non solidi](/Arch_SelectNonSolidMeshes/it "Arch SelectNonSolidMeshes/it"), [Da mesh a solido](/Arch_MeshToShape/it "Arch MeshToShape/it") |
|                                                                                                                                                           |

## Descrizione

Questo strumento suddivide un oggetto [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") selezionato nei suoi singoli componenti

## Utilizzo

1. Selezionare un oggetto mesh.
2. Premere il pulsante ![](/images/Arch_SplitMesh.svg) Dividi Mesh in **Arch → Utilità → Dividi Mesh**.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Dividi Mesh può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
new_list = splitMesh(obj, mark=True)

```

- Divide l'oggetto mesh dato (`obj`) in componenti separati.
- Se `mark` è `True` [non-manifold](https://en.wikipedia.org/wiki/Manifold) i componenti diventano rossi.
- `new_list` è un elenco di tutti i singoli componenti che creano la mesh.

Esempio:

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"

new_list = Arch.splitMesh(mesh_obj)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/it&oldid=1498623>"
