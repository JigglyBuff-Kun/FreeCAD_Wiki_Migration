---
title: merge duplicate materials
---

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro merge duplicate materials                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                |
| Fusionne les matériaux ayant le même nom Version macro : 2.0 Date dernière modification : 20197-07-12 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ed/Macro_merge_duplicate_materials.png) Auteur: yorik |
| Auteur                                                                                                                                                                                                                                                     |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                          |
| Téléchargement                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ed/Macro_merge_duplicate_materials.png)                                                                                                                                                            |
| Liens                                                                                                                                                                                                                                                      |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                           |
| Version Macro                                                                                                                                                                                                                                              |
| 2.0                                                                                                                                                                                                                                                        |
| Dernière modification                                                                                                                                                                                                                                      |
| 20197-07-12                                                                                                                                                                                                                                                |
| Version(s) FreeCAD                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                            |

## Description

Fusionne les matériaux qui ont le même nom de base (avec différentes terminaisons numériques comme 001, 002, ...) dans un seul. Seul le premier sera conservé, et tous les objets qui se lient aux doublons seront en lien avec le premier. Donc, avant d'utiliser cette macro, assurez-vous que votre premier matériau (soit celui sans sans chiffre, est le nombre le plus bas dans la liste trouvée) est le bon.

## Script

Icône de la barre d'outils
![](/images/Macro_merge_duplicate_materials.png)

**Merge duplicate materials.FCMacro**

```
import FreeCAD,FreeCADGui
mats = [o for o in FreeCAD.ActiveDocument.Objects if o.isDerivedFrom("App::MaterialObject")]
todelete = []
for mat in mats:
    if mat.Label[-1].isdigit() and mat.Label[-2].isdigit() and mat.Label[-3].isdigit():
        orig = None
        for om in mats:
            if om.Label == mat.Label[:-3].strip():
                orig = om
                break
        if orig:
            for par in mat.InList:
                for prop in par.PropertiesList:
                    if getattr(par,prop) == mat:
                        print( "Changed property '"+prop+"' of object "+par.Label+" from "+mat.Label+" to "+orig.Label)
                        setattr(par,prop,orig)
            todelete.append(mat)
for tod in todelete:
    if not tod.InList:
        print( "Deleting material "+tod.Label)
        FreeCAD.ActiveDocument.removeObject(tod.Name)
    elif (len(tod.InList) == 1) and (tod.InList[0].isDerivedFrom("App::DocumentObjectGroup")):
        print( "Deleting material "+tod.Label)
        FreeCAD.ActiveDocument.removeObject(tod.Name)
    else:
        print( "Unable to delete material "+tod.Label+": InList not empty")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_merge_duplicate_materials/fr&oldid=1086184>"
