---
title: Draft Bearbeiten
---
|  |
| --- |
| Draft Bearbeiten |
| Menüeintrag |
| Modification → Bearbeiten |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| D E |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Std Bearbeiten](/Std_Edit/de "Std Edit/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Edit.svg) **Bearbeiten** versetzt ausgewählte Objekte in den Draft-Modus Bearbeiten. In diesem Modus können die Eigenschaften von Objekten grafisch bearbeitet werden. Typischerweise können Knoten verschoben werden und in einigen Fällen können Optionen im Kontextmenü ausgewählt werden. Der Befehl kann die meisten Draft-Objekte, aber auch einige andere Objekte bearbeiten. Siehe [Unterstützte Objekte](#Unterstützte_Objekte). Unterstützte Draft-Objekte können auch mit dem Befehl [Std Berabeiten](/Std_Edit/de "Std Edit/de") in den Draft-Modus Bearbeiten versetzt werden.

![](/images/Draft_Edit_example.png)

4 Objekte im Draft-Modus Bearbeiten: ein Draft-Draht (rot), ein Draft-Bogen (schwarz), ein Draft-BSpline (grün) und ein Draft-BezKurve (magenta)

## Anwendung

Siehe auch: [Draft Fangen](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise ein oder mehrere Objekte auswählen. Es ist zu beachte, dass sich zwar mehrere Objekte im Draft-Modus Bearbeiten befinden können, aber immer nur ein Objekt zu Zeit bearbeitet werden kann.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Wenn noch kein Objekt ausgewählt wurde: Ein Doppelklick auf ein Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"). Dies funktioniert nur bei unterstützten Draft-Objekten.
   * Die Schaltfläche ![](/images/Draft_Edit.svg) Bearbeiten drücken.
   * Den Menüeintrag **Änderung → ![](/images/Draft_Edit.svg) Bearbeiten** auswählen.
   * Das Tastaturkürzel: D und dann E.
   * Für ein einzelnes Objekt: Den Eintrag **Edit** im MKontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") auswählen. Dies funktioniert nur mit unterstützten Draft-Objekten. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
3. Wenn noch kein Objekt ausgewählt wurde: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Die ausgewählten Objekte werden mit temporären Knoten markiert, und der [Haupt-Aufgabenbereich](#Haupt_Aufgabenfeld) wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
5. Wahlweise das Kontextmenü eines Knotens oder einer Kante verwenden. Diese Kontextmenüs sind nur für einige Draft-Objekte verfügbar. Weitere Informationen finden sich unter [Unterstützte Objekte](#Unterstützte_Objekte).
   * Einen der folgenden Schritte ausführen:
     + Auf allen Betriebssystemen: E gedrückt halten und auf den Knoten oder die Kante klicken. Um E zu verwenden, muss man eventuell einmal in die [3D-Ansicht](/3D_view/de "3D view/de") klicken, um sicherzustellen, dass diese den Fokus hat.
     + Unter Windows: Alt gedrückt halten und auf den Knoten oder die Kante klicken.
     + Unter Linux: Shift+Alt, Strg+Alt oder Alt gedrückt halten und auf den Knoten oder die Kante klicken.
     + Unter macOS: Option gedrückt halten und auf den Knoten oder die Kante klicken.
   * Einen Eintrag im Kontextmenü auswählen.
   * Wenn die ausgewählte Option eine Punkteingabe erfordert:
     + Der [Aufgabenbereich Knoten bearbeiten](#Knoten_Aufgabenpaneel) wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
     + Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") anwählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
6. Wahlweise einen Knoten verschieben:
   * Den Knoten in der [3D-Ansicht](/3D_view/de "3D view/de") anklicken.
   * Der [Aufgabenbereich Knoten bearbeiten](#Knoten_Aufgabenpaneel) wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
   * Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") anwählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
   * Das Ergebnis hängt vom Objekt und dem ausgewählten Knoten ab.
   * Esc oder die Schaltfläche Schließen drücken, um den Befehl zu beenden.

## Optionen

Die im Aufgaben-Bereich verfügbaren Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastenkürzel sind die Standardtastenkürzel.

### Haupt-Aufgabenbereich

* Esc oder die Schaltfläche Schließen drücken, um den Befehl zu beenden.

### Aufgabenbereich Knoten bearbeiten

* Um die Koordinaten manuell einzugeben, werden die X-, Y- und Z-Komponente eingegeben und jedesmal mit Enter bestätigt. Oder die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken, wenn die gewünschten Werte angezeigt werden. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
* Um Polarkoordinaten zu verwenden, werden die Werte für **Länge** und **Winkel** eingegeben und jeweils mit Enter bestätigt.
* Das Kontrollkästchen **Winkel** aktivieren, um den Zeiger auf den angegebenen Winkel festzulegen.
* R drücken oder auf das Kontrollkästchen **Relativ** klicken, um den Relativ-Modus zu aktivieren. Wenn der Relativ-Modus eingeschaltet ist, beziehen sich die Koordinaten des ausgewählten Punktes auf den originalen Punkt, andernfalls auf den Ursprung des Koordinatensystems. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* G drücken oder auf das Kontrollkästchen **Global** klicken, um den Global-Modus zu aktivieren. Wenn der Global-Modus eingeschaltet ist, beziehen sich die Koordinaten auf das globale Koordinatensystem, andernfalls auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* S drücken, um [Draft Fangen](/Draft_Snap/de "Draft Snap/de") ein- oder auszuschalten.

## Unterstützte Objekte

### [Draft Linie](/Draft_Line/de "Draft Line/de") und [Draft Draht](/Draft_Wire/de "Draft Wire/de")

* Wenn Anfangs- oder Endknoten einer offenen Polylinie so verschoben werden, dass sie zusammenfallen, wird die Polylinie geschlossen.
* Kontextmenü des Knotens: `Punkt löschen`. Es müssen mindestens zwei Punkte verbleiben.
* Kontextmenü der Kante: `Punkt hinzufügen`, `Polylinie öffnen`/`Polylinie schließen` ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) und `Polylinie umkehren`.

### [Draft Bogen](/Draft_Arc/de "Draft Arc/de") und [Draft BogenDurch3Punkte](/Draft_Arc_3Points/de "Draft Arc 3Points/de")

* Kontextmenü des Mittelpunkts: `Bogen verschieben`.
* Kontextmenü des Anfangsknotens: `Startwinkel setzen`.
* Kontextmenü des Endknotens: `Endwinkel setzen`.
* Kontextmenü des mittleren Knotens: `Radius setzen`.
* Kontextmenü der Kante: `Bogen umkehren`.

### [Draft Kreis](/Draft_Circle/de "Draft Circle/de")

* Keine Kontextmenüs für dieses Objekt.

### [Draft Ellipse](/Draft_Ellipse/de "Draft Ellipse/de")

* Keine Kontextmenüs für dieses Objekt.

### [Draft Rechteck](/Draft_Rectangle/de "Draft Rectangle/de")

* Keine Kontextmenüs für dieses Objekt.

### [Draft Polygon](/Draft_Polygon/de "Draft Polygon/de")

* Keine Kontextmenüs für dieses Objekt.

### [Draft BSpline](/Draft_BSpline/de "Draft BSpline/de")

* Wenn der Anfangs- oder Endknoten eines offenen Splines so verschoben wird, dass sie zusammenfallen, wird der Spline geschlossen.
* Kontextmenü des Knotens: `Punkt löschen`. Für einen offenen Spline müssen mindestens zwei Punkte übrig bleiben. Bei einem geschlossenen Spline sind es mindestens drei Punkte.
* Kontextmenü der Kante: `Punkt hinzufügen`., `Polylinie öffnen`/`Polylinie schließen` ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) und `Spline umkehren` ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")).

### [Draft KubischeBezKurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de") und [Draft BezKurve](/Draft_BezCurve/de "Draft BezCurve/de")

* Wenn der Anfangs- oder Endknoten einer offenen Kurve so verschoben wird, dass sie zusammenfallen, wird die Kurve geschlossen.
* Kontextmenü des Knotens: `Punkt löschen`, `Scharf machen`, `Tangente machen` und `Symmetrisch machen`.
* Kontextmenü der Kante: `Punkt hinzufügen`, `Polylinie öffnen`/`Polylinie schließen` ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) and `Kurve umkehren` ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")).

### [Draft Bemaßen](/Draft_Dimension/de "Draft Dimension/de")

* Winkelmaße können nicht bearbeitet werden.
* Die Anfangs- und Endknoten von parametrischen Bemaßungen können nicht verschoben werden.
* Keine Kontextmenüs für dieses Objekt.

### [Arch Wand](/Arch_Wall/es "Arch Wall/es")

* Ein einzelner Knoten zur Steuerung der Höhe der Wand wird über der Daten-Eigenschaft**Placement** der Wand angezeigt.
* Keine Kontextmenüs für dieses Objekt.

### [Arch Struktur](/Arch_Structure/de "Arch Structure/de")

* Keine Kontextmenüs für dieses Objekt.

### [Arch Fenster](/Arch_Window/de "Arch Window/de")

* Keine Kontextmenüs für dieses Objekt.

### [Arch Raum](/Arch_Space/de "Arch Space/de")

* Keine Kontextmenüs für dieses Objekt.

### [Arch Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de")

* Keine Kontextmenüs für dieses Objekt.

### [Arch Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de")

* Keine Kontextmenüs für dieses Objekt.

### [Part Würfel](/Part_Box/de "Part Box/de")

* Keine Kontextmenüs für dieses Objekt.

### [Part Zylinder](/Part_Cylinder/de "Part Cylinder/de")

* Keine Kontextmenüs für dieses Objekt.

### [Part Kugel](/Part_Sphere/de "Part Sphere/de")

* Keine Kontextmenüs für dieses Objekt.

### [Part Kegel](/Part_Cone/de "Part Cone/de")

* Keine Kontextmenüs für dieses Objekt.

### [Part Linie](/Part_Line/de "Part Line/de")

* Keine Kontextmenüs für dieses Objekt.

### [Sketcher Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de")

* Nur Skizzen, die eine einzelne unbestimmte Linie enthalten, können bearbeitet werden.
* Keine Kontextmenüs für dieses Objekt.

## Einstellungen

Siehe auch: [Einstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Die Farbe der temporären Knoten ist dieselbe wie die Farbe der Einrastsymbole. Diese Farbe kann in den Voreinstellungen geändert werden: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten → Snap symbol color**. Beachte, dass diese Farbe nicht für die temporären Knoten verwendet wird, die für [Draft BezKurven](/Draft_BezCurve/de "Draft BezCurve/de") angezeigt werden. Diese Knoten verwenden stattdessen die Ansicht-Eigenschaft**Linienfarbe** der Kurve.
* Die größe der Knoten hängt von der Voreinstellung unter **Bearbeiten → Einstellungen... → Anzeige → 3D-Viewer → Markergröße** ab. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Es gibt keine Python-Methode, um Draft Bearbeiten auf Objekte anzuwenden. Um die Ergebnisse des Befehls zu emulieren, müssen die geometrische Eigenschaften der Objekte geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Edit/de&oldid=1513864>"