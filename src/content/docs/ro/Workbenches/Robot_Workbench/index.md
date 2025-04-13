---
title: Atelierul Robotică
---

:::caution
The Robot Workbench is unmaintained. If you have experience with the topic and are interested in maintaining it, please state your intention in the developer's section of theFreeCAD forum.The reason this workbench is still in the master source code is because this workbench is programmed in C++. If this workbench could be programmed in Python, then it could be made anexternal workbenchand it could be moved to a separate repository.
:::

## Introducere

![](/images/Workbench_Robot.svg)

Robot workbench icon

Atelierul robotică [Robot Workbench](/Robot_Workbench "Robot Workbench") este un instrument pentru a simula un robot industrial standard având 6 axe de libertate [6-axis industrial robot](/Robot_6-Axis "Robot 6-Axis"), cum ar fi de ex. [Kuka](http://kuka.com/).

Puteți efectua următoarele activități:

- Configurați un mediu de simulare cu un robot și piese de lucru;
- Creați și urmați traiectoriile;
- Descompuneți caracteristicile/funcționalitățile unei piese CAD într-o traiectorie;
- Simulați mișcarea și accesibilitatea robotului;
- Exportați traiectoria într-un fișier de program de robot.

Pentru a începe încercați [Robot tutorial](/Robot_tutorial "Robot tutorial"), și vedeți interfața de programare în fișierul exemplu aici:
[RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py)

![](/images/Robot_Workbench_example.jpg)

## Instrumente

Aici sunt comenzile principale pe care le puteți utiliza pentru a seta un robot.

### Roboți

Instrumentele pentru crearea și gestionarea roboților cu 6 axe

- ![](/images/Robot_CreateRobot.png) [Creați un robot](/Robot_CreateRobot "Robot CreateRobot"): Introduceți un nou robot în scenă
- ![](/images/Robot_Simulate.png) [Simulate a trajectory](/Robot_Simulate "Robot Simulate"): Deschide dialogul de simulare și vă permite să simulați
- ![](/images/Robot_Export.png) [Export a trajectory](/Robot_Export "Robot Export"): Exportați un fișier conținând programul robotului
- ![](/images/Robot_SetHomePos.png) [Set home position](/Robot_SetHomePos "Robot SetHomePos"): Stabiliți poziția 0 a robotului
- ![](/images/Robot_RestoreHomePos.png) [Restore home position](/Robot_RestoreHomePos "Robot RestoreHomePos"): Mutați robotul în poziția zero

### Traiectorii

Instrumente pentru crearea și manipularea traiectoriilor. Există două tipuri, cele parametrice și cele neparametrice.

#### Traiectoriile Non Parametrice

- ![](/images/Robot_CreateTrajectory.png) [Creați o traiectorie](/Robot_CreateTrajectory "Robot CreateTrajectory"): Introduceți o traiectorie goală în scenă
- ![](/images/Robot_SetDefaultOrientation.png) [Stabiliți orientarea implicită](/Robot_SetDefaultOrientation "Robot SetDefaultOrientation"): Definiți orientarea implicită a punctelor de trecere
- ![](/images/Robot_SetDefaultValues.png) [/Definiți parametrul implicit al vitezei](/Robot_SetDefaultValues "Robot SetDefaultValues"): Stabiliți valorile implicite pentru crearea punctelor de trecere
- ![](/images/Robot_InsertWaypoint.png) [Inserați un punct de trecere](/Robot_InsertWaypoint "Robot InsertWaypoint"): Inserați un punct de trecere de la poziția curentă a robotului într-o traiectorie
- ![](/images/Robot_InsertWaypointPre.png) [Inserați un punct de trecere](/Robot_InsertWaypointPre "Robot InsertWaypointPre"): Inserați un punct de trecere de la poziția curentă a mouse-ului într-o traiectorie

#### Traiectorii Parametrice

- ![](/images/Robot_Edge2Trac.png) [Generează o traiectorie dintr-un set de muchii](/Robot_Edge2Trac "Robot Edge2Trac"): Include un obiect nou ale cărui muchii vor forma o traiectorie
- ![](/images/Robot_TrajectoryDressUp.png) [Traiectorie suplimentară(Dress-up)](/Robot_TrajectoryDressUp "Robot TrajectoryDressUp"): Creați o traiectorie suplimentară care va suprascrie anumite proprietăți ale traiectoriei inițiale
- ![](/images/Robot_TrajectoryCompound.png) [Gruparea și conectarea traiectoriilor](/Robot_TrajectoryCompound "Robot TrajectoryCompound"): Conectează un set de traiectorii și creează o traiectorie mai complexă

## Script

A se vedea [Robot API example](/Robot_API_example "Robot API example") pentru o descriere a funcțiilor utilizate pentru a modela deplasările robotului .

## Tutoriale

- [Robot 6-Axis](/Robot_6-Axis "Robot 6-Axis")
- [VRML Preparation for Robot Simulation](/VRML_Preparation_for_Robot_Simulation "VRML Preparation for Robot Simulation")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/ro&oldid=978329>"
