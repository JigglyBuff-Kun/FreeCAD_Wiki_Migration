---
title: Assembly3 BewegungVerhindern
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 BewegungVerhindern |
| Menüeintrag |
| Assembly3 → Lock mover |
| Arbeitsbereich |
| [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Assembly_LockMover.svg) Bewegung verhindern Ist ein Umschalter, der verhindert, dass Einzelteile bewegt werden, wenn sie mit der Bedingung zum ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") fixiert wurden.

Wenn aktiviert, kann keines der Bewegungswerkzeuge ![](/images/Assembly_Move.svg) [Teil bewegen](/Assembly3_MovePart/de "Assembly3 MovePart/de"), ![](/images/Assembly_AxialMove.svg) [Axial bewegen](/Assembly3_AxialMove/de "Assembly3 AxialMove/de") oder ![](/images/Assembly_QuickMove.svg) [Schnelles Bewegen](/Assembly3_QuickMove/de "Assembly3 QuickMove/de") ausgewählt werden, solange die Auswahl ein festgesetztes Objekt enthält. Dies scheint nicht für 2D-Geometrie zu gelten. (siehe [Hinweise](#Hinweise)).

## Anwendung

1. Den Befehl ![](/images/Assembly_LockMover.svg) **Bewegung verhindern** aktivieren durch:
   * Die Schaltfläche ![](/images/Assembly_LockMover.svg) Bewegung verhindern.
   * Den Menüeintrag **Assembly3 → ![](/images/Assembly_LockMover.svg) Bewegung verhindern**.

## Hinweise

Ausgewählte **2D-Geometrien**, wie Draft-Linien, -Bögen und -Kreise, die mit der Randbedingung Sperren festgehalten werden, deaktivieren die Bewegungswerkzeuge nicht. Während Kreise und Bögen ihre Position weiterhin beibehalten, wenn ein Bewegungswerkzeug auf sie angewendet wird, können Linien verschoben und gedreht werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_LockMover/de&oldid=1177145>"