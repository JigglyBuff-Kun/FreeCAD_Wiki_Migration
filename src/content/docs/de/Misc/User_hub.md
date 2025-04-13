---
title: Anwenderzentrum
---

![](/images/User_hub.png)

---

Dies ist der wichtigste Hilfebereich für FreeCAD-Neueinsteiger.

FreeCAD wird ständig weiterentwickelt, so dass es zu fehlenden oder veralteten Informationen kommen kann. Wenn du die Informationen, die du brauchst, nicht findest, zögere nicht, sie im [FreeCAD-Forum](https://forum.freecad.org) zu erfragen.

Wenn Du zu FreeCAD beitragen möchtest, [spende](/Donate/de "Donate/de") bitte und lies die Seite [FreeCAD Unterstützen](/Help_FreeCAD "Help FreeCAD") für andere Möglichkeiten, einen Beitrag zu leisten. Wenn Du dieses Wiki bearbeiten möchtest, fordere ein Wiki-Konto mit Bearbeiterberechtigungen [im Forum](https://forum.freecad.org/viewtopic.php?f=21&t=6830) an und lies die [Wiki-Seiten](/WikiPages/de "WikiPages/de") für die allgemeinen Richtlinien, die Du befolgen solltest.

Wenn du erfahren möchtest, wie FreeCAD vor Jahren begann, besuche die Seite [Geschichte](/History/de "History/de").

## FreeCAD benutzen

### Einleitung

- [Anwendungsübersicht](/About_FreeCAD/de "About FreeCAD/de"): Ein allgemeiner Überblick über FreeCAD
- Wie man FreeCAD auf [Windows](/Installing_on_Windows/de "Installing on Windows/de"), [Linux](/Installing_on_Linux/de "Installing on Linux/de") und [Mac](/Installing_on_Mac/de "Installing on Mac/de") installiert.
- [Einrichtung Hilfedateien](/Installing_Helpfile/de "Installing Helpfile/de"): wie man die Offline-Dokumentation installiert, die auf diesem Wiki basiert.
- [Einrichtung zusätzlicher Komponenten](/Installing_additional_components/de "Installing additional components/de"): wie zusätzliche Komponenten von Drittanbietern installieren, die mit FreeCAD zusammenarbeiten können.
- [Erste Schritte](/Getting_started/de "Getting started/de"): Eine kurze Übersicht über die verfügbaren Werkzeuge.
- [FAQ](/Frequently_asked_questions/de "Frequently asked questions/de"): Häufig gestellte Fragen.
- [Tutorien](/Tutorials/de "Tutorials/de") decken verschiedene Teile von FreeCAD ab.

#### Umstieg von einer anderen Anwendung?

- [Fehlerumgehung](/Workarounds/de "Workarounds/de")
- [Umstieg auf FreeCAD von Fusion360](/Migrating_to_FreeCAD_from_Fusion360/de "Migrating to FreeCAD from Fusion360/de")
- [Umstieg auf FreeCAD von OnShape](/Migrating_to_FreeCAD_from_OnShape/de "Migrating to FreeCAD from OnShape/de")
- [Umstieg auf FreeCAD von SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks/de "Migrating to FreeCAD from SolidWorks/de")
- [Umstieg auf FreeCAD von Revit](/Migrating_to_FreeCAD_from_Revit/de "Migrating to FreeCAD from Revit/de")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](/BIM_application_compatibility_table/de "BIM application compatibility table/de")

### Grundlegende Anwendung

- [Oberfläche](/Interface/de "Interface/de"): Die FreeCAD-Benutzeroberfläche besteht aus verschiedenen grafischen Elementen auf dem Bildschirm, darunter der [3D-Ansicht](/3D_view/de "3D view/de"), der [Baumansicht](/Tree_view/de "Tree view/de"), dem [Eigenschafteneditor](/Property_editor/de "Property editor/de"), dem [Aufgaben-Fenster](/Task_panel/de "Task panel/de") und der [Python-Konsole](/Python_console/de "Python console/de").
- [Mausnavigation](/Mouse_navigation/de "Mouse navigation/de"): Die verschiedenen Arten der Verwendung der Maus oder des Trackpads zur Navigation in der 3D-Ansicht.
- [Auswahlmethoden](/Selection_methods/de "Selection methods/de"): Die unterschiedlichen Methoden zur Auswahl von Objekten im Programm.
- [Objektname](/Object_name/de "Object name/de"): Alle Objekte haben einen einzigartigen, nicht veränderbaren `Namen`, der sie eindeutig identifiziert und ein `Label` das vom Anwender beliebig geändert werden kann.
- [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de"): Das System, mit dem viele Eigenschaften des Basissystems und der einzelnen Arbeitsbereiche gesteuert werden können.
- [Dateiformate](/Import_Export/de "Import Export/de"): Die verschiedenen Dateiformate, die FreeCAD lesen und schreiben kann.

### Arbeitsbereiche

[Arbeitsbereiche](/Workbenches/de "Workbenches/de") sind Werkzeugsammlungen, die für bestimmte Aufgabe eingesetzt werden. Dies sind die Basis-Arbeitsbereiche, die mit jeder FreeCAD-Installation zur Verfügung gestellt werden:

- ![](/images/Freecad.svg) [Standard-Werkzeuge](/Std_Base/de "Std Base/de"). Diese Befehle und Werkzeuge stehen in allen Arbeitsbereichen zur verfügung.

- ![](/images/Workbench_Assembly.svg) Der Arbeitsbereich [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") für den Zusammenbau und die Berechnung mechanischer Baugruppen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/images/Workbench_BIM.svg) Der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") für die Arbeit mit Bauwerkselementen und die Erstellung von Modellen entsprechend der [Bauwerksdatenmodellierung](https://de.wikipedia.org/wiki/Building_Information_Modeling), also BIM-Modellen (nach engl. [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling), kurz BIM). Er kombiniert den Arbeitsbereich Arch aus der 0.21 und davor und den vormals externen Arbeitsbereich BIM.

- ![](/images/Workbench_CAM.svg) Der Arbeitsbereich [CAM](/CAM_Workbench/de "CAM Workbench/de") Wird eingesetzt, um G-Code-Anweisungen zu erstellen. Dieser Arbeitsbereich wurde in 0.21 und davor "Path" genannt.

- ![](/images/Workbench_Draft.svg) Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") enthält 2D-Werkzeuge und grundlegende 2D- und 3D-CAD-Bearbeitungen.

- ![](/images/Workbench_FEM.svg) Der [Arbeitsbereich FEM](/FEM_Workbench/de "FEM Workbench/de") stellt einen Arbeitsablauf für die Finite-Elemente-Analyse (FEA) zur Verfügung.

- ![](/images/Workbench_Inspection.svg) Der Arbeitsbereich [Inspection](/Inspection_Workbench/de "Inspection Workbench/de") stellt spezielle Werkzeuge für die Untersuchung von Formen zur Verfügung. Er befindet sich noch in einer frühen Phase der Entwicklung.

- ![](/images/Workbench_Material.svg) Der Arbeitsbereich [Material](/Material_Workbench/de "Material Workbench/de") kümmert sich um FreeCADs Materialsystem. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/images/Workbench_Mesh.svg) Der Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") für die Arbeit mit triangulierten Polygonnetzen.

- ![](/images/Workbench_OpenSCAD.svg) Der Arbeitsbereich [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") für das Zusammenspiel mit OpenSCAD und die Reparatur der Modellhistorie von [konstruktiver Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") (Constructive-Solid-Geometry - CSG).

- ![](/images/Workbench_Part.svg) Der Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") für die Arbeit mit geometrischen Grundkörpern und booleschen Verknüpfungen.

- ![](/images/Workbench_PartDesign.svg) Der Arbeitsbereich [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") zur Erstelllung von Part-Formen aus Skizzen.

- ![](/images/Workbench_Points.svg) Der Arbeitsbereich [Points](/Points_Workbench/de "Points Workbench/de") (Punkte) für die Arbeit mit Punktwolken.

- ![](/images/Workbench_Reverse_Engineering.svg) Der Arbeitsbereich [Reverse Engineering](/Reverse_Engineering_Workbench/de "Reverse Engineering Workbench/de") soll spezielle Werkzeuge zum Konvertieren von Formen, Festkörpern oder (Polygon-)Netzen in parametrische zu FreeCAD kompatible Formelemente bereitstellen.

- ![](/images/Workbench_Robot.svg) Der Arbeitsbereich [Robot](/Robot_Workbench/de "Robot Workbench/de") (Roboter) zur Untersuchung von Roboterbewegungen. Wird zur Zeit nicht gewartet.

- ![](/images/Workbench_Sketcher.svg) Der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") (Skizzierer) für die Arbeit mit durch geometrische Beziehungen bestimmten Skizzen.

- ![](/images/Workbench_Spreadsheet.svg) Der Arbeitsbereich [Spreadsheet](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") (Tabellenkalkulation) zur Erstellung und Bearbeitung von Daten in Kalkulations- bzw. Konstruktionstabellen.

- ![](/images/Workbench_Surface.svg) Der Arbeitsbereich [Surface](/Surface_Workbench/de "Surface Workbench/de") (Oberfläche) stellt Werkzeuge zum Erstellen und Ändern von Oberflächen zur Verfügung. Er ähnelt der Option _Fläche aus Kanten_ des [Part Form-Generators](/Part_Builder/de "Part Builder/de").

- ![](/images/Workbench_TechDraw.svg) Der Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") dient zur Ableitung technischer Zeichnungen von 3D-Modellen.

- ![](/images/Workbench_Test.svg) Der Arbeitsbereich [Test Framework](/Testing/de "Testing/de") ist für die FreeCAD-Fehlersuche.

### Makros

[Makros](/Macros/de "Macros/de") sind relativ kleine Abschnitte von [Python-Code](/Python/de "Python/de"), die eine einfache oder eine komplexe Aufgabe erledigen, die in FreeCADs Basis-System nicht zur Verfügung steht.

Erfahrene Anwender haben verschiedene [Makros](/Macros/de "Macros/de") erstellt, um FreeCAD durch weitere Fähigkeiten zu verbessern.

Seit FreeCAD v0.17 können viele Makros mit Hilfe des [Addon-Managers](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden. Eine Liste der Makros findet man auf der Seite [Makrorezepte](/Macros_recipes/de "Macros recipes/de"). Für eine manuelle Installation siehe [Wie Makros installiert werden](/How_to_install_macros/de "How to install macros/de").

### Externe Arbeitsbereiche

Wenn viele Makros oder Funktionen gemeinsam entwickelt und in Symbolleisten und Menüs organisiert werden, können sie zu einem neuen Arbeitsbereich werden.

[Externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") sind Sammlungen von Funktionen, die nicht Teil des FreeCAD Basissystems sind, üblicherweise entwickelt von erfahrenen Anwendern und auf einen bestimmten Bedarf abzielend.

Seit FreeCAD 0.17 können viele Arbeitsbereiche mit dem [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden. Für die manuelle Installation siehe [Wie zusätzliche Arbeitsbereiche installiert werden](/How_to_install_additional_workbenches/de "How to install additional workbenches/de").

## Referenz

- [Commands Reference](/List_of_Commands "List of Commands"): Eine vollständige Liste der zur Verfügung stehenden FreeCAD-Befehle in Englisch.
- [Commands Reference/de](/List_of_Commands/de "List of Commands/de"): Eine Liste aller zur Verfügung stehenden FreeCAD-Befehle, deren Wiki-Seite ins Deutsche übersetzt ist.

## Online-Hilfe

Dies ist FreeCADs offizielle Online-Hilfe. Bitte beachten, dass das gesamte Online-Hilfesystem gegenwärtig überarbeitet wird. Sie wird verwendet, um eine .CHM Datei zu erzeugen, die mit den Binärpaketen von FreeCAD verteilt wird. Im Moment fasst die Online-Hilfe einige der vollständigsten Abschnitte dieses Wikis zusammen.

- [Online-Hilfesystem - Inhaltsverzeichnis](/Online_Help_Toc/de "Online Help Toc/de")

## Mehr

- Das [Hauptanwenderzentrum](/Power_users_hub/de "Power users hub/de") ist die Anlaufstelle, wenn man mehr über die fortgeschrittene Nutzung von FreeCAD sehen möchte.
- Das [FreeCAD-Gemeinschaftsportal](/FreeCAD_Community_Portal/de "FreeCAD Community Portal/de") listet Projekte auf, die von Mitgliedern der Gemeinschaft rund um FreeCAD erstellt wurden.
- Wird ein Begriff oder eine Beschreibung in FreeCAD nicht verstanden, kann sich ein Blick in das [Glossar](/Glossary/de "Glossary/de") lohnen.

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/de&oldid=1509096>"
