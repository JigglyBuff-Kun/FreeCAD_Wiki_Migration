---
title: Rotate View
---

|                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Rotate View by 90°                                                                                                                                                                                                                                                                                                                                                                   |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                         |
| Dieses Makro dreht die aktuelle Ansicht um 90 ° nach links. Funktioniert nur, wenn Sie sich in der [Draufsicht](/Std_ViewTop/de "Std ViewTop/de") befinden Versionsmakro : 01.00 Datum der letzten Änderung : 2010-11-17 FreeCAD version : All Herunterladen : [Werkzeugleistensymbol](https://wiki.freecad.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                                |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                    |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                        |
| [Werkzeugleistensymbol](https://wiki.freecad.org/wiki/images/a/a0/Macro_Rotate_View_view_90_Degrees.png)                                                                                                                                                                                                                                                                             |
| Links                                                                                                                                                                                                                                                                                                                                                                                |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                         |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                        |
| 01.00                                                                                                                                                                                                                                                                                                                                                                                |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                           |
| 2010-11-17                                                                                                                                                                                                                                                                                                                                                                           |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                                                                                                                                  |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                           |
| [Macro Rotate ViewAxonometric](/index.php?title=Macro_Rotate_ViewAxonometric/de&action=edit&redlink=1 "Macro Rotate ViewAxonometric/de (page does not exist)"), [Macro Rotate View Free](/index.php?title=Macro_Rotate_View_Free/de&action=edit&redlink=1 "Macro Rotate View Free/de (page does not exist)")                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                      |

## Beschreibung

Dieses Makro dreht die aktuelle Ansicht um 90° nach links.

## Beschränkungen

Funktioniert nur in der Draufsicht: [![Std_ViewTop](/src/assets/images/View-top.svg)](/Std_ViewTop "Std_ViewTop ") [Draufsicht](/Std_ViewTop/de "Std ViewTop/de")

## Script

Werkzeugleistensymbol ![](/src/assets/images/Macro_Rotate_View_view_90_Degrees.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/de&oldid=1358678>"
