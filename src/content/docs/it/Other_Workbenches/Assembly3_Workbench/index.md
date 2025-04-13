---
title: Assembly3 Ambiente
---

![](/images/Assembly3_workbench_icon.svg)

Icona dell'ambiente Assembly3

## Introduzione

[Assembly3](/Assembly3_Workbench "Assembly3 Workbench") è un [banco di lavoro esterno](/External_workbenches "External workbenches") che viene utilizzato per eseguire l'assemblaggio di diversi corpi contenuti in un unico file o in più documenti. Il banco da lavoro si basa su diverse modifiche delle funzioni principali effettuate per la versione di FreeCAD 0.19 (ad es. [App Link](/App_Link "App Link")), quindi il banco da lavoro Assembly3 non può essere utilizzato con le versioni precedenti.

Le caratteristiche principali del banco da lavoro Assembly3 sono

- **dynamic/interactive solver**. Ciò significa che è possibile spostare le parti con il mouse mentre il risolutore limita il movimento. Ciò consente, ad esempio, di collegare una ruota ad un asse e di ruotare la ruota in modo interattivo con il mouse.
- **links**. Ciò significa che è possibile utilizzare un solo pezzo, ad es. una vite più volte in un assemblaggio (in luoghi diversi) senza duplicare la geometria.
- **external links**. E' possibile avere un documento freecad che contiene solo un assemblaggio e non parti. Tutte le parti potrebbero essere in file singoli. I file potrebbero anche essere in una libreria o in qualsiasi altra parte del file system. L'unico requisito è che il file deve essere caricato al momento del collegamento. Dopo che il collegamento è stato fatto, il file deve essere aperto per fare gli aggiornamenti ai collegamenti che coinvolgono il file. Assembly3 risolve questo problema aprendo i file in background.
- **hierarchical assemblies**. Come nella vita reale, un assemblaggio meccanico può essere costituito da sottoinsiemi. Questi potrebbero consistere di nuovo in sottoinsiemi e così via.
- **assembly freeze**. Poiché la CPU può gestire solo un numero limitato di vincoli simultanei in tempo reale, il congelamento di un assieme permette di utilizzare i vincoli anche per assiemi di grandi dimensioni. Congelando gli assiemi finiti o i vincoli che non devono rimanere dinamici (ad es. parti saldate, bullonate o incollate), questi vengono esclusi dai calcoli di aggiornamento e considerati geometria fissa dal solutore Assembly3.

  : Si noti che altri approcci offrono soluzioni diverse a questo problema, per esempio ![](/images/Assembly4_workbench_icon.svg) [Assembly4 Workbench](/Assembly4_Workbench "Assembly4 Workbench").

[Torna all'inizio](#top)

### Toolbars

### Barre degli strumenti

A partire dal 2020 il banco da lavoro Assembly3 è dotato delle seguenti barre degli strumenti.

: La **barra degli strumenti principale** contiene strumenti che coprono le caratteristiche più utilizzate del banco di lavoro. I suggerimenti forniranno scorciatoie da tastiera.

    * aggiungere una cartella di assemblaggio
    * gruppo di oggetti
    * creare un collegamento. Questo è disponibile anche in un menu contestuale
    * Importare file STEP
    * Risolvere i vincoli
    * Risoluzione rapida dei vincoli
    * tool1 per spostare le parti in 3D, questo è specifico per Assembly3
    * tool2 per spostare parti in 3D, questo è il classico strumento disponibile in FreeCAD
    * Spostamento rapido. Questo vincola la parte selezionata nell'albero al cursore del mouse. Cambierà la posizione della parte quando si clicca.

      :   Spesso le parti aggiunte sono impilate l'una sull'altra nell'origine. Utilizzare questa funzione per afferrare una parte che non si vede.
    * Sblocco per le parti bloccate. Pulsante a levetta. Quando questo non è selezionato è possibile spostare le parti che hanno un vincolo "Bloccato".
    * Attivare la visibilità. Questo attiva/disattiva la visibilità della parte selezionata.

      :   Si noti che questo è diverso dall'uso dello spazio. L'uso dello spazio con elementi selezionati da un sottoinsieme nella vista 3D spesso non si comporta come previsto. Utilizzare questa funzione in questi casi (o la scorciatoia A-Space)
    * Tracciare il movimento delle parti (TBD)
    * Calcolo automatico. Di solito è abilitata.

      :   Può essere non selezionato quando si riparano vincoli o si fissano parti in cui il solutore dà un messaggio *non convergente* (ad esempio ruotando la parte di 180deg)
    * Smart-Recompute. Di solito è abilitato.
    * Element Auto Fixing. Caratteristica sperimentale in 0.19\_pre
    * Element Style. Questo ha due impostazioni
      + Auto visibilità dell' elemento.
      + Mostra il sistema di coordinate dell'elemento
    * Comandi workplane. Aggiunge un piano di lavoro, il posizionamento o l'origine. Una parte deve essere selezionata
      + Aggiungi un workplane
      + Aggiungi un XZ workplane
      + Aggiungi un YZ workplane
      + Aggiungi il posizionamento
      + Aggiungi Origine
    * Spostare l'elemento selezionato dell'albero verso l'alto
    * Spostare l'elemento selezionato dell'albero verso il basso

      :   Permette di ordinare parti, elementi o vincoli nell'albero. Gli elementi si muovono (dall'alto verso il basso e viceversa). Funziona solo per una singola selezione.
    * Moltiplicare il vincolo. Questo può essere selezionato se sono presenti più parti ed elementi adatti. Viene utilizzato ad esempio per assegnare più elementi di fissaggio dello stesso tipo in più fori con un unico vincolo.

: ![](/images/Assembly_New_Assembly.svg) ![](/images/Assembly_New_Group.svg) ![](/images/Assembly_New_Element.svg) ![](/images/Assembly_Import.svg)![](/images/AngleDown.svg)![](/images/Assembly3_workbench_icon.svg) ![](/images/Assembly_QuickSolve.svg) ![](/images/Assembly_Move.svg) ![](/images/Assembly_AxialMove.svg) ![](/images/Assembly_QuickMove.svg) ![](/images/Assembly_LockMover.svg) ![](/images/Assembly_TogglePartVisibility.svg) ![](/images/Assembly_Trace.svg) ![](/images/Assembly_AutoRecompute.svg) ![](/images/Assembly_SmartRecompute.svg) ![](/images/Assembly_AutoFixElement.svg) ![](/images/Assembly_AutoElementVis.svg)![](/images/AngleDown.svg)![](/images/Assembly_Add_Workplane.svg)![](/images/AngleDown.svg)![](/images/Assembly_TreeItemUp.svg) ![](/images/Assembly_TreeItemDown.svg) ![](/images/Assembly_ConstraintMultiply.svg)

: The **Main Toolbar** contains tools that cover the most often used features of the workbench. The tooltips will give the keyboard short cuts.

- ![](/images/Assembly_New_Assembly.svg) [Create assembly](/Assembly3_CreateAssembly "Assembly3 CreateAssembly"): Add an assembly folder

  - ![](/images/Assembly_New_Group.svg) [Group objects](/Assembly3_GroupObjects "Assembly3 GroupObjects"): Group objects
  - ![](/images/Assembly_New_Element.svg) [Create element](/Assembly3_CreateElement "Assembly3 CreateElement"): Create element.
  - Import from STEP. This has two settings
    - ![](/images/Assembly_Import.svg) [Import from STEP](/Assembly3_ImportFromSTEP "Assembly3 ImportFromSTEP"): Import STEP files
    - ![](/images/Assembly_ImportMulti.svg) [Import as multi-document](/Assembly3_ImportMultiDocument "Assembly3 ImportMultiDocument"): Import assemblies from STEP into separate documents
  - ![](/images/Assembly3_workbench_icon.svg) [Resolve constraints](/Assembly3_ResolveConstraints "Assembly3 ResolveConstraints"): Resolve constraints
  - ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve "Assembly3 QuickSolve"): Quick resolve constraints
  - ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart"): Move parts in 3D, this is specific to Assembly3
  - ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove"): Axial move parts in 3D, this is the classical tool available elsewhere in FreeCAD
  - ![](/images/Assembly_QuickMove.svg) [Quick move](/Assembly3_QuickMove "Assembly3 QuickMove"): This will attach the part selected in the tree to the mouse cursor. It will change the position of the part when you click.

    : Often added parts are stacked upon each other in the origin. Use this function to grab a part you can not see.

  - ![](/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover "Assembly3 LockMover"): Lock mover for fixed part. Toggle Button. When this is un-selected you can move the parts that have a "Locked" constraint.
  - ![](/images/Assembly_TogglePartVisibility.svg) [Toggle part visibility](/Assembly3_TogglePartVisibility "Assembly3 TogglePartVisibility"): This toggles the visiblity of the selected part on/off.

    : Note that this differs from using space. Using space with selected items from a sub-assembly in the 3D view often does not behave as expected. Use this function in those cases (or shortcut A-Space)

  - ![](/images/Assembly_Trace.svg) [Trace part move](/Assembly3_TracePartMove "Assembly3 TracePartMove"): Trace part move (TBD)
  - ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute "Assembly3 AutoRecompute"): Auto recompute. Usually enabled.

    : May be un-selected when repairing constraints or fixing parts where the solver gives a _"do not converge"_ message (e.g. by turning the part 180deg)

  - ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute "Assembly3 SmartRecompute"): Smart recompute. Usually enabled.
  - ![](/images/Assembly_AutoFixElement.svg) [Auto fix element](/Assembly3_AutoFixElement "Assembly3 AutoFixElement"): Element Auto Fixing. Experimental feature in 0.19_pre
  - Element Style. This has two settings
    - ![](/images/Assembly_AutoElementVis.svg) [Auto element visibility](/Assembly3_AutoElementVisibility "Assembly3 AutoElementVisibility"): Auto element visibility
    - ![](/images/Assembly_ShowElementCS.svg) [Show element coordinate system](/Assembly3_ShowElementCS "Assembly3 ShowElementCS"): Show element coordinate system
  - Workplane and origin. Adds a workplane, placement or origin. A part must be selected. This has five settings
    - ![](/images/Assembly_Add_Workplane.svg) [Add workplane](/Assembly3_AddWorkplane "Assembly3 AddWorkplane"): Add workplane
    - ![](/images/Assembly_Add_WorkplaneXZ.svg) [Add XZ workplane](/Assembly3_AddXZWorkplane "Assembly3 AddXZWorkplane"): Add XZ workplane
    - ![](/images/Assembly_Add_WorkplaneZY.svg) [Add ZY workplane](/Assembly3_AddZYWorkplane "Assembly3 AddZYWorkplane"): Add YZ workplane
    - ![](/images/Assembly_Add_Placement.svg) [Add placement](/Assembly3_AddPlacement "Assembly3 AddPlacement"): Add placement
    - ![](/images/Assembly_Add_Origin.svg) [Add Origin](/Assembly3_AddOrigin "Assembly3 AddOrigin"): Add Origin
  - ![](/images/Assembly_TreeItemUp.svg) [Move item up](/Assembly3_MoveItemUp "Assembly3 MoveItemUp"): Move selected tree item up
  - ![](/images/Assembly_TreeItemDown.svg) [Move item down](/Assembly3_MoveItemDown "Assembly3 MoveItemDown"): Move selected tree item down

    : Allows to sort Parts, Elements or Constraints in the tree. Element roll over (top to bottom and vice versa). Only works for a single selection.

  - ![](/images/Assembly_ConstraintMultiply.svg) [Multiply constraint](/Assembly3_MultiplyConstraint "Assembly3 MultiplyConstraint"): Multiply Constraint. This can be selected if multiple parts and suitable Elements are present.

    : It is used e.g. to assign multiple fasteners of the same type into multiple holes with one constraint.

: \* "Bloccare" il primissimo vincolo. In ogni assemblaggio una parte deve essere bloccata per agire come parte base. Bloccare non significa altro che vincolare questa parte in 6DOF alla sua posizione e orientamento attuali.

: ![](/images/Assembly_ConstraintLock.svg) ![](/images/Assembly_ConstraintAlignment.svg) ![](/images/Assembly_ConstraintCoincidence.svg) ![](/images/Assembly_ConstraintAttachment.svg)![](/images/AngleDown.svg)![](/images/Assembly_ConstraintAxial.svg) ![](/images/Assembly_ConstraintSameOrientation.svg) ![](/images/Assembly_ConstraintMultiParallel.svg) ![](/images/Assembly_ConstraintAngle.svg) ![](/images/Assembly_ConstraintPerpendicular.svg) ![](/images/Assembly_ConstraintPointCoincident.svg) ![](/images/Assembly_ConstraintPointInPlane.svg) ![](/images/Assembly_ConstraintPointOnLine.svg) ![](/images/Assembly_ConstraintPointOnCircle.svg) ![](/images/Assembly_ConstraintPointsDistance.svg) ![](/images/Assembly_ConstraintPointPlaneDistance.svg) ![](/images/Assembly_ConstraintPointLineDistance.svg) ![](/images/Assembly_ConstraintSymmetric.svg) ![](/images/Assembly_ConstraintMore.svg)

: Some tools are actually a menu for more tools.

- ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock"): Add a "Locked" constraint to fix one or more parts.

      :   You must select a geometry element of the part.
      :   If you fix a vertex or an edge the part is still free to rotate around the vertex or edge.
      :   Fixing a face will completely lock the part.

  - ![](/images/Assembly_ConstraintAlignment.svg) [Plane Alignment](/Assembly3_ConstraintAlignment "Assembly3 ConstraintAlignment"): Add a "Plane alignment" constraint to align planar faces of two or more parts.

    : The faces become coplanar or parallel with an optional distance.

  - ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence"): Add a "Plane coincidence" constraint to coincide planar faces of two or more parts.

    : The faces are coincided at their centers with an optional distance.

  - Attachment. This has two settings

    - ![](/images/Assembly_ConstraintAttachment.svg) [Attachment](/Assembly3_ConstraintAttachment "Assembly3 ConstraintAttachment"): Add an "Attachment" constraint to attach two parts with the selected geometry elements.

      : This constraint completely fixes the parts relative to each other.

    - ![](/images/Assembly_ConstraintAttachmentOffset.svg) [AttachmentOffset](/Assembly3_ConstraintAttachmentOffset "Assembly3 ConstraintAttachmentOffset"): Same as "Attachment" constraint, but maintaining the current relative placement of the involved parts by applying an element offset.

      : This constraint completely fixes the parts relative to each other.

  - ![](/images/Assembly_ConstraintAxial.svg) [Axial Alignment](/Assembly3_ConstraintAxial "Assembly3 ConstraintAxial"): Add an "Axial alignment" constraint to align edges/faces of two or more parts.

    : The constraint accepts

        :   linear edges, which become collinear,
        :   planar faces, which are aligned using their surface normal axis,
        :   and cylindrical face, which are aligned using the axial direction.

    : Different types of geometry elements can be mixed.

  - ![](/images/Assembly_ConstraintSameOrientation.svg) [Same orientation](/Assembly3_ConstraintSameOrientation "Assembly3 ConstraintSameOrientation"): Add a "Same orientation" constraint to align faces of two or more parts.

    : The planes are aligned to have the same orientation (i.e. rotation)

  - ![](/images/Assembly_ConstraintMultiParallel.svg) [Multi parallel](/Assembly3_ConstraintMultiParallel "Assembly3 ConstraintMultiParallel"): Add a "Multi parallel" constraint to make planar faces or linear edges of two or more parts parallel.
  - ![](/images/Assembly_ConstraintAngle.svg) [Angle](/Assembly3_ConstraintAngle "Assembly3 ConstraintAngle"): Add an "Angle" constraint to set the angle of planar faces or linear edges of two parts.
  - ![](/images/Assembly_ConstraintPerpendicular.svg) [Perpendicular](/Assembly3_ConstraintPerpendicular "Assembly3 ConstraintPerpendicular"): Add a "Perpendicular" constraint to make planar faces or linear edges of two parts perpendicular.
  - ![](/images/Assembly_ConstraintPointCoincident.svg) [Points coincident](/Assembly3_ConstraintPointsCoincident "Assembly3 ConstraintPointsCoincident"): Add a "Point coincident" constraint to coincide two points in 2D or 3D.
  - ![](/images/Assembly_ConstraintPointInPlane.svg) [Point on plane](/Assembly3_ConstraintPointInPlane "Assembly3 ConstraintPointInPlane"): Add a "Point on plane" to constrain one or more point onto a plane.
  - ![](/images/Assembly_ConstraintPointOnLine.svg) [Point on line](/Assembly3_ConstraintPointOnLine "Assembly3 ConstraintPointOnLine"): Add a "Point on line" to constrain a point onto a line in 2D or 3D.
  - ![](/images/Assembly_ConstraintPointOnCircle.svg) [Point on circle](/Assembly3_ConstraintPointOnCircle "Assembly3 ConstraintPointOnCircle"): Add a "Point on circle" to constrain one or more points on to a clyndrical surface defined by a cricle.

    : Note that you must select a point (any geometry element can define a point), and then select the circle (or clyndrical surface),
    : after which you can add more points to your selection if you want.

  - ![](/images/Assembly_ConstraintPointsDistance.svg) [Points distance](/Assembly3_ConstraintPointsDistance "Assembly3 ConstraintPointsDistance"): Add a "Points distance" to constrain the distance of two or more points.
  - ![](/images/Assembly_ConstraintPointPlaneDistance.svg) [Point plane distance](/Assembly3_ConstraintPointPlaneDistance "Assembly3 ConstraintPointPlaneDistance"): Add a "Point plane distance" to constrain the distance between one or more points and a plane.
  - ![](/images/Assembly_ConstraintPointLineDistance.svg) [Point line distance](/Assembly3_ConstraintPointLineDistance "Assembly3 ConstraintPointLineDistance"): Add a "Point line distance" to constrain the distance between a point and a linear edge in 2D or 3D.
  - ![](/images/Assembly_ConstraintSymmetric.svg) [Symmetric](/Assembly3_ConstraintSymmetric "Assembly3 ConstraintSymmetric"): Add a "Symmetric" constraint to make geometry elements of two parts symmetric about a plane.

    : The supported elements are linear edge and planar face.

  - ![](/images/Assembly_ConstraintMore.svg) [More](/Assembly3_ConstraintMore "Assembly3 ConstraintMore"): Toggle toolbars for more constraints

    : Not really a constraint but a toggle switch to show/hide the **Additional Constraints Toolbars**.

#### Additional Constraints Toolbars

: ![](/images/Assembly_ConstraintPointDistance.svg) ![](/images/Assembly_ConstraintEqualAngle.svg) ![](/images/Assembly_ConstraintPointsSymmetric.svg) ![](/images/Assembly_ConstraintGeneral.svg) ![](/images/Assembly_ConstraintGeneral.svg) ![](/images/Assembly_ConstraintSymmetricLine.svg) ![](/images/Assembly_ConstraintPointsHorizontal.svg) ![](/images/Assembly_ConstraintPointsVertical.svg) ![](/images/Assembly_ConstraintLineHorizontal.svg) ![](/images/Assembly_ConstraintLineVertical.svg) ![](/images/Assembly_ConstraintArcLineTangent.svg) (Assembly3 Constraints2)

: ![](/images/Assembly_ConstraintSketchPlane.svg) ![](/images/Assembly_ConstraintLineLength.svg) ![](/images/Assembly_ConstraintEqualLength.svg) ![](/images/Assembly_ConstraintLengthRatio.svg) ![](/images/Assembly_ConstraintLengthDifference.svg) ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) ![](/images/Assembly_ConstraintEqualLineArcLength.svg) ![](/images/Assembly_ConstraintMidPoint.svg) ![](/images/Assembly_ConstraintDiameter.svg) ![](/images/Assembly_ConstraintEqualRadius.svg) ![](/images/Assembly_ConstraintPointsProjectDistance.svg) ![](/images/Assembly_ConstraintEqualPointLineDistance.svg) ![](/images/Assembly_ConstraintColinear.svg) (Assembly3 Sketch Constraints)

: You can enable these by selecting the ![](/images/Assembly_ConstraintMore.svg) [More](/Assembly3_ConstraintMore "Assembly3 ConstraintMore") button on the Main Constraints toolbar.

- ![](/images/Assembly_ConstraintPointDistance.svg) [Point distance](/Assembly3_ConstraintPointDistance "Assembly3 ConstraintPointDistance"): Add a "Point distance" to constrain the distance of two points in 2D or 3D.

  - ![](/images/Assembly_ConstraintEqualAngle.svg) [Equal angle](/Assembly3_ConstraintEqualAngle "Assembly3 ConstraintEqualAngle"): Add an "Equal angle" to equate the angles between two lines or normals.
  - ![](/images/Assembly_ConstraintPointsSymmetric.svg) [Points symmetric](/Assembly3_ConstraintPointsSymmetric "Assembly3 ConstraintPointsSymmetric"): Add a "Points symmetric" constraint to make two points symmetric about a plane.
  - ![](/images/Assembly_ConstraintGeneral.svg) () [Symmetric horizontal](/Assembly3_ConstraintSymmetricHorizontal "Assembly3 ConstraintSymmetricHorizontal"): Symmetric horizontal
  - ![](/images/Assembly_ConstraintGeneral.svg) () [Symmetric vertical](/Assembly3_ConstraintSymmetricVertical "Assembly3 ConstraintSymmetricVertical"): Symmetric vertical
  - ![](/images/Assembly_ConstraintSymmetricLine.svg) [Symmetric line](/Assembly3_ConstraintSymmetricLine "Assembly3 ConstraintSymmetricLine"): Add a "Symmetric line" constraint to make two points symmetric about a line.
  - ![](/images/Assembly_ConstraintPointsHorizontal.svg) [Points horizontal](/Assembly3_ConstraintPointsHorizontal "Assembly3 ConstraintPointsHorizontal"): Add a "Points horizontal" constraint to make two points horizontal with each other when projected onto a plane.
  - ![](/images/Assembly_ConstraintPointsVertical.svg) [Points vertical](/Assembly3_ConstraintPointsVertical "Assembly3 ConstraintPointsVertical"): Add a "Points vertical" constraint to make two points vertical with each other when projected onto a plane.
  - ![](/images/Assembly_ConstraintLineHorizontal.svg) [Line horizontal](/Assembly3_ConstraintLineHorizontal "Assembly3 ConstraintLineHorizontal"):Add a "Line horizontal" constraint to make a line segment horizontal when projected onto a plane.
  - ![](/images/Assembly_ConstraintLineVertical.svg) [Line vertical](/Assembly3_ConstraintLineVertical "Assembly3 ConstraintLineVertical"): Add a "Line vertical" constraint to make a line segment vertical when projected onto a plane.
  - ![](/images/Assembly_ConstraintArcLineTangent.svg) [Arc line tangent](/Assembly3_ConstraintArcLineTangent "Assembly3 ConstraintArcLineTangent"): Add an "Arc line tangent" constraint to make a line tangent to an arc at the start or end point of the arc.

- ![](/images/Assembly_ConstraintSketchPlane.svg) [Sketch plane](/Assembly3_ConstraintSketchPlane "Assembly3 ConstraintSketchPlane"): Add a "Sketch plane" to define the work plane of any draft element inside or following this constraint.

      :   Add an empty "Sketch plane" to undefine the previous work plane.

  - ![](/images/Assembly_ConstraintLineLength.svg) [Line length](/Assembly3_ConstraintLineLength "Assembly3 ConstraintLineLength"): Add a "Line length" constrain the length of a non-subdivided Draft.Wire.
  - ![](/images/Assembly_ConstraintEqualLength.svg) [Equal length](/Assembly3_ConstraintEqualLength "Assembly3 ConstraintEqualLength"): Add an "Equal length" constraint to make two lines of the same length.
  - ![](/images/Assembly_ConstraintLengthRatio.svg) [Length ratio](/Assembly3_ConstraintLengthRatio "Assembly3 ConstraintLengthRatio"): Add a "Length ratio" to constrain the length ratio of two lines.
  - ![](/images/Assembly_ConstraintLengthDifference.svg) [Length difference](/Assembly3_ConstraintLengthDifference "Assembly3 ConstraintLengthDifference"): Add a "Length difference" to constrain the length difference of two lines.
  - ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) [Length Equal Point Line Distance](/Assembly3_ConstraintLengthEqualPointLineDistance "Assembly3 ConstraintLengthEqualPointLineDistance"): Add a "Length Equal Point Line Distance" to constrain the distance

    : between a point and a line to be the same as the length of a another line.

  - ![](/images/Assembly_ConstraintGeneral.svg) ( ![](/images/Assembly_ConstraintEqualLineArcLength.svg) )[Equal Line Arc Length](/Assembly3_ConstraintEqualLineArcLength "Assembly3 ConstraintEqualLineArcLength"): Add an "Equal Line Arc Length" constraint to make a line of the same length as an arc.
  - ![](/images/Assembly_ConstraintMidPoint.svg) [Mid point](/Assembly3_ConstraintMidPoint "Assembly3 ConstraintMidPoint"): Add a "Mid point" to constrain a point to the middle point of a line.
  - ![](/images/Assembly_ConstraintDiameter.svg) [Diameter](/Assembly3_ConstraintDiameter "Assembly3 ConstraintDiameter"): Add a "Diameter" to constrain the diameter of a circle/arc.
  - ![](/images/Assembly_ConstraintEqualRadius.svg) [Equal radius](/Assembly3_ConstraintEqualRadius "Assembly3 ConstraintEqualRadius"): Add an "Equal radius" constraint to make two circles/arcs of the same radius.
  - ![](/images/Assembly_ConstraintPointsProjectDistance.svg) [Points project distance](/Assembly3_ConstraintPointsProjectDistance "Assembly3 ConstraintPointsProjectDistance"): Add a "Points project distance" to constrain the distance of two points projected on a line.
  - ![](/images/Assembly_ConstraintEqualPointLineDistance.svg) [Equal point line distance](/Assembly3_ConstraintEqualPointLineDistance "Assembly3 ConstraintEqualPointLineDistance"): Add an "Equal point line distance" to constrain the distance

    : between a point and a line to be the same as the distance between another point and line.

  - ![](/images/Assembly_ConstraintColinear.svg) [Colinear](/Assembly3_ConstraintColinear "Assembly3 ConstraintColinear"): Add a "Colinear" constraint to make two lines collinear.

: Le **Barre dei vincoli** saranno l'interfaccia principale utilizzata per l'assemblaggio delle parti. Sono grigie di default, ma vengono attivate una volta selezionata almeno una faccia, una linea o un punto di una parte. Generalmente si selezionano gli elementi che devono essere uniti e poi si seleziona il tipo di vincolo. Le diverse cornici colorate contrassegnano le diverse caratteristiche dei vincoli: se è possibile aggiungere più di 2 elementi in 2D/3D. Una descrizione dettagliata si trova nel wiki di Gibhub.

#### Navigation Toolbar

: ![](/images/Assembly3_ToolbarNavigation.jpg)
: _Barra degli strumenti di navigazione_
: Queste funzioni sono utili quando si lavora con un assemblaggio con una gerarchia di file esterni collegati

    * Selezionare l'oggetto pezzo corrispondente nel gruppo di relazioni
    * Selezionare l'oggetto collegato
    * Selezionare l'oggetto link più profondo

: Theses functions are useful when working with an assembly with a hierarchy of linked external files

- ![](/images/Assembly_GotoRelation.svg) [Go to relation](/Assembly3_GoToRelation "Assembly3 GoToRelation"): Reveals the Relations group (hidden by default) and selects a relation object.
  - ![](/images/Std_LinkSelectLinked.svg) [Select linked object](/Std_LinkSelectLinked "Std LinkSelectLinked"): Selects the linked object and switches to its document. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")
  - ![](/images/Std_LinkSelectLinkedFinal.svg) [Select linked final](/Std_LinkSelectLinkedFinal "Std LinkSelectLinkedFinal"): Selects the deepest linked object and switches to its document. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

: ![](/images/Assembly3_ToolbarMeasurement.jpg)
: _Barra degli strumenti di misura_
: La **Barra degli strumenti di misura** aggiunge funzioni per misurare le distanze tra due punti, un punto e una retta o un punto e una faccia. Lo strumento _Misura angolo_ traccia l'angolo tra due facce o rette. Non esiste una funzione per misurare un raggio o un diametro.
: Gli strumenti di misura sopravvivono ai cambiamenti del pezzo, ad esempio la distanza tra i bordi di un cubo quando il cubo viene ridimensionato. Come i vincoli, i calcoli sono fatti in tempo reale e aggiornati ad ogni cambiamento. Dietro le quinte, la funzione è molto simile alla funzione [vincoli](#Constraints). La distanza o l'angolo viene calcolata tra [elementi](#Elements) come per i[vincoli](#Constraints). Il visualizzatore nell'albero funziona allo stesso modo.

: ![](/images/Assembly_MeasurePointDistance.svg) ![](/images/Assembly_MeasurePointLineDistance.svg) ![](/images/Assembly_MeasurePointPlaneDistance.svg) ![](/images/Assembly_MeasureAngle.svg)

: The **Measurement toolbar** adds functions to measure the distance or the angle between two objects

- ![](/images/Assembly_MeasurePointDistance.svg) [Measure points](/Assembly3_MeasurePoints "Assembly3 MeasurePoints"): Add a "Measure points" to measure the distance of two points in 2D or 3D.
  - ![](/images/Assembly_MeasurePointLineDistance.svg) [Measure point to line](/Assembly3_MeasurePointLine "Assembly3 MeasurePointLine"): Add a "Measure point to line" to measure the distance between a point and a linear edge in 2D or 3D.
  - ![](/images/Assembly_MeasurePointPlaneDistance.svg) [Measure point to plane](/Assembly3_MeasurePointPlane "Assembly3 MeasurePointPlane"): Add a "Measure point to plane" to measure the distance between a point and a plane.
  - ![](/images/Assembly_MeasureAngle.svg) [Measure angle](/Assembly3_MeasureAngle "Assembly3 MeasureAngle"): Add a "Measure angle" to measure the angle of planar faces or linear edges of two parts.

: There is no function to measure a radius or diameter.
: The measurement tools survive part changes, e.g. the distance between edges of a cube when the cube is re-sized.
: As the constraints the calculations are done in real time and updated upon any change. Behind the scenes, the function is very similar to the [constraints](#Constraints). The distance or angle is calculated between [Elements](#Elements) in the same way as for [constraints](#Constraints). The display in the tree works in the same way.

Come al solito è possibile modificare le barre degli strumenti e aggiungere o rimuovere singoli strumenti. Accertarsi di controllare nel menu Assembly3 le funzioni che potrebbero non essere presenti nelle barre degli strumenti.

[Torna all'inizio](#top)

### Constraints

### Vincoli

Il progettista utilizza i vincoli per ottenere il risultato desiderato nella relazione tra due parti. L'arte è la selezione dei giusti vincoli più adatti ad affrontare ogni problema. Ogni DOF eliminato dovrebbe in teoria essere eliminato solo una volta tra due oggetti, ma in pratica con molti strumenti CAD i vincoli selezionati causano combinazioni di vincoli eccessivi, spesso compensati da algoritmi complessi, a volte no. Assembly3 utilizza algoritmi per rilevare e compensare gli eccessi di vincoli, ma chiaramente non sono ancora molto maturi. Quindi in pratica per i vincoli di Assembly3 si evitano problemi essendo consapevoli di quanti gradi di libertà (DOF) sono stati utilizzati e quali devono ancora essere bloccati dai vincoli. Nessuna parte dovrebbe avere una connessione di vincoli utilizzati maggiore di 6DOF.

: Nota: Se il risolutore incontra una combinazione che non può essere risolta, darà un errore. È molto difficile per il risolutore scoprire cosa ha causato il problema, quindi tipicamente da questo errore dato non sarà chiaro _dove_ è il problema. In assemblaggi più grandi questo può portare a ricerche complesse del problema. Purtroppo non c'è un modo semplice per evitarlo. Tuttavia, aiuta essere pienamente consapevoli di come funziona il sistema (.e.g. vedi [Elementi](#Elements) qui sotto), utilizzare nomi chiari per tutti i componenti coinvolti e aggiungere vincoli aggiuntivi solo quando il risolutore risolve l'assemblaggio corrente. Molto utile per rintracciare un problema è la funzione "ContexMenu/Deactivate" di ogni Vincolo.

Assembly3 I vincoli definiscono le restrizioni nella posizione o nell'orientamento tra due [Elementi](#Elements). Alcuni vincoli funzionano anche con più di due [Elementi](#Elements). Un [Elemento](#Elements) può essere una faccia, una linea o un bordo o un punto di una parte. Generalmente i vincoli sono definiti selezionando gli [Elementi](#Elements) e poi selezionare il vincolo dai Vincoli [toolbar](#Toolbars).

- Fissa 6 DOF, lascia 0 DOF:
  - **Lock**: Il blocco del vincolo fissa tutti i DOF per una faccia. Dovrebbe essere usato per una parte di base in ogni assemblaggio. Si può anche attivare la funzione "MoveLock" (nella barra degli strumenti) in modo che il pezzo non possa essere spostato accidentalmente. Normalmente non importa quale faccia/linea/punto si usa per fissare un pezzo. Si noti inoltre che il blocco è valido solo per l'assemblaggio diretto, cioè nel caso di un sottoinsieme l'assemblaggio principale richiederebbe comunque una parte bloccata.
  - **Attachment**: Rende i sistemi di coordinate di entrambi gli elementi uguali per tutti gli assi. Questa è la funzione più comoda per il calcolo e dovrebbe essere usata dove possibile. Si noti che si potrebbero usare le proprietà degli elementi per compensare gli offset e gli angoli se i due [elementi](#Elements) non sono perfettamente allineati.
- Fissa 5 DOF, lascia 1 DOF:
  - **Plane Coincident**: fissa Tx,Ty,Tz, Rx,Ry. Solo Rz è libero. Rimane la rotazione intorno al normale che passa attraverso il _centro del piano_.
- Fissa 4 DOF, lascia 2 DOF:
  - **Axial Alignment**: fissa Tx,Ty, Rx,Ry. Solo Tz, Rz sono liberi. Rimangono la rotazione intorno all'asse della figura e la traslazione lungo questo stesso asse. Due vincoli _PointOnLine_ (se i due punti sono diversi) danno lo stesso risultato. Come anche i vincoli'‘Colinear'’.
  - **PointOnLine**: In questo modo si elimina la traslazione e la rotazione lungo le normali verso la linea di riferimento. Sono consentite solo la traslazione e la rotazione lungo l'asse della linea.
- Fissa 3 DOF, lascia 3 DOF:
  - **Same Orientation**: fissa Rx,Rz,Rz. Tutte le T rimangono libere.
  - **Points Coincident**: fissa Tx,Ty,Tz. Tutte le R rimangono libere.
  - **PointOnPoint** Il vincolo elimina le 3 traslazioni.
  - **Plane Alignment**: fissa Tz, Rx,Ry. In movimento il piano e Rz. Questo elimina la traslazione lungo il piano normale verso il piano di riferimento e le due rotazioni intorno agli assi di questo piano.
- Fissa 2 DOF, lascia 4 DOF:
  - **Multi Parallel**: fissa Rx,Ry. rimangono tutte le T e le Rz. Questo elimina le due rotazioni intorno agli assi del piano di riferimento.
- Fissa 1 DOF, lascia 5 DOF:

  - **Points in Plane**: Fissa Tz. Questo elimina la traslazione lungo il piano normale verso il piano di riferimento.
  - **Points Distance**: fissa la distanza tra le origini dell'elemento.

    : Questo ti dà più libertà rispetto a _Points in Plane_

Altro

- **Points on Circle**: fissa Tz e parzialmente Tx,Ty. Congela la traslazione del punto (o più punti) su un cerchio o su un'area del disco. Devi scegliere il cerchio per secondo. Questo lascia tutte le rotazioni libere e dà una traslazione limitata nel piano di riferimento del cerchio.

_: Nota: Nella seguente lista Tx,Ty,Tz e Rx,Ry,Rz sono usati per descrivere le traslazioni e le rotazioni dei sistemi di coordinate di riferimento dell'elemento interessato. Questo non è sempre esatto o completamente definito, ad esempio quando è coinvolta una linea non è definito se corre in X, Y o qualsiasi altro angolo in mezzo. Il sistema è usato per un breve e facile comparazione a favore di una definizione corretta ma più complessa. Quindi Z è generalmente la direzione normale di tutte le facce coinvolte. Sentitevi liberi di modificarla con un approccio migliore con una migliore leggibilità"._

[Torna all'inizio](#top)

### Elements

Elements è un termine specifico usato nel banco di lavoro Assembly3 ed è importante capire Elements per capire come Assembly3 deve essere usato.

È utile pensare a un elemento come parola generale per un "elemento selezionabile" di una parte, cioè una faccia, un bordo, un cerchio o un angolo o un altro punto. Gli elementi che si selezionano per vincolarli, sono quegli elementi. Nell'albero una cartella Assembly ha tre sottocartelle. Accanto a 'Parts' e 'Constraints' c'è una cartella chiamata 'Elements', che è vuota finché non vengono aggiunti vincoli. Quando si aggiunge un vincolo il vincolo stesso ottiene due (o più) linee, questi sono gli 'Elementi' selezionati. Anche questi vengono aggiunti nella cartella 'Elements' che è solo un elenco di tutti gli elementi utilizzati nell'assieme. E' una buona idea cambiare i loro nomi (con il tasto F2), specialmente negli assemblaggi più grandi.

Vediamo un esempio

: Creare un nuovo file e aggiungere dal banco di lavoro Part un cubo e un cilindro.Impileremo il cilindro sul cubo. Prima fissiamo la parte base, nel nostro caso il cubo. Selezioniamo la faccia inferiore del cubo e selezioniamo i vincoli "Bloccato" (prima icona nei Vincoli [barra degli strumenti](#Toolbars)). Selezionare la faccia superiore del cilindro e la faccia superiore del cubo. Quindi selezionare il vincolo "Plane Coincident". Ora il cilindro viene spostato nel cubo e nell'albero è stata aggiunta una nuova foglia con due nodi figli sotto "Constraints". Inoltre gli stessi due nodi figli sono stati aggiunti sotto "Elements". Se il cilindro si trova all'interno del cubo invece che sopra il cubo, correggiamo prima questo: sotto 'Constraints' selezionate il nodo figlio che mostra la faccia del cilindro e con un clic destro del mouse nel menu contestuale selezionate 'Flip Part'. Ora il cilindro è impilato sul cubo.

La chiave per capire è che il vincolo opera sui collegamenti agli elementi nella lista della cartella ad albero 'Elements'. Questo permette di mantenere intatta la struttura del vincolo mentre si cambiano le parti. Questo è molto difficile da comprendere senza un esempio.

Torniamo all'esempio precedente

: Nota: assicurarsi di aver aggiunto il vincolo "Lock" al cubo o questo sembrerà disorientante
: Nella finestra CAD selezionare un'altra faccia del cubo. Ora lavoriamo solo nella vista ad albero. Andate con il mouse nell'albero dove il cubo deve apparire selezionato. Trascinare il cubo nella cartella "Elements". Trascinatelo sul nome 'Elements', in nessun altro punto della cartella vedremo in seguito il motivo. Dovreste vedere che un altro Elemento viene aggiunto alla lista degli 'Elementi'. Ora selezionate nella cartella 'Constraints' il nodo figlio della faccia del cubo nel vincolo "Plane Coincident" e cancellatelo. Il Vincolo mostrerà un punto esclamativo poiché manca un elemento. Si noti che cancellando l'elemento in Constraint non lo abbiamo cancellato dalla lista. Questo perché nel vincolo c'era solo un link all'Elemento. Ora prendiamo l'Elemento appena aggiunto nella lista 'Elements' e lo trasciniamo sul vincolo "Plane Coincident". Ora il cilidro si sposta sull'altra faccia che abbiamo selezionato. Potremmo aver bisogno di selezionare di nuovo 'Flip Part nel menu contestuale' se il cilindro è di nuovo all'interno del cubo.

L'esempio ha mostrato che senza rimuovere il vincolo possiamo cambiare gli Elementi che vengono utilizzati per il vincolo. Allo stesso modo possiamo spostare il cilindro in una parte totalmente diversa. Dopo aver giocato un po' di più con questo esempio, si noteranno alcune cose aggiuntive come

- Se si rinomina un elemento nella lista, il nome verrà cambiato in tutti i Vincoli.
- è possibile utilizzare un elemento della lista in diversi vincoli.
- È possibile utilizzare la finestra delle proprietà di un elemento per aggiungere **Offset**. Nell'esempio questo potrebbe spostare il cilindro sulla faccia del cubo.
- è possibile utilizzare il pulsante "Show Element Coordinate System" nella barra degli strumenti principale per vedere le funzioni 'Menu contestuale/Flip Part' e 'Menu contestuale/Flip Element'. Assicuratevi di guardare cosa succede nella finestra delle proprietà.
- è possibile aggiungere un vincolo in un ordine completamente diverso: Per prima cosa aggiungere alcuni elementi alla 'Lista degli elementi' (la denominazione è utile, es. "Cube Top Face" o "Cube Front Face"), poi aggiungere un vincolo senza selezionare nulla - sarà un vincolo vuoto. Quindi trascinare gli Elementi dalla lista 'Elements'. Il risultato è lo stesso di quello che abbiamo fatto nel primo esempio. Dopo aver fatto questo esercizio, la natura di come funzionano i vincoli con gli Elementi dovrebbe essere chiara.
- potete cambiare un vincolo esistente tra elementi esistenti semplicemente selezionando un elemento diverso nella Finestra delle proprietà/ConstraintType.

[Torna all'inizio](#top)

## Compatibilità

Assembly3 è stato ispirato da [Assembly2](/Assembly2_Workbench "Assembly2 Workbench"), ma non è con questo compatibile . Se avete modelli precedenti realizzati in Assembly2, dovreste rimanere con FreeCAD 0.16 e usare Assembly2.

I nuovi modelli sviluppati con Assembly3 devono essere aperti e modificati solo con questo banco di lavoro.

Anche se possono avere strumenti simili, Assembly3 non è compatibile con [A2plus](/A2plus_Workbench "A2plus Workbench") né con [Assembly4](/Assembly4_Workbench "Assembly4 Workbench"). I modelli creati con questi workbenches devono essere aperti solo con il rispettivo workbench.

[Torna all'inizio](#top)

## Test

Il [Assembly3 Workbench](/Assembly3_Workbench "Assembly3 Workbench") è in fase di sviluppo e non è ancora disponibile (aprile 2020) tramite lo [Addon Manager](/Std_AddonMgr "Std AddonMgr"), ma si prevede che ciò avverrà prima o poi.

#### Alternate installations

Si può provare in due modi:

- Uno speciale fork di FreeCAD realizzata da realthunder; vedi [FreeCAD_assembly3 releases](https://github.com/realthunder/FreeCAD_assembly3/releases). Questo fork si basa su un particolare commit del ramo master di FreeCAD, ma ha anche caratteristiche aggiuntive attualmente non presenti nel ramo master. Dato che questo fork è basato su un particolare snapshot di sviluppo, non ha le ultime caratteristiche unite quotidianamente al ramo master.
- Lo sviluppo [AppImage](/AppImage "AppImage"); questo si basa sul ramo master corrente, e include le dipendenze necessarie per lavorare con Assembly3 come il solutore SolveSpace.

Dato che l'AppImage funziona solo per Linux, per gli utenti Windows al momento l'unica opzione per testare Assembly3 è la prima opzione (realthunder's fork).

[Torna all'inizio](#top)

## Come fare

### Get Started

#### Cominciamo

Ci sono molti modi per creare un assemblaggio con Assembly3. Ecco il più semplice che si possa fare.

: ![](/images/Assembly3_Example-GettingStarted.jpg)
: _Risultato finale del primo esempio. Nell'immagine è selezionato il banco di lavoro Assembly3 Worksbench, quindi sono visibili le sue barre degli strumenti multiple. Si noti che la "TabBar" verticale a sinistra della vista ad albero è un AddOn Workbench che non è contenuto nel FreeCAD standard (ma può essere installato con l'Addon-Manager)'_.

- Creare un nuovo file FreeCAD
- Selezionare il Workbench di montaggio. Selezionare _CreateAssembly_ (prima icona)
- Selezionare Part Workbench e aggiungere un cilindro e un cubo
- Salva il file con il nome del file che preferisci. Chiudere e aprire il file.

  : La vista ad albero dovrebbe avere questo aspetto

```
Assembly
   Constraints
   Elements
   Parts
 Cilindro
 Cubo

```

- Ora disegnare e rilasciare con il mouse sia _Cilindro_ che _Cubo_ nella cartella _Parts_. Verranno spostati in quella cartella.

  : Questo è il modo più veloce. Si noti che il modo _migliore'_ è quello di aprire il menu contestuale su entrambi e selezionare _ContetxMenu/LinkActions/MakeLink_. Questo aggiunge due file di link. Poi trascina i file di collegamento nella cartella _Parts_. Per casi semplici come questo non ha molta importanza.

- Cliccare entrambe le superfici superiori di Cylinder e Cube (tenere premuto Ctrl)
- Selezionare assembly Workbench. Selezionare "PlaceCoincident" dalla [Barra dei vincoli principali](#Toolbar).

  : Ora le parti dovrebbero essere unite l'una all'altra e il vostro albero dovrebbe avere questo aspetto

```
Assembly
   Constraints
      PlaneConicident
        _Element
        _Element001
   Elements
        _Element
        _Element001
   Parts
      Cilindro
      Cubo

```

- Cliccare con il tasto destro del mouse su uno dei due "\_Element" e selezionare "Flip Part".

  : Ora il Cilindro dovrebbe essere sopra la scatola. Se il tutto è sottosopra, tornare indietro e selezionare "Flip Part" sull'altro elemento.

Abbiamo omesso un passo importante che dovrebbe essere fatto negli assemblaggi più grandi: bloccare una parte base. Ciò significa definire una parte che non deve essere spostata da vincoli. Nel vostro caso per questo usiamo il cubo:

- Selezionare la faccia inferiore del cubo. Solo la faccia inferiore, non l'intero cubo.
- selezionare il vincolo "Lock" dalla barra degli strumenti dei vincoli

  : L'albero di montaggio finito dovrebbe apparire come nell'immagine qui sopra

Fatto.  
Se volete nell'albero potete spostare verso l'alto il vincolo "Bloccato". Utilizzare il pulsante "MoveItemUp" nella barra [Barra degli strumenti principale](#Toolbar).

The tree view should look like this (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-01.png) ![](/images/Assembly3_Example-Tree-02.png)

- Now _Drag&Drop_ with the mouse both **Cylinder** and **Cube** onto the **Parts** folder. They are moved into that folder.

  : That is the quickest way and suitable for simple cases like this. A better way is via the use of link objects:
  : Select **Cube** and **Cylinder** and then ![](/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") either from the **Context menu** (-> LinkActions -> MakeLink) or the **Structure** panel.
  : This adds two link objects. Then _Drag&Drop_ the link objects to the **Parts** folder.

- Click both top surfaces of **Cylinder** and **Cube** (keep Ctrl pressed (Cmd on a Mac))
- Change to ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") workbench
- Select ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") from the [Main constraints toolbar](#Main_Constraints_Toolbar).

Now the parts should be joined into each other and your tree should look like this (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-03.png) ![](/images/Assembly3_Example-Tree-04.png)

- Right click **\_Element** (either of the two) and select **Flip Part**.

Now the **Cylinder** should be on top of the **Cube**. If the whole thing is upside down, go back and select **Flip Part** on the other element.

: We omitted one important step that should be done in larger assemblies: Locking a base part.
: That means to define one part that should not be moved by constraints. In this example we use the **Cube** for that:

    * Select the lower face of the **Cube**. Only the lower face, not the whole **Cube**
    * select the ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") constraint from the [Main constraints toolbar](#Main_Constraints_Toolbar)

Done.

The finished assembly tree should look like (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-05.png) ![](/images/Assembly3_Example-Tree-06.png):

If you like you can move the **Locked** constraint upwards in the tree. Use the ![](/images/Assembly_TreeItemUp.svg) [Move item up](/Assembly3_MoveItemUp "Assembly3 MoveItemUp") button on the [Main toolbar](#Main_Toolbar) for that.

Nota: tutti i nuovi file esterni devono essere salvati, chiusi e riaperti almeno una volta, in modo che Assembly3 possa trovarlo. Senza fare questo FreeCAD non può dare una gestione dei file al Workbench Assembly3 e non può trovare il nuovo pezzo. Quando tutte le parti sono nello stesso file, è necessario salvare e riaprire il file.

[Torna all'inizio](#top)

### Add an Offset

#### Aggiungete un Offset

Il montaggio3 non offre l'Offset con i vincoli nel modo in cui lo fanno [A2plus Workbench](/A2plus_Workbench "A2plus Workbench") o altri strumenti CAD. Offre invece un sistema più generale e flessibile per aggiungere traslazioni offset ma anche angoli.

- Aggiungere l'offset nelle proprietà [Vincolo](#Constraint) di un [Elemento](#Elements).

  : è possibile scegliere quale dei due utilizzare.

Esempio:

- Aggiungere 2 cubi ad un gruppo e selezionare le loro facce laterali.
- selezionare "PlaneCoincident". I cubi saranno attaccati l'uno all'interno dell'altro.
- selezionare un elemento e _Menu contestuale/Flip Part_. I cubi saranno attaccati uno accanto all'altro.
- selezionare una proprietà Element Offset/Position/Zz e impostare a 5mm. I cubi saranno distanziati di 5mm.

Test con altri assi o con i campi angolo/asse. Verificare anche che si ottenga lo stesso risultato quando si utilizza l'altro Elemento.
Questo è lo stesso approccio per tutti gli altri vincoli

[Torna all'inizio](#top)

### Solve a Solver Failure

#### Risolvi un errore del risolutore

Questo accade spesso quando le parti sono eccessivamente vincolate, cioè più di 6 DOF sono bloccati.

Il modo più semplice per trovare il problema è cliccare sui vincoli rilevanti nell'albero e selezionare _Menu contestuale/Disable_ e ricalcolare. È utile conoscere gli ultimi vincoli aggiunti prima che il risolutore fallisca e semplicemente annullarli.

Nota: poiché l'Assemblaggio3 cerca di compensare le parti eccessivamente vincolate dietro le quinte, a volte il problema è innescato solo da un nuovo vincolo, ma la causa alla radice è da qualche altra parte. Prima di cancellare tutto e ricominciare da capo, ricordate che potete riutilizzare gli Elementi. Se li avete nominati potete identificare gli elementi richiesti e ricostruire i vincoli senza usare affatto la vista 3D. Vedi [Elementi](#Elements) sopra

[Torna all'inizio](#top)

### Replace a part or rename a filename

### Sostituire una parte o rinominare un nome di file

Quando una parte viene rimossa o quando un nome di file cambia, l'assemblaggio si rompe, non può più essere risolto e il risolutore emetterà il messaggio "Vincoli incoerenti". Il risolutore contrassegnerà nell'albero Elementi e Vincoli non validi con un punto interrogativo.

Un modo per risolvere questo problema è quello di eliminare tutti i vincoli e gli elementi non validi, importare la nuova parte e rifare tutto. Ma c'è un modo migliore:

- Rinominare un file

  1. Utilizzare un file manager e copiare il file che si desidera rinominare. Poi date il nuovo nome alla copia.
  2. Aprire la copia in FreeCAD. Anche l'assemblaggio e il vecchio file devono essere aperti
  3. Selezionare il vecchio oggetto nell'albero e cliccare per cambiare il proprio "Oggetto collegato" (contiene il vecchio nome del file)
  4. Si aprirà una lista in una finestra di dialogo contenente tutte le parti aperte. Essa mostra i nomi dei file e gli oggetti di ogni parte. La vecchia parte e l'oggetto sono selezionati. Individuare la parte rinominata nell'albero e selezionare lo stesso oggetto nella nuova parte. Poi confermate la selezione.
  5. Cancellare la parte vecchia dell'albero. Ora anche il file può essere cancellato.
  6. I vincoli e gli elementi della vecchia parte non sono più validi. Aprire la lista dei vincoli o degli elementi nell'albero. Poi in sequenza
     - selezionare ogni superficie dell'elemento sulla nuova parte. Un oggetto nell'albero sarà evidenziato.
     - Prendete quell'elemento e trascinatelo sopra il vecchio elemento (sia nell'elenco degli elementi che in uno dei vincoli in cui è stato usato). Quell'elemento dovrebbe diventare valido.
     - Ripetere la procedura per gli altri elementi. Spesso un singolo elemento è sufficiente per permettere all'Assembly3 di identificare automaticamente gli elementi rimanenti del pezzo.
     - Se per errore un elemento è stato assegnato alla superficie sbagliata, è sufficiente ripetere l'operazione con la superficie corretta.
  7. Se si desidera, modificare il nome dell'oggetto in FreeCAD

- Sostituire una parte con un'altra

  : _ovviamente è necessario che sia abbastanza simile alla parte originale tanto che i vincoli originali hanno ancora un senso_

  1. Cancellare la vecchia parte dall'albero. Anche il file può essere cancellato.
  2. I vincoli e gli elementi della vecchia parte non sono più validi. Aprire la lista dei vincoli o degli elementi nell'albero.
     - Selezionare una superficie sulla nuova parte. Un elemento nell'albero sarà in alto.
     - Prendete quell'elemento e trascinatelo sopra il vecchio elemento (sia nell'elenco degli elementi che in uno dei vincoli in cui è stato usato). Quell'elemento dovrebbe diventare valido.
     - ripetere la procedura per i restanti elementi.
     - Se un elemento è stato assegnato per caso alla superficie sbagliata, basta ripetere con la superficie corretta.
  3. Se si vuole, modificare il nome dell'oggetto in FreeCAD.

_Nota_

- Non sono così complicate come qui può sembrare . Dopo 2-3 volte dovrebbero diventare naturali ed essere molto facili da fare.
- Di solito non solo è più veloce di cancellare e rifare i vincoli, ma è anche più sicuro perché un elemento potrebbe essere usato in un assemblaggio parente. Cancellare l'originale distruggerebbe quel collegamento, ri-assegnarlo lo manterrebbe.
- Questa procedura diventa davvero veloce e facile da fare se si dà un nome ai vincoli e agli elementi. Non c'è modo di indovinare dove le superfici devono essere trascinate, perché i nomi lo dicono (vedi [Consigli e suggerimenti](#Tips_&_Tricks)).

[Torna all'inizio](#top)

### Tips & Tricks

### Consigli e suggerimenti

- L'utilizzo di assemblaggi gerarchici aiuta ad evitare problemi di risoluzione e a mantenere il modello fluido. È possibile congelare un sottoassieme con un clic e risparmiare facilmente le risorse della CPU (utilizzare il menu contestuale nell'albero). Quando si carica un assemblaggio l'assieme3 non ha bisogno di aprire file esterni per i sottoinsiemi congelati, il che mantiene l'albero compatto.
- È molto utile per abituarsi a dare un nome agli elementi e ai vincoli. Usare il tasto F2 per farlo rapidamente nella struttura ad albero. Troverete molto utili gli strumenti di ordinamento dell'albero nella barra degli strumenti principale. Un insieme con i vincoli e con elementi con nome completo è più facilmente comprensibile per le altre persone o per voi stessi quando guardate un file vecchio.

  : Esempi di nomi di vincoli per una tabella potrebbero essere "Align_FrontLegs", "Align_FrameBottom-LegTops" e i nomi degli elementi potrebbero essere "Leg1_Top" o "TableTop_Front", "TableTop_Left".

- Si noti che una volta aperti i file esterni da un assemblaggio non è possibile chiuderli nuovamente senza chiudere l'assemblaggio. Poiché l'assemblaggio tiene aperti i file in backgound, la scheda può scomparire, ma il file rimane visibile nell'albero. Se si dispone di più sottoinsiemi, diventa quasi impossibile chiudere i singoli file. Questo approccio potrebbe cambiare, ma fino ad allora un possibile metodo potrebbe essere quello di utilizzare regolarmente i comandi _File/Salva tutto_ e _File/Chiudi tutto_ per ripulire la struttura ad albero prima di lavorare su un altro sottoinsieme.

  : _Esempio: si consideri di avere una grande macchina CNC con un gruppo principale e un sottoinsieme per ogni modulo. Una volta aperto l'assemblaggio principale, si possono aprire letteralmente centinaia di file fino a un singolo cuscinetto a sfere. Prima di lavorare sul sottoinsieme del quadro elettrico della macchina è una buona idea salvare e chiudere tutti i file per ottenere un albero vuoto. Poi aprire solo il sottoinsieme per il quadro elettrico. Questo aprirà tutti i file di cui ha bisogno, ma solo quelli._

- L'utilizzo di file esterni rende più facile il riutilizzo di una parte o il cambio di versione di una parte con sistemi come git o subversion. Il flusso di lavoro in FreeCAD con Assembly è simile a quello dei file che hanno tutte le parti nello stesso file. Per lo scambio frequente di file con altre parti, i file singoli potrebbero essere più convenienti.
- Moltiplicare le parti collegate. Se si aggiunge un collegamento nell'insieme, questo avrà un valore di proprietà denominato "Element Count", predefinito 0. Se lo si imposta a 3 si ottengono 3 istanze di quella parte. Saranno aggiunte in una sottocartella e possono essere usate come parti completamente separate. Usate questa funzione per mantenere bassa l'impronta dei dati del vostro file, perché la parte viene salvata solo una volta. Ogni istanza contiene solo le differenze.
- Inserire più parti, ad es. viti, con un clic. Consultare il [Assembly3 Wiki3 Wiki](https://github.com/realthunder/FreeCAD_assembly3/wiki/Constraints-and-Solvers) sul sito di Github. Questa non è solo una funzione sbalorditiva (anche un po' magica), ma davvero molto utile.

- L'utilizzo del [TabBar Workbench](https://github.com/triplus/TabBar) accelera il lavoro con il montaggio. Questo aggiunge una barra degli strumenti con un pulsante per ogni banco di lavoro. È possibile ordinare la barra degli strumenti e metterla dove si vuole. Molte persone la mettono in verticale sul lato sinistro, proprio accanto alla vista ad albero. Avere Assembly3, Part, PartDesign e altri banchi da lavoro, spesso usati, vicino alla parte superiore, passare da uno all'altro diventa estremamente facile.

[Torna all'inizio](#top)

## Link

- [App Link](/App_Link/it "App Link/it") oggetto che fa funzionare Assembly3.
- [FreeCAD_assembly3](https://github.com/realthunder/FreeCAD_assembly3) archivio e documentazione.
- [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712), big discussion thread.
- [Test tutorial for Assembly 3 WB](https://forum.freecadweb.org/viewtopic.php?f=36&t=29562) by jpg87.
- [Current Assembly Status](https://forum.freecadweb.org/viewtopic.php?f=20&t=34583)
- [Ambienti complementari](/External_workbenches/it "External workbenches/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_Workbench/it&oldid=1551701>"
