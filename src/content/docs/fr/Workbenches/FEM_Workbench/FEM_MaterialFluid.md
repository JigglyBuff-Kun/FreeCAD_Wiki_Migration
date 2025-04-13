---
title: FEM Matériau pour fluide
---
|  |
| --- |
| FEM Matériau pour fluide |
| Emplacement du menu |
| Modèle → Matériaux → Matériau pour fluide |
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

Crée un matériau pour le fluide.

![](/images/FEMMaterialFluidProperties.png)

Le panneau des tâches des matériaux FEM

## Utilisation

1. Pour créer un nouvel objet MaterialFluid, effectuez l'une des opérations suivantes :
   * Appuyez sur le bouton ![](/images/FEM_MaterialFluid.svg) Matériau pour fluide.
   * Sélectionnez l'option **Modèle → Matériaux → ![](/images/FEM_MaterialFluid.svg) Matériau pour fluide** du menu.
2. Pour modifier un objet MaterialFluid existant :
   * Double-cliquez dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Le panneau des tâches de matériau FEM s'ouvre.
4. Sélectionnez un type de fluide dans la liste déroulante. Pour la dynamique des fluides numérique (CFD), *Air* ou *Water* sont des options courantes. Vous pouvez également appuyer sur le bouton Lancer l'éditeur pour accéder à l'[éditeur de matériaux](/Material_Edit/fr "Material Edit/fr").
5. Vous pouvez également cliquer sur le bouton Utiliser ce panneau de tâches pour modifier les propriétés telles que la densité, la viscosité cinématique, la conductivité thermique, etc.
6. Si vous appliquez le fluide à l'ensemble de l'objet, ne sélectionnez aucune entité géométrique (laissez la liste de référence vide). Le fluide sera appliqué à l'ensemble du modèle. Sinon, attribuez manuellement le fluide à des domaines particuliers du modèle en sélectionnant certains d'entre eux pour chaque matériau inséré. Si vous faites cela, ne laissez aucun domaine de votre modèle sans fluide attribué.
7. Appuyez sur le bouton Fermer pour fermer le panneau des tâches.

## Notes

* To edit an existing MaterialFluid object: Double-click it in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialFluid/fr&oldid=1571095>"