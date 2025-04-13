---
title: Sandbox Macro TechDrawTools
---

|                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro TechDrawTools                                                                                                                                                                                                                                                                                                     |
| Description                                                                                                                                                                                                                                                                                                             |
| TechDrawTools is a container, including 38 helper tools to improve the appearance of drawings. Macro version: 0.4.5 Last modified: 2021-09-24 FreeCAD version: 0.18 and above Download: [Github repository](https://github.com/FreeCAD/FreeCAD-macros/blob/master/TechDraw/TechDrawTools.FCMacro) Author: edi and domad |
| Author                                                                                                                                                                                                                                                                                                                  |
| [edi and domad](/index.php?title=User:Edi_and_domad&action=edit&redlink=1 "User:Edi and domad (page does not exist)")                                                                                                                                                                                                   |
| Download                                                                                                                                                                                                                                                                                                                |
| [Github repository](https://github.com/FreeCAD/FreeCAD-macros/blob/master/TechDraw/TechDrawTools.FCMacro)                                                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                        |
| Macro Version                                                                                                                                                                                                                                                                                                           |
| 0.4.5                                                                                                                                                                                                                                                                                                                   |
| Date last modified                                                                                                                                                                                                                                                                                                      |
| 2021-09-24                                                                                                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                      |
| 0.18 and above                                                                                                                                                                                                                                                                                                          |
| Default shortcut                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                         |

## Description

**TechDrawTools** macro is a **multilingual** container, including 38 helper tools to improve the appearance of drawings created in the TechDraw workbench.

All written user informations appear in English/German/Italian/French/Russian/Spanish depending on the selected FreeCAD language.

**There are tools to:**

- create circle and bolt cicle center lines
- draw cosmetic threads in ground and side view
- create vertexes at intersection of elements
- change attributes of center lines and cosmetic lines
- change the number of decimal places of the dimension value
- append special characters ahead of dimension values
- create chain- and coordinate dimensions
- position and cascade dimensions
- create dimension/development of arches
- create cosmetic circumferences
- create a line cosmetic perpendicular
- create a line cosmetic parallel
- create a hole table
- extend and shorten cosmetic lines
- create a cosmetic line arch
- position section view orthogonal to ancestor view
- create an annotation showing the area

**Workflow:**

1. Start the macro
2. Select the desired line attributes and cascade spacing
3. Change the _Tab_ if needed
4. Select any of the 38 tools

The macro stays open until it is closed.

## Usage

The 38 tools are split into three tabs:

- [Attributes and Modifications](/Macro_TechDrawTools#Attributes_and_Modifications "Macro TechDrawTools")
- [Centerlines and Threading](/Macro_TechDrawTools#Centerlines_and_Threading "Macro TechDrawTools")
- [Dimensions](/Macro_TechDrawTools#Dimensions "Macro TechDrawTools")

#### Select Line Attributes

Before starting the work, select the desired line attributes. This is done by clicking the appropriate radio buttons in the boxes displayed in the _Attributes and Modifications_ tab.

![](/src/assets/images/TechDraw_TechDrawToolsExample01.png)

- When creating a new line object, the preset line attributes will be used.
- To change attributes of existing lines use the ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Change the line attributes](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)") button.

#### Attributes and Modifications

Tools setting/changing attributes and positions of objects.

- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Extend a line](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Extend a line at both ends.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Shorten a line](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Shorten a line at both ends.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Lock/Unlock a view](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Lock/unlock a view.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Orthogonal projection group: section view positioning](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Position a section view at same x or y as its base view.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Position a horizontal chain dimension](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Arranges the selected horizontal dimensions at the same line.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Position a vertical chain dimension](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Arranges the selected vertical dimensions at the same line.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Position an oblique dimension chain](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Position an oblique dimension chain.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Cascade horizontal dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Spaces (vertically) at the set value the selected horizontal dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Cascade vertical dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Spaces (horizontally) at the set value the selected vertical dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Cascade oblique dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Cascade oblique dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Change the line attributes](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Change the attributes of the selected lines.

#### Centerlines and Threading

Tools creating centerlines and threads.

- ![](/src/assets/images/TechDraw_ExtensionCircleCenterLines.svg) [Draw circle centerlines](/TechDraw_ExtensionCircleCenterLines "TechDraw ExtensionCircleCenterLines"): Draw a centerline cross at circles.
- ![](/src/assets/images/TechDraw_ExtensionHoleCircle.svg) [Draw bolt circle centerlines](/TechDraw_ExtensionHoleCircle "TechDraw ExtensionHoleCircle"): Draw the centerlines of a bolt circle.
- ![](/src/assets/images/TechDraw_ExtensionVertexAtIntersection.svg) [Create vertex(es) at intersection](/TechDraw_ExtensionVertexAtIntersection "TechDraw ExtensionVertexAtIntersection"): Create the vertexes at the intersection of lines.
- ![](/src/assets/images/TechDraw_ExtensionDrawCosmArc.svg) [Draw a cosmetic arc (center and two vertexes)](/TechDraw_ExtensionDrawCosmArc "TechDraw ExtensionDrawCosmArc"): Draw an arc rotating math. positive.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Draw a cosmetic circunference (center and 2 vertexes)](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Draw a cosmetic arc.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create a line perpendicular to another line](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create a perpendicular to another line through a vertex.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create a line parallel to another line](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create a line parallel to another line through a vertex.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Draw one center line](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Draw a center line between two lines.
- ![](/src/assets/images/TechDraw_ExtensionThreadHoleBottom.svg) [Cosmetic hole thread ground view](/TechDraw_ExtensionThreadHoleBottom "TechDraw ExtensionThreadHoleBottom"): Draw cosmetic holes thread ground view.
- ![](/src/assets/images/TechDraw_ExtensionThreadBoltBottom.svg) [Screw/pin/shaft thread in plan](/TechDraw_ExtensionThreadBoltBottom "TechDraw ExtensionThreadBoltBottom"): Draw a technical symbol of the thread in plant.
- ![](/src/assets/images/TechDraw_ExtensionThreadHoleSide.svg) [Cosmetic thread side view](/TechDraw_ExtensionThreadHoleSide "TechDraw ExtensionThreadHoleSide"): Draw a cosmetic thread.
- ![](/src/assets/images/TechDraw_ExtensionThreadBoltSide.svg) [Thread screw/pin/shaft side view/section](/TechDraw_ExtensionThreadBoltSide "TechDraw ExtensionThreadBoltSide"): Draw a technical symbol of the thread in side or section view.

#### Dimensions

Tools creating dimensions.

- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Insert a '⌀' sign](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Insert a '⌀'sign in a measure.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Insert a '〼' sign](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Insert a'〼'sign in a measure.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create horizontal chain dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create horizontal chain dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create vertical chain dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create vertical chain dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create an oblique chain dimension](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create an oblique chain dimension.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create horizontal coordinate dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create horizontal coordinate dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create vertical coordinate dimensions](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create vertical coordinate dimensions.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create an oblique coordinate dimension](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create an oblique coordinate dimension.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create a horizontal chamfer dimension](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create a horizontal chamfer dimension.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create a vertical chamfer dimension](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create a vertical chamfer dimension.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create development/length arc](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Enter the development length of an arc with the symbol '∩'.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create a hole table](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Create a hole table.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Increase decimal places (max. 9)](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Increase decimal places (max. 9).
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Decrease decimal places](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Decrease decimal places.
- ![](/src/assets/images/TechDraw_TechDrawTools.svg) [Create an annotation showing the area](/index.php?title=Void&action=edit&redlink=1 "Void (page does not exist)"): Creates an anotation of the area value, the unit of which is determined by the preferences.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:Macro_TechDrawTools&oldid=1433996>"
