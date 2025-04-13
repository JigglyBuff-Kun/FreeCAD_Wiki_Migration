---
title: Bezugselement
---
## Einleitung

In FreeCAD wird das Wort "Bezugselement" normalerweise verwendet, um sich auf Hilfsgeometrie im Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") zu beziehen. Diese geometrischen Elemente sind kein Bestandteil der endgültigen [Form](/Shape/de "Shape/de") eines [Körpers](/Body/de "Body/de"), können aber als Referenzen und als Befestigungsmöglichkeiten für [Skizzen](/Sketch/de "Sketch/de") und andere Arten von [Formelementen](/Feature/de "Feature/de") verwendet werden.

Die folgenden entsprechen Elementen, die von der Klasse `Part::Datum` abgeleitet sind, die wiederum selbst von [Part Formelement](/Part_Feature/de "Part Feature/de") abgeleitet ist:

* [PartDesign Punkt](/PartDesign_Point/de "PartDesign Point/de")
* [PartDesign Linie](/PartDesign_Line/de "PartDesign Line/de")
* [PartDesign Ebene](/PartDesign_Plane/de "PartDesign Plane/de")
* [PartDesign Koordinatensystem](/PartDesign_CoordinateSystem/de "PartDesign CoordinateSystem/de")

Die folgenden sind direkt von [Part Formelement](/Part_Feature/de "Part Feature/de") abgeleitet:

* [PartDesign Formbinder](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de")
* [PartDesign Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de")

## Anwendung

1. Zum Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") wechseln.
2. Die Schaltfläche ![](/images/PartDesign_Body.svg) [PartDesign Körper erstellen](/PartDesign_Body/de "PartDesign Body/de") drücken.
3. Den Ursprung des Körpers auswählen und durch Drücken der Leertaste sichtbar schalten.
4. Die Schaltfläche ![](/images/PartDesign_Plane.svg) [PartDesign Ebene](/PartDesign_Plane/de "PartDesign Plane/de") drücken, um das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") Parameter der Bezugsebene zu öffnen.
5. In der [3D-Ansicht](/3D_view/de "3D view/de") eine der Standardebenen anklicken, z.B. die XY-Ebene. Dann OK drücken, um das Aufgaben-Fenster zu schließen.
6. Jetzt in der [Baumansicht](/Tree_view/de "Tree view/de") die neu erstellte Bezugsebene auswählen und dann ![](/images/PartDesign_NewSketch.svg) [PartDesign Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") drücken.
7. Einen geschlossenen Linienzug erstellen und dann ![](/images/PartDesign_Pad.svg) [PartDesign Block](/PartDesign_Pad/de "PartDesign Pad/de") um die Skizze zu extrudieren und einen ersten Festkörper zu erzeugen.

Jetzt kann die Bezugsebene beliebig verschoben und gedreht werden, indem ihre Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") angepasst werden; die Skizze und der Festkörper folgen der neuen [Positionierung](/Placement/de "Placement/de").

Es können andere Arten von Bezugselementen hinzugefügt werden, die mit anderen Skizzen und Formelementen verwendet werden.

## Hinweise

Seit ihrem Erscheinen in v0.17 waren Bezugsobjekte für die Verwendung innerhalb von [PartDesign Körpern](/PartDesign_Body/de "PartDesign Body/de") vorgesehen. Da es sich jedoch um nützliche "Referenz"-Objekte mit unterschiedlichen [Befestigungsmethoden](/Part_EditAttachment/de "Part EditAttachment/de") handelt, wurde vorgeschlagen, dass sie außerhalb der [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") zur Verfügung stehen sollten. Auf diese Weise wären sie in allen Arbeitsbereichen als Geometrie zum Befestigen verwendbar, insbesondere im Zusammenhang mit der Erstellung von [Baugruppen](/Assembly/de "Assembly/de").

* [Create and display local coordinate system](https://forum.freecadweb.org/viewtopic.php?f=10&t=2604)
* [Datum objects in App::Part](https://forum.freecadweb.org/viewtopic.php?f=22&t=33654)
* [Structure toolbar and datums](https://forum.freecadweb.org/viewtopic.php?t=42759)
* [Local CS cannot be used in Part Wb?](https://forum.freecadweb.org/viewtopic.php?f=3&t=42960)

Retrieved from "<http://wiki.freecad.org/index.php?title=Datum/de&oldid=1478696>"