---
title: Texture Objects
---

|                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Texture Objects                                                                                                                                                                                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| Cette macro permet de mettre temporairement une image qui servira de texture sur les objets sélectionnés. Pour supprimer les textures, Fermez simplement le document et rouvrez le. Version macro : 1.1 Date dernière modification : 2023-12-08 Version FreeCAD : 0.18 et en dessous Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/d/da/Macro_Texture_Objects.png) Auteur: yorik |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                           |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                                                                                     |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                 |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1                                                                                                                                                                                                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                            |
| 2023-12-08                                                                                                                                                                                                                                                                                                                                                                                                       |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.18 et en dessous                                                                                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Description

Cette macro permet de mettre temporairement une image qui servira de texture sur les objets sélectionnés. Pour supprimer les textures, Fermez simplement le document et rouvrez le.

![](/images/Textured_objects.jpg)

## Script

**Macro_Texture_Objects.FCMacro**

```
import FreeCADGui
from PySide import QtGui
from pivy import coin

# get a jpg filename
jpgfilename = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),'Open image file','*.jpg')

# apply textures
for obj in FreeCADGui.Selection.getSelection():
    rootnode = obj.ViewObject.RootNode
    tex =  coin.SoTexture2()
    tex.filename = str(jpgfilename[0])
    rootnode.insertChild(tex,1)
```

## Liens

- Fil du forum [Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

- Fil du forum [Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/fr&oldid=1346038>"
