---
title: Sketcher LinieErstellen
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Sketcher LinieErstellen                                                                 |
| Menüeintrag                                                                             |
| Skizze → Skizzengeometrien → Linie erstellen                                            |
| Arbeitsbereich                                                                          |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                              |
| Standardtastenkürzel                                                                    |
| L                                                                                       |
| Eingeführt in Version                                                                   |
| -                                                                                       |
| Siehe auch                                                                              |
| [Sketcher LinienzugErstellen](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de") |
|                                                                                         |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_CreateLine.svg) Sketcher LinieErstellen erstellt eine Linie. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Wenn In-Ansicht-Parameter ([On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de")) aktiviert wurden, besitzt das Werkzeug drei Modi.

![](/src/assets/images/Sketcher_LineExample1.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_CreateLine.svg) Linie erstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/src/assets/images/Sketcher_CreateLine.svg) Linie erstellen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_CreateLine.svg) Linie erstellen** im Kontextmenü auswählen.
   - Das Tastaturkürzel G then L.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Die Modi dieses Werkzeugs erfordern einen vorherigen Abschnitt. Dafür eine der folgenden Möglichkeiten auswählen:
   - Zwei Punkte auswählen, um einen Linienabschnitt festzulegen.
4. Wenn die [In-Ansicht-Parameter](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") aktiviert sind wird der Abschnitt **Linienparameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") hinzugefügt.
5. Wahlweise die M-Taste drücken oder eine möglichkeit in der Ausklappliste Modus auswählen, um den Werkzeugmodus zu ändern:
   - ![](/src/assets/images/Sketcher_CreateLineAngleLength.svg) **Punkt, Läng, Winkel**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Den Startpunkt der Linie auswählen; Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Den Endpunkt der Linie auswählen; Oder mit Pos-OVP: ihre Länge und ihren Winkel eingeben. Der Winkel bezieht sich auf die X-Achs der Skizze.
   - ![](/src/assets/images/Sketcher_CreateLineLengthWidth.svg) **Punkt, Breite, Höhe**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Den Startpunkt der Linie auswählen; Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Den Endpunkt der Linie auswählen; Oder mit Pos-OVP: seinen X- und/oder Y-Abstand zum Startpunkt eingeben.
   - ![](/src/assets/images/Sketcher_CreateLine.svg) **2 Punkte**:
     1. Den Startpunkt der Linie auswählen; Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Den Endpunkt der Linie auswählen; Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
6. Die Linie wird erstellt und passende Pos-OVP- und Dim-OVP-basierte Randbedingungen werden hinzugefügt.
7. Wenn das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de") läuft:
   1. Wahlweise weitere Linien erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken, oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateLine/de&oldid=1424275>"
