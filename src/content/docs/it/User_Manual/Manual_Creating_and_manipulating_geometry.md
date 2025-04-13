---
title: Creare e manipolare la geometria
---

Nei capitoli precedenti, abbiamo esplorato i vari ambienti di lavoro in FreeCAD e come ciascuno introduce il proprio insieme di strumenti e tipi di geometria. Gli stessi principi si applicano quando si lavora con FreeCAD tramite script Python.

Abbiamo anche osservato che la maggior parte degli ambienti di lavoro di FreeCAD si basa su un ambiente di lavoro fondamentale: l'![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench "Part Workbench"). Molti altri ambienti di lavoro, come ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench "Draft Workbench"), utilizzano gli strumenti e la geometria dell'ambiente Part, che è esattamente ciò che faremo in questo capitolo: utilizzare Python per creare e manipolare la geometria Part.

Per iniziare a lavorare con la geometria Part in Python, dobbiamo eseguire lo script equivalente al passaggio all'ambiente Part: importare il modulo Part.

```
import Part

```

Prendersi un momento per esplorare il modulo Part digitando **Part.** nella console Python e sfogliando i metodi e gli attributi disponibili nella finestra di completamento automatico. Questo è un ottimo modo per familiarizzare con le funzionalità offerte dal modulo. Si troveranno una varietà di comode funzioni, come makeBox e makeCircle, che consentono di creare rapidamente forme geometriche e oggetti con un solo comando. Molte di queste funzioni offrono anche parametri opzionali, offrendo un controllo preciso su dimensioni e posizionamento.

Dedicare un po' di tempo ad esplorare i contenuti del modulo non solo aiuta a capire quali strumenti sono a propria disposizione, ma fornisce anche informazioni su come funziona l'ambiente Part. Questa conoscenza fondamentale si rivelerà preziosa man mano che si andrà avanti e si inizieranno a creare e manipolare la geometria a livello di codice. Digitare il seguente comando

```
Part.makeBox(3,5,7)

```

Questo comando crea un box 3D, noto anche come prisma rettangolare, con dimensioni specifiche. Il primo parametro, 3, definisce la lunghezza del box lungo l'asse X. Il secondo parametro, 5, imposta la larghezza lungo l'asse Y, mentre il terzo parametro, 7, specifica l'altezza lungo l'asse Z. Sebbene questa funzione generi la geometria del box, non la aggiunge automaticamente al documento attivo di FreeCAD. Nella console Python si vedrà quanto segue:

```
<Solid object at 0x5f43600>

```

L'output **<Solid object at 0x5f43600>** indica che una Part Shape è stata creata in memoria. Si tratta di un oggetto geometrico memorizzato in uno specifico indirizzo di memoria, come mostrato dal valore esadecimale (0x5f43600). Tuttavia, è importante capire che ciò che abbiamo creato qui non è ancora un oggetto documento di FreeCAD: esiste solo come forma geometrica grezza in memoria.

Questa distinzione evidenzia un concetto fondamentale in FreeCAD: gli oggetti e la loro geometria sono indipendenti. Un oggetto documento di FreeCAD funge da contenitore che ospita una forma. Questi oggetti documento possono avere proprietà aggiuntive, come Lunghezza, Larghezza e Altezza, e possono essere parametrici. Gli oggetti parametrici ricalcolano dinamicamente la loro geometria (o forma) ogni volta che una delle loro proprietà cambia. Ad esempio, la modifica della lunghezza di un box parametrico ne rigenererà automaticamente la forma con il valore aggiornato.

boxShape = Part.makeBox(3,5,7)

```
myObj = FreeCAD.ActiveDocument.addObject("Part::Feature","MyNewBox")
myObj.Shape = boxShape
FreeCAD.ActiveDocument.recompute()

```

Questa separazione tra forme e oggetti del documento è ciò che rende FreeCAD altamente versatile, consentendo agli utenti di manipolare le forme a livello di codice e integrarle in un flusso di lavoro di modellazione parametrica secondo necessità.

Ora possiamo creare facilmente un "generico" document object nel documento corrente (assicurarsi di avere almeno un nuovo documento aperto), e assegnargli la forma box che abbiamo appena creato:

```
boxShape = Part.makeBox(3,5,7)
myObj = FreeCAD.ActiveDocument.addObject("Part::Feature","MyNewBox")
myObj.Shape = boxShape
FreeCAD.ActiveDocument.recompute()

```

Ecco una spiegazione dei comandi precedenti:

- **boxShape = Part.makeBox(3,5,7)**: crea un box 3D con dimensioni 3x5x7 (lunghezza, larghezza e altezza) e la memorizza come forma di parte nella variabile boxShape. Questa forma esiste solo in memoria e non fa ancora parte del documento di FreeCAD.

- **myObj = FreeCAD.ActiveDocument.addObject("Part::Feature", "MyNewBox")**: Aggiunge un nuovo oggetto Part::Feature denominato "MyNewBox" al documento attivo di FreeCAD e lo assegna alla variabile mioObj. Il nuovo oggetto apparirà nell'albero del documento di FreeCAD.

- **myObj.Shape = boxShape**: Collega la geometria boxShape alla proprietà Shape di myObj, integrando la geometria nel documento di FreeCAD.

- **FreeCAD.ActiveDocument.recompute()**: Aggiorna il documento per riflettere le modifiche, assicurando che il nuovo oggetto e la sua geometria appaiano nell'interfaccia grafica.

print(boxShape.Vertexes)

```
print(boxShape.Edges)
print(boxShape.Wires)
print(boxShape.Faces)
print(boxShape.Shells)
print(boxShape.Solids)

```

Per ora, esploriamo le forme delle parti in modo più dettagliato. Nel capitolo sulla modellazione tradizionale con l'ambiente Part, abbiamo introdotto una tabella che spiega come sono costruite le forme delle parti e i diversi componenti di cui sono costituite, come **vertexes**, **edges** e **faces** (vertici, bordi, facce). Questi stessi componenti sono disponibili quando si lavora con Part Shapes in Python, consentendo l'esplorazione e la manipolazione dettagliata della geometria. Le forme delle parti in FreeCAD hanno sempre i seguenti attributi:

- **Vertexes** (Vertici): Punti nello spazio 3D che definiscono gli angoli o i punti finali della geometria.
- **Edges** (Bordi): Linee rette o curve che collegano due vertici.
- **Wires** (Polilinee): Anelli chiusi o aperti formati da uno o più bordi collegati.
- **Faces** (Facce): Superfici racchiuse da una o più polilinee.
- **Shells** (Gusci): Gruppi di facce collegate, che formano una superficie continua.
- **Solids** (Solidi): Volumi 3D racchiusi da uno o più gusci.

Tutti questi attributi sono rappresentati come elenchi in Python. Ciascun elenco può contenere un numero qualsiasi di elementi o essere vuoto, a seconda della forma esplorata. Ad esempio, un box avrà otto **Vertexes**, dodici **Edges**, sei **Faces**, una **Shell** e un **Solid**, mentre una linea avrà solo due **Vertexes** e un **Edge**, con tutti gli altri attributi vuoti. Questi componenti sono elementi costitutivi fondamentali della geometria della parte ed è possibile accedervi e manipolarli a livello di programmazione. Comprendere come interagiscono fornisce un controllo potente sulla creazione e la modifica dei modelli 3D. E' possibile accedere a tali elenchi come segue:

```
print(boxShape.Vertexes)
print(boxShape.Edges)
print(boxShape.Wires)
print(boxShape.Faces)
print(boxShape.Shells)
print(boxShape.Solids)

```

Troviamo l'area di ciascuna faccia del nostro box: (Assicurarsi di rientrare la seconda riga, come appare di seguito. Premere Invio due volte dopo l'ultima riga per eseguire il comando Python.)

```
for f in boxShape.Faces:
   print(f.Area)

```

Oppure, per ciascun bordo, il punto iniziale e il punto finale:

```
for e in boxShape.Edges:
   print("New edge")
   print("Start point:")
   print(e.Vertexes[0].Point)
   print("End point:")
   print(e.Vertexes[1].Point)

```

Come si vede, se il nostro boxShape ha un attributo "Vertexes", anche ogni bordo del boxShape ha un attributo "Vertexes". Come possiamo aspettarci, boxShape avrà 8 vertici, mentre il bordo ne avrà solo 2, che fanno entrambi parte della lista di 8.

Possiamo sempre controllare il tipo di una forma:

```
print(boxShape.ShapeType)
print(boxShape.Faces[0].ShapeType)
print(boxShape.Vertexes[2].ShapeType)

```

Ecco una breve spiegazione dei comandi precedenti:

- **print(boxShape.ShapeType)**: Visualizza il tipo della forma di primo livello rappresentata da **boxShape**. In questo caso, poiché **boxShape** è stato creato come un box utilizzando **Part.makeBox**, l'output sarà "Solid", indicando che la forma è un oggetto solido 3D.

- **print(boxShape.Faces[0].ShapeType)**: Accede alla prima faccia nell'elenco **Faces** di **boxShape** (indice 0) e stampa il suo tipo di forma . Per un box, ogni faccia è una superficie piana, quindi l'output sarà "Face".

- **print(boxShape.Vertexes[2].ShapeType)**: Accede al terzo vertice nell'elenco **Vertexes** di **boxShape** (indice 2) e stampa il suo tipo di forma . Poiché si tratta di un punto specifico nello spazio 3D, l'output sarà "Vertex".

Per riassumere il concetto di Part Shapes: Tutto inizia con **Vertexes**, gli elementi più elementari della geometria. Usando uno o due **Vertexes**, si può creare un **Edge** (notare che i cerchi completi richiedono solo un **Vertex**). Uno o più **Edges** possono quindi formare un **Wire**, che può essere aperto o chiuso. Quando si ha uno o più **Wires** chiusi, si può creare una **Face**. Ulteriori **Wires** all'interno del **Wire** principale fungeranno da "buchi" nella **Face**. La combinazione di una o più **Faces** consente di costruire una **Shell**, che è essenzialmente una raccolta di superfici connesse. Se un **Shell** è completamente chiusa e impermeabile, può essere utilizzata per formare un **Solid**, un oggetto 3D con volume. Infine, un numero qualsiasi di forme di qualsiasi tipo, inclusi **Vertexes**, **Edges**, **Wires**, **Faces**, **Shells** , o **Solids**, possono essere raggruppati insieme in un **Compound** (o composto), che funge da contenitore per più forme.

Ora proviamo a creare da zero forme complesse, con la costruzione di tutte le loro componenti una per una. Per esempio, cerchiamo di creare un volume come questo:

![](/images/Exercise_python_03.jpg)

Inizieremo con la creazione di una forma planare come questa:

![](/images/Wire.png)

In primo luogo, creiamo i quattro punti di base:

```
V1 = FreeCAD.Vector(0,10,0)
V2 = FreeCAD.Vector(30,10,0)
V3 = FreeCAD.Vector(30,-10,0)
V4 = FreeCAD.Vector(0,-10,0)

```

Poi possiamo creare i due segmenti lineari:

![](/images/Line.png)

```
L1 = Part.LineSegment(V1,V2)
L2 = Part.LineSegment(V4,V3)

```

Tenere presente che non è stato necessario creare esplicitamente **Vertexes**. Invece, potremmo creare direttamente **Part.LineSegments** utilizzando **FreeCAD Vectors**. Questo perché in questa fase stiamo lavorando con la geometria di base, non con gli **Edges** effettivi. Un **Part.LineSegment**, così come **Part.Circle**, **Part.Arc**, **Part.Ellipse** o **Part. BSpline**, definisce la geometria sottostante ma non genera un bordo da solo. In FreeCAD, i bordi sono sempre costruiti a partire da tale geometria di base, che è memorizzata nell'attributo **Curve** di **Edge**. Ciò significa che un edge (bordo) è essenzialmente un involucro attorno alla geometria di base, ereditandone le proprietà. Se si ha un bordo, si può accedere alla sua geometria sottostante facendo riferimento all'attributo curva. Il seguente comando:

```
print(Edge.Curve)

```

permette di comprendere la struttura sottostante del bordo e come è stata costruita. Ora torniamo al nostro esercizio e procediamo con la costruzione dei segmenti dell'arco. Per creare un arco, abbiamo bisogno di tre punti: un punto iniziale, un punto finale e un punto medio che determina la curvatura. A questo scopo possiamo utilizzare la comoda funzione **Part.Arc**, che prende questi tre punti come input e genera la geometria base per un arco.

![](/images/Circel.png)

```
VC1 = FreeCAD.Vector(-10,0,0)
C1 = Part.Arc(V1,VC1,V4)
VC2 = FreeCAD.Vector(40,0,0)
C2 = Part.Arc(V2,VC2,V3)

```

Ora abbiamo 2 linee (L1 e L2) e 2 archi (C1 e C2). Bisogna trasformarli in bordi:

```
E1 = Part.Edge(L1)
E2 = Part.Edge(L2)
E3 = Part.Edge(C1)
E4 = Part.Edge(C2)

```

In alternativa, le geometrie di base hanno anche una funzione **toShape()** che fa esattamente la stessa cosa:

```
E1 = L1.toShape()
E2 = L2.toShape()
 ...

```

Una volta che abbiamo una serie di bordi, possiamo ora formare un **Wire**, dandogli un elenco di bordi. Dobbiamo prestare attenzione all'ordine. Inoltre, notare le parentesi.

```
W = Part.Wire([E1,E4,E2,E3])

```

E siamo in grado di verificare se il nostro wire è stato compreso e chiuso correttamente:

```
print( W.isClosed() )

```

Che stamperà "True" o "False". Per creare una **Face**, abbiamo bisogno di **closed Wires**, quindi è sempre una buona idea verificarlo prima di creare la faccia. Ora possiamo creare una faccia, assegnandole un singolo wire (o una lista di wire se vogliamo dei buchi):

```
F = Part.Face(W)

```

Poi la estrudiamo:

```
P = F.extrude(FreeCAD.Vector(0,0,10))

```

Si noti che P è già un **Solid**:

```
print(P.ShapeType)

```

Questo perché quando si estrude una sola faccia, si ottiene sempre una solido. Non è così se, ad esempio, si estrude invece un wire:

```
S = W.extrude(FreeCAD.Vector(0,0,10))
print(S.ShapeType)

```

Che ovviamente ci dà un guscio vuoto, con le facce superiore e inferiore mancanti.

Ora che abbiamo la forma finale, siamo ansiosi di vederla sullo schermo! Quindi creiamo un oggetto generico, a cui attribuire il nostro nuovo Solid:

```
myObj2 = FreeCAD.ActiveDocument.addObject("Part::Feature","My_Strange_Solid")
myObj2.Shape = P
FreeCAD.ActiveDocument.recompute()

```

In alternativa, il modulo Part fornisce anche una scorciatoia che esegue più velocemente l'operazione descritta sopra (ma non è possibile scegliere il nome dell'oggetto):

```
Part.show(P)

```

Tutto quanto detto sopra, e molto altro ancora, è spiegato in dettaglio nella pagina [Script di Part](/Topological_data_scripting/it "Topological data scripting/it"), insieme agli esempi.

**Approfondimenti**:

- [L'ambiente Part](/Part_Workbench/it "Part Workbench/it")
- [Script di Part](/Topological_data_scripting/it "Topological data scripting/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Creating_and_manipulating_geometry/it&oldid=1533999>"
