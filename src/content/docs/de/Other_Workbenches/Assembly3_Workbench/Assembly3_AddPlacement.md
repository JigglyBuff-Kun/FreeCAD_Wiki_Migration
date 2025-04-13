---
title: Assembly3 BezugssystemHinzufügen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 BezugssystemHinzufügen |
| Menüeintrag |
| Assembly3 → Workplane and origin → Add placement |
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

Der Befehl ![](/images/Assembly_Add_Placement.svg) Bezugssystem hinzufügen fügt einer aktiven Baugruppe ein Bezugssystem (Placement-Objekt) hinzu.

Ein Placement-Objekt wird innerhalb des Parts-Containers des Baugruppenbaumes angelegt und das zugehörige Bezugssystem in der 3D-Ansicht erstellt. Es wird am Ursprung der Baugruppe platziert und übernimmt die Ausrichtung des lokalen Koordinatensystems der Baugruppe, wenn die Baugruppe (das Assembly-Objekt) direkt ausgewählt wurde.

![](/images/Assembly3_AddPlacement-01.png) ![](/images/Assembly3_AddPlacement-02.png)

Links: Baumansicht. Rechts: Ein Bezugssystem nahe dem Baugruppenursprung (hier als Dateiursprung dargestellt)

Die Baugruppe kann auch indirekt ausgewählt werden durch ein Bestandteil der Baugruppe. Dann wird das Bezugssystem am Ursprung dieses Bestandteiles platziert und übernimmt die Ausrichtung seines lokalen Koordinatensystems.

Mögliche Bestandteile sind z. B. Elemente, Körper, Knoten, Kanten, Flächen, Ursprünge und Arbeitsebenen, entweder aus der [Baumansicht](/Tree_view/de "Tree view/de") oder aus der [3D-Ansicht](/3D_view/de "3D view/de").

## Anwendung

1. Den Befehl ![](/images/Assembly_Add_Placement.svg) **Bezugssystem hinzufügen** aktivieren durch:
   * Die Schaltfläche![](/images/Assembly_Add_Placement.svg) Bezugssystem hinzufügen.
   * Den Menüeintrag **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_Placement.svg) Bezugssystem hinzufügen**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddPlacement/de&oldid=1536594>"