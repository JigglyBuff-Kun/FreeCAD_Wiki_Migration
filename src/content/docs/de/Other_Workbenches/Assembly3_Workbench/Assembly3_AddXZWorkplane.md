---
title: Assembly3 XZArbeitsebeneHinzufügen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 XZArbeitsebeneHinzufügen |
| Menüeintrag |
| Assembly3 → Workplane and origin → Add XZ workplane |
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

Der Befehl ![](/images/Assembly_Add_WorkplaneXZ.svg) XZ-Arbeitsebene hinzufügen fügt einer aktiven Baugruppe eine XZ-Arbeitsebene hinzu.

Ein Workplane-Objekt wird innerhalb des Parts-Containers des Baugruppenbaumes angelegt und die zugehörige Arbeitsebene in der 3D-Ansicht erstellt. Sie wird am Ursprung der Baugruppe platziert und entsprechend der XZ-Ebene der Baugruppe ausgerichtet, wenn die Baugruppe (das Assembly-Objekt) direkt ausgewählt wurde.

![](/images/Assembly_Add_Workplane-01.png) ![](/images/Assembly_AddXZWorkplane-03.png)

Die Baugruppe kann auch indirekt ausgewählt werden durch ein Bestandteil der Baugruppe. Dann wird die Arbeitsebene am Ursprung dieses Bestandteiles platziert wird aber noch immer entsprechend der XZ-Ebene der Baugruppe ausgerichtet.

Mögliche Bestandteile sind z. B. Elemente, Körper, Knoten, Kanten, Flächen, Ursprünge und andere Arbeitsebenen, entweder aus der [Baumansicht](/Tree_view/de "Tree view/de") oder aus der [3D-Ansicht](/3D_view/de "3D view/de").

## Anwendung

1. Den Befehl ![](/images/Assembly_Add_WorkplaneXZ.svg) **XZ-Arbeitsebene hinzufügen** aktivieren durch:
   * Die Schaltfläche ![](/images/Assembly_Add_WorkplaneXZ.svg) XZ-Arbeitsebene hinzufügen.
   * Den Menüeintrag **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_WorkplaneXZ.svg) XZ-Arbeitsebene hinzufügen**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddXZWorkplane/de&oldid=1536597>"