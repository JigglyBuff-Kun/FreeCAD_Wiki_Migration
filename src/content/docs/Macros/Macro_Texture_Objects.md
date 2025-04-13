---
title: Texture Objects
---

|                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Texture Objects                                                                                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                                                                                     |
| This macro allows you to temporarily put a texture image on selected objects. To remove the textures, simply close and reopen the document. Macro version: 1.1 Last modified: 2023-12-08 FreeCAD version: 0.18 and below Download: [ToolBar Icon](https://wiki.freecad.org/images/d/da/Macro_Texture_Objects.png) Author: yorik |
| Author                                                                                                                                                                                                                                                                                                                          |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://wiki.freecad.org/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                |
| Macro Version                                                                                                                                                                                                                                                                                                                   |
| 1.1                                                                                                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                                                                                              |
| 2023-12-08                                                                                                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                              |
| 0.18 and below                                                                                                                                                                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                 |

## Description

This macro allows you to temporarily put a texture image on selected objects. To remove the textures, simply close and reopen the document.

![](/src/assets/images/Textured_objects.jpg)

## Script

**Macro_Texture_Objects.FCMacro**

```
import FreeCADGui
from PySide import QtGui
from pivy import coin

# get a jpg filename
jpgfilename = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),'Open image file','*.jpg')

# apply textures
for obj in FreeCADGui.Selection.getSelection():
    rootnode = obj.ViewObject.RootNode
    tex =  coin.SoTexture2()
    tex.filename = str(jpgfilename[0])
    rootnode.insertChild(tex,1)
```

## Links

- Forum thread [Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

- Forum thread [Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/en&oldid=1344754>"
