---
title: Curves JoinCurve
---

|                                                |
| ---------------------------------------------- |
| Curves JoinCurve                               |
| Menu location                                  |
| Curves → Join Curves                           |
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

The ![](/src/assets/images/Curves_JoinCurve.svg) [Curves JoinCurve](/Curves_JoinCurve "Curves JoinCurve") tool joins selected edges into a BSpline curve.

![](/src/assets/images/JoinCurve_pic1.jpg)

## Usage

1. Select one or more edges in [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_JoinCurve.svg) [joinCurves](/Curves_JoinCurve "Curves JoinCurve") button.
   - Select the **Curves → ![](/src/assets/images/Curves_JoinCurve.svg) joinCurves** option from the menu..
3. A **JoinCurve** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to select a different parametrization method and adjust the related properties (see Properties below).

## Notes

- Edges of a shape, or edges selected from a sketch are accepted and must be added in a consecutive order.
- The result is a single continuous B-spline.

## Properties

### Data

InputSources

- Data**Base** (`Link`): Join all the edges of this base object.
- Data**Edges** (`LinkSubList`): List of edges to join.

Join

- Data**CornerBreak** (`Bool`): Break on sharp corners.
- Data**ForceClosed** (`Bool`): Force closed curve.
- Data**ForceContact** (`Bool`): Force connection of edges.
- Data**Reverse** (`Bool`): Reverse the output curve.
- Data**StartOffset** (`Integer`): Set the start point of closed curve.
- Data**Tolerance** (`Float`): Tolerance.

ShapeApproximation

- Data**Active** (`Bool`): Use approximation.
- Data (Hidden)**ApproxTolerance** (`Float`): Approximation tolerance.
- Data (Hidden)**Continuity** (`Enumeration`): Desired continuity of the curve. (`C0`, `C1`, `G1`, `C2`, `G2`, `C3` (default), `CN`)
- Data (Hidden)**DegreeMax** (`Integer`): Maximum degree of the curve.
- Data (Hidden)**DegreeMin** (`Integer`): Minimum degree of the curve.
- Data**ExtensionProxy** (`PythonObject`): Proxy object of the approximation extension.
- Data (Hidden)**Parametrization** (`Enumeration`): Parametrization type.
  - `ChordLength`: ...
  - `Centripetal`: ...
  - `Uniform`: ...
- Data (Hidden)**Samples** (`Integer`): Number of samples.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_JoinCurve/en&oldid=1568290>"
