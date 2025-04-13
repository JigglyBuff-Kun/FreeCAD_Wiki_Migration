---
title: Architektura Trzy widoki
---
:::caution
TO POLECENIE JEST PRZESTARZAŁENie jest dostępne wwersja 1.0 i powyżej.
:::

|  |
| --- |
| Architektura: Trzy widoki |
| Lokalizacja w menu |
| Architektura → Narzędzia → Trzy widoki |
| Środowisko pracy |
| [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Podziel siatkę](/Arch_SplitMesh/pl "Arch SplitMesh/pl"), [Kształt z siatki](/Arch_MeshToShape/pl "Arch MeshToShape/pl") |
|  |

## Opis

*Polecenie to nie jest obecnie używane*. Służy do generowania płaskich, opartych na kształtach widoków z obiektu opartego na [siatce](/Mesh_Workbench/pl "Mesh Workbench/pl"), do wykorzystania przez narzędzie ![](/images/Arch_Equipment.svg) [Wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl").

## Użycie

1. Wybierz obiekt siatki.
2. Wybierz przycisk ![](/images/Arch_3Views.svg) lub **Architektura → Narzędzia → ![](/images/Arch_3Views.svg) Trzy widoki** z menu głównego.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
shape = createMeshView(obj, direction=FreeCAD.Vector(0, 0, -1), outeronly=False, largestonly=False)

```

* Tworzy płaski `shape`, który jest rzutem danego obiektu siatki (`obj`) w danym `direction`.
* Jeśli `outeronly` ma wartość `True`, tylko zewnętrzny kontur jest brany pod uwagę, odrzucając wewnętrzne otwory.
* Jeśli `largestonly` ma wartość `True`, użyty zostanie tylko największy segment danej siatki.

Użyj `Part.show()`, aby wyświetlić wynikowy płaski kształt.

Przykład:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/pl&oldid=1434064>"