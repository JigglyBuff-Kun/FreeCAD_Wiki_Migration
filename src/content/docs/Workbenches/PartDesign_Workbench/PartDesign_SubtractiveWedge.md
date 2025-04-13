---
title: PartDesign SubtractiveWedge
---

|                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PartDesign SubtractiveWedge                                                                                                                                                                         |
| Menu location                                                                                                                                                                                       |
| Part Design → Create a subtractive primitive → Subtractive Wedge                                                                                                                                    |
| Workbenches                                                                                                                                                                                         |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                                                          |
| Default shortcut                                                                                                                                                                                    |
| _None_                                                                                                                                                                                              |
| Introduced in version                                                                                                                                                                               |
| 0.17                                                                                                                                                                                                |
| See also                                                                                                                                                                                            |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"), [PartDesign AdditiveWedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge") |
|                                                                                                                                                                                                     |

## Description

Inserts a subtractive wedge in the active Body. Its shape is subtracted from the existing solid.

![](/src/assets/images/PartDesign_SubtractiveWedge_example.svg)

_On the left: active body (A) shown in grey and subtractive wedge (B) shown in transparent red; result on the right._

## Usage

1. Press the ![](/src/assets/images/PartDesign_SubtractiveWedge.svg) **Subtractive Wedge** button. **Note**: the Subtractive Wedge is part of an icon menu labelled _Create an additive primitive_. After launching FreeCAD, the Subtractive Box is the one displayed in the toolbar. To get the Wedge, click on the down arrow besides the visible icon and select Subtractive Wedge in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Wedge feature appears under the active Body.

## Options

The Wedge can be edited after its creation in two ways:

- Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
- Via the [Property editor](/Property_editor "Property editor").

## Properties

Using the default placement, the below inputs are:

- Data**X min/max** : Base face X axis span
- Data**Y min/max**: Wedge height span
- Data**Z min/max** : Base face Z axis span
- Data**X2 min/max** : Top face X axis span
- Data**Z2 min/max** : Top face Z axis span

## Pyramids

Wedges can be used to create pyramids by setting Data**X2 min/max** and Data**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveWedge/en&oldid=1424924>"
