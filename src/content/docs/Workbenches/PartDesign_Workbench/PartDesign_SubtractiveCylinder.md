---
title: PartDesign SubtractiveCylinder
---

|                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PartDesign SubtractiveCylinder                                                                                                                                                                               |
| Menu location                                                                                                                                                                                                |
| Part Design → Create a subtractive primitive → Subtractive Cylinder                                                                                                                                          |
| Workbenches                                                                                                                                                                                                  |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                       |
| Introduced in version                                                                                                                                                                                        |
| 0.17                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                     |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign_AdditiveCylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder") |
|                                                                                                                                                                                                              |

## Description

Inserts a subtractive cylinder in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

_On the left: active body (A) shown in grey and subtractive cylinder (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/images/PartDesign_SubtractiveCylinder.svg) **Subtractive Cylinder** button. **Note**: the Subtractive Cylinder is part of an icon menu labelled _Create an subtractive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get to the Cylinder button, click on the down arrow besides the visible icon and select Subtractive cylinder in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Cylinder feature appears under the active Body.

## Options

It is possible to create skewed cylinders by specifying angles in respect to the normal vector of the chosen attachment. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

The Cylinder can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

- Data**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
- Data**Label**: label given to the Cylinder object. Change to suit your needs.
- Data**Radius**: the radius value of the cylinder.
- Data**Angle**: angle of rotation of the cross section (360 degrees forms a full cylinder).
- Data**Height**: the height of the cylinder along its axis.
- Data**First Angle**: angle in first direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- Data**Second Angle**: angle in second direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/en&oldid=1219074>"
