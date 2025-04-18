---
title: SimpleProperties
---

|                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleProperties                                                                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                                                                 |
| Cette macro donne des propriétés simples de l'objet sélectionné (volume, boîte englobante, ...) Version macro : 0.7 Date dernière modification : 2019-06-10 Version FreeCAD : 0.17+ Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/d/da/Macro_SimpleProperties.png) Auteur: OpenBrain |
| Auteur                                                                                                                                                                                                                                                                                                                      |
| [OpenBrain](/index.php?title=User:OpenBrain&action=edit&redlink=1 "User:OpenBrain (page does not exist)")                                                                                                                                                                                                                   |
| Téléchargement                                                                                                                                                                                                                                                                                                              |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/d/da/Macro_SimpleProperties.png)                                                                                                                                                                                                                        |
| Liens                                                                                                                                                                                                                                                                                                                       |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                            |
| Version Macro                                                                                                                                                                                                                                                                                                               |
| 0.7                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                       |
| 2019-06-10                                                                                                                                                                                                                                                                                                                  |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                          |
| 0.17+                                                                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                      |
| Voir aussi                                                                                                                                                                                                                                                                                                                  |
| [Arch_Survey](/Arch_Survey/fr "Arch Survey/fr"), [Macro_FCInfo](/Macro_FCInfo/fr "Macro FCInfo/fr")                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                             |

## Description

### Contexte

Cette macro a été écrite principalement pour que l'utilisateur puisse accéder à une information rapide et concise sur les propriétés physiques d'un objet. Cela vise en particulier à préparer un emballage d'objet & livraison.

### Utilisation

Sélectionnez un objet et exécutez la macro. Il affichera dans une boîte de message:

- Volume de l'objet en litres
- Dimensions de la boîte englobante en millimètres
- Si un objet a été sélectionné en cliquant sur un bord, sa longueur est affichée en millimètres
- Si un objet a été sélectionné en cliquant sur une face, sa zone est affichée en mètres carrés.

### Installation

La macro est disponible via le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Le code est fourni sur cette page pour plus de commodité au cas où votre système n'ait pas git-python. Bien qu'elle devrait être à jour, la dernière version de la macro est toujours disponible sur [dépôt FreeCAD-macro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Information/SimpleProperties.FCMacro)

Pour des explications plus détaillées, consultez la page [Comment installer les macros](/How_to_install_macros/fr "How to install macros/fr").

## Script

### Limitations

- Un seul objet à la fois

### Code

Icône de la barre d'outils
![](/images/Macro_SimpleProperties.png)

**Macro_SimpleProperties.FCMacro**

```
#!/usr/bin/python
#####################################
# Copyright (c) openBrain 2019
# Licensed under LGPL v2
#
# This FreeCAD macro will give basic properties of the selected object (volume, boundbox, ...)
#
#
# Version history :
# *0.7 : some typo improvement + commenting
# *0.6 : check if selected object has a valid shape
# *0.5 : beta release
#
#####################################

__Name__ = 'SimpleProperties'
__Comment__ = 'Gives basic properties of object (volume, boundbox, ...)'
__Author__ = 'openBrain'
__Version__ = '0.7'
__Date__ = '2019-06-10'
__License__ = 'LGPL v2'
__Web__ = 'https://www.freecadweb.org/wiki/Macro_SimpleProperties'
__Wiki__ = 'https://www.freecadweb.org/wiki/Macro_SimpleProperties'
__Icon__ = ''
__Help__ = 'Select an object and run the macro'
__Status__ = 'Beta'
__Requires__ = 'FreeCAD >= 0.17'

__dbg__ = False #True for debugging
SIGNUM = '%.3g' #Set the display format of numbers

from PySide import QtGui

def cslM(msg): #Print message in console
    FreeCAD.Console.PrintMessage('\n')
    FreeCAD.Console.PrintMessage(msg)

def cslW(msg): #Print warning in console
    FreeCAD.Console.PrintMessage('\n')
    FreeCAD.Console.PrintWarning(msg)

def cslE(msg): #Print error in console
    FreeCAD.Console.PrintMessage('\n')
    FreeCAD.Console.PrintError(msg)

def cslD(msg): #Print debug message in console
    if __dbg__:
        FreeCAD.Console.PrintMessage('\n')
        FreeCAD.Console.PrintMessage("Debug : " + str(msg))

if __dbg__:  ##Clear report view in debug mode
    FreeCADGui.getMainWindow().findChild(QtGui.QTextEdit, "Report view").clear()

cslM("Starting Simple Properties macro")

if len(Gui.Selection.getSelection()) != 1: ##If not exactly one object selected, warn user & quit
    cslE("One and only one object shall be selected ... Exiting")
elif not ("Shape" in Gui.Selection.getSelection()[0].PropertiesList): ##If selected object has no shape, warn user & exit
    cslE("Selected object has no valid shape ... Exiting")
else:
    obj = Gui.Selection.getSelection()[0] #Get selected object
    retStr = ""
    if len(Gui.Selection.getSelectionEx()[0].SubObjects) != 1: #If several object subobjects have been selected, ignore & warn user
        cslW("No or several subobject(s) selected, will be ignored")
    else:
        objEx = Gui.Selection.getSelectionEx()[0].SubObjects[0] #If one subobject selected
        if isinstance(objEx, Part.Edge): ##If it's an edge, print its length
            retStr += "Edge length : " + '%s' % float(SIGNUM % (objEx.Length)) + " mm\n"
        elif isinstance(objEx, Part.Face): ##If it's a face, print its area
            retStr += "Face area : " + '%s' % float(SIGNUM % (objEx.Area/1000000)) + " m2\n"
        else: ##If other (unsupported) type, warn user
            cslD("Subobject type : " + str(objEx.ShapeType))
            cslW("Unsupported type of subobject")
    retStr += "Object volume : " + '%s' % float(SIGNUM % (obj.Shape.Volume/1000000)) + " l\n" #Print object volume
    bb = obj.Shape.BoundBox #Get object boundbox
    retStr += "Object boundbox : " + '%s' % float(SIGNUM % (bb.XLength)) + " x " + '%s' % float(SIGNUM % (bb.YLength)) + " x " + '%s' % float(SIGNUM % (bb.ZLength)) + " mm" + "\n" #Print object boundbox dimensions
    QtGui.QMessageBox(QtGui.QMessageBox.Information, "Object Simple Props",retStr).exec_() #Display information in a message box
    cslM("End")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SimpleProperties/fr&oldid=1210389>"
