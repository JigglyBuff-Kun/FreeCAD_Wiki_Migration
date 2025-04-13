---
title: App Origin
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Einführung

Ein [App-Origin](/App_OriginGroupExtension "App OriginGroupExtension")-Object, oder formal `App::OriginGroupExtension`, ist eine Klasse, die auswählbare Elemente, die die drei Standardachsen (X, Y, Z) und die drei Standardebenen (XY, XZ und YZ) darstellen, den Objekten zur Verfügung stellt, die dazu bestimmt sind, verschiedene Arten von Geometrien im Raum anzuordnen.

![](/images/Std_Part.svg) [Std-Part](/Std_Part/de "Std Part/de")-Objekte [(App-Part-Objekte)](/App_Part/de "App Part/de") und
![](/images/PartDesign_Body.svg) [PartDesign-Body](/PartDesign_Body/de "PartDesign Body/de")-Objekt werden standardmäßig mit Ursprungsobjekten erstellt. Wenn erforderlich, können Ursprungsobjekte auch den ![](/images/Assembly_Assembly_Tree.svg) [Baugruppen](/Assembly3_CreateAssembly/de "Assembly3 CreateAssembly/de")-Objekten dem Arbeitsbereich ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") hinzugefügt werden.

![Tree view](/images/App_OriginGroupExtension_example.png) ![3D view](/images/App_OriginGroupExtension-02.png)

Links: Die [Baumansicht](/Tree_view/de "Tree view/de") zeigt drei Objekte, die Ursprungsobjekte verwenden. Rechts: Darstellung der Ursprungselemente in der [3D-Ansicht](/3D_view/de "3D view/de").

Die Achsen und Ebenen sind vom Typ `App::Line` bzw. `App::Plane`. Jedes dieser Elemente kann mit der Leertaste einzeln ein- bzw. ausgeblendet werden. Dies kann nützlich sein bei der Auswahl der richtigen Referenz für die Erstellung anderer Objekte, wie z. B. [Skizzen](/Sketch/de "Sketch/de").

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten im Programm. Zwei von ihnen besitzen ein Origin-Objekt (Ursprung), um die Lage der Objekte zu bestimmen, die unter ihnen gruppiert sind.

Retrieved from "<http://wiki.freecad.org/index.php?title=App_OriginGroupExtension/de&oldid=1536555>"