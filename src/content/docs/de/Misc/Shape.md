---
title: Form
---
## Einleitung

In FreeCAD wird das Wort "Form" normalerweise verwendet, um sich auf eine [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de") (`Part::TopoShape` Klasse) zu beziehen , ein Objekttyp, der einem Element seine geometrische und parametrische 3D-Darstellung gibt (Würfel, Pyramide, Kugel, Zylinder, Vereinigung usw.).

Im Wesentlichen haben alle Objekte, die in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt werden, eine [TopoForm](/Part_TopoShape/de "Part TopoShape/de"), mit Ausnahme von "[Netzen](/Mesh/de "Mesh/de")", die ein [Netzobjekt](/Mesh_MeshObject/de "Mesh MeshObject/de") (`Mesh::MeshObject`-Klasse) haben.

Siehe [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de") für weitere Information über diesen Objekttyp.

![](/images/Shape_and_mesh.svg)

Links: parametrische Form, definiert durch Eigenschaften. Rechts: [Polygonnetz](/Mesh/de "Mesh/de"), definiert durch Knoten und dreieckigen Oberflächen.

## Anwendung

Formen werden normalerweise durch interne Funktionen des Arbeitsbereichs [Part](/Part_Workbench/de "Part Workbench/de") erstellt und werden letztlich durch den [OpenCASCADE-Technology](/OpenCASCADE/de "OpenCASCADE/de")-Kernel (OCCT) definiert.

Sobald eine Form erstellt wurde, kann sie von allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") verwendet und geändert werden, indem [skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de") um diese Form herum erstellt werden.

Im Wesentlichen wird von jedem Objekt, das von einem [Part Formelement](/Part_Feature/de "Part Feature/de") (`Part::Feature` Klasse) abgeleitet ist, erwartet, eine Form zu enthalten und zu verändern.

Jede OpenCascade-Form besitzt eine Netzstruktur für die Darstellung der Form auf dem Bildschirm. Mehr Informationen darüber findet man im [Forumsbeitrag](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) und in der [OpenCascade-Mesh-Documentation](https://dev.opencascade.org/doc/overview/html/occt_user_guides__mesh.html).

## Hinweise

Im informellen Gebrauch kann eine "Form" jede geometrische Figur sein, die in der [3D-Ansicht](/3D_view/de "3D view/de") sichtbar ist, und daher kann ihr Konzept mit dem von "[Körper](/Body/de "Body/de")" oder "[Part](/Part/de "Part/de")" verwechselt werden.

Wenn jedoch mehr Präzision erforderlich ist, muss eine Unterscheidung getroffen werden.

* Ein "[Körper](/Body/de "Body/de")" ist ein Objekt, das von einem [Part Formelement](/Part_Feature/de "Part Feature/de") (`Part::Feature` Klasse) abgeleitet ist, erstellt mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de").
* Eine "Form" ist ein internes Objekt, eingebettet in einem "[Körper](/Body/de "Body/de")".
* Ein "[Part](/Part/de "Part/de")" wird verwendet, um mehrere "[Körper](/Body/de "Body/de")" zu gruppieren, um eine [Baugruppe](/Assembly/de "Assembly/de") zu bilden. Ein "Part" hat eine Sammlung von "Formen", hat aber keine eigenständige "Form".

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/de&oldid=1265151>"