---
title: UnterschiedHervorheben
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HighlightDifference                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Berechne den Unterschied zwischen zwei Formen. Hinzufügungen sind rot markiert, Entnahmen sind grün markiert. Beide Originalteile werden halb transparent sein. Das Volumen der Hinzufügungen und Entnahmen wird in der Konsole ausgedruckt. Versionsmakro : 1.0 Datum der letzten Änderung : 2015-09-24 Herunterladen : [Werkzeugleistensymbol](https://wiki.freecad.org/images/2/2e/HighlightDifference.png) Autor: Gaël Ecorchard |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")                                                                                                                                                                                                                                                                                                        |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Werkzeugleistensymbol](https://wiki.freecad.org/images/2/2e/HighlightDifference.png)                                                                                                                                                                                                                                                                                                                                                |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                                                         |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2015-09-24                                                                                                                                                                                                                                                                                                                                                                                                                           |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Beschreibung

Berechnet den Unterschied zwischen zwei Formen. Hinzugefügtes wird rot markiert, Entferntes wird grün markiert. Beide Originalteile werden halb transparent dargestellt. Das hinzugefügte und entfernte Volumen wird in der Konsole ausgegeben.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightDifference.FCMacro>">raw code</a>

![](/src/assets/images/Macro_HighlightDifference_02.png)

Ergebnis Differenz zwischen zwei erzeugten Objekten

## Beispiel

- ![Originalobjekte](/src/assets/images/Macro_HighlightDifference_00.png)

  Originalobjekte

- [![Die resultierenden Objekte sind rot und grün gefärbt (hier versetzt)](/src/assets/images/Macro_HighlightDifference_02.png)](/File:Macro_HighlightDifference_02.png "Die resultierenden Objekte sind rot und grün gefärbt (hier versetzt)")

  Die resultierenden Objekte sind rot und grün gefärbt (hier versetzt)

- ![Die Originalobjekte sind zu 80 % transparent und werden nicht verändert.](/src/assets/images/Macro_HighlightDifference_01.png)

  Die Originalobjekte sind zu 80 % transparent und werden nicht verändert.

## Skript

Der Code ist auf Github sichtbar: [Dienstprogramm/HighlightDifference.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightDifference.FCMacro).

## Verknüpfungen

- Siehe für das ergänzende Makro [Macro_GemeinsamHervorheben](/index.php?title=Macro_HighlightCommon/de&action=edit&redlink=1 "Macro HighlightCommon/de (page does not exist)")
- Die Diskussion im Forum ["Kollisionserkennung", überlappend](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightDifference/de&oldid=1362227>"
