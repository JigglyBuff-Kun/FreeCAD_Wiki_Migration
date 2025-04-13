---
title: Sketcher RechteckErstellen
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Sketcher RechteckErstellen                                                              |
| Menüeintrag                                                                             |
| Skizze → Skizzengeometrien → Rechteck erstellen                                         |
| Arbeitsbereich                                                                          |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                              |
| Standardtastenkürzel                                                                    |
| G R                                                                                     |
| Eingeführt in Version                                                                   |
| -                                                                                       |
| Siehe auch                                                                              |
| [Sketcher LinienzugErstellen](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de") |
|                                                                                         |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_CreateRectangle.svg) Sketcher RechteckErstellen erstellt ein Rechteck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug besitzt vier Modi, von denen zwei auch Parallelogramme erstellen können. Abgerundeter Ecken und die Erstellung einer versetzten Kopie sind optionale Funktionen.

![](/src/assets/images/SketcherCreateRectangleExample.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_CreateRectangle.svg) Rechteck drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/src/assets/images/Sketcher_CreateRectangle.svg) Rechteck erstellen** auswählen.
   - Ein Rechtsklick in der [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_CreateRectangle.svg) Rechteck erstellen** im Kontextmenü auswählen.
   - Das Tastaturkürzel G dann R.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Der Abschnitt **Rechteckparameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.

4. Wahlweise die U-Taste drücken oder die CheckBox **Abgerundete Ecken** aktivieren, um das Rechteck mit Verrundungen zu versehen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
5. Wahlweise die J-Taste drücken oder die CheckBox **Rahmen** aktivieren, um eine zweite versetzte Form zu erstellen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
6. Wahlweise die M-Taste drücken oder in der Ausklappliste "Modus" auswählen, um den Werkzeugmodus zu wechseln:
   - ![](/src/assets/images/Sketcher_CreateRectangle.svg) **Ecke, Breite, Höhe**:
     1. Die erste Ecke des Rechtecks auswählen. Oder mit Pos-OVP: ihre X- und/oder Y-Koordinate eingeben.
     2. Die gegenüberliegende Ecke des Rechtecks auswählen. Oder mit Dim-OVP: die Breite und/oder die Höhe des Rechtecks auswählen.
   - ![](/src/assets/images/Sketcher_CreateRectangle_Center.svg) **Zentrum, Breite, Höhe**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Den Mittelpunkt des Rechtecks auswählen. Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Eine Ecke des Rechtecks auswählen. Oder mit Dim-OVP: die Breite und/oder die Höhe des Rechtecks eingeben.
   - ![](/src/assets/images/Sketcher_CreateRectangle3Points.svg) **3 Ecken**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Die erste Ecke des Rechtecks auswählen. Oder mit Pos-OVP: ihre X- und/oder Y-Koordinate eingeben.
     2. Den Endpunkt der ersten Kante des Rechtecks auswählen. Oder mit Dim-OVP: die Länge und/oder den Winkel der ersten Kante eingeben. Der Winkel bezieht sich auf die X-Achse der Skizze.
     3. Eine dritte Ecke des Rechtecks, gegenüber der ersten auswählen. Oder mit Dim-OVP: die Länge und/oder der Winkel der zweiten Kante eingeben. Der Winkel bezieht sich auf die erste Kante. Nur wenn dieser Winkel 90° ist, wird das Ergebnis ein Rechteck sein.
   - ![](/src/assets/images/Sketcher_CreateRectangle3Points_Center.svg) **Zentrum, 2 Ecken**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Den Mittelpunkt des Rechtecks auswählen. Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Die erste Ecke des Rechtecks auswählen. Oder mit Pos-OVP: ihre X- und/oder Y-Koordinate eingeben.
     3. Die zweite Ecke des Rechtecks auswählen. Oder mit Dim-OVP: die Länge und/oder den Winkel der Kante zwischen der ersten und der zweiten Ecke eingeben. Der Winkel bezieht sich auf die andere Kante, die mit der ersten Ecke verbunden ist. Nur wenn dieser Winkel 90° ist, wird das Ergebnis ein Rechteck sein.
7. Wurde **Abgerundete Ecken** aktiviert: Einen Punkt zum Festlegen des Radius auswählen. Oder mit Dim-OVP: Den Wert eingeben.
8. Wurde **Rahmen** aktiviert: Einen Punkt zum Festlegen der Breite des Rahmens (Versatz) auswählen. Oder mit Dim-OVP: Den Wert eingeben. Erfolgt der Versatz nach innen und ist größer als der Radius, wird die versetzte Form keine Rundungen enthalten.
9. Die Geometrie wird erstellt und mögliche auf Pos-OVP und Dim-OVP basierende Randbedingungen hinzugefügt.
10. Läuft das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de"):
    1. Wahlweise weitere Rechtecke erstellen.
    2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRectangle/de&oldid=1416844>"
