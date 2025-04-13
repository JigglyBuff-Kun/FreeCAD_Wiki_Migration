---
title: Sketcher RadiusFestlegen
---

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher RadiusFestlegen                                                                                                                                                                |
| Menüeintrag                                                                                                                                                                             |
| Skizze → Sketcher-Randbedingungen → Radius festlegen                                                                                                                                    |
| Arbeitsbereich                                                                                                                                                                          |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                              |
| Standardtastenkürzel                                                                                                                                                                    |
| K R                                                                                                                                                                                     |
| Eingeführt in Version                                                                                                                                                                   |
| -                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                              |
| [Sketcher RadiamFestlegen](/Sketcher_ConstrainRadiam/de "Sketcher ConstrainRadiam/de"), [Sketcher DurchmesserFestlegen](/Sketcher_ConstrainDiameter/de "Sketcher ConstrainDiameter/de") |
|                                                                                                                                                                                         |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainRadius.svg) Sketcher RadiusFestlegen legt den Radius von Kreisen, Bögen und [B-Spline-Gewichtskreisen](/Sketcher_CreateBSpline/de#Hinweise "Sketcher CreateBSpline/de") fest.

![](/src/assets/images/Sketcher_ConstrainRadius_example.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Werkzeuge für Maßeinträge** auf `Einzelnes Werkzeug` gesetzt (Standardeinstellung): Den Abwärtspfeil rechts neben der Schaltfläche ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/src/assets/images/Sketcher_ConstrainRadius.svg) Radius festlegen** im Ausklappmenü auswählen.
   - Besitzt die Voreinstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainRadius.svg) Radius festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainRadius.svg) Radius festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Abmessung → ![](/src/assets/images/Sketcher_ConstrainRadius.svg) Radius festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel K dann R.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Für weitere Schritte siehe [Sketcher Radiam festlegen](/Sketcher_ConstrainRadiam/de#Continue_mode "Sketcher ConstrainRadiam/de").

### Einmal-Ausführen-Modus

Siehe [Sketcher RadiamFestlegen](/Sketcher_ConstrainRadiam/de#Einmal-Ausführen-Modus "Sketcher ConstrainRadiam/de").

## Skripten

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

Die Seite [Sketcher Skripten](/Sketcher_scripting "Sketcher scripting") erklärt die Werte, die für `ArcOrCircle` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/de&oldid=1462887>"
