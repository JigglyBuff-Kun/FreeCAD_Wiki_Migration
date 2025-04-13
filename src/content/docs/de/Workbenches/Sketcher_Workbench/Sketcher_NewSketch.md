---
title: Sketcher NeueSkizze
---

|                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher NeueSkizze                                                                                                                                                                                                                          |
| Menüeintrag                                                                                                                                                                                                                                  |
| Skizze → Skizze erstellen                                                                                                                                                                                                                    |
| Arbeitsbereich                                                                                                                                                                                                                               |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                                                                   |
| Standardtastenkürzel                                                                                                                                                                                                                         |
| _Keiner_                                                                                                                                                                                                                                     |
| Eingeführt in Version                                                                                                                                                                                                                        |
| -                                                                                                                                                                                                                                            |
| Siehe auch                                                                                                                                                                                                                                   |
| [PartDesign NeueSkizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de"),[Sketcher SkizzeZuordnen](/Sketcher_MapSketch/de "Sketcher MapSketch/de"), [Sketcher SkizzeAusrichten](/Sketcher_ReorientSketch/de "Sketcher ReorientSketch/de") |
|                                                                                                                                                                                                                                              |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_NewSketch.svg) Sketcher NeueSkizze erstellt eine neue Skizze und öffnet den [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de"), um sie zu bearbeiten.

Man beachte, dass der Arbeitsbereich ![](/src/assets/images/Workbench_PartDesign.svg)[PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") seinen eigenen Befehl [NeueSkizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de") besitzt. Bei der Arbeit an einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") sollte dafür jenes Werkzeug eingesetzt werden.

## Anwendung

1. Wenn die Skizze an vorhandene Geometrie [befestigt](/Part_EditAttachment/de "Part EditAttachment/de") werden soll: Ein Objekt mit einer Form, eine oder mehrere Knoten, Kanten und/oder Flächen und/oder eine Ebene auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_NewSketch.svg) Skizze erstellen drücken.
   - Den Menüeintrag **Skizze → ![](/src/assets/images/Sketcher_NewSketch.svg) Skizze erstellen** auswählen.
3. Wenn Geometrie ausgewählt wurde:
   1. Der Dialog **Befestigungsmodus der Skizze** wird geöffnet.
   2. Eine [Befestigungsmethode](/Part_EditAttachment/de#Befestigungsverfahren "Part EditAttachment/de") in der Ausklappliste auswählen. Oder **Nicht befestigen** auswählen, um die Auswahl zu ignorieren.
   3. Die Schaltfläche OK drücken.
4. Ist keine Auswahl vorhanden oder wurde im vorherigen Schritt **Nicht befestigen** ausgewählt:
   1. Der Dialog **Orientatierung Wählen** wird geöffnet.
   2. Die Ebene für die Ausrichtung auswählen. Die Ebene bezieht sich auf das lokale Koordinatensystem im dem sich die Skizze befindet:
      - Wenn die Checkbox **Umgekehrte Richtung** nicht aktiviert ist:
        - Draufsicht: **XY-Ebene**
        - Vorderansicht: **XZ-Ebene**
        - Ansicht von Rechts: **YZ-Ebene**
      - Wenn die Checkbox **Umgekehrte Richtung** aktiviert ist:
        - Untersicht: **XY-Ebene**
        - Rückansicht: **XZ-Ebene**
        - Ansicht von Links: **YZ-Ebene**
   3. Wahlweise den Wert von **Versatz** anpassen. Der Versatz wird entlang der X-, Y- oder Z-Achse des lokalen Koordinatensystems gemessen.
   4. Die Schaltfläche OK drücken.
5. Eine Skizze wird erstellt.
6. Die Skizze wird in den Bearbeitungsmodus versetzt und der [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de") geöffnet.
7. Zum Beenden des Bearbeitungsmodus siehe ![](/src/assets/images/Sketcher_LeaveSketch.svg) [Sketcher SkizzeVerlassen](/Sketcher_LeaveSketch/de "Sketcher LeaveSketch/de").

## Hinweise

- Vorhandene Skizzen können mit [Sketcher SkizzeZuordnen](/Sketcher_MapSketch/de "Sketcher MapSketch/de") an verschiedene Objekte befestigt werden oder mit [Sketcher SkizzeAnordnen](/Sketcher_ReorientSketch/de "Sketcher ReorientSketch/de") abgetrennt und neu ausgerichtet werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/de&oldid=1417540>"
