---
title: Atelier Robot
---

:::caution
L'atelier Robot n'est plus maintenu. Si vous avez de l'expérience avec le sujet et que vous souhaitez le maintenir, veuillez indiquer votre intention dans la section développeur duforum FreeCAD.La raison pour laquelle cet atelier se trouve toujours dans le code source principal est que cet atelier est programmé en C++. Si cet atelier pouvait être programmé en Python, alors il pourrait être transformé enatelier externeet il pourrait être déplacé vers un référentiel distinct.
:::

## Introduction

![](/images/Workbench_Robot.svg)

Icône de l'atelier Robot

L'![](/images/Workbench_Robot.svg) atelier Robot permet de simuler les [robots industriels à 6 axes](/Robot_6-Axis/fr "Robot 6-Axis/fr"), comme par exemple [Kuka](http://kuka.com/).

Vous pouvez accomplir les tâches suivantes :

- mettre en place un environnement de simulation avec un robot et des pièces de travail
- créer et remplir des trajectoires
- décomposer les fonctions d'une pièce CAO en une trajectoire
- simuler le mouvement et l'accessibilité d'un robot
- exporter la trajectoire vers un fichier programme de robot

Pour commencer, essayez le [tutoriel Robot](/Robot_tutorial/fr "Robot tutorial/fr") et voyez l'interface de programmation dans le fichier d'exemple [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/RobotExample.py.) .

![](/images/Robot_Workbench_example.jpg)

## Outils

Voici les principales commandes dont vous pouvez vous servir pour créer une configuration de robot.

### Robots

Les outils pour créer et gérer les robots à 6 axes

- ![](/images/Robot_CreateRobot.svg) [Créer un robot](/Robot_CreateRobot/fr "Robot CreateRobot/fr"): Insère un nouveau robot dans la scène
- ![](/images/Robot_Simulate.svg) [Simuler une trajectoire](/Robot_Simulate/fr "Robot Simulate/fr"): Ouvre le dialogue de simulation afin de régler une simulation
- ![](/images/Robot_Export.svg) [Exporter une trajectoire](/Robot_Export/fr "Robot Export/fr"): Exporte la trajectoire dans un fichier programme robot
- ![](/images/Robot_SetHomePos.svg) [Définir la positon de départ](/Robot_SetHomePos/fr "Robot SetHomePos/fr"): Définit la position de départ d'un robot
- ![](/images/Robot_RestoreHomePos.svg) [Restaurer la positon de départ](/Robot_RestoreHomePos/fr "Robot RestoreHomePos/fr"): Retourne le robot à sa positon de départ

### Trajectoires

Les outils pour créer et manipuler les trajectoires. Il y en a deux sortes, paramétriques et non-paramétriques.

#### Trajectoire non-paramétriques

- ![](/images/Robot_CreateTrajectory.svg) [Créer une trajectoire](/Robot_CreateTrajectory/fr "Robot CreateTrajectory/fr"): Créé une nouvelle trajectoire vide
- ![](/images/Robot_SetDefaultOrientation.svg) [Définir l'orientation par défaut](/Robot_SetDefaultOrientation/fr "Robot SetDefaultOrientation/fr"): Règle l'orientation par défaut des points de passage
- ![](/images/Robot_SetDefaultValues.svg) [Définir les paramètres de vitesse par défaut](/Robot_SetDefaultValues/fr "Robot SetDefaultValues/fr"): Règle les valeurs par défaut pour la création de points de passage
- ![](/images/Robot_InsertWaypoint.svg) [Insérer dans la trajectoire](/Robot_InsertWaypoint/fr "Robot InsertWaypoint/fr"): Insère un point de passage de la position actuelle du robot dans la trajectoire
- ![](/images/Robot_InsertWaypointPre.svg) [Insérer dans la trajectoire](/Robot_InsertWaypointPre/fr "Robot InsertWaypointPre/fr"): Insère un point de passage de la position actuelle du pointeur de la souris dans la trajectoire

#### Trajectoire paramétriques

- ![](/images/Robot_Edge2Trac.svg) [Générer une trajectoire à partir d'un ensemble d'arêtes](/Robot_Edge2Trac/fr "Robot Edge2Trac/fr"): Insère un nouvel objet dont les arêtes formeront une trajectoire
- ![](/images/Robot_TrajectoryDressUp.svg) [Habiller une trajectoire](/Robot_TrajectoryDressUp/fr "Robot TrajectoryDressUp/fr"): Créé un habillage qui supplante certaines propriétés d'une trajectoire
- ![](/images/Robot_TrajectoryCompound.svg) [Grouper et connecter des trajectoires](/Robot_TrajectoryCompound/fr "Robot TrajectoryCompound/fr"): Crée un composé (compound) et connecte un ensemble de trajectoires

## Script

Voir [Robot API exemple](/Robot_API_example/fr "Robot API example/fr") pour une description des fonctions utilisées pour modéliser les déplacements du robot.

## Tutoriels

- [Robot 6-Axis](/Robot_6-Axis/fr "Robot 6-Axis/fr")
- [VRML Préparation pour Simulation d'un Robot](/VRML_Preparation_for_Robot_Simulation/fr "VRML Preparation for Robot Simulation/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/fr&oldid=1089047>"
