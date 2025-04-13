---
title: Arch NetzAufteilen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch NetzAufteilen |
| Menüeintrag |
| Utils → Netz aufteilen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch NichtmannigfaltigeNetzeAuswählen](/Arch_SelectNonSolidMeshes/de "Arch SelectNonSolidMeshes/de"), [Arch NetzZuForm](/Arch_MeshToShape/de "Arch MeshToShape/de") |
|  |

## Beschreibung

Das Werkzeug **Arch NetzAufteilen** teilt ein ausgewähltes [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")-Objekt in seine einzelnen Bestandteile.

## Anwendung

1. Ein Netzobjekt auswählen.
2. Den Menüeintrag **Utils → ![](/images/Arch_SplitMesh.svg) Netz aufteilen** auswählen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug NetzAufteilen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
new_list = splitMesh(obj, mark=True)

```

* Teilt das gegebene Netzobjekt `obj` in einzelne Bestandteile auf.
* Falls `mark` auf `True` gesetzt ist, werden [nicht-mannigfaltige](https://de.wikipedia.org/wiki/Mannigfaltigkeit) Komponenten rot dargestellt.
* `new_list` ist eine Liste aller einzelnen Komponenten, aus denen das Netz besteht.

Beispiel:

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"

new_list = Arch.splitMesh(mesh_obj)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/de&oldid=1542008>"