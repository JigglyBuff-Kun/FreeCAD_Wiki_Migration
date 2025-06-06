---
title: Sketcher KreisErstellen
---

|                                                                  |
| ---------------------------------------------------------------- |
| Sketcher KreisErstellen                                          |
| Menüeintrag                                                      |
| Skizze → Skizzengeometrien → Kreis um Mittelpunkt erstellen      |
| Arbeitsbereich                                                   |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")       |
| Standardtastenkürzel                                             |
| G C                                                              |
| Eingeführt in Version                                            |
| -                                                                |
| Siehe auch                                                       |
| [BogenErstellen](/Sketcher_CreateArc/de "Sketcher CreateArc/de") |
|                                                                  |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_CreateCircle.svg) Sketcher KreisErstellen erstellt einen Kreis durch Festlegen seines Mittelpunktes und eines Punktes im Verlauf seines Umfangs. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder wahlweise durch Festlegen dreier Punkte im Verlauf seines Umfangs.

![](/images/Sketcher_CircleExample1.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_CreateCircle.svg) Kreis um Mittelpunkt erstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/images/Sketcher_CreateCircle.svg) Kreis um Mittelpunkt erstellen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_CreateCircle.svg) Kreis um Mittelpunkt erstellen** im Kontextmenü auswählen.
   - Das Tastaturkürzel G dann C.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Der Abschnitt **Kreisparameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.
4. Wahlweise die M-Taste drücken oder einen Eintrag in der Ausklappliste **Modus** im Abschnitt **Kreisparameter** auswählen, um den Werkzeugmodus zu wechseln:
   - ![](/images/Sketcher_CreateCircle.svg) **Mitte**:
     1. Den Mittelpunkt des Kreises auswählen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Einen Punkt auswählen, um den Radius des Kreises festzulegen; oder mit Dim-OVP: den Radius eingeben.
   - ![](/images/Sketcher_Create3PointCircle.svg) **3 Punkte auf Kreisbogen**. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Drei Punkte auswählen, um den den Kreis festzulegen; oder mit Pos-OVP: ihre X- und/oder Y-Koordinaten eingeben. Für diese Punkte werden keine Randbedingungen hinzugefügt.
5. Der Kreis wird erstellt und mögliche auf Pos-OVP und Dim-OVP basierende Randbedingungen hinzugefügt.
6. Läuft das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de"):
   1. Wahlweise weitere Kreise erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateCircle/de&oldid=1418492>"
