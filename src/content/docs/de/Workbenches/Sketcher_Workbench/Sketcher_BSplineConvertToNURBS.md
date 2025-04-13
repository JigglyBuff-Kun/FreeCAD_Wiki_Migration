---
title: Sketcher BSplineUmwandelnInNURBS
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| Sketcher BSplineUmwandelnInNURBS                                                    |
| Menüeintrag                                                                         |
| Skizze → B-Spline-Werkzeuge → Geometrie in B-Spline konvertieren                    |
| Arbeitsbereich                                                                      |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                          |
| Standardtastenkürzel                                                                |
| _Keiner_                                                                            |
| Eingeführt in Version                                                               |
| 0.17                                                                                |
| Siehe auch                                                                          |
| [Sketcher BSplineErstellen](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de") |
|                                                                                     |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_BSplineConvertToNURBS.svg) Sketcher BSplineUmwandelnInNURBS wandelt Kanten in [B-Splines](/B-Splines/de "B-Splines/de").

![](/src/assets/images/Sketcher_BSplineConvertToNurb.png)

Verschiedene Objekte vor dem Konvertieren.

![](/src/assets/images/Sketcher_BSplineConvertToNurb1.png)

Dieselben Objekte nach dem Konvertieren.

## Anwendung

1. Eine oder mehrere Kanten auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_BSplineConvertToNURBS.svg) Geometrie in B-Spline konvertieren drücken.
   - Den Menüeintrag **Skizze → B-Spline-Werkzeuge → ![](/src/assets/images/Sketcher_BSplineConvertToNURBS.svg) Geometrie in B-Spline konvertieren** auswählen.
3. Die Kanten werden umgewandelt.

## Hinweise

- Sicherstellen, dass [BSplineGrad](/Sketcher_BSplineDegree/de "Sketcher BSplineDegree/de"), [BSplinePolygon](/Sketcher_BSplinePolygon/de "Sketcher BSplinePolygon/de"), [BSplineKamm](/Sketcher_BSplineComb/de "Sketcher BSplineComb/de"), [BSplineKnotenVielfachheit](/Sketcher_BSplineKnotMultiplicity/de "Sketcher BSplineKnotMultiplicity/de") und/oder [BSplinePolGewicht](/Sketcher_BSplinePoleWeight/de "Sketcher BSplinePoleWeight/de") sichtbar sind, andernfalls wird scheinbar nichts passieren.
- Wurden gerade Linien umgewandelt, muss der [B-Spline-Grad erhöht](/Sketcher_BSplineIncreaseDegree/de "Sketcher BSplineIncreaseDegree/de") werden, um sie "biegsam" zu machen.
- Das Werkzeug entfernt nicht die interne Geometrie von [Kegelschnitten](/Sketcher_Workbench/de#Sketcher_CompCreateConic "Sketcher Workbench/de"). Dies muss von Hand erfolgen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineConvertToNURBS/de&oldid=1410120>"
