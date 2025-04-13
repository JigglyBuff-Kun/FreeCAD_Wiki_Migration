---
title: Std Créer un lien
---

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Std Créer un lien                                                                                                                                |
| Emplacement du menu                                                                                                                              |
| _Aucun_                                                                                                                                          |
| Ateliers                                                                                                                                         |
| Tous                                                                                                                                             |
| Raccourci par défaut                                                                                                                             |
| _Aucun_                                                                                                                                          |
| Introduit dans la version                                                                                                                        |
| 0.19                                                                                                                                             |
| Voir aussi                                                                                                                                       |
| [Std Part](/Std_Part/fr "Std Part/fr"), [Std Groupe](/Std_Group/fr "Std Group/fr"), [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") |
|                                                                                                                                                  |

## Description

![](/images/Std_LinkMake.svg) Std Créer un lien crée une classe [App Link](/App_Link/fr "App Link/fr") (`App::Link`), un type d'objet faisant référence ou lié à un autre objet, dans le même document ou dans un autre document. Il est spécialement conçu pour dupliquer efficacement un seul objet plusieurs fois, ce qui permet de créer des [assemblages](/Assembly/fr "Assembly/fr") complexes à partir de sous-assemblages plus petits et de plusieurs composants réutilisables tels que des vis, des écrous et des éléments de fixation similaires.

L'objet [App Link](/App_Link/fr "App Link/fr") a été nouvellement introduit dans la v0.19. Auparavant, une simple duplication d'objets pouvait être réalisée avec ![](/images/Draft_Clone.svg) [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr"), mais c'est une solution moins efficace en raison de son implémentation qui crée essentiellement une copie de la [forme](/Part_TopoShape/fr "Part TopoShape/fr") interne de l'objet source. Au lieu de cela, un lien fait directement référence à la forme d'origine, ce qui permet d'économiser de la mémoire.

En lui-même, l'objet [Link](/App_Link/fr "App Link/fr") peut se comporter comme un tableau dupliquant son objet de base plusieurs fois. Cela peut être fait en définissant sa propriété Données**Element Count** sur `1` ou plus. Cet objet "[Réseau lien](#R.C3.A9seau_lien)" peut également être créé avec les différents outils de tableau de l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"), par exemple ![](/images/Draft_OrthoArray.svg) [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr"), ![](/images/Draft_PolarArray.svg) [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr"), et ![](/images/Draft_CircularArray.svg) [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr").

Lorsqu'ils sont utilisés avec l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), les liens sont destinés à être utilisés avec ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Il est donc recommandé de définir Vue**Display Mode Body** sur `Tip` pour sélectionner les caractéristiques du corps entier et non les fonctions individuelles. Pour créer des tableaux des [PartDesign Features](/PartDesign_Feature/fr "PartDesign Feature/fr") internes, utilisez ![](/images/PartDesign_LinearPattern.svg) [PartDesign Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr"), ![](/images/PartDesign_PolarPattern.svg) [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr") et ![](/images/PartDesign_MultiTransform.svg) [PartDesign Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr").

L'outil ![](/images/Std_LinkMake.svg) Std Créer un lien n'est pas défini par un atelier particulier mais par le système de base. De ce fait il se trouve donc dans **Barre d'outils Structure** qui est disponible dans tous les [ateliers](/Workbenches/fr "Workbenches/fr"). L'objet Link, utilisé en conjonction avec ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") pour regrouper divers objets, constitue la base des ateliers ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr") et ![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench/fr "Assembly4 Workbench/fr").

## Utilisation

Avec sélection :

1. Sélectionnez un objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") pour lequel vous souhaitez créer un lien.
2. Appuyez sur le bouton ![](/images/Std_LinkMake.svg) Std Créer un lien. L'objet créé a la même icône que l'objet d'origine mais a une flèche superposée indiquant qu'il s'agit d'un lien.

Sans sélection :

1. Si aucun objet n'est sélectionné, appuyez sur le bouton ![](/images/Std_LinkMake.svg) Std Créer un lien pour créer un lien vide ![](/images/Link.svg).
2. Allez dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), puis cliquez sur la propriété Données**Linked Object** pour ouvrir la [fenêtre de dialogue de sélection des liens](/Selection_methods "Selection methods") pour choisir un objet, puis appuyez sur OK .
3. Au lieu de choisir un objet entier dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), vous pouvez également choisir des sous-éléments (sommets, arêtes ou faces) d'un seul objet dans la [vue 3D](/3D_view/fr "3D view/fr"). Dans ce cas, le lien dupliquera uniquement ces sous-éléments et la superposition de flèches sera différente. Cela peut également être fait avec ![](/images/Std_LinkMakeRelative.svg) [Std Créer un sous-lien](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr").

![](/images/Std_Link_tree_example.png) ![](/images/Std_Link_example.png)

(1) Un objet, (2) un lien vide, (3) un lien complet vers le premier objet (avec un matériau de remplacement), et (4) un lien vers seulement quelques sous-éléments de l'objet. Le lien vide n'est pas lié à l'objet réel et n'est donc pas affiché dans la [vue 3D](/3D_view/fr "3D view/fr").

## Utilisation : documents externes

1. Commencez par un document contenant au moins un objet qui sera la source du lien.
2. Ouvrez un nouveau document ou un document existant. Pour une manipulation plus facile, utilisez ![](/images/Std_TreeMultiDocument.svg) [Std Arborescence Tous les documents](/Std_TreeMultiDocument/fr "Std TreeMultiDocument/fr") pour afficher les deux documents dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Avant de continuer, [sauvegarder](/Std_Save/fr "Std Save/fr") les deux documents. Le lien ne pourra pas trouver sa source et sa cible à moins que les deux documents ne soient enregistrés sur le disque.
3. Dans le premier document, sélectionnez l'objet que vous souhaitez lier, puis changez d'onglet dans la [zone de vue principale](/Main_view_area/fr "Main view area/fr") pour passer au deuxième document.
4. Appuyez sur ![](/images/Std_LinkMake.svg) Std Créer un lien. L'objet produit a la même icône que l'objet d'origine mais a une flèche superposée indique qu'il s'agit d'un lien provenant d'un document externe.

_Remarques :_

- Lors de l'enregistrement du document avec le lien, il sera demandé également de [sauvegarder](/Std_Save/fr "Std Save/fr") le document source qui contient l'objet d'origine.
- Pour inclure l'objet d'origine dans le document avec le lien, utilisez ![](/images/Std_LinkImport.svg) [Std Importer des liens](/Std_LinkImport/fr "Std LinkImport/fr") ou ![](/images/Std_LinkImportAll.svg) [Std Importer tous les liens](/Std_LinkImportAll/fr "Std LinkImportAll/fr").

* ![](/images/Std_LinkMake.svg) Std Créer un lien peut être utilisé sur un objet Link existant afin de créer un lien vers un lien qui résout finalement l'objet original dans le document source. Cela peut être réalisé avec ![](/images/Std_LinkMakeRelative.svg) [Std Créer un sous-lien](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr") pour ne sélectionner que certains sous-éléments également.

![](/images/Std_Link_tree_documents_example.png) ![](/images/Std_Link_documents_example.png)

(1, 2) Deux objets d'un document source liés à un document cible, (3) un lien vers le deuxième lien (avec un matériau de remplacement) et (4) un lien vers les sous-éléments du deuxième lien.

### Glisser-déposer

Au lieu de changer d'onglet de document, vous pouvez créer des liens en effectuant une opération de glisser-déposer dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") : sélectionnez l'objet source dans le premier document, faites-le glisser, puis déposez-le dans le nom du second document tout en maintenant la touche Alt du clavier.

Le glisser-déposer entraîne différentes actions en fonction de la touche de modification enfoncée.

- Sans touche de modification, il déplace simplement l'objet d'un document à l'autre; une flèche inclinée s'affiche dans le curseur.
- Maintenir la touche Ctrl copie l'objet, un signe plus est affiché dans le curseur.
- Maintenir la touche Alt crée un lien, une paire de maillons de chaîne est affichée dans le curseur.

Pour les modificateurs Ctrl et Alt, le glisser-déposer peut également être effectué avec un seul document. Autrement dit, faire glisser un objet et le déposer dans le même nom de document peut être utilisé pour créer plusieurs copies ou plusieurs liens vers celui-ci.

## Groupes

![](/images/Std_LinkMake.svg) Std Créer un lien peut être utilisé avec des objets ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") afin de dupliquer rapidement des groupes d'objets positionnés dans l'espace, c'est-à-dire [assemblages](/Assembly/fr "Assembly/fr").

![](/images/Std_Link_tree_Std_Part_example.png)

Lien créé à partir d'une [Std Part](/Std_Part/fr "Std Part/fr") ; les objets ne sont pas dupliqués mais ils sont répertoriés sous le conteneur d'origine et sous le conteneur Lien.

Un ![](/images/Std_Group.svg) [Std Groupe](/Std_Group/fr "Std Group/fr") ne possède pas de propriété Données**Placement**, il ne peut donc pas contrôler la position des objets à l'intérieur de celui-ci. Cependant, lorsque ![](/images/Std_LinkMake.svg) Std Créer un lien est utilisé avec ![](/images/Std_Group.svg) [Std Groupe](/Std_Group/fr "Std Group/fr"), le lien résultant se comporte essentiellement comme un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") et peut également être déplacé dans l'espace.

![](/images/Std_Link_tree_Std_Group_example.png) ![](/images/Std_Link_Std_Group_example.png)

Lien créé à partir d'un [Std Groupe](/Std_Group/fr "Std Group/fr") ; les objets ne sont pas dupliqués mais ils sont répertoriés sous le conteneur d'origine et sous le conteneur Lien. Le lien (avec le matériau de remplacement) peut être déplacé dans l'espace, tout comme un [Std Part](/Std_Part/fr "Std Part/fr").

Un lien vers un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") gardera la visibilité des objets synchronisée avec la Part d'origine. Donc si vous masquez un objet dans un lien, il sera masqué dans tous les liens et dans l'objet d'origine. D'un autre côté, un lien vers un ![](/images/Std_Group.svg) [Std Groupe](/Std_Group/fr "Std Group/fr") permettra un contrôle indépendant des visibilités.

![](/images/Std_Link_tree_Std_Part_visibility.png) ![](/images/Std_Link_tree_Std_Group_visibility.png)

À gauche : [Std Part](/Std_Part/fr "Std Part/fr") avec deux objets et deux liens vers la pièce; la visibilité des objets est synchronisée. À droite : [Std Group](/Std_Group/fr "Std Group/fr") avec deux objets et deux liens vers le groupe. La visibilité des objets est contrôlée indépendamment dans chaque groupe.

## Apparence de remplacement

Lorsqu'un lien est créé, par défaut Vue**Override Material** est `false`, donc le lien aura la même apparence que l'original Données**Linked Object**.

Lorsque Vue**Override Material** est défini sur `true`, la propriété Vue**Shape Material** contrôlera désormais l'apparence du lien.

Quel que soit l'état de Vue**Override Material**, il est possible de définir chaque apparence des sous-éléments (sommets, arêtes, faces) d'un lien.

1. Sélectionnez le lien dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Ouvrez le menu contextuel (clic droit) et choisissez **Override colors**.
2. Choisissez maintenant les sous-éléments individuels que vous voulez dans la [vue 3D](/3D_view/fr "3D view/fr"), appuyez sur Éditer et modifiez les propriétés, y compris la transparence.
3. Pour supprimer les attributs personnalisés, sélectionnez les éléments dans la liste et appuyez sur Supprimer.
4. Lorsque vous êtes satisfait du résultat, appuyez sur OK pour fermer la fenêtre de dialogue.

_Remarque :_ à partir de la v0.19, la coloration des sous-éléments est soumise au [Problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr"). Elle doit être effectuée comme dernière étape de modélisation lorsque le modèle n'est plus sensé être modifié.

![](/images/Std_Link_override_color_example.png)

(1) objet d'origine, (2) un lien avec un matériau de remplacement et (3) un deuxième lien avec des sous-éléments modifiés individuels.

## Réseau de liens

_Voir aussi :_ [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr").

Lorsqu'un lien est créé, par défaut, son Données**Element Count** est `0`, donc un seul objet Link sera visible dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

Étant donné que Données**Show Element** est `true` par défaut, lorsque Données**Element Count** est défini sur `1` ou plus, automatiquement plus de liens seront créés sous le premier. Chaque nouveau lien peut être placé à la position souhaitée en modifiant sa propre propriété Données**Placement**.

De la même manière, chaque élément du réseau peut avoir sa propre apparence modifiée, soit par les propriétés Vue**Override Material** et Vue**Shape Material**, soit en utilisant le menu **Remplacer les couleurs...** sur l'ensemble du réseau puis en sélectionnant des faces une par une. Ceci est décrit dans [Apparence de remplacement](#Apparence_de_remplacement).

![](/images/Std_Link_tree_array_example.png) ![](/images/Std_Link_array_example.png)

(1) objet d'origine, et (2, 3, 4) un réseau Lien avec trois éléments, chacun dans une position différente. Le premier lien a un matériau de remplacement et des faces transparentes, les deux autres ont des couleurs de face personnalisées.

Une fois que vous êtes satisfait de l'emplacement et des propriétés des éléments Liens dans le réseau, vous pouvez changer Données**Show Element** en `false` afin de masquer les liens individuels dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Cela présente l'avantage de rendre le système plus réactif, en particulier si vous avez de nombreux objets dans le document.

Lors de la création de ce type de réseau de liens, vous devez placer chacun des éléments manuellement. Cependant, si vous souhaitez utiliser des modèles spécifiques pour placer les copies, vous pouvez utiliser les outils de réseau de l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"), comme ![](/images/Draft_OrthoArray.svg) [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr"), ![](/images/Draft_PolarArray.svg) [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") et ![](/images/Draft_CircularArray.svg) [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr"); ces commandes peuvent créer des copies normales ou des copies de lien selon les options au moment de la création.

## Visibilité

Lorsque Données**Show Element** est `true` et que des éléments individuels sont répertoriés dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") dans un [réseau de liens](#Réseau_de_liens), chaque lien peut être affiché ou masqué par en appuyant sur la barre Espace du clavier.

Une autre façon de masquer les éléments individuels consiste à utiliser le menu **Remplacer les couleurs...**.

1. Sélectionnez le réseau, ouvrez le menu **Remplacer les couleurs...** (clic droit).
2. Dans la [vue 3D](/3D_view/fr "3D view/fr"), choisissez n'importe quel sous-élément à partir de n'importe quel lien du réseau.
3. Appuyez sur Caché. Une icône représentant un œil ![](/images/Invisible.svg) devrait apparaître, indiquant que cet élément a été masqué de la [vue 3D](/3D_view/fr "3D view/fr"). L'objet s'affichera temporairement lorsque le curseur survolera l'icône ![](/images/Invisible.svg).
4. Vous pouvez cliquer sur OK pour confirmer l'opération et fermer la fenêtre de dialogue. Le lien restera caché même s'il est affiché comme visible dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

![](/images/Std_Link_array_visibility_example.png)

Fenêtre de dialogue des couleurs des éléments disponibles lors de l'ouverture du menu contextuel d'un objet Lien dans l'arborescence.

Si vous souhaitez restaurer la visibilité de cet élément du réseau, entrez à nouveau dans la fenêtre de dialogue, choisissez l'icône en forme d'œil, puis cliquez sur Supprimer pour supprimer l'état caché et cliquez sur OK pour confirmer et fermez la fenêtre de dialogue. L'élément sera à nouveau visible dans [vue 3D](/3D_view/fr "3D view/fr").

Lorsque le lien est pour un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") ou un ![](/images/Std_Group.svg) [Std Groupe](/Std_Part/fr "Std Part/fr"), le menu **Remplacer les couleurs...** fonctionne de la même manière qu'avec les réseaux. Il permet de contrôler la couleur de la face, la couleur de l'objet entier et la visibilité des objets du groupe.

![](/images/Std_Link_Std_Part_visibility_example.png) ![](/images/Std_Link_Std_Part_visibility_example_3D.png)

Un [Std Part](/Std_Part/fr "Std Part/fr") contenant trois objets et un lien vers cette pièce ; dans le lien, (1) le premier objet est rendu invisible, (2) le deuxième objet a des sous-éléments avec des couleurs différentes, (3) le troisième objet entier a une couleur et un niveau de transparence différents.

## Propriétés

Un [App Link](/App_Link/fr "App Link/fr") (classe `App::Link`) est dérivé de [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr") (classe `App::DocumentObject`). Il a donc les propriétés de base de ce dernier comme Données**Label** et Données**Label2**.

Voici les propriétés spécifiques disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Les propriétés masquées peuvent être affichées en utilisant la commande **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Link

- Données (LockDynamic, Hidden)**ColoredElements** (`LinkSubHidden`) : liste des éléments de lien dont la couleur a été modifiée.
- Données (LockDynamic)**Element Count** (`IntegerConstraint`) : nombre d'éléments de lien. La valeur par défaut est `0`. Si `1` ou plus, le [App Link](/App_Link/fr "App Link/fr") se comportera comme un réseau et dupliquera plusieurs fois le même Données**Linked Object**. Si Données**Show Elements** est `true`, chaque élément du réseau sera affiché dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et chacun pourra avoir son propre Données**Placement** modifié. Chaque copie de lien aura un nom basé sur le [nom](/Object_name/fr "Object name/fr") du lien, augmenté de `_iN`, où `N` est un nombre commençant par `0`. Par exemple, avec un seul `Link`, les copies seront nommées `Link_i0`, `Link_i1`, `Link_i2`, etc.
- Données (Immutable, Hidden, LockDynamic)**ElementList** (`LinkList`) : liste des éléments de lien.
- Données (LockDynamic)**LinkClaimChild** (`Bool`) : réclame l'objet lié en tant qu'enfant.
- Données (LockDynamic)**LinkCopyOnChange** (`Enumeration`) :
  - `Disabled` : désactive la création d'une copie de l'objet lié, déclenchée par une modification de l'une de ses propriétés définies comme `CopyOnChange`.
  - `Enabled` : active une copie profonde de l'objet lié si l'une de ses propriétés marquées comme `CopyOnChange` est modifiée. Une fois la copie profonde effectuée, il n'y aura plus de lien entre l'objet original et l'objet copié. Par conséquent, les modifications apportées à l'objet original ne seront pas répercutées sur les copies. Remarque : il s'agit d'un état préparatoire, la copie réelle n'aura lieu que lorsque les propriétés `CopyOnChange` auront été modifiées. Voir l'état `Owned`.
  - `Owned` : indique que l'objet lié a été copié et que la copie appartient au lien. Cet état est défini automatiquement par le lien, et non par l'utilisateur. Le processus est le suivant : si l'état est `Enabled` et que l'utilisateur modifie les propriétés précédemment définies comme `CopyOnChange`, l'état passe à `Owned`. C'est à ce moment-là que le lien effectuera la copie profonde de l'objet lié. Dans cet état, le lien n'essaiera pas de synchroniser les modifications de l'objet lié original avec la copie.
  - `Tracking` : même chose que `Enabled`, mais en plus la copie sera automatiquement rafraîchie si l'objet source original change.
- Données (Hidden, LockDynamic)**LinkCopyOnChangeGroup** (`Link`) : lié à un objet de groupe interne pour la conservation des copies en cas de modification.
- Données (Hidden, LockDynamic)**LinkCopyOnChangeSource** (`XLink`) : objet source de copie du changement.
- Données (Hidden, LockDynamic)**LinkCopyOnChangeTouched** (`Bool`) : indique que l'objet source de la copie sur changement a été modifié.
- Données (LockDynamic)**LinkExecute** (`String`) : nom de la fonction d'exécution qui sera exécutée pour cet objet Link particulier. La valeur par défaut est `'appLinkExecute'`. Définissez-la à `'None'` pour la désactiver.
- Données (Hidden, LockDynamic)**Link Placement** (`Placement`) : il s'agit d'un décalage appliqué par-dessus la Données**Placement** de l'Données**Objet lié**. Cette propriété est normalement cachée mais apparaît si Données**Link Transform** est défini sur `true`. Dans ce cas, Données**Placement** devient caché.
- Données**Link Transform** (`Bool`) : la valeur par défaut est `false`, auquel cas le lien remplacera le placement de l'Données**Objet lié**. S'il est réglé sur `true`, le lien sera placé à la même position que Données**Linked Object**, et son placement sera relatif à celui de Données**Linked Object**. Ceci peut également être réalisé avec ![](/images/Std_LinkMakeRelative.svg) [Std Créer un sous-lien](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr").
- Données**Linked Object** (`XLink`) : indique l'objet source de l'[App Link](/App_Link/fr "App Link/fr"). Il peut s'agir d'un objet entier ou d'un sous-élément de celui-ci (sommet, arête ou face).
- Données**Placement** (`Placement`) : emplacement du lien en coordonnées absolues.
- Données (LockDynamic)**PlacementList** (`PlacementList`) : emplacement de chaque élément de lien.
- Données**Scale** (`Float`) : la valeur par défaut est `1.0`. Il s'agit d'un facteur permettant une mise à l'échelle uniforme dans chaque direction `X`, `Y` et `Z`. Par exemple, un cube de `2 mm` x `2 mm` x `2 mm`, mis à l'échelle par `2.0`, donnera une forme de dimensions `4 mm` x `4 mm` x `4 mm`.
- Données**Scale List** (`VectorList`) : le facteur d'échelle pour chaque élément de lien.
- Données (Hidden)**Scale Vector** (`Vector`) : le facteur d'échelle pour chaque composante `(X, Y, Z)` pour tous les éléments Link lorsque Données**Element Count** est `1` ou plus. Si Données**Scale** est différent de `1.0`, cette même valeur sera utilisée dans les trois composants.
- Données**Show Element** (`Bool`) : la valeur par défaut est `true`, auquel cas la [vue en arborescence](/Tree_view/fr "Tree view/fr") montrera les copies individuelles du lien, tant que Données**Element Count** est `1` ou plus grande.
- Données (NoPersist, ReadOnly, Hidden)**\_ChildCache** (`LinkList`) : à définir
- Données (Caché, Sortie)**\_LinkOwner** (`Integer`) : à définir
- Données (NoPersist, Hidden)**\_LinkTouched** (`Bool`) : à définir

Base

- Données (Hidden)**Proxy** (`PythonObject`) : classe personnalisée associée à cet objet. Cela n'existe que pour la version [Python](/Python/fr "Python/fr"). Voir [Script](#Script).

L'objet [App Link](/App_Link/fr "App Link/fr") affichera en plus les propriétés de Données**Linked Object** d'origine, ainsi l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") peut avoir des groupes de propriétés comme Attachment, Box, Draft, etc.

### Vues

Link

- Vue**Draw Style** (`Enumeration`) : il vaut par défaut `None`; il peut s'agir de `Solid`, `Dashed`, `Dotted`, `Dashdot`; définit le style des arêtes dans la [vue 3D](/3D_view/fr "3D view/fr").
- Vue**Line Width** (`FloatConstraint`) : un flotteur qui détermine la largeur en pixels des bords dans la [vue 3D](/3D_view/fr "3D view/fr"). La valeur par défaut est `2.0`.
- Vue**Override Material** (`Bool`) : la valeur par défaut est `false`; s'il est défini sur `true`, il remplacera le matériau de Données**Linked Object** et affichera les couleurs définies dans Vue**Shape Material**.
- Vue**Point Size** (`FloatConstraint`) : similaire à Vue**Line Width**, définit la taille des sommets.
- Vue**Selectable** (`Bool`) : s'il est `true`, l'objet peut être sélectionné avec le pointeur dans la [vue 3D](/3D_view/fr "3D view/fr"). Sinon, l'objet ne peut pas être sélectionné tant que cette option n'est pas définie sur `true`.

- Vue**Shape Material** (`Material`) : cette propriété comprend des sous-propriétés qui décrivent l'apparence de l'objet.
  - Vue**Diffuse Color**, la valeur par défaut est `(0.4, 1.0, 1.0)`, qui s'affiche sous la forme `[102, 255, 255]` sur la base 255, light blue ..
  - Vue**Ambient Color**, la valeur par défaut est `(0.2, 0.2, 0.2)`, qui s'affiche sous la forme `[51, 51, 51]` sur la base 255, dark gray .
  - Vue**Specular Color**, la valeur par défaut est `(0.0, 0.0, 0.0)`, qui s'affiche sous la forme `[0, 0, 0]` sur la base 255, black .
  - Vue**Emissive Color**, la valeur par défaut est `(0.0, 0.0, 0.0)`, qui s'affiche sous la forme `[0, 0, 0]` sur la base 255, black .
  - Vue**Shininess**, la valeur par défaut est `0.2`
  - Vue**Transparency**, la valeur par défaut est `0.0`.

Base

- Vue (Hidden)**Child View Provider** (`PersistentObject`) :
- Vue (Hidden)**Material List** (`MaterialList`) : _(lecture seulement)_ si des matériaux individuels ont été ajoutés, ils seront listés ici.
- Vue (Hidden)**Override Color List** (`ColorList`) : _(lecture seulement)_ si les faces ou arêtes individuelles du lien ont été remplacées, elles seront listées ici.
- Vue (Hidden)**Override Material List** (`BoolList`) : _(lecture seulement)_ si les différents matériaux du lien ont été remplacés, ils seront listés ici.

Options d'affichage

- Vue**Display Mode** (`Enumeration`) : `'Link'` ou `'ChildView'`.
- Vue**Show In Tree** (`Bool`) : voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").
- Vue**Visibility** (`Bool`) : voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").

Selection

- Vue**On Top When Selected** (`Enumeration`) : voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").
- Vue**Selection Style** (`Enumeration`) : voir les informations dans [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr").

Il montrera en outre les propriétés de vue de l'original Données**Linked Object**.

## Héritage

Un [App Link](/App_Link/fr "App Link/fr") est formellement une instance de la classe `App::Link`, dont le parent est le [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr") (classe `App::DocumentObject`). C'est un objet de très bas niveau, qui peut être utilisé avec la plupart des autres objets de document.

![](/images/FreeCAD_core_objects.svg)

Schéma simplifié des relations entre les objets principaux du programme. L'objet `App::Link` est un composant central du système, il ne dépend d'aucun atelier, mais il peut être utilisé avec la plupart des objets créés dans tous les ateliers.

## Script

_Voir aussi :_ [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour plus d'informations.

Un lien d'application est créé avec la méthode `addObject()` du document. Il peut définir son Données**Linked Object** en remplaçant son attribut `LinkedObject`, ou en utilisant sa méthode `setLink`.

```
import FreeCAD as App

doc = App.newDocument()
bod1 = App.ActiveDocument.addObject("Part::Box", "Box")
bod2 = App.ActiveDocument.addObject("Part::Cylinder", "Cylinder")
bod1.Placement.Base = App.Vector(10, 0, 0)
bod2.Placement.Base = App.Vector(0, 10, 0)

obj1 = App.ActiveDocument.addObject("App::Link", "Link")
obj2 = App.ActiveDocument.addObject("App::Link", "Link")

obj1.LinkedObject = bod1
obj2.setLink(bod2)
obj1.Placement.Base = App.Vector(-10, -10, 0)
obj2.Placement.Base = App.Vector(10, -10, 0)
obj1.ViewObject.OverrideMaterial = True
App.ActiveDocument.recompute()

```

Le `App::Link` de base n'a pas d'objet Proxy, il ne peut donc pas être entièrement utilisé pour la sous-classification.

Par conséquent, pour la sous-classification [Python](/Python/fr "Python/fr"), vous devez créer l'objet `App::LinkPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::LinkPython", "Link")
obj.Label = "Custom label"

```

## Lecture complémentaire

Si vous souhaitez passer outre les détails historiques, rendez-vous sur le site [introduction aux liens orientée vers l'utilisateur](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link).

L'objet [App Link](/App_Link/fr "App Link/fr") a été introduit après 2 ans de développement et de prototypage. Ce composant a été pensé et développé presque seul par l'utilisateur _realthunder_. Les motivations et les implémentations de conception derrière ce projet sont décrites dans sa page GitHub, [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link). Afin d'accomplir cette fonctionnalité, plusieurs modifications fondamentales de FreeCAD ont été apportées; ceux-ci ont également été largement documentés dans [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

Le projet App Link a démarré après que la refonte de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") s'est terminée dans la v0.17. L'histoire d'App Link peut être retracée à certains fils de discussion essentiels du forum :

- [Pourquoi un objet ne peut être que dans un seul App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) (mars 2017)
- [Présentation de App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) (mars 2017)
- [Liens](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) (mai 2017)
- [Implémentation de Realthunder Link: discussion sur l'architecture](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) (juin 2017)
- [PR # 876: Lien, première étape, sélection sensible au contexte](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) (juillet 2017)
- [Preview: Link, stage two, API groundwork](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) (juillet 2017)
- [Aperçu Assembly3](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (décembre 2017)
- [Fusion de ma branche Link](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) (juin 2018)

Enfin, le pull request et le merge ont eu lieu :

- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), ancien fil de discussion (juillet 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (the BIG merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge).
- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), fil de discussion principal (juillet 2019)
- [A simple path description of Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (août 2019)
- [PR#2559: expose link and navigation actions](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), une introduction à la fonctionnalité Lien dans la version 0.19 (septembre 2019).

D'autres "liens" divers à propos de Link incluent :

- [Dynamic linked object](/Dynamic_linked_object "Dynamic linked object") - Un schéma avec Link et assemblys qui vise à réduire la duplication de la logique associée à l'assemblage telle que l'orientation, le positionnement ou le nombre d'instances.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMake/fr&oldid=1560993>"
