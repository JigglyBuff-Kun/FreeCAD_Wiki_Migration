---
title: If Selected Stay If Not Then Delete
---

|                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro If Selected Stay If Not Then Delete                                                                                                                                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| Cette macro éfface tous les objets qui ne sont pas sélectionnés. Version macro : 00.03b Date dernière modification : 2023-09-24 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png) Auteur: Mario52                                                                                                    |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                              |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png)                                                                                                                                                                                                                                                                                              |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                     |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                        |
| 00.03b                                                                                                                                                                                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                |
| 2023-09-24                                                                                                                                                                                                                                                                                                                                                                                                           |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                   |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                               |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/fr "Macro Toggle Visibility2 2-2/fr") [Macro_Toggle_Visibility](/Macro_Toggle_Visibility/fr "Macro Toggle Visibility/fr") [Macro HiddenAlls](/Macro_HiddenAlls "Macro HiddenAlls") [Macro_VisibleAlls](/Macro_VisibleAlls/fr "Macro VisibleAlls/fr") |
|                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Description

Cette macro efface tous les objets qui ne sont pas sélectionnés.

## Script

Icône de la barre d'outils
![](/images/Macro_If_Selected_Stay_If_Not_Then_Delete.png)

**Macro_If_Selected_Stay_If_Not_Then_Delete.FCMacro**

```
import FreeCAD
import Draft
# 16/06/2016, 21/02/2018, 22/09/2023, 24/09/2023
# Macro_SelectVisible series
__title__   = "Macro_If_Selected_Stay_If_Not_Then_Delete"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.03b"
__date__    = "24/09/2023"

App = FreeCAD
try:
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:
        if str(ShapeNameObj) == "<group object>":
            if len(Draft.get_group_contents(ShapeNameObj)) == 0:
                App.ActiveDocument.removeObject(ShapeNameObj.Name)        # remove group not selecteds
        else:
            if Gui.Selection.isSelected(ShapeNameObj):
                None
            else:
                App.ActiveDocument.removeObject(ShapeNameObj.Name)        # remove objects not selecteds

    for ShapeNameGroup in FreeCAD.ActiveDocument.Objects:
        if (str(ShapeNameGroup) == "<group object>"):
            if len(Draft.get_group_contents(ShapeNameGroup)) == 0:
                App.ActiveDocument.removeObject(ShapeNameGroup.Name)      # remove group emptied
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_If_Selected_Stay_If_Not_Then_Delete/fr&oldid=1305245>"
