---
title: Tutorial di FEM
---
|  |
| --- |
| Tutorial |
| Argomento |
| Analisi agli elementi finiti |
| Livello di difficoltà |
| base |
| Tempo di esecuzione |
| 10 minuti più il tempo del solutore |
| Autori |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Versione di FreeCAD |
| 0.16.6700 o superiore |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

## Introduction

## Introduzione

Questo tutorial ha lo scopo di introdurre il lettore al flusso di lavoro di base dell'ambiente FEM, nonché alla maggior parte degli strumenti disponibili per eseguire un'analisi statica.

![](/images/FEM_tutorial_result.png)

## Requirements

## Requisiti

* Versione 0.16.6700 o superiore di FreeCAD.
* [Netgen](http://sourceforge.net/projects/netgen-mesher/) e/o [GMSH](http://geuz.org/gmsh/) installati nel sistema.
* Nel caso si usi GMSH installare la [Macro GMSH](/Macro_GMSH "Macro GMSH") da [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), sviluppata da [psicofil](https://github.com/psicofil/Macros_FreeCAD).
* [Calculix](http://www.calculix.de/) installato nel sistema.
* Il lettore abbia le conoscenze di base per utilizzare gli ambienti [Parte](/Part_Workbench/it "Part Workbench/it") e [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it")

## Procedura

### Modeling

### Il modello

In questo esempio viene utilizzato un cubo come oggetto di studio, ma al suo posto si posssono usare i modelli creati con Parte o PartDesign.

1. Creare un nuovo documento
2. Attivare l'ambiente Part
3. Creare un cubo
4. Modificare le sue **Dimensions** in questi valori:
   1. Height: 1.000 mm
   2. Length: 8.000 mm
   3. Width: 1.000 mm

Ora abbiamo un modello con il quale lavorare.

### Creating the Analysis

1. Activate the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").
2. Select the **Model → ![](/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.

### Constraints and Forces

### Vincoli e Forze

1. Nascondere la mesh dalla Vista ad albero.
2. Visualizzare il modello originale
3. Selezionare ![](/images/FEM_FixedConstraint.png) [Vincolo fissaggio FEM](/FEM_ConstraintFixed/it "FEM ConstraintFixed/it")
4. Selezionare la faccia posteriore del cubo (la faccia sugli assi **YZ**) e fare clic su OK
5. Selezionare ![](/images/FEM_ForceConstraint.png) [Vincolo forza FEM](/FEM_ConstraintForce/it "FEM ConstraintForce/it")
6. Selezionare la faccia frontale del cubo (la faccia parallela a quella posteriore) e impostare il **Carico dell'area** al valore di 9000000.00
7. Impostare la **Direzione** **-Z** selezionando uno dei bordi della faccia parallela a quella direzione.
8. Cliccare su OK

Con questo abbiamo stabilito i vincoli e le forze per lo studio statico.

### Material

### Ultimi preparativi

1. Selezionare ![](/images/FEM_Material.png) [Materiale FEM per solidi](/FEM_MaterialSolid/it "FEM MaterialSolid/it") e scegliere Calculix
2. Cliccare su **OK**

### Meshing

It is recommended to make a mesh as the last step in the analysis preparations due to association to a geometry in FreeCAD.
Depending on FreeCAD installation, there can be Netgen or GMSH meshers, you can use any of them.

#### Netgen

### Creare l'analisi

#### Netgen

1. Selezionare il modello
2. Dal menu cliccare su ![](/images/FEM_Analysis.png) [Nuova analisi](/FEM_Analysis/it "FEM Analysis/it") per creare un'analisi dall'oggetto selezionato.
3. Nella finestra di meshing, fare clic su **OK**

È anche possibile trascinare e rilasciare in una Analisi meccanica un oggetto mesh che non dispone di un mesh all'interno della struttura ad albero.

#### GMSH

1. Select the model
2. ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"): Generates a finite element mesh for a model using Gmsh.
3. In the meshing dialog, click Apply and OK.

Ora abbiamo reso mesh il nostro oggetto e siamo pronti ad aggiungere i vincoli e le forze.

### Running the Solver

#### Standard Procedure

### Avviare il Solver

#### Procedura Standard

1. Selezionare l'oggetto solver ![](/images/FEM_Solver.png) contenuto in **Mechanical Analysis**
2. Selezionare ![](/images/FEM_Calculation.png) [Calcola](/FEM_SolverControl/it "FEM SolverControl/it") nel menu
3. Selezionare **Write Calculix Input File**
4. Selezionare **Run Calculix**
5. Cliccare **Chiudi**

#### Quick Procedure

#### Procedura veloce

1. Selezionare l'oggetto solver ![](/images/FEM_Solver.png) contenuto in **Mechanical Analysis**
2. Cliccare su ![](/images/FEM_RunCalculiXccx.png) [Analisi veloce](/FEM_SolverRun/it "FEM SolverRun/it").

### Analyzing Results

### Risultati delle analisi

1. Selezionare l'oggetto **Risultati** nell'**albero degli oggetti**
2. Selezionare ![](/images/FEM_ShowResult.png) [Mostra risultati](/FEM_ResultShow/it "FEM ResultShow/it")
3. Scegliete tra i diversi tipi di risultati quello che si desidera visualizzare
4. Il cursore in basso può essere utilizzato per modificare la visualizzazione della mesh. Questo permette di visualizzare la deformazione subita dall'oggetto, ricordare che si tratta di una approssimazione.
5. Per azzerare i risultati selezionare ![](/images/FEM_PurgeResults.png) [Purge results](/FEM_ResultsPurge/it "FEM ResultsPurge/it")

**Confronto con precedenti file di esempio**

Se si seleziona come tipo di risultato **Z displacement**, si può vedere che il valore ottenuto è quasi identico all'esempio di prova fornita da FreeCAD. Le differenze possono verificarsi a causa della qualità della mesh e del numero di nodi che possiede.

A questo punto il flusso di lavoro di base per il [Modulo FEM](/FEM_Workbench/it "FEM Workbench/it") è terminato.

## Notes

* For a video tutorial based on this written tutorial watch: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/it&oldid=1387438>"