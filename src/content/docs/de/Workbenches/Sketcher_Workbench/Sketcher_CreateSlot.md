---
title: Sketcher NutErstellen
---

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| Sketcher NutErstellen                                                                |
| Menüeintrag                                                                          |
| Sketch → Skizzengeometrien → Nut erstellen                                           |
| Arbeitsbereich                                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                           |
| Standardtastenkürzel                                                                 |
| G S                                                                                  |
| Eingeführt in Version                                                                |
| -                                                                                    |
| Siehe auch                                                                           |
| [Sketcher BogennutErstellen](/Sketcher_CreateArcSlot/de "Sketcher CreateArcSlot/de") |
|                                                                                      |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_CreateSlot.svg) Sketcher NutErstellen erstellt eine "Nut", ein geschlossenen Linienzug, der aus zwei Halbkreisen besteht, die mit zwei parallelen geraden Linien verbunden sind.

![](/images/SketcherCreateSlotExample.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_CreateSlot.svg) NutErstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/images/Sketcher_CreateSlot.svg) Nut erstellen** auswählen.
   - Das Tastaturkürzel G dann S.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Den Mittelpunkt des ersten Halbkreises auswählen. Oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
4. Den Mittelpunkt des zweiten Halbkreises auswählen. Oder mit Dim-OVP: den Abstand zwischen den Mittelpunkten und/oder den Winkel der "Nut" eingeben. Der Winkel bezieht sich auf die X-Achse der Skizze.
5. Einen Punkt auswählen, um den Radius der "Nut" festzulegen. Oder mit Dim-OVP: diesen Radius eingeben.
6. Die "Nut" wird erstellt und passende auf Pos-OVP und Dim-OVP basierenden Randbedingungen werden hinzugefügt.
7. Wenn das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de") läuft:
   1. Wahlweise weitere "Nuten" erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- 0.21 und davor ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")): Wird Ctrl bzw. Strg gedrückt gehalten, während man den zweiten Mittelpunkt auswählt, wird die "Nut" horizontal oder vertikal ausgerichtet.
- [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): [Einrasten auf Winkel](/Sketcher_Snap/de "Sketcher Snap/de") kann eingesetzt werden, um den Winkel der "Nut" zu beeinflussen.
- [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de"): Eine "Nut" kann auch horizontal oder vertikal festgelegt werden, wenn die Option [Automatische Randbedingungen](/Sketcher_Workbench/de#Automatische_Randbedingungen "Sketcher Workbench/de") aktiviert ist.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateSlot/de&oldid=1410155>"
