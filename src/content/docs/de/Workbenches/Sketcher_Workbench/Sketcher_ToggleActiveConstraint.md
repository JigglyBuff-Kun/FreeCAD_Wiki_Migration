---
title: Sketcher AktiveRandbedingungUmschalten
---

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
| Sketcher AktiveRandbedingungUmschalten                                                                                    |
| Menüeintrag                                                                                                               |
| Skizze → Skizzen-Randbedingungen → Randbedingungen aktivieren/deaktivieren                                                |
| Arbeitsbereich                                                                                                            |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                |
| Standardtastenkürzel                                                                                                      |
| K Z                                                                                                                       |
| Eingeführt in Version                                                                                                     |
| 0.19                                                                                                                      |
| Siehe auch                                                                                                                |
| [Sketcher FestlegendeRandbedingungUmschalten](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") |
|                                                                                                                           |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ToggleActiveConstraint.svg) Sketcher AktiveRandbedingungUmschalten aktiviert bzw. deaktiviert ausgewählte Randbedingungen. Das Deaktivieren von Randbedingungen erlaubt es andere Anordnungen der Geometrien auszuprobieren, ohne dass Randbedingungen gelöscht werden müssen.

Das Werkzeug ist dem Werkzeug [Sketcher FestlegendeRandbedingungUmschalten](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de"), kann aber im Gegensatz zu dem auch für geometrische Randbedingungen eingesetzt werden; und die Werte deaktivierter maßlicher Randbedingungen bleiben erhalten.

## Anwendung

1. Eine oder mehrere Randbedingungen auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_ToggleActiveConstraint.svg) Randbedingungen aktivieren/deaktivieren drücken.
   - Den Menüeintrag **Skizze → Skizzen-Randbedingungen → ![](/src/assets/images/Sketcher_ToggleActiveConstraint.svg) Randbedingungen aktivieren/deaktivieren** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_ToggleActiveConstraint.svg) Randbedingungen aktivieren/deaktivieren** im Kontextmenü auswählen.
   - Ein Rechtsklick in den Abschnitt Randbedingungen des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") und die Menüoption **Aktivieren** bzw. **Deaktivieren** im Kontextmenü auswählen. Die angebotene Option hängt vom Status der Randbedingung unter dem Mauszeiger ab.
   - Das Tastaturkürzel K dann Z.
3. Aktive ausgewählte Randbedingungen werden deaktiviert und grau ([Standardfarbe](/Sketcher_Preferences/de#Darstellung "Sketcher Preferences/de")) umgefärbt, während deaktivierte ausgewählte Randbedingungen aktiviert werden und wieder rot (Standardfarbe) dargestellt werden.

## Beispiel

![](/src/assets/images/Sketcher_ToggleActiveConstraint_example_active.png)

Eine Vollständig bestimmte Skizze‎.

![](/src/assets/images/Sketcher_ToggleActiveConstraint_example_disabled_1.png)

Einer der Randbedingungen zum Festlegen der Winkel wurde deaktiviert; die Skizze ist jetzt nicht mehr vollständig bestimmt.

![](/src/assets/images/Sketcher_ToggleActiveConstraint_example_disabled_2.png)

Die nicht vollständig bestimmte Geometrie kann bewegt werden. Die deaktivierte Randbedingung ist noch immer vorhanden und kannreaktiviert werden, um zu der vollständig bestimmten Skizze zurückzukehren.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Der aktive Status einer Randbedingung kann in [Makros](/Macros/de "Macros/de") und von der [Python-Konsole](/Python_console/de "Python console/de") aus gesteuert werden.

```
SketchObject.toggleActive(index)

```

Man verwendet die Methode `toggleActive` eines vorhandenen [Sketcher SketchObjects](/Sketcher_SketchObject/de "Sketcher SketchObject/de") und den `index` der Randbedingung, um sie zu aktivieren bzw. zu deaktivieren. Der Index beginnt bei `0` und geht bis `N-1`, wobei `N` die Gesamtanzahl der Randbedingungen ist.

Beispiel:

```
import FreeCAD as App

sketch = App.ActiveDocument.Sketch
sketch.toggleActive(3)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleActiveConstraint/de&oldid=1414763>"
