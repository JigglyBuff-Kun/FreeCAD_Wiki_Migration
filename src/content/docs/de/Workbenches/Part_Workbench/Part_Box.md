---
title: Part Quader
---
|  |
| --- |
| Part Quader |
| Menüeintrag |
| Formteil → Grundkörper → Quader |
| Arbeitsbereich |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part Grundelemente](/Part_Primitives/de "Part Primitives/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Part_Box.svg) **Part Quader** erstellt einen parametrischen quaderförmigen Festkörper (Siehe [Quader](https://de.wikipedia.org/wiki/Quader)). Im Koordinatensystem durch seine Daten-Eigenschaft**Placement** festgelegt, liegt die Unterseite des Quaders auf der XY-Ebene mit seiner vorderen linken Ecke im Ursprung und seiner Vorderkante parallel zur X-Achse.

![](/images/Part_Box_Example.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Part_Box.svg) Part Quader drücken.
   * Den Menüeintrag **Part → Grundkörper → ![](/images/Part_Box.svg) Quader** auswählen.
2. Der Quader wird erstellt.
3. Wahlweise die Abmessungen und die Daten-Eigenschaft**Placement** des Quaders ändern, indem eine der folgenden Möglichkeiten ausgeführt wird:
   * Ein Doppelklick auf das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"):
     1. Das Aufgaben-Fenster **Geometrische Grundkörper** wird geöffnet.
     2. Eine oder mehrere Eigenschaften Ändern.
     3. Das Objekt wird dynamisch in der [3D-Ansicht](/3D_view/de "3D view/de") aktualisiert.
     4. Die Schaltfläche OK drücken.
   * Die Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.
   * Die Daten-Eigenschaft**Placement** mit dem Befehl ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") ändern.

## Beispiel

![](/images/Part_Box_Scripting_Example.png)

Part-Quader aus dem Skriptbeispiel

Ein Part-Quader-Objekt, das mit dem [Skriptbeispiel](#Skripten) weiter unten erzeugt wurde, wird hier dargestellt.

## Hinweise

* Ein Part-Quader kann auch mit dem Befehl ![](/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") erstellt werden. Mit dem Befehl können die Abmaße und die Positionierung zum Zeitpunkt der Erstellung festgelegt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Quader-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Box

* Daten-Eigenschaft**Length** (`Length`): Die Länge des Quader-Objekts. Dies ist die Länge in seiner X-Richtung. Der Standardwert ist `10mm`.
* Daten-Eigenschaft**Width** (`Length`): Die Breite des Quader-Objekts. Dies ist die Länge in seiner Y-Richtung. Der Standardwert ist `10mm`.
* Daten-Eigenschaft**Height** (`Length`): Die Höhe des Quader-Objekts. Dies ist die Länge in seiner Z-Richtung. Der Standardwert ist `10mm`.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Ein Part-Quader wird mit der Methode `addObject()` des Dokuments erstellt.

```
box = FreeCAD.ActiveDocument.addObject("Part::Box", "myBox")

```

* Wobei `"myBox"` der Name des Objekts ist.
* Die Funktion gibt das neu erstellte Objekt zurück.

Beispiel:

```
import FreeCAD as App

doc = App.activeDocument()

box = doc.addObject("Part::Box", "myBox")
box.Length = 4
box.Width = 8
box.Height = 12
box.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Box/de&oldid=1501871>"