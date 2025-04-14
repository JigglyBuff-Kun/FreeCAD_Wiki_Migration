---
title: Cables DelVertex
---

|                                                          |
| -------------------------------------------------------- |
| Cables DelVertex                                         |
| Menu location                                            |
| Cable Wires → Delete Vertex                              |
| Workbenches                                              |
| [Cables](/Cables_Workbench "Cables Workbench")           |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| 1.0                                                      |
| See also                                                 |
| [Cables AddVertex](/Cables_AddVertex "Cables AddVertex") |
|                                                          |

## Description

The ![](/images/Cables_DelVertex.svg) [Delete Vertex](/Cables_DelVertex "Cables DelVertex") deletes an existing vertex from ![](/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex "Cables WireFlex") object. It preserves proper assignment of existing attachments of wire vertexes. It should be used instead of "Delete point" command from [Draft Edit](/Draft_Edit "Draft Edit"), see the [WireFlex Description](/Cables_WireFlex#Description "Cables WireFlex").

## Usage

1. Select one mid vertex of an existing [WireFlex](/Cables_WireFlex "Cables WireFlex") object in the [3D view](/3D_view "3D view").
2. Delete selected vertex of **WireFlex** by one of these methods:
   - Press the ![](/images/Cables_DelVertex.svg) [Delete Vertex](/Cables_DelVertex "Cables DelVertex") button.
   - Select the **Cable Wires → ![](/images/Cables_DelVertex.svg) Delete Vertex** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cable Wires → ![](/images/Cables_DelVertex.svg) Delete Vertex** option from the context menu.

Only mid vertexes can be deleted with this tool. First and last vertex (Vrtx_start and Vrtx_end) cannot be deleted. The position of remaining vertexes can be edited later with [Draft Edit](/Draft_Edit "Draft Edit") command or attached to other objects with ![](/images/Cables_AttachVertex.svg) [Attach Vertex](/Cables_AttachVertex "Cables AttachVertex").

## Notes

- See the [WireFlex Description](/Cables_WireFlex#Description "Cables WireFlex") and [WireFlex Usage](/Cables_WireFlex#Usage "Cables WireFlex") for the details how to use WireFlex

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_DelVertex/en&oldid=1557559>"
