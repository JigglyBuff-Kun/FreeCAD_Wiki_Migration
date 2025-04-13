---
title: MessageBox
---

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MessageBox                                                                                                                                                                                                                                                               |
| Beschreibung                                                                                                                                                                                                                                                             |
| Zeigen Sie, wie Sie dem Benutzer Informationen in Makros geben. Versionsmakro : 1.0 Datum der letzten Änderung : 2011-09-19 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/7/7f/Macro_MessageBox.png) Autor: Gaël Ecorchard |
| Autor                                                                                                                                                                                                                                                                    |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")                                                                                                                                            |
| Herunterladen                                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/7/7f/Macro_MessageBox.png)                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                    |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                             |
| Macro-Version                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                      |
| Datum der letzten Änderung                                                                                                                                                                                                                                               |
| 2011-09-19                                                                                                                                                                                                                                                               |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                       |
| All                                                                                                                                                                                                                                                                      |
| Standardverknüpfung                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                   |
| Siehe auch                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                          |

## Beschreibung

Zeigen Sie, wie Sie dem Benutzer Informationen in Makros geben.

![](/src/assets/images/Macro_MessageBox_00.png)

MessageBox

## Skript

ToolBar Icon ![](/src/assets/images/Macro_MessageBox.png)

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

Um die akzentuierten Zeichen im Textfeld von **Qt** zu verwenden, muss der Tag **# - \* - Codierung verwendet werden: utf-8 - \* -** muss ein **u** hinzugefügt werden or der anzuzeigenden Nachricht  
Beispiel:

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Warning, u'Trop d'éléments désignés', msg)
    ...
    ...
msg = u'Élément sélectionnés affichés'
```

Um mehrere Zeilen in einem Dialogfeld anzuzeigen, muss **Qt** zwischen jeder Zeile **"\ n"** (Zitat, auch zwischen Apostrophen gültig) eingefügt werden.  
Gültig auch **"\r\n"**, das **CR** Wagenrücklauf und **LF** Zeilenende entspricht, ebenfalls gültig **\t** ist ein Tabulator, Zeichen sollten zwischen Anführungszeichen (und Apostrophe) als Zeichenfolge stehen. Die Tags befinden sich neben dem Text, um **"anzuzeigen. \nRayon\t:"**, der Tag **"\"** (umgekehrter Schrägstrich) definiert den Befehl.  
Beispiel:

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,u"Coordonnées",u"Coordonnée X : "+str(x)+"\r\n"+u"Coordonnée Y : "+str(y)+"\n"+u"Coordonnée Z :<br>
 "+str(z)+"\nRayon\t     : "+str(r))
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MessageBox/de&oldid=692389>"
