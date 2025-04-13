---
title: PartDesign Estrusione
---
|  |
| --- |
| Estrusione |
| Posizione nel menu |
| Part Design → Crea una funzione additiva → Estrusione |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it") |
|  |

## Descrizione

Lo strumento **Estrusione** estrude uno schizzo o una faccia di un solido lungo un percorso rettilineo.

![](/images/PartDesign_Pad_example.svg)

*A sinistra è mostrato lo Schizzo (A); a destra il risultato finale dopo l'operazione di estrusione (B).*

## Utilizzo

1. Selezionare uno schizzo singolo o una o più facce dal Corpo.
2. Premere il pulsante ![](/images/PartDesign_Pad.svg) Pad.
3. Impostare i parametri di estrusione, vedere le [Opzioni](#Opzioni) di seguito.
4. Premere il pulsante OK.

## Opzioni

Quando si crea una estrusione, o dopo aver fatto doppio clic su una estrusione esistente nella [Vista ad albero](/Tree_view/it "Tree view/it"), viene visualizzato il pannello delle attività **Parametri estrusione**. Il quale offre le seguenti impostazioni:

![](/images/PartDesign_Pad_Taskpanel.png)

### Tipo

Tipo offre cinque modi diversi per specificare la lunghezza della estrusione:

#### Quota

Inserire un valore numerico per la **Lunghezza** della estrusione. Con l'opzione **Simmetrica al piano** l'estrusione si estenderà per metà della lunghezza data su entrambi i lati dello schizzo o della faccia.

#### Fino all'ultimo

L'estrusione si estende fino all'ultima faccia del supporto, che incontra nella sua direzione. Se non c'è alcun supporto, verrà visualizzato un messaggio di errore.

#### Fino al primo

L'estrusione si estende fino alla prima faccia del supporto, che incontra nella sua direzione. Se non c'è alcun supporto, verrà visualizzato un messaggio di errore.

#### Fino alla faccia

L'estrusione si estende fino a una faccia. Premere il pulsante Selezionare una faccia e selezionare una faccia o un [piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it") dal corpo.

#### Due dimensioni

Questo consente di inserire una seconda lunghezza nella direzione opposta in cui l'estrusione si deve estendere. Le direzioni possono essere invertite selezionando l'opzione **Invertita**.

#### Fino alla forma

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): L'estrusione si estende fino alla forma selezionata. Facoltativamente, premere il pulsante Seleziona forma e selezionare una forma. Lasciare abilitata la casella di controllo Seleziona tutte le facce o disabilitarla, in questo caso premere il pulsante Seleziona e selezionare le facce fino alle quali deve essere creata l'estrusione.

### Scostamento dalla faccia

Offset dalla faccia su cui terminerà l'estrusione. Questa opzione è disponibile solo se **Tipo** è **Fino all'ultimo**, **Fino al primo** o **Fino alla faccia**.

### Quota

Definisce la lunghezza della estrusione. Questa opzione è disponibile solo se **Tipo** è **Quota** o **Due dimensioni**. La lunghezza viene misurata lungo il vettore di direzione o lungo la normale dello schizzo o della faccia. Non sono possibili valori negativi. Utilizzare piuttosto l'opzione **Invertita**.

### Seconda lunghezza

Definisce la lunghezza della estrusione nella direzione opposta. Questa opzione è disponibile solo se **Tipo** è **Due dimensioni**.

### Simmetrica al piano

Selezionare questa opzione per estrudere metà della lunghezza specificata su entrambi i lati dello schizzo o della faccia. Questa opzione è disponibile solo se **Tipo** è **Quota**.

### Invertita

Inverte la direzione dell'estrusione.

### Direzione

#### Direzione/bordo

È possibile selezionare la direzione dell'estrusione:

* **Normale allo schizzo** or **Faccia normale:** Lo schizzo o la faccia vengono estrusi nella direzione della loro normale. Se sono stati selezionati più schizzi o facce da estrudere, verrà utilizzata la normale del primo.
* **Seleziona riferimento...:** Lo schizzo o la faccia vengono estrusi nella direzione di un bordo dritto o di una [linea di riferimento](/PartDesign_Line/it "PartDesign Line/it") selezionata dal Corpo.
* **Direzione personalizzata:** Lo schizzo o la faccia vengono estrusi nella direzione del vettore specificato.

#### Mostra direzione

Se selezionata, viene mostrata la direzione dell'estrusione. Nel caso in cui l'estrusione utilizzi una **Direzione personalizzata**, è possibile modificarla.

### Lunghezza lungo la normale allo schizzo

Se selezionata, la lunghezza dell'estrusione viene misurata lungo lo schizzo o la normale alla faccia, altrimenti lungo la direzione personalizzata.

### Angolo rastrematura

Sforma l'estrusione nella direzione di estrusione in base all'angolo indicato. Un angolo positivo significa che il bordo esterno del pad diventa più ampio. Si noti che le aree interne adottano un angolo di rastremazione opposto. Questo è stato fatto per facilitare la progettazione di stampi e parti stampate. Questa opzione è disponibile solo se **Tipo** è **Quota** o **Due dimensioni**.

### 2° angolo di rastrematura

Sforma l'estrusione nella direzione opposta in base all'angolo indicato. Vedere **Angolo rastrematura**. Questa opzione è disponibile solo se **Tipo** è **Due dimensioni**.

## Proprietà

### Dati

Pad

* Dati**Type** (`Enumeration`): Definisce come verrà estesa l'estrusione, vedere [Opzioni](#Opzioni).
* Dati**Length** (`Length`): Definisce la lunghezza della estrusione, vedere [Opzioni](#Opzioni).
* Dati**Length2** (`Length`): La lunghezza della seconda estrusione nel caso in cui Dati**Type** sia **TwoLengths**, vedere [Opzioni](#Opzioni).
* Dati**Use Custom Vector** (`Bool`): Se selezionato, la direzione della estrusione non sarà il vettore normale dello schizzo ma il vettore specificato, vedere [Opzioni](#Opzioni).
* Dati**Direction** (`Vector`): Vettore della direzione del pad se viene utilizzato Dati**Use Custom Vector**.
* Dati**Reference Axis** (`LinkSub`)
* Dati**Along Sketch Normal** (`Bool`): Se "true", la lunghezza della estrusione viene misurata lungo la normale dello schizzo. Altrimenti e se viene utilizzato Dati**Use Custom Vector**, viene misurata lungo la direzione personalizzata.
* Dati**Up To Face** (`LinkSub`): La faccia fino alla quale verrà estesa l'estrusione, vedere [Opzioni](#Opzioni).
* Dati**Offset** (`Length`): Scostamento dalla faccia in cui terminerà l'estrusione. Questo viene preso in considerazione solo se vengono utilizzate le opzioni Dati**Type** **UpToLast**, **UpToFirst** o **UpToFace**.
* Dati**Taper Angle** (`Angle`)
* Dati**Taper Angle2** (`Angle`)

Part Design

* Dati**Refine** (`Bool`): true o false. Pulisce dai bordi residui rimasti dopo l'operazione. Questa proprietà viene inizialmente impostata in base alle impostazioni dell'utente (che si trova in **Preferenze → Part Design → Generale → Impostazioni del modello**).

Sketch Based

* Dati**Profile** (`LinkSub`)
* Dati**Midplane** (`Bool`)
* Dati**Reversed** (`Bool`)
* Dati**Allow Multi Face** (`Bool`)

## Limitazioni

* Come tutte le funzioni di Part Design, Estrusione deve creare un solido, quindi lo schizzo deve contenere un profilo chiuso altrimenti fallirà con un errore "Impossibile convalidare la faccia guasta".
* Gli schizzi contenenti [B-Spline](/B-Splines/it "B-Splines/it") spesso non possono essere rastremati correttamente. Questa è una limitazione del kernel [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it") utilizzato da FreeCAD.
* Per angoli grandi la rastremazione fallirà se la faccia finale avrà meno bordi della faccia/schizzo iniziale.
* L'algoritmo utilizzato per **Fino al primo** e **Fino all'ultimo** è:
  + Creare una linea attraverso il baricentro dello schizzo
  + Trovare tutte le facce del supporto tagliato da questa linea
  + Scegliere la faccia in cui il punto di intersezione è più vicino/lontano dallo schizzo

:   Ciò significa che la faccia trovata potrebbe non essere sempre quella prevista. Se si riscontra questo problema, utilizzare invece il tipo **Fino alla faccia** e scegliere la faccia desiderata.
:   Nel caso molto particolare di estrusione su una superficie concava, dove lo schizzo è più grande di questa superficie, l'estrusione fallirà. Questo è un bug irrisolto.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Pad/it&oldid=1564322>"