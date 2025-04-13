---
title: FlattenWire
---

|                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FlattenWire                                                                                                                                                                                                                                                                                                   |
| Description                                                                                                                                                                                                                                                                                                   |
| Cette macro aplatit les Draft fils qui ne sont pas planaires à leur coordonnée Z médiane. Version macro : 1.1 Date dernière modification : 2021-10-27 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Auteur: Yorik |
| Auteur                                                                                                                                                                                                                                                                                                        |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                                                                                |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png)                                                                                                                                                                                                               |
| Liens                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                 |
| 1.1                                                                                                                                                                                                                                                                                                           |
| Dernière modification                                                                                                                                                                                                                                                                                         |
| 2021-10-27                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                            |
| Toutes                                                                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                               |

## Description

Cette macro aplatit les Draft fils qui ne sont pas planaires à leur coordonnée Z médiane.

## Script

Icône de la barre d'outils
![](/images/Macro_FlattenWire.png)

**Macro_FlattenWire.FCMacro**

```
import FreeCAD
obj = FreeCAD.ActiveDocument.ActiveObject
z = 0
for p in obj.Points: z += p.z
z = z/len(obj.Points)
newpoints = []
for p in obj.Points: newpoints.append(FreeCAD.Vector(p.x, p.y, z))
obj.Points = newpoints
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/fr&oldid=1086156>"
