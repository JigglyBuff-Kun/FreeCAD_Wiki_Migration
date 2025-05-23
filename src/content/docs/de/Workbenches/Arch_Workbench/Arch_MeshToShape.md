---
title: Arch NetzZuForm
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch NetzZuForm |
| Menüeintrag |
| Utils → Netz in Form umwandeln |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch NetzAufteilen](/Arch_SplitMesh/de "Arch SplitMesh/de"), [Arch FormEntfernen](/Arch_RemoveShape/de "Arch RemoveShape/de") |
|  |

## Beschreibung

Das Werkzeug Arch NetzZuForm wandelt ein gewähltes [Netz](/Mesh/de "Mesh/de")-Objekt ([Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de")) in ein [Form](/Shape/de "Shape/de")-Objekt ([Part Formelement](/Part_Feature/de "Part Feature/de")) um.

Dieses Werkzeug ist für Objekte mit ebenen Flächen (keine Kurven) optimiert. Das entsprechende Werkzeug ![](/images/Part_ShapeFromMesh.svg) [Part FormAusNetz](/Part_ShapeFromMesh "Part ShapeFromMesh") aus dem Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") ist möglicherweise besser für Objekte geeignet, die gekrümmte Oberflächen enthalten.

## Anwendung

1. Ein Netzobjekt auswählen.
2. Den Menüeintrag **Utils → ![](/images/Arch_MeshToShape.svg) Netz in Form umwandeln** auswählen.

## Eigenschaften

## Einschränkungen

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

Der obige Codeschnipsel wandelt das gegebene `obj` (ein Netz) in eine Form um und verbindet dabei komplanare Facetten.

* Wenn `mark` `True` ist, werden nicht-mannigfaltige Objekte rot markiert (z.B. nicht geschlossene Netze, aus denen keine Festkörper erstellt werden können).
* Wenn `fast` `True` ist, wird ein schnellerer Algorithmus verwendet, indem aus den Facetten eine Schale aufgebaut und dann der Splitter entfernt wird.
* `tol` ist die Toleranz, die bei der Umwandlung von Netzsegmenten in Drähte verwendet wird.
* Wenn `flat` `True` ist, werden die Drähte gezwungen, perfekt planar zu sein, um sicher zu sein, dass sie in Flächen umgewandelt werden können, aber dies könnte Lücken in der endgültigen Schale hinterlassen.
* Wenn `cut` `True` ist, werden Löcher in Flächen durch Subtraktion erzeugt.

Beispiel:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/de&oldid=1541986>"