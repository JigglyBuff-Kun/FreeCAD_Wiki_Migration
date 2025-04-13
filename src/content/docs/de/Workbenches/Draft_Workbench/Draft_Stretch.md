---
title: Draft Strecken
---
|  |
| --- |
| Draft Strecken |
| Menüeintrag |
| Änderung → Strecken Bearbeiten → Strecken |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S H |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Stretch.svg) **Draft Strecken** dehnt Objekte, indem es ausgewählte Punkte bewegt.

![](/images/Draft_Stretch_Example.jpg)

Strecken von drei Draft-Drähten

## Anwendung

Siehe auch: [Draft Fangen](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise einen oder mehrere Objekte auswählen. Die objekte müssen [Draft Linien](/Draft_Line/de "Draft Line/de"), [Draft Linienzüge](/Draft_Wire/de "Draft Wire/de") (Polylinien), [Draft Rechtecke](/Draft_Rectangle/de "Draft Rectangle/de"), [Draft B-Splines](/Draft_BSpline/de "Draft BSpline/de") oder [Draft Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de") sein. Andere Objekte werden ignoriert.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Stretch.svg) Strecken drücken.
   * [Draft](/Draft_Workbench "Draft Workbench"): Den Menüeintrag **Änderung → ![](/images/Draft_Stretch.svg) Strecken** auswählen.
   * [BIM](/BIM_Workbench "BIM Workbench"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Stretch.svg) Strecken** auswählen.
   * Das Tastaturkürzel S dann H.
3. Wurde noch kein Objekt ausgewählt: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Der Aufgaben-Bereich **Strecken** wird geöffnet. Siehe [Optionen](#Optionen) Für weitere Informationen.
5. Den ersten Punkt, eine Ecke eines rechteckigen Auswahlbereichs, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
6. Den zweiten Punkt, die gegenüberliegende Ecke des Auswahlbereichs, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
7. Die Punkte des ausgewählten Objekts, die innerhalb des Auswahlbereiches liegen, werden markiert.
8. Den dritten Punkt, den Basispunkt, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
9. Den vierten Punkt, den Zielpunkt, in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.

## Optionen

Die im Aufgaben-Bereich verfügbaren Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastenkürzel sind die Standardtastenkürzel.

* Zum manuellen Eingeben der Koordinaten werden die X-, Y- und Z-Komponenten eingegeben und jeweils anschließend Enter gedrückt oder es wird die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben gedrückt, sobald die gewünschten Werte erreicht sind. Es ist ratsam, den Mauszeiger aus dem [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* R drücken oder die Checkbox **Relativ** aktivieren, um den Relativ-Modus umzuschalten. Ist der Relativ-Modus eingeschaltet, werden die Koordinaten des zweiten Punktes des Versatzes relativ zum ersten Punkt angegeben, andernfalls zum Ursprung des Koordinatensystems.
* G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus eingeschaltet, werden Koordinaten relativ zum globalen Koordinatensystem angegeben, andernfalls zum Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc drücken oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Es gibt keine Python-Methode, um Objekte zu strecken. Um die Ergebnisse des Befehls Draft Strecken zu emulieren, müssen die geometrische Eigenschaften der Objekte geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Stretch/de&oldid=1513892>"