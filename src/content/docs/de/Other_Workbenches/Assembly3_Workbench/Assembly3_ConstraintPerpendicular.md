---
title: Assembly3 RechtwinkligFestlegen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 RechtwinkligFestlegen |
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

Dieses Werkzeug stellt eine Verbindung zwischen zwei Objekten eines Zusammenbaus her und fixiert den Abstand zwischen ihnen sowie ihre Ausrichtung zueinander. Die Gewählten Elemente beider Objekte oder präziser ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein Objekt zum anderen zu positionieren.

Davon ausgehend, dass das erste Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, wird das nächste Objekt auf eine Position bewegt, wo beide Z-Achsen rechtwinklig sind.

Der Abstand ihrer Ursprünge in X-, Y- und Z-Richtung und die Winkel zwischen ihren X-Achsen und Y-Achsen sind nicht festgelegt. Im Bezug auf das erste Element, kann sich das zweite Objekt noch in X-, Y- und Z-Richtung bewegen und um beide Z-Achsen drehen. Dies lässt für jede Verbindung fünf Freiheitsgrade unbestimmt.

Diese Beziehung akzeptiert gerade Kanten und ebene Flächen.

## Anwendung

1. Zwei Objekte in einen Zusammenbau einfügen.
2. Je eine gerade Kante oder ein ebenes Flächenelement pro Objekt auswählen.
3. Schaltfläche![](/images/Assembly_ConstraintPerpendicular.svg) Rechtwinklig festlegen drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPerpendicular/de&oldid=1536637>"