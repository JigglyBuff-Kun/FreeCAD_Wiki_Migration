---
title: FEM Piano di taglio sulla faccia
---

|                                                    |
| -------------------------------------------------- |
| Piano di taglio sulla faccia                       |
| Posizione nel menu                                 |
| Utilità → Piano di taglio sulla faccia             |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| _Nessuno_                                          |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Descrizione

Da fare

The clipping plane is the same you get when using the feature [Toggle Clip Plane](/Std_ToggleClipPlane "Std ToggleClipPlane") with the difference that the clipping plane is persistent. Therefore it shares the same functionality of providing only hollow cuts.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ClippingPlaneAdd.svg) [Clipping plane on face](/FEM_ClippingPlaneAdd "FEM ClippingPlaneAdd") button.
   - Select the **Utilities → ![](/images/FEM_ClippingPlaneAdd.svg) Clipping plane on face** option from the menu.

It is possible to have several clipping planes.

Despite the plane is persistent, it will not appear in the [Tree view](/Tree_view "Tree view"). The plane appears in the model view like this:

![](/images/FEM_Clipping-Plane-Example.png)

To move the plane, click on the big white cuboid that is perpendicular to the plane and keep the mouse button pressed while the mouse is moved.

To rotate and tilt the plane, click on a line that connects the small cubes with the the big white cuboid and keep the mouse button pressed while the mouse is moved.

Click Ctrl to cycle between different clipping directions.

The 6 small cubes are handles to adjust the size. However, since the object is an infinite plane, the size does not matter.

To remove all clipping planes, use the feature [Remove all clipping planes](/FEM_ClippingPlaneRemoveAll "FEM ClippingPlaneRemoveAll"). Removing only a certain plane is not possible.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ClippingPlaneAdd/it&oldid=1569344>"
