---
title: Assembly3 GleicheWinkel
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 GleicheWinkel |
| Menüeintrag |
| *Keiner* |
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

Dieses Werkzeug stellt eine Verbindung zwischen zwei Objekten eines Zusammenbaus her und setzt einen Winkel zwischen ihnen, abhängig von dem Wert eines weiteren Winkels, fest. Die Gewählten Elemente beider Objekte oder präziser ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein Objekt zum anderen zu positionieren.

Es arbeitet sowohl mit 3D-Linien-Elementen und planaren Flächenelementen, als auch mit 2D-Linien-Elementen auf einer Skizzenebene.

Die Richtung der Linien und auch die Flächennormalen werden durch die Z-Achse des jeweiligen LKS repräsentiert, wodurch tatsächlich der Winkel zwischen den Z-Achsen beider Elemente festgelegt wird (auf Basis eines weiteren Winkels zwischen zwei Z-Achsen).

## Anwendung

1. Zwei Objekte in einen Zusammenbau einfügen.
2. Jeweils ein Linienelement oder ein planeres Flächenelement beider Objekte auswählen.
3. Schaltfläche ![](/images/Assembly_ConstraintEqualAngle.svg) Gleiche Winkel drücken.

:   Zusätzlich kann es erforderlich sein die Funktion "Element umdrehen" zu nutzen, wenn die LKS nicht wie erwartet ausgerichtet sind.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintEqualAngle/de&oldid=1536598>"