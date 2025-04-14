---
title: Curves MixedCurve
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves MixedCurve                              |
| Menu location                                  |
| Curves → Mixed curve                           |
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

The ![](/images/Curves_MixedCurve.svg) **Curves MixedCurve** tool creates a 3D intersection curve of two projected curves.

## Usage

1. Select two curves.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Curves_MixedCurve.svg) [Mixed curve](/Curves_MixedCurve "Curves MixedCurve") button.
   - Select the **Curves → ![](/images/Curves_MixedCurve.svg) Mixed curve** option from the menu.
3. A **Mixed_Curve** object is created.
4. In the [Property editor](/Property_editor "Property editor") edit the Data**Direction1** and Data**Direction2** properties to set the projection directions.  
   This is optional if both selected curves were made with the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

## Notes

- Projection directions are automatically detected if possible. In case of [Sketcher](/Sketcher_Workbench "Sketcher Workbench") curves the normal of the sketch plane is used.
- The Data**Direction1** and Data**Direction2** properties override automatically detected directions. It is mandatory to enter values manually if it is not possible to detect a direction automatically.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Mixed_Curve** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Mixed Curve

- Data**Direction1** (`Vector`): Projection direction of the first shape. If vector is null the shape's placement is used.
- Data**Direction2** (`Vector`): Projection direction of the second shape. If vector is null the shape's placement is used.
- Data**Fill Face1** (`Bool`): Builds ruled surfaces between shape1 and resulted Mixed_Curve.
- Data**Fill Face2** (`Bool`): Builds ruled surfaces between shape2 and resulted Mixed_Curve.
- Data**Shape1** (`Link`): First shape.
- Data**Shape2** (`Link`): Second shape.

Shape Approximation

- Data**Active** (`Bool`): Use Approximation.
- Data**Approx Tolerance** (`Float`): Approximation tolerance.
- Data**Continuity** (`Enumeration`): Desired continuity of the curves.
- Data**Degree Max** (`Integer`): Maximum degree of the curve.
- Data**Degree Min** (`Integer`): Minimum degree of the curve.
- Data**Extension Proxy** (`PythonObject`): Proxy object of the approximation extension.
  - `ChordLength`:
  - `Centripetal`:
  - `Uniform`:
- Data**Parametrization** (`Enumeration`): Parametrization type.
- Data**Samples** (`Integer`): Number of samples.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_MixedCurve/en&oldid=1565777>"
