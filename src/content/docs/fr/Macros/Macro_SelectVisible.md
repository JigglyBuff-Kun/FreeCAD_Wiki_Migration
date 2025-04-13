---
title: SelectVisible
---

|                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro SelectVisible                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                            |
| Tous les objets visibles dans l'arborescence et seulement ceux-ci seront sélectionnés. Version macro : 1.0 Date dernière modification : 2016-04-08 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/5/51/SelectVisible.png) Auteur: galou_breizh |
| Auteur                                                                                                                                                                                                                                                                                                 |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                                                                     |
| Téléchargement                                                                                                                                                                                                                                                                                         |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/5/51/SelectVisible.png)                                                                                                                                                                                                                   |
| Liens                                                                                                                                                                                                                                                                                                  |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                       |
| Version Macro                                                                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                  |
| 2016-04-08                                                                                                                                                                                                                                                                                             |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                     |
| Toutes                                                                                                                                                                                                                                                                                                 |
| Raccourci clavier                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                 |
| Voir aussi                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                        |

## Description

Sélectionne tous les objets visibles dans la vue 3D

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro>">raw code</a>

## Utilisation

Copiez la macro dans votre répertoire de macros (voir [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") pour plus d'informations)

## Script

La dernière version est téléchargeable sur <https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/SelectVisible.FCMacro>

Icône de la barre d'outils ![](/images/SelectVisible.png)

**Macro_Select.FCMacro**

```
# FreeCAD Macro SelectVisible

__Name__ = 'Select Visible'
__Comment__ = 'All visible objects in the tree will be selected'
__Web__ = 'http://www.freecadweb.org/wiki/Macro_SelectVisible'
__Wiki__ = 'http://www.freecadweb.org/wiki/Macro_SelectVisible'
__Icon__ = 'https://wiki.freecad.org/images/5/51/SelectVisible.png'
__Help__ = 'All visible objects in the tree and only these will be selected'
__Author__ = 'galou_breizh'
__Version__ = '1.0'
__Status__ = 'Production'
__Requires__ = ''

import FreeCAD as App
import FreeCADGui as Gui

doc = App.activeDocument()

if not doc:
    App.Console.PrintWarning('SelectVisible: no active document')
else:
    Gui.Selection.clearSelection()
    for o in doc.Objects:
        if o.ViewObject.Visibility:
            Gui.Selection.addSelection(o)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SelectVisible/fr&oldid=1346606>"
