---
title: Copy3DViewToClipboard
---

|                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Copy3DViewToClipboard                                                                                                                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| La macro copiera le contenu de la vue 3D dans le presse-papiers en image bitmap (BMP). Copier dans Gimp n'est pas possible. Gimp utilise sa propre méthode pour la fonction de copie. Version macro : 00.01 Date dernière modification : 2016-09-14 Version FreeCAD : <=0.17 Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/8/84/Macro_Copy3DViewToClipboard.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                 |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/8/84/Macro_Copy3DViewToClipboard.png)                                                                                                                                                                                                                                                                                                               |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                        |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                           |
| 00.01                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2016-09-14                                                                                                                                                                                                                                                                                                                                                                                                              |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                      |
| <=0.17                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                       |
| G, Q                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Macro Snip](/Macro_Snip/fr "Macro Snip/fr") [Macro Screen Wiki](/Macro_Screen_Wiki/fr "Macro Screen Wiki/fr")                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

La macro copiera le contenu de la vue 3D dans le presse-papiers en image bitmap (BMP). Il n'est pas possible de copier dans Gimp. Gimp utilise sa propre méthode pour la fonction de copie.

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

## Utilisation

- Lancer une fois pour activer la macro (la macro est chargée de manière résidente dans la mémoire du PC).
- Appuyez sur G pour saisir le contenu de la vue 3D et le copier dans le presse-papiers.
- Appuyez sur Q pour quitter.

PS : si vous voulez d'autres formats, modifiez les valeurs du numéro de ligne 33 ex :

line 33 : **_glw.resize(640, 480) # reduce the SubWindow_**

par

line 33 : **_glw.resize(800, 600) # reduce the SubWindow_**

## Discussion

La discussion sur le forum [Copy contents of 3D view to clipboard](http://forum.freecadweb.org/viewtopic.php?f=3&t=16731).

## Script

L'icône pour votre barre d'outil ![](/images/Macro_Copy3DViewToClipboard.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Copy3DViewToClipboard/fr&oldid=1201401>"
