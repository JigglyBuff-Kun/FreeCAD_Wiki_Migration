---
title: Honeycomb
---

|                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Honeycomb                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                            |
| Create a fully parametric feature Python Honeycomb object, compatible in and outside of Part Design Macro version: 0.2024.08.27 FreeCAD version: Python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:Macro_Honeycomb.svg) Author: TheMarkster  |
| Author                                                                                                                                                                                                                                                                 |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://wiki.freecadweb.org/File:Macro_Honeycomb.svg)                                                                                                                                                                                                   |
| Links                                                                                                                                                                                                                                                                  |
| [Full Documentation on Github](https://github.com/mwganson/honeycomb) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                          |
| 0.2024.08.27                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                        |
| FreeCAD Version(s)                                                                                                                                                                                                                                                     |
| Python 3 versions                                                                                                                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                 |
| See also                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                        |

## Description

Macro Honeycomb creates a fully parametric Honeycomb object that is compatible inside and outside of Part Design workbench. The honeycomb grid includes an optional border and can be either oval-shaped (elliptical) or rectangular. It is an update for and eventual replacement of Macro FCHoneycombMaker, which does not produce a feature Python object, but rather relies on a spreadsheet and some Draft arrays.

Full documentation can be found on github: [Honeycomb](https://github.com/mwganson/honeycomb).

![](/images/Honeycomb_scr1.png)

Macro Honeycomb screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py)_

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
    "https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a/raw/46b27ad36991a460e9772ddb5e73b3115a1329be/Honeycomb.py>">raw code</a>

ToolBar Icon
![](/images/Macro_Honeycomb.svg)

## Script

**Macro Honeycomb.py**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a)

[Honeycomb.py](https://gist.github.com/mwganson/97d185ac2114701b26d3da47dccc9f7a)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Honeycomb/en&oldid=1478044>"
