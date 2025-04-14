---
title: PartDesign SubtractiveTorus
---

|                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PartDesign SubtractiveTorus                                                                                                                                                                         |
| Menu location                                                                                                                                                                                       |
| Part Design → Create a subtractive primitive → Subtractive Torus                                                                                                                                    |
| Workbenches                                                                                                                                                                                         |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                          |
| Default shortcut                                                                                                                                                                                    |
| _None_                                                                                                                                                                                              |
| Introduced in version                                                                                                                                                                               |
| 0.17                                                                                                                                                                                                |
| See also                                                                                                                                                                                            |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveTorus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus") |
|                                                                                                                                                                                                     |

## Description

Inserts a subtractive torus in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveTorus_example.svg)

_On the left: active body (A) shown in grey and subtractive torus (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/images/PartDesign_SubtractiveTorus.svg) **Subtractive Torus** button. **Note**: the Subtractive Torus is part of an icon menu labelled _Create an additive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get the Torus, click on the down arrow besides the visible icon and select Subtractive Torus in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Torus feature appears under the active Body.

## Options

The Torus can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: Label given to the Torus object. Change to suit your needs.
- Data**Radius1**: Radius of the imaginary orbit around which the circular cross-section revolves. (The distance between the center of the torus and the center of the revolving cross section)
- Data**Radius2**: Radius of the circular cross-section defining the form of the torus.
- Data**Angle1**: (labelled _V parameter_ in the Primitive parameters) lower truncation of the torus, parallel to the circular cross section (-180° in a full torus). A bug in the sources causes unexpected results at changing Angle1.
- Data**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the ellipsoid, parallel to the circular cross section (180° in a full torus). A bug in the sources causes unexpected results at changing Angle2.
- Data**Angle3**: (labelled _U parameter_ in the Primitive parameters) angle of rotation of the circular cross section (360° in a full torus).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveTorus/en&oldid=1127223>"
