---
title: Rotera vyn med 90°
---
|  |
| --- |
| Rotera vyn med 90° |
| Beskrivning |
| This macro rotates the current view by 90° to the left. Only works if you are in Top view  Versions makro : 01.00 Datum senaste ändring : 2010-11-17 FreeCAD-versionen : All Ladda ner : [Macro\_Rotate\_View\_view\_90\_Degrees](https://www.freecadweb.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Författare : Yorik |
| Författare |
| [Yorik](/User:Yorik "User:Yorik") |
| Ladda ner |
| [Macro\_Rotate\_View\_view\_90\_Degrees](https://www.freecadweb.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) |
| länkar |
| [Makros recept](/Macros_recipes/sv "Macros recipes/sv") [Så här installerar du makron](/How_to_install_macros/sv "How to install macros/sv") [Hur man anpassar verktygsfält](/Customize_Toolbars/sv "Customize Toolbars/sv") |
| Makroversion |
| 01.00 |
| Datum senaste ändring |
| 2010-11-17 |
| FreeCAD Version(s) |
| All |
| Standard genväg |
| *None* |
| Se även |
| [Macro\_Rotate\_ViewAxonometric](/index.php?title=Macro_Rotate_ViewAxonometric/sv&action=edit&redlink=1 "Macro Rotate ViewAxonometric/sv (page does not exist)")   [Macro Rotate View Free](/index.php?title=Macro_Rotate_View_Free/sv&action=edit&redlink=1 "Macro Rotate View Free/sv (page does not exist)") |
|  |
|  |

## Description

Detta makro roterar den nuvarande vyn med 90° åt vänster. Fungerar endast om du är i toppvyn.
![Macro Rotate View view](/images/Macro_Rotate_View_view_90_Degrees.png)

## Limitations

Only works if you are in Top view: [![Std_ViewTop](/images/View-top.svg)](/Std_ViewTop "Std_ViewTop ") [XY (top)](/Std_ViewTop "Std ViewTop")

## Script

ToolBar Icon ![](/images/Macro_Rotate_View_view_90_Degrees.png)

**Macro\_Rotate\_View\_90\_Degrees.FCMacro**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/sv&oldid=1295566>"