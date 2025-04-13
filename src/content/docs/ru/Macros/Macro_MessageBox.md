---
title: Макрос "MessageBox"
---
|  |
| --- |
| MessageBox |
| Description |
| Show how to give information to the user in macros.  Macro version: 1.0 Last modified: 2011-09-19 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/7/7f/Macro_MessageBox.png) Author: Gaël Ecorchard |
| Author |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)") |
| Download |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/7/7f/Macro_MessageBox.png) |
| Links |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version |
| 1.0 |
| Date last modified |
| 2011-09-19 |
| FreeCAD Version(s) |
| All |
| Default shortcut |
| *None* |
| See also |
| *None* |
|  |
|  |

## Описание

Поясняет как отобразить информацию в макросе через MessageBox.

![](/images/Macro_MessageBox_00.png)

MessageBox

## Скрипт

ToolBar Icon ![](/images/Macro_MessageBox.png)

**Macro\_MessageBox.FCMacro**

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

In order to use the accented characters in the text field from **Qt**, using the tag  **#-\*-coding: utf-8-\*-**  must be added a **u** before the message to display  
Example :

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Warning, u'Trop d'éléments désignés', msg)
    ...
    ...
msg = u'Élément sélectionnés affichés'
```

To display multiple lines in a dialog box **Qt**, must be added **"\n"** (quotation, valid also between apostrophes) between each line.  
Valid also  **"\r\n"** which correspond to **CR** carriage return, and **LF** end of line, valid also **" \t"** is a tab, characters should be between quotation marks (and apostrophes) as a character string, the tags can be found next to the text to display **" \nRayon\t: "**, the tag **" \ "** (reversed slash) defines the command.  
Example :

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,u"Coordonnées",u"Coordonnée X : "+str(x)+"\r\n"+u"Coordonnée Y : "+str(y)+"\n"+u"Coordonnée Z :<br>
 "+str(z)+"\nRayon\t     : "+str(r))
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MessageBox/ru&oldid=942611>"