---
title: PDWrapper
---

|                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Pdwrapper                                                                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                                                                    |
| Encapsuler des solides non-PartDesign pour travailler dans PartDesign Version macro : 0.2023.08.13 Date dernière modification : 2023-08-13 Version FreeCAD : Versions en Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Workbench_PartDesign.svg) Auteur: TheMarkster |
| Auteur                                                                                                                                                                                                                                                                                                         |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                                                                                                 |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Workbench_PartDesign.svg)                                                                                                                                                                                                                        |
| Liens                                                                                                                                                                                                                                                                                                          |
| [Documentation complète sur Github](https://github.com/mwganson/pdwrapper) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")    |
| Version Macro                                                                                                                                                                                                                                                                                                  |
| 0.2023.08.13                                                                                                                                                                                                                                                                                                   |
| Dernière modification                                                                                                                                                                                                                                                                                          |
| 2023-08-13                                                                                                                                                                                                                                                                                                     |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                             |
| Versions en Python 3                                                                                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                         |
| Voir aussi                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                |

## Description

PDWrapper encapsule les solides créés dans d'autres ateliers à l'intérieur d'un objet PartDesign::FeaturePython afin qu'ils se comportent comme s'il s'agissait de caractéristiques natives de PartDesign. La capture d'écran ci-dessous montre un filet de Part Workbench d'une boîte additive PartDesign encapsulée dans un objet PDWrapper de type Common Additive. Mais PDWrapper peut faire plus que simplement encapsuler des solides non-PartDesign pour les utiliser dans un corps PartDesign. Il peut également encapsuler des caractéristiques de PartDesign et en modifier la nature. Par exemple, vous pouvez encapsuler un trou PartDesign dans un type additif PDWrapper et transformer le trou en tige filetée (en supposant que le trou soit fileté). Avec PDWrapper, vous pouvez créer des types de primitives qui ne sont pas disponibles, comme les types Common (Intersection) et les types XOR. Il permet également d'inclure/exclure dynamiquement certaines caractéristiques solides de la forme de l'extrémité du corps.

Les exemples et la documentation complète se trouvent sur github : [PDWrapper](https://github.com/mwganson/pdwrapper).

![](/images/Pdwrapper_scr.png)

Copie d'écran de la Macro PDWrapper

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro)_

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
    "https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/Workbench_PartDesign.svg)

## Script

**Macro Pdwrapper.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170)

[Pdwrapper.FCMacro](https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PDWrapper/fr&oldid=1297734>"
