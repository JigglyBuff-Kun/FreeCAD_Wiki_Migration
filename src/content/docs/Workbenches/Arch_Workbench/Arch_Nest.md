---
title: Arch Nest
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| Arch Nest                                                                                        |
| Menu location                                                                                    |
| Utils → Panel tools → Nest                                                                       |
| Workbenches                                                                                      |
| [BIM](/BIM_Workbench "BIM Workbench")                                                            |
| Default shortcut                                                                                 |
| _None_                                                                                           |
| Introduced in version                                                                            |
| 0.17                                                                                             |
| See also                                                                                         |
| [Arch Panel](/Arch_Panel "Arch Panel"), [Arch Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet") |
|                                                                                                  |

## Description

The **Arch Nest** tool allows to select a flat shape to be a container, and a series of other flat shapes to be organized inside the space defined by the container shape. This is typically needed for CNC operations, where you want to cut a series of pieces out of a base panel, and need to organize those pieces in the best possible compact way so they occupy less space on the panel.

The algorithm behind the Nest tool is in constant evolution, and is currently not fully optimized. In the future the performance of this tool should become much better.

![](/images/Arch_Nest_example.jpg)

_The image above shows a series of shapes before and after the nesting operation._

## Usage

1. Select the **Utils → Panel tools → ![](/images/Arch_Nest.svg) Nest** option from the menu.
2. Select an object to be the container. This object must be flat, and, at the moment, rectangular.
3. Click the Pick selected button to use that object as the container.
4. Select a series of other flat objects that you wish to place inside the container. These objects must all be flat and in the same plane as the container.
5. Adjust desired options below.
6. Start the calculation process.
7. At the end of the calculation, click the Preview button to create a temporary preview of the result.
8. If you wish to apply the result (move and rotate the actual shapes into place), click OK.

![](/images/Arch_Nest_panel.jpg)

Taskview panel for the [Arch Nest](/Arch_Nest "Arch Nest") tool

## Notes

- All objects must have a face
- At the moment the tool will only work with flat objects that all have the same orientation.
- At the moment, the container must be rectangular.
- At the moment, margin / spacing between the pieces is not implemented yet
- The calculation can take a lot of time with many objects. That will be optimized in the future

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/en&oldid=1437125>"
