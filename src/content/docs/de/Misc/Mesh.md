---
title: Polygonnetz
---
## Einleitung

In FreeCAD wird das Wort "Polygonnetz" (kurz Netz) normalerweise verwendet, um sich auf ein [Mesh Netzobjekt](/Mesh_MeshObject/de "Mesh MeshObject/de") (`Mesh::MeshObject`-Klasse) zu beziehen, eine Objektart, die 3D-Daten darstellt, aber keine Festkörper-"[Form](/Shape/de "Shape/de")" ist.

Polygonnetze sind sehr einfache Objekte, die nur Knoten (Punkte), Kanten und dreieckige Flächen enthalten. Im Allgemeinen sind sie leicht zu erstellen, bearbeiten, unterteilen und zu dehnen und können ohne Detailverlust von einer Anwendung zu einer anderen übertragen werden. Da die Netze sehr einfache Daten enthalten, können 3D-Anwendungen wie Animationssoftware und Videospiele sehr große Mengen von ihnen (Millionen von Dreiecken) ohne großen Rechenaufwand verwalten.

Im Bereich der technischen Netze gibt es jedoch eine große Einschränkung: Sie bestehen nur aus Flächen und haben keine "Masse"-Informationen, so dass sie sich nicht wie "Festkörper" verhalten. Das bedeutet, dass festkörperbasierte Verknüpfungen wie [boolesche Vereinigung oder Differenz](/Part_Boolean/de "Part Boolean/de") mit Polygonnetzen schwer durchführbar sind. Da sie außerdem durch einzelne Punkte definiert sind, lassen sie sich nur schwer auf parametrische Art beschreiben.

Siehe [Mesh Netzobjekt](/Mesh_MeshObject/de "Mesh MeshObject/de") für weitere Informationen zu diesem Objekttyp und siehe [Polygonnetz](https://de.wikipedia.org/wiki/Polygonnetz) für allgemeine Informationen im Bereich Computersysteme.

![](/images/Shape_and_mesh.svg)

Links: parametrische [Form](/Shape/de "Shape/de"), definiert durch Eigenschaften. Rechts: Polygonnetz, definiert durch Knoten und dreieckige Oberflächen.

## Anwendung

Polygonnetze werden normalerweise durch interne Funktionen des Arbeitsbereichs [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") erstellt oder durch den Import von Dateien in einem Netzformat wie STL oder OBJ.

Im Wesentlichen wird von jedem Objekt, das von einem [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de") (`Mesh::Feature`-Klasse) abgeleitet ist, erwartet, ein Polygonnetz zu enthalten und zu verändern.

Da FreeCAD in erster Linie als Konstruktionsprogramm für Festkörper konzipiert ist, ist es besser geeignet, mit Festkörper- [Formen](/Shape/de "Shape/de") zu bearbeiten. Es kann Netze in die [3D-Ansicht](/3D_view "3D view") importieren und der Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") enthält einige Befehle um sie direkt zu bearbeiten. In vielen Fällen muss das Netz aber zuerst in eine [Form](/Shape/de "Shape/de") konvertiert werden (siehe [Part FormAusNetz](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de")) oder die Geometrie muss nachkonstruiert werden, mit Modellierungstechniken für Festkörper der Arbeitsbereiche [Part](/Part_Workbench/de "Part Workbench/de") oder [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de").

## Finite Element Netze

In FreeCAD kann sich das Wort "Polygonnetz" auch auf ein bestimmtes Objekt beziehen, das in der Finite Elemente Analyse (FEA) verwendet wird.

Wenn ein Objekt mit einer Festkörper-[Form](/Shape/de "Shape/de") im Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") verwendet wird, wird es in ein Netz aus Dreiecken Netz umgewandelt. In diesem Fall ist das resultierende Objekt ein [FEM-Netzobjekt](/FEM_Mesh/de "FEM Mesh/de") (`Fem::FemMeshObject`-Klasse) und ist nicht von einem [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de") (`Mesh::Feature`-Klasse) abgeleitet.

Für weitere Informationen siehe Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") und [FEM Polygonnetz](/FEM_Mesh/de "FEM Mesh/de").

## Weitere Informationen

* [Polygonale (Netz)-Geometrie](https://forum.freecadweb.org/viewtopic.php?f=8&t=47493)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh/de&oldid=1296478>"