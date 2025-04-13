---
title: Megaminx
---

|                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro_Megaminx                                                                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                                                                         |
| Cette macro crée un [Megaminx](https://fr.wikipedia.org/wiki/Megaminx) virtuel. Date dernière modification : 2019-02-17 Version FreeCAD : 0.18 et plus Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/43/Macro_Megaminx.png) Auteur: aleph0 |
| Auteur                                                                                                                                                                                                                                                                              |
| [aleph0](/index.php?title=User:Aleph0&action=edit&redlink=1 "User:Aleph0 (page does not exist)")                                                                                                                                                                                    |
| Téléchargement                                                                                                                                                                                                                                                                      |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/43/Macro_Megaminx.png)                                                                                                                                                                                        |
| Liens                                                                                                                                                                                                                                                                               |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                    |
| Version Macro                                                                                                                                                                                                                                                                       |
| 1.0                                                                                                                                                                                                                                                                                 |
| Dernière modification                                                                                                                                                                                                                                                               |
| 2019-02-17                                                                                                                                                                                                                                                                          |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                  |
| 0.18 et plus                                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                              |
| Voir aussi                                                                                                                                                                                                                                                                          |
| [Macro Rubik Cube](/Macro_Rubik_Cube/fr "Macro Rubik Cube/fr")                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                     |

## Description

Cette macro crée un document FreeCAD contenant un [Megaminx](https://fr.wikipedia.org/wiki/Megaminx) virtuel et vous permet de manipulez-le. Il affiche six vues du Megaminx, y compris chacune des douze faces au moins une fois. Il y a différentes flèches (chaque avec une infobulle qui sera affichée aussi longtemps que vous survolez la souris dessus). En cliquant sur les flèches, vous pouvez faire pivoter les faces du Megaminx, faites pivoter l’ensemble du Megaminx ou faites pivoter ou reflétez l’historique qu’il maintient des rotations que vous avez faites jusqu’à présent. Là est également un menu Megaminx qui est affiché à droite de la barre de menus tant que vous avez au moins un document Megaminx ouvert. Du menu, vous pouvez afficher un texte d’aide, réinitialiser le Megaminx à son initial (résolu), annulez la dernière rotation (et retirez-la de l’historique), copiez l’historique dans le presse-papiers, parcourez les l'historique, randomiser le Megaminx, et activer ou désactiver l'écho de rotations à la vue de rapport. Toutes ces fonctions peuvent également être invoqué en tapant des commandes appropriées dans la fenêtre de la console Python.

Un historique sauvegardé dans le presse-papier peut être collé dans la fenêtre de la console Python ou copié dans un fichier qui peut être appelé dans une macro et effectué dans le document Megaminx actif. Vous pouvez avoir plus d'un document Megaminx ouvert à la fois, même si un seul peut être actif.

## Script

Icône de la barre d'outils ![](/images/Macro_Megaminx.png)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro)_

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
    "https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro>">raw code</a>

**Macro_Megaminx.FCMacro**

![](/images/Macro_Megaminx.png)

## Utilisation

Téléchargez le code de <https://github.com/rparkins999/Megaminx> dans votre macro annuaire. Exécutez la macro pour créer un document Megaminx. Ensuite, vous pouvez jouer avec. Les fonctions d'historique peuvent être utilisées construire et sauvegarder des opérateurs (alias algorithmes) qui effectuent des transformations utiles sur le Megaminx. Un ensemble approprié de ceux-ci vous donnera une solution complète. Le step_history
Cette fonction peut être utilisée pour vous aider à reproduire un opérateur sur un vrai Megaminx.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Megaminx/fr&oldid=1089292>"
