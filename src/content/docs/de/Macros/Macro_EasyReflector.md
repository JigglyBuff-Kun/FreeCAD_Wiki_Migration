---
title: EasyReflector
---

|                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Makro EasyReflector                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                |
| Texturen auf einfache Art verwalten mit diesem Feature-Python-Objekt Macro version: 0.2023.12.09 Last modified: 2023-12-09 FreeCAD version: Versionen auf Basis von Python 3 Download: [Werkzeugleistensymbol](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg) Author: TheMarkster |
| Author                                                                                                                                                                                                                                                                                     |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                            |
| Download                                                                                                                                                                                                                                                                                   |
| [Werkzeugleistensymbol](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg)                                                                                                                                                                                                            |
| Links                                                                                                                                                                                                                                                                                      |
| [Full Documentation on Github](https://github.com/mwganson/EasyReflector) [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                 |
| Macro Version                                                                                                                                                                                                                                                                              |
| 0.2023.12.09                                                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                                                         |
| 2023-12-09                                                                                                                                                                                                                                                                                 |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                         |
| Versionen auf Basis von Python 3                                                                                                                                                                                                                                                           |
| Default shortcut                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                            |

## Beschreibung

EasyReflector erleichtert den Umgang mit Texturen in FreeCAD. Es erstellt ein [Feature-Python](/App_FeaturePython/de "App FeaturePython/de")-Objekt, dass bestehen bleibt, wenn ein Dokument erneut geladen wird. Es stehen einige mitgelieferte Texturen zur Auswahl; alternativ können eigene Bilder verwendet werden.

Die vollständige Beschreibung befindet sich auf github: [EasyReflector](https://github.com/mwganson/EasyReflector).

![](/images/EasyReflector_screenshot01.png)

Makro EasyReflector, Bildschirmfoto

## Legende

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro)_

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
    "https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50/raw/71b325b7c1568e2460beb099f553225a5516fc44/EasyReflector.FCMacro>">raw code</a>

Werkzeugleisten-Symbol
![](/images/EasyReflectorIcon.svg)

## Skript

**Macro EasyReflector.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

[EasyReflector.FCMacro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EasyReflector/de&oldid=1358623>"
