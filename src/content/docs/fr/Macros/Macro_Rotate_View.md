---
title: Rotate View
---

|                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotate View by 90°                                                                                                                                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                                                                                                                                             |
| Cette macro fait pivoter l'affichage actuel de 90 ° vers la gauche. Ne fonctionne que si vous êtes en [vue de dessus](/Std_ViewTop/fr "Std ViewTop/fr"). Version macro : 01.00 Date dernière modification : 2010-11-17 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                  |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                       |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                          |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/a/a0/Macro_Rotate_View_view_90_Degrees.png)                                                                                                                                                                                                                                                                                |
| Liens                                                                                                                                                                                                                                                                                                                                                                                   |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                        |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                           |
| 01.00                                                                                                                                                                                                                                                                                                                                                                                   |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                   |
| 2010-11-17                                                                                                                                                                                                                                                                                                                                                                              |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                      |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                              |
| [Macro Rotate ViewAxonometric](/Macro_Rotate_ViewAxonometric/fr "Macro Rotate ViewAxonometric/fr"), [Macro Rotate View Free](/Macro_Rotate_View_Free/fr "Macro Rotate View Free/fr")                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

Cette macro fait pivoter l'affichage actuel de 90 ° vers la gauche.

## Limitations

Ne fonctionne que si vous êtes en vue de dessus: [![Std_ViewTop](/images/View-top.svg)](/Std_ViewTop "Std_ViewTop ") [XY (top)](/Std_ViewTop/fr "Std ViewTop/fr")

## Script

Icône de la barre d'outils ![](/images/Macro_Rotate_View_view_90_Degrees.png)

**Macro_Rotate_View_90_Degrees.FCMacro**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/fr&oldid=1346008>"
