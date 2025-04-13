---
title: Architektura OBJ
---
## Description

Navíc ke standardu exportu z FreeCADu [OBJ](http://en.wikipedia.org/wiki/Wavefront_.obj_file), [ModulArchitektura](/Arch_Workbench "Arch Workbench") má i alternativní exportní systém, který exportuje koplanární plochy jako celé OBJ plochy, místo triangulačních objektů založených na objektu [Tvar](/Part_Workbench "Part Workbench") jako to dělají jiné standardní exportní systémy.

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

* [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")
* [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_OBJ/cs&oldid=1433094>"