---
title: Sketch Constraint From Spreadsheet
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Sketch Constraint From Spreadsheet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Macro qui, par un simple clic sur une cellule du tableur, ajoute une contrainte de longueur à une ligne, un cercle ou entre 2 points en utilisant un alias ou une adresse de cellule du tableur (ex. C2). Les modifications futures de la feuille de calcul mettront à jour la contrainte. La macro peut créer des alias pour vous. Il suffit de sélectionner une ligne, deux points ou une contrainte, de cliquer sur une cellule de la feuille de calcul et d'exécuter la macro. Vous pouvez sélectionner des lignes, des points aux extrémités d'une ligne, des points, des cercles ou des arcs de cercle. Version macro : 02.01 Date dernière modification : 2025-03-22 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/d/dc/Macro_Sketch_Constraint_From_Spreadsheet.svg) Auteur: 2cv001 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [2cv001](/index.php?title=User:2cv001&action=edit&redlink=1 "User:2cv001 (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/d/dc/Macro_Sketch_Constraint_From_Spreadsheet.svg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 02.01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2025-03-22                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Description

**Contactez-moi sur le forum FreeCAD en cas de problème.**

Macro qui, par un simple clic sur une cellule du tableur, ajoute une contrainte de longueur à une ligne ou entre 2 points en utilisant un alias ou une adresse de cellule du tableur (ex. C2). Les modifications ultérieures de la feuille de calcul mettront à jour la contrainte. La macro peut créer des alias pour vous.

Il suffit de sélectionner 1 ligne, 2 points ou une contrainte, de cliquer sur une cellule du tableur et d'exécuter la macro. Vous pouvez sélectionner des polylignes, des points aux extrémités d'une ligne, des points, des cercles ou des arcs de cercle.

![](/images/SketchConstraintFromSpreadsheet1.gif)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro>">raw code</a>

## Utilisation

### Création automatique d'objets

Si vous exécutez la macro et que vous n'avez pas encore créé de feuille de calcul, de corps ou d'esquisse, la macro vous propose de les créer et ouvre ensuite l'esquisse en mode édition et la feuille de calcul afin que vous puissiez commencer à la remplir.

![](/images/SketchConstraintFromSpreadsheet7.gif)

### Création automatique d'alias

Ce n'est pas obligatoire, mais il est préférable d'utiliser des alias dans votre feuille de calcul. La macro peut créer des alias à partir des textes contenus dans les cellules.  
Deux modes :

- un mode manuel où vous sélectionnez vous-même les cellules contenant du texte pour l'alias et un mode automatique.
- et un mode automatique :

#### Mode automatique

Un mode automatique où les alias sont automatiquement créés en utilisant une zone de texte définie par une cellule. La zone comprend la cellule et celles qui se trouvent en dessous. Ces textes correspondent au nom de l'alias. L'alias est créé à droite de son texte." La cellule désignée (ici A3) est éditable dans ces boîtes de dialogue :

![Alias automatic creation](/images/SketchConstraintFromSpreadsheet2302.png)

![Alias automatic creation](/images/SketchConstraintFromSpreadsheet2303.png)
![Alias automatic creation](/images/SketchConstraintFromSpreadsheet2304.gif)

#### Mode manuel

Pour utiliser le mode manuel, ne cochez pas l'option "Automatic alias".

![Alias creation](/images/SketchConstraintFromSpreadsheet2301.png)

![Alias creation](/images/SketchConstraintFromSpreadsheet8.gif)

### Création de contraintes

1. Sélectionnez :

- une ligne,
- deux points (extrémité d'une ligne, centre d'un cercle, etc.)
- ou une contrainte de longueur.

![](/images/SelectPoints.png)

2. Cliquez sur une cellule de la feuille de calcul, avec ou sans alias, qui contient une valeur numérique :

![](/images/Capture1.png)

3. Lancez la macro.

4. Sélectionnez le type de contrainte souhaité :

![](/images/Choose_type_of_constraint.png)

Si la cellule a un alias, la propriété de longueur de la contrainte sera quelque chose comme "Spreadsheet.alias". Dans le cas contraire, il s'agira de quelque chose comme "Spreadsheet.D4".

![](/images/If_the_spreadsheet_has_an_alias.png)

5. Si la contrainte provoque un conflit dans l'esquisse et que la case "conflict detection" est cochée, la macro propose de supprimer la nouvelle contrainte :

![](/images/SketchConstraintFromSpreadsheet3.gif)

Si vous sélectionnez une contrainte existante, vous pouvez remplacer sa valeur par une valeur provenant d'une feuille de calcul :

![](/images/SketchConstraintFromSpreadsheet2.gif)
![](/images/SketchConstraintFromSpreadsheet4.gif)

La macro peut également gérer une géométrie externe provenant d'une autre esquisse :

![](/images/SketchConstraintFromSpreadsheet9.gif)

Pour être encore plus précis, si, par exemple, une ligne est horizontale plutôt que verticale, à l'ouverture de la boîte de dialogue, le focus sera sur le bouton permettant d'appliquer une contrainte horizontale. Si la ligne est verticale et non horizontale, le focus sera sur le bouton permettant d'appliquer une contrainte verticale. Dans les deux cas, il vous suffit d'appuyer sur la touche Entrée si vous êtes satisfait de votre choix.

![](/images/SketchConstraintFromSpreadsheet5.gif)

La macro fonctionne également pour les propriétés des objets. Si vous cliquez, par exemple, sur la propriété Length d'une protrusion, puis sur une cellule avec la valeur souhaitée, la propriété Length de la protrusion est automatiquement modifiée.

![](/images/SketchConstraintFromSpreadsheetchangePropertyPad.gif)

Vous pouvez utiliser des formules.

Principe : la macro transforme l'alias avant de l'insérer dans l'expression du paramètre ou de la dimension. Elle remplace les mots-clés par des opérations pour tout ce qui suit la chaîne de caractères `f` (f pour fonction).

Exemple d'utilisation :

![](/images/SketchConstraintFromSpreadsheetcformulaMult.gif)

Si votre alias est : radius_f\_\_mul_2_plu_1  
l'expression sera :  
`<<datas>>.radius_f__mul_2_plu_1 * 2 + 1`  
Ainsi, si vous avez, par exemple, la valeur 5 dans la cellule, le paramètre ou la dimension prendra la valeur 5 \* 2 + 1, ce qui est égale à 11.

Un extrait du code montrant les opérations possibles et les formules à utiliser :

```
formulaSeparator = '_f_'
dicoFormula = {
    '_div_':'/',
    '_mul_':'*',
    '_plu_':'+',
    '_mor_':'+',
    '_les_':'-',
    '_moi_':'-',
    '_pg_':'(',
    '_lp_':'(',
    '_pd_': ')',
    '_rp_': ')',
}

```

## Liens

- [Forum de discussion (français)](https://forum.freecad.org/viewtopic.php?t=75972)
- [Forum discussion (English)](https://forum.freecad.org/viewtopic.php?style=5&t=76990)
- [Liste des macros](/Macros_recipes/fr "Macros recipes/fr")
- [Comment installer des macros](/How_to_install_macros/fr "How to install macros/fr")
- [Personnaliser la barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")

## Crédits

Merci à openBrain, mario52 et onekk pour leur aide sur le code!  
Merci à Syres pour les tests, revues et pour l'aide sur le format dans le code.  
Merci à Roy043 et David69 pour les diverses révisions et améliorations du wiki.  
Merci à L'ami René pour les tests et les idées.

## Script

Icône de la barre d'outils ![](/images/Macro_Sketch_Constraint_From_Spreadsheet.svg)

### Code

ver 02.02 2025/03/30 by 2cv001 **Macro_Sketch_Constraint_From_Spreadsheet.FCMacro**

#### Téléchargement

[![](/images/Nuvola_apps_download_manager.png)](https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro)

[Download latest version of the macro](https://raw.githubusercontent.com/2cv001/FreeCAD-macros/master/Spreadsheet/Sketch_Constraint_From_Spreadsheet.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Sketch_Constraint_From_Spreadsheet/fr&oldid=1569373>"
