---
title: PartDesign AdditiveCylinder/tr
---
|  |
| --- |
| PartDesign AdditiveCylinder |
| Menu location |
| Part Design → Create an additive primitive → Additive Cylinder |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveCylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder") |
|  |

## Tanım

Inserts a primitive cylinder in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveCylinder_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveCylinder.svg) **Additive Cylinder** button. **Note**: the Additive Cylinder is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get to the Cylinder button, click on the down arrow besides the visible icon and select Additive cylinder in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Cylinder feature appears under the active Body.

## Options

It is possible to create skewed cylinders by specifying angles in respect to the normal vector of the chosen attachment. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

The Cylinder can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Veri**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Veri**Label**: label given to the Cylinder object. Change to suit your needs.
* Veri**Radius**: the radius value of the cylinder.
* Veri**Angle**: angle of rotation of the cross section (360 degrees forms a full cylinder).
* Veri**Height**: the height of the cylinder along its axis.
* Veri**First Angle**: angle in first direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* Veri**Second Angle**: angle in second direction. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCylinder/tr&oldid=1180876>"