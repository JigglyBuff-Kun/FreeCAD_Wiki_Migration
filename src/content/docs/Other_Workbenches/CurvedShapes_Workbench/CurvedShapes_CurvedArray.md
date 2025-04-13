---
title: CurvedShapes CurvedArray
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

## Description

Creates an array and resizes the items in the bounds of one or more hull curves. In this example, the orange base shape is rescaled in the bounds of the red and violet hullcurves. The curves do not have to be connected.
The hullcurves should lie on or parallel to the XY- XZ- or YZ- plane.

<https://github.com/chbergmann/CurvedShapesWorkbench/blob/master/Examples/WingExample.png>
[[Image:]]

## Usage

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

* Data**Base**: The object to make an array from
* Data**Hullcurves**: List of one or more bounding curves
* Data**Axis**: Direction axis of the Base shape
* Data**Items**: Nr. of array items
* Data**OffsetStart**: Offset of the first part in Axis direction
* Data**OffsetEnd**: Offset of the last part from the end in opposite Axis direction
* Data**Twist**: Applies a rotation around Axis to the array items.
* Data**Surface**: make a surface over the array items
* Data**Solid**: make a solid if Base is a closed shape

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_CurvedArray/en&oldid=633895>"