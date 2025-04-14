---
title: PartDesign SubtractiveEllipsoid
---

|                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PartDesign SubtractiveEllipsoid                                                                                                                                                                                 |
| Menu location                                                                                                                                                                                                   |
| Part Design → Create a subtractive primitive → Subtractive Ellipsoid                                                                                                                                            |
| Workbenches                                                                                                                                                                                                     |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                          |
| Introduced in version                                                                                                                                                                                           |
| 0.17                                                                                                                                                                                                            |
| See also                                                                                                                                                                                                        |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveEllipsoid](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid") |
|                                                                                                                                                                                                                 |

## Description

Inserts a subtractive ellipsoid in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveEllipsoid_example.svg)

_On the left: active body (A) shown in grey and subtractive ellipsoid (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/images/PartDesign_SubtractiveEllipsoid.svg) **Subtractive Ellipsoid** button. **Note**: the Subtractive Ellipsoid is part of an icon menu labelled _Create an subtractive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get to the Ellipsoid button, click on the down arrow besides the visible icon and select Subtractive Ellipsoid in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. An Ellipsoid feature appears under the active Body.

## Options

The Ellipsoid can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: label given to the Ellipsoid object. Change to suit your needs.
- Data**Radius1**: the radius value along the ellipsoid's vertical axis; by default, parallel to the Z-axis.
- Data**Radius2**: the radius value along the ellipsoid's length; by default, parallel to the X-axis.
- Data**Radius3**: the radius value along the ellipsoid's width; by default, parallel to the Y-axis. At the default value of zero, the ellipsoid forms an [oblate spheroid](http://en.wikipedia.org/wiki/Oblate_spheroid).
- Data**Angle1**: (labelled _V parameter_ in the Primitive parameters) lower truncation of the ellipsoid, parallel to the circular cross section (-90 degrees in a full spheroid)
- Data**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the ellipsoid, parallel to the circular cross section (90 degrees in a full spheroid).
- Data**Angle3**: (labelled _U parameter_ in the Primitive parameters) angle of rotation of the elliptical cross section (360 degrees in a full spheroid).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveEllipsoid/en&oldid=1127214>"
