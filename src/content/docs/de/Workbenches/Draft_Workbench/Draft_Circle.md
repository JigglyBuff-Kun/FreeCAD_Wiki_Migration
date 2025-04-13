---
title: Draft Kreis
---
|  |
| --- |
| Draft Kreis |
| Menüeintrag |
| Zeichnen → Kreis 2D-Entwurf → Kreis |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| C I |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft Bogen](/Draft_Arc/de "Draft Arc/de"), [Draft Bogen 3Punkte](/Draft_Arc_3Points/de "Draft Arc 3Points/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Circle.svg) **Draft Kreis** erstellt einen Kreis auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") aus Mittelpunkt und Radius. Der Radius kann durch Indizieren eines Punktes festgelegt werden.

Ein Draft-Kreis kann in einen Bogen gewandelt werden, indem seine Daten-Eigenschaft**First Angle** und Daten-Eigenschaft**Last Angle** auf unterschiedliche Werte gesetzt werden

![](/images/Draft_Circle_example.jpg)

Ein durch zwei Punkte festgelegter Kreis aus Mittelpunkt und Radius

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Circle.svg) [Kreis](/Draft_Circle "Draft Circle") drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Circle.svg) Kreis** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Circle.svg) Kreis** auswählen.
   * Das Tastaturkürzel C dann I.
2. Der Aufgaben-Bereich **Kreis** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Den ersten Punkt, den Kreismittelpunkt, in der 3DAnsicht auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt hinzufügen drücken.
4. Den zweiten Punkt in der 3DAnsicht auswählen oder einen **Radius** eingeben.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* F drücken oder die Checkbox **Füllen**1.0 und davor bzw. **Fläche erstellen**[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") anklicken, um den Modus Fläche erstellen umzuschalten. Bei eingeschaltetem Modus Fläche erstellen wird die Daten-Eigenschaft**Make Face** (Fläche erstellen) des erstellten Kantenzuges (Wire) auf `true` gesetzt und eine Fläche erstellt.
* N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet und ermöglicht so mit dem Erstellen von Kreisen fortzufahren.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Ein Draft-Kreis kann mit dem Befehl [Draft-Bearbeiten](/Draft_Edit/de "Draft Edit/de") geändert werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Ist die Option **Bearbeiten → Einstellungen... → Draft → Allgemein → Part-Grundkörper erstellen, wenn möglich** aktiviert, wird ein [Part-Kreis](/Part_Circle/de "Part Circle/de") anstelle eines Draft-Kreises erstellt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Kreis-Objekt wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Area** (`Area`) (schreibgeschützt): Gibt den Flächeninhalt der Kreisfläche an. Der Wert ist `0.0`, wenn die Daten-Eigenschaft**Make Face** auf `false` gesetzt ist oder die Fläche nicht erstellt werden kann.
* Daten-Eigenschaft**First Angle** (`Angle`): Legt den Startwinkel des Kreises fest; normalerweise `0°`.
* Daten-Eigenschaft**Last Angle** (`Angle`): Legt den Endwinkel des Kreises fest; normalerweise `0°`.
* Daten-Eigenschaft**Make Face** (`Bool`): Legt fest, ob die Kreisfläche erstellt wird oder nicht. Auf `true` gesetzt, wird eine Fläche erstellt, andernfalls wird nur der Kreisumfang als Teil des Objekts angesehen. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**First Angle** und die Daten-Eigenschaft**Last Angle** denselben Wert enthalten. Man beachte, dass `0°` und `360°` nicht als gleich angesehen werden.
* Daten-Eigenschaft**Radius** (`Length`): Legt den Radius des Kreises fest.

### Ansicht

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): Legt das [Draft-Muster](/Draft_Pattern/de "Draft Pattern/de") fest, mit dem die Fläche des Kreises gefüllt wird. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Make Face** auf `true` und die Ansicht-Eigenschaft**Display Mode** auf `Flat Lines` gesetzt ist.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): Legt die Größe des [Draft-Musters](/Draft_Pattern "Draft Pattern") fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft-Kreises wird die Methode `make_circle` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeCircle`.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Erstellt ein `circle`-Objekt mit gegebenem `radius` in mm.
  + `radius` kann auch eine `Part.Edge` sein, deren Attribut `Curve` ein `Part.Circle` sein muss.
* Ist `placement` auf `None` gesetzt, wird der Kreis im Ursprung erstellt.
* Ist `face` auf `True` gesetzt, erhält der Kreis eine Fläche, d.h. er wird gefüllt erscheinen.
* Sind `startangle` und `endangle` angegeben (in Grad) und haben unterschiedliche Werte, werden sie verwendet und das Objekt erscheint als [Draft-Bogen](/Draft_Arc/de "Draft Arc/de").

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/de&oldid=1556692>"