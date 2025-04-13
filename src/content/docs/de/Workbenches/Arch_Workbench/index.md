---
title: Arbeitsbereich Arch
---

:::caution
In v1.0 the BIM, Native-IFC and Arch Workbenches have been merged into the integratedBIM Workbench.
:::
![](/images/Workbench_Arch.svg)

Arch Arbeitsbereichssymbol

## Einführung

The ![](/images/Workbench_Arch.svg) [Arch Workbench](/Arch_Workbench "Arch Workbench") provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](/Arch_IFC "Arch IFC") (IFC) files, and production of 2D floor plans in combination with the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

Der Arbeitsbereich Arch importiert alle Werkzeuge des Arbeitsbereichs ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de"), weil er dessen 2D-Objekte zur Erstellung von parametrischen 3D-Architekturobjekten benutzt. Trotzdem kann Arch auch Festkörperformen aus Arbeitsbereichen wie ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") und ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwenden.

Die BIM-Funktionalität von FreeCAD ist nun dem (Konstruktions-) Ablauf entsprechend aufgeteilt in diesen Arbeitsbereich Arch, der grundlegende Architekturwerkzeuge enthält, und dem Arbeitsbereich ![](/images/Workbench_BIM.svg)[BIM](/BIM_Workbench/de "BIM Workbench/de"), den der ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") zur Verfügung stellt. Dieser Arbeitsbereich BIM fügt eine neue Schnittstellenebene, zusätzlich zu den Arch-Werkzeugen, hinzu, mit dem Ziel, den BIM-Arbeitsablauf in FreeCAD intuitiver und benutzerfreundlicher zu gestalten. Siehe [FreeCAD BIM Migrationsanleitung](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

Die Entwickler von Draft, Arch und BIM arbeiten auch mit der größeren [OSArch-Gemeinschaft](https://osarch.org) zusammen, mit dem letztendlichen Ziel, den Gebäudeentwurf durch den Einsatz völlig freier Software zu verbessern.

![](/images/Screenshot_arch_window.jpg)

## Werkzeuge

Dies sind Werkzeuge zum Erstellen von Architekturobjekten.

- ![](/images/Arch_Wall.svg) [Wand](/Arch_Wall/de "Arch Wall/de"): Erstellt eine Wand von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_Structure.svg) [Struktur](/Arch_Structure/de "Arch Structure/de"): Erstellt ein Strukturelement von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_CompRebarStraight.png) [Armierungswerkzeuge](/Arch_CompRebarStraight/de "Arch CompRebarStraight/de"): Diese Werkzeuge, außer dem letzten, stehen nur zur Verfügung, wenn der Arbeitsbereich [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de") (Bewehrung)installiert wurde.

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

- ![](/images/Arch_Rebar.svg) [Bewehrung](/Arch_Rebar/de "Arch Rebar/de"): Erstellt unter Verwendung einer Skizze ein individuell angepasstes Bewehrungselement in einem ausgewählten Strukturelement.

- ![](/images/Arch_CurtainWall.svg) [Vorhangwand](/Arch_CurtainWall/de "Arch CurtainWall/de"): Erstellt eine Vorhangwand von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_BuildingPart.svg) [Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de"): Erstellt einen Gebäudeteil inklusive der ausgewählten Objekte.

- ![](/images/Arch_Project.svg) [Projekt](/Arch_Project/de "Arch Project/de"): Erstellt ein Projekt inklusive der ausgewählten Objekte.

- ![](/images/Arch_Site.svg) [Grundstück](/Arch_Site/de "Arch Site/de"): Erstellt ein Grundstück inklusive der ausgewählten Objekte.

- ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building"): Erstellt ein Gebäude inklusive der ausgewählten Objekte.

- ![](/images/Arch_Floor.svg) [Stockwerk](/Arch_Floor/de "Arch Floor/de"): Erstellt ein Geschoss inklusive der ausgewählten Objekte.

- ![](/images/Arch_Reference.svg) [Externe Referenz](/Arch_Reference/de "Arch Reference/de"): Verknüpft Objekte aus einer anderen FreeCAD-Datei mit dem aktuellen Dokument.

- ![](/images/Arch_Window.svg) [Fenster](/Arch_Window/de "Arch Window/de"): Erstellt ein Fenster von Grund auf oder unter Verwendung eines ausgewählten Objekts als Basis.

- ![](/images/Arch_Roof.svg) [Dach](/Arch_Roof/de "Arch Roof/de"): Erstellt ein geneigtes Dach aus einer ausgewählten Polylinie.

- ![](/images/Arch_CompAxis.png) [Achsenwerkzeuge](/Arch_CompAxis/de "Arch CompAxis/de")

- ![](/images/Arch_Axis.svg) [Achse](/Arch_Axis/de "Arch Axis/de"): Fügt eine eindimensionale Anordnung von Achsen hinzu.

- ![](/images/Arch_AxisSystem.svg) [Achsensystem](/Arch_AxisSystem/de "Arch AxisSystem/de"): Fügt ein Achsensystem, das aus mehreren Achsen besteht, hinzu.

- ![](/images/Arch_Grid.svg) [Raster](/Arch_Grid/de "Arch Grid/de"): Fügt ein gitterartiges Objekt hinzu.

- ![](/images/Arch_SectionPlane.svg) [Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de"): Fügt eine Schnittebene (section plane object) hinzu.

- ![](/images/Arch_Space.svg) [Raum](/Arch_Space/de "Arch Space/de"): Erstellt ein Raumobjekt.

- ![](/images/Arch_Stairs.svg) [Treppe](/Arch_Stairs/de "Arch Stairs/de"): Erstellt eine Treppe (stairs object).

- ![](/images/Arch_CompPanel.png) [Plattenwerkzeuge](/Arch_CompPanel/de "Arch CompPanel/de")

- ![](/images/Arch_Panel.svg) [Platte](/Arch_Panel/de "Arch Panel/de"): Erstellt ein Plattenobjekt aus einem ausgewählten 2D-Objekt.

- ![](/images/Arch_Panel_Cut.svg) [Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de"): Erstellt eine 2D-Zuschnittansicht von einer Platte.

- ![](/images/Arch_Panel_Sheet.svg) [Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de"): Erstellt eine 2D-Zuschnittzeichnung, die Plattenzuschnitte und andere 2D-Objekte enthält.

- ![](/images/Arch_Nest.svg) [Verschachteln](/Arch_Nest/de "Arch Nest/de"): Ermöglicht mehrere ebene Objekte in einer Container-Form anzuordnen.

- ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment"): Creates an equipment or furniture object.

- ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame"): Creates a frame object from a selected layout.

- ![](/images/Arch_Fence.svg) [Fence](/Arch_Fence "Arch Fence"): Creates a fence object from a selected post and path.

- ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss"): Creates a truss from a selected line or from scratch.

- ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile "Arch Profile"): Creates a parametric 2D profile.

- ![](/images/Arch_CompSetMaterial.png) [Material tools](/Arch_CompSetMaterial "Arch CompSetMaterial")

- ![](/images/Arch_SetMaterial.svg) [Material](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any.

- ![](/images/Arch_MultiMaterial.svg) [Multi-Material](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any.

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/Arch_CompPipe.png) [Pipe tools](/Arch_CompPipe "Arch CompPipe")

- ![](/images/Arch_Pipe.svg) [Rohr](/Arch_Pipe/de "Arch Pipe/de"): Erstellt eine Rohrleitung.

- ![](/images/Arch_PipeConnector.svg) [Rohrverbinder](/Arch_PipeConnector/de "Arch PipeConnector/de"): Erstellt eine Bogen- oder T-Verbindung zwischen 2 bzw 3 ausgewählten Rohrleitungen.

### Änderungswerkzeuge

Hier die Werkzeuge zur Änderung von Architekturobjekten:

- ![](/images/Arch_CutPlane.svg) [Cut with plane](/Arch_CutPlane "Arch CutPlane"): Cuts an object according to a plane.

- ![](/images/Arch_CutLine.svg) [Cut with line](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line.

- ![](/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add"): Adds objects to a component.

- ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove"): Subtracts or removes objects from a component.

- ![](/images/Arch_Survey.svg) [Survey](/Arch_Survey "Arch Survey"): Enters or leaves surveying mode.

### Hilfsmittel

Hier sind zusätzliche Hilfsmittel für spezifische Aufgaben:

- ![](/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component"): Creates a non-parametric Arch component.

- ![](/images/Arch_CloneComponent.svg) [Clone component](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects (not to be confused with [Draft Clone](/Draft_Clone "Draft Clone")).

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Merge Walls](/Arch_MergeWalls "Arch MergeWalls"): Merge two or more walls.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC Brep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [3 Views from mesh](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): Creates a spreadsheet to store [IFC](/Arch_IFC "Arch IFC") properties of an object.

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

### Einstellungen

- ![](/images/Preferences-arch.svg) [Einstellungen](/Arch_Preferences/de "Arch Preferences/de"): Einstellungen für das Standard-Aussehen von Wänden, Strukturen, Bewehrungen, Fenstern, Treppen, Paneelen, Rastern und Achsen.

### Dateiformate

- [IFC](/Arch_IFC/de "Arch IFC/de") : Industrie-Fundament-Klassen
- [DAE](/Arch_DAE/de "Arch DAE/de") : Collada-Netz-Format
- [OBJ](/Arch_OBJ/de "Arch OBJ/de") : OBJ-Netz-Format (nur Export)
- [JSON](/Arch_JSON/de "Arch JSON/de") : JavaScript-Object-Notation-Format (nur Export)
- [3DS](/Arch_3DS/de "Arch 3DS/de") : 3DS-Format (nur Import)
- [SHP](/Arch_SHP "Arch SHP"): GIS-Formdateien (nur Import)

## API

Der Arbeitsbereich Arch kann mit den Funktionen der [Arch Python API](http://www.freecadweb.org/api/Arch.html) in [Python](/Python/de "Python/de")-Skripten und [Makros](/Macros/de "Macros/de") verwendet werden.

## Übungen

- [Umstieg auf FreeCAD von Revit](/Migrating_to_FreeCAD_from_Revit/de "Migrating to FreeCAD from Revit/de")
- [Architektur Arbeitsablauf](http://yorik.uncreated.net/guestblog.php?tag=freecad): Ein Beispiel, wie FreeCAD anfangen kann, einen vorbereitenden Platz in einem Architektur Arbeitsablauf einzunehmen.
- [Arch Tutorium](/Arch_tutorial/de "Arch tutorial/de")(v0.14)
- [Schnelle Arch Übersicht auf Yorik's Blog](http://yorik.uncreated.net/guestblog.php?2012=180)(v0.13)
- [Video Präsentation des Arch Arbeitsbereichs](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Arch Paneel Tutorium](/Arch_panel_tutorial/de "Arch panel tutorial/de") (v0.15)
- [BIM Modellierungskapitel aus dem FreeCAD Handbuch](/Manual:BIM_modeling/de "Manual:BIM modeling/de")
- [Import von STL oder OBJ](/Import_from_STL_or_OBJ/de "Import from STL or OBJ/de")
- [Export nach STL oder OBJ](/Export_to_STL_or_OBJ/de "Export to STL or OBJ/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/de&oldid=1433548>"
