---
title: Visualizzaː Taglio sezione persistente
---
|  |
| --- |
| Taglio sezione persistente |
| Posizione nel menu |
| Visualizza → Taglio sezione persistente |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.20 |
| Vedere anche |
| [Piano di taglio](/Std_ToggleClipPlane/it "Std ToggleClipPlane/it") |
|  |

## Descrizione

La funzione **Taglio sezione persistente** è disponibile per tutti gli ambienti di lavoro, ma funziona solo per gli oggetti Part e PartDesign e per i relativi assiemi. Crea un taglio persistente di oggetti e assemblaggi. Poiché il risultato del taglio è un normale oggetto ![](/images/Part_Cut.svg) [Sottrazione Booleana](/Part_Cut/it "Part Cut/it"), può essere ulteriormente modificato o, ad esempio, stampato in 3D. Vedere sotto per le possibili applicazioni.

![](/images/Part_SectionCut_example.png)

Un'assieme tagliato. Alcune facce tagliate sono state colorate manualmente. La parte gialla non è tagliata perché è stata volutamente spostata di un micron in un'altra parte.

## Utilizzo

![](/images/Part_SectionCut_Dialog.png)

La finestra di dialogo Taglio sezione persistente.

La finestra di dialogo **Taglio sezione persistente** si apre tramite il menu **Visualizza → ![](/images/Part_SectionCut.svg) Taglio sezione persistente**. È indipendente dall'ambiente di lavoro corrente e dal documento attualmente aperto. Può essere staccato dalla sua posizione di apertura premendo il pulsante in alto a destra nella finestra di dialogo.

La funzione **Taglio sezione persistente** prende in considerazione tutti gli oggetti Part attualmente visibili nel documento attivo. Pertanto è possibile controllare cosa verrà tagliato, rendendo visibile o meno una parte. Selezionando una delle opzioni **Taglio** nella finestra di dialogo la funzione viene attivata. È quindi possibile inserire una posizione (nelle coordinate del documento) o utilizzare i cursori per impostare la posizione di taglio. È anche possibile combinare i tagli, ad esempio per tagliare in direzione X e Z. I bottoni Inverti capovolgono il lato tagliato.

Non appena l'opzione **Taglio** è spuntata nella finestra di dialogo, si ottiene un oggetto tagliato nella [vista ad albero](/Tree_view/it "Tree view/it"). Il suo nome è ad es. *SectionCutY* quando si tratta di un taglio in direzione Y.

L'opzione di dialogo **Mantieni visibili solo i tagli alla chiusura** nasconde tutto nella vista ad albero tranne l'oggetto tagliato quando si fa clic sul pulsante Chiudi per chiudere la finestra di dialogo.

Per rimuovere l'oggetto tagliato, deseleziona tutte le opzioni **Taglio**.

Deselezionando tutte le opzioni **Taglio**, il pulsante Aggiorna vista diventa attivo. Quando viene premuto, acquisisce una sorta di screenshot degli oggetti Part attualmente visibili. Questo sarà usato quando si seleziona la prossima volta un'opzione **Taglio**. L'aggiornamento è necessario quando si cambia documento. È inoltre utile per gli assiemi, dove si volesse nascondere alcune parti o aggiungerle successivamente al taglio. In questo caso l'aggiornamento ricalcola i valori min/max dei cursori e taglia le posizioni in base alle dimensioni dell'oggetto attualmente visibile.

Se l'opzione **Auto** nella sezione Taglia faccia è selezionata, il colore e la trasparenza degli oggetti tagliati saranno presi per la faccia tagliata. Funziona solo se tutti gli oggetti tagliati hanno lo stesso colore o trasparenza.

L'opzione **Taglia oggetti intersecanti** permette di tagliare anche oggetti che si intersecano tra loro. Le intersezioni degli assiemi a volte si verificano per oggetti progettati per toccarsi solo tra loro a causa di problemi di precisione numerica. Lo svantaggio dell'opzione è che tutti gli oggetti visibili avranno lo stesso colore. Questo colore può essere specificato come nella sezione della faccia tagliata della finestra di dialogo.  
Se si necessita del taglio per es. per una bella immagine con diversi colori delle facce, si possono cambiare i loro colori usando lo strumento ![](/images/Part_ColorPerFace.svg) [Colore per faccia](/Part_ColorPerFace/it "Part ColorPerFace/it").

**Nota:** Per gli assiemi i cursori nella finestra di dialogo sono disabilitati (eccetto quello per la trasparenza). Il motivo è che un movimento del cursore comporta molte operazioni di taglio in breve tempo. Per gli assiemi questo consuma rapidamente tutta la potenza della CPU e un movimento del cursore rallentato non è utile.

Quando si seleziona un oggetto tagliato nella vista ad albero e poi si apre la finestra di dialogo Taglio sezione persistente, le posizioni di taglio verranno lette nella finestra di dialogo.

## Applicazioni

* Un caso d'uso importante è che Taglio sezione persistente crea tagli pieni, non vuoti come la funzione ![](/images/Std_ToggleClipPlane.svg) [Piano di taglio](/Std_ToggleClipPlane/it "Std ToggleClipPlane/it").
* Taglio sezione persistente è utile per gli assiemi per visualizzare, ad esempio, il principio di funzionamento di un dispositivo. Si potrebbe quindi voler colorare alcune facce tagliate usando lo strumento ![](/images/Part_ColorPerFace.svg) [Colore per faccia](/Part_ColorPerFace/it "Part ColorPerFace/it"). Per utilizzare lo strumento, passare all'ambiente Part o PartDesign, fare clic con il pulsante destro del mouse sull'oggetto tagliato nella vista ad albero e selezionare nel menu contestuale **Imposta colori**.
* Senza l'opzione **Taglia oggetti intersecanti** verranno tagliate solo le parti che non si intersecano con altre. Questo può essere usato come un test di collisione.
* La funzione Taglio sezione persistente può essere utilizzata per i disegni tecnici per evidenziare determinate aree o per poter disegnare le quote. L'immagine seguente mostra un esempio in cui [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") include l'utilizzo di ![](/images/TechDraw_ActiveView.svg) [Vista attiva](/TechDraw_ActiveView/it "TechDraw ActiveView/it") e ![](/images/TechDraw_View.svg)  [Vista](/TechDraw_View/it "TechDraw View/it").

![](/images/Part_SectionCut_TD-example.png)

Un disegno tecnico in cui viene utilizzato un Taglio sezione persistente. (Cliccare sull'immagine per ingrandirla.)

## Posizioni di taglio speciali

![](/images/Part_SectionCut_slant-cut.png)

Un taglio obliquo di un assieme.

* Ad esempio nella prima immagine di questa pagina viene tagliato solo un quarto dell'assieme. Questo è stato fatto creando un taglio in direzione X. Quindi nell'oggetto tagliato risultante **SectionCutX** è stato modificato il [Posizionamento](/Placement/it "Placement/it") del suboggetto **SectionCutBoxX**.
* Per ottenere un taglio in qualsiasi direzione, si può procedere come segue:

1. Creare un nuovo contenitore [Part](/Std_Part/it "Std Part/it").
2. Selezionare tutti gli oggetti che si vuol tagliare nella vista ad albero e spostali nel contenitore.
3. Ora impostare il posizionamento del contenitore su una rotazione a propria scelta. Per l'immagine a sinistra, il contenitore è stato ruotato di 45° attorno agli assi X e Z e il taglio della sezione è stato eseguito in direzione X.

## Limitazioni

![](/images/Part_SectionCut_Color-artifact.png)

Un assieme in cui due parti si intersecano e che pertanto non vengono tagliate. Notare gli artefatti di colore sulla faccia tagliata.

* **Importante:** La funzione Taglio sezione persistente funziona male con [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it") 7.4 e precedenti a causa di bug. Si consiglia pertanto di utilizzare OpenCASCADE 7.5 o successivo (tutte le build di FreeCAD versione 0.20 e superiori lo includono).
* versione 1.0 e superiori: L'opzione **Taglia oggetti che si intersecano** colorerà allo stesso modo tutte le parti visibili. Questo tecnicamente non può essere evitato. Tuttavia, se si ha bisogno del taglio persistente per es. una presentazione, vedere il metodo sopra descritto su come reimpostare il colore manualmente.
* versione 0.20 e precedenti: Negli assiemi **le parti che si intersecano tra loro non possono essere tagliate**. Normalmente gli oggetti che si intersecano non verranno tagliati mentre gli altri sì. Tuttavia, a volte il taglio può produrre risultati strani che è un bug nelle librerie OpenCASCADE.  
   Per ottenere una vista tagliata anche per oggetti che si intersecano, si può usare la macro [Sezione dinamica](/Macro_cross_section/it "Macro cross section/it").
* versione 0.20 e precedenti: specialmente quando si utilizza [A2plus](/A2plus_Workbench/it "A2plus Workbench/it"), alcune parti assemblate possono sovrapporsi l'una all'altra di appena un micron a causa di errori di arrotondamento interni. Per risolvere questo problema, aggiungi un micron come spazio nelle impostazioni del vincolo.
* Potrebbero esserci artefatti di colore nel risultato del taglio. Questo dipende dalla libreria OpenCASCADE e anche dalla posizione della vista. In molti casi gli artefatti di colore scompaiono quando la vista 3D viene leggermente ruotata.
* Quando si hanno oggetti tagliati con colori diversi, non è possibile applicare automaticamente il loro colore alle facce tagliate corrispondenti. Tutte le facce tagliate avranno lo stesso colore selezionato nella finestra di dialogo.
* Quando si utilizza [A2plus](/A2plus_Workbench/it "A2plus Workbench/it"), non è possibile applicare automaticamente il colore delle parti assemblate alle corrispondenti facce di taglio. Tutte le facce tagliate avranno lo stesso colore selezionato nella finestra di dialogo. Il motivo è che A2plus non inserisce le parti come [link](/App_Link/it "App Link/it") ma le carica come file.

## Informazioni di sfondo

**Taglio sezione persistente** si ispira alla macro [Sezione dinamica](/Macro_cross_section/it "Macro cross section/it") e funziona tecnicamente in questo modo:

Tutti gli oggetti visibili vengono inseriti in un ![](/images/Part_Compound.svg) [Composto Part](/Part_Compound/it "Part Compound/it"). Per l'opzione **Taglia oggetti intersecanti** viene invece utilizzato un contenitore ![](/images/Part_BooleanFragments.svg) [Part Frammenti booleani](/Part_BooleanFragments/it "Part BooleanFragments/it"). Il composto viene tagliato utilizzando un oggetto ![](/images/Part_Box.svg) [Part Cubo](/Part_Box/it "Part Box/it"). Il cubo scatola deve essere grande quanto basta per coprire l'intero volume di tutti gli oggetti visibili. Per ottenere ciò, viene acquisito il riquadro di delimitazione degli oggetti. Quando si modifica la visualizzazione aggiungendo/rimuovendo oggetti o modificando il documento, è necessario aggiornare il riquadro di delimitazione. Questo viene fatto quando si fa clic sul pulsante Aggiorna visualizzazione.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SectionCut/it&oldid=1470049>"