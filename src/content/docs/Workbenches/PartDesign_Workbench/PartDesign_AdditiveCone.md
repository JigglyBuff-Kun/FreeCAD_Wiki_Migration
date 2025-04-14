---
title: PartDesign AdditiveCone
---

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PartDesign AdditiveCone                                                                                                                                                                          |
| Menu location                                                                                                                                                                                    |
| Part Design → Create an additive primitive → Additive Cone                                                                                                                                       |
| Workbenches                                                                                                                                                                                      |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                       |
| Default shortcut                                                                                                                                                                                 |
| _None_                                                                                                                                                                                           |
| Introduced in version                                                                                                                                                                            |
| 0.17                                                                                                                                                                                             |
| See also                                                                                                                                                                                         |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveCone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone") |
|                                                                                                                                                                                                  |

## Description

Inserts a primitive cone in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveCone_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveCone.svg) **Additive Cone** button. **Note**: the Additive Cone is part of an icon menu labelled _Create an additive primitive_. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get to the Cone button, click on the down arrow besides the visible icon and select Additive Cone in the menu.
2. Set the Primitive parameters (for a complete cone, set one of the radii to zero) and the [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Cone feature appears under the active Body.

## Options

The Cone can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: label given to the Cone object. Change to suit your needs.
- Data**Radius1**: the radius value at the cone's base.
- Data**Radius2**: the radius value at the cone's top. A non-zero value creates a truncated cone.
- Data**Height**: the height of the cone along its axis.
- Data**Angle**: angle of rotation of the cross section (360 degrees in a full cone).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCone/en&oldid=1126947>"
