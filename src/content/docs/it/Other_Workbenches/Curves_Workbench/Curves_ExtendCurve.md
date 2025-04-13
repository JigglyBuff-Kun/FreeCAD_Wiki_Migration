---
title: Curves ExtendCurve/it
---
|  |
| --- |
| Curves ExtendCurve |
| Menu location |
| Curves → Extend Curve |
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

The ![](/images/Curves_ExtendCurve.svg) **Curves ExtendCurve** tool extends selected edges at both ends by a given distance.

## Utilizzo

1. Select one or more edges in the [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_ExtendCurve.svg) [Extend Curve](/Curves_ExtendCurve "Curves ExtendCurve") button.
   * Select the **Curves → ![](/images/Curves_ExtendCurve.svg) Extend Curve** option from the menu.
3. An **ExtendedCurve** object is created for each selected edge.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to adjust extension lengths and types as well as the output shape (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **ExtendCurve** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Dati**Edge** (`LinkSub`): Input edge to exend.
* Dati**Output** (`Enumeration`): Output shape.
  + `SingleEdge` (default): A single continuous curve.
  + `Wire`: Separate curves.

Beginning

* Dati**Length Start** (`Float`): Start Extension Length.
* Dati**Type Start** (`Enumeration`): Start Extension Type.
  + `Straight` (default): The extension is a straight line.
  + `G2 curve`: The extension is another curve that adopts the local curvature of the input edge at their common vertex (G2 continuity).

End

* Dati**Length End** (`Float`): End Extension Length.
* Dati**Type End** (`Enumeration`): End Extension Type.
  + `Straight` (default): The extension is a straight line.
  + `G2 curve`: The extension is another curve that adopts the local curvature of the input edge at their common vertex (G2 continuity).

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ExtendCurve/it&oldid=1567164>"