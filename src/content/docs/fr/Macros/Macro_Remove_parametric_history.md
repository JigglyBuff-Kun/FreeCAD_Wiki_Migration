---
title: Remove parametric history
---

|                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Remove parametric history                                                                                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                                                                                                |
| Cela supprimera toutes les associativités paramétriques d'un objet, le transformant en une "simple" forme Version macro : 1.0 Date dernière modification : 2011-08-01 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                                                                     |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                          |
| Téléchargement                                                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png)                                                                                                                                                                                                                            |
| Liens                                                                                                                                                                                                                                                                                                                      |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                           |
| Version Macro                                                                                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                                                                                        |
| Dernière modification                                                                                                                                                                                                                                                                                                      |
| 2011-08-01                                                                                                                                                                                                                                                                                                                 |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                            |

## Description

Cela supprimera toutes les associativités paramétriques d'un objet, le transformant en une "simple" forme

Avant et après transformation

![](/images/RPH_before.png)

![](/images/RPH_after.png)

## Script

ToolBar Icon ![](/images/Macro_Remove_parametric_history.png)

**Remove parametric history.FCMacro**

```
originalObject = FreeCAD.ActiveDocument.ActiveObject
newShape = originalObject.Shape.copy()
newName = FreeCAD.ActiveDocument.ActiveObject.Name
FreeCAD.ActiveDocument.removeObject(newName)
newObject = FreeCAD.ActiveDocument.addObject("Part::Feature",newName)
newObject.Shape = newShape
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Remove_parametric_history/fr&oldid=692469>"
