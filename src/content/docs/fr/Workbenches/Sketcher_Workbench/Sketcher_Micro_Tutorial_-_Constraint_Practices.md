---
title: Sketcher Tutoriel sur les pratiques des contraintes
---
|  |
| --- |
| Tutoriel |
| Thème |
| Sketcher |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| Moins de 15 minutes |
| Auteurs |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) et vocx |
| Version de FreeCAD |
| 0.19 |
| Fichiers exemples |
| [Sketcher Constraints practices](https://forum.freecadweb.org/viewtopic.php?f=36&p=371659#p371659) |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel a été écrit à l'origine par Quick61 et a été écrit et illustré par vocx.

Ce tutoriel est conçu pour aider le nouvel utilisateur à se familiariser avec les meilleures pratiques de contrainte d'une [Esquisse](/Sketch/fr "Sketch/fr") dans le flux de travail de l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench "Sketcher Workbench").

Il existe une règle générale avec des contraintes : moins il y a de *contraintes de données* (dimensions), mieux c'est.

Il est préférable d'utiliser une *contrainte géométrique* à la place d'une dimensionnelle si possible. Cela a à voir avec le fonctionnement interne du solveur de contraintes de l'esquisse.

## Installation

1. Ouvrez FreeCAD, créez un nouveau document vide avec **Fichier → ![](/images/Std_New.svg) [Nouveau](/Std_New/fr "Std New/fr")**.

:   1.1. Basculez vers l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") depuis le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr") ou le **[menu affichage](/Std_View_Menu/fr "Std View Menu/fr") → Atelier → Sketcher**.

Quelques actions à retenir :

* Appuyez sur le bouton droit de la souris ou appuyez une fois sur Echap sur le clavier pour désélectionner l'outil actif en mode édition.
* Pour quitter le mode d'édition d'esquisse, appuyez sur le bouton Fermer dans le [panneau des tâches](/Task_Panel/fr "Task Panel/fr") ou appuyez deux fois sur Echap au le clavier.
* Pour entrer à nouveau en mode édition, double-cliquez sur l'esquisse dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou sélectionnez-la puis cliquez sur ![](/images/Sketcher_EditSketch.svg) [Sketcher Modifier une esquisse](/Sketcher_EditSketch/fr "Sketcher EditSketch/fr").

## Créer une esquisse

2. Cliquez sur ![](/images/Sketcher_NewSketch.svg) [Nouvel esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").

:   2.1. Choisissez l'orientation de l'esquisse, c'est-à-dire l'un des plans de base XY, XZ ou YZ. Nous utiliserons le plan et les options par défaut.
:   2.2. Cliquez sur OK pour commencer à construire l'esquisse.

*Remarque :* dans le [Panneau des tâches](/Task_Panel/fr "Task Panel/fr") développez la section **Edit controls** et assurez-vous que l'option **Contraintes automatiques** est désactivée. Désactivez également l'accrochage à la grille et masquez la grille.

## Première approche : les contraintes numériques

3. Nous allons dessiner un carré entièrement contraint, centré à l'origine.

:   3.1. Cliquez sur ![](/images/Sketcher_CreatePolyline.svg) [Créer une polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") puis tracez quatre lignes en forme générale de rectangle autour de l'origine.

![](/images/01a_Sk02_Sketcher_Rectangle_unconstrained.png)

Esquisse rectangulaire sans contrainte.

:   3.2. Sélectionnez une ligne horizontale et appuyez sur ![](/images/Constraint_HorizontalDistance.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") puis entrez `20 mm`.
:   3.3. Sélectionnez l'autre ligne horizontale et répétez la contrainte avec la même distance.
:   3.4. Sélectionnez une ligne verticale et appuyez sur ![](/images/Constraint_VerticalDistance.svg) [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") puis entrez `20 mm`.
:   3.5. Sélectionnez l'autre ligne verticale et répétez la contrainte avec la même distance.
:   3.6. Sélectionnez un point d'angle inférieur (a) et l'origine de l'esquisse, puis appuyez sur ![](/images/Constraint_HorizontalDistance.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") puis entrez `10 mm`.
:   3.7. Sélectionnez le point d'angle supérieur (b) au-dessus du point d'angle précédent (a) et l'origine de l'esquisse et répétez la contrainte horizontale avec la même distance.
:   3.8. Sélectionnez l'autre coin inférieur (c) et l'origine de l'esquisse, puis appuyez sur ![](/images/Constraint_VerticalDistance.svg) [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") puis saisissez `10 mm`.
:   3.9. Sélectionnez de nouveau le point d'angle supérieur (b) et l'origine de l'esquisse, puis répétez la contrainte verticale avec la même distance.

![](/images/01b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/images/01c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

A gauche : contraintes de référence pour les côtés. À droite : contraintes de référence supplémentaires pour les distances intérieures.

En regardant la section **Constraints** du [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"), nous voyons que les contraintes sont trop nombreuses. Ils encombrent également la vue du croquis. Ces contraintes sont également gourmandes en calcul pour le solveur bien que ce ne soit pas un problème avec une forme simple, il peut le devenir avec des formes plus complexes.

## Une meilleure façon : numériques et contraintes géométriques

4. Nous allons dessiner le même carré entièrement contraint et centré à l'origine. Lorsque vous créez la nouvelle esquisse, assurez-vous que l'option **Auto constraints** est désactivée.

:   4.1. Cliquez sur ![](/images/Sketcher_CreatePolyline.svg) [Créer une polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr"), puis tracez quatre lignes en forme générale de rectangle autour de l'origine.
:   4.2. Sélectionnez une ligne horizontale et appuyez sur ![](/images/Constraint_Horizontal.svg)  [Horizontal](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr").
:   4.3. Sélectionnez l'autre ligne horizontale et répétez la contrainte.
:   4.4. Sélectionnez une ligne verticale et appuyez sur ![](/images/Constraint_Vertical.svg)  [Vertical](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr").
:   4.5. Sélectionnez l'autre ligne verticale et répétez la contrainte.

![](/images/02a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Contraintes géométriques horizontales et verticales.

:   4.6. Sélectionnez une ligne horizontale et appuyez sur ![](/images/Constraint_HorizontalDistance.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") puis entrez `20 mm`. Nous voyons que l'autre ligne horizontale change de taille en même temps.
:   4.7. Sélectionnez une ligne verticale et appuyez sur ![](/images/Constraint_VerticalDistance.svg) [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") puis entrez `20 mm`. Nous voyons que l'autre ligne verticale change de taille en même temps.
:   4.8. Sélectionnez un point d'angle inférieur (a) et l'origine de l'esquisse, puis appuyez sur ![](/images/Constraint_HorizontalDistance.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), puis entrez `10 mm`.
:   4.9. Sélectionnez le point d'angle supérieur (b) au-dessus du point d'angle précédent (a) et l'origine de l'esquisse, puis appuyez sur {{Button|![](/images/Constraint_VerticalDistance.svg) [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr")} }, puis entrez `10 mm`.

![](/images/02b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/images/02c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

A gauche : contraintes de référence pour seulement deux côtés. A droite : contraintes de référence supplémentaires pour seulement deux distances intérieures.

Il s'agit d'une esquisse mieux contrainte que la première. Les contraintes géométriques horizontales et verticales nous permettent d'utiliser moins de contraintes de référence, de sorte que notre esquisse semble moins encombrée.

## Esquisse optimale : principalement des contraintes géométriques

5. Nous allons dessiner le même carré entièrement contraint et centré à l'origine. Lorsque vous créez la nouvelle esquisse, assurez-vous que l'option **Auto constraints** est désactivée.

:   5.1. Cliquez sur ![](/images/Sketcher_CreatePolyline.svg) [Créer une polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr"), puis tracez quatre lignes en forme générale de rectangle autour de l'origine.
:   5.2. Sélectionnez une ligne horizontale et appuyez sur ![](/images/Constraint_Horizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr").
:   5.3. Sélectionnez l'autre ligne horizontale et répétez la contrainte.
:   5.4. Sélectionnez une ligne verticale et appuyez sur ![](/images/Constraint_Vertical.svg) [Vertical](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr").
:   5.5. Sélectionnez l'autre ligne verticale et répétez la contrainte.

![](/images/03a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Contraintes géométriques horizontales et verticales.

:   5.6. Sélectionnez un point d'angle inférieur (a) puis le point d'angle supérieur qui est diagonalement opposé, puis l'origine de l'esquisse; puis appuyez sur ![](/images/Constraint_Symmetric.svg) [Symmétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr"). Les deux points sélectionnés seront équidistants de l'origine.
:   5.7. Sélectionnez deux côtés adjacents du rectangle (connectés à un coin) et appuyez sur ![](/images/Constraint_EqualLength.svg) [Longueur égale](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr"). Notez qu'en raison de la symétrie des points d'angle, tous les côtés sont désormais de la même taille.

![](/images/03b_Sk02_Sketcher_Rectangle_constrained_symmetric.png) ![](/images/03c_Sk02_Sketcher_Rectangle_constrained_equal_length.png)

A gauche : contrainte symétrique pour seulement deux points d'angle. A droite : distances de longueur égale supplémentaires pour seulement deux côtés adjacents.

:   5.8. Sélectionnez une ligne horizontale et appuyez sur ![](/images/Constraint_HorizontalDistance.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") puis entrez `20 mm`. En raison des contraintes symétriques et d'égalité de longueur précédemment ajoutées, nous voyons que tous les côtés deviennent égaux en même temps.

![](/images/03d_Sk02_Sketcher_Rectangle_constrained_length.png)

Toutes les contraintes géométriques appliquées et une seule contrainte de référence pour un côté.

C'est la meilleure manière de contraindre cette esquisse car nous n'avons utilisé qu'une seule contrainte de référence (dimensionnelle).

## Ressources additionnelles

* [Tutoriel d'introduction à Sketcher](/Basic_Sketcher_Tutorial/fr "Basic Sketcher Tutorial/fr")
* [Manuel de référence pour Sketcher](/Sketcher_Lecture/fr "Sketcher Lecture/fr")
* [Tutoriel Sketcher](/Sketcher_Tutorial/fr "Sketcher Tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Micro_Tutorial_-_Constraint_Practices/fr&oldid=1493286>"