---
title: Select Hovering
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Select Hovering                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Cette macro sélectionne au choix Face, Bord, Sommet juste en survolant la souris sur les objets. PS : pour désélectionner une face (ou autre) cliquez sur le bouton Pause grab et utiliser la procédure standard : CTRL + Click Version macro : 00.04 Date dernière modification : 2024-01-11 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/d/d8/Macro_Select_Hovering.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/d/d8/Macro_Select_Hovering.png)                                                                                                                                                                                                                                                                                                                                                         |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                            |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 00.04                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2024-01-11                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Description

Cette macro sélectionne au choix Face, Edge, Vertex se trouvant sous la souris.

![Macro Select Hovering](/images/Select_Hovering00.gif)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63/raw/f9dea03a0327b48c76a7c3e9d7cd391b5093a8cf/Macro%2520Select%2520Hovering.FCMacro>">raw code</a>

![Macro Select Hovering](/images/Macro_Select_Hovering_00.png)

PS : pour désélectionner une face (ou autre) cliquez sur le bouton Pause grab et utiliser la procédure standard : CTRL + Click

## Utilisation

Survoler l'objet avec la souris.

#### Section Face

![](/images/CheckBoxFalse.svg) Select Face → 3 nombre de face(s)
300.0 surface totale des sélections
100.0 surface de la dernière face sélectionnée

#### Section Edge

![](/images/CheckBoxFalse.svg) Select Edge → 4 nombre de bord(s) sélectionné(s)
40.0 longueur totale des sélections
10.0 longueur de la dernière sélection

#### Section Vertex

![](/images/CheckBoxFalse.svg) Select Vertex → 1 nombre de vertex

#### Section Main

Le titre affiche l'information de :

- ( Obj: 1 ) : nombre d'objet(s) sélectionné(s)
- ( Sub: 8 ) : nombre de Sub objet(s) sélectionné(s)
- ( Tot: 9 ) : Somme de Obj + Sub

Unnamed: Box. Face6 (1.34,2.64,10.0)

- Affiche une petite info sur les objets sous le curseur

Unnamed: 1 : (8 sel.) (Obj. 1, Fa. 3, Ed. 4, Ve. 1) ![](/images/ComboBox.svg)

- Nom du document
- 8 sélections
- Obj. 1 objet
- Fa. 3 faces
- Ed. 4 bords
- Ve. 1 vertex
- Si vous utilisez plusieurs documents la macro restaure uniquement la sélection dans le document ouvert (document actif)
- L'info-bulle affiche la liste du nom et du sous-objet du document travaillé.

![Info objects memorized displayed](/images/Macro_Select_Hovering_01.png)

Selected by Box

- si vous faites une sélection avec boîte englobante ce bouton sélectionne tous les objets dont la case de sélection est cochée
- Autre utilité si vous avez coché l'option sommet et que vous souhaitez sélectionner tous les sommets de l'objet... cliquez sur ce bouton

Reset Data

- Reset all data efface toutes les données de la macro (pas le mémo)

Reset Memo

- Reset the memo efface les données mémorisées

Remove selection

- Désélectionne les objets du le document actuel

_(**PS:** si plusieurs documents sont ouverts, un clic de souris dans la vue 3D, désélectionne toutes les sélections dans tous les documents)_

Quit

- Quit quitte la macro

Pause grab/Refresh

- Pause la macro par exemple : désélectionnez plusieurs objets
- après la pause, cliquez pour revenir sur la macro et mettre à jour toutes les informations dans la macro
- Peut être utilisé pour mettre à niveau les sélections dans la macro (tous le temps)
- Ex : plusieurs objets sont sélectionnés avant d'exécuter la macro
- La macro s'adapte et détecte tout changement de document

### Icône

L'icône doit être copiée dans le même répertoire que la macro.

l'icône de la barre d'outils ![Macro Select Hovering](/images/Macro_Select_Hovering.png)

## Script

**Macro_Select_Hovering.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63)

[Download latest version of the macro](https://gist.github.com/mario52a/7ebe6b3fd047441114d9d0e08ceddd63)

## Version

ver 00.04 (11/01/2024) : ajout:

- LineEdit info,
- ComboBox memo selection,
- Button Memo selection,
- Button Selected by body
- Button Reset Data
- Button Reset Memo
- Button Remove Selection

ver 00.03b (28/10/2020) : ajout parenthèses print**()** pour Python 3

ver 00.03 (26/12/2017)  : replace test with (FreeCAD.ActiveDocument.getObject(obj), sub) == False)

ver 00.02 (26/12/2017)  :

ver 00.01 (25/12/2017)  :

## Lien

[Multiple face selection to convert a shape to a solid](https://forum.freecadweb.org/viewtopic.php?f=3&t=26370)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Select_Hovering/fr&oldid=1353890>"
