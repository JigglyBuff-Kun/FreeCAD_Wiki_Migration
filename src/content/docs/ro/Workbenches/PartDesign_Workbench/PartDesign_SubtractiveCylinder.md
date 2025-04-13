---
title: PartDesign Cilindrul Subtractiv
---
|  |
| --- |
| PartDesign SubtractiveCylinder |
| Menu location |
| Part Design → Create a subtractive primitive → Subtractive Cylinder |
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

Inserează un cilindru subtractiv în Corpul Activ. Forma sa este extrasă din solidul existent.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*În partea stângă: corpul activ (A) afișat în gri și cilindrul substractiv (B) afișat în roșu transparent; rezultatul în partea dreaptă.*

## Cum se folosește

1. Apăsați butonul ![](/images/PartDesign_SubtractiveCylinder.png) **Subtractive Cylinder** . **Notă**: Cilindrul substractiv este parte a meniul de iocnițe denumit/etichetat *Create an subtractive primitive*. După lansarea FreeCAD, Cubul Substractiv este afișat în bara de instrumente. Pentru a obține Cilindru, click pe săgeata în jos dincolo de iconițele vizibile și selectați Cilindrul Substractiv din meniu
2. Parametrii Primitivei și [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. Funcția Cilindru apare sub Corpul activ.

## Opţiuni

It is possible to create skewed cylinders by specifying angles in respect to the normal vector of the chosen attachment. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Cilindrul poate fi editat, după crearea sa, în două moduri:

* Double-clicking pe el în arborescența Model, sau right-clicking și selectare **Edit primitive** în meniul contextual; acest lucru face vizibili parametrii primitivi.
* Via [Property editor](/Property_editor "Property editor").

## Proprietăți

* Date**Attachment**: Determină modul de atașare și dispunerea atașamentului(Attachment Offset). Vedeți [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Date**Label**: numel/eticheta dată obiectului Cylinder. Schimbați pentru a vi se potrivi nevoilor dvs.
* Date**Radius**: valoarea razei cilindrului.
* Date**Angle**: unghiul de rotație a secțiunii transversale (360 degrees formează un cilindru complet).
* Date**Height**: lungimea cilindrului de-a lungul axei.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/ro&oldid=1219073>"