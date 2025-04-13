---
title: Cables Workbench
---

![](/src/assets/images/Cables_workbench_icon.svg)

Cables Workbench icon

## Introduction

The ![](/src/assets/images/Cables_workbench_icon.svg) [Cables Workbench](/Cables_Workbench "Cables Workbench") is a toolset for modeling electrical installations in architectural design projects. It is made to help run cables inside buildings or other objects and to build models of cables with the possibility of making single wire connections. It is an [external workbench](/External_workbenches "External workbenches").

This toolset can be used to create electrical boxes or other ready to use electrical elements (the element list will hopefully be expanded in the future). These elements can be connected with fully parametric cables of different profiles, number of wires and thicknesses. There are a few predefined cable profiles here, but there is also possibility to create own non standard profiles with a simple csv file.

Models built with this workbench allow easy repositioning of elements without breaking connections. Cables can adjust their shape to new positions. However, this feature is not perfect yet.

The workbench aims to be compatible with [BIM Workbench](/BIM_Workbench "BIM Workbench") but it can be used for purposes other than architectural designs. It is planned in the future to make the workbench also more suitable for modeling pcb connections (any help in creating, for example, a set of ready-made connectors is very welcome).

![](/src/assets/images/Cables_Example3.png)

Example of wall mounted boxes and cable  
Animated version [here](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow")

![](/src/assets/images/Cables_Example1.png)

Example of three-core flat cable:  
Multimaterial cable shape and its base wire, profile and subwires.

## Installation

This workbench can be installed from ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). See also [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches") for manual installation.

## Tools

Cable tools are divided into few groups depending on their purpose.

### Wire manipulation tools

- ![](/src/assets/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex "Cables WireFlex"): Creates a new WireFlex object stretched between two or more selected vertexes|objects

- ![](/src/assets/images/Cables_AddVertex.svg) [Add Vertex to WireFlex](/Cables_AddVertex "Cables AddVertex"): Creates additional vertex on a selected WireFlex edge.

- ![](/src/assets/images/Cables_DelVertex.svg) [Delete Vertex from WireFlex](/Cables_DelVertex "Cables DelVertex"): Deletes selected WireFlex vertex.

- ![](/src/assets/images/Cables_AttachVertex.svg) [Attach WireFlex Vertex](/Cables_AttachVertex "Cables AttachVertex"): Attaches selected WireFlex vertex to external vertex|object.

- ![](/src/assets/images/Cables_RemoveVertexAttachment.svg) [Remove WireFlex Vertex Attachment](/Cables_RemoveVertexAttachment "Cables RemoveVertexAttachment"): Removes selected WireFlex vertex attachment from external vertex|object.

### Tools for making cables and other ready-made elements

- ![](/src/assets/images/Cables_Profile.svg) [Cable Profile](/Cables_Profile "Cables Profile"): Adds a new cable profile to the current document.

- ![](/src/assets/images/Cables_Cable.svg) [Cable](/Cables_Cable "Cables Cable"): Adds a new cable based on selected wire and profile.

- ![](/src/assets/images/Cables_CableBox.svg) [Cable Box](/Cables_CableBox "Cables CableBox"): Adds a new parametric cable box.

- ![](/src/assets/images/Cables_CableConnector.svg) [Cable Connector](/Cables_CableConnector "Cables CableConnector"): Adds a new parametric universal cable connector.

- ![](/src/assets/images/Cables_CableLightPoint.svg) [Cable Light Point](/Cables_CableLightPoint "Cables CableLightPoint"): Adds a new parametric universal light point for cable.

- ![](/src/assets/images/Cables_Material.svg) [Cable Materials](/Cables_Material "Cables Material"): Adds a default set of multimaterials to the current document.

### Support tools

- ![](/src/assets/images/Cables_SupportPoint.svg) [Support Point](/Cables_SupportPoint "Cables SupportPoint"): Adds a universal support point.

- ![](/src/assets/images/Cables_SupportLine.svg) [Support Line](/Cables_SupportLine "Cables SupportLine"): Adds a universal support line.

### External tools

- ![](/src/assets/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid"): Changes the visibility of the grid.

## Notes

This workbench is currently at the alpha stage. You can expect some bugs which can make your model broken. Some properties of models can change in the future and break models created with current version. Wiki pages related to this workbench can also be significantly changed in the future. Any comments and new ideas are very welcome. Please put your comments and reports through the channels specified in [References](#References).

## Basic Workflow Description

1. Create endpoints for cables like: [Cable Box](/Cables_CableBox "Cables CableBox") or [Cable Light Point](/Cables_CableLightPoint "Cables CableLightPoint") and arrange them in a 3D space.
2. Create base wires connecting created endpoints with [WireFlex](/Cables_WireFlex "Cables WireFlex") and arrange them in a 3D space with the help of [Support Lines](/Cables_SupportLine "Cables SupportLine") or [Support Points](/Cables_SupportPoint "Cables SupportPoint").
3. Create [Cable Profiles](/Cables_Profile "Cables Profile") suitable for the project.
4. Create [Cables](/Cables_Cable "Cables Cable") based on existing base wires and profiles.
5. Color the cables with the predefined or customized [Cable Materials](/Cables_Material "Cables Material").
6. Finally (and optionally) connect chosen single cable wires using [Cable Connectors](/Cables_CableConnector "Cables CableConnector").

## Tutorials and Examples

Example FreeCAD documents with cables:

- [Examples](https://github.com/sargo-devel/Cables/tree/master/examples) shipped with the source code

Example animated images:

- [Simple workflow example](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow")
- [WireFlex moving examples](/Cables_Example2_WireFlex "Cables Example2 WireFlex")
- [Cable Box example usage](/Cables_Example3_CableBox "Cables Example3 CableBox")
- [Cable Connector example usage](/Cables_Example4_CableConnector "Cables Example4 CableConnector")

## References

- Source code on GitHub: <https://github.com/sargo-devel/Cables>
- FreeCAD Forum: <https://forum.freecad.org/viewtopic.php?t=94090>
- Report bugs: Please report bugs [here](https://github.com/sargo-devel/Cables/issues)

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Workbench/en&oldid=1553240>"
