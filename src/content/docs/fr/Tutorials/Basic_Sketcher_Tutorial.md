---
title: Sketcher Tutoriel d'introduction
---
|  |
| --- |
| Tutoriel |
| Thème |
| Sketcher |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 60 minutes |
| Auteurs |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) et vocx |
| Version de FreeCAD |
| 0.19 |
| Fichiers exemples |
| [Basic Sketcher tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel vise à présenter au lecteur le flux de travail de base de l'[Atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

L'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") existe en tant qu 'atelier autonome, il peut donc être utilisé pour dessiner des objets 2D (planaires) génériques. Cependant, il est principalement utilisé en conjonction avec l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Une esquisse fermée est normalement utilisée pour créer une surface ou un profil à extruder dans un solide [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") avec une opération telle que ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").

Le lecteur pratiquera:

* Création d'une géométrie de construction
* Création d'une géométrie réelle
* Application de contraintes géométriques
* Application de contraintes de référence
* Obtention d'un profil fermé

Pour une description plus approfondie, lisez le [Manuel de référence pour Sketcher](/Sketcher_Lecture/fr "Sketcher Lecture/fr").

![](/images/00_Sk01_Sketcher_fully_constrained_final.png)

Résultat final de l'esquisse avec toute la géométrie entièrement contrainte y compris la géométrie de construction pour le support.

## Installation

1. Ouvrez FreeCAD, créez un nouveau document vide avec **Fichier → ![](/images/Std_New.svg) [Nouveau](/Std_New/fr "Std New/fr")**.

:   1.1. Basculez vers l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") depuis le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr") ou le **[menu affichage](/Std_View_Menu/fr "Std View Menu/fr") → Atelier → Sketcher**.

Quelques actions à retenir:

* Appuyez sur le bouton droit de la souris ou appuyez une fois sur Echap sur le clavier pour désélectionner l'outil actif en mode édition.
* Pour quitter le mode d'édition d'esquisse, appuyez sur le bouton Fermer dans le [panneau des tâches](/Task_Panel/fr "Task Panel/fr") ou appuyez deux fois sur Echap au le clavier.
* Pour entrer à nouveau en mode édition, double-cliquez sur l'esquisse dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou sélectionnez-la puis cliquez sur ![](/images/Sketcher_EditSketch.svg) [Sketcher Modifier une esquisse](/Sketcher_EditSketch/fr "Sketcher EditSketch/fr").

## Création d'une esquisse

2. Cliquez sur ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").

:   2.1. Choisissez l'orientation de l'esquisse, c'est-à-dire l'un des plans de base XY, XZ ou YZ. Choisissez également si vous souhaitez une orientation inversée et un décalage par rapport au plan de base.
:   2.2. Nous utiliserons le plan et les options par défaut.
:   2.3. Cliquez sur OK pour commencer à construire l'esquisse.

Nous sommes maintenant dans le mode d'édition d'esquisse. Une fois là, nous sommes en mesure d'utiliser la majorité des outils de cet atelier.

*Remarque:* la [vue en arborescence](/Tree_view/fr "Tree view/fr") basculera en [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"). Dans cette interface, développez la section **Edit controls** et assurez-vous que l'option **Auto constraints** est activée. D'autres options peuvent être modifiées, notamment la taille de la grille visible et si nous voulons nous y accrocher. Dans ce tutoriel, nous ne nous accrocherons pas à la grille et nous la cacherons également. Dans d'autres sections du [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"), vous pouvez également voir quels éléments géométriques et contraintes ont été définis.

![](/images/01_Sk01_Sketcher_Task_panel.png)

Partie supérieure du [Panneau des tâches](/Task_Panel/fr "Task Panel/fr") de l'esquisse.

## Création de la géométrie

3. La géométrie de construction est utilisée pour guider la création d'une "vraie" géométrie. La géométrie réelle sera celle montrée en dehors du mode d'édition d'esquisse, tandis que la géométrie de construction ne sera montrée qu'à l'intérieur du mode d'édition. Par conséquent, vous pouvez utiliser autant de géométrie de construction que nécessaire pour créer de vraies formes.

:   3.1. Cliquez sur ![](/images/Sketcher_ToggleConstruction.svg) [Sketcher Basculer le mode de la géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr"). Les éléments géométriques seront désormais dessinés en **Construction mode**.
:   3.2. Cliquez sur ![](/images/Sketcher_Line.svg) [Sketcher Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr").
:   3.3. Approchez-vous de l'origine de l'esquisse, le point doit être en surbrillance et à l'approche de votre curseur, l'icône ![](/images/Constraint_PointOnPoint.svg) [Sketcher Contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") apparaîtra.
:   3.4. Cliquez sur le point puis déplacez le pointeur pour commencer à dessiner une nouvelle ligne à partir de celui-ci. Déplacez le pointeur de sorte que la ligne ait une longueur d'environ `30 mm`. Vous n'avez pas besoin d'être très précis dans cette étape. Plus tard, nous définirons la bonne dimension.
:   3.5. Répétez cette procédure quatre fois de plus pour placer les lignes de construction en étoile. Ne vous inquiétez pas trop de leur taille ou de leur position, il suffit de les étendre dans les quatre quadrants.
:   3.6. Maintenant quitter le mode de construction, en cliquant simplement à nouveau sur ![](/images/Sketcher_ToggleConstruction.svg) [Sketcher Basculer le mode de la géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr").

*Remarque 1:* jusqu'à présent, l'outil [Sketcher Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr") est toujours actif. Cela signifie que nous pouvons continuer à cliquer dans la [vue 3D](/3D_view/fr "3D view/fr") pour dessiner autant de lignes que nous voulons. Si nous souhaitons quitter cet outil, nous pouvons appuyer sur le bouton droit de la souris ou appuyer une fois sur Echap sur le clavier. En faisant cela, le pointeur ne créera plus de lignes, ce sera juste un pointeur nous permettant de sélectionner les objets que nous venons de créer. Dans ce mode pointeur, nous pouvons sélectionner et faire glisser les extrémités de chaque ligne pour ajuster son placement.

*Remarque 2:* n'appuyez pas sur Echap une deuxième fois car cela ferait quitter le mode d'édition d'esquisse. Si vous faites cela, entrez de nouveau dans le mode d'édition en double-cliquant sur l'esquisse dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

Jetez à nouveau un œil au [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"). La section **Solver messages** indique déjà que l'esquisse est sous-contrainte et mentionne le nombre de *degrés de liberté*.

Consultez les sections **Constraints** et **Elements** pour voir les nouvelles contraintes et lignes répertoriées. Une fois que vos esquisses contiennent plusieurs éléments, il peut être difficile de les sélectionner dans la [vue 3D](/3D_view/fr "3D view/fr"). Vous pouvez donc utiliser ces listes pour sélectionner l'objet que vous souhaitez exactement.

![](/images/02_Sk01_Sketcher_construction.png)

Lignes de construction formant une étoile avec son centre à l'origine.

## Géométrie réelle

La géométrie réelle doit créer une forme fermée si elle doit être utilisée comme un profil pouvant être extrudé par des outils tels que ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").

Assurez-vous que vous n'êtes pas en mode construction en cliquant sur ![](/images/Sketcher_ToggleConstruction.svg) [Basculer le mode de la géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") , si vous n'avez pas déjà quitté ce mode.

### Les arcs extérieurs

4. Créez un cercle.

:   4.1. Cliquez sur ![](/images/Sketcher_Circle.svg) [Sketcher Cercle](/Sketcher_CreateCircle "Sketcher CreateCircle").
:   4.2. Cliquez sur **origine** de l'esquisse pour positionner son point central.
:   4.3. Cliquez n'importe où dans la [vue 3D](/3D_view/fr "3D view/fr") pour définir le rayon de circonférence comme distance par rapport à l'origine. Faites-le d'environ `8 mm`. Encore une fois, la dimension sera fixée ultérieurement.

5. Créez une série d'arcs.

:   5.1. Cliquez sur ![](/images/Sketcher_Arc.svg) [Sketcher Créer un arc...](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr").
:   5.2. Approchez-vous de l'extrémité de l'une des lignes de construction et cliquez dessus. Cela définira le point central de l'arc circulaire ![](/images/Constraint_PointOnPoint.svg) [coïncidant](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") avec l'extrémité de cette ligne.
:   5.3. Cliquez une fois dans la [vue 3D](/3D_view/fr "3D view/fr") à un emplacement arbitraire pour définir simultanément le rayon de l'arc et son premier point final. Définissez un rayon approximatif de `8 mm`.
:   5.4. Déplacez le pointeur dans le sens inverse des aiguilles d'une montre pour tracer un arc dont la concavité pointe vers l'origine de l'esquisse. Cliquez pour définir le point final de l'arc, en définissant un arc circulaire qui balaye approximativement `180°` ou un demi-cercle.
:   5.5. Répétez ces étapes avec chaque ligne de construction, de sorte que chacune d'elles ait un arc circulaire à son extrémité. Nous appellerons ces arcs O-arcs pour les arcs extérieurs.

![](/images/03_Sk01_Sketcher_outer_arcs.png)

Arcs de cercle ajoutés aux extrémités des lignes de construction. Ainsi qu'un cercle central.

### Les arcs intérieurs

6. Créez un arc entre chaque paire des O-arcs précédents.

:   6.1. Toujours avec l'outil ![](/images/Sketcher_Arc.svg) [Sketcher Créer un arc...](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr") actif, cliquez quelque part entre deux O-arcs mais plus loin de l'origine de l'esquisse, pour définir le point central d'un nouvel arc.
:   6.2. Cliquez quelque part près du point final d'un O-arc et déplacez le pointeur pour balayer un autre arc finissant près d'un autre point final d'un O-arc différent comme si vous essayiez de joindre les points des extrémités. Cette fois, la concavité doit pointer loin de l'origine.
:   6.3. Répétez ces étapes pour que chaque paire de O-arcs ait un nouvel arc entre elles. Nous appellerons ces arcs I-arcs pour les arcs vers l'intérieur.

Pour résumer, les O-arcs devraient avoir leur courbure pointant vers l'extérieur et leur concavité pointant vers l'origine de l'esquisse; les I-arcs devraient avoir leur courbure pointant vers l'intérieur et leur concavité pointant loin de la même origine.

![](/images/04_Sk01_Sketcher_inner_arcs.png)

Arcs de cercle ajoutés entre le premier ensemble d'arcs placé.

## Contraintes

Jetez à nouveau un œil au [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"). En raison des nouveaux éléments géométriques que nous avons dessinés, la section **Solver messages** indique encore plus *degrees of freedom*. Un *degree of freedom* (degré de liberté) (DOF) indique un mouvement possible d'un élément. Par exemple, un point peut être déplacé dans les directions horizontale et verticale, il a donc deux degrés de liberté. Une ligne est définie par deux points donc au total elle a quatre degrés de liberté. Si nous fixons l'un de ces points, alors le système entier n'a que deux degrés de liberté disponibles. Si nous fixons en outre le mouvement horizontal du point restant, il ne nous reste qu'un degré de liberté; et si nous fixons également le mouvement vertical de ce point, alors le dernier degré de liberté disparaît et la ligne ne peut plus bouger de sa position.

Jusqu'à présent, lorsque nous avons dessiné des lignes et des courbes, l'esquisse nous a ajouté des contraintes automatiques, celles qui maintiennent les lignes liées à l'origine et les O-arcs liés aux lignes de construction. Mais nous n'avons pas ajouté d'autres contraintes explicites afin que les formes géométriques puissent toujours être déplacées dans de nombreuses directions. **Les contraintes sont des "règles" qui nous indiquent dans quelles conditions un objet géométrique peut se déplacer et dans quelle mesure.** Elles sont utilisées pour éliminer les degrés de liberté afin que l'esquisse ait une forme stable. Si nous éliminons tous les degrés de liberté, l'esquisse est *entièrement contrainte* et a une forme fixe, c'est-à-dire que ses points ne peuvent pas bouger du tout. En général, c'est une bonne idée de contraindre complètement les esquisses car cela se traduira par des modèles stables.

Il existe deux principaux types de contraintes:

* *Geometric constraints* définit les caractéristiques des formes sans spécifier les dimensions exactes, par exemple, l'horizontalité, la verticalité, le parallélisme, la perpendicularité et la tangence.
* *Datum constraints* définit les caractéristiques des formes en spécifiant les dimensions, par exemple, une longueur numérique ou un angle.

## Contraintes géométriques

### Longueur et rayon égaux

7. Contraignez géométriquement les lignes et les arcs.

:   7.1. Sélectionnez les cinq lignes de construction. Vous n'avez qu'à cliquer une fois pour sélectionner un élément.
:   7.2. Appuyez sur ![](/images/Constraint_EqualLength.svg) [Sketcher Créer une contrainte d'égalité...](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr").
:   *Remarque:* cela ne crée que quatre contraintes. Les contraintes sont enchaînées, la première ligne a la même longueur que la seconde, qui a la même longueur que la troisième, qui a encore la même longueur que la quatrième, qui a la même longueur que la cinquième. Donc dans ce cas, la première et la cinquième longueur ont la même longueur.

:   7.3. Sélectionnez les cinq O-arcs, ceux centrés sur l'extrémité d'une ligne de construction.
:   7.4. Appuyez sur ![](/images/Constraint_EqualLength.svg) [Sketcher Créer une contrainte d'égalité...](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr").
:   7.5. Répétez avec tous les I-arcs, ceux entre les O-arcs.
:   *Remarque:* encore une fois les contraintes sont enchaînées. Par conséquent, tous les arcs en O auront le même rayon et tous les arcs en I auront le même rayon. A ce moment, la valeur spécifique de ces longueurs n'est pas fixe. Vous pouvez utiliser le pointeur pour faire glisser un point et voir comment l'esquisse est mise à jour tout en respectant les contraintes en place.

:   7.6. Sélectionnez la ligne de construction la plus proche de l'axe vertical.
:   7.7. Appuyez sur ![](/images/Constraint_Vertical.svg) [‎Sketcher Créer une contrainte verticale...](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") (facultatif). Si vous avez tracé la ligne de construction vers le bas sur l'axe Y, un ![](/images/Constraint_PointOnObject.svg) [Sketcher Fixer un point sur un objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") automatique a déjà été placé, en maintenant la ligne de construction verticale. Dans ce cas, aucun ![](/images/Constraint_Vertical.svg) [‎Sketcher contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") supplémentaire n'est nécessaire.

*Remarque 1:* lorsque vous ajoutez des contraintes, des symboles de superposition indiquant le type de contrainte apparaissent sur la géométrie ans la [vue 3D](/3D_view/fr "3D view/fr"). Si ces symboles obscurcissent votre vue, vous pouvez les masquer en décochant la contrainte dans le [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"). Notez également que le nombre de degrés de liberté diminue après l'ajout de chaque contrainte.

*Remarque 2:* si vous souhaitez désactiver temporairement la contrainte, vous pouvez la sélectionner et appuyer sur ![](/images/Sketcher_ToggleActiveConstraint.svg) [Sketcher Activer/désactiver la contrainte](/Sketcher_ToggleActiveConstraint/fr "Sketcher ToggleActiveConstraint/fr"). Lorsque vous souhaitez l'appliquer à nouveau, appuyez à nouveau sur le même bouton.

![](/images/05a_Sk01_Sketcher_equality_constraints_lines.png) ![](/images/05b_Sk01_Sketcher_equality_constraints_O-arcs.png)

![](/images/05c_Sk01_Sketcher_equality_constraints_I-arcs.png)

Esquisse avec des contraintes d'égalité appliquées aux lignes de construction et aux deux ensembles d'arcs.

### Tangence

8. Appliquez la tangence aux arcs.

:   8.1. Sélectionnez un point d'extrémité d'un O-arc puis le point d'extrémité le plus proche de l'I-arc adjacent.
:   8.2. Appuyez sur ![](/images/Constraint_Tangent.svg) [Sketcher Créer une contrainte tangente...](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr"). Cela permet aux deux arcs adjacents de se connecter en douceur à leurs extrémités.
:   8.3. Répétez l'opération pour tous les points d'extrémité des O-arcs et I-arcs pour obtenir un profil fermé.

*Remarque:* L'application de la contrainte tangentielle déplacera très souvent la géométrie afin de produire une connexion lisse. Vous devrez peut-être utiliser le pointeur pour repositionner un peu les points avant d'appliquer la prochaine contrainte tangentielle. Essayez de placer les points d'extrémité de manière à ce que deux arcs ne soient pas trop éloignés l'un de l'autre afin qu'ils puissent être connectés avec une ligne courte plutôt qu'une longue.

À partir de cette étape, nous avons maintenant créé un profil fermé, car tous les arcs ont été liés ensemble. Nous pouvons maintenant fournir des contraintes de référence pour fixer la forme de l'esquisse. Alors que les dimensions des lignes et des arcs ne sont pas fixées, nous pouvons faire glisser les points de l'esquisse et observer les modifications de l'esquisse entière.

![](/images/06_Sk01_Sketcher_tangency_constraints.png)

Esquisse avec des contraintes tangentielles appliquées aux arcs, ce qui ferme la forme.

## Contraintes sur les valeurs

Ces contraintes spécifient les distances numériques entre deux points et les angles entre deux lignes.

### Distances et angles

9. Ajustez la taille des lignes de construction.

:   9.1. Sélectionnez la ligne de construction contrainte verticalement.
:   9.2. Appuyez sur ![](/images/Constraint_VerticalDistance.svg) [Sketcher Contrainte distance en Y](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") (verticale).
:   9.3. Définissez la longueur sur `30 mm`. Étant donné que toutes les lignes de construction sont contraintes d'avoir la même longueur, toutes ces lignes ajustent leurs tailles en même temps.

10. Ajustez l'angle entre les lignes de construction.

:   10.1. Sélectionnez la ligne de construction verticale et la ligne de construction la plus proche.
:   10.2. Appuyez sur ![](/images/Constraint_InternalAngle.svg) [Sketcher Fixer l'angle...](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr").
:   10.3. Réglez l'angle sur `72°`..
:   10.4. Répétez la même procédure pour chaque paire de lignes de construction et utilisez le même angle.
:   *Remarque:* à ce stade, l'esquisse peut avoir très peu de degrés de liberté, ce qui signifie que sa forme ne peut pas être trop modifiée. Si vous essayez d'ajouter plus de contraintes, celles-ci peuvent provoquer un conflit avec les contraintes précédemment ajoutées. Si tel est le cas, n'ajoutez pas ces contraintes et passez aux étapes suivantes.

![](/images/07a_Sk01_Sketcher_length_constraint.png) ![](/images/07b_Sk01_Sketcher_angle_constraint.png)

Esquisse avec contrainte de longueur appliquée à une ligne de construction verticale (gauche) et contraintes d'angle à trois paires de lignes de construction (droite).

### Rayon

11. Ajustez la taille des arcs.

:   11.1. Sélectionnez l'un des arcs en O, centré sur l'extrémité d'une ligne de construction.
:   11.2. Appuyez sur ![](/images/Constraint_Radius.svg) [Sketcher Contrainte radiale](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.3. Définissez le rayon à `8 mm`. Étant donné que tous les O-arcs sont contraints d'avoir le même rayon, tous ces arcs ajustent leurs tailles en même temps.
:   11.4. Sélectionnez l'un des I-arcs, entre deux O-arcs.
:   11.5. Appuyez sur ![](/images/Constraint_Radius.svg) [Sketcher Contrainte radiale](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.6. Définissez le rayon à `11 mm`. Étant donné que tous les I-arcs sont contraints d'avoir le même rayon, tous ces arcs ajustent leurs tailles en même temps.

![](/images/08a_Sk01_Sketcher_radius_1_constraint.png) ![](/images/08b_Sk01_Sketcher_radius_2_constraint.png)

Esquisse avec des contraintes de rayon appliquées aux arcs extérieurs (gauche) et intérieurs (droite).

:   11.7. Enfin, sélectionnez le cercle au centre de l'esquisse, appuyez sur ![](/images/Constraint_Radius.svg) [Sketcher Contrainte radiale](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") et définissez la valeur à `8 mm`.

Nous devrions nous retrouver avec un croquis entièrement contraint. Cela peut être confirmé en remarquant le changement de couleur de la géométrie réelle et par le message affiché dans le [Panneau des tâches](/Task_Panel/fr "Task Panel/fr").

![](/images/09_Sk01_Sketcher_fully_constrained.png)

Esquisse avec toutes les contraintes géométriques et de référence appliquées.

## Extrusion

12. Maintenant que nous avons une esquisse entièrement contrainte, elle peut être utilisée pour créer un corps solide.

:   12.1. Quittez le mode d'édition d'esquisse en appuyant sur le bouton Fermer ou en appuyant deux fois sur Echap. L'esquisse doit apparaître dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et la [vue 3D](/3D_view/fr "3D view/fr").
:   12.2. Basculez vers [Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
:   12.3. L'esquisse étant sélectionnée dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), appuyez sur ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), choisissez le plan XY par défaut, et appuyez sur OK. L'esquisse doit maintenant apparaître à l'intérieur du corps.
:   12.4. Sélectionnez l'esquisse, puis appuyez sur ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr"), choisissez les options par défaut et appuyez sur OK pour créer un extrusion solide.

![](/images/09b_Sk01_Sketcher_fully_constrained_clean.png) ![](/images/10_Sk01_Sketcher_solid_extrusion.png)

A gauche: l'esquisse entièrement contrainte avec seulement les contraintes les plus importantes. A droite: l'extrusion solide produite avec [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").

## Informations supplémentaires

Pour une description plus approfondie, consultez la documentation de l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") et lisez également le [manuel de référence pour Sketcher](/Sketcher_Lecture/fr "Sketcher Lecture/fr").

Contraindre une esquisse peut se faire de différentes manières. En général, il est recommandé d'utiliser d'abord les contraintes géométriques et de minimiser le nombre de contraintes de référence, car cela simplifie la tâche du solveur de contraintes internes. Pour étudier cela, répétez cet exemple, en ajoutant maintenant les contraintes dans un ordre différent.

* D'abord contraindre les lignes de construction avant de dessiner les arcs.
* Ou contraignez la taille des arcs avant de les rendre tangents.
* Ou définissez l'angle des lignes de construction avant d'ajouter d'autres éléments.
* Essayez d'utiliser une autre géométrie de construction.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Sketcher_Tutorial/fr&oldid=1493284>"