---
title: CAM DressupDogbone/de
---
|  |
| --- |
| CAM DressupDogbone |
| Menu location |
| CAM → Path Dressup → Dogbone |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [CAM DressupTag](/CAM_DressupTag "CAM DressupTag"), [CAM DressupRampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry"), [CAM DressupDragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife") |
|  |

## Beschreibung

The tool ![](/images/CAM_DressupDogbone.svg) [DressupDogbone](/CAM_DressupDogbone "CAM DressupDogbone") dresses up an existing path to overcut corners on inside angles of a profile or contour operation. A cylindrical cutter cannot cut all the way into an acute corner without colliding with the model. In certain cases, it may be preferable to violate the model and ensure that the material at the corner is removed. This is especially necessary if parts are going to intersect/interlock with each other.

## Anwendung

1. Select a contour or profile path [CAM](/CAM_Workbench "CAM Workbench") objects.
2. Select the **CAM → Path Dressup → ![](/images/CAM_DressupDogbone.svg) Dogbone** option from the menu.

## Optionen

* **Side**: Which side of the path the modification will be added to.
* **Style**: Style of overcut (Dogbone, T-Bone Horizontal, T-Bone Vertical, T-Bone Long Edge, T-Bone Short Edge).
* **Incision**: The Algorithm to use calculating the overcut length
* **Custom**: If Incision is custom, the custom property is used to set the length.

## Einschränkungen

The dogbone dressup needs a straight path segment (G1) before and after the corner where the dressup should be inserted.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupDogbone/de&oldid=1406323>"