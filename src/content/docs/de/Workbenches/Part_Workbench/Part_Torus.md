---
title: Part Torus
---

|                                                                |
| -------------------------------------------------------------- |
| Part Torus                                                     |
| Menüeintrag                                                    |
| Formteil → Grundkörper → Torus                                 |
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

Der Befehl ![](/src/assets/images/Part_Torus.svg) **Part Torus** erstellt einen parametrischen Volumenkörper, einen Torus. Er ist das Ergebnis der Austragung eines Kreises entlang eines kreisförmigen Pfades. Im Koordinatensystem durch seine Daten-Eigenschaft**Placement** festgelegt, liegt der kreisförmige Pfad auf der XY-Ebene und seine Mitte im Ursprung.

Ein Part-Torus kann in ein Torussegment gewandelt werden, durch Änderung der Daten-EigenschaftAngle3 (Umfangswinkel). Durch Änderung der Daten-Eigenschaft**Angle1** und/oder der Daten-Eigenschaft**Angle2** kann das Austragungsprofil in ein Kreissegment geändert werden.

![](/src/assets/images/Part_Torus_Example.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Part_Torus.svg) Torus drücken.
   - Den Menüeintrag **Part → Grundkörper → ![](/src/assets/images/Part_Torus.svg) Torus** auswählen.
2. Der Torus wird erstellt.
3. Wahlweise die Abmaße und Daten-Eigenschaft**Placement** des Torus anpassen durch eine der folgenden Möglichkeiten:
   - Ein Doppelklick auf das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"):
     1. Der Aufgabenbereich **Geometrische Grundkörper** wird geöffnet.
     2. Eine oder mehrere Eigenschaften ändern.
     3. Das Objekt wird in der [3D-Ansicht](/3D_view/de "3D view/de") dynamisch aktualisiert.
     4. Die Schaltfläche OK drücken.
   - Die Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.
   - Die Daten-Eigenschaft**Placement** mit dem Befehl ![](/src/assets/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") ändern.

## Beispiel

![](/src/assets/images/Part_Torus_Scripting_Example.png)

Part-Torus aus dem Skriptbeispiel

Ein Part-Torus-Objekt, das mit dem [Skriptbeispiel](#Skripten) weiter unten erzeugt wurde, wird hier dargestellt.

## Hinweise

- Ein Part kann auch mit dem Befehl ![](/src/assets/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") erstellt werden. Mit dem Befehl können die Abmaße und die Positionierung zum Zeitpunkt der Erstellung festgelegt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Torus-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Torus

- Daten-Eigenschaft**Radius1** (`Length`): Der Radius des kreisförmigen Pfades des Torus. Der Standardwert ist `10mm`.
- Daten-Eigenschaft**Radius2** (`Length`): Der Radius des kreisförmigen Profils desTorus. Der Standardwert ist `2mm`.
- Daten-Eigenschaft**Angle1** (`Angle`): Der Startwinkel des kreisförmigen Profils. Wertebereich: `-180° <= Wert <= 180°`. Der Standardwert ist `-180°`.
- Daten-Eigenschaft**Angle2** (`Angle`): Der Endtwinkel des kreisförmigen Profils. Wertebereich: `-180° <= Wert <= 180°`. Der Standardwert ist `180°`. Ist der Gesamtwinkel des kreisförmigen Profils kleiner als `360°`, hat das Profil die Form eines Tortenstücks.
- Daten-Eigenschaft**Angle3** (`Angle`): Der Winkel des kreisförmigen Pfades des Torus. Wertebereich: `0° < Wert <= 360°`. Der Standardwert ist `360°`. Ist er kleiner als `360°`, ist der resultierende Festkörper ein Torussegment.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Ein Part Torus wird mit der Methode `addObject()` des Dokuments erstellt.

```
torus = FreeCAD.ActiveDocument.addObject("Part::Torus", "myTorus")

```

- Wobei `"myTorus"` der Name des Objekts ist.
- Die Funktion gibt das neu erstellte Objekt zurück.

Beispiel:

```
import FreeCAD as App

doc = App.activeDocument()

torus = doc.addObject("Part::Torus", "myTorus")
torus.Radius1 = 20
torus.Radius2 = 10
torus.Angle1 = -90
torus.Angle2 = 45
torus.Angle3 = 270
torus.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 45, 10))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Torus/de&oldid=1500183>"
