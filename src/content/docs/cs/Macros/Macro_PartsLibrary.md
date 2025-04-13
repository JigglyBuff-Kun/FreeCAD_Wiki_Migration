---
title: PartsLibrary
---

|                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parts Library                                                                                                                                                                                                              |
| Popis                                                                                                                                                                                                                      |
| Starts the Parts Library browser FreeCAD Version macro : 1.0 Date last modification : 2014-03-25 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png) Autor: yorik |
| Autor                                                                                                                                                                                                                      |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png)                                                                                                                                                |
| Odkazy                                                                                                                                                                                                                     |
| [Makro recepty                                                                                                                                                                                                             | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                      |
| 1.0                                                                                                                                                                                                                        |
| Datum poslední úpravy                                                                                                                                                                                                      |
| 2014-03-25                                                                                                                                                                                                                 |
| Verze FreeCAD                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                        |
| Výchozí zástupce                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                     |
| Viz též                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                            |

## Popis

Knihovna náhradních dílů [FreeCAD Parts Library](http://github.com/yorikvanhavre/FreeCAD-library) je komunitní snahou poskytnout bezplatnou knihovnu opakovaně použitelných částí, která bude vložena do vašich projektů. Jste vítáni, že se můžete účastnit a předložit do knihovny, ale nezapomeňte, že musíte mít práva k jejich sdílení. Podrobnější informace naleznete v souboru [readme](http://github.com/yorikvanhavre/FreeCAD-library).

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro>">raw code</a>

Toto makro, které je také obsaženo v knihovně, zobrazí panel prohlížeče uvnitř rozhraní FreeCAD, ze kterého můžete snadno procházet obsah knihovny a vložit část do aktuálního dokumentu, poklepáním na něj.

![](/images/Freecad-parts-library.jpg)

## Skript

ToolBar Icon ![](/images/FreeCAD_Doc.png)

[PartsLibrary.FCMacro](http://github.com/yorikvanhavre/FreeCAD-library/blob/master/PartsLibrary.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PartsLibrary/cs&oldid=500546>"
