---
title: FEM Filtre d'écrêtage selon une région
---
|  |
| --- |
| FEM Filtre d'écrêtage selon une région |
| Emplacement du menu |
| Résultats → Filtre d'écrêtage selon une région |
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

Filtre un champ à l'aide d'une sphère ou d'un plan coupant le modèle.

![](/images/FEM_Region-Cut-Filter-Example.png)

*Un filtre d'écrêtage selon une région avec une sphère comme fonction de découpe.  
Le pipeline original est l'objet semi-transparent.*

## Utilisation

1. Sélectionnez un [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") précédemment créé.
2. Lancez la commande soit en :
   * Appuyant sur le bouton ![](/images/FEM_PostFilterClipRegion.svg) **Filtre de découpe selon une région**.
   * Sélectionnez l'option **Résultats → ![](/images/FEM_PostFilterClipRegion.svg) Filtre de découpe selon une région** dans le menu.
3. Ajustez les **Options d'affichage des résultats** comme pour le [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Vous devrez peut-être masquer le pipeline pour voir l'effet du filtre dans l'aperçu.
4. Ou
   * S'il n'y a pas encore de [fonction de filtre](/FEM_PostCreateFunctions/fr "FEM PostCreateFunctions/fr") définie, appuyez sur le bouton ![](/images/List-add.svg) Créer et sélectionnez **![](/images/FEM_PostCreateFunctionPlane.svg) Plan** ou **![](/images/FEM_PostCreateFunctionSphere.svg) Sphère**
   * Choisissez une fonction de filtrage existante dans la liste. Si nécessaire, ajustez les paramètres de coupe pour vous assurer qu'elle intersecte le modèle. Notez que les paramètres de coupe modifiés changeront également les paramètres de la fonction de filtre utilisée.
5. Le modèle sera coupé à l'aide de la fonction de filtrage. Sélectionnez l'option **Inverser** pour inverser la coupe. Sélectionnez l'option **Couper des cellules** pour lisser la région découpée en éliminant les parties des éléments finis qui dépassent.
6. Cliquez sur le bouton OK pour terminer la commande.

**Remarque** : un **Champ** ne peut être défini que si une fonction de filtre existe et a été appliquée avec ![](/images/FEM_PostApplyChanges.svg) [Appliquer les modifications](/FEM_PostApplyChanges/fr "FEM PostApplyChanges/fr"). Alternativement vous pouvez rouvrir la boîte de dialogue du filtre.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterClipRegion/fr&oldid=1569264>"