---
title: OpenSCAD NetzelementSpiegeln
---
|  |
| --- |
| OpenSCAD NetzelementSpiegeln |
| Menüeintrag |
| OpenSCAD → Netzelement spiegeln |
| Arbeitsbereich |
| [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part Spiegelung](/Part_Mirror/de "Part Mirror/de") |
|  |

## Beschreibung

Erstellt ein gespiegeltes Netz-Objekt, gespiegelt über die ausgewählte Achse.

## Anwendung

1. Select the mesh object to be mirrored.
2. Click the OpenSCAD → Mirror Mesh Feature... menu.
3. Select the desired axis in the dialog, or enter your own custom axis to use and click OK.

* A new object is created and mirrored, the original object is rendered hidden.

## Einschränkungen

* The new mesh object is not parametric to the original mesh object, which means any changes to the original object do not get reflected in the new mirrored object.

## Hinweise

* Die Funktion ändert nicht das vorhandene Netz, sondern erstellt ein neues Netz.
* Auf diese Funktion kann über Python zugegriffen werden:

```
import OpenSCADUtils
import Mesh
#this assumes an existing object in the document named "Mesh" that you wish to mirror
original_mesh = App.ActiveDocument.Mesh
mirrored_mesh = OpenSCADUtils.mirrormesh(original_mesh.Mesh, FreeCAD.Base.Vector(1,0,0))
Mesh.show(mirrored_mesh)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_MirrorMeshFeature/de&oldid=1248295>"