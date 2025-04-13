---
title: Robot tutorial
---

|                  |
| ---------------- |
| Tutorial         |
| Topic            |
| Robot Workbench  |
| Level            |
| Beginner         |
| Time to complete |
|                  |
| Authors          |
| r-frank          |
| FreeCAD version  |
| 0.16.6703        |
| Example files    |
|                  |
| See also         |
| _None_           |
|                  |

## Introduction

This tutorial is here to teach you how to use the ![](/src/assets/images/Workbench_Robot.svg) [Robot Workbench](/Robot_Workbench "Robot Workbench") to simulate a robot cell set-up.

![](/src/assets/images/Robot_Tutorial_RobotSimulation.gif)

Final result of this tutorial

## Before you begin

This tutorial is written for FreeCAD Version 0.16.6703 or higher. So if you don't have FreeCAD on your
computer go to the [Download](/Download "Download") page and do the installation.

This tutorial is targeting on the use of [industrial robots](http://en.wikipedia.org/wiki/Industrial_robot)
and not mobile or service robots (see wikipedia's entry on [modern robots](http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Setting up the scene

1. Switch to the ![](/src/assets/images/Workbench_Robot.svg) [Robot Workbench](/Robot_Workbench "Robot Workbench")
2. Create a new document by choosing File → New from the top menu
3. Insert a Kuka IR500 robot into the scene by choosing Robot → Insert Robots → Kuka IR500 from the top menu
4. Change to axonometric view by clicking on the ![](/src/assets/images/View-axometric.svg) button
5. Zoom to fit all by clicking on ![](/src/assets/images/Std_ViewFitAll.svg) [FitAll](/Std_ViewFitAll "Std ViewFitAll") button
6. Save your file ...

## Setting up a trajectory

1. Switch to the ![](/src/assets/images/Workbench_Robot.svg) [Robot Workbench](/Robot_Workbench "Robot Workbench")
2. Activate the model-tab in the [tree view](/Tree_view "Tree view") by clicking on it
3. Create a new trajectory by clicking on the ![](/src/assets/images/Robot_CreateTrajectory.svg) [Robot CreateTrajectory](/Robot_CreateTrajectory "Robot CreateTrajectory") button
4. Select the robot in the [tree view](/Tree_view "Tree view")
5. Set home position for robot by clicking on ![](/src/assets/images/Robot_SetHomePos.svg) [Robot_SetHomePos](/Robot_SetHomePos "Robot SetHomePos")
6. Switch to the [Task Panel](/Task_Panel "Task Panel")
7. By using the sliders change robot position
8. When robot and trajectory are selected in [tree view](/Tree_view "Tree view") clicking on ![](/src/assets/images/Robot_InsertWaypoint.svg) [Robot InsertWaypoint](/Robot_InsertWaypoint "Robot InsertWaypoint") will insert the way-point in the trajectory
9. Each way-point is shown with a yellow cross, the waypoints are connected with orange lines
10. Define at least three different way points and insert them in the trajectory

## Simulating robot movement

1. Select robot and trajectory in [tree view](/Tree_view "Tree view")
2. Select simulation by clicking on ![](/src/assets/images/Robot_Simulate.svg) [Robot Simulate](/Robot_Simulate "Robot Simulate")
3. Click on Play ▶ button
4. Watch simulation

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/en&oldid=1251463>"
