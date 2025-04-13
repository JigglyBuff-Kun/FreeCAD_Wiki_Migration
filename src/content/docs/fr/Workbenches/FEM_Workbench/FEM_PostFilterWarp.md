---
title: FEM Filtre des déformations
---
|  |
| --- |
| FEM Filtre des déformations |
| Emplacement du menu |
| Résultats → Filtre des déformations |
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

Affiche la forme déformée du modèle en utilisant un facteur d'échelle spécifié. Par conséquent, un filtre des déformations n'a d'effet que pour les vecteurs de résultat qui déforment la forme.

Le résultat sera le même qu'avec le curseur *Déplacement* de la fenêtre de dialogue d'[Afficher les résultats](/FEM_ResultShow/fr "FEM ResultShow/fr") avec la différence que le déplacement est pour le filtre des déformations dans l'unité de mesure SI. Par exemple, si vous utilisez un [système d'unités](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr") où l'unité de longueur est le mm et que vous définissez un facteur de déplacement de 100 dans le dialogue d'[Afficher les résultats](/FEM_ResultShow/fr "FEM ResultShow/fr"), vous devez définir pour le filtre des déformations un facteur de 100.000 pour obtenir le même résultat.

![](/images/FEM_Warp-Filter-Example.gif)

*Un filtre des déformations du déplacement d'une poutre immobilisée d'un côté.*

## Utilisation

1. Sélectionnez un [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") précédemment créé.
2. Lancez la commande soit en :
   * Appuyant sur le bouton ![](/images/FEM_PostFilterWarp.svg) **Filtre des déformations**.
   * Utiliser le menu **Résultats → ![](/images/FEM_PostFilterWarp.svg) Filtre des déformations**.
3. Ajustez les **Résultats** options d'affichage comme pour le [Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Masquez ce pipeline pour voir l'effet d'un filtre des déformations.
4. Spécifiez directement le **Facteur de déformation** ou utilisez le curseur pour le définir. Les champs **Déformation mini** et **Déformation max** vous permettent de régler la plage du curseur.
5. Cliquez sur le bouton OK pour terminer la commande.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterWarp/fr&oldid=1569235>"