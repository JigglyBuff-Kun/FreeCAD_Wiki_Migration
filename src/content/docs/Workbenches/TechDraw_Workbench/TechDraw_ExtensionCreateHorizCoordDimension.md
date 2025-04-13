---
title: TechDraw ExtensionCreateHorizCoordDimension
---

|                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw ExtensionCreateHorizCoordDimension                                                                                                                                                                                                                                             |
| Menu location                                                                                                                                                                                                                                                                           |
| TechDraw → Extensions: Dimensions → Create Horizontal Coordinate Dimensions                                                                                                                                                                                                             |
| Workbenches                                                                                                                                                                                                                                                                             |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                                                                                                                                                                                    |
| Default shortcut                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                  |
| Introduced in version                                                                                                                                                                                                                                                                   |
| 0.20                                                                                                                                                                                                                                                                                    |
| See also                                                                                                                                                                                                                                                                                |
| [TechDraw ExtensionCreateVertCoordDimension](/TechDraw_ExtensionCreateVertCoordDimension "TechDraw ExtensionCreateVertCoordDimension"), [TechDraw ExtensionCreateObliqueCoordDimension](/TechDraw_ExtensionCreateObliqueCoordDimension "TechDraw ExtensionCreateObliqueCoordDimension") |
|                                                                                                                                                                                                                                                                                         |

## Description

The **TechDraw ExtensionCreateHorizCoordDimension** tool creates horizontal coordinate dimensions: multiple evenly spaced dimensions starting from the same baseline.

![](/src/assets/images/TechDraw_ExtensionCreateHorizCoordDimensionExample.png)

On the right the created dimensions

## Usage

1. Optionally specify the cascade spacing with the ![](/src/assets/images/TechDraw_ExtensionSelectLineAttributes.svg) [TechDraw ExtensionSelectLineAttributes](/TechDraw_ExtensionSelectLineAttributes "TechDraw ExtensionSelectLineAttributes") tool.
2. Select three or more vertexes.
3. The selection order of the first two vertexes determines the position of the baseline. If the vertex that is selected first is to the left of the second, the baseline is created at the leftmost vertex, else it is created at the rightmost vertex.
4. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/TechDraw_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) Create Horizontal Coordinate Dimensions** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Create Horizontal Coordinate Dimensions](/TechDraw_ExtensionCreateHorizCoordDimension "TechDraw ExtensionCreateHorizCoordDimension") button.
   - Select the **TechDraw → Extensions: Dimensions → ![](/src/assets/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) Create Horizontal Coordinate Dimensions** option from the menu.
5. Coordinate dimensions with centered dimension texts are created.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateHorizCoordDimension/en&oldid=1486777>"
