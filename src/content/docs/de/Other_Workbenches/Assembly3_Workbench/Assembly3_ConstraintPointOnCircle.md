---
title: Assembly3 PunktAufKreis
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 PunktAufKreis |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Dieses Werkzeug verbindet zwei oder mehr Objekte eines Zusammenbaus und gleicht ihre Ausrichtungen an. Die gewählten Elemente der einzelnen Objekte oder präziser ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein oder mehrere Objekte im Verhältnis zu einem anderen Objekt zu positionieren.

Davon ausgehend, dass ein Objekt bereits mittels ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") unbeweglich gemacht wurde, wird das zweite Objekt auf eine Position bewegt, wo der Ursprung des Punktobjekts auf der X-Y-Ebene des Kreisobjekts liegt und die Z-Achsen parallel zueinander ausgerichtet sind (zusammengehörige X und Y werte, die vom Radius abhängen).

Punktelemente haben keine Ausdehnung egal in welcher Richtung (Länge ist Null) und daher kann auch keine Orientierung ermittelt werden, d.h. dass ihre LKS nur für weitere Elementparameter benötigt werden. Die Ausrichtung der LKS bleibt immer die gleiche, wie die des globalen Koordinatensystems und kann nicht dazu genutzt werden, die Anzahl von Freiheitsgraden im Zusammenhang mit Drehungen zu reduzieren.

Die Position auf dem Kreisobjekt (Bogenlänge vom Startpunkt) ist nicht festgelgt. Im Bezug auf das erste Objekt, kann sich das nächste noch entlang der X- und Y-Achsen und um den Ursprung herum (um alle drei Achsen) bewegen. Dies lässt für jede einzelne Verbindung vier Freiheitsgrade unbestimmt.

## Anwendung

1. Zwei Objekte in einen Zusammenbau einfügen.
2. Ein Punktelement des einen und ein kreisförmiges Flächen- oder Kantenelement des anderen Objekts auswählen.
3. Schaltfläche ![](/images/Assembly_ConstraintPointOnCircle.svg) Punkt auf Kreis drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointOnCircle/de&oldid=1536602>"