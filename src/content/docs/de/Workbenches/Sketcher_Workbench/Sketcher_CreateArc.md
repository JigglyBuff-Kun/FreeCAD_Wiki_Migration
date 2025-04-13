---
title: Sketcher KreisbogenErstellen
---

|                                                                                 |
| ------------------------------------------------------------------------------- |
| Sketcher KreisbogenErstellen                                                    |
| Menüeintrag                                                                     |
| Skizze → Skizzengeometrien → Kreisbogen um Mittelpunkt erstellen                |
| Arbeitsbereich                                                                  |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                      |
| Standardtastenkürzel                                                            |
| G A                                                                             |
| Eingeführt in Version                                                           |
| -                                                                               |
| Siehe auch                                                                      |
| [Sketcher KreisErstellen](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de") |
|                                                                                 |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_CreateArc.svg) KreisbogenErstellen: Erstellt einen Kreisbogen durch Festlegen seines Mittelpunktes und seiner Endpunkte. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder durch Festlegen seiner Endpunkte und eines Punktes im Verlauf des Bogens.

![](/src/assets/images/Sketcher_ArcExample3.png)

Ein im Mittelpunkt-Modus erstellter Kreisbogen mit den Randbedingungen, die automatisch hinzugefügt werden, wenn alle In-Ansicht-Parametern eingegeben wurden

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_CreateArc.svg) Kreisbogen um Mittelpunkt erstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/src/assets/images/Sketcher_CreateArc.svg) Kreisbogen um Mittelpunkt erstellen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_CreateArc.svg) Kreisbogen um Mittelpunkt erstellen** im Kontextmenü auswählen.
   - Das Tastaturkürzel G dann A.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Der Abschnitt **Bogenparameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.
4. Wahlweise die M-Taste drücken oder einen Eintrag in der Ausklappliste **Modus** im Abschnitt **Bogenparameter** auswählen, um den Werkzeugmodus zu wechseln:
   - ![](/src/assets/images/Sketcher_CreateArc.svg) **Mitte**:
     1. Den Mittelpunkt des Kreisbogens auswählen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Den Startpunkt des Bogens auswählen; dies legt auch den Radius des Kreisbogens fest; oder mit Dim-OVP: den Radius und/oder den Startwinkel des Bogens eingeben. Der Winkel bezieht sich auf die X-Achse der Skizze. Für diesen Winkel wird keine Randbedingung hinzugefügt.
     3. Den Endpunkt des Bogens auswählen; oder mit Dim-OVP: den überstrichenen Winkel des Bogens eingeben.
   - ![](/src/assets/images/Sketcher_Create3PointArc.svg) **3 Punkte auf Kreisbogen**. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Start- und Endpunkt des Kreisbogens auswählen; oder mit Pos-OVP: ihre X- und/oder Y-Koordinaten eingeben.
     2. Einen weiteren Punkt auswählen, um den Radius festzulegen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben. Für diesen Punkt werden keine Randbedingungen hinzugefügt.
5. Der Kreisbogen wird erstellt und mögliche auf Pos-OVP und Dim-OVP basierende Randbedingungen hinzugefügt.
6. Läuft das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de"):
   1. Wahlweise weitere Kreisbögen erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArc/de&oldid=1418494>"
