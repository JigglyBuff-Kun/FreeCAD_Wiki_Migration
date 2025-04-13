---
title: PartDesign SubtractiveCone
---

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PartDesign SubtractiveCone                                                                                                                                                                       |
| Menu location                                                                                                                                                                                    |
| Part Design → Create a subtractive primitive → Subtractive Cone                                                                                                                                  |
| Workbenches                                                                                                                                                                                      |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                       |
| Default shortcut                                                                                                                                                                                 |
| _None_                                                                                                                                                                                           |
| Introduced in version                                                                                                                                                                            |
| 0.17                                                                                                                                                                                             |
| See also                                                                                                                                                                                         |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveCone](/PartDesign_AdditiveCone "PartDesign AdditiveCone") |
|                                                                                                                                                                                                  |

## Description

Inserts a subtractive cone in the active Body. Its shape is subtracted from the existing solid.

![](/src/assets/images/PartDesign_SubtractiveCone_example.png)

_On the left: active body (A) shown in grey and subtractive cone (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/src/assets/images/PartDesign_SubtractiveCone.svg) **Subtractive Cone** button. **Note**: the Subtractive Cone is part of an icon menu labelled _Create a subtractive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get to the Cone button, click on the down arrow besides the visible icon and select Subtractive Cone in the menu.
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCone/en&oldid=1127206>"
