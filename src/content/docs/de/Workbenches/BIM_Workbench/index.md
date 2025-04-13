---
title: Arbeitsbereich BIM
---

:::caution
In v1.0 wurden die Arbeitsbereiche BIM, Native-IFC undArchim integrierten Arbeitsbereich BIM zusammengefasst.Diese Seite wurde für diese Version aktualisiert.
:::
![](/images/Workbench_BIM.svg)

Symbol des Arbeitsbereichs BIM

## Einleitung

Der Arbeitsbereich ![](/images/Workbench_BIM.svg) BIM stellt einen modernen Arbeitsablauf für das Modellieren von Bauwerksdaten (siehe [Bauwerksdatenmodellierung](https://de.wikipedia.org/wiki/Building_Information_Modeling) oder engl. [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling), kurz BIM) in FreeCAD zur Verfügung, mit vollständig parametrischen Objekten wie Wänden, Balken, Dächern, Fenstern, Treppen, Rohrleitungen und Möbeln. Er unterstützt [Industry Foundation Classes](/Arch_IFC/de "Arch IFC/de") (IFC-Dateien), und die 2D-Zeichnungserstellung in Zusammenarbeit mit dem Arbeitsbereich ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de").

Der Arbeitsbereich BIM importiert alle Werkzeuge des Arbeitsbereichs ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de"), weil er dessen 2D-Objekte zur Erstellung von parametrischen 3D-Objekten verwendet. Er kann auch Festkörperformen verwenden, die in anderen Arbeitsbereichen wie ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") und ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurden.

Siehe [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide) (engl.), ein schneller Überblick für Benutzer anderer BIM-Anwendungen.

Die Entwickler von Draft und BIM arbeiten auch mit der größeren [OSArch-Gemeinschaft](https://osarch.org) zusammen, mit dem ultimativen Ziel, den Entwurf von Gebäuden durch den Einsatz völlig freier Software zu verbessern.

![](/images/BIM_workbench_presentation.png)

## Erste Schritte

![](/images/BIM_welcome_screen.png)

Wird der Arbeitsbereich BIM zum ersten Mal gestartet, wird ein Begrüßungsdialog angezeigt, der einen schnellen Überblick über die Funktionsweise des Arbeitsbereichs gibt und es dem Benutzer ermöglicht, eine [anwendungsinterne Anleitung](/BIM_ingame_tutorial/de "BIM ingame tutorial/de") zu starten. Der Begrüßungsdialog steht auch über das Menü **Hilfe** zur Verfügung. Wenn der Begrüßungsbildschirm durch Klicken auf OK geschlossen wird, wird der [BIM-Setup-Dialog](/BIM_Setup/de "BIM Setup/de") angezeigt, der es dem Benutzer ermöglicht, schnell einige der häufigsten BIM-bezogenen Einstellungen von FreeCAD vorzunehmen, ohne durch die vollständigen [FreeCAD-Einstellungsseiten](/Preferences_Editor/de "Preferences Editor/de") blättern zu müssen.

Das Werkzeug [BIM Einrichten](/BIM_Setup/de "BIM Setup/de") ermöglicht dem Anwender ein BIM-Projekt schnell einzurichten, indem er einige grundlegende Informationen über das Projekt ausfüllt. Es können dann z. B. die verschiedenen 2D-Zeichenwerkzeuge verwendet werden, um Leit- und Basislinien zu skizzieren, und dann die verschiedenen 3D-Modellierungswerkzeuge, um daraus automatisch 3D-BIM-Objekte zu erstellen. Eine Linie kann z. B. zu einer Wand werden, indem sie einfach ausgewählt und die Schaltfläche [Wand](/Arch_Wall/de "Arch Wall/de") gedrückt wird.

Übliche Gebäudeelemente wie [Wände](/Arch_Wall/de "Arch Wall/de") oder [Stützen](/BIM_Column/de "BIM Column/de") werden einfach durch Drücken der entsprechenden Schaltfläche in der Symbolleiste und Auswählen der Punkte in der 3D-Ansicht erstellt. Sie können verschoben, gedreht oder bearbeitet werden, sobald sie erstellt wurden. Die meisten BIM-Elemente werden auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") erstellt, daher erfordert ein typischer Arbeitsablauf, zuerst eine Arbeitsebene zu positionieren und dann ein BIM-Element zu erstellen. Komplexere Elemente können erstellt werden, indem zuerst 2D-Elemente erstellt werden und anschließend eins der BIM-Werkzeug eingesetzt wird, um sie in das gewünschten Element umzuwandeln.

Elemente von Gebäudeprojekten können geordnet werden, indem [Grundstücke](/Arch_Site/de "Arch Site/de"), [Gebäude](/Arch_Building/de "Arch Building/de") und [Stockwerke](/Arch_BuildingPart/de "Arch BuildingPart/de") verwendet werden, um nachzuahmen, was andere BIM-Anwendungen üblicherweise machen. In FreeCAD sind solche Strukturen jedoch nicht zwingend vorgeschrieben und jeder kann ohne Einschränkung die eigenen Modelle so ordnen, wie es passend erscheint, z.B. mit [Gruppen](/Std_Group/de "Std Group/de").

2D-Zeichnungen können von einem Modell abgeleitet werden, die Grundriss, Schnitt und Aufriss darstellen. Zum Erstellen solcher Zeichnungen werden [Schnittebenen](/Arch_SectionPlane/de "Arch SectionPlane/de") im Modell positioniert, die anzeigen, wo es geschnitten wird oder wie die Blickrichtung verläuft. Sobald die Schnittebenen positioniert sind, stehen die beiden folgenden Methoden zur Verfügung:

1. Im Dokument mit [Form in 2D-Ansicht](/Draft_Shape2DView/de "Draft Shape2DView/de") projizierte Ansichten erstellen, anschließend alle benötigten Beschriftungen wie Texte und Maße hinzufügen und schließlich alle Ansichten auf einem Zeichnungsblatt anordnen. Dies ist der empfohlene Weg, da er mehr Flexibilität bietet.
2. Eine Ansicht direkt aus einer Schnittebene auf einem Zeichnungsblatt erstellen. Dann müssen alle erforderlichen 2D-Beschriftungen entweder zur Schnittebene hinzugefügt werden oder direkt auf dem Zeichnungsblatt erfolgen. Dies ist weniger flexibel.

Schließlich können mit den Werkzeug [Schedule](/Arch_Schedule/de "Arch Schedule/de") Quantities-Schedules erstellt werden

Wenn man mit einer anderen BIM-Anwendung vertraut ist, sollte man unsere [BIM Anwendungskompatibilitätstabelle](/BIM_application_compatibility_table/de "BIM application compatibility table/de") lesen, um sich zu orientieren, wenn man mit FreeCAD beginnt.

![](/images/BIM_tutorial_screenshot.png)

Die [Anwendungsinterne Anleitung](/BIM_ingame_tutorial/de "BIM ingame tutorial/de") ist ein einfacher Weg, um schnell mit dem Arbeitsbereich BIM zurechtzukommen.

## Werkzeuge

Der Arbeitsbereich BIM stellt Werkzeuge aus mehreren anderen Arbeitsbereichen, hauptsächlich [Draft](/Draft_Workbench/de "Draft Workbench/de") und [Part](/Part_Workbench/de "Part Workbench/de") zusammen, die grob in lokale Kategorien umverteilt werden.

Außerdem werden, falls solche [Addons](/External_workbenches/de "External workbenches/de") installiert wurden, Werkzeuge von [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de") (zusätzliche Werkzeuge für Bewehrungsstäbe), [Fasteners](/Fasteners_Workbench/de "Fasteners Workbench/de") (Verbindungselemente wie Bolzen, Schrauben usw.), [Flamingo/Dodo](/Flamingo_Workbench/de "Flamingo Workbench/de") (Metallstruktur- und Rohrleitungswerkzeuge) und [Parts-Library](/Parts_Library_Workbench/de "Parts Library Workbench/de") (Teilebibliothek) automatisch im Arbeitsbereich BIM integriert.

Der Arbeitsbereich BIM fügt auch eine Reihe von Elementen in der **Statusleiste** von FreeCAD hinzu sowie einige **Kontextmenüelemente**, die durch einen Rechtsklick in der 3D-Ansicht oder in der Baumansicht zu erreichen sind.

### 2D-Zeichnen

2D-Objekte werden häufig als Zeichenhilfen oder zum Zeichnen von Grundlinien und Profilen verwendet, auf denen BIM-Objekte aufgebaut werden. Sie können auch zum Zeichnen von Symbolen und zur Beschriftung im Modell eingesetzt werden. Anders als Skizzen, die ihr eigenes Koordinatensystem verwenden, werden 2D-Objekte auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") gezeichnet.

- ![](/images/BIM_Sketch.svg) [Skizze](/BIM_Sketch/de "BIM Sketch/de"): Erstellt eine neue Skizze und wechselt in den Skizzenbearbeitungsmodus. Skizzen sind weiterentwickelte 2D-Objekte mit Unterstützung von Randbedingungen.

- ![](/images/Draft_Line.svg) [Linie](/Draft_Line/de "Draft Line/de"): Erstellt eine gerade Linie.

- ![](/images/Draft_Wire.svg) [Polylinie](/Draft_Wire/de "Draft Wire/de"): Erstellt eine Polylinie (auch Linienzug oder Draht genannt), eine Folge von mehreren miteinander verbundenen Liniensegmenten.

- ![](/images/Draft_Circle.svg) [Kreis](/Draft_Circle/de "Draft Circle/de"): Erstellt einen Kreis aus Mittelpunkt und Radius.

- ![](/images/Draft_Arc.svg) [Bogen](/Draft_Arc/de "Draft Arc/de"): Erstellt einen Kreisbogen aus einem Mittelpunkt, einem Radius, einem Startwinkel und einem Öffnungswinkel.

- ![](/images/Draft_Arc_3Points.svg) [Bogen durch 3 Punkte](/Draft_Arc_3Points/de "Draft Arc 3Points/de"): Erstellt einen Kreisbogen aus drei Punkten, die seinen Umfang festlegen.

- ![](/images/Draft_Fillet.svg) [Verrundung](/Draft_Fillet/de "Draft Fillet/de"): Erstellt eine Verrundung, eine abgerundete Ecke, oder eine Fase, eine gerade Kante, zwischen zwei [Draft-Linien](/Draft_Line/de "Draft Line/de").

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse/de "Draft Ellipse/de"): Erstellt eine Ellipse aus zwei Punkten, die ein Rechteck definieren, in das die Ellipse hineinpasst.

- ![](/images/Draft_Polygon.svg) [Vieleck](/Draft_Polygon/de "Draft Polygon/de"): Erstellt ein regelmäßiges Vieleck aus Mittelpunkt und Radius.

- ![](/images/Draft_Rectangle.svg) [Rechteck](/Draft_Rectangle/de "Draft Rectangle/de"): Erstellt ein Rechteck aus zwei Punkten.

- ![](/images/Draft_BSpline.svg) [B-Spline](/Draft_BSpline/de "Draft BSpline/de"): Erstellt eine B-Spline-Kurve aus mehreren Punkten.

- ![](/images/Draft_BezCurve.svg) [Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de"): Erstellt eine Bézierkurve aus mehreren Punkten.

- ![](/images/Draft_CubicBezCurve.svg) [Kubische Bézierkurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de"): Erstellt eine Bézierkurve dritten Grades.

- ![](/images/Draft_Point.svg) [Punkt](/Draft_Point/de "Draft Point/de"): Erstellt einen einfachen Punkt.

### 3D/BIM

3D- und BIM-Objekte sind die Elemente der realen Welt, aus denen sich ein BIM-Projekt zusammensetzt.

- ![](/images/BIM_Project.svg) [Projekt](/BIM_Project/de "BIM Project/de"): Erstellt ein IFC-Projekt, das die ausgewählten Objekte enthält.

- ![](/images/Arch_Site.svg) [Grundstück](/Arch_Site/de "Arch Site/de"): Erstellt ein Grundstück, das die ausgewählten Objekte enthält.

- ![](/images/Arch_Building.svg) [Gebäude](/Arch_Building/de "Arch Building/de"): Erstellt ein Gebäude, das die ausgewählten Objekte enthält.

- ![](/images/Arch_Floor.svg) [Stockwerk](/Arch_Floor/de "Arch Floor/de"): Erstellt ein Stockwerk, das die ausgewählten Objekte enthält.

- ![](/images/Arch_Space.svg) [Raum](/Arch_Space/de "Arch Space/de"): Erstellt ein Raumobjekt.

- ![](/images/Arch_Wall.svg) [Wand](/Arch_Wall/de "Arch Wall/de"): Erstellt eine Wand von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_CurtainWall.svg) [Vorhangwand](/Arch_CurtainWall/de "Arch CurtainWall/de"): Erstellt eine Vorhangwand von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/BIM_Column.svg) [Stütze](/BIM_Column/de "BIM Column/de"): Erstellt ein vertikales [Strukturelement](/Arch_Structure/de "Arch Structure/de") an einem bestimmten Punkt, optional unter Verwendung eines ausgewählten Objekts als Profil.

- ![](/images/BIM_Beam.svg) [Balken](/BIM_Beam/de "BIM Beam/de"): Erstellt ein horizontales [Strukturelement](/Arch_Structure/de "Arch Structure/de") zwischen zwei Punkten, optional unter Verwendung eines ausgewählten Objekts als Profil.

- ![](/images/BIM_Slab.svg) [Platte](/BIM_Slab/de "BIM Slab/de"): Erstellt ein flaches [Strukturelement](/Arch_Structure/de "Arch Structure/de"), indem ein ausgewähltes flaches Objekt extrudiert wird.

- ![](/images/BIM_Door.svg) [Tür](/BIM_Door/de "BIM Door/de"): Erstellt ein [Fensterobjekt](/Arch_Window/de "Arch Window/de") unter Verwendung von Türvorgaben.

- ![](/images/Arch_Window.svg) [Fenster](/Arch_Window/de "Arch Window/de"): Erstellt ein Fenster von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_Pipe.svg) [Rohr](/Arch_Pipe/de "Arch Pipe/de"): Erstellt ein Rohr.

- ![](/images/Arch_PipeConnector.svg) [Rohrverbinder](/Arch_PipeConnector/de "Arch PipeConnector/de"): Erstellt eine Bogen- oder T-Verbindung zwischen 2 bzw 3 ausgewählten Rohren.

- ![](/images/Arch_Stairs.svg) [Treppe](/Arch_Stairs/de "Arch Stairs/de"): Erstellt eine Treppe.

- ![](/images/Arch_Roof.svg) [Dach](/Arch_Roof/de "Arch Roof/de"): Erstellt ein geneigtes Dach aus einer ausgewählten Polylinie.

- ![](/images/Arch_Panel.svg) [Platte](/Arch_Panel/de "Arch Panel/de"): Erstellt ein Plattenobjekt aus einem ausgewählten 2D-Objekt.

- ![](/images/Arch_Frame.svg) [Rahmen](/Arch_Frame/de "Arch Frame/de"): Erstellt ein Rahmenobjekt aus einem ausgewählten Layout.

- ![](/images/Arch_Fence.svg) [Zaun](/Arch_Fence/de "Arch Fence/de"): Erstellt ein Zaunobjekt aus einem ausgewählten Pfosten und Pfad.

- ![](/images/Arch_Truss.svg) [Fachwerkträger](/Arch_Truss/de "Arch Truss/de"): Erstellt einen Fachwerkträger aus einer ausgewählten Linie oder von Grund auf.

- ![](/images/Arch_Equipment.svg) [Ausstattung](/Arch_Equipment/de "Arch Equipment/de"): Erstellt ein Ausstattungs- oder Möbelobjekt.

- Reinforcement-Werkzeuge:

: Diese Werkzeuge, außer dem ersten, stehen nur zur Verfügung, wenn der Arbeitsbereich [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de") installiert wurde.

- ![](/images/Arch_Rebar.svg) [Bewehrung](/Arch_Rebar/de "Arch Rebar/de"): Erstellt unter Verwendung einer Skizze ein individuell angepasstes Bewehrungselement in einem ausgewählten Strukturelement.

- ![](/images/Reinforcement_StraightRebar.svg) [Gerade Bewehrung](/Reinforcement_StraightRebar/de "Reinforcement StraightRebar/de"): Erstellt einen geraden Bewehrungsstab in einem ausgewählten Strukturelement.

- ![](/images/Reinforcement_UShapeRebar.svg) [U-förmige Bewehrung](/Reinforcement_UShapeRebar/de "Reinforcement UShapeRebar/de"): Erstellt einen U-förmigen Bewehrungsstab in einem ausgewählten Strukturelement.

- ![](/images/Reinforcement_LShapeRebar.svg) [L-förmige Bewehrung](/Reinforcement_LShapeRebar/de "Reinforcement LShapeRebar/de"): Erstellt einen L-förmigen Bewehrungsstab in einem ausgewählten Strukturelement

- ![](/images/Reinforcement_StirrupRebar.svg) [Bewehrungsbügel](/Reinforcement_StirrupRebar/de "Reinforcement StirrupRebar/de"): Erstellt einen Bewehrungsbügel in einem ausgewählten Strukturelement.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Abgesetzte Bewehrung](/Reinforcement_BentShapeRebar/de "Reinforcement BentShapeRebar/de"): Erstellt einen Bewehrungsstab mit Absatz in einem ausgewählten Strukturelement.

- ![](/images/Reinforcement_HelicalRebar.svg) [Wendelbewehrung](/Reinforcement_HelicalRebar/de "Reinforcement HelicalRebar/de"): Erstellt eine Wendelbewehrung in einem ausgewählten Strukturelement.

- ![](/images/Reinforcement_ColumnRebars.svg) [Stützenbewehrung](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de"): Erstellt Armierungen (Bewehrungsstäbe und Bewehrungsbügel) in einer ausgewählten Stütze.

- ![](/images/Arch_Rebar_BeamReinforcement.svg) [Balkenbewehrung](/Arch_Rebar_BeamReinforcement/de "Arch Rebar BeamReinforcement/de"): Erstellt Armierungen (Bewehrungsstäbe und Bewehrungsbügel) in einem ausgewählten Balken.

- ![](/images/Reinforcement_SlabRebars.svg) [Plattenbewehrung](/Reinforcement_SlabRebars/de "Reinforcement SlabRebars/de"): Erstellt Bewehrungsstäbe in einer ausgewählten Platte.

- ![](/images/Arch_Rebar_Footing_Reinforcement.svg) [Fundamentbewehrung](/Arch_Rebar_Footing_Reinforcement/de "Arch Rebar Footing Reinforcement/de"): Erstellt Armierungen (Bewehrungsstäbe und Bewehrungsbügel) in einem ausgewählten Fundament.

* Allgemeine 3D-Werkzeuge:

: Diese Werkzeuge erstellen generische 3D-Objekte, die in BIM-Komponenten umgewandelt oder verwendet werden können.

- ![](/images/Arch_Profile.svg) [Profil](/Arch_Profile/de "Arch Profile/de"): Erstellt ein parametrisches 2D-Profil.

- ![](/images/BIM_Box.svg) [Quader](/BIM_Box/de "BIM Box/de"): Erstellt einen Quader durch grafische Angabe seiner Abmessungen.

- ![](/images/Part_Builder.svg) [Formgenerator](/Part_Builder/de "Part Builder/de"): Erstellt komplexere Formen aus verschiedenen geometrischen Primitiven.

- ![](/images/Draft_Facebinder.svg)[Flächenbinder](/Draft_Facebinder/de "Draft Facebinder/de"): Erstellt ein Oberflächenobjekt aus ausgewählten Flächen.

- ![](/images/BIM_Library.svg) [Objektbibliothek](/BIM_Library/de "BIM Library/de"): Fügt ein Ausrüstungs- oder Möbelobjekt ein. Erfordert den Arbeitsbereich [Parts Library](/Parts_Library/de "Parts Library/de").

- ![](/images/Arch_Component.svg) [Komponente](/Arch_Component/de "Arch Component/de"): Erstellt eine nicht-parametrische Arch-Komponente.

- ![](/images/Arch_Reference.svg) [Externe Referenz](/Arch_Reference/de "Arch Reference/de"): Verknüpft Objekte aus einer anderen FreeCAD-Datei mit dem aktuellen Dokument.

### Anmerkung

Anmerkungen sind visuelle Hilfsobjekte, die in einem Modell platziert werden können. Sie können eingesetzt werden, wenn ein Modell direkt in ein 2D-Format wie [DXF](/Draft_DXF/de "Draft DXF/de") exportiert werden soll, oder sie werden bei der Erstellung von 2D-Ansichten des Modells mit dem Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") wiederverwendet.

- ![](/images/BIM_Text.svg) [Text](/BIM_Text/de "BIM Text/de"): Erstellt einen 2D-Text in einem Dokument oder auf einem TechDraw-Zeichnungsblatt.

- ![](/images/Draft_ShapeString.svg) [Textform](/Draft_ShapeString/de "Draft ShapeString/de"): Erstellt eine Verbundform, die eine Textzeichenfolge darstellt.

- ![](/images/BIM_DimensionAligned.svg) [Ausgerichtetes Maß](/BIM_DimensionAligned/de "BIM DimensionAligned/de"): Erstellt ein Maß, das zwischen zwei Punkten oder entlang einer ausgewählten Kante ausgerichtet wird.

- ![](/images/BIM_DimensionHorizontal.svg) [Horizontales Maß](/BIM_DimensionHorizontal/de "BIM DimensionHorizontal/de"): Erstellt ein horizontales Maß zwischen zwei Punkten oder von einer ausgewählten Kante.

- ![](/images/BIM_DimensionVertical.svg) [Vertikales Maß](/BIM_DimensionVertical/de "BIM DimensionVertical/de"): Erstellt ein vertikales Maß zwischen zwei Punkten oder von einer ausgewählten Kante.

- ![](/images/BIM_Leader.svg) [Hinweislinie](/BIM_Leader/de "BIM Leader/de"): Erstellt einen Linienzug mit zwei Abschnitten und einer Pfeilsymbol ein seinem Ende, der als Hinweislinie im Zusammenhang mit einem [Text](/BIM_Text/de "BIM Text/de") eingesetzt wird.

- ![](/images/Draft_Label.svg) [Hinweis](/Draft_Label/de "Draft Label/de"): erstellt einen mehrzeiligen Text an einer zweiteiligen Hinweislinie mit Pfeilspitze.

- ![](/images/Arch_Axis.svg) [Achse](/Arch_Axis/de "Arch Axis/de"): Fügt eine eindimensionale Anordnung von Achsen hinzu.

- ![](/images/Arch_AxisSystem.svg) [AchsenSystem](/Arch_AxisSystem/de "Arch AxisSystem/de"): Fügt ein Achsensystem hinzu, das aus mehreren Achsen besteht.

- ![](/images/Arch_Grid.svg) [Raster](/Arch_Grid/de "Arch Grid/de"): Fügt ein gitterartiges Objekt hinzu.

- ![](/images/Arch_SectionPlane.svg) [Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de"): Fügt eine Schnittebene (section plane object) hinzu.

- ![](/images/Draft_Hatch.svg) [Schraffur](/Draft_Hatch/de "Draft Hatch/de"): erstellt Schraffuren auf den ebenen Flächen eines ausgewählten Objekts.

- ![](/images/BIM_TDPage.svg) [Zeichnungsblatt](/BIM_TDPage/de "BIM TDPage/de"): Erstellt ein [TechDraw-Zeichnungsblatt](/TechDraw_PageTemplate/de "TechDraw PageTemplate/de") aus einer SVG-Vorlagendatei.

- ![](/images/BIM_TDView.svg) [Ansicht](/BIM_TDView/de "BIM TDView/de"): Erstellt eine Ansicht auf ein oder mehrere ausgewählte Objekte wie eine [Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") oder einer Gruppe, die die unterschiedlichen Elemente einer 2D-Ansicht enthält.

- ![](/images/BIM_Shape2DView.svg) [Formbasierte Ansicht](/BIM_Shape2DView/de "BIM Shape2DView/de"): Erstellt eine projizierte 2D-Ansicht aus einem ausgewählten Objekt, wie z. B. einer [Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") oder einem [Stockwerk](/Arch_Floor/de "Arch Floor/de").

### Einrasten

Dieses Menü enthält die Werkzeuge unter [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") sowie die folgenden Werkzeuge:

- ![](/images/BIM_SetWPTop.svg) [Arbeitsebene Draufsicht](/BIM_SetWPTop/de "BIM SetWPTop/de"): Legt die Arbeitsebene auf die globale XY-Ebene (Draufsicht).

- ![](/images/BIM_SetWPFront.svg) [Arbeitsebene Vorderansicht](/BIM_SetWPFront/de "BIM SetWPFront/de"): Legt die Arbeitsebene auf die globale XZ-Ebene (Vorderansicht).

- ![](/images/BIM_SetWPSide.svg) [Arbeitsebene Seitenansicht](/BIM_SetWPSide/de "BIM SetWPSide/de"): Legt die Arbeitsebene auf die globale YZ-Ebene (Seitenansicht).

### Modifitieren

- ![](/images/Draft_Move.svg) [Verschieben](/Draft_Move/de "Draft Move/de"): Verschiebt oder kopiert ausgewählte Objekte von einem Punkt zum anderen.

- ![](/images/BIM_Copy.svg) [Kopieren](/BIM_Copy/de "BIM Copy/de"): Kopiert ausgewählte Objekte von einem Punkt zum anderen.

- ![](/images/Draft_Rotate.svg) [Drehen](/Draft_Rotate/de "Draft Rotate/de"): Dreht oder kopiert ausgewählte Objekte um einen Mittelpunkt um einen bestimmten Winkel.

- ![](/images/BIM_Clone.svg) [Klon](/BIM_Clone/de "BIM Clone/de"): Klont ausgewählte Objekte.

- ![](/images/BIM_SimpleCopy.svg) [Einfache Kopie erstellen](/BIM_SimpleCopy/de "BIM SimpleCopy/de"): Erstellt eine nichtparametrische Kopie eines ausgewählten Objekts. Dies ist das gleiche Werkzeug wie [Part SimpleCopy](/Part_SimpleCopy/de "Part SimpleCopy/de").

- ![](/images/BIM_Compound.svg) [Teileverbindung](/BIM_Compound/de "BIM Compound/de"): Erstellt eine Verbindung aus ausgewählten Objekten. Dies ist das gleiche Werkzeug wie [Teileverbindung](/Part_Compound/de "Part Compound/de").

- ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset/de "Draft Offset/de"): Verschiebt jedes Segment eines ausgewählten Objekts über eine bestimmte Distanz oder erstellt eine versetzte Kopie des ausgewählten Objekts

- ![](/images/BIM_Offset2D.svg) [2D Offset](/BIM_Offset2D/de "BIM Offset2D/de"): Erstellt einen parallelen Linienzug in einem bestimmten Abstand vom Original oder vergrößert/verkleinert eine ebene Fläche (parametrische Version). Dies ist das gleiche Werkzeug wie [Part Offset2D](/Part_Offset2D/de "Part Offset2D/de").

- ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex/de "Draft Trimex/de"): Trimmt oder erweitert ein ausgewähltes Objekt.

- ![](/images/Draft_Join.svg) [Join](/Draft_Join/de "Draft Join/de"): Fügt [Entwurfslinien](/Draft_Line/de "Draft Line/de") und [Entwurfsdrähte](/Draft_Wire/de "Draft Wire/de") zu einem einzigen Linienzug zusammen.

- ![](/images/Draft_Split.svg) [Teilen](/Draft_Split/de "Draft Split/de"): Teilt eine [Entwurfslinie](/Draft_Line "Draft Line") oder einen [Linienzug](/Draft_Wire "Draft Wire") an einem angegebenen Punkt oder einer angegebenen Kante.

- ![](/images/Draft_Scale.svg) [Scale](/Draft_Scale/de "Draft Scale/de"): Skaliert oder kopiert ausgewählte Objekte um einen Basispunkt.

- ![](/images/Draft_Stretch.svg) [Stretch](/Draft_Stretch/de "Draft Stretch/de"): Streckt Objekte durch Verschieben ausgewählter Punkte.

- ![](/images/Draft_Draft2Sketch.svg) [Entwurf zu Skizze](/Draft_Draft2Sketch/de "Draft Draft2Sketch/de"): Wandelt Entwurfsobjekte in [Sketcher-Skizzen](/Sketcher_NewSketch/de "Sketcher NewSketch/de") um und umgekehrt.

- ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade/de "Draft Upgrade/de"): Aktualisiert ausgewählte Objekte.

- ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade/de "Draft Downgrade/de"): Stuft ausgewählte Objekte herab.

- ![](/images/Arch_Add.svg) [Komponente hinzufügen](/Arch_Add/de "Arch Add/de"): Fügt einer Komponente Objekte hinzu.

- ![](/images/Arch_Remove.svg) [Komponente entfernen](/Arch_Remove/de "Arch Remove/de"): Subtrahiert oder entfernt Objekte aus einer Komponente.

- ![](/images/Draft_OrthoArray.svg) [Array](/Draft_OrthoArray/de "Draft OrthoArray/de"): Erstellt ein orthogonales Array aus einem ausgewählten Objekt. Es kann optional ein [Link](/App_Link/de "App Link/de")-Array erstellen.

- ![](/images/Draft_PathArray.svg) [Pfadarray](/Draft_PathArray/de "Draft PathArray/de"): Erstellt ein Array aus einem ausgewählten Objekt, indem Kopien entlang eines Pfads platziert werden.

- ![](/images/Draft_PolarArray.svg) [Polar-Array](/Draft_PolarArray/de "Draft PolarArray/de"): Erstellt ein Array aus einem ausgewählten Objekt, indem Kopien entlang eines Umfangs platziert werden. Es kann optional ein [Link](/App_Link/de "App Link/de")-Array erstellen.

- ![](/images/Draft_PointArray.svg) [Punkt-Array](/Draft_PointArray/de "Draft PointArray/de"): Erstellt ein Array aus einem ausgewählten Objekt, indem Kopien an den Punkten einer Punktverbindung platziert werden.

- ![](/images/Arch_CutPlane.svg) [Mit Ebene schneiden](/Arch_CutPlane/de "Arch CutPlane/de"): Schneidet ein Objekt entlang einer Ebene.

- ![](/images/Draft_Mirror.svg) [Spiegel](/Draft_Mirror/de "Draft Mirror/de"): Erstellt gespiegelte Kopien von ausgewählten Objekten.

- ![](/images/BIM_Extrude.svg) [Extrude](/BIM_Extrude/de "BIM Extrude/de"): Extrudiert planare Flächen eines Objekts. Dies ist das gleiche Werkzeug wie [Teile-Extrudieren](/Part_Extrude/de "Part Extrude/de").

- ![](/images/BIM_Cut.svg) [Differenz](/BIM_Cut/de "BIM Cut/de"): Subtrahiert ein Objekt von einem anderen. Dies ist das gleiche Werkzeug wie [Part Cut](/Part_Cut/de "Part Cut/de").

- ![](/images/BIM_Fuse.svg) [Union](/BIM_Fuse/de "BIM Fuse/de"): Verbindet zwei Objekte. Dies ist das gleiche Werkzeug wie [Part Fuse](/Part_Fuse/de "Part Fuse/de").

- ![](/images/BIM_Common.svg) [Schnittpunkt](/BIM_Common/de "BIM Common/de"): Extrahiert den gemeinsamen Teil zweier Objekte. Dies ist das gleiche Werkzeug wie [Teil gemeinsam](/Part_Common/de "Part Common/de").

### Verwalten

- ![](/images/BIM_Setup.svg) [BIM-Setup...](/BIM_Setup/de "BIM Setup/de"): Konfiguriert einige der am häufigsten für BIM verwendeten FreeCAD-Einstellungen.

- ![](/images/BIM_Views.svg) [Ansichtenmanager](/BIM_Views/de "BIM Views/de"): Verwalte die verschiedenen Ansichten und Ebenen deines Projekts.

- ![](/images/BIM_ProjectManager.svg) [Projekt verwalten](/BIM_ProjectManager/de "BIM ProjectManager/de"): Ermöglicht das Erstellen einiger grundlegender Objekte wie einer [Site](/Arch_Site/de "Arch Site/de"), eines [Gebäudes](/Arch_Building/de "Arch Building/de") und von [Achsen](/Arch_Axis/de "Arch Axis/de") durch Ausfüllen der grundlegenden Projektinformationen.

- ![](/images/BIM_Windows.svg) [Türen und Fenster verwalten](/BIM_Windows/de "BIM Windows/de"): Verwalte die Türen und Fenster deines Projekts.

- ![](/images/BIM_IfcElements.svg) [IFC-Elemente verwalten](/BIM_IfcElements/de "BIM IfcElements/de"): Verwalte, wie die verschiedenen Elemente deines Projekts nach IFC exportiert werden.

- ![](/images/BIM_IfcQuantities.svg) [IFC-Mengen verwalten](/BIM_IfcQuantities/de "BIM IfcQuantities/de"): Verwalte, wie die Mengen deiner Objekte explizit nach IFC exportiert werden

- ![](/images/BIM_IfcProperties.svg) [IFC-Eigenschaften verwalten...](/BIM_IfcProperties/de "BIM IfcProperties/de"): Verwalte die IFC-Eigenschaften, die jedem deiner Objekte zugeordnet sind.

- ![](/images/BIM_Classification.svg) [Klassifizierung verwalten...](/BIM_Classification/de "BIM Classification/de"): Verwalte, wie Objekte und Materialien deines Projekts mit Klassifizierungssystemen wie [Uniclass](https://en.wikipedia.org/wiki/Uniclass) in Beziehung stehen.

- ![](/images/BIM_Layers.svg) [Ebenen verwalten](/BIM_Layers/de "BIM Layers/de"): Verwalte die Ebenen deines Dokuments.

- ![](/images/BIM_Material.svg) [Material](/BIM_Material/de "BIM Material/de"): Verwaltet [Materialien](/Arch_SetMaterial/de "Arch SetMaterial/de") oder [Multimaterialien](/Arch_MultiMaterial/de "Arch MultiMaterial/de") ausgewählter Objekte

- ![](/images/Arch_Schedule.svg) [Zeitplan](/Arch_Schedule/de "Arch Schedule/de"): Erstellt verschiedene Arten von Zeitplänen.

- ![](/images/BIM_Preflight.svg) [Preflight-Prüfungen](/BIM_Preflight/de "BIM Preflight/de"): Führe vor dem Exportieren nach IFC verschiedene Prüfungen an deinem Modell durch.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Annotationsstile](/Draft_AnnotationStyleEditor/de "Draft AnnotationStyleEditor/de"): Ermöglicht dir, Stile zu definieren, die die visuellen Eigenschaften von annotationsähnlichen Objekten beeinflussen.

### Dienstprogramme

- ![](/images/BIM_TogglePanels.svg) [Untere Bedienfelder umschalten](/BIM_TogglePanels/de "BIM TogglePanels/de"): Zeigt oder verbirgt Ausgabefenster (die Berichtsansicht und die Python-Konsole).

- ![](/images/BIM_Trash.svg) [In den Papierkorb verschieben](/BIM_Trash/de "BIM Trash/de"): Verschiebt ausgewählte Objekte in eine Papierkorbgruppe, die bei Bedarf erstellt wird.

- ![](/images/BIM_WPView.svg) [Arbeitsebenenansicht](/BIM_WPView/de "BIM WPView/de"): Richtet die Kamera auf die aktuelle Arbeitsebene aus

- ![](/images/Draft_SelectGroup.svg) [Gruppe auswählen](/Draft_SelectGroup/de "Draft SelectGroup/de"): Wählt den Inhalt von [Std-Gruppen](/Std_Group "Std Group") oder gruppenähnlichen [Arch](/Arch_Workbench/de "Arch Workbench/de")-Objekten aus.

- ![](/images/Draft_Slope.svg) [Neigung festlegen](/Draft_Slope/de "Draft Slope/de"): neigt ausgewählte [Draft-Linien](/Draft_Line/de "Draft Line/de") oder [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de"), indem die Werte der Z-Koordinaten aller Punkte nach dem ersten erhöht oder verringert werden.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Arbeitsebenen-Proxy erstellen](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de"): Erstellt einen Arbeitsebenen-Proxy zum Speichern der aktuellen [Entwurfsarbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").

- ![](/images/Draft_AddConstruction.svg) [Zur Konstruktionsgruppe hinzufügen](/Draft_AddConstruction/de "Draft AddConstruction/de"): Verschiebt Objekte in die [Entwurfs-Konstruktionsgruppe](/Draft_ToggleConstructionMode/de "Draft ToggleConstructionMode/de").

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh/de "Arch SplitMesh/de"): Teilt ein ausgewähltes Mesh in einzelne Komponenten auf.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape/de "Arch MeshToShape/de"): Wandelt ein Mesh in eine Form um und vereinheitlicht koplanare Flächen.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Nicht-mannigfaltige Netze auswählen](/Arch_SelectNonSolidMeshes/de "Arch SelectNonSolidMeshes/de"): Wählt alle nicht-mannigfaltigen Netze aus der aktuellen Auswahl oder aus dem Dokument aus.

- ![](/images/Arch_RemoveShape.svg) [Form aus Arch entfernen](/Arch_RemoveShape/de "Arch RemoveShape/de"): Macht ein kubisches, formbasiertes Arch-Objekt vollständig parametrisch.

- ![](/images/Arch_CloseHoles.svg) [Löcher schließen](/Arch_CloseHoles/de "Arch CloseHoles/de"): Schließt Löcher in einem ausgewählten formbasierten Objekt.

- ![](/images/Arch_MergeWalls.svg) [Wände zusammenführen](/Arch_MergeWalls/de "Arch MergeWalls/de"): Führt Wände zusammen.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check/de "Arch Check/de"): Überprüfen, ob die ausgewählten Objekte fest sind und keine Defekte aufweisen.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [IFC B-rep-Flag umschalten](/Arch_ToggleIfcBrepFlag/de "Arch ToggleIfcBrepFlag/de"): Erzwingt den Export eines ausgewählten Objekts als [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_ToggleSubs.svg) [Unterkomponenten umschalten](/Arch_ToggleSubs/de "Arch ToggleSubs/de"): Zeigt oder verbirgt die Unterkomponenten eines Arch-Objekts.

- ![](/images/Arch_Survey.svg) [Vermessung](/Arch_Survey/de "Arch Survey/de"): Wechselt in den Vermessungsmodus oder verlässt ihn.

- ![](/images/BIM_Diff.svg) [IFC Diff](/BIM_Diff/de "BIM Diff/de"): Zeigt einen visuellen Unterschied zwischen zwei IFC-Dateien

- ![](/images/BIM_IfcExplorer.svg) [IFC-Explorer](/BIM_IfcExplorer/de "BIM IfcExplorer/de"): Öffnet ein Tool zum Erkunden der Struktur einer IFC-Datei vor dem Importieren

- ![](/images/Arch_IfcSpreadsheet.svg) [IFC-Tabelle erstellen](/Arch_IfcSpreadsheet/de "Arch IfcSpreadsheet/de"): Dieses Tool erstellt eine Tabelle zum Speichern der IFC-Eigenschaften eines Objekts.

- ![](/images/BIM_ImagePlane.svg) [Bildebene](/index.php?title=BIM_ImagePlane/de&action=edit&redlink=1 "BIM ImagePlane/de (page does not exist)"): Fügt eine Bildebene in das Dokument ein.

- ![](/images/BIM_Unclone.svg) [Klon lösen](/index.php?title=BIM_Unclone/de&action=edit&redlink=1 "BIM Unclone/de (page does not exist)"): Löst ein geklontes Objekt von seinem Original und macht es damit unabhängig.

- ![](/images/BIM_Rewire.svg) [Rewire](/index.php?title=BIM_Rewire&action=edit&redlink=1 "BIM Rewire (page does not exist)"):

- ![](/images/BIM_Glue.svg) [Glue](/index.php?title=BIM_Glue&action=edit&redlink=1 "BIM Glue (page does not exist)"):

- ![](/images/BIM_Reextrude.svg) [Erneut Extrudieren](/index.php?title=BIM_Reextrude/de&action=edit&redlink=1 "BIM Reextrude/de (page does not exist)"): Erzeugt eine Extrusion aus einer Form, die ihre parametrische Extrusion verloren hat, indem eine Basisfläche ausgewählt wird.

- Plattenwerkzeuge:

- ![](/images/Arch_Panel.svg) [Platte](/Arch_Panel/de "Arch Panel/de"): Erstellt ein Plattenobjekt aus einem ausgewählten 2D-Objekt.

- ![](/images/Arch_Panel_Cut.svg) [Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de"): Erstellt eine 2D-Zuschnittansicht von einer Platte.

- ![](/images/Arch_Panel_Sheet.svg) [Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de"): Erstellt eine 2D-Zuschnittzeichnung, die Plattenzuschnitte und andere 2D-Objekte enthält.

- ![](/images/Arch_Nest.svg) [Verschachteln](/Arch_Nest/de "Arch Nest/de"): Ermöglicht mehrere ebene Objekte in einer Container-Form anzuordnen.

- Strukturwerkzeuge:

- ![](/images/Arch_Structure.svg) [Struktur](/Arch_Structure/de "Arch Structure/de"): Erstellt ein Strukturelement von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_StructuralSystem.svg) [Structural System](/index.php?title=Arch_StructuralSystem&action=edit&redlink=1 "Arch StructuralSystem (page does not exist)"):

- ![](/images/Arch_StructuresFromSelection.svg) [Multiple Structures](/index.php?title=Arch_StructuresFromSelection&action=edit&redlink=1 "Arch StructuresFromSelection (page does not exist)"):

- ![](/images/IFC_Diff.svg) [IFC Diff...](/index.php?title=IFC_Diff&action=edit&redlink=1 "IFC Diff (page does not exist)"):

- ![](/images/IFC_Expand.svg) [IFC Expand](/index.php?title=IFC_Expand&action=edit&redlink=1 "IFC Expand (page does not exist)"):

- ![](/images/IFC_MakeProject.svg) [Make IFC project](/index.php?title=IFC_MakeProject&action=edit&redlink=1 "IFC MakeProject (page does not exist)"):

- ![](/images/IFC_UpdateIOS.svg) [IfcOpenShell update](/index.php?title=IFC_UpdateIOS&action=edit&redlink=1 "IFC UpdateIOS (page does not exist)"):

- Nudge:

: \* [Nudge Switch](/index.php?title=BIM_Nudge_Switch&action=edit&redlink=1 "BIM Nudge Switch (page does not exist)"):

: \* [Nudge Up](/index.php?title=BIM_Nudge_Up&action=edit&redlink=1 "BIM Nudge Up (page does not exist)"):

: \* [Nudge Down](/index.php?title=BIM_Nudge_Down&action=edit&redlink=1 "BIM Nudge Down (page does not exist)"):

: \* [Nudge Left](/index.php?title=BIM_Nudge_Left&action=edit&redlink=1 "BIM Nudge Left (page does not exist)"):

: \* [Nudge Right](/index.php?title=BIM_Nudge_Right&action=edit&redlink=1 "BIM Nudge Right (page does not exist)"):

: \* [Nudge Rotate Left](/index.php?title=BIM_Nudge_RotateLeft&action=edit&redlink=1 "BIM Nudge RotateLeft (page does not exist)"):

: \* [Nudge Rotate Right](/index.php?title=BIM_Nudge_RotateRight&action=edit&redlink=1 "BIM Nudge RotateRight (page does not exist)"):

: \* [Nudge Extend](/index.php?title=BIM_Nudge_Extend&action=edit&redlink=1 "BIM Nudge Extend (page does not exist)"):

: \* [Nudge Shrink](/index.php?title=BIM_Nudge_Shrink&action=edit&redlink=1 "BIM Nudge Shrink (page does not exist)"):

### Statusleiste

Die Statusleiste enthält einige Schaltflächen, mit denen sich verschiedene Zustände einfach ändern lassen:

- ![](/images/BIM_TogglePanels.svg) [Untere Bedienfelder umschalten](/BIM_TogglePanels/de "BIM TogglePanels/de"): Zeigt oder verbirgt Ausgabefenster (die Berichtsansicht und die Python-Konsole).

- ![](/images/BIM_ToggleViews.svg) Ansichten umschalten: Blendet das Bedienfeld [BIM-Ansichten](/BIM_Views/de "BIM Views/de") ein oder aus.

- ![](/images/BIM_ToggleBackground.svg) Hintergrund wechseln: Wechselt zwischen vertikalen, radialen und einfachen Farbhintergrundmodi. Damit kann zwischen einem dunklen Hintergrund für die Modellierung und einem weißen Hintergrund für 2D-Zeichnungen umgeschaltet werden.

- ![](/images/IFC.svg) IFC sperren: Wechselt zwischen [gesperrtem und entsperrtem IFC-Modus](/NativeIFC#Locked_and_unlocked_modes "NativeIFC")

### Kontextmenü der Baumansicht

TBD

### Kontextmenü der 3D-Ansicht

TBD

### Veraltete Werkzeuge

- ![](/images/Arch_3Views.svg) [Arch 3Views](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench"). Not available in 1.0 and above.

- ![](/images/Arch_BuildingPart.svg) [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"): Creates a building part including selected objects. Not available in 1.0 and above. Use [Arch Floor](/Arch_Floor "Arch Floor") instead.

- ![](/images/Arch_CloneComponent.svg) [Arch CloneComponent](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects. Not available in 1.0 and above. Use [Draft Clone](/Draft_Clone "Draft Clone") instead.

- ![](/images/Arch_CutLine.svg) [Arch CutLine](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line. Not available in 1.0 and above. Use [Arch CutPlane](/Arch_CutPlane "Arch CutPlane") instead.

- ![](/images/Arch_MultiMaterial.svg) [Arch MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

- ![](/images/Arch_Project.svg) [Arch Project](/Arch_Project "Arch Project"): Creates a project including selected objects. Not available in 1.0 and above. Use [BIM Project](/BIM_Project "BIM Project") instead.

- ![](/images/Arch_SetMaterial.svg) [Arch SetMaterial](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

## Einstellungen

- ![](/images/Preferences-bim.svg) [Preferences](/BIM_Preferences/de "BIM Preferences/de"): Allgemeine Einstellungen für den BIM Workbench.
- [Fine-tuning](/Fine-tuning#BIM_Workbench/de "Fine-tuning"): Zusätzliche Parameter zur Feinabstimmung des BIM-Verhaltens.

## Arbeiten mit IFC

Die BIM-Workbench arbeitet nativ mit [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC)-Dateien. Nativ bedeutet, dass keine weitere Übersetzung zwischen den IFC-Inhalten und FreeCAD erforderlich ist: Die IFC-Inhalte werden direkt in FreeCAD gerendert und jede Änderung wirkt sich direkt auf die IFC-Inhalte aus. Lese mehr über [NativeIFC](/index.php?title=NativeIFC/de&action=edit&redlink=1 "NativeIFC/de (page does not exist)").

Wenn du nicht vorhast, mit anderen zusammenzuarbeiten, und IFC nicht benötigest, kannst du trotzdem die BIM-Workbench-Tools verwenden und alles, was mit IFC zu tun hat, einfach ignorieren. Du kannst dein Modell trotzdem jederzeit in IFC exportieren.

Der alte [Arch IFC](/Arch_IFC "Arch IFC")-Importer ist in FreeCAD standardmäßig deaktiviert, in Python aber weiterhin verfügbar.

Hierzu gibt es auch eine spezielle Anleitung, die [Anleitung Native-IFC](/index.php?title=NativeIFC_Tutorial/de&action=edit&redlink=1 "NativeIFC Tutorial/de (page does not exist)"), die das Konzept weitergehend erklärt.

## Dateiformate

- [IFC](/Arch_IFC "Arch IFC"): Industrie-Grundlagenklassen
- [DAE](/Arch_DAE "Arch DAE"): Collada-Netzformat
- [OBJ](/Arch_OBJ "Arch OBJ"): OBJ-Netzformat (nur Export)
- [JSON](/Arch_JSON "Arch JSON"): JavaScript Object Notation-Format (nur Export)
- [3DS](/Arch_3DS "Arch 3DS"): 3DS-Format (nur Import)
- [SHP](/Arch_SHP "Arch SHP"): GIS-Shapefiles (nur Import)

## API

Das Arch-Modul kann in [Python](/Python "Python")-Skripten und [Makros](/index.php?title=Makros&action=edit&redlink=1 "Makros (page does not exist)") mithilfe der [Arch Python API](/Arch_API/de "Arch API/de")-Funktionen verwendet werden.

## Anleitungen und Lernen

- [Umstieg von Revit auf FreeCAD](/Migrating_to_FreeCAD_from_Revit/de "Migrating to FreeCAD from Revit/de")
- [Arch- & BIM-Anleitungen in diesem Wiki](/Tutorials#Architecture_and_BIM/de "Tutorials")
- [Videoserie "BIM with FreeCAD" von Yorik](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU)
- [Videoserie "FreeCAD tutorials" von Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwkkxVOfVmR8ObpPN5QbL7ye)
- [Videoserie "Quinta Monroy" von Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwnAYyutuKhrPY51skaBhrVU)
- [YouTube-Kanal "HRCompacta" (Inhalt ist hauptsächlich in Portugiesisch)](https://www.youtube.com/@HRCompacta)
- [YouTube-Kanal "FreeCADBIM" (Inhalt ist hauptsächlich in Portugiesisch)](https://www.youtube.com/@FreeCadBIM)

## Beispieldateien

- FreeCAD bietet auf der Startseite eine BIM-Beispieldatei.
- Weitere BIM-Beispieldateien sind unter <https://github.com/yorikvanhavre/FreeCAD-BIM-examples> verfügbar. Verwende in FreeCAD das Menü „Hilfe“ -> „BIM-Beispiele“.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Workbench/de&oldid=1549882>"
