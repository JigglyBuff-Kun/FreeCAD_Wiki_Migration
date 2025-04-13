---
title: Std RechteckElementAuswahl
---

|                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- |
| Std RechteckElementAuswahl                                                                                                       |
| Menüeintrag                                                                                                                      |
| Edit → Box element selection                                                                                                     |
| Arbeitsbereich                                                                                                                   |
| Alle                                                                                                                             |
| Standardtastenkürzel                                                                                                             |
| Shift+E                                                                                                                          |
| Eingeführt in Version                                                                                                            |
| -                                                                                                                                |
| Siehe auch                                                                                                                       |
| [Part Rechteckauswahl](/Part_BoxSelection/de "Part BoxSelection/de"), [Std AllesAuswählen](/Std_SelectAll/de "Std SelectAll/de") |
|                                                                                                                                  |

## Beschreibung

Der Befehl **Std RechteckElementAuswahl** wählt Flächen innerhalb eines benutzerdefinierten Bereichs (Auswahlrechteck, engl. Box) in der [3D-Ansicht](/3D_view/de "3D view/de") aus.

Note that if a whole object falls inside the rectangle, the object itself, instead of its faces, is selected. To avoid this create two box selections for each object (hold down Ctrl while dragging the 2nd rectangle), or use the [Part BoxSelection](/Part_BoxSelection "Part BoxSelection") command instead.

## Anwendung

1. Es gibt mehrere Wege, den Befehl aufzurufen:
   - Den Menüeintrag **Bearbeiten → ![](/src/assets/images/Std_BoxElementSelection.svg) Box-Element Auswahl** auswählen.
   - Das Tastaturkürzel: Shift+E.
2. Eine der folgenden Möglichkeiten auswählen:
   - Ein Rechteck von links nach rechts aufziehen, um Flächen auszuwählen, deren geometrische Mittelpunkte im Rechteck liegen.
   - Ein Rechteck von rechts nach links aufziehen, um Flächen auszuwählen, die (teilweise) innerhalb des Rechtecks liegen oder davon berührt werden.

## Hinweise

- Benutze den [Std Rechteckauswahl](/Std_BoxSelection/de "Std BoxSelection/de")-Befehl, um Objekte statt Flächen mit dem Auswahlrechteck auszuwählen.
- Dieser Befehl kann nicht genutzt werden, um Elemente in einer Skizze auszuwählen. Siehe Arbeitsbereich [Sketcher](/Sketcher_Workbench/de#Auswahlmethoden "Sketcher Workbench/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_BoxElementSelection/de&oldid=1470959>"
