---
title: EasyReflector
---

|                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro EasyReflector                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                     |
| Gérer facilement les textures avec cette fonction en Python Version macro : 0.2023.12.09 Date dernière modification : 2023-12-09 Version FreeCAD : Python versions 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg) Auteur: TheMarkster                  |
| Auteur                                                                                                                                                                                                                                                                                                          |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                 |
| Téléchargement                                                                                                                                                                                                                                                                                                  |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg)                                                                                                                                                                                                                            |
| Liens                                                                                                                                                                                                                                                                                                           |
| [Documentation complète sur Github](https://github.com/mwganson/EasyReflector) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                                                                                                   |
| 0.2023.12.09                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                           |
| 2023-12-09                                                                                                                                                                                                                                                                                                      |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                              |
| Python versions 3                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                          |
| Voir aussi                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                 |

## Description

EasyReflector facilite la gestion des textures dans FreeCAD. Elle crée un objet [Feature Python](/App_FeaturePython/fr "App FeaturePython/fr") qui persiste lorsque le document est rechargé. Choisissez parmi une variété de textures incluses, ou utilisez vos propres images.

La documentation complète se trouve sur github : [EasyReflector](https://github.com/mwganson/EasyReflector).

![](/images/EasyReflector_screenshot01.png)

Copie d'écran de la Macro EasyReflector

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro)_

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
    "https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/EasyReflectorIcon.svg)

## Script

**Macro EasyReflector.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

[EasyReflector.FCMacro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EasyReflector/fr&oldid=1339527>"
