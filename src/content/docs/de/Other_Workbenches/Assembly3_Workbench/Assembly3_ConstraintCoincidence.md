---
title: Assembly3 DeckungsgleicheEbenen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 DeckungsgleicheEbenen                               |
| Menüeintrag                                                   |
| _Keiner_                                                      |
| Arbeitsbereich                                                |
| [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") |
| Standardtastenkürzel                                          |
| _Keiner_                                                      |
| Eingeführt in Version                                         |
| -                                                             |
| Siehe auch                                                    |
| _Keiner_                                                      |
|                                                               |

## Beschreibung

Dieses Werkzeug verbindet zwei oder mehr Objekte eines Zusammenbaus und gleicht ihre Ausrichtungen an. Die gewählten Elemente der einzelnen Objekte oder präziser ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein oder mehrere Objekte im Verhältnis zu einem anderen Objekt zu positionieren.

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, werden die weiteren Objekte auf Positionen bewegt, wo die X-Y-Ebenen aller LKS komplanar und die Z-Achsen kollinear sind.

Optional kann für diese Verbindung ein Abstand zwischen den X-Y-Ebenen gesetzt werden, sodass sie parallel zueinander liegen.

Die Winkel zwischen ihren X-Achsen (und genauso ihren Y-Achsen) sind nicht festgelegt.
Im Bezug auf das erste Element, können sich die weiteren Objekte noch um die Z-Achse drehen.
Dies lässt für jede einzelne Verbindung einen Freiheitsgrad unbestimmt.

Diese Verbindung kann als Scharnier in kinematischen Systemen benutzt werden.

Die Drehung kann gestoppt werden, durch das setzen der Variablen Lock Angle im Eigenschaften-Fenster (Properties Panel) auf true, und der Winkel kann auf einen bestimmten Wert gesetzt werden.
Mit einem gesteuerten Wert, kann die Verbindung als Antrieb in einem kinematischen System verwendet werden.

## Anwendung

1. Zwei oder mehr Objekte in einen Zusammenbau einfügen.
2. Je ein planeres Flächenelement pro Objekt auswählen.
3. Den Befehl ![](/images/Assembly_ConstraintCoincidence.svg) Assembly3 DeckungsgleicheEbenen aktivieren durch
   - Die Schaltfläche ![](/images/Assembly_ConstraintCoincidence.svg) Create "PlaneCoincident" constraint.

## Kinematische Entsprechung

In einem kinematischen Zusammenhang stellt diese Bedingung ein Scharnier oder **Drehgelenk** dar, wenn sie mit Bögen und Kreisen verwendet wird.

In der Realität erlauben die Formen der Objekte eine Drehung und verhindert eine Verschiebung; um dies zu simulieren, nutzt man in diesem Falle Bögen und Kreise.

![](/images/Assembly3_ConstraintCoincidence-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintCoincidence-02.png)

Objekte mit gesetzter Bedingung vor und nach Aktivierung des Lösers

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintCoincidence/de&oldid=1536584>"
