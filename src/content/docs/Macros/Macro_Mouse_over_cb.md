---
title: Mouse over cb
---

|                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Mouse over cb                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                     |
| This macro displays in the report view all elements below the cursor (all elements covered by other elements will also be displayed) Macro version: 00.00 Last modified: 2016-12-13 FreeCAD version: All Download: [ToolBar Icon](https://wiki.freecad.org/images/5/55/Macro_Mouse_over_cb.png) Author: Chris_G |
| Author                                                                                                                                                                                                                                                                                                          |
| [Chris_G](/index.php?title=User:Chris_G&action=edit&redlink=1 "User:Chris G (page does not exist)")                                                                                                                                                                                                             |
| Download                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://wiki.freecad.org/images/5/55/Macro_Mouse_over_cb.png)                                                                                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                |
| Macro Version                                                                                                                                                                                                                                                                                                   |
| 00.00                                                                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                                                              |
| 2016-12-13                                                                                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                        |
| [Macro FC element selector](/Macro_FC_element_selector "Macro FC element selector")                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                 |

## Description

This macro displays in the report view all elements below the cursor (all elements covered by other elements will also be displayed).

## Usage

Run the macro, the macro stay resident in memory.

## Script

Toolbar icon ![](/src/assets/images/Macro_Mouse_over_cb.png)

**Macro_Mouse_over_cb.FCMacro**

```
from pivy import coin
import FreeCADGui

def mouse_over_cb( event_callback):
    event = event_callback.getEvent()
    pos = event.getPosition().getValue()
    listObjects = FreeCADGui.ActiveDocument.ActiveView.getObjectsInfo((int(pos[0]),int(pos[1])))
    obj = []
    if listObjects:
        FreeCAD.Console.PrintMessage("\n *** Objects under mouse pointer ***")
        for o in listObjects:
            label = str(o["Object"])
            if not label in obj:
                obj.append(label)
        FreeCAD.Console.PrintMessage("\n"+str(obj))

view = FreeCADGui.ActiveDocument.ActiveView

mouse_over = view.addEventCallbackPivy( coin.SoLocation2Event.getClassTypeId(), mouse_over_cb )

# to remove Callback :
#view.removeEventCallbackPivy( coin.SoLocation2Event.getClassTypeId(), mouse_over_cb)
```

## Links

The forum discussion [finding/selecting all elements below cursor](https://forum.freecadweb.org/viewtopic.php?f=10&t=19072)

Other similar macro [Selecting internal faces of a pressure vessel](https://forum.freecadweb.org/viewtopic.php?f=18&t=12381&p=151950#p151950) (download the file [FC_element_selector_v1p1p1.py](https://forum.freecadweb.org/download/file.php?id=31041))

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Mouse_over_cb/en&oldid=1344830>"
