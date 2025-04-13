---
title: MeasureCircle
---

|                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MeasureCircle                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                   |
| Calcule le rayon d'un cercle sur 3 points ou une ligne circulaire Version macro : 1.0 Date dernière modification : 2016-04-08 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png) Auteur: galou_breizh |
| Auteur                                                                                                                                                                                                                                                                        |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                                            |
| Téléchargement                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png)                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                              |
| Version Macro                                                                                                                                                                                                                                                                 |
| 1.0                                                                                                                                                                                                                                                                           |
| Dernière modification                                                                                                                                                                                                                                                         |
| 2016-04-08                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                            |
| All                                                                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                               |

## Description

Cette macro calcule le rayon et centre du cercle en donnant 3 points ou une ligne circulaire. Une ligne est créée à partir du centre et du premier point pour l'utiliser plus tard.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro>">raw code</a>

## Utilisation

Copiez la macro dans votre répertoire de macros et lancez là, voir ici pour plus d'informations sur [Comment installer une macro](/How_to_install_macros "How to install macros")

Sélectionnez les vecteurs et le résultat s'affiche dans la vue rapport.
Les arêtes peuvent également être choisis et comptent comme deux sommets.
Un bord circulaire peut également être sélectionné.
Si deux arêtes sont sélectionnées le dernier vertex de la deuxième arête n'est pas utilisés dans le calcul.

Sélectionnez les éléments et lancez la macro ou lancez la macro et sélectionnez les objets après le lancement.
S'il n'y a pas d'éléments sélectionné avant le lancement de la macro, vous devez sélectionner les éléments

## Script

La dernière version est téléchargeable sur [MeasureCircle.FCMacro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro) ou avec le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

ToolBar Icon ![](/images/Macro_MeasureCircle.png)

**Macro_MeasureCircle.FCMacro**

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeasureCircle/fr&oldid=1210160>"
