---
title: WireFilter
---

|                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro WireFilter                                                                                                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                                                                                                               |
| Filtre des lignes à partir d'esquisses, de décalages 2D, de misess à l'échelles, réorganisation de l'ordre des lignes. Version macro : 0.2023.10.19 Date dernière modification : 2022-10-19 Version FreeCAD : Les versions en Python 3 Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Wirefilter.svg) Auteur: TheMarkster |
| Auteur                                                                                                                                                                                                                                                                                                                                                    |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                                                           |
| Téléchargement                                                                                                                                                                                                                                                                                                                                            |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/File:Wirefilter.svg)                                                                                                                                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                                                     |
| [Documentation complète sur Github](https://github.com/mwganson/wirefilter) [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                              |
| Version Macro                                                                                                                                                                                                                                                                                                                                             |
| 0.2023.10.19                                                                                                                                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                                                                                                                                                     |
| 2022-10-19                                                                                                                                                                                                                                                                                                                                                |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                        |
| Les versions en Python 3                                                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                           |

## Description

WireFilter est une macro qui peut être utilisée pour filtrer certains fils d'une esquisse. Elle peut également être utilisée sur tout objet comportant des fils, comme un solide. Avec WireFilter, vous pouvez faire un décalage 2D d'un fil, vous pouvez mettre le fil à l'échelle, vous pouvez utiliser l'un des 4 facemakers différents (Part::FaceMakerBullseye, Part::FaceMakerCheese, Part::FaceMakerSimple, ou Part::FaceMakerExtrusion) si vous voulez faire une face. Vous pouvez également réinitialiser l'ordre des fils, ce qui peut être utile lorsqu'un lissage s'entrecroise parce que l'ordre des fils est différent avec les 2 esquisses utilisées.

Les exemples et la documentation complète se trouvent sur github : [WireFilter](https://github.com/mwganson/wirefilter).

Dans la capture d'écran ci-dessous, WireFilter est utilisé pour créer des faces à partir d'une esquisse en œil de bœuf (avec des trous imbriqués dans d'autres trous) à utiliser avec un PartDesign::Pad. Normalement, Pad ne peut pas gérer de telles esquisses, mais si nous créons la face pour elle (à l'aide de FaceMakerBullseye) et que nous sélectionnons les faces pour le Pad, il sera en mesure d'en faire une protrusion.

![](/images/Wirefilter_scr1.png)

Copie d'écran de la Macro WireFilter

## Problèmes connus

Parfois, la protrusion ne peut pas trouver la normale correcte et le WireFilter est généré dans la mauvaise direction. Cela peut être corrigé en activant la propriété Fix Normal de l'objet WireFilter, qui définit la direction personnalisée de Pad sur la normale correcte. Cela fonctionne également pour un extrusion lorsqu'il ne parvient pas à trouver la normale correcte.

## Légende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro)_

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
    "https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro>">raw code</a>

Icône de la barre d'outils
![](/images/Wirefilter.svg)

## Script

**Macro Wirefilter.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c)

[Wirefilter.FCMacro](https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_WireFilter/fr&oldid=1313799>"
