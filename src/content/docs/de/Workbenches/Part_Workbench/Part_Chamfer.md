---
title: Part Fase
---
|  |
| --- |
| Part Fase |
| Menüeintrag |
| Part → Anfasen... |
| Arbeitsbereich |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part Verrundung](/Part_Fillet/de "Part Fillet/de") |
|  |

## Beschreibung

**Part Fase** versieht ausgewählten Kanten eines Objekts mit einer Fase. Ein Dialog erlaubt die Auswahl der betroffenen Kanten sowie die Anpassung verschiedener Fasenparameter.

![Anfasungsbeispiel](/images/Chamfer-example.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Part_Chamfer.svg) Abschrägung... drücken.
   * Den Menüeintrag **Part → Abschrägung...** auswählen.
2. Die anzufasende Form aus dem Dialogfeld auswählen.
3. Die anzufasenden Kanten auswählen, indem das entsprechende Kästchen im Dialogfeld für Fasen angehakt wird oder indem sie direkt am Modell ausgewählt werden.
4. Parameter der Fasen bearbeiten.
5. OK drücken, um das Dialogfeld für die Fase zu schließen und die Fase anzuwenden.

## Optionen

![Dialog-chamfer](/images/Dialog-chamfer.png)

* Werden Kanten am Modell ausgewählt, hat man die Möglichkeiten "Kanten auswählen" und "Flächen auswählen" zu verwenden. Durch Auswahl einer Fläche werden alle angrenzenden Kanten dieser Fläche ausgewählt.
* Für die Art der Fase kann "Konstante Länge" oder "Variable Länge" festgelegt werden. (Durch ein Übersetzungsproblem findet man im Auswahlfeld Radius anstatt Länge...)
  + Die Auswahl "Konstante Länge" erzeugt eine Fase mit Kanten, die im gegebenen Abstand gleich weit von der ursprünglichen Kante entfernt sind.
  + Die Auswahl "Variable Länge" erzeugt eine Fase mit Kanten, die mit unterschiedlichen Abständen von der ursprünglichen Kante festgesetzt werden können, sodass eine Fase in einem einstellbaren Winkel erstellt werden kann.

## Eigenschaften

![Part_Faseneigenschaften](/images/Part_Chamfer-Properties.png)

Part\_Faseneigenschaften

Basis

* Daten-Eigenschaft**Basis**: Die Form, auf die die Fase aufgebracht werden soll.
* Daten-Eigenschaft**Placement**: Gibt die Ausrichtung und Lage der Form im 3D Raum an.
* Daten-Eigenschaft**Kennzeichen**: Beschriftung des Objekts. Passe sie deinen Bedürfnissen an.

## Einschränkungen

(Der Befehl) Fase bewirkt möglicherweise nichts, wenn das Ergebnis die nächste angrenzende Kante berühren oder überqueren würde. Wenn also nicht das erwartete Ergebnis erscheint, kann man es mit einem kleineren Wert versuchen. Dies gilt auch für ![](/images/Part_Fillet.svg) [Part Verrundung](/Part_Fillet/de "Part Fillet/de").

Beachte auch, dass die Fasenfunktion von dem [Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") betroffen ist, wenn die Änderung in einem Modellierungsschritt vorgenommen wird, der früher in der Kette liegt und die Anzahl der Facetten oder Eckpunkte beeinflusst. Dies kann zu unvorhersehbaren Ergebnissen führen. Bis dies gelöst ist, wird empfohlen, die Operationen Fase und ![](/images/Part_Fillet.svg) [Part Verrundung](/Part_Fillet/de "Part Fillet/de") als letzte Schritte in der Kette anzuwenden.

## Skripten

Das Fasenwerkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus verwendet werden, indem dem Dokument ein Fasenobjekt hinzugefügt wird.

**Beispiel Skript:**

```
import Part
cube = FreeCAD.ActiveDocument.addObject("Part::Feature", "myCube")
cube.Shape = Part.makeBox(5, 5, 5)
chmfr = FreeCAD.ActiveDocument.addObject("Part::Chamfer", "myChamfer")
chmfr.Base = FreeCAD.ActiveDocument.myCube
myEdges = []
myEdges.append((1, 1.5, 1.25)) # (edge number, chamfer start length, chamfer end length)
myEdges.append((2, 1.5, 1.25))
myEdges.append((3, 1.5, 1.25))
myEdges.append((4, 1.5, 1.25))
myEdges.append((5, 1.5, 1.25))
myEdges.append((6, 1.5, 1.25))
myEdges.append((7, 1.5, 1.25))
myEdges.append((8, 1.5, 1.25))
myEdges.append((9, 1.5, 1.25))
myEdges.append((10, 1.5, 1.25))
myEdges.append((11, 1.5, 1.25))
myEdges.append((12, 1.5, 1.25))
chmfr.Edges = myEdges
FreeCADGui.ActiveDocument.myCube.Visibility = False
FreeCAD.ActiveDocument.recompute()

```

**Beispiel Skript Erklärung:**

```
import Part
cube = FreeCAD.ActiveDocument.addObject("Part::Feature", "myCube")
cube.Shape = Part.makeBox(5, 5, 5)

```

* Erzeugt einen 5 mm Würfel, auf den wir gefaste Kanten aufbringen können. Siehe [Part\_API](/Part_API/de "Part API/de") für eine Erklärung der makeBox Methode.

```
chmfr = FreeCAD.ActiveDocument.addObject("Part::Chamfer", "myChamfer")

```

* Fügt ein neues Objekt dem Dokument vom Typ Fase (aus dem Part Arbeitsbereich) mit der Bezeichnung "myChamfer" hinzu.

```
chmfr.Base = FreeCAD.ActiveDocument.myCube

```

* Legt fest, dass die Grundform des Fasenobjekts "myCube" sein soll.

```
myEdges = []
myEdges.append((1, 1.5, 1.25)) # (edge number, chamfer start length, chamfer end length)
myEdges.append((2, 1.5, 1.25))
myEdges.append((3, 1.5, 1.25))
myEdges.append((4, 1.5, 1.25))
myEdges.append((5, 1.5, 1.25))
myEdges.append((6, 1.5, 1.25))
myEdges.append((7, 1.5, 1.25))
myEdges.append((8, 1.5, 1.25))
myEdges.append((9, 1.5, 1.25))
myEdges.append((10, 1.5, 1.25))
myEdges.append((11, 1.5, 1.25))
myEdges.append((12, 1.5, 1.25))

```

* Erstellt ein leeres Feld "myEdges" und hängt dann das Feld mit den Fasenparametern jeder Kante an.
* Die Syntax für jedes Element sollte sein (Kante#, Fasenanfangslänge, Fasenendlänge)

```
chmfr.Edges = myEdges

```

* Setzt das Kantenattribut unseres Fasenobjekts gleich dem Feld, das wir gerade erstellt haben.

```
FreeCADGui.ActiveDocument.myCube.Visibility = False

```

* Diese Linie verbirgt einfach "myCube", so dass nur unser neu erstelltes "myChamfer" Objekt sichtbar ist.

```
FreeCAD.ActiveDocument.recompute()

```

* Berechnet alle geänderten Komponenten auf dem Bildschirm neu und aktualisiert die Anzeige.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Chamfer/de&oldid=1287421>"