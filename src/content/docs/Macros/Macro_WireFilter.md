---
title: WireFilter
---

|                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro WireFilter                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                             |
| Filter wires from sketches, 2D offsets, scales, rearranges wire order Macro version: 0.2023.10.19 Last modified: 2022-10-19 FreeCAD version: python 3 versions Download: [ToolBar Icon](https://wiki.freecadweb.org/File:Wirefilter.svg) Author: TheMarkster            |
| Author                                                                                                                                                                                                                                                                  |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://wiki.freecadweb.org/File:Wirefilter.svg)                                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                   |
| [Full Documentation on Github](https://github.com/mwganson/wirefilter) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version                                                                                                                                                                                                                                                           |
| 0.2023.10.19                                                                                                                                                                                                                                                            |
| Date last modified                                                                                                                                                                                                                                                      |
| 2022-10-19                                                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                                                      |
| python 3 versions                                                                                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                         |

## Description

WireFilter is a macro that can be used to filter certain wires from a sketch. It can also be used on any object with wires, such as a solid. With WireFilter you can do a 2D offset of a wire, you can scale the wire, you can use one of 4 different facemakers (Part::FaceMakerBullseye, Part::FaceMakerCheese, Part::FaceMakerSimple, or Part::FaceMakerExtrusion) if you want to make a face. You can also reset the wire order, which can be useful where a loft is criss-crossing because the wire order is different with the 2 sketches being used.

Examples and full documentation can be found on github: [WireFilter](https://github.com/mwganson/wirefilter).

In the screenshot below, WireFilter is used to make faces from a bullseye sketch (with nested holes within holes) for use with a PartDesign::Pad. Normally, Pad cannot manage such sketches, but if we make the face for it (using FaceMakerBullseye) and select the faces for the Pad it will be able to pad the WireFilter.

![](/images/Wirefilter_scr1.png)

Macro WireFilter screenshot‎

## Known Issues

Sometimes Pad cannot find the correct normal and the WireFilter is padded off in the wrong direction. This can be fixed by toggling the Fix Normal property of the WireFilter object, which sets the Pad's custom direction to the correct normal. This also works for Extrude when it fails to find the correct normal.

## Legend

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro)_

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
    "https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c/raw/28575fbb2042790d779bcd293c048a4123f4a771/wirefilter.FCMacro>">raw code</a>

ToolBar Icon
![](/images/Wirefilter.svg)

## Script

**Macro Wirefilter.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c)

[Wirefilter.FCMacro](https://gist.github.com/mwganson/0aedd5e9057650d0a1f0483f3cc2fa6c)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_WireFilter/en&oldid=1313302>"
