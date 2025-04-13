---
title: Arch OBJ/ru
---
## Description

В дополнение к стандартному экспортировщику файлов [OBJ](http://en.wikipedia.org/wiki/Wavefront_.obj_file) FreeCAD, [модуль Arch](/Arch_Workbench/ru "Arch Workbench/ru") содержит альтернативный экспортёр, который экспортирует сопланарные поверхности как полные поверхности OBJ, вместо триангуляции объектов [Shape](/Part_Workbench/ru "Part Workbench/ru"), как делает стандартный экспортёр.

## Exporting without GUI

Exporting without the graphical interface is possible from the command line, using the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") exporter only.

In this example, a STEP file is imported, the colors of the [Shape](/Shape "Shape") are saved, then a mesh is created from it, the colors of the original object are re-applied to the faces of the new mesh, which is then exported to OBJ format. Since this is done with the Mesh Workbench, the result is a triangulated mesh.

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

## More information

* [Convert STEP to Wavefront OBJ with colors of faces](https://forum.freecadweb.org/viewtopic.php?f=8&t=37452)

## Tutorials

## Учебники

* [Импорт из STL или OBJ](/Import_from_STL_or_OBJ/ru "Import from STL or OBJ/ru")
* [Экспорт в STL или OBJ](/Export_to_STL_or_OBJ/ru "Export to STL or OBJ/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_OBJ/ru&oldid=1433111>"