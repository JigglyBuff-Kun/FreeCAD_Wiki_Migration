---
title: Arch SíťDoTvaru
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch MeshToShape |
| Umístění Menu |
| Arch → Utilities → Mesh to Shape |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Arch RemoveShape](/Arch_RemoveShape/cs "Arch RemoveShape/cs") |
|  |

## Popis

Tento nástroj konvertuje vybraný objekt [Síť](/Mesh_Workbench/cs "Mesh Workbench/cs") do objektu [Tvar](/Part_Workbench/cs "Part Workbench/cs"). Připomínáme, že tento nástroj je optimalizován pro objekty s plochými stranami (ne zakřivené). Obdobný nástroj z [Pracovní plochy Díl](/Part_Workbench/cs "Part Workbench/cs") může být vhodnější pro objekty obsahující zakřivené povrchy.

This tool is optimized for objects with flat faces (no curves). The corresponding tool ![](/images/Part_ShapeFromMesh.svg) [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") might be more suited for objects that contain curved surfaces.

## Použití

1. Vyberte objekt sítě
2. Stiskněte tlačítko ![](/images/Arch_MeshToShape.png) **Síť do tvaru** pro vstup do Architektura → Menu Utility

## Properties

## Limitations

## Scripting

## Skriptování

Tento nástroj může být použit v [makrech](/Macros/cs "Macros/cs") a z konzoly Pythonu použitím následující funkce:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

zkonvertuje síť do tvaru, přitom sjednocuje koplanární (ležící v jedné rovině) plošky

Example:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/cs&oldid=1435470>"