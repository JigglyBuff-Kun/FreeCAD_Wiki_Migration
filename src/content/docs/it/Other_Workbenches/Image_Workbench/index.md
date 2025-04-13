---
title: Ambiente Image
---

:::caution
L'Ambiente Imagenon è più incluso dopo la versione 0.20.La sua funzionalità è stata integrata inMenu di base. VedereImportaeStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

L'icona dell'ambiente Image

## Introduzione

L'Ambiente Image ![](/images/Workbench_Image.svg) gestisce diversi tipi di immagini [bitmap](/Bitmap/it "Bitmap/it"), e permette di aprirle in FreeCAD.

## Strumenti

- ![](/images/Image_Open.svg) [Apri...](/Image_Open/it "Image Open/it"): apre un'immagine in una nuova finestra.
- ![](/images/Image_CreateImagePlane.svg) [Importa immagine...](/Image_CreateImagePlane/it "Image CreateImagePlane/it"): importa un'immagine su un piano nella vista 3D.
- ![](/images/Image_Scaling.svg) [Scala](/Image_Scaling/it "Image Scaling/it"): ridimensiona un'immagine importata su un piano.

## Funzioni

- Come avviene con uno [Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it"), un'immagine importata può essere collegata a uno dei piani principali XY, XZ o YZ e viene fornito un offset positivo o negativo.
- L'immagine viene importata con una relazione di 1 pixel in 1 millimetro.
- La raccomandazione è di importare un'immagine con una risoluzione ragionevole.

## Flusso di lavoro

Un uso importante di questo ambiente è il tracciamento sull'immagine, con gli strumenti di [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), per generare un corpo solido basato sui contorni dell'immagine.

Tracciare su un'immagine funziona meglio se l'immagine ha un piccolo offset negativo, ad esempio di -0,1 mm, dal piano di lavoro. Ciò significa che l'immagine è leggermente dietro al piano in cui si disegna la geometria 2D, in modo da non disegnare sull'immagine stessa.

L'offset dell'immagine può essere impostato durante l'importazione o modificato successivamente attraverso le sue proprietà.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/it&oldid=1260814>"
