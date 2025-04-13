---
title: Assembly3 EbenenAusrichten
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 EbenenAusrichten |
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

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, werden die weiteren Objekte auf Positionen bewegt, wo die X-Y-Ebenen aller LKS komplanar sind und die Z-Achsen in die selbe Richtung zeigen.

Der Abstand ihrer Z-Achsen und die Winkel zwischen ihren X-Achsen (und genauso ihren Y-Achsen) sind nicht festgelegt. Im Bezug auf das erste Element, können sich die weiteren Objekte noch in X- und Y-Richtung bewegen und um die Z-Achse drehen. Dies lässt für jede einzelne Verbindung drei Freiheitsgrade unbestimmt.

## Anwendung

1. Zwei oder mehr Objekte in einen Zusammenbau einfügen.
2. Je ein planeres Flächenelement pro Objekt auswählen.
3. Schaltfläche![](/images/Assembly_ConstraintAlignment.svg) Ebenen ausrichten drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAlignment/de&oldid=1536590>"