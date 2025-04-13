---
title: Rampa de entrada
---
|  |
| --- |
| CAM DressupRampEntry |
| Menu location |
| CAM → Path Dressup → RampEntry |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [CAM DressupTag](/CAM_DressupTag "CAM DressupTag"), [CAM DressupDogbone](/CAM_DressupDogbone "CAM DressupDogbone"), [CAM DressupDragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife") |
|  |

## Description

The tool ![](/images/CAM_DressupRampEntry.svg) [DressupRampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry") dresses up an existing path to add a ramp entry.

## Usage

1. Select a contour or profile path objects.
2. Select the **CAM → Path Dressup → ![](/images/CAM_DressupRampEntry.svg) RampEntry** option from the menu.

## Properties

* **Ramp Feed Rate** : Can either be the current vertical or horizontal feed rate or some other custom value
* **Angle** : Angle of the ramp against the vertical axis. A smaller value makes the ramp steeper.
* **Method** : Used to select different modes of ramping:
  + *RampMethod1*: goes down at the ramp angle and the moves horizontal to the target point
  + *RampMethod2*: goes horizontal first and then down at the ramp angle to the target point
  + *RampMethod3*: goes down in a zigzag way
  + *Helix*: goes down spiraling
* **Dressup Start Depth** : The distance above the target level where ramping starts
* **Use Start Depth** : Indicates that the ramping does not start above the stock level. If it is not set to true the first ramp can be steeper than expected.

![](/images/Ramp_method_1.png) ![](/images/Ramp_method_2.png) ![](/images/Ramp_method_3.png)

From left to right: Ramp method 1, 2 and 3

![](/images/Ramp_method_Helix.png)

Ramp method Helix

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupRampEntry/pt-br&oldid=1387369>"