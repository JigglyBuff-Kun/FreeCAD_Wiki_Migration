---
title: HighlightCommon
---

|                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HightlightCommon                                                                                                                                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| Mise en évidence des parties communes en affichant la forme commune en rouge et en définissant une demi-transparence sur les parties originales (les objets originaux ne sont pas modifiés). Version macro : 2.3.2 Date dernière modification : 2021-07-01 Version FreeCAD : 0.17 et au dessus Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/8/85/Macro_HighlightCommon.png) Auteur: JMG |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [JMG](/index.php?title=User:JMG&action=edit&redlink=1 "User:JMG (page does not exist)")                                                                                                                                                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/8/85/Macro_HighlightCommon.png)                                                                                                                                                                                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.3.2                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2021-07-01                                                                                                                                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.17 et au dessus                                                                                                                                                                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Mise en évidence des parties communes en affichant la forme commune en rouge et en définissant une demi-transparence sur les parties originales (les objets originaux ne sont pas modifiés).

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro>">raw code</a>

![Captura de pantalla de 2015-09-10 11-17-30.png](/images/Captura_de_pantalla_de_2015-09-10_11-17-30.png)

Volume commun des objets selectionnés

## Script

Icône de la barre d'outils ![](/images/Macro_HighlightCommon.png)

**Macro_HighlightCommon.FCMacro**

Le code est visible sur GitHub : [Utility/HighlightCommon.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightCommon.FCMacro).

## Liens

- Ici la macro complémentaire [Macro_HighlightDifference](/Macro_HighlightDifference/fr "Macro HighlightDifference/fr")
- Mon blog [Linux for an engineer](http://linuxforanengineer.blogspot.com.es/) pour le code et d'autres macros intéressantes pour FreeCAD
- La discussion sur le forum ["collision detection", overlapping](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightCommon/fr&oldid=1345419>"
