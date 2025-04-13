---
title: PartDesign Planul
---
|  |
| --- |
| PartDesign Plane |
| poziția meniului |
| PartDesign → Create a datum plane |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [PartDesign Point/ro](/PartDesign_Point/ro "PartDesign Point/ro"), [PartDesign Line/ro](/PartDesign_Line/ro "PartDesign Line/ro") |
|  |

## Descriere

Creați un plan de referință **datum plane** care poate fi folosit ca referință pentru schițe sau alte forme geometrice de referințe. Schițele pot fi atașate la planele de referință .

![](/images/Datum_plane.png)

"Planul de referință care traversează cele trei colțuri ale cubului cu partea de sus a unui Cilindru folosind planul de referință X-Y".

## Cum se folosește

A datum plane can only be created inside of a ![](/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body"). Every body has an origin, which is hidden by default. To be able to refer to the origin base planes, make the the origin visible. You can do this before creating a datum plane.

1. Apăsați butonul ![](/images/PartDesign_Plane.png) **Create a datum plane**.
2. Define Plane parameters. Select a first reference in the 3D view to filter the available [attachment](/Part_EditAttachment "Part EditAttachment") modes.
3. Depending on the selected reference, there may be one or more attachment modes available in the the list. The most likely one will automatically be selected and shown in bold in the list. The text *Attached with mode* along with the attachment mode name will appear in green at the top of the Parameters panel.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to *Selecting...* until a selection is made.
5. Select an attachment mode in the list.
6. Define Attachment Offset values.
7. Apăsați tasta OK.

## Opţiuni

Faceți dublu clic pe eticheta DatumPlane din arborescența Model sau faceți clic cu butonul din dreapta și selectați **Editați datum** din meniul contextual pentru a edita parametrii. Pentru mai multe detalii despre modul referențiere și offset (decalajul referinței), consultați [Attachment](/Part_EditAttachment "Part EditAttachment").

## Proprietăți

## Preferences

The default diffuse color and transparency of [PartDesign datums](/PartDesign_CompDatums "PartDesign CompDatums") is controlled by the **DefaultDatumColor** [fine-tuning parameter](/Fine-tuning#PartDesign_Workbench "Fine-tuning").

## Useful for

Datum planes have their uses:

* as arbitrary mirror plane,
* as support at a desired offset for multiple sketches,
* as support for a sketch that needs to be a specific offset/angle from the origin,
* as visible indicator (for example, a focal plane).

For support of a single sketch, they are basically redundant. They suffer from the [Topological naming problem](/Topological_naming_problem "Topological naming problem") as much as sketches.

* Date**MapMode**: listează modul de atașare utilizat.
* Date**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Date**Label**: numele dat obiectului, acest nume poate fi modificat dacă vă este mai comod.

* Date**MapMode**: lists the attachment mode used.
* Date**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Date**Label**: name given to the object, this name can be changed at convenience.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/ro&oldid=1542915>"