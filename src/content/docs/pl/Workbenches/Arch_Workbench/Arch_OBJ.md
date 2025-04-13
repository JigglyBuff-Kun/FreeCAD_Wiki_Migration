---
title: Arch OBJ
---

## Opis

Dodatkowo oprócz standardowego eksportera FreeCAD [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file), środowisko pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl") posiada alternatywny eksporter, który eksportuje koplanarne powierzchnie jako całe powierzchnie OBJ, zamiast triangulacji obiektów opartych na [kształtach](/Shape/pl "Shape/pl"), jak to robi standardowy eksporter.

## Eksportowanie bez GUI

Eksportowanie bez interfejsu graficznego jest możliwe z wiersza poleceń, tylko przy użyciu eksportera Środowiska pracy [Mesh](/Mesh_Workbench/pl "Mesh Workbench/pl").

W tym przykładzie importowany jest plik STEP, zapisywane są kolory elementu [Kształt](/Shape "Shape"). Następnie tworzona jest z niego siatka, a kolory oryginalnego obiektu są ponownie nakładane na powierzchnie nowej siatki, który jest następnie eksportowany do formatu OBJ. Ponieważ jest to robione przy użyciuŚrodowiska pracy Mesh, wynikiem jest siatka trójkątów.

```
import Mesh
import MeshPart
import Import

data = Import.open("example.stp")
shape = data[0][0].Shape
shape_colors = data[0][1]

mesh = MeshPart.meshFromShape(Shape=shape, LinearDeflection=0.1, Segments=True)

face_colors = [(0, 0, 0)] * mesh.CountFacets

for i in range(mesh.countSegments()):
    color = shape_colors[i]
    segm = mesh.getSegment(i)
    for j in segm:
        face_colors[j] = color

mesh.write(Filename="new_example.obj", Material=face_colors, Format="obj")

```

## Informacje dodatkowe

- [Konwersja STEP do Wavefront OBJ z kolorami powierzchni czołowych](https://forum.freecadweb.org/viewtopic.php?f=8&t=37452)

## Poradniki

- [Importowanie plików STL lub OBJ](/Import_from_STL_or_OBJ/pl "Import from STL or OBJ/pl")
- [Eksport do formatu STL lub OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_OBJ/pl&oldid=1474084>"
