---
title: Ambiente Sketcher
---

![](/images/Workbench_Sketcher.svg)

L'icona dell'ambiente Sketcher

## Introduzione

Con ![](/images/Workbench_Sketcher.svg) l'Ambiente Sketcher è possibile creare schizzi 2D destinati all'uso in altri ambienti di lavoro. Gli schizzi 2D sono il punto di partenza per molti modelli CAD. In genere definiscono i profili e i percorsi per le operazioni di creazione di forme 3D. Un modello può dipendere da diversi schizzi per la sua forma finale.

Insieme alle operazioni booleane definite in ![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench/it "Part Workbench/it"), l'ambiente Sketcher, o "The Sketcher" in breve, costituisce la base della [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it") (CSG) metodo di costruzione dei solidi. Insieme alle operazioni in ![](/images/Workbench_PartDesign.svg) [Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"), costituisce anche la base della metodologia di [modifica delle funzioni](/Feature_editing/it "Feature editing/it") per la creazione di solidi. Ma anche molti altri ambienti di lavoro utilizzano gli schizzi.

L'ambiente Sketcher mette a disposizione i [vincoli](#Vincoli), che consentono alle forme 2D di seguire precise definizioni geometriche in termini di lunghezza, angoli e relazioni (orizzontalità, verticalità, perpendicolarità, ecc.). Un risolutore di vincoli calcola l'estensione vincolata della geometria 2D e consente l'esplorazione interattiva dei gradi di libertà dello schizzo.

Sketcher non è destinato alla produzione di progetti 2D. Una volta utilizzati gli schizzi per generare una lavorazione solida, questi vengono automaticamente nascosti e i vincoli sono visibili solo in modalità Modifica schizzo. Se si ha solo bisogno di produrre viste 2D per la stampa e non si vuole creare modelli 3D, dare un'occhiata all'[Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it").

![](/images/FC_ConstrainedSketch.png)

Uno schizzo base, completamente vincolato‎.

## Vincoli

I vincoli vengono utilizzati per limitare i gradi di libertà di un oggetto. Ad esempio, una linea senza vincoli ha 4 gradi di libertà (abbreviati in "DoF"): può essere spostata orizzontalmente o verticalmente, può essere allungata e può essere ruotata.

Applicando a una linea un vincolo orizzontale o verticale, oppure un vincolo angolare (rispetto ad un'altra linea o ad uno degli assi) si limita la sua capacità di ruotare, lasciandola quindi con solo 2 gradi di libertà. Bloccando uno dei suoi punti rispetto all'origine si rimuove un ulteriore grado di libertà. Applicando un vincolo dimensionale si rimuove l'ultimo grado di libertà. A questo punto, la linea è quindi considerata **completamente vincolata**.

Gli oggetti possono essere vincolati gli uni rispetto agli altri. Due linee possono essere unite attraverso uno dei loro punti con il vincolo del punto coincidente. È possibile impostare un angolo tra di loro oppure possono essere impostati perpendicolari. Una linea può essere tangente ad un arco o ad un cerchio e così via. Uno schizzo complesso con più oggetti può avere diverse soluzioni e renderlo **completamente vincolato** può significare che solo una di queste possibili soluzioni è stata raggiunta in base ai vincoli applicati.

Ci sono due tipi di vincoli: geometrici e dimensionali. Essi sono descritti nella successiva sezione dedicata agli [Strumenti](#Strumenti).

### Modificare i vincoli

Quando viene creato un [vincolo dimensionale di guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it") e se la [preferenza](/Sketcher_Preferences/it#Display "Sketcher Preferences/it") **Richiedi il valore dopo la creazione di un vincolo dimensionale** è selezionata (impostazione predefinita), si apre una finestra di dialogo per modificarne il valore.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

È possibile inserire un valore numerico o una [espressione](/Expressions/it "Expressions/it"), ed è possibile nominare il vincolo per facilitarne l'utilizzo in altre espressioni. È anche possibile selezionare la casella di controllo **Riferimento** per commutare il vincolo in [modalità riferimento](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it").

Per modificare il valore di un vincolo dimensionale esistente, effettuare una delle seguenti operazioni:

- Fare doppio clic sul valore del vincolo nella [vista 3D](/3D_view/it "3D view/it").
- Fare doppio clic sul vincolo nella [Finestra di dialogo di Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
- Fare clic con il pulsante destro del mouse sul vincolo nella finestra di dialogo di Sketcher e selezionare l'opzione **Cambia valore** dal menu contestuale.

### Riposizionare i vincoli

I vincoli dimensionali possono essere riposizionati nella vista 3D trascinandoli. Tenere premuto il pulsante sinistro del mouse sul valore del vincolo e spostare il mouse. I simboli dei vincoli geometrici vengono posizionati automaticamente e non possono essere spostati.

## Schizzi di profili

Per creare uno schizzo che può essere utilizzato come profilo per generare solidi è necessario seguire alcune regole:

- Lo schizzo deve contenere solo contorni chiusi. Non sono consentiti spazi tra i punti finali, per quanto piccoli.
- I contorni possono essere annidati per creare vuoti, ma non devono autointersecarsi o intersecare altri contorni.
- I contorni non possono condividere i bordi con altri contorni. I bordi duplicati devono essere evitati.
- Non sono consentite connessioni a T, ovvero più di due bordi che condividono un punto comune, o un punto che tocca un bordo.

Queste regole non si applicano alle geometrie di costruzione (colore predefinito blu), che non viene mostrata al di fuori della modalità di modifica o se lo schizzo viene utilizzato per uno scopo diverso. A seconda dell'ambiente di lavoro e dello strumento che utilizzerà lo schizzo del profilo, potrebbero essere applicate ulteriori restrizioni.

## Aiuti per il disegno

L'ambiente Sketcher dispone di numerosi aiuti al disegno e altre funzionalità che possono essere utili durante la creazione della geometria e l'applicazione dei vincoli.

### Modalità continua

Sono disponibili due tipi di modalità continua: **Crea la geometria usando la "Modalità continua"** e **Creazione dei vincoli con "Modalità continua"**. Se questi sono selezionati nelle [preferenze](/Sketcher_Preferences/it#Visualizzazione "Sketcher Preferences/it") (impostazione predefinita), gli strumenti correlati verranno riavviati al termine. Per uscire da una modalità continua premere Esc o il pulsante destro del mouse. Questo deve essere ripetuto se uno strumento di geometria in modalità continua ha già ricevuto un input. È inoltre possibile uscire da uno strumento continuo avviando un altro strumento di creazione di geometria o vincoli. Tenere presente che premendo Esc quando nessuno strumento è attivo si uscirà dalla modalità di modifica dello schizzo. Deselezionare **Esc permette di uscire dalla modalità di modifica dello schizzo** nelle [preferenze](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") se si preme spesso inavvertitamente Esc troppe volte.

### Vincoli automatici

Per gli schizzi in cui è selezionata l'opzione **Vincoli automatici** (impostazione predefinita) diversi vincoli vengono applicati automaticamente. L'icona di un vincolo automatico proposto viene visualizzata accanto al cursore quando è posizionato correttamente. Facendo clic con il pulsante sinistro del mouse verrà quindi applicato quel vincolo. Questa è un'impostazione per schizzo che può essere modificata nella [finestra di dialogo di Sketcher](/Sketcher_Dialog/it#Vincoli "Sketcher Dialog/it") o modificando la [proprietà](/Property_editor/it "Property editor/it") Vista**Autoconstraints** dello schizzo.

I seguenti vincoli vengono applicati automaticamente:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Orizzontale](/Sketcher_ConstrainHorizontal/it "Sketcher ConstrainHorizontal/it")
- ![](/images/Sketcher_ConstrainVertical.svg) [Verticale](/Sketcher_ConstrainVertical/it "Sketcher ConstrainVertical/it")
- ![](/images/Sketcher_ConstrainTangent.svg) [Tangente](/Sketcher_ConstrainTangent/it "Sketcher ConstrainTangent/it")
- [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Simmetria](/Sketcher_ConstrainSymmetric/it "Sketcher ConstrainSymmetric/it") (punto medio della linea)

### Aggancio

[disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

È possibile [agganciare](/Sketcher_Snap/it "Sketcher Snap/it") alle linee della griglia e alle intersezioni della griglia, ai bordi della geometria e ai punti medi di linee e archi e a determinati angoli. Tenere presente che l'aggancio (snap) non produce vincoli di per sé. Ad esempio, solo se l'opzione [Vincoli automatici](#Vincoli_automatici) è attivata, l'aggancio a un bordo produrrà un [Vincolo punto sull'oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it"). Ma anche solo scegliere un punto sul bordo avrebbe lo stesso risultato.

### Parametri On-View

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

A seconda dell'opzione selezionata nelle [preferenze](/Sketcher_Preferences/it#Generale "Sketcher Preferences/it") possono essere abilitati solo i parametri On-View dimensionali o sia i parametri On-View dimensionali che quelli posizionali. I parametri di posizionali consentono l'immissione di coordinate esatte, ad esempio il centro di un cerchio o il punto iniziale di una linea. I parametri dimensionali consentono l'inserimento di dimensioni esatte, ad esempio il raggio di un cerchio o la lunghezza e l'angolo di una linea. I parametri On-View non sono disponibili per tutti gli strumenti.

![](/images/Sketcher_On_view_parameters_positional.png)

Determinazione del punto centrale di un cerchio con i parametri posizionali abilitati

![](/images/Sketcher_On_view_parameters_dimensional.png)

Determinazione del raggio di un cerchio con i parametri dimensionali abilitati

Se i valori vengono immessi e confermati premendo Enter o Tab, i relativi vincoli vengono aggiunti automaticamente. Se vengono visualizzati due parametri contemporaneamente, ad esempio le coordinate X e Y di un punto, è possibile inserire un valore e selezionare un punto per definire l'altro. A seconda dell'oggetto potrebbero essere necessari vincoli aggiuntivi per vincolarlo completamente. I vincoli risultanti dai parametri On-View hanno la precedenza su quelli che possono risultare da [Vincoli automatici](/Sketcher_Dialog/it#Vincoli "Sketcher Dialog/it").

![](/images/Sketcher_ArcExample3.png)

Arco creato inserendo tutti i parametri On-View con i risultanti vincoli creati automaticamente

### Visualizzazione delle coordinate

Se **Mostra le coordinate accanto al cursore durante la modifica** [preferenza](/Sketcher_Preferences/it#Visualizzazione "Sketcher Preferences/it") è selezionato (impostazione predefinita), i parametri dello strumento di geometria corrente (coordinate, raggio o lunghezza e angolo) vengono visualizzati accanto al cursore. Questo è disattivato mentre vengono visualizzati i parametri On-View.

## Metodi di selezione

Mentre uno schizzo è in modalità di modifica è possibile utilizzare i seguenti metodi di selezione:

### Selezione elemento nella Vista 3D

Come altrove in FreeCAD, un elemento può essere selezionato nella [Vista 3D](/3D_view/it "3D view/it") con un singolo clic sinistro del mouse. Ma non è necessario tenere premuto il tasto Ctrl quando si selezionano più elementi. Tuttavia, tenere premuto quel tasto è possibile e ha il vantaggio di poter fare clic in modo errato senza perdere la selezione. Bordi, punti e vincoli possono essere selezionati in questo modo.

### Selezione con riquardo nella Vista 3D

La selezione con riquadro nella vista 3D funziona senza utilizzare [Std BoxSelection](/Std_BoxSelection/it "Std BoxSelection/it") o [Std BoxElementSelection](/Std_BoxElementSelection/it "Std BoxElementSelection/it"):

1. Assicursi che nessuno strumento sia attivo.
2. Effettuare una delle seguenti operazioni:
   - Fare clic in un'area vuota e trascinare un rettangolo da sinistra a destra per selezionare gli elementi che si trovano completamente all'interno del rettangolo.
   - Fare clic in un'area vuota e trascinare un rettangolo da destra a sinistra per selezionare anche gli elementi che toccano o attraversano il rettangolo.

È possibile selezionare tramite riquadro bordi e punti, i vincoli non possono essere selezionati tramite in questo modo.

### Selezione della geometria collegata nella Vista 3D

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Facendo doppio clic su un bordo nella vista 3D verranno selezionati tutti i bordi direttamente e indirettamente collegati a quel bordo tramite i punti finali. Non è necessario che i bordi siano collegati con [Vincoli coincidenti](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"), i punti finali devono solo avere le stesse coordinate.

### Selezione tramite la finestra Dialogo di Sketcher

I bordi e i punti possono anche essere selezionati dalla sezione Elementi della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it") e i vincoli dalla sezione Vincoli di quella stessa finestra.

## Copia, taglia e incolla

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Le scorciatoie da tastiera standard, Ctrl+C, Ctrl+X e Ctrl+V , possono essere utilizzate per copiare, tagliare e incollare la geometria dello Sketcher selezionata, inclusi i relativi vincoli. Ma questi strumenti sono disponibili anche dal menu **Sketch → Strumenti Sketcher**. Possono essere utilizzati all'interno dello stesso schizzo ma anche tra schizzi diversi o istanze separate di FreeCAD. Poiché i dati vengono copiati negli appunti sotto forma di codice Python, possono essere utilizzati anche in altri modi (ad esempio condivisi sul forum).

## Strumenti

Gli strumenti dell'Ambiente Sketcher si trovano nel menu Sketch e/o in diverse barre degli strumenti. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"): quasi tutte le barre degli strumenti di Sketcher vengono visualizzate soltanto se uno schizzo è in modalità di modifica. L'unica eccezione è che la [barra degli strumenti di Sketcher](#Sketcher_toolbar) viene visualizzata soltanto se nessuno schizzo è in modalità di modifica.

Alcuni strumenti sono disponibili anche dal menu contestuale [Vista 3D](/3D_view/it "3D view/it") mentre uno schizzo è in modalità di modifica o dai menu contestuali della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").

[disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"): se uno schizzo è in modalità di modifica, la barra degli strumenti Struttura è nascosta perché nessuno dei suoi strumenti può essere utilizzato.

### Generale

#### Barra degli strumenti di Sketcher

- ![](/images/Sketcher_NewSketch.svg) [Crea schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it"): crea un nuovo schizzo e apre la finestra [Dialogo Sketcher](/Sketcher_Dialog "Sketcher Dialog") per modificarlo.

- ![](/images/Sketcher_EditSketch.svg) [Modifica schizzo](/Sketcher_EditSketch/it "Sketcher EditSketch/it"): apre la finestra di Dialogo Sketcher per modificare uno schizzo esistente.

- ![](/images/Sketcher_MapSketch.svg) [Associa schizzo](/Sketcher_MapSketch/it "Sketcher MapSketch/it"): associa uno schizzo alla geometria selezionata.

- ![](/images/Sketcher_ReorientSketch.svg) [Riposiziona schizzo](/Sketcher_ReorientSketch/it "Sketcher ReorientSketch/it"): posiziona uno schizzo su uno dei piani principali con un offset opzionale. Può essere utilizzato anche per staccare uno schizzo.

- ![](/images/Sketcher_ValidateSketch.svg) [Convalida lo schizzo](/Sketcher_ValidateSketch/it "Sketcher ValidateSketch/it"): Può analizza e riparare uno schizzo che non è più modificabile o ha vincoli non validi o aggiungere vincoli coincidenti mancanti.

- ![](/images/Sketcher_MergeSketches.svg) [Unisci schizzi](/Sketcher_MergeSketches/it "Sketcher MergeSketches/it"): Unisce due o più schizzi.

- ![](/images/Sketcher_MirrorSketch.svg) [Rifletti schizzo](/Sketcher_MirrorSketch/it "Sketcher MirrorSketch/it"): Specchia gli schizzi lungo i loro assi X, Y o l'origine.

#### Barra degli strumenti in Modalità modifica di Sketcher

- ![](/images/Sketcher_LeaveSketch.svg) [Esci](/Sketcher_LeaveSketch/it "Sketcher LeaveSketch/it"): Termina la modalità di modifica dello schizzo e chiude la finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").

- ![](/images/Sketcher_ViewSketch.svg) [Vista normale allo schizzo](/Sketcher_ViewSketch/it "Sketcher ViewSketch/it"): allinea la [Vista 3D](/3D_view/it "3D view/it") con lo schizzo.

- ![](/images/Sketcher_ViewSection.svg) [Vista in sezione](/Sketcher_ViewSection/it "Sketcher ViewSection/it"): attiva o disattiva un piano di sezione temporaneo che nasconde eventuali oggetti e parti di oggetti davanti al piano dello schizzo.

#### Barra degli strumenti di modifica di Sketcher

- ![](/images/Sketcher_Grid.svg) [Attiva/Disattiva la griglia](/Sketcher_Grid/it "Sketcher Grid/it"): attiva o disattiva la griglia nello schizzo attualmente in fase di modifica. Le impostazioni possono essere modificate nel relativo menu. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/Sketcher_Snap.svg) [Attiva/Disattiva aggancio](/Sketcher_Snap/it "Sketcher Snap/it"): Attiva/disattiva l'aggancio (snap) in tutti gli schizzi. Le impostazioni possono essere modificate nel relativo menu. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/Sketcher_RenderingOrder.svg) [Configura l'ordine di rendering](/Sketcher_RenderingOrder/it "Sketcher RenderingOrder/it"): L'ordine di rendering di tutti gli schizzi può essere modificato nel relativo menu. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

#### Altro

- ![](/images/Sketcher_StopOperation.svg) [Interrompi l'operazione](/Sketcher_StopOperation/it "Sketcher StopOperation/it"): Arresta qualsiasi geometria attualmente in esecuzione o strumento di creazione di vincoli.

### Geometrie Sketcher

Gli strumenti per creare gli oggetti.

- ![](/images/Sketcher_CreatePoint.svg) [Punto](/Sketcher_CreatePoint/it "Sketcher CreatePoint/it"): Crea un punto.

- ![](/images/Sketcher_CreatePolyline.svg) [Polilinea](/Sketcher_CreatePolyline/it "Sketcher CreatePolyline/it"): Crea una serie di segmenti di linea e arco collegati dai loro punti finali. Lo strumento ha diverse modalità.

- ![](/images/Sketcher_CreateLine.svg) [Linea](/Sketcher_CreateLine/it "Sketcher CreateLine/it"): Crea una linea. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): lo strumento ha tre modalità.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea arco:

- ![](/images/Sketcher_CreateArc.svg) [Arco dal centro](/Sketcher_CreateArc/it "Sketcher CreateArc/it"): Crea un arco in base al suo centro e ai suoi punti finali. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): O dai suoi punti finali e da un punto lungo l'arco.

- ![](/images/Sketcher_Create3PointArc.svg) [Arco per tre punti](/Sketcher_Create3PointArc/it "Sketcher Create3PointArc/it"): Disegna un arco da due punti finali e un punto della circonferenza.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arco di ellisse](/Sketcher_CreateArcOfEllipse/it "Sketcher CreateArcOfEllipse/it"): Crea un arco di ellisse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arco di iperbole](/Sketcher_CreateArcOfHyperbola/it "Sketcher CreateArcOfHyperbola/it"): Crea un arco di iperbole.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arco di parabola](/Sketcher_CreateArcOfParabola/it "Sketcher CreateArcOfParabola/it"): Crea un arco di parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea cerchio/ellisse:

- ![](/images/Sketcher_CreateCircle.svg) [Cerchio dal centro](/Sketcher_CreateCircle/it "Sketcher CreateCircle/it"): Crea un cerchio in base al suo centro e un punto lungo la circonferenza. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): O da tre punti lungo la circonferenza.

- ![](/images/Sketcher_Create3PointCircle.svg) [Cerchio per 3 punti](/Sketcher_Create3PointCircle/it "Sketcher Create3PointCircle/it"): Crea un cerchio per tre punti lungo la circonferenza. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Questo è lo stesso strumento di [Cerchio dal centro](/Sketcher_CreateCircle/it "Sketcher CreateCircle/it") ma con una modalità iniziale diversa.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellisse dal centro](/Sketcher_CreateEllipseByCenter/it "Sketcher CreateEllipseByCenter/it"): Crea un'ellisse in base al centro, un punto finale di uno dei suoi assi e un punto lungo l'ellisse. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): O da entrambi i punti finali di uno dei suoi assi e da un punto lungo l'ellisse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellisse per 3 punti](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Crea un'ellisse in base ai punti finali di uno dei suoi assi e un punto lungo l'ellisse. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Questo è lo stesso strumento di [Ellisse dal centro](/Sketcher_CreateEllipseByCenter/it "Sketcher CreateEllipseByCenter/it") ma con una modalità iniziale diversa.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea rettangolo:

- ![](/images/Sketcher_CreateRectangle.svg) [Rettangolo](/Sketcher_CreateRectangle/it "Sketcher CreateRectangle/it"): Crea un rettangolo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): lo strumento ha quattro modalità. Gli angoli arrotondati e la creazione di una copia sfalsata sono funzioni opzionali.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Rettangolo centrato](/Sketcher_CreateRectangle_Center/it "Sketcher CreateRectangle Center/it"): Crea un rettangolo centrato. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Questo è lo stesso strumento di [Rettangolo](/Sketcher_CreateRectangle/it "Sketcher CreateRectangle/it") ma con una modalità iniziale diversa.

- ![](/images/Sketcher_CreateOblong.svg) [Rettangolo arrotondato](/Sketcher_CreateOblong/it "Sketcher CreateOblong/it"): Crea un rettangolo arrotondato. Idem.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea poligono regolare:

- ![](/images/Sketcher_CreateTriangle.svg) [Triangolo](/Sketcher_CreateTriangle/it "Sketcher CreateTriangle/it"): crea un triangolo equilatero. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Questo è lo stesso strumento di [Poligono regolare](/Sketcher_CreateRegularPolygon/it "Sketcher CreateRegularPolygon/it") ma con il numero di lati preimpostato su un valore specifico.

- ![](/images/Sketcher_CreateSquare.svg) [Quadrato](/Sketcher_CreateSquare/it "Sketcher CreateSquare/it"): Crea un quadrato. Idem.

- ![](/images/Sketcher_CreatePentagon.svg) [Pentagono](/Sketcher_CreatePentagon/it "Sketcher CreatePentagon/it"): Crea un pentagono. Idem.

- ![](/images/Sketcher_CreateHexagon.svg) [Esagono](/Sketcher_CreateHexagon/it "Sketcher CreateHexagon/it"): Crea un esagono. Idem.

- ![](/images/Sketcher_CreateHeptagon.svg) [Ettagono](/Sketcher_CreateHeptagon/it "Sketcher CreateHeptagon/it"): Crea un ettagono. Idem.

- ![](/images/Sketcher_CreateOctagon.svg) [Ottagono](/Sketcher_CreateOctagon/it "Sketcher CreateOctagon/it"): Crea un ottagono. Idem.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Poligono regolare](/Sketcher_CreateRegularPolygon/it "Sketcher CreateRegularPolygon/it"): crea un poligono regolare. È possibile specificare il numero dei lati.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Asola:

- ![](/images/Sketcher_CreateSlot.svg) [Asola](/Sketcher_CreateSlot/it "Sketcher CreateSlot/it"): Crea un'asola.

- ![](/images/Sketcher_CreateArcSlot.svg) [Asola ad arco](/Sketcher_CreateArcSlot/it "Sketcher CreateArcSlot/it"): Crea un'asola ad arco. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline dai punti di controllo](/Sketcher_CreateBSpline/it "Sketcher CreateBSpline/it"): Crea una curva B-spline dai punti di controllo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): O per punti nodo.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [B-spline periodica dai punti di controllo](/Sketcher_CreatePeriodicBSpline/it "Sketcher CreatePeriodicBSpline/it"): Crea una curva B-spline periodica (chiusa) dai punti di controllo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Questo è lo stesso strumento di [B-spline dai punti di controllo](/Sketcher_CreateBSpline/it "Sketcher CreateBSpline/it") ma con una modalità iniziale diversa.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline per i nodi](/Sketcher_CreateBSplineByInterpolation/it "Sketcher CreateBSplineByInterpolation/it"): Crea una curva B-spline per i punti nodo. Idem

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [B-spline periodica per i nodi](/Sketcher_CreatePeriodicBSplineByInterpolation/it "Sketcher CreatePeriodicBSplineByInterpolation/it"): crea una curva B-spline periodica (chiusa) per i punti nodo. Idem.

- ![](/images/Sketcher_ToggleConstruction.svg) [Geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it"): Attiva/disattiva gli strumenti di creazione della geometria nella/dalla modalità di costruzione oppure attiva/disattiva la geometria selezionata nella/dalla geometria di costruzione.

### Vincoli dello Schizzo

Questi sono strumenti per creare [vincoli](#Constraints/it). Alcuni vincoli richiedono l'uso di [Vincoli di supporto](/Sketcher_helper_constraint/it "Sketcher helper constraint/it").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Vincoli dimensionali:

- ![](/images/Sketcher_Dimension.svg) [Dimensione](/Sketcher_Dimension/it "Sketcher Dimension/it"): E' lo strumento di vincolo sensibile al contesto dell'ambiente Sketcher. In base alla selezione attuale, offre vincoli dimensionali adeguati, ma anche vincoli geometrici. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it"): Fissa la distanza orizzontale tra due punti o i punti finali di una linea. Se viene preselezionato un punto singolo, la distanza è relativa all'origine dello schizzo.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it"): Fissa la distanza verticale tra due punti o i punti finali di una linea. Se viene preselezionato un punto singolo, la distanza è relativa all'origine dello schizzo.

- ![](/images/Sketcher_ConstrainDistance.svg) [Distanza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it"): Fissa la lunghezza di una linea, la distanza tra due punti, la distanza perpendicolare tra un punto e una linea; oppure, [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"), la distanza tra i bordi di due cerchi o archi, o tra il bordo di un cerchio o arco e una linea; o, [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"), la lunghezza di un arco.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Raggio/diametro automatico](/Sketcher_ConstrainRadiam/it "Sketcher ConstrainRadiam/it"): Fissa il raggio degli archi e dei cerchi di peso B-spline e il diametro dei cerchi.

- ![](/images/Sketcher_ConstrainRadius.svg) [Raggio](/Sketcher_ConstrainRadius/it "Sketcher ConstrainRadius/it"): Fissa il raggio di cerchi, archi e cerchi di peso B-spline.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diametro](/Sketcher_ConstrainDiameter/it "Sketcher ConstrainDiameter/it"): Fissa il diametro di cerchi e archi.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angolo](/Sketcher_ConstrainAngle/it "Sketcher ConstrainAngle/it"): Fissa l'angolo tra due bordi, l'angolo di una linea con l'asse orizzontale dello schizzo o l'angolo di apertura di un arco circolare.

- ![](/images/Sketcher_ConstrainLock.svg) [Fissa](/Sketcher_ConstrainLock/it "Sketcher ConstrainLock/it"): Applica i vincoli [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it") e [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it") ai punti. Se viene selezionato un singolo punto, i vincoli fanno riferimento all'origine dello schizzo. Se vengono selezionati due o più punti, i vincoli fanno riferimento all'ultimo punto della selezione.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincidente (unificato)](/Sketcher_ConstrainCoincidentUnified/it "Sketcher ConstrainCoincidentUnified/it"): Crea un vincolo coincidente tra punti, fissa punti su bordi o assi o crea un vincolo concentrico. Combina gli strumenti [Coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") e [Punto sull'oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it"). [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"): Crea un vincolo coincidente tra punti o un vincolo concentrico.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it"): Fissa i punti sui bordi o sugli assi.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Vincoli orizzontali/verticali:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Orizzontale/verticale](/Sketcher_ConstrainHorVer/it "Sketcher ConstrainHorVer/it"): Vincola le linee o le coppie di punti ad essere orizzontali o verticali, a seconda di quale sia il più vicino all'allineamento corrente. Combina gli strumenti [Orizzontale](/Sketcher_ConstrainHorizontal/it "Sketcher ConstrainHorizontal/it") e [Verticale](/Sketcher_ConstrainVertical/it "Sketcher ConstrainVertical/it"). [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Orizzontale](/Sketcher_ConstrainHorizontal/it "Sketcher ConstrainHorizontal/it"): Vincola le linee o le coppie di punti ad essere orizzontali.

- ![](/images/Sketcher_ConstrainVertical.svg) [Verticale](/Sketcher_ConstrainVertical/it "Sketcher ConstrainVertical/it"): Vincola le linee o le coppie di punti ad essere verticali.

- ![](/images/Sketcher_ConstrainParallel.svg) [Parallelo](/Sketcher_ConstrainParallel/it "Sketcher ConstrainParallel/it"): Vincola le linee ad essere parallele.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Perpendicolare](/Sketcher_ConstrainPerpendicular/it "Sketcher ConstrainPerpendicular/it"): Vincola due linee ad essere perpendicolari, o due bordi, o un bordo e un asse, ad essere perpendicolari alla loro intersezione. Il vincolo può anche connettere due bordi, costringendoli ad essere perpendicolari in corrispondenza del giunto.

- ![](/images/Sketcher_ConstrainTangent.svg) [Tangente o collineare](/Sketcher_ConstrainTangent/it "Sketcher ConstrainTangent/it"): Vincola due bordi, o un bordo e un asse, ad essere tangenti. Il vincolo può anche connettere due bordi, costringendoli ad essere tangenti in corrispondenza del giunto. Se vengono selezionate due linee, vengono rese collineari.

- ![](/images/Sketcher_ConstrainEqual.svg) [Uguale](/Sketcher_ConstrainEqual/it "Sketcher ConstrainEqual/it"): Vincola i bordi ad avere la stessa lunghezza (linee) o curvatura (altri bordi eccetto le B-spline).

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Simmetrico](/Sketcher_ConstrainSymmetric/it "Sketcher ConstrainSymmetric/it"): Vincola due punti in modo che siano simmetrici intorno ad una linea o asse o intorno ad un terzo punto.

- ![](/images/Sketcher_ConstrainBlock.svg) [Blocca](/Sketcher_ConstrainBlock/it "Sketcher ConstrainBlock/it"): Blocca i bordi sul posto con un singolo vincolo. È destinato principalmente alle B-spline.

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Rifrazione (legge di Snell)](/Sketcher_ConstrainSnellsLaw/it "Sketcher ConstrainSnellsLaw/it"): Vincola due linee a seguire la legge di rifrazione della luce mentre penetra attraverso un'interfaccia.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Attiva/disattiva i vincoli:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Attiva/disattiva vincolo di guida/riferimento](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"): Attiva/disattiva gli strumenti di creazione dei vincoli dimensionali tra la modalità guida e quella di riferimento oppure attiva/disattiva i vincoli dimensionali selezionati tra tali modalità.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Attiva/disattiva vincolo](/Sketcher_ToggleActiveConstraint/it "Sketcher ToggleActiveConstraint/it"): Attiva/disattiva i vincoli selezionati.

### Strumenti dello Sketcher

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea raccordo/smusso:

- ![](/images/Sketcher_CreateFillet.svg) [Raccordo](/Sketcher_CreateFillet/it "Sketcher CreateFillet/it"): Crea un raccordo tra due bordi non paralleli. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Lo strumento può anche creare uno smusso.

- ![](/images/Sketcher_CreateChamfer.svg) [Smusso](/Sketcher_CreateChamfer/it "Sketcher CreateChamfer/it"): Crea uno smusso tra due bordi non paralleli. È lo stesso strumento di [Raccordo](/Sketcher_CreateFillet/it "Sketcher CreateFillet/it") ma con una modalità iniziale diversa. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Modifica bordo:

- ![](/images/Sketcher_Trimming.svg) [Rifila](/Sketcher_Trimming/it "Sketcher Trimming/it"): rifila/taglia un bordo alle intersezioni più vicine con altri bordi.

- ![](/images/Sketcher_Split.svg) [Dividi](/Sketcher_Split/it "Sketcher Split/it"): Divide un bordo trasferendo la maggior parte dei vincoli.

- ![](/images/Sketcher_Extend.svg) [Estendi](/Sketcher_Extend/it "Sketcher Extend/it"): Estende o accorcia una linea o un arco in una posizione arbitraria o su un bordo o punto di destinazione.

- ![](/images/Sketcher_External.svg) [Geometria esterna](/Sketcher_External/it "Sketcher External/it"): proietta bordi e/o vertici appartenenti ad oggetti esterni allo schizzo sul piano dello schizzo. versione 1.0 e precedenti

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Geometria esterna:

- ![](/images/Sketcher_Projection.svg) [Crea geometria di proiezione esterna](/Sketcher_Projection/it "Sketcher Projection/it"): Crea bordi di proiezione della geometria esterna. [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")

- ![](/images/Sketcher_Intersection.svg) [Crea geometria di intersezione esterna](/Sketcher_Intersection/it "Sketcher Intersection/it"): Crea bordi di intersezione della geometria esterna con il piano dello schizzo. [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")

- ![](/images/Sketcher_CarbonCopy.svg) [Copia carbone](/Sketcher_CarbonCopy/it "Sketcher CarbonCopy/it"): Copia tutta la geometria e i vincoli da un altro schizzo nello schizzo attivo.

- ![](/images/Sketcher_SelectOrigin.svg) [Seleziona l'origine](/Sketcher_SelectOrigin/it "Sketcher SelectOrigin/it"): Seleziona l'origine dello schizzo.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Seleziona l'asse orizzontale](/Sketcher_SelectHorizontalAxis/it "Sketcher SelectHorizontalAxis/it"): Seleziona l'asse orizzontale dello schizzo.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Seleziona l'asse verticale](/Sketcher_SelectVerticalAxis/it "Sketcher SelectVerticalAxis/it"): Seleziona l'asse verticale dello schizzo.

- ![](/images/Sketcher_Translate.svg) [Sposta / Trasformazione serie](/Sketcher_Translate/it "Sketcher Translate/it"): sposta o, facoltativamente, crea copie degli elementi selezionati. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_Rotate.svg) [Trasformazione polare](/index.php?title=Sketcher_Rotate/it&action=edit&redlink=1 "Sketcher Rotate/it (page does not exist)"): Ruota o, facoltativamente, crea copie ruotate degli elementi selezionati. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_Scale.svg) [Trasformazione scala](/index.php?title=Sketcher_Scale/it&action=edit&redlink=1 "Sketcher Scale/it (page does not exist)"): Scala o, facoltativamente, crea copie scalate degli elementi selezionati. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_Offset.svg) [Offset della geometria](/index.php?title=Sketcher_Offset/it&action=edit&redlink=1 "Sketcher Offset/it (page does not exist)"): Crea bordi equidistanti attorno ai bordi selezionati. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Sketcher_Symmetry.svg) [Simmetria](/Sketcher_Symmetry/it "Sketcher Symmetry/it"): Crea copie speculari degli elementi selezionati.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Rimuove l'allineamento degli assi](/Sketcher_RemoveAxesAlignment/it "Sketcher RemoveAxesAlignment/it"): Rimuovere l'allineamento degli assi mentre cerca di preservare la relazione di vincolo della selezione. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Elimina tutte le geometrie](/Sketcher_DeleteAllGeometry/it "Sketcher DeleteAllGeometry/it"): Elimina tutte le geometrie e tutti i vincoli dallo schizzo.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Elimina tutti i vincoli](/Sketcher_DeleteAllConstraints/it "Sketcher DeleteAllConstraints/it"): Elimina tutti i vincoli dallo schizzo.

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Strumenti Sketcher B-spline

- ![](/images/Sketcher_BSplineApproximate.svg) [Converti la geometria in B-spline](/Sketcher_BSplineApproximate/it "Sketcher BSplineApproximate/it"): Converte una geometria, i bordi e le curve compatibili in una B-spline.

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Aumenta il grado della B-spline](/Sketcher_BSplineIncreaseDegree/it "Sketcher BSplineIncreaseDegree/it"): Aumenta il grado (ordine) di una B-spline.

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Diminuisci il grado della B-spline](/index.php?title=Sketcher_BSplineDecreaseDegree/it&action=edit&redlink=1 "Sketcher BSplineDecreaseDegree/it (page does not exist)"): Diminuisce il grado (ordine) di una B-spline.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Aumenta la molteplicità di nodo](/Sketcher_BSplineIncreaseKnotMultiplicity/it "Sketcher BSplineIncreaseKnotMultiplicity/it"): Aumenta la molteplicità di un nodo B-spline.

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Diminuisci la molteplicità](/Sketcher_BSplineDecreaseKnotMultiplicity/it "Sketcher BSplineDecreaseKnotMultiplicity/it"): Diminuisce la molteplicità di un nodo B-spline.

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Inserisci il nodo](/index.php?title=Sketcher_BSplineInsertKnot/it&action=edit&redlink=1 "Sketcher BSplineInsertKnot/it (page does not exist)"): Inserisce un nodo in una B-spline esistente. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

- ![](/images/Sketcher_JoinCurves.svg) [Unisci curve](/index.php?title=Sketcher_JoinCurves/it&action=edit&redlink=1 "Sketcher JoinCurves/it (page does not exist)"): Unisce due curve nei punti finali selezionati. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

### Visualizzazione dello Schizzo

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Seleziona i DOF svincolati](/Sketcher_SelectElementsWithDoFs/it "Sketcher SelectElementsWithDoFs/it"): Evidenzia in verde la geometria con gradi di libertà (DOFs), cioè non completamente vincolata.

- ![](/images/Sketcher_SelectConstraints.svg) [Seleziona i vincoli associati](/Sketcher_SelectConstraints/it "Sketcher SelectConstraints/it"): Seleziona i vincoli di un elemento dello schizzo.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Seleziona la geometria associata](/Sketcher_SelectElementsAssociatedWithConstraints/it "Sketcher SelectElementsAssociatedWithConstraints/it"): Evidenzia gli elementi dello schizzo associati ai vincoli selezionati.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Seleziona i vincoli ridondanti](/Sketcher_SelectRedundantConstraints/it "Sketcher SelectRedundantConstraints/it"): Seleziona i vincoli ridondanti di uno schizzo.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Seleziona i vincoli in conflitto](/Sketcher_SelectConflictingConstraints/it "Sketcher SelectConflictingConstraints/it"): Seleziona i vincoli in conflitto di uno schizzo.

- ![](/images/Sketcher_ArcOverlay.svg) [Mostra/nascondi l'aiuto circolare per gli archi](/index.php?title=Sketcher_ArcOverlay/it&action=edit&redlink=1 "Sketcher ArcOverlay/it (page does not exist)"): TBD. [disponibile dalla versione 0.22](/Release_notes_0.22/it "Release notes 0.22/it")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Mostra/nascondi i gradi della B-spline](/Sketcher_BSplineDegree/it "Sketcher BSplineDegree/it"): Mostra o nasconde la visualizzazione del grado di una B-spline.

- ![](/images/Sketcher_BSplinePolygon.svg) [Mostra/nascondi i poligoni di controllo della B-spline](/Sketcher_BSplinePolygon/it "Sketcher BSplinePolygon/it"): Mostra o nasconde la visualizzazione del poligono che definisce una B-spline.

- ![](/images/Sketcher_BSplineComb.svg) [Mostra/nascondi il pettine di curvatura](/Sketcher_BSplineComb/it "Sketcher BSplineComb/it"): Mostra o nasconde la visualizzazione del pettine di curvatura di una B-spline.

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Mostra/nascondi le molteplicità di nodo B-spline](/Sketcher_BSplineKnotMultiplicity/it "Sketcher BSplineKnotMultiplicity/it"): Mostra o nasconde la visualizzazione della molteplicità dei nodi di una B-spline.

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Mostra/nascondi il valore dei punti di controllo delle B-spline](/Sketcher_BSplinePoleWeight/it "Sketcher BSplinePoleWeight/it") : Mostra o nasconde la visualizzazione dei pesi per i punti di controllo di una B-spline.

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Mostra/nascondi la geometria interna](/Sketcher_RestoreInternalAlignmentGeometry/it "Sketcher RestoreInternalAlignmentGeometry/it"): Ricrea la geometria interna mancante o eliminata non necessaria di un'ellisse selezionata, o arco di ellisse o iperbole o parabola o B-spline.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Cambia spazio virtuale](/Sketcher_SwitchVirtualSpace/it "Sketcher SwitchVirtualSpace/it"): Permette di nascondere i vincoli e renderli nuovamente visibili.

### Strumenti obsoleti

- ![](/images/Sketcher_Clone.svg) [Clona](/Sketcher_Clone/it "Sketcher Clone/it"): Clona un elemento dello schizzo.

- ![](/images/Sketcher_CloseShape.svg) [Chiudi forma](/Sketcher_CloseShape/it "Sketcher CloseShape/it"): Crea una forma chiusa applicando vincoli coincidenti ai punti finali. Non disponibile dalla versione 0.21 e superiori.

- ![](/images/Sketcher_CreatePointFillet.svg) [Raccorda schizzo preservando i vincoli](/Sketcher_CreatePointFillet/it "Sketcher CreatePointFillet/it"): Crea un raccordo tra due linee non parallele preservandone l'intersezione (virtuale).

- ![](/images/Sketcher_ConnectLines.svg) [Collega segmenti](/Sketcher_ConnectLines/it "Sketcher ConnectLines/it"): Collega gli elementi dello sketcher applicando vincoli coincidenti ai punti finali. Non disponibile dalla versione 0.21 e superiori.

- ![](/images/Sketcher_Copy.svg) [Copia](/Sketcher_Copy/it "Sketcher Copy/it"): Copia un elemento dello schizzo.

- ![](/images/Sketcher_Move.svg) [Sposta](/Sketcher_Move/it "Sketcher Move/it"): Sposta la geometria selezionata prendendo come riferimento l'ultimo punto selezionato.

- ![](/images/Sketcher_RectangularArray.svg) [Matrice rettangolare](/Sketcher_RectangularArray/it "Sketcher RectangularArray/it"): Crea una matrice con gli elementi dello schizzo selezionati.

## Preferenze

- ![](/images/Workbench_Sketcher.svg) [Preferences...](/Sketcher_Preferences/it "Sketcher Preferences/it"): Preferenze disponibili per l'ambiente Sketcher.

## Migliori Pratiche

Ogni utente CAD, nel corso del tempo, sviluppa un proprio modo di lavorare, ma ci sono alcuni criteri generali che è utile seguire.

- Una serie di schizzi semplici è più facile da gestire rispetto a un unico schizzo molto complesso. Ad esempio, si può creare un primo schizzo per produrre (con una estrusione o una rivoluzione) la forma 3D di base, poi un secondo schizzo per eseguire i fori o le aperture (tasche). Alcuni dettagli possono essere omessi e realizzati in seguito come operazioni 3D. È possibile decidere di evitare gli smussi nel disegno, se ce ne sono troppi, e aggiungerli dopo come caratteristica 3D.
- Creare sempre un profilo chiuso altrimenti il disegno non produrrà un solido, bensì una serie di facce aperte. Quando si desidera escludere alcuni oggetti nella creazione del solido, trasformarli in elementi di costruzione con lo strumento **Modalità costruzione**.
- Utilizzare la funzione **Vincoli automatici** per ridurre il numero di vincoli da inserire manualmente.
- Come regola generale, si applicano prima i vincoli geometrici, poi i vincoli dimensionali, e infine si blocca il disegno. Da ricordare: le regole sono fatte per essere infrante. Quando ci sono difficoltà nel manipolare il disegno, può essere utile vincolare alcuni oggetti prima di completare il profilo.
- Se possibile, centrare il disegno nell'origine (0,0) con il vincolo **Blocca**. Se il disegno non è simmetrico, posizionare uno dei suoi punti nell'origine, o scegliere una cifra tonda semplice per le distanze di blocco.
- Se c'è la possibilità di scegliere tra il vincolo [lunghezza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it") ![](/images/Sketcher_ConstrainDistance.png) e il vincolo [distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it") ![](/images/Sketcher_ConstrainDistanceX.png) o [distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it") ![](/images/Constraint_Vertical.png), preferire questi ultimi. I vincoli di distanza orizzontale e verticale sono computazionalmente più economici.
- In generale, i vincoli migliori da utilizzare sono: Orizzontale e Verticale, Lunghezza Orizzontale e Verticale, Tangente nel punto. Se possibile, limitare l'uso di questi vincoli: Lunghezza generica, Tangenza Edge-to-edge, Punto su linea; Simmetria.
- In caso di dubbi sulla validità di uno schizzo una volta completato (le funzioni diventano verdi), chiudere la finestra di dialogo di Sketcher, passare a ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") ed eseguire ![](/images/Part_CheckGeometry.svg) [Controlla la geometria](/Part_CheckGeometry/it "Part CheckGeometry/it").

## Tutorial

- [Sketcher Lecture](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) by chrisb. Questo è un documento PDF lungo più di 80 pagine che funge da manuale dettagliato per lo Sketcher. Spiega le basi dell'utilizzo di Sketcher e approfondisce la creazione di forme geometriche e ciascuno dei vincoli.
- [Tutorial base di Sketcher](/Basic_Sketcher_Tutorial/it "Basic Sketcher Tutorial/it") per principianti
- [Sketcher Micro Tutorial - Pratica con i vincoli](/Sketcher_Micro_Tutorial_-_Constraint_Practices/it "Sketcher Micro Tutorial - Constraint Practices/it")
- [Requisiti di uno schizzo](/Sketcher_requirement_for_a_sketch/it "Sketcher requirement for a sketch/it") Requisito minimo per uno schizzo e definizione completa di uno schizzo

## Script

La pagina [scripting](/Sketcher_scripting/it "Sketcher scripting/it") contiene esempi su come creare vincoli da script Python.

## Esempi

Per alcune idee su cosa si può ottenere con gli strumenti di Sketcher, dai un'occhiata a: [Esempi di Sketcher](/index.php?title=Sketcher_Examples/it&action=edit&redlink=1 "Sketcher Examples/it (page does not exist)").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/it&oldid=1544187>"
