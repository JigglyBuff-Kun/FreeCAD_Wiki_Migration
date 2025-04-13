---
title: Curves ParametricComb/it
---
|  |
| --- |
| Curves ParametricComb |
| Menu location |
| Curves → Comb plot |
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

The ![](/images/Curves_ParametricComb.svg) **Curves ParametricComb** tool can help to visualize the regularity or smoothness of a curve as well as the continuity between two curves.

Note: A comb is only for visualization.

A 3D comb will be created for 3D curves. Sample and scale can be changed.

![](/images/Curves_ParametricComb_demo.jpg)

Above: a curve before (left) and after (right) the application of this tool

## Utilizzo

1. Select one or more shapes (sketch, wire, face, etc.).
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_ParametricComb.svg) [Comb plot](/Curves_ParametricComb "Curves ParametricComb") button.
   * Select the **Curves → ![](/images/Curves_ParametricComb.svg) Comb plot** option from the menu.
3. A **Comb** object is created, showing the curvature of the select shapes (sketches, wires), or their sub elements (borders and iso-curves in case of faces).
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") (see Properties below):
   * Adjust the number of samples and the comb scale for all comb plots.
   * Adjust the number of comb plots and their orientation for surface objects.

## Note

* This tool functions as a visual aid.
* This tool accepts several types of curves, and surface elements, and creates additional iso-curves in U and V direction for the latter.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Comb** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Comb

* Dati**Comb Points** (`VectorList`): Comb Points.
* Dati**Edge** (`LinkSubList`): List of input shapes.
* Dati**Samples** (`IntegerConstraint`): Number of samples per comb plot.
* Dati**Scale** (`Float`): Scale (%). 0 for AutoScale.
* Dati**Shape** (`PartShape`): Shape of comb plot.

Surface

* Dati**Number** (`Integer`): Number of surface samples (comb plots) in U and/or V direction.
* Dati**Orientation** (`Enumeration`): Surface Comb Orientation to distribute the surface samples (comb plots).
  + `U` (default): Displays comb plots along U direction only.
  + `V`: Displays comb plots along V direction only.
  + `UV`: Displays comb plots along both directions.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricComb/it&oldid=1566816>"