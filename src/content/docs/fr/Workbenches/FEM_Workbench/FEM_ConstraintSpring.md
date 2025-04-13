---
title: FEM Ressort
---
|  |
| --- |
| FEM Ressort |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Ressort |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| *Aucun* |
|  |

| Solveurs |
| --- |
| Elmer |

## Description

Définit une condition limite de ressort à utiliser pour les analyses mécaniques à l'aide du ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr").

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : la contrainte de ressort peut être utilisée pour les équations de ![](/images/FEM_EquationDeformation.svg) [Déformation](/FEM_EquationDeformation/fr "FEM EquationDeformation/fr") et d'![](/images/FEM_EquationElasticity.svg) [Elasticité](/FEM_EquationElasticity/fr "FEM EquationElasticity/fr").

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintSpring.svg) Ressort.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintSpring.svg) Ressort** du menu.
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez les faces auxquelles le ressort doit être appliqué. Pour supprimer des faces de la sélection, appuyez sur le bouton Supprimer et cliquez dessus.
4. Spécifiez la rigidité normale ou tangentielle (en N/m) et sélectionnez celle qu'Elmer doit utiliser.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSpring/fr&oldid=1569628>"