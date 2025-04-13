---
title: FEM Condition de limite fixe
---
|  |
| --- |
| FEM Condition de limite fixe |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Condition de limite fixe |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Contrainte de contact](/FEM_ConstraintContact/fr "FEM ConstraintContact/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

Crée une condition limite FEM pour une entité géométrique fixe en verrouillant tous les degrés de liberté disponibles des nœuds sous-jacents à l'entité géométrique sélectionnée (6 degrés de liberté pour les éléments poutre et coque, 3 pour les éléments solides).

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintFixed.svg) Condition de limite fixe.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintFixed.svg) Condition de limite fixe** du menu.
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez l'objet auquel la condition de limite doit être appliquée, qui peut être un sommet, une arête ou une face (mais tous les objets doivent être du même type). Pour supprimer des objets de la sélection, appuyez sur le bouton Supprimer et cliquez dessus.

## Limitations

Vous ne pouvez pas mélanger les objets dans la même condition limite. Utilisez une condition limite pour chaque type d'objet.

## Remarques

* Cette fonction utilise le [jeu de paramètres \*BOUNDARY de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFixed/fr&oldid=1543560>"