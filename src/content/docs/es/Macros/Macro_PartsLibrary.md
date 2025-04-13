---
title: Librería de macros
---
|  |
| --- |
| Parts Library |
| Descripción |
| Inicia el navegador de la biblioteca de piezas FreeCAD  Versión macro : 01.00 Fecha última modificación : 2014-03-25 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png) Autor : yorik |
| Autor |
| [yorik](/User:Yorik "User:Yorik") |
| Descargar |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/FreeCAD_Doc.png) |
| Enlace |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es") |
| Versión Macro |
| 01.00 |
| Fecha última modificación |
| 2014-03-25 |
| Versión(es) FreeCAD |
| All |
| Acceso directo predeterminado |
| *None* |
| Ver también |
| *None* |
|  |
|  |

## Description

La librería [FreeCAD Parts Library](http://github.com/yorikvanhavre/FreeCAD-library) es un esfuerzo de la comunidad para proporcionar una libreria libre de piezas reusables que puedan ser usadas en cualquier proyecto. Se puede participar y subir nuevas piezas siempre que no se infrinjan los derechos intelectuales de nadie al hacerlo. Ver el archivo [readme](http://github.com/yorikvanhavre/FreeCAD-library) para más detalles.

La librería [FreeCAD Parts Library](http://github.com/yorikvanhavre/FreeCAD-library) es un esfuerzo de la comunidad para proporcionar una libreria libre de piezas reusables que puedan ser usadas en cualquier proyecto. Se puede participar y subir nuevas piezas siempre que no se infrinjan los derechos intelectuales de nadie al hacerlo. Ver el archivo [readme](http://github.com/yorikvanhavre/FreeCAD-library) para más detalles.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). *Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-library/master/PartsLibrary.FCMacro)*

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

Esta macro, también incluida en la librería, hace aparecer un panel en el interface de FreeCAD, desde el cual se pueden inspeccionar fácilmente las piezas contenidas en la librería e insertarlas en el documento abierto con solo hacer un doble clic sobre ellas.

![](/images/Freecad-parts-library.jpg)

## Script

ToolBar Icon ![](/images/FreeCAD_Doc.png)

[PartsLibrary.FCMacro](http://github.com/yorikvanhavre/FreeCAD-library/blob/master/PartsLibrary.FCMacro)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PartsLibrary/es&oldid=500548>"