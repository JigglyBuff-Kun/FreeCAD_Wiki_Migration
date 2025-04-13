---
title: Ambiente Robot
---

:::caution
L'ambiente Robot non è mantenuto. Se avete esperienza con l'argomento e se siete interessati a mantenerlo, vi preghiamo di dichiarare la vostra intenzione nella sezione degli sviluppatori delforum di FreeCAD.Il motivo per cui questo ambiente è ancora nel codice sorgente principale è perché esso è programmato in C++. Se fosse programmato in Python, allora potrebbe essere creato unambiente esternoe potrebbe essere spostato in un repository separato.
:::

## Introduzione

![](/images/Workbench_Robot.svg)

L'icona dell'ambiente Robot

L'Ambiente Robot ![](/images/Workbench_Robot.svg) è uno strumento per simulare un [Robot a 6 assi](/Robot_6-Axis/it "Robot 6-Axis/it") di tipo industriale, come per esempio i robot [Kuka](http://kuka.com/).

È possibile eseguire le seguenti operazioni:

- Impostare un ambiente di simulazione con un robot e dei pezzi in lavorazione
- Creare e compilare traiettorie
- Scomporre le componenti di una Parte CAD in una traiettoria
- Simulare il movimento del robot e il raggio d'azione
- Esportare la traiettoria in un file di programma robot

Per iniziare, provare il [tutorial Robot](/Robot_tutorial/it "Robot tutorial/it") e consultare l'interfaccia di programmazione nel file di esempio [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py).

![](/images/Robot_Workbench_example.jpg)

## Strumenti

Ecco i principali comandi utilizzabili per creare il set-up di un robot.

### Robot

Gli strumenti per creare e gestire i robot a 6 assi

- ![](/images/Robot_CreateRobot.svg) [Inserisci un robot](/Robot_CreateRobot/it "Robot CreateRobot/it"): inserisce un nuovo robot nella scena.
- ![](/images/Robot_Simulate.svg) [Simula una traiettoria](/Robot_Simulate/it "Robot Simulate/it"): apre la finestra di simulazione e permette di simulare un percorso.
- ![](/images/Robot_Export.svg) [Esporta una traiettoria](/Robot_Export/it "Robot Export/it"): esporta un file di programmazione robotica.
- ![](/images/Robot_SetHomePos.svg) [Imposta la posizione iniziale](/Robot_SetHomePos/it "Robot SetHomePos/it"): imposta la posizione iniziale di un robot.
- ![](/images/Robot_RestoreHomePos.svg) [Sposta alla posizione iniziale](/Robot_RestoreHomePos/it "Robot RestoreHomePos/it"): sposta il robot nella posizione di partenza.

### Traiettorie

Strumenti per creare e modificare i percorsi. Ci sono due tipi di strumenti, quelli parametrici e quelli non parametrici.

#### Traiettorie non parametriche

- ![](/images/Robot_CreateTrajectory.svg) [Crea una traiettoria](/Robot_CreateTrajectory/it "Robot CreateTrajectory/it"): inserisce un nuovo oggetto traiettoria vuoto nella scena.
- ![](/images/Robot_SetDefaultOrientation.svg) [Imposta l'orientamento predefinito](/Robot_SetDefaultOrientation/it "Robot SetDefaultOrientation/it"): imposta il modo in cui vengono creati i punti di orientamento di default.
- ![](/images/Robot_SetDefaultValues.svg) [Imposta i valori di velocità predefiniti](/Robot_SetDefaultValues/it "Robot SetDefaultValues/it"): imposta i valori predefiniti per la velocità.
- ![](/images/Robot_InsertWaypoint.svg) [Inserisci un punto nella traiettoria](/Robot_InsertWaypoint/it "Robot InsertWaypoint/it"): inserisce il punto della posizione corrente del robot in una traiettoria.
- ![](/images/Robot_InsertWaypointPre.svg) [Inserisci un punto preselezionato nella traiettoria](/Robot_InsertWaypointPre/it "Robot InsertWaypointPre/it"): inserisce il punto della posizione corrente del mouse in una traiettoria.

#### Traiettorie parametriche

- ![](/images/Robot_Edge2Trac.svg) [Crea una traiettoria da un bordo](/Robot_Edge2Trac/it "Robot Edge2Trac/it"): genera un percorso da un insieme di spigoli.
- ![](/images/Robot_TrajectoryDressUp.svg) [Vesti una traiettoria](/Robot_TrajectoryDressUp/it "Robot TrajectoryDressUp/it"): permette di modificare una o più proprietà di un percorso.
- ![](/images/Robot_TrajectoryCompound.svg) [Raggruppa le traiettorie](/Robot_TrajectoryCompound/it "Robot TrajectoryCompound/it"): raggruppa alcune traiettorie in un unico percorso.

## Script

Vedere l'esempio [Esempio di API Robot](/Robot_API_example/it "Robot API example/it") per una descrizione delle funzioni utilizzate per modellare gli spostamenti del robot.

## Tutorials

- [6-Axis_Robot](/Robot_6-Axis/it "Robot 6-Axis/it")
- [VRML Preparation for Robot Simulation](/VRML_Preparation_for_Robot_Simulation/it "VRML Preparation for Robot Simulation/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/it&oldid=1170889>"
