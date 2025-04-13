---
title: FEM Solveur Elmer
---

|                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM Solveur Elmer                                                                                                                                                                                                                                                                                                 |
| Emplacement du menu                                                                                                                                                                                                                                                                                               |
| Résolution → Solveur Elmer                                                                                                                                                                                                                                                                                        |
| Ateliers                                                                                                                                                                                                                                                                                                          |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")                                                                                                                                                                                                                                                                       |
| Raccourci par défaut                                                                                                                                                                                                                                                                                              |
| S E                                                                                                                                                                                                                                                                                                               |
| Introduit dans la version                                                                                                                                                                                                                                                                                         |
| -                                                                                                                                                                                                                                                                                                                 |
| Voir aussi                                                                                                                                                                                                                                                                                                        |
| [FEM Paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr"), [FEM Solveur CalculiX standard](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr"), [FEM Solveur Z88](/FEM_SolverZ88 "FEM SolverZ88"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|                                                                                                                                                                                                                                                                                                                   |

## Description

[Elmer](https://www.elmerfem.org) est un logiciel de simulation multiphysique open source principalement développé par le CSC - IT Center for Science (CSC). Le développement d'Elmer a commencé en 1995 en collaboration avec des universités finlandaises, des instituts de recherche et l'industrie. Après sa publication open source en 2005, l'utilisation et le développement d'Elmer sont devenus internationaux.

Elmer comprend des modèles physiques de dynamique des fluides, de mécanique des structures, d'électromagnétisme, de transfert de chaleur et d'acoustique, par exemple. Ceux-ci sont décrits par des équations différentielles partielles qu'[Elmer](https://www.csc.fi/web/elmer) résout par la méthode des éléments finis (FEM).

La création de l'objet SolverElmer dans le conteneur Analysis de FreeCAD donne accès aux équations Elmer pour une analyse simple ou multiphysique.

Dans la mesure où FreeCAD dispose déjà d'une intégration poussée de ![](/images/FEM_SolverCalculiX.svg) [Calculix](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") et ![](/images/FEM_SolverZ88.svg) [Z88](/FEM_SolverZ88/fr "FEM SolverZ88/fr") comme solveurs pour l'analyse mécanique et thermomécanique, Elmer sera privilégié pour la dynamique des fluides numérique (CFD), la chaleur, l'électrostatique et l'électrodynamique. Il peut également être utilisé pour l'analyse par éléments finis mécanique à travers l'équation d'élasticité ou toute combinaison des équations susmentionnées. Cette combinaison fait d'Elmer le choix privilégié pour les analyses multi-physiques.

## Installation

Elmer nécessite que deux composants soient interfacés avec FreeCAD :

- ElmerGrid est l'interface gérant les maillages
- ElmerSolver gère le calcul.

Il existe des programmes autonomes pour ces deux applications mais leur installation et leur utilisation dépassent le cadre de l'intégration de FreeCAD.

1.  Téléchargez et installez la version la mieux adaptée à votre système d'exploitation ([Windows](https://www.nic.funet.fi/pub/sci/physics/elmer/bin/windows/) ou [Linux](https://www.nic.funet.fi/pub/sci/physics/elmer/bin/linux/Readme1st.txt)). Il est recommandé d'installer la version `mpi` pour bénéficier d'un support multi-cœur du CPU. ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")).
2.  Dans FreeCAD, allez dans **Edition → Préférences → FEM → Elmer**.
3.  Dans les [préférences de FEM](/FEM_Preferences/fr#Elmer "FEM Preferences/fr"), définissez le chemin d'accès correct pour `ElmerGrid` et `ElmerSolver`, ou version 0.21 et suivantes : définissez le chemin d'accès pour `ElmerSolver_mpi` au lieu de `ElmerSolver` pour qu'Elmer utilise tous les cœurs de processeur disponibles.

    : ![Onglet Elmer dans les préférences de FEM](/images/Preferences-ElmerPath.png)
    : Menu de dialogue des préférences Elmer montrant les champs pour localiser les binaires Elmer importants sur le système d'exploitation Windows

        .

Vous êtes prêt à utiliser Elmer dans FreeCAD.

version 0.19 et précédentes : Maintenant démarrez FreeCAD et changez le schéma d'unités en _MKS_ dans les [préférences](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr"). Voir [Remarques](#Remarques).

## Utilisation

1. Basculez vers l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr")
2. Créez un [conteneur d'analyse](/FEM_Analysis/fr "FEM Analysis/fr") en appuyant sur l'icône ![](/images/FEM_Analysis.svg).
3. Créez un solveur FEM pour Elmer, en appuyant sur l'icône ![](/images/FEM_SolverElmer.svg).

   - Remarque : une analyse réussie nécessite au moins un modèle (2D ou 3D), un matériau ([FEM Fluide](/FEM_MaterialFluid/fr "FEM MaterialFluid/fr") ou [FEM Solide](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr")), un [maillage Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr"), des équations et des conditions aux limites

   : ![](/images/Elmer_typical_file_tree.png)
   : Exemple de [vue en arborescence](/Tree_view/fr "Tree view/fr") une fois qu'un solveur pour Elmer est activé

4. Modifiez les paramètres du solveur dans l'onglet Data de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") de l'objet SolverElmer dans le modèle [vue en arborescence](/Tree_view/fr "Tree view/fr")
5. Double-cliquez sur l'objet ![](/images/FEM_SolverElmer.svg) SolverElmer pour préparer une analyse

   : ![](/images/ElmerSolver_TaskPanel.png)
   : Menu de dialogue pour exécuter une analyse Elmer

6. Sélectionnez le chemin vers lequel l'analyse écrira en cliquant sur ...
7. Cliquez sur Ecrire pour écrire les fichiers de cas dans le répertoire sélectionné précédemment
8. Cliquez sur Lancer pour démarrer l'analyse

### Équations

- Pour effectuer l'analyse d'un comportement physique particulier, une équation doit être utilisée (écoulement, chaleur, électrostatique...).
- Disambiguation : le terme _Équation_ est utilisé dans FreeCAD pour décrire les différents mécanismes physiques, le terme _Solveur_ est utilisé dans tous les documents Elmer. Ainsi, lorsqu'on utilise dans FreeCAD l'"Équation d'écoulement", en réalité Elmer utilise le "Solveur d'écoulement" pour trouver une solution à l'équation de Navier-Stokes.
- Une ou plusieurs équations peuvent être utilisées en même temps avec Elmer en ajoutant simplement l'objet équation sous l'objet SolverElmer, réalisant ainsi des analyses multi-physiques :

1. Cliquez sur l'objet ![](/images/FEM_SolverElmer.svg) SolverElmer dans le modèle de la [vue en arborescence](/Tree_view/fr "Tree view/fr")
2. Sélectionnez une ou plusieurs des équations disponibles :
   - ![](/images/FEM_EquationDeformation.svg) [Équation de déformation](/FEM_EquationDeformation/fr "FEM EquationDeformation/fr")
   - ![](/images/FEM_EquationElasticity.svg) [Équation d'élasticité](/FEM_EquationElasticity/fr "FEM EquationElasticity/fr")
   - ![](/images/FEM_EquationElectricforce.svg) [Équation force électrique](/FEM_EquationElectricforce/fr "FEM EquationElectricforce/fr")
   - ![](/images/FEM_EquationElectrostatic.svg) [Équation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr")
   - ![](/images/FEM_EquationFlow.svg) [Équation d'écoulement](/FEM_EquationFlow/fr "FEM EquationFlow/fr")
   - ![](/images/FEM_EquationFlux.svg) [Équation de flux](/FEM_EquationFlux/fr "FEM EquationFlux/fr")
   - ![](/images/FEM_EquationHeat.svg) [Équation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr")
   - ![](/images/FEM_EquationMagnetodynamic.svg) [Équation magnétodynamique](/FEM_EquationMagnetodynamic/fr "FEM EquationMagnetodynamic/fr")
   - ![](/images/FEM_EquationMagnetodynamic2D.svg) [Équation magnétodynamique 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr")
   - ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Densité de charge électrique](/FEM_ElectricChargeDensity/fr "FEM ElectricChargeDensity/fr") [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

### Paramètres du solveur

- En fonction des équations utilisées, vous devez modifier les paramètres par défaut du solveur. Ils sont expliqués à la page [Paramètres du solveur d'Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").
- Le solveur effectue par défaut une simulation en régime permanent. Pour effectuer une simulation transitoire (comment le modèle se comporte au cours du le temps), voir la section _Pas de temps (analyses transitoires)_ dans les [paramètres du solveur Elmer](</FEM_SolverElmer_SolverSettings/fr#Pas_de_temps_(analyses_transitoires)> "FEM SolverElmer SolverSettings/fr").

### Visualisation

Les résultats du solveur Elmer sont affichés dans des objets [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). (Les [objets résultats](/FEM_ResultShow/fr "FEM ResultShow/fr") ne sont pas possibles).

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") :

Pour les analyses transitoires, vous obtenez un pipeline de résultats pour chaque pas de temps. Pour les éditer tous en même temps, sélectionnez-les dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et définissez les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").
Pour réaliser des animations de la progression temporelle, la meilleure méthode consiste actuellement à :

- Cacher la vue du premier résultat.
- Sélectionner un objet de votre choix dans la vue en arborescence, mais pas un objet de pipeline.
- Passer la souris sur les pipelines.

Le résultat est une animation comme celle-ci :

![](/images/ElmerSolver_TransientAnalysis.gif)

## Remarques

- **Important** : afin d'obtenir des résultats raisonnables et de pouvoir échanger les fichiers d'entrée Elmer (nommés _case.sif_) avec d'autres utilisateurs, toutes les valeurs dans les fichiers d'entrée doivent être en unités SI. Dans la version 0.19 de FreeCAD et les versions antérieures, ce n'est le cas que si vous utilisez le schéma d'unités MKS dans les [préférences](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr").
- Les paramètres du solveur et des équations sont définis indépendamment via l'onglet Data de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") de leurs objets respectifs dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
- Chaque équation aura une priorité. Par exemple, si vous essayez de voir l'effet d'un flux convectif d'air chaud, l'équation pour le débit doit être résolue avec une priorité plus élevée que la chaleur, sinon le solveur résoudra d'abord la chaleur par conduction puis le débit.
- Cas 2D vs 3D : Elmer peut être utilisé pour résoudre des cas 2D et 3D. Cependant, lors de la définition d'un cas 2D, les faces doivent être mappées dans le plan XY de FreeCAD, sinon le solveur essaiera de calculer un cas 3D sur une face, et les vecteurs normaux seront sous-définis. De plus amples informations peuvent être trouvées dans les forums FreeCAD : <https://forum.freecadweb.org/viewtopic.php?f=18&t=48175>.

## Documentation

Le lien suivant donne accès à la [documentation complète pour Elmer](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/). Cela inclut les manuels ainsi que les tutoriels. Notez que la documentation et les fichiers ajoutés avec "gui" concernent généralement l'utilisation de l'interface graphique Elmer et non l'implémentation FreeCAD d'Elmer.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverElmer/fr&oldid=1568219>"
