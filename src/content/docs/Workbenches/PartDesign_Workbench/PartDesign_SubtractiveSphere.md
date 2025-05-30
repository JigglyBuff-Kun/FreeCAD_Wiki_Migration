---
title: PartDesign SubtractiveSphere
---

|                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PartDesign SubtractiveSphere                                                                                                                                                                           |
| Menu location                                                                                                                                                                                          |
| Part Design → Create a subtractive primitive → Subtractive Sphere                                                                                                                                      |
| Workbenches                                                                                                                                                                                            |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                             |
| Default shortcut                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                 |
| Introduced in version                                                                                                                                                                                  |
| 0.17                                                                                                                                                                                                   |
| See also                                                                                                                                                                                               |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveSphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere") |
|                                                                                                                                                                                                        |

## Description

Inserts a subtractive sphere in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveSphere_example.svg)

_On the left: active body (A) shown in grey and subtractive sphere (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/images/PartDesign_SubtractiveSphere.svg) **Subtractive Sphere** button. **Note**: the Subtractive Sphere is part of an icon menu labelled _Create an additive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get the Sphere, click on the down arrow besides the visible icon and select Subtractive Sphere in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Sphere feature appears under the active Body.

## Options

The Sphere can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: Label given to the Sphere object. Change to suit your needs.
- Data**Radius**: Radius of the sphere.
- Data**Angle1**: (labelled _V parameter_ in the Primitive parameters) lower truncation of the sphere, parallel to the circular cross section (-90 degrees in a full sphere)
- Data**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the sphere, parallel to the circular cross section (90 degrees in a full sphere).
- Data**Angle3**: (labelled _U parameter_ in the Primitive parameters) angle of rotation of the cross section (360 degrees in a full sphere).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveSphere/en&oldid=1180849>"
