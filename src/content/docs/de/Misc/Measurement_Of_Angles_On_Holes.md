---
title: Vermessung von Winkeln an Bohrungen
---
|  |
| --- |
| Tutorium |
| Thema |
| TechDraw |
| Niveau |
| Basis |
| Zeit zum Abschluss |
| 1 Minute |
| Autoren |
| AnHi |
| FreeCAD-Version |
| 0.19 |
| Beispieldateien |
| *None* |
| Siehe auch |
| *None* |
|  |

## Einführung

Dieses Tutorium erklärt, wie man Mittellinien unter Verwendung des ![](/images/Workbench_TechDraw.svg) [TechDraw Arbeitsbereich](/TechDraw_Workbench/de "TechDraw Workbench/de") an ausgerichteten Bohrungen erstellt.

Beim Erstellen von Bohrungswinkeln ist es nicht möglich, vertikale oder horizontale Mittellinien (false/true) aus den Ansichtseigenschaften zu verwenden. Für diese Notwendigkeit werden Hilfslinien und/oder Hilfspunkte erstellt.

## Vorgehensweise

1. Mittellinien an Bohrungen setzen:

Es gibt einige Möglichkeiten, eine Mittellinie für Bohrungen zu erzeugen.
Zuerst müssen die Linien oder Punkte auf der Bohrung wie unten dargestellt ausgewählt werden. Zweitens können die folgenden Werkzeuge aus der Werkzeugleiste verwendet werden, um die Mittellinie zu erstellen:

:   ![](/images/TechDraw_2PointCenterLine.svg) [Mittellinie zwischen 2 Punkten hinzufügen](/TechDraw_2PointCenterLine/de "TechDraw 2PointCenterLine/de")
:   ![](/images/TechDraw_2LineCenterLine.svg) [Mittellinie zwischen 2 Linien hinzufügen](/TechDraw_2LineCenterLine/de "TechDraw 2LineCenterLine/de")

![](/images/TechDraw_Tutorial_2PointCenterLine_example.png)

Oben: erstellt mit ![](/images/TechDraw_2PointCenterLine.svg) was Mittellinien zwischen 2 Punkten erzeugt

![](/images/TechDraw_Tutorial_2LineCenterLine_example.png)

Oben: erstellt mit ![](/images/TechDraw_2LineCenterLine.svg) was Mittellinien zwischen 2 Linien erzeugt

Wähle im zugehörigen Dialogfeld der Comboansicht im Aufgabenpaneel unter *Orientierung*
"Ausgerichtet" für Achsen außerhalb der Hauptachsen. *Verlängert Über* bedeutet die Länge der Mittellinie über die Körperlinie in der Zeichnung hinaus. Mit *Verschiebung Horizontal* und *Verschiebung Vertikal* kann sich die Mittellinie bei Bedarf in horizontaler oder vertikaler Richtung bewegen. Mit *Stil* ist die Gestalt der Mittellinie gemeint.

![](/images/Create-Center-Line3P.JPG)

Oben: Dialogfenster

Die erzeugte Mittellinie kann sich ändern. Wähle die Mittellinie aus, und drücke die Schaltfläche ![](/images/TechDraw_2LineCenterLine.svg) oder ![](/images/TechDraw_2PointCenterLine.svg) aus der Werkzeugleiste, in der du die Mittellinie erzeugt hast. Lösche die Mittellinie nur mit ![](/images/TechDraw_CosmeticEraser.svg) aus der Werkzeugleiste, nachdem du die Mittellinie ausgewählt hast.

2. Winkelfestlegung:

Quadrantenpunkte wähle mit ![](/images/TechDraw_Quadrants.svg) aus der Werkzeugleiste.
Wähle als nächstes die Punkte wie unten gezeigt und verwende ![](/images/TechDraw_Dimension_Angle3Pt.svg) aus der Werkzeugleiste, um den Winkel zu erstellen. Andere Reihenfolgen erzeugen andere Winkel.
Gibt es keinen Fangpunkt auf der Mittellinie, ändere die "ISO Zahl" in den Eigenschaften.

![](/images/AnHi11.PNG)

Oben: Reihenfolge der Auswahl

Retrieved from "<http://wiki.freecad.org/index.php?title=Measurement_Of_Angles_On_Holes/de&oldid=1251824>"