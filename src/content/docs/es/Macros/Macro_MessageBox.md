---
title: MessageBox
---

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MessageBox                                                                                                                                                                                                                                                 |
| Descripción                                                                                                                                                                                                                                                |
| Muestra como dar información al usuario en las macros Versión macro : 1.0 Fecha última modificación : 2011-09-19 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/7/7f/Macro_MessageBox.png) Autor : Gaël Ecorchard |
| Autor                                                                                                                                                                                                                                                      |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")                                                                                                                              |
| Descargar                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/7/7f/Macro_MessageBox.png)                                                                                                                                                                           |
| Enlace                                                                                                                                                                                                                                                     |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                         |
| Versión Macro                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                        |
| Fecha última modificación                                                                                                                                                                                                                                  |
| 2011-09-19                                                                                                                                                                                                                                                 |
| Versión(es) FreeCAD                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                        |
| Acceso directo predeterminado                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                     |
| Ver también                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                            |

## Descripción

Muestra como dar información al usuario en las macros

![](/images/Macro_MessageBox_00.png)

MessageBox

## Script

ToolBar Icon ![](/images/Macro_MessageBox.png)

**Macro_MessageBox.FCMacro**

```
#! /usr/bin/env python
# -*- coding: utf-8 -*-

"""Show how to give information to the user in macros
"""
from PySide import QtCore, QtGui

def errorDialog(msg):
    # Create a simple dialog QMessageBox
    # The first argument indicates the icon used: one of QtGui.QMessageBox.{NoIcon, Information, Warning, Critical, Question}
    diag = QtGui.QMessageBox(QtGui.QMessageBox.Warning, 'Error in macro MessageBox', msg)
    diag.setWindowModality(QtCore.Qt.ApplicationModal)
    diag.exec_()

msg = 'Example of warning message'
errorDialog(msg)
raise(Exception(msg))
```

Para usar los caracteres acentuados en el campo de texto de **Qt**, usando la etiqueta **# - \* - codificación: utf-8 - \* -** debe agregarse una **u** antes del mensaje a mostrar  
Ejemplo:

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Warning, u'Trop d'éléments désignés', msg)
    ...
    ...
msg = u'Élément sélectionnés affichés'
```

Para mostrar varias líneas en un cuadro de diálogo **Qt**, debe agregarse **"\ n"** (cita, válida también entre apóstrofes) entre cada línea.  
Válido también **"\ r \ n"** que corresponde a **CR** retorno de carro, y **LF** fin de línea, válido también **"\ t"** es una pestaña, los caracteres deben estar entre comillas (y apóstrofes) como una cadena de caracteres, las etiquetas se pueden encontrar al lado del texto para mostrar **"\ nRayon \ t:"** , la etiqueta **"\"** (barra invertida) define el comando.  
Ejemplo:

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,u"Coordonnées",u"Coordonnée X : "+str(x)+"\r\n"+u"Coordonnée Y : "+str(y)+"\n"+u"Coordonnée Z :<br>
 "+str(z)+"\nRayon\t     : "+str(r))
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MessageBox/es&oldid=692390>"
