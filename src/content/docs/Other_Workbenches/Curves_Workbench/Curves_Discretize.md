---
title: Curves Discretize
---

|                                                |
| ---------------------------------------------- |
| Curves Discretize                              |
| Menu location                                  |
| Curves → Discretize                            |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_Discretize.svg) **Curves Discretize** tool discretizes an edge or a wire and therefore creates a set of points along the edge/wire according to a chosen discretization method.

## Usage

1. Select one or more edges in the [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_Discretize.svg) [Discretize](/Curves_Discretize "Curves Discretize") button.
   - Select the **Curves → ![](/src/assets/images/Curves_Discretize.svg) Discretize** option from the menu.
3. A **Discretized_Edge** object is created for each selected edge.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose a different discretization method and adjust the related properties (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Discretized_Edge** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Discretized

- Data**Edge** (`LinkSub`): Input edge.
- Data**Point** (`VectorList`): Lists the output points.
- Data**Target** (`Enumeration`): Tool target.
  - `SingleEdge` (default): Discretizes the selected edge only.
  - `Wire`: Discretizes the whole wire the edge belongs to.

Method

- Data**Algorithm** (`Enumeration`): Discretization method.
  - `Number` (default): A number of points that are evenly distributed along the selected edge/wire.
  - `QuasiNumber`: ...
  - `Distance`: All points are placed at the same distance to their neighbors apart from the last pair.
  - `Deflection`: ...
  - `QuasiDeflection`: ...
  - `Angular-Curvature`: ...
- Data**Angular** (`Float`): Angular value for Angular-Curvature Algorithm.
- Data**Curvature** (`Float`): Curvature value for Angular-Curvature Algorithm.
- Data**Deflection** (`Float`): Distance for deflection Algorithm.
- Data**Distance** (`Float`): Distance between edge points.
- Data**Minimum** (`Integer`): Minimum number of points.
- Data**Number** (`Integer`): Number of edge points.

Output

- Data**Normalized Parameters** (`FloatList`): Normalized parameters list.

Parameters

- Data**Parameter First** (`Float`): Start parameter.
- Data**Parameter Last** (`Float`): End parameter.

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Discretize/en&oldid=1570655>"
