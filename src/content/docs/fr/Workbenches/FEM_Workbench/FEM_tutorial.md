---
title: FEM Tutoriel
---
|  |
| --- |
| Tutoriel |
| Thème |
| Analyse par éléments finis |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 10 minutes + temps d'exécution |
| Auteurs |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Version de FreeCAD |
| 0.17 ou plus |
| Fichiers exemples |
| *None* |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel est une présentation d'utilisation destiné au lecteur le flux de travail sur base de l'atelier FEM, ainsi que la plupart des outils disponibles pour effectuer une analyse statique d’éléments finis.

![](/images/FEM_tutorial_result.png)

## Conditions

* FreeCAD version 0.17 ou supérieure.
* [Netgen](http://sourceforge.net/projects/netgen-mesher/) et/ou [GMSH](http://geuz.org/gmsh/) sont installés sur le système (inclus dans l'installation de FreeCAD).
* [Calculix](http://www.calculix.de/) est installé sur le système (inclus dans l'installation de FreeCAD).
* Le lecteur possède les connaissances de base pour utiliser les ateliers [Part](/Part_Workbench/fr "Part Workbench/fr") et [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

## Procédure

### Modélisation

Dans cet exemple, un cube est utilisé comme objet d'étude, mais tout modèle créé dans les ateliers Part ou PartDesign peut être utilisé à la place.

1. Appuyez sur le bouton ![](/images/Std_New.svg) [Nouveau document](/Std_New/fr "Std New/fr") pour créer un nouveau document.
2. Activez l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr").
3. Créez un cube.
4. Changer ses **Dimensions** selon les valeurs suivantes :
   1. Longueur : 8. 000 m.
   2. Largeur : 1. 000 m.
   3. Hauteur : 1. 000 m.

Maintenant, nous avons un modèle avec lequel travailler.

### Créer l'analyse

1. Lancez l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").
2. Sélectionnez l'option **Modèle → ![](/images/FEM_Analysis.svg) Conteneur d'analyse** dans le menu.

### Contraintes et forces

1. Masquez le maillage dans la vue en arborescence.
2. Affichez le modèle original.
3. Sélectionnez ![](/images/FEM_ConstraintFixed.svg) [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr").
4. Cliquez sur Ajouter, sélectionnez la face arrière de l'objet Cube (face sur l'axe *YZ*) et cliquez sur OK.
5. Sélectionnez ![](/images/FEM_ConstraintForce.svg) [Charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr").
6. Cliquez sur Ajouter, sélectionnez la face avant de l'objet Cube (la face parallèle à la face arrière) et définissez la valeur **Force [N]** à 9000000.
7. Réglez la *Direction* sur *-Z* en sélectionnant une des arêtes de la face parallèle à cette direction.
8. Cliquez sur OK.

Nous venons d'établir les restrictions et les forces pour notre étude statique.

### Matériau

1. Sélectionnez ![](/images/FEM_MaterialSolid.svg) [Matériau pour solide](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr") puis choisir Calculix-Steel comme matériau.
2. Cliquez sur OK.

### Maillage

Il est recommandé de faire un maillage comme dernière étape des préparations de l'analyse en raison de l'association à une géométrie dans FreeCAD. Selon l'installation de FreeCAD, il peut y avoir des maillages Netgen ou GMSH, vous pouvez utiliser l'un ou l'autre.

#### Netgen

1. Sélectionnez le modèle.
2. ![](/images/FEM_MeshNetgenFromShape.svg) [Mailler avec Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") : génère un maillage d'éléments finis pour un modèle en utilisant Netgen.
3. Dans la boîte de dialogue de maillage, cliquez sur Appliquer et OK.

Vous pouvez également faire glisser et déposer un maillage pour une analyse mécanique d'un objet qui ne possède pas de maillage dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr")

#### GMSH

1. Sélectionnez le modèle.
2. ![](/images/FEM_MeshGmshFromShape.svg) [FEM Mailler avec Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") : génère un maillage d'éléments finis pour un modèle en utilisant Gmsh.
3. Dans la boîte de dialogue de maillage, cliquez sur Appliquer et OK.

Nous avons maintenant créé un maillage de notre objet et nous sommes prêt à ajouter des contraintes et des forces.

### Exécution du solveur

#### Procédure régulière

1. Sélectionnez l'objet solveur ![](/images/FEM_SolverCalculixCxxtools.svg) contenu dans le conteneur **Analysis**.
2. Sélectionnez ![](/images/FEM_SolverControl.svg) [Contrôle de tâches du solveur](/FEM_SolverControl/fr "FEM SolverControl/fr") dans le menu.
3. Sélectionnez **Write .inp File**.
4. Sélectionnez **Run CalculiX**.
5. Cliquez sur OK.

#### Procédure rapide

1. Sélectionnez l'objet solveur ![](/images/FEM_SolverCalculixCxxtools.svg) contenu dans le conteneur **Analysis**.
2. Cliquez sur ![](/images/FEM_SolverRun.svg) [Lancer les calculs du solveur](/FEM_SolverRun/fr "FEM SolverRun/fr").

### Analyse des résultats

1. Depuis l'**arborescence de l'objet**, sélectionner l'objet **CCX\_Results**
2. Sélectionnez ![](/images/FEM_ResultShow.svg) [Afficher le résultat](/FEM_ResultShow/fr "FEM ResultShow/fr")
3. Choisissez parmi les différents types de résultats à visualiser
4. Le curseur en bas du panneau peut être utilisé pour altérer la visualisation du maillage. Cela permet de visualiser la déformation subie par l'objet ; gardez en tête qu'il s'agit d'une approximation.
5. Pour supprimer les résultats, sélectionnez ![](/images/FEM_ResultsPurge.svg) [Purger les résultats](/FEM_ResultsPurge/fr "FEM ResultsPurge/fr")

**Comparaison avec le fichier d'exemple précédent**

Si vous sélectionnez le type de résultat **déplacement Z**, vous pouvez voir que la valeur obtenue est presque identique au fichier d'exemple fourni avec FreeCAD. Des différences pourraient survenir en raison de la qualité du maillage et le nombre de nœuds qu'il contient.

Nous avons complété la procédure de base de l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").

## Remarques

* Pour un tutoriel vidéo basé sur ce tutoriel écrit, regardez : [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/fr&oldid=1475809>"