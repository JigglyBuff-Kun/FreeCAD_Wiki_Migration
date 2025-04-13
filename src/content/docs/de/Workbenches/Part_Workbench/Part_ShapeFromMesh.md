---
title: Part FormAusNetz
---

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part FormAusNetz                                                                                                                                                                                               |
| Menüeintrag                                                                                                                                                                                                    |
| Part → Form aus Dreiecksnetz erstellen...                                                                                                                                                                      |
| Arbeitsbereich                                                                                                                                                                                                 |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                 |
| Standardtastenkürzel                                                                                                                                                                                           |
| _Keiner_                                                                                                                                                                                                       |
| Eingeführt in Version                                                                                                                                                                                          |
| -                                                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                                                     |
| [Part FestkörperErstellen](/Part_MakeSolid/de "Part MakeSolid/de"), [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de"), [Part PunkteAusNetz](/Part_PointsFromMesh/de "Part PointsFromMesh/de") |
|                                                                                                                                                                                                                |

## Einleitung

Der Befehl ![](/src/assets/images/Part_ShapeFromMesh.svg) Part FormAusNetz erzeugt eine Form aus einem [Netzobjekt](/Mesh/de "Mesh/de"). Netzobjekte haben in FreeCAD nur begrenzte Bearbeitungsmöglichkeiten, ihre Konvertierung in [Formen](/Shape/de "Shape/de") ermöglicht ihre Verwendung mit booleschen Verknüpfungen und vielen weiteren Bearbeitungsbefehlen.

Der umgekehrte Vorgang wird mit ![](/src/assets/images/Mesh_FromPartShape.svg) [Mesh NetzAusPartForm](/Mesh_FromPartShape/de "Mesh FromPartShape/de") aus dem Arbeitsbereich ![](/src/assets/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") ausgeführt.

## Anwendung

1. Das Analysieren und Reparieren der Netzobjekte sollte, wenn erforderlich, bevor dieser Befehl gestartet wird. Geeignete Werkzeuge für diese Aufgabe findet man im Arbeitsbereich ![](/src/assets/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/de "Mesh Workbench/de").
2. Ein oder mehrere Netzobjekte auswählen.
3. Den Menüeintrag **Part → ![](/src/assets/images/Part_ShapeFromMesh.svg) Form aus Dreiecksnetz erstellen** auswählen.
4. Das Dialogfenster **Form aus Netz** wird geöffnet.
5. Wahlweise die Checkbox **Form nähen** aktivieren und eine Toleranz festlegen:
   - Diese Option wird normalerweise nicht gebraucht. Sie ist für Netzobjekte vorgesehen, die nicht wasserdicht sind und kleine Lücken zwischen Kanten aufweisen.
   - Ist die Option ausgewählt, wird ein Verbund von Hüllen anstatt eines Verbundes von Flächen erstellt.
   - Der Vorgang des Vernähens kann eine hohe Rechenleistung erfordern.
6. Die Schaltfläche OK drücken.
7. Zu jedem ausgewählten Netzobjekt wird eine [Form](/Shape/de "Shape/de") (Shape object) als separates neues Objekt erstellt.
8. Wahlweise ![](/src/assets/images/Part_RefineShape.svg) [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") auf diese Objekte anwenden.
9. Wahlweise die endgültigen Objekte mit ![](/src/assets/images/Part_MakeSolid.svg) [Part FestkörperErstellen](/Part_MakeSolid/de "Part MakeSolid/de") in Festkörper umwandeln.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Der Befehl Part ShapeFromMesh erstellt [Part Formelemente](/Part_Feature/de "Part Feature/de") ohne weitere Eigenschaften.

## Skripten

Das Erstellen einer [Form](/Shape/de "Shape/de") aus einem [Netz](/Mesh/de "Mesh/de") kann mit der Methode `makeShapeFromMesh` aus einem [Part TopoShape](/Part_TopoShape/de "Part TopoShape/de")-Objekt erfolgen; es muss das Quellnetz und die Toleranz angegeben sowie das Ergebnis einem neuen [Part Formelement](/Part_Feature/de "Part Feature/de") (Feature object) zuweisen werde.

Man beachte, dass das Netz neu berechnet werden muss, bevor es in eine Form umgewandelt wird, andernfalls würden die Topologieinformationen fehlen und die Umwandlung könnte nicht erfolgreich durchgeführt werden.

```
import FreeCAD as App
import Part

doc = App.ActiveDocument
mesh = doc.addObject("Mesh::Cube", "Mesh")
mesh.recompute()

shape = Part.Shape()
shape.makeShapeFromMesh(mesh.Mesh.Topology, 0.1)

solid = doc.addObject("Part::Feature", "Solid")
solid.Shape = Part.Solid(shape.removeSplitter())
solid.Placement.Base = App.Vector(15, 0, 0)
doc.recompute()

```

## Verweise

- [Bearbeite STL Dateien in FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) Video von AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/de&oldid=1471998>"
