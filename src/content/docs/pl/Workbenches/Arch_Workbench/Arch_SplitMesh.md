---
title: Architektura Podziel siatkę
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Podziel siatkę |
| Lokalizacja w menu |
| Narzędzia → Podziel siatkę |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zaznacz siatki niebryłowe](/Arch_SelectNonSolidMeshes/pl "Arch SelectNonSolidMeshes/pl"), [Siatka na kształt](/Arch_MeshToShape/pl "Arch MeshToShape/pl") |
|  |

## Opis

Narzędzie **Podziel siatkę** dzieli wybrany obiekt [Siatki](/Mesh_Workbench/pl "Mesh Workbench/pl") na jego oddzielne komponenty.

## Użycie

1. Wybierz obiekt siatki.
2. Naciśnij przycisk w menu **Narzędzia → ![](/images/Arch_SplitMesh.svg) Podziel siatkę**.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Podziel siatkę** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
new_list = splitMesh(obj, mark=True)

```

* Dzieli podany obiekt siatki (`obj`) na oddzielne komponenty.
* Jeśli `mark` ma wartość `True` komponenty [non-manifold](https://en.wikipedia.org/wiki/Manifold) zostaną pomalowane na czerwono.
* `new_list` jest listą wszystkich pojedynczych komponentów tworzących siatkę.

Przykład:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/pl&oldid=1498912>"