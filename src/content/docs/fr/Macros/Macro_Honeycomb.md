---
title: Honeycomb
---

|                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Honeycomb                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                        |
| Créez un objet Python en nid d'abeille aux caractéristiques entièrement paramétriques, compatible dans et en dehors de PartDesign. Version macro : 0.2024.08.27 Version FreeCAD : Les versions en Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Macro_Honeycomb.svg) Auteur: TheMarkster |
| Auteur                                                                                                                                                                                                                                                                                                                             |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                                    |
| Téléchargement                                                                                                                                                                                                                                                                                                                     |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Macro_Honeycomb.svg)                                                                                                                                                                                                                                                 |
| Liens                                                                                                                                                                                                                                                                                                                              |
| [Documentation complète sur Github](https://github.com/mwganson/honeycomb) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                        |
| Version Macro                                                                                                                                                                                                                                                                                                                      |
| 0.2024.08.27                                                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                 |
| Les versions en Python 3                                                                                                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                             |
| Voir aussi                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                    |

## Description

La macro Honeycomb crée un objet en nid d'abeille entièrement paramétrique qui est compatible à l'intérieur et à l'extérieur de l'atelier PartDesign. La grille en nid d'abeille comprend une bordure optionnelle et peut être de forme ovale (elliptique) ou rectangulaire. Il s'agit d'une mise à jour et d'un éventuel remplacement de la macro FCHoneycombMaker, qui ne produit pas d'objet Python mais s'appuie plutôt sur une feuille de calcul et quelques Draft réseaux.

La documentation complète se trouve sur github : [Honeycomb](https://github.com/mwganson/honeycomb).

![](/images/Honeycomb_scr1.png)

Copie d'écran de la Macro Honeycomb

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py)_

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
    "https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py>">raw code</a>

Icône de la barre d'outils
![](/images/Macro_Honeycomb.svg)

## Script

**Macro Honeycomb.py**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a)

[Honeycomb.py](https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Honeycomb/fr&oldid=1478200>"
