---
title: PartDesign Rivoluzione
---
|  |
| --- |
| Rivoluzione |
| Posizione nel menu |
| Part Design → Crea una funzione additiva → Rivoluzione |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Gola](/PartDesign_Groove/it "PartDesign Groove/it") |
|  |

## Descrizione

Lo strumento **Rivoluzione** crea un solido ruotando uno schizzo selezionato o un oggetto 2D attorno ad un dato asse.

![](/images/PartDesign_Revolution_example.svg)

Sopra: lo schizzo (A) viene ruotato di 270 gradi in senso antiorario attorno all'asse (B); il solido risultante (C) è mostrato sulla destra.

## Utilizzo

1. Selezionare uno schizzo singolo o una o più facce dal Corpo.
2. Premere il pulsante ![](/images/PartDesign_Revolution.svg) Rivoluzione.
3. Impostare i parametri della rivoluzione, vedere le [Opzioni](#Opzioni) di seguito.
4. Premere il pulsante OK.

## Opzioni

Quando si crea una rivoluzione, o dopo aver fatto doppio clic su una rivoluzione esistente nella [Vista\_albero](/Tree_view/it "Tree view/it"), viene visualizzato il pannello delle attività **Parametri Rivoluzione**. Il quale offre le seguenti impostazioni:

![](/images/Partdesign_revolution_parameters.png)

### Tipo

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Tipo offre cinque modi diversi per specificare l'angolo della rivoluzione:

#### Dimensione

Inserire un valore numerico per l'**Angolo** della rivoluzione. Con l'opzione **Simmetrica al piano** la rivoluzione estenderà metà dell'angolo dato su entrambi i lati dello schizzo o della faccia.

#### Fino all'ultimo

La rivoluzione si estende fino all'ultima faccia del supporto, che incontra nella sua direzione. Se non c'è alcun supporto, verrà visualizzato un messaggio di errore.

#### Fino al primo

La rivoluzione si estende fino alla prima faccia del supporto, che incontra nella sua direzione. Se non c'è alcun supporto, verrà visualizzato un messaggio di errore.

#### Fino alla faccia

La rivoluzione si estende fino a una faccia. Premere il pulsante Faccia e selezionare una faccia o un [piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it") dal corpo.

#### Due dimensioni

Questo consente di inserire un secondo angolo nella direzione opposta in cui l'estrusione si deve estendere. Le direzioni possono essere invertite selezionando l'opzione **Invertita**.

### Asse

Specifica l'asse di rivoluzione:

* **Asse verticale dello schizzo**: seleziona l'asse verticale dello schizzo.
* **Asse orizzontale dello schizzo**: seleziona l'asse orizzontale dello schizzo.
* **Linea di costruzione**: seleziona una linea di costruzione dallo schizzo, utilizzato per la rivoluzione. L'elenco a discesa conterrà una voce per ciascuna linea di costruzione. La prima linea di costruzione sarà etichettata *Linea di costruzione 1*
* **Asse (X/Y/Z) di base**: seleziona l'asse X, Y o Z dell'origine del corpo.
* **Seleziona riferimento...**: permette la selezione di un bordo dritto o di una [linea di riferimento](/PartDesign_Line/it "PartDesign Line/it") del Corpo.

Notare che quando si cambia l'asse, l'opzione **Invertita** potrebbe essere (de)selezionata automaticamente.

### Angolo

Definisce l'angolo della rivoluzione. Questa opzione è disponibile solo se **Tipo** è **Dimensione** o **Due dimensioni**. Non sono possibili angoli superiori a 360°. Né lo sono valori negativi, utilizzare invece l'opzione **Invertita**.

### Simmetrica al piano

Selezionare questa opzione per estendere metà dell'angolo specificato per la rivoluzione su entrambi i lati dello schizzo o della faccia. Questa opzione è disponibile solo se **Tipo** è **Quota**.

### Invertita

Inverte la direzione della rivoluzione.

### 2\* angolo

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Definisce l'angolo della rivoluzione nella direzione opposta. Questa opzione è disponibile solo se **Tipo** è **Due dimensioni** e **Angolo** è minore di 360°.

## Proprietà

### Dati

Part Design

* Dati**Refine** (`Bool`)

Revolution

* Dati**Type** (`Enumeration`)
* Dati**Base** (`Vector`): (read-only)
* Dati**Asse** (`Vector`): (read-only)
* Dati**Angolo** (`Angle`)
* Dati**Up To Face** (`LinkSub`)
* Dati**Angle2** (`Angle`)
* Dati**Reference Axis** (`LinkSub`)

Sketch Based

* Dati**Profile** (`LinkSub`)
* Dati**Midplane** (`Bool`)
* Dati**Reversed** (`Bool`)
* Dati**Allow Multi Face** (`Bool`)

## Note

* Uno ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder/it "PartDesign ShapeBinder/it") non può essere utilizzato come profilo.
* Quando si utilizza uno ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder/it "PartDesign SubShapeBinder/it") per il profilo, la selezione del binder nella [Vista ad albero](/Tree_view/it "Tree view/it") fallirà, ovvero la faccia del binder dovrà essere selezionata nella [Vista 3D](/3D_view/it "3D view/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/it&oldid=1564336>"