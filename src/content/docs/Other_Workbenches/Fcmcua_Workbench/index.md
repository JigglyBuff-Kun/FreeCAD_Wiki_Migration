---
title: Fcmcua Workbench
---

![](/src/assets/images/Fcmcua_wb.svg)

Fcmcua Workbench icon

## Introduction

Fcmcua is an [external workbench](/External_workbenches "External workbenches") that is used to control an assembly created in [Assembly4 Workbench](/Assembly4_Workbench "Assembly4 Workbench") from an [OPC UA](http://en.wikipedia.org/wiki/OPC_Unified_Architecture "wikipedia:OPC Unified Architecture") server. This provides functionality for simulating machines controlled by digital controllers such as [PLCs](http://en.wikipedia.org/wiki/Programmable_logic_controller "wikipedia:Programmable logic controller"), so long as the controller supports OPC UA. The workbench uses the values provided by the OPC UA server to manipulate the Attachment Offset of each part's Local Coordinate System (LCS).

## Installation

Fcmcua can be installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Usage

Fcmcua provides two types of mechanisms for simulating movement in a model: **Axis** and **Actuator**.

An **axis** is controlled by [floating point](http://en.wikipedia.org/wiki/Floating-point_arithmetic "wikipedia:Floating-point arithmetic") values that represent either the axis position or the speed of the motor that drives the axis.

An **actuator** is any motion triggered by a binary signal. In that case Fcmcua itself simulates the motion by calculating the positional values needed for the simulation.

For further usage instructions see the [Fcmcua repository](https://github.com/heissgetraenk/fcmcua).

### Connection

![](/src/assets/images/Fcmcua_wb.svg)

A URL to the OPC UA server must be specified in the form of `opc.tcp://127.0.0.1:4840`.

Setting a polling rate may be used to limit the time between updates to the FreeCAD assembly.

The connection state is displayed on the connection panel.

### Axis Settings

![](/src/assets/images/Fcmcua_axes.svg)

An axis node on the OPC UA server represents a one-dimensional change in the Attachment Offset of a part in the assembly. To configure this assignment the following information must be specified:

- **Node Id:** The address of the server node.
- **Document Name:** The name of the part's document.
- **LCS:** The label of the part's Local Coordinate System.
- **Offset:** The vector component of the Attachment Offset that the node value will update.
- **Type:** Speed axis or positional axis.

The value from the server can also be inverted or scaled by supplying a mathematical sign and/or factor.

### Actuator Settings

![](/src/assets/images/Fcmcua_actuator.svg)

An actuator node on the OPC UA server acts as a trigger to _open_ or _close_ the actuator. To configure the actuator the following information must be specified:

- **Type:** Describes how many signals are used to open or close the actuator.
- **Conditional Block:** An actuator may have a stop in its travel, activated by another binary signal. This feature is optional.
- **Node Ids:** Depending on the configuration: the addresses of the nodes that trigger the opening/closing or the block of the actuator.
- **Positions:** Depending on the configuration: the Attachment Offset values in the model that represent the open, close or block position of the actuator.
- **Durations:** The timing with which the actuator opens or closes.

## Links

- [Fcmcua repository](https://github.com/heissgetraenk/fcmcua)
- [External workbenches](/External_workbenches "External workbenches")

Retrieved from "<http://wiki.freecad.org/index.php?title=Fcmcua_Workbench/en&oldid=1223147>"
