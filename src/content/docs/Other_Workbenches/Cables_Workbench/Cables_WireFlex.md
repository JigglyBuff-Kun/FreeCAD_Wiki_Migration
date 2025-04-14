---
title: Cables WireFlex
---

|                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cables WireFlex                                                                                                                                                                                                                                                                        |
| Menu location                                                                                                                                                                                                                                                                          |
| Cable Wires → New Wire Flex                                                                                                                                                                                                                                                            |
| Workbenches                                                                                                                                                                                                                                                                            |
| [Cables](/Cables_Workbench "Cables Workbench")                                                                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                 |
| Introduced in version                                                                                                                                                                                                                                                                  |
| 1.0                                                                                                                                                                                                                                                                                    |
| See also                                                                                                                                                                                                                                                                               |
| [Cables AddVertex](/Cables_AddVertex "Cables AddVertex"), [Cables DelVertex](/Cables_DelVertex "Cables DelVertex"), [Cables AttachVertex](/Cables_AttachVertex "Cables AttachVertex"), [Cables RemoveVertexAttachment](/Cables_RemoveVertexAttachment "Cables RemoveVertexAttachment") |
|                                                                                                                                                                                                                                                                                        |

## Description

The ![](/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex "Cables WireFlex") object is derived from ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") and inherits all its properties. The main difference is that WireFlex is able to attach every of its vertexes to external vertex or object (attachment to object is understood as an attachment to its Placement.Base). Not every vertex has to be attached, some of them can be left to move freely depending on current needs.

All WireFlex vertexes which are not attached to external vertexes|objects can be edited like **Draft Wire** vertexes with the [Draft Edit](/Draft_Edit "Draft Edit") command (just double-click on the WireFlex in the [Tree view](/Tree_view "Tree view")). See [Notes](#Notes).

Some properties of WireFlex inherited from **Draft Wire** are hidden by default, especially **Fillet Radius** property, which can be controlled from the cable properties if WireFlex is part of a [Cable](/Cables_Cable "Cables Cable"). It is strongly recommended to set Fillet Radius as the last step of WireFlex creation. Setting this during WireFlex editing can lead to an error: "_Not possible to modify WireFlex due to non zero Chamfer or Fillet or Subdivision_".

![](/images/Cables_WireFlex_Structure.png)

Sample structure of WireFlex

## Usage

1. Select the first external existing vertex in the [3D view](/3D_view "3D view").
2. Select additional vertexes (one or more) in the [3D view](/3D_view "3D view") holding the CTRL key.
3. Create **WireFlex** by one of these methods:
   - Press the ![](/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex "Cables WireFlex") button.
   - Select the **Cable Wires → ![](/images/Cables_WireFlex.svg) WireFlex** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cable Wires → ![](/images/Cables_WireFlex.svg) WireFlex** option from the context menu.

Note: selection of elements other then vertexes is treated as a selection of entire object.

After wire creation the first vertex|object which was selected in 3D View is automatically added to Attachment Support of a wire and the Map Mode property is set to Translate origin (general description of part attachment is here: [Part EditAttachment](/Part_EditAttachment "Part EditAttachment")). Additionally the same vertex|object is added to Vrtx_start property, the last selected vertex|object is added to Vrtx_end property and the selected mid vertexes|objects are added to Vrtxs_mid and Vrtxs_mid_idx accordingly.

At any time any WireFlex vertex can be detached or reatached to other object by using ![](/images/Cables_AttachVertex.svg) [Attach Vertex](/Cables_AttachVertex "Cables AttachVertex") or ![](/images/Cables_RemoveVertexAttachment.svg) [Remove Vertex Attachment](/Cables_RemoveVertexAttachment "Cables RemoveVertexAttachment") tools.

It is advised to experiment and familiarize yourself with the various options for possibly moving objects attached to a wire and observe the behavior of the wire depending on how many and which vertexes are attached to external objects and whether the Map Mode property is enabled or disabled for the entire wire. Even more interesting possibilities are provided by using e.g. ![](/images/Cables_SupportLine.svg) [Support Line](/Cables_SupportLine "Cables SupportLine") or ![](/images/Cables_SupportPoint.svg) [Support Point](/Cables_SupportPoint "Cables SupportPoint").

![](/images/Cables_WireFlex_Example1_static.png)

Example1  
Movement of the Cube1 which is attached to WireFlex start vertex when Attachment Map Mode of WireFlex is set to Translate origin.

![](/images/Cables_WireFlex_Example2_static.png)

Example2  
Movement of the Cube1 which is attached to WireFlex start vertex when Attachment Map Mode of WireFlex is Deactivated.

Animated version of the above images is [here](/Cables_Example2_WireFlex "Cables Example2 WireFlex")

## Notes

- A **WireFlex** can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command (run by double-click on the WireFlex in the [Tree view](/Tree_view "Tree view")).

When in **Draft Edit** mode DO NOT use "Add point" and "Delete point" from context menu. This can lead to wrong assignment of points attachments. To add or delete point from **WireFlex** use only ![](/images/Cables_AddVertex.svg) [Add Vertex](/Cables_AddVertex "Cables AddVertex") or ![](/images/Cables_DelVertex.svg) [Delete Vertex](/Cables_DelVertex "Cables DelVertex") while not in **Draft Edit** mode.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Cables WireFlex** object is derived from a [Draft Wire](/Draft_Wire "Draft Wire") and inherits all its properties. Some of the inherited properties are hidden (see [Description](#Description)). WireFlex also has the following additional properties:

### Data

Wire Flex

- Data**Vrtx_start** (`LinkSub`): specifies the attachment support for the first vertex (point) of the wire.
- Data**Vrtx_end** (`LinkSub`): specifies the attachment support for the last vertex (point) of the wire.
- Data**Vrtxs_mid** (`LinkSubList`): specifies the list of attachment support for the middle vertexes (points) of the wire. Middle vertexes: all wire vertexes except the first and the last vertex.
- Data**Vrtxs_mid_idx** (`IntegerList`): specifies the list of indexes of Vrtxs_mid attachment support list of the wire. The lowest mid idx number can have a value 2, the highest can have a value n-1, where n is the number of vertexes (points) of the wire.

It is recommended to not adjust the above properties manually, but to use ![](/images/Cables_AttachVertex.svg) [Attach Vertex](/Cables_AttachVertex "Cables AttachVertex") or ![](/images/Cables_RemoveVertexAttachment.svg) [Remove Vertex Attachment](/Cables_RemoveVertexAttachment "Cables RemoveVertexAttachment") tools which are designed to do so.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_WireFlex/en&oldid=1557548>"
