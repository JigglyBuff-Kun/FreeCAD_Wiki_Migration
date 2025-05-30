---
title: FEM Condition limite de température
---
|  |
| --- |
| FEM Condition limite de température |
| Emplacement du menu |
| Modèle → Conditions limites et charges thermiques → Condition limite de température |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Elmer |

## Description

Définit une condition limite de température ou, en option, une charge de flux thermique concentré.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintTemperature.svg) Condition limite de température.
   * Sélectionnez l'option **Modèle → Conditions limites et charges thermiques → ![](/images/FEM_ConstraintTemperature.svg) Condition limite de température**
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez les objets auxquels la condition limite doit être appliquée, qui peuvent être des sommets, des arêtes ou des faces. Vous pouvez également appuyer sur le bouton Supprimer et cliquez sur les objets que vous souhaitez supprimer de la sélection.
4. Choisissez le type de contrainte et spécifiez son paramètre :
   * *Temperature* (par défaut) : condition limite de température, entrez la *Température* (K),
   * *CFlux* : charge de flux de chaleur concentré, entrez le *Flux de chaleur concentré* (mW). Cette valeur sera divisée par le nombre de nœuds de l'entité géométrique sous-jacente pour obtenir un flux total d'une magnitude donnée sur cette entité.

## Remarques

* La condition limite de température utilise le [le jeu de paramètres \*BOUNDARY dans CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
* L'option **flux de chaleur concentré** utilise le [le jeu de paramètres \*CFLUX dans CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node168.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTemperature/fr&oldid=1532977>"