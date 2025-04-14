---
title: Sketcher Sperren
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| Sketcher Sperren                                                              |
| Menüeintrag                                                                   |
| Skizze → Sketcher-Randbedingungen → Sperren                                   |
| Arbeitsbereich                                                                |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                    |
| Standardtastenkürzel                                                          |
| K L                                                                           |
| Eingeführt in Version                                                         |
| -                                                                             |
| Siehe auch                                                                    |
| [Sketcher Fixieren](/Sketcher_ConstrainBlock/de "Sketcher ConstrainBlock/de") |
|                                                                               |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainLock.svg) Sperren ordnet Punkten die Randbedingungen [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") und [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") zu. Ist ein einzelner punkt ausgewählt, beziehen sich die Randbedingungen auf den Ursprung der Skizze. Sind zwei oder mehr Punkte ausgewählt, beziehen sich die Randbedingungen auf den letzten Punkt in der Auswahl.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Werkzeuge für Maßeinträge** auf `Einzelnes Werkzeug` gesetzt (Standardeinstellung): Den Abwärtspfeil rechts neben der Schaltfläche ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) drücken und **![](/images/Sketcher_ConstrainLock.svg) Sperren** in der Ausklappliste auswählen.
   - Ist die Voreinstellung auf einen anderen Wert gesetzt (und in 0.21 und davor): Die Schaltfläche ![](/images/Sketcher_ConstrainLock.svg) Sperren drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainLock.svg) Sperren** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view "3D view") und die Menüoption **Abmessung → ![](/images/Sketcher_ConstrainLock.svg) Sperren** im Kontextmenü auswählen.
   - Das Tastaturkürzel K dann L.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Einen einzelnen Punkt auswählen.
5. Zwei Randbedingungen werden hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Einen oder mehrere Punkte auswählen.
2. Das Werkzeug aufrufen, wie oben beschrieben.
3. Abhängig von der Auswahl werden zwei oder mehr Randbedingungen hinzugefügt.

## Hinweise

- Es gibt keine automatisch Eingabeaufforderung zum Bearbeiten der zur Randbedingung gehörenden Werte. Falls erforderlich, können die Werte [manuell bearbeitet](/Sketcher_Workbench/de#Randbedingungen_bearbeiten "Sketcher Workbench/de") werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/de&oldid=1426963>"
