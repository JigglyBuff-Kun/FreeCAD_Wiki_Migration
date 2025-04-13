---
title: Sketcher HorVerFestlegen
---

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher HorVerFestlegen                                                                                                                                                                         |
| Menüeintrag                                                                                                                                                                                      |
| Skizze → Sketcher-Randbedingungen → Horizontal/Vertikal                                                                                                                                          |
| Arbeitsbereich                                                                                                                                                                                   |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                                                                                       |
| Standardtastenkürzel                                                                                                                                                                             |
| A                                                                                                                                                                                                |
| Eingeführt in Version                                                                                                                                                                            |
| 1.0                                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                                       |
| [Sketcher HorizontalFestlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de"), [Sketcher VertikalFestlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") |
|                                                                                                                                                                                                  |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainHorVer.svg) Sketcher HorVerFestlegen legt Linien oder Punktpaare horizontal (parallel zur horizontalen Achse der Skizze) oder vertikal fest, was auch immer dichter an der aktuellen Ausrichtung liegt.

Dieses Werkzeug kombiniert die Werkzeuge [Sketcher HorizontalFestlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") und [Sketcher VertikalFestlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de").

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Ist die [Voreinstellung](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") **Automatisches Werkzeug für HorizontalFestlegen oder. VertikalFestlegen** aktiviert (Standardeinstellung): Die Schaltfläche ![](/src/assets/images/Sketcher_ConstrainHorVer.svg) Horizontal / vertikal festlegen button.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/src/assets/images/Sketcher_ConstrainHorVer.svg) Horizontal / vertikal festlegen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Festlegen → ![](/src/assets/images/Sketcher_ConstrainHorVer.svg) Horizontal / vertikal festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel A.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Punkte auswählen.
   - Eine einzelne Linie auswählen.
5. Eine Randbedingung wird hinzugefügt.
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Zwei oder mehr Punkte auswählen (die Auswahlreihenfolge kann von Bedeutung sein, siehe [Hinweise](#Hinweise)).
   - Eine oder mehrere Linien auswählen. Punkte können in der Auswahl enthalten sein, werden aber ignoriert.
2. Das Werkzeug aufrufen, wie oben beschrieben oder mit der folgenden zusätzlichen Möglichkeit:
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view "3D view") und die Menüoption **![](/src/assets/images/Sketcher_ConstrainHorVer.svg) Horizontal / vertikal festlegen** im Kontextmenü auswählen.
3. Abhängig von der Auswahl werden eine oder mehrere Randbedingungen hinzugefügt.

## Hinweise

- Mehr als 2 Punkte werden in der Auswahlreihenfolge bearbeitet, jeweils ein Paar zur Zeit. Der erste Punkt wird dem zweiten zugeordnet. Wenn eine Randbedingung zwischen ihnen festgelegt wird, kann sich der zweite Punkt bewegen. Die neue Lage des zweiten Punktes bestimmt, welche Randbedingung zwischen dem zweiten und dem dritten Punkt festgelegt wird usw.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorVer/de&oldid=1427100>"
