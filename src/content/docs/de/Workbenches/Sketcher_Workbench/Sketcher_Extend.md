---
title: Sketcher Verlängern
---

|                                                                      |
| -------------------------------------------------------------------- |
| Sketcher Verlängern                                                  |
| Menüeintrag                                                          |
| Skizze → Sketcher-Werkzeuge → Kante verlängern                       |
| Arbeitsbereich                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")           |
| Standardtastenkürzel                                                 |
| G Q                                                                  |
| Eingeführt in Version                                                |
| 0.17                                                                 |
| Siehe auch                                                           |
| [Sketcher Zuschneiden](/Sketcher_Trimming/de "Sketcher Trimming/de") |
|                                                                      |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_Extend.svg) Sketcher Verlängern verlängert oder kürzt eine Linie oder einen Kreisbogen bis zu einer beliebigen Stelle oder bis zu einer Zielkante oder einem Zielpunkt.

![](/images/Sketcher_Extend_example_01.png)

_Auf der linken Seite (1) sind die beiden Skizzenelemente vor der Operation dargestellt; in der Mitte (2) wird die Linie bis zum Bogen verlängert; auf der rechten Seite (3) das Endergebnis._

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_Extend.svg) Kante verlängern drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge → ![](/images/Sketcher_Extend.svg) Kante verlängern** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_Extend.svg) Kante verlängern** im Kontextmenü auswählen.
   - Das Tastaturkürzel G dann Q.
2. Eine vorhandene Auswahl wird gelöscht. Das Werkzeug akzeptiert keine Vorauswahl.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine Linie oder einen Kreisbogen auswählen.
5. Den Mauszeiger in die Richtung zum Verlängern oder Kürzen bewegen.
6. Eine der folgenden Möglichkeiten auswählen:
   - Einen beliebigen Punkt anklicken.
   - Zu Verlängern bzw. Kürzen an einer weiteren Kante müssen ([Automatische Randbedingungen](/Sketcher_Workbench/de#Automatische_Randbedingungen "Sketcher Workbench/de") aktiviert sein): Den Mauszeiger über die Zielkante bewegen. Wenn diese hervorgehoben wird und das Symbol der Randbedingung ![](/images/Sketcher_ConstrainPointOnObject.svg) [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") neben dem Mauszeiger erscheint, wird mit einem Klick bestätigt. Die Randbedingung wird hinzugefügt.
   - Um bis zu einem einem Punkt zu verlängern bzw. zu kürzen (Automatische Randbedingungen müssen aktiviert sein): Den Mauszeiger über den Zielpunkt bewegen. Wenn dieser hervorgehoben wird und das Symbol der Randbedingung ![](/images/Sketcher_ConstrainCoincident.svg) [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") neben dem Mauszeiger erscheint, wird mit einem Klick bestätigt. Die Randbedingung wird hinzugefügt.
7. Wenn das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de") läuft:
   1. Wahlweise weitere Kanten verlängern bzw. kürzen.
   2. Zum Beenden in einen leeren Bereich der [3D-Ansichr](/3D_view/de "3D view/de") klicken, die rechte Maustaste oder Esc drücken oder ein anderes Werkzeug zur Erstellung von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Wenn nicht vollständig bestimmt, könnte die Zielkante bzw. der Zielpunkt ebenfalls verändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Extend/de&oldid=1414682>"
