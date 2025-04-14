---
title: HighlightCommon
---

|                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HightlightCommon                                                                                                                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                                                                                                                           |
| Highlight common parts by showing the common shape in red and setting half-transparency on original parts (the original objects are not modified) Macro version: 2.3.2 Last modified: 2021-07-01 FreeCAD version: 0.17 and above Download: [ToolBar Icon](https://wiki.freecad.org/images/8/85/Macro_HighlightCommon.png) Author: JMG |
| Author                                                                                                                                                                                                                                                                                                                                |
| [JMG](/index.php?title=User:JMG&action=edit&redlink=1 "User:JMG (page does not exist)")                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://wiki.freecad.org/images/8/85/Macro_HighlightCommon.png)                                                                                                                                                                                                                                                        |
| Links                                                                                                                                                                                                                                                                                                                                 |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                      |
| Macro Version                                                                                                                                                                                                                                                                                                                         |
| 2.3.2                                                                                                                                                                                                                                                                                                                                 |
| Date last modified                                                                                                                                                                                                                                                                                                                    |
| 2021-07-01                                                                                                                                                                                                                                                                                                                            |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                    |
| 0.17 and above                                                                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                |
| See also                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                       |

## Description

Highlight common parts by showing the common shape in red and setting half-transparency on original parts (the original objects are not modified)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro>">raw code</a>

![](/images/Captura_de_pantalla_de_2015-09-10_11-17-30.png)

Volume common of objects selected

## Script

ToolBar Icon ![](/images/Macro_HighlightCommon.png)

**Macro_HighlightCommon.FCMacro**

The code is visible on Github: [Utility/HighlightCommon.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightCommon.FCMacro).

## Links

- See for the complementary macro [Macro_HighlightDifference](/Macro_HighlightDifference "Macro HighlightDifference")
- My blog [Linux for an engineer](http://linuxforanengineer.blogspot.com.es/) for the code and other interesting macros for FreeCAD
- The discussion on forum ["collision detection", overlapping](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightCommon/en&oldid=1344621>"
