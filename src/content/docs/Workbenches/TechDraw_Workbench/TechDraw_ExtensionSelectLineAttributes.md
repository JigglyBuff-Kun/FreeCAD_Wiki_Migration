---
title: TechDraw ExtensionSelectLineAttributes
---

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| TechDraw ExtensionSelectLineAttributes                                                                                     |
| Menu location                                                                                                              |
| TechDraw → Extensions: Attributes/Modifications → Select Line Attributes, Cascade Spacing and Delta Distance               |
| Workbenches                                                                                                                |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                       |
| Default shortcut                                                                                                           |
| _None_                                                                                                                     |
| Introduced in version                                                                                                      |
| 0.20                                                                                                                       |
| See also                                                                                                                   |
| [TechDraw ExtensionChangeLineAttributes](/TechDraw_ExtensionChangeLineAttributes "TechDraw ExtensionChangeLineAttributes") |
|                                                                                                                            |

## Description

The **TechDraw ExtensionSelectLineAttributes** tool opens a dialog box where you can select the attributes (style, width and color) for new cosmetic lines and centerlines created with the [Extensions tools](/TechDraw_Workbench#Extensions "TechDraw Workbench"), and specify the cascade spacing and delta distance. The line attributes are also used by the [TechDraw ExtensionChangeLineAttributes](/TechDraw_ExtensionChangeLineAttributes "TechDraw ExtensionChangeLineAttributes") tool.

![](/src/assets/images/TechDraw_ExtensionSelectLineAttributes_Taskpanel.png)

The Select line attributes task panel

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_ExtensionSelectLineAttributes.svg) [Select Line Attributes, Cascade Spacing and Delta Distance](/TechDraw_ExtensionSelectLineAttributes "TechDraw ExtensionSelectLineAttributes") button.
   - Select the **TechDraw → Extensions: Attributes/Modifications → ![](/src/assets/images/TechDraw_ExtensionSelectLineAttributes.svg) Select Line Attributes, Cascade Spacing and Delta Distance** option from the menu.
2. The **Select line attributes** task panel opens.
3. Optionally change the **Line style**, the **Line width** and the **Line color**.
4. Optionally change the **Cascade spacing**. The [Cascade Dimensions](/TechDraw_Workbench#Attributes_and_modifications "TechDraw Workbench") tools and the [Create Coordinate Dimensions](/TechDraw_Workbench#Dimensions_2 "TechDraw Workbench") tools use this value.
5. Optionally change the **Delta distance**. The ![](/src/assets/images/TechDraw_ExtensionExtendLine.svg) [TechDraw ExtensionExtendLine](/TechDraw_ExtensionExtendLine "TechDraw ExtensionExtendLine") tool and ![](/src/assets/images/TechDraw_ExtensionShortenLine.svg) [TechDraw ExtensionShortenLine](/TechDraw_ExtensionShortenLine "TechDraw ExtensionShortenLine") tool use this value.
6. Press the OK button.

## Notes

- The specified values will be used in the current FreeCAD session only.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionSelectLineAttributes/en&oldid=1290729>"
