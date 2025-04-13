---
title: FrameForge Workbench
---
![](/images/FrameForge.svg)

FrameForge Workbench icon

## Introduzione

FrameForge è dedicato alla creazione di telai e travi e all'applicazione di operazioni (tagli obliqui, tagli di rifinitura) a questi profili.

Il tutorial seguente è disponibile anche su [GitHub](https://github.com/lukh/frameforge/blob/main/docs/tutorial.md).

## Tutorial

### Crea lo scheletro

Le travi sono collegate ai bordi (ad esempio da uno schizzo) o alle linee parametriche. Per cominciare, creeremo una cornice semplice.

1. In un nuovo file, passa al workbench FrameForge.
2. Creare uno schizzo e specificare l'orientamento XY.

   ![](/images/FrameForge_00-create-sketch.png)

   ![](/images/FrameForge_01-select-orientation.png)
3. Disegna un semplice quadrato nello schizzo. Questo sarà il nostro scheletro.

   ![](/images/FrameForge_02-create-frame-skeleton.png)
4. Chiudi la modalità di modifica dello schizzo.

### Crea la cornice

1. Avvia lo strumento Crea profilo.

   ![](/images/FrameForge_10-profiles.png)

   ![](/images/FrameForge_10-profiles-task.png)

   ![](/images/FrameForge_10-profiles-task-2.png)
2. Selezionare un profilo dagli elenchi (Materiale/Famiglia/Dimensione). Puoi modificare la dimensione appena sotto la famiglia, lo strumento ha molti profili predefiniti, puoi anche modificare i parametri.

   ![](/images/FrameForge_11-profiles-family.png)
3. Nella vista 3D, seleziona i bordi a cui applicare il profilo.

   ![](/images/FrameForge_13-edge-selection.png)
4. Premi OK nel pannello delle attività. Ora hai quattro profili e il tuo primo fotogramma.

   ![](/images/FrameForge_14-profiles-done.png)

   ![](/images/FrameForge_14-zoom-on-profiles.png)

### Going 3D

Possiamo costruire forme più complesse e ci sono diversi modi per farlo.

#### Altri schizzi (parte 1)

Possiamo aggiungere più schizzi al nostro progetto:

1. Crea un nuovo schizzo.
2. Selezionare lo stesso orientamento di prima (XY).
3. Disegna un quadrato con le stesse dimensioni e posizione di prima.
4. Modificare la posizione dello schizzo per posizionarlo 400 mm sopra il primo.

   ![](/images/FrameForge_20-sketch-base-placement.png)

   ![](/images/FrameForge_20-sketch-base-placement-2.png)
5. Ora puoi utilizzare nuovamente lo strumento Crea profilo per creare un'altra cornice quadrata.

   ![](/images/FrameForge_21-stacked-frames.png)

#### Linea parametrica

È possibile creare linee parametriche unendo due vertici (punti). Queste linee possono essere utilizzate anche per i profili.

1. Per vedere gli schizzi nascondi temporaneamente gli oggetti del profilo con la Space Bar.

   ![](/images/FrameForge_22-hide-profiles.png)
2. Seleziona due vertici.

   ![](/images/FrameForge_23-select-vertexes.png)
3. Creare una linea parametrica.

   ![](/images/FrameForge_24-create-parametric-line.png)

   ![](/images/FrameForge_25-parametric-line.png)
4. Ripeti per le altre 3 gambe del telaio.
5. Utilizzare nuovamente lo strumento Crea profilo per allegare i profili alle 4 linee.
   1. Avvia Crea profilo.
   2. Seleziona il profilo che desideri.
   3. Selezionare le 4 linee parametriche.
   4. Premi OK.

   ![](/images/FrameForge_26-cube-done.png)

#### Altri schizzi (parte 2)

Esiste un altro modo per aggiungere schizzi, che consente di fare cose più complicate.

A volte potresti voler aggiungere uno schizzo in una posizione specifica e collegarlo a un altro schizzo. In modo che quando modifichi il primo schizzo, seguirà il secondo. Questo non è possibile con la Posizione / Base Placement, che è una posizione assoluta, bisogna "Mappare" il secondo schizzo sul primo schizzo.

1. Crea un nuovo schizzo e imposta il suo orientamento su YZ.
   Solo per riferimento ho aggiunto un cerchio allo schizzo in modo che tu possa vedere dove si trova.

   ![](/images/FrameForge_30-mapmode-sketch.png)
2. Fare clic sulla proprietà Modalità mappa:

   ![](/images/FrameForge_31-mapmode.png)

   ![](/images/FrameForge_32-mapmode-dialog.png)
3. Puoi cambiare la Modalità Mappa, selezionando facce, vertici e bordi. Qui, il nostro schizzo del cerchio è stato riallineato. Ci sono molte opzioni.

   ![](/images/FrameForge_33-mapmode.png)
4. È quindi possibile modificare lo schizzo e creare più linee e cornici.

### Smussi e angoli

Come puoi vedere, gli incroci non sono ancora buoni. I profili sono centrati sullo scheletro e si fermano alle estremità dei bordi.

Realizzeremo angoli e smussi. Ci sono due metodi per questo.

#### Proprietà Via Bevels

Questa è l'opzione preferita per i frame semplici.

1. Nascondiamo tutto tranne il primo fotogramma che abbiamo realizzato.

   ![](/images/FrameForge_40-show-first-frame.png)
2. Seleziona uno dei profili e nell'editor delle proprietà cerca Bevel Start/End Cut1/Cut2.

   ![](/images/FrameForge_41-bevels.png)
3. Sono presenti 4 voci (Inizio/Fine Taglio1/Taglio2). Permettono di creare smussi sui due assi, all'inizio o alla fine del profilo. Gli angoli negativi funzionano e devono essere utilizzati per compensare le direzioni.
4. Puoi modificare le proprietà di più profili contemporaneamente.

   ![](/images/FrameForge_42-batchs-bevels.png)

#### Tramite lo strumento Crea estremità smussate

1. Mostriamo l'altro telaio di base.

   ![](/images/FrameForge_50-base-config.png)
2. Per prima cosa dobbiamo aggiungere offset ai profili esistenti. Gli offset aumentano le dimensioni dei bordi. Puoi modificare i profili uno alla volta oppure modificarli tutti contemporaneamente.

   ![](/images/FrameForge_51-add-offset.png)
3. Deseleziona tutti gli oggetti, quindi seleziona due profili toccanti. È necessario selezionare le facce nella vista 3D, non gli oggetti nella vista ad albero.

   ![](/images/FrameForge_52-select-touching-profiles.png)
4. Fare clic sullo strumento Crea estremità oblique per creare due profili tagliati.

   ![](/images/FrameForge_53-create-miter-end.png)

   ![](/images/FrameForge_54-miter-end.png)
5. Ripeti per gli altri angoli della seconda cornice.

#### Tramite lo strumento Ritaglia profilo

1. Quando tutti i profili sono nuovamente visibili, puoi vedere che i profili verticali non sono tagliati come dovrebbero.

   ![](/images/FrameForge_60-startwith.png)

   ![](/images/FrameForge_61-bad-joint.png)
2. Avvia lo strumento Profilo di ritaglio.

   ![](/images/FrameForge_62-endtrim.png)

   ![](/images/FrameForge_62-endtrim-task.png)
3. Seleziona prima il profilo verticale, aggiungilo come oggetto tagliato con il pulsante ![](/images/List-add.svg).

   ![](/images/FrameForge_63-select-trimmed-body-1.png)

   ![](/images/FrameForge_63-select-trimmed-body-2.png)
4. Seleziona i confini di ritaglio con cui vuoi tagliare. Qui ho ruotato la vista per selezionare due facce inferiori.

   ![](/images/FrameForge_64-select-trimming-boundaries-1.png)

   ![](/images/FrameForge_64-select-trimming-boundaries-2.png)
5. È possibile modificare il tipo di taglio: dritto o seguendo l'altro profilo.

   ![](/images/FrameForge_64-select-cuttype-1.png)

   ![](/images/FrameForge_64-select-cuttype-2.png)
6. Puoi anche aggiungere facce per tagliare l'altro lato del profilo.

### Organizzare gli oggetti

Questa è la parte brutta. Trovo che la visualizzazione ad albero sia disordinata. Davvero disordinato.

#### Contenitore delle parti

Utilizzo spesso i contenitori di parti per raggruppare profili, schizzi, ecc.

![](/images/FrameForge_70-part-container.png)

![](/images/FrameForge_71-part-container.png)

Dovresti trascinare solo un profilo alla volta nel contenitore. Non so perché, ma FreeCAD non è contento di un trascinamento di gruppo. A volte parti e profili saltano fuori dal contenitore Parti.

#### Fusione

È possibile fondere insieme i profili. Permette di raggruppare oggetti.

![](/images/FrameForge_72-fusion.png)

![](/images/FrameForge_72-fusion-done.png)

### Utilizzo dei profili in PartDesign

1. Per utilizzare questi profili in PartDesign è necessario creare una fusione e poi un Corpo.

   ![](/images/FrameForge_80-body.png)
2. Trascina e rilascia la fusione sul corpo.

   ![](/images/FrameForge_81-basefeature.png)
3. Ora disponi di un corpo PartDesign standard e puoi utilizzare PartDesign per fare quello che vuoi. Puoi ad esempio creare dei buchi.

   ![](/images/FrameForge_82-making-holes.png)

   ![](/images/FrameForge_83-holes-made.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=FrameForge_Workbench/it&oldid=1528828>"