---
title: Creare una parte semplice con PartDesign
---
|  |
| --- |
| Tutorial |
| Argomento |
| Modellazione |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| 1 ora |
| Autori |
| GlouGlou |
| Versione di FreeCAD |
| 0.17 o superiore |
| Files di esempio |
|  |
| Vedere anche |
| [Creazione di una parte semplice con l'Ambiente Part](/Creating_a_simple_part_with_Part_WB/it "Creating a simple part with Part WB/it") , [Creazione di una parte semplice con gli Ambienti Draft e Part](/Creating_a_simple_part_with_Draft_and_Part_WB/it "Creating a simple part with Draft and Part WB/it") |
|  |

![](/images/GGTuto1_Vue.PNG)

Questo tutorial ha lo scopo di insegnare ai principianti di FreeCAD alcune funzioni di base attraverso un esempio.
Dopo aver scoperto alcune nozioni di base nella [Documentazione utente](/User_hub/it "User hub/it") è possibile disegnare una prima parte passo dopo passo.

**In questo tutorial ci occuperemo in particolare di:**

* Usare l'ambiente [Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it") per disegnare degli schizzi.
* Usare le funzioni Estrusione e Tasca.
* Cambiare il colore e la trasparenza.
* Spostare la parte manualmente.
* Visualizzare le quote di riferimento nello schizzo.
* Modificare una o più dimensioni.
* Usare della geometria esterna e usare un piano di riferimento per centrare un foro.

### Usare l'ambiente [Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it") per disegnare degli schizzi.

Creare un nuovo documento e passare all'ambiente ![](/images/Workbench_PartDesign.svg) **Part Design** usando il [selettore degli ambienti](/Getting_started/it#Esplorare_FreeCAD "Getting started/it") (etichettato con il numero 10 nell'immagine collegata) o andando al menu *Visualizza → Ambienti*. FreeCAD si avvia con le barre degli strumenti in alto, la vista combinata a sinistra e la vista 3D a destra.

**Creare il corpo:**

Premere ![](/images/PartDesign_Body.svg) [Crea corpo](/PartDesign_Body/it "PartDesign Body/it"). ***Nota:** non confondere il corpo, che ha l'icona è blu, con il contenitore di Parte la cui icona è gialla.* Nella scheda Modello sotto la barra laterale della Vista Combinata, sotto l'etichetta del documento appare un nuovo oggetto con l'etichetta "Body", che è attualmente "Senza nome" poiché il nuovo documento non è ancora stato salvato. Il Body è un contenitore in cui le funzioni di Part Design sono disposte in sequenza per formare un singolo solido. Contiene i propri assi e piani di riferimento. Se è evidenziato in azzurro nell'albero del modello, significa che è attivo, vale a dire che è possibile modificare gli elementi in esso contenuti e aggiungervi nuovi elementi. Se non è evidenziato, fare doppio clic o fare clic con il pulsante destro del mouse e selezionare "Attiva/disattiva corpo" nel menu contestuale. Davanti all'etichetta Body, c'è un'icona blu identica a quella sopra e una freccia o un segno più, a seconda del sistema operativo in uso. Facendo clic sulla freccia o sul segno più davanti a Body si espande il suo contenuto. A questo punto, contiene solo un elemento con l'etichetta "Origine". Anche davanti a *Origine* c'è una freccia o un segno più. Fare clic su di esso per espandere il suo contenuto e rivelare i suddetti assi e piani di riferimento come mostrato nell'immagine qui sotto:

![](/images/PartDesign_Body_tree_Unnamed.png)

*Il Corpo attivo appena creato con il suo contenuto espanso.*

L'*Origine* è di colore grigio, disattivata, il che indica che il suo contenuto non è visibile nella vista 3D. Per rendere visibile il contenuto di  *Origin*  nella vista 3D selezionare  *Origin*  e premere la barra spaziatrice sulla tastiera. Ora  *Origin*  appare in nero nell'albero. Premere nuovamente la barra spaziatrice per nascondere il suo contenuto nella vista 3D. Fare nuovamente clic sulla freccia o sul segno più davanti a "Origin" per comprimere il suo contenuto nell'albero del modello.

Prima di continuare, rinominare il corpo.

**Rinominare il corpo:**

Nell'albero del modello, fare clic sul corpo con il tasto destro del mouse. Selezionare Rinomina e digitare un nome, ad esempio "Body part1" e premere Invio per confermare.

**Creare lo schizzo:**

Tracciamo ora lo schizzo che definisce la forma generale della parte. Uno schizzo è una sagoma che descrive un profilo da applicare a una funzione per produrre una forma. Può essere "positivo" o "additivo", per esempio come una estrusione; oppure "negativo" o "sottrattivo", come una tasca.

Qui, poiché la forma generale della parte è regolare lungo l'asse Y, creeremo l'estrusione lungo questo asse.

Premere ![](/images/Sketcher_NewSketch.svg) [Nuovo schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it"). Ora la vista combinata passa alla scheda **Azioni** e visualizza la finestra di dialogo *Seleziona funzione*. Questa finestra di dialogo si aspetta la selezione di un piano a cui allegare lo schizzo ed elenca i piani disponibili. Selezionare "Piano XZ (Piano base)" e premere OK. Ora l'interfaccia cambia, subentra lo Sketcher e sopra la vista 3D appaiono le sue barre degli strumenti. Ci troviamo sul piano XZ del corpo per tracciare lo schizzo.

Per facilitare la creazione dello schizzo, in "Controlli" nel pannello Azioni a sinistra, impostare le seguenti opzioni:

* Visualizza la griglia: attivare
* Dimensioni della griglia: 10 mm
* Vincoli automatici: attivare

Tracciare il seguente schizzo:

![](/images/GGTuto1_0.PNG)

**Iniziare con i primi segmenti:**

Selezionare lo strumento ![](/images/Sketcher_Line.svg) [Linea](/Sketcher_CreateLine/it "Sketcher CreateLine/it"). Fare clic sul punto di origine, verificando innanzitutto che accanto al puntatore del mouse appaia un piccolo punto rosso. Cliccare il punto successivo sull'asse X a circa 10 quadrati a destra o a circa 100 mm. Per ora, non importa se il segmento non è esattamente 100 mm, gli daremo dopo una dimensione fissa che vincolerà questa lunghezza.

Fare lo stesso per gli altri segmenti, provare a mirare ai punti creati e che devono accendersi in giallo. Ciò significa che questi punti sono coincidenti. Si dovrebbe ottenere più o meno questo:

![](/images/GGTuto1_1.PNG)

Notare le piccole linee rosse sopra e accanto ai segmenti disegnati: questi sono i vincoli orizzontali e verticali. Le linee sono costrette a rimanere orizzontali o verticali. Notare anche il simbolo a forma di piccolo arco a sinistra: significa che il punto è fissato all'asse Z.

Ora selezionare diversi segmenti di linea con il tasto sinistro del mouse e mantenendo premuto il tasto sinistro, trascinare il mouse per cercare di spostarli: alcuni sono liberi, cioè si spostano, altri no.

**Applicare i vincoli:**

Nella parte superiore della vista combinata, nel pannello Azioni, si può leggere il numero di gradi di libertà degli elementi già disegnati: dovrebbe essere circa 6, l'obiettivo dei vincoli è quello di ridurre il numero di gradi di libertà a 0 .

In questo momento la linea inclinata è libera di ruotare: gli forniremo un vincolo di angolo per bloccarla.

Fare clic sulla linea obliqua, quindi sulla linea inferiore; una volta selezionate queste linee diventano verde scuro; quindi fare clic sull'icona del ![](/images/Constraint_InternalAngle.svg) [Vincolo angolo interno](/Sketcher_ConstrainAngle/it "Sketcher ConstrainAngle/it").

![](/images/GGTuto1_2.PNG)

Inserire il valore di 30°. Ora entrambe le linee hanno un angolo fisso. Il vincolo è stato creato a sinistra dello schizzo; spostarlo all'interno del profilo con il mouse.

Ora vincolare la linea di fondo con una dimensione: selezionarla e poi fare clic su ![](/images/Constraint_HorizontalDistance.svg) [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it").

Immettere il valore di 100 mm. Ora la linea verticale a destra è allineata esattamente con il decimo quadrato della griglia a destra dell'origine.

Impostare l'altezza complessiva del profilo selezionando il punto più alto a sinistra e il punto di origine. Cliccare su ![](/images/Constraint_VerticalDistance.svg) [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it"), e inserire il valore di 50 mm.

Fare la stessa cosa per la lunghezza orizzontale della linea inclinata con un altro vincolo di distanza orizzontale di 50 mm.

Allontanare le dimensioni dal profilo per una migliore visibilità. Ora si dovrebbe avere qualcosa di simile a questo:

![](/images/GGTuto1_3.PNG)

Notare che il numero dei gradi di libertà si è ridotto a 2. Questi sono le estremità ancora aperte.

**Traccciare l'arco**

Cliccare su ![](/images/Sketcher_Arc.svg) [Arco](/Sketcher_CreateArc/it "Sketcher CreateArc/it"), posizionare il centro approssimativamente a x=80 e y=30; quindi fare clic sul punto finale destro della linea orizzontale superiore per definire il punto iniziale dell'arco; quindi fare clic sul punto finale superiore della linea verticale destra per definire la fine dell'arco (accertarsi che i punti siano evidenziati in giallo prima di fare clic).

Assegnare al raggio un vincolo di raggio: selezionare l'arco, quindi fare clic su ![](/images/Constraint_Radius.svg) [Raggio](/Sketcher_ConstrainRadius/it "Sketcher ConstrainRadius/it") quindi inserire il valore di 20 mm.

Ora rendere l'arco tangente alle linee a cui è collegato: selezionare l'arco, poi la linea superiore, quindi fare clic su ![](/images/Constraint_Tangent.svg) [Tangente](/Sketcher_ConstrainTangent/it "Sketcher ConstrainTangent/it"). Viene visualizzato il messaggio "Sostituzione di vincoli", fare clic su OK. Fare la stessa cosa per il vincolo tangente sull'altro lato dell'arco.

Lo schizzo è stato creato in due fasi, ma il profilo è stato ultimato prima di renderlo completamente vincolato.

**Schizzo completamente vincolato:**

Se tutto è stato svolto bene, il risultato è questo:

![](/images/GGTuto1_4.PNG)

Lo schizzo è diventato verde, il che significa che è completamente vincolato. Non c'è più alcuna ambiguità, tutto è perfettamente definito. Ciò è confermato dal messaggio del risolutore in alto a sinistra. Notare inoltre che il centro dell'arco si è spostato leggermente, questo perché assegnando questi ultimi tre vincoli, FreeCAD ha calcolato la vera posizione del centro.

Se lo schizzo non è ancora verde, uno o più punti non sono coincidenti (2 punti possono essere sovrapposti ma non essere coincidenti). Creare una piccola finestra (finestra di acquisizione) intorno a un punto per selezionarlo e creare un ![](/images/Constraint_PointOnPoint.svg) [Vincolo coincidenza](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"). *Nota: non confondere il vincolo Coincidenza con il Punto di Sketcher; le loro icone sono molto simili, quest'ultimo però ha un'icona più grande e aggiunge un punto isolato nello schizzo.*

Procedere allo stesso modo con tutti i punti.

Se ancora lo schizzo non diventa verde, verificare che tutte le linee (tranne quella inclinata) abbiano un vincolo ![](/images/Constraint_Horizontal.svg) [Orizzontale](/Sketcher_ConstrainHorizontal/it "Sketcher ConstrainHorizontal/it") o ![](/images/Constraint_Vertical.svg) [Verticale](/Sketcher_ConstrainVertical/it "Sketcher ConstrainVertical/it"), e aggiungerlo se manca.

### Usare le funzioni Estrusione e Tasca

Fare clic su Chiudi nella scheda Azioni, nell'angolo in alto a sinistra. Con questo comando si esce automaticamente dall'ambiente Sketcher e viene di nuovo attivato l'ambiente Part Design . La vista combinata torna alla scheda Modello. Se *Body part1* era rimasto espanso, ora si vede il nuovo elemento **Schizzo** sotto *Origine*, e annidato sotto il Corpo.

A questo punto, salvre il documento. Dargli un nome (ad esempio "tutorial1" o qualsiasi nome significativo). È buona norma salvare spesso il documento, ad esempio dopo aver completato uno schizzo o una funzione.

Cliccare su ![](/images/Std_ViewIsometric.svg) **Vista isometrica** poi su ![](/images/Std_ViewFitAll.svg) [Visualizza tutto](/Std_ViewFitAll/it "Std ViewFitAll/it") per avere una vista isometrica 3D centrata.

Cliccare su ![](/images/PartDesign_Pad.svg) [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it"), inserire una lunghezza di 30 mm. Fare clic su OK, la forma è completata. Nell'albero del modello, al posto dello schizzo viene visualizzato un oggetto **Pad** (che chiamiamo funzione). Infatti *Pad*, ha inglobato Sketch, dal momento che si basa su di esso; fare clic sulla freccia o sul segno più davanti a "Pad" per espanderlo e visualizzare lo schizzo sottostante, che è stato automaticamente nascosto (la sua etichetta è disattivata).

Notare che la forma creata è un solido.

![](/images/GGTuto1_5.PNG)

**Creare il foro**

Fare clic sul lato superiore (quadrato) della parte e fare clic sull'icona ![](/images/Sketcher_NewSketch.svg) per creare un nuovo schizzo. FreeCAD crea un nuovo schizzo collegato a questa faccia. Quindi siamo su un piano parallelo al piano assoluto XY, ma spostati in alto dall'altezza del pezzo, cioè 50 mm.

È possibile passare dalla finestra 3D a una vista isometrica ![](/images/Std_ViewIsometric.svg) o rimanere in vista dall'alto ![](/images/Std_ViewTop.svg). In qualsiasi momento, è possibile tornare alla vista Schizzo (la vista è orientata verso il piano dello schizzo) utilizzando il pulsante ![](/images/Sketcher_ViewSketch.svg) [Vista schizzo](/Sketcher_ViewSketch/it "Sketcher ViewSketch/it").

Notare che l'origine di questo nuovo schizzo è quella del corpo. Esse possono essere diverse, ma qui sono confuse con l'origine assoluta.

Con lo strumento ![](/images/Sketcher_Circle.svg) [Cerchio](/Sketcher_CreateCircle/it "Sketcher CreateCircle/it") fare clic approssimativamente al centro della faccia e fare un cerchio di qualsiasi raggio.

Selezionare il cerchio quindi creare un ![](/images/Constraint_Radius.svg) [Vincolo raggio](/Sketcher_ConstrainRadius/it "Sketcher ConstrainRadius/it"), e inserire il valore 5 mm.

Selezionare il centro del cerchio, quindi creare un ![](/images/Sketcher_ConstrainLock.svg) [Vincolo bloccato](/Sketcher_ConstrainLock/it "Sketcher ConstrainLock/it"); fare doppio clic sulla quota orizzontale e immettere -65 mm (qui si indica una posizione relativa all'origine dello schizzo). Fare lo stesso per la dimensione verticale (-15 mm). Il cerchio assume la posizione corretta e lo schizzo diventa verde, indicando che è completamente vincolato:

![](/images/GGTuto1_6.PNG)

Chiudere lo schizzo; nell'albero del modello, sotto Pad viene visualizzato il nuovo oggetto **Sketch001**. Mentre Sketch001 è ancora selezionato, fare clic su ![](/images/PartDesign_Pocket.svg) [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it").

Tasca è una funzione chiamata "sottrattiva", rimuove il materiale dalla parte, qui sotto forma di un cilindro poiché lo schizzo è un cerchio. Impostare "Attraverso tutto" per tagliare completamente la parte. Premere OK per completare. Nell'albero del modello, sotto Body part1 viene visualizzato un nuovo elemento con l'etichetta **Pocket** che si basa su Sketch001.

### Cambiare colore e trasparenza

È possibile cambiare il colore della parte, spesso è utile distinguere una parte tra le altre. Può anche essere modificata la trasparenza del pezzo, il che è utile per visualizzare i suoi interni.

Selezionare il corpo **Body part1**; assicurarsi che la scheda Modello della vista combinata sia selezionata e andare nella parte inferiore della Vista combinata, poi fare clic sulla scheda Visualizza; individuare la proprietà *Colore forma*; potrebbe essere necessario utilizzare la barra di scorrimento verticale a destra per trovarlo. *Si può anche allargare la colonna Proprietà: posizionare il puntatore del mouse sulla linea di separazione tra le intestazioni* Proprietà *e* Valore*; quando il puntatore si trasforma in una freccia a doppia faccia, tenere premuto il tasto sinistro del mouse e trascinarlo lateralmente, quindi rilasciarlo.* Nella colonna di destra, fare clic sul quadrato grigio per aprire la finestra di dialogo **Seleziona colore**. Scegliere un altro colore, quindi fare clic su OK. Successivamente, di nuovo nella scheda Visualizza, modificare il valore di Trasparenza, ad esempio su 50 e premere Invio per completare (0 = totalmente opaco, 100 = totalmente trasparente).

Ora, all'interno della parte è visibile il foro. Questo spesso è utile per vedere le facce nascoste o interne del modello.

È inoltre possibile variare "Colore linea" e "Larghezza linea" per modificare lo spessore della linea e il colore del contorno della parte.

### Muovere manualmente la parte

Andare al menu *Visualizza* e selezionare *Origine degli assi*. Questi sono gli assi assoluti. Nella vista 3D appaiono i 3 assi X, Y e Z in rosso, verde e blu. Questo punto di riferimento aiuta l'orientamento nello spazio. Questo punto di riferimento è fisso e immutabile, è la vista che ruota o l'oggetto che ruota in questo spazio.

Selezionare il corpo; nella parte inferiore della Vista combinata a sinistra, si puoi vede questo (la scheda *Dati* deve essere in primo piano, potrebbe essere necessario fare clic sulla scheda *Dati* per renderla visibile):

![](/images/GGTuto1_10.PNG)

Fare clic sui tre piccoli punti (se non appaiono, fare clic sul campo **Posizionamento**), questo apre una nuova finestra di dialogo nel pannello Azioni. Usando le frecce si può variare la posizione e gli angoli della parte. In realtà è la posizione del corpo (quindi la sua origine) che si muove nello spazio, mentre l'orientamento della vista 3D non cambia.

Un altro metodo: nella Vista combinata, selezionare il Corpo e fare clic con il pulsante destro del mouse, quindi seleziona "Trasforma". Appare una vista come questa:

![](/images/GGTuto1_11.PNG)

Afferrare e trascinare i coni lungo gli assi o le sfere per muovere il corpo in tutte le direzioni.

Convalidare. Quindi reimpostare gli angoli e le coordinate su 0.

### Visualizzare quote di riferimento nello schizzo

Potrebbe essere utile conoscere le dimensioni di alcune parti dello schizzo, dal calcolo interno di FreeCAD. Può essere utilizzato solo come riferimento o, ad esempio, utilizzato in seguito per impostare altre dimensioni.

Nell'albero del modello, se necessario, espandere "Body part1", quindi espandere anche "Pad" per visualizzare il primo schizzo. Fare doppio clic su di esso (o fare clic con il tasto destro e selezionare "Modifica lo schizzo" nel menu contestuale) quindi fare clic su ![](/images/Sketcher_ToggleConstraint.svg) [Vincoli guida o definitivi](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"). (**Nota:** a seconda della risoluzione dello schermo del computer, questa icona potrebbe non essere visibile. All'estremità destra della barra degli strumenti Vincoli, è possibile trovare un pulsante ». Fare clic su di esso per espandere e accedere alle icone compresse.) D'ora in poi, è possibile creare quote di riferimento anziché vincoli dimensionali: saranno blu e non avranno alcuna influenza sulle forme dello schizzo da cui provengono, esse vengono calcolate automaticamente.

Per esempio si possono visualizzare queste dimensioni:

![](/images/GGTuto1_7.PNG)

Ad esempio si può vedere che l'arco ha una lunghezza di 20 poiché è tangente ai bordi.

Si può anche vedere che FreeCAD calcola la faccia sinistra (50-50xTAN 30 °), così come la dimensione della distanza dell'asse dell'arco con l'origine.

### Modificare una o più dimensioni

Durante la modellazione, è possibile variare le dimensioni del modello. È molto semplice: per lo spessore del pezzo, fare doppio clic su Pad, quindi inserire un nuovo valore, ad esempio 40 mm. È possibile modificare anche questo valore anche nella parte inferiore della vista combinata. Convalidare e la forma dell'oggetto viene cambiata.

Fare lo stesso per la lunghezza totale del pezzo: fare doppio clic su Schizzo, quindi fare doppio clic sul vincolo dimensionale di 100 mm, modificalo in 110 mm, quindi convalidare.

Si vede che il pezzo è stato ingrandito, ma il foro non è più centrato nel centro della faccia superiore. Questo perché il foro è stato vincolato all'origine dello schizzo. Il che non corrisponde necessariamente a ciò che si vorrebbe, il foro dovrebbe rimanere al centro, qualunque sia la dimensione della faccia.

### Centra il foro

**Primo metodo che utilizza la geometria esterna.**

Modificare di nuovo lo schizzo del foro e cancellare i suoi vincoli di distanza orizzontale e verticale.

Quindi fare clic su ![](/images/Sketcher_External.svg) [Geometria esterna](/Sketcher_External/it "Sketcher External/it").

Creeremo ora due linee nello schizzo, ma estratte da una forma (o funzione) esterna a questa e precedentemente definita: quella del Pad.

Fare clic su un bordo verticale nella parte superiore della parte. Ad esempio, il bordo del lato inclinato.

Sopra al bordo appare una nuova linea magenta. Ripetere per l'altro bordo, sul lato arrotondato.

Ora si possono usare queste linee (e soprattutto i loro punti finali) per centrare il cerchio, però bisogna prima aggiungere due linee di costruzione: ad esempio le diagonali.

Cliccare su ![](/images/Sketcher_AlterConstruction.svg) [Geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it") per passare alla modalità di costruzione: le linee saranno blu e saranno ignorate al di fuori della modalità di modifica dello schizzo. Permettono di fissare il centro del cerchio. Creare le diagonali nello stesso modo si sono disegnate le prime linee. Accertarsi che tutti i punti siano coincidenti.

Quindi selezionare il centro del cerchio e le due linee diagonali blu poi fare clic su ![](/images/Constraint_PointOnObject.svg) [Punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") perché il cerchio deve essere centrato all'incrocio delle diagonali, cioè al centro della faccia. Lo schizzo deve diventare verde, completamente vincolato (è essenziale). Notare che oltre al raggio del cerchio, non è necessario creare ulteriori vincoli dimensionali.

Tenere presente che, oltre a passare dalla barra degli strumenti alla modalità di costruzione, il pulsante ![](/images/Sketcher_AlterConstruction.svg) [Modalità costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it") può anche commutare i singoli elementi di Sketcher in elementi di costruzione se sono stati selezionati. Se si passa accidentalmente un elemento in modalità costruzione, è possibile che venga visualizzato un errore quando si esce dallo schizzo.

![](/images/GGTuto1_8.PNG)

Uscire dallo schizzo, e osservare che il cerchio è ben centrato. (La funzione Tasca non è stata cancellata, ma modificata). Cambiando di nuovo le dimensioni della parte, lo spessore o la lunghezza, il cerchio rimane centrato sulla faccia.

**Evitare le linee di costruzione:**

Spesso è possibile evitare di creare le linee di costruzione. È possibile modificare nuovamente lo schizzo, cancellare le linee di costruzione e usare una ![](/images/Constraint_Symmetric.svg) [Vincolo simmetria](/Sketcher_ConstrainSymmetric/it "Sketcher ConstrainSymmetric/it") tra i due vertici opposti delle linee della geometria esterna e il centro del cerchio (selezionare i punti in questo ordine):

![](/images/GGTuto1_12.PNG)

Si ottiene esattamente lo stesso risultato per la posizione del foro. Infatti, grazie ai vincoli disponibili nell'ambiente Sketcher, ci sono molti metodi possibili. Questo esempio mostra che spesso è preferibile scegliere il metodo più semplice, limitando così il numero di oggetti creati e gli errori che possono verificarsi.

**Secondo metodo usando un piano di riferimento.**

Ecco un altro metodo più rapido che è possibile dalla versione 0.17: l'uso di un piano di riferimento e della sua associazione.

Iniziare cancellando la funzione "Pocket" e lo schizzo del foro. Selezionare la faccia superiore e cliccare su ![](/images/PartDesign_Point.svg) [Punto di riferimento](/PartDesign_Point/it "PartDesign Point/it"): creare un punto di riferimento nel corpo attivo. La modalità di associazione scelta deve essere "Centro di massa".

Poiché la faccia è rettangolare, il suo centro di massa corrisponde al centro delle sue diagonali. Convalidare e viene creato un punto di riferimento.

Selezionare di nuovo la faccia superiore e mentre si tiene premuto il tasto CTRL, selezionare il punto appena creato nell'albero del modello, rilasciare CTRL e fare clic su ![](/images/PartDesign_Plane.svg) [Piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it"). Viene creato un piano di riferimento con l'origine del punto. Cliccare OK.

Ora è molto facile centrare il cerchio! Selezionare il piano creato dall'albero del modello o nella vista 3D e poi fare clic su ![](/images/Sketcher_NewSketch.svg) [Crea uno schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it"), viene creato uno schizzo con la sua origine, l'origine del piano. Quindi tracciare il cerchio di raggio di 5 mm su questa origine, poi convalidare (lo schizzo deve essere imperativamente verde).

Procedere creando la "Tasca", come creato in precedenza, e il foro e sarà sempre centrato.

![](/images/GGTuto1_9.PNG)

Questo tutorial è completato, salvare questo file. Ora è anche possibile divertirsi ad esplorare varie funzionalità. Cambiare altre dimensioni, creare altre forme, aggiungere altri fori ad altre facce, è quando si commettono errori che si progredisce!

È anche possibile continuare con questo altro tutorial di una parte leggermente più complicata:

[Basi di Part Design](/Basic_Part_Design_Tutorial/it "Basic Part Design Tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Creating_a_simple_part_with_PartDesign/it&oldid=1251749>"