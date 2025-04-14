---
title: Sketcher BSplineKnotenVielfachheitErhöhen
---

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher BSplineKnotenVielfachheitErhöhen                                                                                         |
| Menüeintrag                                                                                                                       |
| Skizze → B-Spline-Werkzeuge → Vielfachheit eines Knotens erhöhen                                                                  |
| Arbeitsbereich                                                                                                                    |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                        |
| Standardtastenkürzel                                                                                                              |
| _Keiner_                                                                                                                          |
| Eingeführt in Version                                                                                                             |
| 0.17                                                                                                                              |
| Siehe auch                                                                                                                        |
| [BSplineKnotenVielfachheitVerringern](/Sketcher_BSplineDecreaseKnotMultiplicity/de "Sketcher BSplineDecreaseKnotMultiplicity/de") |
|                                                                                                                                   |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Sketcher BSplineKnotenVielfachheitErhöhen erhöht die Vielfachheit eines [B-Spline](/B-Splines/de "B-Splines/de")-Knotens.

## Anwendung

1. Einen B-Spline-Knoten auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Vielfachheit eines Knotens erhöhen drücken.
   - Den Menüeintrag **Skizze → B-Spline-Werkzeuge → ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Vielfachheit eines Knotens erhöhen** auswählen.

## Beispiel

B-Splines sind grundsätzlich eine Kombination von [Bézier-Kurven](/B-Splines/de#B.C3.A9zierKurven "B-Splines/de") (schön erklärt in [diesem](https://www.youtube.com/watch?v=bE1MrrqBAl8) und [diesem](https://www.youtube.com/watch?v=xXJylM2S72s) (engl.) Video). Die Punkte an denen zwei Teile einer Bézier-Kurve verbunden sind, werden Knoten genannt. Ein Knoten mit der Vielfachheit _m_ auf einem B-spline vom Grad _d_ (degree) bedeutet, dass die Kurve links und der rechts des Knotens mindestens eine Ableitung "n"-ter Ordnung besitzt (_Cn_-Stetigkeit genannt) wobei gilt _n = d - m_.

In diesem kubischen B-Spline (Grad 3) gibt es 3 Abschnitte, d.h. 3 Kurven sind an 2 Knoten verbunden. Die Knoten haben die Vielfachheit 1.

Die Vielfachheit wird durch die Zahlen in runden Klammern dargestellt. Siehe ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Sketcher BSplineKnotenVielfachheit](/Sketcher_BSplineKnotMultiplicity/de "Sketcher BSplineKnotMultiplicity/de").

![](/images/Sketcher_KnotMultiplicity_multiplicity1.png)

B-Spline dessen Knoten beide die Vielfachheit 1 besitzen.

Eine Vielfachheit von 3 ändert diesen B-Spline so, dass sogar die ersten Ableitungen nicht gleich sind (*C*0-Stetigkeit). Hier ist derselbe B-Spline mit einer auf 3 erhöhten Vielfachheit des linken Knotens:

![](/images/Sketcher_KnotMultiplicity_multiplicity3.png)

Derselbe B-Spline mit einer Vielfachheit 3 der Knoten. Ein Kontrollpunkt wurde bewegt, um zu zeigen, dass der Knoten eine _C0_-Stetigkeit besitzt.

Eine Folge aus einer höheren Vielfachheit ist, dass auf Kosten verlorener Stetigkeit eine örtliche Einstellbarkeit erzielt wurde. Das bedeutet, dass die Änderung eines Kontrollpunktes den B-Spline nur örtlich beeinflusst.

Dies erkennt man in diesem Beispiel, in dem der B-Spline mit Vielfachheit 1 der Knoten aus dem ersten Beispiel genommen wurde und in dem der zweite Kontrollpunkt von rechts nach oben verschoben wurde. Als Ergebnis hat sich die komplette Form des B-Splines geändert:

![](/images/Sketcher_KnotMultiplicity_locality1.png)

Nach dem Erhöhen der Vielfachheit der Knoten auf 2 ergibt das Bewegen des zweiten Kontrollpunktes von rechts nur signifikante Änderungen auf der rechten Seite der Form:

![](/images/Sketcher_KnotMultiplicity_locality2.png)

## Hinweise

- Die Vielfachheit der Knoten kann auch mit [Sketcher BSplineKnotenEinfügen](/Sketcher_BSplineInsertKnot/de "Sketcher BSplineInsertKnot/de") erhöht werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/de&oldid=1418307>"
