---
title: Assembly3 MehrfachParallel
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 MehrfachParallel |
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

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, werden die weiteren Objekte auf Positionen bewegt, wo alle Z-Achsen parallel sind.

Der Abstand ihrer Ursprünge in X-, Y- und Z-Richtung und die Winkel zwischen ihren X-Achsen (und genauso ihren Y-Achsen) sind nicht festgelegt. Im Bezug auf das erste Element, können sich die weiteren Objekte noch in X-, Y- und Z-Richtung bewegen und um die Z-Achse drehen. Dies lässt für jede einzelne Verbindung vier Freiheitsgrade unbestimmt.

Diese Beziehung akzeptiert gerade Kanten und ebene Flächen, die sich parallel ausrichten.

## Anwendung

1. Zwei oder mehr Objekte in einen Zusammenbau einfügen.
2. Je ein ebenes Flächenelement pro Objekt auswählen.
3. Schaltfläche![](/images/Assembly_ConstraintMultiParallel.svg) Mehrfach parallel drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintMultiParallel/de&oldid=1536619>"