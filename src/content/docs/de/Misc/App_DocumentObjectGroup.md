---
title: App DocumentObjectGroup
---
## Einleitung

![](/images/Folder.svg)

Das Objekt [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup"), formell eine `App::DocumentObjectGroup`, ist ein einfaches Element, das ermöglicht, jede Art [Dokumentobjekt](/App_DocumentObject/de "App DocumentObject/de") in der [Baumansicht](/Tree_view/de "Tree view/de") zu gruppieren, egal welcher Art von Daten.

Es wurde entwickelt, um Objekte in der [Baumansicht](/Tree_view/de "Tree view/de") für den Anwender logisch zu organisieren.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten im Programm. Die Klasse `App::DocumentObjectGroup` hat eine Erweiterung zum Gruppieren jeder Objektart. Die Gruppe selbst besitzt wenige Eigenschaften.

## Anwendung

1. Die Schaltfläche ![](/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de") drücken. Eine leere Gruppe wird erzeugt.
2. In der [Baumansicht](/Tree_view/de "Tree view/de") ein Objekt auswählen und mit Ziehen & Ablegen auf die Gruppe der Gruppe hinzufügen.
3. Um Objekte aus der Gruppe zu entfernen, zieht man es aus der Gruppe heraus und legt es auf die Benennung (label) des Dokuments oben in der [Baumansicht](/Tree_view/de "Tree view/de") ab.

Siehe [Std Gruppe](/Std_Group/de "Std Group/de") für die vollständigen Informationen, einschließlich der Verwendung in [Skripten](/Std_Group/de#Skripten "Std Group/de").

## Eigenschaften

Eine App DocumentObjectGroup (Klasse `App::DocumentObjectGroup`) wird von einem [App DocumentObject](/App_DocumentObject/de "App DocumentObject/de") (Klasse `App::DocumentObject`) abgeleitet; daher besitzt es alle seine Eigenschaften.

Siehe die Eigenschaften auf der Seite [Std Gruppe](/Std_Group/de "Std Group/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObjectGroup/de&oldid=1399971>"