---
title: Sketcher ParallelFestlegen
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher ParallelFestlegen                                 |
| Menüeintrag                                                |
| Skizze → Sketcher-Randbedingungen → Parallel festlegen     |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| P                                                          |
| Eingeführt in Version                                      |
| -                                                          |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainParallel.svg) Sketcher ParallelFestlegen legt Linien parallel zueinander fest.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainParallel.svg) Parallel festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainParallel.svg) Parallel festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Festlegen → ![](/src/assets/images/Sketcher_ConstrainParallel.svg) Parallel festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel P.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Zwei Kanten auswählen.
5. Eine Randbedingung wird hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Zwei oder mehr Linien auswählen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Punkte können in der Auswahl enthalten sein, werden aber ignoriert.
2. Das Werkzeug aufrufen, wie oben beschrieben oder mit der folgenden zusätzlichen Option:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_ConstrainParallel.svg) Parallel festlegen** im Kontextmenü auswählen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Skripten

```
Sketch.addConstraint(Sketcher.Constraint('Parallel', Line1, Line2))

```

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `Line1` und `Line2` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainParallel/de&oldid=1426374>"
