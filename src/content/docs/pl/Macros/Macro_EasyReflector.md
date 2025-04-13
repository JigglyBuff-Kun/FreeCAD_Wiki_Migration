---
title: Makrodefinicja Łatwy Reflektor
---

|                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro EasyReflector                                                                                                                                                                                                                                                                                                   |
| Opis                                                                                                                                                                                                                                                                                                                  |
| Łatwe zarządzanie teksturami za pomocą obiektu Cecha Python Macro version: 0.2023.12.09 Last modified: 2023-12-09 FreeCAD version: Wersje Python 3 Download: [ToolBar Icon](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg) Autor: TheMarkster                                                                |
| Autor                                                                                                                                                                                                                                                                                                                 |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                       |
| Do pobrania                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://wiki.freecadweb.org/File:EasyReflectorIcon.svg)                                                                                                                                                                                                                                                |
| Odnośniki                                                                                                                                                                                                                                                                                                             |
| [Full Documentation on Github](https://github.com/mwganson/EasyReflector) [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl") |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                 |
| 0.2023.12.09                                                                                                                                                                                                                                                                                                          |
| Data zmian                                                                                                                                                                                                                                                                                                            |
| 2023-12-09                                                                                                                                                                                                                                                                                                            |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                        |
| Wersje Python 3                                                                                                                                                                                                                                                                                                       |
| Domyślny skrót                                                                                                                                                                                                                                                                                                        |
| _Brak_                                                                                                                                                                                                                                                                                                                |
| Zobacz również                                                                                                                                                                                                                                                                                                        |
| _-_                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                       |

## Opis

**Latwy Reflektor** ułatwia zarządzanie teksturami w FreeCAD. Tworzy obiekt [Cecha Python](/App_FeaturePython/pl "App FeaturePython/pl"), który utrzymuje się po ponownym załadowaniu dokumentu. Wybieraj spośród wielu dołączonych tekstur lub używaj własnych obrazów.

Pełną dokumentację można znaleźć w serwisie GitHub: [EasyReflector](https://github.com/mwganson/EasyReflector).

![](/images/EasyReflector_screenshot01.png)

Zrzut ekranu z ekranu Makrodefinicji Łatwy leflektor

## Legenda

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

Ikonka paska narzędzi
![](/images/EasyReflectorIcon.svg)

## Skrypt

**Macro EasyReflector.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

[EasyReflector.FCMacro](https://gist.github.com/mwganson/aea3c51981c0b994cfd961cf4db56b50)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_EasyReflector/pl&oldid=1339681>"
