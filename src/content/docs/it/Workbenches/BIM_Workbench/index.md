---
title: Ambiente BIM
---

:::caution
Nella v1.0 gli ambienti di lavoro BIM, Native-IFC eArchsono stati uniti nell'ambiente BIM integrato.Questa pagina è stata aggiornata per quella versione.
:::
![](/images/Workbench_BIM.svg)

L'icona dell'Ambiente BIM

## Introduzione

L'![](/images/Workbench_BIM.svg) Ambiente BIM fornisce un moderno flusso di lavoro [Building Information Modeling](https://en.wikipedia.org/wiki/Building_information_modeling) in FreeCAD, con oggetti completamente parametrici come come muri, travi, tetti, finestre, scale, tubi e mobili. Supporta file [Industry Foundation Classes](/Arch_IFC/it "Arch IFC/it") (IFC) e la produzione di disegni progettuali 2D in combinazione con ![](/images/Workbench_TechDraw.svg) l'[Ambiente TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it").

L'ambiente BIM importa strumenti da ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it"), poiché utilizza i suoi oggetti 2D per costruire oggetti parametrici 3D. Ma può anche utilizzare forme solide create con altri ambienti di lavoro come ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") e ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").

Vedere [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide) per una rapida panoramica se si è già utente di un'altra applicazione BIM.

Gli sviluppatori di Draft e BIM collaborano anche con la più ampia [comunità OSArch](https://osarch.org), con l'obiettivo finale di migliorare la progettazione degli edifici utilizzando software completamente gratuito.

![](/images/BIM_workbench_presentation.png)

## Per iniziare

![](/images/BIM_welcome_screen.png)

Al primo avvio di BIM viene visualizzata una finestra di benvenuto, che fornisce una rapida panoramica di come funziona questo ambiente e consente all'utente di avviare un [divertente tutorial di BIM](/BIM_ingame_tutorial/it "BIM ingame tutorial/it"). La finestra di benvenuto è disponibile anche dal menu **Aiuto**. Quando la schermata di benvenuto viene chiusa facendo clic su OK, viene visualizzata la [finestra di dialogo di configurazione BIM](/BIM_Setup/it "BIM Setup/it"), che consente all'utente di impostare rapidamente alcune delle più comuni preferenze relative al BIM di FreeCAD senza la necessità di sfogliare tutte le pagine delle [Preferenze di FreeCAD](/Preferences_Editor/it "Preferences Editor/it").

Lo strumento [Configurazione del progetto BIM](/BIM_Setup/it "BIM Setup/it") consente di configurare rapidamente un progetto BIM inserendo alcune informazioni di base sul progetto. È quindi possibile, ad esempio, utilizzare i diversi strumenti di disegno 2D per tracciare linee guida e linee di base, quindi utilizzare i diversi strumenti di modellazione 3D per creare automaticamente gli oggetti BIM 3D. Una linea, ad esempio, può diventare un muro semplicemente selezionandola e premendo il pulsante [Muro](/Arch_Wall/it "Arch Wall/it").

Elementi di costruzione comuni come [muri](/Arch_Wall/it "Arch Wall/it") o [colonne](/index.php?title=BIM_Column/it&action=edit&redlink=1 "BIM Column/it (page does not exist)") possono essere facilmente creati premendo il pulsante appropriato della barra degli strumenti e facendo clic sui punti nella vista 3D. Possono essere spostati, ruotati e modificati una volta creati. La maggior parte degli elementi BIM vengono creati sul [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente, quindi un flusso di lavoro tipico prevede prima il posizionamento del piano di lavoro, quindi la creazione di un elemento BIM. È possibile creare elementi più complessi disegnando prima gli elementi 2D, quindi utilizzando uno degli strumenti BIM per convertirli nell'elemento desiderato.

Gli elementi che costituiscono il progetto possono essere organizzati utilizzando [siti](/Arch_Site/it "Arch Site/it"), [edifici](/Arch_Building "Arch Building") e [livelli](/Arch_BuildingPart "Arch BuildingPart"), per riprodurre ciò che viene comunemente fatto in altre applicazioni BIM. In FreeCAD, tuttavia, tali strutture non sono obbligatorie e si è liberi di organizzare gli elementi del proprio modello come si ritiene opportuno, ad esempio utilizzando [gruppi](/Std_Group/it "Std Group/it").

I disegni 2D possono essere generati da un modello per rappresentare viste in pianta, sezione o prospetto. Per generare questi disegni, nel modello vengono posizionati dei [piani di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it"), per indicare da dove deve essere tagliato o visto il modello. Una volta posizionati i piani di sezione, sono possibili due metodi:

1. Creare viste proiettate nel documento utilizzando [shape views](/Draft_Shape2DView/it "Draft Shape2DView/it"), quindi aggiungere tutte le annotazioni necessarie come testi e quote e poi inserire tutto questo in una pagina. Questo è il metodo consigliato perché offre maggiore flessibilità.
2. Creare una vista su una pagina direttamente dal piano di sezione. Quindi tutte le annotazioni 2D necessarie devono essere aggiunte al piano di sezione o eseguite direttamente sulla pagina. Questo è meno flessibile.

Infine, è possibile creare computi delle quantità utilizzando lo strumento [schedule](/Arch_Schedule/it "Arch Schedule/it").

Se si è abituati a lavorare con un'altra applicazione BIM, controllare la nostra [Tabella di compatibilità dell'applicazione BIM](/BIM_application_compatibility_table/it "BIM application compatibility table/it") per orientarsi quando si inizia a lavorare con FreeCAD.

![](/images/BIM_tutorial_screenshot.png)

Il [tutorial divertente di BIM](/BIM_ingame_tutorial/it "BIM ingame tutorial/it") è un modo semplice per iniziare rapidamente a usare l'ambiente BIM.

## Strumenti

L'ambiente BIM raccoglie strumenti da diversi altri ambienti di FreeCAD, principalmente [Draft](/Draft_Workbench/it "Draft Workbench/it") e [Part](/Part_Workbench/it "Part Workbench/it"), approssimativamente riorganizzati in categorie logiche.

Inoltre, se tali [addon](/index.php?title=External_workbench/it&action=edit&redlink=1 "External workbench/it (page does not exist)") sono installati, gli strumenti da [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it") (strumenti aggiuntivi per barre d'armatura), [Fasteners](/Fasteners_Workbench/it "Fasteners Workbench/it") (bulloni e viti), [Flamingo/Dodo](/Flamingo_Workbench/it "Flamingo Workbench/it") (strumenti per strutture metalliche e tubazioni) e [Parts Library](/Parts_Library_Workbench/it "Parts Library Workbench/it") vengono automaticamente inclusi nell'ambiente BIM.

L'ambiente BIM aggiunge anche una serie di elementi nella **barra di stato** di FreeCAD e un paio di **voci nel menu contestuale**, accessibili facendo clic con il tasto destro nella vista 3D o nella vista ad albero .

### Disegni 2D

Gli oggetti 2D sono comunemente usati come strumenti di disegno o per disegnare linee di base e profili per costruire oggetti BIM. Possono anche essere utilizzati per disegnare simboli e annotazioni nel modello. Oltre agli schizzi, che utilizzano il proprio sistema di coordinate, gli oggetti 2D verranno disegnati sul corrente [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").

- ![](/images/BIM_Sketch.svg) [Schizzo](/BIM_Sketch/it "BIM Sketch/it"): crea un nuovo schizzo e accede alla modalità di modifica dello schizzo. Gli schizzi sono oggetti 2D avanzati con supporto di vincoli.

- ![](/images/Draft_Line.svg) [Linea](/Draft_Line/it "Draft Line/it"): crea una linea retta.

- ![](/images/Draft_Wire.svg) [Polilinea](/Draft_Wire/it "Draft Wire/it"): crea una polilinea (chiamata anche wire), una sequenza di diversi segmenti lineari connessi.

- ![](/images/Draft_Circle.svg) [Cerchio](/Draft_Circle/it "Draft Circle/it"): crea un cerchio da un centro e un raggio.

- ![](/images/Draft_Arc.svg) [Arco](/Draft_Arc/it "Draft Arc/it"): crea un arco circolare da un centro, un raggio, un angolo iniziale e un angolo di apertura.

- ![](/images/Draft_Arc_3Points.svg) [Arco per 3 punti](/Draft_Arc_3Points/it "Draft Arc 3Points/it"): crea un arco circolare per tre punti che ne definiscono la circonferenza.

- ![](/images/Draft_Fillet.svg) [Raccordo](/Draft_Fillet/it "Draft Fillet/it"): crea un raccordo, un angolo arrotondato, o uno smusso, un angolo retto, tra due [Draft Linee](/Draft_Line/it "Draft Line/it").

- ![](/images/Draft_Ellipse.svg) [Ellisse](/Draft_Ellipse/it "Draft Ellipse/it"): crea un'ellisse da due punti definendo un rettangolo a cui l'ellisse si adatterà.

- ![](/images/Draft_Polygon.svg) [Poligono](/Draft_Polygon/it "Draft Polygon/it"): crea un poligono regolare da un centro e un raggio.

- ![](/images/Draft_Rectangle.svg) [Rettangolo](/Draft_Rectangle/it "Draft Rectangle/it"): crea un rettangolo da due punti.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline/it "Draft BSpline/it"): crea una curva B-spline da più punti.

- ![](/images/Draft_BezCurve.svg) [Curva di Bézier](/Draft_BezCurve/it "Draft BezCurve/it"): crea una curva di Bézier da più punti.

- ![](/images/Draft_CubicBezCurve.svg) [Curva Cubica di Bézier](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it"): crea una curva di Bézier di terzo grado.

- ![](/images/Draft_Point.svg) [Punto](/Draft_Point/it "Draft Point/it"): crea un punto semplice.

### 3D/BIM

Gli oggetti 3D e BIM sono gli elementi del mondo reale che compongono il progetto BIM.

- ![](/images/BIM_Project.svg) [Progetto](/BIM_Project/it "BIM Project/it"): Crea un progetto IFC includendo gli oggetti selezionati.

- ![](/images/Arch_Site.svg) [Sito](/Arch_Site/it "Arch Site/it"): Crea un sito che include oggetti selezionati.

- ![](/images/Arch_Building.svg) [Edificio](/Arch_Building/it "Arch Building/it"): Crea un edificio che include gli oggetti selezionati.

- ![](/images/Arch_Floor.svg) [Piano](/Arch_Floor/it "Arch Floor/it"): Crea un piano che include gli oggetti selezionati.

- ![](/images/Arch_Space.svg) [Spazio](/Arch_Space/it "Arch Space/it"): Crea un oggetto spazio.

- ![](/images/Arch_Wall.svg) [Muro](/Arch_Wall/it "Arch Wall/it"): Crea un muro da zero o utilizzando un oggetto selezionato come base.

- ![](/images/Arch_CurtainWall.svg) [Facciata continua](/Arch_CurtainWall/it "Arch CurtainWall/it"): Crea una facciata continua da zero o utilizzando un oggetto selezionato come base.

- ![](/images/BIM_Column.svg) [Colonna](/index.php?title=BIM_Column/it&action=edit&redlink=1 "BIM Column/it (page does not exist)"): crea un elemento verticale [strutturale](/Arch_Structure/it "Arch Structure/it") in un dato punto, facoltativamente utilizzando un oggetto selezionato come profilo.

- ![](/images/BIM_Beam.svg) [Trave](/index.php?title=BIM_Beam/it&action=edit&redlink=1 "BIM Beam/it (page does not exist)"): Crea un elemento [strutturale](/Arch_Structure/it "Arch Structure/it") orizzontale tra due punti, opzionalmente utilizzando un oggetto selezionato come profilo.

- ![](/images/BIM_Slab.svg) [Soletta](/index.php?title=BIM_Slab/it&action=edit&redlink=1 "BIM Slab/it (page does not exist)"): crea un elemento piatto [strutturale](/Arch_Structure/it "Arch Structure/it") estrudendo un oggetto piatto selezionato.

- ![](/images/BIM_Door.svg) [Porta](/BIM_Door/it "BIM Door/it"): crea un oggetto [Finestra](/Arch_Window/it "Arch Window/it") utilizzando le preimpostazioni della porta.

- ![](/images/Arch_Window.svg) [Finestra](/Arch_Window/it "Arch Window/it"): Crea una finestra da zero o utilizzando un oggetto selezionato come base.

- ![](/images/Arch_Pipe.svg) [Tubo](/Arch_Pipe/it "Arch Pipe/it"): Crea una tubo.

- ![](/images/Arch_PipeConnector.svg) [Raccordo](/Arch_PipeConnector/it "Arch PipeConnector/it"): Crea un raccordo ad angolo o a T tra 2 o 3 tubi selezionati.

- ![](/images/Arch_Stairs.svg) [Scale](/Arch_Stairs/it "Arch Stairs/it"): Crea un oggetto scala.

- ![](/images/Arch_Roof.svg) [Tetto](/Arch_Roof/it "Arch Roof/it"): Crea un tetto inclinato da un filo selezionato.

- ![](/images/Arch_Panel.svg) [Pannelllo](/Arch_Panel/it "Arch Panel/it"): Crea un oggetto pannello da un oggetto 2D selezionato.

- ![](/images/Arch_Frame.svg) [Telaio](/Arch_Frame/it "Arch Frame/it"): Crea un oggetto di carpenteria da un layout selezionato.

- ![](/images/Arch_Fence.svg) [Recinzione](/Arch_Fence/it "Arch Fence/it"): Crea un oggetto recinzione da un palo e un percorso selezionati.

- ![](/images/Arch_Truss.svg) [Travatura](/Arch_Truss/it "Arch Truss/it"): Crea una travatura reticolare da una linea selezionata o da zero.

- ![](/images/Arch_Equipment.svg) [Arredo](/Arch_Equipment/it "Arch Equipment/it"): Crea un'attrezzatura o un oggetto di arredo.

- Reinforcement tools:

: Questi strumenti, tranne il primo, sono disponibili solo se è stato installato l'[Ambiente Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it").

- ![](/images/Arch_Rebar.svg) [Armatura perzonalizzata](/Arch_Rebar/it "Arch Rebar/it"): Crea un'armatura personalizzata in un elemento strutturale selezionato utilizzando uno schizzo.

- ![](/images/Reinforcement_StraightRebar.svg) [Straight Rebar](/Reinforcement_StraightRebar "Reinforcement StraightRebar"): Creates a straight reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_UShapeRebar.svg) [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar"): Creates a U-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_LShapeRebar.svg) [L-Shape Rebar](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar"): Creates an L-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_StirrupRebar.svg) [Stirrup](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar"): Creates a stirrup reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Bent-Shape Rebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar"): Creates a bent-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_HelicalRebar.svg) [Helical Rebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar"): Creates a helical reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars"): Creates reinforcement bars in a selected column.

- ![](/images/Reinforcement_BeamRebars.svg) [Beam Reinforcement](/Reinforcement_BeamRebars "Reinforcement BeamRebars"): Creates reinforcement bars in a selected beam.

- ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars"): Creates reinforcement bars in a selected slab.

- ![](/images/Reinforcement_FootingRebars.svg) [Footing Reinforcement](/Reinforcement_FootingRebars "Reinforcement FootingRebars"): Creates reinforcement bars in a selected footing.

* Generic 3D tools:

: Questi strumenti creano oggetti 3D generici che possono essere trasformati o utilizzati in componenti BIM.

- ![](/images/Arch_Profile.svg) [Profilo](/Arch_Profile/it "Arch Profile/it"): Crea un profilo 2D parametrico.

- ![](/images/BIM_Box.svg) [Box](/BIM_Box "BIM Box"): Creates a box by specifying its dimensions graphically.

- ![](/images/Part_Builder.svg) [Shape builder...](/Part_Builder "Part Builder"): Creates more complex shapes from various geometric primitives.

ː\- ![](/images/Draft_Facebinder.svg) [Lega facce](/Draft_Facebinder/it "Draft Facebinder/it"): Crea un oggetto superficie dalle facce selezionate.

- ![](/images/BIM_Library.svg) [Objects library](/BIM_Library "BIM Library"): Inserts an equipment or furniture object. Requires the [Parts Library](/Parts_Library "Parts Library") addon.

- ![](/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component"): Creates a non-parametric Arch component.

- ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference"): Links objects from another FreeCAD file into the current document.

### Annotazioni

Le annotazioni sono oggetti di aiuto visivo che possono essere inseriti all'interno del modello. Possono essere utilizzati per esportare il modello direttamente in un formato 2D come [DXF](/Draft_DXF/it "Draft DXF/it"), o riutilizzati durante la creazione di viste 2D del modello con [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it").

- ![](/images/BIM_Text.svg) [Text](/BIM_Text "BIM Text"): Creates a 2D text in a document or on a TechDraw page.

- ![](/images/Draft_ShapeString.svg) [Shape from text](/Draft_ShapeString "Draft ShapeString"): Creates a compound shape that represents a text string.

- ![](/images/BIM_DimensionAligned.svg) [Aligned dimension](/BIM_DimensionAligned "BIM DimensionAligned"): Creates a dimension aligned with two points or a selected edge.

- ![](/images/BIM_DimensionHorizontal.svg) [Horizontal dimension](/BIM_DimensionHorizontal "BIM DimensionHorizontal"): Creates an horizontal dimension between two points or from a selected edge.

- ![](/images/BIM_DimensionVertical.svg) [Vertical dimension](/BIM_DimensionVertical "BIM DimensionVertical"): Creates a vertical dimension between two points or from a selected edge.

- ![](/images/BIM_Leader.svg) [Leader](/BIM_Leader "BIM Leader"): Creates a 2-segment polyline with an arrow at its end, to be used as a leader line in conjunction with a [Text](/BIM_Text "BIM Text").

- ![](/images/Draft_Label.svg) [Label](/Draft_Label "Draft Label"): Creates a multi-line text with a 2-segment leader line and an arrow.

- ![](/images/Arch_Axis.svg) [Axis](/Arch_Axis "Arch Axis"): Adds a 1-direction array of axes.

- ![](/images/Arch_AxisSystem.svg) [Axis System](/Arch_AxisSystem "Arch AxisSystem"): Adds an axis system composed of several axes.

- ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid"): Adds a grid-like object.

- ![](/images/Arch_SectionPlane.svg) [Section Plane](/Arch_SectionPlane "Arch SectionPlane"): Adds a section plane object.

- ![](/images/Draft_Hatch.svg) [Tratteggio](/Draft_Hatch/it "Draft Hatch/it"): Crea tratteggi sulle facce piane di un oggetto selezionato.

- ![](/images/BIM_TDPage.svg) [Page](/BIM_TDPage "BIM TDPage"): Creates a [TechDraw page](/TechDraw_PageTemplate "TechDraw PageTemplate") from a template SVG file.

- ![](/images/BIM_TDView.svg) [View](/BIM_TDView "BIM TDView"): Creates a view of the selected object(s) such as a [Section plane](/Arch_SectionPlane "Arch SectionPlane") or a Group containing the different elements of a 2D view.

- ![](/images/BIM_Shape2DView.svg) [Shape-based view](/BIM_Shape2DView "BIM Shape2DView"): Creates a 2D projected view from a selected object such as a [Section plane](/Arch_SectionPlane "Arch SectionPlane") or a [Level](/Arch_BuildingPart "Arch BuildingPart").

### Snapping

This menu contains the [Draft Snap](/Draft_Snap "Draft Snap") tools as well as the following tools:

- ![](/images/BIM_SetWPTop.svg) [Working Plane Top](/BIM_SetWPTop "BIM SetWPTop"): Places the working plane on the global XY plane (ground).

- ![](/images/BIM_SetWPFront.svg) [Working Plane Front](/BIM_SetWPFront "BIM SetWPFront"): Places the working plane on the global XZ plane (front).

- ![](/images/BIM_SetWPSide.svg) [Working Plane Side](/BIM_SetWPSide "BIM SetWPSide"): Places the working plane on the global YZ plane (side).

### Modifica

- ![](/images/Draft_Move.svg) [Sposta](/Draft_Move/it "Draft Move/it"): Sposta o copia gli oggetti selezionati da un punto all'altro.

- ![](/images/BIM_Copy.svg) [Copy](/BIM_Copy "BIM Copy"): Copies selected objects from one point to another.

- ![](/images/Draft_Rotate.svg) [Rotate](/Draft_Rotate "Draft Rotate"): Rotates or copies selected objects around a center point by a given angle.

- ![](/images/BIM_Clone.svg) [Clone](/BIM_Clone "BIM Clone"): Clones selected objects.

- ![](/images/BIM_SimpleCopy.svg) [Create simple copy](/BIM_SimpleCopy "BIM SimpleCopy"): Creates a non-parametric copy of a selected object. This is the same tool as [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy").

- ![](/images/BIM_Compound.svg) [Make compound](/BIM_Compound "BIM Compound"): Creates a compound from selected objects. This is the same tool as [Part Compound](/Part_Compound "Part Compound").

- ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset/it "Draft Offset/it"): Sposta ogni segmento di un oggetto selezionato ad una determinata distanza o crea una copia traslata dell'oggetto selezionato.

- ![](/images/BIM_Offset2D.svg) [2D Offset...](/BIM_Offset2D "BIM Offset2D"): Constructs a parallel wire at a given distance from the original, or enlarges/shrinks a planar face (parametric version). This is the same tool as [Part Offset2D](/Part_Offset2D "Part Offset2D").

- ![](/images/Draft_Trimex.svg) [Taglia/Estendi](/Draft_Trimex/it "Draft Trimex/it"): Taglia o estende un oggetto selezionato.

- ![](/images/Draft_Join.svg) [Unisci](/Draft_Join/it "Draft Join/it"): Unisce [Linee](/Draft_Line/it "Draft Line/it") e [Polilinee](/Draft_Wire/it "Draft Wire/it") in un unico contorno.

- ![](/images/Draft_Split.svg) [Dividi](/Draft_Split/it "Draft Split/it"): Divide una [Linea](/Draft_Line/it "Draft Line/it") o una [Polilinea](/Draft_Wire/it "Draft Wire/it") in un punto o bordo specificato.

- ![](/images/Draft_Scale.svg) [Scala](/Draft_Scale/it "Draft Scale/it"): Ridimensiona o copia gli oggetti selezionati attorno a un punto base.

- ![](/images/Draft_Stretch.svg) [Stira](/Draft_Stretch/it "Draft Stretch/it"): Allunga gli oggetti spostando i punti selezionati.

- ![](/images/Draft_Draft2Sketch.svg) [Draft in sketch](/Draft_Draft2Sketch/it "Draft Draft2Sketch/it"): Converte oggetti Draft in [Schizzi](/Sketcher_NewSketch/it "Sketcher NewSketch/it") e vice versa.

- ![](/images/Draft_Upgrade.svg) [Promuovi](/Draft_Upgrade/it "Draft Upgrade/it"): Promuove gli oggetti selezionati.

- ![](/images/Draft_Downgrade.svg) [Declassa](/Draft_Downgrade/it "Draft Downgrade/it"): Declassa gli oggetti selezionati.

- ![](/images/Arch_Add.svg) [Aggiungi componente](/Arch_Add/it "Arch Add/it"): Aggiunge oggetti a un componente.

- ![](/images/Arch_Remove.svg) [Rimuovi componente](/Arch_Remove/it "Arch Remove/it"): Sottrae o rimuove oggetti da un componente.

- ![](/images/Draft_OrthoArray.svg) [Serie](/Draft_OrthoArray/it "Draft OrthoArray/it"): Crea una serie ortogonale da un oggetto selezionato. Può opzionalmente creare una serie di [Link](/App_Link "App Link").

- ![](/images/Draft_PathArray.svg) [Serie su tracciato](/Draft_PathArray/it "Draft PathArray/it"): Crea una matrice da un oggetto selezionato posizionando le copie lungo un tracciato.

- ![](/images/Draft_PolarArray.svg) [Serie polare](/Draft_PolarArray/it "Draft PolarArray/it"): Crea una serie da un oggetto selezionato, posizionando copie lungo una circonferenza. Facoltativamente, può creare una serie di [Link](/App_Link/it "App Link/it").

- ![](/images/Draft_PointArray.svg) [Serie di punti](/Draft_PointArray/it "Draft PointArray/it"): Crea una serie da un oggetto selezionato posizionando copie nei punti da un assieme di punti.

- ![](/images/Arch_CutPlane.svg) [Taglio con piano](/Arch_CutPlane/it "Arch CutPlane/it"): Taglia un oggetto secondo un piano.

- ![](/images/Draft_Mirror.svg) [Specchio](/Draft_Mirror/it "Draft Mirror/it"): Crea copie specchiate da oggetti selezionati.

- ![](/images/BIM_Extrude.svg) [Extrude...](/BIM_Extrude "BIM Extrude"): Extrudes planar faces of an object. This is the same tool as [Part Extrude](/Part_Extrude "Part Extrude").

- ![](/images/BIM_Cut.svg) [Difference](/BIM_Cut "BIM Cut"): Subtracts one object from another. This is the same tool as [Part Cut](/Part_Cut "Part Cut").

- ![](/images/BIM_Fuse.svg) [Union](/BIM_Fuse "BIM Fuse"): Fuses two objects. This is the same tool as [Part Fuse](/Part_Fuse "Part Fuse").

- ![](/images/BIM_Common.svg) [Intersection](/BIM_Common "BIM Common"): Extracts the common part of two objects. This is the same tool as [Part Common](/Part_Common "Part Common").

### Gestione

- ![](/images/BIM_Setup.svg) [BIM Setup...](/BIM_Setup "BIM Setup"): Configures some of the FreeCAD preferences most commonly used for BIM.

- ![](/images/BIM_Views.svg) [Views manager](/BIM_Views "BIM Views"): Manage the different views and levels of your project.

- ![](/images/BIM_ProjectManager.svg) [Manage project...](/BIM_ProjectManager "BIM ProjectManager"): Allows to create some basic objects such as a [site](/Arch_Site "Arch Site"), a [building](/Arch_Building "Arch Building") and [axes](/Arch_Axis "Arch Axis") by filling basic project information.

- ![](/images/BIM_Windows.svg) [Manage doors and windows...](/BIM_Windows "BIM Windows"): Manage the doors and windows of your project.

- ![](/images/BIM_IfcElements.svg) [Manage IFC elements...](/BIM_IfcElements "BIM IfcElements"): Manage how the different elements of your project will be exported to IFC.

- ![](/images/BIM_IfcQuantities.svg) [Manage IFC quantities...](/BIM_IfcQuantities "BIM IfcQuantities"): Manage how the quantities of your objects are explicitely exported to IFC

- ![](/images/BIM_IfcProperties.svg) [Manage IFC properties...](/BIM_IfcProperties "BIM IfcProperties"): Manage the IFC properties attached to each of your objects.

- ![](/images/BIM_Classification.svg) [Manage classification...](/BIM_Classification "BIM Classification"): Manage how objects and materials of your project relate to classifications systems such as [Uniclass](https://en.wikipedia.org/wiki/Uniclass).

- ![](/images/BIM_Layers.svg) [Manage layers...](/BIM_Layers "BIM Layers"): Manage the layers of your document.

- ![](/images/BIM_Material.svg) [Material](/BIM_Material "BIM Material"): Manages [materials](/Arch_SetMaterial "Arch SetMaterial") or [multimaterials](/Arch_MultiMaterial "Arch MultiMaterial") of selected objects

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/BIM_Preflight.svg) [Preflight checks...](/BIM_Preflight "BIM Preflight"): Perform different checks on your model before exporting to IFC.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Annotation styles...](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor"): Allows you to define styles that affect the visual properties of annotation-like objects.

### Utils

- ![](/images/BIM_TogglePanels.svg) [Toggle bottom panels](/BIM_TogglePanels "BIM TogglePanels"): Shows or hides output windows (the Report view and the Python console).

- ![](/images/BIM_Trash.svg) [Move to Trash](/BIM_Trash "BIM Trash"): Moves selected objects to a Trash group, which gets created if necessary

- ![](/images/BIM_WPView.svg) [Working Plane View](/BIM_WPView "BIM WPView"): Sets the camera to face the current working plane

- ![](/images/Draft_SelectGroup.svg) [Select group](/Draft_SelectGroup "Draft SelectGroup"): Selects the contents of [Std Groups](/Std_Group "Std Group") or group-like [Arch](/Arch_Workbench "Arch Workbench") objects.

- ![](/images/Draft_Slope.svg) [Set slope](/Draft_Slope "Draft Slope"): Slopes selected [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire") by increasing, or decreasing, the Z coordinate of all points after the first one.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): Creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_AddConstruction.svg) [Add to construction group](/Draft_AddConstruction "Draft AddConstruction"): Moves objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode").

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Merge Walls](/Arch_MergeWalls "Arch MergeWalls"): Merges walls.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC B-rep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

- ![](/images/Arch_Survey.svg) [Survey](/Arch_Survey "Arch Survey"): Enters or leaves surveying mode.

- ![](/images/BIM_Diff.svg) [IFC Diff](/BIM_Diff "BIM Diff"): Shows a visual diff between two IFC files

- ![](/images/BIM_IfcExplorer.svg) [IFC explorer](/BIM_IfcExplorer "BIM IfcExplorer"): Opens a tool to explore the structure of an IFC file prior to importing

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): This tool creates a spreadsheet to store IFC properties of an object.

- ![](/images/BIM_ImagePlane.svg) [Image plane](/index.php?title=BIM_ImagePlane&action=edit&redlink=1 "BIM ImagePlane (page does not exist)"): Inserts an image plane in the document.

- ![](/images/BIM_Unclone.svg) [Unclone](/index.php?title=BIM_Unclone&action=edit&redlink=1 "BIM Unclone (page does not exist)"): Makes a cloned object independent from its original object

- ![](/images/BIM_Rewire.svg) [Rewire](/index.php?title=BIM_Rewire&action=edit&redlink=1 "BIM Rewire (page does not exist)"):

- ![](/images/BIM_Glue.svg) [Glue](/index.php?title=BIM_Glue&action=edit&redlink=1 "BIM Glue (page does not exist)"):

- ![](/images/BIM_Reextrude.svg) [Reextrude](/index.php?title=BIM_Reextrude&action=edit&redlink=1 "BIM Reextrude (page does not exist)"): Recreates an extrusion from a shape that has lost its parametric extrusion by selecting a base face

- Panel tools:

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Panel_Cut.svg) [Panel Cut](/Arch_Panel_Cut "Arch Panel Cut"): Creates a 2D cut view from a panel.

- ![](/images/Arch_Panel_Sheet.svg) [Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet"): Creates a 2D cut sheet including panel cuts or other 2D objects.

- ![](/images/Arch_Nest.svg) [Nest](/Arch_Nest "Arch Nest"): Allows to nest several flat objects inside a container shape.

- Structure tools:

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure "Arch Structure"): Creates a structural element from scratch or using a selected object as a base.

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

### Status bar

The status bar contains a few buttons that allow to easily change different states:

- ![](/images/BIM_TogglePanels.svg) [Toggle panels](/BIM_TogglePanels "BIM TogglePanels"): Shows or hides the [Report view](/Report_view "Report view") and the [Python console](/Python_console "Python console").

- ![](/images/BIM_ToggleViews.svg) Toggle Views: Shows or hides the [BIM Views](/BIM_Views "BIM Views") panel.

- ![](/images/BIM_ToggleBackground.svg) Cycle background: Cycles between vertical gradient, radial gradient and simple color background modes. This can be used to toggle between a dark background for modelling and a white background for 2D drawing.

- ![](/images/IFC.svg) Lock IFC: Switches between [locked and unlocked IFC mode](/NativeIFC#Locked_and_unlocked_modes "NativeIFC").

### Tree view context menu

TBD

### 3D view context menu

TBD

### Obsolete tools

- ![](/images/Arch_3Views.svg) [Arch 3Views](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench"). Not available in 1.0 and above.

- ![](/images/Arch_BuildingPart.svg) [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"): Creates a building part including selected objects. Not available in 1.0 and above. Use [Arch Floor](/Arch_Floor "Arch Floor") instead.

- ![](/images/Arch_CloneComponent.svg) [Arch CloneComponent](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects. Not available in 1.0 and above. Use [Draft Clone](/Draft_Clone "Draft Clone") instead.

- ![](/images/Arch_CutLine.svg) [Arch CutLine](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line. Not available in 1.0 and above. Use [Arch CutPlane](/Arch_CutPlane "Arch CutPlane") instead.

- ![](/images/Arch_MultiMaterial.svg) [Arch MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

- ![](/images/Arch_Project.svg) [Arch Project](/Arch_Project "Arch Project"): Creates a project including selected objects. Not available in 1.0 and above. Use [BIM Project](/BIM_Project "BIM Project") instead.

- ![](/images/Arch_SetMaterial.svg) [Arch SetMaterial](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

## Preferences

- ![](/images/Preferences-bim.svg) [Preferences](/BIM_Preferences "BIM Preferences"): General preferences for the BIM Workbench.
- [Fine tuning](/Fine-tuning#BIM_Workbench "Fine-tuning"): Extra parameters to fine-tune BIM behavior.

## Working with IFC

The BIM workbench works natively with [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC) files. Native means there is no more translation between the IFC contents and FreeCAD: The IFC contents are directly rendered in FreeCAD, and any change affects the IFC contents directly. Read more on [NativeIFC](/NativeIFC "NativeIFC").

If you don't plan to work with others, and have no need for IFC, you can still use the BIM workbench tools and simply ignore anything related to IFC. You can still export your model to IFC anytime.

The old [Arch IFC](/Arch_IFC "Arch IFC") importer is disabled by default in FreeCAD, but still available from Python.

There is also a specific [NativeIFC Tutorial](/NativeIFC_Tutorial "NativeIFC Tutorial") that explains the concepts further.

## File formats

- [IFC](/Arch_IFC "Arch IFC"): industry foundation classes
- [DAE](/Arch_DAE "Arch DAE"): Collada mesh format
- [OBJ](/Arch_OBJ "Arch OBJ"): OBJ mesh format (export only)
- [JSON](/Arch_JSON "Arch JSON"): JavaScript Object Notation format (export only)
- [3DS](/Arch_3DS "Arch 3DS"): 3DS format (import only)
- [SHP](/Arch_SHP "Arch SHP"): GIS Shapefiles (import only)

## API

The Arch module can be used in [Python](/Python "Python") scripts and [macros](/Macros "Macros") using the [Arch Python API](/Arch_API "Arch API") functions.

## Tutorial e apprendimento

- [Migrazione a FreeCAD da Revit](/index.php?title=Migrating_to_FreeCAD_from_Revit/it&action=edit&redlink=1 "Migrating to FreeCAD from Revit/it (page does not exist)")
- [Tutorial Architettura e BIM in questo wiki](/Tutorials/it#Architettura_e_BIM "Tutorials/it")
- ["BIM with FreeCAD" video series by Yorik](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU)
- ["FreeCAD tutorials" video series by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwkkxVOfVmR8ObpPN5QbL7ye)
- ["Quinta Monroy" video series by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwnAYyutuKhrPY51skaBhrVU)

## Example files

- FreeCAD features a BIM example file on the Start page.
- More example BIM files are available at <https://github.com/yorikvanhavre/FreeCAD-BIM-examples> . From within FreeCAD, use menu Help -> BIM examples.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Workbench/it&oldid=1538569>"
