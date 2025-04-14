---
title: Sketcher Verschieben
---

:::caution
Dieses Werkzeug ist veraltet; es wird in1.0 und neuernicht mehr zur Verfügung stehen. Stattdessen kannSketcher Verschiebenverwendet werden.
:::

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| Sketcher Verschieben                                                                                                 |
| Menüeintrag                                                                                                          |
| Sketch → Skizzen-Werkzeuge → Verschieben                                                                             |
| Arbeitsbereich                                                                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                           |
| Standardtastenkürzel                                                                                                 |
| Z M                                                                                                                  |
| Eingeführt in Version                                                                                                |
| 0.18                                                                                                                 |
| Siehe auch                                                                                                           |
| [Sketcher Klonen](/Sketcher_Clone/de "Sketcher Clone/de"), [Sketcher Kopieren](/Sketcher_Copy/de "Sketcher Copy/de") |
|                                                                                                                      |

## Beschreibung

Der Befehl ![](/images/Sketcher_Move.svg) Sketcher Verschieben verschiebt die ausgewählten Skizzenelemente von einem Punkt zum anderen, wobei der zuletzt ausgewählte Punkt als Referenz verwendet wird.

![](/images/Sketcher_move.png)

Die Reihenfolge der Klicks wird durch gelbe Pfeile mit Zahlen angezeigt. Ein Element **A** auswählen; Es erscheint eine durch zwei rote Linien gekennzeichnete Vektorlinie, die vom Ausgangspunkt **A** zum Mauszeiger mit Positionsnummer **2** verläuft. Zieht man den Mauszeiger auf die Zielposition **3**, wird das Element nun als **B** dargestellt und automatisch auf Punkt **3** (koinzident) festgelegt.

## Anwendung

1. Skizzenelemente für den Verschiebevorgang auswählen.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_Move.svg) Verschieben drücken.
   - Das Tastaturkürzel Z dann M.
   - Den Menüeintrag **Skizze → Skizzen-Werkzeuge → ![](/images/Sketcher_Move.svg) Verschieben** auswählen.
3. Den Mauszeiger in der [3D-Ansicht](/3D_view/de "3D view/de") auf die gewünschten Position bewegen.  
   Wird die Ctrl-Taste (Cmd in macOS) gedrückt gehalten, kann der zur Position gehörige Winkel in 5° Schritten eingestellt werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
4. Mit einem Links-Klick in der 3D-Ansicht wird die Verschiebung abgeschlossen. Vorhandene Randbedingungen werden ebenfalls verschoben.
5. Soll ein Element gelöst und frei bewegt werden, löscht man seine festhaltenden Randbedingungen und verschiebt es mit der Maus.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Move/de&oldid=1403981>"
