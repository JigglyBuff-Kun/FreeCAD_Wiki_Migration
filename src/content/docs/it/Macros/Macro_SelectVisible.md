---
title: Seleziona gli oggetti visibili
---

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Seleziona oggetti visibili                                                                                                                                                                                                                                           |
| Descrizione                                                                                                                                                                                                                                                          |
| Verranno selezionati tutti e soli gli oggetti visibili nell'albero. Versione macro: 1.0 Ultima modifica: 2016-04-08 Versione FreeCAD: All Download: [Icona della barra degli strumenti](https://wiki.freecad.org/images/5/51/SelectVisible.png) Autore: galou_breizh |
| Autore                                                                                                                                                                                                                                                               |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                                   |
| Download                                                                                                                                                                                                                                                             |
| [Icona della barra degli strumenti](https://wiki.freecad.org/images/5/51/SelectVisible.png)                                                                                                                                                                          |
| Link                                                                                                                                                                                                                                                                 |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                             |
| Versione macro                                                                                                                                                                                                                                                       |
| 1.0                                                                                                                                                                                                                                                                  |
| Data ultima modifica                                                                                                                                                                                                                                                 |
| 2016-04-08                                                                                                                                                                                                                                                           |
| Versioni di FreeCAD                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                  |
| Scorciatoia                                                                                                                                                                                                                                                          |
| _Nessuna_                                                                                                                                                                                                                                                            |
| Vedere anche                                                                                                                                                                                                                                                         |
| _Nessuno_                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |

## Descrizione

Seleziona tutti gli oggetti visibili nella struttura e solo questi.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/SelectVisible.FCMacro>">raw code</a>

## Utilizzo

Copiare la macro nella cartella delle macro ed eseguirla (vedi [Come installare le macro](/How_to_install_macros/it "How to install macros/it") per ulteriori dettagli).

## Script

L'ultima versione della macro si trova in <https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/SelectVisible.FCMacro>

Icona della barra degli strumenti ![](/images/SelectVisible.png)

**Macro_Select.FCMacro**

```
# FreeCAD Macro SelectVisible

__Name__ = 'Select Visible'
__Comment__ = 'All visible objects in the tree will be selected'
__Web__ = 'http://www.freecadweb.org/wiki/Macro_SelectVisible'
__Wiki__ = 'http://www.freecadweb.org/wiki/Macro_SelectVisible'
__Icon__ = 'https://wiki.freecad.org/images/5/51/SelectVisible.png'
__Help__ = 'All visible objects in the tree and only these will be selected'
__Author__ = 'galou_breizh'
__Version__ = '1.0'
__Status__ = 'Production'
__Requires__ = ''

import FreeCAD as App
import FreeCADGui as Gui

doc = App.activeDocument()

if not doc:
    App.Console.PrintWarning('SelectVisible: no active document')
else:
    Gui.Selection.clearSelection()
    for o in doc.Objects:
        if o.ViewObject.Visibility:
            Gui.Selection.addSelection(o)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SelectVisible/it&oldid=1364259>"
