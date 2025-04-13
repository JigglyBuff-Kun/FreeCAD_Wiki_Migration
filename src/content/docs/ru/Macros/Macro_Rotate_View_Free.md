---
title: Rotate View Free/ru
---

|                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rotate View Free                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                |
| This def pasted in the Python console FreeCAD (or your macro) allows you to rotate the view in 3-axis and the angle (in degrees) give interesting to create a plan to a desired position Macro version: 01.00 Last modified: 2010-11-17 FreeCAD version: All Author: Yorik |
| Author                                                                                                                                                                                                                                                                     |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                     |
| Links                                                                                                                                                                                                                                                                      |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                           |
| Macro Version                                                                                                                                                                                                                                                              |
| 01.00                                                                                                                                                                                                                                                                      |
| Date last modified                                                                                                                                                                                                                                                         |
| 2010-11-17                                                                                                                                                                                                                                                                 |
| FreeCAD Version(s)                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                                                                                   |
| [Macro Rotate View](/Macro_Rotate_View "Macro Rotate View") [Macro_Rotate_ViewAxonometric](/Macro_Rotate_ViewAxonometric "Macro Rotate ViewAxonometric")                                                                                                                   |
|                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                            |

## Описание

This def pasted in the Python console FreeCAD (or your macro) allows you to rotate the view in 3-axis and the angle (in degrees) give interesting to create a plan to a desired position

## Применение

Paste the code in the Python console FreeCAD and type Enter → Enter (for validate) and tip ex: _RotateView(0,1,0,45)_

## Скрипт

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

tip in the console ex :

```
RotateView(0,1,0,45)
```

If there is not open document an error is returned

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View_Free/ru&oldid=940827>"
