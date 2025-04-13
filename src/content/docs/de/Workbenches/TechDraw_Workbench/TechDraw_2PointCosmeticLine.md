---
title: TechDraw 2PunkteHilfslinie
---

|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw 2PunkteHilfslinie                                                                                                                                                         |
| Menüeintrag                                                                                                                                                                        |
| TechDraw → Linien hinzufügen →Hilfslinie durch 2 Punkte hinzufügen                                                                                                                 |
| Arbeitsbereich                                                                                                                                                                     |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                         |
| Standardtastenkürzel                                                                                                                                                               |
| _Keiner_                                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                                              |
| 0.19                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                         |
| [TechDraw FlächenMittellinie](/TechDraw_FaceCenterLine/de "TechDraw FaceCenterLine/de"), [TechDraw 2LinienMittellinie](/TechDraw_2LineCenterLine/de "TechDraw 2LineCenterLine/de") |
|                                                                                                                                                                                    |

## Beschreibung

Das Werkzeug **TechDraw 2PunkteHilfslinie** fügt eine Hilfslinie zwischen zwei Punkten hinzu. Die Punkte können 2D oder 3D sein. Die resultierende Linie kann zum Bemaßen verwendet werden.

![](/src/assets/images/CosLine2PointsSample.png)

Hilfslinie zwischen zwei Punkten

## Anwendung, Erstellen

1. Zwei Punkte in einer TechDraw-Ansicht oder zweiPunkte in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Wenn die Punkte in der 3D-Ansicht ausgewählt wurden: Die korrekte TechDraw-Ansicht zur Auswahl hinzufügen, indem sie in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wird.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_2PointCosmeticLine.svg) Hilfslinie durch 2 Punkte hinzufügen drücken.
   - Den Menüeintrag **TechDraw → Linien hinzufügen → ![](/src/assets/images/TechDraw_2PointCosmeticLine.svg) Hilfslinie durch 2 Punkte hinzufügen** auswählen.
4. Ein Aufgaben-Bereich wird geöffnet.
5. Wahlweise die Koordinaten der Punkte anpassen.
6. Die Schaltfläche OK drücken.
7. Eine Hilfslinie, die die beiden Punkte verbindet, wird hinzugefügt. Im Falle von 3D-Punkten verbindet die Linie die Projektionen der Punkte.

## Anwendung, Bearbeiten

Zum Ändern der Endpunkte einer Hilfslinie:

1. Die Hilfslinie auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_2PointCosmeticLine.svg) Hilfslinie durch 2 Punkte hinzufügen drücken.
   - Den Menüeintrag **TechDraw → Linien hinzufügen → ![](/src/assets/images/TechDraw_2PointCosmeticLine.svg) Hilfslinie durch 2 Punkte hinzufügen** auswählen.
3. Ein Aufgaben-Bereich wird geöffnet.
4. Die Koordinaten der Punkte anpassen.
5. Die Schaltfläche OK drücken.

## Hinweise

- Um eine Hilfslinie zu löschen, wird sie ausgewählt und die Entf-Taste gedrückt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Um die Darstellung einer Hilfslinie anzupassen, wird ![](/src/assets/images/TechDraw_DecorateLine.svg) [TechDraw LiniendarstellungÄndern](/TechDraw_DecorateLine/de "TechDraw DecorateLine/de") verwendet.

## Eigenschaften

Hilfslinien haben keine eigenen Eigenschaften, da sie keine Dokumentobjekte sind.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Hilfslinien können mit den Methoden `makeCosmeticLine(v1, v2)` oder `makeCosmeticLine3d(v1, v2)` von DrawViewPart erstellt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_2PointCosmeticLine/de&oldid=1500036>"
