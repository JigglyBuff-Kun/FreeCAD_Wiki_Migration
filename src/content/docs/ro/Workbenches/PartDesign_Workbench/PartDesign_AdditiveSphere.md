---
title: PartDesign Additive Sphere
---
|  |
| --- |
| PartDesign AdditiveSphere |
| Menu location |
| Part Design → Create an additive primitive → Additive Sphere |
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

Inserează o primitivă geometrică tip sferă în Corpul activ ca prima funcție(onalitate) sau se conectează la funcționalitățile existente.

![](/images/PartDesign_AdditiveSphere_example.png)

## Cum se folosește

1. Apăsați butonul ![](/images/PartDesign_AdditiveSphere.png) **Additive Sphere**. **Note**: the Additive Sphere is part of an icon menu labelled *Create an additive primitive*. After launching FreeCAD, the Additive Box is the one displayed in the toolbar. To get the Sphere, click on the down arrow besides the visible icon and select Additive Sphere in the menu.
2. Set the Primitive parameters and [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. O funcție Sphere apre sub Corpul activ.

## Opţiuni

Sfera poate fi editată după crearea sa pe două căi:

* Double-clicking pe ea în arborescența Model, sau right-clicking și selectarea **Edit primitive** în meniul contextual; aceasta deschide parametrii Primitivei geometrice.
* Via [Property editor](/Property_editor "Property editor").

## Proprietăți

* Date**Attachment**: definește modul de atașarea ca și the Attachment Offset. A se vedea [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Date**Label**: Label given to the Sphere object. Change to suit your needs.
* Date**Radius**: Radius of the sphere.
* Date**Angle1**: (labelled *V parameter* in the Primitive parameters) lower truncation of the sphere, parallel to the circular cross section (-90 degrees in a full sphere)
* Date**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the ellipsoid, parallel to the circular cross section (90 degrees in a full sphere).
* Date**Angle3**: (etichetat ca parametru U între parametrii Primitive) unghiul de rotație al secțiunii transversale (360 de grade într-o sferă completă).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveSphere/ro&oldid=1111182>"