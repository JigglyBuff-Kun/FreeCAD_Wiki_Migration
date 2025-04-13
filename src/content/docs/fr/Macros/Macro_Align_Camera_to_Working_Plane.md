---
title: Align Camera to Working Plane
---

|                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Camera to Working Plane                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                               |
| Cette macro aligne la caméra sur le plan courant [Draft Working Plane](/Draft_SelectPlane/fr "Draft SelectPlane/fr") Version macro : 0.1 Date dernière modification : 2017-03-16 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png) Auteur: yorik |
| Auteur                                                                                                                                                                                                                                                                                                                                    |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                         |
| Téléchargement                                                                                                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png)                                                                                                                                                                                                                                       |
| Liens                                                                                                                                                                                                                                                                                                                                     |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                          |
| Version Macro                                                                                                                                                                                                                                                                                                                             |
| 0.1                                                                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                                                                     |
| 2017-03-16                                                                                                                                                                                                                                                                                                                                |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                    |
| Voir aussi                                                                                                                                                                                                                                                                                                                                |
| [Macro Aligne le Plan à la Camera](/Macro_Align_Working_Plane_to_Camera/fr "Macro Align Working Plane to Camera/fr")                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                           |

## Description

Cette macro aligne la caméra sur le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours.

## Utilisation

- Réglez le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") à votre convenance
- Exécutez la macro

## Script

Icône de la barre d'outils
![](/images/Macro_Align_Camera_to_Working_Plane.png)

**Macro_Align_Camera_to_Working_Plane.FCMacro**

```
import FreeCAD,FreeCADGui
c = FreeCADGui.ActiveDocument.ActiveView.getCameraNode()
r = FreeCAD.DraftWorkingPlane.getRotation().Rotation.Q
c.orientation.setValue(r)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Camera_to_Working_Plane/fr&oldid=1086134>"
