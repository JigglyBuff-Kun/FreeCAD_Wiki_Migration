---
title: Connect And Sweep
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Connect And Sweep                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Nouvelle version de l'interface graphique modifiée pour le dpi HD (QGridLayout) exécutez uniquement la version FC 0.18 et plus (PySide2 Qt5) Cette macro crée facilement une connexion entre deux objets. Une fonction discretize permet de créer de point suivant le nombre de coupes du fil ou par dimension déterminée. Une fonction de discrétisation est disponible pour créer des points marqueurs configurables pour couper des lignes en coupe ou une coupe avec une cote sur le point est créée pour toutes les coordonnées. Une fonction de face ou de fil dupliquée à utiliser avec l'opération de balayage et de lissage Opération de balayage et de lissage directement avec la macro. Centrage de la poutrelle sur les faces Version macro : 0.13 Date dernière modification : 2024-07-21 Version FreeCAD : 0.18 et plus Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/c/c9/Macro_Connect_And_Sweep.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/c/c9/Macro_Connect_And_Sweep.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2024-07-21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.18 et plus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Description

Cette macro crée facilement une connexion entre deux objets (le centre des objets sont les points de départ et d'arrivée du sweep) , un objet et un point ou entre deux points une forme peut être choisie cercle polygone ellipse rectangle paramétrable. Une fonction discretize permet de créer de point suivant le nombre de coupes du fil ou par dimension déterminée.  
 Fonctionnalité de duplication de face ou de fil pour utiliser avec l'opération de balayage et de lissage.  
Opération de balayage et de lissage directement avec la macro.  
Centrage de la poutrelle sur les faces

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro>">raw code</a>

![](/images/Macro_Connect_And_Sweep_00.png)

Macro_Connect_And_Sweep

## Utilisation

lancez la macro sélectionnez vos objets ou points choisissez la forme et réglez les dimensions et cliquez sur le bouton Create.

![](/images/Macro_Connect_And_Sweep_01.png)

Macro_Connect_And_Sweep

![](/images/Macro_Connect_And_Sweep_Discretize.png)

Discretize

![](/images/Macro_Connect_And_Sweep_Duplicate.png)

Duplicate

![](/images/Macro_Connect_And_Sweep_Sweep.png)

Sweep

![](/images/Macro_Connect_And_Sweep_Loft.png)

Loft

![](/images/Macro_Connect_And_Sweep_Reset.png)

Reset

## Images

Ces images doivent être copiées dans votre répertoire de macros.

(Pour télécharger les images faites : Clic sur le bouton droit de la souris sur l'image et selectionnez "Sauvez l'image sous..."(version 0.17))

![Center](/images/Macro_Connect_And_Sweep_CE.png) ![Top left](/images/Macro_Connect_And_Sweep_TL.png) ![Top rigth](/images/Macro_Connect_And_Sweep_TR.png) ![Low left](/images/Macro_Connect_And_Sweep_LL.png) ![Low rigth](/images/Macro_Connect_And_Sweep_LR.png)

L'icône pour votre barre d'outils ![Icon for the button](/images/Macro_Connect_And_Sweep.png)

## Script

![icon for the button](/images/Macro_Connect_And_Sweep.png)

Macro_Connect_And_Sweep.FCMacro

Téléchargez la macro sur Gits [**Macro_Connect_And_Sweep.FCMacro**](https://gist.github.com/mario52a/3ec67a3711202dab69592ce53b938924)

## Exemple

Créer un tubage en suivant un chemin avec Macro_Connect_And_Sweep et [Macro_Repro_Wire](/Macro_Repro_Wire/fr "Macro Repro Wire/fr") ![](/images/Macro_ReproWire.png)

- ![The sweep to work](/images/Macro_Connect_And_Sweep_02.png)

  The sweep to work

- ![Sélectionnez les deux point des extrémités de chaque fil exécutez la macro choisisez la forme et les réglages et cliquez sur le bouton Create solid](/images/Macro_Connect_And_Sweep_03.png)

  Sélectionnez les deux point des extrémités de chaque fil exécutez la macro choisisez la forme et les réglages et cliquez sur le bouton Create solid

- ![Repeat the operation if needed](/images/Macro_Connect_And_Sweep_04.png)

  Repeat the operation if needed

- ![sélectionnez le bord du cylindre et exécutez la macro Macro_Repro_Wire](/images/Macro_Connect_And_Sweep_05.png)

  sélectionnez le bord du cylindre et exécutez la macro [Macro_Repro_Wire](/Macro_Repro_Wire "Macro Repro Wire") ![](/images/Macro_ReproWire.png)

- ![le cercle est créé activez l'outil Sweep](/images/Macro_Connect_And_Sweep_06.png)

  le cercle est créé activez l'outil Sweep ![](/images/Part_Sweep.png)

- ![Sélectionnez le cercle le chemin et exécuter le sweep](/images/Macro_Connect_And_Sweep_07.png)

  Sélectionnez le cercle le chemin et exécuter le sweep

- ![Easy ?](/images/Macro_Connect_And_Sweep_08.png)

  Easy ?

## Exemples animés

![](/images/Macro_Connect_And_Sweep_Sweep2.gif)

{clear}}

Objet et Objet, connexion boundBox center objet 1 et boundBox center objet 2
![](/images/Connect_And_Sweep_01_Object_Object.gif)

Object SubObject, connexion boundBox center objet 1 et boundBox center Subobjet 1
![](/images/Connect_And_Sweept_02_Object_SubObject.gif)

SubObject SubObject, connexion boundBox center Subobject 1 et boundBox center Subobject 2
![](/images/Connect_And_Sweep_03_SubObject_SubObject.gif)

Connect And Sweep Direction un objet sélectionne ou Subobject selectionné
![](/images/Connect_And_Sweep_4_Direction.gif)

Detection Erreur de mode de sélection, si une erreur ou sélection est creée le mode change pour le mode 3 et la ligne du mode 3 est colorée en orange
![](/images/Connect_And_Sweep_05_Detect_Error.gif)

## Versions

ver 0.13 2024/07/24 : remplacement de webGui par webbrowser

ver 0.12 2020/07/05 : inclusion des icônes dans le code source

ver 00.11b 2020-02-22 : ajout d'un test "try: except" au test FreeCAD version

ver 00.11 2020-02-13 : modifier pour HD dpi QGridLayout exécuter uniquement la version FC 0.18 et plus  
 Pour la version précédente, voir[Macro_Connect_And_Sweep.FCMacro](https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/b3554916e0dce63644a2d4d3f88ef114b5e1e390/Macro_Connect_And_Sweep.FCMacro)

ver 00.10 2020-01-09 : centrage de la poutrelle sur les faces

ver 00.09 2020-01-06 : ajout de Tab Duplicate (comme Macro reproWire), Sweep, Loft.

ver 00.08 2019-12-23 : ajout d'une fonction de discrétisation permet de créer des points repères suivant le nombre de coupes du fil ou par dimension déterminée.

ver 00.07 2019-06-26 : upgrade et ajout des modes Objet et Objet, Objet et SubObjet, SubObjet et SubObjet sélection d'une linge et autres petits changements

00.06 18/06/2019 : ajout "Recompute" à la section Line

00.05 05/04/2019 : compatible Python 3

00.04 22/02/2017 : mise à jour du système de recherche path macros

00.03 15/09/2016 : Ajout de la création de tubes.

00.02 13/06/2016 : ajout de l'option de choix du coin du rectangle (et ellipse) pour suivre le chemin du sweep et d'un bouton pour effacer la dernière forme si le sens ne convient pas

00.01 07/06/2016 : ajout des options solid ou non centrage du rectangle ou non

00.00 05/06/2016 :

## Links

La discussion sur le forum [Scripting point to point tubing](http://forum.freecadweb.org/viewtopic.php?f=22&t=15833)

Cette macro est basée sur le code de microelly2 voir sur le forum [Looking for some helpful GUI-commands](http://forum.freecadweb.org/viewtopic.php?t=7029#p56746)

Autre discussion sur le forum [Macro_Connect_And_Sweep](https://forum.freecadweb.org/viewtopic.php?f=22&t=35432)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Connect_And_Sweep/fr&oldid=1459953>"
