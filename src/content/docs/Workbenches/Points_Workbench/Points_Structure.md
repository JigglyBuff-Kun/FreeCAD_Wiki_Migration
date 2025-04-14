---
title: Points Structure
---

|                                                |
| ---------------------------------------------- |
| Points Structure                               |
| Menu location                                  |
| Points → Structured point cloud                |
| Workbenches                                    |
| [Points](/Points_Workbench "Points Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The **Points Structure** command creates a structured point cloud from the points of an existing scattered point cloud. A structured point cloud has the advantage that tessellation is much easier.

The command only works for point clouds whose points, when viewed from a certain direction, are organized in a regular 2D grid. These point clouds are typically produced by [structured-light 3D scanners](https://en.wikipedia.org/wiki/Structured-light_3D_scanner) and do not have undercuts. For complex objects, point clouds from many different view directions have to be combined.

## Usage

1. The command assumes that the view direction of the point cloud is parallel to the Z axis of the global coordinate system. If this is not the case: adjust the point cloud object's Data**Placement** accordingly.
2. Select the point cloud object.
3. There are several ways to invoke the command:
   - Press the ![](/images/Points_Structure.svg) [Structured point cloud](/Points_Structure "Points Structure") button.
   - Select the **Points → ![](/images/Points_Structure.svg) Structured point cloud** option from the menu.

## Properties

See [Points Convert](/Points_Convert "Points Convert").

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Structure/en&oldid=1332347>"
