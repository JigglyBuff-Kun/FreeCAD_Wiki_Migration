---
title: Megaminx
---

|                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro_Megaminx                                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                                         |
| This macro creates a virtual [Megaminx](https://en.wikipedia.org/wiki/Megaminx). Last modified: 2019-02-17 FreeCAD version: 0.18 and higher Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/43/Macro_Megaminx.png) Author: aleph0 |
| Author                                                                                                                                                                                                                                              |
| [aleph0](/index.php?title=User:Aleph0&action=edit&redlink=1 "User:Aleph0 (page does not exist)")                                                                                                                                                    |
| Download                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/43/Macro_Megaminx.png)                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                               |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                    |
| Macro Version                                                                                                                                                                                                                                       |
| 1.0                                                                                                                                                                                                                                                 |
| Date last modified                                                                                                                                                                                                                                  |
| 2019-02-17                                                                                                                                                                                                                                          |
| FreeCAD Version(s)                                                                                                                                                                                                                                  |
| 0.18 and higher                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                            |
| [Macro Rubik Cube](/Macro_Rubik_Cube "Macro Rubik Cube")                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                     |

## Description

This macro creates a FreeCAD document containing a virtual a virtual [Megaminx](https://en.wikipedia.org/wiki/Megaminx) and enables you to manipulate it. It displays six views of the Megaminx including each of the twelve faces at least once. There are various arrows (each with a tooltip which will be displayed as long as you hover the mouse over it). By clicking on arrows you can rotate faces of the Megaminx, rotate the whole Megaminx, or rotate or reflect the history which it maintains of the rotations that you have done so far. There is also a Megaminx menu which is shown at the right of the menu bar as long as you have at least one Megaminx document open. From the menu you can display some help text, reset the Megaminx to its initial (solved) state, undo the last rotation (and remove it from the history), copy the history to the clipboard, step through the history, randomise the Megaminx, and enable or disable the echoing of rotations to the Report View. All of these functions can also be invoked by typing suitable commands into the Python console window.

A history saved to the clipboard can be pasted into the Python console window or copied into a file which can be called as a macro into the active Megaminx document. You can have more than one
Megaminx document open at a time, although only one can be active.

## Script

ToolBar icon ![](/src/assets/images/Macro_Megaminx.png)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro)_

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
    "https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro>">raw code</a>

**Macro_Megaminx.FCMacro**

![](/src/assets/images/Macro_Megaminx.png)

## Use

Download the code from <https://github.com/rparkins999/Megaminx> into your macro directory. Run the macro to create a Megaminx document. Then you can play with it. The history functions can be used to construct and save operators (aka algorithms) which do useful transformations on the Megaminx. A suitable set of these will give you a complete solution. The step_history function can be used to help you play back an operator onto a real Megaminx.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Megaminx/en&oldid=1089153>"
