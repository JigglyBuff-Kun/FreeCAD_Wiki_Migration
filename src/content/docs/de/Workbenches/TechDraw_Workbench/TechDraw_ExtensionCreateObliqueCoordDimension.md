---
title: TechDraw ErgänzungSchrägeKoordinatenmaße
---

|                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw ErgänzungSchrägeKoordinatenmaße                                                                                                                                                                                                                                                       |
| Menüeintrag                                                                                                                                                                                                                                                                                    |
| TechDraw → Ergänzungen: Maße → Schräge Koordinatenmaße erstellen                                                                                                                                                                                                                               |
| Arbeitsbereich                                                                                                                                                                                                                                                                                 |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                                                                                                                                     |
| Standardtastenkürzel                                                                                                                                                                                                                                                                           |
| _Keiner_                                                                                                                                                                                                                                                                                       |
| Eingeführt in Version                                                                                                                                                                                                                                                                          |
| 0.20                                                                                                                                                                                                                                                                                           |
| Siehe auch                                                                                                                                                                                                                                                                                     |
| [TechDraw ErgänzungHorizontaleKoordinatenmaße](/TechDraw_ExtensionCreateHorizCoordDimension/de "TechDraw ExtensionCreateHorizCoordDimension/de"), [TechDraw ErgänzungVertikaleKoordinatenmaße](/TechDraw_ExtensionCreateVertCoordDimension/de "TechDraw ExtensionCreateVertCoordDimension/de") |
|                                                                                                                                                                                                                                                                                                |

## Beschreibung

Das Werkzeug **TechDraw ErgänzungSchrägeKoordinatenmaße** erzeugt eine schräge Stufenbemaßung: mehrere Maße in gleichem Abstand mit der gleichen Basislinie.

![](/images/TechDraw_ExtensionCreateObliqueCoordDimensionExample.png)

Rechts die erzeugten Maße

## Anwendung

1. Wahlweise kann der Abstand zwischen den Maßen mit dem Werkzeug ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [TechDraw ErgänzungLinienmerkmaleAuswählen](/TechDraw_ExtensionSelectLineAttributes/de "TechDraw ExtensionSelectLineAttributes/de") festgelegt werden.
2. Drei oder mehr Knotenpunkte auswählen.
3. Die Reihenfolge der Auswahl der beiden ersten Knotenpunkte bestimmt die Position der Basislinie. Wenn der erste gewählte Knotenpunkt links vom zweiten liegt, dann ist die Basislinie beim ganz linken Knotenpunkt , sonst beim ganz rechten Knotenpunkt.
4. Die beiden zuerst gewählten Knotenpunkte bestimmen auch die Richtung der Maße.
5. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Einstellung](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") **Maß-Werkzeuge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetzt: Den Nach-unten-Pfeil rechts neben der Schaltfläche ![](/images/TechDraw_Dimension.svg) ![](/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) Schräge Koordinatenmaße erstellen** in der Ausklappliste auswählen.
   - Hat die Einstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) Schräge Koordinatenmaße erstellen drücken.
   - Den Menüeintrag **TechDraw → Ergänzungen: Maße → ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) Schräge Koordinatenmaße erstellen** auswählen.
6. Stufenmaße mit zentrierten Maßzahlen werden eingefügt.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateObliqueCoordDimension/de&oldid=1488332>"
