---
title: MessageBox
---

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MessageBox                                                                                                                     |
| Popis                                                                                                                          |
| Ukazuje jak uživateli dávat informace v makrech. Version macro : 1.0 Date last modification : 2011-09-19 Autor: Gaël Ecorchard |
| Autor                                                                                                                          |
| [Gaël Ecorchard](/index.php?title=User:Ga%C3%ABl_Ecorchard&action=edit&redlink=1 "User:Gaël Ecorchard (page does not exist)")  |
| Download                                                                                                                       |
| _None_                                                                                                                         |
| Odkazy                                                                                                                         |
| [Makro recepty                                                                                                                 | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                          |
| 1.0                                                                                                                            |
| Datum poslední úpravy                                                                                                          |
| 2011-09-19                                                                                                                     |
| Verze FreeCAD                                                                                                                  |
| _None_                                                                                                                         |
| Výchozí zástupce                                                                                                               |
| _None_                                                                                                                         |
| Viz též                                                                                                                        |
| _None_                                                                                                                         |
|                                                                                                                                |
|                                                                                                                                |

## Popis

Ukazuje jak uživateli dávat informace v makrech.

![](/images/Macro_MessageBox_00.png)

MessageBox

## Skript

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

Aby bylo možné používat znaky s diakritickými znaménky v textových polích z **Qt**, musí se při použítí značky **#-\*-coding: utf-8-\*-** přidávat **u** před zobrazovanou zprávou  
 Příklad :

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Warning, u'Trop d'éléments désignés', msg)
    ...
    ...
msg = u'Élément sélectionnés affichés'
```

Pro zobrazení víceřádkového textu v dialogovém okně **Qt**, musí být přidáno **"\n"** (uvozovky, platné jsou i apostrofy) za každým řádkem.  
Platné je i **"\r\n"** což koresponduje s **CR** carriage return (návrat vozíku), a **LF** end of line(posun řádku). Lze použít i **" \t"** což je tabulátor. Znaky by měly být mezi uvozovkami (a apostrofy) jako znakový řetězec. Značky mohou být hned vedle zobrazovaného textu **" \nRayon\t: "**, značka **" \ "** (obrácené lomítko) znamená, že jde o příkaz.  
Příklad :

```
diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,u"Coordonnées",u"Coordonnée X : "+str(x)+"\r\n"+u"Coordonnée Y : "+str(y)+"\n"+u"Coordonnée Z :<br>
 "+str(z)+"\nRayon\t     : "+str(r))
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MessageBox/cs&oldid=1066541>"
