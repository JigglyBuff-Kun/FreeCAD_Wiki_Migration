---
title: Part Zylinder
---

|                                                                |
| -------------------------------------------------------------- |
| Part Zylinder                                                  |
| Menüeintrag                                                    |
| Part → Grundkörper → Zylinder                                  |
| Arbeitsbereich                                                 |
| [Part](/Part_Workbench/de "Part Workbench/de")                 |
| Standardtastenkürzel                                           |
| _Keiner_                                                       |
| Eingeführt in Version                                          |
| -                                                              |
| Siehe auch                                                     |
| [Part Grundelemente](/Part_Primitives/de "Part Primitives/de") |
|                                                                |

## Beschreibung

Der Befehl ![](/images/Part_Cylinder.svg) **Part Zylinder** erstellt einen parametrischen Festkörper, einen Zylinder. Er ist das Ergebnis der Extrusion eines Kreises entlang eines geraden Pfades. Im Koordinatensystem durch seine Daten-Eigenschaft**Placement** festgelegt, liegt die Unterseite des Zylinders auf der XY-Ebene und ihre Mitte im Ursprung.

Ein Part-Zylinder kann in ein Zylindersegment gewandelt werden, indem seine Daten-Eigenschaft**Winkel** geändert wird.

![](/images/Part_Cylinder_Example.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Cylinder.svg) Zylinder drücken.
   - Den Menüeintrag **Part → Grundkörper → ![](/images/Part_Cylinder.svg) Zylinder** auswählen.
2. Der Zylinder wird erstellt.
3. Wahlweise die Abmessungen und die Daten-Eigenschaft**Placement** des Zylinders ändern, indem eine der folgenden Möglichkeiten ausgeführt wird:
   - Ein Doppelklick auf das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"):
     1. Das Aufgaben-Fenster **Geometrische Grundkörper** wird geöffnet.
     2. Eine oder mehrere Eigenschaften Ändern.
     3. Das Objekt wird dynamisch in der [3D-Ansicht](/3D_view/de "3D view/de") aktualisiert.
     4. Die Schaltfläche OK drücken.
   - Die Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.
   - Die Daten-Eigenschaft**Placement** mit dem Befehl ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") ändern.

## Beispiel

![](/images/Part_Cylinder_Scripting_Example.png)

Part-Zylinder aus dem Skriptbeispiel

Ein Part-Zylinder-Objekt, das mit dem [Skriptbeispiel](#Skripten) weiter unten erzeugt wurde wird hier dargestellt.

## Hinweise

- Ein Part Zylinder kann auch mit dem Befehl ![](/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") erstellt werden. Mit dem Befehl können die Abmaße und die Positionierung zum Zeitpunkt der Erstellung festgelegt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Zylinder-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Cylinder

- Daten-Eigenschaft**Radius** (`Length`): Der Radius des Kreisbogens, der den Zylinder definiert. Der Standardwert ist `2mm`.
- Daten-Eigenschaft**Height** (`Length`): Die Höhe des Zylinders. Der Standardwert ist `10 mm`.
- Daten-Eigenschaft**Winkel** (`Angle`): Der Winkel des Kreisbogens, der den Zylinder definiert. Gültiger Bereich: `0° < Wert <= 360°`. Der Standardwert ist `360°`. Wenn er kleiner als `360°` ist, ist der resultierende Festkörper ein Zylindersegment.

Prism

- Daten-Eigenschaft**First Angle** (`Angle`): Der Winkel zwischen der Extrusionsrichtung des Zylinders und seiner positiven Z-Achse, gemessen um seine Y-Achse. Der Winkel ist positiv zur positiven X-Achse. Gültiger Bereich: `0° <= Wert < 90°`. Der Standardwert ist `0°`. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
- Daten-Eigenschaft**Second Angle** (`Angle`): Der Winkel zwischen der Extrusionsrichtung des Zylinders und seiner positiven Z-Achse, gemessen um seine X-Achse. Der Winkel ist positiv zur positiven Y-Achse. Gültiger Bereich: `0° <= Wert < 90°`. Der Standardwert ist `0°`. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Ein Part-Zylinder wird mit der Methode `addObject()` des Dokuments erstellt.

```
cylinder = FreeCAD.ActiveDocument.addObject("Part::Cylinder", "myCylinder")

```

- Wobei `"myCylinder"` der Name des Objekts ist.
- Die Funktion gibt das neu erstellte Objekt zurück.

Beispiel:

```
import FreeCAD as App

doc = App.activeDocument()

cylinder = doc.addObject("Part::Cylinder", "myCylinder")
cylinder.Radius = 10
cylinder.Height = 50
cylinder.Placement = App.Placement(App.Vector(5, 10, 15), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cylinder/de&oldid=1501889>"
