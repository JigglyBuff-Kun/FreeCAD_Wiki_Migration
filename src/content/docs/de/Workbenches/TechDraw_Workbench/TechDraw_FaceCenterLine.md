---
title: TechDraw FlächenMittellinie
---

|                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw FlächenMittellinie                                                                                                                                                            |
| Menüeintrag                                                                                                                                                                            |
| TechDraw → Linien hinzufügen → Mittellinie zu Fläche(n) hinzufügen                                                                                                                     |
| Arbeitsbereich                                                                                                                                                                         |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                             |
| Standardtastenkürzel                                                                                                                                                                   |
| _Keiner_                                                                                                                                                                               |
| Eingeführt in Version                                                                                                                                                                  |
| 0.19                                                                                                                                                                                   |
| Siehe auch                                                                                                                                                                             |
| [TechDraw 2LinienMittellinie](/TechDraw_2LineCenterLine/de "TechDraw 2LineCenterLine/de"), [TechDraw 2PunkteMittellinie](/TechDraw_2PointCenterLine/de "TechDraw 2PointCenterLine/de") |
|                                                                                                                                                                                        |

## Beschreibung

Das Werkzeug "TechDraw FlächenMittellinie" fügt ausgewählten Flächen eine Mittellinie hinzu.

![](/src/assets/images/TechDraw_FaceCenterLine_Sample.png)

Mittellinie zu einer Fläche hinzufügen (links: Fläche ausgewählt / rechts: Mittellinie hinzugefügt)

## Anwendung, Erstellen

1. Eine oder mehrere Flächen in einer Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_FaceCenterLine.svg) Mittellinie zu Fläche(n) hinzufügen drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/src/assets/images/TechDraw_FaceCenterLine.svg) Mittellinie zu Fläche(n) hinzufügen** auswählen.
3. Ein Aufgaben-Bereich wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
4. Die Schaltfläche OK zum Bestätigen drücken.
5. Eine Mittellinie wird am Mittelpunkt des Begrenzungsrahmens der ausgewählten Fläche(n) hinzugefügt.

## Anwendung, Bearbeiten

Jedes der Mittellinienwerkzeuge (![](/src/assets/images/TechDraw_FaceCenterLine.svg) Mittellinie zu Fläche(n) hinzufügen,
![](/src/assets/images/TechDraw_2LineCenterLine.svg) [Mittellinie zwischen 2 Linien hinzufügen](/TechDraw_2LineCenterLine/de "TechDraw 2LineCenterLine/de") oder
![](/src/assets/images/TechDraw_2PointCenterLine.svg) [Mittellinie zwischen 2 Punkten hinzufügen](/TechDraw_2PointCenterLine/de "TechDraw 2PointCenterLine/de"))
kann verwendet werden, um Mittellinien zu bearbeiten.

1. Eine Mittellinie auswählen.
2. Ein beliebiges Mittellinienwerkzeug aufrufen.
3. Ein Dialogfeld wird geöffnet. Siehe [Optionen](#Optionen) für Weitere Informationen.
4. Die Schaltfläche OK zum Bestätigen drücken.

## Optionen

- **Orientatierung**:
  - **Vertikal**: Gibt die vertikale Ausrichtung für die Mittellinie vor. Wird für 2PunkteMittellinien ignoriert.
  - **Horizontal**: Gibt die horizontale Ausrichtung für die Mittellinie vor. Wird für 2PunkteMittellinien ignoriert.
  - **Ausgerichtet**: Nicht verfügbar für FlächenMittellinien. Gibt der Mittellinie vor, der ermittelten Ausrichtung der ausgewählten Kanten für 2LinienMittellinien zu folgen. Wird für 2PunkteMittellinien ignoriert.
- **Horizontal verschieben**: Bewegt die Mittellinie aus ihrer normalen Position nach links oder rechts.
- **Vertikal verschieben**: Bewegt die Mittellinie aus ihrer normalen Position nach oben oder unten.
- **Drehen**: Dreht die Mittellinie um ihren Mittelpunkt (in Grad. + gegen den Uhrzeigersinn, - im Uhrzeigersinn).
- **Verlängern um**: Verlängert die Mittellinie um diesen Wert.
- **Farbe**: Die Farbe der Mittllinie.
- **Stärke**: Strichstärke der Mittellinie.
- **Stil**: Linienart der Mittellinie. Die Optionen sind:
  - ![](/src/assets/images/Continuous-line.svg) **Volllinie**
  - ![](/src/assets/images/Dash-line.svg) **Strichlinie**
  - ![](/src/assets/images/Dot-line.svg) **Punkt**
  - ![](/src/assets/images/DashDot-line.svg) **Strich-Punkt**
  - ![](/src/assets/images/DashDotDot-line.svg) **Strich-Zweipunkt**

## Hinweise

- Um eine Mittellinie zu löschen wird sie ausgewählt und die Entf-Taste gedrückt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Flächenmittellinien ersetzen letztlich zwei Ansicht-Eigenschaften:
  - Ansicht-Eigenschaft**HorizCenterLine**: Zeigt eine horizontale Mittellinie durch die Ansicht.
  - Ansicht-Eigenschaft**VertCenterLine**: Zeigt eine vertikale Mittellinie durch die Ansicht.

## Eigenschaften

Hilfslinien haben keine eigenen Eigenschaften, da sie keine Dokumentobjekte sind.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_FaceCenterLine/de&oldid=1404655>"
