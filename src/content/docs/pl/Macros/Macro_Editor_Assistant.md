---
title: Makrodefinicja Asystent redaktora
---

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Editor Assistant                                                                                                                                                                                                                                                   |
| Description                                                                                                                                                                                                                                                              |
| Extend functionality of FreeCAD's integrated Python editor Macro version: 2.01 Last modified: 2024-10-10 FreeCAD version: 0.21 or later Download: [ToolBar Icon](https://wiki.freecadweb.org/File:Editor_Assistant_Icon.svg) Author: TheMarkster                         |
| Author                                                                                                                                                                                                                                                                   |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://wiki.freecadweb.org/File:Editor_Assistant_Icon.svg)                                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                                                    |
| [Documentation on Github](https://github.com/mwganson/Editor_Assistant) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                            |
| 2.01                                                                                                                                                                                                                                                                     |
| Date last modified                                                                                                                                                                                                                                                       |
| 2024-10-10                                                                                                                                                                                                                                                               |
| FreeCAD Version(s)                                                                                                                                                                                                                                                       |
| 0.21 or later                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                          |

## Description

The Editor Assistant extends the capabilities of FreeCAD's integrated Python editor. The editor is quite good at what it does, but is somewhat limited in features. This macro attempts to supplement the editor by adding some of these missing features, including: search and replace, bookmarks, help references, snapshots, diffs, find highlighting, snippet text insertion via a templates mechanism, and more.

## Usage

Install and run the macro. A new dialog will appear as a third tab in the Combo view. As a third tab dialog it will not interfere with other task dialogs needing to use the Task tab for their dialogs. (If preferred, you can launch the macro as a dockable floating window by holding the Alt key while executing the macro.)

The macro will feature a list widget showing all the currently open editors. The editor selected will be the current editor to which the macro functions will be applied. When you select an editor from the list widget that editor is given the focus. (But selecting a new editor in the MDI area tab widget does not make it the current editor.) From time to time as new windows are opened and others are closed you will need refresh the list widget by pressing the Refresh button.

Full documentation can be found on GitHub: [Editor Assistant](https://github.com/mwganson/Editor_Assistant).

![](/images/Editor_Assistant_scr1.png)

Macro Editor Assistant screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro)_

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
    "https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6/raw/f3a9d8fa95e8c3f264f376b06f5566c8b03eff5a/Editor_Assistant.FCMacro>">raw code</a>

ToolBar Icon
![](/images/Editor_Assistant_Icon.svg)

## Script

**Macro Editor_Assitant.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6)

[Editor_Assitant.FCMacro](https://gist.github.com/mwganson/20475dad57d9b659190f082d20e3bde6)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Editor_Assistant/pl&oldid=1495048>"
