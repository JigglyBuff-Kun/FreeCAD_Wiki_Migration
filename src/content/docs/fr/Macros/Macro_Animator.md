---
title: Animator
---

|                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Animator                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                |
| Anime votre modèle en animant ses propriétés avec cette fonction en Python. Version macro : 0.2023.09.30c Date dernière modification : 2022-09-30 Version FreeCAD : Versions en Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Animator.svg) Auteur: TheMarkster  |
| Auteur                                                                                                                                                                                                                                                                                                     |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                            |
| Téléchargement                                                                                                                                                                                                                                                                                             |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Animator.svg)                                                                                                                                                                                                                                |
| Liens                                                                                                                                                                                                                                                                                                      |
| [Documentation complète sur Github](https://github.com/mwganson/animator) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                                                                                              |
| 0.2023.09.30c                                                                                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                                                                                                      |
| 2022-09-30                                                                                                                                                                                                                                                                                                 |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                         |
| Versions en Python 3                                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                            |

## Description

Animator permet de créer très facilement des animations pour vos modèles agissant sur diverses propriétés. Les propriétés prises en charge disponibles sont conservées dans une liste déroulante pour votre commodité. Sélectionnez la propriété à animer et double-cliquez sur l'objet Animator pour lancer l'animation. Double-cliquez à nouveau pour arrêter l'animation ou la laisser se terminer. Par défaut, 100 images sont utilisées avec la valeur de départ de la propriété = 0 et un incrément de 1.0 par itération dans la boucle. Tout ceci est facilement configurable à partir de la vue des propriétés.

La documentation complète se trouve sur github : [Animator](https://github.com/mwganson/animator).

![](/images/Animator_scr1.png)

Copie d'écran de la Macro Animator

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro)_

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
    "https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/Animator.svg)

## Script

**Macro Animator.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358)

[Animator.FCMacro](https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Animator/fr&oldid=1308123>"
