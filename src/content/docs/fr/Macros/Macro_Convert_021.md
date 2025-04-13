---
title: Convert 021
---

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Generic macro icon](/File:Text-x-python.png "Generic macro icon") Convert_021                                                                                                                                                   |
| Description                                                                                                                                                                                                                      |
| Convertit un fichier FreeCAD enregistré avec une version postérieure à la version 0.21 au format 0.21. Version macro : 0.1 Date dernière modification : 2024-03-13 Version FreeCAD : Toutes Auteur: yorik                        |
| Auteur                                                                                                                                                                                                                           |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                            |
| 2024-03-13                                                                                                                                                                                                                       |
| Version(s) FreeCAD                                                                                                                                                                                                               |
| Toutes                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                  |

## Description

Cette macro ouvre une boîte de dialogue permettant de choisir un fichier FreeCAD et le convertit au format 0.21 (remplacer la propriété AttachmentSupport par Support). Un nouveau fichier avec l'extension .021.FCStd est créé afin que le fichier original ne soit pas modifié.

## Utilisation

Exécutez la macro et sélectionnez un fichier FCStd lorsque la boîte de dialogue apparaît.

## Installation

Avec le gestionnaire des extensions.

## Code

**Macro_Convert_021.FCMacro**

```
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# ***************************************************************************
# *                                                                         *
# *   Copyright (c) 2024 Yorik van Havre <yorik@uncreated.net>              *
# *                      Florian Foinant-Willig <ffw@2f2v.fr>               *
# *                                                                         *
# *   This program is free software; you can redistribute it and/or modify  *
# *   it under the terms of the GNU General Public License (GPL)            *
# *   as published by the Free Software Foundation; either version 3 of     *
# *   the License, or (at your option) any later version.                   *
# *   for detail see the LICENCE text file.                                 *
# *                                                                         *
# *   This program is distributed in the hope that it will be useful,       *
# *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
# *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
# *   GNU General Public License for more details.                          *
# *                                                                         *
# *   You should have received a copy of the GNU Library General Public     *
# *   License along with this program; if not, write to the Free Software   *
# *   Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  *
# *   USA                                                                   *
# *                                                                         *
# ***************************************************************************

"""This macro opens a file dialog to allow to choose a FreeCAD file
and converts it to 0.21 format (replace AttachmentSupport property to Support).
A new file with extension .021.FCStd is created so the original file is not modified"""
import os
import zipfile
from PySide import QtGui

filenames = QtGui.QFileDialog.getOpenFileNames(None,
                                             "Open FreeCAD file",
                                             None,
                                             "FreeCAD Files (*.FCStd *.fcstd)")
for filename in filenames[0]:
    print("Processing", filename, "...")
    spl = os.path.splitext(filename)
    filename021 = spl[0] + ".021" + spl[1]
    with zipfile.ZipFile(filename) as inzip, zipfile.ZipFile(filename021, "w") as outzip:
        for inzipinfo in inzip.infolist():
            with inzip.open(inzipinfo) as infile:
                if inzipinfo.filename == "Document.xml":
                    content = infile.read()
                    content = content.replace(b"AttachmentSupport", b"Support")
                    outzip.writestr(inzipinfo, content)
                else:
                    outzip.writestr(inzipinfo, infile.read())
    print(filename021, "successfully written")

print ("All done!")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Convert_021/fr&oldid=1463624>"
