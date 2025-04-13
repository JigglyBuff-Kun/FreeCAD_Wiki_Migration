---
title: Tutorial Robot
---
|  |
| --- |
| Tutorial |
| Argomento |
| Robot Workbench |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
|  |
| Autori |
| r-frank |
| Versione di FreeCAD |
| 0.16.6703 |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

## Introduzione

Questo tutorial serve per spiegare come usare l'ambiente ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/it "Robot Workbench/it") per simulare il set-up di una cella robotizzata.

![](/images/Robot_Tutorial_RobotSimulation.gif)

Risultato finale di questo tutorial

## Premessa

Questo tutorial è scritto per FreeCAD versione 0.16.6703 o superiore. Quindi, se non avete FreeCAD sul computer andate alla pagina [Download](/Download/it "Download/it") e installatelo.

Questo tutorial è finalizzato all'uso di [robot industriali](http://en.wikipedia.org/wiki/Industrial_robot) e non di robot mobili o di servizio (vedere la voce di Wikipedia su [robot moderni](http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Impostare la scena

1. Passare all'ambiente ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/it "Robot Workbench/it")
2. Creare un nuovo documento scegliendo File → Nuovo dal menu principale
3. Inserire un robot Kuka IR500 nella scena scegliendo  Robot → Inserisci robot → Kuka IR500 dal menu principale
4. Passare alla vista assonometrica cliccando sul pulsante ![](/images/View-axometric.svg)
5. Adattare la vista cliccando sul pulsante ![](/images/Std_ViewFitAll.svg) [Visualizza tutto](/Std_ViewFitAll/it "Std ViewFitAll/it") button
6. Salvare il file ...

## Impostare una traiettoria

1. Passare all'ambiente ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/it "Robot Workbench/it")
2. Attivare la scheda del modello nella [vista ad albero](/Tree_view/it "Tree view/it") facendo clic su di essa
3. Creare una nuova traiettoria cliccando sul pulsante![](/images/Robot_CreateTrajectory.svg) [Crea traiettoria](/Robot_CreateTrajectory/it "Robot CreateTrajectory/it")
4. Selezionare il robot nella [vista ad albero](/Tree_view/it "Tree view/it")
5. Impostare la posizione iniziale del robot cliccando su ![](/images/Robot_SetHomePos.svg) [Imposta la posizione iniziale](/Robot_SetHomePos/it "Robot SetHomePos/it")
6. Passare al [Pannello Azioni](/Task_panel/it "Task panel/it")
7. Cambiare la posizione del robot utilizzando i cursori
8. Quando il robot e la traiettoria sono selezionati in [vista ad albero](/Tree_view/it "Tree view/it"), cliccando su ![](/images/Robot_InsertWaypoint.svg) [Inserisci un punto nella traiettoria](/Robot_InsertWaypoint/it "Robot InsertWaypoint/it") si inserisce il punto intermedio nella traiettoria
9. Ogni punto intermedio è indicato con una croce gialla, i punti intermedi sono collegati con linee arancione
10. Definire almeno tre differenti punti intermedi e inserirli nella traiettoria

## Simulare il movimento del robot

1. Selezionare il robot e la traiettoria nella [vista ad albero](/Tree_view/it "Tree view/it")
2. Selezionare la simulazione cliccando su ![](/images/Robot_Simulate.svg)  [Simula una traiettoria](/Robot_Simulate/it "Robot Simulate/it")
3. Cliccare sul pulsante Avanti  ▶
4. Guardare la simulazione

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/it&oldid=1465776>"