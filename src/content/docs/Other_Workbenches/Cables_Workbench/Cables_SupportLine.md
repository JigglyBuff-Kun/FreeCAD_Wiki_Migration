---
title: Cables SupportLine
---

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cables SupportLine                                                                                                                                                     |
| Menu location                                                                                                                                                          |
| Cable Support → Support Line                                                                                                                                           |
| Workbenches                                                                                                                                                            |
| [Cables](/Cables_Workbench "Cables Workbench")                                                                                                                         |
| Default shortcut                                                                                                                                                       |
| _None_                                                                                                                                                                 |
| Introduced in version                                                                                                                                                  |
| 1.0                                                                                                                                                                    |
| See also                                                                                                                                                               |
| [Cables Cable](/Cables_Cable "Cables Cable"), [Cables CableBox](/Cables_CableBox "Cables CableBox"), [Cables SupportPoint](/Cables_SupportPoint "Cables SupportPoint") |
|                                                                                                                                                                        |

## Description

The ![](/src/assets/images/Cables_SupportLine.svg) [Support Line](/Cables_SupportLine "Cables SupportLine") creates a simple [Draft Line](/Draft_Line "Draft Line") in bright color and with enlarged vertexes. It serves as support for creating [WireFlex](/Cables_WireFlex "Cables WireFlex"). Its **Attachment** properties can be used e.g. to group cables around a [Cable Box](/Cables_CableBox "Cables CableBox") or other objects, for attaching cables to walls or ceilings etc.

![](/src/assets/images/Cables_SupportLine_Example1.png)

Support Line

## Usage

1. Select the vertex, point on surface or object in the [3D view](/3D_view "3D view") or select nothing.
2. Create Support Line by one of these methods:
   - Press the ![](/src/assets/images/Cables_SupportLine.svg) [Support Line](/Cables_SupportLine "Cables SupportLine") button.
   - Select the **Cable Support → ![](/src/assets/images/Cables_SupportLine.svg) Support Line** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cable Support → ![](/src/assets/images/Cables_SupportLine.svg) Support Line** option from the context menu.

Once created the Support Line is placed at the position of selected vertex, point or object in the 3D space (or at the point (0,0,0) if nothing was selected).

## Notes

By default, the **Subdivisions** property equals 1. It can be increased to make more support vertexes e.g. for bunch of parallel cables.

## Properties

A **Support Line** object has all properties of the [Draft Line](/Draft_Line#Properties "Draft Line").

## Typical workflow

Numerous attachments combinations are possible, which, together with WireFlex, provide a wide range of possibilities for relocating objects with cables stretched between them.

Example:

1. Create a **Cable Box** as described in [Cable Box Usage](/Cables_CableBox#Usage "Cables CableBox")
2. Select newly created **Cable Box** in a [Tree view](/Tree_view "Tree view") and create 4 support lines as described in [Usage](#Usage)
3. For each of 4 support lines choose **CableBox** in **Attachment Support** property
4. For each of 4 support lines choose **ObjectXY** in **Map Mode** property
5. Set different **Attachment Offset/Position** x, y, z values for every support line:
   - for 1st support line: x=0cm, y=11cm, z=-2cm
   - for 2nd support line: x=-8cm, y=0cm, z=-2cm and **Attachment Offset/Angle** to 90deg
   - for 3rd support line: x=8cm, y=0cm, z=-2cm and **Attachment Offset/Angle** to 90deg
   - for 4th support line: x=0cm, y=20cm, z=-2cm
6. Create first **WireFlex** wire by selecting center vertex of upper cross in the **Cable Box** and middle vertexes in support lines 1 and 4 and following [Wireflex Usage](/Cables_WireFlex#Usage "Cables WireFlex").
7. Create second and third **WireFlex** in a similar way.
8. The result should be similar to the one in the picture below
9. The next step could be to create cables from **WireFlex** wires (see [Cable Usage](/Cables_Cable#Usage "Cables Cable"))
10. Support lines can be hidden when wires are created.

![](/src/assets/images/Cables_SupportLine_Example2.png)

Example of using Support Line:  
Support lines are attached to Cable Box and serve as a basis for wires.

In this way the box with attached wires has been created. It allows movement of the whole set when repositioning cable box only. At any time selected vertexes can be unattached from support lines (see [RemoveVertexAttachment Usage](/Cables_RemoveVertexAttachment#Usage "Cables RemoveVertexAttachment")) ensuring that their positions do not change when the cable box is moved.

Another animated example which uses support lines is presented [here](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow").

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_SupportLine/en&oldid=1557608>"
