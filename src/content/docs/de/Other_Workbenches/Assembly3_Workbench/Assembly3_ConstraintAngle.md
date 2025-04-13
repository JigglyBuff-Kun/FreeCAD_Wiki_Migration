---
title: Assembly3 WinkelFestlegen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 WinkelFestlegen |
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

Der Winkel zwischen zwei Elementen, d.h. der Winkel zwischen ihren Z-Achsen, wird festgelegt.

Der Abstand ihrer Ursprünge in X-, Y- und Z-Richtung und die Winkel zwischen ihren X-Achsen und Y-Achsen sind nicht festgelegt. Im Bezug auf das erste Element, können sich die weiteren Objekte noch in X-, Y- und Z-Richtung bewegen und um beide Z-Achsen drehen. Dies lässt für jede einzelne Verbindung fünf Freiheitsgrade unbestimmt.

Diese Beziehung akzeptiert gerade Kanten und ebene Flächen.

## Anwendung

1. Zwei oder mehr Objekte in einen Zusammenbau einfügen.
2. Je ein ebenes Flächenelement oder eine gerade Kante pro Objekt auswählen.
3. Schaltfläche![](/images/Assembly_ConstraintAngle.svg) WinkelFestlegen drücken.
4. Optional kann der Wert der Daten-Eigenschaft**Angle** (Winkel) geändert werden.

## Hinweise

2D: Diese Randbedingung scheint die einzige Möglichkeit zu sein, einen Winkel in einer Skelettskizze zu steuern (2D kinematischer Zusammenbau); Kann das BITTE jemand wiederlegen?

* Ihre Daten-Eigenschaft**Angle** (`Angle`) erlaubt jeden positiven Wert, aber genau 0° und 180° verwirren den Löser.
* Die Richtung wird umgekehrt, wenn Winkel größer als 180° angegeben werden und daraus ergibt sich für 135° und 225° die gleiche Position für die beteiligten Elemente.

:   Sie ist nutzlos, wenn man eine komplette Drehung simulieren möchte und ruiniert so das Prinzip eine Skelettskizze zu verwenden für sehr viele kinematische Anwendungen, wie z. B. einen Kolben mit einer Kurbel, verbunden über ein Pleuel, anzutreiben.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAngle/de&oldid=1536589>"