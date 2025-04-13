---
title: Assembly3 PunktAufLinie
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 PunktAufLinie |
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

Davon ausgehend, dass ein Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, wird das zweite Objekt auf eine Position bewegt, wo der Ursprung des Punktelements auf der Z-Achse des Linienelements liegt.

Punktelemente haben keine Ausdehnung egal in welcher Richtung (Länge ist Null) und daher kann auch keine Orientierung ermittelt werden, d.h. dass ihre LKS nur für weitere Elementparameter benötigt werden. Die Ausrichtung der LKS bleibt immer die gleiche, wie die des globalen Koordinatensystems und kann nicht dazu genutzt werden, die Anzahl von Freiheitsgraden im Zusammenhang mit Drehungen zu reduzieren.
Linienelementehaben einen Ursprung und eine Richtung, die durch die Z-Achse des LKS repräsentiert wird. Eine Richtung für die X- und Y-Achsen kann nicht ermittelt werden und daher kann die Drehung um die Z-Achse nicht zur Reduzierung der Freiheitsgrade genutzt werden. (Es funktioniert im Zusammenhang mit Punktelementen sowieso nicht)

Im Bezug auf das erste Element, kann sich das folgende Objekt noch entlang der Z-Achse bewegen und um den Ursprung herum drehen (um alle drei Achsen). Dies lässt für jede einzelne Verbindung vier Freiheitsgrade unbestimmt.

## Anwendung

1. Zwei Objekte in einen Zusammenbau einfügen.
2. Ein Punktelement des einen und ein gerades Kantenelement des anderen Objekts auswählen.
3. Schaltfläche![](/images/Assembly_ConstraintPointOnLine.svg) Punkt auf Line drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointOnLine/de&oldid=1536642>"