---
title: Bancada de trabalho Imagem
---

:::caution
TheImage Workbenchis no longer included after version 0.20.Its functionality has been integrated inStd Base. SeeStd ImportandStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

Ícone da bancada de trabalho de imagem

## Introdução

A ![](/images/Workbench_Image.svg) Bancada de trabalho Imagem controla diferentes tipos de imagens [bitmap](/Bitmap/pt-br "Bitmap/pt-br") e permite que você as abra no FreeCAD.

## Ferramentas

- ![](/images/Image-import.svg) [Abrir...](/Image_Open/pt-br "Image Open/pt-br"): abre uma imagem em uma nova janela de visualização.
- ![](/images/Image-import-to-plane.svg) [Criar plano de imagem...](/Image_CreateImagePlane/pt-br "Image CreateImagePlane/pt-br"): importa uma imagem para um plano na vista 3D.
- ![](/images/Image-scale.svg) [Redimensionar plano da imagem](/Image_Scaling/pt-br "Image Scaling/pt-br"): Altera a escala de uma imagem importada para um plano.

## Recursos

- Assim como a bancada [Sketch](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"), uma imagem importada por ser anexada a um dos principais planos XY, XZ ou YZ, e dado um deslocamento positivo ou negativo.
- A imagem é importada com uma relação de 1 pixel para 1 milímetro.
- A recomendação é ter a imagem importada em uma resolução razoável.

## Fluxo de trabalho

A maior utilização desta bancada de trabalho é fazer um traçado sobre a imagem, utilizando as ferramentas da bancada [Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br") ou [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"), com o intuito de gerar um sólido baseado nos contornos traçados na imagem.

Traçar uma imagem funciona melhor se a imagem tem um deslocamento negativo pequeno como, por exemplo, de -0.1 mm, a partir do plano de trabalho. Isto significa que a imagem estará levemente atrás do plano onde você desenha sua geometria 2D. Sendo assim, não desenhe na própria imagem.

O deslocamento da imagem pode ser configurado durante a importação ou alterada posteriormente por meio de suas propriedades.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/pt-br&oldid=1295211>"
