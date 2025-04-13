---
title: Intersection
---

|                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Intersection                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                    |
| Trouve l'intersection entre 2 ou 3 arêtes/faces sélectionnées. Version macro : 2024.10.17 Date dernière modification : 2024-10-17 Version FreeCAD : 0.19 ou plus Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/images/e/e7/Intersection_Icon.svg) Auteur: TheMarkster              |
| Auteur                                                                                                                                                                                                                                                                                                         |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                                                                                                 |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/images/e/e7/Intersection_Icon.svg)                                                                                                                                                                                                                    |
| Liens                                                                                                                                                                                                                                                                                                          |
| [Documentation complète sur Github](https://github.com/mwganson/intersection) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                                                                                                  |
| 2024.10.17                                                                                                                                                                                                                                                                                                     |
| Dernière modification                                                                                                                                                                                                                                                                                          |
| 2024-10-17                                                                                                                                                                                                                                                                                                     |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                             |
| 0.19 ou plus                                                                                                                                                                                                                                                                                                   |
| Raccourci clavier                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                         |
| Voir aussi                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                |

## Description

Trouve l'intersection entre deux ou trois arêtes ou faces sélectionnées, fonctionne également avec les plans de référence et les lignes de référence. Crée un objet python caractéristique paramétrique contenant la forme de l'intersection. L'intersection est généralement une arête ou un sommet.

## Utilisation

Sélectionnez deux ou trois arêtes, faces, plans de référence ou lignes de référence dans la [vue 3D](/3D_view/fr "3D view/fr"), puis exécutez la macro. La documentation complète se trouve sur github : [Intersection on github](https://github.com/mwganson/intersection)

![](/images/Macro_Intersection_scr.png)

Capture d'écran de la Macro Intersection

### Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py)_

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
    "https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py>">raw code</a>

Icône de la barre d'outils
![](/images/Intersection_Icon.svg)

### Script

**Macro Intersection.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758)

[Intersection.py](https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Intersection/fr&oldid=1497739>"
