---
title: Joint
---

|                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Joint                                                                                                                                                                                                                                                                                              |
| Description                                                                                                                                                                                                                                                                                              |
| Make joints of various types, including mortise/tenon, box joints, dovetail joints, and various snap joints Macro version: 0.2022.12.21 Last modified: 2022-12-21 FreeCAD version: Python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:Macro_Joint_Icon.svg) Author: TheMarkster |
| Author                                                                                                                                                                                                                                                                                                   |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://wiki.freecadweb.org/File:Macro_Joint_Icon.svg)                                                                                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                                                                    |
| [Full Documentation on Github](https://github.com/mwganson/joint) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                       |
| Macro Version                                                                                                                                                                                                                                                                                            |
| 0.2022.12.21                                                                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                                                                       |
| 2022-12-21                                                                                                                                                                                                                                                                                               |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                       |
| Python 3 versions                                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                          |

## Description

This macro is used to create joints of various types, including mortise and tenon joints, box joints, dovetail joints, finger joints (using dovetail type), and a few snap joints, including cantilever, annular, ball, and split types.

The macro works in [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench"), but also with solids created in any other workbench.

Full documentation can be found on github: [Joint](https://github.com/mwganson/joint).

## Usage

1. Select a face.
2. Run the macro.
3. The **Joint type** dialog opens.
4. Select a joint type from the dropdown list.
5. Press the OK button.
6. A parametric joint object is created.
7. Optionally change the properties of the joint object.

![](/src/assets/images/Macro_joint_scr1.png)

Macro Joint screenshot -- a few of the joint types that can be made‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro)_

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
    "https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9/raw/2a3530b44bfbad473647d8d7060b278c95c255e1/Joint.FCMacro>">raw code</a>

ToolBar Icon
![](/src/assets/images/Macro_Joint_Icon.svg)

## Script

**Macro Joint.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9)

[Joint.FCMacro](https://gist.github.com/mwganson/09d70aa11183e57b5f5925169b4c70b9)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Joint/en&oldid=1214988>"
