---
title: Cilindro subtrativo
---
|  |
| --- |
| PartDesign SubtractiveCylinder |
| Menu location |
| Part Design → Create a subtractive primitive → Subtractive Cylinder |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign\_AdditiveCylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder") |
|  |

## Description

Inserts a subtractive cylinder in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*On the left: active body (A) shown in grey and subtractive cylinder (B) shown in transparent red; result on the right.*

## Usage

1. Press the ![](/images/PartDesign_SubtractiveCylinder.svg) **Subtractive Cylinder** button. **Note**: the Subtractive Cylinder is part of an icon menu labelled *Create an subtractive primitive*. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get to the Cylinder button, click on the down arrow besides the visible icon and select Subtractive cylinder in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Cylinder feature appears under the active Body.

## Options

It is possible to create skewed cylinders by specifying angles in respect to the normal vector of the chosen attachment. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

The Cylinder can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Dados**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Dados**Label**: label given to the Cylinder object. Change to suit your needs.
* Dados**Radius**: the radius value of the cylinder.
* Dados**Angle**: angle of rotation of the cross section (360 degrees forms a full cylinder).
* Dados**Height**: the height of the cylinder along its axis.
* Dados**First Angle**: angle in first direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* Dados**Second Angle**: angle in second direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/pt-br&oldid=1219070>"