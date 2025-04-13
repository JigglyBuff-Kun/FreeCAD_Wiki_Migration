---
title: FEM Matériau renforcé
---
|  |
| --- |
| FEM Matériau renforcé |
| Emplacement du menu |
| Modèle → Matériaux → Matériau renforcé (type béton) |
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
| CalculiX |

## Description

Crée un matériau matriciel renforcé. Il combine un matériau de matrice (par exemple le béton) et un matériau de renfort (par exemple l'acier).

![](/images/FEM_reinforced_material_task_panel.PNG)

Le panneau des tâches FEM pour les matériaux renforcés

## Utilisation

1. Pour créer un nouvel objet Matériau renforcé, procédez comme suit :
   * Cliquez sur le ![](/images/FEM_MaterialReinforced.svg) Matériau renforcé (type béton) ou choisissez l'option **Modèle → Matériaux → ![](/images/FEM_MaterialReinforced.svg) Matériau renforcé (type béton)** du menu.
2. Pour modifier un objet Matériau renforcé existant :
   * Double-cliquez sur l'objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Sélectionnez le *Composite à matrice métallique* dans la liste déroulante.
4. Vous pouvez appuyer sur le bouton Lancer l'éditeur pour accéder à l'[éditeur de matériaux](/Material_Edit/fr "Material Edit/fr"). Les propriétés suivantes du matériau doivent être définies : Module de Young, coefficient de Poisson, résistance à la compression et angle de frottement.
5. Sélectionnez *Matériau de renfort* dans la liste déroulante.
6. Vous pouvez appuyer sur le bouton Lancer l'éditeur pour accéder à l'[éditeur de matériaux](/Material_Edit/fr "Material Edit/fr"). Une limite d'élasticité doit être définie.

## Remarques

* Dans les paramètres du solveur CalculiX, il faut régler la non-linéarité du matériau sur linéaire si [FEM Matériau mécanique non linéaire](/FEM_MaterialMechanicalNonlinear/fr "FEM MaterialMechanicalNonlinear/fr") n'est pas utilisé.
* Plus d'informations sur cette fonctionnalité, et un exemple de son utilisation, peuvent être trouvés sur la page [FEM Analyse du béton armé](/Analysis_of_reinforced_concrete_with_FEM/fr "Analysis of reinforced concrete with FEM/fr").
* Pour un tutoriel vidéo (basé sur le [tutoriel FEM](/FEM_tutorial/fr "FEM tutorial/fr")) qui utilise cet outil, regardez : [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialReinforced/fr&oldid=1571124>"