---
title: Część Utwórz kształt z siatki
---
|  |
| --- |
| Część: Utwórz kształt z siatki |
| Lokalizacja w menu |
| Part → Utwórz kształt z siatki ... |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz bryłę](/Part_MakeSolid/pl "Part MakeSolid/pl"), [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl"), [Utwórz obiekt punktów z siatki](/Part_PointsFromMesh/pl "Part PointsFromMesh/pl") |
|  |

## Wprowadzenie

Polecenie ![](/images/Part_ShapeFromMesh.svg) **Utwórz kształt z siatki** tworzy kształty z [obiektów siatki](/Mesh/pl "Mesh/pl"). Obiekty siatki mają ograniczone możliwości edycji w programie FreeCAD, konwersja do [kształtu](/Shape/pl "Shape/pl") pozwoli na ich użycie z wieloma innymi narzędziami logicznymi i modyfikującymi.

Operacja odwrotna to [Siatka z kształtu](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl") ze środowiska pracy ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl").

## Użycie

1. Analiza i naprawa obiektu siatki, jeśli to konieczne, powinna być wykonana przed uruchomieniem tego polecenia. Odpowiednie narzędzia do tego zadania dostępne są w środowisku pracy ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl").
2. Wybierz jeden lub więcej obiektów siatki.
3. Wybierz opcję **Część → ![](/images/Part_ShapeFromMesh.svg) Utwórz kształt z siatki ...** z menu.
4. Otworzy się okno dialogowe **Kształt z siatki**.
5. Opcjonalnie zaznacz pole wyboru **Zszyj kształt** i określ tolerancję:
   * Opcja ta zazwyczaj nie jest potrzebna. Jest ona przeznaczona dla obiektów siatkowych, które nie są wodoszczelne i mają małe odstępy między krawędziami.
   * Jeśli opcja jest zaznaczona, tworzone jest złożenie powłok zamiast złożenia ścian.
   * Operacja szycia może być wymagająca obliczeniowo.
6. Naciśnij przycisk OK.
7. Dla każdego wybranego obiektu siatki zostanie utworzony [kształt](/Shape/pl "Shape/pl") jako oddzielny nowy obiekt.
8. Opcjonalnie użyj funkcji ![](/images/Part_RefineShape.svg) [Udoskonal kształt](/Part_RefineShape/pl "Part RefineShape/pl") na tych obiektach.
9. Opcjonalnie przekształć ten obiekt w bryłę za pomocą polecenia ![](/images/Part_MakeSolid.svg) [Przekształć na bryłę](/Part_MakeSolid/pl "Part MakeSolid/pl").

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Tworzone są obiekty [Część: Cecha](/Part_Feature/pl "Part Feature/pl") bez dodatkowych właściwości.

## Tworzenie skryptów

Tworzenie [kształtu](/Shape/pl "Shape/pl") z [siatki](/Mesh/pl "Mesh/pl") może być wykonane za pomocą metody `makeShapeFromMesh` z [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl"). Musisz określić siatkę źródłową i tolerancję, a następnie przypisać wynik do nowego obiektu [Cechy](/Part_Feature/pl "Part Feature/pl").

Należy zauważyć, że siatka musi zostać ponownie obliczona przed konwersją do Kształtu, w przeciwnym razie nie będzie informacji o topologii, a konwersja nie powiedzie się.

```
import FreeCAD as App
import Part

doc = App.ActiveDocument
mesh = doc.addObject("Mesh::Cube", "Mesh")
mesh.recompute()

shape = Part.Shape()
shape.makeShapeFromMesh(mesh.Mesh.Topology, 0.1)

solid = doc.addObject("Part::Feature", "Solid")
solid.Shape = Part.Solid(shape.removeSplitter())
solid.Placement.Base = App.Vector(15, 0, 0)
doc.recompute()

```

## Odnośniki internetowe

* [Edytuj pliki STL w FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) wideo autorstwa AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/pl&oldid=1468474>"