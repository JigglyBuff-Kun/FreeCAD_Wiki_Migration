---
title: Rotate View
---

|                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ruota la vista di 90°                                                                                                                                                                                                                                                                         |
| Descrizione                                                                                                                                                                                                                                                                                   |
| Questa macro ruota la vista corrente di 90° a sinistra. Funziona solo se si è in vista dall'alto Versione macro: 01.00 Ultima modifica: 2010-11-17 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://wiki.freecad.org/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                                        |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                             |
| Download                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://wiki.freecad.org/images/a/a0/Macro_Rotate_View_view_90_Degrees.png)                                                                                                                                                                                                    |
| Link                                                                                                                                                                                                                                                                                          |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                      |
| Versione macro                                                                                                                                                                                                                                                                                |
| 01.00                                                                                                                                                                                                                                                                                         |
| Data ultima modifica                                                                                                                                                                                                                                                                          |
| 2010-11-17                                                                                                                                                                                                                                                                                    |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                           |
| Tutte                                                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                                                   |
| _Nessuna_                                                                                                                                                                                                                                                                                     |
| Vedere anche                                                                                                                                                                                                                                                                                  |
| [Macro Rotate ViewAxonometric](/Macro_Rotate_ViewAxonometric "Macro Rotate ViewAxonometric"), [Macro Rotate View Free](/Macro_Rotate_View_Free "Macro Rotate View Free")                                                                                                                      |
|                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                               |

## Descrizione

Questa macro ruota la vista corrente di 90° a sinistra.

## Limitazioni

Funziona solo se si è in vista dall'alto
[![Std_ViewTop](/images/View-top.svg)](/Std_ViewTop "Std_ViewTop ") [XY (top)](/Std_ViewTop/it "Std ViewTop/it")

## Script

Icona barra strumenti ![](/images/Macro_Rotate_View_view_90_Degrees.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/it&oldid=1350294>"
