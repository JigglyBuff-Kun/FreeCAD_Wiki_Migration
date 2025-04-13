---
title: Megaminx
---

|                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro_Megaminx                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                   |
| Questa macro crea un Megaminx virtuale [Megaminx](https://en.wikipedia.org/wiki/Megaminx). Last modified: 2019-02-17 FreeCAD version: 0.18 and higher Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/43/Macro_Megaminx.png) Author: aleph0 |
| Author                                                                                                                                                                                                                                                        |
| [aleph0](/index.php?title=User:Aleph0&action=edit&redlink=1 "User:Aleph0 (page does not exist)")                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/43/Macro_Megaminx.png)                                                                                                                                                                                |
| Links                                                                                                                                                                                                                                                         |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                              |
| Macro Version                                                                                                                                                                                                                                                 |
| 1.0                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                            |
| 2019-02-17                                                                                                                                                                                                                                                    |
| FreeCAD Version(s)                                                                                                                                                                                                                                            |
| 0.18 and higher                                                                                                                                                                                                                                               |
| Default shortcut                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                        |
| See also                                                                                                                                                                                                                                                      |
| [Macro Rubik Cube](/Macro_Rubik_Cube/it "Macro Rubik Cube/it")                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                               |

## Descrizione

Questa macro crea un documento di FreeCAD contenente un [Megaminx](https://en.wikipedia.org/wiki/Megaminx) virtuale e consente di manipolarlo. Mostra sei viste del Megaminx includendo ciascuna delle dodici facce almeno una volta. Ci sono varie frecce (ognuna con un tooltip che verrà visualizzato quando ci si passa sopra con il mouse). Cliccando sulle frecce si può ruotare le facce del Megaminx, ruotare l'intero Megaminx, oppure ruotare o riflettere la cronologia che mantiene le rotazioni che sono state fatte. C'è anche un menu Megaminx che viene mostrato a destra della barra dei menu purché si abbia almeno un documento Megaminx aperto. Dal menu è possibile visualizzare del testo di aiuto, ripristinare il Megaminx al suo stato iniziale (risolto), annullare l'ultima rotazione (e rimuoverla dalla cronologia), copiare la cronologia negli appunti, scorrere la cronologia, randomizzare il Megaminx, e abilitare o disabilitare l'eco delle rotazioni nella visualizzazione report. Tutte queste funzioni possono anche essere richiamate digitando gli appositi comandi nella finestra della console Python.

La cronologia salvata negli appunti può essere incollata nella finestra della console Python o copiata in un file che può essere richiamato come macro nel documento Megaminx attivo. Si può avere più di uno
Documento Megaminx aperto alla volta, ma solo uno può essere attivo.

## Script

ToolBar icon ![](/images/Macro_Megaminx.png)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro)_

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
    "https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/rparkins999/Megaminx/master/Megaminx.FCMacro>">raw code</a>

**Macro_Megaminx.FCMacro**

![](/images/Macro_Megaminx.png)

## Utilizzo

Scaricare il codice da <https://github.com/rparkins999/Megaminx> nella directory delle macro. Eseguire la macro per creare un documento Megaminx. Una volta creato ci si può giocare. Le funzioni di cronologia possono essere utilizzate per costruire e salvare operatori (ovvero algoritmi) che eseguono trasformazioni utili su Megaminx. Un insieme adeguato di queste funzioni ti fornirà una soluzione completa. La funzione step_history può essere utilizzata per aiutarti ad applicare un operatore su un vero Megaminx.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Megaminx/it&oldid=1355385>"
