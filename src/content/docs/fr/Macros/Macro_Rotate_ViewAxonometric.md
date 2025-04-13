---
title: Rotate ViewAxonometric
---

|                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotate ViewAxonometric                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                              |
| Cette macro pivote la vue dans la position axonométrique. Version macro : 01.00 Date dernière modification : 2010-11-17 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/2/2e/Macro_Rotate_View_with_Y_pointing_upwards_.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                                                   |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                        |
| Téléchargement                                                                                                                                                                                                                                                                                           |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/2/2e/Macro_Rotate_View_with_Y_pointing_upwards_.png)                                                                                                                                                                                 |
| Liens                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                            |
| 01.00                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                    |
| 2010-11-17                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                       |
| Toutes                                                                                                                                                                                                                                                                                                   |
| Raccourci clavier                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                               |
| [Macro Rotate View](/Macro_Rotate_View/fr "Macro Rotate View/fr")                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                          |

## Description

Cette macro pivote la vue dans la position axonométrique (tel quel: Y).

Vous avez deux options:

- mode 1 : axonometric vue Y ![axonometric view with Y pointing upwards](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png) mode 1
- mode 2 : axonometric vue Z ![axonometric view with Z pointing upwards](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png) mode 2 (dé-commenter pour utiliser)

## Utilisation

Pour utiliser les deux macros, copiez la première macro et nommez-la "**Macro_Rotate_ViewAxonometric_Y**" (mode 1) sans changer le code et utilisez cette icône ![axonometric view with Y pointing upwards](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png).

Copiez la seconde macro, nommez la "**Macro_Rotate_ViewAxonometric_Z**" (mode 2) et :

commentez la ligne

**11** _#rot.setValue(coin.SbVec3f(1,0,0),-math.pi/2) # Y pointing upwards (mode 1)_

et dé-commentez la ligne

**12** _rot.setValue(coin.SbVec3f(0,0,1),math.pi/2) # Z pointing upwards (mode 2 uncomment for use)_ et utiliser cette icône ![vue axonométrique avec le Z dirigé vers le haut](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png)

## Script

- mode 1 : icône de la barre d'outils ![](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png)
- mode 2 : icône de la barre d'outils ![](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png) (dé-commenter pour utiliser)

**Macro_Rotate_ViewAxonometric.FCMacro**

```
import math
import pivy
from pivy import coin

Gui.activeDocument().activeView().viewAxonometric()
Gui.SendMsgToActiveView("ViewFit")

cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()

rot.setValue(coin.SbVec3f(1,0,0),-math.pi/2) # Y pointing upwards (mode 1)
#rot.setValue(coin.SbVec3f(0,0,1),math.pi/2) # Z pointing upwards (mode 2 uncomment for use)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
Gui.SendMsgToActiveView("ViewFit")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_ViewAxonometric/fr&oldid=1346026>"
