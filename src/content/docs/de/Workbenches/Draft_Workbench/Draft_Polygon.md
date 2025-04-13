---
title: Draft Vieleck
---
|  |
| --- |
| Draft Vieleck |
| Menüeintrag |
| Zeichnen → Vieleck 2D-Entwurf → Vieleck |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| P G |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Polygon.svg) **Draft Vieleck** erstellt ein regelmäßiges Vieleck (Polygon) auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") aus einem Mittelpunkt und einem Radius. Der Radius kann durch Indizieren eines Punktes festgelegt werden.

Ein Draft-Vieleck kann mit der Daten-Eigenschaft**Draw Mode** von inscribed (mit Umkreis) auf circumscribed (mit Inkreis) umgeschaltet werden. Die Ecken eines Draft-Vielecks können mit Rundung (Fillet) oder Fase (Chamfer) versehen werden, indem seine Daten-Eigenschaft**Fillet Radius** oder Daten-Eigenschaft**Chamfer Size** geändert werden.

![](/images/Draft_polygon_example.jpg)

Ein durch zwei Punkte, den Mittelpunkt und den Radius, festgelegtes regelmäßiges Vieleck

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Polygon.svg) Vieleck drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen→ ![](/images/Draft_Polygon.svg) Vieleck** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Polygon.svg) Vieleck**
   * Das Tastaturkürzel P dann G.
2. Der Aufgabenbereich **Polygon** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Die gewünschte Anzahl von Seiten (**Sides**) eingeben.
4. Den ersten Punkt, den Mittelpunkt des Vielecks, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder Die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Den zweiten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder einen **Radius** eingeben.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* F drücken oder die Checkbox **Füllen**1.0 und davor bzw. **Fläche erstellen**[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") anklicken, um den Modus Fläche erstellen umzuschalten. Bei eingeschaltetem Modus Fläche erstellen wird die Daten-Eigenschaft**Make Face** (Fläche erstellen) des erstellten Kantenzuges (Wire) auf `true` gesetzt und eine Fläche erstellt.
* N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet und ermöglicht so mit dem Erstellen von Vielecken fortzufahren.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Ein Draft-Vieleck kann mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Ist die Option **Bearbeiten → Einstellungen... → Draft → Allgemein → Part-Grundkörper erstellen, wenn möglich** aktiviert, wird ein [Part-Regelmäßiges-Polygon](/Part_Circle/de "Part Circle/de") anstelle eines Draft-Vielecks erstellt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Vieleck (Polygon-Objekt) wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Area** (`Area`): (nur Lesezugriff) gibt den Flächeninhalt der Fläche des Vielecks an. Der Wert ist `0.0`, wenn die Daten-Eigenschaft**Make Face** `false` ist.
* Daten-Eigenschaft**Chamfer Size** (`Length`): gibt die Länge der Fasen an den Ecken des Vielecks an.
* Daten-Eigenschaft**Draw Mode** (`Enumeration`): gibt an, ob das Vieleck einen Umkreis einbeschrieben ist (`inscribed`) oder ob ein Inkreis von ihm umschrieben wird (`circumscribed`).
* Daten-Eigenschaft**Faces Number** (`Integer`): gibt die Anzahl der Seiten des Vielecks an.
* Daten-Eigenschaft**Fillet Radius** (`Length`): gibt den Radius der Verrundungen an den Ecken des Vielecks an.
* Daten-Eigenschaft**Make Face** (`Bool`): gibt an, ob das Vieleck eine Fläche erzeugt oder nicht. Wenn `true`, wird eine Fläche erstellt, andernfalls wird nur der Umriss als Teil des Objekts betrachtet.
* Daten-Eigenschaft**Radius** (`Length`): gibt den Radius des Kreises an, der das Vieleck definiert.

### Ansicht

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): Legt das [Draft-Muster](/Draft_Pattern/de "Draft Pattern/de") fest, mit dem die Fläche des Vielecks gefüllt wird. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Make Face** auf `true` und die Ansicht-Eigenschaft**Display Mode** auf `Flat Lines` gesetzt ist.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): Legt die Größe des [Draft-Musters](/Draft_Pattern/de "Draft Pattern/de") fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein Draft-Vieleck zu erstellen, wird die Methode `make_polygon` ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")) des Draft-Moduls verwendet. Diese Methode ersetzt die veraltete Methode `makePolygon`.

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Erzeugt ein `polygon`-Objekt mit der angegebenen Anzahl von Flächen (`nfaces`) und basierend auf einem Kreis mit einem `radius` in Millimetern.
* Ist `inscribed` `True`, wird das Vieleck in einem Umkreis einbeschrieben, andernfalls umschreibt es einen Inkreis.
* Wenn `placement` `None` ist, wird das Vieleck im Ursprung erstellt und einer seiner Eckpunkte liegt auf der X-Achse.
* Wenn `face` `True` ist, bildet das Vieleck eine Fläche, d. h. es wird ausgefüllt.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/de&oldid=1556696>"