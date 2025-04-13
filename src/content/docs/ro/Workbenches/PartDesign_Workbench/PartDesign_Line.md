---
title: PartDesign Linie (de referință)
---
|  |
| --- |
| PartDesign Line |
| poziția meniului |
| Part Design → Create a datum line |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [PartDesign Point/ro](/PartDesign_Point/ro "PartDesign Point/ro"), [PartDesign Plane/ro](/PartDesign_Plane/ro "PartDesign Plane/ro") |
|  |

## Descriere

Creează o linie de referință **datum line** care poate fi folosită ca referință pentru schițe, alte forme geometrice sau funcții(onalități). De exemplu, poate fi folosit ca axă de Rotație sau creare Caneluri.

![](/images/Datum_line.png)

*Two Datum lines through opposite corners of the cube meet at the center of mass.*

## Cum se folosește

1. apăsați butonul ![](/images/PartDesign_Line.png) **Create a datum line**.
2. Definiți parametrii liniei. Selectați o primă referință în vizualizarea 3D pentru filtrarea modurilor de atașare disponibile.
3. În funcție de referința selectată, pot fi disponibile unul sau mai multe moduri de atașare în listă. Cel mai probabil va fi selectat automat și arătat cu caractere aldine în listă. Textul "Atașat cu modul" împreună cu numele modului de atașare va apărea cu verde în partea superioară a panoului Parametri.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to *Selecting...* until a selection is made.
5. Selectați un mod de attachment din listă.
6. Definește valaorea Attachment Offset.
7. Apăsați pe OK.

## Opţiuni

Faceți dublu clic pe eticheta DatumLine din arborescența Model sau faceți clic cu butonul din dreapta și selectați **Editați datum** din meniul contextual pentru a edita parametrii. Pentru mai multe detalii despre modul referențiere și Attachment offset (decalajul referinței), consultați [Attachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Proprietăți

* Date**MapMode**: listează modul de tașamentu utilizat.
* Date**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Date**Label**: nume dat obiectului, acest nume poate fi modificat la nevoie.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Line/ro&oldid=1460147>"