---
title: hinge (charnière)
---

|                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hinge Simul                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                       |
| Simulation de mouvement d'une charnière. Version macro : 1.0 Date dernière modification : 2014-09-09 Version FreeCAD : All Téléchargement : The File [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                            |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                           |
| Téléchargement                                                                                                                                                                                                                                                                                                                    |
| The File [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png)                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                             |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                  |
| Version Macro                                                                                                                                                                                                                                                                                                                     |
| 1.0                                                                                                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                                                                                                             |
| 2014-09-09                                                                                                                                                                                                                                                                                                                        |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                            |
| Voir aussi                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                   |

## Description

Simulation de pivotement d'une charnière

![](/images/Hing_00.gif)

## Utilisation

Ouvrez les deux fichiers (20140908b_Hinge-1.FCMacro et 20140908b_Hinge-1.FCStd) dans FreeCAD avec 2 écrans (Menu: Fenêtre > Mosaïque) et lancez la macro ou lancez la macro avec le bouton ![](/images/Std_DlgMacroExecuteDirect.svg)

![Charnière](/images/Hing_01.png)

Charnière

## Le Fichier

[20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628)

## Script

ToolBar Icon ![](/images/Macro_hinge.png)

**20140908b_Hinge-1.FCMacro**

```
import FreeCAD, FreeCADGui, Draft, Part
from FreeCAD import Base
import time

ii = 0
pas = 0
for ii2 in range(180):
    if pas == 0:
        if ii > 90:
            pas = 1
        ii += 5
    else:
        if ii < 1:
            pas = 0
        ii -= 5

    App.getDocument("_0140908b_Hinge_1").Fusion.Placement=App.Placement(App.Vector(0,0,0), App.Rotation(App.Vector(0,0,1),ii), App.Vector(44.4,6.9,0))
    App.Console.PrintMessage(str(ii2)+"  " + str(ii)+"  " + str(pas) +"\n")
    Gui.updateGui()
    time.sleep(0) #modify the time here
```

## Liens

La page de discussion sur le forum [Struggling with LinearPattern (again)](http://forum.freecadweb.org/viewtopic.php?f=3&t=7606&p=62086#p62086)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_hinge/fr&oldid=712347>"
