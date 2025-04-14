---
title: Cables CableBox
---

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| Cables CableBox                                                                                                       |
| Menu location                                                                                                         |
| Cables → Cable Box                                                                                                    |
| Workbenches                                                                                                           |
| [Cables](/Cables_Workbench "Cables Workbench")                                                                        |
| Default shortcut                                                                                                      |
| _None_                                                                                                                |
| Introduced in version                                                                                                 |
| 1.0                                                                                                                   |
| See also                                                                                                              |
| [Cables Cable](/Cables_Cable "Cables Cable"), [Cables CableConnector](/Cables_CableConnector "Cables CableConnector") |
|                                                                                                                       |

## Description

The ![](/images/Cables_CableBox.svg) [Cable Box](/Cables_CableBox "Cables CableBox") creates a parametric cable box object. It has default size upon creation, but some parameters, like **Diameter**, **Height** or **Thickness** can be changed later. The **Cable Box** belongs to the [Arch Component](/Arch_Component "Arch Component") class and inherits all of its properties. The **Cable Box** has four inlet holes equipped with support crosses. Each support cross has five vertexes which can be used as attachment supports for up to five cables entering single hole.

Moreover, the **Cable Box** is equipped with two adjustable helper rings. Their purpose is to offer a temporary snapping points during editing cable subwires in [Draft Edit](/Draft_Edit "Draft Edit") mode to help to give them the desired shape. When not needed anymore, the helper rings can be hidden by setting **Helper Rings Hidden** property. Temporary means that helper rings should not be used as attachment support for vertexes of subwires.

**Cable Box** object can be colored by attaching desired [Material](/Arch_SetMaterial "Arch SetMaterial") to the **Material** property.

![](/images/Cables_CableBox_Example1.png)

Example of the default Cable Box:  
There are visible support crosses inside holes and helper rings inside a box.

## Usage

1. Select the vertex, point on surface or object in the [3D view](/3D_view "3D view") or select nothing.
2. Create Cable Box by one of these methods:
   - Press the ![](/images/Cables_CableBox.svg) [Cable Box](/Cables_CableBox "Cables CableBox") button.
   - Select the **Cables → ![](/images/Cables_CableBox.svg) Cable Box** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cables → ![](/images/Cables_CableBox.svg) Cable Box** option from the context menu.

Once created the Cable Box is placed at the position of selected vertex, point or object in the 3D space (or at the point (0,0,0) if nothing was selected).

## Notes

Helper rings are visible by default. They can be easily hidden by setting the **Helper Rings Hidden** property.

## Properties

A **Cable Box** object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Cable Box

- Data**Box Body Hidden** (`Bool`): If set to _true_ the box shape is hidden to make it easier to edit wires inside a box (with possible help of helper rings). It should be set to _false_ when wires editing is finished or not needed.
- Data**Diameter** (`Length`): Specifies the inner diameter of the box. The default diameter is 60 mm.
- Data**Height** (`Length`): Specifies the inner height of the box. The default height is 62 mm.
- Data**Thickness** (`Length`): Specifies the wall thickness of the box. The default thickness is 2 mm.

Cable Box Helpers

- Data**Helper Rings Hidden** (`Bool`): If set to _true_ the helper rings are hidden. The default value is _false_. Helper rings are designed to make it easier to edit wires inside a box. Helper ring vertexes can serve as snapping points for cable subwires when subwires are in [Draft Edit](/Draft_Edit "Draft Edit") mode. This property can be set to _true_ when wires editing is finished or not needed.
- Data**Ring 1 Diameter** (`Length`): the diameter of helper ring 1. The default value is 45 mm.
- Data**Ring 1 Height** (`Length`): the helper ring 1 height below the box lid (top open box edge). The default value is 40 mm.
- Data**Ring 2 Diameter** (`Length`): the diameter of helper ring 2. The default value is 30 mm.
- Data**Ring 2 Height** (`Length`): the helper ring 2 height below the box lid (top open box edge). The default value is 20 mm.

## Typical workflow

This workflow shows how to build a box with a cable attached and with one subwire of cable shaped inside a box.

1. Create a **Cable Box** as described in [Usage](#Usage)
2. Create **Cable** as described in [Cable Usage](/Cables_Cable#Usage "Cables Cable") with one end of a base wire attached to central vertex of one of **Cable Box** crosses.
3. Hide **Cable** shape in a [Tree view](/Tree_view "Tree view") e.g. by pressing SPACE key. The cable subwires should be still visible.
4. Hide the **Cable Box** shape by setting the property **Box Body Hidden**. The crosses and helper rings should be still visible.
5. Click on the free end edge of one of cable subwires and add a vertex to it with [Add Vertex](/Cables_AddVertex "Cables AddVertex"). Repeat the action.
6. Double click the above subwire in a [Tree view](/Tree_view "Tree view") to enter [Draft Edit](/Draft_Edit "Draft Edit") mode. [Snap Endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint") should be enabled.
7. Drag the newly created wire vertexes to different vertexes of helper rings. They should easily snap. Exit [Draft Edit](/Draft_Edit "Draft Edit") mode.
8. When the desired shape of the subwire has been built, the **Sub Wires Fillet Radius** property of a **Cable** can be set e.g. to 4mm.
9. Unhide **Cable** shape in a [Tree view](/Tree_view "Tree view") e.g. by pressing SPACE key.
10. Hide the helper rings shape by setting the **Helper Rings Hidden** property in the **Cable Box**.
11. Unide the **Cable Box** shape by unsetting the property **Box Body Hidden**.

Note: At any time during subwire editing the [Draft Edit](/Draft_Edit "Draft Edit") mode should be exited and the height or diameter of helper ring can be changed. Then again the [Draft Edit](/Draft_Edit "Draft Edit") mode can be entered and editing continued with new positions of helper rings.

![](/images/Cables_CableBox_Example2_static.png)

Example of cable subwire shaped inside Cable Box.

[Here](/Cables_Example3_CableBox "Cables Example3 CableBox") is the animated image showing the steps described above.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableBox/en&oldid=1557584>"
