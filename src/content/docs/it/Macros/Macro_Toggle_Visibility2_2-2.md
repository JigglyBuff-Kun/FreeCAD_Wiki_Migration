---
title: Toggle Visibility2 2-2
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Toggle Visibility2 2-2                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Questa macro lavora con **Macro_Toggle_Visibility2_1-2** Questa macro rende visibili tutti gli oggetti rispettando gli oggetti visibili e nascosti originali dopo l'uso di [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it") Macro version: 00.02b Last modified: 2017-07-27 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ec/Macro_VisibleAlls2.png) Author: openfablab |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [openfablab](/index.php?title=User:Openfablab&action=edit&redlink=1 "User:Openfablab (page does not exist)")                                                                                                                                                                                                                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ec/Macro_VisibleAlls2.png)                                                                                                                                                                                                                                                                                                                                                                                 |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                   |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 00.02b                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2017-07-27                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it") [Macro Toggle Visibility](/Macro_Toggle_Visibility/it "Macro Toggle Visibility/it")                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Description

Uesta macro lavora con **[Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it")**

Questa macro rende visibili tutti gli oggetti rispettando gli oggetti visibili e nascosti originali dopo l'uso di [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it")

## Utilizzo

Copia le macro e le icone nelle macro delle cartelle ed esegui (vedi [Comme installare una macro](/How_to_install_macros/it "How to install macros/it"))

## Script

Questa macro rende visibili tutti gli oggetti rispettando gli oggetti visibili e nascosti originali dopo l'uso di [Macro_Toggle_Visibility2_1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it") macro.

ToolBar Icon ![](/images/Macro_VisibleAlls2.png)

**Macro_DisplayAllObjects2_2-2.FCMacro**

```
import FreeCAD
#original name "Macro_VisibleAlls" pratical name "Macro_Toggle_Visibility2_2-2" "Macro_Toggle_Visibility2_1-2" associate with "Macro_Toggle_Visibility2_2-2"
__title__="Macro_DisplayAllObjects2_2-2"
__author__ = "openfablab"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.00b"
__date__    = "27/07/2017"

try:
    for ShapeNameObj in FreeCAD.actual:   # displyed alls objects
        #print ShapeNameObj
        FreeCADGui.ActiveDocument.getObject(ShapeNameObj).Visibility = True
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility2_2-2/it&oldid=692579>"
