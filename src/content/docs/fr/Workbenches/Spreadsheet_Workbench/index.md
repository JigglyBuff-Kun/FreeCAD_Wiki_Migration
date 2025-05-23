---
title: Atelier Spreadsheet
---

![](/images/Workbench_Spreadsheet.svg)

Icône de l'atelier Spreadsheet

## Introduction

L'![](/images/Workbench_Spreadsheet.svg) atelier Spreadsheet vous permet de créer et de modifier des feuilles de calcul, d'utiliser les données de la feuille de calcul comme paramètres dans un modèle, de remplir la feuille de calcul avec des données extraites d'un modèle, d'effectuer des calculs et d'exporter les données vers d'autres applications de feuilles de calcul telles que LibreOffice ou Microsoft Excel.

![](/images/Spreadsheet_screenshot.jpg)

Une feuille de tableur avec un certain nombre de cellules remplies de texte et de quantités

## Outils

- ![](/images/Spreadsheet_CreateSheet.svg) [Feuille de calcul](/Spreadsheet_CreateSheet/fr "Spreadsheet CreateSheet/fr") : créer une nouvelle feuille de calcul.

- ![](/images/Spreadsheet_Import.svg) [Importer](/Spreadsheet_Import/fr "Spreadsheet Import/fr") : importer un fichier CSV dans une feuille de calcul.

- ![](/images/Spreadsheet_Export.svg) [Exporter](/Spreadsheet_Export/fr "Spreadsheet Export/fr") : exporter un fichier CSV depuis une feuille de calcul.

- ![](/images/Spreadsheet_MergeCells.svg) [Fusionner des cellules](/Spreadsheet_MergeCells/fr "Spreadsheet MergeCells/fr") : fusionner les cellules sélectionnées.

- ![](/images/Spreadsheet_SplitCell.svg) [Diviser une cellule](/Spreadsheet_SplitCell/fr "Spreadsheet SplitCell/fr") : diviser les cellules précédemment fusionnées.

- ![](/images/Spreadsheet_AlignLeft.svg) [Alignement à gauche](/Spreadsheet_AlignLeft/fr "Spreadsheet AlignLeft/fr") : aligner le contenu des cellules sélectionnées vers la gauche.

- ![](/images/Spreadsheet_AlignCenter.svg) [Alignement au centre](/Spreadsheet_AlignCenter/fr "Spreadsheet AlignCenter/fr") : aligner le contenu des cellules sélectionnées au centre, horizontalement.

- ![](/images/Spreadsheet_AlignRight.svg) [Alignement à droite](/Spreadsheet_AlignRight/fr "Spreadsheet AlignRight/fr") : aligner le contenu des cellules sélectionnées vers la droite.

- ![](/images/Spreadsheet_AlignTop.svg) [Alignement en haut](/Spreadsheet_AlignTop/fr "Spreadsheet AlignTop/fr") : aligner le contenu des cellules sélectionnées en haut.

- ![](/images/Spreadsheet_AlignVCenter.svg) [Alignement vertical au centre](/Spreadsheet_AlignVCenter/fr "Spreadsheet AlignVCenter/fr") : aligner le contenu des cellules sélectionnées au centre, verticalement.

- ![](/images/Spreadsheet_AlignBottom.svg) [Alignement en bas](/Spreadsheet_AlignBottom/fr "Spreadsheet AlignBottom/fr") : aligner le contenu des cellules sélectionnées vers le bas.

- ![](/images/Spreadsheet_StyleBold.svg) [Texte en gras](/Spreadsheet_StyleBold/fr "Spreadsheet StyleBold/fr") : fait basculer le contenu des cellules sélectionnées vers ou depuis le style _gras_.

- ![](/images/Spreadsheet_StyleItalic.svg) [Texte en italique](/Spreadsheet_StyleItalic/fr "Spreadsheet StyleItalic/fr") : fait basculer le contenu des cellules sélectionnées vers ou depuis le style _italique_.

- ![](/images/Spreadsheet_StyleUnderline.svg) [Texte souligné](/Spreadsheet_StyleUnderline/fr "Spreadsheet StyleUnderline/fr") : fait basculer le contenu des cellules sélectionnées vers ou depuis le style _souligné_.

- ![](/images/Spreadsheet_SetAlias.svg) [Alias](/Spreadsheet_SetAlias/fr "Spreadsheet SetAlias/fr") : définir l'alias d'une cellule sélectionnée.

* Noir et Blanc définissent les couleurs de premier plan et d'arrière-plan des cellules sélectionnées.

## Préférences

- ![](/images/Preferences-spreadsheet.svg) [Préférences](/Spreadsheet_Preferences/fr "Spreadsheet Preferences/fr") : les préférences pour l'atelier Spreadsheet. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Supprimer des cellules peut être dangereux

Remarquez que la suppression des cellules contenant des données peut casser la feuille de calcul et votre modèle s'il repose sur la feuille de calcul. Vous n'êtes pas prévenu si cela se produit.

## Insérer et supprimer des lignes et des colonnes

Des lignes et des colonnes peuvent être insérées ou supprimées en faisant un clic droit sur un en-tête de ligne ou de colonne et en sélectionnant l'option appropriée dans le menu contextuel. Il est possible de sélectionner d'abord plusieurs lignes ou colonnes. Soit en maintenant la touche Ctrl enfoncée tout en sélectionnant les en-têtes, soit en maintenant le bouton gauche de la souris enfoncé et en faisant glisser la souris.

## Éditer des cellules

Le contenu d'une cellule peut être modifié en sélectionnant la cellule et en entrant une valeur dans la fenêtre de saisie **Contenu** en haut de la fenêtre. Pour modifier une cellule sur place, sélectionnez-la et appuyez sur F2 ou double-cliquez dessus.

## Supprimer des cellules

Pour supprimer une ou plusieurs cellules, sélectionnez-les et appuyez sur Suppr. Cela supprimera leur contenu, leurs propriétés et leurs alias. Pour supprimer uniquement le contenu d'une cellule, il convient de l'éditer.

## Couper et copier-coller des cellules

Les opérations couper et copier-coller peuvent être utilisées sur les cellules des feuilles de calcul. Vous pouvez utiliser les raccourcis normaux pour ces opérations : Ctrl+X, Ctrl+C et Ctrl+V respectivement. Pour sélectionner plusieurs cellules, maintenez la touche Ctrl enfoncée tout en sélectionnant, ou maintenez le bouton gauche de la souris enfoncé et faites glisser pour sélectionner une plage de cellules rectangulaires.

Les opérations couper et copier enregistrent le contenu, les propriétés et les alias des cellules dans le presse-papiers. L'opération de collage écrit les données de manière à ce que le contenu de la cellule supérieure gauche des données stockées soit déposé dans la cellule active. Les autres contenus stockés sont placés par rapport à cette cellule. Les formules sont mises à jour en conséquence. Les alias ne sont collés que s'ils sont uniques.

## Propriétés d'une cellule

Les propriétés d'une cellule de feuille de calcul peuvent être modifiées en cliquant droit sur la cellule et en sélectionnant **Propriétés...** dans le menu contextuel. La boîte de dialogue suivante s'affiche :

![](/images/SpreadsheetCellPropDialog.png)

Comme mentionné dans les onglets, les propriétés suivantes peuvent être changées :

- Couleur : couleur du texte et couleur d'arrière-plan
- Alignement : alignement horizontal et vertical du texte
- Style : style du texte : gras, italique, souligné
- Affichage unités : affiche l'unité de la cellule. Veuillez lire la section [Unités](#Unités) ci-dessous.
- Alias : définit un [alias](/Spreadsheet_SetAlias/fr "Spreadsheet SetAlias/fr") pour cette cellule. Cet alias peut être utilisé dans les formules de cellule et aussi dans les [expressions](/Expressions/fr "Expressions/fr") générales; voir la section [Données de la feuille de calcul dans les expressions](#Donn.C3.A9es_de_la_feuille_de_calcul_dans_les_expressions) pour plus d'informations.

## Expressions dans les cellules

Une cellule de feuille de calcul peut contenir un nombre, un texte ou une expression. Les expressions doivent commencer par le signe égal "=".

Les expressions de cellules peuvent contenir des nombres, des fonctions, des références à d'autres cellules et des références à des propriétés du modèle (voir [Limitations actuelles](#Limites_actuelles) ci-dessous). Une cellule peut être référencée par son adresse (lettre majuscule de la colonne + numéro de ligne, par exemple B4) ou par son [alias](/Spreadsheet_SetAlias/fr "Spreadsheet SetAlias/fr").

**Remarque :** les expressions de cellules sont traitées par FreeCAD comme du code de programmation. Par conséquent, lorsque vous modifiez une cellule, le contenu que vous voyez peut ne pas suivre vos paramètres d'affichage :

- Le séparateur décimal est toujours un point. Mais les virgules peuvent également être utilisées lors de la saisie des valeurs.
- Le nombre de décimales affichées peut différer de vos [paramètres de préférences](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr").

Les références aux objets dans le modèle sont expliquées ci-dessous [Références aux données CAO](#R.C3.A9f.C3.A9rences_aux_donn.C3.A9es_CAO). L'utilisation des valeurs de cellule de feuille de calcul pour définir les propriétés du modèle est expliquée ci-dessous [Données de la feuille de calcul dans les expressions](#Donn.C3.A9es_de_la_feuille_de_calcul_dans_les_expressions). Pour plus d'informations sur les expressions et les fonctions disponibles, voir [Expressions](/Expressions/fr "Expressions/fr").

## Interaction entre les feuilles de calcul et le modèle de CAO

Les données contenues dans les cellules d'une feuille de calcul peuvent être utilisées dans les expressions de paramètres de modèle de CAO. Ainsi, une feuille de calcul peut être utilisée comme source pour les valeurs de paramètres utilisées dans un modèle, regroupant efficacement les valeurs à un endroit. Lorsque les valeurs sont modifiées dans la feuille de calcul, elles sont propagées dans tout le modèle.

De même, les propriétés des objets de modèle CAO peuvent être utilisées dans les expressions des cellules de la feuille de calcul. Cela permet d'utiliser des propriétés d'objet telles que le volume ou la surface dans la feuille de calcul. Si le nom d'un objet dans le modèle CAO est modifié, le changement sera automatiquement propagé à toutes les références dans les expressions de feuille de calcul en utilisant le nom qui a été modifié.

Plusieurs feuilles de calcul peuvent être utilisées dans un document. Une feuille de calcul peut être identifiée à l'aide de son nom ou de son étiquette.

FreeCAD attribuera automatiquement un nom unique à une feuille de calcul lors de sa création. Ces noms suivent le modèle `Spreadsheet`, `Spreadsheet001`, `Spreadsheet002` et ainsi de suite. Le nom ne peut pas être modifié et il n'est pas visible dans les propriétés de la feuille de calcul. Il peut être utilisé pour faire référence à la feuille de calcul dans une [Expression](/Expressions/fr "Expressions/fr") (voir ci-dessous [Données de la feuille de calcul dans les expressions](#Donn.C3.A9es_de_la_feuille_de_calcul_dans_les_expressions).)

L'étiquette d'une feuille de calcul est automatiquement définie sur le nom de la feuille de calcul lors de sa création. Contrairement au nom, l'étiquette peut être modifiée, par exemple dans le panneau des propriétés ou à l'aide de l'action Renommer du menu contextuel. Par défaut, FreeCAD n'accepte pas les étiquettes en double, mais il existe une [préférence](/Preferences_Editor/fr#Document "Preferences Editor/fr") qui permet de passer outre. Les feuilles de calcul avec des étiquettes dupliquées dans le même document ne peuvent pas être référencées par leur étiquette.

FreeCAD vérifie les dépendances cycliques. Voir [Limitations actuelles](#Limites_actuelles).

### Références aux données CAO

Comme indiqué ci-dessus, il est possible de référencer les données du modèle CAO dans des expressions de feuille de calcul.

Le tableau suivant montre quelques exemples en supposant que le modèle a une fonctionnalité nommée "MyCube" :

| Donnée CAO                                          | Cellule dans la feuille de calcul | Résultat                     |
| --------------------------------------------------- | --------------------------------- | ---------------------------- |
| Longueur paramétrique d'un cube dans l'atelier Part | `=MyCube.Length`                  | Longueur en mm               |
| Volume du cube                                      | `=MyCube.Shape.Volume`            | Volume en mm³ sans unité     |
| Type de la forme du cube                            | `=MyCube.Shape.ShapeType`         | Chaîne de caractère : Solid  |
| Nom du cube                                         | `=MyCube.Label`                   | Chaîne de caractère : MyCube |
| Coordonnée x du centre de gravité du cube           | `=MyCube.Shape.CenterOfMass.x`    | Coordonnée en mm sans unité  |

### Données de la feuille de calcul dans les expressions

Pour utiliser les données de la feuille de calcul dans d'autres parties de FreeCAD, vous allez généralement créer une [Expression](/Expressions/fr "Expressions/fr") qui fait référence à la feuille de calcul et à la cellule contenant les données que vous souhaitez utiliser. Vous pouvez identifier les feuilles de calcul par le nom ou par l'étiquette, et vous pouvez identifier les cellules par adresse ou par alias. L'autocomplétion est disponible pour toutes les formes de référencement.

|                     | Feuille de calcul par le nom | Feuille de calcul par l'étiquette |
| ------------------- | ---------------------------- | --------------------------------- |
| Cellule par adresse | `=Spreadsheet042.B5`         | `=<<MySpreadsheet>>.B5`           |
| Cellule par l'alias | `=Spreadsheet042.MyAlias`    | `=<<MySpreadsheet>>.MyAlias`      |

La méthode recommandée pour faire référence aux données d'une feuille de calcul est d'utiliser l'étiquette de la feuille de calcul et le nom de l'alias de la cellule. Pour une explication plus approfondie des avantages et des inconvénients des modes de référencement, consultez la section développée ci-dessous.

L'utilisation de l'étiquette de la feuille de calcul présente l'avantage de pouvoir être librement modifiée pour décrire le contenu de la feuille de calcul. Il est également plus facile d'identifier la feuille de calcul utilisée car le texte de l'expression correspond à l'étiquette affichée dans les vues du modèle et des propriétés. Si vous décidez de modifier l'étiquette d'une feuille de calcul, les références existantes au contenu de la feuille de calcul seront mises à jour, de sorte que vous ne casserez pas vos expressions en renommant la feuille de calcul. Le nom interne de la feuille de calcul n'est pas facilement disponible ailleurs que dans l'éditeur d'expression, donc si vous utilisez le nom interne et décidez plus tard de renommer les feuilles de calcul, vous pourriez avoir du mal à retracer vos données d'expression jusqu'à leur source.

Sachez que lorsque vous créez une nouvelle feuille de calcul, le nom et l'étiquette sont identiques, il est donc facile d'utiliser accidentellement le nom de la feuille de calcul au lieu de l'étiquette. Un moyen simple d'éviter cela est de donner à la feuille de calcul un nom significatif avant de commencer à l'utiliser dans des expressions.

Bien que vous puissiez utiliser le numéro de ligne et de colonne dans une expression pour référencer une cellule, la meilleure pratique consiste à donner à la cellule un nom d'alias et à l'utiliser. Voir [Propriétés d'une cellule](#Propri.C3.A9t.C3.A9s_d.27une_cellule) ci-dessus pour savoir comment définir l'alias. Par exemple, si les données de la cellule B1 contenaient le paramètre de longueur pour un objet, un nom d'alias de `MyObject_Length` permettrait à la valeur d'être appelée `<<MyParams>>.MyObject_Length` au lieu de `Spreadsheet.B1`. En plus d'être beaucoup plus faciles à lire et à comprendre, les noms d'alias sont également beaucoup plus faciles à modifier si vous décidez d'ajuster la structure de votre feuille de calcul. L'utilisation d'un alias présente également l'avantage qu'il est plus facile de voir quelles cellules sont utilisées pour contrôler d'autres parties du document. Notez que FreeCAD ajustera automatiquement les références de position dans les expressions si vous insérez ou supprimez des lignes et des colonnes dans la feuille de calcul, donc même si vous utilisez des numéros de ligne et de colonne dans une expression, vous pouvez insérer des lignes et des colonnes sans casser les références aux cellules environnantes.

### Modèles complexes et recalculs

La modification d'une feuille de calcul déclenchera un recalcul du modèle 3D, même si les modifications n'affectent pas le modèle. Pour un modèle complexe, un recalcul peut prendre beaucoup de temps et devoir attendre après chaque édition est bien sûr assez ennuyeux.

Il existe trois solutions pour y remédier :

1. Ignorez temporairement les recalculs :
   - Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), clic droit sur le document ![](/images/Document.svg) qui contient la feuille de calcul.
   - Sélectionnez l'option **Ignorer les recalculs** dans le menu contextuel.
   - Il y a un gros inconvénient à cette solution. Les nouvelles valeurs entrées dans la feuille de calcul ne seront pas affichées tant que le document n'aura pas été recalculé. Au lieu de cela, `#PENDING` est affiché.
   - Vous pouvez soit recalculer manuellement, en utilisant la commande [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr"), soit désactiver **Ignorer les recalculs** lorsque vous avez terminé l'édition.
2. Utilisez une macro pour ignorer automatiquement les recalculs lors de la modification d'une feuille de calcul :
   - Téléchargez et exécutez [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
   - Cette solution économise quelques étapes par rapport à la première solution, mais présente également l'inconvénient mentionné.
3. Mettez la feuille de calcul dans un [fichier séparé](/File_Format_FCStd/fr "File Format FCStd/fr") :
   - Vous pouvez référencer des données de feuille de calcul à partir d'un fichier externe .FCStd avec cette syntaxe: `=NameOfFile#<<MySpreadsheet>>.MyAlias`.
   - L'avantage d'avoir la feuille de calcul dans un autre fichier par rapport à la désactivation des recalculs est que la feuille de calcul elle-même est recalculée.
   - L'inconvénient est que le modèle ne recalculera pas automatiquement après les modifications apportées à la feuille de calcul.
   - Dans le scénario où vous ouvrez d'abord le fichier "tableur", changez une ou plusieurs valeurs puis ouvrez le fichier "modèle", il n'y aura aucune indication que le modèle doit être recalculé. Mais si les deux fichiers sont ouverts, l'icône [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr") se mettra à jour correctement pour le fichier "modèle" après les modifications apportées au fichier "tableur".

## Unités

Le tableur intègre une notion de dimension (unités) associée aux valeurs de cellule. Un numéro entré sans unité associée n'a pas de dimension. L'unité doit être entrée immédiatement après la valeur numérique, sans espace intermédiaire. Si un nombre a une unité associée, cette unité sera utilisée dans tous les calculs. Par exemple, la multiplication de deux longueurs avec l'unité mm donne une surface avec l'unité mm².

Si une cellule contient une valeur qui représente une dimension, vous devez la saisir avec son unité associée. Bien que dans de nombreux cas simples, on puisse se débrouiller avec une valeur sans dimension, il est déconseillé de ne pas entrer l'unité. Si une valeur représentant une dimension est entrée sans son unité associée, certaines séquences d'opérations obligent FreeCAD à alerter sur les unités incompatibles dans une expression lorsqu'il apparaît que celle-ci doit être validée. (Cela peut être mieux compris en consultant ce [sujet (en)](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) dans les forums FreeCAD.)

Vous pouvez modifier les unités affichées pour la valeur d'une cellule à l'aide de la [fenêtre de dialogue Propriétés de la cellule](#Propri.C3.A9t.C3.A9s_d.27une_cellule). Cela ne modifie pas la valeur contenue dans la cellule; cela ne fait que convertir la valeur existante pour l'affichage. La valeur utilisée pour les calculs ne change pas, et les résultats des formules utilisant cette valeur ne changent pas. Par exemple, une cellule contenant la valeur "5.08cm" peut être affichée sous la forme "2in" en modifiant la valeur de l'onglet des unités en "in".

Un nombre sans dimension ne peut pas être changé en nombre avec une unité dans la fenêtre de dialogue des propriétés de la cellule. On peut mentionner une chaîne unité, et cette chaîne sera affichée ; mais la cellule contient toujours un nombre sans dimension. Afin de changer une valeur sans dimension en une valeur avec dimension, la valeur elle-même doit être entrée à nouveau avec son unité associée.

Parfois, il peut être souhaitable de supprimer une dimension dans une expression. Cela peut être fait en multipliant par 1 avec une unité réciproque.

## Importation et exportation

### Format CSV

Les feuilles de calcul FreeCAD peuvent être importées et exportées au format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) qui peut également être lu et écrit par la plupart des autres applications de feuilles de calcul telles que Microsoft Excel ou LibreOffice Calc. Voir [Spreadsheet Importer](/Spreadsheet_Import/fr "Spreadsheet Import/fr") et [Spreadsheet Exporter](/Spreadsheet_Export/fr "Spreadsheet Export/fr") pour plus d'informations.

### Format XLSX

Les feuilles de calcul au format Excel XLSX peuvent être importées avec la commande [Std Importer](/Std_Import/fr "Std Import/fr") ou la commande [Std Ouvrir](/Std_Open/fr "Std Open/fr"). Les fonctionnalités suivantes sont prises en charge :

- Toutes les fonctions qui sont également disponibles dans la feuille de calcul FreeCAD. D'autres fonctions donnent une erreur dans la cellule correspondante après l'importation.
- Noms d'alias pour les cellules.
- Plusieurs tableaux dans une feuille Excel. Dans ce cas, une feuille de calcul FreeCAD est créée pour chaque tableau Excel.

Les autres fonctionnalités ne sont pas importées dans la feuille de calcul FreeCAD.

## Imprimer

Pour gérer la mise en page nécessaire à l'impression, les feuilles de calcul FreeCAD sont imprimées en les insérant dans une [TechDraw Vue d'un objet Spreadsheet](/TechDraw_SpreadsheetView/fr "TechDraw SpreadsheetView/fr").

## Limites actuelles

FreeCAD vérifie les dépendances cycliques lorsqu'il recalcule. De par sa conception, cette vérification s’arrête au niveau de l’objet feuille de calcul. Par conséquent, vous ne devriez pas avoir de feuille de calcul contenant à la fois des cellules dont les valeurs sont utilisées pour spécifier des paramètres pour le modèle et des cellules dont les valeurs utilisent la sortie du modèle. Par exemple, vous ne pouvez pas avoir de cellules spécifiant la longueur, la largeur et la hauteur d'un objet, et une autre cellule qui référence le volume total de la forme obtenue. Cette restriction peut être surmontée en disposant de deux feuilles de calcul : l'une utilisée comme source de données pour les paramètres d'entrée du modèle et l'autre pour les calculs basés sur les données géométriques résultantes.

## Liaison entre cellules

[introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

Il est possible de lier le contenu des cellules à d'autres cellules du tableur. Cela peut s'avérer utile pour traiter des tables volumineuses ou pour obtenir le contenu d'une cellule à partir d'une autre feuille de calcul.

### Créer une liaison

Pour lier, par exemple, la plage de cellules A3-C4 à la plage de cellules B1-D2 :

1. Sélectionnez la plage de cellules A3-C4.
2. Cliquez du bouton droit de la souris et sélectionnez **Lier...** dans le menu contextuel.
3. Le dialogue **Lier des cellules de la feuille de calcul** s'ouvre.
4. Définissez la plage B1-D2 pour les **Vers les cellules** :
   ![](/images/Spreadsheet_binding-dialog.png)
5. Appuyez sur OK.
6. Les cellules liées ont une bordure bleue pour mettre en évidence la liaison.
7. Si vous saisissez maintenant quelque chose dans la cellule C1, la même chose apparaîtra immédiatement dans la cellule B3.

![](/images/Spreadsheet_binding-result.png)

La feuille de calcul peut maintenant ressembler à ceci

### Modifier la liaison

1. Cliquez du bouton droit de la souris sur une cellule liée (il n'est pas nécessaire de mettre en surbrillance l'ensemble de la plage liée) et sélectionnez **Lier...** dans le menu contextuel.
2. La fenêtre de dialogue **Lier des cellules de feuille de calcul** s'ouvre.
3. Modifiez une ou plusieurs options. Notez que la plage de cellules liée, **Lier les cellules**, ne peut pas être modifiée.
4. Appuyez sur OK.

### Supprimer la liaison

1. Clic droit de la souris sur une cellule liée (il n'est pas nécessaire de mettre en surbrillance l'ensemble de la plage liée) et sélectionnez **Lier...** dans le menu contextuel.
2. La boîte de dialogue **Lier des cellules de la feuille de calcul** s'ouvre.
3. Appuyez sur Délier.

### Remarques

- L'option **Masquer la dépendance de la liaison** peut être utilisée pour éviter les problèmes de dépendances cycliques entre les feuilles de calcul. Il est nécessaire de la sélectionner lorsque, par exemple, des cellules de la _Feuille de calcul A_ sont liées à la _Feuille de calcul B_, tandis que des cellules de la _Feuille de calcul B_ sont à leur tour liées à d'autres cellules de la _Feuille de calcul A_. Cette option doit être utilisée avec prudence :
  - Masquer les dépendances peut être dangereux car des dépendances cassées peuvent endommager votre fichier FreeCAD. Par exemple, lorsque vous supprimez une feuille de calcul, vous ne serez pas averti des dépendances cachées.
  - Lorsque vous ouvrez un document avec une feuille de calcul contenant une dépendance cachée, vous obtiendrez la feuille de calcul marquée pour être recalculée. Cela est dû au fait qu'une dépendance cyclique ne peut pas être recalculée automatiquement. Pour recalculer, il faut utiliser l'outil [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr").
- La liaison des cellules possède une vérification de l'étendue et vous avertit en cas d'étendue non concordante. Par exemple, lier des cellules 1x3 à des cellules 3x2 ne peut pas fonctionner car on ne sait pas quelles sont les 3 cellules à utiliser sur les 6 cellules d'origine.
- Vous ne pouvez pas modifier la plage de cellules d'une liaison existante. Vous devez d'abord délier les cellules, puis créer une nouvelle liaison.
- La couleur du cadre indiquant la liaison ne peut pas encore être modifiée.

## Tables de configuration

[introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

Vous pouvez utiliser des tableurs pour créer des tables de configuration avec des ensembles de paramètres prédéfinis pour votre modèle, puis modifier dynamiquement la configuration à utiliser. Voir [Spreadsheet Tutoriel sur les tables de configuration](/Configuration_Tables/fr "Configuration Tables/fr"). Consultez [ce message du forum](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183) si vous souhaitez en savoir plus sur les rouages de cette fonctionnalité.

## Script

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet", "MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set("A1", "10mm")
sheet.recompute()
sheet.get("A1")

sheet.setAlias("B1", "Diameter")
sheet.set("Diameter", "20mm")
sheet.recompute()
sheet.get("Diameter")

# sheet.get() results in an error if the cell is empty.
# sheet.getContents() can be used to check the cell first.
if sheet.getContents("C1"):
    print(sheet.get("C1"))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_Workbench/fr&oldid=1507213>"
