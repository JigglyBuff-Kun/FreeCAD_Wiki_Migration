---
title: FEM Charge d'effort
---
|  |
| --- |
| FEM Charge d'effort |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Charge d'effort |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

Cette commande applique une force d'une valeur donnée [N] à la géométrie sélectionnée.

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/FEM_ConstraintForce.svg) Charge d'effort.
   * Sélectionner l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintForce.svg) Charge d'effort** du menu.
2. L'objet Mesh sera automatiquement caché et laissera apparaître le modèle original. Si l'objet Mesh est toujours visible, effectuer l'une des opérations suivantes pour le masquer :
   * Sélectionner l'objet Mesh dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et appuyez sur la barre d'espace.
   * Cliquer avec le bouton droit de la souris sur l'objet Mesh dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionner **Cacher l'élément** dans son menu contextuel.
3. La fenêtre de dialogue **Paramètres des fonctions d'analyse** dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") est également ouverte.
4. Appuyer sur le bouton Ajouter et sélectionnez une ou plusieurs *faces*, *arêtes* ou *sommets* dans la [vue 3D](/3D_view/fr "3D view/fr") pour appliquer la force. Les éléments sélectionnés apparaîtront dans la liste des objets géométriques.
5. Vous pouvez également appuyer sur le bouton Supprimer et désélectionner un ou plusieurs des éléments sélectionnés dans la [vue 3D](/3D_view/fr "3D view/fr"). Les éléments désélectionnés seront supprimés de la liste des objets géométriques.
6. Spécifier la valeur de la **Force** en [N].
7. Vous pouvez sélectionner une face ou une arête et appuyez sur le bouton Direction pour modifier la direction de la force. Dans un cas typique, vous laisserez ce champ vide pour appliquer la force dans la direction normale.
8. Vous pouvez cocher la case **Inverser la direction** pour inverser la direction de la force.
9. Cliquer sur OK pour terminer.

![](/images/FEM_ConstraintForce_example.JPG)

## Remarques

* La force définie est appliquée uniformément aux objets sélectionnés. Par exemple, si vous définissez une charge de force de 200 N appliquée à deux faces ayant la même surface, chaque face sera chargée uniformément de 100 N.
* Cette fonction utilise le [jeu de paramètres \*CLOAD de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node172.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintForce/fr&oldid=1496216>"