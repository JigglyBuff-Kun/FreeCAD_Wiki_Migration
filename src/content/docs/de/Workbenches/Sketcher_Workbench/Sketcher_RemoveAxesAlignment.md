---
title: Sketcher AchsenausrichtungenEntfernen
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher AchsenausrichtungenEntfernen                      |
| Menüeintrag                                                |
| Sketch → Skizzen-Werkzeuge → Achsenausrichtung entfernen   |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| Z R                                                        |
| Eingeführt in Version                                      |
| 0.20                                                       |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_RemoveAxesAlignment.svg) Sketcher RemoveAxesAlignment entfernt die Achsenausrichtungen ausgewählter Kanten, indem die Randbedingungen ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) [HorizontalFestlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") und ![](/src/assets/images/Sketcher_ConstrainVertical.svg) [VertikalFestlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") durch die Randbedingungen [ParallelFestlegen](/Sketcher_ConstrainParallel/de "Sketcher ConstrainParallel/de") und [RechtwinkligFestlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de") ersetzt werden.
Die Kanten können dann gedreht werden, ohne dass ihre rechtwinklige Ausrichtung verloren geht.

## Anwendung

1. Zwei oder mehr Kanten, die horizontal oder vertikal festgelegt wurden, z.B. ein [Rechteck](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de").
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_RemoveAxesAlignment.svg) Achsenausrichtung entfernen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge → ![](/src/assets/images/Sketcher_RemoveAxesAlignment.svg) Achsenausrichtung entfernen** auswählen.
   - Das Tastaturkürzel Z dann R.

## Beispiel

![](/src/assets/images/SketcherRemoveAxesAlignmentStart.png)

Ein ausgewähltes Rechteck mit Horizontal- und Vertikalbedingungen

![](/src/assets/images/SketcherRemoveAxesAlignmentResult.png)

Das Rechteck nach Anwendung des Werkzeugs

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_RemoveAxesAlignment/de&oldid=1409847>"
