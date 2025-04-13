---
title: FCInfo ToolBar
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCCInfo ToolBar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Donne des informations en temps réel sur la forme sélectionnée et peut afficher une conversion de rayon, diamètre, longueur, surface, volume... dans différentes unités (métriques et impériales) dans une barre d'outils. Les informations à afficher sont paramétrables dans les paramètres de FreeCAD. Version macro : 00.05b Date dernière modification : 2023/09/06 Version FreeCAD : 0.18 et plus Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/9/9d/FCInfoToolBar.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/9/9d/FCInfoToolBar.png)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 00.05b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2023/09/06                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.18 et plus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Arch Prendre des cotes](/Arch_Survey/fr "Arch Survey/fr"), [Macro FCInfo](/Macro_FCInfo/fr "Macro FCInfo/fr"), [Macro FCInfoGlass](/Macro_FCInfoGlass/fr "Macro FCInfoGlass/fr")                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Description

Donne des informations sur la forme sélectionnée et peut afficher une conversion de rayon, diamètre, longueur, surface, volume ... dans différentes unités (métriques et impériales) dans une barre d'outils. Les informations à afficher sont paramétrables dans les paramètres de FreeCAD.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro>">raw code</a>

![FCInfo_ToolBar](/images/Macro_FCInfo_ToolBar_00.png)

FCInfo ToolBar

![FCInfo_ToolBar](/images/FCInfo_ToolBar_Animate01.gif)

FCInfo ToolBar en action

## Utilisation

Après avoir exécuté la macro, allez dans Menu → Outils → Éditer paramètres ... :BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar

et validez les infos que vous voulez afficher.

Les informations complètes sont affichées dans la fenêtre ToolTip, l'option cochée est visible si le "\*" est affiché.

Utilisez le bouton de réinitialisation après avoir modifié une option dans la fenêtre des paramètres.

L'unité de longueur peut être sélectionnée :
km, hm, dam, m, dm, cm, mm, µm, nm, pm, fm, inch, link, foot, yard, perch, chain, furlong, mile, league, nautique.

![l'outil d'information de FCInfo_ToolBar](/images/Macro_FCInfo_ToolBar_01.png)

l'outil d'information de FCInfo_ToolBar

## Options

Les options sont situées dans les paramètres de FreeCAD :

_Menu → Outils → Éditer les parametres ... :BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar_

- **_switch_User_ToolbarIconSize_**

  - si = `false` : l'icône de la barre d'outils respecte la valeur FreeCAD pour la taille de l'icône
  - si = `true` : l'icône prend les valeurs des variables **seT_User_sizeIconX** et **seT_User_sizeIconY**

- **_seT_User_sizeIconX_**

  - donne la valeur X de l'icône

- **_seT_User_sizeIconY_**

  - donne la valeur Y de l'icône

- **_seT_User_setFixed_Tool_Bar_Width_**

  - règle la longueur de la barre d'outils

- **_seT_User_setFixed_Tool_Bar_Height_**

  - règle la hauteur de la barre d'outils

- **_switch_User_Work_With_Preselection_**

  - Travaille avec la présélection avec ce mode les information sont affichées en temps réel

- **_seT_User_StyleSheetColorToolBar_**

  - donne une couleur à la barra d'outils en format HTML exemple : **#F8E6E0**
  - si la valeur est **0** la barre d'outils respecte les couleurs du système

- **_seT_User_DecimalValue_**

  - détermine le nombre de décimales a afficher (Defaut **2**)

- **_seT_User_TextHeigthValue_**

  - donne un hauteur au texte affiché dans la barre d'outils

- **_switch_User_Display_objectName_**

  - qffiche le nom de object ()

- **_switch_User_Display_SubElementName_**

  - affiche le SubElementName ()

- **_switch_User_Display_ShapeType_**

  - affiche le Shape type (TyS:)

- **_switch_User_Display_TypeId_**

  - affiche le TypeId (TyI:)

- **_switch_User_Display_RadiusObject_**

  - affiche le rayon et le diametre si un cercle est détecté (r:) [D:]

- **_switch_User_Display_RadiusObject_**

  - affiche le rayon et le diametre sur la surface (rS:) [DS:]

- **_switch_User_Display_LengthObject_**

  - affiche la longueur du bord sélectionné ou le périmètre de la face si une face est sélectionnée
    - (L:) affiche la longueur du bord ou du périmètre de la sélection
    - (P:) affiche le périmètre si une face est sélectionnée

- **_switch_User_Display_SommeAllEdgesObject_**

  - affiche la somme de tous les bords (edges) de l'objet sélectionné (Se:)

- **_switch_User_Display_NumberFacesMesh_**

  - affiche le nombre de faces de l'objet Mesh (Nf:)

- **_switch_User_Display_NumberPointsMeshPoints_**

  - affiche le nombre de points de l'objet Mesh (Np:)

- **_switch_User_Display_NumberEdgesMesh_**

  - - - affiche le nombre de bords de l'objet Mesh(Ne:)

- **_switch_User_Display_AreaObject_**

  - affiche la surface de l'objet (A:)

- **_switch_User_Display_AreaSubObject_**

  - affiche la surface de la face selectionnée (Af:)

- **_switch_User_Display_VolumeObject_**

  - affiche le volume de l'objet (V:)

- **_switch_User_Display_BsplineObject_**

  - affiche le nombre de noeuds du Bspline sélectionné
    - (BSpline) affiche le nombre de noeuds du BSpline
    - (BSrA) rayon approximatif u premier rayon du BSpline
    - (BSS) nombre de Points du Shape Bspline (case Shape)
    - (BSc) nombre de Points du Sub Object sélectionné (cas Edge)

- **_switch_User_Display_CentreObject_**

  - affiche le centre du cercle (si un cercle est détecté) ou de l'objet sélectionné
    - (Ce :) affiche le centre du cercle (si un cercle est détecté), de la face, du bord ... BBoxCentre de la face, du bord ... Sous sélection" + "\n\n")

- **_switch_User_Display_CentreBoundBoxObject_**

  - affiche le center du boundingBox de l'objet (BBCe:)

- **_switch_User_Display_Position_**

  - affiche les coordonnées du point cliqué par la souris (Pos:)

- **_switch_User_Display_Position_2D_CAD_**

  - affiche les coordonnées du point 2D Cad (x, y) 0,0 = coin inférieur gauche

- **_switch_User_Display_Position_2D_BMP_**

  - affiche les coordonnées du point 2D Bmp (x, y) 0,0 = coin supérieur gauche

- **_switch_User_NotInfoOnBeginning_**

  - s'il est `false` les infos (ces informations) ne sont pas affichées
  - s'il est `true` les infos sont affichées

- **_seT_User_UnitSymbolSquare_**

  - donne le symbole carré (Défaut **2**)

- **_seT_User_UnitSymbolCube_**

  - donne le symbole cube (Défaut **3**)

- **_seT_User_UnitSymbolMicro_**
  - donne le symbole micro (Défaut **u**)

## Démarrage automatique

#### Par lignes de commande

Dans votre raccourci _verify your right path_

"Chemin_complet_de_FreeCAD" "Chemin_complet_de_la_macro.FCMacro"

exemple :

```
"C:/FreeCAD_0.20.26858_Win-LPv12.5.4_vc17.x-x86-64/bin/FreeCAD.exe" "C:/Users/User/AppData/Roaming/FreeCAD/Macro/FCInfo_ToolBar.FCMacro"

```

#### Dans le répertoire Mod

1. Après avoir installé la macro avec le [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr")
2. Créez le répertoire _FCInfo_ToolBar_.
3. Copiez la macro FCInfo_ToolBar.FCMacro (copier et non déplacer) dans le répertoire _FCInfo_ToolBar_ et renommez-la en FCInfo_ToolBar.py
4. Créez un fichier nommé InitGui.py
5. Collez ce code dans InitGui.py :

```
#### FC Version: 0.1 #16/02/2022
#### Mario52
#### FCInfo_ToolBar : mini FCInfo ####
#
import importlib
from importlib import reload
import FreeCAD, FreeCADGui
App = FreeCAD
Gui = FreeCADGui

switch_User_NotRunAuto = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar").GetBool("switch_User_NotRunAuto")
## switch_User_NotRunAuto 0 (False) = run the macro in begin
## switch_User_NotRunAuto 1 (True)  = not run automatic the macro

if switch_User_NotRunAuto == False:
    import FCInfo_ToolBar
    #reload(FCInfo_ToolBar)
    FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar").SetBool("switch_User_NotRunAuto", False)
    #FreeCAD.Console.PrintMessage("InitGui Ok FCInfo_ToolBar" + "\n")

```

1. Sauvegardez le fichier
2. Lancez FreeCAD
3. Si la macro n'est pas exécutée (normal), exécutez la macro FCInfo_ToolBar.FCMacro comme une macro normale.
4. Au prochain démarrage de FreeCAD, la macro doit démarrer automatiquement.

## Liens

La discussion sur le forum [Feature request: coordinates display](https://forum.freecadweb.org/viewtopic.php?f=8&t=66294)

## Version

version 00.05b 06/09/2023 : correction d'un bug de calcul 2D Bmp

version 00.05 06/09/2023 : ajout des coordonnées 2D Cad (x, y) 0,0 = coin inférieur gauche ou Bmp (x, y) 0,0 = coin supérieur gauche, radiusSurface  
créer le test "if" **switch_User_NotInfoOnBeginning** j'ai oublié ! !!

version 00.04 28/06/2023 : correction styleSheet et:

```
sommeEdgesSTR = str(sommeEdges)

```

remplacé par:

```
sommeEdgesSTR = str(round(sommeEdges * uniteM, seT_User_DecimalValue)) + " " + uniteMs

```

version: (00.02 +) 00.03 2022/03/22 : ajout de somme à tous les bords (edges)

version: 00.02 2022/03/14 : ajout de calculs en temps réel (avec présélection), dimension de la barre d'outils, ajout d'informations sur les maillages et les points

version: 00.01 2022/02/16 : création

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCInfo_ToolBar/fr&oldid=1345395>"
