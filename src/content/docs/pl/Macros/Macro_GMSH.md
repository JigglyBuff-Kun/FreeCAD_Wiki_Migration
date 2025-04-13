---
title: Makrodefinicja GMSH
---

|                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GMSH Macro                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                   |
| Create FEM Meshes by GMSH Mesh Generator. It is possible to create linear or bilinear (quadratic) Beam-, Shell- and Volumeelements in Macro version: 1.0 Last modified: 2015-08-24 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png) Author: psicofil |
| Author                                                                                                                                                                                                                                                                                                        |
| [psicofil](/index.php?title=User:Psicofil&action=edit&redlink=1 "User:Psicofil (page does not exist)")                                                                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png)                                                                                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                                                                         |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                              |
| Macro Version                                                                                                                                                                                                                                                                                                 |
| 1.0                                                                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                                                            |
| 2015-08-24                                                                                                                                                                                                                                                                                                    |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                            |
| All                                                                                                                                                                                                                                                                                                           |
| Default shortcut                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                        |
| See also                                                                                                                                                                                                                                                                                                      |
| [FEM Mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape")                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                               |

## Important information

This macro is outdated. It is Python 2.x code. All the code has been directly integrated in the FEM Workbench before FreeCAD Version 0.20. See [FEM MeshGmshFromShape](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape").

## Description

Simple macro to create FEM Meshes by the Mesh Generator GMSH. It is possible to create linear or bilinear (quadratic) Beam-, Shell- and Volumeelements in

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro)_

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
    "https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro>">raw code</a>

![GMSH](/images/Macro_GMSH00.png)

## Script

The macro you can find in the following github repository: [GMSH Macro](https://github.com/psicofil/Macros_FreeCAD/blob/master/Macros/GMSHMesh.FCMacro)

ToolBar Icon ![](/images/Macro_GMSH.png)

**GMSHMesh.FCMacro GMSH Macro.FCMacro**

## Additional Installations

GMSH has to be installed. See [gmsh.info](http://gmsh.info/). The macro is intended to run on Linux, OSX and Windows operating system. The binary path of GMSH has to be adapted in the macro.

## Link

The page discussion [GMSH macro](http://forum.freecadweb.org/viewtopic.php?t=11182)

[See the how to use the macro on YouTube.](https://www.youtube.com/watch?v=ZcG5EEUe3yc)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_GMSH/pl&oldid=1394316>"
