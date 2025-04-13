---
title: TechDraw Hilfskreis
---

|                                                                                                |
| ---------------------------------------------------------------------------------------------- |
| TechDraw Hilfskreis                                                                            |
| Menüeintrag                                                                                    |
| TechDraw → Linien hinzufügen → Hilfskreis hinzufügen                                           |
| Arbeitsbereich                                                                                 |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                     |
| Standardtastenkürzel                                                                           |
| _Keiner_                                                                                       |
| Eingeführt in Version                                                                          |
| 1.0                                                                                            |
| Siehe auch                                                                                     |
| [TechDraw 2PunkteHilfslinie](/TechDraw_2PointCosmeticLine/de "TechDraw 2PointCosmeticLine/de") |
|                                                                                                |

## Beschreibung

Das Werkzeug **TechDraw Hilfskreis** fügt an einem ausgewählten Mittelpunkt einen Hilfskreis hinzu. Es kann ein 2D- oder 3D-Punkt sein.

![](/src/assets/images/CosmeticCircleSample.png)

Hilfskreis

## Anwendung, Erstellen

1. Einen Punkt in einer TechDraw-Ansicht oder in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Wurde ein Punkt in der 3D-Ansicht ausgewählt: Die korrekte TechDraw-Ansicht zur Auswahl hinzufügen, indem sie in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wird.
3. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_CosmeticCircle.svg) [Hilfkreis hinzufügen](/TechDraw_CosmeticCircle "TechDraw CosmeticCircle") drücken.
   - Den Menüeintrag **TechDraw → Linien hinzufügen → ![](/src/assets/images/TechDraw_CosmeticCircle.svg) Hilfskreis hinzufügen** auswählen.
4. Der Aufgaben-Bereich wird geöffnet.
5. Wahlweise die Koordinaten des Mittelpunktes, den Radius sowie Start- und Endwinkel des Kreises anpassen.
6. Die Schaltfläche OK drücken.
7. Ein Hilfskreis wird hinzugefügt. Im Falle eines 3D-Mittelpunktes wird der Kreis auf der Projektion des Punktes plaziert.

## Anwendung, Bearbeiten

Zum Ändern der Attribute eines Hilfskreises:

1. Den Hilfskreis auswählen..
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_CosmeticCircle.svg) [Hilfkreis hinzufügen](/TechDraw_CosmeticCircle "TechDraw CosmeticCircle") drücken.
   - Den Menüeintrag **TechDraw → Linien hinzufügen → ![](/src/assets/images/TechDraw_CosmeticCircle.svg) Hilfskreis hinzufügen** auswählen.
3. Der Aufgaben-Bereich wird geöffnet.
4. Die Koordinaten des Mittelpunktes, den Radius sowie Start- und Endwinkel des Kreises anpassen.
5. Die Schaltfläche OK drücken.

## Hinweise

- Um einen Hilfskreis zu löschen, wird er ausgewählt und die Entf-Taste gedrückt. [eingeführt in 0.22](/Release_notes_0.22/de "Release notes 0.22/de")
- Um die Darstellung eines Hilfskreises anzupassen, wird ![](/src/assets/images/TechDraw_DecorateLine.svg) [TechDraw LiniendarstellungÄndern](/TechDraw_DecorateLine/de "TechDraw DecorateLine/de") verwendet.

## Eigenschaften

Hilfskreise haben keine eigenen Eigenschaften, da sie keine Dokumentobjekte sind.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Hilfskreise können mit der Methode `makeCosmeticCircle(center, radius, start angle, end angle)` von DrawViewPart erstellt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticCircle/de&oldid=1500114>"
