---
title: Cables CableConnector
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Cables CableConnector                                                                               |
| Menu location                                                                                       |
| Cables → Cable Connector                                                                            |
| Workbenches                                                                                         |
| [Cables](/Cables_Workbench "Cables Workbench")                                                      |
| Default shortcut                                                                                    |
| _None_                                                                                              |
| Introduced in version                                                                               |
| 1.0                                                                                                 |
| See also                                                                                            |
| [Cables Cable](/Cables_Cable "Cables Cable"), [Cables CableBox](/Cables_CableBox "Cables CableBox") |
|                                                                                                     |

## Description

The ![](/images/Cables_CableConnector.svg) [Cable Connector](/Cables_CableConnector "Cables CableConnector") creates a parametric connector object. The connector is a model of electrically conductive metal block (for simplicity without external insulation). From an electrical point of view, all wires connected to a connector form one electrical node. The connector has default size upon creation, but some parameters, like **Height**, **Hole**, **Hole Diameter** or **Number of Holes** can be changed later. The **Cable Connector** belongs to the [Arch Component](/Arch_Component "Arch Component") class and inherits all of its properties. The **Cable Connector** has a parametrically defined number of holes equipped with support points. Each hole has two support points (one point on each side of the hole) which can be used as attachment supports for wires passing through the hole.

The support points are barely visible by default, but this can be changed by increasing the **Point Size** view property.

**Cable Connector** object can be colored by attaching desired [Material](/Arch_SetMaterial "Arch SetMaterial") to the **Material** property.

![](/images/Cables_CableConnector_Example1.png)

Example of the default Cable Connector:  
There are support points above and below holes.

## Usage

1. Select the vertex, point on surface or object in the [3D view](/3D_view "3D view") or select nothing.
2. Create Cable Connector by one of these methods:
   - Press the ![](/images/Cables_CableConnector.svg) [Cable Connector](/Cables_CableConnector "Cables CableConnector") button.
   - Select the **Cables → ![](/images/Cables_CableConnector.svg) Cable Connector** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cables → ![](/images/Cables_CableConnector.svg) Cable Connector** option from the context menu.

Once created the Cable Connector is placed at the position of selected vertex, point or object in the 3D space (or at the point (0,0,0) if nothing was selected).

## Notes

Support points are always visible. The visibility can be improved by increasing the **Point Size** view property.

## Properties

A **Cable Connector** object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Cable Connector

- Data**Height** (`Length`): Specifies the height of the connector. The default height is 5 mm.
- Data**Hole Size** (`Length`): Specifies the size of holes in mm2. The default hole size is 2 mm2.
- Data**Number of Holes** (`Integer`): Specifies the number of holes. By default there are 3 holes.
- Data**Thickness** (`Length`): Specifies the thickness of the wall between the hole and external surface of connector. The default thickness is 1 mm.

## Typical workflow

This workflow shows how to build a connector, a cable box, a cable and how one subwire of cable can be passed through the one of connector holes.

1. Create a **Cable Box** and a **Cable** attached to it as described in [Cable Box Typical workflow](/Cables_CableBox#Typical_workflow "Cables CableBox").
2. Select the **Cable Box** in a [Tree view](/Tree_view "Tree view") and create a **Cable Connector** as described in [Usage](#Usage).
3. Attach the **Cable Connector** to the **Cable Box** by setting it as Attachment Support and Object's XY as Map Mode.
4. Move the **Cable Connector** to the desired position using Position in Attachment Offset Property.
5. Make sure the **Sub Wires Fillet Radius** property of a **Cable** is set to 0 mm.
6. Hide the **Cable Box** and **Cable** shapes in a [Tree view](/Tree_view "Tree view") e.g. by pressing SPACE key. The cable subwires should be still visible.
7. Attach the end point of longest subwire created in step 1 to the top support point of first **Cable Connector** hole.
8. Attach the penultimate point of the same subwire to the bottom support point of first **Cable Connector** hole.
9. When the desired shape of the subwire has been built, the **Sub Wires Fillet Radius** property of a **Cable** can be set e.g. to 4mm.
10. Unhide **Cable** and **Cable Box** shapes in a [Tree view](/Tree_view "Tree view") e.g. by pressing SPACE key.

![](/images/Cables_CableConnector_Example2_static.png)

Example of cable subwire passed through the hole of Cable Connector.

[Here](/Cables_Example4_CableConnector "Cables Example4 CableConnector") is the animated image showing the steps described above.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableConnector/en&oldid=1557590>"
