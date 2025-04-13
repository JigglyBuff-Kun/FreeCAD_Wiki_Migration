---
title: Rotate To Point
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotate To Point                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Macro pour faire tourner un objet sur lui-même sur un axe de rotation : centre de la boîte englobante, centre de masse, direction d'une polyligne ou du dernier point cliqué. Vous pouvez sauvegarder les coordonnées travaillées dans un fichier de coordonnées [(0.06,1.30,0.0),(85.0,0.0,0.0)] ou dans une macro complète pour créer une animation. Version macro : 00.11 Date dernière modification : 2022/10/17 Version FreeCAD : 0.19 et plus Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/d/d1/Macro_Rotate_To_Point.svg) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/d/d1/Macro_Rotate_To_Point.svg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 00.11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2022/10/17                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.19 et plus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Macro pour faire tourner un objet sur lui-même avec l'axe de rotation étant soit le :

- le centre de la boîte englobante
- le centre de masse
- la direction de la polyligne
- le long de la polyligne
- le dernier point cliqué

Vous pouvez enregistrer dans un fichier toutes les coordonnées travaillées et les sauvegarder dans un fichier "Coordonnées [(0.06,1.30,0.0),(85.0,0.0,0.0)]" ou dans une macro complète avec différentes options (créer une image de série) pour créer une animation, augmentation/diminution, pause, yoyo...

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro>">raw code</a>

## Utilisation

1. Téléchargez la macro depuis le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr")
2. Exécutez la macro
3. Sélectionnez un objet
4. Choisissez l'une des orientations suivantes :

![Interface Rotate to point](/images/Macro_Rotate_To_Point_00.png)

### [1] Position Rotation

_Première opération_

![[1] Position Rotation](/images/Macro_Rotate_To_Point_Position-Rotation00.png)

- ![](/images/CheckBoxFalse.svg) Translation : si cette case à cocher est ![](/images/CheckBoxTrue.svg) activé, la rotation est désactivée, le placement de l'objet se fait sur l'axe ou le chemin sélectionné.

_La SpinBox 1,00000 Degrees ![](/images/SpinBox.svg) est réinitialisée à `0.0` et colorée en rouge._

- Le chronomètre affiche le temps passé avec votre macro préférée.

### [2] Translation Rotation

_Seconde opération_

![[2]Translation Rotation](/images/Macro_Rotate_To_Point_Translation-Rotation00.png)

### Point Rotation

- Boundbox Center : sélectionnez la rotation du centre de la boîte de délimitation par rapport à l'axe
- Center of Mass : sélectionnez la rotation du centre de masse par rapport à l'axe
- Point Clicked : sélectionnez le dernier clic de souris comme point de rotation de l'axe
  - 1 : sélectionnez l'objet
  - 2 : utilisez la touche CTRL pour choisir un objet supplémentaire

### Axis Rotation

- Rotation(Z) Yaw : axe de lacet
- Rotation(Y) Pitch : axe de tanguage
- Rotation(X) Roll : axe de roulis
- Rotation(D) Direction : rotation autour de la ligne, polyligne sélectionnée
- Follow the path : suivez le chemin créé par la polyligne, la ligne, l'arête.
  - 1 : sélectionnez l'objet
  - 2 : sélectionnez le chemin

_La SpinBox 1,00000 Degrees ![](/images/SpinBox.svg) est réinitialisée à `0.0` et colorée en rouge_

### Coordinates Point clicked

![Rotate To Point Coordinate-On-Point-Clicked](/images/Macro_Rotate_To_Point_Coordinate-On-Point-Clicked_00.png)

- DoubleSpinBox : coordonnée X au clic de la souris (modifiable uniquement avec le mode "Point Clicked")
- DoubleSpinBox : coordonnée Y au clic de la souris (modifiable uniquement avec le mode "Point Clicked")
- DoubleSpinBox : coordonnée Z au clic de la souris (modifiable seulement avec le mode "Point Clicked")

### [3] Work (Box : Cube)

_Troisième opération_

![Macro Rotate To Point Work](/images/Macro_Rotate_To_Point_Work_00.png)

- ![](/images/CheckBoxFalse.svg) View : si la case est cochée, la vue revient sur la dernière vue de l'objet sélectionné (fonctionne avec la comboBox en dessous) et tous les paramètres sont restaurés.

* Point : si cette case à cocher est cochée, un point est créé pour visualiser l'axe de rotation des points : rouge X, vert Y, bleu Z.
* Center : un point est créé au centre du cercle.
* Box ![](/images/ComboBox.svg) : liste de tous les objets utilisés. Si le choix de l'objet est fait ici, le zoom _(si la case à cochér Vue est cochée)_ est retourné et tous les paramètres restaurés.
* 0 ![](/images/ComboBox.svg) : valeurs prédéfinies.
* 1.0 ![](/images/ComboBox.svg) : sélectionne une valeur utilisée.
* - Invert : inverse le signe Positif/Négatif de la valeur affichée.
* 0,0000 ![](/images/SpinBox.svg) : rntrez la modification.
* Apply : applique la modification à l'objet.
* Line Edit : l'édition de ligne affiche les coordonnées d'origine de l'axe sélectionné + les données d'entrée données dans la spinBox
* Les coordonnées sont affichées

### Data to save

![Rotate To Point Data-To-Save](/images/Macro_Rotate_To_Point_Data-To-Save_00.png)

- Fenêtre d'affichage des coordonnées mémorisées
- Clear : supprime et nettoie l'éditeur de texte
- Delete : efface la ligne sélectionnée

* ![](/images/CheckBoxFalse.svg) Memo on Click :

- Memorize : mémorise et affiche les coordonnées
- Save : sauvegarde les données dans un fichier

* ![](/images/CheckBoxFalse.svg) Macro :
  - Mode normal ![](/images/CheckBoxFalse.svg) Macro Les coordonnées sont sauvegardées dans ce mode : **[(0.06,1.30,0.0),(85.0,0.0,0.0)]**
  - Mode macro ![](/images/CheckBoxTrue.svg) 0,0 Coordinate Les coordonnées sont sauvées dans une macro complète (un ou plusieurs objet(s)) directement dans votre répertoire de macros avec le même nom que le document et l'extension .FCMacro
    - **Options de la macro**
    - **\_\_pompe\_\_\_\_engrenage\_\_** : nom du document
    - **\_\_22 Coordinates\_\_** : nombre de coordonnées
    - **Type Key Q to Quit** : quitte la macro
    - **Type Key A to Create serial image** : crée une série d'images pour créer un Animate GIF (avec Gimp ou autre)
    - **Type Key D to Decrease speed** : diminue la vitesse de l'animation
    - **Type Key I to Increase speed** : augmente la vitesse de l'animation
    - **Type Key P to Pause/Continue or key RETURN or ESCAPE** : pause/animation
    - **Type Key S to Step by Step (key RETURN or ESCAPE to continue)** : pas à pas
    - **Type Key V to reVerse** : inverse la video
    - **Type Key Y to YoYo** : du début à la fin et inverse de la fin au début
    - **Type Key M for this message** : affiche ce memo
    - Pour utiliser ces options, cliquez sur la souris dans la vue 3D et tapez la touche désirée.
    - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
  - Mode normal ![](/images/CheckBoxFalse.svg) Memo on Click : les données ne sont pas sauvées dans la fenêtre de mémorisation, vous devez sauver les coordonnées avec le bouton Memo (2) (Le compteur affiche le nombre de coordonnées sauvées)
  - Mode Memo on Click ![](/images/CheckBoxTrue.svg) Memo on Demand : les données sont automatiquement sauvées a chaque clic sur le bouton Apply

- Copy : mémoriser le contenu de la fenêtre dans format Rotate_To_Point : `["Body004001",(0.0,0.0,-1.5),(0.0,0.0,0.0)],`

### Command

![Rotate To Point Command](/images/Macro_Rotate_To_Point_Command_00.png)

- Quit : quitte la macro.
- Original : après avoir modifié les données de l'objet, vous pouvez revenir à l'emplacement d'origine, si vous n'avez pas désélectionné l'objet actuel.
- 0,0,0 : cette option place l'objet en coordonnées de base `0,0,0`.
- Reset : réinitialise les données dans la macro et désélectionne l'objet en cours (même clic de souris dans la [vue 3D](/3D_view/fr "3D view/fr")).

Icône pour la barre d'outils (PNG) ![](/images/Macro_Rotate_To_Point.png) ou (SVG) ![](/images/Macro_Rotate_To_Point.svg)

## Exemple

![](/images/Macro_Rotate_To_Point_01.gif)

## Liens

Le forum [feature req: placement - rotate part around its midpoint](http://forum.freecadweb.org/viewtopic.php?f=8&t=20925)

Mes macro sur Gist [mario52a](https://gist.github.com/mario52a)

## Version

2022/10/17 Version=00.11 : nouvelle organisation GUI, Déplacement sur un chemin, restitution de la vue et des données de l'objet, Bouton Copy, ajout menu Image dans la macro sauvée, ajout d'un "QtWidgets.QScrollArea()" ...

2021/03/08 Version=00.10 : ajout du zoom sur l'objet cliqué, valeur mémoire, valeurs imposées

2021/02/25 Version=00.09 : correction de la macro créée : cause multi objets possible

```
App.ActiveDocument.getObject(p[0]).Placement

```

au lieu de

```
myObject.Placement

```

2021/02/22 Version=00.08c : correct le center facePoint (19h26 Paris)

2021/02/22 Version=00.08b : correct le center facePoint (17h23 Paris)

2021/02/22 Version=00.08 : ajout sauvegarde du fichier macro avec un ou plusieurs objets déplacés

2021/01/24 Version=00.07 : ajout de l'option R: reverse

2021/01/12 ver 00.06 : ajout de la section Data et d'autres options

2020/03/07 ver 00.05.2 : correction du bug translation effacée "direction = myObject.Placement.Rotation.multVec(direction)"

2020/03/01 ver 00.05.1 : correction de la position du test "FreeCAD version"

2020/02/29 ver 00.05 : conversion pour Hdpi (Layout) et ajout fonction Direction

06/04/2019 ver 00.04 : Python 3

29/03/2018 ver 00.03 : commenter les lignes "FreeCAD.ActiveDocument.recompute()" le changement de valeur est trop lente dans FreeCAD 0.17.... voir [FC0.17 recompute strange behaviour (regression)](https://www.forum.freecadweb.org/viewtopic.php?f=10&t=27732&p=224195#p224195)

27/03/2017 ver 00.02 : modification du spinbox "Pos" maintenant accepte les valeurs négatives

05/03/2017 ver 00.01 : ajout de 3 boîtes de dialogue pour afficher les coordonnées X Y Z au clic de souris

04/03/2017 ver 00.00

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_To_Point/fr&oldid=1345061>"
