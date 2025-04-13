---
title: Recommandations pour la charte graphique
---
## Introduction

*Note:* Pour toutes les icônes de l'arborescence source, voir [Graphisme](/Artwork/fr "Artwork/fr").

Une **icône** FreeCAD est composée de 6 éléments qui peuvent être mémorisés facilement en utilisant l'acronyme "SALCHO":
**S**troke, **A**lignment, **L**highting, **C**olor, **H**highlighting, **O**utline

Voici un exemple concret mais arbitraire :

![](/images/FreeCAD_icon_example_details.svg)

|  |  |
| --- | --- |
| A | La couleur de surbrillance est utilisée pour toute cette surface pour indiquer la lumière tombant du dessus. |
| B | Le contour sombre obligatoire entoure la forme de l'icône pour fournir un contraste de forme. |
| C | Juste à l'intérieur du contour, le trait de surbrillance (couleur de surbrillance) offre un contraste sur les arrière-plans sombres. |
| D | Cette face est principalement la couleur de base, mais un léger dégradé du point culminant (en haut à gauche) à la base (en bas à droite) donne l'impression que la lumière tombe du haut à gauche. |
| E | Le point culminant ici est la couleur de base (un ton vers le bas) pour donner l'impression que c'est le visage le plus éloigné de la lumière. |
| F | Cette face est comme la face D mais va de Base (en haut à gauche) à Dark (en bas à droite), pour indiquer qu'il s'agit d'une face la plus éloignée de la lumière. |

Les sections suivantes expliquent ces éléments avec plus de détails.

Cette icône s'affiche comme suit:

|  |  |
| --- | --- |
|  | 64 px, taille originale, gros boutons. |
|  | 32 px, taille moyenne, boutons normaux. |
|  | 6 px, petite taille, comme il apparaît dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). |

## Couleurs

*Obligatoire*

FreeCAD utilise une palette adaptée de la palette [Tango palette](https://web.archive.org/web/20190921043652/http://tango.freedesktop.org/tango_icon_theme_guidelines). Chaque couleur principale est disponible en 4 tons : Highlight, Base, Dark et Outline. Notez que le contour n'est pas complètement noir mais une variation très sombre de la base.

| #fce94f   (252, 233, 79)   Butter 1 | #edd400   (237, 212, 0)   Butter 2 | #c4a000   (196, 160, 0)   Butter 3 | #302b00   (48, 43, 0)   Butter 4 |
| --- | --- | --- | --- |
| #8ae234   (138, 226, 52)   Chameleon 1 | #73d216   (115, 210, 22)   Chameleon 2 | #4e9a06   (78, 154, 6)   Chameleon 3 | #172a04   (23, 42, 4)   Chameleon 4 |
| #fcaf3e   (252, 175, 62)   Orange 1 | #f57900   (245, 121, 0)   Orange 2 | #ce5c00   (206, 92, 0)   Orange 3 | #321900   (50, 25, 0)   Orange 4 |
| #729fcf   (114, 159, 207)   Sky Blue 1 | #3465a4   (52, 101, 164)   Sky Blue 2 | #204a87   (32, 74, 135)   Sky Blue 3 | #0b1521   (11, 21, 33)   Sky Blue 4 |
| #ad7fa8   (173, 127, 168)   Plum 1 | #75507b   (117, 80, 123)   Plum 2 | #5c3566   (92, 53, 102)   Plum 3 | #171018   (23, 16, 24)   Plum 4 |
| #e9b96e   (233, 185, 110)   Chocolate 1 | #c17d11   (193, 125, 17)   Chocolate 2 | #8f5902   (143, 89, 2)   Chocolate 3 | #271903   (39, 25, 3)   Chocolate 4 |
| #ef2929   (239, 41, 41)   Scarlet Red 1 | #cc0000   (204, 0, 0)   Scarlet Red 2 | #a40000   (164, 0, 0)   Scarlet Red 3 | #280000   (40, 0, 0)   Scarlet Red 4 |
| #34e0e2   (52, 224, 226)   FreeTeal 1 | #16d0d2   (22, 208, 210)   FreeTeal 2 | #06989a   (6, 152, 154)   FreeTeal 3 | #042a2a   (4, 42, 42)   FreeTeal 4 |
| #ffffff   (255, 255, 255)   Snowy White | #eeeeec   (238, 238, 236)   Aluminium 1 | #d3d7cf   (211, 215, 207)   Aluminium 2 | #babdb6   (186, 189, 182)   Aluminium 3 |
| #888a85   (136, 138, 133)   Aluminium 4 | #555753   (85, 87, 83)   Aluminium 5 | #2e3436   (46, 52, 54)   Aluminium 6 | #000000   (0, 0, 0)   Jet Black |

Palette complète

Une sélection de quelques couleurs clés.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  | Utiliser les tons jaunes pour les outils qui créent des objets, par exemple voir l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") et l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"). |
|  |  |  |  | Utiliser les tons bleus pour les outils qui modifient les objets, par exemple voir l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") et l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"). |
|  |  |  |  | Utiliser les tons bleus sarcelles pour les outils liés à l'affichage, par exemple voir le [Std Menu Affichage](/Std_View_Menu/fr "Std View Menu/fr"). |
|  |  |  |  | Utiliser les tons rouges pour les outils liés aux contraintes, par exemple voir l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). |

|  |  |
| --- | --- |
| Pourquoi me limiter à ces couleurs ? | Restreindre les couleurs à une palette définie permet d'éviter une iconographie hétérogène et améliore la lisibilité lorsqu'il existe de nombreuses icônes. |
| Comment utiliser la palette FreeCAD ? | L'installation de [la palette](https://gist.github.com/GAZ082/724d2092b2986e3b17b9663f34093cf5) est aussi simple que de la [copier dans votre dossier de palette Inkscape](https://inkscape.org/en/learn/faq/#how-install-new-extensions-palettes-document-templates-symbol-sets-icon-sets-etc). |

## Grille et Largeur du trait

*Obligatoire*

Les icônes FreeCAD ont une taille nominale de 64 pixels en largeur et en hauteur. Lors de la création ou de la modification d'une icône, assurez-vous que la taille du document est de 64 x 64 avec des unités en pixels (px). Laisser une marge intérieure de 2 pixels d'espace vide tout autour de la zone du document est utile car cela empêche les effets tels que l'anti-crénelage (flou des bords). Autrement dit, l'espace utilisable pour l'icône doit être considéré comme 60 x 60, et les bords doivent être laissés vides.

![](/images/FreeCAD_icon_size.svg)

Dessinez l'icône à l'intérieur de la zone bleue et tout ira bien.

Il est également fortement recommandé d'utiliser une grille visuelle qui a une ligne de grille mineure tous les pixels et une ligne de grille principale tous les 2 pixels. Les traits de l'icône doivent être alignés le long des intersections mineures de la grille.

Les traits ne doivent pas être *plus petits* que 2 pixels, avec des extrémités et des coins arrondis dans la plupart des cas. Les traits peuvent être *plus épais* mais ils doivent de préférence être un multiple de 2px afin de minimiser le flou de mise à l'échelle.

![](/images/FreeCAD_icon_stroke_2px.svg)

Grille avec des traits multiples de 2px.

|  |  |
| --- | --- |
| Pourquoi utiliser cette grille et cette taille de trait ? | Pour des raisons historiques, FreeCAD utilise une icône 64x64 qui est ensuite réduite. Pas idéal, mais cela ajoute du caractère. Par conséquent, garder les choses alignées sur une puissance de deux grilles avec des épaisseurs qui sont des puissances de deux aide à éviter ou au moins à atténuer les problèmes d'anti-aliasing lors de la mise à l'échelle. |
| Comment puis-je me conformer à cela? | Si vous utilisez Inkscape, accédez à **Fichier → Propriétés du document** et confirmez que la largeur, la hauteur et les unités de votre page sont correctes. Ensuite, allez dans l'onglet **Grilles**, cliquez sur Nouveau, définissez les unités sur `px`, `Spacing X` et `Spacing Y` à 1 et `Grille principale tous les` à 2. |

## Contour

*Obligatoire*

En vous basant sur la couleur principale de l'icône, assurez-vous qu'il y a un contour sombre de 2 pixels, comme mentionné précédemment. Cela fonctionne à l'unisson avec le point culminant pour assurer un bon contraste de forme sur plusieurs tons de fond.

![](/images/Draft_Point.svg) ![](/images/Draft_Point_backgrounds.svg)

Le bord sombre de l'icône est le contour.

|  |  |
| --- | --- |
| Pourquoi l'esquisse est-elle nécessaire? | Le contour est le squelette sur lequel tout le reste se bloque en ajoutant un contraste de forme. L'utilisation de la couleur Outline ou de la couleur Dark dépend de la situation, mais sans cette ligne, la gamme d'arrière-plans sur lesquels l'icône est visible est considérablement limitée. |
| Comment puis-je me conformer à cela? | Ajoutez simplement un trait de 2 pixels autour de chaque partie de l'icône qui sera adjacente à la couleur d'arrière-plan, c'est-à-dire que le contour est destiné aux traits externes. Dans le cas de formes qui ont un trou au milieu, par exemple un beignet, le contour doit également être ajouté au trou intérieur. Accrochez les nœuds de votre chemin à la grille chaque fois que possible, en visant les intersections mineures de la grille. |

## Surbrillance

*Fortement conseillé*

Pour mettre en surbrillance, ajoutez un trait interne de 2px pour aider à faire ressortir le contour. Sur les fonds sombres, c'est cette mise en évidence qui fournira la forme à l'icône.

![](/images/Draft_Move.svg) ![](/images/Draft_Move_backgrounds.svg)

La mise en surbrillance aide dans les arrière-plans sombres.

|  |  |
| --- | --- |
| Pourquoi utiliser la surbrillance ? | La surbrillance fonctionne harmonieusement avec le contour pour améliorer le contraste de la forme, en particulier sur les arrière-plans sombres. Ce n'est jamais une mauvaise idée, mais si vous n'avez pas l'espace, par exemple, lorsque vous avez une ligne très fine, vous pouvez la désactiver à condition d'avoir suffisamment de contraste entre la couleur principale et le contour. |
| Comment puis-je me conformer à cela ? | Tout comme le contour, tracez simplement un trait de 2px autour du côté interne du contour, en alignant les nœuds sur la grille lorsque cela est possible, en visant les intersections de grille mineures. |

## Éclairage

*Optionnel*

Selon les directives de Tango, si vous ajoutez un effet d'éclairage dégradé, essayez de lui donner l'impression que la lumière vient du coin supérieur gauche. Cela se fait en ajoutant la couleur de surbrillance en haut à gauche et la couleur de base ou sombre en bas à droite. Notez que seules les couleurs de la palette sont utilisées.

![](/images/Draft_Clone.svg) ![](/images/Draft_Clone_backgrounds.svg)

Effet d'éclairage subtil venant du haut à gauche.

|  |  |
| --- | --- |
| Pourquoi utiliser l'éclairage ? | L’éclairage est une autre façon de lier les icônes ensemble et de faire en sorte que les niveaux d'[*éclairage*](https://en.wikipedia.org/wiki/Lightness) servent à améliorer leur lisibilité. A condition que le contour et la surbrillance soient présents, cela peut être considéré comme facultatif |
| Comment puis-je me conformer à cela ? | Définissez le remplissage comme un dégradé linéaire ou radial. Dans Inkscape, cela est disponible dans les paramètres de trait et de remplissage. Avec "F2", il est possible de déplacer les nœuds d'ajustement du gradient pour s'assurer qu'ils sont à l'angle voulu. |

## Format d'enregistrement recommandé

Il est conseillé de faire toutes les icônes en format [SVG](/SVG "SVG"), par exemple avec [Inkscape](http://inkscape.org). Cela rend plus facile l’application des changements et des icônes dérivés dans l'espace de la même application.

Lors de la validation des icônes à utiliser directement par FreeCAD (dans un fichier \*.qrc), enregistrez-les sous "Plain SVG". Cela réduira la taille de l'icône et économisera l'espace disque et mémoire.

## Remarques de clôture

Rappelez-vous : **SALCHO** (AVC, alignement, éclairage, couleur, mise en évidence, contour)

Voici quelques conseils pour vérifier votre travail :

### Vérification de la taille

Inkscape dispose d'un outil pratique pour vérifier votre icône à différentes tailles. Allez dans **Affichage → Aperçu de l'icône...** et il vous montrera des aperçus de votre icône redimensionnée à 16, 24, 32 et 64 pixels.

### Vérification de votre contour

1. Placez votre icône sur un grand rectangle de la même couleur que la couleur la plus foncée de votre icône.
2. Semble toujours OK? Génial. Passez à l'étape suivante. Sinon, ajustez la surbrillance.
3. Faites de même mais cette fois en utilisant la couleur la plus claire.
4. Semble toujours OK? Génial. Les contours et les faits saillants ont été utilisés de manière appropriée. Sinon, ajustez le contour.

![](/images/Draft_Move_backgrounds_outline.svg)

Test de l'icône au regard des couleurs les plus sombres et les plus claires en arrière-plan

|  |  |
| --- | --- |
| Mon icône est à peine visible. | Vous avez un contraste de forme médiocre. Vérifiez le contour et mettez en surbrillance, l'un d'entre eux est probablement manquant ou mal appliqué. |

### Vérification de votre contraste

1. Exportez votre icône SVG vers un format bitmap, comme `.png` ou `.jpg`.
2. Chargez votre bitmap dans un programme d'image et changez-le en niveaux de gris. Par exemple, dans GIMP, vous iriez dans **Image → Mode → Niveaux de gris**.
3. Inkscape vous permet de convertir le SVG directement en niveaux de gris en utilisant **Extensions → Couleur → Niveaux de gris**.
4. Pouvez-vous toujours clairement distinguer les détails internes ? Génial. Le contraste est bon.

Une image en niveaux de gris vous permet d'identifier plus facilement les problèmes de contraste, car seul un mélange de noir et blanc est présent. Le test d'images en niveaux de gris est également bon pour les utilisateurs daltoniens. S'ils peuvent voir les détails dans une image en niveaux de gris, le contraste de l'image entièrement colorée est probablement également bon.

![](/images/Draft_Move_contrast_grayscale.svg)

Test du contraste de l'icône en niveaux de gris

|  |  |
| --- | --- |
| Je ne peux pas distinguer tous les détails. | Les couleurs que vous avez choisies ont un contraste de faible valeur. Essayez d'utiliser des couleurs plus éloignées de 4 tons dans votre palette, c'est-à-dire qu'un surlignage vert à côté d'un surlignage jaune sera difficile à voir, décalez l'une de ces couleurs en Base ou Foncé. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Artwork_Guidelines/fr&oldid=1494641>"