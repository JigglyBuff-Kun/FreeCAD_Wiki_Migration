---
title: CAM Attache
---
|  |
| --- |
| CAM Attache |
| Emplacement du menu |
| CAM → Finition du parcours → Attache |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [CAM Rampe d'entrée](/CAM_DressupRampEntry/fr "CAM DressupRampEntry/fr"), [CAM Dégagement d'angles](/CAM_DressupDogbone/fr "CAM DressupDogbone/fr") , [CAM Lame rotative](/CAM_DressupDragKnife/fr "CAM DressupDragKnife/fr") |
|  |

## Description

L'outil ![](/images/CAM_DressupTag.svg) Attache ajoute au parcours existant (généralement un parcours de découpe de contour 2D) un certains nombres d'attaches qui maintiennent la pièce en place. Sans elles, une partie (qui n'est pas fixée à la base) risque de s'envoler de manière incontrôlable lors de la coupe finale. Les attaches sont destinées à être cassées à la main (ou à l’aide d’un ciseau) puis ébarbées à la lime.

Une vidéo expliquant cette fonctionnalité est disponible à l'adresse suivante : <https://www.youtube.com/watch?v=JZ4prlR6sps>

## Utilisation

1. Sélectionnez un contour ou des objets parcours de profil.
2. Sélectionnez l'option **CAM → Finition du parcours → ![](/images/CAM_DressupTag.svg) Attache** du menu.

## Options

* **Angle** : contrôle l'angle de plongée et de remontée lors de la mise en caisse d'une attache.
* **Hauteur** : contrôle la hauteur du haut de l'attache par rapport au bas de la coupe du profil.
* **Rayon** : rayon du congé de l'attache.
* **Facteur de segmentation** : nombre de segments pour obtenir une attache arrondie.
* **Largeur** : largeur totale de l'attache.

Les attaches sont automatiquement générées à intervalles réguliers le long du contour, en commençant par le bord le plus grand. Vous avez la possibilité de supprimer celles que vous n'aimez pas ou de modifier leur emplacement afin qu'elles apparaissent sur les parties convexes du travail où il sera plus facile de limer la matière en excès.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupTag/fr&oldid=1388071>"