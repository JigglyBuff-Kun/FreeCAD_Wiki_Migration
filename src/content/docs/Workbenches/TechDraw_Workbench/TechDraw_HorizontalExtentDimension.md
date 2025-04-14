---
title: TechDraw HorizontalExtentDimension
---

|                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw HorizontalExtentDimension                                                                                                                                                         |
| Menu location                                                                                                                                                                              |
| TechDraw → Dimensions → Insert Horizontal Extent Dimension                                                                                                                                 |
| Workbenches                                                                                                                                                                                |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                                                                                       |
| Default shortcut                                                                                                                                                                           |
| _None_                                                                                                                                                                                     |
| Introduced in version                                                                                                                                                                      |
| 0.19                                                                                                                                                                                       |
| See also                                                                                                                                                                                   |
| [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension"), [TechDraw VerticalExtentDimension](/TechDraw_VerticalExtentDimension "TechDraw VerticalExtentDimension") |
|                                                                                                                                                                                            |

## Description

The **TechDraw HorizontalExtentDimension** tool adds a linear dimension to a View. The dimension extends from the left most point on the selected objects to the right most point.

![](/images/TechDraw_Dimension_Horizontal_Extent_example.png)

Horizontal and vertical extent dimensions of a B-spline

## Usage

1. Select a View or a collection of Edges in a View.
2. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/TechDraw_HorizontalExtentDimension.svg) Insert Horizontal Extent Dimension** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/images/TechDraw_HorizontalExtentDimension.svg) [Insert Horizontal Extent Dimension](/TechDraw_HorizontalExtentDimension "TechDraw HorizontalExtentDimension") button.
   - Select the **TechDraw → Dimensions → ![](/images/TechDraw_HorizontalExtentDimension.svg) Insert Horizontal Extent Dimension** option from the menu.
3. A dimension is added to the View.
4. The dimension may be dragged to the desired position.
5. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension").

## Limitations

Dimension objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". See [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension").

## Notes

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Notes "TechDraw LengthDimension").

## Properties

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Properties "TechDraw LengthDimension"). Exceptions noted below.

### Data

Base

- Data**Measure Type** (`Enumeration`): Not yet implemented for extent dimensions.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Horizontal Extent Dimension tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
selection = ['Edge1', 'Edge2']                      # or [] for all

TechDraw.makeExtentDim(view1, selection, 0)         # view1 is a DrawViewPart; 0 for horizontal
App.ActiveDocument.DimExtent.Y = -60                # offset dimension line from dimensioned edges in Y direction
App.ActiveDocument.DimExtent.X = 10                 # offset dimension text along dimension line in X direction
App.ActiveDocument.DimExtent.FormatSpec = '%.0f'    # Dimension format

TechDraw.makeExtentDim(view1, selection, 1)         # view1 is a DrawViewPart; 1 for vertical
App.ActiveDocument.DimExtent001.X = -130            # offset dimension line from dimensioned edges in X direction
App.ActiveDocument.DimExtent001.Y = 10              # offset dimension text along dimension line in Y direction
App.ActiveDocument.DimExtent001.FormatSpec = '%.0f'

# Note the dimension names are 'DimExtent', 'DimExtent001' etc in the order created.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_HorizontalExtentDimension/en&oldid=1486744>"
