---
title: PartDesign AdditiveEllipsoid/tr
---
|  |
| --- |
| PartDesign AdditiveEllipsoid |
| Menu location |
| Part Design → Create an additive primitive → Additive Ellipsoid |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveEllipsoid](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid") |
|  |

## Tanım

Inserts a primitive ellipsoid in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveEllipsoid_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveEllipsoid.svg) **Additive Ellipsoid** button. **Note**: the Additive Ellipsoid is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get to the Ellipsoid button, click on the down arrow besides the visible icon and select Additive Ellipsoid in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. An Ellipsoid feature appears under the active Body.

## Options

The Ellipsoid can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Veri**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Veri**Label**: label given to the Ellipsoid object. Change to suit your needs.
* Veri**Radius1**: the radius value along the ellipsoid's vertical axis; by default, parallel to the Z-axis.
* Veri**Radius2**: the radius value along the ellipsoid's length; by default, parallel to the X-axis.
* Veri**Radius3**: the radius value along the ellipsoid's width; by default, parallel to the Y-axis. At the default value of zero, the ellipsoid forms an [oblate spheroid](http://en.wikipedia.org/wiki/Oblate_spheroid). This has the same form as if Radius3 is identical to Radius2.
* Veri**Angle1**: (labelled *V parameter* in the Primitive parameters) lower truncation of the ellipsoid, parallel to the circular cross section (-90 degrees in a full spheroid)
* Veri**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the ellipsoid, parallel to the circular cross section (90 degrees in a full spheroid).
* Veri**Angle3**: (labelled *U parameter* in the Primitive parameters) angle of rotation of the elliptical cross section (360 degrees in a full spheroid).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveEllipsoid/tr&oldid=1126955>"