---
title: Rotate View
---

|                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Girar vista por 90°                                                                                                                                                                                                                                                                                                                  |
| Descripción                                                                                                                                                                                                                                                                                                                          |
| Esta macro gira la vista actual 90º a la izquierda. Sólo funciona si estas en la vista en planta Versión macro : 01.00 Fecha última modificación : 2010-11-17 Versión FreeCAD : All Descargar : [Macro_Rotate_View_view_90_Degrees](https://www.freecadweb.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Autor : Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                    |
| Descargar                                                                                                                                                                                                                                                                                                                            |
| [Macro_Rotate_View_view_90_Degrees](https://www.freecadweb.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png)                                                                                                                                                                                                               |
| Enlace                                                                                                                                                                                                                                                                                                                               |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                                                                   |
| Versión Macro                                                                                                                                                                                                                                                                                                                        |
| 01.00                                                                                                                                                                                                                                                                                                                                |
| Fecha última modificación                                                                                                                                                                                                                                                                                                            |
| 2010-11-17                                                                                                                                                                                                                                                                                                                           |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                                                                                  |
| Acceso directo predeterminado                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                               |
| Ver también                                                                                                                                                                                                                                                                                                                          |
| [Macro_Rotate_ViewAxonometric](/index.php?title=Macro_Rotate_ViewAxonometric/es&action=edit&redlink=1 "Macro Rotate ViewAxonometric/es (page does not exist)") [Macro Rotate View Free](/index.php?title=Macro_Rotate_View_Free/es&action=edit&redlink=1 "Macro Rotate View Free/es (page does not exist)")                          |
|                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                      |

## Descripción

Esta macro gira la vista actual 90º a la izquierda. Sólo funciona si estas en la vista en planta
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/es&oldid=1295563>"
