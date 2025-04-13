---
title: TechDraw Tutoriel d'introduction
---
|  |
| --- |
| Tutoriel |
| Thème |
| Dessin technique |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| Moins d'une heure |
| Auteurs |
| [WandererFan](/index.php?title=User:WandererFan&action=edit&redlink=1 "User:WandererFan (page does not exist)") |
| Version de FreeCAD |
| 0.17 ou ultérieur |
| Fichiers exemples |
| [Exemple sous 0.17 PartDesign](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd?raw=true) [Exemple tutoriel TechDraw](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd?raw=true) |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel présente au nouvel utilisateur certains des outils et techniques utilisés dans l'![](/images/Workbench_TechDraw.svg) [atelier de dessin technique TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"). Ce tutoriel n'est pas un guide complet de l'atelier TechDraw et de nombreux outils et fonctionnalités ne sont pas couverts. Ce tutoriel vous guidera dans les étapes nécessaires à la réalisation des dessins techniques de la pièce du [Tutoriel d'introduction à l'atelier PartDesign](/Basic_Part_Design_Tutorial_017/fr "Basic Part Design Tutorial 017/fr").

## Avant de commencer

Téléchargez le [fichier exemple](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd?raw=true) du tutoriel PartDesign.

## La tâche

Dans ce tutoriel, vous allez utiliser l'atelier TechDraw pour créer des dessins 2D de la pièce 3D ci-dessous. Nous allons créer plusieurs vues de la pièce et ajouter des dimensions clés. Ce tutoriel n'utilisera pas toutes les fonctionnalités et tous les outils disponibles dans l'atelier TechDraw, mais devrait suffire à donner à l'utilisateur de ce tutoriel les bases pour développer ses connaissances et ses compétences.

## La pièce

![](/images/Tut17_final_refined.png)

## Créer un dessin

### Démarrer

* Vous souhaiterez peut-être ajuster vos [préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr") avant de débuter. Voir la note 1.
* Ouvrez d'abord le fichier contenant notre pièce 3D. Ensuite, assurez-vous que vous êtes dans l'atelier TechDraw.
* Vous allez sélectionner des éléments dans la fenêtre de dessin et/ou la vue combinée. La sélection dans TechDraw fonctionne de la même manière que dans la fenêtre 3D. Les éléments deviennent jaunes lorsque le curseur est en position pour les sélectionner et deviennent verts lorsqu'ils sont sélectionnés. Pour sélectionner plusieurs éléments, utilisez la touche Ctrl tout en cliquant.

### Vues et dimensions

Tout le travail dans TechDraw commence par une page. Les pages sont basées sur des modèles et contiennent des vues.

1. Cliquez sur ![](/images/TechDraw_PageDefault.svg) [TechDraw Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr") pour créer une nouvelle page.
2. Cliquez sur Body dans la [vue 3D](/3D_view/fr "3D view/fr") ou dans la [vue combinée](/Combo_view/fr "Combo view/fr").
3. Cliquez sur ![](/images/TechDraw_View.svg) [TechDraw Créer une nouvelle vue](/TechDraw_View/fr "TechDraw View/fr"). Cela ajoutera la vue à la page que nous venons de créer.

Nous avons maintenant une vue sur la page qui regarde le Body du haut. C'est un peu petit, cependant.

![](/images/TDTut_TopView1to1.png)

1. Sélectionnez la page dans la [vue combinée](/Combo_view/fr "Combo view/fr") et faites défiler jusqu'à la propriété Scale dans l'onglet Données.
2. Modifiez l'échelle de 1 à 2 et appuyez sur Entrée. La vue grossira.
3. Faites glisser la vue loin du cartouche en bas à droite de la page.

![](/images/TDTut_TopView2to1.png)

C'est mieux, mais un peu ennuyeux. Ajoutons quelques dimensions.

1. Sélectionnez le sommet en haut à gauche (petit point) avec LMB (bouton gauche de la souris, Left Mouse Button), puis sélectionnez également (Ctrl + LMB) en bas à gauche sommet.
2. Cliquez sur ![](/images/TechDraw_VerticalDimension.svg) [TechDraw Cote verticale](/TechDraw_VerticalDimension/fr "TechDraw VerticalDimension/fr"). Faites glisser le texte de cote hors du corps.
3. Essayez à nouveau avec les sommets supérieur à gauche et supérieur droit et ![](/images/TechDraw_HorizontalDimension.svg) [TechDraw Cote horizontale](/TechDraw_HorizontalDimension/fr "TechDraw HorizontalDimension/fr").

![](/images/TDTut_TopView2Dims.png)

### Texte éditable

Nous devrions ajouter de la documentation à notre dessin.

1. Cliquez sur le petit carré vert à côté de Title dans le cartouche. Vous obtiendrez une fenêtre pop-up dans laquelle vous pourrez changer le titre en quelque chose de plus significatif.
2. Juste pour la pratique, placez votre nom dans le champ *Designed by Name* de la même manière.

![](/images/TDTut_DocBlock.png)

Ça s'améliore. Ajoutons du texte à la page.

1. Cliquez sur ![](/images/TechDraw_Annotation.svg) [TechDraw Annotation](/TechDraw_Annotation/fr "TechDraw Annotation/fr"). Un bloc de texte apparaîtra au milieu de la page.
2. Faites glisser le bloc de texte loin de la vue principale.
3. Cliquez sur Annotation dans la vue combinée et faites défiler jusqu'à la propriété Text de l'onglet Données.
4. Cliquez dans la zone de données, ensuite cliquez sur les points de suspension à droite du champ. Vous obtiendrez une fenêtre pop-up où vous pourrez changer le texte en quelque chose de plus significatif.

![](/images/TDTut_Annotation.png)

Avant de terminer cette Page, voyons à quoi elle ressemblera quand nous l'imprimerons.

1. Cliquez sur ![](/images/TechDraw_ToggleFrame.svg) [TechDraw Bascule des cadres](/TechDraw_ToggleFrame/fr "TechDraw ToggleFrame/fr"). Les sommets et les cadres de vue disparaîtront. Vous pouvez les récupérer en cliquant à nouveau sur l'outil.

![](/images/TDTut_Toggle.png)

### Vues multiples d'une pièce unique

Créons un dessin à vues multiples en utilisant un modèle différent comme point de départ. Nous utiliserons la convention européenne, mais vous pouvez passer à la convention américaine si cela correspond à votre convention locale.

1. Cliquez sur ![](/images/TechDraw_PageTemplate.svg) [TechDraw Page selon un modèle](/TechDraw_PageTemplate/fr "TechDraw PageTemplate/fr"). Un dialogue de sélection de fichier apparaîtra. Sélectionnez un fichier de modèle. Nous allons utiliser "ANSIB.SVG". Un nouvel onglet apparaîtra.
2. Sélectionnez "Body" et "Page001" (si votre document contient plusieurs pages, vous devez indiquer à TechDraw laquelle utiliser).
3. Cliquez sur ![](/images/TechDraw_ProjectionGroup.svg) [TechDraw Groupe de projection](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr"). La petite vue familière au milieu de la page apparaîtra et une boîte de dialogue apparaîtra dans le panneau des tâches.
4. Cliquez sur plusieurs cases dans la section Vues secondaires de la boîte de dialogue.
5. Faites glisser la vue intitulée "Front". Toutes les autres vues se déplacent avec elle.
6. Modifiez la liste déroulante Échelle de Feuille à Personnalisée et modifiez l'échelle personnalisée à 2:1. Appuyez sur le bouton OK.

![](/images/TDTut_ProjGroup21.png)

1. Dans la vue intitulée "TopLeftFront", sélectionnez les deux sommets aux extrémités de l'arête avant de la pièce.
2. Cliquez sur ![](/images/TechDraw_LengthDimension.svg) [TechDraw Longueur](/TechDraw_LengthDimension/fr "TechDraw LengthDimension/fr"). Faites glisser le texte de cote hors du corps.

### Lier les dimensions au modèle 3D

Avez-vous remarqué un problème avec la cote que nous venons de créer?

![](/images/TDTut_NewLengthDim.png)

D'après la première partie de ce tutoriel, nous savons que la pièce a 53 mm de largeur, mais notre nouvelle cote est de 43,27. C'est parce que "TopLeftFront" est une [projection isométrique](https://fr.wikipedia.org/wiki/Perspective_isom%C3%A9trique), et notre premier dessin était une [projection (multivue) orthogonale](https://fr.wikipedia.org/wiki/Projection_orthogonale). Pour obtenir la bonne valeur, nous devons associer directement notre cote au modèle 3D.

1. Notez le nom de notre cote erronée dans la vue combinée. Nous en aurons besoin dans une minute.
2. Passez à l'onglet 3D et sélectionnez les sommets aux extrémités de l'arête avant de la pièce. Sélectionnez également Page001.
3. Cliquez sur ![](/images/TechDraw_LinkDimension.svg) [TechDraw Lier une dimension](/TechDraw_LinkDimension/fr "TechDraw LinkDimension/fr"). Une boîte de dialogue s'ouvre dans le panneau des tâches.
4. Dans la boîte de dialogue, déplacez notre cote de la colonne Disponible vers la colonne Sélectionnée. Appuyer sur OK.
5. Revenir à la Page001. Notre cote devrait maintenant lire la valeur correcte de 53. (si vous voyez toujours 43.27, vous devrez peut-être appuyer sur le bouton Recalculer ou faire glisser un peu la valeur de la cote jusqu'à ce qu'elle change).

## Aller plus loin

Dans ce tutoriel, vous avez suffisamment appris sur TechDraw pour produire un dessin comme celui-ci (par [NormandC](/User:Normandc "User:Normandc")). Voir la note 2.

![](/images/TDTut_FC018_TechDraw_Dim_Iso_View_01_NC.png)

Il y a beaucoup plus de fonctionnalités à explorer dans TechDraw: vues en coupe, vues détaillées, symboles SVG, images, hachurage de face.

## Remarques

1. Il y a un excellent ensemble de préférences suggérées dans ce post [post du Forum (en)](https://www.forum.freecadweb.org/viewtopic.php?f=3&t=30083#p248189).
2. Ce dessin a été réalisé avec la v0.18. Il montre les cotes dans le format approprié pour une vue isométrique. Sous la v0.17, les lignes d'extension seront perpendiculaires aux arêtes plutôt qu'alignées avec les axes.

## Ressources additionnelles

* Le fichier FreeCAD de cet exercice pour comparaison (fait sous 0.17) [Télécharger](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd?raw=true)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_TechDraw_Tutorial/fr&oldid=1549399>"