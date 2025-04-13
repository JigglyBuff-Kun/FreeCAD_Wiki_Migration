---
title: PartDesign Crea un corpo
---
|  |
| --- |
| Corpo |
| Posizione nel menu |
| Part Design → Crea un corpo |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Parte standard](/Std_Part/it "Std Part/it"), [Editazione delle funzioni](/Feature_editing/it "Feature editing/it") |
|  |

## Descrizione

Un Corpo di PartDesign è l'elemento base per creare forme solide con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Può contenere [schizzi](/Sketch/it "Sketch/it"), [oggetti di riferimento](/Datum/it "Datum/it") e [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") che aiutano a produrre un [singolo solido contiguo](#Singolo_solido_contiguo).

Il Corpo fornisce un oggetto **Origin** che include gli assi X,Y,Z, e i piani standard. Questi elementi possono essere usati come riferimenti per collegare gli [schizzi](/Sketch/it "Sketch/it") e gli [oggetti primitivi](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it").

Non confondere un ![](/images/PartDesign_Body.svg) Corpo PartDesign con una ![](/images/Std_Part.svg) [Parte Standard](/Std_Part/it "Std Part/it"). Il primo è un oggetto specifico utilizzato nell' ![](/images/Workbench_PartDesign.svg) [Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"), inteso a modellare un [singolo solido contiguo](#Singolo_solido_contiguo) per mezzo di [Funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"). [Parte](/Std_Part/it "Std Part/it") è un oggetto di raggruppamento destinato a creare [assiemi](/Assembly/it "Assembly/it"); non è usato per modellare, solo per organizzare oggetti diversi nello spazio. I corpi multipli, e altri [Parte](/Std_Part/it "Std Part/it"), possono essere posizionati all'interno di una singola [Parte](/Std_Part/it "Std Part/it") per creare un assieme complesso.

![](/images/PartDesign_Body_tree.png) ![](/images/PartDesign_Body_example.png)

A sinistra: la vista ad albero che mostra le funzioni che producono in sequenza la forma finale dell'oggetto. A destra: l'oggetto finale visibile nella [vista 3D](/3D_view/it "3D view/it").

## Utilizzo

Se non è stato selezionato alcun solido precedente:

1. Premere il pulsante ![](/images/PartDesign_Body.svg) Corpo. Viene creato un corpo vuoto che diventa automaticamente *[attivo](#Stato_attivo)*.
2. Ora si può premere ![](/images/PartDesign_NewSketch.svg) [Nuovo schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it") per creare uno [schizzo](/Sketch/it "Sketch/it") nel corpo. In seguito lo schizzo può essere utilizzato per creare una ![](/images/PartDesign_Pad.svg) [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it").
3. In alternativa, si può aggiungere una [funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") primitiva, ad esempio un ![](/images/PartDesign_AdditiveBox.svg) [Cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it").

Se viene selezionato un oggetto solido:

1. Premere il pulsante ![](/images/PartDesign_Body.svg) Corpo. Viene creato un nuovo Corpo contenente una singola **Base Feature**. Questo elemento Base Feature è un semplice riferimento a un altro oggetto precedentemente creato o importato nel documento. Per maggiori informazioni vedere [Funzione di base](#Funzione_di_base). Non è possibile selezionare un Corpo esistente o una [funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") quando si preme ![](/images/PartDesign_Body.svg) Corpo.

### Note

* Se, quando si preme il pulsante ![](/images/PartDesign_NewSketch.svg) [Nuovo schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it") della barra degli strumenti di PartDesign non esiste ancora un corpo, ne viene creato automaticamente uno nuovo. Se esiste già un corpo, esso deve essere reso attivo prima di usare ![](/images/PartDesign_NewSketch.svg) [Nuovo schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it").
* Fare doppio clic su Corpo nella [vista ad albero](/Tree_view/it "Tree view/it") o aprire il menu di scelta rapida (clic con il tasto destro) e selezionare **Attiva corpo** per attivare o disattivare il corpo. Se un altro corpo è attivo, esso viene disattivato. Per maggiori informazioni vedere [Stato attivo](#Stato_attivo).

## Proprietà

Un Corpo di PartDesign (classe `PartDesign::Body`) è derivato da una [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`), pertanto condivide tutte le proprietà di quest'ultimo.

Oltre alle proprietà descritte in [Part Feature](/Part_Feature/it "Part Feature/it"), il corpo di PartDesign ha le seguenti proprietà nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Dati

Base

* Dati**Tip** (`Link`): è la [funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") definita come "funzione finale", che è in genere l'ultima funzione creata nel corpo. La funzione finale indica la forma finale del corpo, che viene mostrata nella [Vista 3D](/3D_view/it "3D view/it") quando Vista**Display Mode Body** è impostata su `Tip`. Per maggiori informazioni vedere [Tip](#Tip).
* Dati**Base Feature** (`Link`): è una forma esterna usata come prima [funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") nel Corpo. Di solito viene impostata quando si trascina un oggetto solido in un corpo vuoto. Se non viene importato nessun solido in questo modo, questa proprietà rimane vuota. Per maggiori informazioni vedere [Funzione di base](#Funzione_di_base).
* Dati**Placement**: la posizione dell'oggetto nella [Vista 3D](/3D_view/it "3D view/it"). Il posizionamento è definito da un punto `Base` (vettore) e una `Rotation` (asse e angolo). Vedere [Posizionamento](/Placement/it "Placement/it").
* Dati**Group**: un elenco di [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") nel Corpo

#### Proprietà dati nascoste

* Dati**Origin** (`Link`): l'oggetto [App Origin](/App_OriginGroupExtension/it "App OriginGroupExtension/it") che è il riferimento posizionale per tutti gli elementi elencati nel campo Dati**Group**.
* Dati**\_ Group Touched** (`Bool`): se il gruppo viene toccato o no.

Oltre ale proprietà nascoste descritte in [Part Feature](/Part_Feature/it "Part Feature/it") il corpo di PartDesign ha le seguenti proprietà nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

### Vista

Base

* Vista**Display Mode Body** (`Enumeration`): imposta la modalità di visualizzazione nella vista 3D specifica per il corpo in uno dei due tipi.
  + `Through` (default) espone tutti gli oggetti all'interno del Corpo, ovvero [schizzi](/Sketch/it "Sketch/it"), [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"), oggetti di riferimento, ecc. Questa modalità consente di visualizzare le operazioni parziali eseguite all'interno del Corpo, quindi è la modalità raccomandata durante l'aggiunta e la modifica di funzioni. Selezionare la funzione desiderata e impostare Vista**Visibility** su `true` o premere la barra Spazio sulla tastiera.
  + `Tip` espone solo la forma finale del corpo, definita dalla proprietà Dati**Tip**. Tutto il resto, tra cui [schizzi](/Sketch/it "Sketch/it"), [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"), oggetti di riferimento, ecc., non viene visualizzato, anche se sono visibili nella [vista ad albero](/Tree_view/it "Tree view/it"). Questa modalità è consigliata quando non è necessario modificare ulteriormente il corpo, quindi viene visualizzata una forma finale. Questa modalità è consigliata anche quando si desidera selezionare gli elementi secondari (vertici, bordi e facce) della forma finale da utilizzare con gli strumenti di altri ambienti da lavoro.

## Concetto di Corpo

### Singolo solido contiguo

Il corpo PartDesign è progettato per modellare un singolo solido contiguo. Per "contiguo" si intende un elemento realizzato in un unico pezzo, senza parti mobili o solidi disconnessi. Esempi di solidi contigui sono quelli fabbricati da un singolo pezzo di materia prima mediante un processo di fusione, taglio o fresatura. Ad esempio, un dado, una rondella e un bullone sono costituiti ciascuno da un unico pezzo di acciaio solido senza parti mobili, quindi ciascuno di essi può essere modellato come un corpo PartDesign. Gli oggetti creati saldando due pezzi possono anche essere modellati in un singolo corpo, purché il giunto di saldatura non sia destinato a rompersi.

Quando questi solidi contigui vengono riuniti in un qualche tipo di disposizione, diventano un "assemblaggio". In un assemblaggio, gli oggetti non vengono fusi insieme, ma vengono semplicemente "impilati" o posizionati uno accanto all'altro e rimangono singole parti.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

A sinistra: tre solidi contigui individuali, ciascuno modellato in un Corpo di PartDesign. A destra: i singoli Corpi riuniti in un'assemblaggio.

### Editazione delle funzioni

Un corpo di PartDesign è progettato per funzionare creando un solido iniziale, da uno [schizzo](/Sketch/it "Sketch/it") o da una [forma primitiva](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it"), e quindi modificandolo tramite le ["funzioni"](/PartDesign_Feature/it "PartDesign Feature/it") per aggiungere o rimuovere materiale dalla forma precedente. Per una spiegazione completa, vedere la pagina [editazione delle funzioni](/Feature_editing/it "Feature editing/it").

Un corpo di PartDesign esegue una [fusione](/Part_Fuse/it "Part Fuse/it") (unione) automatica degli elementi solidi al suo interno. Ciò significa che (1) i solidi parziali devono toccarsi quando vengono creati e (2) che i solidi disconnessi non sono consentiti.

![](/images/PartDesign_Body_two_intersection.png) ![](/images/PartDesign_Body_two_fusion.png)

A sinistra: due singoli solidi che si intersecano. A destra: un singolo corpo di PartDesign creato con due [funzioni additive](/PartDesign_Feature/it "PartDesign Feature/it"), che vengono automaticamente fuse insieme, quindi invece di intersecarsi, formano un singolo solido contiguo.

![](/images/PartDesign_Body_non-contiguous.png)

A sinistra: due solidi disconnessi; questo non è un corpo PartDesign valido. A destra: due solidi che si toccano; ciò si traduce in un corpo PartDesign valido. La [funzione](/PartDesign_Feature/it "PartDesign Feature/it") più recente deve sempre contattare o intersecare la funzione precedente in modo che sia fusa con essa e diventi un singolo solido contiguo.

*Nota:* altri programmi CAD come Catia consentono solidi non contigui nello stesso "Corpo". A partire dalla versione 0.19, FreeCAD non lo consente. Ci sono state delle discussioni nel [forum di FreeCAD](https://forum.freecadweb.org/index.php) sulla revoca di questa restrizione, ma non è stata presa alcuna decisione concreta. Se desiderate saperne di più o presentare punti di vista diversi, potete discuterne nel [forum](https://forum.freecadweb.org/index.php).

## Spiegazione dettagliata delle proprietà

### Stato attivo

Un documento aperto può contenere più corpi. Per aggiungere una nuova funzione a un corpo specifico, è necessario renderlo *attivo*. Un corpo attivo vinene visualizzato nella [vista ad albero](/Tree_view/it "Tree view/it") con il colore di sfondo specificato dal valore **Active container** nell'[editor delle preferenze](/Preferences_Editor/it#Colori "Preferences Editor/it") (per impostazione predefinita, blu). Un corpo attivo viene anche mostrato in grassetto.

Per attivare o disattivare un corpo:

* Fare doppio clic su di esso nella [vista ad albero](/Tree_view/it "Tree view/it"), oppure
* Aprire il menu contestuale (tasto destro) e selezionare **Attiva/disattiva il corpo**.

L'attivazione di un corpo commuta automaticamente anche l'interfaccia nell'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"), se questo non era già l'ambiente attivo. Può essere attivo solo un singolo corpo per volta.

![](/images/PartDesign_Body_active.png)

Documento con due corpi PartDesign, di cui il secondo è attivo.

### Origine

L'origine è costituita da tre assi standard (X, Y, Z) e tre piani standard (XY, XZ e YZ). Gli [Schizzi](/Sketch/it "Sketch/it") e gli altri oggetti possono essere collegati a questi elementi quando li si crea.

1. Creare un Corpo.
2. Se viene selezionato un Corpo nella [vista ad albero](/Tree_view/it "Tree view/it"), cliccare su ![](/images/PartDesign_NewSketch.svg) [Crea uno schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it"); si aprirà il [pannello delle azioni](/Task_panel/it "Task panel/it") per consentire la selezione di uno dei piani.
3. Se non è stato selezionato un corpo, selezionare l'Origine e renderlo visibile nella [vista 3D](/3D_view/it "3D view/it"), premendo la barra Space sulla tastiera. Espandere anche l'oggetto Origin per vedere gli assi e i piani.
4. Selezionare uno dei piani, nella [vista ad albero](/Tree_view/it "Tree view/it") o nella [vista 3D](/3D_view/it "3D view/it"), quindi premere ![](/images/PartDesign_NewSketch.svg) [Crea uno schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it"). Lo schizzo verrà creato sul piano selezionato.

Lo stesso processo può essere utilizzato durante la creazione di geometrie di riferimento ausiliarie come [Linee PartDesign](/PartDesign_Line/it "PartDesign Line/it"), [Piani PartDesign](/PartDesign_Plane/it "PartDesign Plane/it") e [Sistemi di coordinate PartDesign](/PartDesign_CoordinateSystem/it "PartDesign CoordinateSystem/it").

*Nota:* l'origine è un oggetto [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") (classe `App::Origin`), mentre gli assi e i piani sono oggetti di tipo  `App::Line` e  `App::Plane` rispettivamente. Ognuno di questi elementi può essere nascosto o non nascosto individualmente con la barra Space; questo è utile per scegliere il riferimento corretto quando si creano altri oggetti.

*Nota 2:* tutti gli elementi all'interno del Corpo fanno riferimento all'Origine del Corpo, il che significa che il Corpo può essere spostato e ruotato rispetto al sistema di coordinate globale senza influenzare il posizionamento degli elementi al suo interno.

![](/images/PartDesign_Body_Origin_tree.png) ![](/images/PartDesign_Body_Origin_view.png)

A sinistra: Body Origin di PartDesign nella [vista ad albero](/Tree_view/it "Tree view/it"). A destra: rappresentazione degli elementi Origin nella [vista 3D](/3D_view/it "3D view/it").

### Funzione di base

La Funzione di base, Base feature, è la prima [Funzione PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") creata nel corpo quando il corpo si basa su un'altra forma solida. Questo solido può essere creato in qualsiasi ambiente di lavoro o importato da un file esterno, ad esempio un file STEP.

![](/images/PartDesign_Body_BaseFeature_tree.png)

Due corpi PartDesign, ciascuno con una singola funzione di base ricavata da un solido creato in precedenza.

Per creare la Funzione di base:

1. selezionare una forma solida esterna a qualsiasi Body e
2. premere ![](/images/PartDesign_Body.svg) Crea un corpo; questo creerà un nuovo Corpo con una singola Funzione di base.

*Nota:* non è possibile selezionare un corpo esistente o una qualsiasi delle sue [funzioni](/PartDesign_Feature/it "PartDesign Feature/it"), premendo ![](/images/PartDesign_Body.svg) Corpo.

Se si ha già un Corpo, si può creare una Funzione Base in questo modo:

* nella [vista ad albero](/Tree_view/it "Tree view/it"), selezionare un oggetto, trascinarlo e rilasciarlo all'interno del Corpo, oppure
* nell'[editor delle proprietà](/Property_editor/it "Property editor/it"), modificare il valore di Dati**Base Feature** premendo i puntini di sospensione ... e scegliendo un oggetto dall'elenco. In questo caso si può scegliere un Copro esistente come Funzione Base.

*Nota:* il drag and drop funziona solo per i corpi che non hanno ancora una Funzione Base.

*Nota 2:* se il Corpo ha già diverse funzioni, quando si trascina e rilascia il solido esterno, la Funzione Base verrà creata all'inizio dell'elenco delle funzioni, ovvero verrà aggiunta all'inizio della proprietà Dati**Group**.

La Funzione Base è completamente facoltativa; è presente solo quando si include un oggetto esterno al Corpo. Se non è incluso alcun solido esterno, si può comunque creare la forma utilizzando [schizzi](/Sketch/it "Sketch/it"), [estrusioni](/PartDesign_Pad/it "PartDesign Pad/it"), [oggetti primitivi](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it") e altre [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"). In questo caso la proprietà Dati**Base Feature** rimane vuota.

![](/images/PartDesign_Body_BaseFeature_Tip.svg)

A sinistra: Corpo PartDesign con una funzione di base presa da un oggetto solido esterno e in alto molte [Funzioni PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") successive. A destra: Corpo che non ha una funzione di base esplicita.

*Nota:* Se un altro corpo PartDesign è selezionato come BaseFeature, deve avere una forma. Se è vuoto (nessuna feature, nessuna BaseFeature, ...) questo causerà un errore.

### Tip

La cima o punta (Tip) è la [Funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") del corpo che viene esposta all'esterno (quello che si vede). Viene automaticamente impostata sull'ultima funzione nella parte inferiore dell'albero; vale a dire che, se un altro strumento da un qualsiasi ambiente di lavoro (ad esempio, ![](/images/Part_SimpleCopy.svg) [Crea una copia semplice di Part](/Part_SimpleCopy/it "Part SimpleCopy/it") o ![](/images/Part_Cut.svg) [Taglio di Part](/Part_Cut/it "Part Cut/it")) deve utilizzare la forma del Corpo, utilizzerà la forma del Tip. Detto in altro modo, il Tip è la rappresentazione finale del Corpo come se la storia parametrica non esistesse.

![](/images/PartDesign_Body_Tip_final.svg)

Sinistra: Corpo PartDesign con cronologia parametrica completa, incluse le funzioni intermedie. Destra: il Tip è la forma finale, che può essere esportata dal Corpo, omettendo la cronologia del modello.

Il Tip viene impostato automaticamente sull'ultima funzione creata nel corpo. Tuttavia, può anche essere impostata su una qualsiasi delle funzioni intermedie aprendo il menu contestuale della [vista ad albero](/Tree_view/it "Tree view/it") (clic destro) e scegliendo **![](/images/PartDesign_MoveTip.svg) [Usa come entità finale](/PartDesign_MoveTip/it "PartDesign MoveTip/it")**, oppure modificando il valore Dati**Tip** del corpo nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

Cambiare il Tip in effetti ne ripristina la cronologia, rendendo possibile aggiungere funzionalità che avrebbero dovuto essere aggiunte in precedenza. Espone inoltre una forma diversa agli strumenti esterni.

Nella [vista ad albero](/Tree_view/it "Tree view/it"), la funzione finale del corpo è riconoscibile dalla [funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") che ha una icona sovrapposta costituita da una freccia bianca all'interno di un cerchio verde.

![](/images/PartDesign_Body_Tip_tree.png)

Due corpi PartDesign, ciascuno dei quali con [Funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"). Il Tip è l'ultima funzione in essi contenuta ed è contrassegnata con un simbolo in sovrapposizione.

### Interazione con gli altri ambienti di lavoro

Per impostazione predefinita, le [Funzioni PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") all'interno di un Corpo sono selezionabili, poiché ciò è necessario per modificare e aggiungere altre funzioni con gli strumenti dell' [Ambiente PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Tuttavia, non è consigliabile selezionare le singole funzioni per utilizzarle con strumenti di altri ambienti, come [Part](/Part_Workbench/it "Part Workbench/it") e [Draft](/Draft_Workbench/it "Draft Workbench/it"), poiché i risultati potrebbero essere inaspettati; se ciò viene fatto, nella [vista report](/Report_view/it "Report view/it") potrebbe apparire un messaggio di errore, *Links go out of the allowed scope*.

Pertanto, per le interazioni con gli altri ambienti, dovrebbe essere selezionato solo il Corpo stesso dall'albero del modello. Nei casi in cui è necessario selezionare un sottoelemento specifico del Corpo (vertice, bordo, faccia), allora la proprietà vista Vista**Display Mode Body** del Corpo può essere modificata da *Through* (impostazione predefinita) a `Tip`. Questa proprietà è accessibile dal pannello Vista. In modalità *Tip* l'accesso agli oggetti sottostanti al Corpo (funzioni, riferimenti, schizzi) è disabilitato; nella vista 3D viene nascosto tutto tranne la funzione tip, indipendentemente da quale oggetto è impostato come visibile.

Una volta completate le operazioni in altri ambienti, non dimenticare di ripristinare la proprietà Vista**Display Mode Body** in `Through` per essere di nuovo in grado di modificare il corpo.

![](/images/PartDesign_Body_Tip_Display_mode.svg)

Sinistra: quando "Display Mode Body" è impostato su `Through` è possibile selezionare ed eseguire operazioni con le singole [funzioni PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"); in generale, questo non è consigliato. Destra: quando "Display Mode Body" è impostato su `Tip` tutte le selezioni e le operazioni eseguite sul Body saranno eseguite sulla Tip, assicurando che solo la forma finale del Body sia esposta.

### Gestione della visibilità

La visibilità del corpo prevale sulla visibilità di qualsiasi oggetto in esso contenuto. Se il corpo è nascosto, sono nascosti anche gli oggetti che esso contiene, anche se la loro proprietà Vista**Visibility** è impostata su `true`.

Possono essere visibili più [Schizzi](/Sketch/it "Sketch/it") contemporaneamente, ma può essere visibile solo una [Funzione PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") alla volta (risultato solido). Selezionando una funzione nascosta e premendo la barra Spazio sulla tastiera, la si renderà visibile e automaticamente si nasconderà la funzione che precedentemente era visibile.

![](/images/PartDesign_Body_Visibility.png)

PartDesign Body: più [Schizzi](/Sketch/it "Sketch/it") possono essere visibili contemporaneamente, ma solo una [Funzione di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") solida può essere visibile alla volta, che sia Tip o meno.

### Associazione

Le [funzioni di PartDesign](/PartDesign_Feature/it "PartDesign Feature/it"), proprio come gli [oggetti planari](/Part_Part2DObject/it "Part Part2DObject/it"), possono essere associate a piani diversi, solitamente i piani standard definiti dall'[origine](#Origine) del corpo, oppure a [piani di PartDesign](/PartDesign_Plane/it "PartDesign Plane/it") personalizzati.

Gli [Schizzi](/Sketch/it "Sketch/it") sono normalmente collegati a un piano quando vengono creati. In modo simile, possono essere collegate anche le [caratteristiche primitive](/PartDesign_CompPrimitiveAdditive/it "PartDesign CompPrimitiveAdditive/it"). Collegando questi oggetti a un piano è possibile spostarli all'interno del Corpo modificando la loro proprietà Dati**Attachment Offset**. Per maggiori informazioni sulle modalità di collegamento, vedere [Associazione di Part](/Part_EditAttachment/it "Part EditAttachment/it").

Una [Funzione PartDesign](/PartDesign_Feature "PartDesign Feature") non associata verrà visualizzata con un simbolo di sovrapposizione rosso accanto alla sua icona nella [vista ad albero](/Tree_view/it "Tree view/it").

![](/images/PartDesign_Body_Feature_attachment.png)

PartDesign Body: [Funzioni PartDesign](/PartDesign_Feature/it "PartDesign Feature/it") che non sono associate a un piano o a un sistema di coordinate saranno mostrate con un simbolo sovrapposto accanto alla loro icona nella [vista ad albero](/Tree_view/it "Tree view/it").

### Ereditarietà

Un PartDesign Body è formalmente un'istanza della classe `PartDesign::Body`, il cui genitore è la [Part Feature](/Part_Feature/it "Part Feature/it") (classe `Part::Feature`) tramite la classe intermedia `Part::BodyBase`, ed è ampliato con un'estensione Origin.

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali nel programma. L'oggetto `PartDesign::Body` è destinato a costruire solidi 3D parametrici, e quindi deriva dall'oggetto di base `Part::Feature`, e ha un'Origine per controllare il posizionamento delle funzioni utilizzate al suo interno.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedere [Part Feature](/Part_Feature/it "Part Feature/it") per le informazioni generali sull'aggiunta di oggetti al documento.

Un corpo PartDesign viene creato con il metodo `addObject()` del documento. Quando esiste un Corpo, ad esso si possono aggiungere le [funzioni](/PartDesign_Feature/it "PartDesign Feature/it") con i metodi `addObject()` o `addObjects()` di questo Corpo.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj.Label = "Custom label"

feat1 = App.ActiveDocument.addObject("PartDesign::AdditiveBox", "Box")
feat2 = App.ActiveDocument.addObject("PartDesign::AdditiveCylinder", "Cylinder")

obj.addObjects([feat1, feat2])
App.ActiveDocument.recompute()

```

In un documento con molti Corpi, il [Corpo attivo](#Stato_attivo) può essere impostato usando il metodo `setActiveObject` di `ActiveView`. Il primo argomento è la stringa fissa `"pdbody"`, e il secondo argomento è l'oggetto Corpo che dovrebbe essere reso attivo.

```
import FreeCAD as App
import FreeCADGui as Gui

doc = App.newDocument()
obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("PartDesign::Body", "Body")

Gui.ActiveDocument.ActiveView.setActiveObject("pdbody", obj1)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Body/it&oldid=1558864>"