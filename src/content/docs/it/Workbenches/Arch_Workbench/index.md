---
title: Ambiente Architettura
---

:::caution
In v1.0 the BIM, Native-IFC and Arch Workbenches have been merged into the integratedBIM Workbench.
:::
![](/images/Workbench_Arch.svg)

L'icona di Arch

## Introduzione

The ![](/images/Workbench_Arch.svg) [Arch Workbench](/Arch_Workbench "Arch Workbench") provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](/Arch_IFC "Arch IFC") (IFC) files, and production of 2D floor plans in combination with the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

L'ambiente Arch importa tutti gli strumenti dall'ambiente ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it"), poiché usa oggetti 2D per costruire i suoi oggetti architettonici 3D parametrici. Tuttavia, Arch può anche utilizzare oggetti solidi creati in altri ambiente di lavoro come ![](/images/Workbench_Part.svg) [Parte](/Part_Workbench/it "Part Workbench/it") e ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").

La funzionalità BIM di FreeCAD ora è progressivamente distribuita in questo ambiente Arch, che contiene gli strumenti di base per l'architettura, e ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/it "BIM Workbench/it"), che è possibile installare tramite ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). Questo ambiente BIM aggiunge un nuovo livello di interfaccia in cima agli strumenti Arch, con l'obiettivo di rendere facile e più intuitivo il flusso di lavoro BIM in FreeCAD. Vedere [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

Gli sviluppatori di Draft, Arch e BIM collaborano anche con la più ampia [comunità OSArch](https://osarch.org), con l'obiettivo finale di migliorare la progettazione degli edifici utilizzando software completamente gratuito.

![](/images/Screenshot_arch_window.jpg)

## Strumenti

Strumenti per creare gli oggetti architettonici.

- ![](/images/Arch_Wall.svg) [Muro](/Arch_Wall/it "Arch Wall/it"): Crea un muro da zero o utilizzando un oggetto selezionato come base.

- ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it"): Crea un elemento strutturale da zero o utilizzando un oggetto selezionato come base.

- ![](/images/Arch_CompRebarStraight.png) [Strumenti armatura](/Arch_CompRebarStraight/it "Arch CompRebarStraight/it"): Questi strumenti sono disponibili solo se è stato installato l'[Ambiente Rinforzi](/Reinforcement_Workbench/it "Reinforcement Workbench/it").

- ![](/images/Arch_Rebar_Straight.svg) [Armatura diritta](/Arch_Rebar_Straight/it "Arch Rebar Straight/it"): Crea una barra d'armatura diritta in un elemento strutturale selezionato.

- ![](/images/Arch_Rebar_UShape.svg) [Armatura a U](/Arch_Rebar_UShape/it "Arch Rebar UShape/it"): Crea una barra d'armatura a forma di U in un elemento strutturale selezionato.

- ![](/images/Arch_Rebar_LShape.svg) [Armatura a L](/Arch_Rebar_LShape/it "Arch Rebar LShape/it"): Crea una barra d'armatura a forma di L in un elemento strutturale selezionato.

- ![](/images/Arch_Rebar_Stirrup.svg) [Staffe armatura](/Arch_Rebar_Stirrup/it "Arch Rebar Stirrup/it"): Crea una barra d'armatura a staffa in un elemento strutturale selezionato.

- ![](/images/Arch_Rebar_BentShape.svg) [Armatura sagomata](/Arch_Rebar_BentShape/it "Arch Rebar BentShape/it"): Crea una barra d'armatura sagomata in un elemento strutturale selezionato.

- ![](/images/Arch_Rebar_Helical.svg) [Armatura elicoidale](/Arch_Rebar_Helical/it "Arch Rebar Helical/it"): Crea una barra d'armatura elicoidale in un elemento strutturale selezionato.

- ![](/images/Arch_Rebar_ColumnReinforcement.svg) [Armatura pilastro](/Arch_Rebar_ColumnReinforcement/it "Arch Rebar ColumnReinforcement/it"): Crea barre d'armatura in un pilastro rettangolare selezionato.

- ![](/images/Arch_Rebar_BeamReinforcement.svg) [Armatura trave](/Arch_Rebar_BeamReinforcement/it "Arch Rebar BeamReinforcement/it"): Crea barre d'armatura in una trave selezionata.

- ![](/images/Arch_Rebar_Slab_Reinforcement.svg) [Armatura soletta](/Arch_Rebar_Slab_Reinforcement/it "Arch Rebar Slab Reinforcement/it"): Crea barre d'armatura in una soletta selezionata.

- ![](/images/Arch_Rebar_Footing_Reinforcement.svg) [Armatura fondamenta](/Arch_Rebar_Footing_Reinforcement/it "Arch Rebar Footing Reinforcement/it"): Crea barre d'armatura all'interno di una fondamenta selezionata.

- ![](/images/Arch_Rebar.svg) [Armatura personalizzata](/Arch_Rebar/it "Arch Rebar/it"): Crea una barra d'armatura personalizzata in un elemento strutturale selezionato utilizzando uno schizzo.

- ![](/images/Arch_CurtainWall.svg) [Facciata continua](/Arch_CurtainWall/it "Arch CurtainWall/it"): Crea una facciata continua da zero o utilizzando un oggetto selezionato come base.

- ![](/images/Arch_BuildingPart.svg) [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"): Crea una parte dell'edificio che include gli oggetti selezionati.

- ![](/images/Arch_Project.svg) [Progetto](/Arch_Project/it "Arch Project/it"): Crea un progetto che include oggetti selezionati.

- ![](/images/Arch_Site.svg) [Sito](/Arch_Site/it "Arch Site/it"): Crea un sito che include oggetti selezionati.

- ![](/images/Arch_Building.svg) [Edificio](/Arch_Building/it "Arch Building/it"): Crea un edificio che include gli oggetti selezionati.

- ![](/images/Arch_Floor.svg) [Piano](/Arch_Floor/it "Arch Floor/it"): Crea un piano che include gli oggetti selezionati.

- ![](/images/Arch_Reference.svg) [Riferimento esterno](/Arch_Reference/it "Arch Reference/it"): Collega gli oggetti da un altro file di FreeCAD al documento corrente.

- ![](/images/Arch_Window.svg) [Finestra](/Arch_Window/it "Arch Window/it"): Crea una finestra da zero o utilizzando un oggetto selezionato come base.

- ![](/images/Arch_Roof.svg) [Tetto](/Arch_Roof/it "Arch Roof/it"): Crea un tetto inclinato da un filo selezionato.

- ![](/images/Arch_CompAxis.png) [Strumenti Assi](/Arch_CompAxis/it "Arch CompAxis/it")

- ![](/images/Arch_Axis.svg) [Asse](/Arch_Axis/it "Arch Axis/it"): Aggiunge una matrice di assi a 1 direzione.

- ![](/images/Arch_AxisSystem.svg) [Sistema di assi](/Arch_AxisSystem/it "Arch AxisSystem/it"): Aggiunge un sistema di assi composto da più assi.

- ![](/images/Arch_Grid.svg) [Griglia](/Arch_Grid/it "Arch Grid/it"): Aggiunge un oggetto simile a una griglia.

- ![](/images/Arch_SectionPlane.svg) [Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it"): Aggiunge un oggetto piano di sezione.

- ![](/images/Arch_Space.svg) [Spazio](/Arch_Space/it "Arch Space/it"): Crea un oggetto spazio.

- ![](/images/Arch_Stairs.svg) [Scale](/Arch_Stairs/it "Arch Stairs/it"): Crea un oggetto scala.

- ![](/images/Arch_CompPanel.png) [Strumenti pannello](/Arch_CompPanel/it "Arch CompPanel/it")

- ![](/images/Arch_Panel.svg) [Pannello](/Arch_Panel/it "Arch Panel/it"): Crea un oggetto pannello da un oggetto 2D selezionato.

- ![](/images/Arch_Panel_Cut.svg) [Sagoma pannello](/Arch_Panel_Cut/it "Arch Panel Cut/it"): Crea una vista piana 2D da un pannello.

- ![](/images/Arch_Panel_Sheet.svg) [Foglio pannello](/Arch_Panel_Sheet/it "Arch Panel Sheet/it"): Crea un foglio 2D che include sagome di pannelli o altri oggetti 2D.

- ![](/images/Arch_Nest.svg) [Nido](/Arch_Nest/it "Arch Nest/it"): Consente di annidare più oggetti piatti all'interno di una forma contenitore.

- ![](/images/Arch_Equipment.svg) [Arredo](/Arch_Equipment/it "Arch Equipment/it"): Crea un elemento o un oggetto di arredo.

- ![](/images/Arch_Frame.svg) [Telaio](/Arch_Frame/it "Arch Frame/it"): Crea un oggetto di carpenteria da un layout selezionato.

- ![](/images/Arch_Fence.svg) [Recinzione](/Arch_Fence/it "Arch Fence/it"): Crea un oggetto recinzione da un palo e un percorso selezionati.

- ![](/images/Arch_Truss.svg) [Travatura](/Arch_Truss/it "Arch Truss/it"): Crea una travatura reticolare da una linea selezionata o da zero.

- ![](/images/Arch_Profile.svg) [Profilo](/Arch_Profile/it "Arch Profile/it"): Crea un profilo 2D parametrico.

- ![](/images/Arch_CompSetMaterial.png) [Materiali](/Arch_CompSetMaterial/it "Arch CompSetMaterial/it")

- ![](/images/Arch_SetMaterial.svg) [Materiale](/Arch_SetMaterial/it "Arch SetMaterial/it"): Crea un materiale e lo attribuisce agli oggetti selezionati, se presenti.

- ![](/images/Arch_MultiMaterial.svg) [Multi-Materiale](/Arch_MultiMaterial/it "Arch MultiMaterial/it"): Crea un multi-materiale e lo attribuisce agli oggetti selezionati, se presenti.

- ![](/images/Arch_Schedule.svg) [Scheda](/Arch_Schedule/it "Arch Schedule/it"): Crea diversi tipi di schede.

- ![](/images/Arch_CompPipe.png) [Tubazioni](/Arch_CompPipe/it "Arch CompPipe/it")

- ![](/images/Arch_Pipe.svg) [Tubo](/Arch_Pipe/it "Arch Pipe/it") Crea un tubo.

- ![](/images/Arch_PipeConnector.svg) [Raccordo](/Arch_PipeConnector/it "Arch PipeConnector/it"): Crea un angolo o una connessione a T tra 2 o 3 tubi selezionati.

### Strumenti di modifica

Strumenti per modificare gli oggetti architettonici.

- ![](/images/Arch_CutPlane.svg) [Taglio con piano](/Arch_CutPlane/it "Arch CutPlane/it"): Taglia un oggetto secondo un piano.

- ![](/images/Arch_CutLine.svg) [Taglio con una linea](/Arch_CutLine/it "Arch CutLine/it"): Taglia un oggetto secondo una linea. Non disponibile nella versione 0.22 e superiori.

- ![](/images/Arch_Add.svg) [Aggiungi componente](/Arch_Add/it "Arch Add/it"): Aggiunge oggetti a un componente.

- ![](/images/Arch_Remove.svg) [Rimuovi componente](/Arch_Remove/it "Arch Remove/it"): Sottrae o rimuove oggetti da un componente.

- ![](/images/Arch_Survey.svg) [Ispeziona](/Arch_Survey/it "Arch Survey/it"): Entra o esce dalla modalità di rilevamento.

### Utilità

Strumenti aggiuntivi di aiuto per operazioni specifiche.

- ![](/images/Arch_Component.svg) [Componente](/Arch_Component/it "Arch Component/it"): Crea un componente Arch non parametrico.

- ![](/images/Arch_CloneComponent.svg) [Clona componente](/Arch_CloneComponent/it "Arch CloneComponent/it"): Produce componenti Arch che sono cloni di oggetti Arch selezionati (da non confondere con [Draft Clona](/Draft_Clone/it "Draft Clone/it")).

- ![](/images/Arch_SplitMesh.svg) [Dividi mesh](/Arch_SplitMesh/it "Arch SplitMesh/it"): Divide una mesh selezionata in componenti separati.

- ![](/images/Arch_MeshToShape.svg) [Da Mesh a Forma](/Arch_MeshToShape/it "Arch MeshToShape/it") Converte una mesh in una forma, unificando le facce complanari.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Seleziona le mesh non-manifold](/Arch_SelectNonSolidMeshes/it "Arch SelectNonSolidMeshes/it"): Seleziona tutte le mesh non-manifold dalla selezione corrente o dal documento.

- ![](/images/Arch_RemoveShape.svg) [Rimuovi forma](/Arch_RemoveShape/it "Arch RemoveShape/it"): Trasforma l'oggetto Arch basato sulla forma cubica in un oggetto completamente parametrico.

- ![](/images/Arch_CloseHoles.svg) [Chiudi fori](/Arch_CloseHoles/it "Arch CloseHoles/it"): Chiude i fori in un oggetto basato sulla forma selezionato.

- ![](/images/Arch_MergeWalls.svg) [Unisci i muri](/Arch_MergeWalls/it "Arch MergeWalls/it"): Unisce due o più pareti.

- ![](/images/Arch_Check.svg) [Controlla](/Arch_Check/it "Arch Check/it"): Controlla se gli oggetti selezionati sono solidi e non contengono difetti.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Attiva\Disattiva IFC Brep](/Arch_ToggleIfcBrepFlag/it "Arch ToggleIfcBrepFlag/it"): Forza l'esportazione di un oggetto selezionato come un [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [3 viste da mesh](/Arch_3Views/it "Arch 3Views/it"): Crea viste dall'alto, frontale e laterale da un [mesh](/Mesh_Workbench/it "Mesh Workbench/it").

- ![](/images/Arch_IfcSpreadsheet.svg) [Crea un foglio di calcolo Ifc...](/Arch_IfcSpreadsheet/it "Arch IfcSpreadsheet/it"): Crea un foglio di calcolo per archiviare le proprietà di un oggetto [IFC](/Arch_IFC/it "Arch IFC/it").

- ![](/images/Arch_ToggleSubs.svg) [Attiva o disattiva i sottocomponenti](/Arch_ToggleSubs/it "Arch ToggleSubs/it"): Attiva o Disattiva i sottocomponenti di un oggetto Arch.

### Preferences

- ![](/images/Preferences-arch.svg) [Preferenze](/Arch_Preferences/it "Arch Preferences/it"): preferenze per l'aspetto predefinito di pareti, strutture, armature, finestre, scale, pannelli, tubazioni, griglie e assi.

### Formati dei file

- [IFC](/Arch_IFC/it "Arch IFC/it"): Industry foundation classes
- [DAE](/Arch_DAE/it "Arch DAE/it"): Formato mesh Collada
- [OBJ](/Arch_OBJ/it "Arch OBJ/it"): Formato mesh OBJ (solo esportazione)
- [JSON](/Arch_JSON/it "Arch JSON/it"): Formato JavaScript Object Notation (solo esportazione)
- [3DS](/Arch_3DS/it "Arch 3DS/it"): Formato 3DS (solo importazione)
- [SHP](/Arch_SHP/it "Arch SHP/it"): GIS Shapefiles (solo importazione)

## API

Il Modulo Arch può essere usato negli [Python](/Python/it "Python/it") e [macro](/Macros/it "Macros/it") utilizzando le funzioni [Python API di Arch](/Arch_API/it "Arch API/it").

## Tutorial

- [Migrare a FreeCAD da Revit](/index.php?title=Migrating_to_FreeCAD_from_Revit/it&action=edit&redlink=1 "Migrating to FreeCAD from Revit/it (page does not exist)")
- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad): Un esempio di flusso di lavoro di FreeCAD in architettura.
- [Tutorial di Arch](/Arch_tutorial/it "Arch tutorial/it") (v0.14)
- [Breve panoramica su Arch nel blog di Yorik](http://yorik.uncreated.net/guestblog.php?2012=180) (v0.13)
- [Presentazione video dell'ambiente Arch](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Tutorial Pannello di Arch](/Arch_panel_tutorial/it "Arch panel tutorial/it") (v0.15)
- [Il capitolo sulla modellazione BIM nel manuale di FreeCAD](/Manual:BIM_modeling/it "Manual:BIM modeling/it")
- [Importare da STL o OBJ](/Import_from_STL_or_OBJ/it "Import from STL or OBJ/it")
- [Esportare in STL o OBJ](/Export_to_STL_or_OBJ/it "Export to STL or OBJ/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/it&oldid=1433534>"
