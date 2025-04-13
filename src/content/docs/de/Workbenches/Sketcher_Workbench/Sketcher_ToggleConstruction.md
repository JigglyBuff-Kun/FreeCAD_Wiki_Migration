---
title: Sketcher HilfsgeometrieUmschalten
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher HilfsgeometrieUmschalten                          |
| Menüeintrag                                                |
| Skizze → Skizzengeometrien → Hilfsgeometrie umschalten     |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| G N                                                        |
| Eingeführt in Version                                      |
| -                                                          |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ToggleConstruction.svg) Sketcher HilfsgeometrieUmschalten aktiviert bzw. deaktiviert den Konstruktionsmodus für alle Werkzeuge zur Geometrieerstellung oder es wandelt ausgewählte normale Geometrie in Hilfsgeometrie und umgekehrt.

Hilfsgeometrie wird mit einer bestimmten [Farbe](/Sketcher_Preferences/de#Darstellung "Sketcher Preferences/de") (standardmäßig Blau) gekennzeichnet und ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) mit einer bestimmten Linienart. Hilfsgeometrie ist außerhalb der Skizze nicht sichtbar; sie ist dafür gedacht, bei der Festlegung von Randbedingungen und anderen Geometrien innerhalb der Skizze zu helfen. Hilfslinien können trotzdem als Drehachse für ein [PartDesign Drehteil](/PartDesign_Revolution/de "PartDesign Revolution/de") verwendet werden.

![](/src/assets/images/Sketcher_ConstructionMode_fr_01.png)

## Anwendung

### Werkzeuge umschalten

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_ToggleConstruction.svg) Hilfsgeometrie umschalten drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/src/assets/images/Sketcher_ToggleConstruction.svg) Hilfsgeometrie umschalten** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_ToggleConstruction.svg) Hilfsgeometrie umschalten** im Kontextmenü auswählen.
   - Das Tastaturkürzel G dann N.
3. Der Modus der Werkzeuge zur Geometrieerstellung wird umgeschaltet:
   - Im normalen Modus sind ihre Menü- und Werkzeugleistensymbole weiß und sie erstellen normale Geometrie (Standardfarbe Weiß). Das Symbol dieses Werkzeugs ist dann: ![](/src/assets/images/Sketcher_ToggleConstruction.svg).
   - Im Hilfsgeometrie-Modus (Konstruktionsmodus) sind ihre Menü- und Werkzeugleistensymbole blau und sie erstellen Hilftgeometrie (Standardfarbe Blau). Das Symbol dieses Werkzeugs ist dann: ![](/src/assets/images/Sketcher_ToggleConstruction_Constr.svg).

### Geometrie umschalten

1. Ein oder mehrere Elemente in der Skizze auswählen.
2. Das Werkzeug wie oben beschrieben aufrufen oder mit der folgenden zusätzlichen Möglichkeit:
   - Ein Rechtsklick in den Abschnitt **Elemente** des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") und die Menüoption **![](/src/assets/images/Sketcher_ToggleConstruction.svg) Hilfsgeometrie umschalten** im Kontextmenü auswählen.
3. Die ausgewählten Elemente wechseln von normaler Geometrie zu Hilfsgeometrie oder umgekehrt. Ihre Darstellung passt sich entsprechend an.
4. Der Modus der Werkzeuge zur Geometrieerstellung ändert sich nicht.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleConstruction/de&oldid=1416667>"
