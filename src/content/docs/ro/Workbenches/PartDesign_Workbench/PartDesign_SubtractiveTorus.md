---
title: PartDesign Tor Subtractiv
---
|  |
| --- |
| PartDesign SubtractiveTorus |
| Menu location |
| Part Design → Create a subtractive primitive → Subtractive Torus |
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

Inserează un tor substractiv în Corpul activ. Forma sa este scăzută din solidul existent.

![](/images/PartDesign_SubtractiveTorus_example.svg)

*În partea stângă: corpul activ (A) afișat în gri și torul substractiv (B) afișat în roșu transparent; rezultatul în partea dreaptă.*

## Cum se folosește

1. Apăsați butonul ![](/images/PartDesign_SubtractiveTorus.png) **Subtractive Torus**. **Notă**: torul substractiv face parte din meniul cu iconițe numită *Create an additive primitive*. După lansarea FreeCAD, Cubul Substractiv este afișat implicit în bara de instrumente. Pentru a obține Torul substractiv, faceți clic pe săgeata în jos și alegeți ![](/images/PartDesign_SubtractiveTorus.png) torul subtractiv din meniu.
2. Setați parametrii Primitivei și [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Click OK.
4. Un Tor apare sub corpul activ.

## Opţiuni

The Torus can be edited after its creation in two ways:

* Double-clicking it in the Model tree, or by right-clicking and selecting **Edit primitive** in the contextual menu; this brings up the Primitive parameters.
* Via the [Property editor](/Property_editor "Property editor").

## Proprietăți

* Date**Attachment**: definește modurile de atașare, precum și dispunerea atașamentului. Consultați atașamentul [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Date**Label**:Botezați torul, schimbați numele dacă este necesar.
* Date**Radius1**: Raza imaginară a orbitei în jurul căreia se rotește secțiunea circulară. (Distanța dintre centrul torului și centrul secțiunii rotative)
* Date**Radius2**: Raza secțiunii ciruculare a care definește forma torului
* Date**Angle1**: (numit Parametrul V printre parametrii primitivei) paralel cu partea inferioară a secțiunii circulare (-180 ° pentru un torus întreg). O eroare în codul sursă cauzează rezultate neașteptate la editarea Angle1.
* Date**Angle2**: (care nu este etichetată printre parametrii primitivei), reprezintă trunchierea superioară a elipsoidului, paralelă cu secțiunea transversală circulară (180 ° într-un tor plin). O eroare în codul sursă provoacă rezultate neașteptate atunci când schimbați Angle2.
* Date**Angle3**: (numit parametrul U printre parametrii primitivei) unghiul de rotație a secțiunii circulare (360 ° pentru un tor întreg).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveTorus/ro&oldid=1111388>"