---
title: OpenSCAD NetzelementSkalieren
---
|  |
| --- |
| OpenSCAD NetzelementSkalieren |
| Menüeintrag |
| OpenSCAD → Netzelement skalieren |
| Arbeitsbereich |
| [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Mesh Skalieren](/Mesh_Scale/de "Mesh Scale/de") |
|  |

## Beschreibung

Creates a new scaled mesh object with independent scaling for each axis.

## Anwendung

1. Select the mesh object to be scaled.
2. Click the OpenSCAD → Scale Mesh Feature... menu.
3. Select the desired axis in the dialog, or enter your own custom axis to use and click OK.

* A new mesh object is created and scaled, the original object is rendered hidden.

## Einschränkungen

* The new mesh object is not parametric to the original mesh object, which means any changes to the original object do not get reflected in the new scaled object.

## Hinweise

* Die Funktion ändert nicht das vorhandene Netz, sondern erstellt ein neues Netz.
* Auf diese Funktion kann über Python zugegriffen werden:

```
import OpenSCADUtils
import Mesh
#this assumes an existing object in the document named "Mesh" that you wish to scale
original_mesh = App.ActiveDocument.Mesh
scaled_mesh = OpenSCADUtils.scalemesh(original_mesh.Mesh, FreeCAD.Base.Vector(1,0,0))
Mesh.show(scaled_mesh)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_ScaleMeshFeature/de&oldid=1248313>"