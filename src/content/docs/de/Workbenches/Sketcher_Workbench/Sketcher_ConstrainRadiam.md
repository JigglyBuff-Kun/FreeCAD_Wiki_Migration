---
title: Sketcher RadiamFestlegen
---

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher RadiamFestlegen                                                                                                                                                                |
| Menüeintrag                                                                                                                                                                             |
| Skizze → Sketcher-Randbedingungen → Automatisch Radius/Durchmesser festlegen                                                                                                            |
| Arbeitsbereich                                                                                                                                                                          |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                              |
| Standardtastenkürzel                                                                                                                                                                    |
| K S                                                                                                                                                                                     |
| Eingeführt in Version                                                                                                                                                                   |
| 0.20                                                                                                                                                                                    |
| Siehe auch                                                                                                                                                                              |
| [Sketcher RadiusFestlegen](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de"), [Sketcher DurchmesserFestlegen](/Sketcher_ConstrainDiameter/de "Sketcher ConstrainDiameter/de") |
|                                                                                                                                                                                         |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainRadiam.svg) Sketcher RadiamFestlegen legt den Radius von Bögen und [B-Spline-Gewichtskreisen](/Sketcher_CreateBSpline/de#Hinweise "Sketcher CreateBSpline/de") sowie den Durchmesser von Kreisen fest.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Werkzeuge für Maßeinträge** auf `Einzelnes Werkzeug` gesetzt (Standardeinstellung): Den Abwärtspfeil rechts neben der Schaltfläche ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/images/Sketcher_ConstrainRadiam.svg) Automatisch Radius oder Durchmesser festlegen** im Ausklappmenü auswählen.
   - Besitzt die Voreinstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/images/Sketcher_ConstrainRadiam.svg) Automatisch Radius oder Durchmesser festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainRadiam.svg) Automatisch Radius oder Durchmesser festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Abmessung → ![](/images/Sketcher_ConstrainRadiam.svg) Automatisch Radius oder Durchmesser festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel K dann S.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Die Kante eines Kreises oder Kreisbogens auswählen.
   - Die Kante eines B-Spline-Gewichtskreises auswählen.
5. Wird eine [festlegende maßliche Randbedingung](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") erstellt, hängt von den [Voreinstellungen](/Sketcher_Preferences/de#Anzeige "Sketcher Preferences/de") ab, ob ein Dialog geöffnet wird, um ihren [Wert zu bearbeiten](/Sketcher_Workbench/de#Randbedingungen_bearbeiten "Sketcher Workbench/de").
6. Eine Randbedingung wird hinzugefügt.
7. Wahlweise weitere Randbedingungen erstellen.
8. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Die Kante(n) eines oder mehrerer Kreise oder Kreisbögen auswählen.
   - Die Kante(n) eines oder mehrerer B-Spline-Gewichtskreise auswählen.
2. Das Werkzeug aufrufen, wie oben beschrieben.
3. Wahlweise den [Wert der Randbedingung](/Sketcher_Workbench/de#Randbedingungen_bearbeiten "Sketcher Workbench/de") bearbeiten.
4. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt, siehe [Hinweise](#Hinweise).

## Hinweise

- Werden [festlegende maßliche Randbedingungen](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") erstellt und wurden mehrere Elemente vorausgewählt, die keine [externen Geometrien](/Sketcher_External/de "Sketcher External/de") sind, erhält nur das erste von ihnen eine maßliche Randbedingung, während Zwischen dem ersten und den anderen die Randbedingung [Gleichheit festlegen](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de") eingesetzt wird.

## Skripten

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('246.0 mm')))

```

Die Seite [Sketcher Skripten](/Sketcher_scripting "Sketcher scripting") erklärt die Werte, die für `ArcOrCircle` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadiam/de&oldid=1424956>"
