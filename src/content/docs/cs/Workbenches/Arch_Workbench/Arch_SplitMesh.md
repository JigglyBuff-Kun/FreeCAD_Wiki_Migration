---
title: Architektura Rozděl síť
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Rozděl síť |
| Umístění Menu |
| Arch → Utilities → Split Mesh |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Arch SelectNonSolidMeshes](/Arch_SelectNonSolidMeshes/cs "Arch SelectNonSolidMeshes/cs") |
|  |

## Popis

Tento nástroj rozdělí vybrané [Síťové](/Mesh_Workbench "Mesh Workbench") objekty do jejich vlastních oddělených komponent.

## Použití

1. Vyberte objekt sítě
2. Stiskněte tlačítko ![](/images/Arch_SplitMesh.png) **Rozděl síť** pro vstup do Architektura -> Menu Utility

## Scripting

## Skriptování

Nástroj Rozděl síť může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
new_list = splitMesh(obj, mark=True)

```

rozdělí vybraný síťový objekt do oddělených komponent.

Example:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/cs&oldid=1498612>"