---
title: Sketcher Tutoriel
---
|  |
| --- |
| Tutoriel |
| Thème |
| Sketcher |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
|  |
| Auteurs |
| Ulrich |
| Version de FreeCAD |
|  |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Introduction

Le Sketcher (esquisseur) est un outil pour générer des objets 2D pour une utilisation dans la conception des pièces. Le sketcher est différent des outils de dessin traditionnels. Une façon de montrer la différence est la construction d'un triangle. Un triangle est entièrement défini par trois valeurs, qui peuvent être toutes de la liste suivante : longueur de côté, angle, hauteur, surface. La seule exception est trois angles, qui ne définira pas la taille.

Afin de construire un triangle à partir de trois longueurs par la méthode traditionnelle, faire comme suit :

* Tracer la ligne de base
* Faire deux cercles avec un rayon donné par les deux autres longueurs des côtés, ou encore calculer les coordonnées du troisième sommet
* Tirer les deux côtés manquants depuis les extrémités de la ligne de base au point de deux cercles ou le sommet calculée .

![](/images/Traditional_triangle.png)

La page [Wikipedia Triangle](https://fr.wikipedia.org/wiki/Triangle) montre une collection de formules pour calculer les informations manquantes pour dessiner un triangle à partir de spécification minimum. Celles-ci sont nécessaires si le triangle doit être défini par des coordonnées précalculées.

Le Sketcher est différent. Les formules et les constructions auxiliaires ci-dessus ne sont pas nécessaires. Afin de comprendre la différence, il est préférable de construire un triangle par vous-même.

## Première esquisse : un triangle

Un document ouvert est nécessaire pour faire une esquisse. Quand il n'y a pas de document ouvert, un nouveau document sera créé en cliquant sur ![](/images/Std_New.svg). L'atelier Sketcher doit être sélectionné :

![](/images/Workbench_select_sketcher.png)

Une nouvelle esquisse sera créée en cliquant sur ![](/images/Sketcher_NewSketch.svg). Une boîte de dialogue apparaît, où l'orientation de la nouvelle esquisse dans l'espace 3D peut être sélectionnée. Il n'a pas d'importance dans ce cas, de sorte que le plan XY peut être confirmé. Une nouvelle esquisse vide sera créée et ouverte en mode édition. Une grille avec un système de coordonnées s'affiche avec un point rouge à l'origine.

Dans Sketcher, tout est ok pour dessiner un triangle quelconque avec l' outil ![](/images/Sketcher_CreatePolyline.svg) Polyligne et définir ses propriétés dans une étape ultérieure. Chaque clic dans le plan du dessin établit un sommet. Le triangle doit être fermé. Donc, pour la dernière ligne un clic est nécessaire sur le premier sommet créé. Un point rouge doit être visible près du pointeur de la souris avant de cliquer.

![](/images/Closed_triangle_with_pointer_small.png)

Cela fera en sorte que le dernier sommet est identique au premier, et le profil sera fermé. Ces symboles qui apparaissent sous le pointeur de dessin indiquent des auto-contraintes. Elles sont mises automatiquement en cliquant à ces endroits. Le point rouge tirant sous le pointeur indique une contrainte de coïncidence entre deux sommets, c'est à dire que les sommets de ces différents éléments de dessin sont contraints au même emplacement.

Le triangle créé est flexible. Un sommet peut être touché avec la souris et déplacé à proximité. Les côtés du triangle suivent le sommet. La même chose peut être faite avec une ligne.

Chaque longueur de côté est maintenant facile à définir en le sélectionnant avec la souris : l'élément sélectionné se transforme en vert. En cliquant sur l'outil de longueur ![](/images/Sketcher_ConstrainDistance.svg), une boîte de dialogue s'ouvre et la longueur désirée peut être mise. L'image ci-dessous montre un triangle avec les longueurs des côtés réglées à 35 mm, 27 mm et 25 mm. La ligne de base a été fixé horizontalement en la sélectionnant et en cliquant sur l'outil de contrainte horizontale ![](/images/Sketcher_ConstrainHorizontal.svg).

![](/images/Sketcher_triangle3_small.png)

Ces définitions de longueur sont appelées contraintes. Les contraintes sont utilisées pour définir une conception fixe à partir d'une entrée géométrique flexible. Le dessinateur fournit toutes les contraintes nécessaires pour définir tout type de triangle. Seulement la zone ne peut pas être utilisée pour définir un. Ainsi, le triangle créé peut être redéfini en changeant la valeur d'une contrainte ou par suppression des contraintes et ajout d'autres. Voici une liste de triangles avec d'autres propriétés données. Il n'y a aucun problème pour tourner le triangle qui vient d'être créé dans l'un de ceux-ci.

* Un ou deux angles donnés : Deux côtés du triangle doivent être cochées. Un clic sur ![](/images/Sketcher_ConstrainAngle.svg) ouvre une boîte de dialogue pour définir l'angle.

![](/images/Triangel_angle_small.png)

* Triangle rectangle : Deux côtés du triangle doivent être cochés. Un clic sur ![](/images/Sketcher_ConstrainPerpendicular.svg) définit un angle droit entre les deux côtés.

![](/images/Right_triangle_sketcher.png)

* Équilatéral : Un côté doit être réglé à une longueur définie. Ensuite, toutes les parties doivent être sélectionnés. Un clic sur ![](/images/Sketcher_ConstrainEqual.svg) définit deux contraintes de longueur égale afin de donner à tout les côtés la même longueur.

![](/images/Triangle_equilateral_small.png)

* Triangle isocèle (deux cotés de longueur identique) avec hauteur donnée : Sélectionnez d'abord les deux côtés de même longueur. Un clic sur ![](/images/Sketcher_ConstrainEqual.svg) établit une égalité entre les deux côtés. Ensuite, sélectionnez la ligne de base et le sommet en haut et cliquez sur l'outil de longueur ![](/images/Sketcher_ConstrainDistance.svg).

![](/images/Triangle_isosceles_small.png)

Les contraintes peuvent être sélectionnées en cliquant sur le symbole ou en cliquant dans la liste de contraintes. Elles peuvent être supprimées ou en cas de contraintes avec une valeur éditée après un double clic. Un triangle donné peut être changé plus tard dans un autre type de triangle en modifiant ou en changeant les contraintes. L'esquisseur est une partie de l'approche modélisation paramétrique de FreeCAD. Ce que vous avez créé, peut être facilement changé un moment plus tard, si par exemple une variante de la conception est nécessaire.

Les triangles montrés ci-dessus ont des lignes blanches. C'est une indication que l'esquisse conserve des degrés de liberté. Cela peut être testé en tirant sur des lignes ou des points. Si la ligne ou point se déplace, cet élément n'est pas entièrement défini. Une esquisse avec aucun degré de liberté s'allume en vert.

Pour le triangle isocèle, la longueur de la ligne de base est manquante et il peut se déplacer et tourner librement dans le plan du dessin du dessinateur.

Si les propriétés du triangle sont définies, il doit encore être fixé dans le plan du dessin. Le plan de l'esquisse a un système de coordonnées. L'origine du système de coordonnées est visible comme le point rouge dans le centre de l'axe rose des X et de l'axe vert clair des Y. La meilleure façon de régler le problème, est de choisir un sommet et de cliquer sur ![](/images/Sketcher_ConstrainLock.svg). Cela ajoute une horizontale et une distance verticale à partir du sommet à l'origine du système de coordonnées. Le triangle peut encore avoir un degré de liberté en rotation. Donc, une autre partie a besoin d'une contrainte horizontale ou verticale ou d'un angle défini avec l'un des axes de coordonnées du système. L'image suivante montre une esquisse totalement contrainte. Toutes les lignes et les sommets ont maintenant une couleur verte.

![](/images/Sketcher_triangle3_fc_small.png)

## Plus au sujet des Contraintes

L'esquisseur ne connaît pas les formules de triangle de wikipedia. Au contraire, il met en place un système d'équations pour les coordonnées en 2 dimensions sur la base des contraintes données. Ce système d'équations est alors résolu numériquement.

De cette manière, une grande variété de problème géométrique peut être résolu. Mais il y a aussi un inconvénient. Si l'ensemble d'équations a plusieurs solutions, nous pouvons obtenir quelque chose de totalement différent de ce que nous attendons. Cela est particulièrement gênant, si la même conception doit être utilisé pour des dimensions différentes. Le symptôme typique, c'est qu'après un changement d'une contrainte de longueur, l'esquisse retourne à quelque chose de totalement différent. Un exemple simple est la division d'une distance en trois partitions égales. L'image suivante montre trois lignes égales et un ensemble de contraintes parallèles. La distance totale est de 10 mm.

![](/images/Dimension_partitions_parallel.png)

Cela fonctionne bien aussi longtemps que seules de grandes distances sont entrées. Lorsque la distance est réduite au-delà d'un certain ratio, les lignes se replient ensemble. Donc, nous n'obtenons pas plus un tiers de la distance donnée, mais la distance elle-même ou les deux tiers de celui-ci. Certaines lignes de notre alignement ont changé leur orientation. Cela donne encore une solution valable pour l'ensemble des contraintes, mais n'est pas ce qui était prévu. Comme le montre l'image suivante de la même esquisse. La contrainte de longueur a été réglée à 1000 mm, puis ramené à 5 mm.

![](/images/Dimension_partitions_flipped.png)

La solution consiste à définir un angle de 180° entre les lignes de séparation comme remplacement de la contrainte parallèle. La contrainte 180° n'a qu'une solution. L'esquisse est maintenant robuste contre les grands changements de distance. Il faut dire, que même une contrainte 0° vise le même objectif, le cas échéant.

![](/images/Constraint180_600x400.png)

La contrainte 180° est une solution pour beaucoup de problèmes. Certaines versions plus anciennes de FreeCAD ont des problèmes pour montrer la contrainte 180° dans le plan d'esquisse. Dans la plupart des cas, l'arc 180° n'est pas affiché comme prévu dans le plan du dessin d'esquisse. C'est un problème connu pour FreeCAD avant la version 14.3613.

En cas de plusieurs dimensions supplémentaires en ligne droite, il peut être conseillé de dessiner une ligne zigzag d'abord et puis de définir les contraintes 180°. Cela aide à ne pas en oublier une, ou ne pas la créer deux fois.

Le tableau suivant montre certaines combinaisons de contraintes pour la définition d'un coude simple. La combinaison a été testée par l’accroissement de la longueur horizontale de 10 mm à des valeurs supérieures jusqu'à ce que le coude retourne son orientation. Les documents du tableau pour chaque combinaison de contrainte montre la longueur modifiée où le retournement se produit.

| Combinaisons Contraintes | Remarques |
| --- | --- |
|  | Définition de la longueur : Contrainte égalité pour la définition de la longueur     Définition de l'orientation : contrainte horizontale et verticale     Retourne à 51 mm |
|  | Définition de la longueur : Contrainte égalité pour la définition de longueur verticale, arc pour définition de la longueur horizontale    . Définition de l'orientation : deux points pour la définition de l'orientation des contraintes de lignes horizontales et verticales     Retourne à 52 mm |
|  | Définition de la longueur : Contrainte égalité pour la définition de la longueur     Définition de l'orientation : ligne horizontale perpendiculaire à l'axe Y et ligne verticale avec la contrainte verticale     Retourne à 51 mm |
|  | Définition de la longueur : Longueur horizontale définie avec la contrainte «générale» de longueur. Contrainte égalité pour la définition de longueur verticale.   Définition de l'orientation : contraintes horizontale et verticales   Retourne à 82 mm   Définition de la longueur : Longueur horizontale définie avec la contrainte de longueur «horizontale». Contrainte égalité pour la définition de longueur verticale.   Définition de l'orientation : contraintes horizontale et verticales   La ligne horizontale ne retourne pas à une épreuve de 10 km, mais la ligne verticale a été retournée ! |
|  | Définition de la longueur : Contrainte égalité pour la définition de la longueur   Définition de l'orientation : ligne horizontale angle 90° avec la ligne verticale et ligne verticale avec la contrainte verticale   Ne retourne pas, testée jusqu'à 10 km |

Le test a révélé ce qui suit : de plus grands changements de contraintes de dimension peuvent provoquer un retournement de certaines lignes de l'esquisse en raison de multiples solutions du système sous-jacent d'équations. Les seules contraintes qui font préserver l'orientation des éléments auxquels ils s'appliquent, sont la contrainte d'angle et les contraintes de dimensions horizontales et verticales. Les différences entre les autres contraintes concernant le maintien de l'orientation sont mineures.

Recommandation : **Utiliser les contraintes d'angles et les contraintes de dimensions horizontales et verticales à des endroits critiques pour faire une esquisse robuste envers les changements de dimension.**

## Combinaison problématique de Contraintes

Parfois, deux ou plusieurs contraintes définissent la même propriété. Un exemple peut être réalisé avec deux lignes connectées, où le centre est le point d'une contrainte de symétrie pour les extrémités des lignes. Ces lignes ont maintenant des longueur égales et sont parallèles. Tout cela est la conséquence de la contrainte de symétrie.

Que se passe-t-il, si ces deux lignes ont déjà une contrainte d'égalité et une contrainte parallèle et que la contrainte de symétrie est rajoutée ? Maintenant, la propriété parallèle est défini par deux contraintes et la longueur égale est également définie par deux contraintes. En principe, le système d'équations sous-jacent doit avoir une solution. Mais il peut y avoir des problèmes numériques. Cela peut être testé en essayant de déplacer les lignes. Dans la plupart des cas, les lignes sont figées, même si le croquis rapporte encore plusieurs degrés de liberté.

Le cas ci-dessus montre un problème qui semble être difficile à résoudre pour les solveurs d'esquisse. Ainsi, l'utilisateur doit prendre des précautions pour éviter de telles situations. Les esquisses avec des contraintes redondantes se comportent de façon inattendue et problématique. Les symptômes de ces contraintes redondantes sont l'état gelé ci-dessus ou les contraintes signalés redondantes après la modification d'un objet différent dans l'esquisse.

En général, l'esquisse donne un avertissement, lorsque les contraintes redondantes sont détectées. Mais ce mécanisme de détection semble ne pas fonctionner dans tous les cas. Lorsque le problème est reconnu, il peut être évité simplement en supprimant les contraintes redondantes. Parfois, il est nécessaire de choisir une combinaison différente de contraintes.

Les cas suivants sont des sources de contraintes redondantes :

* Une contrainte d'égalité pour deux rayons d'un même arc
* Une contrainte de symétrie pour deux rayons du même arc
* Une contrainte de symétrie en combinaison avec une contrainte parallèle, d'égalité et/ou des contraintes perpendiculaires

Un cas problématique différent sont les parallèles avec un point d'intersection à l'infini. Il est possible de définir une contrainte 180° pour deux lignes parallèles sans point d'intersection. Ce **n'est pas** recommandé. Un angle avec une autre ligne ou axe doit être utilisé à la place.

Un autre problème est le changement d'orientation d'angles. Cela peut arriver si des changements d'angle supérieurs à 180° sont faits. Faire cela par petites étapes évite le problème.

## Lignes de Construction - Exemple pas à pas

Dans la première partie, il a été montré que la géométrie de construction n'est pas nécessaire pour construire des triangles. Mais néanmoins l'esquisse fournit la géométrie de construction, qui est utile pour des problèmes plus complexes. Toute ligne peut être convertie en une ligne de construction avec le bouton ![](/images/Sketcher_ToggleConstruction.svg). Les lignes de construction sont présentées dans l'esquisse comme lignes bleues. Elles peuvent être utilisées avec des contraintes de la même manière que d'autres lignes, mais ne sont pas représentées et ne servent pas lorsque l'esquisse est terminée.

Donner la tâche de faire un rectangle avec la longueur de côté ayant le rapport d'or. Wikipedia montre comment construire deux lignes avec un rapport de longueur correspondant au nombre d'or.

![](/images/Goldener_Schnitt_Konstr_beliebt.svg)

Le sketcher est un outil parfait pour construire un rectangle avec le nombre d'or pour la longueur de côté. La taille du rectangle peut être modifié par la suite sans faire une nouvelle construction. Les étapes de construction pour le nombre d'or selon Wikipedia sont :

1. Ayant un segment AB, construire une perpendiculaire BC au point B, avec BC moitié de la longueur de AB. Dessinez l'hypoténuse AC.
2. Tracer un arc de centre C et de rayon BC. Cet arc croise l'hypoténuse AC au point D.
3. Tracer un arc de centre A et de rayon AD. Cet arc croise le segment de ligne originale AB au point S. Le point S divise le segment d'origine AB en segments de ligne AS et SB avec des longueurs ayant un rapport correspondant au nombre d'or.

Voici une explication étape par étape, de la manière dont cela peut être fait.

* Faire une nouvelle esquisse comme expliqué sur l'exemple de triangle.
* Dessinez un rectangle dans l'esquisse. Utilisez le bouton ![](/images/Sketcher_CreateRectangle.svg). L'image suivante montre le rectangle. FreeCAD fait ajouter des contraintes horizontales et verticales au rectangle. Ce rectangle ne peut pas être mis en rotation.

![](/images/Step1_rectangle_600x400.png)

Le rectangle doit rester au centre du système de coordonnées. A cet effet, une contrainte de symétrie est ajouté à une ligne horizontale. Ceci est réalisé en sélectionnant d'abord les deux sommets de la ligne horizontale, puis l'axe vertical du système de coordonnées. La contrainte de symétrie est ajoutée en cliquant sur le bouton ![](/images/Sketcher_ConstrainSymmetric.svg). On fait de même pour une ligne verticale, mais maintenant l'axe horizontal est sélectionné comme axe de symétrie. L'image ci-dessous montre le résultat. Le rectangle reste maintenant au centre et peut être redimensionnée, mais pas déplacé.

![](/images/Step2_rectangle_with_symmetry_600x400.png)

Il s'agissait de la préparation du rectangle. La ligne horizontale supérieure devrait être la distance AS de la construction avec le chiffre d'or. Une ligne supplémentaire est nécessaire pour représenter la distance SB. Il est dessiné un peu faussé, comme indiqué ci-dessous. Ceci permet d'éviter l'auto-contrainte à l'horizontale. Cette ligne devrait plutôt être contrainte plus tard avec un angle 180°, afin d'éviter l'existence de solutions multiples à la combinaison de contrainte construite. Si la ligne est tracée avec une horizontale limitée, le sketcher se plaindra plus tard, lors de l'ajout de l'angle contrainte de 180°. La contrainte horizontale doit être enlevée dans un tel cas. La photo montre comment ajouter une contrainte angulaire en sélectionnant sur deux lignes et en cliquant sur ![](/images/Sketcher_ConstrainAngle.svg). Après avoir ajouté une ligne, il est souvent conseillé de glisser sur la ligne avec la souris. Ce sera facile de montrer, si une ligne n'est pas attachée aux autres éléments tracés. Si une ligne n'est pas correctement connectée aux autres lignes, des problèmes peuvent survenir dans les étapes ultérieures de la construction de la pièce.

![](/images/Step3_making_SB_600x400.png)

La dernière ligne ne fait pas partie du rectangle. Il est donc nécessaire de la convertir en une ligne de construction. Sélectionnez la ligne et cliquer sur le bouton ![](/images/Sketcher_ToggleConstruction.svg) pour faire la conversion.

![](/images/Step4_make_SB_construction_line_600x400.png)

La ligne a maintenant une couleur bleue visible ci-dessous. La recette de Wikipédia pour le nombre d'or nécessite une ligne moitié de la distance AB. Afin d'obtenir un point de référence pour cela, un sommet supplémentaire est fixé à la ligne avec l'outil ![](/images/Sketcher_CreatePoint.svg). Ceci est illustré ci-dessous.

![](/images/Step5_helper_vertex.png)

Le point de référence doit rester au centre de la distance AB. Cet objectif sera atteint en sélectionnant d'abord les deux extrémités de la distance AB et en sélectionnant ensuite le point central. Lorsque les trois points sont sélectionnés dans le bon ordre, la contrainte de symétrie peut être fixée en cliquant sur le bouton ![](/images/Sketcher_ConstrainSymmetric.svg), comme indiqué ci-dessous.

![](/images/Step6_symmetry_setting.png)

L'Image ci-dessous montre déjà le deuxième côté BC de la construction du triangle. Cette ligne a été élaborée comme décrit ci-dessus et convertie en une ligne de construction. Cette ligne doit avoir une contrainte verticale visible dans l'image. Ceci peut être facilement obtenu en traçant la ligne presque verticale. Si la ligne est presque verticale un symbole de contrainte verticale est affiché et réglé par le Sketcher lors de la finition de la ligne à cet état.

La ligne BC doit avoir la moitié de la longueur de AB. Il n'y a qu'un point de référence disponibles à cet effet, de sorte que la contrainte d'égalité ne peut pas être utilisé. La contrainte d'égalité aurait besoin d'une ligne avec cette longueur comme référence, ce qui ne est pas disponible dans la construction. Par conséquent l'arc classique est utilisée pour définir la longueur BC. L'image ci-dessous montre le dessin de l'arc. L'outil Arc ![](/images/Sketcher_CreateArc.svg) est utilisé. D'abord, le point central est fixé sur B. Le point devrait être visible sous l'outil-arc en cliquant sur B. Souvent l'outil-arc n'a pas a être pas directement sur le point de cible, mais un peu en dessous, afin d'obtenir le point de coïncidence visible. Deuxièmement, le rayon de l'arc est défini en réglant le point suivant au point de référence. Le dernier point de l'arc se trouve dans le voisinage du point C. Il est important que les deux premiers points soient fixés à C et le point central. Cela devrait être testé en glissant sur l'arc après l' avoir terminé.

![](/images/Step7_arc_defining_BC.png)

Afin de définir la longueur de BC, la ligne doit se terminer à l'arc. Cela sera fait en définissant une contrainte de coïncidence entre le dernier point de l'arc et le point C, comme indiqué ci-dessous. Les deux points doivent être sélectionnés et le bouton de coïncidence ![](/images/Constraint_PointOnPoint.svg) doit être cliqué.

![](/images/Step8_arc_BC_finishing.png)

L'image suivante montre le triangle prêt. L'hypoténuse AC est déjà tracée et convertie en une ligne de construction.

![](/images/Step9_triangle_ready.png)

Maintenant l'étape 2 de la technique Wikipédia doit être réalisée. Un second arc doit être dessiné avec le point central en C et le point de départ en B. Le dernier point devrait être à la fin de l'hypoténuse comme indiqué dans l'image ci-dessous.

![](/images/Step10_second_arc.png)

L'arc dessiné a été converti en une ligne de construction. Maintenant l'étape 3 de la technique Wikipédia commence en dessinant le dernier arc comme indiqué dans l'image ci-dessous. Le rayon de cet arc peut être défini avec le point ci-dessus construit sur l'hypoténuse. Le dernier point ne sera généralement pas à un coin du rectangle. Mais ce n'est pas un problème, car il sera fixé ultérieurement. Le dernier point peut être défini comme indiqué ci-dessous.

![](/images/Step11_last_arc.png)

Il faut maintenant passer à l'étape finale, afin que la ligne horizontale du rectangle soit égale à la distance AS. Ceci est illustré ci-dessous en fixant une contrainte de coïncidence entre l'extrémité du dernier arc et le coin du rectangle.

![](/images/Step12_define_ratio.png)

Maintenant, la ligne verticale doit être faite de la longueur de la distance SC. Définissez une contrainte d'égalité en sélectionnant le bouton ![](/images/Sketcher_ConstrainEqual.svg) comme indiqué ci-dessous, qui le fera.

![](/images/Step12_define_rectangle.png)

Le tableau suivant montre le rectangle avec un rapport de longueur de côté égale au nombre d'or. Le rectangle aura seulement laissé un degré de liberté. Donc, en glissant sur lui, il devrait changer de taille, mais pas bouger. Si une certaine taille d'un côté est nécessaire, une contrainte de longueur peut être ajoutée à ce côté. Le croquis est prêt et peut être fermé. Seul un rectangle devrait être visible dans la fenêtre FreeCAD.

![](/images/Step14_rectangle_with_golden_ratio.png)

## Exercice : esquisse paramétrable

L'exemple ci-dessus a présenté les lignes de construction. Maintenant des choses importantes sont discutées pour faire des esquisses paramétrées. Voici un exercice pour obtenir un peu de pratique pour travailler avec le sketcher. L'objectif est de faire une esquisse pour quelque chose comme un cadre spécial, comme indiqué ci-dessous.

![](/images/Frame_erxercise_pad.png)

Il ne devrait y avoir que trois dimensions nécessaires pour définir le cadre. Afin de rendre plus facile l'évolution des dimensions, les contraintes peuvent être renommées par quelque chose de mnémotechnique. Il suffit de sélectionner la contrainte dans la vue liste et d'appuyer sur <F2>. La contrainte peut être nommé par exemple "Epaisseur". Le dessin ci-dessous montre les dimensions. Le pic à la droite devrait avoir deux fois l'épaisseur de paroi.

![](/images/Frame_exercise_dimensions.png)

L'esquisse doit avoir l'aspect prévu même après avoir modifié les dimensions clés, par exemple en les faisant passer à 2000 mm puis à 30. Vous devrez peut-être utiliser des contraintes d'angle à certains endroits pour atteindre cet objectif. L'image ci-dessous montre une esquisse qui n'a pas résisté à de telles modifications. Elle est désormais inutilisable. Pour retrouver l'état d'origine, le bouton d'annulation ![](/images/Std_Undo.svg) peut être utilisé.

![](/images/Frame_erxercise_failed_sketch.png)

Le schéma ci-dessus est inutilisable pour l'atelier Conception de Pièce. Seul le Profil sans intersection de lignes est autorisé. Les lignes de construction peuvent se croiser. Celles ci ne sont pas utilisées pour la fabrication de solides.

Une des utilisations principales de l'esquisseur est la construction de pièces dans l'atelier Conception de Pièce. La géométrie déjà existante peut être utilisée semblable à des lignes de construction. Comme ce tutoriel met davantage l'accent sur la fonctionnalité basique du sketcher, voir ici pour l'utilisation de géométrie externe : [Sketcher géométrie externe](/Sketcher_External/fr "Sketcher External/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Tutorial/fr&oldid=1471563>"