---
title: Assembly3 Festsetzen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 Festsetzen |
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

Dieses Werkzeug verbindet ein Objekt mit dem globalen Koordinatensystem (GKS) unter Verwendung des lokalen Koordinatensystems (LKS) eines ausgewählten Elements.

:   - Wurde ein Punkt ausgewählt, werden die Koordinaten seines LKS mit Bezug auf das GKS festgelegt.

    :   Das Objekt kann sich noch um den Punkt herum drehen.
:   - Wenn eine (gerade) Kante ausgewählt wurde, werden die Koordinaten seines LKS und die Richtung seiner Z-Achse mit Bezug auf das GKS festgelegt.

    :   Das Objekt kann sich noch um die Kante herum drehen.
:   - Wurde eine Fläche ausgewählt, werden die Koordinaten ihres LKS und dessen Ausrichtung mit Bezug auf das GKS festgelegt.

    :   Das Objekt ist starr mit dem GKS verbunden.

Dies kann genutzt werden, um ein unbewegliches Set zu definieren, sowohl für einen statischen Zusammenbau, als auch für ein kinematische System.

## Anwendung

1. Ein Objekt in einen Zusammenbau einfügen.
2. Ein Element des Objekts auswählen.
3. Den ![](/images/Assembly_ConstraintLock.svg) [Festsetzen](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") Knopf drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLock/de&oldid=1536633>"