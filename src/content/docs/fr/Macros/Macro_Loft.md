---
title: Loft
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Loft                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Crée un lissage avec les polylignes sélectionnées. Spécialement écrit pour faciliter la création de lissage avec les polylignes générées par la [Macro Texture](https://www.freecadweb.org/wiki/Macro_Texture) (mais peut convenir et être utilisé pour les lissages communs). Version macro : 00.04 Date dernière modification : 2019-07-03 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/2/29/FCCreaLoft.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/2/29/FCCreaLoft.png)                                                                                                                                                                                                                                                                                                                                                                                                        |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 00.04                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2019-07-03                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Macro Texture](/Macro_Texture/fr "Macro Texture/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Macro spécialement écrite pour un lissage facile avec des lignes générées par la [Macro Texture](/Macro_Texture/fr "Macro Texture/fr") (mais peut convenir et être utilisé pour les lissages courants).

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro>">raw code</a>

![](/images/Texture_001_Logo.png)

Texture_001_Logo

## Utisation

Copiez la macro et son icône dans votre répertoire de macro habituelle.

- **Sort** : trie les données entrées dans la macro.
- **Reverse** : inverse l'ordre des données dans la macro.
- **Reset/Upgrade** : ce bouton a plusieurs fonctions :
  1. Si aucune sélection n'est faite avant l'ouverture de la macro le bouton Upgrade est affiché.  
     Sélectionner les objets dans la vue 3D ou dans la vue combinée et cliquer sur ce bouton pour valider les sélections dans la macro, le bouton change alors en Reset.
  2. Si un ou plusieurs objets sont sélectionnés avant l'ouverture de la macro le bouton Reset est affiché.  
     Tous les objets sélectionnés sont affichés dans la fenêtre de la macro.  
     Après avoir fait un tri **Sort** ou un tri inverse **Reverse** des données affichées, ce bouton Reset est affiché, s'il est utilisé, l'ordre des données reprend son ordre d'entrée original.  
     Si vous cliquez dans la vue 3D pour désélectionner les objets ce bouton efface les données contenues dans la mémoire de la macro.  
     Si vous ajoutez un ou plusieurs objet(s) dans votre liste ce bouton met à jour les données avec vos nouvelles entrées.
- **Select all** : selectionne tous les objets dans la vue 3D.
- **SpinBox** : cette boîte de sélection vous permet de "sauter" x lignes (par défaut 1, tous les objets sont traités).
- **Quit** : quitte la macro.
- **CheckBox** si la case à cocher est validée, le travail est visible en temps réel si elle n'est pas cochée seul la barre défilement est active (cette méthode est plus rapide) (Cochée par défaut).
- **Launch the Lofting** : lance le lissage et réinitialise la macro. Le nombre de sélections est affiché et le nombre réel de lissages si la boîte de sélection "jump" est utilisée.

### L'interface

![FCCreaLoft002](/images/Macro_FCCreaLoft_01.png)

FCCreaLoft002

## Script

Icône de la barre d'outils ![](/images/FCCreaLoft.png)

Téléchargez la macro sur Gist [**Macro_FCCreaLoft.FCMacro**](https://gist.github.com/mario52a/c477f892233d6abe02df5e97af828ff4)

## Liens

La discussion sur le forum [Texture](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893&start=10)

La macro [Macro Texture](/Macro_Texture/fr "Macro Texture/fr")

## Version

version 00.00 : 06/02/2016

ver 00.02 : 09/02/2016 : Ajout du bouton "Select all" et petite option affichée dans le bouton de lancement (nombre de sélections) et (nombre réel de lissages).

ver 00.03 : 09/02/2016 : minor (affichage sur le bouton Launch)

ver 00.04 : 03/07/2019 : adapté pour Python 3

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Loft/fr&oldid=1345877>"
