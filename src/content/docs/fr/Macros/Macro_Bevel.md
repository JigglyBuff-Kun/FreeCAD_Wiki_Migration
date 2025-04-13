---
title: Bevel
---

|                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Bevel                                                                                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                                                                                 |
| Biseautage des sommets sélectionnés des objets solides, paramétrique, compatible avec PartDesign Version macro : 0.2022.04.06b Date dernière modification : 2022-04-06 Version FreeCAD : Versions en Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:bevel.svg) Auteur: TheMarkster |
| Auteur                                                                                                                                                                                                                                                                                                                      |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                                                                                              |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:bevel.svg)                                                                                                                                                                                                                                                    |
| Liens                                                                                                                                                                                                                                                                                                                       |
| [Documentation complète sur Github](https://github.com/mwganson/Bevel) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                     |
| Version Macro                                                                                                                                                                                                                                                                                                               |
| 0.2022.04.06b                                                                                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                                                                                                       |
| 2022-04-06                                                                                                                                                                                                                                                                                                                  |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                          |
| Versions en Python 3                                                                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                      |
| Voir aussi                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                             |

## Description

Cette macro est utilisée pour biseauter les sommets sélectionnés des objets solides, elle fonctionne également avec les faces. Si l'objet sélectionné est un PartDesign élément, l'objet paramétrique Bevel se placera dans le PartDesign corps et d'autres modélisations pourront être effectuées sur le même corps. Si l'objet sélectionné n'est pas un PartDesign élément, un nouvel objet est ajouté à l'arbre en tant qu'objet Python standard et paramétrique.

Utilisation : sélectionnez les sommets dans la vue 3D que vous souhaitez biseauter et exécutez la macro. Vous pouvez également sélectionner l'objet entier dans l'arbre, auquel cas tous les sommets seront biseautés. Cet outil est très similaire à d'autres outils d'habillage dans FreeCAD, tels que les congés et les chanfreins et se comporte de la même manière que ces objets, sauf qu'il est compatible avec les environnements de travail Part et PartDesign.

La documentation complète se trouve sur github : [Bevel](https://github.com/mwganson/Bevel).

![](/images/Bevel_scr.png)

Copie d'écran de Macro Bevel‎

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro)_

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
    "https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/Bevel.svg)

## Script

**Macro Bevel.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d)

[Bevel.FCMacro](https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Bevel/fr&oldid=1359843>"
