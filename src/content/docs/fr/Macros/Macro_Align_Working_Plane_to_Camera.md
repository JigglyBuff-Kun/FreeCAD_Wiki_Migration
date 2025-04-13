---
title: Align Working Plane to Camera
---

|                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Working Plane to Camera                                                                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                                                                                     |
| Cette macro déplace le [Plan courant](/Draft_SelectPlane/fr "Draft SelectPlane/fr") au centre de la vue 3D Version macro : 1.0 Date dernière modification : 2017-05-10 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png) Auteur: yorik |
| Auteur                                                                                                                                                                                                                                                                                                                          |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                               |
| Téléchargement                                                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png)                                                                                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                           |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                |
| Version Macro                                                                                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                                                                                             |
| Dernière modification                                                                                                                                                                                                                                                                                                           |
| 2017-05-10                                                                                                                                                                                                                                                                                                                      |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                                             |
| Raccourci clavier                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                          |
| Voir aussi                                                                                                                                                                                                                                                                                                                      |
| [Macro aligne la Camera sur le Plan](/Macro_Align_Camera_to_Working_Plane/fr "Macro Align Camera to Working Plane/fr")                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                 |

## Description

Cette macro déplace le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") au centre de la vue 3D courante. Utile lorsque vous travaillez loin du centre de la grille.

## Utilisation

- Déplacez la vue dans la zone où vous souhaitez regarder.
- Lancez la macro.

## Script

Icône de la barre d'outils
![](/images/Macro_Align_Working_Plane_to_Camera.png)

**Macro_Align_Working_Plane_to_Camera.FCMacro**

```
import FreeCAD,FreeCADGui
cam = FreeCAD.Vector(FreeCADGui.ActiveDocument.ActiveView.getCameraNode().position.getValue().getValue())
pos = FreeCAD.DraftWorkingPlane.projectPoint(cam)
FreeCAD.DraftWorkingPlane.position = pos
FreeCADGui.Snapper.setGrid()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Working_Plane_to_Camera/fr&oldid=1086148>"
