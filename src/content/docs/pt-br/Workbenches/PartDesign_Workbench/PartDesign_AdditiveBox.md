---
title: Cubo aditivo
---
|  |
| --- |
| PartDesign AdditiveBox |
| Menu location |
| Part Design → Create an additive primitive → Additive Box |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), [PartDesign SubtractiveBox](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox") |
|  |

## Description

Inserts a primitive box in the active Body as the first feature, or fuses it to the existing feature(s).

![](/images/PartDesign_AdditiveBox_example.png)

## Usage

1. Press the ![](/images/PartDesign_AdditiveBox.svg) **Additive Box** button. **Note**: the Additive Box is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. If a different primitive is displayed, click on the down arrow besides the icon and select Additive Box in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. A Box feature appears under the active Body.

## Options

The Box can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Properties

* Dados**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Dados**Label**: Label given to the Box object. Change to suit your needs.
* Dados**Length**: the Box's dimension in the X-direction.
* Dados**Width**: the Box's dimension in the Y-direction.
* Dados**Height**: the Box's dimension in the Z-direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveBox/pt-br&oldid=1424613>"