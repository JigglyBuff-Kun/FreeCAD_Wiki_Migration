---
title: HighlightDifference
---

|                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HighlightDifference                                                                                                                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                                                                                                                   |
| Compute the difference between two shapes. Additions are marked red, removals are marked green. Both original parts will be half transparent. The volume of the additions and removals are printed in the console. Macro version: 1.0 Last modified: 2015-09-24 Download: [ToolBar Icon](https://wiki.freecad.org/images/2/2e/HighlightDifference.png) Author: Gaël Ecorchard |
| Author                                                                                                                                                                                                                                                                                                                                                                        |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")                                                                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://wiki.freecad.org/images/2/2e/HighlightDifference.png)                                                                                                                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                                                                                         |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                              |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0                                                                                                                                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                                                                                                                            |
| 2015-09-24                                                                                                                                                                                                                                                                                                                                                                    |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                        |
| See also                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                               |

## Description

Compute the difference between two shapes. Additions are marked red, removals are marked green. Both original parts will be half transparent. The volume of the additions and removals are printed in the console.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro>">raw code</a>

![](/images/Macro_HighlightDifference_02.png)

Result difference two objects created

## Example

- ![Original objects](/images/Macro_HighlightDifference_00.png)

  Original objects

- [![The resulting objects are coloured red and green (here offset)](/images/Macro_HighlightDifference_02.png)](/File:Macro_HighlightDifference_02.png "The resulting objects are coloured red and green (here offset)")

  The resulting objects are coloured red and green (here offset)

- ![The original objects are transparent 80% and not modify](/images/Macro_HighlightDifference_01.png)

  The original objects are transparent 80% and not modify

## Script

The code is visible on Github: [Utility/HighlightDifference.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightDifference.FCMacro).

## Links

- See for the complementary macro [Macro_HighlightCommon](/Macro_HighlightCommon "Macro HighlightCommon")
- The discussion on forum ["collision detection", overlapping](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightDifference/en&oldid=1344637>"
