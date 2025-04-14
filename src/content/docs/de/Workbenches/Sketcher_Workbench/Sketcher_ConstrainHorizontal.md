---
title: Sketcher HorizontalFestlegen
---

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher HorizontalFestlegen                                                                                                                                                         |
| Menüeintrag                                                                                                                                                                          |
| Skizze → Sketcher-Randbedingungen → Horizontal festlegen                                                                                                                             |
| Arbeitsbereich                                                                                                                                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                           |
| Standardtastenkürzel                                                                                                                                                                 |
| H                                                                                                                                                                                    |
| Eingeführt in Version                                                                                                                                                                |
| -                                                                                                                                                                                    |
| Siehe auch                                                                                                                                                                           |
| [Sketcher HorVerFestlegen](/Sketcher_ConstrainHorVer/de "Sketcher ConstrainHorVer/de"), [Sketcher VertikalFestlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") |
|                                                                                                                                                                                      |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainHorizontal.svg) Sketcher HorizontalFestlegen legt Linien oder Punktpaare horizontal fest (parallel zur horizontalen Achse der Skizze).

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): In den meisten Fällen ist es ratsam das kombinierte Werkzeug [Sketcher HorVerFestlegen](/Sketcher_ConstrainHorVer/de "Sketcher ConstrainHorVer/de") zu verwenden.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:

   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Kombiniertes Werkzeug für automatisch horizontal bzw. vertikal festlegen** aktiviert (Standardeinstellung): Den Abwärtspfeil rechts neben der Schaltfläche ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow.svg) drücken und **![](/images/Sketcher_ConstrainHorizontal.svg) Horizontal festlegen** in der Ausklappliste auswählen.

3. - Ist die Voreinstellung nicht aktiviert (und in 0.21 und davor): Die Schaltfläche ![](/images/Sketcher_ConstrainHorizontal.svg) Horizontal festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainHorizontal.svg) Horizontal festlegen** auswählen.
   - Das Tastaturkürzel H.
4. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
5. Eine der folgenden Möglichkeiten auswählen:
6. Wahlweise eine der folgenden Möglichkeiten auswählen:
   - Zwei Punkte auswählen.
   - Eine einzelne Linien auswählen.
7. Eine Randbedingung wird hinzugefügt.
8. Wahlweise weitere Randbedingungen erstellen.
9. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Zwei oder mehr Punkte auswählen.
   - Eine oder mehrere Linien auswählen. Punkte können in der Auswahl enthalten sein, werden aber ignoriert.
2. Das Werkzeug aufrufen, wie oben beschrieben oder mit der folgenden zusätzlichen Option:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainHorizontal.svg) Horizontal festlegen** im Kontextmenü auswählen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Skripten

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `Line` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/de&oldid=1426898>"
