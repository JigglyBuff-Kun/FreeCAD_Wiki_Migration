---
title: Sketcher BSplineKnotenVielfachheitVerringern
---

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher BSplineKnotenVielfachheitVerringern                                                                                   |
| Menüeintrag                                                                                                                    |
| Skizze → B-Spline-Werkzeuge → Vielfachheit eines Spline-Knotens verringern                                                     |
| Arbeitsbereich                                                                                                                 |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                     |
| Standardtastenkürzel                                                                                                           |
| _Keiner_                                                                                                                       |
| Eingeführt in Version                                                                                                          |
| 0.17                                                                                                                           |
| Siehe auch                                                                                                                     |
| [BSplineKnotenVielfachheitErhöhen](/Sketcher_BSplineIncreaseKnotMultiplicity/de "Sketcher BSplineIncreaseKnotMultiplicity/de") |
|                                                                                                                                |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Sketcher BSplineKnotenVielfachheitVerringern verringert die Vielfachheit eines [B-Spline](/B-Splines/de "B-Splines/de")-Knotens.

## Anwendung

1. Einen B-Spline-Knoten auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Vielfachheit eines B-Spline-Knotens verringern drücken.
   - Den Menüeintrag **Skizze → B-Spline-Werkzeuge → ![](/src/assets/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Vielfachheit eines B-Spline-Knotens verringern** auswählen.

## Beispiel

Siehe [Sketcher BSplineKnotenVielfachheitErhöhen](/Sketcher_BSplineIncreaseKnotMultiplicity/de#Beispiel "Sketcher BSplineIncreaseKnotMultiplicity/de")

## Hinweise

Wird die Vielfachheit eines Knotens auf null reduziert, wird der Knoten entfernt. Mathematisch betrachtet ist er null Mal im Knotenvektor vorhanden, d.h. es gibt keine Basisfunktion mehr. Um dies zu verstehen, braucht man etwas Mathematik; aber auch ein Blick auf die Vielfachheit verschafft Klarheit. Ein Knoten mit der Vielfachheit 0 heißt z.B., dass an der Position des Knotens zwei Teile einer Bézier-Kurve mit _C3_-Stetigkeit verbunden sind. So sollte die dritte Ableitung auf beiden Seiten des Knotens gleich sein. Für eine kubische Bézier-Kurve heißt das, dass beide Seiten ein Teil derselben Kurve sein müssen. Es gibt dann effektiv keinen Knoten mehr, der zwei Bézier-Kurven verbindet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/de&oldid=1418259>"
