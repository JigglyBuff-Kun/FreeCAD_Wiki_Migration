---
title: PDWrapper
---

|                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Pdwrapper                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                            |
| Encapsulate non-PartDesign solids to work in PartDesign Macro version: 0.2023.08.13 Last modified: 2023-08-13 FreeCAD version: python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:Workbench_PartDesign.svg) Author: TheMarkster               |
| Author                                                                                                                                                                                                                                                                 |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://wiki.freecadweb.org/File:Workbench_PartDesign.svg)                                                                                                                                                                                              |
| Links                                                                                                                                                                                                                                                                  |
| [Full Documentation on Github](https://github.com/mwganson/pdwrapper) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                          |
| 0.2023.08.13                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                     |
| 2023-08-13                                                                                                                                                                                                                                                             |
| FreeCAD Version(s)                                                                                                                                                                                                                                                     |
| python 3 versions                                                                                                                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                 |
| See also                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                        |

## Description

PDWrapper encapsulates solids created in other workbenches inside a PartDesign::FeaturePython object so that they behave as if they were native PartDesign features. In the screenshot below it shows a Part Workbench fillet of a PartDesign Additive Box encapsulated inside a PDWrapper object of type Common Additive. But PDWrapper can do more than just encapsulate non-PartDesign solids for use in a PartDesign Body. It can also encapsulate PartDesign features and change their nature. For example, you can encapsulate a PartDesign Hole inside a PDWrapper Additive type and turn the Hole into a threaded rod (presuming the Hole is threaded). With PDWrapper you can create types of Primitives that are not available, such as Common (Intersection) types and XOR types. It also allows to dynamically include/exclude some solid features from the Body's Tip shape.

Examples and full documentation can be found on github: [PDWrapper](https://github.com/mwganson/pdwrapper).

![](/src/assets/images/Pdwrapper_scr.png)

Macro PDWrapper screenshot‎

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro)_

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
    "https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170/raw/addc2f23ca223fd4f3332cfa04f2264ef0ee908b/Pdwrapper.FCMacro>">raw code</a>

ToolBar Icon
![](/src/assets/images/Workbench_PartDesign.svg)

## Script

**Macro Pdwrapper.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170)

[Pdwrapper.FCMacro](https://gist.github.com/mwganson/4106e84eeaaf4d6e056cd286cbc39170)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PDWrapper/en&oldid=1297689>"
