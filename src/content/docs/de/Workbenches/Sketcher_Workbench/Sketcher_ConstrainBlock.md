---
title: Sketcher Fixieren
---

|                                                                            |
| -------------------------------------------------------------------------- |
| Sketcher Fixieren                                                          |
| Menüeintrag                                                                |
| Skizze → Sketcher-Randbedingungen → Fixieren                               |
| Arbeitsbereich                                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                 |
| Standardtastenkürzel                                                       |
| K B                                                                        |
| Eingeführt in Version                                                      |
| 0.17                                                                       |
| Siehe auch                                                                 |
| [Sketcher Sperren](/Sketcher_ConstrainLock/de "Sketcher ConstrainLock/de") |
|                                                                            |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainBlock.svg) Sketcher Fixieren setzt Kanten an Ort und Stelle mit einer einzigen Randbedingung fest. Es ist hauptsächlich für [B-Splines](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de") gedacht, die sonst nur schwer vollständig bestimmt werden können.

Die Randbedingung Fixieren betrifft zurzeit nur die frei beweglichen Teile einer Kante. Fixierten Kanten können andere Randbedingungen hinzugefügt werden, und das Hinzufügen von weiteren Randbedingungen zu fixierten Kanten, kann diese verändern.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ConstrainBlock.svg) Fixieren drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainBlock.svg) Fixieren** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Festlegen → ![](/images/Sketcher_ConstrainBlock.svg) Fixieren** im Kontextmenü auswählen.
   - Das Tastaturkürzel K dann B.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine einzelne Kante auswählen.
5. Eine Randbedingung wird hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine oder mehrere Kanten auswählen.
2. Das Werkzeug wie oben beschrieben aufrufen oder mit der folgenden weiteren Möglichkeit:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainBlock.svg) Fixieren** im Kontextmenü auswählen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Skripten

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `Edge` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/de&oldid=1425719>"
