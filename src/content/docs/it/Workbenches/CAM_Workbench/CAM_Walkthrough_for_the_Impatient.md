---
title: CAM Guida per impazienti
---
|  |
| --- |
| Tutorial |
| Argomento |
| Ambiente Path |
| Livello di difficoltà |
| Principiante |
| Tempo di esecuzione |
| 15 minuti |
| Autori |
| Chrisb |
| Versione di FreeCAD |
| 0.19 |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

## Aim

Ecco una dimostrazione che mostra la creazione di una lavorazione del WB Path da un modello 3D, generando un codice G nel dialetto corretto per una macchina CNC di destinazione.

## Il modello 3D

Il progetto inizia con un semplice modello di FreeCAD: un cubo con una tasca rettangolare,

![](/images/Path-SquarePocketModel.png)

creato nell'ambiente [Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it") e formato da un corpo, un cubo con una tasca basata su uno schizzo orientato nel piano XY.

Completato il Modello 3D, selezionare l'ambiente Path.

## The Job

## La lavorazione

Cliccare su ![](/images/Path-Job.png) [Lavorazione](/Path_Job/it "Path Job/it") per crearne una.

![](/images/Path-JobCreationDialog.png)

Nella finestra di dialogo Crea lavorazione, fare clic su OK per accettare il Corpo come modello base, senza usare nessun modello.

### Impostazione della lavorazione

Nella tabella Azioni si apre la finestra Job Edit e la vista del modello mostra il pezzo grezzo incorniciato dalle linee di un cubo attorno al Corpo base. La scheda selezionata è quella delle Impostazione.

### Job Output

La scheda Output definisce il percorso del file di output, il suo nome e la sua estensione e definisce anche il Postprocessore. Per utenti esperti, è possibile definire gli argomenti dell'algoritmo di post-elaborazione: posizionando il mouse sopra i campi appaiono i suggerimenti per gli argomenti più comuni.

![](/images/Path-JobOutput.png)

### Job Tools

![](/images/Path-JobTools.png)

Modifichiamo lo strumento predefinito selezionandolo e facendo clic sul pulsante Modifica. Questo apre la finestra di modifica del Tool Controller.

![](/images/Path-ToolConfig.gif)

Il nome assegnato all'utensile e il numero dell'utensile corrispondono al numero dell'utensile della macchina. Qui lo strumento è il Nr. 4. Il controller dell'utensile è configurato per avanzamenti orizzontali e verticali di 2mm/s e una velocità del mandrino di 2000 rpm.

Selezionare il pannello secondario Tool del controller dell'utensile. Impostare il diametro e - se si desidera utilizzare lo strumento di simulazione in un secondo momento - aggiungere l'angolo del tagliente e l'altezza del tagliente.

![](/images/Path-ToolAdd.gif)

Confermare i valori con OK.

Per un facile accesso, tutti gli utensili possono essere predefiniti e selezionati dal ![](/images/Path_ToolLibraryEdit.svg)[Tool manager](/Path_ToolLibraryEdit "Path ToolLibraryEdit").

### Job Workplan

La scheda Piano di lavoro inizia vuota e viene popolata dalla sequenza delle Operazioni della lavorazione, dai Comandi di percorso parziale e dai Dressup dei percorsi. La sequenza di queste voci iene ordinata in questa scheda.

Questo è albero che viene mostrato dopo la configurazione della lavorazione dopo che il percorso è stato aperto:

![](/images/Path-TreeWithJob.png)

## Le operazioni del percorso

Vengono ora aggiunte due operazioni per generare i percorsi di fresatura di questa lavorazione. L'operazione [Contornatura](/Path_Profile/it "Path Profile/it") crea un percorso attorno al cubo e l'operazione [Tasca](/Path_Pocket_Shape/it "Path Pocket Shape/it") crea un percorso per la tasca interna.

Per ora facciamo una cosa semplice. Il pulsante ![](/images/Path_Profile.svg) [Contornatura](/Path_Profile/it "Path Profile/it") apre il pannello Contour. Dopo aver confermato l'uso dei valori predefiniti con OK, il percorso verde attorno all'oggetto diventa visibile.

Selezionare il fondo della tasca e poi il pulsante ![](/images/Path_Pocket.png) [Tasca](/Path_Pocket_Shape/it "Path Pocket Shape/it") per aprire la finestra Pocket Shape. Vengono utilizzati i valori predefiniti per Geometria di base, Profondità e Altezza e viene selezionato il pannello secondario Operazione e la percentuale di passata è impostata su 50.

![](/images/Path-PocketOperation.gif)

Cambiare Pattern in "Offset" e confermare con OK la Job Operation per la configurazione della tasca.

Il risultato è un modello con due percorsi:

![](/images/Path-WalkThroughResult.gif)

## Verificare i percorsi

Esistono due modi per verificare i percorsi creati. Il codice G può essere ispezionato, inclusa l'evidenziazione dei segmenti di percorso corrispondenti. Il processo di fresatura di Path Job può anche essere simulato per determinare i percorsi utensile ideali, richiesti dalle geometrie dell'utensile per fresare il pezzo.

Per ispezionare il codice G, utilizzare lo strumento ![](/images/Path_Inspect.png). Selezionare le corrispondenti righe del codice G all'interno della finestra di ispezione del codice G per evidenziare i singoli segmenti del percorso.

![](/images/Path-InspectWindow.gif)

Per iniziare la simulazione usare lo strumento ![](/images/Path_Simulator.png) [Simulazione](/Path_Simulator/it "Path Simulator/it").

Regolare la velocità e la precisione e avviare la simulazione con il pulsante di riproduzione.

![](/images/Path-Simulation.gif)

Se si desidera terminare la simulazione, fare clic sul pulsante Annulla per rimuovere lo pezzo creato per la simulazione. Cliccando su Ok questo oggetto viene conservato nella lavorazione.

## Postelaborare la lavorazione

Il passaggio finale per generare il G-Code per la fresatura è di postelaborare il la lavorazione. Questo produce i codici G in un file che può essere caricato nel controllore macchina CNC di destinazione. Per richiamare il postprocessore:

* Selezionare l'oggetto Job nell'albero
* Selezionare lo strumento Path Postprocessing ![](/images/Path_PostProcess.png) per postelaborare il file. Si apre una finestra di codice G che consente l'ispezione del file di output finale prima che venga salvato.

![](/images/Path-PostOutput.gif)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Walkthrough_for_the_Impatient/it&oldid=1391215>"