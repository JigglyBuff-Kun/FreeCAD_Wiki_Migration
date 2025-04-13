---
title: Assembly3 RichtungenAngleichen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 RichtungenAngleichen |
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

Dieses Werkzeug verbindet zwei oder mehr Objekte eines Zusammenbaus und gleicht ihre Ausrichtungen an. Die gewählten Elemente der einzelnen Objekte oder präziser ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein oder mehrere Objekte im Verhältnis zu einem anderen Objekt zu positionieren.

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, werden die weiteren Objekte auf Positionen bewegt, wo alle LKS die gleiche Ausrichtung besitzen, d.h. dass sich alle X- und Z-Achsen parallel ausrichten (wodurch auch die Y-Achsen parallel liegen).

Der Abstand ihrer Ursprünge in X-, Y- und Z-Richtung ist nicht festgelegt. Im Bezug auf das erste Element, können sich die weiteren Objekte noch in X-, Y- und Z-Richtung bewegen. Dies lässt für jede einzelne Verbindung drei Freiheitsgrade unbestimmt.

Diese Beziehung akzeptiert ebene Flächen.

## Anwendung

1. Zwei oder mehr Objekte in einen Zusammenbau einfügen.
2. Je ein ebenes Flächenelement pro Objekt auswählen.
3. Schaltfläche![](/images/Assembly_ConstraintSameOrientation.svg) Richtungen angleichen drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSameOrientation/de&oldid=1536668>"