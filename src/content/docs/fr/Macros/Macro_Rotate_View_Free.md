---
title: Rotate View Free
---

|                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rotation Libre                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                    |
| Cette Commande collée dans la console Python FreeCAD vous permet de faire pivoter la vue en 3 axes et l'angle (en degrés) et permet de créer un plan à la position souhaitée Macro version: 01.00 Last modified: 2010-11-17 FreeCAD version: All Author: Yorik |
| Author                                                                                                                                                                                                                                                         |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                          |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                               |
| Macro Version                                                                                                                                                                                                                                                  |
| 01.00                                                                                                                                                                                                                                                          |
| Date last modified                                                                                                                                                                                                                                             |
| 2010-11-17                                                                                                                                                                                                                                                     |
| FreeCAD Version(s)                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                                                                       |
| [Macro Rotate View](/Macro_Rotate_View/fr "Macro Rotate View/fr") [Macro_Rotate_ViewAxonometric](/Macro_Rotate_ViewAxonometric/fr "Macro Rotate ViewAxonometric/fr")                                                                                           |
|                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                |

## Description

Cette définition collée dans la console Python FreeCAD (ou votre macro) vous permet de faire pivoter la vue en 3 axes et l'angle (en degrés) permet de créer un plan à la position souhaitée

## Utilisation

Collez le code dans la console Python, tapez Enter → Enter (pour valider la commande) puis tapez ex: _RotateView(0,1,0,45)_

## Script

**Macro_Rotate_View_Free.FCMacro**

```
#Paste in the Python console and tip ex:
#RotateView(0,1,0,45)
def RotateView(axisX=1.0,axisY=0.0,axisZ=0.0,angle=45.0):
    import math
    from pivy import coin
    try:
        cam = Gui.ActiveDocument.ActiveView.getCameraNode()
        rot = coin.SbRotation()
        rot.setValue(coin.SbVec3f(axisX,axisY,axisZ),math.radians(angle))
        nrot = cam.orientation.getValue() * rot
        cam.orientation = nrot
        print( axisX," ",axisY," ",axisZ," ",angle)
    except Exception:
        print( "Not ActiveView ")
```

Dans la console Python tapez par exemple:

```
RotateView(0,1,0,45)
```

si aucun document n'est ouvert une erreur est retournée

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View_Free/fr&oldid=693154>"
