---
title: Intersection
---

|                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Intersection                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                               |
| Finds the intersection between 2 or 3 selected edges / faces. Macro version: 2024.10.17 Last modified: 2024-10-17 FreeCAD version: 0.19 or later Download: [ToolBar Icon](https://wiki.freecadweb.org/images/e/e7/Intersection_Icon.svg) Author: TheMarkster              |
| Author                                                                                                                                                                                                                                                                    |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://wiki.freecadweb.org/images/e/e7/Intersection_Icon.svg)                                                                                                                                                                                             |
| Links                                                                                                                                                                                                                                                                     |
| [Full Documentation on Github](https://github.com/mwganson/intersection) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                             |
| 2024.10.17                                                                                                                                                                                                                                                                |
| Date last modified                                                                                                                                                                                                                                                        |
| 2024-10-17                                                                                                                                                                                                                                                                |
| FreeCAD Version(s)                                                                                                                                                                                                                                                        |
| 0.19 or later                                                                                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                    |
| See also                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                           |

## Description

Finds the intersection between two or three selected edges or faces, also works with Datum Planes and Datum Lines. Creates a parametric feature python object containing the shape of the intersection. The intersection is typically either an edge or a vertex.

## Usage

Select two or three edges, faces, Datum Planes or Datum Lines in the [3D view](/3D_view "3D view"), then run the macro. Full documentation can be found on github: [Intersection on github](https://github.com/mwganson/intersection)

![](/images/Macro_Intersection_scr.png)

Macro Intersection screenshot

### Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py)_

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
    "https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758/raw/dff80f8b50d83312e936104f6b062b88279add64/Intersection.py>">raw code</a>

ToolBar Icon
![](/images/Intersection_Icon.svg)

### Script

**Macro Intersection.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758)

[Intersection.py](https://gist.github.com/mwganson/acf6d419ee0d3b5636ea82221846d758)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Intersection/en&oldid=1497500>"
