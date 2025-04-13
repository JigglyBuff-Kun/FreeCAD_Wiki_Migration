---
title: Joint
---

|                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Joint                                                                                                                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                                                                                                             |
| Crée une variété d'assemblages, tels que les assemblages à mortaise/tenon, les assemblages à queue droite, les assemblages à queue d'aronde et autres assemblages. Version macro : 0.2022.12.21 Date dernière modification : 2022-12-21 Version FreeCAD : Versions en Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Macro_Joint_Icon.svg) Auteur: TheMarkster |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                  |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                                                                                                         |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                          |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Macro_Joint_Icon.svg)                                                                                                                                                                                                                                                                                                                     |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Documentation complète sur Github](https://github.com/mwganson/joint) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                 |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2022.12.21                                                                                                                                                                                                                                                                                                                                                                                            |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                   |
| 2022-12-21                                                                                                                                                                                                                                                                                                                                                                                              |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                      |
| Versions en Python 3                                                                                                                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                  |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

Cette macro est utilisée pour créer des assemblages de différents types, tels que des assemblages à tenon et mortaise, des assemblages à queue droit, des assemblages en queue d'aronde, des entures dentelées droites (en utilisant le type queue d'aronde) et quelques emboîtages élastiques, entre autre de type porte-à-faux, annulaire, à boule et fendu.

La macro fonctionne dans l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), mais aussi avec des solides créés dans tout autre atelier.

La documentation complète se trouve sur github : [Joint](https://github.com/mwganson/joint).

## Utilisation

1. Sélectionner une face.
2. Exécutez la macro.
3. La boîte de dialogue **Joint type** s'ouvre.
4. Sélectionnez un type de joint dans la liste déroulante.
5. Appuyez sur le bouton OK.
6. Un objet joint paramétrique est créé.
7. Vous pouvez éventuellement modifier les propriétés de l'objet articulé.

![](/images/Macro_joint_scr1.png)

Capture d'écran de la Macro Joint - quelques-uns des types de joints qui peuvent être réalisés‎

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro)_

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
    "https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/Macro_Joint_Icon.svg)

## Script

**Macro Joint.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9)

[Joint.FCMacro](https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Joint/fr&oldid=1359664>"
