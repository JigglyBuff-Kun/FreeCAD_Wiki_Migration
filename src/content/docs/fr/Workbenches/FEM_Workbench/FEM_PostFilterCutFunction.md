---
title: FEM Filtre de découpe selon une fonction
---
|  |
| --- |
| FEM Filtre de fonction de découpe |
| Emplacement du menu |
| Résultats → Filtre de fonction de découpe |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"), [FEM Fonctions de filtrage](/FEM_PostCreateFunctions/fr "FEM PostCreateFunctions/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

Affiche les résultats sur une sphère ou un plan traversant le modèle.

![](/images/FEM_Function-Cut-Filter-Example.png)

*Un filtre de fonction de découpe avec une sphère comme fonction de découpe.  
Le pipeline original est l'objet semi-transparent.*

## Utilisation

1. Sélectionnez un [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") précédemment créé.
2. Lancez la commande soit en :
   * Appuyant sur le bouton ![](/images/FEM_PostFilterCutFunction.svg) **Filtre de fonction de découpe**.
   * Utilisation du menu **Résultats → ![](/images/FEM_PostFilterCutFunction.svg) Filtre de fonction de découpe**.
3. Ajustez les options d'affichage de **Résultats** comme pour le pipeline [result](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). Vous devrez peut-être masquer le pipeline pour voir l'effet du filtre dans l'aperçu.
4. Soit
   * S'il n'y a pas encore de [fonction de filtre](/FEM_PostCreateFunctions/fr "FEM PostCreateFunctions/fr") définie, appuyez sur le bouton ![](/images/List-add.svg) Créer et sélectionnez **![](/images/FEM_PostCreateFunctionPlane.svg) Plan** ou **![](/images/FEM_PostCreateFunctionSphere.svg) Sphère**
   * Choisissez une fonction de filtrage existante dans la liste. Si nécessaire, ajustez les paramètres de coupe pour vous assurer qu'elle intersecte le modèle. Notez que les paramètres de coupe modifiés changeront également les paramètres de la fonction de filtrage utilisée.
5. Les résultats seront affichés sur la surface de la fonction de filtrage.
6. Cliquez sur le bouton OK pour terminer la commande.

**Remarque** : un **Champ** ne peut être défini que si une fonction de filtre existe et a été appliquée avec ![](/images/FEM_PostApplyChanges.svg) [Appliquer les modifications](/FEM_PostApplyChanges/fr "FEM PostApplyChanges/fr"). Alternativement vous pouvez rouvrir la boîte de dialogue du filtre.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterCutFunction/fr&oldid=1569256>"