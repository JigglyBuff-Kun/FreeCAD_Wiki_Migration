---
title: MacroToolbarManager
---

|                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MacroToolbarManager                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                      |
| Easily manage custom macro toolbars Macro version: 0.2023.10.27 Last modified: 2023-10-27 FreeCAD version: Python 3 versions Download: [ToolBar Icon](https://wiki.freecad.org/File:MacroToolbarManager_icon.svg) Author: TheMarkster                                            |
| Author                                                                                                                                                                                                                                                                           |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://wiki.freecad.org/File:MacroToolbarManager_icon.svg)                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                            |
| [Full Documentation on Github](https://github.com/mwganson/MacroToolbarManager) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                                    |
| 0.2023.10.27                                                                                                                                                                                                                                                                     |
| Date last modified                                                                                                                                                                                                                                                               |
| 2023-10-27                                                                                                                                                                                                                                                                       |
| FreeCAD Version(s)                                                                                                                                                                                                                                                               |
| Python 3 versions                                                                                                                                                                                                                                                                |
| Default shortcut                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                           |
| See also                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                  |

## Description

MacroToolbarManager makes it easy to edit custom macro toolbars.

Full documentation can be found on github: [MacroToolbarManager](https://github.com/mwganson/MacroToolbarManager).

![](/src/assets/images/MacroToolbarManager_scr01.png)

Macro MacroToolbarManager screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro)_

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
    "https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro>">raw code</a>

ToolBar Icon
![](/src/assets/images/MacroToolbarManager_icon.svg)

## Script

**Macro MacroToolbarManager.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660)

[MacroToolbarManager.FCMacro](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroToolbarManager/en&oldid=1316014>"
