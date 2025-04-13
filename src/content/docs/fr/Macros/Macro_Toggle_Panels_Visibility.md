---
title: Toggle Panels Visibility
---

|                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Toggle Panels Visibility                                                                                                                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                                                                                                                                             |
| Cette macro permet de basculer la visibilité des différentes vues de FreeCAD, la fenêtre active (3D ou Python) utilise tout l'espace disponible de l'écran. Version macro : 1.0 Date dernière modification : 2015-01-17 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/d/d0/Macro_Toggle_Views_Visibility.png) Auteur: Piffpoof |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                  |
| [Piffpoof](/User:Piffpoof "User:Piffpoof")                                                                                                                                                                                                                                                                                                                                              |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                          |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/d/d0/Macro_Toggle_Views_Visibility.png)                                                                                                                                                                                                                                                                                    |
| Liens                                                                                                                                                                                                                                                                                                                                                                                   |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                        |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                     |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                   |
| 2015-01-17                                                                                                                                                                                                                                                                                                                                                                              |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                      |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                              |
| [Toggle Panels](https://forum.freecadweb.org/viewtopic.php?f=22&t=30450&hilit=Toggle_Panels)                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

Lorsque vous travaillez avec FreeCAD, il arrive que vous ayez besoin d'ouvrir de nombreuses fenêtres de support, telles que la vue combo, vue rapport, etc. Il y a d'autres moments où vous voulez que toutes ces fenêtres disparaissent afin que tout l'espace disponible sur l'écran puisse être utilisé pour visualiser le modèle sur lequel vous travaillez. Cette macro vous permet de masquer toutes les fenêtres auxiliaires (ou de les rendre visibles à nouveau) en un seul clic sur la barre d'outils.

## Installation

Enregistrez le code fourni dans le répertoire Macro approprié et exécutez-le à partir du menu Macro. Il est préférable de l'ajouter à une barre d'outils pour en faciliter l'accès.

- voir [Comment installer une Macro](/How_to_install_macros/fr "How to install macros/fr") pour savoir comment installer le code de la macro
- voir [Personnaliser la barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") pour savoir comment installer un bouton sur une barre d'outils

## Utilisation

Cliquez sur le bouton associé de la barre d'outils ou lancez la commande à partir du menu Macro. Les fenêtres de support (console Python, vue rapport, vue combo) deviendront toutes visibles ou cachées.

## Interface utilisateur

L'action de l'utilisateur est immédiatement confirmée par l'apparition ou la disparition des fenêtres de soutien.

## Script

Icône de la barre d'outils ![](/images/Macro_Toggle_Views_Visibility.png)

**Macro_Toggle_Panels_Visibility.FCMacro**

```
# -*- coding: utf-8 -*-
# macro to toggle visibility of Report view, Python console, Combo view
from PySide import QtCore, QtGui
mainWindow = FreeCADGui.getMainWindow()
dockWidgets = mainWindow.findChildren(QtGui.QDockWidget)
for dw in dockWidgets:
    if dw.objectName() == "Python console":
        pcWidget = dw
    if dw.objectName() == "Combo View":
        cvWidget = dw
    if dw.objectName() == "Report view":
        rvWidget = dw

if pcWidget.isVisible():
    pcWidget.hide()
    cvWidget.hide()
    rvWidget.hide()
else:
    pcWidget.show()
    cvWidget.show()
    rvWidget.show()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Panels_Visibility/fr&oldid=1346614>"
