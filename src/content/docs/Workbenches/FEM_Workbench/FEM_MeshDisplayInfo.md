---
title: FEM MeshDisplayInfo
---

|                                                     |
| --------------------------------------------------- |
| FEM MeshDisplayInfo                                 |
| Menu location                                       |
| Context menu on mesh object → Display FEM mesh info |
| Workbenches                                         |
| [FEM](/FEM_Workbench "FEM Workbench")               |
| Default shortcut                                    |
| _None_                                              |
| Introduced in version                               |
| -                                                   |
| See also                                            |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")        |
|                                                     |

## Description

Displays basic statistics of existing mesh - number of nodes and elements of each type. Particularly, total number of the following features is shown:

- Nodes,
- Edges,
- Faces,
- Polygons,
- Volumes,
- Polyhedrons,

- Linear edges,
- Linear faces,
- Linear volumes,

- Quadratic edges,
- Quadratic faces,
- Quadratic triangles,
- Quadratic quadrangles,
- Quadratic volumes,
- Quadratic hexahedrons,
- Quadratic tetrahedrons,
- Quadratic prisms,
- Quadratic pyramids.

## Usage

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshDisplayInfo/en&oldid=1478001>"
