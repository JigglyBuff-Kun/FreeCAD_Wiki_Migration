---
title: Draft Bogen 3Punkte
---
|  |
| --- |
| Draft Bogen 3Punkte |
| Menüeintrag |
| Zeichnen → Bogenwerkzeuge → Bogen durch 3 Punkte 2D-Entwurf → Bogen durch 3 Punkte |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| A T |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft Bogen](/Draft_Arc/de "Draft Arc/de"), [Draft Kreis](/Draft_Circle/de "Draft Circle/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Arc_3Points.svg) **Draft Bogen 3Punkte** erstellt einen Kreisbogen auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") durch Eingabe von drei Punkten, die auf dem Umfang liegen; aus diesen drei Punkten werden Mittelpunkt und Radius bestimmt.

Ein Draft-Bogen ist eigentlich ein [Draft-Kreis](/Draft_Circle/de "Draft Circle/de") mit einer Daten-Eigenschaft**First Angle** die nicht identisch ist mir der Daten-Eigenschaft**Last Angle**.

![](/images/Draft_Arc_3Points_example.png)

Ein durch drei auf dem Umfang liegende Punkte festgelegter Bogen

## Anwendung

Siehe auch: [Draft-Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft-Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Arc_3Points.svg) Bogen aus 3 Punkten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → Bogenwerkzeuge → ![](/images/Draft_Arc_3Points.svg) Bogen durch 3 Punkte** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Arc_3Points.svg) Bogen durch 3 Punkte** auswählen.
   * Das Tastaturkürzel A dann T.
2. Der Aufgaben-Bereich **Bogen aus 3 Punkten** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
4. Den zweiten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Den dritten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben der Koordinaten des Mittelpunktes werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam den Mauszeiger aus der [3D-Ansicht](/3D_view "3D view") heraus zu bewegen, bevor die Koordinaten eingegeben werden.
* R drücken oder die Checkbox **Relative** aktivieren, um den Relativ-Modus umzuschalten. Wenn der Relativ-Modus aktiviert ist, beziehen sich Koordinaten auf den zuletzt eingegebenen Punkt, falls vorhanden, andernfalls auf den Ursprung des Koordinatensystems.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* N drücken oder die Checkbox **Continue** aktivieren, um den Fortsetzen-Modus umzuschalten. Wenn der Fortsetzen-Modus aktiviert ist, wird der Befehl nach dem Beenden erneut gestartet, und ermöglicht so mit dem Erstellen von Bögen fortzufahren.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Ein Draft-Bogen kann mit dem Befehl [Draft-Bearbeiten](/Draft_Edit/de "Draft Edit/de") geändert werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Wenn die Option **Bearbeiten → Einstellungen... → Draft → Allgemein → Create Part primitives if possible** aktiviert ist, erstellt der Befehl ein nicht editierbares [Part-Formelement](/Part_Feature/de "Part Feature/de") anstelle eines Draft-Kreises.

## Eigenschaften

Siehe [Draft Kreis](/Draft_Circle/de#Eigenschaften "Draft Circle/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft-Bogens durch 3 Punkte wird die Methode `make_arc_3points` des Draft-Moduls verwendet:

```
arc = make_arc_3points(points, placement=None, face=False, support=None, map_mode="Deactivated", primitive=False)

```

* Erstellt ein `arc`-Objekt aus der gegebenen `points`-Liste.
* Ist ein `placement` angegeben, wird der Mittelpunkt eines Kreisbogens auf diese Position verschoben. Siehe [Positionierung](/Placement/de "Placement/de") für weitere Informationen.
* Ist `face` auf `True` gesetzt, wird aus dem Kreisbogen eine Fläche erstellt, d.h. er wird gefüllt dargestellt.
* Ist ein `support` angegeben, handelt es sich um eine `LinkSubList`, d.h. eine Liste, die ein Objekt und ein Unterelement dieses Objekts enthält. Dies wird verwendet, um das Objekt auf diesen Support zu referenzieren.

:   Zum Beispiel: `support=[(obj, ("Face1"))]`.

* Ist ein `map_mode` angegeben, handelt es sich um eine Zeichenkette, die die Art der Zuordnung festlegen, z.B.: `map_mode='FlatFace'`, `map_mode='ThreePointsPlane'`, usw. Siehe [Part-Befestigen](/Part_EditAttachment/de "Part EditAttachment/de") für weitere Informationen.
* Ist `primitive` auf `True` gesetzt, wird der Bogen als einfaches [Part-Formelement](/Part_Feature/de "Part Feature/de") erstellt, nicht als komplexes Draft-Objekt.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

points = [App.Vector(0, 0, 0),
          App.Vector(5, 10, 0),
          App.Vector(10, 0, 0)]

arc = Draft.make_arc_3points(points)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc_3Points/de&oldid=1513914>"