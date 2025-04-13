---
title: PCBWay
---

|                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro PCBWay                                                                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                                                            |
| Envoie un objet sélectionné à PCBWay pour la fabrication par fraisage CNC, découpe laser ou impression 3D. Version macro : 1.0 Date dernière modification : 2022-07-22 Version FreeCAD : All Téléchargement : [Icône de la barre d'outils](https://wiki.freecadweb.org/images/7/7b/Pcbway.png) Auteur: Yorik van Havre |
| Auteur                                                                                                                                                                                                                                                                                                                 |
| [Yorik van Havre](/index.php?title=User:Yorik_van_Havre&action=edit&redlink=1 "User:Yorik van Havre (page does not exist)")                                                                                                                                                                                            |
| Téléchargement                                                                                                                                                                                                                                                                                                         |
| [Icône de la barre d'outils](https://wiki.freecadweb.org/images/7/7b/Pcbway.png)                                                                                                                                                                                                                                       |
| Liens                                                                                                                                                                                                                                                                                                                  |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                       |
| Version Macro                                                                                                                                                                                                                                                                                                          |
| 1.0                                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                                  |
| 2022-07-22                                                                                                                                                                                                                                                                                                             |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                     |
| All                                                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                 |
| Voir aussi                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                        |

## Description

Cette macro envoie l'objet sélectionné (maillage, forme ou corps) au [site Web de PCBWay](https://pcbway.com) pour obtenir un devis instantané de fabrication par fraisage CNC, découpe laser ou impression 3D. Une fois l'objet envoyé, une page s'ouvre sur le site Web de PCBWay pour permettre à l'utilisateur de régler les détails et les options.

**Remarque** : les objets à base de maillage ne peuvent être fabriqués que par impression 3D. Pour le fraisage CNC ou la découpe laser, vous devez utiliser des objets basés sur la forme.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/pcbway.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/pcbway.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/pcbway.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Utility/pcbway.FCMacro>">raw code</a>

## Utilisation

1. Ouvrez ou créez un document FreeCAD contenant un objet que vous souhaitez fabriquer avec PCBWay.
2. Sélectionnez l'objet que vous souhaitez fabriquer. Si aucun objet n'est sélectionné mais qu'il y a un seul objet visible à l'écran, cet objet sera envoyé.
3. Ouvrez le [gestionnaire de macros](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr") depuis le menu **Macro → Gérer les macros...**.
4. Sélectionnez la macro PCBWay dans la liste.
5. Cliquez sur Exécuter.
6. Les fois suivantes, la macro PCBWay se trouvera dans le menu **Macro → Macros récentes**.
7. Votre objet sera mis au format STEP pour les formes ou au format OBJ pour les maillages, et envoyé à PCBWay. Une fenêtre de navigateur s'ouvrira pour que vous puissiez remplir des détails supplémentaires et passer une commande pour votre produit.

## Code

La dernière version de la macro se trouve à l'adresse <https://github.com/FreeCAD/FreeCAD-macros/blob/master/Utility/pcbway.FCMacro>.

**Macro_PCBWay.FCMacro**

```
#***************************************************************************
#*                                                                         *
#*   Copyright (c) 2022 Yorik van Havre <yorik@uncreated.net>              *
#*                                                                         *
#*   This program is free software; you can redistribute it and/or modify  *
#*   it under the terms of the GNU Lesser General Public License (LGPL)    *
#*   as published by the Free Software Foundation; either version 2 of     *
#*   the License, or (at your option) any later version.                   *
#*   for detail see the LICENCE text file.                                 *
#*                                                                         *
#*   This program is distributed in the hope that it will be useful,       *
#*   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
#*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
#*   GNU Library General Public License for more details.                  *
#*                                                                         *
#*   You should have received a copy of the GNU Library General Public     *
#*   License along with this program; if not, write to the Free Software   *
#*   Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  *
#*   USA                                                                   *
#*                                                                         *
#***************************************************************************

"""
PCBWay Macro for FreeCAD

https://pcbway.com

This macro sends the currently selected object to the PCBWay website
to get an instant quote for manufacturing. After the object is sent,
a page will be opened on the PCBWay website to allow the user to adjust
details and options.
"""

# code inspired / borrowed from:
# KiCAD PcbWay plugin: https://github.com/pcbway/PCBWay-Plug-in-for-Kicad/blob/main/plugins/thread.py
# urllib-based upload: http://pymotw.com/2/urllib2/#uploading-files
# mime stuff: https://stackoverflow.com/questions/27099290/where-is-mimetools-choose-boundary-function-in-python3#27174474

# version history:
# version 1.0 - 2022.07.22

__title__   = "Macro_PCBWay"
__author__  = "Yorik van Havre"
__wiki__    = "https://www.freecad.org/wiki/Macro_PCBWay"
__url__     = "https://www.pcbway.com"
__version__ = "1.0"
__date__    = "22/07/2022"

import tempfile
import os
import FreeCAD
import FreeCADGui
import json
import webbrowser
import urllib.request
import urllib.parse
import email.generator
import itertools

pcb_url = "https://www.pcbway.com/common/freecadupfile"

def msg(message):

    """prints a message where appropriate"""

    FreeCAD.Console.PrintError(message+"\n")
    if FreeCAD.GuiUp:
        from PySide import QtGui
        reply = QtGui.QMessageBox.critical(None,"PCBWay export",message)

class MultiPartData(object):

    """Gathers data and files to be sent via HTTP POST"""

    def __init__(self):
        self.form_fields = []
        self.files = []
        self.boundary = email.generator._make_boundary()
        self.add_field("Unit","Millimeter") #FreeCAD's boundboxes are always in mm
        return

    def get_content_type(self):
        return 'multipart/form-data; boundary=%s' % self.boundary

    def add_field(self, name, value):
        """Add a simple field to the form data."""
        self.form_fields.append((name, str(value)))
        return

    def add_file(self, fieldname, filename, fileHandle, mime):
        """Add a file to be uploaded."""
        body = fileHandle.read()
        self.files.append((fieldname, filename, mime, body))
        return

    def get_bytes(self):
        """Return a string representing the form data, including attached files."""
        parts = []
        part_boundary = '--' + self.boundary
        parts.extend([part_boundary,'Content-Disposition: form-data; name="%s"' % name,'',value] for name, value in self.form_fields)
        parts.extend([part_boundary,'Content-Disposition: file; name="%s"; filename="%s"' % (field_name, filename),
                                    'Content-Type: %s' % content_type,'',body] for field_name, filename, content_type, body in self.files)
        flattened = list(itertools.chain(*parts))
        flattened.append('--' + self.boundary + '--')
        flattened.append('')
        return bytes('\r\n'.join(flattened),'utf8')

def main():

    # validity tests
    mesh = None
    shape = None
    if not FreeCAD.GuiUp:
        return
    if not FreeCAD.ActiveDocument:
        msg("There is no opened document. Please open or create a document containing objects before running this macro.")
        return
    # get the selected object, or the only visible body or object if nothing is selected
    selection = FreeCADGui.Selection.getSelection()
    if not selection:
        visibles = [obj for obj in FreeCAD.ActiveDocument.Objects if obj.ViewObject.Visibility]
        if len(visibles) == 1:
            obj = visibles[0]
            if hasattr(obj,"Shape"):
                shape = obj.Shape
            elif hasattr(obj,"Mesh"):
                mesh = obj.Mesh
        elif len(visibles) > 1:
            bodies = [obj for obj in visibles if obj.isDerivedFrom("PartDesign::Body")]
            if len(bodies) == 1:
                shape = bodies[0].Shape
            else:
                msg("No object is selected. Please select one object or body before running this macro.")
                return
    elif len(selection) > 1:
        msg("More than one object is selected. Please select only one object or body before running this macro.")
        return
    else:
        obj = selection[0]
        if hasattr(obj,"Shape"):
            shape = obj.Shape
            if (not shape) or (not hasattr(shape,"isNull")) or shape.isNull():
                msg("The selected object has no shape. Please select an object with a shape before running this macro.")
                return
        elif hasattr(obj,"Mesh"):
            mesh = obj.Mesh
    if (not shape) and (not mesh):
        msg("Unable to find a suitable shape in the selection or in the visible objects. Please select an object before running this macro.")
        return

    # offer to add the macro as a button on first run
    # not working yet!
    # prefs = FreeCAD.ParamGet("User parameter:Plugins/PCBWay")
    # if prefs.GetBool("FirstTime",True):
    #    prefs.SetBool("FirstTime",False)
    #    from PySide import QtGui
    #    reply = QtGui.QMessageBox.question(None, "Install macro?",
    #        "This is the first time you are launching the PCBWay macro. Do you wish to add a toolbar button for it?",
    #        QtGui.QMessageBox.Yes
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_PCBWay/fr&oldid=1533535>"
