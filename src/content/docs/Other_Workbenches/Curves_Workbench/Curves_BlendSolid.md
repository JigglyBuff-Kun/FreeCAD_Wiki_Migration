---
title: Curves BlendSolid
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves BlendSolid                              |
| Menu location                                  |
| Surfaces → BlendSolid                          |
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

The ![](/images/Curves_BlendSolid.svg) **Curves BlendSolid** tool creates a solid between two edges with some continuity with their support shapes.

## Usage

1. Select two faces of different solids.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Curves_BlendSolid.svg) [BlendSolid](/Curves_BlendSolid "Curves BlendSolid") button.
   - Select the **Surfaces → ![](/images/Curves_BlendSolid.svg) BlendSolid** option from the menu.
3. A **Blend_Solid** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose a different auto scale method and adjust the related properties (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Blend_Solid** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Sources** (`LinkSubList`): Faces to join.

Continuity

- Data**Continuity1** (`Integer`): Continuity order G... with shape 1.
- Data**Continuity2** (`Integer`): Continuity order G... with shape 2.

Scale

- Data**Auto Scale** (`Enumeration`): Compute scale values to get regular poles, or minimal curvature.
  - `RegularPoles` (default): ...
  - `MinimizeCurvature`: ...
  - `Manual`: ...
- Data**Scale1** (`FloatList`): Scale values along face 1.
- Data**Scale2** (`FloatList`): Scale values along face 2.
- Data**Scale Samples** (`Integer`): Number of samples for auto scaling.

Settings

- Data**Fuse** (`Bool`): Fuse the 3 solids together.
- Data**Samples** (`Integer`): Number of samples to generate each surface.

Status

- Data**Shape Type** (`String`): Status of the created shape.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSolid/en&oldid=1567421>"
