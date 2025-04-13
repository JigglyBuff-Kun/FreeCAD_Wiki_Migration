---
title: Draft Ellipse
---
|  |
| --- |
| Draft Ellipse |
| Menüeintrag |
| Zeichnen → Ellipse 2D-Entwurf → Ellipse |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| E L |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Kreis](/Draft_Circle/de "Draft Circle/de"), [Bogen](/Draft_Arc/de "Draft Arc/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Ellipse.svg) **Draft Ellipse** erstellt eine Ellipse in der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") aus zwei Punkten, die ein Rechteck festlegen, in das die Ellipse hineinpasst.

Eine Draft-Ellipse kann in einen Ellipsenbogen gewandelt werden, indem ihre Daten-Eigenschaft**First Angle** und Daten-Eigenschaft**Last Angle** auf unterschiedliche Werte gesetzt werden

![](/images/Draft_ellipse_example.jpg)

Eine durch die Ecken eines Rechtecks festgelegte Ellipse

## Anwendung

Siehe auch: [Draft-Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft-Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Ellipse.svg) Ellipse drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Ellipse.svg) Ellipse** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Ellipse.svg) Ellipse** auswählen.
   * Das Tastaturkürzel E dann L.
2. Der Aufgaben-Bereich **Ellipse** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
4. Den zweiten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken. Dieser Punkt darf nicht auf die X-, Y- oder Z-Achse festgelegt werden.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* R drücken oder die Checkbox **Relativ** aktivieren, um den Relativ-Modus umzuschalten. Ist der Relativ-Modus aktiviert, beziehen sich die Koordinaten des zweiten Punktes auf den ersten Punkt, andernfalls beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* F drücken oder die Checkbox **Füllen**1.0 und davor bzw. **Fläche erstellen**[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") anklicken, um den Modus Fläche erstellen umzuschalten. Bei eingeschaltetem Modus Fläche erstellen wird die Daten-Eigenschaft**Make Face** (Fläche erstellen) des erstellten Kantenzuges (Wire) auf `true` gesetzt und eine Fläche erstellt.
* N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet und ermöglicht so mit dem Erstellen von Ellipsen fortzufahren.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Eine Draft-Ellipse kann mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Ist die Option **Bearbeiten → Einstellungen... → Draft → Allgemein → Part-Grundkörper erstellen, wenn möglich** aktiviert, wird eine [Part-Ellipse](/Part_Circle/de "Part Circle/de") anstelle einer Draft-Ellipse erstellt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Draft-Ellipse (Ellipse-Objekt) wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten**Area** (`Area`) (schreibgeschützt): Gibt den Flächeninhalt der Ellipsenfläche an. Der Wert ist `0.0`, wenn die Daten-Eigenschaft**Make Face** auf `false` gesetzt ist oder die Fläche nicht erstellt werden kann.
* Daten**First Angle** (`Angle`): Legt den Winkel des ersten Punktes auf der Ellipse fest; normalerweise `0°`.
* Daten**Last Angle** (`Angle`): Legt den Winkel des letzten Punktes auf der Ellipse fest; normalerweise `0°`.
* Daten**Major Radius** (`Length`): Legt den Hauptradius der Ellipse fest.
* Daten**Make Face** (`Bool`): Legt fest, ob die Ellipsenfläche erstellt wird oder nicht. Auf `true` gesetzt, wird eine Fläche erstellt, andernfalls wird nur der Ellipsenumfang als Teil des Objekts angesehen. Diese Eigenschaft funktioniert nur, wenn die Form eine vollständige Ellipse ist.
* Daten**Minor Radius** (`Length`): Legt den Nebenradius der Ellipse fest.

### Ansicht

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): Legt das [Draft-Muster](/Draft_Pattern/de "Draft Pattern/de") fest, mit dem die Fläche der Ellipse gefüllt wird. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Make Face** auf `true` und die Ansicht-Eigenschaft**Display Mode** auf `Flat Lines` gesetzt ist.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): Legt die Größe des [Draft-Musters](/Draft_Pattern "Draft Pattern") fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Draft-Ellipse wird die Methode `make_ellipse` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeEllipse`.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Erstellt ein `ellipse`-Objekt mit gegebenem `majradius` (Hauptradius) und `minradius` (Nebenradius) in Millimetern.
  + Der größere Wert wird für den Hauptradius (X-Achse) verwendet, wenn keine andere Positionierung angegeben ist.
* Ist `placement` auf `None` gesetzt, wird die Ellipse im Ursprung erstellt.
* Ist `Fläche` auf `True` gesetzt, erhält die Ellipse eine Fläche, d.h. sie wird gefüllt erscheinen.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/de&oldid=1556694>"