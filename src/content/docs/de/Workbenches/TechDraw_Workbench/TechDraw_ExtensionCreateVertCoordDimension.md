---
title: TechDraw ErgänzungVertikaleKoordinatenmaße
---

|                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw ErgänzungVertikaleKoordinatenmaße                                                                                                                                                                                                                                                         |
| Menüeintrag                                                                                                                                                                                                                                                                                        |
| TechDraw → Ergänzungen: Maße → Vertikale Koordinatenmaße erstellen                                                                                                                                                                                                                                 |
| Arbeitsbereich                                                                                                                                                                                                                                                                                     |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                                                                                                                                         |
| Standardtastenkürzel                                                                                                                                                                                                                                                                               |
| _Keiner_                                                                                                                                                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                                                                                                                                                              |
| 0.20                                                                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                                                                         |
| [TechDraw ErgänzungHorizontaleKoordinatenmaße](/TechDraw_ExtensionCreateHorizCoordDimension/de "TechDraw ExtensionCreateHorizCoordDimension/de"), [TechDraw ErgänzungSchrägeKoordinatenmaße](/TechDraw_ExtensionCreateObliqueCoordDimension/de "TechDraw ExtensionCreateObliqueCoordDimension/de") |
|                                                                                                                                                                                                                                                                                                    |

## Beschreibung

Das Werkzeug **TechDraw ErgänzungVertikaleKoordinatenmaße** erstellt eine vertikale Stufenbemaßung: mehrere Maße in gleichem Abstand mit derselben Basislinie.

![](/images/TechDraw_ExtensionCreateVertCoordDimensionExample.png)

Rechts die erzeugten Maße

## Anwendung

1. Wahlweise kann der Abstand zwischen den Maßen mit dem Werkzeug ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [TechDraw ErgänzungLinienmerkmaleAuswählen](/TechDraw_ExtensionSelectLineAttributes/de "TechDraw ExtensionSelectLineAttributes/de") festgelegt werden.
2. Drei oder mehr Knotenpunkte auswählen.
3. Die Reihenfolge der Auswahl der beiden ersten Knotenpunkte bestimmt die Position der Basislinie. Wenn der erste gewählte Knotenpunkt unterhalb vom zweiten liegt, dann ist die Basislinie beim untersten Knotenpunkt, sonst beim obertsten Knotenpunkt.
4. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Einstellung](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") **Maß-Werkzeuge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetzt: Den Nach-unten-Pfeil rechts neben der Schaltfläche ![](/images/TechDraw_Dimension.svg) ![](/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Vertikale Koordinatenmaße erstellen** in der Ausklappliste auswählen.
   - Hat die Einstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Vertikale Koordinatenmaße erstellen drücken.
   - Den Menüeintrag **TechDraw → Ergänzungen: Maße → ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Vertikale Koordinatenmaße erstellen** auswählen.
5. Stufenmaße mit zentrierten Maßzahlen werden eingefügt.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateVertCoordDimension/de&oldid=1488346>"
