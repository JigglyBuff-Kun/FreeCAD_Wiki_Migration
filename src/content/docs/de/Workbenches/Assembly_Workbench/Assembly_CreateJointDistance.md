---
title: Assembly AbstandsVerbindungErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly CreateJointDistance |
| Menu location |
| Assembly → Create Distance Joint |
| Workbenches |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut |
| D |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Beschreibung

The ![](/images/Assembly_CreateJointDistance.svg) [Assembly CreateJointDistance](/Assembly_CreateJointDistance "Assembly CreateJointDistance") tool creates a Distance joint between two selected parts, fixing the distance between both parts.

## Anwendung

1. Optionally select two geometric entities of two different shapes. Other selections will be rejected.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_CreateJointDistance.svg) [Create Distance Joint](/Assembly_CreateJointDistance "Assembly CreateJointDistance") button.
   * Select the **Assembly → ![](/images/Assembly_CreateJointDistance.svg) Create Distance Joint** option from the menu.
   * Use the keyboard shortcut: D.
3. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
4. For further steps see [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Usage "Assembly CreateJointFixed").

## Hinweise

Tool tip says a distance of 0 results in a co-planar joint between the selected planar elements, or a tangent joint between a cylindrical and a planar element. Neither seems to work in weekly build 0.22.-.37645.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

A **Distance** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. See [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Properties "Assembly CreateJointFixed") for additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointDistance/de&oldid=1554427>"