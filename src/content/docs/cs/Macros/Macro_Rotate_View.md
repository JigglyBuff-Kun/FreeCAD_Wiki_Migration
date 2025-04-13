---
title: Otočení pohledu
---

|                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rotate View by 90°                                                                                                                                                                                                                                                                                          |
| Popis                                                                                                                                                                                                                                                                                                       |
| Toto makro otočí objekt o 90° doleva. Funguje jen pokud jste v pohledu shora Version macro : 01.00 Date last modification : 2010-11-17 FreeCAD version : All Download : [Macro_Rotate_View_view_90_Degrees](https://www.freecadweb.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                       |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                    |
| [Macro_Rotate_View_view_90_Degrees](https://www.freecadweb.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png)                                                                                                                                                                                      |
| Odkazy                                                                                                                                                                                                                                                                                                      |
| [Makro recepty                                                                                                                                                                                                                                                                                              | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                       |
| 01.00                                                                                                                                                                                                                                                                                                       |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                       |
| 2010-11-17                                                                                                                                                                                                                                                                                                  |
| Verze FreeCAD                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                         |
| Výchozí zástupce                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                      |
| Viz též                                                                                                                                                                                                                                                                                                     |
| [Macro_Rotate_ViewAxonometric](/index.php?title=Macro_Rotate_ViewAxonometric/cs&action=edit&redlink=1 "Macro Rotate ViewAxonometric/cs (page does not exist)") [Macro Rotate View Free](/index.php?title=Macro_Rotate_View_Free/cs&action=edit&redlink=1 "Macro Rotate View Free/cs (page does not exist)") |
|                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                             |

## Description

Toto makro otočí objekt o 90° doleva. Funguje jen pokud jste v pohledu shora
![rotation 90 degrees](/images/Macro_Rotate_View_view_90_Degrees.png)

## Limitations

Only works if you are in Top view: [![Std_ViewTop](/images/View-top.svg)](/Std_ViewTop "Std_ViewTop ") [XY (top)](/Std_ViewTop "Std ViewTop")

## Script

ToolBar Icon ![](/images/Macro_Rotate_View_view_90_Degrees.png)

**Macro_Rotate_View_90_Degrees.FCMacro**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/cs&oldid=1295570>"
