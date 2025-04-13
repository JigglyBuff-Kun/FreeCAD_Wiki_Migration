---
title: Sketcher FestlegendeRandbedingungUmschalten
---

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| Sketcher FestlegendeRandbedingungUmschalten                                                                        |
| Menüeintrag                                                                                                        |
| Sketch → Sketcher-Randbedingungen → Randbedingung zwischen festlegend und anzeigend umschalten                     |
| Arbeitsbereich                                                                                                     |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                         |
| Standardtastenkürzel                                                                                               |
| K X                                                                                                                |
| Eingeführt in Version                                                                                              |
| 0.16                                                                                                               |
| Siehe auch                                                                                                         |
| [Sketcher AktiveRandbedingungUmschalten](/Sketcher_ToggleActiveConstraint/de "Sketcher ToggleActiveConstraint/de") |
|                                                                                                                    |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ToggleDrivingConstraint.svg) Sketcher FestlegendeRandbedingungUmschalten schaltet entweder den Modus der Werkzeuge zur Erstellung von [maßlichen Randbedingungen](/Sketcher_Workbench/de#Sketcher_CompDimensionTools "Sketcher Workbench/de") auf festlegend bzw. anzeigend um oder wechselt den Modus ausgewählter Randbedingungen entsprechend.

Im Gegensatz zu festlegenden Randbedingungen tragen anzeigende Randbedingungen nicht zur Bestimmtheit der Skizze bei; ihr Wert hängt von anderen Randbedingungen ab, sie sind "fremdgesteuert". Sie können nützlich sein, um Maße zu prüfen. Sie können in [Ausdrücken](/Expressions/de "Expressions/de") eingesetzt werden, nur nicht in der Skizze selbst.

![](/src/assets/images/Sketcher_ToggleConstraint_example.png)

Festlegende maßliche Randbedingungen (rot) für den horizontalen Abstand (50 mm), den vertikalen Abstand (30 mm) und den Winkel (75°) wurden zur Definition des Profils eingesetzt; auf dem schrägen Liniensegment wurde eine anzeigende Randbedingung hinzugefügt, um seine Länge (31,0583 mm) zu erfassen.

## Anwendung

### Werkzeuge umschalten

1. Sicherstellen, dass keine maßlichen Randbedingungen ausgewählt sind.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_ToggleDrivingConstraint.svg) Randbedingung zwischen festlegend und anzeigend umschalten drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ToggleDrivingConstraint.svg) Randbedingung zwischen festlegend und anzeigend umschalten** auswählen.
   - Das Tastaturkürzel K dann X.
3. Der Modus der Werkzeuge zur Erstellung maßlicher Randbedingungen wird umgeschaltet:
   - Im festlegenden Modus sind ihre Menü- und Werkzeugleistensymbole rot und sie erstellen festlegende Randbedingungen ([Standardfarbe](/Sketcher_Preferences/de#Darstellung "Sketcher Preferences/de") Rot). Das Symbol dieses Werkzeugs ist dann: ![](/src/assets/images/Sketcher_ToggleConstraint.svg).
   - Im anzeigenden Modus sind ihre Menü- und Werkzeugleistensymbole blau und sie erstellen anzeigende Randbedingungen (Standardfarbe Blau). Das Symbol dieses Werkzeugs ist dann: ![](/src/assets/images/Sketcher_ToggleConstraint_Driven.svg).

### Randbedingungen umschalten

1. Eine oder mehrere maßliche Randbedingungen auswählen.
2. Das Werkzeug wie oben beschrieben aufrufen oder mit einer der folgenden zusätzlichen Möglichkeiten:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view "3D view") und die Menüoption **![](/src/assets/images/Sketcher_ToggleDrivingConstraint.svg) Randbedingung zwischen festlegend und anzeigend umschalten** im Kontextmenü auswählen.
   - Ein Rechtsklick in den Abschnitt **Randbedingungen** des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") und die Menüoption **Randbedingung zwischen festlegend und anzeigend umschalten** im Kontextmenü auswählen.
3. Die ausgewählten Randbedingungen wechseln von festlegend auf anzeigend oder umgekehrt. Ihre Darstellung passt sich entsprechend an.
4. Der Modus der Werkzeuge zur Erstellung maßlicher Randbedingungen ändert sich nicht.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleDrivingConstraint/de&oldid=1497599>"
