---
title: Editor Assistant
---

|                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Editor Assistant                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                               |
| Étend les fonctions de l'éditeur Python intégré à FreeCAD Version macro : 2.01 Date dernière modification : 2024-10-10 Version FreeCAD : 0.21 ou plus Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Editor_Assistant_Icon.svg) Auteur: TheMarkster                       |
| Auteur                                                                                                                                                                                                                                                                                                    |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                           |
| Téléchargement                                                                                                                                                                                                                                                                                            |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Editor_Assistant_Icon.svg)                                                                                                                                                                                                                  |
| Liens                                                                                                                                                                                                                                                                                                     |
| [Documentation sur Github](https://github.com/mwganson/Editor_Assistant) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                                                                                             |
| 2.01                                                                                                                                                                                                                                                                                                      |
| Dernière modification                                                                                                                                                                                                                                                                                     |
| 2024-10-10                                                                                                                                                                                                                                                                                                |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                        |
| 0.21 ou plus                                                                                                                                                                                                                                                                                              |
| Raccourci clavier                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                           |

## Description

Editor Assistant étend les capacités de l'éditeur Python intégré à FreeCAD. L'éditeur est assez bon dans ce qu'il fait, mais il est quelque peu limité dans ses fonctionnalités. Cette macro tente de compléter l'éditeur en ajoutant certaines de ces fonctionnalités manquantes, y compris : recherche et remplacement, signets, références d'aide, instantanés, diffs, mise en évidence de la recherche, insertion d'extraits de texte via un mécanisme de modèles, et plus encore.

## Utilisation

Installez et exécutez la macro. Une nouvelle boîte de dialogue apparaîtra comme un troisième onglet dans la vue Combo. En tant que troisième onglet, cette boîte de dialogue n'interférera pas avec les autres boîtes de dialogue de tâches qui doivent utiliser l'onglet Tâche pour leurs boîtes de dialogue. (Si vous préférez, vous pouvez lancer la macro comme une fenêtre flottante ancrable en maintenant la touche Alt enfoncée pendant l'exécution de la macro).

La macro comprendra un widget de liste montrant tous les éditeurs ouverts en cours. L'éditeur sélectionné sera l'éditeur utilisé auquel les fonctions de la macro seront appliquées. Lorsque vous sélectionnez un éditeur dans le widget de liste, cet éditeur reçoit le focus. (Mais la sélection d'un nouvel éditeur dans le widget d'onglets de la zone MDI n'en fait pas l'éditeur courant). De temps en temps, lorsque de nouvelles fenêtres sont ouvertes et que d'autres sont fermées, vous devrez rafraîchir le widget de liste en appuyant sur le bouton Refresh.

La documentation complète se trouve sur GitHub : [Editor Assistant](https://github.com/mwganson/Editor_Assistant).

![](/images/Editor_Assistant_scr1.png)

Capture d'écran de la Macro Editor Assistant

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro)_

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
    "https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/Editor_Assistant_Icon.svg)

## Script

**Macro Editor_Assitant.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6)

[Editor_Assitant.FCMacro](https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Editor_Assistant/fr&oldid=1495090>"
