---
title: PartsLibrary
---

|                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parts Library                                                                                                                                                                                                                                                   |
| Descrizione                                                                                                                                                                                                                                                     |
| Avvia il browser per esplorare la libreria delle Parti di FreeCAD Versione macro: 1.0 Ultima modifica: 2014-03-25 Versione FreeCAD: Tutte versione Download: [<https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png> Icona per la ToolBar] Autore: yorik |
| Autore                                                                                                                                                                                                                                                          |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                        |
| [<https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png> Icona per la ToolBar]                                                                                                                                                                            |
| Link                                                                                                                                                                                                                                                            |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                        |
| Versione macro                                                                                                                                                                                                                                                  |
| 1.0                                                                                                                                                                                                                                                             |
| Data ultima modifica                                                                                                                                                                                                                                            |
| 2014-03-25                                                                                                                                                                                                                                                      |
| Versioni di FreeCAD                                                                                                                                                                                                                                             |
| Tutte versione                                                                                                                                                                                                                                                  |
| Scorciatoia                                                                                                                                                                                                                                                     |
| _Nessuna_                                                                                                                                                                                                                                                       |
| Vedere anche                                                                                                                                                                                                                                                    |
| _Nessuno_                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                 |

## Description

La [libreria delle Parti di FreeCAD](http://github.com/yorikvanhavre/FreeCAD-library) è uno sforzo della comunità per fornire una libreria gratuita di parti riutilizzabili da inserire nei vostri progetti. Siete invitati a contribuire aggiungendo ulteriori parti alla libreria, ma ricordate che per condividerle è necessario disporre dei diritti. Per ulteriori informazioni, consultare il file [readme](http://github.com/yorikvanhavre/FreeCAD-library).

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

Questa macro, che è anche inclusa nella libreria, visualizza nell'interfaccia di FreeCAD un pannello di navigazione che permette di esplorare facilmente il contenuto della libreria e di inserire una parte nel documento corrente facendo doppio clic su di essa.

![](/images/Freecad-parts-library.jpg)

## Script

Icona barra strumenti ![](/images/FreeCAD_Doc.png)

[PartsLibrary.FCMacro](http://github.com/yorikvanhavre/FreeCAD-library/blob/master/PartsLibrary.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PartsLibrary/it&oldid=1186587>"
