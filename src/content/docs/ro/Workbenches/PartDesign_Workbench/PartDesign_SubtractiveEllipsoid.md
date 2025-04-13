---
title: PartDesign Elipsoid Substractiv
---
|  |
| --- |
| PartDesign SubtractiveEllipsoid |
| Menu location |
| Part Design → Create an subtractive primitive → Subtractive Ellipsoid |
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

Inserează un elipsoid substractiv în corpul activ. Forma lui este extrasă din solidul existent.

![](/images/PartDesign_SubtractiveEllipsoid_example.svg)

*În partea stângă: corpul activ (A) afișat în gri și elipsoidul substractiv (B) afișat în roșu transparent; rezultatul în partea dreaptă.*

## Cum se folosește

1. Apăsați mai întâi butonul ![](/images/PartDesign_SubtractiveEllipsoid.png) **Subtractive Ellipsoid** . **Notă**: Elipsoidul Subtractiv face parte dintr-un meniu cu pictograme etichetat *Create an additive primitive*. După lansarea FreeCAD, Subtractiv Elipsoid este printe cele afișate în toolbar. Pentru a obține butonul Ellipsoid, click pe săgeata în jos alături de iconița vizibilă și selectați Ellipsoid in meniu.
2. Definiți parametrii Primitivei geometrice și [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click pe OK.
4. O funcție(onalitate) Ellipsoid apare sub Copul activ.

## Opţiuni

Elipsoidul poate fi editat după crearea sa în două moduri:

* Double-clicking pe el în arborescența Model, sau right-clicking și selectați **Edit primitive** in meniul contextual; acest lucru deschide parametrii Primitivei geometrice.
* Via [Property editor](/Property_editor "Property editor").

## Proprietăți

* Date**Attachment**: definește modul de atașament ca și Attachment Offset. A se vedea [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Date**Label**: label given to the Ellipsoid object. Change to suit your needs.
* Date**Radius1**: the radius value along the ellipsoid's vertical axis; by default, parallel to the Z-axis.
* Date**Radius2**: the radius value along the ellipsoid's length; by default, parallel to the X-axis.
* Date**Radius2**: the radius value along the ellipsoid's width; by default, parallel to the Y-axis. At the default value of zero, the ellipsoid forms an [oblate spheroid](http://en.wikipedia.org/wiki/Oblate_spheroid).
* Date**Angle1**: (labelled *V parameter* in the Primitive parameters) lower truncation of the ellipsoid, parallel to the circular cross section (-90 degrees in a full spheroid)
* Date**Angle2**: (unlabelled in the Primitive parameters) upper truncation of the ellipsoid, parallel to the circular cross section (90 degrees in a full spheroid).
* Date**Angle3**: (etichetat cu parametrul "U" în parametrii Primitive) unghiul de rotație a secțiunii eliptice (360 de grade într-un sferoid complet).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveEllipsoid/ro&oldid=1111366>"