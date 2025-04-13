---
title: Animator
---

|                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Animator                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                           |
| Animate your model by animating its properties with this feature Python object Macro version: 0.2023.09.30c Last modified: 2022-09-30 FreeCAD version: Python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:Animator.svg) Author: TheMarkster  |
| Author                                                                                                                                                                                                                                                                |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://wiki.freecadweb.org/File:Animator.svg)                                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                 |
| [Full Documentation on Github](https://github.com/mwganson/animator) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                         |
| 0.2023.09.30c                                                                                                                                                                                                                                                         |
| Date last modified                                                                                                                                                                                                                                                    |
| 2022-09-30                                                                                                                                                                                                                                                            |
| FreeCAD Version(s)                                                                                                                                                                                                                                                    |
| Python 3 versions                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                |
| See also                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                       |

## Description

Animator makes it very easy to animate your models by animating various properties. Available supported properties are kept in a drop down list for your convenience. Select the property to animate and double click the Animator object to start the animation. Double click again to stop the animation or let it complete. By default 100 frames are used with the start value of the property = 0 and the step increment of 1.0 per iteration through the loop. All of this easily configurable from the property view.

Full documentation can be found on github: [Animator](https://github.com/mwganson/animator).

![](/src/assets/images/Animator_scr1.png)

Macro Animator screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro)_

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
    "https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358/raw/1ee79040c95862cf416d6fb6e3f7975c1c8a7f74/Animator.FCMacro>">raw code</a>

ToolBar Icon
![](/src/assets/images/Animator.svg)

## Script

**Macro Animator.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358)

[Animator.FCMacro](https://gist.github.com/mwganson/dace9e8dcfd861500647f9405c668358)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Animator/en&oldid=1308079>"
