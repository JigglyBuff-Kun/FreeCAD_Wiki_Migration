---
title: PartDesign SubtractiveWedge/tr
---
|  |
| --- |
| PartDesign SubtractiveWedge |
| Menu location |
| Part Design → Create a subtractive primitive → Subtractive Wedge |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveWedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge") |
|  |

## Tanım

Inserts a subtractive wedge in the active Body. Its shape is subtracted from the existing solid.

![](/images/PartDesign_SubtractiveWedge_example.svg)

*On the left: active body (A) shown in grey and subtractive wedge (B) shown in transparent red; result on the right.*

## Usage

1. Press the ![](/images/PartDesign_SubtractiveWedge.svg) **Subtractive Wedge** button. **Note**: the Subtractive Wedge is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get the Wedge, click on the down arrow besides the visible icon and select Subtractive Wedge in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Wedge feature appears under the active Body.

## Options

The Wedge can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

Using the default placement, the below inputs are:

* Veri**X min/max** : Base face X axis span
* Veri**Y min/max**: Wedge height span
* Veri**Z min/max** : Base face Z axis span
* Veri**X2 min/max** : Top face X axis span
* Veri**Z2 min/max** : Top face Z axis span

## Pyramids

Wedges can be used to create pyramids by setting Veri**X2 min/max** and Veri**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveWedge/tr&oldid=1424926>"