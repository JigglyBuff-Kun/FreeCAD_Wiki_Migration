---
title: Align Face Object to View
---

|                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Face Object to View                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                               |
| Cette macro dirige la face de l'objet sur la face de la vue active. Version macro : 0.1 Date dernière modification : 2015-01-16 Version FreeCAD : Toutes Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                    |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                   |
| Téléchargement                                                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png)                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                                                                                     |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                          |
| Version Macro                                                                                                                                                                                                                                                                             |
| 0.1                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                     |
| 2015-01-16                                                                                                                                                                                                                                                                                |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                        |
| Toutes                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                                                                                                                                |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Macro_FCCamera](/Macro_FCCamera/fr "Macro FCCamera/fr")                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                           |

## Description

Cette macro dirige la face de l'objet sur la face de la vue active (caméra).
Dans le cas de la face d'un perçage (ou interne ou cylindre), face à l'écran.

## Utilisation

- Sélectionnez une face de votre objet et lancez la macro.
- Votre sélection fait face à l'écran.

## Script

Icône de la barre d'outils
![](/images/Macro_Align_Face_Object_to_View.png)

**Macro_Align_Face_Object_to_View.FCMacro**

```
# This macro directs the face of the object on the side of the ActiveView (camera)
# extact FCCamera
# 16/01/2015

__title__="Macro_Align_Face_Object_to_View"
__author__ = "Mario52"

import pivy
from pivy import coin

try:
    v=Gui.Selection.getSelectionEx()[0].SubObjects[0].Surface.Axis    # to Axis
#    v = Gui.Selection.getSelectionEx()[0].SubObjects[0].normalAt(0,0) # normalAt
    r=App.Rotation(App.Vector(0,0,1),v)
    Gui.ActiveDocument.ActiveView.setCameraOrientation(r.Q)
except Exception:
    App.Console.PrintError("Select a face and run the macro"+"\n")
```

## Links

Original macro by wmayer [Looking for some helpful GUI-commands](http://forum.freecadweb.org/viewtopic.php?f=3&t=7029&p=56735&hilit=Shape.Face4#p56735)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Face_Object_to_View/fr&oldid=1086142>"
