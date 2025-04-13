---
title: FEM Plan de coupe
---
|  |
| --- |
| FEM Plan de coupe |
| Emplacement du menu |
| Utilitaires → Plan de coupe |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

Ajoute un plan de coupe pour l'ensemble de la vue du modèle. Tous les objets visibles seront coupés par ce plan, qu'il s'agisse de modèles géométriques, de maillages ou de pipelines de résultats.

Le plan de coupe est le même que celui que vous obtenez en utilisant la fonction [Std Couper selon des plans](/Std_ToggleClipPlane/fr "Std ToggleClipPlane/fr"), à la différence que le plan de coupe est persistant. Il partage donc la même fonctionnalité qui consiste à ne fournir que des coupes creuses.

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ClippingPlaneAdd.svg) Plan de coupe.
   * Sélectionnez l'option **Utilitaires → ![](/images/FEM_ClippingPlaneAdd.svg) Plan de coupe** du menu.

Il est possible d'avoir plusieurs plans de coupes.

Bien que le plan soit persistant, il n'apparaîtra pas dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Le plan apparaît dans la vue du modèle comme ceci :

![](/images/FEM_Clipping-Plane-Example.png)

Pour déplacer le plan, cliquez sur le gros cube blanc qui est perpendiculaire au plan et maintenez le bouton de la souris enfoncé pendant le déplacement de la souris.

Pour faire pivoter et incliner le plan, cliquez sur une ligne qui relie les petits cubes au grand cube blanc et maintenez le bouton de la souris enfoncé pendant le déplacement de la souris.

Cliquez sur Ctrl pour passer d'une direction d'écrêtage à l'autre.

Les 6 petits cubes sont des poignées pour ajuster la taille. Cependant, comme l'objet est un plan infini, la taille n'a pas d'importance.

Pour supprimer tous les plans de coupe, utilisez la fonction [Supprimer les plans de coupe](/FEM_ClippingPlaneRemoveAll/fr "FEM ClippingPlaneRemoveAll/fr"). La suppression d'un seul plan n'est pas possible.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ClippingPlaneAdd/fr&oldid=1569608>"