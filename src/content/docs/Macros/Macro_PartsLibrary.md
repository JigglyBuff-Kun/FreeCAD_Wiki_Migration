---
title: PartsLibrary
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parts Library                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Starts the Parts Library browser FreeCAD. The FreeCAD Parts Library is a community effort to provide a free library of reusable Parts to be inserted into your projects. You are welcome to participate and submit parts to the library, but keep in mind you must have rights to share them. See the readme file for more details. Macro version: 01.00 Last modified: 2014-03-25 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png) Author: yorik |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                            |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 01.00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2014-03-25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Description

The [FreeCAD Parts Library](http://github.com/yorikvanhavre/FreeCAD-library) is a community effort to provide a free library of reusable Parts to be inserted into your projects. You are welcome to participate and submit parts to the library, but keep in mind you must have rights to share them. See the [readme](http://github.com/yorikvanhavre/FreeCAD-library) file for more details.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro>">raw code</a>

This macro, which is also included in the library, will show a browser panel inside the FreeCAD interface, from which you can easily browse the contents of the library, and insert a part into the current document, by double-clicking it.

![](/images/Freecad-parts-library.jpg)

## Script

ToolBar Icon ![](/images/FreeCAD_Doc.png)

[PartsLibrary.FCMacro](http://github.com/yorikvanhavre/FreeCAD-library/blob/master/PartsLibrary.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PartsLibrary/en&oldid=500538>"
