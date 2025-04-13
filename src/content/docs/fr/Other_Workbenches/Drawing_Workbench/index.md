---
title: Atelier Drawing
---

:::caution
L'atelier Drawingn'est plus inclus après la version 0.20.L'atelier TechDrawest son remplaçant plus abouti.
:::
![](/images/Workbench_Drawing.svg)

Icône de l'atelier Drawing

## Introduction

L'atelier Mise en plan vous permet de mettre votre travail 3D sur papier. C'est-à-dire, mettre des vues de vos modèles dans une fenêtre 2D et insérer cette fenêtre dans un dessin, par exemple une feuille avec une bordure, un titre et votre logo et enfin imprimer cette feuille.

![](/images/Drawing_extraction.png)

## Outils

Ces outils permettent de créer, configurer et exporter des mises en plan 2D

- ![](/images/Drawing_New.png) [Ouvrir un fichier vectoriel SVG](/Drawing_Open_SVG/fr "Drawing Open SVG/fr"): Ouvre une feuille de dessin précédemment sauvegardée au format de fichier SVG

- ![](/images/Drawing_Landscape_A3.png) [Nouvelle feuille A3 paysage](/Drawing_Landscape_A3/fr "Drawing Landscape A3/fr"): Créé une nouvelle feuille à partir du gabarit A3 par défaut de FreeCAD

- ![](/images/Drawing_View.png) [Insérer une vue](/Drawing_View/fr "Drawing View/fr"): Insère une vue de l'objet sélectionné dans la feuille active

- ![](/images/Drawing_Annotation.png) [Annotation](/Drawing_Annotation/fr "Drawing Annotation/fr"): Ajoute une annotation dans la feuille de dessin courante.

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip/fr "Drawing Clip/fr"): Ajoute un groupe de clip dans la feuille de dessin courante

- ![](/images/Drawing_Openbrowser.png) [Ouverture du navigateur internet](/Drawing_Openbrowser/fr "Drawing Openbrowser/fr"): Ouvre un aperçu de la feuille courante dans le navigateur.

- ![](/images/Drawing_Orthoviews.png) [Vue Orthogonale](/Drawing_Orthoviews/fr "Drawing Orthoviews/fr"): Crée automatiquement des vues orthogonales d'un objet sur la feuille de dessin courante.

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol/fr "Drawing Symbol/fr"): Ajoute le contenu d'un fichier SVG en tant que symbole dans la feuille de dessin en cours.

- ![](/images/Drawing_DraftView.png) [Vue Draft](/Draft_Drawing/fr "Draft Drawing/fr"): Insère une vue Draft spécial de l'objet sélectionné dans la feuille de dessin en cours.

- ![](/images/Drawing_SpreadsheetView.png) [Vue d'une feuille de calcul](/Drawing_SpreadsheetView/fr "Drawing SpreadsheetView/fr"): Insère une vue d'une feuille de calcul sélectionnée dans la feuille de dessin en cours.

- ![](/images/Drawing_Save.png) [Exporter la feuille](/Drawing_Save/fr "Drawing Save/fr"): Exporte la feuille dans un fichier au format SVG

* [Projection de forme](/Drawing_ProjectShape/fr "Drawing ProjectShape/fr"): Crée une projection de l'objet sélectionné (Source) dans la vue 3D.

* _Note:_ L'atelier [Draft](/Draft_Workbench/fr "Draft Workbench/fr") a son propre [atelier de dessin](/Draft_Drawing/fr "Draft Drawing/fr") qui place les objets du projet sur papier. Il a quelques fonctionnalités supplémentaires sur les outils de dessin standards et prend en charge les objets spécifiques tels que [les dimensions](/Draft_Dimension/fr "Draft Dimension/fr").

## Flux de travail

Le document contient un objet de forme 3D à partir duquel nous voulons produire un dessin. Une "Page" est donc créée. Une page est instanciée à partir d'un modèle, par exemple, le modèle "A3_Landscape". Le modèle est un document [SVG](/SVG/fr "SVG/fr") qui peut contenir un cadre de page, un logo et d'autres éléments.

Dans cette page peuvent être insérées une ou plusieurs vues. Chaque vue a une position sur la page (Propriétés X,Y), une échelle (Propriété d'échelle) et des propriétés additionnelles. Chaque fois que la page, la vue ou l'objet référencé subit une modification, la page est régénérée et l'affichage mis à jour.

## Script

Pour l'instant la méthodologie de travail par l'interface graphique est sévèrement limitée, l'API de script est plus intéressante.

Voir la page [Drawing API exemples](/Drawing_API_example/fr "Drawing API example/fr") pour une description des fonctions utilisées pour la création des pages et vues du dessin.

## Extension Module de dessin

Quelques notes sur le module de dessin sont ajoutés à la page [Documentation sur le module dessin](/Drawing_Documentation/fr "Drawing Documentation/fr") [(en)](/Drawing_Documentation "Drawing Documentation"). Il aide à comprendre rapidement le fonctionne du module de dessin, ce qui permet aux programmeurs de commencer rapidement sa programmation.

## Liens externes

- [Introduction au dessin mécanique sur Youtube - par Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/fr&oldid=1462063>"
