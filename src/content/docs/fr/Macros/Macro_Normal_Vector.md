---
title: Normal Vector
---

|                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Normal Vector Macro                                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                                     |
| Donne la Normale du vecteur de la face sélectionnée. Version macro : 1.0 Date dernière modification : 2016-09-26 Version FreeCAD : Toutes Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png) Auteur: ulrich1a |
| Auteur                                                                                                                                                                                                                                                          |
| [ulrich1a](/index.php?title=User:Ulrich1a&action=edit&redlink=1 "User:Ulrich1a (page does not exist)")                                                                                                                                                          |
| Téléchargement                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png)                                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                           |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                |
| Version Macro                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                             |
| Dernière modification                                                                                                                                                                                                                                           |
| 2016-09-26                                                                                                                                                                                                                                                      |
| Version(s) FreeCAD                                                                                                                                                                                                                                              |
| Toutes                                                                                                                                                                                                                                                          |
| Raccourci clavier                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                          |
| Voir aussi                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                 |

## Description

Cette simple macro extrait le vecteur normal de la face précédemment choisie dans la vue 3D et l'affiche dans la console python

## Utilisation

- Choisissez une face dans la vue 3D.
- Collez la macro dans la console python.
- FreeCAD affiche les informations du vecteur de la normal dans la console Python.
- Utilisez ces valeurs pour la mise en place de la direction lors de la création d'une vue de dessin.

## Script

Icône de la barre d'outils
![](/images/Macro_Normal_Vector.png)

**Macro_Normal_Vector.FCMacro**

```
Gui.Selection.getSelectionEx()[0].SubObjects[0].Faces[0].normalAt(0,0)
```

## Lien

[Link to dicussion thread (german)](http://forum.freecadweb.org/viewtopic.php?f=13&t=10959)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Normal_Vector/fr&oldid=1086187>"
