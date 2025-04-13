---
title: Makrodefinicja Menadżer pasków narzędzi
---

|                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Makrodefinicja: Menadżer pasków narzędzi                                                                                                                                                                                                                                                                                            |
| Opis                                                                                                                                                                                                                                                                                                                                |
| Łatwe zarządzanie niestandardowymi paskami narzędzi makrodefinicji Macro version: 0.2023.10.27 Last modified: 2023-10-27 FreeCAD version: wersja ze środowiskiem Python 3 Download: [Ikonka paska narzędzi](https://wiki.freecad.org/File:MacroToolbarManager_icon.svg) Autor: TheMarkster                                          |
| Autor                                                                                                                                                                                                                                                                                                                               |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                                                                                     |
| Do pobrania                                                                                                                                                                                                                                                                                                                         |
| [Ikonka paska narzędzi](https://wiki.freecad.org/File:MacroToolbarManager_icon.svg)                                                                                                                                                                                                                                                 |
| Odnośniki                                                                                                                                                                                                                                                                                                                           |
| [Pełna dokumentacja w serwisie Github](https://github.com/mwganson/MacroToolbarManager) [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl") |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                               |
| 0.2023.10.27                                                                                                                                                                                                                                                                                                                        |
| Data zmian                                                                                                                                                                                                                                                                                                                          |
| 2023-10-27                                                                                                                                                                                                                                                                                                                          |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                      |
| wersja ze środowiskiem Python 3                                                                                                                                                                                                                                                                                                     |
| Domyślny skrót                                                                                                                                                                                                                                                                                                                      |
| _Brak_                                                                                                                                                                                                                                                                                                                              |
| Zobacz również                                                                                                                                                                                                                                                                                                                      |
| _-_                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                     |

## Opis

Menedżer pasków narzędzi ułatwia edycję niestandardowych pasków narzędzi makrodefinicji.

Pełną dokumentację można znaleźć w serwisie GitHub: [MacroToolbarManager](https://github.com/mwganson/MacroToolbarManager).

![](/images/MacroToolbarManager_scr01.png)

Zrzut ekranu z Menedżera pasków narzędzi‎

## Legenda

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro)_

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
    "https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660/raw/5bcd7bff7b451709ff300e3ee1269ff379c9b087/MacroToolbarManager.FCMacro>">raw code</a>

Ikonka paska narzędzi
![](/images/MacroToolbarManager_icon.svg)

## Skrypt

**Macro MacroToolbarManager.FCMacro**

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660)

[MacroToolbarManager.FCMacro](https://gist.github.com/mwganson/3464e2d54e859ee94ec8d7ce20c75660)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MacroToolbarManager/pl&oldid=1491259>"
