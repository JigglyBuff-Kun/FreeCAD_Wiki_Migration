---
title: PartDesign SubtractiveBox
---

|                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PartDesign SubtractiveBox                                                                                                                                                                     |
| Menu location                                                                                                                                                                                 |
| Part Design → Create a subtractive primitive → Subtractive box                                                                                                                                |
| Workbenches                                                                                                                                                                                   |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                    |
| Default shortcut                                                                                                                                                                              |
| _None_                                                                                                                                                                                        |
| Introduced in version                                                                                                                                                                         |
| 0.17                                                                                                                                                                                          |
| See also                                                                                                                                                                                      |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveBox](/PartDesign_AdditiveBox "PartDesign AdditiveBox") |
|                                                                                                                                                                                               |

## Description

Inserts a subtractive box in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveBox_example.png)

_On the left: active body (A) shown in grey and subtractive box (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/images/PartDesign_SubtractiveBox.svg) **Subtractive Box** button. **Note**: the Subtractive Box is part of an icon menu labelled _Create a subtractive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. If a different primitive is displayed, click on the down arrow besides the icon and select Subtractive Box in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Box feature appears under the active Body.

## Options

The Box can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: Label given to the Box object. Change to suit your needs.
- Data**Length**: the Box's dimension in the X-direction.
- Data**Width**: the Box's dimension in the Y-direction.
- Data**Height**: the Box's dimension in the Z-direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveBox/en&oldid=1424628>"
