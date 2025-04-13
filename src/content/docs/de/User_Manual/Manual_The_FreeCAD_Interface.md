---
title: Handbuch Die FreeCAD Oberfläche
---

FreeCAD basier auf dem [Qt-Rahmenwerk](<https://de.wikipedia.org/wiki/Qt_(Bibliothek)>) und ist durch eine einfache und geradlinige Benutzerschnittstelle gekennzeichnet. Erfahrenere CAD-Anwender können Ähnlichkeiten mit anderen Programmen erkennen, während neue Anwender einfach verschiedene neue Möglichkeiten ausprobieren, die FreeCAD bereithält. Hier ist das Standarderscheinungsbild von FreeCAD:

![](/src/assets/images/FreeCAD_022_Start.png)

Die Startseite dient als Begrüßungsbildschirm und soll einen schnellen und einfachen Zugriff auf die wichtigsten Bereiche von FreeCAD ermöglichen, die ein Benutzer erkunden möchte. Über sie können Benutzer mühelos neue Teile erstellen, aktuelle Dateien öffnen und mit dem 2D-Entwurf beginnen. Darüber hinaus bietet sie Verknüpfungen zu hilfreichen Ressourcen wie Tutorials und Benutzerforen, die sowohl für Anfänger als auch für erfahrene Benutzer, die Anleitungen oder Tipps suchen, von unschätzbarem Wert sind. Benutzer können das Erscheinungsbild der Startseite problemlos nach ihren Wünschen anpassen.

Wenn du mit FreeCAD besser vertraut bist, kannst du die Einstellungen unter „Einstellungen“ anpassen. Dadurch kannst du FreeCAD so konfigurieren, dass es direkt in einem der Arbeitsbereiche geöffnet wird und beim Starten ein neues Dokument bereitsteht. Alternativ kannst du einfach die Registerkarte „Startseite“ schließen und manuell ein neues Dokument erstellen.

![](/src/assets/images/FreeCAD_022_PartDesign.png)

### Arbeitsbereiche

FreeCAD verwendet ein System namens „Arbeitsbereiche“ (Workbenches), das den konzeptionellen Rahmenbedingungen in fortschrittlicher Designsoftware wie Revit oder CATIA ähnelt. Die Idee eines Arbeitsbereichs ist analog zu spezialisierten Stationen in einem wissenschaftlichen Labor, wo verschiedene Arbeitsstationen für unterschiedliche Arten von Experimenten ausgestattet sind. In einem Labor gibt es möglicherweise einen Bereich für Chemie, einen anderen für Biologie und einen dritten für Physik, die jeweils mit den spezifischen Werkzeugen ausgestattet sind, die für diese Disziplinen erforderlich sind.

Im Kontext von FreeCAD ist jeder Arbeitsbereich auf einen bestimmten Aufgabentyp zugeschnitten und organisiert alle erforderlichen Werkzeuge für diese Aktivität in einer Oberfläche. Beim Wechseln zwischen Arbeitsbereichen passt sich der in der Benutzeroberfläche sichtbare Satz von Werkzeugen und Steuerelementen an die Anforderungen der ausgewählten Aufgabe an, obwohl sich der eigentliche Projektinhalt oder die „Szene“, an der du arbeitest, nicht ändert. Dies ermöglicht nahtlose Übergänge im Arbeitsablauf, z. B. das Beginnen eines Entwurfs mit grundlegenden 2D-Formen im Arbeitsbereich Draft und das anschließende Ausarbeiten dieser Entwürfe mit erweiterten Modellierungswerkzeugen im Arbeitsbereich Part.

Die Begriffe „Arbeitsbereich“ und „Modul“ werden manchmal synonym verwendet, haben aber innerhalb von FreeCAD unterschiedliche Bedeutungen. Ein Modul ist jede Erweiterung, die FreeCAD Funktionalität hinzufügt, während ein Arbeitsbereich eine bestimmte Art von Modul ist, das mit eigenen Benutzeroberflächenkomponenten wie Symbolleisten und Menüs ausgestattet ist und bestimmte Aufgabentypen erleichtern soll. Daher ist jeder Arbeitsbereich ein Modul, aber nicht jedes Modul qualifiziert sich als Arbeitsbereich.

Die wichtigste Steuerung der FreeCAD-Oberfläche ist der Arbeitsbereichswähler, mit dem du von einem Arbeitsbereich zum anderen wechseln kannst:

![](/src/assets/images/FreeCAD_WB.png)

- ![](/src/assets/images/Workbench_Assembly.svg) Der Arbeitsbereich [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") zum Erstellen und Lösen mechanischer Baugruppen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Workbench_BIM.svg) Der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") zum Arbeiten mit Architekturelementen und Erstellen von [BIM](https://en.wikipedia.org/wiki/Building_information_modeling)-Modellen. Er kombiniert den Arbeitsbereich Arch und den ehemals externen Arbeitsbereich BIM, der in 0.21 und davor verfügbar ist.

- ![](/src/assets/images/Workbench_CAM.svg) Der Arbeitsbereich [CAM](/CAM_Workbench/de "CAM Workbench/de") Wird eingesetzt, um G-Code-Anweisungen zu erstellen. Dieser Arbeitsbereich wurde in 0.21 und davor "Path" genannt.

- ![](/src/assets/images/Workbench_Draft.svg) Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") enthält 2D-Werkzeuge und grundlegende 2D- und 3D-CAD-Bearbeitungen.

- ![](/src/assets/images/Workbench_FEM.svg) Der [Arbeitsbereich FEM](/FEM_Workbench/de "FEM Workbench/de") stellt einen Arbeitsablauf für die Finite-Elemente-Analyse (FEA) zur Verfügung.

- ![](/src/assets/images/Workbench_Inspection.svg) Der Arbeitsbereich [Inspection](/Inspection_Workbench/de "Inspection Workbench/de") wurde entwickelt, um spezielle Werkzeuge für die Untersuchung von Formen bereitzustellen. Er befindet sich noch in einer frühen Entwicklungsphase.

- ![](/src/assets/images/Workbench_Material.svg) Der Arbeitsbereich [Material](/Material_Workbench/de "Material Workbench/de") kümmert sich um FreeCADs Materialsystem. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Workbench_Mesh.svg) Der Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") (Netz) für die Arbeit mit triangulierten Polygonnetzen.

- ![](/src/assets/images/Workbench_OpenSCAD.svg) Der Arbeitsbereich [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") für das Zusammenspiel mit OpenSCAD und die Reparatur der Modellhistorie von [konstruktiver Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") (Constructive-Solid-Geometry - CSG).

- ![](/src/assets/images/Workbench_Part.svg) Der Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") für die Arbeit mit geometrischen Grundkörpern und booleschen Verknüpfungen.

- ![](/src/assets/images/Workbench_PartDesign.svg) Der Arbeitsbereich [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") zum Erstellen von Part-Formen aus Skizzen.

- ![](/src/assets/images/Workbench_Points.svg) Der Arbeitsbereich [Points](/Points_Workbench/de "Points Workbench/de") (Punkte) für die Arbeit mit Punktwolken.

- ![](/src/assets/images/Workbench_Reverse_Engineering.svg) Der Arbeitsbereich [Reverse Engineering](/Reverse_Engineering_Workbench/de "Reverse Engineering Workbench/de") soll spezielle Werkzeuge bereitstellen, um Formen, Festkörper oder Netze in parametrische, zu FreeCAD kompatible Formelemente umzuwandeln.

- ![](/src/assets/images/Workbench_Robot.svg) Der Arbeitsbereich [Robot](/Robot_Workbench/de "Robot Workbench/de") zur Untersuchung von Roboterbewegungen. Wird derzeit nicht gewartet.

- ![](/src/assets/images/Workbench_Sketcher.svg) Der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") (Skizzierer) für die Arbeit mit durch geometrische Beziehungen bestimmten Skizzen.

- ![](/src/assets/images/Workbench_Spreadsheet.svg) Der Arbeitsbereich [Spreadsheet](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") (Tabellenkalkulation) zur Erstellung und Bearbeitung von Daten in Kalkulations- bzw. Konstruktionstabellen.

- ![](/src/assets/images/Workbench_Surface.svg) Der Arbeitsbereich [Surface](/Surface_Workbench/de "Surface Workbench/de") (Oberfläche) stellt Werkzeuge zum Erstellen und Ändern von Oberflächen zur Verfügung. Er ähnelt der Option _Fläche aus Kanten_ des [Part Form-Generators](/Part_Builder/de "Part Builder/de").

- ![](/src/assets/images/Workbench_TechDraw.svg) Der Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") zur Erstellung technischer Zeichnungen aus 3D-Modellen. Er ist der Nachfolger des Arbeitsbereichs [Drawing](/Drawing_Workbench/de "Drawing Workbench/de").

- ![](/src/assets/images/Workbench_Test.svg) Der Arbeitsbereich [Test Framework](/Testing/de "Testing/de") dient zum Debuggen von FreeCAD.

Neue Benutzer sind durch die Arbeitsbereiche oft verwirrt, da es nicht immer einfach ist, zu wissen, in welchem ​​Arbeitsbereich man nach einem bestimmten Werkzeug suchen soll. Sie sind jedoch schnell zu erlernen und fühlen sich nach kurzer Zeit ganz natürlich an. Neue Benutzer erkennen schnell, dass Arbeitsbereiche eine praktische Möglichkeit sind, die Vielzahl der Werkzeuge zu organisieren, die FreeCAD zu bieten hat. Darüber hinaus sind Arbeitsbereiche auch vollständig anpassbar.

### Die Oberfläche

Lass uns einen genaueren Blick auf die verschiedenen Teile der Oberfläche werfen:

![](/src/assets/images/FreeCAD_022_Interface.png)

Das Hauptfenster der Anwendung lässt sich grob in 11 Abschnitte unterteilen:

1. Der [Hauptansichtsbereich](/Main_view_area/de "Main view area/de"), der verschiedene Fenster mit Registerkarten enthalten kann.
2. Die [3D-Ansicht](/3D_view/de "3D view/de"), normalerweise eingebettet in den [Hauptansichtsbereich](/Main_view_area/de "Main view area/de"). Die 3D-Ansicht ist das zentrale Element der Benutzeroberfläche. Sie zeigt die Objekte, an denen du arbeitest, und ermöglicht deren Bearbeitung. Es ist möglich, mehrere Ansichten desselben Dokuments (oder derselben Objekte) zu haben oder mehrere Dokumente gleichzeitig geöffnet zu haben. Darüber hinaus kann jede Ansicht separat vom Hauptfenster getrennt werden.
3. Das Modell und die Registerkarte [Aufgaben](/Task_panel/de "Task panel/de").
   1. Die Registerkarte Modell zeigt dir den Inhalt und die Struktur deines Dokuments.
   2. Auf der Registerkarte Aufgaben fordert FreeCAD dich zur Eingabe von Werten auf, die für den Workbench und das Werkzeug spezifisch sind, das du gerade verwendest (z. B. die Abmessungen eines Objekts).
4. Der [Eigenschafteneditor](/Property_editor/de "Property editor/de"), der angezeigt wird, wenn die Registerkarte Modell in der Benutzeroberfläche aktiv ist. Er ermöglicht die Verwaltung der öffentlich zugänglichen Eigenschaften der Objekte im Dokument. Er besteht aus den Abschnitten Daten und Ansicht, in denen die Visualisierungseigenschaften bzw. die parametrischen Eigenschaften der Objekte angezeigt werden.
5. Die [Auswahlansicht](/Selection_view/de "Selection view/de"), die die ausgewählten Objekte oder Unterelemente von Objekten (Knoten, Kanten, Flächen) anzeigt.
6. Das [Ausgabefenster](/Report_view/de "Report view/de"), in dem Nachrichten, Warnungen und Fehler angezeigt werden.
7. Die [Python-Konsole](/Python_console/de "Python console/de") in der alle ausgeführten Befehle ausgegeben werden und in der du Python-Code eingeben kannst.
8. Die [Statusleiste](/Status_bar/de "Status bar/de"), in der einige Nachrichten und Tooltips angezeigt werden.
9. Der Symbolleistenbereich, in dem die Symbolleisten angedockt sind.
10. Die [Arbeitsbereichsauswahl](/Std_Workbench/de "Std Workbench/de"), in der du den aktiven [Arbeitsbereich](/Workbenches/de "Workbenches/de") auswählst.
11. Das [Standardmenü](/Standard_Menu/de "Standard Menu/de"), das die grundlegenden Operationen des Programms enthält.

Drücke „CTRL-ENTER“ zum Bestätigen und gehe zur nächsten

Die meisten der oben genannten Paneele können über das Menü **Ansicht → Bedienfelder** ausgeblendet oder angezeigt werden.

### Anpassung der Oberfläche

Die FreeCAD-Oberfläche ist für umfassende Anpassungen konzipiert. Alle Symbolleisten und Bedienfelder können je nach Benutzerwunsch in verschiedenen Konfigurationen verschoben, gestapelt oder sogar angedockt werden. Darüber hinaus können sie bei Bedarf geschlossen und dann wieder geöffnet werden. Darüber hinaus haben Benutzer zahlreiche weitere Optionen, darunter die Möglichkeit, benutzerdefinierte Symbolleisten mit Werkzeugen aus den verfügbaren Arbeitsbereichen zu erstellen und Tastaturkürzel zuzuweisen oder zu ändern, um den Arbeitsablauf zu optimieren. Diese Flexibilität stellt sicher, dass Benutzer die Umgebung an ihre spezifischen Bedürfnisse und Vorlieben anpassen können.

Diese erweiterten Anpassungsoptionen sind über das Menü **Werkzeuge → Menü Anpassen** verfügbar:

![](/src/assets/images/FreeCAD_022_Customization.png)

**Weiterlesen**

- [Erste Schritte mit FreeCAD](/Getting_started/de "Getting started/de")
- [Anpassung der Oberfläche](/Interface_Customization/de "Interface Customization/de")
- [Arbeitsbereiche](/Workbenches/de "Workbenches/de")
- [Mehr über Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/de&oldid=1537395>"
