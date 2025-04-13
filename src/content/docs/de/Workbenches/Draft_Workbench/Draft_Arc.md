---
title: Draft Bogen
---
|  |
| --- |
| Draft Bogen |
| Menüeintrag |
| Zeichnen → Bogenwerkzeuge → Kreisbogen 2D-Entwurf → Kreisbogen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| A R |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft Bogen 3Punkte](/Draft_Arc_3Points/de "Draft Arc 3Points/de"), [Draft Kreis](/Draft_Circle/de "Draft Circle/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Arc.svg) **Draft Bogen** erstellt einen Kreisbogen auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") aus Mittelpunkt, Radius, Anfangswinkel und Öffnungswinkel. Der Radius und die Winkel können durch Indizieren der Punkte festgelegt werden.

Ein Draft-Bogen ist eigentlich ein [Draft-Kreis](/Draft_Circle/de "Draft Circle/de") mit einer Daten-Eigenschaft**First Angle** die nicht identisch ist mir der Daten-Eigenschaft**Last Angle**.

![](/images/Draft_Arc_example.jpg)

Ein durch vier Punkte festgelegter Bogen aus Mittelpunkt, Radius, Startpunkt und letztem Punkt des Bogens

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
2. Die Schaltfläche ![](/images/Draft_Arc.svg) Kreisbogen drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → Bogenwerkzeuge → ![](/images/Draft_Arc.svg) Kreisbogen** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Arc.svg) Kreisbogen** auswählen.
   * Das Tastaturkürzel A dann R.
3. Der Aufgaben-Bereich **Kreisbogen** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
4. Den ersten Punkt, den Mittelpunkt des Kreisbogens, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Den zweiten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder den **Radius** eingeben.
6. Den dritten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder den **Startwinkel** eingeben.
7. Den vierten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder den **Öffnungswinkel** eingeben.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben der Koordinaten des Mittelpunktes werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam den Mauszeiger aus der [3D-Ansicht](/3D_view "3D view") heraus zu bewegen, bevor die Koordinaten eingegeben werden.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* N drücken oder die Checkbox **Continue** aktivieren, um den Fortsetzen-Modus umzuschalten. Wenn der Fortsetzen-Modus aktiviert ist, wird der Befehl nach dem Beenden erneut gestartet, und ermöglicht so mit dem Erstellen von Bögen fortzufahren.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Ein Draft-Bogen kann mit dem Befehl [Draft-Bearbeiten](/Draft_Edit/de "Draft Edit/de") geändert werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Wenn die Option **Bearbeiten → Einstellungen... → Draft → Allgemein → Create Part primitives if possible** aktiviert ist, wird ein [Part-Kreis](/Part_Circle/de "Part Circle/de") anstelle eines Draft-Kreises erstellt.

## Eigenschaften

Siehe [Draft-Kreis](/Draft_Circle/de#Eigenschaften "Draft Circle/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft-Bogens wird die Methode `make_circle` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeCircle`.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/de&oldid=1513918>"