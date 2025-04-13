---
title: Robot Radni stol
---

:::caution
The Robot Workbench is unmaintained. If you have experience with the topic and are interested in maintaining it, please state your intention in the developer's section of theFreeCAD forum.The reason this workbench is still in the master source code is because this workbench is programmed in C++. If this workbench could be programmed in Python, then it could be made anexternal workbenchand it could be moved to a separate repository.
:::

## Introduction

![](/images/Workbench_Robot.svg)

Robot workbench icon

The ![](/images/Workbench_Robot.svg) [Robot Workbench](/Robot_Workbench "Robot Workbench") is a tool to simulate a standard [6-axis industrial robot](/Robot_6-Axis "Robot 6-Axis"), like [Kuka](http://kuka.com/).

You can do the following tasks:

- Set up a simulation environment with a robot and work pieces.
- Create and fill up movement trajectories.
- Decompose features of a CAD part to a trajectory.
- Simulate the robot movement and reaching distance.
- Export the trajectory to a robot program file.

To get started try the [Robot tutorial](/Robot_tutorial "Robot tutorial"), and see the programming interface in the [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py) example file.

![](/images/Robot_Workbench_example.jpg)

## Tools

Here the principal commands you can use to create a robot set-up.

### Robots

The tools to create and manage the 6-Axis robots

- ![](/images/Robot_CreateRobot.svg) [Create a robot](/Robot_CreateRobot "Robot CreateRobot"): Insert a new robot into the scene
- ![](/images/Robot_Simulate.svg) [Simulate a trajectory](/Robot_Simulate "Robot Simulate"): Opens the simulation dialog and lets you simulate
- ![](/images/Robot_Export.svg) [Export a trajectory](/Robot_Export "Robot Export"): Export a robot program file
- ![](/images/Robot_SetHomePos.svg) [Set home position](/Robot_SetHomePos "Robot SetHomePos"): Set the home position of a robot
- ![](/images/Robot_RestoreHomePos.svg) [Restore home position](/Robot_RestoreHomePos "Robot RestoreHomePos"): move the robot to its home position

### Trajectories

Tools to create and manipulate trajectories. There are two kinds, the parametric and non parametric ones.

#### Non parametric trajectories

- ![](/images/Robot_CreateTrajectory.svg) [Create a trajectory](/Robot_CreateTrajectory "Robot CreateTrajectory"): Inserts a new empty trajectory-object into the scene
- ![](/images/Robot_SetDefaultOrientation.svg) [Set the default orientation](/Robot_SetDefaultOrientation "Robot SetDefaultOrientation"): Set the orientation way-points gets created by default
- ![](/images/Robot_SetDefaultValues.svg) [Set the default speed parameter](/Robot_SetDefaultValues "Robot SetDefaultValues"): Set the default values for way-point creation
- ![](/images/Robot_InsertWaypoint.svg) [Insert a waypoint](/Robot_InsertWaypoint "Robot InsertWaypoint"): Insert a way-point from the current robot position into a trajectory
- ![](/images/Robot_InsertWaypointPre.svg) [Insert a waypoint preselected](/Robot_InsertWaypointPre "Robot InsertWaypointPre"): Insert a way-point from the current mouse position into a trajectory

#### Parametric trajectories

- ![](/images/Robot_Edge2Trac.svg) [Create a trajectory out of edges](/Robot_Edge2Trac "Robot Edge2Trac"): Insert a new object which decompose edges to a trajectory
- ![](/images/Robot_TrajectoryDressUp.svg) [Dress-up a trajectory](/Robot_TrajectoryDressUp "Robot TrajectoryDressUp"): Lets you override one or more properties of a trajectory
- ![](/images/Robot_TrajectoryCompound.svg) [Trajectory compound](/Robot_TrajectoryCompound "Robot TrajectoryCompound"): Create a compound out of some single trajectories

## Scripting

See the [Robot API example](/Robot_API_example "Robot API example") for a description of the functions used to model the robot displacements.

## Tutorials

- [Robot 6-Axis](/Robot_6-Axis "Robot 6-Axis")
- [VRML Preparation for Robot Simulation](/VRML_Preparation_for_Robot_Simulation "VRML Preparation for Robot Simulation")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/hr&oldid=812058>"
