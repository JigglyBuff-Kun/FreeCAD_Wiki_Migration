---
title: Align Object to View
---

|                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Object to View                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                         |
| Cette macro aligne l'objet sélectionné sur la vue 3D. Version macro : 0.1 Date dernière modification : 2015-01-16 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                              |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png)                                                                                                                                                                          |
| Liens                                                                                                                                                                                                                                                               |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                    |
| Version Macro                                                                                                                                                                                                                                                       |
| 0.1                                                                                                                                                                                                                                                                 |
| Dernière modification                                                                                                                                                                                                                                               |
| 2015-01-16                                                                                                                                                                                                                                                          |
| Version(s) FreeCAD                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                 |
| Raccourci clavier                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                              |
| Voir aussi                                                                                                                                                                                                                                                          |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Macro_FCCamera](/Macro_FCCamera/fr "Macro FCCamera/fr")                                                                                                                                                               |
|                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                     |

## Description

Cette macro aligne l'objet sélectionné sur la vue 3D.

## Utilisation

- Dirigez votre vue, sélectionnez votre objet et lancez la macro
- Votre objet est dirigé sur la position de la caméra

## Script

ToolBar Icon ![](/images/Macro_Align_Object_to_View.png)

**Macro_Align_Object_to_View.FCMacro**

```
# This macro place your object selected to the position ActiveView (camera)
# extact FCCamera
# 16/01/2015

__title__  ="Align Object to View"
__author__ = "Mario52"
__date__   = "16/01/2015"
__version__= "0.1"

import pivy
from pivy import coin

sel = FreeCADGui.Selection.getSelection()
Nameelement = sel[0].Name
App.Console.PrintMessage(str(Nameelement)+"\n")

pl = FreeCAD.Placement()
pl.Rotation = FreeCADGui.ActiveDocument.ActiveView.getCameraOrientation()
pl.Base = FreeCAD.Vector(0.0,0.0,0.0)

App.ActiveDocument.getObject(Nameelement).Placement=pl
```

## Exemple

- ![Votre objet dans sa position originale XY.](/images/Macro_Align_Object_to_View_01.png)

  Votre objet dans sa position originale XY.

- ![Faites une rotation de l'écran X? Y? Z? ou utilisez cette macro Macro_Rotate_View pour une rotation précise.](/images/Macro_Align_Object_to_View_02.png)

  Faites une rotation de l'écran X? Y? Z? ou utilisez cette macro [Macro_Rotate_View](/Macro_Rotate_View "Macro Rotate View") pour une rotation précise.

- [![Sélectionnez l'objet et lancez la macro (l'objet fait face à l'écran).](/images/Macro_Align_Object_to_View_03.png)](/File:Macro_Align_Object_to_View_03.png  "Sélectionnez l'objet et lancez la macro (l'objet fait face à l'écran).")

  Sélectionnez l'objet et lancez la macro (l'objet fait face à l'écran).

- [![Votre objet vient de prendre les positions XY et (Placement, Angle)](/images/Macro_Align_Object_to_View_04.png)](/File:Macro_Align_Object_to_View_04.png  "Votre objet vient de prendre les positions XY et (Placement, Angle)")

  Votre objet vient de prendre les positions XY et (Placement, Angle)

## Credits

Merci rentlau_64 pour avoir simplifié le code

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Object_to_View/fr&oldid=692975>"
