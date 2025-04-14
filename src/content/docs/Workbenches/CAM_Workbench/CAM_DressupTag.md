---
title: CAM DressupTag
---

|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CAM DressupTag                                                                                                                                                                                             |
| Menu location                                                                                                                                                                                              |
| CAM → Path Dressup → Tag                                                                                                                                                                                   |
| Workbenches                                                                                                                                                                                                |
| [CAM](/CAM_Workbench "CAM Workbench")                                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                     |
| Introduced in version                                                                                                                                                                                      |
| -                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                   |
| [CAM DressupRampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry"), [CAM DressupDogbone](/CAM_DressupDogbone "CAM DressupDogbone"), [CAM DressupDragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife") |
|                                                                                                                                                                                                            |

## Description

The tool ![](/images/CAM_DressupTag.svg) [DressupTag](/CAM_DressupTag "CAM DressupTag") dresses up an existing path (usually a 2D contour cutting path) to leave tags that hold the part in place. Without them a part (which is not fixed to the base) is liable to fly off the machine uncontrollably as the final cut is made. The tags are intended to be broken off by hand (or using a chisel) and then filed flat to finish the part.

A video explanation of this feature is given at: <https://www.youtube.com/watch?v=JZ4prlR6sps>

## Usage

1. Select a contour or profile path objects.
2. Select the **CAM → Path Dressup → ![](/images/CAM_DressupTag.svg) Tag** option from the menu.

## Options

- **Angle** : Controls the angle of plunge and ascent when a tag is crated.
- **Height** : Controls the height of the tag top from the bottom of the profile cut.
- **Radius** : Radius of the fillet for the tag.
- **Segmentation Factor** : Number of segments to approximate a rounded tag.
- **Width** : Overall width of the tag.

Tags are automatically generated evenly spaced along the contour, beginning with the largest edge. You have the option to delete any you don't like or change their locations so that they appear on the convex parts of the job where it will be easier to file off the excess material.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupTag/en&oldid=1387375>"
