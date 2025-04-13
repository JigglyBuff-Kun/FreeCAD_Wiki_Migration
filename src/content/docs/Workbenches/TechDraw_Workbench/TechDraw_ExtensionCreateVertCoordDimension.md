---
title: TechDraw ExtensionCreateVertCoordDimension
---

|                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw ExtensionCreateVertCoordDimension                                                                                                                                                                                                                                                 |
| Menu location                                                                                                                                                                                                                                                                              |
| TechDraw → Extensions: Dimensions → Create Vertical Coordinate Dimensions                                                                                                                                                                                                                  |
| Workbenches                                                                                                                                                                                                                                                                                |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                     |
| Introduced in version                                                                                                                                                                                                                                                                      |
| 0.20                                                                                                                                                                                                                                                                                       |
| See also                                                                                                                                                                                                                                                                                   |
| [TechDraw ExtensionCreateHorizCoordDimension](/TechDraw_ExtensionCreateHorizCoordDimension "TechDraw ExtensionCreateHorizCoordDimension"), [TechDraw ExtensionCreateObliqueCoordDimension](/TechDraw_ExtensionCreateObliqueCoordDimension "TechDraw ExtensionCreateObliqueCoordDimension") |
|                                                                                                                                                                                                                                                                                            |

## Description

The **TechDraw ExtensionCreateVertCoordDimension** tool creates vertical coordinate dimensions: multiple evenly spaced dimensions starting from the same baseline.

![](/src/assets/images/TechDraw_ExtensionCreateVertCoordDimensionExample.png)

On the right the created dimensions

## Usage

1. Optionally specify the cascade spacing with the ![](/src/assets/images/TechDraw_ExtensionSelectLineAttributes.svg) [TechDraw ExtensionSelectLineAttributes](/TechDraw_ExtensionSelectLineAttributes "TechDraw ExtensionSelectLineAttributes") tool.
2. Select three or more vertexes.
3. The selection order of the first two vertexes determines the position of the baseline. If the vertex that is selected first is below the second, the baseline is created at the lowest vertex, else it is created at the highest vertex.
4. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/TechDraw_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Create Vertical Coordinate Dimensions** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Create Vertical Coordinate Dimensions](/TechDraw_ExtensionCreateVertCoordDimension "TechDraw ExtensionCreateVertCoordDimension") button.
   - Select the **TechDraw → Extensions: Dimensions → ![](/src/assets/images/TechDraw_ExtensionCreateVertCoordDimension.svg) Create Vertical Coordinate Dimensions** option from the menu.
5. Coordinate dimensions with centered dimension texts are created.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateVertCoordDimension/en&oldid=1486780>"
