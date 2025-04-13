---
title: Copy3DViewToClipboard
---

|                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Copy3DViewToClipboard                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                       |
| Macro will copy the contents of the 3D view to the clipboard in bitmap (BMP) image. Copying in Gimp is not possible. Gimp uses its own method for the copy function. Macro version: 00.01 Last modified: 2016-09-14 FreeCAD version: <=0.17 Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/84/Macro_Copy3DViewToClipboard.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                            |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/84/Macro_Copy3DViewToClipboard.png)                                                                                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                                                                                                             |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                  |
| Macro Version                                                                                                                                                                                                                                                                                                                                                     |
| 00.01                                                                                                                                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                                                                                                                                |
| 2016-09-14                                                                                                                                                                                                                                                                                                                                                        |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                |
| <=0.17                                                                                                                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                  |
| G, Q                                                                                                                                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                                                                                                                                          |
| [Macro Snip](/Macro_Snip "Macro Snip") [Macro Screen Wiki](/Macro_Screen_Wiki "Macro Screen Wiki")                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                   |

## Description

Macro will copy the contents of the 3D view to the clipboard in bitmap (BMP) image. Copying in Gimp is not possible. Gimp uses its own method for the copy function.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/f5c3738f858f7b058897c6c235232cbe/raw/a10bc3b8789badc1e405541d4697d7286d9f0fd3/Macro_Copy3DViewToClipboard.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/f5c3738f858f7b058897c6c235232cbe/raw/a10bc3b8789badc1e405541d4697d7286d9f0fd3/Macro_Copy3DViewToClipboard.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/f5c3738f858f7b058897c6c235232cbe/raw/a10bc3b8789badc1e405541d4697d7286d9f0fd3/Macro_Copy3DViewToClipboard.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/f5c3738f858f7b058897c6c235232cbe/raw/a10bc3b8789badc1e405541d4697d7286d9f0fd3/Macro_Copy3DViewToClipboard.FCMacro>">raw code</a>

## How To Use

- Run once to activate macro (the macro is loaded resident into the memory of the PC).
- Press G to grab the contents of the 3d view and copy them to the clipboard.
- Press Q to quit.

PS: if you want other formats, modify the values of the line number 33 ex:

line 33 : **_glw.resize(640, 480) # reduce the SubWindow_**

to

line 33 : **_glw.resize(800, 600) # reduce the SubWindow_**

## Discussion

See [forum-thread here](http://forum.freecadweb.org/viewtopic.php?f=3&t=16731).

## Code

The icon for you toolbar ![](/src/assets/images/Macro_Copy3DViewToClipboard.png)

**Macro_Copy3DViewToClipboard.FCMacro**

```
# -*- coding: utf-8 -*-
import PySide
from PySide.QtGui import *
from PySide import QtGui ,QtCore
from PySide import QtOpenGL
#from gimpfu import *

__title__   = "Macro_Copy3DViewToClipboard"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.01"
__date__    = "14/09/2016"

class ViewObserver:
    print "run FCGrab .."

    def logPosition(self, info):
        import tempfile
        import os
        from PySide import QtGui

        pos = info["Key"]
        if pos.upper() == "G":
            pos = ""

            mw=Gui.getMainWindow()
            gl=mw.findChildren(QtOpenGL.QGLWidget)
            glw=gl[0] # just use the first element

            originalsize = glw.size()                               # originalsize SubWindow
            print "originalsize : ",originalsize.width(),", ", originalsize.height()

            glw.resize(640, 480)                                    # reduce the SubWindow
            glw.show()
            Gui.SendMsgToActiveView("ViewFit")
            print "resize in : ",glw.frameGeometry().width()," ",glw.frameGeometry().height()

            i=glw.grabFrameBuffer()
            cb=QtGui.qApp.clipboard()
            cb.setImage(i)
            glw.resize(originalsize.width(), originalsize.height()) # restore originalsize SubWindow
            print "Grab"

        if (pos.upper() == "Q"):
            v.removeEventCallback("SoKeyboardEvent",c)
            print "End FCGrab"


v=Gui.activeDocument().activeView()
o = ViewObserver()
c = v.addEventCallback("SoKeyboardEvent",o.logPosition)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Copy3DViewToClipboard/en&oldid=1201227>"
