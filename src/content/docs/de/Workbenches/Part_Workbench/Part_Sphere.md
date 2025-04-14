---
title: Part Kugel
---

|                                                                |
| -------------------------------------------------------------- |
| Part Kugel                                                     |
| Menüeintrag                                                    |
| Part → Grundkörper → Kugel                                     |
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

Der Befehl ![](/images/Part_Sphere.svg) **Part Kugel** erstellt einen parametrischen Volumenkörper, eine Kugel. Sie ist das Ergebnis der Drehung eines Kreisbogens um eine Achse. Im Koordinatensystem durch ihre Daten-Eigenschaft**Placement** festgelegt, liegt ihr Mittelpunkt im Ursprung und Ihre Drehachse ist die Z-Achse.

Eine Part-Kugel kann oben und/oder unten beschnitten werden, indem man die Daten-Eigenschaft**Angle1** und die Daten-Eigenschaft**Angle2** ändert (die Winkel vom Äquator in Richtung der Pole). Sie kann in ein Kugelsegment gewandelt werden, durch Änderung der Daten-Eigenschaft**Angle3** (Umfangswinkel).

![](/images/Part_Sphere_Example.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Sphere.svg) [Kugel](/Part_Sphere "Part Sphere") drücken.
   - Den Menüeintrag **Part → Grundkörper → ![](/images/Part_Sphere.svg) Kugel** auswählen.
2. Die Kugel wird erstellt.
3. Wahlweise die Abmaße und die Daten-Eigenschaft**Placement** der Kugel ändern durch eine der folgenden Möglichkeiten:
   - Doppelklick auf das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"):
     1. Der Aufgabenbereich **Geometrische Grundelemente** wird geöffnet.
     2. Eine oder mehrere Eigenschaften ändern.
     3. Das Objekt wird in der [3D-Ansicht](/3D_view/de "3D view/de") dynamisch aktualisiert.
     4. Die Schaltfläche OK drücken.
   - Die Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.
   - Die Daten-Eigenschaft**Placement** mit dem Befehl ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") ändern.

## Beispiel

![](/images/Part_Sphere_Scripting_Example.png)

Part-Kugel aus dem Skriptbeispiel

Ein Part-Kugel-Objekt, das mit dem [Skriptbeispiel](#Skripten) weiter unten erzeugt wurde wird hier dargestellt.

## Hinweise

- Eine Part Kugel kann auch mit dem Befehl ![](/images/Part_Primitives.svg) [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") erstellt werden. Mit dem Befehl können die Abmaße und die Positionierung zum Zeitpunkt der Erstellung festgelegt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Kugel-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Attachment

Das Objekt hat dieselben Befestigungseigenschaften wie ein [Part Part2DObject](/Part_Part2DObject/de#Daten "Part Part2DObject/de").

Kugel

- Daten-Eigenschaft**Radius** (`Length`): Der Radius der Kugel. Der Standardwert ist `5mm`.
- Daten-Eigenschaft**Angle1** (`Angle`): Der Startwinkel des Kreisbogenprofils der Kugel. Wertebereich: `-90° <= Wert <= 90°`. Darf nicht genau so groß sein wie Daten-Eigenschaft**Angle2**. Der Standardwert ist `-90°`.
- Daten-Eigenschaft**Angle2** (`Angle`): Der Endwinkel des Kreisbogenprofils der Kugel. Wertebereich: `-90° <= Wert <= 90°`. Darf nicht genau so groß sein wie Daten-Eigenschaft**Angle1**. Der Standardwert ist `90°`. Ist der Gesamtwinkel des Kreisbogenprofils kleiner als `180°`, wird die Kugel beschnitten und erhält eine ebene Fläche an ihrer Ober- und/oder Unterseite.
- Daten-Eigenschaft**Angle3** (`Angle`): Der vollständige Drehwinkel der Kugel. Wertebereich: `0° < Wert <= 360°`. Der Standardwert ist `360°`. Ist er kleiner als `360°`, ist der resultierende Festkörper ein Kugelsegment.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/), [Part Skripten](/Part_scripting/de "Part scripting/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine Part Kugel wird mit der Methode `addObject()` des Dokuments erstellt.

```
sphere = FreeCAD.ActiveDocument.addObject("Part::Sphere", "mySphere")

```

- Wobei `"mySphere"` der Name des Objekts ist.
- Die Funktion gibt das neu erstellte Objekt zurück.

Beispiel:

```
import FreeCAD as App

doc = App.activeDocument()

sphere = doc.addObject("Part::Sphere", "mySphere")
sphere.Radius = 20
sphere.Angle1 = -30
sphere.Angle2 = 45
sphere.Angle3 = 90
sphere.Placement = App.Placement(App.Vector(3, 9, 11), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Sphere/de&oldid=1500110>"
