---
title: CurvedShapes CurvedArray
---
|  |
| --- |
| CurvedShapes CurvedArray |
| Posizione nel menu |
| *Nessuno* |
| Ambiente |
| [CurvedShapes](/CurvedShapes_Workbench/it "CurvedShapes Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Crea un array e ridimensiona gli elementi all'interno di una o più curve limite. In questo esempio, la forma di base arancione viene ridimensionata entro le curve limite rosse e viola. Le curve non devono essere collegate.
Le curve limite devono trovarsi sul piano XY, XZ o YZ, o su un piano parallelo.

<https://github.com/chbergmann/CurvedShapesWorkbench/blob/master/Examples/WingExample.png>
[[Image:]]

## Utilizzo

1. Step 1
2. Step 2: Invoke the command several way:
   * Using the [File:WorkbenchName Command.svg](/index.php?title=Special:Upload&wpDestFile=WorkbenchName_Command.svg "File:WorkbenchName Command.svg")  [WorkbenchName Command](/index.php?title=WorkbenchName_Command&action=edit&redlink=1 "WorkbenchName Command (page does not exist)") button
   * Using the {{{1}}} {{{1}}} keyboard shortcut
   * Using the **Menu → Command** in the Menu dropdown
3. Step 3

## Notes

* The first curve that you select for CurvedArray creation will be the item that is swept and resized in the bounds of the other selected curves.

## Properties

Base

* Dati**Base**: The object to make an array from
* Dati**Hullcurves**: List of one or more bounding curves
* Dati**Axis**: Direction axis of the Base shape
* Dati**Items**: Nr. of array items
* Dati**OffsetStart**: Offset of the first part in Axis direction
* Dati**OffsetEnd**: Offset of the last part from the end in opposite Axis direction
* Dati**Twist**: Applies a rotation around Axis to the array items.
* Dati**Surface**: make a surface over the array items
* Dati**Solid**: make a solid if Base is a closed shape

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_CurvedArray/it&oldid=1536683>"