---
title: CAM Simulateur GL
---
|  |
| --- |
| CAM Simulateur GL |
| Emplacement du menu |
| CAM → Simuler le parcours (nouvelle version) |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| P N |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [CAM Simulateur de parcours](/CAM_Simulator/fr "CAM Simulator/fr") |
|  |

## Description

L'outil ![](/images/CAM_SimulatorGL.svg) Simulateur GL est une nouvelle alternative au [Simulateur de parcours](/CAM_Simulator/fr "CAM Simulator/fr"). Il est basé sur des fonctions OpenGL de bas niveau. Pour éliminer les interférences avec la vue 3D de FreeCAD, il fonctionne dans une fenêtre séparée avec un contexte OpenGL séparé. Il est censé être plus rapide et plus précis que l'ancien simulateur.

![](/images/CAM_new_simulator.PNG)

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_SimulatorGL.svg) Simuler le parcours (nouvelle version).
   * Sélectionnez l'option **CAM → ![](/images/CAM_Simulator.svg) Simuler le parcours (nouvelle version)** du menu.
   * Utilisez le raccourci clavier : P puis N.
2. Désélectionnez toutes les **Opérations** qui ne doivent pas être simulées.
3. Réglez le paramètre **Précision**.
4. Sélectionnez la **Tâche** à simuler dans le menu déroulant.
5. Appuyez sur le bouton ![](/images/CAM_BPlay.svg) (Activer/reprendre la simulation).
   * Une fenêtre séparée avec le simulateur s'ouvre.
   * Utilisez les boutons de gauche : Exécuter, Pas à pas et Avance rapide et le curseur pour contrôler l'animation.
   * Utilisez les boutons de droite pour : Afficher/masquer la superposition du modèle de base, Orbiter le modèle, Afficher la trajectoire et Activer/désactiver l'occlusion ambiante.
   * Contrôlez la vue 3D avec les commandes de souris en cours dans FreeCAD.

## Propriétés

* Données**Accuracy** : précision de la simulation, exprimée en pourcentage, indique l'écart de la simulation par rapport à la tâche. Pour les simulations interactives, la réduction de la précision à 0.3 est beaucoup plus rapide.
* Données**Job** : tâche utilisée comme base de la simulation
* Données**Operation List** : liste des opérations sélectionnées pour être incluses dans la simulation.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_SimulatorGL/fr&oldid=1487438>"