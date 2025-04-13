---
title: FEM Filtre par contours
---
|  |
| --- |
| FEM Filtre par contours |
| Emplacement du menu |
| Résultats → Filtre par contours |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.21 |
| Voir aussi |
| [FEM Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"), [FEM Fonctions de filtrage](/FEM_PostCreateFunctions/fr "FEM PostCreateFunctions/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

Crée des iso-contours et des iso-lignes dans le maillage des résultats.

![](/images/FEM_PostFilterContours_Example.png)

Iso-contours, décrivant la composante y de l'induction magnétique absolue dans et autour  
d'un fil de cuivre traversé par un courant électrique à une fréquence de 100 kHz.  
Pour plus d'informations sur ce modèle, consultez la section 14 des [tutoriels d'Elmer](https://www.nic.funet.fi/index/elmer/doc/ElmerTutorials.pdf).

## Utilisation

1. Sélectionnez un [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") déjà créé.
2. Créez le filtre soit en appuyant sur le bouton ![](/images/FEM_PostFilterContours.svg) **Filtre par contours** ou en utilisant le menu **Résultats → ![](/images/FEM_PostFilterContours.svg) Filtre par contours**.
3. Ajustez les **Options d'affichage des résultats** comme pour le [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Vous devrez peut-être cacher le pipeline pour voir l'effet du filtre dans l'aperçu.
4. Dans la fenêtre de dialogue qui apparaît, définissez le champ du résultat et le nombre de contours.
5. Cliquez sur le bouton OK pour terminer la commande.

## Options

La fenêtre de dialogue propose les paramètres suivants :

* **Champ** : le champ de résultats à dessiner.
* **Vecteur** : si le **Champ** est un vecteur, les composantes du vecteur.
* **Nombre de contours** : nombre de contours à créer. Remarque : selon la géométrie, le nombre de contours créés peut être supérieur à celui spécifié. Ceci est dû à l'algorithme de création. Cependant, pour les géométries 2D et 3D simples, le nombre devrait être correct.
* **Lissage** : si cette option est cochée, le filtre de lissage Laplacien est appliqué au filtre Contours pour rendre les isosurfaces moins grossières. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **Facteur de relaxation** : contrôle le niveau de lissage via la quantité de déplacement des sommets (si le lissage est activé). [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **Pas de couleur** : ne pas appliquer de couleur aux contours.

**Remarque** : un **champ** ne peut être défini que si une fonction de filtre existe et a été appliquée avec ![](/images/FEM_PostApplyChanges.svg) [Appliquer les modifications](/FEM_PostApplyChanges/fr "FEM PostApplyChanges/fr"). Vous pouvez également rouvrir la boîte de dialogue du filtre.

## Information sur la taille du fichier

La mise en place d'un filtre par contours peut augmenter la taille du fichier de manière significative. La raison en est que l'algorithme doit copier le [pipeline des résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Un seul contour ne nécessite pas le maillage entier et l'algorithme n'a besoin que de la moitié de la taille de stockage du pipeline pour créer un contour. Mais la taille augmentera pour chaque contour. Prenons par exemple le cas où la taille de stockage du pipeline est de 1 Mo, l'ajout d'un filtre par contours avec 10 contours entraînera une augmentation de la taille du fichier de 5 Mo.

La taille de stockage du pipeline dépend du maillage utilisé. Plus le maillage est fin, plus la taille du pipeline est importante. Soyez donc prudent si vous avez de grandes mailles et un grand nombre de contours.

Si vous n'utilisez les contours que sur une partie du maillage, par exemple lorsque vous avez un filtre d'écrêtage, alors créez le filtre pa contours sur le filtre et non sur le pipeline. Si vous avez besoin de l'ensemble du pipeline, commencez par quelques contours, puis augmentez progressivement jusqu'à ce que la taille du fichier reste acceptable et que la visualisation soit telle que vous la souhaitez.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterContours/fr&oldid=1569517>"