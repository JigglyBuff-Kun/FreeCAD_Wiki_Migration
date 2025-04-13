---
title: FEM Solveur Z88
---
|  |
| --- |
| FEM Solveur Z88 |
| Emplacement du menu |
| Résolution → Solveur Z88 |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| S Z |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

La commande Solveur Z88 permet d'utiliser le solveur [Z88](https://en.wikipedia.org/wiki/Z88_FEM_software). Il peut être utilisé pour :

1. Définir les paramètres d'analyse
2. Sélectionner le répertoire de travail
3. Exécuter le solveur Z88

## Installation

Pour utiliser le solveur Z88, la version OpenSource de Z88 (Z88OS) doit être installée :

1. Téléchargez le fichier ZIP à partir du [site web Z88OS](https://en.z88.de/download-z88os).
2. Extraire le ZIP dans un dossier de votre choix.
3. Dans les [FEM Préférences](/FEM_Preferences/fr "FEM Preferences/fr"), allez dans l'onglet Z88 et définissez le chemin vers le binaire **z88r**. Si vous êtes sous Windows, ce sera le chemin vers le fichier z88r.exe qui se trouve dans le sous-dossier ~\bin\win64 du dossier où vous avez extrait le ZIP.

## Utilisation

1. Après la création d'un ![](/images/FEM_Analysis.svg) [conteneur d'analyse](/FEM_Analysis/fr "FEM Analysis/fr"), utilisez l'une des alternatives suivantes :
   * Sélectionnez **Résolution → ![](/images/FEM_SolverZ88.svg) Solveur Z88** dans le menu.
   * Appuyez sur les touches de raccourci S puis Z.
2. Double-cliquez sur l'objet ![](/images/FEM_SolverZ88.svg) SolverZ88.
3. Sélectionnez **Type d'analyse**.
4. Cliquez sur le bouton Écrire.
5. Cliquez sur le bouton Exécuter.

Pour résultat, vous obtenez un objet appelé *Z88\_xxx\_results* (selon la simulation exécutée) dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). C'est le même type d'objet de résultat que l'on obtient en exécutant le [solveur CalculiX](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr"). À partir de là, vous pouvez visualiser les résultats en utilisant les [pipelines des résultat](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") et les [filtres](/FEM_Workbench/fr#Menu_:_R.C3.A9sultats "FEM Workbench/fr").

## Préférences

Voir les [préférences de Z88](/FEM_Preferences/fr#Z88 "FEM Preferences/fr") pour les paramètres possibles du solveur comme la méthode de solveur utilisée.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverZ88/fr&oldid=1569025>"