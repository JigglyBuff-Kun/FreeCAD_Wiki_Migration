---
title: FEM FemMesh2Mesh
---

|                                              |
| -------------------------------------------- |
| FEM FemMesh2Mesh                             |
| Menu location                                |
| Mesh → FEM mesh to mesh                      |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

This tool converts surfaces of 3D elements or whole 2D elements of a selected FEM mesh to [surface mesh](/Mesh_MeshObject "Mesh MeshObject"). Internally, it picks FEM mesh element faces that are unique (not shared by two elements) and uses them to create faces of a surface mesh. Optionally, it can be used to save a deformed mesh. This is done by adding the displacement of the FEM results to the mesh nodes (the scale of the displacement can be set using Python).

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool also creates a _Mesh2Fem_ object which is a triangular FEM mesh generated from the surface mesh.

## Usage

1. Select a FEM mesh object.
2. Optionally also select the FEM results.
3. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_FemMesh2Mesh.svg) [FEM mesh to mesh](/FEM_FemMesh2Mesh "FEM FemMesh2Mesh") button.
   - Select the **Mesh → ![](/src/assets/images/FEM_FemMesh2Mesh.svg) FEM mesh to mesh** option from the menu.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_FemMesh2Mesh/en&oldid=1476347>"
