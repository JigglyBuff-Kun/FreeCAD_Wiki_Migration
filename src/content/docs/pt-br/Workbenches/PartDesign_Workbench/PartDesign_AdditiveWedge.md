---
title: Cunha aditiva
---
|  |
| --- |
| PartDesign AdditiveWedge |
| Menu location |
| Part Design → Create an additive primitive → Additive Wedge |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveWedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge") |
|  |

## Description

Inserts a primitive wedge in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveWedge_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveWedge.svg) **Additive Wedge** button. **Note**: the Additive Wedge is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get the Wedge, click on the down arrow besides the visible icon and select Additive Wedge in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Wedge feature appears under the active Body.

## Options

The Wedge can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

Using the default placement, the below inputs are:

* Dados**X min/max** : Base face X axis span
* Dados**Y min/max**: Wedge height span
* Dados**Z min/max** : Base face Z axis span
* Dados**X2 min/max** : Top face X axis span
* Dados**Z2 min/max** : Top face Z axis span

## Pyramids

Wedges can be used to create pyramids by setting Dados**X2 min/max** and Dados**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/pt-br&oldid=1126990>"