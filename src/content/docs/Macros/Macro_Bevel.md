---
title: Bevel
---

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Bevel                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                          |
| Bevel selected vertices of solid objects, parametric, compatible with Part Design Macro version: 0.2022.04.06b Last modified: 2022-04-06 FreeCAD version: Python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:bevel.svg) Author: TheMarkster |
| Author                                                                                                                                                                                                                                                               |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://wiki.freecadweb.org/File:bevel.svg)                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                |
| [Full Documentation on Github](https://github.com/mwganson/Bevel) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")   |
| Macro Version                                                                                                                                                                                                                                                        |
| 0.2022.04.06b                                                                                                                                                                                                                                                        |
| Date last modified                                                                                                                                                                                                                                                   |
| 2022-04-06                                                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                                                   |
| Python 3 versions                                                                                                                                                                                                                                                    |
| Default shortcut                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |

## Description

This macro is used to bevel the selected vertices of solid objects, it also works with faces. If the selected object is a Part Design feature the Bevel parametric object will place itself into the Part Design body and further modeling can be done on the same body. If the selected object is not a Part Design feature, then a new object is added to the tree as a standard, parametric feature python object.

Usage: Select vertices in the 3D view that you desire to bevel and run the macro. You can also select the entire object in the tree, in which case all the vertices will be beveled. This is very similar to other dressup tools in FreeCAD, such as Fillets and Chamfers, and behaves very similarly to those objects, except it is cross-compatible with both Part and Part Design workbenches.

Full documentation can be found on github: [Bevel](https://github.com/mwganson/Bevel).

![](/src/assets/images/Bevel_scr.png)

Macro Bevel screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro)_

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
    "https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d/raw/db5e9ecdba031bc743a9bd1e3a39e257ee523abc/Bevel.FCMacro>">raw code</a>

ToolBar Icon
![](/src/assets/images/Bevel.svg)

## Script

**Macro Bevel.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d)

[Bevel.FCMacro](https://gist.github.com/mwganson/25ee4dc925c8bcf1182bd9979025ed2d)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Bevel/en&oldid=1126260>"
