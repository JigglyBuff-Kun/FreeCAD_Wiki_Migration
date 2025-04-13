---
title: FEM Contrainte multi-points selon un plan
---
|  |
| --- |
| FEM Contrainte multi-points selon un plan |
| Emplacement du menu |
| Modèle → Fonctions d'analyse géométrique → Contrainte multi-points selon un plan |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Système de coordonnées locales](/FEM_ConstraintTransform/fr "FEM ConstraintTransform/fr") |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

Crée une contrainte FEM multipoints pour maintenir les nœuds d'une surface plane sur le même plan.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/FEM_ConstraintPlaneRotation.svg) Contrainte multi-points selon un plan.
   * Sélectionner l'option **Modèle → Fonctions d'analyse géométrique → ![](/images/FEM_ConstraintPlaneRotation.svg) Contrainte multi-points selon un plan** du menu.
2. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionner l'objet auquel la contrainte multi-points doit être appliquée, qui ne peut être qu'une seule face.
3. Appuyez sur le bouton Ajouter.

![](/images/FEM_plane_rotation_constraint_example.PNG)

Exemple d'utilisation d'une contrainte multi-points selon un plan. Les deux poutres simplement soutenues sont soumises à la même force, mais le segment vert de la face supérieure de la poutre inférieure est soumis à une contrainte multi-points selon un plan. Cela oblige les nœuds à rester sur le même plan et modifie la déformation (ici mise à l'échelle).

## Limitations

1. La contrainte multi-points selon un plan ne peut être appliquée qu'à une seule face plane.
2. Lorsqu'une contrainte multi-points selon un plan est appliquée à la même face qu'une condition de limite de déplacement/fixe, la condition de limite de déplacement/fixe est prioritaire.

## Remarques

* Cette fonction utilise le [jeu de paramètres \*MPC de CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node220.html) (MPC pour multi-point constraint).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPlaneRotation/fr&oldid=1541819>"