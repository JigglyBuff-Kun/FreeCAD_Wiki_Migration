---
title: Atelier Image
---

:::caution
L'atelier Imagen'est plus inclus après la version 0.20.Ses fonctionnalités ont été intégrées dansStd Base. VoirStd ImporteretStd Charger une image.
:::
![](/images/Workbench_Image.svg)

Icône de l'atelier Image

## Introduction

L'![](/images/Workbench_Image.svg) Atelier Image gère différents formats de [bitmap](/Bitmap/fr "Bitmap/fr") et vous permet de les ouvrir dans FreeCAD.

## Outils

- ![](/images/Image_Open.svg) [Ouvrir...](/Image_Open/fr "Image Open/fr"): ouvrir une image dans une nouvelle fenêtre.
- ![](/images/Image_CreateImagePlane.svg) [Créer un plan d'image](/Image_CreateImagePlane/fr "Image CreateImagePlane/fr"): importer une image sur un plan dans la vue 3D.
- ![](/images/Image_Scaling.svg) [Redimensionner une image](/Image_Scaling/fr "Image Scaling/fr"): redimensionner une image importée dans un plan.

## Fonctionnalités

- Comme une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), une image importée peut être attachée à l'un des plans principaux XY, XZ ou YZ et recevoir un décalage positif ou négatif.
- L'image est importée avec une relation de 1 pixel égal 1 millimètre.
- Nous vous recommandons d'importer une image dans une résolution raisonnable.

## Processus de travail

L'utilisation la plus courante de cet atelier est le traçage sur l'image, avec les outils de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou de [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), afin de générer un corps solide basé sur les contours de l'image.

Le traçage sur une image donne de meilleurs résultats si l’image présente un petit décalage négatif, par exemple -0,1 mm par rapport au plan de travail. Cela signifie que l'image sera légèrement derrière le plan où vous dessinez votre géométrie 2D, de sorte que vous ne dessinez pas sur l'image elle-même.

Le décalage de l'image peut être défini lors de l'importation ou modifié ultérieurement via ses propriétés.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/fr&oldid=1260805>"
