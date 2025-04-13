---
title: Tutoriel d'assemblage cinématique
---

|                                                         |
| ------------------------------------------------------- |
| Tutoriel                                                |
| Thème                                                   |
| Assembly3, un mécanisme simple                          |
| Niveau                                                  |
| Une connaissance basique des outils Assembly3 est utile |
| Temps d'exécution estimé                                |
| 30 minutes                                              |
| Auteurs                                                 |
| [FBXL5](/User:FBXL5 "User:FBXL5")                       |
| Version de FreeCAD                                      |
| 0.20 et plus                                            |
| Fichiers exemples                                       |
| _None_                                                  |
| Voir aussi                                              |
| _None_                                                  |
|                                                         |

## Introduction

Ce tutoriel porte sur la mise en place d'un mécanisme simple, principalement avec les outils de l'![](/images/Assembly3_workbench_icon.svg) [atelier externe Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr").

L'assemblage cinématique que nous allons créer se compose de quatre parties : une base, un curseur, une manivelle et une bielle. Ils sont reliés par quatre articulations.

![](/images/Assembly3_KinematicExample-01.png)

Pièces assemblées : la base (ambre), le curseur (bleu clair), la manivelle (rouge), la bielle (vert)

## Assemblage

### Les pièces

La **base** est un objet ayant deux géométries principales, un trou et une tige. Les deux sont cylindriques. Le reste de la forme n'est pas pertinent pour ce tutoriel, à moins qu'il ne provoque des collisions. Il en va de même pour les autres parties.

![](/images/Assembly3_KinematicExample-02.png)

Le **curseur** consiste en un arbre avec une tige à une extrémité. Les deux sont cylindriques.

![](/images/Assembly3_KinematicExample-03.png)

La **manivelle** a un trou et une tige. Là encore, les deux sont cylindriques.

![](/images/Assembly3_KinematicExample-04.png)

La **bielle** comporte deux trous cylindriques.

![](/images/Assembly3_KinematicExample-05.png)

### Liaisons

#### Verrouiller la base

Pour maintenir l'assemblage à la position désirée, il faut verrouiller la base.

: (Si la commande ![](/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover/fr "Assembly3 LockMover/fr") est activée, les outils de mouvement sont désactivés tant qu'une pièce verrouillée est sélectionnée).

1. Sélectionnez une face de la base.
2. Appuyez sur le bouton ![](/images/Assembly_ConstraintLock.svg) [Create "Locked" constraint](/Assembly3_ConstraintLock/fr "Assembly3 ConstraintLock/fr") pour maintenir la base en place de façon permanente.

![](/images/Assembly3_KinematicExample-08.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-09.png)

Face sélectionnée → Élément résultant

Ensuite, les quatre parties sont reliées par quatre articulations. La chaîne cinématique commence à la base.

#### Liaison base-curseur

La liaison base-curseur est une **liaison cylindrique**. Elle permet au curseur de glisser et de tourner autour de l'axe Z du trou de la base tout en gardant les axes Z des deux éléments alignés (colinéaires).

La contrainte correspondante est la contrainte "AxialAlignment". Elle fonctionne avec les éléments qui représentent une géométrie cylindrique, tels que les faces cylindriques, les faces circulaires et les bords circulaires.

1. Sélectionnez les faces cylindriques du trou de la base et de l'arbre du curseur.
2. Appuyez sur le bouton ![](/images/Assembly_ConstraintAxial.svg) [Create "AxialAlignment" constraint](/Assembly3_ConstraintAxial/fr "Assembly3 ConstraintAxial/fr").
3. Vous pouvez éventuellement renommer les éléments créés (modifiez leur propriété Données**Label**).

![](/images/Assembly3_KinematicExample-10.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-11.png)

Faces sélectionnées → Objets alignés

#### Liaison base-manivelle

La liaison base-manivelle est une _articulation à charnière_. Elle permet à la manivelle de tourner autour de l'axe Z de la base tout en maintenant les axes Z des deux éléments alignés (colinéaires) et le décalage entre leurs plans XY constant.

La contrainte correspondante est la contrainte "PlaneCoincident". Elle fonctionne avec les éléments qui représentent une géométrie planaire, tels que les faces circulaires et les bords circulaires (dans ce cas).

1. Sélectionnez la face circulaire ou le bord circulaire extérieur de l'axe de la base et le bord circulaire extérieur du trou de la manivelle.
2. Appuyez sur le bouton ![](/images/Assembly_ConstraintCoincidence.svg) [Create "PlaneCoincident" constraint](/Assembly3_ConstraintCoincidence/fr "Assembly3 ConstraintCoincidence/fr").
3. Vous pouvez éventuellement renommer les éléments créés.

![](/images/Assembly3_KinematicExample-12.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-13.png)

Face et bord sélectionnés → Objets alignés

#### Liaison curseur-bielle

La liaison curseur-bielle est une **articulation charnière**. Elle permet à la tige de tourner autour de l'axe Z de la tige du curseur tout en maintenant les axes Z des deux éléments alignés (colinéaires) et le décalage entre leurs plans XY constant.

La contrainte correspondante est la contrainte "PlaneCoincident" (voir ci-dessus).

1. Sélectionnez la face circulaire ou le bord circulaire extérieur de la tige du curseur, et le bord circulaire extérieur du trou de la tige.
2. Appuyez sur le bouton ![](/images/Assembly_ConstraintCoincidence.svg) [Create "PlaneCoincident" constraint](/Assembly3_ConstraintCoincidence/fr "Assembly3 ConstraintCoincidence/fr").
3. Vous pouvez éventuellement renommer les éléments créés.

![](/images/Assembly3_KinematicExample-14.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-15.png)

Face et bord sélectionnés → Objets alignés

#### Liaison manivelle-bielle

La liaison manivelle-bielle est un _joint cylindrique_. Elle permet à la tige de tourner et de glisser le long de l'axe Z de la manivelle tout en maintenant les axes Z des deux éléments alignés (colinéaires). Mais seule la rotation sera possible car le mouvement de glissement est limité par la combinaison de l'articulation base-manivelle et de l'articulation curseur-bielle.

La contrainte correspondante est la contrainte "AxialAlignment" (voir ci-dessus).

1. Sélectionnez les faces cylindriques du maneton et du trou de la tige.
2. Appuyez sur le bouton ![](/images/Assembly_ConstraintAxial.svg) [Create "AxialAlignment" constraint](/Assembly3_ConstraintAxial/fr "Assembly3 ConstraintAxial/fr").
3. Vous pouvez éventuellement renommer les éléments créés.

![](/images/Assembly3_KinematicExample-16.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-01.png)

Faces sélectionnées → Objets alignés

#### Contraintes redondantes

Lorsque la base est immobilisée et que les quatre articulations sont contraintes, deux messages apparaissent dans la [Vue rapport](/Report_view/fr "Report view/fr") :

- Un avertissement (orange) : "...redundant constraints".
- Un message simple (noir) : "...dof remaining: 0".

Cette combinaison de messages se produit lorsque des parties d'un assemblage sont soumises à des contraintes excessives, mais que le solveur est toujours en mesure de trouver une solution valide. Mais quelle est la cause de cette redondance ?

Il s'agit de la direction Z des tiges. Si nous regardons la tige du curseur par exemple, nous remarquerons que l'axe Z de son objet élément est contraint parallèlement à l'axe Z de la tige de la base par la chaîne d'assemblage base-manivelle-bielle-curseur. Cela signifie que la tige du curseur est empêchée de tourner autour de ses axes X et Y.

![](/images/Assembly3_KinematicExample-06.png)

D'autre part, la rotation autour de l'axe X (rouge) est déjà empêchée par la liaison base-manivelle ; et donc le degré de liberté (dof=degree of freedom) correspondant est contraint deux fois (= redondant) et provoque l'avertissement.

: Pour éviter cette redondance, un objet auxiliaire et les contraintes correspondantes pourraient être insérés, mais ceci est pour un autre tutoriel.
: Pour éviter de contraindre deux fois le décalage entre la base et la bielle, différentes contraintes ont été utilisées, une seule d'entre elles fixant le mouvement le long de l'axe Z.

### Actionneur

Il s'agit toujours d'un assemblage statique. Pour le transformer en un assemblage cinématique, une contrainte doit être utilisée comme actionneur. Pour utiliser la contrainte "PlaneCoincident" de la liaison base-manivelle comme actionneur, nous devons contrôler l'angle entre l'axe de la base et la manivelle. Ceci peut être fait en définissant la propriété Données**Lock Angle** à `true`. Et pour une utilisation ultérieure, l'étiquette est marquée du suffixe _.Driver_.

La propriété Données**Angle** peut maintenant être utilisée pour faire tourner la manivelle.

![](/images/Assembly3_KinematicExample-07.gif)

## Contrôleur

Il serait agréable de disposer d'une fenêtre de dialogue permettant de modifier les valeurs des propriétés sans avoir à les taper et avec un recalcul automatique.

Jetez un coup d'œil au [Tutoriel Contrôleur cinématique](/index.php?title=Tutoriel_KinematicController/fr&action=edit&redlink=1 "Tutoriel KinematicController/fr (page does not exist)").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicAssembly/fr&oldid=1471600>"
