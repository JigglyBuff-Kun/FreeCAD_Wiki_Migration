---
title: Evidenzia parti comuni
---

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Evidenzia parti comuni                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                          |
| Evidenzia le parti comuni Versione macro: 2.3.2 Ultima modifica: 2021-07-01 Versione FreeCAD: 0.17 e sopra Download: [Icona della barra degli strumenti](https://wiki.freecad.org/images/8/85/Macro_HighlightCommon.png) Autore: JMG |
| Autore                                                                                                                                                                                                                               |
| [JMG](/index.php?title=User:JMG&action=edit&redlink=1 "User:JMG (page does not exist)")                                                                                                                                              |
| Download                                                                                                                                                                                                                             |
| [Icona della barra degli strumenti](https://wiki.freecad.org/images/8/85/Macro_HighlightCommon.png)                                                                                                                                  |
| Link                                                                                                                                                                                                                                 |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")             |
| Versione macro                                                                                                                                                                                                                       |
| 2.3.2                                                                                                                                                                                                                                |
| Data ultima modifica                                                                                                                                                                                                                 |
| 2021-07-01                                                                                                                                                                                                                           |
| Versioni di FreeCAD                                                                                                                                                                                                                  |
| 0.17 e sopra                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                          |
| _Nessuna_                                                                                                                                                                                                                            |
| Vedere anche                                                                                                                                                                                                                         |
| _Nessuno_                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                      |

## Descrizione

Evidenzia e visualizza le parti comuni in rosso e imposta la semi-trasparenza delle parti originali (gli oggetti originali non vengono modificati)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/HighlightCommon.FCMacro>">raw code</a>

![](/images/Captura_de_pantalla_de_2015-09-10_11-17-30.png)

Volume common of objects selected

## Script

ToolBar Icon ![](/images/Macro_HighlightCommon.png)

**Macro_HighlightCommon.FCMacro**

Il codice è visibile in Github: [Utility/HighlightCommon.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightCommon.FCMacro).

## Link

- Vedere la macro complementare: [Macro_HighlightDifference](/Macro_HighlightDifference/it "Macro HighlightDifference/it")
- Il mio blog [Linux for an engineer](http://linuxforanengineer.blogspot.com.es/) per il codice e altre interessanti macro per FreeCAD
- La discussione nel forum: ["collision detection", overlapping](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightCommon/it&oldid=1363729>"
