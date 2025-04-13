---
title: Center Align Objects with Faces or Edges
---

:::caution
Cet outil est maintenant inclus dans l'atelierManipulator Workbench. Installez cet atelier pour bénéficier des dernières mises à ajours.
:::

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Center Faces of Parts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Cette macro aligne et contraint un objet sur la face ou le bord d'un autre objet. Cet outil est maintenant inclus dans l'atelier [Manipulator Workbench](/Manipulator_Workbench/fr "Manipulator Workbench/fr") Version macro : 1.5.3 Date dernière modification : 2017-10-01 Version FreeCAD : Tous Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-icon](https://www.freecadweb.org/wiki/images/3/3d/Manipulator_Mover.svg) [Caliper-icon](https://www.freecadweb.org/wiki/images/1/10/Manipulator_Caliper.svg) Auteur: easyw-fc |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [easyw-fc](/index.php?title=User:Easyw-fc&action=edit&redlink=1 "User:Easyw-fc (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-icon](https://www.freecadweb.org/wiki/images/3/3d/Manipulator_Mover.svg) [Caliper-icon](https://www.freecadweb.org/wiki/images/1/10/Manipulator_Caliper.svg)                                                                                                                                                                                                                                                                                                                                       |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2017-10-01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Tous                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Cette macro contraint et aligne des objets sur les faces ou les bords

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py)_

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
    "https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>">raw code</a>

## Tools

\*_Aligner_- ![](/images/Macro_Center_Align_Objects_with_Faces_or_Edges.svg): un ensemble d'outils pour déplacer et aligner des parties 3D

\*_Mover_- ![](/images/Manipulator_Mover.svg): un ensemble d'outils pour déplacer et faire pivoter des pièces 3D sur différents axes

\*_Measure_- ![](/images/Manipulator_Caliper.svg): un ensemble d'outils pour mesurer des pièces 3D, avec une fonction d'accrochage et des mesures de rayon, de longueur et d'angle.

Ces aides fonctionnent avec les objets **Part, App :: Part et Body**.
Chaque outil peut être **Flottant** ou **Docké à Gauche ou à Droite**.

---

## Anciennes Références

Cette macro couvre les contraintes suivantes:

- Contrainte concentrique parmi les parties non cylindriques;
- Contrainte sur les faces centrales et/ou les bords.
- Il fonctionne aussi avec les nouveaux conteneurs Body et App::Part, ainsi qu'avec la hiérarchie STEP.

![](/images/Center-align-faces.png)

![](/images/Center-align-faces-in-action.gif)

![](/images/Center-align-Body-objects.gif)

![](/images/Utube-alignment-tool-tutorial.png)

[Aligning tool video tutorial](https://youtu.be/qzixT157jJU)

![](/images/Utube-alignment-STEP-models.png)

[Aligning STEP models video tutorial](https://youtu.be/aQcPqhlgHBU)

## Utilisation

Contraint un objet sur la face ou bord d'un autre objet non cylindrique: Ouvrez un document, lancez la Macro et sélectionnez deux ou plusieurs faces/bords pour les aligner. Cliquez sur le bouton Align et c'est tout!

## Script

L' icône pour votre barre d'outils ![](/images/Macro_Center_Align_Objects_with_Faces_or_Edges.png)

**CenterAlignObjectswFacesEdges.py**

Après avoir copié la macro sur la page  
GitHub

<https://github.com/easyw/FreeCAD_Macros/blob/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>

code:

<https://github.com/easyw/FreeCAD_Macros/raw/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>

vous devez la coller dans votre répertoire de macros

[Comment installer une macro](/How_to_install_macros "How to install macros")

## Lien

Forum : [Faces or Edges constraint among non cylindrical parts Macro](http://forum.freecadweb.org/viewtopic.php?f=22&t=18655)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Center_Align_Objects_with_Faces_or_Edges/fr&oldid=692997>"
