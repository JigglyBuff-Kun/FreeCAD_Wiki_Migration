---
title: Tutorial robotică
---
|  |
| --- |
| Tutorial |
| Topic |
| Robot Workbench |
| Level |
| Beginner |
| Time to complete |
|  |
| Authors |
| r-frank |
| FreeCAD version |
| 0.16.6703 |
| Example files |
|  |
| See also |
| *None* |
|  |

Acest tutorial este aici pentru a vă învăța să utilizați [Robot Workbench](/Robot_Workbench "Robot Workbench") în vedere setării și simulării celulelor de roboți .

![](/images/Robot_Tutorial_RobotSimulation.gif)

## Before you begin

Acest tutorial este scris pentru FreeCAD Version 0.16.6703 sau mai recent. așa că dacă nu aveți FreeCAD pe computerul dvs. mergeți la pagina [Download](/Download "Download") și procedați la instalare.

This tutorial is targeting on the use of [industrial robots](http://en.wikipedia.org/wiki/Industrial_robot)
and not mobile or service robots (see [here](http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Setting up the scene

1. Switch to the [Robot Workbench](/Robot_Workbench "Robot Workbench")
2. Create a new document by choosing  File  →  New  from the top menu
3. Insert a Kuka IR500 robot into the scene by choosing  Robot  →  Insert Robots  →  Kuka IR500  from the top menu
4. Change to axonometric view by clicking on ![](/images/View-axometric.png)
5. Zoom to fit all by clicking on ![](/images/View-zoom-all.png)
6. Save your file ...

## Setting up a trajectory

1. Switch to the [Robot Workbench](/Robot_Workbench "Robot Workbench")
2. Activate the model-tab in the tree view by clicking on it
3. Create a new trajectory by clicking on ![](/images/Robot_CreateTrajectory.png)
4. Select the robot in the tree view
5. Set home position for robot by clicking on ![](/images/Robot_SetHomePos.png)
6. Switch to the Task Panel
7. By using the sliders change robot position
8. When robot and trajectory are selected in tree view clicking on ![](/images/Robot_InsertWaypoint.png) will insert the way-point in the trajectory
9. Each way-point is shown with a yellow cross, the waypoints are connected with orange lines
10. Define at least three different way points and insert them in the trajectory

## Simularea mișcării robotului

1. Select robot and trajectory in tree view
2. Select simulation by clicking on ![](/images/Robot_Simulate.png)
3. Click on Play-Button  I>
4. Watch simulation

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/ro&oldid=1251490>"