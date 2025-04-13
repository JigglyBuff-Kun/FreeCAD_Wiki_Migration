---
title: Points Strukturieren
---
|  |
| --- |
| Points Strukturieren |
| Menüeintrag |
| Punkte → Strukturierte Punktwolke |
| Arbeitsbereich |
| [Points](/Points_Workbench/de "Points Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl **Points Strukturieren** erzeugt eine strukturierte Punktwolke aus den Punkten einer vorhandenen verstreuten Punktwolke. Eine strukturierte Punktwolke hat den Vorteil, dass die Tesselierung wesentlich einfacher ist.

Der Befehl funktioniert nur für Punktwolken, deren Punkte, aus einer bestimmten Richtung betrachtet, in einem regelmäßigen 2D-Gitter organisiert sind. Diese Punktwolken werden typischerweise von [Streifenlicht-3D-Scanner](https://en.wikipedia.org/wiki/Structured-light_3D_scanner) erzeugt und haben keine Hinterschneidungen. Für komplexe Objekte müssen Punktwolken aus vielen verschiedenen Blickrichtungen kombiniert werden.

## Anwendung

1. Der Befehl geht davon aus, dass die Blickrichtung der Punktwolke parallel zur Z-Achse des globalen Koordinatensystems ist. Wenn dies nicht der Fall ist: Die Daten-Eigenschaft**Placement** des Punktwolkenobjekts entsprechend anpassen.
2. Das Punktwolkenobjekt auswählen.
3. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Points_Structure.svg) Strukturierte Punktwolke drücken.
   * Den Menüeintrag **Punkte → ![](/images/Points_Structure.svg) Strukturierte Punktwolke** auswählen.

## Eigenschaften

Siehe [Points Konvertieren](/Points_Convert/de "Points Convert/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Structure/de&oldid=1341767>"