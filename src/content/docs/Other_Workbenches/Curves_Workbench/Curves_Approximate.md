---
title: Curves Approximate
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves Approximate                             |
| Menu location                                  |
| Curves → Approximate                           |
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

The ![](/src/assets/images/Curves_Approximate.svg) Curves Approximate tool approximates points to NURBS curve or surface.

## Usage

1. Select one or more objects that contain at least two vertices each.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_Approximate.svg) Approximate button.
   - Select the **Curves → ![](/src/assets/images/Curves_Approximate.svg) Approximate** option from the menu.
3. An **Approximation_Curve** object is created for each selected object.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose a different approximation method and parametrization type and also adjust the related properties (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

An **Approximation_Curve** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Approximate

- Data**Point Object** (`Link`): Object containing the points to approximate.

General

- Data**Approx Tolerance** (`Float`): Approximation tolerance.
- Data**Clamp Ends Tolerance** (`Bool`): Clamps endpoints.
- Data**Closed** (`Bool`): Forces a closed curve.
- Data**Continuity** (`Enumeration`): Desired continuity on the curve.
- Data**Degree Max** (`Integer`): Maximum degree of the curve.
- Data **Degree Min** (`Integer`): Minimum degree of the curve.
- Data**Method** (`Enumeration`): Approximation method.
  - `Parametrization` (default): ...
  - `Smoothing Algorithm`: ...

Parameters

- Data**Curvature Weight** (`FloatConstraint`): Weight of curve curvature for smoothing algorithm.
- Data**Length Weight** (`FloatConstraint`): Weight of curve length for smoothing algorithm.
- Data **Parametrization** (`Enumeration`): Parametrization type.
  - `ChordLength` (default): ...
  - `Centripetal`: ...
  - `Uniform`: ...
  - `Curvilinear`: ...
- Data**Torsion Weight** (`FloatConstraint`): Weight of curve torsion for smoothing algorithm.

Range

- Data**First Index** (`Integer`): Index of first point.
- Data**Last Index** (`Integer`): Index of last point (-1 to ignore).
- Data**Start Offset** (`Integer`): For closed curves, allows to choose the location of the join point.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Approximate&oldid=1570961>"
