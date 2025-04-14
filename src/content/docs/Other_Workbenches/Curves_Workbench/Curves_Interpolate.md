---
title: Curves Interpolate
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves Interpolate                             |
| Menu location                                  |
| Curves → Interpolate                           |
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

The ![](/images/Curves_Interpolate.svg) [Curves Interpolate](/Curves_Interpolate "Curves Interpolate") tool interpolates points with a B-spline curve.

## Usage

1. Select several vertices or one object containing at least 2 vertices.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Curves_Interpolate.svg) [Curves Interpolate](/Curves_Interpolate "Curves Interpolate") button.
   - Select the **Curves → ![](/images/Curves_Interpolate.svg) Interpolate** option from the menu.
3. An **Interpolation_Curve** object is created.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An **Interpolation_Curve** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

General

- Data**CustomTangents** (`Bool`): User specified tangents.
- Data (Hidden)**DetectAligned** (`Bool`): interpolate 3 aligned points with a line.
- Data**Periodic** (`Bool`): Set the curve closed.
- Data (Hidden)**PointList** (`LinkSubList`): Point list to interpolate.
- Data**Polygonal** (`Bool`): interpolate with a degree 1 polygonal curve.
- Data**Source** (`Link`): Source object that provides points to interpolate.
- Data**StartOffset** (`Integer`): Offset the start index of the point list.
- Data**TangentFlags** (`BoolList`): Activation flag of tangents.
- Data**Tangents** (`VectorList`): Tangents at interpolated points.
- Data**Tolerance** (`Float`): Interpolation tolerance.

Parameters

- Data (Hidden)**Parameters** (`FloatList`): Parameters of interpolated points.
- Data **Parametrization** (`Enumeration`): Parametrization type.
  - `ChordLength` (default): ...
  - `Centripetal`: ...
  - `Uniform`: ...
  - `Custom`: ...
- Data**WireOutput** (`Bool`): outputs a wire or a single edge.

Spiral

- Data**FaceSupport** (`LinkSub`): Face support of the spiral.
- Data**UTurns** (`Integer`): Nb of turns between 2 points, in U direction.
- Data**VTurns** (`Integer`): Nb of turns between 2 points, in V direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Interpolate/en&oldid=1570941>"
