---
title: Ambiente de trabajo Imagen
---

:::caution
TheImage Workbenchis no longer included after version 0.20.Its functionality has been integrated inStd Base. SeeStd ImportandStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

El icono del Ambiente de trabajo Imagen

## Introducción

El ![](/images/Workbench_Image.svg) Ambiente de trabajo Imagen gestiona diferentes tipos de imágenes [bitmap](/index.php?title=Bitmap/es&action=edit&redlink=1 "Bitmap/es (page does not exist)"), y te permite abrirlas en FreeCAD.

## Herramientas

- ![](/images/Image_Open.svg) [Abrir](/Image_Open/es "Image Open/es"): abrir una imagen en un nuevo viewport.
- ![](/images/Image-import-to-plane.svg) [Importar al plano](/Image_CreateImagePlane/es "Image CreateImagePlane/es"): importar una imagen a un plano en la vista 3D.
- ![](/images/Image-scale.svg) [Escalar](/index.php?title=Image_Scaling/es&action=edit&redlink=1 "Image Scaling/es (page does not exist)"): escalar una imagen importada a un plano.

## Características

- Como un [Boceto](/Sketcher_Workbench/es "Sketcher Workbench/es"), una imagen importada puede ser adjuntada a uno de los planos principales XY, XZ, o YZ, y se le da un desplazamiento positivo o negativo.
- La imagen se importa con relación de 1 píxel a 1 milímetro.
- La recomendación es que la imagen importada tenga una resolución razonable.

## Workflow

## Flujo de trabajo

Un uso principal de este ambientes de trabajo es trazar sobre la imagen, con las herramientas [Borrador](/Draft_Workbench/es "Draft Workbench/es") o [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es"), para generar un cuerpo sólido basado en los contornos de la imagen.

Trazar sobre una imagen funciona mejor si la imagen tiene un pequeño relleno negativo, por ejemplo, -0,1 mm, desde el plano de trabajo. Esto significa que la imagen estará ligeramente por detrás del plano donde dibujas tu geometría 2D, por lo que no dibujarás sobre la propia imagen.

El relleno de la imagen puede establecerse durante la importación, o modificarse posteriormente a través de sus propiedades.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/es&oldid=1295078>"
