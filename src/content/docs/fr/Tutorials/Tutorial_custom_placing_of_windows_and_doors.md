---
title: Arch Tutoriel de placement personnalisé de fenêtres et de portes
---
|  |
| --- |
| Tutoriel |
| Thème |
| Architecture |
| Niveau |
| Intermédiaire |
| Temps d'exécution estimé |
| 60 minutes |
| Auteurs |
| [vocx](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=21943) |
| Version de FreeCAD |
| 0.18 ou ultérieure |
| Fichiers exemples |
| aucun |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel montre comment placer des [Arch fenêtres](/Arch_Window/fr "Arch Window/fr") et des [Arch portes](/Arch_Door/fr "Arch Door/fr") personnalisées dans un modèle de bâtiment. Il utilise l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"), l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr") et l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

Les outils couramment utilisés sont: [Draft Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"), [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr"), [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") et [Sketcher Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr"). L'utilisateur doit être familiarisé avec les esquisses contraignantes.

Ce tutoriel est inspiré des tutoriels de jpg87 publiés dans les [forums FreeCAD](https://forum.freecadweb.org/viewforum.php?f=36).

* [Arch Créer une fenêtre personnalisée](https://forum.freecadweb.org/viewtopic.php?f=36&t=32883)
* [Arch: Comment utiliser votre fenêtre personnalisée](https://forum.freecadweb.org/viewtopic.php?f=36&t=32982)

Voir également le fil suivant pour plus d'informations sur la position des fenêtres et des portes.

* [Discussion: Orientation des fenêtres et des portes](https://forum.freecadweb.org/viewtopic.php?t=35368)

Voir également la page suivante pour quelques vidéos sur la façon d'aligner les fenêtres.

* [L'atelier utilisé pour créer des projets architecturaux s'appelle Arch](http://help-freecad-jpg87.fr/04_arch_ind.php)

## Installation

1. Ouvrez FreeCAD, créez un nouveau document vide et passez à l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr")

2. Assurez-vous que vos unités sont correctement définies dans le menu **Edition → Préférences → Général → Unités**. Par exemple, `MKS (m/kg/s/degré)` est bon pour gérer les distances dans un bâtiment typique; de plus, définissez le nombre de décimales sur `4` pour considérer même les plus petites fractions du mètre.

3. Utilisez le bouton [Draft Visibilité de la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") pour afficher une grille avec une résolution suffisante. Vous pouvez modifier l'apparence de la grille dans le menu **Edition → Préférences → Draft → Grille et ancrage → Grille**. Définissez des lignes tous les `50 mm`, avec des lignes principales toutes les `20` lignes (tous les mètres) et `1000 lignes` au total (la grille couvre une superficie de 50 mx 50 m).

4. [Zoom arrière](/Std_ViewZoomOut/fr "Std ViewZoomOut/fr") de la vue 3D si vous êtes trop près de la grille.

Nous sommes maintenant prêts à créer un mur simple sur lequel nous pouvons positionner les fenêtres et les portes.

## Placement d'un mur

5. Utilisez l'outil [Draft Fil](/Draft_Wire/fr "Draft Wire/fr") pour créer un fil. Allez dans le sens antihoraire.

:   5.1. Premier point dans (0, 4, 0); dans la boîte de dialogue, saisissez 0 m Enter, 4 m Enter, 0 m Enter.
:   5.2. Deuxième point dans (2, 0, 0); dans la boîte de dialogue, saisissez 2 m Enter, 0 m Enter, 0 m Enter.
:   5.3. Troisième point dans (4, 0, 0); dans la boîte de dialogue, saisissez 4 m Enter, 0 m Enter, 0 m Enter.
:   5.4. Quatrième point dans (6, 2, 0); dans la boîte de dialogue, entrez 6 m Enter, 2 m Enter, 0 m Enter.
:   5.4. Cinquième point dans (6, 5, 0); dans la boîte de dialogue, saisissez 6 m Enter, 5 m Enter, 0 m Enter.
:   5.5. Sur le pavé numérique, appuyez sur A pour terminer le fil.
:   5.6. Dans le pavé numérique, appuyez sur 0 pour obtenir une [vue axonométrique](/Std_View_Menu/fr "Std View Menu/fr") du modèle.
:   *Note:* assurez-vous que la case *Relative* est désactivée si vous donnez des coordonnées absolues.
:   *Note 2:* les points peuvent également être définis avec le pointeur de la souris en choisissant les intersections sur la grille, à l'aide de la barre d'outils [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et de la méthode [Draft Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") .
:   *Note 3:* vous pouvez également créer des formes par programmation en créant des scripts dans [Python](/Python/fr "Python/fr"). Attention, la plupart des fonctions attendent leur saisie en millimètres.

```
import FreeCAD
import Draft

p = [FreeCAD.Vector(0.0, 4000.0, 0),
FreeCAD.Vector(2000.0, 0.0, 0.0),
FreeCAD.Vector(4000.0, 0.0, 0.0),
FreeCAD.Vector(6000.0, 2000.0, 0.0),
FreeCAD.Vector(6000.0, 5000.0, 0.0)]

w = Draft.makeWire(p, closed=False)

```

6. Sélectionnez `DWire` et cliquez sur l'outil [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"); le mur est immédiatement créé avec une largeur (épaisseur) par défaut de 0,2 m et une hauteur de 3 m.

![](/images/01_T02_wire_wall.png)

Fil de base pour le mur

![](/images/02_T02_just_wall.png)

Mur construit à partir du fil

## Placement de portes et fenêtres prédéfinies

7. Cliquez sur l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr"); comme préréglage, sélectionnez `Simple door` et modifiez la hauteur à 2 m.

:   7.1. Changez l'accrochage en [Draft Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") et essayez de sélectionner le bord inférieur du mur frontal; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire pour vous aider à choisir le bord et non la face du mur; lorsque le milieu est actif, cliquez pour placer la porte.
:   7.2. Cliquez à nouveau sur l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") et placez une autre porte, mais cette fois au milieu du mur arrière; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire.

![](/images/03_T02_wall_place_doors.png)

Accrochage au milieu du bord inférieur du mur pour placer la porte

:   *Note:* la `Sill height` est la distance entre le sol et le bord inférieur de l'élément. Pour les portes, la `Sill height` (Hauteur du seuil) est généralement de 0 m car les portes touchent normalement le sol; d'autre part, les fenêtres ont une séparation habituelle de 0,5 m à 1,5 m du sol. `Sill height` ne peut être définie que lors de la création initiale de la fenêtre ou de la porte à partir d'un préréglage. Une fois la fenêtre ou la porte insérée, modifiez son emplacement en éditant la Données**Position** du vecteur `[x, y, z]` de l'[Sketcher Esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") sous-jacente.

## Création de portes et fenêtres personnalisées

8. Passez à l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"); sélectionnez la partie du mur à droite qui n'a pas de porte; cliquez sur [Nouvelle esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr"); sélectionnez FlatFace comme méthode de pièce jointe. Si la géométrie existante obstrue votre vue, cliquez sur la [vue en coupe](/Sketcher_ViewSection/fr "Sketcher ViewSection/fr") pour la supprimer.

9. Dessinez une esquisse quelconque contenant trois fils fermés. Assurez-vous de fournir des contraintes à tous les fils.

:   9.1. Le fil extérieur est le plus gros et définira les principales dimensions de l'objet fenêtre, ainsi que la taille du trou créé lorsqu'il est intégré dans un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"). Assurez-vous que les dimensions sont nommées correctement, par exemple `Width` et `Height`. Une contrainte définit également la courbure du fil extérieur; donnez-lui un nom approprié, comme `HeightCurve`.
:   9.2. Le deuxième fil est décalé du fil extérieur et, ensemble, ils définissent la largeur du cadre fixe de la fenêtre. Nommez le décalage de manière appropriée, par exemple `FrameFixedOffset`. Il sera utilisé pour les décalages verticaux et horizontaux supérieurs. Le décalage du bas, s'il est défini sur zéro, aura pour effet que le cadre fixe touche le bas de la fenêtre; cela peut être utilisé pour modéliser une porte au lieu d'une fenêtre. Donnez-lui un nom approprié, comme `FrameFixedBottom`.
:   9.3. Le troisième fil, le plus à l'intérieur, est décalé du deuxième fil, et avec lui, ils définissent le cadre de la fenêtre qui peut s'ouvrir. Le fil le plus à l'intérieur définit également la taille du panneau de verre. Encore une fois, donnez des noms significatifs à ces décalages, par exemple, `FrameInnerOffset` et `FrameInnerBottom`.
:   9.4. Afin de construire avec succès l'esquisse, utilisez les contraintes horizontales ([Sketcher Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr")) et verticales ([Sketcher Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr")) pour les côtés droits; utilisez la géométrie de construction auxiliaire ([Sketcher Géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr")) et les contraintes tangentielles ([Sketcher Contrainte tangente](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr")) pour placer correctement les arcs de cercle en haut. Comme dans ce cas, la fenêtre est symétrique, considérez les contraintes d'égalité ([Sketcher Contrainte d'egalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr")), symétrique ([Sketcher Contrainte de symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr")) et de point sur objet ([Sketcher Contrainte Point sur un objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr")) là où cela a du sens.

![](/images/04_T02_window_constraints_outer_frame.png)

Contraintes pour les fils extérieurs de l'esquisse qui forment la fenêtre

![](/images/05_T02_window_constraints_inner_frame.png)

Contraintes pour les fils intérieurs de l'esquisse qui forment la fenêtre

10. Une fois l'esquisse entièrement contrainte, appuyez sur Close pour quitter l'esquisse ([Sketcher Quitter l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr")).

:   10.1. Puisqu'une face du mur a été sélectionnée lors de l'étape initiale de création de l'esquisse, l'esquisse est coplanaire avec cette face; cependant, il peut être dans la mauvaise position, loin du mur. Si tel est le cas, ajustez Données**Position** dans Données**Attachment Offset**. Définissez Données**Position** sur `[4 m, 1 m, 0 m]` de sorte que l'esquisse soit centrée dans le mur et à un mètre au-dessus du niveau du sol.
:   10.2. Vous pouvez voir les contraintes nommées sous Données**Constraints**. Les valeurs peuvent être modifiées pour voir les cotes de changement d'esquisse immédiatement.

![](/images/07_T02_window_sketch_in_wall.png)

Esquisse de fenêtre déplacée à la position souhaitée sur le mur

![](/images/06_T02_window_sketch_properties_constraints.png)

Contraintes nommées de l'esquisse, qui peuvent être modifiées sans entrer dans l'esquisse

11. Revenez à l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr") et, avec le nouveau `Sketch002` sélectionné, utilisez [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr"). Une fenêtre sera créée et fera un trou dans le mur. La fenêtre est créée à partir d'une esquisse personnalisée, et non à partir d'un préréglage, elle doit donc être modifiée pour afficher correctement ses composants, à savoir le cadre fixe, le cadre intérieur et le panneau de verre.

![](/images/08_T02_window_basic_in_wall.png)

Fenêtre personnalisée créée à partir de l'esquisse; elle n'a toujours pas de cadre approprié, ni de verre

## Configuration de la fenêtre personnalisée

12. Dans l'arborescence, sélectionnez `Sketch002` sous-jacent à `Window` et appuyez sur Espace ou modifiez la propriété Vue**Visibility** en `true`.

13. Double-cliquez sur `Window` dans l'arborescence pour commencer à l'éditer.

:   13.1. Dans la boîte de dialogue `Window elements`, il y a deux volets, `Wires` et `Components`. Il y a trois fils, `Wire0`, `Wire1` et `Wire2`, et un composant, `Default`. Les fils font référence aux boucles fermées qui ont été dessinées dans l'esquisse; les composants définissent les zones de l'esquisse qui seront extrudées pour créer des cadres ou des panneaux de verre avec des épaisseurs réelles; ces zones sont délimitées par les fils. Une fenêtre créée à partir d'un preset a déjà deux composants, `OuterFrame` et `Glass`. La fenêtre personnalisée doit être modifiée pour avoir une structure similaire.

![](/images/09_T02_window_edit_default.png)

Boîte de dialogue pour modifier une fenêtre ou une porte

:   13.2. Cliquez sur `Default`, puis sur le bouton Remove pour l'éliminer.

:   13.3. Cliquez sur Add; cela montre les propriétés d'un nouveau composant comme `Name`, `Type`, `Wires`, `Thickness`, `Offset`, { {incode|Hinge}} et `Opening mode`. Donnez un nom, tel que `OuterFrame`, choisissez `Frame` pour `Type`, et cliquez sur `Wire0` puis `Wire1` ; ils doivent être mis en évidence dans la fenêtre 3D. Ajoutez une petite valeur pour `Thickness`, `15 mm` et cochez la case pour ajouter la valeur par défaut. Cette valeur par défaut est la longueur affectée à la propriété Données**Frame**; une valeur par défaut similaire peut être attribuée à la propriété Données**Offset**. Cliquez sur le bouton +Create/update component pour terminer la modification du composant.

:   13.4. Cliquez sur Add; donnez un autre nom, tel que `InnerFrame`, choisissez `Frame` pour `Type`, et cliquez sur `Wire1` puis `Wire2` . Ajoutez un `Thickness`, `60 mm`, et `Offset`, `15 mm`. Cliquez ensuite sur le bouton +Create/update component.

:   13.5. Cliquez sur Add; donnez un autre nom, tel que `Glass`, choisissez `Glass panel` pour `Type`, et cliquez sur `Wire2`. Ajoutez un `Thickness`, `10 mm`, et `Offset`, `40 mm`. Cliquez ensuite sur le bouton +Create/update component. Si l'un des trois composants doit être modifié, sélectionnez-le et appuyez sur Edit; les modifications ne sont enregistrées qu'après avoir appuyé sur le bouton +Create/update component.

![](/images/10_T02_window_edit_components.png)

Modification d'un composant précédemment défini d'une fenêtre ou d'une porte

:   13.6. Si tout est défini, cliquez sur Close pour terminer l'édition de la fenêtre. L'esquisse peut redevenir masquée, mais la fenêtre affichera des éléments solides distincts pour `OuterFrame`, `InnerFrame` et `Glass`. Donnez une valeur de `100 mm` à Données**Frame** pour attribuer une épaisseur par défaut, qui sera ajoutée à la valeur spécifiée dans le composant `OuterFrame`.

![](/images/11_T02_window_property_view.png)

Vue des propriétés de la fenêtre pour ajouter la longueur du cadre par défaut, la longueur du décalage et d'autres options

![](/images/12_T02_window_finished.png)

Fenêtre finie avec des composants appropriés intégrés dans le mur

## Duplication de la fenêtre personnalisée

14. Dans l'arborescence, sélectionnez `Window` et son sous-jacent `Sketch002`. Puis allez dans **Edition → Copier la sélection**, et répondez No si on vous demande de dupliquer les dépendances non sélectionnées. Un nouveau `Window001` et `Sketch003` apparaîtront dans la même position que les éléments d'origine.

15. Sélectionnez le nouveau `Sketch003`. Accédez à la propriété Données**Map Mode** et cliquez sur les points de suspension à côté de la valeur `FlatFace`. Dans la fenêtre 3D, sélectionnez le côté gauche du mur qui n'a aucun élément; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire. Modifiez `Attachment offset` en [-1 m, 0 m, 0 m] pour centrer la fenêtre, puis cliquez sur OK. L'esquisse et la fenêtre doivent apparaître dans une nouvelle position.

:   *Note:* [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") peut également être effectuée en passant à [atelier Part](/Part_Workbench/fr "Part Workbench/fr"), puis en utilisant le menu **Pièce → Attachment**.

![](/images/13_T02_sketch_attachment_edit.png)

Boîte de dialogue pour modifier le plan d'association de l'esquisse

16. Vous pouvez ajuster les dimensions de la nouvelle fenêtre en modifiant les paramètres nommés dans `Sketch003` sous Données**Contraintes**, par exemple, définissez `Height` à `2 m` et `Frame Fixed Bottom` à `0 m`. Appuyez ensuite sur Ctrl+R pour [recalculer](/Recompute/fr "Recompute/fr") le modèle. Si le mur n'affiche pas un plus grand trou pour la nouvelle fenêtre, sélectionnez le mur dans l'arborescence, faites un clic droit et choisissez `Mark to recompute`, puis appuyez sur Ctrl+R à nouveau.

17. Ces opérations ont changé la position de la nouvelle fenêtre, mais l'ouverture dans le mur n'a pas l'air correcte. Il est incliné, c'est-à-dire que le trou n'est pas perpendiculaire à la face du mur et qu'il peut même couper d'autres parties du mur. Le problème est que `Window001` a conservé les informations Données**Normal** de l'original `Window`.

![](/images/14_T02_sketch_2_attached_slanted.png)

Ouverture incorrecte dans le mur en raison d'une mauvais normale de la fenêtre

## Normales des portes et fenêtres

18. Chaque objet [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") contrôle l'extrusion de son corps et l'ouverture qui est créée dans sa paroi hôte au moyen de sa Données**Normal**.

La normale est un vecteur `[x, y, z]` qui indique une direction perpendiculaire à un mur. Lorsqu'un préréglage de fenêtre ou de porte est créé avec l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") directement sur un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), la normale est automatiquement calculée et la fenêtre ou la porte résultante est correctement alignée; les deux premiers objets, `Door` et `Door001`, ont été créés de cette manière.

De la même manière, lorsqu'une esquisse est créée en sélectionnant une surface plane, elle est orientée sur ce plan. Ensuite, lorsque l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") est utilisé, la fenêtre utilisera normalement la direction perpendiculaire à l'esquisse. Ce fut le cas avec le troisième objet, la `Window` personnalisée.

Si la fenêtre existe déjà et doit être déplacée, comme c'était le cas avec l'objet `Window001` dupliqué, l'esquisse doit être remappée sur un autre plan; cela déplace à la fois l'esquisse et la fenêtre, mais celle-ci ne met pas automatiquement à jour sa normale, elle contient donc des informations d'extrusion incorrectes. La normale doit être calculée manuellement et écrite dans Données**Normal**.

Les trois valeurs du vecteur normal sont calculées comme suit.

```
x = -sin(angle)
y = cos(angle)
z = 0

```

Où `angle` est l'angle de l'axe Z local de l'esquisse par rapport à l'axe Y global.

Lorsqu'une esquisse est créée, elle a toujours deux axes, un X local (rouge) et un Y local (vert). Si l'esquisse est mappée sur le plan de travail global XY, ces axes sont alignés; mais si l'esquisse est mappée sur les plans XZ globaux ou YZ globaux, comme cela est courant avec les fenêtres et les portes (les esquisses sont "debout"), alors le Z local (bleu) forme un angle avec l'axe Y global; cet angle varie de -180 à 180 degrés. L'angle est considéré comme positif s'il s'ouvre dans le sens antihoraire, et il est négatif s'il s'ouvre dans le sens horaire, en partant de l'axe Y global.

![](/images/15_T02_sketch_local_coordinates.png)

Coordonnées locales d'une esquisse "debout", c'est-à-dire mappée sur le plan XZ global

![](/images/16_T02_sketch_correct_normal_direction.png)

Directions prévues des normales pour chaque porte et fenêtre

Si nous regardons la géométrie créée jusqu'à présent, nous voyons les normales suivantes.

`Door`
:   Le Z local est aligné sur le Y global, par conséquent, l '`angle` est nul. Le vecteur normal est

```
x = -sin(0) = 0
y = cos(0) = 1
z = 0

```

ou Données**Normal** est `[0, 1, 0]`.

`Door001`
:   Le Z local est tourné de 90 degrés par rapport au Y global, par conséquent, le `angle` est de 90 (positif, car il s'ouvre dans le sens antihoraire). Le vecteur normal est

```
x = -sin(90) = -1
y = cos(90) = 0
z = 0

```

ou Données**Normal** est `[-1, 0, 0]`.

`Window`
:   Le Z local est tourné de 45 degrés par rapport au Y global, donc le `angle` est de 45 (positif, car il s'ouvre dans le sens antihoraire). Le vecteur normal est

```
x = -sin(45) = -0.7071
y = cos(45) = 0.7071
z = 0

```

ou Données**Normal** est `[-0.7071, 0.7071, 0]`.

`Window001`
:   La direction Z locale est trouvée en utilisant l'outil [Draft Dimension](/Draft_Dimension/fr "Draft Dimension/fr") et en mesurant l'angle que fait le tracé du mur (`Wire`) avec l'axe Y global ou toute ligne alignée dessus. Cet angle est `26.57`; l'angle souhaité est le complément de cela, donc `90 - 26.57 = 63.43`.

Cela signifie que l'axe Z local est tourné de 63,43 degrés par rapport au Y global, par conséquent, l'`angle` est de -63,46 (négatif, car il s'ouvre dans le sens des aiguilles d'une montre). Le vecteur normal est

```
x = -sin(-63.43) = 0.8943
y = cos(-63.43) = 0.4472
z = 0

```

Par conséquent Données**Normal** devrait être changé en `[0.8943, 0.4472, 0]`.

Après avoir effectué ces modifications, recalculez le modèle avec Ctrl+R. Si le mur ne met pas à jour le trou, sélectionnez-le dans l'arborescence, faites un clic droit et choisissez `Mark to recompute` puis appuyez à nouveau sur Ctrl+R.

19. L'orientation de l'extrusion de la fenêtre est résolue, ainsi que l'ouverture dans le mur.

![](/images/17_T02_sketch_2_attached_correctly.png)

Ouverture correcte dans le mur en raison de la bonne normale de la fenêtre

## Remarques finales

20. Comme démontré, l'emplacement initial de la [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") est très important. L'utilisateur doit soit

* utilisez l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") pour insérer et aligner automatiquement un préréglage sur un mur, ou
* mappez une esquisse sur le mur souhaité et construisez la fenêtre après cela.

Si une fenêtre existe déjà et qu'elle doit être déplacée, l'esquisse de support doit être remappée sur un nouveau plan et les Données**Normal** de la fenêtre doivent être recalculées.

La nouvelle direction normale peut être obtenue en mesurant l '`angle` du nouveau mur par rapport à l'axe Y global, en considérant si cet angle est positif (sens antihoraire) ou négatif (sens horaire), et en utilisant une formule simple.

```
x = -sin(angle)
y = cos(angle)
z = 0

```

Pour confirmer que les opérations sont correctes, la grandeur absolue du vecteur normal doit être de un. C'est,

```
abs(N) = 1 = sqrt(x^2 + y^2 + z^2)
abs(N) = 1 = sqrt(sin^2(angle) + cos^2(angle) + z^2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_custom_placing_of_windows_and_doors/fr&oldid=1565568>"