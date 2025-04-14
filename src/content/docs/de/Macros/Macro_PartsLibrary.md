---
title: PartsLibrary
---

|                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parts Library                                                                                                                                                                                                                          |
| Beschreibung                                                                                                                                                                                                                           |
| Startet den Parts Library-Browser FreeCAD Versionsmakro : 01.00 Datum der letzten Änderung : 2014-03-25 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png) Autor: yorik |
| Autor                                                                                                                                                                                                                                  |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                      |
| Herunterladen                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png)                                                                                                                                                            |
| Links                                                                                                                                                                                                                                  |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")           |
| Macro-Version                                                                                                                                                                                                                          |
| 01.00                                                                                                                                                                                                                                  |
| Datum der letzten Änderung                                                                                                                                                                                                             |
| 2014-03-25                                                                                                                                                                                                                             |
| FreeCAD-Version(s)                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                    |
| Standardverknüpfung                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                 |
| Siehe auch                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                        |

## Beschreibung

Die [FreeCAD Parts Library](http://github.com/yorikvanhavre/FreeCAD-library) ist eine Gemeinschaftsaktion, um eine kostenlose Bibliothek mit wiederverwendbaren Teilen bereitzustellen, die in Ihre Projekte eingefügt werden kann. Sie sind herzlich eingeladen, an der Bibliothek teilzunehmen und Teile einzureichen. Denken Sie jedoch daran, dass Sie das Recht haben müssen, sie zu teilen. Weitere Informationen finden Sie in der Datei [readme](http://github.com/yorikvanhavre/FreeCAD-library).

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

Dieses Makro, das ebenfalls in der Bibliothek enthalten ist, zeigt ein Browser-Fenster in der FreeCAD-Benutzeroberfläche, von dem aus Sie den Inhalt der Bibliothek problemlos durchsuchen und durch Doppelklicken einen Teil in das aktuelle Dokument einfügen können.

![](/images/Freecad-parts-library.jpg)

## Skript

ToolBar Icon ![](/images/FreeCAD_Doc.png)

[PartsLibrary.FCMacro](http://github.com/yorikvanhavre/FreeCAD-library/blob/master/PartsLibrary.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PartsLibrary/de&oldid=1080428>"
