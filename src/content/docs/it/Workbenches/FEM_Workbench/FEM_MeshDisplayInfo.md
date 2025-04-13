---
title: FEM Informazioni di stampa
---

|                                                             |
| ----------------------------------------------------------- |
| FEM MeshPrintInfo                                           |
| Posizione nel menu                                          |
| Menu contestuale dell'oggetto mesh → Informazioni di stampa |
| Ambiente                                                    |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")                 |
| Avvio veloce                                                |
| _Nessuno_                                                   |
| Introdotto nella versione                                   |
| -                                                           |
| Vedere anche                                                |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it")          |
|                                                             |

## Descrizione

Da fare

## Utilizzo

1. Create finite element mesh first (using one of the available techniques).
2. Select the mesh in the [Tree view](/Tree_view "Tree view").
3. Right click on it and choose the ![](/images/FEM_MeshDisplayInfo.svg) [Display FEM mesh info](/FEM_MeshDisplayInfo "FEM MeshDisplayInfo") option.
4. To close the FEM Mesh Info window, click OK.

## Scripting

```
# setup some model with a fem mesh to print information from
from femexamples.ccx_cantilever_faceload import setup
setup()
# print the fem mesh information
print(App.ActiveDocument.Mesh.FemMesh)

```

will output the following result:

```
>>> print(App.ActiveDocument.Mesh.FemMesh)
========================== Dump contents of mesh ==========================

1) Total number of nodes:      	228
2) Total number of edges:      	0
3) Total number of faces:      	0
4) Total number of polygons:   	0
5) Total number of volumes:    	79
6) Total number of polyhedrons:	0

7) Total number of linear edges:	0
8) Total number of linear faces:	0
9) Total number of linear volumes:	0

10) Total number of quadratic edges:	0
11) Total number of quadratic faces:	0
12) Total number of quadratic volumes:	79
12.1) Number of quadratic hexahedrons: 	0
12.2) Number of quadratic tetrahedrons:	79
12.3) Number of quadratic prisms:      	0
12.4) Number of quadratic pyramids:    	0

===========================================================================

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshDisplayInfo/it&oldid=1478004>"
