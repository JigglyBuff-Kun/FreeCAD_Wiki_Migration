---
title: FEM Filtre d'écrêtage scalaire
---
|  |
| --- |
| FEM Filtre d'écrêtage scalaire |
| Emplacement du menu |
| Résultats → Filtre d'écrêtage scalaire |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

Filtre un champ en utilisant une valeur scalaire spécifiée.

![](/images/FEM_Scalar-Clip-Filter-Example.png)

*Un résultat de Filtre d'écrêtage scalaire.  
Le pipeline original est l'objet semi-transparent.*

Un filtre scalaire peut être combiné avec d'autres filtres. Voici par exemple un filtre scalaire sur un [filtre des déformations](/FEM_PostFilterWarp/fr "FEM PostFilterWarp/fr") (semi-transparent) :

![](/images/FEM_Scalar-Clip-Filter-On-Warp-Example.png)

## Utilisation

1. Sélectionnez un [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") précédemment créé ou un autre filtre existant.
2. Lancez la commande soit en :
   * Appuyant sur le bouton ![](/images/FEM_PostFilterClipScalar.svg) **Filtre d'écrêtage scalaire**.
   * Utilisation du menu **Résultats → ![](/images/FEM_PostFilterClipScalar.svg) Filtre d'écrêtage scalaire**.
3. Ajustez les options d'affichage de **Résultats** comme pour le [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Masquez ce pipeline pour voir l'effet d'un Filtre d'écrêtage scalaire.
4. Sélectionnez le type **Scalaire** dans la liste déroulante.
5. Spécifiez la valeur **Filtre scalaire** directement ou utilisez le curseur.
6. Par défaut, toutes les régions dont la valeur du champ est inférieure à la valeur spécifiée seront masquées. Sélectionnez l'option **Inverser l'écrêtage** pour inverser l'affichage et masquer les régions dont la valeur est supérieure à la valeur spécifiée.
7. Cliquez sur le bouton OK pour terminer la commande.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterClipScalar/fr&oldid=1569246>"