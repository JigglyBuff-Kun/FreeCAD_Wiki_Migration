---
title: Robot tutorial
---
|  |
| --- |
| Tutorial |
| Tema |
| Robot Workbench |
| Nivel |
| Beginner |
| Tiempo para completar |
|  |
| Autores |
| r-frank |
| Versión de FreeCAD |
| 0.16.6703 |
| Archivos de ejemplos |
|  |
| Ver también |
| *None* |
|  |

Este tutorial te mostrará cómo utilizar el [Entorno de simulación de Robots](/Robot_Workbench/es "Robot Workbench/es") para simular la configuración de una célula de un robot.

![](/images/Robot_Tutorial_RobotSimulation.gif)

Final result of this tutorial

## Antes de empezar

Este tutorial está escrito para FreeCAD Versión 0.11 R3977 o superior. Así que si no tienes FreeCAD en tu equipo ve a la página de [Descargas](/Download/es "Download/es") y haz la instalación.

El objetivo de este tutorial es el uso de [robots industriales](http://en.wikipedia.org/wiki/Industrial_robot) y no móbiles o robots de servicio (mira [aquí](http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Setting up a trajectory

1. Switch to the ![](/images/Workbench_Robot.svg) [Robot Workbench](/Robot_Workbench "Robot Workbench")
2. Activate the model-tab in the [tree view](/Tree_view "Tree view") by clicking on it
3. Create a new trajectory by clicking on the ![](/images/Robot_CreateTrajectory.svg) [Robot CreateTrajectory](/Robot_CreateTrajectory "Robot CreateTrajectory") button
4. Select the robot in the [tree view](/Tree_view "Tree view")
5. Set home position for robot by clicking on ![](/images/Robot_SetHomePos.svg) [Robot\_SetHomePos](/Robot_SetHomePos "Robot SetHomePos")
6. Switch to the [Task Panel](/Task_Panel "Task Panel")
7. By using the sliders change robot position
8. When robot and trajectory are selected in [tree view](/Tree_view "Tree view") clicking on ![](/images/Robot_InsertWaypoint.svg) [Robot InsertWaypoint](/Robot_InsertWaypoint "Robot InsertWaypoint") will insert the way-point in the trajectory
9. Each way-point is shown with a yellow cross, the waypoints are connected with orange lines
10. Define at least three different way points and insert them in the trajectory

## Simulating robot movement

1. Select robot and trajectory in [tree view](/Tree_view "Tree view")
2. Select simulation by clicking on ![](/images/Robot_Simulate.svg) [Robot Simulate](/Robot_Simulate "Robot Simulate")
3. Click on Play  ▶ button
4. Watch simulation

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/es&oldid=1251478>"