---
title: Tutoriel pour les bases de l'ancrage
---
|  |
| --- |
| Tutorial |
| Topic |
| Ancrage |
| Level |
| Débutant et intermédiaire |
| Time to complete |
| 1 heure |
| Authors |
| Bance |
| FreeCAD version |
| V0.17 ou au delà |
| Example files |
| [Basic Attachment Tutorial.FCStd](https://github.com/BanceFC/Examples/blob/master/AttachmentTutorial.FCStd) |
| See also |
| *None* |
|  |

![](/images/Attachment_Model.png)

Le modèle terminé

Ce tutoriel devrait servir d'introduction à ![](/images/Part_EditAttachment.svg) [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr"). Il n'est pas exhaustif mais nous espérons qu'il aidera les utilisateurs à se familiariser avec.

Ancrage est un utilitaire permettant de lier l'emplacement d'un objet à l'emplacement ou à la forme d'un ou de plusieurs autres objets. Le premier objet ancré suivra si l'emplacement ou la forme du ou des autres objets change. L'accent est mis sur l'atelier PartDesign et l'ancrage d'esquisses à d'autres esquisses, cette méthode étant recommandée pour créer des modèles [*stables*](/Feature_editing/fr#Conseils_pour_la_cr.C3.A9ation_de_mod.C3.A8les_robustes "Feature editing/fr").  
Ce tutoriel a été écrit pour la V0.19, mais devrait être valide pour toute version V0.17 et ultérieure. Cependant, les choses peuvent différer dans certains détails.  
Le modèle original a été conçu par Md. Aminul Islam et téléchargé à partir d'ici : <https://grabcad.com/library/50-cad-exercise-drawing-1> en tant que "Practice - 13".

## Prérequis

Avant de démarrer ce tutoriel, l'utilisateur doit :

1. Utiliser la version 0.17 ou supérieure.
2. Être à l'aise pour naviguer dans la [vue 3D](/3D_view/fr "3D view/fr").
3. Être capable de créer et de contraindre une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
4. Avoir une connaissance de base de l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
5. Avoir une connaissance de base des [expressions](/Expressions/fr "Expressions/fr").

## Objectifs

Le but de ce tutoriel est de montrer comment un modèle peut être construit en positionnant des esquisses par rapport à d'autres géométries à l'aide de certains des différents modes d'ancrage disponibles.

Bien qu'il soit possible d'utiliser la géométrie solide (sommets, arêtes et faces) pour la géométrie de référence, dans l'intérêt de ce qui est considéré comme une bonne pratique, ce tutoriel s'abstiendra de le faire. Voir [Édition de fonctions](/Feature_editing/fr "Feature editing/fr") pour plus d'explications.

## Préliminaires

Avant de commencer, examinons comment nous devrions procéder pour construire ce modèle.

Quel que soit l'angle sous lequel nous le regardons, nous voyons un carré ou un rectangle avec un coin coupé.

![](/images/AttachmentTD.png)

La vue TechDraw

Il existe cependant un axe évident à partir duquel toutes les caractéristiques sont communes.

Il est parfaitement possible de créer une géométrie de données ici et d'y ancrer toutes les esquisses. Dans certains modèles, ce serait un choix judicieux, pour les besoins de ce tutoriel, nous nous limiterons aux Std Plans et aux esquisses.

Nous pourrions faire une esquisse sur n'importe lequel des grands plans. Nous pourrions inclure un coin coupé dans notre esquisse de base, mais laissons cela et incluons une esquisse et une cavité supplémentaire, à des fins d'apprentissage.

![](/images/CommonAxis.png)

L'axe commun

## Ancrage

Nous commencerons par un bloc et nous enlèverons l'excédent à l'aide d'une cavité.

Basculez vers l'atelier PartDesign, ouvrez un nouveau document, créez un corps et une nouvelle esquisse sur le plan XY.

Là, vous venez de faire un ***ancrage***. Lorsque vous sélectionnez le plan sur lequel réaliser l'esquisse, c'est en fait ce qui est fait, le dialogue de sélection du plan n'est qu'une version simplifiée du dialogue d'ancrage, où tous les décalages sont fixés à zéro.

Dessinez un rectangle. Dans les versions 0.17-0.21, la direction des lignes du rectangle dépend de la manière dont il est créé. Pour obtenir les mêmes résultats que dans les images ci-dessous, utilisez l'outil [rectangle centré](/Sketcher_CreateRectangle_Center/fr "Sketcher CreateRectangle Center/fr") : pour le premier point, choisissez l'origine de l'esquisse, et pour le second point, le coin supérieur droit du rectangle. Dans les versions 1.0 et supérieures, les arêtes des rectangles ont une direction fixe opposée à celle des images, ce qui complique un peu la tâche pour suivre ce tutoriel. Vous pouvez éviter ce problème en créant manuellement un rectangle dans le sens des aiguilles d'une montre à l'aide de l'outil [polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr").

Assurez-vous que le rectangle est centré sur l'origine, contraignez-le avec une longueur (horizontale) de 70 mm et nommez-la "length", contraignez-le encore avec une largeur (verticale) de 40 mm et nommez-la "width".

Sélectionner l'esquisse, presser le bouton F2 et le renommer "BaseSketch"

![](/images/Sketch1.png)

L'esquisse de base

[En haut](#top)

### Décaler l'ancrage

Si nous laissons l'esquisse où elle est, l'exemple serait trop facile, alors changeons la position de l'esquisse en modifiant le décalage de son ancrage.

Dans la vue combinée (onglet Données), regardez la section Attachment du panneau des propriétés, ici nous pouvons voir que BaseSketch a un support version 0.21 et précédentes ou un support d'ancrage [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") du plan XY et qu'il est ancré avec le mode FlatFace. Regardez plus bas et trouvez Attachment Offset et développez-le en cliquant sur le signe plus ou la flèche à côté.

Faire de même pour le sous-titre Position. Modifier le décalage X à 80 mm et le décalage Y à 90 mm.

![](/images/Comboview.png)

Décalage de l'ancrage

Le décalage d'ancrage est généralement utilisé en conjonction avec des expressions pour offrir une position paramétrique parallèle au plan, par exemple pour positionner une esquisse sur la face supérieure d'un bloc, en utilisant une expression (Pad.Length) pour le décalage axe Z.

L'esquisse peut maintenant être extrudée ![](/images/PartDesign_Pad.svg), supposons que la hauteur de l'extrusion doit être la même que la largeur de l'esquisse. Dans la fenêtre de dialogue **Paramètres de protrusion**, sélectionnez la case **Longueur**, appuyez sur = ou sélectionnez l'icône de fonction ![](/images/Bound-expression.svg) et tapez "**Sketch.Constraints.width**" ou "**<<BaseSketch>>.Constraints.width**", cette expression devrait donné "40 mm", puis cochez **Symétrique au plan** et appuyez sur la touche OK.

![](/images/BasePad2.png)

La protrusion de base

Faisons l'esquisse suivante, ce n'est pas vraiment important celle que nous choisissons, mais le plus facile est le triangle isocèle 20x20 qui empiète sur la longueur du bloc.

Faites une nouvelle esquisse, choisissez le plan que vous voulez (nous allons de toute façon changer son ancrage).

Dessinez le triangle, rendez les deux côtés égaux et contraignez sa longueur de la même manière que vous l'avez fait pour la longueur du pavé, mais cette fois, faites la formule "**Sketch.Constraints.width/2**" ou "**<<BaseSketch>>.Constraints.width/2**".

Il devrait rester deux degrés de liberté, à savoir la position par rapport à l'origine. Fixez l'un des coins à l'origine de sorte que l'esquisse ressemble à ceci:

![](/images/IsoscelesSketch.png)

Le premier triangle

[En haut](#top)

### Changer l'ancrage

Fermez l'esquisse. Renommez l'esquisse en l'appelant 'IsoscelesSketch'.
L'origine de l'esquisse est le point qui sera ancré dans le futur. Il est donc important de choisir comment l'esquisse est contrainte à l'origine. L'origine peut être considérée comme un crochet qui s'ancre à la référence. Nous pouvons ajuster la position de l'esquisse à l'aide de décalages, mais il est préférable de faire un choix judicieux dès le départ.

Nous allons maintenant changer le mode d'ancrage de l'esquisse dans notre modèle.

Sélectionnez la protrusion et rendez-la invisible, et rendez BaseSketch visible. Nous devons voir BaseSketch et nous voulons masquer la protrusion afin d'éviter de faire des sélections incorrectes.

La vue 3D devrait ressembler à quelque chose comme ceci :

![](/images/TwoSketches.png)

Deux esquisses

j'ai choisi XY comme plan de construction du triangle isocèle mais un autre plan peut être choisi.

Nous devons maintenant sélectionner IsoscelesSketch et accéder au volet des propriétés dans la vue Combo. Cliquez dans la case de valeur à côté de la propriété Map Mode, un bouton apparaît avec une ellipse ....

![](/images/MapModeSelect.png)

Sélection du mode Map

Cliquez dessus et un volet de tâches s'ouvrira avec la fenêtre de dialogue Ancrage.

![](/images/AttachmentDialogue.png)

Fenêtre de dialogue Ancrage

Maintenant on voit l'ancrage où l'esquisse a été créée (dans la fenêtre de dialogue Sélectionner un plan).

Le bouton Référence 1 est en mode sélection, donc dans la vue 3D, sélectionnez l'un des longs côtés de l'esquisse de base.

L'IsoscelesSketch s'ancrera à la ligne que vous avez sélectionnée, et la fenêtre du mode d'ancrage changera pour refléter les modes disponibles. Si le triangle pointe dans le mauvais sens, vous pouvez le corriger en cochant la case "Inverser les côtés" au bas de la fenêtre de dialogue (ou plus tard, après avoir fermé la fenêtre de dialogue, vous pouvez le modifier dans l'onglet de données des propriétés en réglant "Map Reversed" à "True"). L'extrémité de la ligne à laquelle le triangle est ancré n'a pas d'importance (cela dépend de la façon dont le rectangle a été créé).

![](/images/NormalToEdgeIsosceles.png)

Normale à l'arête isocèle

![](/images/NormalToEdgeAttachment.png)

Normale à l'arrête ancrage

Vous pouvez voir que l'IsocelesSketch est ancré à la ligne sélectionnée au point que nous avons contraint à l'origine plus tôt.

Cette notion de l'origine étant le point d'ancrage est importante, elle rend les modes d'ancrage très flexibles et peut être un outil puissant dans votre modélisation.

Il peut être utilisé avec l'ajout de décalages pour positionner avec précision les esquisses sans dépendre de la géométrie générée et de tous les problèmes pouvant découler de leur utilisation.

FreeCAD essaie de prédire le mode d'ancrage pour vous et filtre les modes disponibles pour la sélection donnée.

Dans ce cas, les options sont « désactivées », [« **Normal à une arête** »](/Part_EditAttachment/fr#Normal_.C3.A0_une_ar.C3.AAte "Part EditAttachment/fr") et [« Inertie 2-3 »](/Part_EditAttachment/fr#Inertie_2-3 "Part EditAttachment/fr"). Normal à une arête est en gras et est considéré comme la sélection préférée.

La zone de notification en haut de la fenêtre de dialogue affiche un message en vert indiquant le mode utilisé.

Les options grisées indiquent que d'autres sélections sont nécessaires pour les activer.

À ce stade, vous pouvez faire une autre sélection et voir la différence entre les modes. N'oubliez pas de revenir en mode « **Normal à une arête** » avant de poursuivre le tutoriel.

L'IsocelesSketch est maintenant correctement positionné, confirmez et quittez la fenêtre de dialogue.

Vous pouvez maintenant [découper](/PartDesign_Pocket/fr "PartDesign Pocket/fr") l'esquisse. Choisissez le type *À travers tous* et selon l'orientation de votre esquisse l'option *Inverser*.

![](/images/Pocket.png)

Cavité

[En haut](#top)

### Un pas plus loin

Créez l'esquisse suivante, les dimensions doivent être des expressions ("**Sketch.Constraints.width**","**Sketch.Constraints.width/2**" ou "**<<BaseSketch>>.Constraints.width**","**<<BaseSketch>>.Constraints.width/2**") et elle doit être contrainte à l'origine au sommet adjacent à l'hypoténuse et son côté le plus court. (Dans l'esquisse vide, si vous connaissez la ![](/images/Sketcher_CarbonCopy.svg) [copie carbone](/Sketcher_CarbonCopy/fr "Sketcher CarbonCopy/fr"), vous pouvez l'utiliser pour faire une copie de l'esquisse 'IsoscelesSketch' et modifiez ses paramètres en conséquence.)

Renommer l'esquisse RightAngleTriangleSketch.

![](/images/FinalSketch.png)

RightAngleTriangleSketch

Encore une fois, nous devons masquer le solide, dans ce cas Cavité, et nous assurer que les deux esquisses sont visibles pour la sélection (laissez isoscelesSketch invisible, il ne fera que vous gêner).

Sélectionnez RightAngleTriangleSketch et ouvrez la fenêtre de dialogue Ancrage.

Sélectionnez l'un des côtés courts des rectangles comme première référence.

![](/images/RATNormalToEdge.png)

RightAngleTriangleSketch mode Normal To Edge

La vue 3D doit être similaire à l'image ci-dessus. Peu importe à quelle extrémité de la ligne le triangle est ancré (cela dépend de la façon dont le rectangle a été crée).

Si vous avez choisi la mauvaise ligne, changez-la maintenant. Si le triangle pointe dans le mauvais sens, vous pouvez le corriger en cochant la case "Retourner les côtés" au bas de la fenêtre de dialogue (ou plus tard après avoir fermé la fenêtre de dialogue, il peut être modifié dans l'onglet des données des propriétés en définissant "Map Reversed" à "True").

RightAngleTriangleSketch est maintenant dans une position qui nous donnera la bonne géométrie après une opération de cavité, mais nous pouvons être un peu inventifs ici et positionner l'esquisse de manière à ce qu'il nous soit plus facile d'ancrer plus tard la géométrie. Nous allons déplacer notre esquisse au milieu de la ligne afin qu'elle nous fournisse un sommet en haut du [chanfrein](/Glossary/fr#C "Glossary/fr") d'angle.

Dans la fenêtre de dialogue d'ancrage, nous allons changer le mode d'ancrage de [« Normal à une arête »](/Part_EditAttachment/fr#Normal_.C3.A0_une_ar.C3.AAte "Part EditAttachment/fr") à [Inertie 2-3](/Part_EditAttachment/fr#Inertie_2-3 "Part EditAttachment/fr"). Cela changera la position au centre de la ligne, cela dépasse le cadre de ce tutoriel pour décrire tous les modes d'ancrage, leurs descriptions peuvent être trouvées à la page ![](/images/Part_Attachment.svg) [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr"). Il est clair qu'Inertie 2-3 utilise le centre de masse et fait l'affaire ici.

![](/images/ADInertia.png)

Fenêtre de dialogue Ancrage en mode Inertie 2-3

![](/images/3DInertia.png)

RightAngleTriangleSketch en mode Inertie 2-3

RightAngleTriangleSketch est maintenant correctement positionné, confirmez et quittez la fenêtre de dialogue.

Vous pouvez maintenant effectuer une opération Cavité avec l'esquisse. Cette fois, utilisez Mirroir par rapport au plan.

![](/images/2ndPocket.png)

2ème cavité

[En haut](#top)

### Manipuler l'ancrage

En général il vaut mieux positionner nos esquisses simplement avec des modes d'ancrage. Mais il n'est pas toujours possible de positionner les esquisses exactement là où nous en avons besoin sans modifier le mode d'ancrage d'une manière ou d'une autre.

FreeCAD fournit un certain nombre de moyens de le faire.

1. [Attachment Offset](/Part_Part2DObject/fr#Property_Attachment_Offset "Part Part2DObject/fr") permet le positionnement par rapport aux coordonnées locales du point d'ancrage. (où l'origine de l'esquisse positionnée est ancrée).
2. [Map Path](/Part_Part2DObject/fr#Property_Map_Path "Part Part2DObject/fr") (Propriété dans l'onglet Données avec l'option *Afficher les propriétés cachées* activée) : permet le positionnement le long d'une arête sélectionnée.
3. [Flip Sides/Map Reversed](/Part_Part2DObject/fr#Property_Map_Reversed "Part Part2DObject/fr"). Miroir effectif de l'esquisse.

Pour notre dernière esquisse, nous l'ancrerons arbitrairement et corrigerons sa position à l'aide des modificateurs répertoriés ci-dessus.

Créez l'esquisse finale, les dimensions doivent être des expressions ("**Sketch.Constraints.width**","**Sketch.Constraints.width/2**" ou "**<<BaseSketch>>.Constraints.width**" , "**<<BaseSketch>>.Constraints.width/2**") et elle doit être contrainte à l'origine au sommet adjacent à l'hypothénuse et à son côté le plus court.

Renommez l'esquisse FinalSketch.

![](/images/RightAngleTriangle.png)

FinalSketch

Notez que FinalSketch a été contrainte à l'origine différemment, sinon, nous aurions pu utiliser ![](/images/Sketcher_CarbonCopy.svg) [Copie carbone](/Sketcher_CarbonCopy/fr "Sketcher CarbonCopy/fr") mais l'esquisse ne contient que trois lignes et cinq contraintes.

Une fois encore, nous devons masquer le solide, dans ce cas Pocket001, et nous assurer que les deux esquisses sont visibles pour la sélection (BaseSketch et FinalSketch).

Sélectionnez FinalSketch et ouvrez la fenêtre de dialogue d'ancrage, sélectionnez l'un des côtés courts des rectangles comme première référence.

![](/images/NormalToEdgeFinal.png)

FinalSketchAttachment

La vue 3D doit être similaire à l'image ci-dessus. Peu importe à quelle extrémité de la ligne le triangle est ancré (cela dépend de la façon dont le rectangle a été crée).

Maintenant, nous devons l'inverser, le translater de 90° et le décaler vers le coin.

Au bas de la fenêtre de dialogue d'ancrage se trouve une case à cocher intitulée "Inverser les côtés", cochez cette case.

Le FinalSketch se réfléchit lui-même.

Nous allons maintenant translater de 90°. À partir de l'illustration FinalSketch ci-dessus, nous pouvons voir que l'axe de révolution devrait être l'axe X. Dans le Wiki, cela s'appelle ["Roulis"](/Tasks_Placement/fr#Roll "Tasks Placement/fr"). N'oubliez pas que ceci est relatif au système de coordonnées local. Entrez 90° dans la case "Autour de l'axe X" de la section décalage de la fenêtre de dialogue d'ancrage.

![](/images/FSFlipRot.png)

FinalSketch retourné et pivoté

![](/images/FSFlipRotAD.png)

Fenêtre de dialogue d'ancrage de FinalSketch

Nous pourrions utiliser le décalage de la direction Z, ce qui correspond maintenant à la direction Y opposée dans le système de coordonnées global, pour déplacer FinalSketch vers le coin, mais je voudrais démontrer une autre fonctionnalité.

Alors validons et fermons la fenêtre de dialogue pour l'instant.

[En haut](#top)

### Paramètre Map Path

Sélectionnez FinalSketch et regardez dans la vue combinée, le volet des propriétés dans la section attachment, juste en dessous de la propriété Map Mode se trouve le paramètre Map Path.

![](/images/FinalSketchProperties.png)

Panneau des propriétés de FinalSketch

Le paramètre par défaut est 0.0. Si nous le changeons en 1, l'esquisse sera mappée à l'autre extrémité de la ligne et 0.5 nous donne la moitié du chemin. Entrez 0.5 dans la colonne de valeur.

La combinaison de 'Normal To Edge' et le paramètre Map Path est très utile pour positionner les esquisses pour les lissages ou les balayages.

![](/images/FinalSketchPosition.png)

Position de FinalSketch

Vous pouvez maintenant effectuer une opération Cavité avec l'esquisse. N'oubliez pas d'utiliser Mirroir par rapport au plan.

![](/images/3rdPocket.png)

3ème cavité

[En haut](#top)

### Un mode de sélection différent

Jusqu'à présent, nous avons vu comment positionner des esquisses avec des modes d'attachement et des décalages, mais nous aurions pu utiliser des plans standard car le positionnement relatif était assez simple.

Maintenant, nous sommes confrontés à un problème plus difficile, comment pouvons-nous couper ce morceau qui reste ?

![](/images/3rdPocketMarked.png)

Résidus de coupe

Nous pouvons voir qu'il y a un plan qui passe par les coins du triangle rouge, ce serait simple si nous pouvions simplement le découper là.

Eh bien parce que nous avons fait attention à la façon dont nous avons positionné nos esquisses plus tôt, nous le pouvons!

Tout d'abord, rendez le solide invisible, en fait, rendez tout invisible sauf RightAngleTriangleSketch et FinalSketch.

Sélectionnez maintenant les trois points qui forment le plan, N'oubliez pas de maintenir la touche Ctrl (CMD sur un Mac) pendant la sélection.

![](/images/TwoTriangles.png)

Sélection

Lorsque vous appuyez sur ![](/images/PartDesign_Plane.svg) [Créer un plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr"), le dialogue d'ancrage s'ouvrira montrant les trois points que vous avez sélectionnés comme références 1-3 et un mode 'Plane By 3 Points'.

![](/images/DPAttachDia.png)

Fenêtre de dialogue Ancrage

Confirmez et fermez la fenêtre de dialogue. Nous pouvons maintenant utiliser le plan de référence pour créer une esquisse, mais il n'est pas nécessaire d'utiliser le plan directement pour effectuer le pocket du matériau en excès. Assurez-vous que le plan de référence est sélectionné et cliquez sur Cavité, dans la fenêtre de dialogue de Cavité sélectionnez "A travers tout" et "Inversé". Fermez la fenêtre de dialogue et nous avons terminé.

![](/images/FinishedArticle.png)

L'objet fini

[En haut](#top)

### Ancrage temporaire à un plan généré

Parfois, il est difficile de déterminer comment aligner l'esquisse ou le plan de référence sur la face générée sans réellement s'y attacher, ce qui, comme indiqué ci-dessus, peut être problématique. Une solution consiste à attacher à la géométrie générée, puis à modifier l'ancrage à l'un des plans de coordonnées. FreeCAD conservera intactes la position et l'orientation existantes mais la référencera désormais à des plans stables, évitant ainsi les problèmes de renommage topologique. Cependant, le coût de cette opération est que le lien paramétrique avec la géométrie générée est perdu. Si le modèle sous-jacent est modifié, tout ne s'effondrera pas comme cela arrive souvent lors de l'ancrage à la géométrie générée mais l'ancrage ne suivra pas les changements et devra être ajusté en répétant l'astuce d'ancrage temporaire.

La méthode précédente est plus robuste mais plus abstraite et complexe à réaliser. L'astuce de l'ancrage temporaire est rapide et facile à mettre en œuvre, plus robuste que l'ancrage à la géométrie générée, mais perd un certain degré de liaison dans le processus de modélisation paramétrique.

## Conclusion

Part Ancrage ne garantit pas un modèle robuste. Il faut éviter d'ancrer ou de placer des esquisses sur la géométrie générée comme les faces ou les arêtes des protrusions et des cavités.

Il existe de nombreux modes d'ancrage disponibles pour les utilisateurs, seules les bases sont couvertes ici.

Une chose importante à retenir de ce tutoriel, c'est l'importance de l'origine qui est le "crochet". Rappelez-vous également que l'orientation se fait dans le système de coordonnées locales.

Happy Attaching!

[En haut](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Attachment_Tutorial/fr&oldid=1561732>"