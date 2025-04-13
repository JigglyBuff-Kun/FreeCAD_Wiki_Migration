---
title: Arch File OBJ
---

## Descrizione

Oltre all'esportatore [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file) standard di FreeCAD, l'[Ambiente BIM](/BIM_Workbench/it "BIM Workbench/it") dispone di un esportatore alternativo che esporta le facce complanari come facce OBJ intere, invece di triangolazioni eseguite su oggetti costruiti su [forme](/Shape/it "Shape/it") di base, come fa l'esportatore standard.

## Esportazione senza GUI

L'esportazione senza l'interfaccia grafica è possibile dalla riga di comando, solo utilizzando l'esportatore di [Mesh](/Mesh_Workbench/it "Mesh Workbench/it").

In questo esempio, viene importato un file STEP, i colori della [Shape](/Shape/it "Shape/it") vengono salvati, quindi da esso viene creata una mesh, i colori dell'oggetto originale vengono riapplicati alle facce della nuova mesh, che viene poi esportato in formato OBJ. Poiché questa operazione viene eseguita con Mesh Workbench, il risultato è una mesh triangolata.

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

## Ulteriori informazioni

- [Convert STEP to Wavefront OBJ with colors of faces](https://forum.freecadweb.org/viewtopic.php?f=8&t=37452)

## Tutorial

- [Importare da STL o OBJ](/Import_from_STL_or_OBJ/it "Import from STL or OBJ/it")
- [Esportare in STL o OBJ](/Export_to_STL_or_OBJ/it "Export to STL or OBJ/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_OBJ/it&oldid=1437246>"
