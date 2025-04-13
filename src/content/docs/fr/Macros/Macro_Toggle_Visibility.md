---
title: Toggle Visibility
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Toggle Visibility                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Bascule caché/affiché tous les objets non sélectionnés. Les objets qui sont sélectionnés dans un document sont rendus visibles tandis que les objets qui ne sont pas sélectionnés sont rendus invisibles. Si aucun objet n'est sélectionné alors tous les objets sont cachés. Si tous les objets sont sélectionnés alors tous les objets sont rendus visibles. Version macro : 00.02 Date dernière modification : 2015-11-12 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/42/Macro_SelectVisible.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/42/Macro_SelectVisible.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 00.02                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2015-11-12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/fr "Macro Toggle Visibility2 2-2/fr") [Macro VisibleAlls](/Macro_VisibleAlls/fr "Macro VisibleAlls/fr") [Macro HiddenAlls](/Macro_HiddenAlls/fr "Macro HiddenAlls/fr") [Macro If Selected Stay If Not Then Delete](/Macro_If_Selected_Stay_If_Not_Then_Delete/fr "Macro If Selected Stay If Not Then Delete/fr")                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Les objets qui sont sélectionnés dans un document sont rendus visibles tandis que les objets qui ne sont pas sélectionnés sont rendus invisibles.

- si aucun objet n'est sélectionné, tous les objets sont cachés.
- si tous les objets sont sélectionnés, tous les objets deviennent visibles.

## Utilisation

Copiez la macro et l'icône dans votre répertoire de macros (voir [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr")).

## Basculer la visibilité

En utilisant la sélection d'objets dans l'une des vues FreeCAD, cette macro rend tous les objets sélectionnés visibles et masque tous les objets non sélectionnés.

Si aucun objet n'est sélectionné tous les objets seront cachés.

Si les objets sont cachés et qu'aucun objet n'est sélectionné dans la Vue combinée tous les objets seront visibles.

(Cette nouvelle version 00.02) inclus les trois macros en une seule.

## Script

L'icône pour votre barre d'outils ![](/images/Macro_SelectVisible.png)

**Macro_ToggleSelectedObjectVisibility.FCMacro**

```
import FreeCAD
# Macro_ToggleSelectedObjectVisibility
__title__="Macro_ToggleSelectedObjectVisibility"
__author__ = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.02"
__date__    = "12/11/2015"

try:
    compt = 0
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:                                   # list alls objet for test if alls hidden
        if (FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility == False) and (Gui.Selection.isSelected(ShapeNameObj) == False):
            compt += 1                                                                    # if hidden : compt += 1
            #print "False : ",ShapeNameObj.Name
    if compt == len(FreeCAD.ActiveDocument.Objects):                                      # if (compt = Alls objects hidden) then Visibility = True
        for ShapeNameObj in FreeCAD.ActiveDocument.Objects:
            FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = True      # Visibility = True
            #print "True  : ",ShapeNameObj.Name
        compt = 0
    else :
        for ShapeNameObj in FreeCAD.ActiveDocument.Objects:                               # hidde objects not selecteds
            if Gui.Selection.isSelected(ShapeNameObj) == False:
                FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = False # if objects is not selected then Visibility = False (Hidden)
                #print "False : ",ShapeNameObj.Name
            else:
                FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = True  # if objects are hidden and selected then Visibility = True and hidden alls objects visibles
                #print "True  : ",ShapeNameObj.Name
except Exception:
    None
```

## Lien

La discussion sur le forum [Proposal: select one or more pieces, hide the others.](http://forum.freecadweb.org/viewtopic.php?f=8&t=13152)

## Version

ver 00.02 12/11/2015 **macro Macro_SelectVisible** : Si aucun objet n'est sélectionné tous les objets seront cachés, si les objets sont cachés et qu'aucun objet n'est sélectionné dans la Vue combinée tous les objets seront visibles. Cette nouvelle version inclus les trois macros en une seule.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility/fr&oldid=1077436>"
