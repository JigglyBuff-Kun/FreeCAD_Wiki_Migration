---
title: TechDraw AxoLengthDimension
---

|                                                       |
| ----------------------------------------------------- |
| TechDraw AxoHorizontalDimension                       |
| Menu location                                         |
| TechDraw → Annotations → Axonometric length dimension |
| Workbenches                                           |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")  |
| Default shortcut                                      |
| _None_                                                |
| Introduced in version                                 |
| 0.21                                                  |
| See also                                              |
| _None_                                                |
|                                                       |

## Description

The **TechDraw AxoLengthDimension** tool adds a length dimension to an axonometric view. The dimension may be the length of an edge or the distance between two points.

![](/src/assets/images/TechDraw_AxoLengthDimensionExample.png)

Axonometric length dimensions based on an edge (blue) and two points (red)

## Usage

1. Do one of the following:
   - Select two edges (e1 and e2 in the image). The first edge defines the direction of the dimension line and the measured distance. The second edge defines the direction of the extension lines.
   - Select two edges (e3 and e4 in the image) and two points (v1 and v2 in the image). The first edge defines the direction of the dimension line. The second edge defines the direction of the extension lines. The points determine the measured distance.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_AxoLengthDimension.svg) [Axonometric length dimension](/TechDraw_AxoLengthDimension "TechDraw AxoLengthDimension") button.
   - Select the **TechDraw → Annotations → ![](/src/assets/images/TechDraw_AxoLengthDimension.svg) Axonometric length dimension** option from the menu.
3. An axonometric dimension is added to the View.
4. The dimension may be dragged to the desired position.
5. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

### Display 3D measurement

See [TechDraw LengthDimension](/TechDraw_LengthDimension#Display_3D_measurement "TechDraw LengthDimension").

0.22 and above: When dimensioning edges parallel to the global coordinate system axes, the actual (3D) value is calculated automatically and inserted into the dimension label as a text.

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_AxoLengthDimension/en&oldid=1444922>"
