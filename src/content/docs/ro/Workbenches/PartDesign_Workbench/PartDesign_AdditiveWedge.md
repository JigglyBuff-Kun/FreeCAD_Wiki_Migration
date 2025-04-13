---
title: PartDesign Pană Aditivă
---
|  |
| --- |
| PartDesign AdditiveWedge |
| Menu location |
| Part Design → Create an additive primitive → Additive Wedge |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| - |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive") |
|  |

## Descriere

Inserează o primitivă geometrică tip pană în corpul activ ca prima funcție(onalitate) sau se conectează la funcționalitățile existente.

![](/images/PartDesign_AdditiveWedge_example.png)

## Cum se folosește

1. Apăsați butonul ![](/images/PartDesign_AdditiveWedge.png) **Additive Wedge** . **Note**: the Additive Wedge is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get the Wedge, click on the down arrow besides the visible icon and select Additive Wedge in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. O funcție tip Pană apare sub Corpul activ.

## Opţiuni

Pana(Wedge) poate fi editată după crearea ei în douăî moduri:

* Dublu-clicking în arborescența Model, sau prin clic drapta și selectarea **Edit primitive** ăn meniul contextula; aceasta aduce parametrii Primitive .
* Via [Property editor](/Property_editor "Property editor").

## Proprietăți

Utilizarea plasamentului implicit, intrările de mai jos sunt:

* Date**X min/max** : Base face X axis span
* Date**Y min/max**: Wedge height span
* Date**Z min/max** : Base face Z axis span
* Date**X2 min/max** : Top face X axis span
* Date**Z2 min/max** : Top face Z axis span

## Pyramids

Wedges can be used to create pyramids by setting Date**X2 min/max** and Date**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/ro&oldid=1111289>"