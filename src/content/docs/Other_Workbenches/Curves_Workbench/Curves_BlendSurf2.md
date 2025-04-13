---
title: Curves BlendSurf2
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves BlendSurf2                              |
| Menu location                                  |
| Surfaces → BlendSurface                        |
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

The ![](/src/assets/images/Curves_BlendSurf2.svg) **Curves BlendSurf2** tool creates a surface between two edges with some continuity with their support faces.

## Usage

1. Select four sub shapes:
   - The **first edge** and the related **first face**
   - The **second edge** and the related **second face**
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_BlendSurf2.svg) [BlendSurface](/Curves_BlendSurf2 "Curves BlendSurf2") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_BlendSurf2.svg) BlendSurface** option from the menu.
3. A **Blend_Surface** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose a different auto scale method and adjust the related properties (see Properties below).

## Notes

It seems like this tool currently lacks options to reverse the directions of the blend surface's start and end tangents.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Blend_Surface** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Samples** (`Integer`): Number of samples to generate surface.
- Data**Sources** (`LinkSubList`): Edges and support faces.

Continuity

- Data**Continuity1** (`Integer`): Continuity level with face of edge 1.
- Data**Continuity2** (`Integer`): Continuity level with face of edge 2.

Scale

- Data**Auto Scale** (`Enumeration`): Compute scale values to get regular poles, or minimal curvature.
  - `RegularPoles` (default): ...
  - `MinimizeCurvature`: ...
  - `Manual`: ...
- Data**Scale1** (`FloatList`): Scale values along edge 1.
- Data**Scale2** (`FloatList`): Scale values along edge 2.
- Data**Scale Samples** (`Integer`): Number of samples for auto scaling.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSurf2/en&oldid=1567418>"
