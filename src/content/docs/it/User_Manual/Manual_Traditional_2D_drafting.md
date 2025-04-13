---
title: Disegno tradizionale 2D
---

Si può essere interessati a FreeCAD perché si ha già una certa esperienza di disegno tecnico, ad esempio con un software come [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). Si conosce già qualcosa sulla progettazione, oppure si preferisce disegnare le cose prima di costruirle. In ogni caso, FreeCAD dispone di un ambiente di lavoro più tradizionale, con gli strumenti che si trovano nella maggior parte delle applicazioni CAD 2D: l'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it").

L'ambiente Draft, anche se adotta metodi di lavoro ereditati dal tradizionale mondo del CAD 2D, non si limita affatto al regno 2D. Tutti i suoi strumenti lavorano in tutto lo spazio 3D e molti degli strumenti di Draft, ad esempio ![](/images/Draft_Move.svg) [Sposta](/Draft_Move/it "Draft Move/it") o ![](/images/Draft_Rotate.svg) [Ruota](/Draft_Rotate/it "Draft Rotate/it"), sono comunemente utilizzati in tutto FreeCAD, perché sono spesso più intuitivi che cambiare i parametri di posizionamento manualmente.

Tra gli strumenti offerti dall'ambiente Draft, si trovano gli strumenti di disegno tradizionali come ![](/images/Draft_Line.svg) [Linea](/Draft_Line/it "Draft Line/it"), ![](/images/Draft_Circle.svg) [Cerchio](/Draft_Circle/it "Draft Circle/it"), o ![](/images/Draft_Wire.svg) [Wire](/Draft_Wire/it "Draft Wire/it") (polilinea), gli strumenti di modifica come ![](/images/Draft_Move.svg) [Sposta](/Draft_Move/it "Draft Move/it"), ![](/images/Draft_Rotate.svg) [Ruota](/Draft_Rotate/it "Draft Rotate/it") o ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset/it "Draft Offset/it"), un sistema [piano di lavoro con griglia](/Draft_SelectPlane/it "Draft SelectPlane/it") che consente di definire con precisione in quale piano si sta lavorando, e un completo [sistema di aggancio (snap)](/Draft_Snap/it "Draft Snap/it") che rende molto facile disegnare e posizionare gli elementi in relazione tra di loro con precisione.

The snapping system in FreeCAD’s Draft Workbench is designed for precision. Whether working in 2D or 3D, you can snap to critical points like endpoints, midpoints, and centers of circles, making it easy to position elements relative to one another. Modes such as perpendicular, tangent, and intersection snapping further enhance precision. Combined with the working plane and grid system, these tools ensure the accurate alignment of objects and components.

FreeCAD’s parametric nature enables constraints to be applied to drafted elements, ensuring geometric relationships stay intact. For example, you can make lines parallel or perpendicular and set fixed distances between elements. These constraints can be adjusted later, making design changes smooth and consistent across the project. The Draft Workbench also integrates seamlessly with other FreeCAD workbenches, such as Sketcher, which is designed for more constrained parametric 2D design, and TechDraw, which produces technical 2D drawings for documentation purposes.

Advanced features of the Draft Workbench include the ability to import and export files in formats like DXF and SVG, allowing you to work with or share designs with users of other CAD programs. Python scripting further enhances FreeCAD’s capabilities, allowing you to automate tasks or create custom workflows. You can write scripts that generate draft objects based on specific geometric rules, streamlining repetitive tasks.

Per mostrare il funzionamento e le possibilità dell'ambiente Draft, cammineremo attraverso un semplice esercizio, il cui risultato sarà questo piccolo disegno. Esso mostra la planimetria di una piccola casa che contiene solo un top cucina (Un piano abbastanza assurdo, ma qui possiamo fare quello che vogliamo)?:

![](/images/Exercise_cabin_01.jpg)

- Passare nell'ambiente **Draft**
- Come in tutte le applicazioni di disegno tecnico, è bene preparare il proprio ambiente in modo corretto, questo farà risparmiare un sacco di tempo. Configurare le impostazioni [griglia e piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it"), [Testo](/Draft_Text/it "Draft Text/it") e [Dimensioni](/Draft_Dimension/it "Draft Dimension/it") secondo le proprie preferenze nel menu **Modifica → Preferenze → Draft**. In questo esercizio, però, si procederà come se queste impostazioni delle preferenze vengano lasciate ai loro valori predefiniti.

![](/images/Freecad_draft_options_01.jpg)

- L'ambiente Draft ha anche due barre degli strumenti speciali: una con le **impostazioni di visualizzazione**, in cui è possibile cambiare il piano di lavoro corrente, attivare o disattivare la [modalità costruzione](/Draft_ToggleConstructionMode/it "Draft ToggleConstructionMode/it"), impostare il colore della linea, il colore della faccia, lo spessore di linea e le dimensioni del testo da utilizzare per i nuovi oggetti, e un'altra con le **posizioni di aggancio**. Quindi, è possibile attivare o disattivare la griglia e stabilire di volta in volta le posizioni di [Aggancio](/Draft_Snap/it "Draft Snap/it"):

![](/images/Draft_toolbars.jpg)

- L'attivazione di tutti i pulsanti di snap è utile, ma rende anche più lento il disegno, poiché è necessario eseguire più calcoli quando si sposta il cursore del mouse. Spesso è meglio mantenere solo quelli che si usano effettivamente.

- Let's start by turning **construction mode** on, which will allow us to draw some guidelines on which we will draw our final geometry. You can do that by pressing on the ![](/images/Draft_ToggleConstructionMode.svg) [Toggle construction mode](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode") command.
- If you prefer, you can set the working plane to XY. This will lock the working plane, ensuring it remains on the XY plane regardless of how you change the view. If you choose not to do this, the working plane will automatically adapt to the current view, meaning you'll need to ensure you're in the top view whenever you want to draw on the XY (ground) plane to avoid unintended shifts in orientation.

Let's begin laying out the basic shape of our floorplan.

- Iniziare attivando la **modalità costruzione** che permette di disegnare alcune linee guida su cui disegnare la geometria finale.
- Se lo si desidera, impostare il **piano di lavoro** in **XY**. Se si esegue questa operazione, il piano di lavoro non cambia, qualsiasi sia la vista corrente. In caso contrario, il piano di lavoro si adatta automaticamente alla vista corrente, e si deve stare attenti ad essere nella vista dall'alto ogni volta che si vuole disegnare sul piano XY (terra).
- Quindi, selezionare lo strumento ![](/images/Draft_Rectangle.svg) [Rettangolo](/Draft_Rectangle/it "Draft Rectangle/it") e disegnare un rettangolo, a partire dal punto (0,0,0), di 2 metri per 2 metri (lasciando Z a zero). Notare che la maggior parte dei comandi di Draft possono essere eseguiti completamente dalla tastiera, senza toccare il mouse, usando le loro due lettere di scelta rapida. Questo primo rettangolo di 2x2m può essere eseguito da tastiera con: re 0 **Enter** 0 **Enter** 0 **Enter** 2m **Enter** 2m **Enter** 0 **Enter**.
- Duplicare il rettangolo distanziato di 15 centimetri all'interno, utilizzando lo strumento ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset/it "Draft Offset/it"), attivando la sua modalità Copia, e assegnando una distanza di 15cm:

- Duplicate that rectangle by 15cm inside, using the ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset "Draft Offset") tool, turning its Copy mode on, and giving it a distance of 15cm:

![](/images/Exercise_cabin_02.jpg)

- Si possono quindi disegnare un paio di linee verticali per definire dove verranno posizionate le porte e le finestre, utilizzando lo strumento ![](/images/Draft_Line.svg) [Linea](/Draft_Line/it "Draft Line/it") (notare che la casella della modalità "relativa" dovrebbe essere deselezionata per questo passaggio). L'incrocio di queste linee con i due rettangoli fornisce le intersezioni utili per agganciare i muri. Disegnare la prima linea dal punto (15cm, 1m, 0) al punto (15cm, 3m, 0).
- Duplicare la linea 5 volte, usando lo strumento ![](/images/Draft_Move.svg) [Sposta](/Draft_Move/it "Draft Move/it") con la modalità Copia attivata. Attivare anche la modalità Relativa, che permette di definire gli spostamenti in distanze relative, che è più facile che calcolare la posizione esatta di ogni linea. Eseguire ogni operazione di spostamento in sequenza sulla riga creata immediatamente prima. Assegna a ogni nuova copia un punto iniziale, ad esempio puoi lasciarlo a (0,0,0) e i seguenti punti finali relativi:
  - line001: x: 10cm
  - line002: x: 120cm
  - line003: x: -55cm, y: -2m
  - line004: x: 80cm
  - line005: x: 15cm

![](/images/Exercise_cabin_03.jpg)

- Ora c'è tutto quello che serve, quindi si può disattivare la modalità di costruzione. Notare che tutta la geometria di costruzione è stata collocata in un gruppo "Costruzione", che la rende facile da nascondere tutta insieme o addirittura eliminarla completamente in seguito.
- Disegnare due porzioni di muro utilizzando lo strumento ![](/images/Draft_Wire.svg) [Wire](/Draft_Wire/it "Draft Wire/it"). Assicurarsi che lo ![](/images/Draft_Snap_Intersection.svg) [snap intersezione](/Draft_Snap/it "Draft Snap/it") sia attivo, dato che ci si deve agganciare alle intersezioni tra le linee ed i rettangoli. Disegnare due polilinee come segue, facendo clic su tutti i vertici del loro contorno. Per chiuderle, fare di nuovo clic sul primo punto, o premere il pulsante **Chiudi**:

![](/images/Exercise_cabin_04.jpg)

- E' possibile dare alle pareti un bel modello di tratteggio. Selezionare entrambi i muri, assicurarsi che la loro proprietà **Make Face** sia impostata su **`true`**, quindi impostare la loro proprietà **Pattern** su **Simple** e la **Dimensione del motivo** a proprio piacimento, ad esempio **0.005**.

![](/images/Exercise_cabin_05.jpg)

- A questo punto si può nascondere la geometria di costruzione facendo clic destro sul gruppo Construction e scegliendo **Nascondi selezione**.
- Ora disegnare le finestre e le porte. Assicurarsi che lo ![](/images/Draft_Snap_Midpoint.svg) [snap al punto centrale](/Draft_Snap/it "Draft Snap/it") sia attivato, e disegnare sei linee come segue:

![](/images/Exercise_cabin_06.jpg)

- Ora cambiare la linea della porta per creare un simbolo di porta aperta. Iniziare a ruotare la linea utilizzando lo strumento ![](/images/Draft_Rotate.svg) [Ruota](/Draft_Rotate/it "Draft Rotate/it"). Fare clic sul punto finale della linea come centro di rotazione, dargli un angolo iniziale di **0**, e un angolo finale di **-90**.
- Quindi creare l'arco dell'apertura con lo strumento ![](/images/Draft_Arc.svg) [Arco](/Draft_Arc/it "Draft Arc/it"). Scegliere come centro lo stesso punto usato come centro di rotazione nel passaggio precedente, cliccare l'altro punto della linea per assegnare il raggio, quindi i punti di inizio e di fine arco come segue:

![](/images/Exercise_cabin_07.jpg)

- Ora si può iniziare a posizionare alcuni mobili. Per cominciare, collocare un piano di lavoro disegnando un rettangolo dall'angolo interno in alto a sinistra, con una larghezza di 170 centimetri e un'altezza di -60cm. Nell'immagine sottostante, la proprietà **Trasparenza** del rettangolo è impostata su 80%, per dare ai mobili un aspetto piacevole.
- Poi aggiungere un lavandino e un piano cottura. Disegnare questi tipi di simboli a mano può essere molto noioso, e di solito sono facili da trovare su Internet, ad esempio su <http://www.cad-blocks.net> . Da questo sito nella sezione **Download**, per comodità, ci si può procurare un lavandino e un piano cottura separati, e salvarli come file DXF. È possibile scaricare questi due file visitando il link, e facendo clic destro sul pulsante **Raw** , poi su **Salva con nome**.
- L'inserimento di un file DXF in un documento FreeCAD aperto può essere fatto scegliendo l'opzione del menu **File → Importa**, oppure trascinando il file DXF dal file explorer nella finestra di FreeCAD. Il contenuto dei file DXF potrebbero non apparire proprio al centro della visualizzazione corrente, a seconda di dove si trovava nel file DXF. È possibile utilizzare il menu **Visualizza → Viste standard → Visualizza tutto** per adattare la vista e trovare gli oggetti importati. Inserire i due file DXF, e spostarli nella posizione appropriata sul tavolo:

![](/images/Exercise_cabin_08.jpg)

- Ora si possono mettere alcune dimensioni utilizzando lo strumento ![](/images/Draft_Dimension.svg) [Dimensioni](/Draft_Dimension/it "Draft Dimension/it"). Le dimensioni sono disegnate facendo clic su 3 punti: il punto iniziale, il punto finale, e un terzo punto per posizionare la linea di quota. Per rendere le dimensioni orizzontali o verticali, anche se i primi due punti non sono allineati, premere **Shift** mentre si clicca sul secondo punto.
- È possibile modificare la posizione di un testo di quota con un doppio clic sulla dimensione nella vista ad albero. Un punto di controllo permette di spostare il testo graficamente. Nell'esercizio, i testi "0.15" sono stati allontanati per una migliore chiarezza.
- È possibile modificare il contenuto del testo di quota modificando la loro proprietà **Override**. Nell'esempio, il testo delle dimensioni della porta e della finestra sono stati modificati per indicare le loro altezze:

![](/images/Exercise_cabin_09.jpg)

- Aggiungere alcuni testi di descrizione utilizzando lo strumento ![](/images/Draft_Text.svg) [Testo](/Draft_Text/it "Draft Text/it"). Fare clic in un punto per posizionare il testo, quindi inserire le righe di testo, premendo Invio dopo ogni riga. Per finire, premere Invio due volte.
- Le linee di indicazione (chiamate anche "leader" o linee guida) che collegano i testi all'oggetto che descrivono sono fatte semplicemente con lo strumento Wire. Disegnare le linee partendo dalla posizione del testo e andando verso l'oggetto descritto. Fatto ciò, è possibile aggiungere un pallino o una freccia alla fine delle linee impostando la loro proprietà **End Arrow** su **`true`**

![](/images/Exercise_cabin_10.jpg)

- Ora il disegno è completo! Dato che cominciano ad esserci un certo numero di oggetti, sarebbe saggio fare un po' di pulizia e mettere tutto in una bella struttura per gruppi, in modo da rendere il file più comprensibile da altri:

![](/images/Exercise_cabin_11.jpg)

- Ora è possibile stampare il lavoro ponendolo in un foglio di disegno (una pagina di Drawing), che viene spiegato più avanti in questo manuale, o esportare direttamente il disegno per altre applicazioni CAD esportandolo in un file DXF. È sufficiente selezionare il gruppo "Floor plan", selezionare il menu **File → Esporta**, e selezionare il formato di Autodesk DXF. Il file può essere aperto in qualsiasi altra applicazione CAD 2D come [LibreCAD](http://www.librecad.org). Ci possono essere alcune differenze, a seconda delle configurazioni di ciascuna applicazione.

![](/images/Exercise_cabin_12.jpg)

- Però, la cosa più importante di Draft è che la geometria creata con questo ambiente può essere utilizzata come base o facilmente estrusa in oggetti 3D, semplicemente utilizzando lo strumento ![](/images/Part_Extrude.svg) [Estrudi](/Part_Extrude/it "Part Extrude/it") dell'ambiente [Part](/Part_Workbench/it "Part Workbench/it"), o, per rimanere in Draft, lo strumento ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex/it "Draft Trimex/it") (Tronca/Estendi/Estrudi), che in realtà esegue un Estrusione di Parte, ma lo fa "nel modo di Draft", cioè, consente di indicare e agganciare la lunghezza di estrusione graficamente. L'estrusione sarà sperimentata con le pareti come illustrato in seguito.
- Premendo il pulsante ![](/images/Draft_SelectPlane.svg) [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") dopo aver selezionato una faccia di un oggetto, si è anche in grado di posizionare il piano di lavoro ovunque, e quindi di disegnare oggetti Draft in piani diversi, ad esempio sulla parte superiore delle pareti. Questi possono poi essere estrusi per formare altri solidi 3D. Sperimentare l'impostazione del piano di lavoro su una delle facce superiori delle pareti, quindi disegnare dei rettangoli sopra di essa.

![](/images/Exercise_cabin_13.jpg)

- Tutti i tipi di aperture possono anche essere fatte facilmente disegnando degli oggetti Draft sulle facce dei muri, poi estrudendoli, e quindi utilizzando gli strumenti booleani dell'ambiente Parte per sottrarli da un altro solido, come abbiamo visto nel capitolo precedente.

Fondamentalmente, l'ambiente Draft fornisce un modo grafico per creare le operazioni base di Parte. Mentre in Parte di solito gli oggetti si posizionano impostando a mano i loro parametri di posizionamento, in Draft si può farlo sullo schermo. Ci sono casi in cui è meglio uno, e casi in cui è preferibile l'altro. Non dimenticare che è possibile creare una [barra degli strumenti personalizzata](/Interface_Customization/it "Interface Customization/it") in uno di questi ambienti, aggiungere gli strumenti dall'altro, e di ottenere il meglio dei due mondi.

This difference is where the workbenches complement each other. The Draft Workbench is ideal for fast, interactive design, allowing you to draw and position objects without constantly entering precise numerical values. On the other hand, the Part Workbench offers more detailed, parametric control over object properties, making it better suited for highly accurate adjustments, especially in engineering or technical design projects.

The beauty of FreeCAD is that you don't need to choose between one or the other. You can create [custom toolbars](/Interface_Customization "Interface Customization") by combining tools from both the Draft and Part Workbenches, giving you the flexibility to switch between graphical and parametric methods as needed. This allows you to enjoy the best of both worlds—quick, on-screen adjustments from the Draft Workbench and the precision of the Part Workbench—depending on the needs of your project. Additionally, using keyboard shortcuts and custom toolbars can speed up your workflow, making it easy to transition between different operations without interrupting your design process.

## Downloads

- Il file creato durante questo esercizio: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/cabin.FCStd>
- Il file DXF del lavandino: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/sink.dxf>
- Il file DXF del piano cottura: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/cooktop.dxf>
- Il file DXF finale prodotto durante questo esercizio: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/cabin.dxf>

## Correlazioni

- [L'ambiente Draft](/Draft_Workbench/it "Draft Workbench/it")
- [Agganciare gli oggetti](/Draft_Snap/it "Draft Snap/it")
- [Il piano di lavoro di Draft](/Draft_SelectPlane/it "Draft SelectPlane/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Traditional_2D_drafting/it&oldid=1539845>"
