---
title: Evidenzia differenze
---

|                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Evidenzia differenze                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                              |
| Calcola le differenze tra due forme Versione macro: 1.0 Ultima modifica: 2015-09-24 Autore: Gaël Ecorchard                                                                                                               |
| Autore                                                                                                                                                                                                                   |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")                                                                                            |
| Download                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                   |
| Link                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it") |
| Versione macro                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                     |
| 2015-09-24                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                   |
| Scorciatoia                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                             |
| _Nessuno_                                                                                                                                                                                                                |
|                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                          |

## Description

## Descrizione

Calcola la differenza tra due forme. Le parti aggiunte sono contrassegnate in rosso, le rimozioni sono contrassegnate in verde. Entrambe le parti originali diventano semitrasparenti. Nella console viene stampato il volume delle parti aggiunte e rimosse.

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

![](/images/Macro_HighlightDifference_02.png)

Result difference two objects created

## Example

## Esempio

- ![Oggetti originali](/images/Macro_HighlightDifference_00.png)

  Oggetti originali

- [![Gli oggetti risultanti sono colorati in rosso e in verde (in questo caso sono separati)](/images/Macro_HighlightDifference_02.png)](/File:Macro_HighlightDifference_02.png  "Gli oggetti risultanti sono colorati in rosso e in verde (in questo caso sono separati)")

  Gli oggetti risultanti sono colorati in rosso e in verde (in questo caso sono separati)

- ![La trasparenza degli originali è fissata a 80%](/images/Macro_HighlightDifference_01.png)

  La trasparenza degli originali è fissata a 80%

## Script

## Script

Il codice è visibile in Github: [Utility/HighlightDifference.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/HighlightDifference.FCMacro).

## Links

## Link

- Vedere la macro complementare: [Macro_HighlightCommon](/Macro_HighlightCommon/it "Macro HighlightCommon/it")
- La discussione nel forum: ["collision detection", overlapping](http://forum.freecadweb.org/viewtopic.php?f=22&t=12426)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HighlightDifference/it&oldid=1344638>"
