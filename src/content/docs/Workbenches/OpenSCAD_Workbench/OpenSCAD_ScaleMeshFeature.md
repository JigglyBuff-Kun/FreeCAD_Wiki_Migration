---
title: OpenSCAD ScaleMeshFeature
---
|  |
| --- |
| OpenSCAD ScaleMeshFeature |
| Menu location |
| OpenSCAD → Scale Mesh Feature |
| Workbenches |
| [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Mesh Scale](/Mesh_Scale "Mesh Scale") |
|  |

## Description

Creates a new scaled mesh object with independent scaling for each axis.

## Usage

1. Select the mesh object to be scaled.
2. Click the OpenSCAD → Scale Mesh Feature... menu.
3. Select the desired axis in the dialog, or enter your own custom axis to use and click OK.

* A new mesh object is created and scaled, the original object is rendered hidden.

## Limitations

* The new mesh object is not parametric to the original mesh object, which means any changes to the original object do not get reflected in the new scaled object.

## Notes

* The function does not modify the existing mesh, but returns a new mesh.
* The function can be accessed via Python:

```
import OpenSCADUtils
import Mesh
#this assumes an existing object in the document named "Mesh" that you wish to scale
original_mesh = App.ActiveDocument.Mesh
scaled_mesh = OpenSCADUtils.scalemesh(original_mesh.Mesh, FreeCAD.Base.Vector(1,0,0))
Mesh.show(scaled_mesh)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_ScaleMeshFeature/en&oldid=1216165>"