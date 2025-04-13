---
title: Toggle Visibility2 2-2
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Toggle Visibility2 2-2                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Cette macro travaille avec **Macro_Toggle_Visibility2_1-2** Cette macro rend tous les objets visibles en respectant les objets originaux visibles et cachés après utilisation du[Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr") Version macro : 00.02b Date dernière modification : 2017-07-27 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ec/Macro_VisibleAlls2.png) Auteur: openfablab |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [openfablab](/index.php?title=User:Openfablab&action=edit&redlink=1 "User:Openfablab (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                   |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ec/Macro_VisibleAlls2.png)                                                                                                                                                                                                                                                                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                               |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 00.02b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2017-07-27                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr") [Macro Toggle Visibility](/Macro_Toggle_Visibility/fr "Macro Toggle Visibility/fr")                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Description

Cette macro travaille avec **[Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr")**

Cette macro rend tous les objets visibles en respectant les objets originaux visibles et cachés après utilisation du [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr")

## Utilisation

Copiez les macros et les icônes dans vos macros de dossiers et exécutez-les (voir [How to install macros](/How_to_install_macros/fr "How to install macros/fr"))

## Script

Cette macro rend tous les objets visibles en respectant les objets originaux visibles et cachés après l'utilisation de la macro [Macro_Toggle_Visibility2_1-2](/Macro_Toggle_Visibility2_1-2/fr "Macro Toggle Visibility2 1-2/fr").

ToolBar Icon ![](/images/Macro_VisibleAlls2.png)

**Macro_DisplayAllObjects2_2-2.FCMacro**

```
import FreeCAD
#original name "Macro_VisibleAlls" pratical name "Macro_Toggle_Visibility2_2-2" "Macro_Toggle_Visibility2_1-2" associate with "Macro_Toggle_Visibility2_2-2"
__title__="Macro_DisplayAllObjects2_2-2"
__author__ = "openfablab"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.00b"
__date__    = "27/07/2017"

try:
    for ShapeNameObj in FreeCAD.actual:   # displyed alls objects
        #print ShapeNameObj
        FreeCADGui.ActiveDocument.getObject(ShapeNameObj).Visibility = True
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility2_2-2/fr&oldid=692581>"
