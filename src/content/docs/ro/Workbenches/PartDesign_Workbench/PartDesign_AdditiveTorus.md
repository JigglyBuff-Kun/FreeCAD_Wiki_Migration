---
title: PartDesign Tor Aditiv
---
|  |
| --- |
| PartDesign AdditiveTorus |
| Menu location |
| Part Design → Create an additive primitive → Additive Torus |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [PartDesign CompPrimitiveAdditive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive") |
|  |

## Descriere

Inserează o primitivă geometrică tip tor în Corpul activ ca prima funcție(onalitate) sau se conectează la funcționalitățile existente.

![](/images/PartDesign_AdditiveTorus_example.png)

## Cum se folosește

1. Apăsați butonul ![](/images/PartDesign_AdditiveTorus.png) **Additive Torus** . **Note**: the Additive Torus is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get the Torus, click on the down arrow besides the visible icon and select Additive Torus in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. OP funcție Tor apare sub Corpul activ.

## Opţiuni

Torul poate fi definit după crearea sa în două moduri:

* Dublu-click pe el în arborescența Model, sau click dreapta și selectarea **Edit primitive** în meniul contextual; Acest lucru face să apară parametrii
* Via [Property editor](/Property_editor "Property editor").

## Proprietăți

* Date**Attachment**: definește atașamentul ca și Attachment Offset. A se vedea [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Date**Label**: Label given to the Torus object. Change to suit your needs.
* Date**Radius1**: Radius of the imaginary orbit around which the circular cross-section revolves. (The distance between the center of the torus and the center of the revolving cross section)
* Date**Radius2**: Radius of the circular cross-section defining the form of the torus.
* Date**Angle1**: (labelled *V parameter* in the Primitive parameters) lower truncation of the torus, parallel to the circular cross section (-180 degrees in a full torus). A bug in the sources causes unexpected results at changing Angle1.
* Date**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the ellipsoid, parallel to the circular cross section (180 degrees in a full torus). A bug in the sources causes unexpected results at changing Angle2.
* Date**Angle3**: (marcată cu parametrul "U" în parametrii Primitive) unghiul de rotație al secțiunii circulare (360 de grade într-un tor complet).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveTorus/ro&oldid=1111267>"