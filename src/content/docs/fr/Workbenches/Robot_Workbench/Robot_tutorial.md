---
title: Robot Tutoriel
---
|  |
| --- |
| Tutoriel |
| Thème |
| Atelier Robot |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
|  |
| Auteurs |
| r-frank |
| Version de FreeCAD |
| 0.16.6703 et plus |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel a pour but de vous apprendre à utiliser l'[atelier de simulation de Robot](/Robot_Workbench/fr "Robot Workbench/fr") pour simuler une cellule de configuration de robot.

![Visualiser la simulation](/images/Robot_Tutorial_RobotSimulation.gif)

## Avant de commencer

Ce tutoriel est écrit pour FreeCAD version 0.11 R3977 ou ultérieure. Si vous n'avez pas FreeCAD sur votre PC, allez à la [page de téléchargement](/Download/fr "Download/fr") afin de l'installer.

Ce tutoriel vise l'utilisation des [robots industriels](http://fr.wikipedia.org/wiki/Robotique_industrielle) et pas les robots mobiles ou de service (voir [ici](http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Installation de la scène

1. Cliquer sur [Robot Workbench](/Robot_Workbench/fr "Robot Workbench/fr")
2. Créer un nouveau document en choisissant File → New dans menu
3. Insert un Kuka IR500 le robot dans la scène en choisissant Robot → insert Robots → Kuka IR500 du menu
4. Changer à vue axonométrique en cliquant sur ![](/images/View-axometric.png)
5. Zoomer pour adapter tout en cliquant sur ![](/images/View-zoom-all.png)
6. Sauvegarder votre fichier...

## Définir une trajectoire

1. Cliquer sur [Robot Worbench](/Robot_Workbench/fr "Robot Workbench/fr") Activer le modèle dans l' arborescence
2. Créé une nouvelle trajectoire en cliquant sur ![](/images/Robot_CreateTrajectory.png)
3. Sélectionner le robot dans l'arbre
4. Donner la position départ pour le robot en cliquant sur ![](/images/Robot_SetHomePos.png)
5. Cliquer sur le panneau de configuration ![](/images/Robot_InsertWaypoint.png)
6. Changer la position du robot en utilisant le curseur
7. Quand le robot et la trajectoire sont sélectionnés dans la vue 3D cliquer sur le bouton ![](/images/Robot_InsertWaypoint.png) pour insérer un point de départ dans la trajectoire
8. Chaque point de la trajectoire est visible avec une croix jaune, tous les points de la trajectoire sont connectés avec des lignes oranges
9. Définir au moins trois points différents et les insérer dans la trajectoire

## Simulation des mouvement du robot

1. Sélectionner robot et trajectoires dans l'arborescence
2. Sélectionner la simulation en cliquant sur le bouton ![](/images/Robot_Simulate.png)
3. Cliquer sur le bouton démarrer la simulation I>
4. Visualiser la simulation

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/fr&oldid=1471544>"