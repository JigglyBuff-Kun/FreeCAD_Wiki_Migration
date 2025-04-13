---
title: TechDraw Modèles
---
## Description

Chaque page TechDraw est basée sur un objet Template. Le modèle fournit une zone dans l'arrière-plan de la page pour insérer des vues, des symboles et d'autres objets d'annotation, et définit la taille du papier. Seuls les éléments situés dans la zone de dessin seront rendus pour l'exportation ou l'impression.

Le modèle peut également contenir des graphiques tels qu'un cadre définissant la zone de dessin, y compris les champs d'index, les marques de pliage et, éventuellement, un bloc de titre qui contient à son tour des textes fixes et [modifiable](/Svg_Namespace/fr#freecad:editable "Svg Namespace/fr"). Le cartouche peut également être inséré séparément en tant que [symbole](/TechDraw_Symbol/fr "TechDraw Symbol/fr").

Les modèles, comme des symboles, sont des fichiers [SVG](/SVG/fr "SVG/fr") qui peuvent être créés et modifiés en dehors de FreeCAD, ou bien une application telle que [Inkscape](https://fr.wikipedia.org/wiki/Inkscape), ou avec un simple éditeur de texte. Les deux peuvent contenir des champs de texte modifiables, mais ils utilisent des outils d'édition différents.

Un nouvel outil de remplissage automatique ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) permet de remplir automatiquement les champs de texte modifiables d'un modèle lorsqu'il est inséré. Cela nécessite des modèles qui utilisent le nouvel attribut [freecad:autofill](/Svg_Namespace/fr#freecad:autofill "Svg Namespace/fr"). Les noms d'attributs suivants sont valables pour le remplissage automatique : "auteur", "date", "organisation", "échelle", "feuille", "titre", "numéro de page" et "nombre de pages".

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Template a les propriétés suivantes :

Base

* Données**Orientation** (`Enumeration`) : `Portrait` ou `Landscape`.

Page Properties

* Données**Width** (`Length`) : largeur du papier en mm.
* Données**Height** (`Length`) : hauteur du papier en mm.
* Données (Hidden)**Editable Texts** (`Map`) : Liste clé/valeur (Key:Value) des textes modifiables dans le modèle.

Template

* Données**Page Result** (`FileIncluded`) : copie du fichier modèle original comprenant toutes les modifications apportées aux textes modifiables. Cela permet aux utilisateurs qui n'ont pas de copie du fichier modèle de voir la page telle qu'elle est prévue. Cette option n'est généralement pas utile pour les utilisateurs finaux.
* Données**Template** (`File`) : un pointeur sur la copie du fichier modèle original qui est incorporé dans ce fichier \*.FCStd, ou un chemin d'accès à un modèle accessible sur la machine actuelle. Voir le [paragraphe suivant](#Sélectionner_un_autre_fichier_modèle) pour des informations sur la façon de modifier le modèle.

## Sélectionner un autre fichier modèle

Pour sélectionner un modèle différent pour un dessin :

1. Localisez l'objet Page souhaité dans la [vue par arborescence](/Tree_view/fr "Tree view/fr").
2. Développez le nœud Page si nécessaire.
3. Sélectionnez l'objet Modèle.
4. Dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), cliquez dans le champ de Données**Template**.
5. Appuyez sur le bouton ... (point de suspension) qui apparaît.
6. Une fenêtre de dialogue ouvre le dossier dans lequel se trouve le modèle en cours. Si la page a été créée dans la session FreeCAD en cours, il s'agit du dossier du modèle par défaut (tel que défini dans les [TechDraw Préférences](/TechDraw_Preferences/fr#Fichiers "TechDraw Preferences/fr")).
7. Vous pouvez aussi naviguer vers un autre dossier.
8. Sélectionnez un autre fichier modèle.
9. Appuyez sur le bouton OK.

Si vous avez modifié un fichier modèle et que vous souhaitez mettre à jour une page créée dans la session FreeCAD en cours qui utilise ce modèle, sélectionnez d'abord temporairement un fichier différent, puis sélectionnez à nouveau le fichier modifié.

## Modèles personnalisés

Un nombre limité de modèles pré-formatés avec différentes tailles de page sont inclus avec FreeCAD. Ils se trouvent dans :

```
$INSTALL_DIR/Mod/TechDraw/Templates/

```

Où `$INSTALL_DIR` est le répertoire où FreeCAD a été installé, par exemple :

```
/usr/share/freecad/Mod/TechDraw/Templates/

```

Les modèles personnalisés peuvent également être spécifiés par défaut dans [TechDraw Préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr").

Voir aussi [Comment créer un modèle TechDraw personnalisé](/TechDraw_TemplateHowTo/fr "TechDraw TemplateHowTo/fr"), ou, si vous préférez les modèles générés par script, [TechDraw Création de modèles](/TechDraw_TemplateGenerator/fr "TechDraw TemplateGenerator/fr") et [Macro TemplateHelper](/Macro_TemplateHelper/fr "Macro TemplateHelper/fr").

## Remarques

* La bibliothèque de FreeCAD utilise pour traiter les SVG **ne supporte que la spécification svg-tiny**. En particulier : "SVG Tiny does not support gradients, transparency, clipping, masks, symbols, patterns, underline text, strike through text, vertical text, or SVG filter effects." (extrait de l'aide d'Adobe Illustrator). L'utilisation de ces fonctionnalités dans votre modèle personnalisé entraînera des problèmes de rendu.

* Les clauses de transformation Svg **peuvent causer des problèmes** dans les modèles personnalisés. Voir la discussion Stackoverflow sur [suppression des clauses de transformation dans les fichiers SVG (en)](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files), surtout si Inkscape en utilise trop. Mais elles ne peuvent pas être évitées si vous avez besoin d'un texte pivoté dans votre modèle.

* La clause **xml:space="preserve"** pose parfois des problèmes de taille et de positionnement du texte. Il est préférable d'éviter/de supprimer cette clause du code SVG de votre modèle personnalisé.

* Les modèles fonctionnent mieux lorsqu'ils ne contiennent aucun code SVG superflu (appelé par certains "SVG garbage"). Il y a un bon article sur [supprimer les déchets des SVG ici](https://freecad-gost.ru/news/gost-templates-techdraw-09-01-2020/). L'article est en russe.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Templates/fr&oldid=1496076>"