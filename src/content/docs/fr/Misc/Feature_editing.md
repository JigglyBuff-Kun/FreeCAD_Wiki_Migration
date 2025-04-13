---
title: Édition de fonctions
---
## Introduction

Cette page explique le processus d'édition des fonctionnalités de ![](/images/Workbench_PartDesign.svg) [l'atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

## Corps

Pour travailler avec PartDesign, il faut d'abord créer un ![](/images/PartDesign_Body.svg) [Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Le corps est un conteneur destiné à contenir un seul solide contigu. Lorsqu'un corps est créé, un objet Origine, un système de coordonnées local composé de plans de référence standard (XY, XZ, YZ) et d'axes (X, Y, Z), est automatiquement ajouté. Le solide est ensuite construit en ajoutant des fonctions. Chaque [fonction](/PartDesign_Feature/fr "PartDesign Feature/fr") est cumulative et s'ajoute ou se soustrait au résultat de la fonction précédente.

![](/images/PartDesign_Feature_example.png)

L'édition de fonctions en pratique. De gauche à droite :  
Corps avec une fonction [pavé droit](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr").  
Corps avec un pavé droit et une fonction [chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr").  
Corps avec un pavé droit, un chanfrein et une fonction [cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr").

Un document peut contenir plusieurs corps, mais un seul peut être actif. Les nouvelles fonctionnalités sont ajoutées au corps actif. Un corps peut être activé ou désactivé en double-cliquant dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Le corps activé est mis en évidence dans la vue en arborescence.

![](/images/PartDesign_Body_tree.png)

### Qu'est-ce qu'un solide contigu ?

Un solide contigu est un objet tel qu'une pièce coulée ou usinée à partir d'un seul bloc de métal. Si l'objet comporte des clous, des vis ou de la colle, il ne s'agit pas d'un solide contigu. En pratique, une chaise en bois serait composée de plusieurs corps, un pour chacun de ses sous-composants (pieds, lattes, siège, etc.).

Dans la version 1.0 de FreeCAD, une propriété expérimentale a été introduite qui permet au corps d'avoir des solides non contigus. Cette propriété peut également être définie dans les [préférences](/PartDesign_Preferences/fr#Général "PartDesign Preferences/fr") comme valeur par défaut pour les corps nouvellement créés. Ceci n'est pas destiné à être utilisé pour construire, comme dans l'exemple, une chaise dans un corps. Il s'agit d'autoriser les fonctions qui peuvent générer des solides discontinus qui seront rendus contigus par des fonctions ultérieures.

Lorsqu'un modèle nécessite plusieurs corps, comme la chaise en bois, le ![](/images/Std_Part.svg) [Part Conteneur](/Std_Part/fr "Std Part/fr") à usage général peut être utilisé pour les regrouper et déplacer l'ensemble en tant qu'unité.

### Gestion de la visibilité du corps

Par défaut, un corps expose à l'extérieur par défaut la fonction la plus récente. Cette fonction est la fonction résultante du corps. La pointe marque également l'endroit où de nouvelles caractéristiques sont ajoutées. Il est possible de redéfinir temporairement la fonction résultante en une fonction située au milieu du corps afin d'y insérer de nouveaux objets (fonctions, esquisses ou géométrie de référence). Lorsqu'une nouvelle fonction est ajoutée au corps, la visibilité de la précédente fonction est désactivée et la nouvelle fonction devient la fonction résultante.

Il ne peut y avoir qu'une seule fonction visible à la fois. Il est possible de [basculer la visibilité](/Std_ToggleVisibility/fr "Std ToggleVisibility/fr") de n'importe quelle fonction du corps, en la sélectionnant dans l'arborescence et en appuyant sur la barre d'espace, ce qui permet de revenir en arrière dans l'historique du corps. Notez que la modification de la visibilité des fonctions ne modifie pas la fonction résultante du corps.

### Déplacer et réordonner des objets

Les fonctions d'un corps peuvent être réorganisées ou déplacées vers un autre corps. Sélectionnez la fonction et cliquez avec le bouton droit de la souris pour obtenir un menu contextuel proposant les deux options. L'opération peut être empêchée si l'objet a des dépendances dans le corps source, par exemple s'il est attaché à une face. Pour déplacer une esquisse vers un autre corps, elle ne doit pas contenir de liens vers une géométrie externe.

![](/images/PartDesign_workflow.svg)

Représentation schématique du flux de travail de PartDesign

## Géométries de référence

Les géométries de référence consistent en des plans personnalisés, des droites, des points ou des formes liées de l'extérieur du corps. Elles peuvent être créées afin de servir de référence à des esquisses et des fonctions. Il y a plusieurs options d'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") aux objets de référence.

Dans FreeCAD, les plans de référence sont utiles si vous placez des esquisses dans des orientations non standard, c'est-à-dire sur des plans décalés ou pivotés autour des trois axes principaux. Mais comme les esquisses peuvent également être placées dans des orientations non standard et qu'elles disposent des mêmes options d'ancrage que les plans de référence, il n'est souvent pas nécessaire de les utiliser. Les plans de référence sont plus utiles si plusieurs esquisses ont la même orientation non standard. L'ajustement de l'orientation du plan de référence entraîne l'ajustement de toutes les esquisses associées et des fonctions créées à partir de ces esquisses.

Bien que la version 1.0 de FreeCAD dispose déjà d'un code permettant d'atténuer le [problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr"), la meilleure pratique consiste toujours à ancrer les esquisses et les plans de référence aux plans de base de l'origine du corps chaque fois que cela est possible. La référence à une géométrie générée (géométrie résultant d'une opération sur une fonction, par exemple une ptrotrusion ou une cavité) peut néanmoins donner lieu à des modèles moins stables. Voir [Conseils pour la création de modèles robustes](#Conseils_pour_la_création_de_modèles_robustes) ci-dessous.

## Conseils pour la création de modèles robustes

Le principe de conception paramétrique sous-tend que quand les valeurs de certains paramètres sont changées, les étapes subséquentes seront automatiquement mises à jour selon ces nouvelles valeurs. Toutefois, quand des changements importants sont apportés, le modèle peut casser en raison du problème de [problème de nommage topologique](/Topological_naming_problem/fr "Topological naming problem/fr") qui est toujours non résolu dans FreeCAD. La casse peut être minimisée si vous respectez les principes de conception suivants :

* Évitez d'ancrer les esquisses et la géométrie de référence personnalisée à la géométrie générée, c'est-à-dire à toute face, arête ou sommet du solide du modèle. Ancrez-les plutôt aux plans/axes standard. Les esquisses ancrées aux plans/axes standard ou à la géométrie de référence ancrée aux plans/axes standard ne seront pas réancrées inopinément à une référence différente. Utilisez les décalages d'ancrage si nécessaire.
* Utilisez une "esquisse principale". L'esquisse principale étant réalisée avant le reste du modèle, elle ne peut faire référence qu'aux plans/axes standard.
  + L'esquisse principale doit être aussi simple que possible et contenir les éléments géométriques de base de votre modèle.
  + Les éléments de l'esquisse principale peuvent être référencés lors de la modélisation des éléments suivants.
  + L'esquisse principale peut être la première esquisse du corps ou être complètement en dehors du corps. Dans le premier cas, elle peut être référencée directement en tant que géométrie externe, dans le second, elle peut être référencée via une ![](/images/PartDesign_ShapeBinder.svg) [forme liée](/PartDesign_ShapeBinder/fr "PartDesign ShapeBinder/fr") ou une ![](/images/PartDesign_SubShapeBinder.svg) [sous forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr").
* Ne créez pas de (sous) forme liée à partir de la géométrie générée. Gardez à l'esprit que les (sous) formes liées peuvent poser problème si la géométrie est supprimée de l'esquisse sur laquelle elle est basée.
* Essayez toujours de référencer d'abord une esquisse ou une géométrie d'esquisse plutôt qu'une géométrie générée. Si vous devez inévitablement référencer une géométrie générée, utilisez la première fonction où se trouve l'élément à référencer. Les modifications apportées aux étapes ultérieures n'endommageront pas votre modèle.
* Utilisez les finitions, tels que les filets et les chanfreins, le plus tard possible dans l'arbre des fonctions.

## Tutoriels

La page des [tutoriels](/Tutorials/fr "Tutorials/fr") fournit quelques exemples d'utilisation de la méthode d'édition des fonctions de l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

* [PartDesign Tutoriel pour créer une pièce simple](/Creating_a_simple_part_with_PartDesign/fr "Creating a simple part with PartDesign/fr")
* [PartDesign Tutoriel d'introduction V0.19](/Basic_Part_Design_Tutorial_019/fr "Basic Part Design Tutorial 019/fr")
* [Tutoriel La base de l'ancrage](/Basic_Attachment_Tutorial/fr "Basic Attachment Tutorial/fr")

## En relation

* [Géométrie Solide Constructive](/Constructive_solid_geometry/fr "Constructive solid geometry/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_editing/fr&oldid=1512979>"