---
title: Image Workbench
---

:::caution
TheImage Workbenchis no longer included after version 0.20.Its functionality has been integrated inStd Base. SeeStd ImportandStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

Image workbench icon

## Introduction

The ![](/images/Workbench_Image.svg) [Image Workbench](/Image_Workbench "Image Workbench") manages different types of [bitmap](/Bitmap "Bitmap") images, and allows you to open them in FreeCAD.

## Tools

- ![](/images/Image_Open.svg) [Open...](/Image_Open "Image Open"): open an image on a new viewport.
- ![](/images/Image_CreateImagePlane.svg) [Create image plane...](/Image_CreateImagePlane "Image CreateImagePlane"): import an image to a plane in the 3D view.
- ![](/images/Image_Scaling.svg) [Scale image plane](/Image_Scaling "Image Scaling"): scale an image imported to a plane.

## Features

- Like a [Sketch](/Sketcher_Workbench "Sketcher Workbench"), an imported image can be attached to one of the main planes XY, XZ, or YZ, and given a positive or negative offset.
- The image is imported with relation of 1 pixel to 1 millimeter.
- The recommendation is to have the imported image at a reasonable resolution.

## Workflow

A major use of this workbench is tracing over the image, with the [Draft](/Draft_Workbench "Draft Workbench") or [Sketcher](/Sketcher_Workbench "Sketcher Workbench") tools, in order to generate a solid body based on the contours of the image.

Tracing over an image works best if the image has a small negative offset, for example, -0.1 mm, from the working plane. This means that the image will be slightly behind the plane where you draw your 2D geometry, so you won't draw on the image itself.

The offset of the image can be set during import, or changed later through its properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/en&oldid=1295074>"
