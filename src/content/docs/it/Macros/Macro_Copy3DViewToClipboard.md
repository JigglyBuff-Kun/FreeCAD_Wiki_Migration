---
title: Copy3DViewToClipboard
---

|                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Copia la vista 3D negli appunti                                                                                                                                                                                          |
| Descrizione                                                                                                                                                                                                              |
| Versione macro: 00.01 Ultima modifica: 2016-09-14 Versione FreeCAD: <=0.17 Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/84/Macro_Copy3DViewToClipboard.png) Autore: Mario52                         |
| Autore                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                 |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/84/Macro_Copy3DViewToClipboard.png)                                                                                                                              |
| Link                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it") |
| Versione macro                                                                                                                                                                                                           |
| 00.01                                                                                                                                                                                                                    |
| Data ultima modifica                                                                                                                                                                                                     |
| 2016-09-14                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                      |
| <=0.17                                                                                                                                                                                                                   |
| Scorciatoia                                                                                                                                                                                                              |
| G, Q                                                                                                                                                                                                                     |
| Vedere anche                                                                                                                                                                                                             |
| [Macro Screen Wiki](/Macro_Screen_Wiki "Macro Screen Wiki")                                                                                                                                                              |
|                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                          |

## Descrizione

Macro copierà il contenuto della vista 3D negli appunti in un'immagine bitmap (BMP). La copia in Gimp non è possibile. Gimp usa il proprio metodo per la funzione di copia.

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

## Uso

- Eseguirla una volta per attivare macro (la macro viene caricata e rimane residente nella memoria del PC).
- Premere G per catturare il contenuto della vista 3D e copiarlo negli appunti.
- Premere Q pr uscire.

PS: se si vogliono altri formati, modificare i valori della riga numero 33 es:

line 33 : **_glw.resize(640, 480) # reduce the SubWindow_**

in

line 33 : **_glw.resize(800, 600) # reduce the SubWindow_**

## Discussione

Vedere la discussione nel [forum](http://forum.freecadweb.org/viewtopic.php?f=3&t=16731).

## Codice

L'icona per la barra degli strumenti ![](/images/Macro_Copy3DViewToClipboard.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Copy3DViewToClipboard/it&oldid=1231918>"
