---
title: Documentation pour les macros
---
## Description

Toutes les macros doivent être correctement documentées de la même manière que les [Gui Commands](/Gui_Command/fr "Gui Command/fr") le sont.

Elles doivent avoir leur propre page wiki et être répertoriées dans l'une des catégories de la [liste des macros](/Macros_recipes/fr "Macros recipes/fr").

La page [Liste des Macros](/Macros_recipes/fr "Macros recipes/fr") contient une sélection de macros créées par des utilisateurs expérimentés, qui peuvent être installées directement à partir du ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Voir le [Modèle GuiCommand](/GuiCommand_model/fr "GuiCommand model/fr") et les pages des macros comme celles de [Macro Loft](/Macro_Loft/fr "Macro Loft/fr") et [Macro Site From Contours](/Macro_Site_From_Contours/fr "Macro Site From Contours/fr") pour voir comment documenter les macros. Au moins deux sections doivent être incluses, une section *Description* avec des informations générales sur l’utilisation et une section *Script* pour contenir le code réel de la macro. D'autres sections peuvent être incluses si nécessaire pour expliquer plus en détail l'utilisation de la macro.

Si une macro fournit une fonctionnalité bien définie et est bien documentée, elle pourrait éventuellement être incluse dans un [atelier](/Workbenches/fr "Workbenches/fr") nouveau ou déjà existant.

## Nouvelle page pour une macro

La page originale doit être rédigée en anglais. Après que l'un des administrateurs l'ait marquée pour la traduction, elle peut être traduite dans une autre langue.

Créez une nouvelle page pour la macro en commençant par le mot `Macro_` suivi du nom de la macro, par exemple, `Macro_Excellent_Modification`. Pour créer un lien vers la page, utilisez : `[[Macro_Excellent_Modification|Macro Excellent Modification]]`.

Dans la nouvelle page, vous devez utiliser le [Template:Macro](/Template:Macro "Template:Macro") en haut, avec un minimum d'informations:

```
{{Macro
|Name=Macro Excellent Modification
|Description=This macro does excellent things on existing shapes
|Author=your username
|Date=2018-11-30
}}

```

Vous pouvez ajouter une icône personnalisée si elle ne porte pas le même nom que la macro. Vous pouvez également ajouter d'autres champs d'information.

```
{{Macro
|Name=Macro Excellent Modification
|Icon=Macro_custom_icon.svg
|Description=This macro does excellent things on existing shapes
|Author=your username
|Date=2018-11-30
|Version=3.14516
|SeeAlso=[[Macro_Regular_Modification|Macro Regular Modification]]
}}

```

Lors de la traduction de la page, utilisez un modèle localisé. Vous devez spécifier le nom avec le code de langue à deux lettres (`/fr`, `/it`, `/de`) et vous devez indiquer l'icône explicitement

```
{{Macro/fr
|Name=Macro Excellent Modification translated
|Icon=Macro_Excellent_Modification.svg
|Description=(Translated description)
|Author=your username
|Date=2018-11-30
}}

```

ou utilisez le champ `Translate`

```
{{Macro/fr
|Name=Macro Excellent Modification
|Translate=Macro Excellent Modification translated
|Description=(Translated description)
|Author=your username
|Date=2018-11-30
}}

```

* Utilisez la page [Special:Upload](/Special:Upload "Special:Upload") pour télécharger votre icône personnalisée aux formats [SVG](/SVG/fr "SVG/fr") ou PNG. Elle devrait avoir le même nom que la macro.
* Sinon, l'icône `Icon=Text-x-python.svg` [![](https://upload.wikimedia.org/wikipedia/commons/8/82/Text-x-python.svg)](/File:Text-x-python.svg) par défaut sera utilisée.
* Pour les macros utilisée en ligne de commande dans la console Python de FreeCAD utilisez `Icon=Text_console_python.png` ![](/images/Text_console_python.png).
* pour les exemples de vidéo, utilisez ce squelette d'icône ![](/images/Text_Video_Movie.png) et remplissez le pour obtenir ex: ![](/images/Macro_crank_simul.png) et sauvez le avec le même nom que votre macro.

[Template:Macro](/Template:Macro "Template:Macro") mettra les informations sur l'utilisation et l'installation des macros dans chaque page.

![](/images/Macro_Recipes_MacroHowToInstall.png)

Les liens [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") et [Créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") se trouvent dans l'infobox de chaque page de la macro

### Ajouter la documentation sur la macro

* Tout comme une [Gui Command](/Gui_Command/fr "Gui Command/fr"), expliquez ce que fait la macro, ses entrées, sorties, options et limitations, etc.
* Inclure une icône personnalisée au format [SVG](/SVG/fr "SVG/fr") ou PNG pour votre macro afin que les autres utilisateurs puissent l’inclure dans une barre d’outils personnalisée.
* Ajoutez une ou plusieurs images pour clarifier l'utilisation de votre outil.
* Si la macro effectue une tâche complexe, envisagez d'ajouter un fichier GIF animé pour présenter ses fonctionnalités. L'image GIF doit avoir une taille maximale de 500 x 500 pixels. Si le GIF est plus grand, l'animation peut ne pas fonctionner. Ne redimensionnez pas le GIF car le wiki ne lira pas les GIF redimensionnés.
* Mentionnez les macros et les ateliers associés qui complètent la fonction de cet outil.
* Mentionnez la version de FreeCAD utilisée pour créer la macro. Ces informations peuvent être recueillies à partir de **Aide → À propos de FreeCAD → Copier dans le presse-papiers**.

:   Lorsque cette information est collée, elle ressemble à ceci

```
OS: Ubuntu 18.04.1 LTS
Word size of OS: 64-bit
Word size of FreeCAD: 64-bit
Version: 0.18.15302 (Git)
Build type: Release
Branch: master
Hash: 2e03d2f298677b8212c22cbbc3cb20b7c80eabb5
Python version: 2.7.15rc1
Qt version: 4.8.7
Coin version: 4.0.0a
OCC version: 7.3.0
Locale: English/UnitedStates (en_US)

```

Envisagez d'ajouter ces informations dans un bloc de commentaires à l'intérieur du code de la macro.

### Ajouter le code de la macro

Dans la section *Script*, utilisez [Template:MacroCode](/Template:MacroCode "Template:MacroCode") pour placer le code de la macro dans la page. Cela créera un bloc de texte utilisant la police de caractères monospace, qui préservera les espaces essentiels pour [Python](/Python/fr "Python/fr").

Si le bloc de code contient les caractères `{{ }}` (double accolade fermante et accolade ouvrante) ou `|` (barre verticale), les balises `<nowiki> ... </nowiki>` peuvent être ajoutées explicitement pour permettre l'affichage de ces symboles spéciaux.

Ce [Template:MacroCode](/Template:MacroCode "Template:MacroCode") génère essentiellement un bloc de balises HTML `<pre> ... </pre>` de sorte que celles-ci peuvent être utilisées directement au lieu d'utiliser le modèle. Le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") recherchera le plus gros bloc de ce type et l'utilisera pour le corps de la macro.

```
{{MacroCode|code=

«Your code should be here»

}}

```

Ou si elle comprend la barre verticale `|`.

```
{{MacroCode|code=
<nowiki>

«Your code should be here»

</nowiki>
}}

```

Ou

```
<pre>

«Your code should be here»

</pre>

```

Ajouter les informations d'en-tête avant votre code réel.

```
__Title__="Title_Of_macro"
__Author__ = "User_Name"
__Version__ = "00.11"
__Date__    = "2015-07-25"
__Comment__ = "This is the comment of the macro"
__Web__ = "http://forum.freecadweb.org/viewtopic.php?f=3&t=7384"
__Wiki__ = "http://www.freecadweb.org/wiki/index.php?title=Macro_Title_Of_macro"
__Icon__  = "/usr/lib/freecad/Mod/plugins/icons/Title_Of_macro"
__IconW__  = "C:/Documents and Settings/YourUserName/Application Data/FreeCAD"
__Help__ = "start the macro and follow the instructions"
__Status__ = "stable"
__Requires__ = "freecad 0.14.3706"
__Communication__ = "http://www.freecadweb.org/wiki/index.php?title=User:User_Name"

«Your code should be here»

```

À partir de FreeCAD 0.17, ces informations sont utilisées par le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") qui télécharge la macro à partir du dépôt [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros).

### Ajouter le code d'une macro en dehors du wiki

Si votre macro est trop grosse et dépasse 64 Ko, elle ne pourra pas être hébergée sur le wiki. Dans ce cas, utilisez le [Template:Codeextralink](/Template:Codeextralink "Template:Codeextralink") avec un lien vers l'adresse Web de la page du code brut (page texte du code).

Exemple :

```
{{Codeextralink|https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro}}

```

Ce qui sera affiché comme :

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). *Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro)*

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
    "https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser 
webbrowser.open("https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/8d40ab6c018c2bde678f/raw/e16ad9ea7b38c0c47e42aa3019be01dd1267a620/FCInfo_en_Ver_1-20_Docked.FCMacro>">raw code</a>

Ce modèle doit être placé au début de la page de macro, dans la section *Description*. Il doit s'agir du premier bloc de code de la page pour que du ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") puisse le détecter automatiquement et l'importer. Voir [Macro CirclePlus](/Macro_CirclePlus/fr "Macro CirclePlus/fr") pour un exemple d'utilisation.

**PS :** en cas de mise à jour dans GitHub, le chemin du code RAW brute est modifié sans oublier de modifier le lien dans le modèle Codeextralink.

## Ajouter une nouvelle macro au dépôt du wiki

Utilisez le template [Template:MacroLink](/Template:MacroLink "Template:MacroLink") pour inclure une ligne dans la catégorie appropriée de la [liste des macros](/Macros_recipes/fr "Macros recipes/fr"). Créez une nouvelle catégorie si nécessaire.

```
* {{MacroLink|Macro_Excellent_Modification|Macro Excellent Modification}}: the macro described in a short sentence.

```

* Le premier argument est le nom de la macro page dans le wiki.
* Le deuxième argument est le texte affiché, qui peut être différent du nom de la page. Cela créera un lien vers le premier argument, montrant le deuxième argument comme texte.
* Une courte description de la macro vient après les deux points.

Vous pouvez également utiliser le paramètre facultatif `Icon=` pour spécifier le fichier image qui sera placé au début de la ligne. L'icône doit être un fichier [SVG](/SVG/fr "SVG/fr") ou PNG, et doit porter le même nom que votre macro. Si ce paramètre n'est pas spécifié, l'icône par défaut [![](https://upload.wikimedia.org/wikipedia/commons/8/82/Text-x-python.svg)](/File:Text-x-python.svg) sera utilisée pour le script [Python](/Python/fr "Python/fr").

```
* {{MacroLink|Icon=Macro_Excellent_Modification.svg|Macro_Excellent_Modification|Macro Excellent Modification}}: the macro described in a short sentence.

```

Pour localiser ce modèle, utilisez le lien de langue approprié dans le premier argument.

```
* {{MacroLink|Macro_Excellent_Modification/fr|Macro Excellent Modification}}: (translated description)

```

## Ajouter une nouvelle macro au dépôt central

Pour rendre une macro installable à partir du ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"), elle doit être incluse dans le dépôt central [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros).

Pour y inclure la macro, elle doit d’abord être examinée par la communauté FreeCAD du sous-forum [Python scripting and macros](https://forum.freecadweb.org/viewforum.php?f=22). Une fois que cela est fait, le dépôt des FreeCAD-macros doit être divisé, la nouvelle macro doit être incluse dans une branche, puis la branche doit être poussée et fusionnée dans le dépôt en amont.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_documentation/fr&oldid=1247230>"