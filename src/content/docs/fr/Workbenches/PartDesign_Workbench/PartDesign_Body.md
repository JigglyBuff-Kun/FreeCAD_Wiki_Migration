---
title: PartDesign Corps
---
|  |
| --- |
| PartDesign Corps |
| Emplacement du menu |
| PartDesign → Créer un corps |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Std Part](/Std_Part/fr "Std Part/fr"), [Édition de fonctions](/Feature_editing/fr "Feature editing/fr") |
|  |

## Description

Un PartDesign Corps (Body) est l'élément de base pour créer des formes solides avec l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Il peut contenir des [esquisses](/Sketch/fr "Sketch/fr"), des [objets Datum](/Datum/fr "Datum/fr") et des [PartDesign Fonctions (Features)](/PartDesign_Feature/fr "PartDesign Feature/fr") afin de produire un [simple solide contigu](#Solide_contigu_unique).

Le Corps fournit un objet **Origine** qui comprend les axes X, Y, Z, et les plans standards. Ces éléments peuvent être utilisés comme références pour ancrer des [esquisses](/Sketch/fr "Sketch/fr") et des [objets primitifs](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr").

Ne pas confondre le ![](/images/PartDesign_Body.svg) PartDesign Corps (Body) avec ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr"). Le premier est un objet spécifique utilisé dans l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), destiné à modéliser un [simple solide contigu](#Solide_contigu_unique) au moyen de [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"). [Std Part](/Std_Part/fr "Std Part/fr") est un objet de regroupement destiné à créer des [assemblages](/Assembly/fr "Assembly/fr"). Il n'est pas utilisé pour la modélisation, juste pour organiser différents objets dans l'espace. Plusieurs corps et d'autres [Std Parts](/Std_Part/fr "Std Part/fr") peuvent être placés à l'intérieur d'un seul [Std Part](/Std_Part/fr "Std Part/fr") pour créer un assemblage complexe.

![](/images/PartDesign_Body_tree.png) ![](/images/PartDesign_Body_example.png)

À gauche : l'arborescence montrant les entités qui produisent séquentiellement la forme finale de l'objet.  
À droite : l'objet définitif visible dans la [vue 3D](/3D_view/fr "3D view/fr").

## Utilisation

Si aucun solide précédent n'est sélectionné :

1. Appuyez sur le bouton ![](/images/PartDesign_Body.svg) Créer un corps. Le nouveau corps est créé et devient automatiquement *[actif](#Statut_actif)*.
2. Vous pouvez maintenant appuyer sur ![](/images/PartDesign_NewSketch.svg) [PartDesign Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") pour créer une [esquisse](/Sketch/fr "Sketch/fr") dans le corps qui peut être utilisée avec une ![](/images/PartDesign_Pad.svg) [PartDesign Protusion](/PartDesign_Pad/fr "PartDesign Pad/fr").
3. Vous pouvez aussi ajouter une [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr"), par exemple un ![](/images/PartDesign_AdditiveBox.svg) [PartDesign Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr").

Si un objet solide est sélectionné :

1. Appuyez sur le bouton ![](/images/PartDesign_Body.svg) Créer un corps. Un nouveau corps est créé contenant une seule **Base Feature**. Cet élément Fonction de base (Base Feature) est une simple référence à un autre objet précédemment créé ou importé dans le document. Voir [Base Feature](#Base_Feature) pour plus d'informations. Un Corps existant ou une [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") ne peut pas être sélectionné lorsque vous appuyez sur le ![](/images/PartDesign_Body.svg) Créer un corps.

### Remarques

* Si aucun corps n'existe au moment où une ![](/images/PartDesign_NewSketch.svg) [PartDesign Esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") est sélectionnée, un nouveau Corps sera automatiquement créé. Si un corps existe déjà, il doit être rendu actif avant d'utiliser ![](/images/PartDesign_NewSketch.svg) [PartDesign Esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr").
* Double-cliquez sur le Corps dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") du modèle ou ouvrez le menu contextuel (clic droit) et sélectionnez **Activer/désactiver le corps**. Si un autre corps est déjà actif, il sera automatiquement désactivé. Voir [statut actif](#Statut_actif) pour plus d'informations.

## Propriétés

Un PartDesign Corps (classe `PartDesign::Body`) est dérivé d'une [Part Fonction (Feature)](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature`), par conséquent il partage toutes les propriétés de cette dernière.

Outre les propriétés décrites dans la [Part Fonction](/Part_Feature/fr "Part Feature/fr"), le PartDesign Corps a les propriétés suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Données

Base

* Données**Tip** (`Link`) : [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") définie sur "Tip" est généralement la dernière fonction créée dans le Corps. Tip indique la forme finale du Corps qui est affichée dans la [vue 3D](/3D_view/fr "3D view/fr") lorsque Vue**Display Mode Body** est défini sur `Tip`. Voir [Tip](#Tip) pour plus d'informations.
* Données**Base Feature** (`Link`) : forme externe utilisée comme première [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") dans le Corps. Il est généralement défini lorsque vous faites glisser un objet solide dans un Corps vide. Si aucun solide n'est importé de cette manière, cette propriété sera vide. Voir [Base Feature](#Base_Feature) pour plus d'informations.
* Données**Placement** (`Placement`) : position de l'objet dans la [vue 3D](/3D_view/fr "3D view/fr"). Le placement est défini par un point `Base` (vecteur) et une `Rotation` (axe et angle). Voir [Positionnement](/Placement/fr "Placement/fr").
* Données**Group** (`LinkList`) : une liste avec les [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr") dans le Corps.

##### Propriétés cachées de Données

* Données**Origin** (`Link`) : l'objet [App Origin](/App_OriginGroupExtension/fr "App OriginGroupExtension/fr") est la référence de position pour tous les éléments répertoriés dans Données**Group**.
* Données**\_ Group Touched** (`Bool`) : si le groupe est coché ou non.

Les propriétés cachées sont aussi décrites dans [Part Fonction](/Part_Feature/fr "Part Feature/fr").

### Vue

Base

* Vue**Display Mode Body** (`Enumeration`) : définit le mode d'affichage spécifiquement pour le Corps avec l'un des deux types.
  + `Through` (à travers) valeur par défaut, affiche tous les objets à l'intérieur du Corps, c'est-à-dire les [esquisses](/Sketch/fr "Sketch/fr"), [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"), les objets de référence (datum), etc... Ce mode permet de visualiser les opérations partielles effectuées à l'intérieur du Corps et c'est donc le mode recommandé lors de l'ajout et de la modification de fonctions. Sélectionnez la fonction spécifique et définissez Vue**Visibility** sur `true` ou appuyez sur la barre d'espace du clavier.
  + `Tip` affiche uniquement la forme finale du corps, qui est définie par la propriété Données**Tip**. Tout le reste, y compris les [esquisses](/Sketch/fr "Sketch/fr"), les [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"), les références, etc... ne sont pas affichées même s'elles sont visibles dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Ce mode est recommandé lorsque le Corps n'a pas besoin d'être modifié davantage, aussi une forme fixe est affichée. Ce mode est également recommandé lorsque vous souhaitez sélectionner les sous-éléments (sommets, arêtes et faces) de la forme finale à utiliser avec d'autres outils d'ateliers.

## Concept du Corps

### Solide contigu unique

Un PartDesign Corps est destiné à modéliser un solide contigu unique. Le sens de "contigu" est un élément fait d'une seule pièce, sans pièces mobiles ou solides déconnectés. Des exemples de solides contigus sont ceux qui sont fabriqués à partir d'une seule pièce de matière première par un procédé de coulée, de découpe ou de fraisage. Par exemple, un écrou, une rondelle et un boulon se compose chacun d'une seule pièce solide en métal, sans pièces mobiles, de sorte que chacun peut être modélisé par un PartDesign Corps. Les objets créés en soudant deux pièces peuvent également être modélisés par un seul Corps tant que le joint de soudure est solide et non destiné à être cassé.

Une fois que ces solides contigus sont rassemblés dans un certain type d'arrangement, ils deviennent alors un "assemblage". Dans un assemblage, les objets ne sont pas fusionnés, mais simplement "empilés" ou placés côte à côte et restent des objets individuels.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

À gauche : trois solides contigus individuels, chacun modélisé par un PartDesign Corps.  
À droite : les différents Corps (Body) réunis en un assemblage.

### Modification des fonctions

Un PartDesign Corps est conçu pour fonctionner en créant un solide initial, soit à partir d'une [esquisse](/Sketch/fr "Sketch/fr") soit à partir d'une [forme primitive](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), puis en la modifiant par le biais de ["fonctions"](/PartDesign_Feature/fr "PartDesign Feature/fr") pour ajouter ou enlever de la matière de la forme précédente. Pour une explication complète, voir [Édition de fonctions](/Feature_editing/fr "Feature editing/fr").

Un PartDesign Corps effectuera une [union](/Part_Fuse/fr "Part Fuse/fr") automatique des éléments solides à l'intérieur de celui-ci. Cela signifie que (1) les solides partiels doivent être en contact et (2) que les solides déconnectés ne sont pas autorisés.

![](/images/PartDesign_Body_two_intersection.png) ![](/images/PartDesign_Body_two_fusion.png)

À gauche : deux solides individuels qui se coupent.  
À droite : un PartDesign Corps unique avec deux [fonctions additives](/PartDesign_Feature/fr "PartDesign Feature/fr"). Elles sont automatiquement fusionnées ensemble, donc au lieu de se recouper, elles forment un solide contigu unique.

![](/images/PartDesign_Body_non-contiguous.png)

À gauche : deux solides déconnectés. Ce n'est pas un PartDesign Corps valide.  
À droite : deux solides se touchant. Cela se traduit par un PartDesign Corps valide.  
La nouvelle [fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") doit toujours entrer en contact avec la fonction précédente ou l'intersecter afin qu'elle lui soit fusionnée et devienne un solide contigu unique.

*Remarque :* d'autres programmes de CAO comme Catia autorisent les solides non contigus dans le même "Corps". Jusqu'à la v0.19, FreeCAD ne le permet toujours pas. Il y a eu des discussions sur le [FreeCAD forum](https://forum.freecadweb.org/index.php) sur la levée de cette restriction, mais aucune décision concrète n'a été prise. Si vous souhaitez en savoir plus ou présenter différents points de vue, veuillez en discuter dans le [forum](https://forum.freecadweb.org/index.php).

## Explication détaillée des propriétés

### Statut actif

Un document ouvert peut contenir plusieurs Corps. Pour ajouter une nouvelle fonctionnalité à un Corps spécifique, il doit être rendu *actif*. Un Corps actif sera affiché dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") avec la couleur d'arrière-plan spécifiée par la valeur **Active container** dans l'[éditeur de préférences](/Preferences_Editor/fr#Couleurs "Preferences Editor/fr") (par défaut, bleu clair). le Corps actif sera également affiché en gras.

Pour activer ou désactiver un Corps :

* Double-cliquez dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou
* Ouvrez le menu contextuel (clic droit) et sélectionnez **Toggle active body** (Activer/Désactiver le corps).

L'activation d'un Corps bascule automatiquement vers l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Un seul Corps ne peut être actif à la fois.

![](/images/PartDesign_Body_active.png)

Document avec deux PartDesign Corps dont le second est actif.

### Origine

L'Origine se compose des trois axes standard (X, Y, Z) et de trois plans standard (XY, XZ et YZ). Des [esquisses](/Sketch/fr "Sketch/fr") et autres objets peuvent être attachés à ces éléments lors de leur création.

1. Créez le Corps.
2. Si le Corps (Body) est sélectionné dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") lorsque le ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") est enfoncé, le [panneau des tâches](/Task_panel/fr "Task panel/fr") s'ouvrira pour permettre de sélectionner un des plans.
3. Si le Corps n'est pas sélectionné, sélectionnez l'origine à la place et rendez-le visible dans la [vue 3D](/3D_view/fr "3D view/fr") en appuyant sur la barre espace du clavier. Développez également l'objet Origin pour voir les axes et les plans.
4. Sélectionnez un des plans, soit dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") soit dans la [vue 3D](/3D_view/fr "3D view/fr"), puis appuyez sur ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). L'esquisse sera créée sur le plan choisi.

Le même processus peut être utilisé lors de la création d'une géométrie de référence auxiliaire comme des [PartDesign Lignes](/PartDesign_Line/fr "PartDesign Line/fr"), [PartDesign Plans](/PartDesign_Plane/fr "PartDesign Plane/fr") et [PartDesign Systèmes de coordonnées](/PartDesign_CoordinateSystem/fr "PartDesign CoordinateSystem/fr").

*Remarque :* l'Origine est un objet [App Origin](/App_OriginGroupExtension/fr "App OriginGroupExtension/fr") (classe `App::Origin`) tandis que les axes et les plans sont respectivement des objets de type `App::Line` et `App::Plane`. Chacun de ces éléments peut être masqué et non masqué individuellement avec la barre espace. Cela est utile pour choisir la référence correcte lors de la création d'autres objets.

*Remarque 2 :* tous les éléments à l'intérieur du Corps sont référencés à l'origine du Corps, ce qui signifie que le Corps peut être déplacé et tourné en référence au système de coordonnées global sans affecter le placement des éléments à l'intérieur.

![](/images/PartDesign_Body_Origin_tree.png) ![](/images/PartDesign_Body_Origin_view.png)

À gauche : PartDesign Origin du Corps dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et telle qu'elle apparaît affichée dans la [vue 3D](/3D_view/fr "3D view/fr").  
À droite : représentation des éléments Origin dans la [vue 3D](/3D_view/fr "3D view/fr").

### Base Feature

La Base Feature (fonction de base) est la première [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") dans le Corps quand le Corps est basé sur une autre forme solide. Ce solide peut être créé par n'importe quel atelier ou importé à partir d'un fichier externe, par exemple un fichier STEP.

![](/images/PartDesign_Body_BaseFeature_tree.png)

Deux PartDesign Corps, chacun avec une seule Base Feature, issus de solides créés précédemment.

Pour créer la fonction de base :

1. sélectionner une forme solide externe à n'importe quel Corps et
2. appuyer sur ![](/images/PartDesign_Body.svg) Créer un Corps. Cela créera un nouveau Corps avec une seule Base Feature.

*Remarque :* vous ne pouvez pas sélectionner un Corps existant ou l'une de ses [fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr") lorsque vous appuyez sur ![](/images/PartDesign_Body.svg) Créer un corps.

Si vous avez déjà un Corps, vous pouvez créer la fonction de base de cette manière :

* dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), choisir un objet et faites-le glisser à l'intérieur du Corps, ou
* dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), modifiez la valeur de la Données**Base Feature** en appuyant sur la touche points de suspension ... et en choisissant un objet dans la liste. Dans ce cas, vous pouvez choisir un Corps existant pour être la Base Feature.

*Remarque :* le glisser-déposer ne fonctionne que pour les Corps qui n'ont pas encore de fonction de base (Base Feature).

*Remarque 2 :* si le Corps possède déjà plusieurs fonctions, lorsque vous faites glisser et déposez le solide externe, la fonction de base sera créée au début de la liste des fonctions, c'est-à-dire qu'elle sera ajoutée au début de la propriété Données**Group**.

La fonction de base (Base Feature) est entièrement facultative. Elle n'est présente que lors de l'inclusion d'un objet extérieur au Corps. Si aucun solide externe n'est inclus, vous pouvez toujours créer votre forme à l'aide d'[esquisses](/Sketch/fr "Sketch/fr"), de [protrusions](/PartDesign_Pad/fr "PartDesign Pad/fr"), de [primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr") et d'autres [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"). Dans ce cas, la propriété Données**Base Feature** reste vide.

![](/images/PartDesign_Body_BaseFeature_Tip.svg)

À gauche : un PartDesign Corps avec une fonction de base issue d'un objet solide externe et de nombreuses [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr") ultérieures en haut.  
À droite : un Corps qui n'a pas de fonction de base explicite (Base Feature).

*Remarque :* si un autre PartDesign Corps est sélectionné comme Base Feature, il doit avoir une forme. S'il est vide (pas de fonction, pas de Base Feature, ...), il en résultera une erreur.

### Tip (fonction résultante)

Le Tip (fonction résultante) est la [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") qui est exposée à l'extérieur du Corps, c'est-à-dire que si un autre outil de n'importe quel atelier (par exemple, ![](/images/Part_SimpleCopy.svg) [Part Copie simple](/Part_SimpleCopy/fr "Part SimpleCopy/fr") ou ![](/images/Part_Cut.svg) [Part Soustraction](/Part_Cut/fr "Part Cut/fr")) doit utiliser la forme du Corps, il utilisera la forme du Tip. Autrement dit, le Tip est la représentation finale du Corps comme si l'historique paramétrique n'existait pas.

![](/images/PartDesign_Body_Tip_final.svg)

À gauche : un PartDesign Corps avec l'historique paramétrique complet incluant les fonctions intermédiaires.  
À droite : le Tip est la forme finale qui peut être exportée à partir du Corps, tout en omettant l'historique du modèle.

Le Tip est automatiquement définie sur la dernière fonction créée dans le Corps. Néanmoins, il peut également être défini sur l'une des fonctions intermédiaires en ouvrant le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") (clic droit) et en choisissant **![](/images/PartDesign_MoveTip.svg) [Désigner comme fonction résultante](/PartDesign_MoveTip/fr "PartDesign MoveTip/fr")** ou en modifiant la valeur Données**Tip** du Corps dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Le fait de modifier le Tip permet en effet de revenir en arrière et d'ajouter des fonctions qui auraient dû être ajoutées plus tôt. Cela expose également une forme différente aux outils externes.

Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), le Tip du Corps est reconnue par la [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") qui a une superposition d'icônes consistant en une flèche blanche à l'intérieur d'un cercle vert.

![](/images/PartDesign_Body_Tip_tree.png)

Deux PartDesign Corps, chacun avec des [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"). Le Tip est la dernière fonction de celles-ci et est marqué par un symbole de superposition.

### Interaction avec d'autres ateliers

Par défaut, des [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr") à l'intérieur d'un Corps sont sélectionnables dans le but de modifier et d'ajouter d'autres fonctions avec les outils de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Néanmoins, il n'est pas conseillé de sélectionner les fonctions individuellement pour les utiliser avec des outils d'autres ateliers, tels que l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") et l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"), des résultats inattendus peuvent apparaitre. Si cela est fait, dans la [vue rapport](/Report_view/fr "Report view/fr"), un message d'erreur peut apparaître, *Links go out of the allowed scope* (Les liens sortent du champ d'application autorisé).

Par conséquent, pour les interactions avec d'autres ateliers, seul le Corps lui-même doit être sélectionné dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Dans les cas où il est nécessaire de sélectionner des sous-éléments spécifiques du Corps (sommets, arêtes et faces), la propriété Vue**Display Mode Body** du Corps doit être basculée sur `Tip`. Lorsque ce mode est activé, l'accès aux objets sous le Corps ([PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"), les références (datum), les [esquisses](/Sketch/fr "Sketch/fr")) sont désactivées et tout sauf le [Tip](#Tip_.28fonction_r.C3.A9sultante.29) du Corps sera caché dans la [vue 3D](/3D_view/fr "3D view/fr").

Une fois que les sous-éléments ont été utilisés avec d'autres ateliers, la Vue**Display Mode Body** peut être redéfinie sur `Through`.

![](/images/PartDesign_Body_Tip_Display_mode.svg)

À gauche : lorsque "Display Mode Body" est réglé sur `Through`, il est possible de sélectionner et d'effectuer des opérations avec la [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr"); en général, ce n'est pas recommandé.  
À droite : lorsque "Display Mode Body" est réglé sur `Tip`, toutes les sélections et opérations effectuées sur le Corps seront effectuées sur le Tip, en s'assurant que seule la forme finale du Corps est exposée.

### Gestion de la visibilité

La visibilité du Corps remplace la visibilité de tout objet qu'il contient. Si le Corps est masqué, les objets qu'il contient seront également masqués, même si leur propriété individuelle Vue**Visibility** est définie sur `true`.

Plusieurs [esquisses](/Sketch/fr "Sketch/fr") peuvent être visibles à la fois mais une seule [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") (résultat solide) peut être visible à la fois. Sélectionner une fonction cachée et appuyer sur la barre espace du clavier la rendra visible et masquera automatiquement la fonction précédemment visible.

![](/images/PartDesign_Body_Visibility.png)

PartDesign Corps : plusieurs [esquisses](/Sketch/fr "Sketch/fr") peuvent être visibles simultanément, mais une seule [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") peut être visible à la fois, que ce soit le Tip ou non.

### Ancrage

Les [PartDesign Fonctions](/PartDesign_Feature "PartDesign Feature"), tout comme les [objets planaires](/Part_Part2DObject/fr "Part Part2DObject/fr"), peuvent être ancrées à différents plans, généralement les plans standard définis par l'[Origine](#Origine) du Corps ou à des [PartDesign Plans de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") personnalisés.

Les [esquisses](/Sketch/fr "Sketch/fr") sont normalement ancrées à un plan lors de leur création. De la même manière, les [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr") peuvent également être ancrées. Ancrer ces objets à un plan permet de les déplacer dans le Corps en modifiant leur propriété Données**Attachment Offset**. Pour plus d'informations sur les modes d'ancrage, voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").

Une [PartDesign Fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") qui n'est pas ancrée sera affichée avec un symbole de superposition rouge à côté de son icône dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

![](/images/PartDesign_Body_Feature_attachment.png)

PartDesign Corps: les [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr") qui ne sont pas ancrées à un plan ou à un système de coordonnées seront affichées avec un symbole de superposition à côté de leur icône dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

### Héritage

Un PartDesign Corps est formellement une instance de la classe `PartDesign::Body`, dont le parent est une [Part Fonction](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature`) via la classe intermédiaire `Part::BodyBase` et est complétée par une extension Origin.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux du programme. L'objet `PartDesign::Body` est destiné à construire des solides 3D paramétriques et est donc dérivé de l'objet de base `Part::Feature`. Il possède une Origine pour contrôler le placement des fonctionnalités utilisées à l'intérieur.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Fonction](/Part_Feature/fr "Part Feature/fr") pour plus d'informations à propos de l'ajout d'objets au document.

Un PartDesign Corps (Body) est créé avec la méthode `addObject()` du document. Une fois qu'un Corps existe, des [PartDesign Fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr"), comme les primitives additives et soustractives, peuvent être ajoutées et attachées à ce Corps avec les méthodes `addObject()` ou `addObjects()` de ce Corps.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj.Label = "Custom label"

feat1 = App.ActiveDocument.addObject("PartDesign::AdditiveBox", "Box")
feat2 = App.ActiveDocument.addObject("PartDesign::AdditiveCylinder", "Cylinder")

obj.addObjects([feat1, feat2])
App.ActiveDocument.recompute()

```

Dans un document contenant plusieurs Corps, le [Corps actif](#Statut_actif) peut être défini par la méthode `setActiveObject` de la `ActiveView`. Le premier argument est la chaîne fixe `"pdbody"` et le deuxième argument est l'objet Corps (Body) qui doit être activé.

```
import FreeCAD as App
import FreeCADGui as Gui

doc = App.newDocument()
obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("PartDesign::Body", "Body")

Gui.ActiveDocument.ActiveView.setActiveObject("pdbody", obj1)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Body/fr&oldid=1558857>"