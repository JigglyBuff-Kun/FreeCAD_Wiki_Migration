---
title: Cables AttachVertex
---

|                                                                                                 |
| ----------------------------------------------------------------------------------------------- |
| Cables AttachVertex                                                                             |
| Menu location                                                                                   |
| Cable Wires → Attach Vertex                                                                     |
| Workbenches                                                                                     |
| [Cables](/Cables_Workbench "Cables Workbench")                                                  |
| Default shortcut                                                                                |
| _None_                                                                                          |
| Introduced in version                                                                           |
| 1.0                                                                                             |
| See also                                                                                        |
| [Cables RemoveVertexAttachment](/Cables_RemoveVertexAttachment "Cables RemoveVertexAttachment") |
|                                                                                                 |

## Description

The ![](/src/assets/images/Cables_AttachVertex.svg) [Attach Vertex](/Cables_AttachVertex "Cables AttachVertex") attaches an existing vertex of ![](/src/assets/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex "Cables WireFlex") to external vertex or object. Attachments of vertexes are kept in special properties of WireFlex, for details see [WireFlex Properties](/Cables_WireFlex#Properties "Cables WireFlex").

Once attached the wire vertex keeps the same position in 3D space as the external vertex to which it is attached to. When the external vertex is moved, the attached wire vertex moves together with it. When the wire is edited in the [Draft Edit](/Draft_Edit "Draft Edit") the attached vertex can not be moved. It jumps back to its attached position.

## Usage

1. Select one vertex of an existing [WireFlex](/Cables_WireFlex "Cables WireFlex") object in the [3D view](/3D_view "3D view").
2. Select one external vertex in the [3D view](/3D_view "3D view") holding the CTRL key.
3. Create a new WireFlex **vertex attachment** by one of these methods:
   - Press the ![](/src/assets/images/Cables_AttachVertex.svg) [Attach Vertex](/Cables_AttachVertex "Cables AttachVertex") button.
   - Select the **Cable Wires → ![](/src/assets/images/Cables_AttachVertex.svg) Attach Vertex** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cable Wires → ![](/src/assets/images/Cables_AttachVertex.svg) Attach Vertex** option from the context menu.

Note: selection of external elements other then vertexes is treated as a selection of entire object. Attachment to object is understood as an attachment to its Placement.Base.

## Notes

- See the [WireFlex Description](/Cables_WireFlex#Description "Cables WireFlex") and [WireFlex Usage](/Cables_WireFlex#Usage "Cables WireFlex") for the details how to use WireFlex.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_AttachVertex/en&oldid=1557564>"
