---
title: PartDesign SubtractivePrism
---

|                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PartDesign SubtractivePrism                                                                                                                                                                         |
| Menu location                                                                                                                                                                                       |
| Part Design → Create a subtractive primitive → Subtractive Prism                                                                                                                                    |
| Workbenches                                                                                                                                                                                         |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                          |
| Default shortcut                                                                                                                                                                                    |
| _None_                                                                                                                                                                                              |
| Introduced in version                                                                                                                                                                               |
| 0.17                                                                                                                                                                                                |
| See also                                                                                                                                                                                            |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditivePrism](/PartDesign_AdditivePrism "PartDesign AdditivePrism") |
|                                                                                                                                                                                                     |

## Description

Inserts a subtractive prism in the active Body. Its shape is subtracted from the existing solid.

![](/src/assets/images/PartDesign_SubtractivePrism_example.svg)

_On the left: active body (A) shown in grey and subtractive prism (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/src/assets/images/PartDesign_SubtractivePrism.svg) **Subtractive Prism** button. **Note**: the Subtractive Prism is part of an icon menu labelled _Create an subtractive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get the Prism, click on the down arrow besides the visible icon and select Subtractive Prism in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Prism feature appears under the active Body.

## Options

It is possible to create skewed prisms by specifying angles in respect to the normal vector of the chosen attachment.

The Prism can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: label given to the Prism object. Change to suit your needs.
- Data**Polygon**: number of sides in the polygon cross-section of the prism.
- Data**Circumradius**: [circumscribed radius](https://en.wikipedia.org/wiki/Circumscribed_circle) of the polygon cross-section of the prism.
- Data**Height**: height of the prism.
- Data**First Angle**: angle in first direction.
- Data**Second Angle**: angle in second direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/en&oldid=1268439>"
