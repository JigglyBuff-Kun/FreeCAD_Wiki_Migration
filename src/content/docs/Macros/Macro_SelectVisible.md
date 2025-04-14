---
title: SelectVisible
---

|                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro SelectVisible                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                              |
| All visible objects in the tree and only these will be selected. Macro version: 1.0 Last modified: 2016-04-08 FreeCAD version: All Download: [ToolBar Icon](https://wiki.freecad.org/images/5/51/SelectVisible.png) Author: galou_breizh |
| Author                                                                                                                                                                                                                                   |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                       |
| Download                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://wiki.freecad.org/images/5/51/SelectVisible.png)                                                                                                                                                                   |
| Links                                                                                                                                                                                                                                    |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                         |
| Macro Version                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                      |
| Date last modified                                                                                                                                                                                                                       |
| 2016-04-08                                                                                                                                                                                                                               |
| FreeCAD Version(s)                                                                                                                                                                                                                       |
| All                                                                                                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                          |

## Description

All visible objects in the tree and only these will be selected.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro>">raw code</a>

## Usage

Copy the macro in your macros' folder and run (see [How to install macros](/How_to_install_macros "How to install macros") for further details).

## Script

The latest version of the macro is to be found at <https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/SelectVisible.FCMacro>

ToolBar Icon ![](/images/SelectVisible.png)

**Macro_Select.FCMacro**

```
# FreeCAD Macro SelectVisible

__Name__ = 'Select Visible'
__Comment__ = 'All visible objects in the tree will be selected'
__Web__ = 'http://www.freecadweb.org/wiki/Macro_SelectVisible'
__Wiki__ = 'http://www.freecadweb.org/wiki/Macro_SelectVisible'
__Icon__ = 'https://wiki.freecad.org/images/5/51/SelectVisible.png'
__Help__ = 'All visible objects in the tree and only these will be selected'
__Author__ = 'galou_breizh'
__Version__ = '1.0'
__Status__ = 'Production'
__Requires__ = ''

import FreeCAD as App
import FreeCADGui as Gui

doc = App.activeDocument()

if not doc:
    App.Console.PrintWarning('SelectVisible: no active document')
else:
    Gui.Selection.clearSelection()
    for o in doc.Objects:
        if o.ViewObject.Visibility:
            Gui.Selection.addSelection(o)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SelectVisible/en&oldid=1346303>"
