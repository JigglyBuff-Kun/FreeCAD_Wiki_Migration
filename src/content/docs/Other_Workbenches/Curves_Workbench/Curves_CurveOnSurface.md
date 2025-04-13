---
title: Curves CurveOnSurface
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves CurveOnSurface                          |
| Menu location                                  |
| Curves → CurveOnSurface                        |
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

The ![](/src/assets/images/Curves_CurveOnSurface.svg) **Curves CurveOnSurface** tool projects a curve on a face and optionally creates a normal or binormal face.

## Usage

1. Select a curve and a support face.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_CurveOnSurface.svg) [CurveOnSurface](/Curves_CurveOnSurface "Curves CurveOnSurface") button.
   - Select the **Curves → ![](/src/assets/images/Curves_CurveOnSurface.svg) CurveOnSurface** option from the menu.
3. A **CurveOnSurface** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to add a normal or binormal face and adjust the related properties (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **CurveOnSurface** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Curve On Surface

- Data**Closed** (`Bool`): Close the curve.
- Data**Face** (`LinkSub`): Support face.
- Data**Face Width** (`Distance`): Width of the output face.
- Data**Input Edge** (`LinkSub`): Input edge.
- Data**Output** (`Enumeration`): Output type.
  - `Curve only` (default): Only a curve projected on the selected face is created
  - `Normal face`: A curve, and a face along the curve and also normal to the selected face is created.
  - `Binormal face`: A curve and a face along the curve and also tangent to the selected face is created.
- Data**Reverse** (`Bool`): Reverses the parametric orientation of the curve.
- Data**Samples** (`Integer`): Number of samples.
- Data**Symmetric** (`Bool`): Face symmetric across curve.
- Data**Tolerance** (`Float`): Tolerance.

Orientation

- Data**Reverse Binormal** (`Bool`): Reverse binormal.
- Data**Reverse Normal** (`Bool`): Reverse normal.
- Data**Reverse Tangent** (`Bool`): Reverse tangent.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CurveOnSurface/en&oldid=1566823>"
