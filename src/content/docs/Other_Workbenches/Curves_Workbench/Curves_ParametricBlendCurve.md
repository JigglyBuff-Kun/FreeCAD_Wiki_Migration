---
title: Curves ParametricBlendCurve
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves ParametricBlendCurve                    |
| Menu location                                  |
| Curves → Blend curve                           |
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

The ![](/src/assets/images/Curves_ParametricBlendCurve.svg) **Curves ParametricBlendCurve** tool creates a Blend curve between two edges.

## Usage

1. Select two curves.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_ParametricBlendCurve.svg) [Blend curve](/Curves_ParametricBlendCurve "Curves ParametricBlendCurve") button.
   - Select the **Curves → ![](/src/assets/images/Curves_ParametricBlendCurve.svg) Blend curve** option from the menu.
3. A **Blend_Curve** object is created.
4. Optionally adjust values in the [Property editor](/Property_editor "Property editor"):
   - Set the Data**Parameter1** and Data**Parameter2** properties to `0.0 mm` to use the selected cuves' start vertices to place the blend curve's start and end vertices.
   - Set the Data**Reverse1** and Data**Reverse2** properties to `true` to switch the selected curves' start and end vertices.

## Notes

To reverse the orientation of the blend curve's start and end tangents prefix `-` to the value of its Data**Scale1** or Data**Scale2** property.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Blend_Curve** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Blend Curve

- Data**Auto Scale** (`Bool`): Compute scale values to get minimal curvature along curve.
- Data**CurvePts** (`VectorList`): Poles of the Bézier curve.
- Data**Output** (`Enumeration`): Output type.
  - `Single` (default): The result consists of the blend curve only.
  - `Wire`: The result consists of three individual curves, the blend curve and also both input curves.
  - `Joined`: The result consists of one continuous curve made of the blend curve and both input curves.

Edge1

- Data**Continuity1** (`Enumeration`): Continuity level.
  - `C0` (= G0): The curves touch at the join point.
  - `G1` (default): As before plus the curves also share a common tangent direction at the join point.
  - `G2`: As before plus the curves also share a common center of curvature at the join point.
  - `G3`: As before plus the curves also share a common growth rate of the curvature at the join point.
  - `G4`: As before plus the curves also share a common acceleration of the growth rate of the curvature at the join point.
- Data**Edge1** (`LinkSub`): Edge 1.
- Data**Parameter1** (`Distance`): Location on first edge.
- Data**Reverse1** (`Bool`): Reverse Edge.
- Data**Scale1** (`Bool`): Scale of blend curve, negate the value to reverse the tangent orientation.

Edge2

- Data**Continuity2** (`Enumeration`): Continuity level. (`C0`, `G1`, `G2`, `G3`, `G4`, see above)
- Data**Edge2** (`LinkSub`): Edge 2.
- Data**Parameter2** (`Distance`): Location on second edge.
- Data**Reverse2** (`Bool`): Reverse Edge.
- Data**Scale2** (`Bool`): Scale of blend curve, negate the value to reverse the tangent orientation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricBlendCurve/en&oldid=1567403>"
