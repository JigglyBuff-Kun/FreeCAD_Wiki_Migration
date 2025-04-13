---
title: Part Kegel
---
|  |
| --- |
| Part Kegel |
| Menüeintrag |
| Formteil → Grundkörper → Kegel |
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

Der Befehl ![](/images/Part_Cone.svg) **Part Kegel** erstellt einen parametrischen Volumenkörper, einen Kegel. Im Koordinatensystem durch seine Daten-Eigenschaft**Placement** festgelegt, liegt die Unterseite des Kegels auf der XY-Ebene mit ihrem Mittelpunkt im Ursprung.

Standardmäßig ist der Part-Kegel ein Kegelstumpf. Er kann in einen Kegel mit Spitze gewandelt werden, indem die Daten-Eigenschaft**Radius1** oder die Daten-Eigenschaft**Radius2** auf Null gesetzt wird. Er kann in ein Kegelsegment gewandelt werden, durch Änderung der Daten-Eigenschaft**Winkel**.

![](/images/Part_Cone_Example.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Part_Cone.svg) Kegel drücken.
   * Den Menüeintrag **Part → Grundkörper → ![](/images/Part_Cone.svg) Kegel** auswählen.
2. Der Kegel wird erstellt.
3. Wahlweise die Abmaße und die Daten-Eigenschaft**Placement** des Kegels anpassen durch eine der folgenden Möglichkeiten:
   * Doppelklick auf das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"):
     1. Das Aufgaben-Fenster **Geometrische Grundelemente** wird geöffnet.
     2. Eine oder mehrere Eigenschaften ändern.
     3. Das Objekt wird in der [3D-Ansicht](/3D_view/de "3D view/de") dynamisch aktualisiert.
     4. Die Schaltfläche OK drücken.
   * Die Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.
   * Die Daten-Eigenschaft**Placement** mit dem Befehl ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") ändern.

## Beispiel

![](/images/Part_Cone_Scripting_Example.png)

Part-Kegel aus dem Skriptbeispiel

Ein Part-Kegel-Objekt, das mit dem [Skriptbeispiel](#Skripten) weiter unten erzeugt wurde, wird hier dargestellt.

## Hinweise

* Ein Part Kegel kann auch mit dem Befehl ![](/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") erstellt werden. Mit dem Befehl können die Abmaße und die Positionierung zum Zeitpunkt der Erstellung festgelegt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Kegel-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Cone

* Daten-Eigenschaft**Radius1** (`Length`): Der Radius der Grundfläche des Kegels. Kann `0mm` sein, wenn Daten-Eigenschaft**Radius2** größer als `0mm` ist. Der Standardwert ist `2mm`.
* Daten-Eigenschaft**Radius2** (`Length`): Der Radius der Deckfläche des Kegels. Kann `0mm` sein, wenn Daten-Eigenschaft**Radius1** größer als `0mm` ist. Der Standardwert ist `4mm`.
* Daten-Eigenschaft**Height** (`Length`): Die Höhe des Kegels. Der Standardwert ist `10mm`.
* Daten-Eigenschaft**Angle** (`Angle`): Der Winkel der Kreisbögen, die die Grund- und Deckflächen des Kegels festlegen. Wertebereich: `0° < value <= 360°`. Der Standardwert ist `360°`. Ist er kleiner als `360°`, ist der resultierende Festkörper ein Kegelsegment.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Ein Part Kegel wird mit der Methode `addObject()` des Dokuments erstellt.

```
cone = FreeCAD.ActiveDocument.addObject("Part::Cone", "myCone")

```

* Wobei `"myCone"` der Name des Objekts ist.
* Die Funktion gibt das neu erstellte Objekt zurück.

Beispiel:

```
import FreeCAD as App

doc = App.activeDocument()

cone = doc.addObject("Part::Cone", "myCone")
cone.Radius1 = 5
cone.Radius2 = 10
cone.Height = 50
cone.Angle = 270
cone.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 60, 15))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cone/de&oldid=1500106>"