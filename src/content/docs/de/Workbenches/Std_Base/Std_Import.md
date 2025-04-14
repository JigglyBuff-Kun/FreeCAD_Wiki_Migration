---
title: Import
---

|                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std Import                                                                                                                                                                                   |
| Menüeintrag                                                                                                                                                                                  |
| Datei → Importieren...                                                                                                                                                                       |
| Arbeitsbereich                                                                                                                                                                               |
| Alle                                                                                                                                                                                         |
| Standardtastenkürzel                                                                                                                                                                         |
| Strg + Shift + I                                                                                                                                                                             |
| Eingeführt in Version                                                                                                                                                                        |
| -                                                                                                                                                                                            |
| Siehe auch                                                                                                                                                                                   |
| [Std Öffnen](/Std_Open/de "Std Open/de"), [Import Export](/Import_Export/de "Import Export/de"), [Import Export Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de") |
|                                                                                                                                                                                              |

## Beschreibung

Der Befehl **Std Import** importiert Geometrie aus einem anderen Dateiformat in das aktive Dokument. Es werden viele Dateiformate unterstützt und für einige Formate gibt es mehrere Importoptionen. Siehe [Import Export](/Import_Export/de "Import Export/de") für weitere Informationen.

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Wird ein Bildformat ausgewählt, erstellt der Befehl eine [Bildebene](#Bildebene).

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Den Menüeintrag **Datei → ![](/images/Std_Import.svg) Importieren...** auswählen.
   - Das Tastaturkürzel: Ctrl+I. 1.0 und davor
   - Das Tastaturkürzel: Ctrl + Shift + I. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
2. Wahlweise das richtige Dateiformat im Dialogfeld auswählen.
3. Eine Datei auswählen.
4. Die Schaltfläche Öffnen drücken.

## Optionen

- Drücke Esc oder die Taste Cancel, um den Befehl abzubrechen.

## Hinweise

- Um ein importiertes [Polygonnetz Objekt](/Mesh_Workbench/de "Mesh Workbench/de") in einen Festkörper zu konvertieren, siehe das [Importieren aus STL oder OBJ](/Import_from_STL_or_OBJ/de "Import from STL or OBJ/de") Tutoriuml.
- Zum Importieren in ein neues Dokument kannst du den Befehl [Std Öffnen](/Std_Open/de "Std Open/de") verwenden.
- Einige Arbeitsbereiche haben zusätzliche Importbefehle. Siehe: [Import Export](/Import_Export/de "Import Export/de").

## Einstellungen

Siehe [Import-Export-Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de").

## Bildebene

Eine Bildebene ist die planare Darstellung eine Bildes in der [3D-Ansicht](/3D_view/de "3D view/de"). Sie kann z.B. bei der Erstellung eines Modells verwendet werden, das auf Fotos eines existierenden Objekts basiert.

Standardmäßig wird die Bildebene auf der globalen XY-Ebene angelegt. Die Ausgangsgröße einer Bildebene wird mit einer Auflösung von 96 Pixel/Zoll berechnet.

### Bearbeiten

1. Zum bearbeiten einer Bildebene gibt es folgende Möglichkeiten:
   - Ein Doppelklick auf die Bildebene In der [Baumansicht](/Tree_view/de "Tree view/de").
   - Ein Rechtsklick auf die Bildebene in der Baumansicht und die Menüoption **![](/images/Image-scaling.svg) Bild ändern...** im Kontextmenü auswählen.
2. Ist die Bildebene nicht parallel zu einer der XY-, XZ- oder YZ-Ebenen des globalen Koordinatensystems, wird sie parallel zur XY-Ebene ausgerichtet.
3. Der Aufgaben-Bereich **Bildebenen-Einstellungen** wird geöffnet.
4. Wahlweise die **XY-Ebene**, **XZ-Ebene** oder **YZ-Ebene** des globalen Koordinatensystems auswählen.
5. **Richtung umkehren** aktivieren, um die Bildebene um 180° zu drehen. Die Drehachse hängt von der ausgewählten Ebene ab. Für die XY-Ebene ist es die globale X-Achse. Für die XZ- und YZ-Ebene ist es die globale Z-Achse.
6. **Offset**, **X-Abstand** und **Y-Abstand** liegen relativ zum Koordinatensystem der Bildebene. Ein geringer negativer Abstand kann nützlich sein, wenn das Bild mit einer [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") oder [Draft](/Draft_Workbench/de "Draft Workbench/de")-Geometrie nachgezeichnet wird.
7. Wahlweise die Transparenz (**Transparency**) ändern.
8. **Bildgröße** einstellen:
   - Skalieren durch numerische Eingabe:
     1. Wahlweise **Seitenverhältnis beibehalten** deaktivieren für uneinheitliche Skalierung.
     2. Eine **Breite** und/oder eine **Höhe** eingeben.
   - Skalieren durch Anklicken von Punkten:
     1. Die Schaltfläche Kalibrieren drücken.
     2. Zwei Punkte innerhalb des Bildes anklicken.
     3. Eine Maßlinie wird angezeigt.
     4. Die gewünschte Länge eingeben.
     5. Enter oder die Schaltfläche Übernehmen drücken.
9. Die Schaltfläche OK drücken, um die Änderunge zu bestätigen und den Aufgaben-Bereich zu schließen.

### Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Bildebene (Image-Plane-Objekt) wird von einem [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

#### Daten

Image Plane

- Daten-Eigenschaft**Image File** (`FileIncluded`): Die Bilddatei, die für die Bildebene verwendet wird. Diese Datei wird in der .FCStd-Datei gespeichert.
- Daten-Eigenschaft**XSize** (`Length`): Die Breite der Bildebene.
- Daten-Eigenschaft**YSize** (`Length`): Die Höhe der Bildebene.

#### Ansicht

Object Style

- Ansicht-Eigenschaft**Lighting** (`Enumeration`): Gibt an, wie die Bildebene in der [3D-Ansicht](/3D_view/de "3D view/de") beleuchtet wird. Kann `Two side` oder `One side` sein.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Import/de&oldid=1507256>"
