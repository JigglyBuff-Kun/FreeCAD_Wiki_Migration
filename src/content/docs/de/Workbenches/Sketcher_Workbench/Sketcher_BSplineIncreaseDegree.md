---
title: Sketcher BSplineGradErhöhen
---

|                                                                                                          |
| -------------------------------------------------------------------------------------------------------- |
| Sketcher BSplineGradErhöhen                                                                              |
| Menüeintrag                                                                                              |
| Sketch → B-Spline-Werkzeuge → Grad des B-Splines erhöhen                                                 |
| Arbeitsbereich                                                                                           |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                               |
| Standardtastenkürzel                                                                                     |
| _Keiner_                                                                                                 |
| Eingeführt in Version                                                                                    |
| 0.17                                                                                                     |
| Siehe auch                                                                                               |
| [Sketcher BSplineGradVerringern](/Sketcher_BSplineDecreaseDegree/de "Sketcher BSplineDecreaseDegree/de") |
|                                                                                                          |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_BSplineIncreaseDegree.svg) Sketcher BSplineGradErhöhen Erhöht den Grad (Ordnung) der [B-Splines](/B-Splines "B-Splines").

## Anwendung

1. Einen oder mehrere B-Splines auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_BSplineIncreaseDegree.svg) Grad des B-Splines erhöhen drücken.
   - Den Menüeintrag **Skizze → B-Spline-Werkzeuge → ![](/images/Sketcher_BSplineIncreaseDegree.svg) Grad des B-Splines erhöhen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_BSplineIncreaseDegree.svg) Grad des B-Splines erhöhen** im Kontextmenü auswählen.

## Beispiel

B-Splines sind im Grunde eine Kombination aus [Bézierkurven](/B-Splines/de#B.C3.A9zierkurven "B-Splines/de") (sehr schön erklärt in [diesem](https://www.youtube.com/watch?v=bE1MrrqBAl8) und [diesem](https://www.youtube.com/watch?v=xXJylM2S72s) Video).

In diesem kubischen B-Spline (Grad 3) gibt es 3 Abschnitte, d.h. 3 Kurven, die an 2 Knoten verbunden sind.

Der Grad wird durch die Zahl in der Mitte repräsentiert. Siehe ![](/images/Sketcher_BSplineDegree.svg) [B-Spline-Grad ein- / ausblenden](/Sketcher_BSplineDegree/de "Sketcher BSplineDegree/de").

![](/images/Sketcher_BSplineDegree3.png)

B-Spline mit Grad 3 und 2 Knoten, die jeweils die Vielfachheit 1 besitzen.

The outer segments each have 2 control points, the inner segment has none to ensure the knots have multiplicity 1. See [this page](/Sketcher_BSplineDecreaseKnotMultiplicity#Description "Sketcher BSplineDecreaseKnotMultiplicity") for an explanation about multiplicity.

Increasing the degree to 4 will add control points without changing the shape of the B-spline:

![](/images/Sketcher_BSplineDegree4.png)

Same B-spline where the degree was changed from 3 to 4. Note that the knot multiplicity has also increased.

From this result you cannot get back to the initial state of the B-spline by decreasing the degree. Some information is lost when the degree of a B-spline is changed. Decreasing the degree back to 3 leads to this:

![](/images/Sketcher_BSplineDegree3from4.png)

Same B-spline where the degree was changed back from 4 to 3. Note that the knot multiplicity has increased again. Depending on the B-spline, the algorithm to decrease the degree may add a lot of knots to preserve the shape as has happened here.

Each segment now has 2 control points and each knot is coincident with an additional control point. The knots have _C0_ continuity so that the B-spline will get "corners" if you move a control point. The information of a higher continuity is therefore lost. See [this page](/Sketcher_BSplineDecreaseKnotMultiplicity#Description "Sketcher BSplineDecreaseKnotMultiplicity") for an explanation about continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseDegree/de&oldid=1417534>"
