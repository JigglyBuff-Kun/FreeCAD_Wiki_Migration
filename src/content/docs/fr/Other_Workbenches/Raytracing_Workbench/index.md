---
title: Atelier Raytracing
---

:::caution
L'atelier Raytracingn'est plus inclus depuis la version 0.20.L'atelier externeRenderpeut être utilisé à la place.
:::
![](/images/Workbench_Raytracing.svg)

Icône de l'atelier Raytracing

## Introduction

L'![](/images/Workbench_Raytracing.svg) atelier Raytracing est utilisé pour générer des images photoréalistes de vos modèles en les interprétant avec un moteur de rendu externe.

L'atelier Raytracing fonctionne avec des [modèles](/Raytracing_templates/fr "Raytracing templates/fr"), qui sont des fichiers de projet définissant une scène pour votre modèle 3D. Vous pouvez placer des lumières et des géométries telles que des plans de sol. Il contient également des espaces réservés pour la position de la caméra et pour les informations sur les matériaux des objets de la scène. Le projet peut ensuite être exporté dans un fichier prêt à être restitué, ou directement dans FreeCAD.

Actuellement, deux moteurs de rendu sont pris en charge : [POV-Ray](/POV-Ray/fr "POV-Ray/fr") et [LuxRender](/LuxRender/fr "LuxRender/fr"). Pour être en mesure d'effectuer un rendu à partir de FreeCAD, au moins un de ces programmes doit être installé et configuré dans votre système. Cependant, si aucun programme de rendu n'est installé, vous pourrez toujours exporter un fichier de projet pour le rendre à un autre moment.

L'atelier Raytracing est obsolète, l'atelier externe [Render](https://github.com/FreeCAD/FreeCAD-render) le remplace. Néanmoins, les informations contenues dans cette page sont généralement utiles pour le nouvel atelier car les deux fonctionnent basiquement de la même manière.

![](/images/Raytracing_example.jpg)

## Déroulement typique du travail

1. Créez ou ouvrez un projet dans FreeCAD, ajouter quelques objets solides [Part](/Part_Workbench/fr "Part Workbench/fr") ou [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"); le maillage n'est actuellement pas pris en charge.
2. Créez un projet de Raytracing (povray ou luxrender)
3. Sélectionnez les objets que vous souhaitez ajouter au projet Raytracing et ajoutez-les au projet avec l'outil "Insert Part"
4. Exportez le fichier projet ou créer le rendu directement

![](/images/Raytracing_Workbench_workflow.svg)

Le flux de travail de l'atelier Raytracing; l'atelier prépare un fichier de projet à partir d'un modèle donné, puis appelle un programme externe pour produire le rendu réel de la scène. Le rendu externe peut être utilisé indépendamment de FreeCAD.

## Outils

### Outils de projet

Ce sont les principaux outils d’exportation de votre travail 3D vers des rendus externes.

- ![](/images/Raytracing_New.svg) [Nouveau projet PovRay](/Raytracing_New/fr "Raytracing New/fr"): Insérer un nouveau projet PovRay dans le document
- ![](/images/Raytracing_Lux.svg) [Nouveau projet LuxRender](/Raytracing_Lux/fr "Raytracing Lux/fr"): Insérer un nouveau projet LuxRender dans le document
- ![](/images/Raytracing_InsertPart.svg) [Insérer une pièce](/Raytracing_InsertPart/fr "Raytracing InsertPart/fr"): Insérer une vue d'une pièce dans un projet de lancer de rayons
- ![](/images/Raytracing_ResetCamera.svg) [Réinitialiser la caméra](/Raytracing_ResetCamera/fr "Raytracing ResetCamera/fr"): Fait correspondre la position de la caméra d'un projet de lancer de rayons à la vue actuelle
- ![](/images/Raytracing_ExportProject.svg) [Exporter un projet](/Raytracing_ExportProject/fr "Raytracing ExportProject/fr"): Exporte un projet de lancer de rayons dans un fichier de scène pour le rendu dans un rendu externe
- ![](/images/Raytracing_Render.svg) [Rendu](/Raytracing_Render/fr "Raytracing Render/fr"): Rend un projet de lancer de rayons avec un moteur de rendu externe

### Utilitaires

Ce sont des outils auxiliaires pour effectuer manuellement des tâches spécifiques.

- ![](/images/Raytracing_WriteView.svg) [Exporter la vue vers Pov-Ray](/Raytracing_WriteView/fr "Raytracing WriteView/fr"): Exporte la vue 3D active avec la caméra et tout son contenu dans un fichier povray.
- ![](/images/Raytracing_WriteCamera.svg) [Exporter la caméra vers Pov-Ray](/Raytracing_WriteCamera/fr "Raytracing WriteCamera/fr"): Exporte la position de la caméra de la vue 3D active au format POV-Ray dans un fichier.
- ![](/images/Raytracing_WritePart.svg) [Export de la pièce vers Pov-Ray](/Raytracing_WritePart/fr "Raytracing WritePart/fr"): Exporte la partie sélectionnée (objet) en tant que fichier povray.

## Préférences

- ![](/images/Preferences-raytracing.svg) [Préférences](/Raytracing_Preferences/fr "Raytracing Preferences/fr"): Préférences disponibles pour les outils Raytracing.

## Tutorials

- [Tutoriel basique Raytracing](/Raytracing_tutorial/fr "Raytracing tutorial/fr")
- [Tutoriel intermédiaire Raytracing](/Tutorial_FreeCAD_POV_ray/fr "Tutorial FreeCAD POV ray/fr")

## Création manuelle d'un fichier povray

Les outils utilitaires décrits ci-dessus vous permettent d'exporter l'affichage 3D actuel et tout son contenu dans un fichier [Povray](http://www.povray.org/). Tout d'abord, vous devez charger ou créer vos données CAO et positionner l'orientation de la vue 3D que vous le souhaitez. Puis choisissez "Utilitaires → Exporter la vue..." dans le menu de raytracing.

![](/images/FreeCAD_Raytracing.jpg)

Donnez un emplacement pour enregistrer le fichier \*.pov. Après cela vous pouvez l'ouvrir dans [Povray](http://www.povray.org/) et obtenir le rendu :

![](/images/Povray.jpg)

Comme d'habitude dans un rendu vous pouvez faire de grandes et belles photos :

![](/images/Scharniergreifer_render.jpg)

## Script

Voir [Raytracing API exemples](/Raytracing_API_example/fr "Raytracing API example/fr") pour plus d'informations sur l'écriture de scènes par programmation.

## Liens

### POVRay

- [POV-Ray](/POV-Ray/fr "POV-Ray/fr")
- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://en.wikipedia.org/wiki/POV-Ray>

### Luxrender

- [LuxRender](/LuxRender/fr "LuxRender/fr")
- <http://www.luxrender.net/>

### Futurs moteurs de rendu possibles à mettre en œuvre

- <http://www.yafaray.org/>
- <http://www.mitsuba-renderer.org/>
- <http://www.kerkythea.net/>
- <http://www.artofillusion.org/>

## Exportation vers Kerkythea

Bien que l'exportation directe vers le format de fichier XML Kerkythea ne soit pas encore prise en charge, vous pouvez exporter vos objets en tant que fichiers de maillage (.obj), puis les importer dans Kerkythea.

- Si vous utilisez Kerkythea pour Linux, n'oubliez pas d'installer le WINE-Package (nécessaire à Kerkythea pour Linux)
- vous pouvez convertir vos modèles à l'aide de l'atelier de maillage en maillages, puis exporter ces maillages sous forme de fichiers .obj
- Si votre exportation de maille a entraîné des erreurs (flip de normales, trous ...) vous pouvez tenter votre chance avec [netfabb studio basic](http://www.netfabb.com/downloadcenter.php?basic=1)

: Gratuit pour un usage personnel, disponible pour Windows, Linux et Mac OSX.
: Il dispose d'outils de réparation standard qui vous réparera le modèle dans la plupart des cas.

- Un autre bon programme pour l'analyse/réparation de maillage est [Meshlab](http://sourceforge.net/projects/meshlab/)

: Open Source, disponible pour Windows, Linux et Mac OSX.
: Il dispose d'outils de réparation standard qui vous permettront de réparer votre modèle dans la plupart des cas (combler les trous, réorienter les normales, etc.)

- vous pouvez utiliser "make compound" puis "make single copy" ou vous pouvez fusionner des solides pour les regrouper avant de les convertir en maillages
- N'oubliez pas de définir dans Kerkythea un facteur d'import de 0.001 pour obj-modeler, puisque Kerkythea s'attend à ce que le fichier obj soit en m (mais le schéma d'unités standard dans FreeCAD est mm)

: Dans WIndows 7 Kerkythea 64 bits ne semble pas pouvoir enregistrer ces paramètres.
: Alors rappelez-vous de le faire chaque fois que vous démarrez Kerkythea

- Si vous importez plusieurs objets dans Kerkythea, vous pouvez utiliser la commande "Fichier → Fusionner" dans Kerkythea

## Développement

Ces pages font référence au nouveau plan de travail, programmé en Python, destiné à remplacer le plan de travail Raytracing actuel.

- [Render Workbench](https://github.com/FreeCAD/FreeCAD-render)
- [Render Workbench](https://forum.freecadweb.org/viewtopic.php?f=9&t=25933) (annonce uniquement, pas de discussion)
- [Améliorations de FreeCAD Renderer Workbench](https://forum.freecadweb.org/viewtopic.php?t=39168)

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/fr&oldid=1260882>"
