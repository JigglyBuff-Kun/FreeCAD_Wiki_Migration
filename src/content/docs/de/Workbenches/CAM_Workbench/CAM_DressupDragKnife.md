---
title: CAM DressupDragKnife/de
---
|  |
| --- |
| CAM DressupDragKnife |
| Menu location |
| CAM → Path Dressup → DragKnife |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [CAM DressupTag](/CAM_DressupTag "CAM DressupTag"), [CAM DressupRampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry"), [CAM DressupDogbone](/CAM_DressupDogbone "CAM DressupDogbone") |
|  |

## Beschreibung

The tool ![](/images/CAM_DressupDragKnife.svg) [DressupDragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife") uses a cutting edge on a pivot to cut sheet material like vinyl, cardboard, and leather. The cutting point is not aligned with the center of the spindle but rather follows it as the spindle moves. Because the cutting point is offset, the path must be modified to extend past the endpoint of each segment. Also, the dragknife is incapable of making extremely tight turns. To compensate, a pivot 'corner action' is inserted which momentarily lifts the blade slightly and then pivots into the new position.

This tool dresses up an existing path to add corner actions and edge extensions for drag knife cutting.

## Anwendung

1. Select a contour or profile path object.
2. Select the **CAM → Path Dressup → ![](/images/CAM_DressupDragKnife.svg) DragKnife** option from the menu.

## Optionen

* **Filter Angle** : Determines how acute an angle must be before a corner action is inserted.
* **Offset** : Input how much the blade point is offset from the spindle center.
* **Pivot Height** : Determines how high to lift the cutting blade during a corner action. This is material dependent and should be higher for thicker materials. Ideally, the point should remain in the material slightly.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupDragKnife/de&oldid=1406329>"