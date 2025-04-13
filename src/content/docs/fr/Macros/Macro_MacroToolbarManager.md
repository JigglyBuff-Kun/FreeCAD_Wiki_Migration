---
title: MacroToolbarManager
---

|                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MacroToolbarManager                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                           |
| Gérer facilement des barres d'outils de macros personnalisées Version macro : 0.2023.10.27 Date dernière modification : 2023-10-27 Version FreeCAD : Versions de Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/File:MacroToolbarManager_icon.svg) Auteur: TheMarkster               |
| Auteur                                                                                                                                                                                                                                                                                                                |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                       |
| Téléchargement                                                                                                                                                                                                                                                                                                        |
| [Icône de la barre d'outils](https://wiki.freecad.org/File:MacroToolbarManager_icon.svg)                                                                                                                                                                                                                              |
| Liens                                                                                                                                                                                                                                                                                                                 |
| [Toute la documentation sur GitHub](https://github.com/mwganson/MacroToolbarManager) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                                                                                                         |
| 0.2023.10.27                                                                                                                                                                                                                                                                                                          |
| Dernière modification                                                                                                                                                                                                                                                                                                 |
| 2023-10-27                                                                                                                                                                                                                                                                                                            |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                    |
| Versions de Python 3                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                |
| Voir aussi                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                       |

## Description

MacroToolbarManager facilite l'édition de barres d'outils de macros personnalisées.

La documentation complète est disponible sur GitHub : [MacroToolbarManager](https://github.com/mwganson/MacroToolbarManager).

![](/images/MacroToolbarManager_scr01.png)

Capture d'écran de la macro MacroToolbarManager

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro)_

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
    "https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/MacroToolbarManager_icon.svg)

## Script

**Macro MacroToolbarManager.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660)

[MacroToolbarManager.FCMacro](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroToolbarManager/fr&oldid=1316094>"
