---
title: Arbeitsbereiche
---

FreeCAD basiert, wie viele moderne Konstruktionsanwendungen wie [Revit](https://de.wikipedia.org/wiki/Autodesk_Revit) oder [CATIA](https://de.wikipedia.org/wiki/CATIA) auf dem Konzept von Arbeitsbereichen ([Workbenches](https://en.wikipedia.org/wiki/Workbench)). Ein Arbeitsbereich kann als ein Satz von Werkzeugen betrachtet werden, die speziell für eine bestimmte Aufgabe gruppiert sind. In einer traditionellen Möbelwerkstatt hättest du einen Arbeitstisch für die Person, die mit Holz arbeitet, einen anderen für die Person, die mit Metallteilen arbeitet, und vielleicht einen dritten für den Mann, der alle Teile zusammen montiert.

In FreeCAD wird das gleiche Konzept angewendet. Werkzeuge werden entsprechend den Aufgaben, mit denen sie verbunden sind, in Arbeitsbereichen zusammengefasst.

Wenn Du von einem Arbeitsbereich zum anderen wechselst, ändern sich die auf der Oberfläche verfügbaren Werkzeuge. Werkzeugleisten, Befehlsleisten und eventuell andere Teile der Oberfläche wechseln auf den neuen Arbeitsbereich, aber der Inhalt Deiner Szene ändert sich nicht. Du kannst z.B. mit dem Arbeitsbereich Entwurf beginnen, 2D Formen zu zeichnen und diese dann mit dem Part Arbeitsbereich weiterzubearbeiten.

Beachte, dass ein Arbeitsbereich manchmal als _Modul_ bezeichnet wird. Allerdings sind Arbeitsbereiche und Module unterschiedliche Gebilde. Ein Modul ist eine beliebige Erweiterung von FreeCAD, während ein Arbeitsbereich ein besonderer Typ von Modul mit einer GUI Konfiguration (Werkzeugleisten und Menüs) ist.

## Eingebaute Arbeitsbereiche

### Aktuell

Die folgenden Arbeitsbereiche sind in jeder FreeCAD-Installation vorhanden:

- ![](/src/assets/images/Freecad.svg) [Std Basis](/Std_Base/de "Std Base/de"). Dies ist eigentlich kein Arbeitsbereich, sondern eher eine Kategorie von 'Standard' Befehlen und Werkzeugen, die in allen Arbeitsbereichen verwendet werden können.

- ![](/src/assets/images/Workbench_Assembly.svg) Der Arbeitsbereich [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") für den Zusammenbau und die Berechnung mechanischer Baugruppen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Workbench_BIM.svg) Der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") für die Arbeit mit Bauwerkselementen und die Erstellung von Modellen entsprechend der [Bauwerksdatenmodellierung](https://de.wikipedia.org/wiki/Building_Information_Modeling), also BIM-Modellen (nach engl. [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling), kurz BIM). Er kombiniert den Arbeitsbereich Arch und den vormals externen Arbeitsbereich BIM aus der 0.21 und davor.

- ![](/src/assets/images/Workbench_CAM.svg) Der Arbeitsbereich [CAM](/CAM_Workbench/de "CAM Workbench/de") Wird eingesetzt, um G-Code-Befehle zu erstellen. Dieser Arbeitsbereich wurde in 0.21 und davor "Path" genannt.

- ![](/src/assets/images/Workbench_Draft.svg) Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") (Entwurf) enthält 2D-Werkzeuge und grundlegende 2D- und 3D-CAD-Einsatzmöglichkeiten.

- ![](/src/assets/images/Workbench_FEM.svg) Der Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") bietet einen Arbeitsablauf für die Finite Elemente Analyse (FEA).

- ![](/src/assets/images/Workbench_Inspection.svg) Der Arbeitsbereich [Inspection](/Inspection_Workbench/de "Inspection Workbench/de") wurde geschaffen, um dir spezielle Werkzeuge für die Untersuchung von Formen zu bieten. Er befindet sich noch in einer frühen Phase der Entwicklung.

- ![](/src/assets/images/Workbench_Material.svg) Der Arbeitsbereich [Material](/Material_Workbench/de "Material Workbench/de") kümmert sich um FreeCADs Materialsystem. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Workbench_Mesh.svg) Der Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") (Netz) für die Arbeit mit triangulierten Polygonnetzen.

- ![](/src/assets/images/Workbench_OpenSCAD.svg) Der Arbeitsbereich [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") für das Zusammenspiel mit OpenSCAD und die Reparatur der Modellhistorie von [konstruktiver Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") (Constructive-Solid-Geometry - CSG).

- ![](/src/assets/images/Workbench_Part.svg) Der Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") für die Arbeit mit geometrischen Grundkörpern und booleschen Verknüpfungen.

- ![](/src/assets/images/Workbench_PartDesign.svg) Der Arbeitsbereich [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") zur Erstelllung von Part-Formen aus Skizzen.

- ![](/src/assets/images/Workbench_Points.svg) Der Arbeitsbereich [Points](/Points_Workbench/de "Points Workbench/de") (Punkte) für die Arbeit mit Punktwolken.

- ![](/src/assets/images/Workbench_Reverse_Engineering.svg) Der Arbeitsbereich [Reverse Engineering](/Reverse_Engineering_Workbench/de "Reverse Engineering Workbench/de") soll spezielle Werkzeuge zur Konvertierung von Formen, Festkörpern oder (Polygon-)Netzen in parametrische zu FreeCAD kompatible Formelemente bereitstellen.

- ![](/src/assets/images/Workbench_Robot.svg) Der Arbeitsbereich [Robot](/Robot_Workbench/de "Robot Workbench/de") (Roboter) zur Untersuchung von Roboterbewegungen. Wird zur Zeit nicht gewartet.

- ![](/src/assets/images/Workbench_Sketcher.svg) Der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") (Skizzierer) für die Arbeit mit durch geometrische Beziehungen bestimmten Skizzen.

- ![](/src/assets/images/Workbench_Spreadsheet.svg) Der Arbeitsbereich [Spreadsheet](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") (Tabellenkalkulation) zur Erstellung und Bearbeitung von Daten in Kalkulations- bzw. Konstruktionstabellen.

- ![](/src/assets/images/Workbench_Surface.svg) Der Arbeitsbereich [Surface](/Surface_Workbench/de "Surface Workbench/de") (Oberfläche) bietet Werkzeuge zum Erstellen und Ändern von Oberflächen. Er ähnelt der Option _Fläche aus Kanten_ des [Part FormGenerators](/Part_Builder/de "Part Builder/de").

- ![](/src/assets/images/Workbench_TechDraw.svg) Der Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") zur Erstellung technischer Zeichnungen aus 3D-Modellen. Er ist der Nachfolger des Arbeitsbereichs [Drawing](/Drawing_Workbench/de "Drawing Workbench/de") (Zeichnung).

- ![](/src/assets/images/Workbench_Test.svg) Der Arbeitsbereich [Testing](/Testing/de "Testing/de") (Test Rahmenwerk) ist für die FreeCAD-Fehlersuche.

### Veraltet

Die folgenden Arbeitsbereiche sind nach der Version 0.21 nicht mehr Bestandteil von FreeCAD:

- ![](/src/assets/images/Workbench_Start.svg) Der Arbeitsbereich [Start](/Start_Workbench/de "Start Workbench/de") ermöglicht, schnell zu einem der gängigsten Arbeitsbereiche zu wechseln. Dieser Arbeitsbereich wurde durch die Start-Seite ersetzt, auf die über das [Menü Hilfe](/Std_Help_Menu/de "Std Help Menu/de") zugegriffen werden kann.

- ![](/src/assets/images/Workbench_Web.svg) Der Arbeitsbereich [Web](/Web_Workbench/de "Web Workbench/de") öffnet ein Browserfenster in FreeCAD anstelle der [3D-Ansicht](/3D_view/de "3D view/de") .

Die folgenden Arbeitsbereiche sind nach der Version 0.20 nicht mehr Bestandteil von FreeCAD:

- ![](/src/assets/images/Workbench_Drawing.svg) Der Arbeitsbereich [Drawing](/Drawing_Workbench/de "Drawing Workbench/de") (Zeichnen) wurde für die Darstellung von 3D-Arbeiten auf einer 2D-Zeichnung verwendet. Der Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") ist ein weiterentwickelte Ersatz.

- ![](/src/assets/images/Workbench_Image.svg) Der Arbeitsbereich [Image](/Image_Workbench/de "Image Workbench/de") (Bild) stand für die Arbeit mit Bitmap-Bildern zur Verfügung. Seine Funktionalität wurde in [Std Basis](/Std_Base/de "Std Base/de") integriert. Siehe [Std Import](/Std_Import/de "Std Import/de") und [Std AnsichtBildLaden](/Std_ViewLoadImage/de "Std ViewLoadImage/de").

- ![](/src/assets/images/Workbench_Raytracing.svg) Der Arbeitsbereich [Raytracing](/Raytracing_Workbench/de "Raytracing Workbench/de") wurde für die Bildsynthese durch Strahlenverfolgung (ray-tracing) verwendet. Der externe Arbeitsbereich [Render](https://github.com/FreeCAD/FreeCAD-render) sollte stattdessen verwendet werden.

## Externe Arbeitsbereiche

FreeCAD-Arbeitsbereiche lassen sich einfach in [Python](/Python/de "Python/de") programmieren, es gibt daher viele Menschen, die zusätzliche Arbeitsbereiche außerhalb von FreeCADs Hauptentwicklungsbereich entwickeln.

Die Seite [Externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") listet alle, die dieser Gemeinschaft bekannt sind. Die meisten sind einfach aus FreeCAD heraus zu installieren, indem man den [Addon-Mannager](/Std_AddonMgr/de "Std AddonMgr/de") verwendet, der unter **Werkzeuge → ![](/src/assets/images/Std_AddonMgr.svg) Addon-Manager** zu finden ist.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/de&oldid=1540866>"
