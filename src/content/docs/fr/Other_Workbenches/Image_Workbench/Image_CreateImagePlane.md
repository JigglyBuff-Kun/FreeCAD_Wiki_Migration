---
title: Image Créer un plan d'image
---
|  |
| --- |
| Image Créer un plan d'image |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [Image](/Image_Workbench/fr "Image Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Image Ouvrir](/Image_Open/fr "Image Open/fr"), [Image Redimensionner une image](/Image_Scaling/fr "Image Scaling/fr") |
|  |

## Description

L'outil Créer un plan d'image importe une image [bitmap](/Bitmap/fr "Bitmap/fr") et la place sur l'un des plans XY, YZ ou XZ.

## Utilisation

1. Appuyez sur le bouton ![](/images/Image_CreateImagePlane.svg) Créer un plan d'image....
2. Sélectionnez l'image souhaitée dans votre système.
3. Choisissez le plan dans lequel l'image sera placée, indiquez une valeur de décalage puis appuyez sur OK.

L'objet ImagePlane résultant utilise le rapport de 1 pixel pour 1 millimètre. Pour que l’image s’affiche bien, elle doit avoir une résolution suffisante.

Lors de l'importation de l'image, vous pouvez ajouter un décalage de `-0,1 mm` afin de placer l'image légèrement derrière le plan de travail. Cela facilitera le traçage de l'image avec les outils de l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou de l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

Si aucun décalage n'est initialement attribué à l'image, sa position peut toujours être ajustée dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

Base

* Données**Position** : spécifie les coordonnées du point de base du plan image.
* Données**Angle** : spécifie l'angle de rotation du plan image.
* Données**Axis** : spécifie l'axe utilisé pour l'angle de rotation.

Image Plane

* Données**Image File** : spécifie l'image à utiliser pour ce plan.
* Données**XSize** : spécifie la largeur du plan de l'image.
* Données**YSize** : spécifie la hauteur du plan de l'image.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_CreateImagePlane/fr&oldid=1223588>"