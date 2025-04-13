---
title: Tutorial di PartDesign
---
|  |
| --- |
| Tutorial |
| Argomento |
| Schizzo |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| 15 minuti |
| Autori |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Versione di FreeCAD |
| 0.16 o superiore |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

### Introduzione

Questo tutorial ha lo scopo di introdurre il lettore al flusso di lavoro di base dell'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
Il lettore vedrà come creare oggetti 3D sulla base di schizzi, eseguire operazioni di sottrazione e come replicare specifiche funzioni in una schiera.

![](/images/Sketcher_tutorial_result.png)

### Requisiti

* FreeCAD versione 0.17 o superiore
* Il lettore abbia terminato il [Tutorial base di Sketcher](/Basic_Sketcher_Tutorial/it "Basic Sketcher Tutorial/it")

### Procedimento

#### Creare la geometria 3D

Lo scopo dell'ambiente PartDesign è quello di consentire all'utente di creare la geometria nello spazio 3D. Pertanto, esso è dotato degli strumenti adatti ad usare gli schizzi e a convertirli in oggetti 3D.

Per raggiungere questo obiettivo ci sono due funzioni fondamentali : ![](/images/PartDesign_Pad.svg) [Prisma](/PartDesign_Pad/it "PartDesign Pad/it") e ![](/images/PartDesign_Revolution.svg) [Rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it"). Assieme alle loro controparti sottrattive (![](/images/PartDesign_Pocket.svg) [Cavità](/PartDesign_Pocket/it "PartDesign Pocket/it") e ![](/images/PartDesign_Groove.svg) [Gola](/PartDesign_Groove/it "PartDesign Groove/it")) esse costituiscono la maggior parte delle azioni comuni utilizzate da questo ambiente.

1. Passare nell'ambiente PartDesign
2. Con lo schizzo selezionato nella [vista ad albero](/Tree_view/it "Tree view/it"), premere ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), scegliere il piano XY predefinito, e premere OK. Lo schizzo dovrebbe ora apparire all'interno del Corpo.
3. Selezionare ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad/it "PartDesign Pad/it")
4. Impostare la distanza 5 mm
5. Selezionare **Ok**

Un altro strumento per creare la geometria 3D è ![](/images/PartDesign_Revolution.svg) [Rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it").

![](/images/PartDesign_revolution_exercise.png)

1. Creare un nuovo Corpo ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body/it "PartDesign Body/it"), quindi uno schizzo basato sull'immagine precedente.
2. Lo schizzo può trovarsi su qualsiasi piano, ma deve essere coincidente con l'asse orizzontale.
3. Selezionare ![](/images/PartDesign_Revolution.svg) [Rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it")
4. Impostare "Axis" su "Asse orizzontale dello schizzo"
5. Impostare l'angolo a 360°

#### Funzioni sottrattive

Iniziare creando un disegno con la forma da sottrarre.

1. Selezionare la faccia piatta superiore di **Revolution**
2. Selezionare ![](/images/Sketcher_NewSketch.svg) [Nuovo schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it")
3. Selezionare ![](/images/Sketcher_External.svg) [Geometria esterna](/Sketcher_External/it "Sketcher External/it")
4. Avvicinarsi al bordo del pad. Viene evidenziato un arco
5. Selezionare l'arco. Nel disegno dovrebbe apparire un arco di un colore diverso
6. Creare un esagono centrato nello stesso centro dell'arco e impostare il raggio del cerchio di riferimento a 5 mm

**Geometria esterna**

Dopo che è stato creato un elemento 3D è possibile creare dei riferimenti ad esso all'interno di uno schizzo.

1. Selezionare ![](/images/Sketcher_External.svg) [Geometria esterna](/Sketcher_External/it "Sketcher External/it").
2. Accostarsi all'elemento a cui si desidera fare riferimento, ad esempio, il bordo di un **Pad**.
3. Cliccare sull'elemento
4. Nello schizzo dovrebbero apparire dei nuovi elementi di un colore diverso nella posizione della funzionalità a cui si desidera fare riferimento.

![](/images/PartDesign_pocket_exercise.png)

Procedere applicando una funzione **Cavità**.

1. Selezionare lo schizzo
2. Selezionare ![](/images/PartDesign_Pocket.svg) [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it")
3. Impostare la lunghezza **Attraversa tutto**

#### Le funzioni Serie

Richiamare il profilo estruso che è stato creato all'inizio del tutorial.

1. Selezionare la faccia superiore dell'oggetto
2. Creare un nuovo schizzo
3. Creare una geometria di riferimento collegata alla parte superiore della figura
4. Creare un cerchio vincolato al centro dell'arco di riferimento
5. Impostare il suo raggio a 3 mm
6. Scavare (Pocket) lo schizzo attraverso tutto il pezzo

Invece di creare un cerchio per ogni foro nello schizzo, introduciamo il concetto di **Pattern Features** (Schiera di funzioni). Questi strumenti funzionano replicando una funzione che è già stata creata nel pezzo e che si vuole riprodurre in una disposizione lineare o circolare.
Utilizzeremo una combinazione di schiere **Lineari** e **Polari** simulativamente per ottenere il pezzo finale.

1. Nella vista ad albero selezionare la funzione Tasca appena creata.
2. Selezionare ![](/images/PartDesign_MultiTransform.svg) [MultiTrasformazione](/PartDesign_MultiTransform/it "PartDesign MultiTransform/it") di PartDesign

Nella Vista combinata viene chiesto di introdurre le trasformazioni che si desiderano. Si noti che nel menu dei parametri di MultiTransform si vede che FreeCAD ha identificato la Pocket come funzionalità originale e una seconda casella chiede di fare clic con il tasto destro per introdurre le funzionalità del modello.

1. Fare clic con il pulsante destro del mouse sulla casella
2. Selezionare **Add Linear Pattern**
3. Impostare la **Direction** in **Vertical Sketch Axis**
4. Impostare la lunghezza su 10 mm
5. Lasciare le occorrenze a 2
6. Cliccare OK
7. Fare nuovamente clic sulla casella per aggiungere un **Polar Pattern** . Notare che nella visualizzazione 3D ora è stata aggiunta la schiera lineare.
8. Impostare le occorrenze a 5
9. Fare due volte clic su OK

Dopo aver completato questa attività, si dovrebbe avere il seguente risultato.

![](/images/PartDesign_multitransform_exercise.png)

In caso contrario, modificare l'operazione di MultiTransformazione facendo doppio clic su di essa nella visualizzazione di albero. Controllare entrambe le funzioni del modello per rilevare le modifiche necessarie, come l'asse o se la direzione deve essere invertita.

A questo punto il flusso di lavoro di base per il [Modulo PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") è terminato.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_tutorial/it&oldid=1479318>"