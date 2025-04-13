---
title: Ambiente Draft
---

![](/images/Workbench_Draft.svg)

L'icona di Draft

## Introduzione

L'\*_Ambiente Draft_- ![](/images/Workbench_Draft.svg) si concentra principalmente sulla creazione e modifica di oggetti 2D in FreeCAD. Ma non è limitato al piano XY del sistema di coordinate globale. I suoi oggetti possono avere qualsiasi orientamento e posizione nello spazio 3D e alcuni oggetti Draft possono essere planari o non planari.

Gli oggetti Draft possono essere utilizzati per il disegno generale, in modo simile a quanto si può fare con Inkscape o AutoCAD. Ma possono anche costituire la base per la creazione di oggetti 3D in altri ambienti di lavoro. Una [Polilinea](/Draft_Wire/it "Draft Wire/it") può definire il percorso di un [Muro](/Arch_Wall/it "Arch Wall/it"), un [Poligono](/Draft_Polygon/it "Draft Polygon/it") può essere utilizzato per un [Estrusione](/Part_Extrude/it "Part Extrude/it"), ecc. Molti degli [strumenti di Modifica](#Modificare) possono essere comunque applicati agli oggetti 2D e 3D creati con altri ambienti di lavoro. Ad esempio, puoi [spostare](/Draft_Move/it "Draft Move/it") uno [Sketch](/Sketcher_Workbench/it "Sketcher Workbench/it") o creare una [Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it") da un oggetto [Part](/Part_Workbench/it "Part Workbench/it").

L'ambiente Draft fornisce anche strumenti per definire un [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it"), una [griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it") e un [sistema di aggancio](/Draft_Snap/it "Draft Snap/it") per controllare con precisione la posizione della geometria.

Se il tuo obiettivo principale è la produzione di disegni 2D complessi e file [DXF](/DXF/it "DXF/it") e non hai bisogno della modellazione 3D, FreeCAD potrebbe non essere la scelta giusta per te. Potresti invece prendere in considerazione un programma software dedicato per il disegno tecnico, come [LibreCAD](https://it.wikipedia.org/wiki/LibreCAD) o [QCad](https://it.wikipedia.org/wiki/QCad).

![](/images/Draft_Workbench_Example.png)

L'immagine mostra la [griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it") allineata con il piano XY.  
Alla sinistra, in bianco, alcuni oggetti piani.  
Alla destra una [Polilinea](/Draft_Wire/it "Draft Wire/it") usata come percorso per una [serie su tracciato](/Draft_PathArray "Draft PathArray").

## Disegnare

- ![](/images/Draft_Line.svg) [Linea](/Draft_Line/it "Draft Line/it"): crea una linea retta.

- ![](/images/Draft_Wire.svg) [Polilinea](/Draft_Wire/it "Draft Wire/it"): crea una polilinea (chiamata anche wire), una sequenza di diversi segmenti lineari connessi.

- ![](/images/Draft_Fillet.svg) [Raccordo](/Draft_Fillet/it "Draft Fillet/it"): crea un raccordo, un angolo arrotondato, o uno smusso, un angolo retto, tra due [Linee](/Draft_Line/it "Draft Line/it"). [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")

- ![](/images/Draft_Arc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Strumenti Arco:

- ![](/images/Draft_Arc.svg) [Arco](/Draft_Arc/it "Draft Arc/it"): crea un arco circolare da un centro, un raggio, un angolo iniziale e un angolo di apertura.

- ![](/images/Draft_Arc_3Points.svg) [Arco per 3 punti](/Draft_Arc_3Points/it "Draft Arc 3Points/it"): crea un arco circolare per tre punti che ne definiscono la circonferenza.

- ![](/images/Draft_Circle.svg) [Cerchio](/Draft_Circle/it "Draft Circle/it"): crea un cerchio da un centro e un raggio.

- ![](/images/Draft_Ellipse.svg) [Ellisse](/Draft_Ellipse/it "Draft Ellipse/it"): crea un'ellisse da due punti definendo un rettangolo a cui l'ellisse si adatterà.

- ![](/images/Draft_Rectangle.svg) [Rettangolo](/Draft_Rectangle/it "Draft Rectangle/it"): crea un rettangolo da due punti.

- ![](/images/Draft_Polygon.svg) [Poligono](/Draft_Polygon/it "Draft Polygon/it"): crea un poligono regolare da un centro e un raggio.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline/it "Draft BSpline/it"): crea una curva B-spline da più punti.

- ![](/images/Draft_CubicBezCurve.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Strumento Bézier:

- ![](/images/Draft_CubicBezCurve.svg) [Curva Cubica di Bézier](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it"): crea una curva di Bézier di terzo grado.

- ![](/images/Draft_BezCurve.svg) [Curva di Bézier](/Draft_BezCurve/it "Draft BezCurve/it"): crea una curva di Bézier da più punti.

- ![](/images/Draft_Point.svg) [Punto](/Draft_Point/it "Draft Point/it"): crea un punto semplice.

- ![](/images/Draft_Facebinder.svg) [Lega facce](/Draft_Facebinder/it "Draft Facebinder/it"): crea un oggetto superficie dalle facce selezionate.

- ![](/images/Draft_ShapeString.svg) [Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it"): crea una forma composta che rappresenta una stringa di testo.

- ![](/images/Draft_Hatch.svg) [Tratteggio](/Draft_Hatch/it "Draft Hatch/it"): crea tratteggi sulle facce piane di un oggetto selezionato.

## Annotazioni

- ![](/images/Draft_Text.svg) [Testo](/Draft_Text/it "Draft Text/it"): crea un testo su più righe in un determinato punto.

- ![](/images/Draft_Dimension.svg) [Quota](/Draft_Dimension/it "Draft Dimension/it"): crea una quota lineare, una quota radiale o una quota angolare.

- ![](/images/Draft_Label.svg) [Etichetta](/Draft_Label/it "Draft Label/it"): crea un testo su più righe con una linea guida a 2 segmenti e una freccia.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Stili di Annotazione...](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it"): consente di definire stili che influiscono sulle proprietà visive di oggetti simili ad annotazioni.

## Modificare

- ![](/images/Draft_Move.svg) [Sposta](/Draft_Move/it "Draft Move/it"): sposta o copia gli oggetti selezionati da un punto all'altro.

- ![](/images/Draft_Rotate.svg) [Ruota](/Draft_Rotate/it "Draft Rotate/it"): ruota o copia gli oggetti selezionati attorno a un punto centrale di un determinato angolo.

- ![](/images/Draft_Scale.svg) [Scala](/Draft_Scale/it "Draft Scale/it"): ridimensiona o copia gli oggetti selezionati attorno a un punto base.

- ![](/images/Draft_Mirror.svg) [Specchio](/Draft_Mirror/it "Draft Mirror/it"): crea copie specchiate da oggetti selezionati.

- ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset/it "Draft Offset/it"): sposta ogni segmento di un oggetto selezionato ad una determinata distanza o crea una copia traslata dell'oggetto selezionato.

- ![](/images/Draft_Trimex.svg) [Taglia/Estendi](/Draft_Trimex/it "Draft Trimex/it"): taglia o estende un oggetto selezionato.

- ![](/images/Draft_Stretch.svg) [Stira](/Draft_Stretch/it "Draft Stretch/it"): allunga gli oggetti spostando i punti selezionati.

- ![](/images/Draft_Clone.svg) [Clona](/Draft_Clone/it "Draft Clone/it"): crea copie collegate, cloni, ​​di oggetti selezionati.

- ![](/images/Draft_OrthoArray.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Strumenti Array:

- ![](/images/Draft_OrthoArray.svg) [Serie](/Draft_OrthoArray/it "Draft OrthoArray/it"): crea una serie ortogonale da un oggetto selezionato. Può opzionalmente creare una serie di [Link](/App_Link "App Link").

- ![](/images/Draft_PolarArray.svg) [Serie polare](/Draft_PolarArray/it "Draft PolarArray/it"): crea una serie da un oggetto selezionato, posizionando copie lungo una circonferenza. Facoltativamente, può creare una serie di [Link](/App_Link/it "App Link/it").

- ![](/images/Draft_CircularArray.svg) [Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it"): crea una serie da un oggetto selezionato, posizionando copie lungo circonferenze concentriche. Facoltativamente, può creare un serie di [Link](/App_Link "App Link").

- ![](/images/Draft_PathArray.svg) [Serie su tracciato](/Draft_PathArray/it "Draft PathArray/it"): crea una matrice da un oggetto selezionato posizionando le copie lungo un tracciato.

- ![](/images/Draft_PathLinkArray.svg) [Serie di link su tracciato](/Draft_PathLinkArray/it "Draft PathLinkArray/it"): idem, ma crea una serie di [Link](/App_Link "App Link") invece di una serie normale.

- ![](/images/Draft_PointArray.svg) [Serie di punti](/Draft_PointArray/it "Draft PointArray/it"): crea una serie da un oggetto selezionato posizionando copie nei punti da un assieme di punti.

- ![](/images/Draft_PointLinkArray.svg) [Serie di link su punti](/Draft_PointLinkArray/it "Draft PointLinkArray/it"): idem, ma crea una serie di [Link](/App_Link "App Link") invece di una serie normale.

- ![](/images/Draft_Edit.svg) [Modifica](/Draft_Edit/it "Draft Edit/it"): mette gli oggetti selezionati in modalità Modifica bozza. In questa modalità le proprietà degli oggetti possono essere modificate graficamente.

- ![](/images/Draft_SubelementHighlight.svg) [Evidenzia sottoelemento](/Draft_SubelementHighlight/it "Draft SubelementHighlight/it"): evidenzia temporaneamente gli oggetti selezionati o gli oggetti base degli oggetti selezionati.

- ![](/images/Draft_Join.svg) [Unisci](/Draft_Join/it "Draft Join/it"): unisce [Linee](/Draft_Line/it "Draft Line/it") e [Polilinee](/Draft_Wire/it "Draft Wire/it") in un unico contorno.

- ![](/images/Draft_Split.svg) [Dividi](/Draft_Split/it "Draft Split/it"): divide una [Linea](/Draft_Line/it "Draft Line/it") o una [Polilinea](/Draft_Wire/it "Draft Wire/it") in un punto o bordo specificato.

- ![](/images/Draft_Upgrade.svg) [Promuovi](/Draft_Upgrade/it "Draft Upgrade/it"): promuove gli oggetti selezionati.

- ![](/images/Draft_Downgrade.svg) [Declassa](/Draft_Downgrade/it "Draft Downgrade/it"): declassa gli oggetti selezionati.

- ![](/images/Draft_WireToBSpline.svg) [Polilinea in B-spline](/Draft_WireToBSpline/it "Draft WireToBSpline/it"): converte [Polilinee](/Draft_Wire/it "Draft Wire/it") in [BSplines](/Draft_BSpline/it "Draft BSpline/it") e viceversa.

- ![](/images/Draft_Draft2Sketch.svg) [Draft in sketch](/Draft_Draft2Sketch/it "Draft Draft2Sketch/it"): converte un Draft in [Schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it") e vice versa.

- ![](/images/Draft_Slope.svg) [Imposta la pendenza](/Draft_Slope/it "Draft Slope/it"): imposta la pendenza delle [Linee](/Draft_Line/it "Draft Line/it") o [Polilinee](/Draft_Wire "Draft Wire") selezionate aumentando o diminuendo la coordinata Z di tutti i punti dopo il primo.

- ![](/images/Draft_FlipDimension.svg) [Capovolgi quota](/Draft_FlipDimension/it "Draft FlipDimension/it"): ruota il testo della quota della [Dimensione](/Draft_Dimension/it "Draft Dimension/it") selezionata di 180° attorno alla linea di quota.

- ![](/images/Draft_Shape2DView.svg) [Vista forma 2D](/Draft_Shape2DView/it "Draft Shape2DView/it"): crea proiezioni 2D da oggetti selezionati.

## Vassoio di Draft

Il [Vassoio di Draft](/Draft_Tray/it "Draft Tray/it") consente di selezionare il piano di lavoro, definire le impostazioni di stile, attivare/disattivare la modalità di costruzione e specificare il layer o il gruppo attivo.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_tray_button_plane.png) [Seleziona piano](/Draft_SelectPlane/it "Draft SelectPlane/it"): definisce il piano di lavoro Draft corrente. Disponibile anche nel menu: **Draft → Utilità → ![](/images/Draft_SelectPlane.svg) Seleziona Piano**.

- ![](/images/Draft_tray_button_style.png) [Imposta stile](/Draft_SetStyle/it "Draft SetStyle/it"): imposta lo stile predefinito per i nuovi oggetti. Disponibile anche nel menu: **Draft → Utilità → ![](/images/Draft_SetStyle.svg) Imposta stile**.

- ![](/images/Draft_tray_button_construction.png) [Attiva/Disattiva la modalità costruzione](/Draft_ToggleConstructionMode/it "Draft ToggleConstructionMode/it"): attiva o disattiva la modalità di costruzione Draft. Disponibile anche nel menu: **Draft → Utilità → ![](/images/Draft_ToggleConstructionMode.svg) Attiva/Disattiva la modalità costruzione**.

- ![](/images/Draft_tray_button_layer.png) [Disattiva auto gruppo](/Draft_AutoGroup/it "Draft AutoGroup/it"): cambia l'oggetto attivo [Strato Draft](/Draft_Layer/it "Draft Layer/it") o, facoltativamente, l'oggetto attivo [Gruppo](/Std_Group/it "Std Group/it") o l'oggetto gruppo di [BIM](/BIM_Workbench/it "BIM Workbench/it").

## Dispositivo Scala annotazione

Con il [dispositivo Scala annotazione](/Draft_annotation_scale_widget/it "Draft annotation scale widget/it") è possibile specificare la scala di annotazione di Draft.

![](/images/Draft_annotation_scale_widget_button.png)

## Dispositivo aggancio

Il [dispositivo Aggancio di Draft](/Draft_snap_widget/it "Draft snap widget/it") può essere utilizzato come alternativa alla [Barra degli strumenti di aggancio](#Barra_degli_strumenti_di_aggancio).

![](/images/Draft_snap_widget_button.png)

## Barra degli strumenti di aggancio

La barra degli strumenti di Aggancio (snap) di Draft consente di selezionare le opzioni di aggancio attive. I pulsanti appartenenti alle opzioni attive rimangono premuti. Per informazioni generali sull'aggancio vedere: [Aggancio](/Draft_Snap/it "Draft Snap/it").

- ![](/images/Draft_Snap_Lock.svg) [Blocca aggancio](/Draft_Snap_Lock/it "Draft Snap Lock/it"): abilita o disabilita l'aggancio a livello globale.

- ![](/images/Draft_Snap_Endpoint.svg) [Aggancia Punto Finale](/Draft_Snap_Endpoint/it "Draft Snap Endpoint/it"): aggancia alle estremità dei bordi.

- ![](/images/Draft_Snap_Midpoint.svg) [Aggancia Punto Medio](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it"): aggancia al punto medio dei bordi.

- ![](/images/Draft_Snap_Center.svg) [Aggancia Centro](/Draft_Snap_Center/it "Draft Snap Center/it"): aggancia al punto centrale delle facce e dei bordi circolari e al punto di Dati**Posizionamento** dei [Piani di lavoro Proxy di Draft](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") e [Parti di edificio di Arch](/Arch_BuildingPart/it "Arch BuildingPart/it").

- ![](/images/Draft_Snap_Angle.svg) [Aggancia Angolo](/Draft_Snap_Angle/it "Draft Snap Angle/it"): aggancia agli speciali punti cardinali sui bordi circolari a multipli di 30° e 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Aggancia Intersezione](/Draft_Snap_Intersection/it "Draft Snap Intersection/it"): aggancia all'intersezione di due bordi.

- ![](/images/Draft_Snap_Perpendicular.svg) [Aggancia Perpendicolare](/Draft_Snap_Perpendicular/it "Draft Snap Perpendicular/it"): aggancia ai punti perpendicolari sulle facce ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e sugli spigoli.

- ![](/images/Draft_Snap_Extension.svg) [Aggancia Estensione](/Draft_Snap_Extension/it "Draft Snap Extension/it"): aggancia a una linea immaginaria che si estende oltre i punti finali dei bordi diritti.

- ![](/images/Draft_Snap_Parallel.svg) [Aggancia Parallelo](/Draft_Snap_Parallel/it "Draft Snap Parallel/it"): aggancia a una linea immaginaria parallela ai bordi dritti.

- ![](/images/Draft_Snap_Special.svg) [Aggancia Speciale](/Draft_Snap_Special/it "Draft Snap Special/it"): aggancia ai punti speciali definiti dall'oggetto.

- ![](/images/Draft_Snap_Near.svg) [Aggancia Vicino](/Draft_Snap_Near/it "Draft Snap Near/it"): aggancia al punto più vicino alle facce e agli spigoli.

- ![](/images/Draft_Snap_Ortho.svg) [Aggancia Ortogonale](/Draft_Snap_Ortho/it "Draft Snap Ortho/it"): aggancia alle linee immaginarie che attraversano il punto precedente a multipli di 45°.

- ![](/images/Draft_Snap_Grid.svg) [Aggancia Griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it"): aggancia alle intersezioni delle linee della griglia.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Aggancia Piano di Lavoro](/Draft_Snap_WorkingPlane/it "Draft Snap WorkingPlane/it"): proietta i punti di aggancio sul [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente.

- ![](/images/Draft_Snap_Dimensions.svg) [Aggancia quote](/Draft_Snap_Dimensions/it "Draft Snap Dimensions/it"): mostra le quote X e Y temporanee.

- ![](/images/Draft_ToggleGrid.svg) [Attiva/Disattiva la griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it"): cambia la visibilità della griglia.

## Strumenti di utilità di Draft

- ![](/images/Draft_LayerManager.svg) [Gestione layer](/Draft_LayerManager/it "Draft LayerManager/it"): permette di gestire i layer in un documento. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/Draft_AddNamedGroup.svg) [Nuovo gruppo con nome](/Draft_AddNamedGroup/it "Draft AddNamedGroup/it"): crea un [Gruppo](/Std_Group "Std Group") con nome e aggiunge gli oggetti selezionati in quel gruppo.

- ![](/images/Draft_SelectGroup.svg) [Seleziona gruppo](/Draft_SelectGroup/it "Draft SelectGroup/it"): seleziona il contenuto dei [gruppi](/Std_Group/it "Std Group/it") o degli oggetti simili a gruppi [BIM](/BIM_Workbench/it "BIM Workbench/it").

- ![](/images/Draft_AddToLayer.svg) [Aggiungi al layer...](/index.php?title=Draft_AddToLayer/it&action=edit&redlink=1 "Draft AddToLayer/it (page does not exist)"): aggiunge oggetti a un layer o li rimuove da qualsiasi layer. [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")

- ![](/images/Draft_AddToGroup.svg) [Aggiungi al gruppo...](/Draft_AddToGroup/it "Draft AddToGroup/it"): aggiunge gli oggetti in un [gruppo](/Std_Group/it "Std Group/it"). Può anche separare gli oggetti.

- ![](/images/Draft_AddConstruction.svg) [Aggiungi al gruppo costruzione](/Draft_AddConstruction/it "Draft AddConstruction/it"): aggiunge gli oggetti nel [Gruppo di costruzione Draft](/Draft_ToggleConstructionMode/it "Draft ToggleConstructionMode/it").

- ![](/images/Draft_ToggleDisplayMode.svg) [Attiva/Disattiva la visualizzazione normale/reticolo](/Draft_ToggleDisplayMode/it "Draft ToggleDisplayMode/it"): cambia la proprietà Vista**Display Mode** degli oggetti selezionati tra `Linee Piatte` e `Reticolo`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Crea piano di lavoro proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it"): crea un proxy del piano di lavoro per salvare il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") attuale.

## Strumenti aggiuntivi

Il menu **Draft → Utilità** contiene diversi strumenti. Alla maggior parte di essi è possibile accedere anche dalle barre degli strumenti o dalla [Barra Draft](/Draft_Tray/it "Draft Tray/it") e sono già stati menzionati sopra. Per i seguenti strumenti non è questo il caso:

- ![](/images/Draft_ApplyStyle.svg) [Applica lo stile corrente](/Draft_ApplyStyle/it "Draft ApplyStyle/it"): applica le impostazioni di stile correnti agli oggetti selezionati.

- ![](/images/Draft_Layer.svg) [Nuovo layer](/Draft_Layer/it "Draft Layer/it"): crea un [Draft Layer](/Draft_Layer/it "Draft Layer/it").

- ![](/images/Draft_Heal.svg) [Ripara](/Draft_Heal/it "Draft Heal/it"): ripara gli oggetti Draft problematici trovati in file molto vecchi.

- ![](/images/Draft_ShowSnapBar.svg) [Mostra la Barra degli strumenti di aggancio](/Draft_ShowSnapBar/it "Draft ShowSnapBar/it"): mostra la [barra degli strumenti di aggancio](#Barra_degli_strumenti_di_aggancio).

## Ulteriori funzioni

- [Piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it"): il piano nella [vista 3D](/3D_view/it "3D view/it") dove vengono creati i nuovi oggetti Draft.
- [Aggancio (snap)](/Draft_Snap/it "Draft Snap/it"): seleziona punti geometrici esatti o definiti da oggetti esistenti o dalla griglia.
- [Vincolare](/Draft_Constrain/it "Draft Constrain/it"): per ogni punto successivo è possibile vincolare il movimento del cursore alla direzione X, Y o Z.
- [Modalità costruzione](/Draft_ToggleConstructionMode/it "Draft ToggleConstructionMode/it"): posiziona i nuovi oggetti Draft in un gruppo dedicato rendendo più facile nasconderli o eliminarli.
- [Campitura](/Draft_Pattern/it "Draft Pattern/it"): Gli oggetti Draft con una proprietà Dati**Make Face** possono essere visualizzati con un modello SVG invece di un colore della faccia a tinta unita.

## Menu contestuale della vista ad albero

Le seguenti opzioni aggiuntive sono disponibili nel menu contestuale [Vista ad albero](/Tree_view/it "Tree view/it"):

### Opzioni di default

Per la maggior parte degli oggetti Draft è disponibile la seguente opzione:

- Modifica: modifica l'oggetto. A seconda del tipo di oggetto, viene utilizzata [Draft Modifica](/Draft_Edit/it "Draft Edit/it") o una soluzione di modifica dedicata. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Se c'è un documento attivo il menu contestuale contiene un ulteriore sottomenu:

- Utilità: un sottoinsieme degli strumenti disponibili nel menu principale Utilità di Draft.

### Opzioni del contenitore di layer

Per un [Contenitore di layer](/Draft_Layer/it "Draft Layer/it") sono disponibili queste opzioni aggiuntive:

- ![](/images/Draft_Layer.svg) [Unisci i layer duplicati](/Draft_Layer/it#Opzioni_del_contenitore_di_Layer "Draft Layer/it"): unisce tutti i layer con la stessa etichetta di base.

- ![](/images/Draft_NewLayer.svg) [Aggiungi un nuovo layer](/Draft_Layer/it#Contenitore_di_layer_di_Draft "Draft Layer/it"): aggiunge un nuovo layer al documento corrente.

### Opzioni dei layer

Per un [Layer di Draft](/Draft_Layer/it "Draft Layer/it") sono disponibili queste opzioni aggiuntive.

- ![](/images/Button_right.svg) [Attiva questo layer](/Draft_AutoGroup/it "Draft AutoGroup/it"): attiva il layer selezionato.

- ![](/images/Draft_SelectGroup.svg) [Seleziona il contenuto del layer](/Draft_SelectGroup/it "Draft SelectGroup/it"): seleziona gli oggetti all'interno del layer selezionato.

### Opzioni testo

Per un [Draft Testo](/Draft_Text/it "Draft Text/it") e un [Draft Etichetta](/Draft_Label/it "Draft Label/it") che contengono uno o più collegamenti ipertestuali a un file locale o remoto o a un URL, questa opzione aggiuntiva è disponibile

- Apri collegamenti ipertestuali: i collegamenti ipertestuali vengono aperti nell'applicazione appropriata (come definito dal sistema operativo). In caso di collegamenti ipertestuali multipli viene visualizzato un avviso. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

### Opzioni polilinea

Per [Linea](/Draft_Line/it "Draft Line/it") e [Polilinea](/Draft_Wire/it "Draft Wire/it") è disponibile questa opzione aggiuntiva:

- ![](/images/Draft_Edit.svg) Appiattisci: appiattisce la polilinea sul corrente [Piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it"). Questa opzione non funziona correttamente in 0.19 and below.

### Opzioni del piano di lavoro proxy

Per un [Piano di lavoro proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") queste opzioni aggiuntive sono disponibili:

- ![](/images/Draft_SelectPlane.svg) [Memorizza posizione telecamera](/Draft_WorkingPlaneProxy/it#Menu_contestuale "Draft WorkingPlaneProxy/it"): aggiorna la proprietà Vista**View Data** del piano di lavoro proxy con la [vista 3D](/3D_view "3D view") corrente nelle impostazioni della fotocamera.

- ![](/images/Draft_SelectPlane.svg) [Memorizza lo stato degli oggetti](/Draft_WorkingPlaneProxy/it#Menu_contestuale "Draft WorkingPlaneProxy/it"): aggiorna la proprietà Vista**Mappa di visibilità** del piano di lavoro proxy con lo stato di visibilità corrente degli oggetti nel documento.

## Menu contestuale vista 3D

Le seguenti opzioni aggiuntive sono disponibili nel menu contestuale della [Vista 3D](/3D_view/it "3D view/it"):

### Opzioni di default

Se è presente un documento attivo, il menu contestuale contiene un ulteriore sottomenu:

- Utilità: un sottoinsieme degli strumenti disponibili nel menu principale Utilità di Draft.

### Opzioni testo

Vedere [sopra](#Opzioni_testo).

### Strumenti obsoleti

- ![](/images/Draft_Array.svg) [Serie](/Draft_Array/it "Draft Array/it"): crea una serie ortogonale da un oggetto selezionato. La serie creata può essere trasformata in una [serie polare](/Draft_PolarArray/it "Draft PolarArray/it") o in una [serie circolare](/Draft_CircularArray/it "Draft CircularArray/it") modificandone la proprietà Dati**Tipo di array**. Non disponibile nella versione 0.21 e superiori.

- ![](/images/Draft_Drawing.svg) [Disegno](/Draft_Drawing/it "Draft Drawing/it"): inserisce le viste degli oggetti selezionati in una pagina [disegno tecnico](/Drawing_Workbench/it "Drawing Workbench/it"). Non disponibile nella versione 0.21 e superiori.

- ![](/images/Draft_ToggleContinueMode.svg) [Attiva/Disattiva la modalità continua](/Draft_ToggleContinueMode/it "Draft ToggleContinueMode/it"): attiva o disattiva la modalità continua. Non disponibile nella versione 1.0 e superiori.

## Preferenze

- ![](/images/Preferences-draft.svg) [Preferenze](/Draft_Preferences/it "Draft Preferences/it"): preferenze generali per l'ambiente Draft.

- ![](/images/Preferences-import-export.svg) [Preferenze Import Export](/Import_Export_Preferences/it "Import Export Preferences/it"): preferenze disponibili per l'importazione e l'esportazione in diversi formati di file.

## Formato dei file

L'ambiente Draft fornisce a FreeCAD importatori ed esportatori per diversi formati di file. Questi sono utilizzati dai comandi [Import](/Std_Import/it "Std Import/it") e [Export](/Std_Export/it "Std Export/it").

- [Autodesk .DXF](/Draft_DXF/it "Draft DXF/it"): importa ed esporta file [Drawing Exchange Format](http://it.wikipedia.org/wiki/AutoCAD_DXF). Vedere anche [Importare i file DXF in FreeCAD](/FreeCAD_and_DXF_Import/it "FreeCAD and DXF Import/it").
- [Autodesk .DWG](/Draft_DXF/it "Draft DXF/it"): importa ed esporta file DWG tramite un convertitore DWG esterno. Vedere anche [Importare i file DWG in FreeCAD](/FreeCAD_and_DWG_Import/it "FreeCAD and DWG Import/it").
- [Scalable Vector Graphics .SVG](/Draft_SVG/it "Draft SVG/it"): importa ed esporta file [Scalable Vector Graphics](http://it.wikipedia.org/wiki/Scalable_Vector_Graphics).
- [Open Cad format .OCA](/Draft_OCA/it "Draft OCA/it"): importa ed esporta file [OCA/GCAD](http://groups.google.com/group/open_cad_format).
- [Airfoil Data Format .DAT](/Draft_DAT/it "Draft DAT/it"): importa i file DAT che descrivono i profili del profilo alare.

## Test unitari

Vedere anche: [Ambiente Test](/Testing/it "Testing/it").

Per eseguire i test unitari dell'ambiente, eseguire quanto segue dal terminale del sistema operativo:

```
freecad -t TestDraft

```

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

L'ambiente include un modulo per creare dei campioni di tutti gli oggetti in un nuovo documento.

Utilizzare questo per verificare che tutti gli oggetti siano prodotti correttamente:

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

L'esame del codice di questo modulo può aiutare a comprendere l'interfaccia di programmazione.

## Tutorial

- [Tutorial di Draft](/Draft_tutorial/it "Draft tutorial/it")
- [Tutorial di Draft Forma da Testo](/Draft_ShapeString_tutorial/it "Draft ShapeString tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/it&oldid=1551160>"
