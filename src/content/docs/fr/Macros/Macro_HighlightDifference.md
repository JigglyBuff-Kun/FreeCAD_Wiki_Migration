---
title: HighlightDifference
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HighlightDifference                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Calcule la différence entre deux formes. Les ajouts sont marqués en rouge, les retraits sont marqués en vert. Les deux parties originales seront à moitié transparentes. Le volume des ajouts et des retraits est imprimé dans la console. Version macro : 1.0 Date dernière modification : 2015-09-24 Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/2/2e/HighlightDifference.png) Auteur: Gaël Ecorchard |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")                                                                                                                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/2/2e/HighlightDifference.png)                                                                                                                                                                                                                                                                                                                                                |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                          |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2015-09-24                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Description

Calcule la différence entre deux formes. Les ajouts sont marqués en rouge, les retraits sont marqués en vert. Les deux parties originales seront à moitié transparentes. Le volume des ajouts et des retraits est imprimé dans la console.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro>">raw code</a>

![](/images/Macro_HighlightDifference_02.png)

Le résultat de la différence entre les deux objets est créé

## Exemple

- ![Objets originaux](/images/Macro_HighlightDifference_00.png)

  Objets originaux

- [![Le résultat est coloré en rouge et vert (ici les objets sont décalés)](/images/Macro_HighlightDifference_02.png)](/File:Macro_HighlightDifference_02.png  "Le résultat est coloré en rouge et vert (ici les objets sont décalés)")

  Le résultat est coloré en rouge et vert (ici les objets sont décalés)

- ![Les objets originaux sont transparents à 80% et non modifiés](/images/Macro_HighlightDifference_01.png)

  Les objets originaux sont transparents à 80% et non modifiés

## Script

Le code est visible sur GitHub: [Utility/HighlightDifference.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightDifference.FCMacro).

## Liens

- Voir la macro complémentaire [Macro_HighlightCommon](/Macro_HighlightCommon/fr "Macro HighlightCommon/fr")
- La discussion sur le forum ["collision detection", overlapping](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightDifference/fr&oldid=1345434>"
