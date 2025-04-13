---
title: Esfera aditiva
---
|  |
| --- |
| PartDesign AdditiveSphere |
| Menu location |
| Part Design → Create an additive primitive → Additive Sphere |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveSphere](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere") |
|  |

## Description

Inserts a primitive sphere in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveSphere_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveSphere.svg) **Additive Sphere** button. **Note**: the Additive Sphere is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get the Sphere, click on the down arrow besides the visible icon and select Additive Sphere in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Sphere feature appears under the active Body.

## Options

The Sphere can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Dados**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Dados**Label**: Label given to the Sphere object. Change to suit your needs.
* Dados**Radius**: Radius of the sphere.
* Dados**Angle1**: (labelled *V parameter* in the Primitive parameters) lower truncation of the sphere, parallel to the circular cross section (-90 degrees in a full sphere)
* Dados**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the sphere, parallel to the circular cross section (90 degrees in a full sphere).
* Dados**Angle3**: (labelled *U parameter* in the Primitive parameters) angle of rotation of the cross section (360 degrees in a full sphere).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveSphere/pt-br&oldid=1180843>"