---
title: Converti mesh FEM in mesh
---
|  |
| --- |
| Converti mesh FEM in mesh |
| Posizione nel menu |
| Mesh → Converti mesh FEM in mesh |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Tutorial di FEM](/FEM_tutorial/it "FEM tutorial/it") |
|  |

## Descrizione

Questo strumento converte in mesh le superfici degli elementi 3D di una mesh FEM selezionata. Sceglie le facce dell'elemento mesh FEM che sono uniche (non condivise da due elementi) e le usa per creare le facce di una mesh. Facoltativamente consente di creare una mesh deformata dall'azione delle forze definite. Ciò avviene aggiungendo lo spostamento dei risultati FEM ai nodi della maglia.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool also creates a *Mesh2Fem* object which is a triangular FEM mesh generated from the surface mesh.

## Utilizzo

1. Selezionare un oggetto mesh FEM (opzionalmente selezionare anche i risultati FEM)
2. Premere il pulsante ![](/images/FEM_FemMesh2Mesh.png)FEM mesh to mesh

## Scripting

**Note**: The parameter *scale* was [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"). For older versions of FreeCAD omit it from your code.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_FemMesh2Mesh/it&oldid=1476345>"