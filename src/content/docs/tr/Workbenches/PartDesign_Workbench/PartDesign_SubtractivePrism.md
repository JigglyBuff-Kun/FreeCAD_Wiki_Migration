---
title: PartDesign SubtractivePrism/tr
---
|  |
| --- |
| PartDesign SubtractivePrism |
| Menu location |
| Part Design → Create a subtractive primitive → Subtractive Prism |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditivePrism](/PartDesign_AdditivePrism "PartDesign AdditivePrism") |
|  |

## Tanım

Inserts a subtractive prism in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractivePrism_example.svg)

*On the left: active body (A) shown in grey and subtractive prism (B) shown in transparent red; result on the right.*

## Usage

1. Press the ![](/images/PartDesign_SubtractivePrism.svg) **Subtractive Prism** button. **Note**: the Subtractive Prism is part of an icon menu labelled *Create an subtractive primitive*. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get the Prism, click on the down arrow besides the visible icon and select Subtractive Prism in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Prism feature appears under the active Body.

## Options

It is possible to create skewed prisms by specifying angles in respect to the normal vector of the chosen attachment.

The Prism can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Veri**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Veri**Label**: label given to the Prism object. Change to suit your needs.
* Veri**Polygon**: number of sides in the polygon cross-section of the prism.
* Veri**Circumradius**: [circumscribed radius](https://en.wikipedia.org/wiki/Circumscribed_circle) of the polygon cross-section of the prism.
* Veri**Height**: height of the prism.
* Veri**First Angle**: angle in first direction.
* Veri**Second Angle**: angle in second direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/tr&oldid=1268438>"