---
title: Cone aditivo
---
|  |
| --- |
| PartDesign AdditiveCone |
| Menu location |
| Part Design → Create an additive primitive → Additive Cone |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveCone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone") |
|  |

## Description

Inserts a primitive cone in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveCone_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveCone.svg) **Additive Cone** button. **Note**: the Additive Cone is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get to the Cone button, click on the down arrow besides the visible icon and select Additive Cone in the menu.
2. Set the Primitive parameters (for a complete cone, set one of the radii to zero) and the [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Cone feature appears under the active Body.

## Options

The Cone can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Dados**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Dados**Label**: label given to the Cone object. Change to suit your needs.
* Dados**Radius1**: the radius value at the cone's base.
* Dados**Radius2**: the radius value at the cone's top. A non-zero value creates a truncated cone.
* Dados**Height**: the height of the cone along its axis.
* Dados**Angle**: angle of rotation of the cross section (360 degrees in a full cone).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCone/pt-br&oldid=1126950>"