---
title: Assembly3 PunktAufPunkt
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 PunktAufPunkt                                       |
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

Der Befehl ![](/images/Assembly_ConstraintPointCoincident.svg) Assembly3 PunktAufPunkt stellt eine Verbindung zwischen zwei Objekten eines Zusammenbaus her und fixiert den Abstand zwischen ihnen sowie ihre Ausrichtung zueinander. Die Gewählten Elemente beider Objekte oder genauer ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein Objekt zum anderen zu positionieren.

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, wird das nächste Objekt auf eine Position bewegt, wo beide LKS-Ursprünge deckungsgleich sind.

Im Bezug auf das erste Element, kann sich das weitere Objekte noch um den Ursprung herum bewegen (um alle drei Achsen). Dies lässt für jede einzelne Verbindung drei Freiheitsgrade unbestimmt.

Diese Bedingung akzeptiert alle Arten von Elementen!

## Anwendung

1. Zwei Objekte in einen Zusammenbau einfügen.
2. Je ein Element pro Objekt auswählen.
3. Den Befehl ![](/images/Assembly_ConstraintPointCoincident.svg) Assembly3 Punkt auf Punkt aktivieren durch
   - Die Schaltfläche ![](/images/Assembly_ConstraintPointCoincident.svg) Create "PlaneCoincident" constraint.

## Kinematische Entsprechung

In einem kinematischen Zusammenhang stellt diese Bedingung ein **Kugelgelenk** dar.

In der Realität kann man nicht mit Punkten arbeiten, daher nutzt man Kugelflächen (sphärische Flächen) als Ersatz für die verbundenen Punkte.

![](/images/Assembly3_ConstraintPointsCoincident-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintPointsCoincident-02.png)

Objekte mit gesetzter Bedingung vor und nach Aktivierung des Lösers

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointsCoincident/de&oldid=1536645>"
