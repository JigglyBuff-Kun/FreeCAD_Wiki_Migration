---
title: FEM FemMesh2Mesh
---

|                                                    |
| -------------------------------------------------- |
| FEM FemMesh2Mesh                                   |
| poziția meniului                                   |
| Mesh → FEM mesh to mesh                            |
| Ateliere                                           |
| [FEM](/FEM_Workbench/ro "FEM Workbench/ro")        |
| scurtătură                                         |
| _Nici unul_                                        |
| Prezentat în versiune                              |
| -                                                  |
| A se vedea, de asemenea,                           |
| [FEM tutorial](/FEM_tutorial/ro "FEM tutorial/ro") |
|                                                    |

## Descriere

Acest instrument transformă suprafețele elementelor 3D dintr-o plasă FEM selectată într-o plasă. Alegeți fațetele elementului FEM din plasă care sunt unice (nu sunt împărțite de două elemente) și le folosiți pentru a crea fațetele unei plase. Opțional, permite crearea unei plase deformate de acțiunea forțelor definite. Acest lucru se face prin adăugarea mișcării rezultatelor FEM la nodurile de plasă.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool also creates a _Mesh2Fem_ object which is a triangular FEM mesh generated from the surface mesh.

## Cum se folosește

1. Selectați un obiect FEM mesh (opțional selectați suplimentar rezultatele FEM)
2. Apasă pe butonul ![](/images/FEM_FemMesh2Mesh.png)FEM mesh to mesh

## Scripting

**Note**: The parameter _scale_ was [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"). For older versions of FreeCAD omit it from your code.

The cantilever example in FreeCAD version 1.0:

```
from os.path import join
import FreeCAD as App
import Mesh
from femmesh import femmesh2mesh

path = join(App.getResourceDir(), "examples", "FEMExample.FCStd")
doc = App.openDocument(path)
fem_mesh = doc.FEMMeshGmsh.FemMesh
result = doc.CCX_Results
scale = 10  # displacement scale factor
out_mesh = femmesh2mesh.femmesh_2_mesh(fem_mesh, result, scale)
Mesh.show(Mesh.Mesh(out_mesh))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_FemMesh2Mesh/ro&oldid=1476349>"
