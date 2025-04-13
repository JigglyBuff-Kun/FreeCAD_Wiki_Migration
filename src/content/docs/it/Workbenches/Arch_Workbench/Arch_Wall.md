---
title: Arch Muro
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                        |
| ------------------------------------------------------ |
| Muro                                                   |
| Posizione nel menu                                     |
| Architettura → Muro                                    |
| Ambiente                                               |
| [Architettura](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                           |
| W A                                                    |
| Introdotto nella versione                              |
| -                                                      |
| Vedere anche                                           |
| [Struttura](/Arch_Structure/it "Arch Structure/it")    |
|                                                        |

## Descrizione

Questo strumento crea un oggetto Muro utilizzando come base una [forma](/Part_Workbench/it "Part Workbench/it") o oggetto [mesh](/Mesh_Workbench/it "Mesh Workbench/it"). Un muro può essere costruito anche senza alcun oggetto di base, nel qual caso si comporta come un _volume cubico_, utilizzando le proprietà lunghezza, larghezza e altezza. Quando è costruito usando una forma esistente, un muro può essere basato su:

- Un **oggetto lineare 2D**, come ad esempio una linea, un arco, una spezzata o uno schizzo, in questo caso è possibile modificarne lo spessore, l'allineamento (a destra, a sinistra o al centro) e l'altezza. La proprietà length non ha alcun effetto.
- Una **faccia** o una superficie piana, nel qual caso si può modificare solo l'altezza. Le proprietà Lunghezza e larghezza non hanno alcun effetto. Se la faccia di base è verticale, invece, il muro utilizza la proprietà larghezza invece di altezza, e consente di costruire pareti usando lo spazio come oggetto o studi della massa.
- Un **solido**, nel qual caso non è possibile cambiare nulla. Il muro utilizza semplicemente il solido base come sua forma.
- Un **mesh**, nel qual caso il mesh deve essere un solido chiuso, cioè un solido manifold.

![](/images/Arch_Wall_example.jpg)

Pareti costruite su un segmento, su una spezzata, su una faccia, su un solido e su uno schizzo.

Agli oggetti Muro si possono anche applicare _Aggiunte_ o _Sottrazioni_. Le Aggiunte sono altri oggetti le cui forme sono unite alla forma Muro in lavorazione, mentre le Sottrazioni sono forme che vengono eliminate.

Le Aggiunte e le Sottrazioni si eseguono con gli strumenti [Aggiungi componente](/Arch_Add/it "Arch Add/it") e [Rimuovi componente](/Arch_Remove/it "Arch Remove/it"). Le Aggiunte e le Rimozioni non hanno alcuna influenza sui parametri del muro, tipo altezza e larghezza, che possono ancora essere modificati.

I muri possono anche avere l'altezza automatica, se sono incluse in un oggetto di livello superiore, tipo il [Piano](/Arch_Floor/it "Arch Floor/it"). L'altezza deve essere impostata a 0, così il muro adotta l'altezza specificata per l'oggetto genitore.

Quando più muri devono essere intersecati, è necessario inserirli in un [piano](/Arch_Floor/it "Arch Floor/it") per ottenere la loro geometria intersecata.

## Utilizzo

### Disegnare un muro dall'inizio

1. Premere il pulsante ![](/images/Arch_Wall.svg) Muro, oppure premere i tasti W e poi A.
2. Definire un primo punto nella vista 3D, o digitare le sue coordinate.
3. Definire un secondo punto nella vista 3D, o digitare le sue coordinate.

### Disegnare un muro su un oggetto selezionato

1. Selezionare uno o più oggetti per la geometria di base (oggetti Draft, schizzi, etc)
2. Premere il pulsante ![](/images/Arch_Wall.svg) Muro, oppure premere i tasti W e poi A
3. Regolare, se necessario, le proprietà, come altezza o larghezza.

## Opzioni

- Gli elementi Muro condividono le proprietà e i comportamenti comuni di tutti i [Componenti Arch](/Arch_Component/it "Arch Component/it")
- L'altezza, la larghezza e l'allineamento di un muro può essere impostato durante il disegno, tramite il pannello delle Azioni.
- Quando aggancia una parete di una parete esistente, entrambe le pareti si uniscono in una sola. Il modo in cui sono unite le due pareti dipende dalle loro proprietà. Se hanno la stessa larghezza, altezza e orientamento, la parete risultante sarà un oggetto basato su uno schizzo composto da più segmenti. Altrimenti, l'ultima parete verrà unita alla prima come oggetto aggiunta.
- Premere X, Y o Z dopo il primo punto per vincolare il secondo punto su un dato asse.
- Per inserire le coordinate manualmente, è sufficiente inserire il valore, quindi premere Invio tra ogni componente X, Y e Z .
- Premere R oppure fare clic sulla casella di controllo per selezionare o deselezionare la modalità Relativo. In modalità Relativo, le coordinate del secondo punto sono relative al primo. In caso contrario sono assolute, a partire dal punto di origine (0,0,0).
- Premere Maiusc mentre si disegna per [vincolare](/Draft_Constrain/it "Draft Constrain/it") orizzontalmente o verticalmente il secondo punto rispetto al primo.
- Premere Esc o premere il pulsante Cancella per uscire dal comando attivo.
- Facendo doppio clic sul muro nella vista ad albero dopo la sua creazione si attiva la modalità di modifica che permette di accedere alle sue addizioni e sottrazioni e di modificarle .
- I muri multistrato possono essere facilmente creati costruendo diversi muri sulla stessa linea base. Impostando la proprietà Align a destra o a sinistra e specificando un valore di offset, si possono costruire efficacemente i diversi strati della parete. Inserendo una finestra in uno degli strati della parete l'apertura si propaga in tutti gli strati della parete creati con la stessa linea base.
- I muri possono anche utilizzare i [Multi-Materiali](/Arch_MultiMaterial/it "Arch MultiMaterial/it"). Quando si utilizza un multi-materiale, la parete diventa multistrato, utilizzando gli spessori specificati nel multi-materiale. A qualsiasi strato con uno spessore pari a zero viene assegnato lo spessore definito automaticamente dallo spazio rimanente definito dal valore Width della parete meno gli altri strati.
- I muri possono essere fatti per mostrare blocchi, invece di un singolo solido, attivando la proprietà Dati**Make Blocks**. La dimensione e l'offset dei blocchi possono essere configurati con proprietà diverse e la quantità di blocchi viene calcolata automaticamente.

## Aggancio

Con i muri dell'ambiente Arch l'aggancio funziona un po' diversamente da come funziona con gli altri oggetti di Arch e di Draft. Quando un muro è basato su un oggetto l'aggancio crea un ancoraggio all'oggetto base, e non alla geometria muro, consentendo di allineare facilmente i muri tramite le loro linee base. Quando invece si desidera agganciare la geometria muro, premere Ctrl per trasferire l'ancoraggio all'oggetto muro.

![](/images/Arch_wall_snap.jpg)

Seconda parete che si collega perpendicolarmente alla prima

## Proprietà

An Arch Wall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Dati

Blocks

- Dati**Block Height**: L'altezza di ogni blocco.
- Dati**Block Length**: La lunghezza di ogni blocco.
- Dati**Count Broken**: Il numero di blocchi interrotti (sola lettura).
- Dati**Count Entire**: Il numero di blocchi interi (sola lettura).
- Dati**Joint**: La dimensione delle giunzioni tra ogni blocco, lo spazio vuoto tra i blocchi.
- Dati**Make Blocks**: Abilita la generazione dei blocchi.
- Dati**Offset First**:L'offset orizzontale della prima fila e di ogni fila irregolare di blocchi.
- Dati**Offset Second**: L'offset orizzontale della seconda fila e di ogni fila pari di blocchi.

Componente

Vedere [Arch: Componente](/Arch_Component/it#Proprietà "Arch Component/it").

IFC

Vedere [Arch: Componente](/Arch_Component/it#Proprietà "Arch Component/it").

IFC Attributes

Vedere [Arch: Componente](/Arch_Component/it#Proprietà "Arch Component/it").

Muro

: ![](/images/Sketch_vs_Wall.jpg)

- Dati**Align**: L'allineamento del muro sulla sua linea di base: a sinistra, a destra o al centro.
- Dati**Area**: Area della parte interna del muro, la suddivisione in blocchi non fa alcuna differenza (sola lettura).
- Dati**Face**: L'indice della faccia dell'oggetto base da usare. Se il valore non è impostato o è 0, viene utilizzato l'intero oggetto
- Dati**Height**: Ignorato se il muro è basato su un solido. Se impostato a zero, e il muro è all'interno di un oggetto [piano](/Arch_Floor/it "Arch Floor/it") con la sua altezza definita, il muro assumerà automaticamente il valore dell'altezza del pavimento.
- Dati**Length**: La lunghezza del muro (non utilizzato quando il muro è basato su un oggetto)
- Dati**Normal**: La direzione di estrusione per il muro. Se è impostata a (0,0,0), la direzione di estrusione è automatica.
- Dati**Offset**: La distanza tra il muro e la sua linea base. Funziona solo se la proprietà **Align** è impostata a destra o a sinistra.
- Dati**Override Align**:
- Dati**Override Width**: sovrascrive l'attributo Dati**Width** per impostare la larghezza di ciascun segmento di un muro. Ignorato se l'oggetto Dati**Base** fornisce informazioni sulla larghezza con il metodo `getWidths()`. Il primo valore sovrascrive Dati**Width** per il primo segmento di muro, questo valore viene utilizzato anche al posto di qualsiasi valore zero nel resto dell'elenco.
- Dati**Width**: La larghezza del muro. Ignorato se il muro è basato su una faccia o su un solido.

## Scripting

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Muro può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

- Crea un oggetto `Wall` dal `baseobj` dato, che può essere un [oggetto Draft](/Draft_Workbench/it "Draft Workbench/it"), uno [Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it"), una faccia, o un solido.
  - Se non viene dato un `baseobj`, si posssono fornire i valori numerici per `length`, `width` (thickness), e `height`.
  - Se `face` è data, essa può essere usata per dare l'indice della faccia a partire dall'oggetto sottostante, invece di usare l'intero oggetto per costruire il muro.
- `align` può essere `"Center"`, `"Left"` o `"Right"`.
- Se l'operazione fallisce restituisce `None`.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/it&oldid=1548506>"
