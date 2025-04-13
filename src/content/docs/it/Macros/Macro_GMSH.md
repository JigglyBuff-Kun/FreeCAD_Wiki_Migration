---
title: GMSH
---

|                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GMSHMacro                                                                                                                                                                                                                                                                                                                                                                                   |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                 |
| Crea Mesh FEM con il generatore di Mesh GMSH. La macro è idonea per essere eseguita su sistema operativo Linux, OSX e Windows. Il percorso binario di Gmsh deve essere adattato nella macro. Versione macro: 1.0 Ultima modifica: 2015-08-24 Versione FreeCAD: Tutte versione Download: [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png) Autore: psicofil |
| Autore                                                                                                                                                                                                                                                                                                                                                                                      |
| [psicofil](/index.php?title=User:Psicofil&action=edit&redlink=1 "User:Psicofil (page does not exist)")                                                                                                                                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                                                                                                                                                    |
| [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png)                                                                                                                                                                                                                                                                                                          |
| Link                                                                                                                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                    |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                         |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                        |
| 2015-08-24                                                                                                                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                         |
| Tutte versione                                                                                                                                                                                                                                                                                                                                                                              |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                |
| [Mesh FEM da forma con GMSH](/FEM_MeshGmshFromShape/it "FEM MeshGmshFromShape/it")                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                             |

## Informazioni importanti

Questa macro è obsoleta. È in codice Python 2.x. Tutto il codice è stato integrato direttamente nell'ambiente FEM prima della versione 0.20 di FreeCAD. Vedere [MeshGmshFromShape in FEM](/FEM_MeshGmshFromShape/it "FEM MeshGmshFromShape/it").

## Descrizione

Semplice macro per creareMesh FEM Mesh con il generatore di mesh Gmsh. È possibile creare reticoli bidimensionali o tridimensionali

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro)_

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
    "https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro>">raw code</a>

![GMSH](/images/Macro_GMSH00.png)

## Script

La macro si può trovare nel seguente repositorio github: [GMSH Macro](https://github.com/psicofil/Macros_FreeCAD/blob/master/Macros/GMSHMesh.FCMacro)

ToolBar Icon ![](/images/Macro_GMSH.png)

**GMSHMesh.FCMacro GMSH Macro.FCMacro**

## Installazioni aggiuntive

GMSH deve essere installato. Vedere [gmsh.info](http://gmsh.info/). La macro è idonea per essere eseguita su sistema operativo Linux, OSX e Windows. Il percorso binario di Gmsh deve essere adattato nella macro.

## Link

La pagina della discussione nel forum: [GMSH macro](http://forum.freecadweb.org/viewtopic.php?t=11182)

[Vedere su YouTube come utilizzare la macro.](https://www.youtube.com/watch?v=ZcG5EEUe3yc)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_GMSH/it&oldid=1394931>"
