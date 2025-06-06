---
title: OpenSCAD MirrorMeshFeature
---
|  |
| --- |
| OpenSCAD MirrorMeshFeature |
| Menu location |
| OpenSCAD → Mirror Mesh Feature |
| Workbenches |
| [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Part Mirror](/Part_Mirror "Part Mirror") |
|  |

## Description

Creates a new mirrored mesh object, mirrored about the selected axis.

## Usage

1. Select the mesh object to be mirrored.
2. Click the OpenSCAD → Mirror Mesh Feature... menu.
3. Select the desired axis in the dialog, or enter your own custom axis to use and click OK.

* A new object is created and mirrored, the original object is rendered hidden.

## Limitations

* The new mesh object is not parametric to the original mesh object, which means any changes to the original object do not get reflected in the new mirrored object.

## Notes

* The function does not modify the existing mesh, but returns a new mesh.
* The function can be accessed via Python:

```
import OpenSCADUtils
import Mesh
#this assumes an existing object in the document named "Mesh" that you wish to mirror
original_mesh = App.ActiveDocument.Mesh
mirrored_mesh = OpenSCADUtils.mirrormesh(original_mesh.Mesh, FreeCAD.Base.Vector(1,0,0))
Mesh.show(mirrored_mesh)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_MirrorMeshFeature/en&oldid=1216223>"