---
title: PartDesign Tutoriel d'introduction V0.19
---
|  |
| --- |
| Tutoriel |
| Thème |
| Modélisation |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 1 heure |
| Auteurs |
| Carlo Dormeletti ([onekk](/User:Onekk "User:Onekk")) Ed Williams ([edwilliams16](/index.php?title=User:Edwilliams16&action=edit&redlink=1 "User:Edwilliams16 (page does not exist)")) Roy 043 ([Roy 043](/index.php?title=User:Roy_043&action=edit&redlink=1 "User:Roy 043 (page does not exist)")) |
| Version de FreeCAD |
| 0.19 ou supérieure |
| Fichiers exemples |
| *None* |
| Voir aussi |
| [PartDesign Tutoriel d'introduction](/Basic_Part_Design_Tutorial/fr "Basic Part Design Tutorial/fr") |
|  |

## Introduction

*Il s'agit d'une version mise à jour du [Tutoriel d'introduction PartDesign](/Basic_Part_Design_Tutorial/fr "Basic Part Design Tutorial/fr")*.

![](/images/Pd_tut_final_solid.png)

Ce tutoriel présente aux utilisateurs l'[atelier PartDesign](/PartDesign_Workbench "PartDesign Workbench"). Dans ce tutoriel, nous allons créer un modèle solide 3D de la pièce représentée dans l'image ci-dessus. Dans le [dessin](/TechDraw_Workbench/fr "TechDraw Workbench/fr") à la fin de ce paragraphe, toutes les dimensions nécessaires pour accomplir la tâche sont données.

Nous commencerons par créer une forme solide de base à partir d'une esquisse de base, puis nous développerons cette forme en ajoutant ce que l'on appelle des caractéristiques. Ces caractéristiques ajouteront ou retireront de la matière au solide en utilisant des esquisses supplémentaires et des opérations de caractéristiques correspondantes.

Nous suivrons certaines des techniques décrites dans [Conseils pour la création de modèles robustes](/Feature_editing/fr#Conseils_pour_la_cr.C3.A9ation_de_mod.C3.A8les_robustes "Feature editing/fr") :

* Nous utiliserons une **esquisse maîtresse**.
* Les **contraintes nommées** seront utilisées pour contenir des dimensions qui pourront être référencées plus tard dans la construction du modèle.  
  Par exemple, pour changer la largeur du modèle de 53 mm, comme dans le dessin technique, à 55 mm, il suffit de modifier la valeur **Longueur** de la **contrainte nommée** appropriée dans l'**esquisse maîtresse** et le modèle entier sera modifié en conséquence. C'est la conception *paramétrique* en action.
* Les **géométries externes** sont potentiellement sujettes au [Problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr"). Nous ne les utiliserons qu'en cas de stricte nécessité et tenterons de faire référence aux éléments les plus **stables** disponibles. La référence aux arêtes et aux sommets des esquisses est normalement plus stable que la référence aux arêtes et aux sommets de la géométrie solide générée.

Ce tutoriel n'utilisera pas toutes les fonctionnalités et tous les outils disponibles dans l'atelier PartDesign, mais fournira une base sur laquelle les utilisateurs pourront développer leurs connaissances et leurs compétences.

N'hésitez pas à signaler toute erreur ou tout problème dans ce fil de discussion du forum : [New Part Design Tutorial for FC 019 and 020](https://forum.freecad.org/viewtopic.php?f=36&t=73235).

![](/images/Tutorial_Drawing_Sheet.png)

## Remarques préliminaires

* Ce tutoriel fournit des instructions détaillées lorsqu'il décrit une opération pour la première fois. Les opérations suivantes auront une description plus concise. En cas de doute, recherchez l'opération qui contient la description la plus détaillée. Par exemple, lors de la création d'une esquisse pour la première fois, le processus de choix du plan d'esquisse sera expliqué en détail, ce qui ne sera pas le cas pour les esquisses suivantes.
* Tous les outils mentionnés sont accessibles à partir des barres d'outils et du menu.
* Ce tutoriel suppose que la case ![](/images/CheckBoxTrue.svg) Contraintes automatiques de la fenêtre **Général** de Sketcher est cochée. Cela garantit que certaines contraintes sont appliquées automatiquement. Sinon, vous devrez les appliquer vous-même.
* Si le solveur de Sketcher détecte une contrainte redondante, il donne à l'esquisse une couleur orange. Avant d'ajouter d'autres contraintes, les contraintes redondantes doivent être supprimées. Les contraintes redondantes sont affichées dans le panneau des tâches, cliquez sur la référence bleue et appuyez sur Effacer.
* La couleur mentionnée ci-dessus est une couleur par défaut, elle peut être modifiée dans les préférences. Il en va de même pour les autres couleurs mentionnées dans ce tutoriel.
* Vous quittez un outil de dessin de Sketcher en appuyant sur la touche Echap ou en cliquant avec le bouton droit de la souris sur une zone vide de la [vue 3D](/3D_view/fr "3D view/fr"). Le curseur de la souris devient le curseur fléché standard. Si vous appuyez une nouvelle fois sur Echap, vous quitterez le mode d'édition d'esquisses. Pour revenir à l'éditeur, cliquez sur l'onglet Modèle, puis double-cliquez sur l'élément Sketch dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), ou cliquez dessus avec le bouton droit de la souris et sélectionnez **Éditer l'esquisse** dans le menu contextuel. Pour éviter de quitter le mode d'édition en appuyant trop souvent sur Echap, modifiez la préférence **Echap permet de quitter l'esquisse en édition**, voir [Sketcher Préférences](/Sketcher_Preferences/fr#G.C3.A9n.C3.A9ral "Sketcher Preferences/fr").
* Il est possible que certains éléments d'un panneau de tâches, par exemple le bouton OK, ne soient pas visibles si le panneau n'est pas assez large. Vous pouvez le rendre plus large en faisant glisser sa bordure droite. Placez le pointeur de votre souris sur la bordure, lorsque le pointeur se transforme en flèche à double sens, maintenez le bouton gauche de la souris enfoncé et faites glisser.
* Un bouton >> dans une barre d'outils indique que la barre d'outils est tronquée. Vous pouvez soit utiliser le bouton mentionné pour l'agrandir, soit déplacer la barre d'outils vers une position où il y a plus de place. Pour déplacer une barre d'outils, placez le pointeur de votre souris sur la poignée précédant la première icône de la barre d'outils, maintenez le bouton gauche de la souris enfoncé et faites glisser.
* Pendant le cycle de développement v0.21, une nouvelle icône a été introduite pour l'outil [Sketcher Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") : ![](/images/Sketcher_CreatePolyline.svg). L'ancienne icône ressemble à ceci : [![](/images/Sketcher_CreatePolyline_rel_0.20.svg)](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr "). Dans ce tutoriel, nous utiliserons la nouvelle icône.
* Voir [Concepts de l'atelier PartDesign](/Part_and_PartDesign/fr#Concepts_de_l.27atelier_PartDesign "Part and PartDesign/fr") pour un aperçu du contexte conceptuel.
* Voir l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") pour une explication plus détaillée de la terminologie utilisée ici.

## Démarrer

Assurez-vous d'abord que vous êtes dans l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Si nécessaire, sélectionnez-le dans la [liste déroulante des ateliers](/Std_Workbench/fr "Std Workbench/fr"). Une fois là, vous devrez créer un nouveau document si vous ne l'avez pas déjà fait. C'est une bonne habitude de sauvegarder souvent votre travail, alors enregistrez d'abord le nouveau document, en lui donnant le nom de votre choix.

Tout travail dans PartDesign commence par un [corps](/Glossary/fr#Body "Glossary/fr"). Cliquez sur ![](/images/PartDesign_Body.svg) [Créer un nouveau corps](/PartDesign_Body/fr "PartDesign Body/fr") pour en créer et en activer un. Notez qu'il est également possible de sauter cette étape : lors de la création d'une esquisse à l'aide de la fonction PartDesign ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"), si aucun corps existant n'est trouvé, un nouveau corps est automatiquement créé et activé.

## Esquisse maîtresse

L'esquisse maîtresse contient la forme de base rectangulaire du modèle et deux **contraintes nommées** qui fourniront des dimensions correctes aux autres parties du modèle : la **longueur** qui contiendra 53 mm (le résultat de l'ajout de la dimension de 39 mm aux deux côtés de 7 mm), et la **largeur** qui contiendra 26 mm. Pour pouvoir profiter de la symétrie du modèle dans les étapes suivantes, le bord supérieur du rectangle sera centré autour de l'origine avec une contrainte symétrique.

**Sketch**

![](/images/Pd_start_00.png)

Fig: MS1

![](/images/Pd_tut_sketch_start.png)

Fig: MS2

![](/images/Pd_tut_sel_points_h.png)

Fig: MS3

![](/images/Pd_tut_rect_h_dim_end.png)

Fig: MS4

![](/images/Pd_tut_rect04.png)

Fig: MS5

![](/images/Pd_tut_rect_v3.png)

Fig: MS6

**Etape A : créer l'esquisse**

1. Cliquez sur ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). Ceci va créer l'esquisse dans le corps qui vient d'être créé. Elle sera nommée **Sketch**.
2. Un panneau de tâches comme **Fig : MS1** s'ouvre et vous devez choisir le plan auquel l'esquisse sera attachée.
   1. Sélectionnez **XY\_Plane** dans la liste ou sélectionnez ce plan dans la [vue 3D](/3D_view/fr "3D view/fr").
   2. Cliquez sur OK.
3. FreeCAD passe automatiquement à l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
4. L'esquisse est ouverte en mode édition : vous verrez quelque chose comme **Fig : MS2**. Les axes X (la ligne rouge) et Y (la ligne verte) de l'esquisse sont indiqués, ainsi que son origine (le point rouge).

**Etape B : ajouter la géométrie**

1. Cliquez sur ![](/images/Sketcher_CreateRectangle.svg) [Créer un rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr").
2. Lorsque l'outil est actif, le curseur a cette apparence :  
   ![](/images/Pd_tut_rec_cursor.png)
3. Choisissez deux points pour créer un rectangle grossièrement centré sur l'axe Y, comme sur la figure MS3. Note :
   * Ne placez pas de points sur un axe car le solveur appliquera automatiquement des contraintes qui créeront des problèmes plus tard.
   * Les dimensions du rectangle sont sans importance à ce stade. Elles seront attribuées à l'aide de contraintes dans une étape ultérieure.
   * Une fois terminé, appuyez sur Echap ou cliquez avec le bouton droit de la souris pour quitter l'outil.

**Étape C : attribuer une contrainte de longueur horizontale**

1. Sélectionnez la ligne définie par **P2** et **P3** dans **Fig : MS3**. Les étiquettes telles que P1, P2 etc. n'apparaîtront pas dans les esquisses, elles ont été ajoutées à titre de référence dans les images de ce tutoriel.
2. Cliquez sur ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") :
   1. Une dimension apparaît entre les extrémités de la ligne sélectionnée. Cette dimension est la distance en cours.
   2. De plus, un dialogue apparaîtra :  
      ![](/images/Pd_tut_rect03.png)
   3. Assigner **Longueur = 53 mm**.
   4. Pour pouvoir faire référence à cette dimension ultérieurement, un nom est nécessaire. Vous êtes libre d'utiliser n'importe quel nom, il suffit qu'il soit unique dans l'esquisse. Attribuez **Nom = longueur**.
   5. Cliquez sur OK.
3. Le résultat devrait ressembler à **Fig : MS4**.

**Étape D : attribuer une contrainte symétrique**

1. Sélectionnez les points **P2** et **P3** du rectangle.
2. Sélectionnez l'**origine** de l'esquisse. Remarque : l'ordre de sélection des points est important.
3. Cliquez sur ![](/images/Sketcher_ConstrainSymmetric.svg) [Contrainte symétrique](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr").
4. Vous obtiendrez quelque chose qui ressemble à la **Fig : MS5**.

**Étape E : affecter une contrainte de longueur verticale**

:   Attribuez une contrainte de distance verticale en suivant la même procédure que celle utilisée pour la contrainte de distance horizontale précédente :

1. Sélectionnez la ligne définie par **P3** et **P4** dans **Fig : MS3**.
2. Cliquez sur ![](/images/Sketcher_ConstrainDistanceY.svg) [Contrainte de distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") :
   1. Assignez **Longueur = 26 mm**.
   2. Assignez **Nom = largeur**.
   3. Cliquez sur OK.
   4. Le résultat devrait ressembler à **Fig : MS6**.
3. L'esquisse est maintenant entièrement contrainte :
   * Les lignes de l'esquisse sont vert vif.
   * La section **Messages du solveur** du panneau des tâches affiche **Entièrement contrainte**.
   * Si vous sélectionnez une ligne ou un sommet de l'esquisse et que vous essayez de la faire glisser, elle ne bougera pas.

**Etape F : fermer l'esquisse**

:   Cliquez sur Fermer en haut du [Panneau des tâches](/Task_panel/fr "Task panel/fr") pour quitter le mode d'édition des esquisses.

## Profil principal

Le profil principal est créé en [protrusant](/PartDesign_Pad/fr "PartDesign Pad/fr") une nouvelle esquisse.

**Sketch001**

![](/images/OffsetSketch001.png)

Fig. MP1

![](/images/Pd_tut_side_fc.png)

Fig: MP2

**Etape A : créer l'esquisse**

:   Cliquez sur ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") et créez une esquisse attachée au **YZ\_Plane**. FreeCAD lui attribuera le nom **Sketch001**.

**Etape B : ajouter la géométrie**

1. Cliquez sur ![](/images/Sketcher_CreatePolyline.svg) [Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") et créez une forme comme dans **Fig : MP1**.
2. Pour le dernier point du segment final, assurez-vous de choisir le premier point de la forme. Le point changera de couleur et vous verrez le symbole d'une ![](/images/Sketcher_ConstrainCoincident.svg) [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") apparaitre près du curseur. Les contraintes de coïncidence doivent être explicites. Il ne suffit pas que deux points coïncident visuellement.
3. Appuyez sur Echap ou cliquez avec le bouton droit de la souris pour quitter l'outil.

**Étape C : assigner les contraintes**

1. Les trois contraintes verticales et horizontales que vous voyez dans l'image devraient avoir été ajoutées automatiquement si vous avez dessiné ces lignes de cette façon. Si vous ne l'avez pas fait, vous devez les ajouter.
2. Sélectionnez le point **P2** et l'axe **Y** de l'esquisse et appliquez une ![](/images/Sketcher_ConstrainPointOnObject.svg) [Contrainte de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr"). Comme l'esquisse est attachée au plan YZ, l'axe Y de l'esquisse ne correspond pas à l'axe Y du corps.
3. Sélectionnez l'**origine** et le point **P1** et appliquez une ![](/images/Sketcher_ConstrainHorizontal.svg) [Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr"). Pourquoi pas une ![](/images/Sketcher_ConstrainCoincident.svg) [Contrainte coïncidente](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr")? vous pourriez vous demander. Essayez-la (et annulez-la). L'esquisse deviendra orange et un message du solveur intitulé *Contraintes redondantes* apparaîtra. Comme la ligne P1 à P2 a déjà été contrainte à être verticale, le seul degré de liberté restant est la coordonnée Y de P1. La contrainte de coïncidence met les coordonnées X et Y à zéro, mais la coordonnée X est déjà déterminée. La contrainte horizontale, en revanche, ne fixe que la coordonnée Y à zéro, ce qui est suffisant.
4. Sélectionnez la ligne définie par les points **P2** et **P3**, appliquez une ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), et assignez **Longueur = 5 mm**.
5. Sélectionnez la ligne définie par les points **P1** et **P2**, appliquez une ![](/images/Sketcher_ConstrainDistanceY.svg) [Contrainte de distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr"), et assignez **Longueur = 26 mm**.
6. Sélectionnez la ligne définie par les points **P1** et **P4** et appliquez une ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") :
   1. Pour cette valeur, vous utiliserez une **contrainte nommée** en utilisant une [expression](/Expressions/fr "Expressions/fr"). Pour ce faire, vous devez cliquer sur le petit bouton dans le champ de saisie **Longueur** : ![](/images/Bound-expression.svg).
   2. Une nouvelle boîte de dialogue nommée **Éditeur de formules** apparaît, contenant un champ de saisie et une étiquette **Resultat :**, comme dans l'image ci-dessous :  
      ![](/images/Pd_tut_expressions.png)  
      Lorsque vous commencez à taper dans le champ de saisie, des autocomplétions vous sont présentées.
   3. Sélectionnez l'étiquette de l'esquisse. Dans notre cas, nous voulons **`<<Sketch>>.`**. Notez le point après l'étiquette.
   4. Pour sélectionner la **contrainte nommée** "largeur", vous devez d'abord entrer **`Constraints.`** avec la période. Ici l'autocomplétion fonctionne.
   5. Pour ajouter "width", l'autocomplétion n'est pas encore disponible, il faut donc compléter la cellule pour lire **`<<Sketch>>.Constraints.width`**. Si tout s'est bien passé, le message d'erreur rouge après **Resultat :** a été remplacé par la valeur correcte comme dans l'image ci-dessous :  
      ![](/images/Pd_tut_expression_end.png)
   6. Cliquez sur OK pour fermer la boîte de dialogue **Editeur de formule**.
   7. Cliquez sur OK pour fermer la boîte de dialogue **Insérer une longueur**.
7. Vous devriez obtenir une esquisse entièrement contrainte semblable à la **Fig : MP2**.
8. Notez les différentes couleurs utilisées pour les contraintes de distance attribuées à l'aide d'expressions, et celles attribuées en spécifiant une longueur.

**Etape D : fermer l'esquisse**

:   Cliquez sur Fermer en haut du [Panneau des tâches](/Task_panel/fr "Task panel/fr") pour quitter le mode d'édition des esquisses.

**Pad**

![](/images/Pd_tut_pad1.png)

Fig: MP3

1. Assurez-vous que **Sketch001** est sélectionné.
2. Cliquez sur ![](/images/PartDesign_Pad.svg) [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") :
   1. Le panneau de tâches **Paramètres de protrusion** s'ouvre.
   2. Pour **Type**, sélectionnez Dimension ![](/images/ComboBox.svg).
   3. Pour **Longueur**, utilisez à nouveau une expression, mais cette fois-ci entrez **`<<Sketch>>.Constraints.length`**. Cette expression devrait donner 53 mm.
   4. Sélectionnez ![](/images/CheckBoxTrue.svg) Symétrique au plan.
   5. Cliquez sur OK pour fermer le panneau des tâches.
3. Vous devriez maintenant avoir un solide comme celui illustré dans la **Fig : MP3**.

## Découpage des coins

Pour les découpes des coins, deux fonctions sont ajoutées au modèle. Une [cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"), basée sur une autre esquisse, est utilisée pour créer la première découpe, et cette fonction est ensuite [symétrisée](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr").

**Sketch002**

![](/images/Pd_tut_sk2_start.png)

Fig: CC1

![](/images/Pd_tut_sk2_eg01.png)

Fig: CC2

![](/images/Pd_tut_sk2_end.png)

Fig: CC3

**Etape A : cacher le solide**

:   Cacher le solide qui vient d'être créé : sélectionnez **Pad** et cliquez sur la Barre d'espace.

**Etape B : créer l'esquisse**

:   Cliquez sur ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") et créez une esquisse attachée au **XZ\_Plane**. FreeCAD lui attribuera le nom **Sketch002**.

**Etape C : ajouter la géométrie**

1. Sélectionnez ![](/images/Sketcher_CreateRectangle.svg) [Créer un rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr"), et créez un rectangle. Ne le créez pas trop près d'un axe, afin d'éviter toute contrainte automatique qui rendrait difficile de le déplacer dans la bonne position par la suite.
2. Quittez l'outil.

**Étape D : attribuer des contraintes dimensionnelles**

1. Sélectionnez une des lignes horizontales, appliquez une ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), et attribuez une valeur de **11 mm**.
2. Sélectionnez une des lignes verticales, appliquez une ![](/images/Sketcher_ConstrainDistanceY.svg) [Contrainte de distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr"), et attribuez une valeur de **5 mm**.
3. Vous devriez obtenir quelque chose de similaire à la **Fig : CC1**.

**Etape E : fermer l'esquisse**

:   Cliquez sur Fermer. **Sketch002** n'est pas entièrement contraint à ce stade.

**Étape F : rendre visibles les précédentes esquisses**

:   Pour utiliser une [géométrie externe](/Sketcher_External/fr "Sketcher External/fr"), les esquisses dont nous voulons référencer les éléments doivent être visibles. Assurez-vous que **Sketch** et **Sketch001** sont tous deux visibles. Utilisez la Barre d'espace pour modifier la visibilité si nécessaire. Développez le nœud **Pad** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour accéder à **Sketch001**.

**Étape G : ajout de la géométrie externe et contrainte complète de l'esquisse**

1. Double-cliquez sur **Sketch002** pour entrer en mode d'édition.
2. Faites pivoter la vue de manière à voir clairement les points comme indiqué sur la **Fig : CC2**. Cela facilitera les étapes suivantes. Notez que la position initiale du rectangle peut être différente dans votre esquisse.
3. Cliquez sur ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr").
4. Lorsque l'outil est actif, le curseur a cette apparence :  
   ![](/images/Pd_tut_eg_cursor.png)
5. Sélectionnez le point **P1** dans **Fig : CC2**. Le point sélectionné est ajouté à l'esquisse en tant que géométrie externe. Dans la section **Éléments** du panneau des tâches, il apparaît sous la forme d'une icône X violette ou, [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr"), d'une icône de point violette.
6. Avec l'outil toujours actif, sélectionnez le point **P2** dans la **Fig : CC2**. Cette géométrie externe devrait également apparaître dans la section **Elements**.
7. Quittez l'outil.
8. Sélectionnez le point **P1** et le point **P3** et appliquez un ![](/images/Sketcher_ConstrainVertical.svg) [Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr"). Le rectangle sera aligné avec la position X de **P1**.
9. Sélectionnez le point **P2** et le point **P3** et appliquez une ![](/images/Sketcher_ConstrainHorizontal.svg) [Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr"). Le rectangle sera aligné avec la position Y de **P2**.
10. Vous devriez obtenir une esquisse entièrement contrainte semblable à la **Fig : CC3**.

**Etape H : fermer l'esquisse**

:   Cliquez sur Fermer.

**Pocket**

![](/images/Pd_tut_pck01.png)

Fig: CC4

![](/images/Pd_tut_pck02-mir.png)

Fig: CC5

Pour créer les découpes, nous allons utiliser l'outil ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"). Cet outil est l'opposé de l'outil Protrusion. Alors que l'outil Protrusion ajoute du matériau, l'outil Cavité enlève du matériau.

1. Sélectionnez **Sketch002**.
2. Cliquez sur ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") :
   1. Le panneau de tâches **Paramètres de la cavité** s'ouvre.
   2. Sélectionnez **Type** A travers tous ![](/images/ComboBox.svg).
   3. Cochez ![](/images/CheckBoxTrue.svg) Inversé.
   4. Cliquez sur OK.
   5. Vous devriez avoir quelque chose qui ressemble à **Fig : CC4'**.

**Mirror**

Au lieu de créer une autre esquisse et d'y faire une cavité, nous profitons de la symétrie du modèle par rapport au plan YZ et utilisons une ![](/images/PartDesign_Mirrored.svg) [symétrisation](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") pour créer la deuxième découpe.

1. Sélectionnez **Pocket** dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Cliquez ![](/images/PartDesign_Mirrored.svg) [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") :
   1. Le panneau de tâches **Paramètres de symétrie** s'ouvre.
   2. Sélectionnez Axe d'esquisse vertical ![](/images/ComboBox.svg) du **Plan** dans le menu déroulant. Le plan sera défini par cet axe (l'axe Y) et également par l'axe Z de l'esquisse. Notez que si vous sélectionnez **Plan de base YZ**, vous obtiendrez le même résultat.
   3. Cliquez sur OK.
3. Vous devriez maintenant avoir une pièce qui ressemble à la **Fig : CC5**.

## Les côtés

Les côtés sont créés de manière similaire, mais au lieu d'enlever du matériau, nous en ajouterons avec une fonction de [protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").

**Sketch003**

![](/images/Pd_tut_sk3_1.png)

Fig: SD1

![](/images/Pd_tut_pad001.png)

Fig: SD2

![](/images/Pd_tut_pad02-mir.png)

Fig: SD3

1. Assurez-vous que **Sketch** est visible, et que **Mirrored** est caché.
2. Cliquez sur ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") et créez une nouvelle esquisse attachée au **XY\_Plane**. L'esquisse sera nommée **Sketch003**.
3. Cliquez sur ![](/images/Sketcher_CreateRectangle.svg) [Créer un rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr") et créez un rectangle similaire au plus petit rectangle de la **Fig : SD1**. Comme le rectangle est décalé par rapport à l'axe X, cela ne devrait pas déclencher une ![](/images/Sketcher_ConstrainPointOnObject.svg) [Contrainte de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") automatique.
4. Quittez l'outil.
5. Cliquez sur ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr").
6. Sélectionnez le point **P1** comme indiqué sur la **Fig : CC2** de **Sketch**.
7. Quittez l'outil.
8. Appliquez ces contraintes :
   1. Sélectionnez une des lignes horizontales, appliquez une ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), et attribuez une valeur de **7 mm**.
   2. Sélectionnez l'une des lignes verticales, appliquez une ![](/images/Sketcher_ConstrainDistanceY.svg) [Contrainte de distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr"), et attribuez cette expression : **`<<Sketch>>.Constraints.width`**.
   3. Sélectionnez le point en **haut à gauche** du rectangle créé (marqué **TL** sur la **Fig : SD1**) et le nouveau **point de géométrie externe** et appliquez une ![](/images/Sketcher_ConstrainCoincident.svg) [Contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr").
9. L'esquisse devrait être entièrement contrainte maintenant.
10. Cliquez sur Fermer.

**Pad001**

1. Sélectionnez **Sketch003**.
2. Cliquez sur ![](/images/PartDesign_Pad.svg) [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") :
   1. Assignez '*Type =* Dimension ![](/images/ComboBox.svg).
   2. Assigner **Longueur = 16.7 mm**.
   3. Cliquez sur OK.
   4. Vous devriez obtenir un résultat comme indiqué dans **Fig : SD2**.

**Mirrored001**

1. Sélectionnez **Pad001**.
2. Cliquez sur ![](/images/PartDesign_Mirrored.svg) [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") :
   1. Assurez-vous que **Plan** Axe d'esquisse vertical ![](/images/ComboBox.svg) est sélectionné.
   2. Cliquez sur OK.
   3. Vous devriez maintenant avoir une pièce qui ressemble à **Fig : SD3**.

**Remarque**

Nos deux opérations miroir ont un plan de symétrie commun, nous aurions donc pu rendre notre modèle un peu plus simple en les combinant. Nous pourrions :

1. omettre la première opération de **Symétrie**.
2. sélectionner à la fois **Pad001** et **Pocket** à l'étape 1 de l'opération **Miroir001** ci-dessus.

Cela met en évidence le concept important selon lequel nous reflétons les fonctions sélectionnées (les opérations que nous avons effectuées sur le corps, dans l'ordre sélectionné), et non le corps lui-même.

## Le trou central

C'est maintenant l'heure de la partie la plus difficile de notre modélisation, un défi qui se pose parce que certaines des dimensions du trou central sont définies le long de la face inclinée. Si vous utilisez cette face, créée par le remplissage de **Sketch001**, comme référence pour l'esquisse suivante, vous vous exposez au [Problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr"). Une meilleure solution consiste à faire référence à *Sketch001* lui-même.

**Sketch004**

![](/images/Pd_tut_cen01.png)

Fig: CH1

![](/images/Pd_tut_cen02.png)

Fig: CH2

1. Rendez visible **Sketch001**, et cachez **Sketch** et **Mirrored001**.
2. Cliquez sur ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") et créez une nouvelle esquisse attachée au *YZ\_Plane*. L'esquisse sera nommée **Sketch004**.
3. Cliquez sur ![](/images/Sketcher_CreatePolyline.svg) [Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") et tracez une polyligne comme celle indiquée par les points **P1**, **P2**, **P3** et **P4** dans la **Fig : CH1**.
4. N'oubliez pas de fermer la polyligne en choisissant le premier point. Cela créera la ![](/images/Sketcher_ConstrainCoincident.svg) [Contrainte coïncidente](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") nécessaire.
5. Quittez l'outil.
6. Vérifiez les contraintes appliquées :
   * Supprimez la ![](/images/Sketcher_ConstrainVertical.svg) [Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") redondante appliquée à la ligne définie par **P1** et **P2**.
   * Assurez-vous qu'une ![](/images/Sketcher_ConstrainHorizontal.svg) [Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") a été appliquée aux lignes définies par **P1** et **P4**, et **P2** et **P3**.
   * Assurez-vous qu'une ![](/images/Sketcher_ConstrainPointOnObject.svg) [Contrainte de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") a été appliquée à **P1** et à l'**axe Y**, et à **P2** et à l'**axe Y**.
7. Cliquez sur ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr").
8. Sélectionnez la ligne définie par **EGP1** et **EGP2** dans **Sketch001**, indiquée par la couleur violette dans **Fig : CH2**.
9. Quittez l'outil.
10. Appliquez une ![](/images/Sketcher_ConstrainPointOnObject.svg) [Contrainte de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") à **P3** et à la **géométrie externe**, et répétez l'opération pour **P4**. Cela fera coïncider la ligne définie par **P3** et **P4** avec la ligne définie par **EGP1** et **EGP2**.
11. Sélectionnez la ligne **P3** à **P4**, appliquez une ![](/images/Sketcher_ConstrainDistance.svg) [Contrainte de distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr"), et assignez **Longueur = 17 mm**.
12. Sélectionnez les points **EGP2** et **P4**, appliquez une ![](/images/Sketcher_ConstrainDistance.svg) [Contrainte de distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr"), et assignez **Longueur = 7 mm**.
13. Vous obtiendrez ainsi une esquisse entièrement contrainte du type **Fig : CH2**.
14. Cliquez sur Fermer.
15. Cachez **Sketch001**.

**Pocket001**

1. Sélectionnez **Sketch004**.
2. Cliquez sur ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") :
   1. Sélectionnez **Type** Deux Dimensions ![](/images/ComboBox.svg).
   2. Assignez **8.5 mm** à **Longueur** et **2ème longueur**.
   3. Cliquez sur OK.
3. Sélectionnez la **Pocket001** juste créée.
4. Dans l'onglet Données de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), changez la propriété **Refine** en **True**. L'éditeur de propriétés se trouve dans l'onglet Modèle de la [vue combinée](/Combo_view/fr "Combo view/fr").

**Remarques**

1. Pour **Pocket001**, nous aurions pu alternativement utiliser **Type** Dimension ![](/images/ComboBox.svg), cocher **Symétrique au plan**, et entrer **17 mm** pour la valeur **Longueur**.
2. **Refine** va essayer d'enlever les coutures laissées par les opérations précédentes. Il est conseillé de n'affiner que le solide final, car certaines opérations peuvent échouer si une fonction précédente a été affinée. Cependant, il y a aussi des cas où refine peut faire réussir une opération. Donc, en cas de problème, vérifiez cette propriété et testez-la. Malheureusement, il n'y a pas encore de règle générale à suivre.

## Résultat

Le modèle est complet. Il devrait ressembler à l'image ci-dessous.

Enfin, sélectionnez **Sketch** dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") et, dans l'onglet Données de l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr"), recherchez **Sketch → Constraints**. Développez ce nœud et modifiez les contraintes **length** et **width**. Le modèle devrait changer de façon paramétrique.

![](/images/Pd_tut_final_solid.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial_019/fr&oldid=1521053>"