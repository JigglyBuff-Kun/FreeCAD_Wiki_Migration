---
title: Screen Wiki
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Screen Wiki                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Macro spéciale pour l'utilisateur du wiki. Cette macro permet de sauvegarder la vue 3D dans le format souhaité. La vue 3D ou la fenêtre 3D complète de FreeCAD prend les dimensions souhaitées. Une rotation de l'objet sélectionné ou de la vue 3D est possible; pour donner un angle de rotation, le nombre d'images est calculé automatiquement. Il est possible de donner un angle de départ et un angle d'arrivée. Vous devez utiliser un autre programme d'exemple Gimp pour assembler les images et créer le fichier animé. Version macro : 00.06c Date dernière modification : 2024/10/10 Version FreeCAD : 0.19 et plus Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/f/f5/Macro_Screen_Wiki.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/f/f5/Macro_Screen_Wiki.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 00.06c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2024/10/10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.19 et plus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Macro Copy3DViewToClipboard](/Macro_Copy3DViewToClipboard/fr "Macro Copy3DViewToClipboard/fr"), [Macro Snip](/Macro_Snip/fr "Macro Snip/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Description

Cette macro permet à l'utilisateur de sauvegarder la [vue 3D](/3D_view/fr "3D view/fr") dans le format souhaité. La vue 3D ou la fenêtre 3D complète de FreeCAD prend les dimensions souhaitées. Une rotation de l'objet sélectionné ou de la vue 3D est possible; pour donner un angle de rotation, le nombre d'images est calculé automatiquement; il est possible de donner un angle de départ et un angle d'arrivée. Vous devez utiliser un autre programme d'exemple Gimp pour assembler les images et créer le fichier animé.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro>">raw code</a>

![](/images/Macro_Screen_Wiki_00.png)

Fenêtre Image et configuration de la Macro Screen Wiki

![](/images/Macro_Screen_Wiki_01.png)

Fenêtre Rotation de la Macro Screen Wiki

## Utilisation

### Image options

#### Definition

1. ![](/images/RadioButtonFalse.svg) 400x200
2. ![](/images/RadioButtonTrue.svg) 600x400 (Par défaut)
3. ![](/images/RadioButtonFalse.svg) 1024x768
4. ![](/images/RadioButtonFalse.svg) 320x240 (QVGA)
5. ![](/images/RadioButtonFalse.svg) 320x480 (HVGA)
6. ![](/images/RadioButtonFalse.svg) 400x300
7. ![](/images/RadioButtonFalse.svg) 480x360
8. ![](/images/RadioButtonFalse.svg) 640x480 (VGA)
9. ![](/images/RadioButtonFalse.svg) 768x576 (PAL)
10. ![](/images/RadioButtonFalse.svg) 800x600 (SVGA)
11. ![](/images/RadioButtonFalse.svg) 960x720
12. ![](/images/RadioButtonFalse.svg) 1024x768 (XGA)

#### Format image

1. 600 px ![](/images/SpinBox.svg) Longueur (Par défaut : 600 px)
2. 400 px ![](/images/SpinBox.svg) Hauteur (Par défaut : 400 px)

#### Window

1. ![](/images/RadioButtonFalse.svg) Window FC : la fenêtre complète de FreeCAD
2. ![](/images/RadioButtonTrue.svg) Screen 3D : la vue 3D de FreeCAD

#### BackGround Color

1. ![](/images/RadioButtonTrue.svg) Current (Par défaut)
2. ![](/images/RadioButtonFalse.svg) Color
3. ![](/images/RadioButtonFalse.svg) Transparent
4. Restore

#### Command

1. Set Screen : fenêtre ancrée
2. Tile Screen : fenêtre volante
3. Save Image : enregistre l'image, par ex : imageBox_000.png (le \_000 est incrémenté à chaque nouvelle image)
4. Follow : après avoir enregistré la première image, appuyez sur ce bouton pour enregistrer l'image suivante avec le même nom. Les images sauvegardées sont incrémentées, par ex : imageBox_001.png, imageBox_002.png, imageBox_003.png, ![](/images/Macro_Screen_Wiki_ToolBar_04_4b.png) etc...
5. New image : enregistre une nouvelle image sans modifier le compteur
6. Rotation : accès au menu de rotation (le titre de la section "Image options" en "Rotation options").
7. Quit : \_\_\_Screen_Wiki end\_\_\_\_\_\_\_\_\_\_
8. ToolBar : réduit la fenêtre d'image dans une barre d'outils, l'option Rotation n'est pas disponible dans ce mode.
   1. ![](/images/Macro_Screen_Wiki_ToolBar_01.png)![](/images/Macro_Screen_Wiki_ToolBar_02.png)![](/images/Macro_Screen_Wiki_ToolBar_03.png)![](/images/Macro_Screen_Wiki_ToolBar_04.png)
   2. Le bouton ![](/images/Macro_Screen_Wiki_ToolBar_04_6.png) Flip/Flop Y/N la mini barre d'outils ![](/images/Macro_Screen_Wiki_ToolBar_Mini.png)

### Rotation options

#### Rotation on

1. ![](/images/RadioButtonFalse.svg) 3D View : la vue complète est pivotée
2. ![](/images/RadioButtonTrue.svg) Object : l'objet sélectionné subit une rotation

#### Axis

: ![](/images/RadioButtonTrue.svg) **X** : rotation sur l'axe X
: ![](/images/RadioButtonFalse.svg) **Y** : rotation sur l'axe Y
: ![](/images/RadioButtonFalse.svg) **Z** : rotation sur l'axe Z
: ![](/images/RadioButtonFalse.svg) **D** : rotation sur la direction.

    :   * Pour utiliser cette option : sélectionnez d'abord l'objet, puis ensuite la ligne de référence. Si ![](/images/RadioButtonTrue.svg) **D** est coché et qu'aucune ligne n'est sélectionnée, la direction est `Vector(0, 0, 0)`

#### Point Rotation BoundBox

1. Object : rotation sur le centre de la boîte de délimitation de l'objet sélectionné
2. Sub Object : rotation sur le centre de la boîte de délimitation du sous-objet sélectionné

#### Angles

- Angle Rotation

1. - : diminue la valeur de 10 degrés
2. 0 Degrees ![](/images/SpinBox.svg) : Valeur
3. + : augmente la valeur de 10 degrés

- Number images

1. -: diminue la valeur de 10 images
2. 0 Images (+1) ![](/images/SpinBox.svg) : Value
3. +: augmente la valeur de 10 images

- Angle Begin Rotation

1. - : diminue la valeur de 10 degrés
2. 0 Degrees ![](/images/SpinBox.svg) : Valeur : Angle de la rotation de départ
3. + : augmente la valeur de 10 degrés

- Degrees Angle End Rotation

1. - : diminue la valeur de 10 degrés
2. 360 Degrees ![](/images/SpinBox.svg) : Valeur : Angle de la rotation finale
3. + : augmente la valeur de 10 degrés

#### Command

- Delay between 2 images

1. 0,00 Delay second ![](/images/SpinBox.svg) : s'il y a un problème d'enregistrement des images à cause de la vitesse, alors ajoutez un délai de X secondes.
2. ![](/images/CheckBoxFalse.svg) Reverse : cochée, cette option inverse la rotation de la vue 3D ou de l'objet.
3. Point center: visualise point de rotation, si le point est visible il est inclus dans l'image sauvée (PS: the point can be hidden by an object)
4. ![](/images/CheckBoxTrue.svg) Original position : cette option rétablit la position originale de la vue 3D ou de l'objet ayant subi une rotation. Au lieu que la vue 3D ou l'objet reste dans la dernière position de la rotation.
5. Test Rot.: teste la rotation sans sauver d'images
6. Save the animation : enregistre l'animation

## Exemples

![](/images/Macro_Screen_Wiki_03_Set_Screen.png)

Écran capturé avec des dimensions de `640px x 400px`

![](/images/Macro_Screen_Wiki_04_Tile_Screen.png)

Mêmes dimensions que l'image précédente, celle-ci est capturée en mode  
"Tuile d'écran"

![](/images/Macro_Screen_Wiki_Object_Direction_Object.gif)

Mode d'animation : objet sélectionné et direction de la boîte de délimitation  
centre de l'objet. Les images doivent être assemblées avec une application  
tierce pour créer un .gif animé comme [GIMP](https://daviesmediadesign.com/project/make-animated-gif-gimp/) ou [ScreenToGif](https://www.screentogif.com)

![](/images/Macro_Screen_Wiki_Object_Direction_SUBObject.gif)

_Mode d'animation : direction de l'objet sous-objet sélectionné._
Les images doivent être assemblées à l'aide d'une application tierce qui crée  
un .gif animé, comme [GIMP](https://daviesmediadesign.com/project/make-animated-gif-gimp/) ou [ScreenToGif](https://www.screentogif.com)_._

![](/images/Macro_Screen_Wiki_07.png)

La fenêtre de FreeCAD a été redimensionnée. La dimension peut être différente de la  
définition (selon le widget, la barre de titre etc... utilisés.)

## Versions

Version=00.06c: 10/10/2024 : delete "**import WebGui**"

Version=00.06: Version=00.06b: 2023/06/26 : sélectionner le nombre d'images voulue, bouton pour visualiser la rotation sans sauvegarde, bouton visualiser le point de rotation,
ajout du code de wmayer pour rotation au centre de l'écran:

```
#https://forum.freecadweb.org/viewtopic.php?f=22&t=10157
                cam = Gui.ActiveDocument.ActiveView.getCameraNode()
                position = cam.position.getValue()
                orient = cam.orientation.getValue()
                focalDistance = cam.focalDistance.getValue()
                viewdir = coin.SbVec3f(0, 0, -1)
                viewdir = orient.multVec(viewdir)
                pointRotation = position + viewdir * focalDistance
                pointRotation = pointRotation2 = App.Vector(pointRotation.getValue()[0], pointRotation.getValue()[1], pointRotation.getValue()[2])

```

Version=00.05 : 2021/05/21 : ajout de code dans la section du fichier Save pour Linux Mint, QFileDialog ignore l'extension. Seul le chemin+nom est affiché

```
global switchQFileDialogMint
                ####  mint
                if switchQFileDialogMint == True:   #
                    Filter = Filter[Filter.find("."):Filter.find(")")]
                    SaveName = SaveName + Filter
                ####  mint

```

Version=00.04 : 2021/01/13 : ajout d'une mini barre d'outils

Version=0.03 : 2020/10/30 : création d'une barre d'outils pour l'image et un nouveau bouton pour l'image unique

Version=0.02 : 2020/05/04 : correction de la couleur du bouton bug (self.PB_01_Color obsolete)

Version=0.01 : 2020/03/21

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Screen_Wiki/fr&oldid=1494970>"
