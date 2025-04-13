---
title: FEM Matériau pour solide
---
|  |
| --- |
| FEM Matériau pour solide |
| Emplacement du menu |
| Modèle → Matériaux → Matériau pour solide |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| M S |
| Introduit dans la version |
| - |
| Voir aussi |
| [Tutoriel FEM](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

Crée un matériau pour le solide.

![](/images/FEMMaterialSolidProperties.png)

Le panneau des tâches des matériaux FEM

## Utilisation

1. Pour créer un nouvel objet MaterialSolid, effectuez l'une des opérations suivantes :
   * Appuyez sur le bouton ![](/images/FEM_MaterialSolid.svg) Matériau pour le solide.
   * Sélectionnez l'option **Modèle → Matériaux → ![](/images/FEM_MaterialSolid.svg) Matériau pour le solide** du menu.
2. Pour modifier un objet MaterialSolid existant :
   * Double-cliquez dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Le panneau des tâches de matériau FEM s'ouvre.
4. Sélectionnez un matériau dans la liste déroulante. Par exemple, pour l'analyse mécanique, *CalculiX-Steel* est une option courante. Vous pouvez également appuyer sur le bouton Lancer l'éditeur pour accéder à l'[éditeur de matériaux](/Material_Edit/fr "Material Edit/fr").
5. Vous pouvez également cliquer sur le bouton Utiliser ce panneau de tâches pour modifier les propriétés du matériau telles que la densité, le module de Young, le coefficient de Poisson, etc.
6. Si vous appliquez le matériau à l'ensemble de l'objet, ne sélectionnez aucune entité géométrique (laissez la liste de référence vide). Le matériau sera appliqué à l'ensemble du modèle. Sinon, attribuez manuellement le matériau aux régions sélectionnées en sélectionnant certaines d'entre elles pour chaque matériau inséré, mais ne laissez aucune partie du modèle sans matériau attribué.
7. Cliquez sur le bouton Fermer pour fermer le panneau des tâches.

## Remarques

* Le matériau mécanique utilise le [jeu de paramètres \*MATERIAL de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node216.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialSolid/fr&oldid=1571115>"