---
title: FEM Matériau mécanique non linéaire
---
|  |
| --- |
| FEM Matériau mécanique non linéaire |
| Emplacement du menu |
| Modèle → Matériaux → Matériau mécanique non linéaire |
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

Crée un matériau mécanique non linéaire. Actuellement, seule la plasticité avec un durcissement simple (isotrope) est disponible. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'écrouissage cinématique est également disponible.

## Utilisation

1. Pour créer un objet matériau mécanique non linéaire, procédez comme suit :
   * Ajouter d'abord un ![](/images/FEM_MaterialSolid.svg) [Matériau pour solide](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr") et sélectionnez-le.
   * Cliquer sur le bouton ![](/images/FEM_MaterialMechanicalNonlinear.svg) Matériau mécanique non linéaire ou choisissez l'option **Modèle → Matériaux → ![](/images/FEM_MaterialMechanicalNonlinear.svg) Matériau mécanique non linéaire** dans le menu.
2. Pour modifier un objet Matériau mécanique non linéaire existant :
   * Sélectionner le dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Sélectionner le modèle de matériau (durcissement isotrope (simple) ou [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : écrouissage cinématique).
   * Définir les limites d'élasticité (contrainte [MPa] en fonction de la déformation plastique). Le premier point doit avoir une déformation plastique nulle. Appuyez sur le bouton ... à côté de Données**Yield Points** pour saisir les points à l'aide d'une liste intuitive. La syntaxe est décrite dans la section [Remarques](##Remarques).

## Remarques

* Dans FreeCAD 0.19 et les versions antérieures, seules 3 points de contrôle peuvent être spécifiés. Depuis la version 0.20, une liste de points de contrôle peut contenir autant de points de contrôle que nécessaire.
* La syntaxe devrait être :

:   ```
    stress_1, 0
    stress_2, plastic_strain_2
    ...

    ```

:   Avec le point comme séparateur décimal puisque c'est ce qu'utilise CalculiX.

:   Par exemple pour définir un modèle bilinéaire avec trempe pour l'acier S275 :

:   ```
    275, 0
    490, 0.2

    ```

:   Ou, pour définir une plasticité parfaite sans durcissement pour ce matériau :

:   ```
    275, 0

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialMechanicalNonlinear/fr&oldid=1569405>"