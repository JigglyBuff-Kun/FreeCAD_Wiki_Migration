---
title: Importar para o plano
---
|  |
| --- |
| Image CreateImagePlane |
| Menu location |
| *None* |
| Workbenches |
| [Image](/Image_Workbench "Image Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Image Open](/Image_Open "Image Open"), [Image Scaling](/Image_Scaling "Image Scaling") |
|  |

## Descrição

The [CreateImagePlane](/Image_CreateImagePlane "Image CreateImagePlane") tool imports a [bitmap](/Bitmap "Bitmap") image and places it on one of the XY, YZ or XZ planes.

## Utilização

1. Press the ![](/images/Image_CreateImagePlane.svg) [Image CreateImagePlane](/Image_CreateImagePlane "Image CreateImagePlane") button.
2. Select the desired image in your system.
3. Choose the plane where the image will be placed, give an offset value, and press OK.

The resulting ImagePlane object uses the ratio of 1 pixel to 1 millimeter; in order for the image to display well, it should have enough resolution.

When importing the image, you may wish to add an offset of `-0.1 mm` in order to place the image slightly behind the working plane; this will make it easy to trace (draw on top) the image with the [Draft](/Draft_Workbench "Draft Workbench") or [Sketcher](/Sketcher_Workbench "Sketcher Workbench") tools.

If no offset is given to the image initially, its position can still be adjusted in the [property editor](/Property_editor "Property editor").

## Propriedades

Base

* Dados**Position**: specifies the coordinates of the base point of the image plane.
* Dados**Angle**: specifies the angle of rotation of the image plane.
* Dados**Axis**: specifies the axis used for the rotation angle.

Image Plane

* Dados**Image File**: specifies the image to use for this plane.
* Dados**XSize**: specifies the width of the image plane.
* Dados**YSize**: specifies the height of the image plane.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_CreateImagePlane/pt-br&oldid=1097242>"