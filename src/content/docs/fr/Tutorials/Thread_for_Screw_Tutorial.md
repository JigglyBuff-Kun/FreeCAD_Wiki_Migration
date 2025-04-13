---
title: Tutoriel pour créer une vis
---

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutoriel                                                                                                                                           |
| Thème                                                                                                                                              |
| Conception de produit                                                                                                                              |
| Niveau                                                                                                                                             |
| Avancé                                                                                                                                             |
| Temps d'exécution estimé                                                                                                                           |
| 60 minutes                                                                                                                                         |
| Auteurs                                                                                                                                            |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC"), [Murdic](/index.php?title=User:Murdic&action=edit&redlink=1 "User:Murdic (page does not exist)"), vocx |
| Version de FreeCAD                                                                                                                                 |
| 0.19                                                                                                                                               |
| Fichiers exemples                                                                                                                                  |
| [Updated: Thread for screw tutorial](https://forum.freecad.org/viewtopic.php?f=36&t=44668)                                                         |
| Voir aussi                                                                                                                                         |
| _None_                                                                                                                                             |
|                                                                                                                                                    |

## Introduction

Ce tutoriel est un ensemble de techniques pour modéliser les filetages de vis dans FreeCAD. Il a été mis à jour pour la v0.19, bien que le processus général soit essentiellement le même depuis la v0.14, lorsque le tutoriel a été écrit à l'origine. Le contenu mis à jour se concentre sur l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour créer le filetage. Il n'utilise pas le ![](/images/PartDesign_AdditiveHelix.svg) [PartDesign Hélice additive](/PartDesign_AdditiveHelix/fr "PartDesign AdditiveHelix/fr"), cet outil ayant été introduit plus tard.

Dans les systèmes de CAO traditionnels, la modélisation des filetages de vis est déconseillée car elle impose une charge importante sur le noyau de modélisation, ainsi que sur le rendu des formes. Dans les systèmes traditionnels, un fil n'a pas besoin d'être représenté directement dans l'espace 3D, car il peut être indiqué avec ses caractéristiques requises dans le dessin technique 2D envoyé pour la fabrication. Cependant, avec la vulgarisation de la fabrication additive (impression 3D), il existe désormais un réel besoin de modéliser les fils 3D, afin de les imprimer exactement comme prévu. C'est à cela que sert ce didacticiel.

De nombreuses techniques présentées ici ont été collectées à partir de différents fils de discussion :

- [Gathering thread modeling techniques](https://forum.freecad.org/viewtopic.php?f=3&t=12593)
- [Creating a thread: Unexpected results](https://forum.freecad.org/viewtopic.php?f=3&t=6506)

Voir aussi des vidéos utiles :

- [Introducing a strategy for designing a bolt without the commonly found problems.](https://forum.freecad.org/viewtopic.php?f=8&t=44259)

N'oubliez pas que les formes de filetages prennent beaucoup de mémoire et que le fait d'avoir un seul filetage dans un document peut augmenter considérablement la taille du fichier, il est donc conseillé à l'utilisateur de créer des filetages uniquement lorsque cela est absolument nécessaire.

## Méthode 1. Utilisation des utilitaires et des pièces des ateliers

Utiliser des utilitaires et des pièces que d'autres personnes ont créés est facile et permet de gagner du temps. Voir la page [ateliers externes](/External_workbenches/fr "External workbenches/fr") pour plus d'informations sur les outils externes.

En particulier, trois ressources sont recommandées et peuvent être installées à partir du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") :

- [Atelier Fasteners](/Fasteners_Workbench/fr "Fasteners Workbench/fr"), pour ajouter/fixer diverses fixations aux pièces. Les vis et les écrous ne présentent pas de filetage par défaut, mais cela peut être réglé avec une option.
- [Atelier BOLTSFC](/BOLTSFC_Workbench/fr "BOLTSFC Workbench/fr"), pour placer des fixations de la bibliothèque BOLTS.
- [Atelier ThreadProfile](/ThreadProfile_Workbench/fr "ThreadProfile Workbench/fr"), pour créer des filetages courants.

![](/images/T13_00_Threads_fasteners.png)

Diverses vis standard insérées avec l'atelier Fasteners. Une option permet de contrôler si l'objet montre le véritable filetage ou seulement un simple cylindre.

## Méthode 2. Utilisation de macros (obsolète)

Dans le passé, la [macro BOLTS](/Macro_BOLTS/fr "Macro BOLTS/fr") était utilisée pour insérer les pièces de la bibliothèque BOLTS. Ceci est désormais obsolète. Utilisez plutôt l'[Atelier BOLTSFC](/BOLTSFC_Workbench/fr "BOLTSFC Workbench/fr").

- Par le passé, la macro [Screw Maker](/Macro_screw_maker1_2/fr "Macro screw maker1 2/fr"), par ulrich1a, était utilisée pour créer des boulons, des vis et des rondelles. Elle est désormais obsolète. L'[Atelier Fasteners](/Fasteners_Workbench/fr "Fasteners Workbench/fr"), par shaise, comprend la macro complète de vissage, ainsi qu'une interface graphique pour sélectionner le bon composant.

## Méthode 3. Faux filetages non hélicoïdaux

Dans de nombreux cas, nous n'avons pas besoin de vrais filetages, nous avons juste besoin d'une indication visuelle que les filetages seront là.

Nous pouvons créer un faux filetage en utilisant un chemin non hélicoïdal, par exemple en tournant un profil en dents de scie, ou en empilant des disques avec des bords effilés. Ce faux filetage est difficile à distinguer du vrai fil hélicoïdal par une simple inspection. Cette méthode est bonne pour visualiser un objet semblable à un filetage, mais elle n'est pas utile si nous devons imprimer en 3D un fil réel.

![](/images/T13_01_Threads_comparison_fake_real.png)

A gauche : un simple boulon avec un faux filetage non hélicoïdal. A droite : un simple boulon avec un vrai filetage hélicoïdal. Lorsque l'impression 3D n'est pas nécessaire, un filetage simulé est souvent suffisant pour la visualisation.

### Profil tournant en dents de scie

1. Cliquer sur ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
2. Cliquer sur ![](/images/PartDesign_NewSketch.svg) [PartDesign Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). Sélectionnez `XZ_Plane`.
3. Dessinez une esquisse fermée avec le diamètre intérieur requis `10 mm`, le diamètre extérieur autour de `12.6 mm`, le pas `3 mm`, le nombre de dents `8` et la hauteur totale `30 mm`.
4. Sélectionnez l'esquisse, puis cliquez sur ![](/images/PartDesign_Revolution.svg) [PartDesign Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr"). Sélectionnez `Vertical sketch axis` et appuyez sur OK.

![](/images/T13_02_Threads_Sawtooth_sketch_profile.png)

Profil utilisé pour créer la révolution qui simulera un filetage.

![](/images/T13_03_Threads_Sawtooth_revolution_1.png) ![](/images/T13_04_Threads_Sawtooth_revolution_2.png)

Vue en coupe du filetage non hélicoïdal résultant produit par rotation du profil en dents de scie autour de l'axe vertical.

### Disques empilables

1. Répétez les deux premières étapes de la section précédente.
2. Dessinez une esquisse fermée avec le diamètre intérieur requis `10 mm`, le diamètre extérieur de `12.6 mm` et le pas `3 mm` mais dessinez qu'une seule dent de la dent de scie.
3. Sélectionnez l'esquisse, puis cliquez sur ![](/images/PartDesign_Revolution.svg) [PartDesign Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr"). Sélectionnez `Axe vertical de l'esquisse` puis appuyez sur OK.
4. Sélectionnez `Révolution` puis cliquez sur ![](/images/PartDesign_LinearPattern.svg) [PartDesign Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr"). Sélectionnez `Vertical sketch axis`. Pour un faux filetage avec un pas de `3 mm`, définissez **Longueur** sur `3` et **Occurrences** sur `2` puis appuyez sur OK. Cela créera deux disques, l'un au-dessus de l'autre.
5. Vous pouvez ajouter plus de disques en augmentant la valeur **Occurrences** dans la répétition linéaire et en augmentant la **Longueur** qui est la longueur totale du faux filetage.

**Longueur** et **Occurrences** sont liés. Si la longueur est trop grande mais que le nombre d'occurrences n'est pas assez élevé, vous aurez des disques déconnectés et le calcul du Corps (Body) échouera car l'objet résultant doit toujours être un [un seul solide contigu](/PartDesign_Body/fr "PartDesign Body/fr"). Par exemple, pour obtenir une hauteur totale de `30 mm`, définissez **Longueur** sur `27 mm` et **Occurrences** sur `10`.

Si vous le souhaitez, vous pouvez ajouter un ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Cylindre additif](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr") avec un diamètre égal au diamètre intérieur des disques et aussi haut que la hauteur totale du filetage. Cela réunira tous les disques en un seul solide, garantissant ainsi qu'il n'y aura pas de disques déconnectés.

![](/images/T13_05_Threads_Stacked_discs_sketch.png)

Profil utilisé pour créer un disque de révolution qui sera utilisé pour simuler un filetage.

![](/images/T13_06_Threads_Stacked_discs_1.png) ![](/images/T13_07_Threads_Stacked_discs_2.png)

A gauche: disque unique créé par révolution. A droite: plusieurs disques placés dans un motif linéaire dans la direction Z simulant un filetage hélicoïdal.

## Méthode 4. Balayage d'un profil vertical

### Atelier PartDesign

Un vrai filetage consiste à faire suivre un profil fermé le long d'une courbe hélicoïde (hélice)

1. Dans l'![](/images/Workbench_Part.svg) [Atelier Part](/Part_Workbench/fr "Part Workbench/fr"), cliquez sur ![](/images/Part_Primitives.svg) [Part Primitives](/Part_Primitives/fr "Part Primitives/fr") pour créer une ![](/images/Part_Helix.svg) [Part Hélice](/Part_Helix/fr "Part Helix/fr"). Donnez-lui les valeurs appropriées pour le **Pas** `3 mm`, la **Hauteur** `23 mm` et un **Rayon** `10 mm`.
2. Basculez vers l'![](/images/Workbench_PartDesign.svg) [Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") et cliquez sur ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
3. Cliquez sur ![](/images/PartDesign_NewSketch.svg) [PartDesign Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). Sélectionnez `XZ_Plane`.
4. Dessinez une esquisse fermée avec le profil requis pour les dents du filet, normalement une forme triangulaire. Dans ce cas, nous utiliserons une hauteur de `2.9 mm`, qui est légèrement inférieure au pas `3.0 mm` utilisé pour la trajectoire de l'hélice. Le profil ne doit pas créer d'auto-intersections lorsqu'il est déplacé le long de l'hélice, ni entre les corbures, ni au milieu. L'esquisse présentée pour l'empilement des disques ne peut donc pas être utilisée.
5. Sélectionnez l'esquisse, puis cliquez sur ![](/images/PartDesign_AdditivePipe.svg) [PartDesign Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr"). Dans **Chemin le long duquel effectuer le balayage**, cliquez sur **Objet** et choisissez l'objet hélice précédemment créé. Changez ensuite **Mode d'orientation** en `Frenet` afin que le profil balaie la trajectoire sans se tordre, puis appuyez sur OK.
6. Lorsque le dialogue demande une référence, choisissez `Créer une référence croisée`.
7. La bobine hélicoïdale est créée, mais il n'y a ni corps central ni arbre.
8. Cliquez sur ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Cylindre additif](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr") avec le **Rayon** approprié. `10 mm` et **Hauteur** `29.9 mm` pour toucher le reste du fil hélicoïdal et fusionner automatiquement avec lui.
9. D'autres opérations booléennes sont nécessaires pour façonner les extrémités abruptes de la bobine. Par exemple, vous pouvez utiliser des fonctions additives pour fournir une tête à la vis, et une pointe.

![](/images/T13_08_Threads_Helical_thread_profile.png) ![](/images/T13_09_Threads_Helical_thread_path.png)

A gauche : profil pour un filetage hélicoïdal. À droite : trajectoire hélicoïdale qui sera utilisée pour créer un balayage.

![](/images/T13_10_Threads_Helical_thread_coil.png) ![](/images/T13_11_Threads_Helical_thread_coil_sliced.png)

A gauche : bobine hélicoïdale résultant de l'opération de balayage du profil fermé le long de la trajectoire hélicoïdale. A droite : vue en coupe de la bobine produite par le balayage.

![](/images/T13_12_Threads_Helical_thread_cylinder.png) ![](/images/T13_13_Threads_Helical_thread_finished.png)

À gauche : bobine hélicoïdale fusionnée à un cylindre central pour former le corps de la vis. À droite : d'autres éléments, une tête et une pointe, ajoutés pour améliorer la forme de la vis.

### Atelier Part

Ce processus peut également être effectué à l'aide des outils de l'[Atelier Part](/Part_Workbench/fr "Part Workbench/fr").

1. Dans l'![](/images/Workbench_Part.svg) [Atelier Part](/Part_Workbench/fr "Part Workbench/fr"), cliquez sur ![](/images/Part_Primitives.svg) [Part Primitives](/Part_Primitives/fr "Part Primitives/fr") pour créer une ![](/images/Part_Helix.svg) [Part Hélice](/Part_Helix/fr "Part Helix/fr"). Donnez-lui les valeurs appropriées pour le **Pas** `3 mm`, la **Hauteur** `23 mm` et le **Rayon** `10 mm`.
2. Dans ce cas, vous n'avez pas besoin d'un ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Passez à l'![](/images/Workbench_Sketcher.svg) [Atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), puis cliquez sur ![](/images/Sketcher_NewSketch.svg) [Sketcher Nouvelle esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") et choisissez le plan global XZ.
3. Ensuite, retournez dans l'![](/images/Workbench_Part.svg) [Atelier Part](/Part_Workbench/fr "Part Workbench/fr") et utilisez ![](/images/Part_Sweep.svg) [Part Balayage](/Part_Sweep/fr "Part Sweep/fr").
4. Sélectionnez l'esquisse appropriée dans **Profil disponible** et cliquez sur la flèche pour la faire passer dans **Profils sélectionnés**.
5. Cliquez sur Chemin de balayage et choisissez toutes les arêtes de l'hélice existante dans la [vue_3D](/3D_view/fr "3D view/fr"). Cliquez sur Fait.
6. Assurez-vous de cocher ![](/images/CheckBoxTrue.svg) Créer un solide et ![](/images/CheckBoxTrue.svg) Frenet. L'obtention d'un solide est la clé pour pouvoir effectuer des [Part Opérations booléennes](/Part_Boolean/fr "Part Boolean/fr") avec la bobine résultante, sinon seule une surface sera produite.
7. Cliquez sur OK pour quitter le dialogue et créer la bobine.

Vous pouvez maintenant ajouter d'autres primitives comme des ![](/images/Part_Cylinder.svg) [Part Cylindres](/Part_Cylinder/fr "Part Cylinder/fr") ou d'autres formes, afin d'exécuter des ![](/images/Part_Fuse.svg) [Part Unions](/Part_Fuse/fr "Part Fuse/fr") et des ![](/images/Part_Cut.svg) [Part Soustractions](/Part_Cut/fr "Part Cut/fr") pour terminer la construction de la vis.

![](/images/T13_14_Threads_components.png)

Création d'un filetage par balayage d'un profil vertical, (1) le [profil de l'esquisse](/Sketch/fr "Sketch/fr"), (2) la trajectoire de balayage [hélicoïdale](/Part_Helix/fr "Part Helix/fr"), et (3) le résultat du [balayage](/Part_Sweep/fr "Part Sweep/fr").

### Les clés du succès

- _Règle 1._ Lorsque le profil balaie l'hélice, la bobine solide résultante ne doit pas se toucher ou s'auto-intersecter, car il s'agirait d'un solide invalide. Ceci est valable pour le profil se déplaçant le long de l'hélice, ainsi que pour les intersections au centre de l'hélice. Les tentatives d'effectuer des opérations booléennes avec elle (fusionner ou couper) ont de grandes chances d'échouer. Vérifiez la qualité de l'hélice avec ![](/images/Part_CheckGeometry.svg) [Part Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") ; si des auto-intersections sont signalées, vous devez augmenter le pas de l'hélice.

![](/images/T13_15_Threads_self_intersection.png) ![](/images/T13_16_Threads_no_self_intersections_OK.png)

A gauche : balayage invalide généré par l'utilisation d'un très petit pas de l'hélice par rapport à la hauteur du profil triangulaire. A droite : pas suffisamment grand qui ne provoque pas d'auto-intersections.

- _Règle 2._ Lorsqu'un cylindre est ajouté à une bobine pour former l'arbre principal d'une vis, le cylindre ne doit pas être tangent au profil de la bobine. Autrement dit, le cylindre ne doit pas avoir le même rayon que le rayon intérieur du filet, car cela risque fort de faire échouer une opération de fusion. En général, il faut éviter les géométries coïncidant avec des éléments du balayage, comme les faces tangentes, ou les arêtes tangentes à des faces auxquelles elles ne sont pas reliées. Afin de produire une bonne union booléenne, la bobine balayée et le cylindre doivent se croiser. Vérifiez la qualité de la fusion avec ![](/images/Part_CheckGeometry.svg) [Part Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") ; si des faces coplanaires sont signalées, augmentez légèrement le rayon du cylindre.
- Si la bobine et le cylindre sont tangents, même si la première fusion réussit, elle peut échouer dans les opérations booléennes suivantes avec un troisième solide.
- C'est une limitation du noyau OpenCASCADE Technology (OCCT) ; en général, il ne gère pas bien les opérations entre surfaces coplanaires.

![](/images/T13_17_Threads_tangent_faces.png) ![](/images/T13_18_Threads_no_tangent_faces_OK.png)

À gauche : le cylindre solide est tangent au rayon intérieur du fil ; cela peut donner lieu à une union booléenne invalide. À droite : le cylindre a un rayon légèrement plus grand, de sorte que les deux solides se croisent ; il en résultera une fusion valide.

- _Règle 3._ Le cylindre intérieur a une ligne de couture. Vous devez éviter de placer le début de l'hélice le long de cette ligne de couture. Tournez l'hélice ou le cylindre de quelques degrés.

- _Astuce 1._ Le rayon de la trajectoire hélicoïdale n'a pas d'importance, sauf si l'hélice est effilée. Tout ce qui compte, c'est le pas et la hauteur de l'hélice. Cela signifie que vous pouvez utiliser un seul ![](/images/Part_Helix.svg) [Part Hélice](/Part_Helix/fr "Part Helix/fr") pour générer plusieurs filetages à pas égal. Ce qui détermine la position de la bobine résultante est la position du profil de l'[esquisse](/Sketch/fr "Sketch/fr").

- _Astuce 2._ Gardez le filetage court, c'est-à-dire avec un faible nombre de tours. Les filetages longs ont tendance à échouer avec les opérations booléennes. Si vous devez ajouter de nombreux tours, pensez à créer d'abord un fil court, puis à utiliser ![](/images/Draft_OrthoArray.svg) [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") pour dupliquer plusieurs fois le même motif.

- _Astuce 3._ Pour la visualisation et l'impression 3D, il peut être acceptable de laisser le cylindre et le filetage non fusionnés, c'est-à-dire avec des intersections entre les deux solides. En réduisant le nombre d'opérations booléennes, on réduit la consommation de mémoire et la taille des fichiers.

### Avantages et inconvénients

- ![](/images/Edit_OK.svg) Facile à comprendre.
- ![](/images/Edit_OK.svg) Manière très naturelle de définir un profil de filetage.
- ![](/images/Edit_OK.svg) Aucun problème avec le maillage de l'objet résultant, contrairement à la méthode 5.

- ![](/images/Edit_Cancel.svg) En raison de l'invalidité des balayages auto-entrecroisés, il est presque impossible de générer un filetage sans espace entre chaque dent, c'est-à-dire sans face cylindrique droite sur les côtés intérieurs du filetage.
- ![](/images/Edit_Cancel.svg) Les opérations booléennes sont nécessaires pour obtenir un unique solide contigu. Les opérations booléennes prennent un temps relativement long à calculer et échouent souvent.
- ![](/images/Edit_Cancel.svg) Filetages avec un nombre élevé de tours sont problématiques.

## Méthode 5. Balayage d'un profil horizontal

### Généralités

L'idée est de balayer un profil horizontal le long d'une hélice. Le problème principal est de déterminer le profil à utiliser pour obtenir un tel filetage.

![](/images/Thread-by-horz-profile.png)

Si on utilise un cercle en guise de profil horizontal (le cercle doit être décentré par rapport à son origine, ce décentrage définissant la profondeur du filetage), le profil du filetage sera sinusoïdal.

Pour obtenir un profil standard en dent de scie, une paire de spirale d’Archimède doivent être fusionnées. La figure résultante est une forme cardioïde, qui est difficilement différentiable d'un cercle quand la profondeur du filet est faible comparée à son diamètre (c'est pourquoi un filetage "épais" est présenté sur la figure ci dessus).

### Génération du profil

Déterminer le profil horizontal pour obtenir un certain profil vertical n'est pas facile. Pour les cas simples comme les triangulaires ou les trapézoïdaux, on peut le construire manuellement. On peut aussi le construire en créant un filetage court avec la méthode 4, et en obtenant une tranche de celui-ci en faisant une [Part Intersection](/Part_Common/fr "Part Common/fr") entre une face plane horizontale et le filetage.

#### Profil pour un filetage triangulaire

1. Créer une spirale (d’Archimède) dans le plan XY.
   1. fixer le nombre de tours à 0.5.
   2. fixer le rayon du rayon interne du filetage, le rayon externe sera ce dernier plus la profondeur de coupe.
   3. fixer la croissance pour doubler la profondeur de coupe du filetage.
2. [mettre en miroir](/Part_Mirror/fr "Part Mirror/fr") la spirale par rapport au plan XY.
3. [unir](/Part_Fuse/fr "Part Fuse/fr") la spirale et son objet en miroir pour obtenir une polyligne fermée en forme de cœur.

#### Profil pour une section quelconque

![](/images/Thread-by-horz-profile-profileMake.png)

1. Faites un profil de coupe vertical. Assurez-vous que la hauteur de l'esquisse correspond au pas du filetage dont vous avez besoin.
2. Faites une hélice1 avec une hauteur identique au pas et un pas identique au pas du filetage, et un rayon d'hélice de 0.42\*diamètre nominal du filetage.
3. Balayez le profil de coupe le long de l'hélice1. Définissez ![](/images/CheckBoxTrue.svg) Create solid et ![](/images/CheckBoxTrue.svg) Frenet.
4. Faire un cercle de rayon nominal du filetage dans le plan XY.
5. Créez une face à partir du cercle. Ceci peut être fait avec ![](/images/Part_Builder.svg) [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr") ou ![](/images/Draft_Upgrade.svg) [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr"), puis réglez Données**MakeFace** sur `true`.
6. Découpez la face avec le profil de balayage.
7. Faites un ![](/images/Draft_Clone.svg) [Draft Clone](/Draft_Clone/fr "Draft Clone/fr") à partir de la découpe.
8. Utilisez ![](/images/Draft_Downgrade.svg) [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") sur le clone afin d'obtenir un filetage. Ce filetage est le profil horizontal nécessaire pour cette méthode.
9. Faites une hélice dont le rayon est le rayon nominal du filetage et le pas du filetage et la hauteur du filetage nécessaire.
10. Balayez le filetage le long de l'hélice. Définissez ![](/images/CheckBoxTrue.svg) Create solid et ![](/images/CheckBoxTrue.svg) Frenet.
11. Vous avez terminé.

Le guide étape par étape est tiré de ce [message du forum par Ulrich1a](http://forum.freecad.org/viewtopic.php?f=3&t=6506#p52558) ("Creating a thread : Unexpected results"), légèrement modifié.

Les étapes sont également montrées en action sur [cette vidéo par Gaurav Prabhudesai](http://www.youtube.com/watch?v=fxKxSOGbDYs) ("FreeCAD : How to make threads").

### Avantages et inconvénients

- ![](/images/Edit_OK.svg) une forme solide prête à l'emploi est créée par le balayage directement sur la tige.
- ![](/images/Edit_OK.svg) moins d'opérations booléennes, voire aucune, sont nécessaires, la vitesse de génération est donc très élevée par rapport à la méthode 4.
- ![](/images/Edit_OK.svg) les extrémités des filetages sont tout de suite bien coupées.
- ![](/images/Edit_OK.svg) les longs filetages ne sont pas un problème, sauf si une opération booléenne est nécessaire. Sinon, ce ne sera pas beaucoup mieux que la méthode 4.
- ![](/images/Edit_OK.svg) les filetages sans espace ne sont pas un problème.

- ![](/images/Edit_Cancel.svg) définir le profil du filetage est compliqué.
- ![](/images/Edit_Cancel.svg) l'utilisation du mailleur standard avec un filetage créé de cette manière génère des maillages moches, ce qui peut entraîner des problèmes. D'autres mailleurs sont meilleurs, par exemple, Mefisto semble donner les meilleurs résultats.
- ![](/images/Edit_Cancel.svg) grande empreinte mémoire selon [Techniques de modélisation des filets de collecte](http://forum.freecad.org/viewtopic.php?f=3&t=12593&start=10#p101197).

### Méthode 6. Lissage entre les faces extrudées hélicoïdales

### Généralités

Les splines hélicoïdales extrudent les faces coaxiales pouvant être lobées, contrairement à l'hélice paramétrique de FreeCAD. Deux splines hélicoïdales sont nécessaires pour définir un taraudage. Ces deux éléments peuvent être mis à l'échelle à partir d'une spline de bibliothèque, puis localisés et extrudés de manière appropriée pour obtenir le bon formulaire.

Les hélices paramétriques de FreeCAD ne sont pas vraiment hélicoïdales, mais les b-splines hélicoïdales ne sont pas difficiles à tracer. Une méthode manuelle consiste à aligner des dodécagones (polygones à 12 côtés) avec des intervalles de rayon de 5 mm/diamètre de 10 mm à des intervalles de 1/12 mm (0,08333.mm) et à tracer des splines d'un sommet à l'autre dans l'ordre croissant et rotatif. disons 10 tours, de sorte que cette spline puisse être réutilisée en tant que fichier de bibliothèque pour l'importation et la réutilisation. Il est pratique d’utiliser un pas de 10 mm de diamètre/1 mm pour faciliter la mise à l’échelle. Si vous le faites manuellement, dessiner un Dwire puis le convertir en b-spline est plus facile que de dessiner une spline. Les courbures ne sont pas calculées pendant le tracé, elles suivent donc le curseur et se cassent plus docilement.

Une fois que les splines sont redimensionnées à la bonne taille et situées de manière à ce que le loft ait le bon angle inclus entre les flancs du filetage, elles sont extrudées le long de leur axe, ce qui correspond à la longueur d'un pas pour la spline interne, le pas externe/8.

![](/images/Splineextrudeloft.png)

Les filets ISO et autres ont été allégés, c'est-à-dire que les bords intérieurs et extérieurs sont plutôt plats que nets, ce qui convient parfaitement aux utilisateurs de FreeCAD, car nous pouvons appliquer un lissage à la face hélicoïdale à la taille nominale de la fixation, alors qu'une face interne ne peut pas être loft une spline de bord externe car une face est un profil fermé, une spline est ouverte. La norme ISO indique que la taille nominale des filetages externes a un pas de largeur de face/8. L'image montre comment la géométrie est arrangée et les faces hélicoïdales qui en résultent. Ensuite, lissez entre les faces, puis un cylindre qui donne la face hélicoïdale interne, que ISO met à la hauteur/4 de la largeur, est ajouté aux filets.

![761PX](/images/Threadform.PNG)

Cette méthode produit des solides fiables qui "booléen" correctement. Bien qu'il ne produise pas de filetage de vis "paramétrique" dans les tailles standard, c'est-à-dire qu'il permet d'accéder facilement à la forme par taille de fixation, il constitue un moyen simple de produire une bibliothèque précise à réutiliser, ainsi que des modèles de formes spécialisées telles que ACME ou des vis Archimédien. , sont également simples comme des one-offs.

Retrieved from "<http://wiki.freecad.org/index.php?title=Thread_for_Screw_Tutorial/fr&oldid=1445187>"
