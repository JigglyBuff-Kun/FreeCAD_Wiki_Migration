---
title: Modellazione per la progettazione del prodotto
---

[Product design](https://en.wikipedia.org/wiki/Product_design) è in origine un termine commerciale, ma nel mondo 3D, significa spesso modellazione di qualcosa con l'idea di [stamparlo in 3D](https://en.wikipedia.org/wiki/3D_printing) o, più in generale, prodotto da una macchina, per esempio con una stampante 3D o con una [macchina CNC](https://en.wikipedia.org/wiki/Numerical_control).

Quando si stampano oggetti in 3D, è di fondamentale importanza che gli oggetti siano dei **solidi**. Dato che diventeranno reali, oggetti solidi, questo è ovvio. Naturalmente nulla impedisce che essi siano vuoti internamente. Ma è sempre necessario sapere esattamente quale punto è all'interno del materiale, e quale punto è al di fuori, perché la stampante 3D o la macchina CNC deve sapere esattamente cosa è riempito di materiale e cosa non lo è. In FreeCAD, l'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") è lo strumento perfetto per costruire questi pezzi, perché si prende sempre cura che gli oggetti rimangono solidi e costruibili.

Per illustrare come funziona l'ambiente PartDesign, cerchiamo di modellare questo pezzo ben noto di [Lego](https://en.wikipedia.org/wiki/Lego):

![](/images/FreeCAD_Exercise1_RedBrick.png)

La cosa bella con i pezzi Lego è che le dimensioni sono facili da reperire su Internet, almeno per i pezzi standard. Questi sono abbastanza facili da modellare e da stampare in 3D, e con un po' di pazienza (la stampa 3D richiede spesso molte regolazioni di messa a punto) si possono fare pezzi che sono totalmente compatibili e che si incastrano perfettamente nei blocchi Lego originali. Nell'esempio seguente, faremo un pezzo che è 1,5 volte più grande di quello originale.

Ora useremo esclusivamente strumenti di [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") e [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Dato che tutti gli strumenti dell'ambiente Sketcher sono inclusi anche nell'ambiente PartDesign, possiamo stare in PartDesign e non avremo bisogno di passare avanti e indietro tra i due.

A sketch is considered fully constrained when every point is locked into position by the appropriate number of constraints, meaning no part of the sketch can be moved freely. Achieving a fully constrained sketch is ideal because it ensures the design is well-defined and stable, allowing for predictable changes later in the design process. On the other hand, if more constraints are added than necessary—referred to as an over-constrained sketch—this can cause conflicts in the geometry. FreeCAD will alert you to any redundant or conflicting constraints, as over-constraining can cause issues in further operations like extrusions or cuts.

Gli oggetti di Part Design sono completamente basati su **Schizzi**. Uno Schizzo è un oggetto 2D, fatto di segmenti lineari (linee, archi di cerchio o ellissi) e di vincoli. I vincoli possono essere applicati sia sui segmenti lineari sia sui loro punti finali o centrali, e costringono la geometria ad adottare determinate regole. Ad esempio, è possibile inserire un vincolo verticale su un segmento di linea per costringerlo a rimanere in verticale, o applicare un vincolo di posizione (blocco) su un punto finale per impedirgli di muoversi. Quando uno schizzo ha la giusta quantità di vincoli che impedisce a qualsiasi punto del disegno di spostarsi, si parla di uno schizzo completamente vincolato. Quando ci sono dei vincoli ridondanti, che possono essere rimossi senza consentire alla geometria da spostarsi, si parla di geometria sovra-vincolata. Questo deve essere evitato, e, se succede, FreeCAD lo comunica.

Gli Schizzi hanno una modalità di modifica, in cui la loro geometria e i loro vincoli possono essere cambiati. Quando si ha finito con le modifiche, e si esce dalla modalità di modifica, gli schizzi si comportano come qualsiasi altro oggetto FreeCAD, e possono essere utilizzati come elementi di base per tutti gli strumenti di PartDesign, ma anche in altri ambienti di lavoro, come ad esempio [Parte](/Part_Workbench/it "Part Workbench/it") o [Arch](/Arch_Workbench/it "Arch Workbench/it"). [Draft](/Draft_Workbench/it "Draft Workbench/it") ha anche uno strumento che converte gli oggetti di Draft in schizzi, e viceversa.

- Cominciamo modellando una forma cubica che sarà la base del nostro mattoncino Lego. Successivamente intaglieremo l'interno, e vi aggiungeremo le 8 bugne. Quindi cominciamo questo facendo uno schizzo rettangolare che sarà poi estruso:
- Passare nell'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it")
- Cliccare sul pulsante ![](/images/Sketcher_NewSketch.svg) [Nuovo Schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it"). Appare una finestra di dialogo che chiede dove si vuole posizionare il disegno, scegliere il piano **XY**, che è il piano "terra". Viene creato il disegno e viene immediatamente commutato in modalità di modifica, e la vista viene ruotata in modo che il disegno sia ortogonale all'osservatore.
- Ora si può disegnare un rettangolo, selezionando lo strumento ![](/images/Sketcher_CreateRectangle.svg) [Rettangolo](/Sketcher_CreateRectangle/it "Sketcher CreateRectangle/it") e cliccando 2 punti d'angolo opposti. È possibile inserire i due punti dove si vuole, dato che la loro posizione corretta verrà impostata nel passaggio successivo.
- Notare che al rettangolo sono stati automaticamente aggiunti alcuni vincoli: i segmenti verticali hanno ricevuto un vincolo verticale, quelle orizzontali un vincolo orizzontale, e ogni angolo un vincolo di punto-con-punto che incolla insieme i segmenti. Si può sperimentare lo spostamento del rettangolo trascinando le sue linee con il mouse, tutta la geometria si manterrà fedele ai vincoli.

![](/images/FreeCAD_Exercise1_re_UC.png)

- Ora, aggiungiamo altri tre vincoli:
  - Selezionare uno dei segmenti verticali e aggiungere un ![](/images/Constraint_VerticalDistance.svg) [vincolo distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it"). Dategli una dimensione di 23.7mm.
  - Selezionare uno dei segmenti orizzontali e aggiungere un ![](/images/Constraint_HorizontalDistance.svg) [vincolo distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it"). Dategli una dimensione di 47.7mm.
  - Infine, selezionare uno dei punti d'angolo, quindi il punto di origine (che è il punto di incrocio degli assi rosso e verde), e aggiungere un ![](/images/Constraint_PointOnPoint.svg) [vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"). Il rettangolo salta al punto di origine, e lo schizzo diventa verde, il che significa che ora è completamente vincolato. Si può provare a spostare le sue linee o punti, ma nulla può più muoversi.

![](/images/FreeCAD_Exercise1_re.png)

- Lo schizzo di base è pronto, possiamo lasciare la modalità di modifica premendo il pulsante **Chiudi** sulla parte superiore del pannello Azioni, o semplicemente premendo il tasto **Esc**. Se necessario in seguito, siamo in grado di rientrare in modalità di modifica in qualsiasi momento facendo doppio clic sullo schizzo nella vista ad albero.
- Facciamo estrudere lo schizzo utilizzando lo strumento ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad/it "PartDesign Pad/it"), per una lunghezza di 14,4 mm. Le altre opzioni possono essere lasciate ai loro valori di default:

![](/images/FreeCAD_Exercise1_padding.png)

Il **Pad** si comporta in modo molto simile allo strumento [Estrusione](/Part_Extrude/it "Part Extrude/it") che abbiamo usato nel capitolo precedente. Ci sono, però, alcune differenze, e la principale è che un pad non può essere spostato, esso è sempre collegato al suo schizzo. Se si vuole cambiare la posizione del pad, è necessario spostare il disegno di base. Nel contesto attuale, in cui vogliamo essere sicuri che nulla si muova dalla sua posizione, si tratta di una sicurezza aggiuntiva.

- Ora intagliamo l'interno del blocco, utilizzando lo strumento ![](/images/PartDesign_Pocket.svg) [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it"), che è la versione PartDesign di [Parte Taglia](/Part_Cut/it "Part Cut/it"). Per effettuare una tasca, creiamo uno schizzo sulla faccia inferiore del blocco, che sarà utilizzato per rimuovere una parte del blocco.
- Con la faccia inferiore selezionata, premere il pulsante ![](/images/Sketcher_NewSketch.svg) [Nuovo schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it").
- Disegnare un rettangolo sulla faccia.

![](/images/FreeCAD_Exercise1_TopFaceSketch.png)

- Ora vincoliamo il rettangolo in relazione alla faccia inferiore. Per fare questo, bisogna "importare" alcuni bordi della faccia con lo strumento ![](/images/Sketcher_External.svg) [Geometria esterna](/Sketcher_External/it "Sketcher External/it"). Utilizzare questo strumento sulle due linee verticali della faccia inferiore:

![](/images/FreeCAD_Exercise1_topCylPad.png)

Notare che con questo strumento possono essere aggiunti solo i bordi dalla faccia di base. Quando si crea uno schizzo con una faccia selezionata, si crea una relazione tra quella faccia e il disegno, che è importante per le successive operazioni. È sempre possibile rimappare in un secondo tempo uno schizzo su un'altra faccia con lo strumento![](/images/Sketcher_MapSketch.svg) [Mappa schizzo](/Sketcher_MapSketch/it "Sketcher MapSketch/it").

![](/images/FreeCAD_Exercise1_topPattern.png)

![](/images/Exercise_lego_07.jpg)

![](/images/FreeCAD_Exercise1_BottomRec.png)

![](/images/Exercise_lego_08.jpg)

![](/images/FreeCAD_Exercise1_BottomOuterCirc.png)

![](/images/Exercise_lego_09.jpg)

![](/images/FreeCAD_Exercise1_bottomSketchCom.png)

- By choosing the completed sketch use the ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") tool setting the length to 12 mm.

![](/images/FreeCAD_Exercise1_BottomPad.png)

- This is it. Our brick is ready. If you wish to change its color, you can do so by going to the **View tab**.

![](/images/FreeCAD_Exercise1_redBrick2.png)

Notare che la storia della modellazione (ciò che appare nella vista ad albero) è diventata piuttosto lunga. Essa è preziosa perché in seguito ogni singolo passo di quello che si è fatto può essere modificato. Adattando questo modello per creare un altro tipo di mattoncino, per esempio uno con 2x2 bugne, o 2x4, è una parte del lavoro, basta cambiare un paio di dimensioni e il numero di occorrenze delle schiere lineari. Si possono anche creare facilmente pezzi più grandi che non esistono nel gioco Lego originale.

Ma può anche essere utile sbarazzarsi dello storico, per esempio, se si ha intenzione di modellare un castello con questo mattoncino, e non si vuole avere nel file tutta questa cronologia ripetuta 500 volte.

Ci sono due modi semplici per sbarazzarsi della storia, uno è con lo strumento [Crea una semplice copia](/Part_SimpleCopy/it "Part SimpleCopy/it") dell'ambiente [Part](/Part_Workbench/it "Part Workbench/it"), che crea una copia del pezzo che non dipende più dalla storia (è possibile eliminare tutta la storia in seguito), l'altro modo è esportare il pezzo come un file STEP e poi reimportarlo.

**Download**

- Il modello prodotto nel corso di questo esercizio: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/lego.FCStd>

**Approfondimenti**

- [Ambiente Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")
- [Ambiente Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it")
- [The Assembly2 Workbench](https://github.com/hamish2014/FreeCAD_assembly2)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Modeling_for_product_design/it&oldid=1538738>"
