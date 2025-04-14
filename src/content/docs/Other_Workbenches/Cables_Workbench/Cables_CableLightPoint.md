---
title: Cables CableLightPoint
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Cables CableLightPoint                                                                              |
| Menu location                                                                                       |
| Cables → Cable Light Point                                                                          |
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

The ![](/images/Cables_CableLightPoint.svg) [Cable Light Point](/Cables_CableLightPoint "Cables CableLightPoint") creates a parametric light point object. The light point is a simple ring symbolizing the point where a cable exits from e.g. the wall to connect a light source (e.g. a lamp). It has default size upon creation, but some parameters, like **Diameter**, **Height** or **Thickness** can be changed later. The **Cable Light Point** belongs to the [Arch Component](/Arch_Component "Arch Component") class and inherits all of its properties. The **Cable Light Point** has two support points (one point on each side of the hole) which can be used as attachment supports for a cable passing through the ring.

The support points are barely visible by default, but this can be changed by increasing the **Point Size** view property.

**Cable Light Point** object can be colored by attaching desired [Material](/Arch_SetMaterial "Arch SetMaterial") to the **Material** property.

![](/images/Cables_CableLightPoint_Example1.png)

Example of the default Cable Light Point:  
There are support points above and below the ring.

## Usage

1. Select the vertex, point on surface or object in the [3D view](/3D_view "3D view") or select nothing.
2. Create Cable Light Point by one of these methods:
   - Press the ![](/images/Cables_CableLightPoint.svg) [Cable Light Point](/Cables_CableLightPoint "Cables CableLightPoint") button.
   - Select the **Cables → ![](/images/Cables_CableLightPoint.svg) Cable Light Point** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Cables → ![](/images/Cables_CableLightPoint.svg) Cable Light Point** option from the context menu.

Once created the Cable Light Point is placed at the position of selected vertex, point or object in the 3D space (or at the point (0,0,0) if nothing was selected).

## Notes

Support points are always visible. The visibility can be improved by increasing the **Point Size** view property.

## Properties

A **Cable Light Point** object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Cable Light Point

- Data**Diameter** (`Length`): Specifies the outer diameter of the ring. The default diameter is 20 mm.
- Data**Height** (`Length`): Specifies the height of the ring. The default height is 5 mm.
- Data**Thickness** (`Length`): Specifies the wall thickness of the ring. The default thickness is 2 mm.

## Typical workflow

The way of building a **Cable Light Point** is very similar to the [Cable Box Typical workflow](/Cables_CableBox#Typical_workflow "Cables CableBox") or [Cable Connector Typical workflow](/Cables_CableConnector#Typical_workflow "Cables CableConnector")

![](/images/Cables_CableLightPoint_Example2.png)

Example of a cable ended inside Cable Light Point.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_CableLightPoint/en&oldid=1557594>"
