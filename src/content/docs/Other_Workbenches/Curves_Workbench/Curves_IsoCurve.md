---
title: Curves IsoCurve
---

|                                                           |
| --------------------------------------------------------- |
| Curves IsoCurve                                           |
| Menu location                                             |
| Surfaces → IsoCurve                                       |
| Workbenches                                               |
| [Curves](/Curves_Workbench "Curves Workbench")            |
| Default shortcut                                          |
| _None_                                                    |
| Introduced in version                                     |
| -                                                         |
| See also                                                  |
| [Curves JoinCurves](/Curves_JoinCurve "Curves JoinCurve") |
|                                                           |

## Description

The ![](/images/Curves_IsoCurve.svg) [Curves IsoCurve](/Curves_IsoCurve "Curves IsoCurve") tool applies a UV oriented lattice onto selected surfaces.

![](/images/Curves_IsoCurve_Demo.jpg)

Above: shows the surface before (left) and after (right) applying the tool

## Usage

1. Select one or more faces in the [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   - Press the ![](/images/Curves_IsoCurve.svg) [IsoCurve](/Curves_IsoCurve "Curves IsoCurve") button.
   - Select the **Surfaces → ![](/images/Curves_IsoCurve.svg) IsoCurve** option from the menu.
3. A **IsoCurve** object is created for each selected face, applying a UV oriented lattice on each face.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to change the numbers of iso curves along U and V directions and adjust the related properties (see Properties below).

## Notes

- Curves can be extracted as a subelement (e.g: with [Curves JoinCurves](/Curves_JoinCurve "Curves JoinCurve")) for others uses or just to help to visualize the shape.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **IsoCurve** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Iso Curve

- Data**Face** (`LinkSub`): Input face.
- Data**Mode** (`Enumeration`): Number of IsoCurves.
  - `Multi` (default): ...
  - `Single`: ...
- Data**Number U** (`Integer`): Number of IsoCurves in U direction.
- Data**Number V** (`Integer`): Number of IsoCurves in V direction.
- Data**Orientation** (`Enumeration`): Curve Orientation.
  - `U` (default): ...
  - `V`: ...
- Data**Parameter** (`Float`): IsoCurve parameter.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_IsoCurve/en&oldid=1566841>"
