---
title: Atelier Render
---
![](/images/Render_workbench_icon.svg)

Icône de l'atelier externe Render

## Introduction

L'atelier Render vous permet de produire des images de haute qualité à partir de modèles FreeCAD, en utilisant des moteurs open source de rendu externes.

* ![Pavillon Barcelone Capture d'écran](/images/Pabellon_de_Barcelona.png)

  Pavillon Barcelone  
  Capture d'écran
* ![Pavillon Barcelone Rendu de Povray](/images/Pabellon_de_Barcelona_Pov_large.png)

  Pavillon Barcelone  
  Rendu de Povray
* ![Pavillon Barcelone Rendu de Cycles](/images/Pabellon_de_Barcelona_Cycles.png)

  Pavillon Barcelone  
  Rendu de Cycles
* ![Asm V4 Capture d'écran](/images/Asm_V4.png)

  Asm V4  
  Capture d'écran
* ![Asm V4 Rendu de LuxCore](/images/Asm_V4_lux.png)

  Asm V4  
  Rendu de LuxCore
* ![Asm V4 Rendu de Ospray](/images/Asm_V4_ospray2.png)

  Asm V4  
  Rendu de Ospray
* ![Église de la lumière Capture d'écran](/images/Church_of_the_light.png)

  Église de la lumière  
  Capture d'écran
* ![Église de la lumière Rendu de LuxCore](/images/Church_of_the_light_lux2.png)

  Église de la lumière  
  Rendu de LuxCore
* ![Église de la lumière Rendu de Cycles](/images/Church_of_the_light_cycles.png)

  Église de la lumière  
  Rendu de Cycles
* ![Voiture Capture d'écran](/images/Car.png)

  Voiture  
  Capture d'écran
* ![Voiture Rendu de Ospray](/images/Car_ospray.png)

  Voiture  
  Rendu de Ospray
* ![Voiture Rendu de LuxCore](/images/Car_lux.png)

  Voiture  
  Rendu de LuxCore
* ![Assemblage de briques Capture d'écran](/images/Brick_assembly.png)

  Assemblage de briques  
  Capture d'écran
* ![Assemblage de briques Rendu de Appleseed](/images/Brick_assembly_appleseed.png)

  Assemblage de briques  
  Rendu de Appleseed
* ![Assemblage de briques Rendu de Luxcore](/images/Brick_assembly_luxcore.png)

  Assemblage de briques  
  Rendu de Luxcore
* ![Villa Savoye Capture d'écran](/images/VillaSavoye.png)

  Villa Savoye  
  Capture d'écran
* ![Villa Savoye Rendu de Appleseed](/images/VillaSavoye_appleseed.png)

  Villa Savoye  
  Rendu de Appleseed
* ![Villa Savoye Rendu de Cycles](/images/VillaSavoye_Cycles.png)

  Villa Savoye  
  Rendu de Cycles

Atelier en Python, Render est parfaitement intégré à FreeCAD : toute la scène de rendu - objets, éclairage, matériaux, caméra, etc. - peut être décrite avec des objets FreeCAD, pour être exportée vers des moteurs de rendu externes.

Par rapport à d'autres approches basées sur des applications d'infographie tierces, Render vise à :

* éviter à l'utilisateur d'apprendre un autre logiciel d'infographie 3D : tout ce que vous devez savoir se trouve dans FreeCAD.
* simplifier le flux de travail du rendu et soulager l'utilisateur de toute manipulation de fichier intermédiaire - comme l'importation, l'exportation, la retouche de la scène, etc.
* rendre la configuration de la scène persistante et surtout éviter de retravailler dans un outil externe à chaque fois que le modèle a été modifié.

## Moteurs de rendu pris en charge

Actuellement, six moteurs de rendu sont pris en charge :

* LuxCoreRender
* Appleseed
* Cycles (version autonome)
* Pov-Ray
* Intel Ospray Studio
* Pbrt-v4 (expérimental)

## Utilisation

En mode démarrage rapide, après que l'installation de l'atelier a été correctement effectuée, le rendu d'un modèle FreeCAD se fait en 4 étapes :

1. **Créer un projet de rendu :** appuyer sur le bouton de la barre d'outils correspondant à votre moteur de rendu et sélectionner un modèle adapté à votre moteur de rendu (vous pouvez commencer par une variante 'studio', comme appleseed\_studio\_light.appleseed, cycles\_studio\_light.xml, luxcore\_studio\_light.cfg, povray\_studio\_light.pov etc.).
2. **Ajouter des vues de vos objets à votre projet de rendu :** sélectionner à la fois les objets et le projet, et appuyer sur le bouton Add view.
3. **Définir votre point de vue :** [naviguer dans la vue 3D](/Manual:Navigating_in_the_3D_view/fr "Manual:Navigating in the 3D view/fr") à la position désirée et basculer en mode [perspective](/Std_PerspectiveCamera/fr "Std PerspectiveCamera/fr").
4. **Rendu :** sélectionner votre projet et appuyez sur le bouton Render dans la barre d'outils (également disponible dans le menu contextuel du projet).

**Et vous devriez obtenir un premier rendu de votre modèle.**

Vous trouverez plus d'instructions dans le [dépôt GitHub](https://github.com/FreeCAD/FreeCAD-render) ou dans l'aide en ligne.

## Fonctions

Les fonctions incluent, mais ne sont pas limitées à :

* Éclairage : lumières ponctuelles, lumières surfaces, modèle soleil-ciel et modèles d'éclairage prédéfinis.
* Caméras.
* Gestion des matériaux (à l'aide des nuanceurs habituels : mat, brillant, verre, transparent, etc.) y compris les textures.
* Mode lot / mode interface utilisateur.
* Suppression de bruit.
* Condition d'arrêt (échantillon par pixel).
* Contrôle du maillage : déflexions angulaires et linéaires, lissage automatique.

## Liens

Plus d'informations ? Suivez le lien : <https://github.com/FreeCAD/FreeCAD-render>

Retrieved from "<http://wiki.freecad.org/index.php?title=Render_Workbench/fr&oldid=1303364>"