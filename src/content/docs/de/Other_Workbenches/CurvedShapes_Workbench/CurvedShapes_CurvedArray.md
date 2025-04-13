---
title: CurvedShapes CurvedArray/de
---
|  |
| --- |
| CurvedShapes CurvedArray |
| Menu location |
| *None* |
| Workbenches |
| [CurvedShapes](/CurvedShapes_Workbench "CurvedShapes Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

Creates an array and resizes the items in the bounds of one or more hull curves. In this example, the orange base shape is rescaled in the bounds of the red and violet hullcurves. The curves do not have to be connected.
The hullcurves should lie on or parallel to the XY- XZ- or YZ- plane.

<https://github.com/chbergmann/CurvedShapesWorkbench/blob/master/Examples/WingExample.png>
[[Image:]]

## Anwendung

1. Step 1
2. Step 2: Invoke the command several way:
   * Using the [File:WorkbenchName Command.svg](/index.php?title=Special:Upload&wpDestFile=WorkbenchName_Command.svg "File:WorkbenchName Command.svg")  [WorkbenchName Command](/index.php?title=WorkbenchName_Command&action=edit&redlink=1 "WorkbenchName Command (page does not exist)") button
   * Using the {{{1}}} {{{1}}} keyboard shortcut
   * Using the **Menu → Command** in the Menu dropdown
3. Step 3

## Hinweise

* The first curve that you select for CurvedArray creation will be the item that is swept and resized in the bounds of the other selected curves.

## Eigenschaften

Base

* Daten**Base**: The object to make an array from
* Daten**Hullcurves**: List of one or more bounding curves
* Daten**Axis**: Direction axis of the Base shape
* Daten**Items**: Nr. of array items
* Daten**OffsetStart**: Offset of the first part in Axis direction
* Daten**OffsetEnd**: Offset of the last part from the end in opposite Axis direction
* Daten**Twist**: Applies a rotation around Axis to the array items.
* Daten**Surface**: make a surface over the array items
* Daten**Solid**: make a solid if Base is a closed shape

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_CurvedArray/de&oldid=1307122>"