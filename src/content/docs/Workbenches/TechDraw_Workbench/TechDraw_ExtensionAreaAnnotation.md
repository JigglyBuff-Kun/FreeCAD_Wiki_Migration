---
title: TechDraw ExtensionAreaAnnotation
---

|                                                                                        |
| -------------------------------------------------------------------------------------- |
| TechDraw ExtensionAreaAnnotation                                                       |
| Menu location                                                                          |
| TechDraw → Extensions: Attributes/Modifications → Calculate the area of selected faces |
| Workbenches                                                                            |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                   |
| Default shortcut                                                                       |
| _None_                                                                                 |
| Introduced in version                                                                  |
| 0.20                                                                                   |
| See also                                                                               |
| [TechDraw AreaDimension](/TechDraw_AreaDimension "TechDraw AreaDimension")             |
|                                                                                        |

## Description

The **TechDraw ExtensionAreaAnnotation** tool calculates the area of selected faces and inserts an area annotation.

![](/src/assets/images/TechDraw_ExtensionAreaAnnotationExample.png)

On the right the inserted area annotation

## Usage

1. Select one or more faces.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_ExtensionAreaAnnotation.svg) [Calculate the area of selected faces](/TechDraw_ExtensionAreaAnnotation "TechDraw ExtensionAreaAnnotation") button.
   - Select the **TechDraw → Extensions: Attributes/Modifications → ![](/src/assets/images/TechDraw_ExtensionAreaAnnotation.svg) Calculate the area of selected faces** option from the menu.
3. The total area of the faces is calculated and an area annotation is inserted.

## Limitation

- 0.21 and below: The tool cannot handle faces with curved edges.
- Holes (islands) in the selected face are ignored. This [forum post](https://forum.freecad.org/viewtopic.php?p=783325#p783325) shows a workaround. You can also use [TechDraw AreaDimension](/TechDraw_AreaDimension "TechDraw AreaDimension") but you must then correctly set the Data**References 3D** property of the created dimension.
- The calculated area is not dynamically linked to the face. If the area of the face changes the text is not updated.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionAreaAnnotation/en&oldid=1491339>"
