---
title: EasyReflector
---

|                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro EasyReflector                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                |
| Easily manage textures with this Feature Python object Macro version: 0.2023.12.09 Last modified: 2023-12-09 FreeCAD version: Python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg) Author: TheMarkster                       |
| Author                                                                                                                                                                                                                                                                     |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                            |
| Download                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg)                                                                                                                                                                                                     |
| Links                                                                                                                                                                                                                                                                      |
| [Full Documentation on Github](https://github.com/mwganson/EasyReflector) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                              |
| 0.2023.12.09                                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                                         |
| 2023-12-09                                                                                                                                                                                                                                                                 |
| FreeCAD Version(s)                                                                                                                                                                                                                                                         |
| Python 3 versions                                                                                                                                                                                                                                                          |
| Default shortcut                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                            |

## Description

EasyReflector makes it easy to manage textures in FreeCAD. It creates a [Feature Python](/App_FeaturePython "App FeaturePython") object that persists when the document is reloaded. Select from a variety of included textures, or use your own images.

Full documentation can be found on github: [EasyReflector](https://github.com/mwganson/EasyReflector).

![](/src/assets/images/EasyReflector_screenshot01.png)

Macro EasyReflector screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro)_

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
    "https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro>">raw code</a>

ToolBar Icon
![](/src/assets/images/EasyReflectorIcon.svg)

## Script

**Macro EasyReflector.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

[EasyReflector.FCMacro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EasyReflector/en&oldid=1339516>"
