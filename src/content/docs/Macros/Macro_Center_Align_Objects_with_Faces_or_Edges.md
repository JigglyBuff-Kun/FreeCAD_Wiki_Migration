---
title: Center Align Objects with Faces or Edges
---

:::caution
These tools are now included in theManipulator Workbench. Install this workbench for the latest updates on these tools.
:::

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Center Faces of Parts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| This macro Aligns Objects through Faces or Edges constraints. These tools are now included in the [Manipulator Workbench](https://github.com/easyw/Manipulator). Install this workbench for the latest updates on these tools. Macro version: 1.5.3 Last modified: 2017-10-01 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-icon](https://www.freecadweb.org/wiki/images/3/3d/Manipulator_Mover.svg) [Caliper-icon](https://www.freecadweb.org/wiki/images/1/10/Manipulator_Caliper.svg) Author: easyw-fc |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [easyw-fc](/index.php?title=User:Easyw-fc&action=edit&redlink=1 "User:Easyw-fc (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-icon](https://www.freecadweb.org/wiki/images/3/3d/Manipulator_Mover.svg) [Caliper-icon](https://www.freecadweb.org/wiki/images/1/10/Manipulator_Caliper.svg)                                                                                                                                                                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2017-10-01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Description

This macro Aligns Objects through Faces or Edges constraints

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py)_

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
    "https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>">raw code</a>

## Tools

\*_Aligner_- ![](/src/assets/images/Macro_Center_Align_Objects_with_Faces_or_Edges.svg): a set of tools to move and align 3D parts

\*_Mover_- ![](/src/assets/images/Manipulator_Mover.svg): a set of tools to move and rotate 3D parts on different Axis

\*_Measure_- ![](/src/assets/images/Manipulator_Caliper.svg): a set of tools to measure 3D parts, with some Snap facility and Radius, Length, Angle measurements.

These helpers work with **Part, App::Part and Body objects**.
Each Tool can be **Floating** or **Docked Left or Right**.

---

## OLD References

This macro covers the following constraints:

- Concentric constraint among non cylindrical parts;
- Constraint on center Faces and/or Edges.
- It works also with the new Body and App::Part containers, as well as with STEP hierarchy.

![](/src/assets/images/Center-align-faces.png)

![](/src/assets/images/Center-align-faces-in-action.gif)

![](/src/assets/images/Center-align-Body-objects.gif)

![](/src/assets/images/Utube-alignment-tool-tutorial.png)

[Aligning tool video tutorial](https://youtu.be/qzixT157jJU)

![](/src/assets/images/Utube-alignment-STEP-models.png)

[Aligning STEP models video tutorial](https://youtu.be/aQcPqhlgHBU)

## Usage

Faces or Edges constraint among non cylindrical parts: Just open a FC document, launch the Macro and select two or more Faces/Edges to be aligned. Click on Align button and that's it!

## Script

The icon for your toolbar ![](/src/assets/images/Macro_Center_Align_Objects_with_Faces_or_Edges.png)

**CenterAlignObjectswFacesEdges.py**

After downloading the file here  
GitHub page

<https://github.com/easyw/FreeCAD_Macros/tree/master/Align%20Objects>

code:

<https://github.com/easyw/FreeCAD_Macros/raw/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>

you need to copy the file to your macro directory.

[How to install macros](/How_to_install_macros "How to install macros")

## Link

Forum : [Faces or Edges constraint among non cylindrical parts Macro](http://forum.freecadweb.org/viewtopic.php?f=22&t=18655)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Center_Align_Objects_with_Faces_or_Edges/en&oldid=692096>"
