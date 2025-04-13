---
title: TechDraw 3PtAngleDimension
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| TechDraw 3PtAngleDimension                                                    |
| Menu location                                                                 |
| TechDraw → Dimensions → Insert 3-Point Angle Dimension                        |
| Workbenches                                                                   |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                          |
| Default shortcut                                                              |
| _None_                                                                        |
| Introduced in version                                                         |
| 0.18                                                                          |
| See also                                                                      |
| [TechDraw AngleDimension](/TechDraw_AngleDimension "TechDraw AngleDimension") |
|                                                                               |

## Description

The **TechDraw 3PtAngleDimension** tool adds an angular dimension to a View. The dimension shows the interior angle between three points.

![](/src/assets/images/TechDraw_Dimension_Angle3Pt_example.png)

Measuring the angle between three points

## Usage

1. Select three points. The second point will be the apex of the angle. The geometry may be selected in the [3D view](/3D_view "3D view") or in the drawing.
2. If you have selected geometry in the 3D view: add the correct TechDraw View to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/TechDraw_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/TechDraw_3PtAngleDimension.svg) Insert 3-Point Angle Dimension** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/TechDraw_3PtAngleDimension.svg) [Insert 3-Point Angle Dimension](/TechDraw_3PtAngleDimension "TechDraw 3PtAngleDimension") button.
   - Select the **TechDraw → Dimensions → ![](/src/assets/images/TechDraw_3PtAngleDimension.svg) Insert 3-Point Angle Dimension** option from the menu.
4. A dimension is added to the View.
5. The dimension may be dragged to the desired position.
6. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

### Display 3D measurement

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Display_3D_measurement "TechDraw LengthDimension").

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension").

## Limitations

Dimension objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". See [TechDraw LengthDimension](/TechDraw_LengthDimension "TechDraw LengthDimension").

## Notes

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Notes "TechDraw LengthDimension").

## Properties

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Properties "TechDraw LengthDimension").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_3PtAngleDimension/en&oldid=1486724>"
