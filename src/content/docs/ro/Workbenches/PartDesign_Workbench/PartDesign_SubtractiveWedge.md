---
title: PartDesign Pană substractivă
---
|  |
| --- |
| PartDesign SubtractiveWedge |
| Menu location |
| Part Design → Create a subtractive primitive → Subtractive Wedge |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| - |
| See also |
| [PartDesign CompPrimitiveSubtractive](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive") |
|  |

## Descriere

Se introduce o pană subtractivă în corpul activ. Forma sa este scăzută de solidul existent.

![](/images/PartDesign_SubtractiveWedge_example.svg)

*În stânga, corpul activ (A) în gri și pana substractivă (B) în roșu transparent; rezultatul final este în partea dreaptă.*

## Cum se folosește

1. Press the ![](/images/PartDesign_SubtractiveWedge.png) **Subtractive Wedge** button. **Note**: Wedge-ul subtractiv face parte dintr-un meniu de iconițe *Create an additive primitive*. După lansarea FreeCAD, Subtractive Box este afișată în toolbar. Pentru a obține Wedge, faceți clic pe săgeată pentru a vizualiza Wedge subtractive din meniu.
2. Definițăi parametrii Primitivei și [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. O funcționalitate Wedge apare sub corpul (Body) activ.

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

Nu există o valoare Y pentru vârf, astfel încât poziția sa o să fie 0 în mod implicit.

## Pyramids

Wedges can be used to create pyramids by setting Date**X2 min/max** and Date**Z2 min/max** each so that min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveWedge/ro&oldid=1424939>"