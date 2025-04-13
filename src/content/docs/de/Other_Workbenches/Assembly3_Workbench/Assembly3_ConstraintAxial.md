---
title: Assembly3 AxialeAusrichtung
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                               |
| ------------------------------------------------------------- |
| Assembly3 AxialeAusrichtung                                   |
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

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, werden die weiteren Objekte auf Positionen bewegt, wo die Z-Achsen kollinear sind.

Der Abstand ihrer Ursprünge auf der gemeinsamen Z-Achse und die Winkel zwischen ihren X-Achsen (und genauso ihren Y-Achsen) sind nicht festgelegt. Im Bezug auf das erste Element, können sich die weiteren Objekte noch in Z-Richtung bewegen und um die Z-Achse drehen. Dies lässt für jede einzelne Verbindung zwei Freiheitsgrade unbestimmt.

Diese Beziehung akzeptiert

: - gerade Kanten, die sich kollinear ausrichten,
: - ebene Flächen, die sich über ihre Flächennormalen ausrichten,
: - zylindrische Flächen, die sich über ihre Achsrichtung ausrichten.

Die unterschiedliche Geometriearten können gemischt werden.

## Anwendung

1. Zwei oder mehr Objekte in einen Zusammenbau einfügen.
2. Je ein Element pro Objekt auswählen.
3. Den Befehl ![](/images/Assembly_ConstraintAxial.svg) Assembly3 AxialeAusrichtung aktivieren durch
   - Die Schaltfläche ![](/images/Assembly_ConstraintAxial.svg) Create "AxialAlignment" constraint.

## Kinematische Entsprechung

In einem kinematischen Zusammenhang stellt diese Bedingung ein **zylindrisches Gelenk** dar.

In der Realität kann man nicht mit Achsen arbeiten, daher nutzt man Zylinderflächen als Ersatz für die verbundenen Achsen.

![](/images/Assembly3_ConstraintAxial-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintAxial-02.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintAxial-03.png)

Objekte mit gesetzter Bedingung vor und nach Aktivierung des Lösers und letztlich entlang der Achse verschoben

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAxial/de&oldid=1427918>"
