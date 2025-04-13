---
title: FEM Appliquer les modifications
---
|  |
| --- |
| FEM Appliquer les modifications |
| Emplacement du menu |
| Résultats → Appliquer les modifications au pipeline |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr"), [FEM Fonctions de filtrage](/FEM_PostCreateFunctions/fr "FEM PostCreateFunctions/fr") |
|  |

## Description

Permet d'indiquer si les modifications apportées aux pipelines et aux filtres sont appliquées immédiatement ou non.

Si la fonction est active, les modifications apportées aux [fonctions de filtrage](/FEM_PostCreateFunctions/fr "FEM PostCreateFunctions/fr") et aux filtres ont un effet immédiat. Cependant, pour les grands maillages de résultats, cela peut ralentir le PC de manière significative.

Si la fonction n'est pas active, un changement de la taille et de la position des fonctions aura d'abord un effet après avoir recompilé l'objet fonction (voir [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr")). Pour les modifications des filtres, la modification aura d'abord un effet lorsque vous appuierez dans le menu du dialogue du filtre sur le bouton Appliquer ou en recompilant l'objet filtre.

## Utilisation

Cliquez sur le bouton de la barre d'outils ![](/images/FEM_PostApplyChanges.svg) **Appliquer les modifications au pipeline** ou utilisez le menu **Résultats → ![](/images/FEM_PostApplyChanges.svg) Appliquer les modifications au pipeline**.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostApplyChanges/fr&oldid=1569215>"