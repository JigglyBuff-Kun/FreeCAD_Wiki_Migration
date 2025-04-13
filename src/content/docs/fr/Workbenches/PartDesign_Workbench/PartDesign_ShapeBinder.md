---
title: PartDesign Forme liée
---
|  |
| --- |
| PartDesign Forme liée |
| Emplacement du menu |
| PartDesign → Créer une forme liée |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Sous forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr"), [PartDesign Clone](/PartDesign_Clone/fr "PartDesign Clone/fr") |
|  |

## Description

L'outil **PartDesign Forme liée** crée une forme liante référençant la géométrie d'un seul objet parent. Une Forme liée est utilisée à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") pour référencer une géométrie extérieure au corps. L'utilisation d'une géométrie externe directement dans un corps n'est pas autorisée et entraînera des erreurs hors champ.

Une Forme liée suivra le placement relatif de la géométrie référencée, ce qui est utile dans le contexte de la création d'[assemblages](/Assembly/fr "Assembly/fr"), si sa propriété Données**Trace Support** est mise à `true`. Consultez l'[exemple](#Exemple) ci-dessous pour comprendre comment cela fonctionne.

La géométrie référencée peut être soit un objet unique (par exemple un [Part Cube](/Part_Box/fr "Part Box/fr"), un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), ou une [PartDesign Esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") ou une [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") à l'intérieur d'un corps), soit un ou plusieurs sous-éléments (faces, arêtes ou sommets) appartenant au même objet parent. Le choix de la géométrie à sélectionner dépend de l'utilisation prévue de la Forme liée. Pour une opération booléenne, vous devrez sélectionner un solide. Pour une opération de protrusion, une face ou une esquisse peut être utilisée. Et pour la géométrie externe dans une esquisse, ou pour attacher une esquisse, toute combinaison de sous-éléments peut être appropriée. La géométrie référencée peut également appartenir au corps dans lequelle la Forme liée est imbriquée.

![](/images/Shapebinder_flow.png)

À partir de deux faces sélectionnées, une Forme liée est créée dans un corps encore vide. La géométrie de la Forme liée peut ensuite être utilisée comme géométrie externe dans une esquisse de ce corps.

## Utilisation

1. [Activez le corps](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr"), la Forme liée doit être imbriquée dedans.
2. Vous pouvez sélectionner un seul objet, ou un ou plusieurs sous-éléments appartenant au même objet parent. Les sous-éléments ne peuvent être sélectionnés que dans la [vue 3D](/3D_view/fr "3D view/fr").
3. Sélectionnez l'option **PartDesign → ![](/images/PartDesign_ShapeBinder.svg) Créer une forme liée** du menu.
4. Le panneau des tâches **Paramètres de la forme liée** s'ouvre.
5. Sélectionnez éventuellement un objet, ce n'est pas nécessaire si vous voulez sélectionner des sous-éléments :
   1. Appuyez sur le bouton Objet.
   2. Sélectionnez un objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
   3. Tous les sous-éléments sélectionnés auparavant seront supprimés.
   4. Si un corps est sélectionné ici, il sera impossible de sélectionner des sous-éléments car ils appartiennent à un objet différent, à savoir la [fonction résultante](/PartDesign_Body/fr#Tip_.28fonction_r.C3.A9sultante.29 "PartDesign Body/fr") du corps.
6. Vous pouvez sélectionner des sous-éléments :
   1. Appuyez sur le bouton Ajouter une géométrie.
   2. Sélectionnez un sous-élément dans la [vue 3D](/3D_view/fr "3D view/fr").
   3. Vous devez appuyer sur le bouton Ajouter une géométrie pour chaque sous-élément que vous souhaitez ajouter.
   4. Seuls les sous-éléments appartenant au même objet parent peuvent être sélectionnés. Si nécessaire, utilisez le bouton Objet pour sélectionner un autre objet parent.
7. Vous pouvez supprimer des sous-éléments :
   1. Appuyez sur le bouton Supprimer une géométrie.
   2. Sélectionnez un sous-élément dans la [vue 3D](/3D_view/fr "3D view/fr").
   3. Vous devez appuyer sur le bouton Supprimer une géométrie pour chaque sous-élément que vous souhaitez supprimer.
   4. Appuyez sur le bouton OK.

## Options

Pour modifier une Forme liée, double-cliquez dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), ou clic droit dessus et sélectionnez **Modifier la forme liée** dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr")

## Remarques

* Une Forme liée peut être retirée du corps dans lequel elle est imbriquée et déposée sur le nœud de document ![](/images/Document.svg) dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Une telle Forme liée non imbriquée peut être utilisée comme une [fonction de base](/PartDesign_Body/fr#Base_Feature "PartDesign Body/fr") pour un nouveau corps.
* Une Forme liée créée à partir d'une esquisse peut avoir une "direction d'outil" opposée. Par exemple, une [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") créée à partir de l'esquisse peut s'étendre dans la direction +Y, tandis qu'une [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr"), ayant les mêmes propriétés, créée à partir d'une Forme liée s'étend dans la direction -Y. L'activation de la propriété (ou de la case à cocher) Données**Reversed** résoudra ce problème.

## PartDesign Sous forme liée vs. PartDesign Forme liée

L'outil PartDesign Sous forme liée et l'outil PartDesign Forme liée sont assez similaires. Leurs noms prêtent quelque peu à confusion car ils peuvent tous deux faire référence à des objets entiers et à des sous-éléments.

Les principales différences sont les suivantes

* L'édition d'une PartDesign Forme liée est plus facile. Un double-clic sur l'objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ouvrira un panneau de tâches.
* Un PartDesign Forme liée peut soit faire référence à un seul objet entier, soit à des sous-éléments appartenant à un seul objet parent. Un PartDesign Sous forme liée n'a pas ces restrictions.
* Seuls les PartDesign Sous forme liée peuvent référencer une géométrie à partir d'un fichier externe.
* Un PartDesign Sous forme liée suit toujours le placement relatif de la géométrie référencée. Pour un PartDesign Forme liée, ce comportement est facultatif via sa propriété Données**Trace Support**.
* Seuls les PartDesign Sous forme liée prennent en charge le décalage 2D.

Tout en gardant à l'esprit que chacun de ces outils a ses avantages et ses inconvénients et que le choix peut dépendre du cas d'utilisation, on peut conclure que l'utilisation d'une Sous forme liée est actuellement recommandée pour la plupart des applications en raison de sa polyvalence et de sa gamme d'options. Pour en savoir plus sur ces outils, consultez la vidéo de MangoJelly [FreeCAD For Beginners 34 : PartDesign Shape Binder vs Sub Shape Binder](https://www.youtube.com/watch?v=ylAMGQ8HV0w).

## Propriétés

* Données**Support** (`LinkSubListGlobal`) : support pour la géométrie.
* Données**Trace Support** (`Bool`) : valeur par défaut est `false`. Lorsque `true`, la forme liée respecte les placements relatifs des pièces et des corps (en manipulant les valeurs de sa propriété cachée Données**Placement**).

## Exemple

Cet exemple utilise la fonction Forme liée pour réaliser un trou (avec ou sans filetage) à travers plusieurs corps. Normalement, la fonction Trou de l'atelier PartDesign est limitée à un seul corps. L'exemple utilise deux cubes se faisant face mais désalignés de manière arbitraire. Les trous sont créés à l'aide d'esquisses contenant un cercle pour chaque trou (le diamètre est ignoré par la fonction de trou). Lorsque vous copiez l'esquisse sur l'autre cube, elle sera à la même position dans le système de coordonnées local du cube. Dans l'image, cela est illustré par le cercle blanc sur le cube arrière. Ce n'est pas ce que nous voulons, car le trou à cette position ne serait pas aligné avec le trou du cube avant.

![](/images/ShapeBinderThroughHole.png)

Exemple pour montrer comment faire des trous à travers différents corps. Le cercle blanc montre qu'il ne suffit pas de copier les esquisses

Voici comment utiliser la fonction Forme liée pour y parvenir :

1. Préparez un montage comme dans l'image ci-dessus. Si vous utilisez les cubes de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), n'oubliez pas que vous devez les placer dans un conteneur de corps. Chacun d'entre eux doit être placé dans un seul conteneur de corps. Sinon, les fonctions de [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ne fonctionneraient pas. Si vous les construisez à partir d'esquisses, le système devrait créer des conteneurs de corps par défaut.
2. Dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), modifiez le placement du deuxième cube de sorte qu'il touche le premier cube avec un déplacement latéral.
3. Sélectionnez l'atelier PartDesign.
4. Créez une esquisse sur la face avant du premier cube, placez un cercle n'importe où et fermez l'esquisse.

Sélectionnez l'esquisse dans la vue en arborescence et appuyez sur le bouton ![](/images/PartDesign_Hole.svg) [PartDesign Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"). Assurez-vous auparavant que le premier corps est le [corps actif](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr"), (double-cliquez).

1. Sélectionnez un trou de taille appropriée. Dans l'image ci-dessus, le contre-trou a également été sélectionné. Fermez la fonction [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr").

   :   L'image devrait maintenant ressembler à celle ci-dessus. Lorsque vous masquez le premier cube (sélectionnez et appuyez sur espace), vous pouvez voir que le trou n'atteint pas le deuxième cube. Il ne le fera pas, même si vous sélectionnez **A travers tout**, ou si vous entrez une distance vraiment importante dans le panneau de tâches de [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"). Le trou est toujours limité à un seul corps.
   :   C'est ici que notre Forme liée entre en jeu.
2. Tout d'abord, sélectionnez le cube arrière. C'est la cible où la Forme liée sera ajoutée. Elle doit être [activée](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") avant, donc assurez-vous qu'elle a été double-cliquée.
3. Dans l'arborescence, sélectionnez l'esquisse que nous avons utilisée pour le trou. Il est important de ne pas activer le premier corps.
4. Sélectionnez la fonction Forme liée.

   :   Un panneau des tâches devrait s'ouvrir. A la ligne **Objet**, le nom de notre esquisse devrait être visible. Si vous aviez sélectionné la fonction sans sélectionner l'esquisse, vous pourriez appuyer sur Objet et sélectionner ensuite l'esquisse dans la liste. Il est recommandé de la sélectionner en premier afin d'obtenir la bonne, surtout si vous avez de nombreux esquisses avec des noms générés automatiquement tels que Sketch001 et suivants. La fonction **Ajouter une géométrie** n'est pas utile pour nous, car nous voulons sélectionner toute l'esquisse. L'option **Ajouter une géométrie** est utilisée si seules certaines parties doivent être sélectionnées.
5. Appuyez sur OK pour fermer le panneau des tâches et vérifier qu'un nouvel élément a été ajouté à la vue en arborescence du second cube.

   :   Lorsque vous basculez la visibilité de la Forme liée, elle apparaît en jaune dans la [vue 3D](/3D_view/fr "3D view/fr"). Cependant, elle est sur la mauvaise position, tout comme le cercle blanc dans l'image ci-dessus. Cela est dû au réglage par défaut du paramètre Trace.
6. Dans la PropertyView de la Forme liée, dans l'onglet Données, réglez le paramètre **Trace Support** à true, la valeur par défaut étant false.

   :   Avec **Trace Support** vrai, la Forme liée n'est pas affectée par les transformations locales du corps cible, par exemple nos translations. La forme reste exactement à l'endroit où se trouvait la forme originale de l'objet frontal. Essayez de déplacer l'objet frontal et vous pourrez constater que la Forme liée suit toujours la nouvelle position.
7. Sélectionnez la Forme liée dans la vue en arborescence et appuyez sur le bouton ![](/images/PartDesign_Hole.svg) [PartDesign Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"). Si vous entrez les mêmes valeurs que pour le trou initial, vous remarquerez qu'aucun trou n'est créé dans le deuxième cube. Cela est dû au fait que, dans certains cas, la Forme liée a une "direction d'outil" opposée à celle de l'esquisse référencée. Pour résoudre ce problème, cochez la case Inverser. Appuyez sur OK pour terminer.
8. Vous avez maintenant des trous liés dans deux corps différents. Si vous modifiez la position du cercle dans l'esquisse, les deux trous s'adapteront. Vous pouvez même ajouter de nouveaux cercles dans l'esquisse pour créer d'autres trous liés.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_ShapeBinder/fr&oldid=1459312>"