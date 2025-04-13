---
title: PartDesign Punct de Referință
---
|  |
| --- |
| PartDesign Point |
| poziția meniului |
| Part Design → Create a datum point |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [PartDesign Line/ro](/PartDesign_Line/ro "PartDesign Line/ro"), [PartDesign Plane/ro](/PartDesign_Plane/ro "PartDesign Plane/ro") |
|  |

## Descriere

Crearea unui punct de referință **datum point** care poate fi utilizat ca referință pentru schițe sau alte forme geometrice de referință.

![](/images/DatumPoint.png)

Un punct de referință atașat la o sferă care are un decalaj al atașamentului în Z = 2

## Cum se folosește

1. Apăsați pe butonul ![](/images/PartDesign_Point.png) **Create a datum point** .
2. Definiți parametrii punctului. Selectați o primă referință în vizualizarea 3D pentru a filtra modurile de atașare disponibile.
3. În funcție de referința selectată, este posibil să existe unul sau mai multe moduri de atașare în listă. Cel mai probabil va fi selectată automat și afișată cu caractere aldine din listă. Textul *Attached with mode* iar numele modului de atașare apare verde în partea de sus a panoului Setări.
4. Pentru a adăuga o referință suplimentară, apăsați butonul următor Référence. Odată butonul apăsat, eticheta sa va deveni  *Sélection ...*  până ce o selecție va fi făcută.
5. Selecționați un mode atașare în listă.
6. Definiți valorile decalajului de atașament.
7. Apăsați pe OK.

## Opţiuni

Faceți dublu clic pe eticheta DatumPoint din arborescența Model sau faceți clic cu butonul din dreapta și selectați **Editați datum** din meniul contextual pentru a edita parametrii. Pentru mai multe detalii despre modul referențiere și offset (decalajul referinței), consultați [Attachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Proprietăți

* Date**MapMode**: listează modurile de atașament folosite
* Date**Attachment Offset**: applică o transformare (translație și rotație) în referință la plasamentul atașamentului.
* Date**Label**: nume dat obiectului, acest nume poate fi schimbat dacă este necesar.

## Limite

* Punctul de referință nu poate fi folosit ca secțiune pentru funcții(onalități)le Pipe, Sweep și Loft(funcțiile de baleiere și lisaj)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/ro&oldid=1460156>"