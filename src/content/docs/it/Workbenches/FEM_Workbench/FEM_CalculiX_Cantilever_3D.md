---
title: FEM CalculiX Trave a sbalzo 3D
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Tutorial                                                                    |
| Argomento                                                                   |
| Analisi Elementi Finiti                                                     |
| Livello di difficoltà                                                       |
| Base                                                                        |
| Tempo di esecuzione                                                         |
| 10 minuti                                                                   |
| Autori                                                                      |
| [Bernd](http://www.freecadweb.org/wiki/index.php?title=User:Berndhahnebach) |
| Versione di FreeCAD                                                         |
| 0.16.6377 o superiore                                                       |
| Files di esempio                                                            |
|                                                                             |
| Vedere anche                                                                |
| _Nessuno_                                                                   |
|                                                                             |

## Introduction

## Introduzione

Questo esempio ha lo scopo di mostrare come appare una semplice analisi degli elementi finiti (FEA) e in che modo i risultati possono essere visualizzati nel [modulo FEM](/FEM_Workbench/it "FEM Workbench/it") di FreeCAD. Viene mostrato come attivare una FEA e come modificare il valore e la direzione del carico. Inoltre, poiché il file di esempio è fornito con tutte le installazioni di FreeCAD, è facile verificare se il modulo FEM è impostato correttamente.

![](/images/FEM_example01_pic10.png)

## Requirements

## Requisiti

- Una versione di FreeCAD compatibile con quella utilizzata per il tutorial.
- La versione installata può essere verificata nel menu **Aiuto → Informazioni su FreeCAD**.
- Per caricare il file di esempio non è necessario nessun altro software esterno, e neppure per visualizzare la mesh o la geometria, o per visualizzare i risultati.
- Per poter rieseguire l'analisi FEA è necessario che il software risolutore Calculix sia installato. Probabilmente il risolutore è già stato installato con FreeCAD. Se non è installato vedere la pagina [Installare FEM](/FEM_Install/it "FEM Install/it").

## Impostare il file di esempio

### Load the example file

### Caricare l'ambiente Start

- Avviare FreeCAD
- L'ambiente Start dovrebbe essere caricato

![](/images/FEM_example01_pic11.png)

### Activate the analysis container

### Attivare il contenitore delle analisi

- Per lavorare con una analisi, prima si deve attivarla.
- Nella vista ad albero fare clic destro su ![](/images/Fem_Analysis.png) Analisi meccanica → Attiva analisi

![](/images/FEM_example01_pic12.png)

### Analysis container and its objects

### Il contenitore Analisi e suoi oggetti

- Se viene attivata l'analisi FreeCAD cambia l'ambiente corrente in FEM.
- Per eseguire un'analisi meccanica statica sono necessari almeno 5 oggetti.

* ![](/images/Fem_Analysis.svg) contenitore dell'analisi

1. ![](/images/FEM_SolverCalculixCxxtools.svg) un solutore
2. ![](/images/FEM_MaterialSolid.svg) un materiale
3. ![](/images/Fem_ConstraintFixed.svg) un vincolo fissaggio
4. ![](/images/Fem_ConstraintForce.svg) un vincolo forza
5. ![](/images/FEM_FEMMesh.svg) un oggetto mesh FEM

- In questo esempio sono inclusi anche i risultati quindi c'è un sesto oggetto, cioè i risultati ![](/images/FEM_ResultShow.svg).

### Visualizing Results

### Visualizzare i risultati

- Assicurarsi che l'analisi sia attivata.
- Assicurarsi che l'analisi contenga ancora l'oggetto risultato, altrimenti basta ricaricare il file di esempio.
- Nella barra degli strumenti fare clic sull'icona ![](/images/FEM_ShowResult.png) [Mostra risultati](/FEM_ResultShow/it "FEM ResultShow/it")
- Nella scheda Azioni scegliere z-Displacement. Mostra -88.443 mm nella direzione z negativo.
- Questo ha senso dal momento che anche la forza è in direzione Z negativo.
- Attivare la casella di controllo "Mostra", a fianco del cursore in basso per visualizzare lo spostamento.
- Il cursore può essere utilizzato per modificare la mesh e visualizzare la deformazione in modo semplificato.
- Scegliere tra i diversi tipi di risultati per vedere nella GUI tutti i tipi di risultati disponibili.

![](/images/FEM_example01_pic13.png)

### Purging Results

### Eliminare i risultati

- Assicurarsi che l'analisi sia attivata.
- Per rimuovere i risultati selezionare nella barra l'icona ![](/images/FEM_PurgeResults.png) [Elimina risultati](/FEM_ResultsPurge/it "FEM ResultsPurge/it")

### Running the FEA

### Eseguire la FEA

- Nella vista ad albero fare doppio click sull'oggetto solver ![](/images/FEM_Solver.png).
- Nella finestra Azioni dell'oggetto risolutore accertarsi che sia selezionata l'analisi statica.
- Nella stessa scheda, cliccare su "Scrivi il file .inp". Attendere che nella finestra del rapporto compaia la scritta "write completed".
- Cliccare su Esegui CalculiX. Poiché questa è una breve analisi dovrebbe essere eseguita in meno di un secondo.
- Nella finestra di testo dovrebbe essere stampato a caratteri verdi "CalculiX done!" e nella riga successiva "loading result sets ..."
- Se non ci sono dei messaggi di errore si è conclusa la prima FEA in FreeCAD.
- Cliccare su Chiudi nella scheda Azioni.
- Questo dovrebbe aver creato un nuovo oggetto risultato. Abbiamo già visto come visualizzare i risultati.
- Se si riceve un messaggio di errore "no solver binary" o simile quando si avvia l'analisi consultare la pagina [FEM Install](/FEM_Install/it "FEM Install/it").

![](/images/FEM_example01_pic14.png)

### Running the FEA the fast Way

### Eseguire velocemente la FEA

- Nella vista ad albero selezionare l'oggetto risolutore ![](/images/FEM_Solver.png) dell'analisi ![](/images/FEM_Analysis.png).
- Nella barra degli strumenti cliccare sull'icona ![](/images/FEM_RunCalculiXccx.png) [Analisi rapida](/FEM_SolverRun/it "FEM SolverRun/it").
- Viene scritto il file Calculix di input, viene attivato Calculix e viene creato l'oggetto risultato.

### Changing Load Direction and Load Value

### Modificare la Direzione e il Valore del carico

- Nella vista ad albero selezionare l'oggetto mesh FEM ![](/images/FEM_FEMMesh.svg) e premere il tasto spazio.
  - **Risultato:** L'oggetto mesh FEM viene nascosto, e rimane visibile solo il modello geometrico.
- Nella vista ad albero fare doppio click sull'oggetto "Vincolo forza" per aprire la sua finestra Azioni.
- Nella finestra Azioni cambiare il valore del carico 500000000 N = 500 MN (nella finestra Azioni l'unità di misura della forza deve essere in N)
- Cliccare sul pulsante Direzione.
- Sul modello geometrico Cliccare su uno dei bordi lunghi in direzione x.
  - **Risultato:** Le frecce rosse della forza cambiano direzione e si orientano in direzione x. Esse mostrano la direzione fissata.
- Dato che la tensione deve essere applicata nel verso opposto bisogna attivare il controllo "Reverse direction".
- Le frecce rosse della forza cambiano il loro verso.
- Fare clic su OK nella finestra delle Azioni.

![](/images/FEM_example01_pic05.jpg)

- Attivare la visibilità della mesh FEM ![](/images/FEM_FEMMesh.svg) selezionandola nella vista ad albero e premendo il tasto spazio.
- Abbiamo già visto come attivare un'analisi e come visualizzare i risultati.
- La deformazione in direzione x dovrebbe essere di 19.05 mm.

![](/images/FEM_example01_pic15.png)

- You know how to trigger an analysis and how to visualize results already.
- The deformation in x-direction should be 18.95 mm.

![](/images/FEM_example01_pic16.png)

## What next?

## Cos'altro ?

- Il flusso di lavoro di base per l'ambiente [FEM](/FEM_Workbench/it "FEM Workbench/it") è finito.
- Ora si è pronti per eseguire il secondo [Tutorial di FEM](/FEM_tutorial/it "FEM tutorial/it").
- Creeremo da soli un Calculix di una trave a sbalzo e confronteremo i risultati con la teoria delle travi.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX_Cantilever_3D/it&oldid=1251627>"
