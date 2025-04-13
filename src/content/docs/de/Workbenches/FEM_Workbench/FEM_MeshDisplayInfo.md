---
title: FEM NetzinformationenAnzeigen
---
|  |
| --- |
| FEM NetzinformationenAnzeigen |
| Menüeintrag |
| Kontextmenü des Mesh-Objekts → Informationen zum FEM-Netz anzeigen |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Displays basic statistics of existing mesh - number of nodes and elements of each type. Particularly, total number of the following features is shown:

* Nodes,
* Edges,
* Faces,
* Polygons,
* Volumes,
* Polyhedrons,

* Linear edges,
* Linear faces,
* Linear volumes,

* Quadratic edges,
* Quadratic faces,
* Quadratic triangles,
* Quadratic quadrangles,
* Quadratic volumes,
* Quadratic hexahedrons,
* Quadratic tetrahedrons,
* Quadratic prisms,
* Quadratic pyramids.

## Anwendung

1. Zuerst ein Finite-Elemente-Netz erstellen (mit einer der vorhandenen Möglichkeiten).
2. Das Netz in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
3. Mit der rechten Maustaste darauf klicken und ![](/images/FEM_MeshDisplayInfo.svg) Informationen zum FEM-Netz anzeigen im Kontextmenü auswählen.
4. Zum Schließen des FEM-Mesh-Info-Fensters, klickt man OK.

## Skripten

```
# setup some model with a fem mesh to print information from
from femexamples.ccx_cantilever_faceload import setup
setup()
# print the fem mesh information
print(App.ActiveDocument.Mesh.FemMesh)

```

gibt folgendes Ergebnis aus:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshDisplayInfo/de&oldid=1479148>"