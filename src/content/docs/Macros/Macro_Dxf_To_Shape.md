---
title: Dxf To Shape
---

:::caution
Documentation not finished, not translate thanks
:::

|                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Dxf To Shape                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                             |
| Utility to create a unique wire with many wires Macro version: 00.00 Last modified: 2020-09-04 FreeCAD version: 0.18, 0.19 Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Dxf_To_Shape.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                  |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Dxf_To_Shape.png)                                                                                                                                                      |
| Links                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                        |
| Macro Version                                                                                                                                                                                                                           |
| 00.00                                                                                                                                                                                                                                   |
| Date last modified                                                                                                                                                                                                                      |
| 2020-09-04                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                      |
| 0.18, 0.19                                                                                                                                                                                                                              |
| Default shortcut                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                         |

## Description

Macro utility to create a unique wire with many wires. Types of wire available are: MakeWire, Bspline, BsplineCurve, BsplineCurve + Arc, Polygon, and Bezier curve.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/0596ad522b151806d5970586a5051e4b/raw/23fe427f5f00df81c9a7d0a877cf58c052ea5f76/Macro_DXF_to_Shape.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/0596ad522b151806d5970586a5051e4b/raw/23fe427f5f00df81c9a7d0a877cf58c052ea5f76/Macro_DXF_to_Shape.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/0596ad522b151806d5970586a5051e4b/raw/23fe427f5f00df81c9a7d0a877cf58c052ea5f76/Macro_DXF_to_Shape.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/0596ad522b151806d5970586a5051e4b/raw/23fe427f5f00df81c9a7d0a877cf58c052ea5f76/Macro_DXF_to_Shape.FCMacro>">raw code</a>

## Usage

- Downgrade the compound line to work with a single line
- Discretize the first line
- The linetest is created by choosing one of the following types: MakeWire, Bspline, BsplineCurve, Polygon, BezCurve (display the orientation Begin - End (Reversed Forward))
- test is good .. then Save DataT coordinates in file (and Del Test If you want)
- second line same first line and accord end to begin ....
- test is good .. then Save DataT coordinates in file (and Del Test If you want)
- ...... tests finished
- Read DataT saved in on unique wire with the type line selected

you can also test one sweep, force reverse, close wire, create points, cloud...

you can also Save the file to disk

( Save DataT, Read DataT, Reset DataT Are the Temporary working file)

![Macro_Dxf_To_Shape](/src/assets/images/Macro_DXF_To_Shape_00.png)

## Script

The icon for you toolBar ![](/src/assets/images/Macro_Dxf_To_Shape.png) copy in same directory to the macro

[How to Customize Toolbars](/Customize_Toolbars "Customize Toolbars"), [How to install macros](/How_to_install_macros "How to install macros")

The script on github [Macro_DXF_to_Shape.FCMacro](https://gist.github.com/mario52a/0596ad522b151806d5970586a5051e4b)

## Example

![](/src/assets/images/Macro_Dxf_To_Shape_Convert_Wire_To_BSplineCurve.gif)

Convert Wire (multi lines) in BsplineCurve

![](/src/assets/images/Macro_Dxf_To_Shape_Convert_Wire_To_BSplineCurve02.gif)

Convert wire with selected face

## Links

- More of mario52's macros can be found on [Github](https://gist.github.com/mario52a)

## Version

- 04/09/2020 ver 00.00 : add duplicate edge button

- 13/02/2020 ver 00.00 :

- 21/11/2016 ver 00.00 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Dxf_To_Shape&oldid=753148>"
