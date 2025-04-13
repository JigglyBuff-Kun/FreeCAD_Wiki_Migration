---
title: Part e PartDesign
---
## Descrizione

Ci sono state molte discussioni nel corso degli anni sulle differenze e le ramificazioni dell'uso degli ambienti ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") e ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").

È una buona idea usare l'uno o l'altro finché l'utente non è a suo agio con uno, poi impara l'altro. È anche tipicamente raccomandato che i nuovi utenti non li confondano finché non hanno capito le differenze.

Parliamo di queste differenze.

## Concetti dell'ambiente Part

L'ambiente Part è essenzialmente un modellatore di [Geometrie solide](/Constructive_solid_geometry/it "Constructive solid geometry/it"). L'operatore combina varie primitive per finire con una rappresentazione della forma desiderata. (In effetti, l'ambiente Part va un passo oltre le primitive e permette all'operatore di usare un'operazione di schizzo+estrusione (o schizzo+rivoluzione, loft, sweep...) per creare anche forme casuali).
Quando ogni primitiva o forma viene creata, non ha alcuna relazione con gli altri oggetti creati (tranne gli schizzi e i loro allegati), è un singolo solido isolato.

![](/images/Part_CSG_Prims.png)

Solidi isolati

Questa condizione rimane tale fino a quando l'operatore usa delle operazioni per combinarli (tipicamente un booleano che li aggiunge o li sottrae).
Ogni solido di partenza rimane accessibile separatamente e l'operazione crea un nuovo oggetto.

Il risultato è la parte solida singola e la combinazione delle parti.

## Concetti dell'ambiente PartDesign

Nell'ambiente PartDesign l'oggetto Body è costruito direttamente come un singolo solido cumulativo isolato.

Il 1° passo di un corpo deve essere un blocco di materiale, creato da una primitiva additiva o un'estrusione di uno schizzo, o una forma importata (poi chiamata Base Feature).

Questo blocco iniziale di materiale sarà cambiato in modo sequenziale fino ad ottenere la forma finale desiderata (solido).

È cumulativo nel senso che ogni operazione aggiunge o toglie materiale.

Per impostazione predefinita, il "tip (Punta, Cima)" del corpo - a meno che non ci sia un cambiamento volontario nella visualizzazione di una particolare caratteristica - è l'ultima operazione eseguita sul corpo. Questo è lo stato attuale e visibile del corpo, pronto per essere cambiato di nuovo da una nuova funzione.

Qualsiasi funzione al di sotto del corpo rappresenta la forma cumulativa del solido dalla prima caratteristica alla caratteristica considerata.

Così **per avere il solido completo**, da un lato la caratteristica Tip deve essere l'ultima tappa della costruzione di questo solido, e dall'altro **è il corpo che deve essere selezionato** e non una fase della sua costruzione.

Questo permetterà, in caso di modifica, di *avere sempre l'ultima versione del solido rappresentata*.

**Note e aggiunte :**
In ogni momento della costruzione, l'ultima funzione utilizzata è il "Tip (Punta, Cima)", che può essere definita anche come "fase attiva nella costruzione dell'oggetto" o "fase che precede l'azione successiva nella costruzione dell'oggetto".
Quando il disegno dell'oggetto è completo, la punta è naturalmente l'ultima fase o caratteristica della costruzione.
Ma se lo si desidera, in caso di dimenticanza, qualsiasi caratteristica della costruzione può essere dichiarata provvisoriamente come Tip: essa diventa allora la tappa che precede l'azione successiva nella costruzione dell'oggetto, il che significa che una o più nuove caratteristiche possono essere inserite ovunque nella costruzione, **a condizione che non si creino incompatibilità con la sequenza**.

Quando tutto è finito, bisogna ridichiarare l'ultima caratteristica come Tip, che corrisponde all'oggetto finito.

![](/images/Part_Design_Cumulativ.png)

Corpo solido cumulativo

Questa immagine mostra un Corpo. È un solido cumulativo che consiste in uno schizzo estruso e in una primitiva conica. Questo è un solido singolo.

Se Tip su *Pad*, il solido estruso può esistere separatamente, ma se Tip su *Cono*, il cono non può esistere separatamente (Tip su cono = solido estruso + cono).

(Un'altra cosa menzionata spesso è che un Corpo  ***DEVE*** essere un singolo solido contiguo. Questo significa che tutta la geometria creata da una caratteristica nel Corpo *deve* toccare il suo predecessore).

## Le conseguenze

Anche se non è raccomandato ai nuovi utenti, è possibile combinare gli strumenti dell'ambiente Part e dell'ambiente PartDesign, purché si sappia cosa si sta facendo. Per esempio :

Le persone vengono colte di sorpresa quando tentano di usare qualche caratteristica sotto il corpo (piuttosto che il corpo stesso) come una selezione di un'operazione booleana nell'ambiente Part. Questo è un problema, perché la caratteristica selezionata non rappresenta **IL** solido completo.

In un certo senso, dal punto di vista dell'ambiente Part, il corpo rappresenta un'altra primitiva. Quindi, si puoò usare un corpo (ricordate che è un proxy per la punta) e un oggetto Part per fare un operazione booleana. Ma l'oggetto risultante è un oggetto dell'ambiente Part. E quindi gli strumenti dell'ambiente PartDesign non possono più essere usati.

E può diventare ancora più complicato. Se si crea un nuovo corpo e vi si trascina il risultato del paragrafo precedente, si crea un BaseObject. E su questo si può andare ad usare gli strumenti dell'ambiente PartDesign.

## Le avvertenze

C'è un'avvertenza con la Punta (ultima funzione sul solido) e la sua rappresentazione del singolo solido nel Corpo. Se la punta è una caratteristica sottrattiva ed è usata in un'operazione estetica, per esempio uno Specchio, lo Specchio sta operando sulla caratteristica sottostante (una tasca per esempio). Così il solido cumulativo non viene specchiato, ma la caratteristica sottrattiva sì. Il risultato di questo deve creare un unico solido.

In questo esempio, uno specchio della punta (che è la tasca della cavità) intorno a uno qualsiasi dei piani di base, o anche una faccia del solido non produrrà un solido specchiato dell'intero modello. (Infatti, produrrà una funzione speculare nell'albero che è essenzialmente vuota).

![](/images/PhantomMirror.png)

Solidi isolati

In questo esempio, uno specchio della punta (che è la tasca della cavità) viene eseguito intorno al piano di riferimento e produce una cavità speculare:

![](/images/MirroredSlot.png)

Solidi isolati

Vedere la pagina ![](/images/PartDesign_Mirrored.svg) [PartDesign Simmetria](/PartDesign_Mirrored/it "PartDesign Mirrored/it") wiki dello strumento per maggiori informazioni.

## Confronto

Potete vedere qui sotto lo stesso esempio costruito con ciascuno dei due ambienti di lavoro. Naturalmente, ci sono sempre diversi tempi di costruzione possibili con ogni ambiente di lavoro.

![](/images/PartWBvsPartDesignWBexample.jpg)

Confronto tra costruzioni realizzate con gli ambienti Part e PartDesign

| Nell'ambiente  PartDesign | Nell'ambiente  Part |
| --- | --- |
| 01-  Crea Corpo >  Crea uno schizzo sul piano XZ | 01-  Ambiente Sketcher >  Crea uno schizzo sul piano XZ |
|  |  |

|  |  |
| --- | --- |
| 02-  Rivoluzione (Ambiente Part Design) / Z | 02-  Rivoluzione (Ambiente Part) / Z |
|  |  |

|  |  |
| --- | --- |
| 03-  Nuovo schizzo nel piano XY | 03-  Ambiente Sketcher >  Nuovo schizzo nel piano XY |
|  |  |

|  |  |
| --- | --- |
| 04-  Tasca | 04a-  Estrusione |
|  |  |

|  |  |
| --- | --- |
|  | 04b-  Taglia |
|  |  |

|  |  |
| --- | --- |
| 05-  Nuovo schizzo nel piano XZ | 05-  Ambiente Sketcher >  Nuovo schizzo nel piano XZ |
|  |  |

|  |  |
| --- | --- |
| 06-  Prisma simmetrico al piano XZ | 06a-  Estrudi simmetrico al piano XZ |
|  |  |

|  |  |
| --- | --- |
|  | 06b-  Ambiente Draft  Polar Array |
|  |  |

|  |  |
| --- | --- |
|  | 06c-  Unione |
|  |  |

|  |  |
| --- | --- |
| 07-  Nuovo schizzo sulla faccia planare di base | 07-  Ambiente Sketcher >  Nuovo schizzo nel piano XZ |
|  |  |

|  |  |
| --- | --- |
| 08-  Foro | 08a-  Rivoluzione |
|  |  |

|  |  |
| --- | --- |
|  | 08b-  Ambiente Draft  Polar Array |
|  |  |

|  |  |
| --- | --- |
| 09-  Serie polare del foro e del prisma | 09-  Taglia |
|  |  |

Confrontare gli alberi di costruzione nei due banchi di lavoro così come la loro organizzazione e la linea temporale di lettura:

|  |  |
| --- | --- |
| 10- Albero di costruzione in PartDesign | 10- Albero di costruzione in Part |
|  |  |

## Conclusione

Gli ambienti di lavoro Part e PartDesign possono essere usati insieme con una certa attenzione, creando modelli abbastanza complessi.

[Torna su](#Top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_and_PartDesign/it&oldid=1448811>"