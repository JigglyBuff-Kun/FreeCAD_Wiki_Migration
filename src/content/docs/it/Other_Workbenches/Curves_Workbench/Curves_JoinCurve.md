---
title: Curves JoinCurve/it
---
|  |
| --- |
| Curves JoinCurve |
| Menu location |
| Curves → Join Curves |
| Workbenches |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descrizione

The ![](/images/Curves_JoinCurve.svg) [Curves JoinCurve](/Curves_JoinCurve "Curves JoinCurve") tool joins selected edges into a BSpline curve.

![](/images/JoinCurve_pic1.jpg)

## Utilizzo

1. Select one or more edges in [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_JoinCurve.svg) [joinCurves](/Curves_JoinCurve "Curves JoinCurve") button.
   * Select the **Curves → ![](/images/Curves_JoinCurve.svg) joinCurves** option from the menu..
3. A **JoinCurve** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to select a different parametrization method and adjust the related properties (see Properties below).

## Notes

* Edges of a shape, or edges selected from a sketch are accepted and must be added in a consecutive order.
* The result is a single continuous B-spline.

## Properties

### Data

InputSources

* Dati**Base** (`Link`): Join all the edges of this base object.
* Dati**Edges** (`LinkSubList`): List of edges to join.

Join

* Dati**CornerBreak** (`Bool`): Break on sharp corners.
* Dati**ForceClosed** (`Bool`): Force closed curve.
* Dati**ForceContact** (`Bool`): Force connection of edges.
* Dati**Reverse** (`Bool`): Reverse the output curve.
* Dati**StartOffset** (`Integer`): Set the start point of closed curve.
* Dati**Tolerance** (`Float`): Tolerance.

ShapeApproximation

* Dati**Active** (`Bool`): Use approximation.
* Dati (Hidden)**ApproxTolerance** (`Float`): Approximation tolerance.
* Dati (Hidden)**Continuity** (`Enumeration`): Desired continuity of the curve. (`C0`, `C1`, `G1`, `C2`, `G2`, `C3` (default), `CN`)
* Dati (Hidden)**DegreeMax** (`Integer`): Maximum degree of the curve.
* Dati (Hidden)**DegreeMin** (`Integer`): Minimum degree of the curve.
* Dati**ExtensionProxy** (`PythonObject`): Proxy object of the approximation extension.
* Dati (Hidden)**Parametrization** (`Enumeration`): Parametrization type.
  + `ChordLength`: ...
  + `Centripetal`: ...
  + `Uniform`: ...
* Dati (Hidden)**Samples** (`Integer`): Number of samples.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_JoinCurve/it&oldid=1568289>"