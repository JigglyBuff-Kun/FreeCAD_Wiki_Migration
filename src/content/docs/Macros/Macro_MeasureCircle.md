---
title: MeasureCircle
---

|                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MeasureCircle                                                                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                                                               |
| This macro will report the computed radius and center of a circle given 3 vertices or a circular edge. A line is drawn from the center of the circle to the first vertex, which may be used for future measurements. Macro version: 1.0 Last modified: 2016-04-08 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png) Author: galou_breizh |
| Author                                                                                                                                                                                                                                                                                                                                                                                                    |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png)                                                                                                                                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                          |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                        |
| 2016-04-08                                                                                                                                                                                                                                                                                                                                                                                                |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                    |
| See also                                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                           |

## Description

This macro will report the computed radius and center of a circle given 3 vertices or a circular edge.
A line is drawn from the center of the circle to the first vertex, which may be used for future measurements.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro>">raw code</a>

## How To Use

Copy the macro in your macros' folder and run (see [How to install macros](/How_to_install_macros "How to install macros") for further details).

Just select the vertices and the result will be shown in the Report View.
Edges may also be selected and count as two vertices.
A circular edge can also be selected.
If two edges are selected the end vertex of the second edge is not used in the calculation.

You can either select elements and then launch the macro or launch the macro without selection and select elements after launch.
If not enough elements are selected before launching the macro, you must select the missing elements.

## Code

The latest version of the macro is to be found at [MeasureCircle.FCMacro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro) but the easiest way to install this macro is through the [Addon Manager](/Std_AddonMgr "Std AddonMgr").

ToolBar Icon ![](/src/assets/images/Macro_MeasureCircle.png)

**Macro_MeasureCircle.FCMacro**

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeasureCircle/en&oldid=1064552>"
