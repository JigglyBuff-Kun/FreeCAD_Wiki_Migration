---
title: GMSH
---

|                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GMSH Macro                                                                                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                                                                                        |
| Crée un maillage FEM avec un mailleur GMSH. Il est possible de créer une coquille et un volume linéaire ou bilinéaire (quadratique). Version macro : 1.0 Date dernière modification : 2015-08-24 Version FreeCAD : Toutes versions Téléchargement : [Icône pour votre barre d'outils](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png) Auteur: psicofil |
| Auteur                                                                                                                                                                                                                                                                                                                                                             |
| [psicofil](/index.php?title=User:Psicofil&action=edit&redlink=1 "User:Psicofil (page does not exist)")                                                                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                     |
| [Icône pour votre barre d'outils](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png)                                                                                                                                                                                                                                                                      |
| Liens                                                                                                                                                                                                                                                                                                                                                              |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                   |
| Version Macro                                                                                                                                                                                                                                                                                                                                                      |
| 1.0                                                                                                                                                                                                                                                                                                                                                                |
| Dernière modification                                                                                                                                                                                                                                                                                                                                              |
| 2015-08-24                                                                                                                                                                                                                                                                                                                                                         |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                 |
| Toutes versions                                                                                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                             |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                         |
| [FEM Maillage MEF à partir d'une forme avec Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr")                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                    |

## Informations importantes

Cette macro est obsolète. Le code est en Python 2.x. Tout le code a été directement intégré dans l'atelier FEM avant la version 0.20 de FreeCAD. Voir [FEM Mailler avec Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr").

## Description

Macro qui crée un maillage FEM avec le mailleur GMSH. Il est possible de créer une coquille et un volume linéaire ou bilinéaire (quadratique).

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro)_

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
    "https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro>">raw code</a>

![GMSH](/images/Macro_GMSH00.png)

## Script

Vous pouvez télécharger la macro dans le référentiel de GitHub : [GMSH Macro](https://github.com/psicofil/Macros_FreeCAD/blob/master/Macros/GMSHMesh.FCMacro)

ToolBar Icon ![](/images/Macro_GMSH.png)

**GMSHMesh.FCMacro GMSH Macro.FCMacro**

## Installation additionnelle

Quand GMSH est installé, voir [gmsh.info](http://gmsh.info/). La macro fonctionne dans les systèmes d'exploitation Linux, OSX et Windows. Le chemin du binaire gmsh.exe doit être modifié dans le code de la macro (voir ligne 9).

## Lien

La page de discussion sur le forum [GMSH macro](http://forum.freecadweb.org/viewtopic.php?t=11182)

[Le fonctionnement de la macro sur YouTube.](https://www.youtube.com/watch?v=ZcG5EEUe3yc)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_GMSH/fr&oldid=1475785>"
