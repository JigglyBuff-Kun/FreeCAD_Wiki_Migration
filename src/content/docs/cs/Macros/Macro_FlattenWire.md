---
title: VyrovnejDrát
---

|                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FlattenWire                                                                                                                                                                                                                                                                      |
| Popis                                                                                                                                                                                                                                                                            |
| Toto makro vyrovnává vodiče průvanu, které nejsou rovinné k jejich středové souřadnici Z Version macro : 1.0 Date last modification : 2011-08-01 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                            |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                |
| Download                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png)                                                                                                                                                                                                |
| Odkazy                                                                                                                                                                                                                                                                           |
| [Makro recepty                                                                                                                                                                                                                                                                   | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                              |
| Datum poslední úpravy                                                                                                                                                                                                                                                            |
| 2011-08-01                                                                                                                                                                                                                                                                       |
| Verze FreeCAD                                                                                                                                                                                                                                                                    |
| All                                                                                                                                                                                                                                                                              |
| Výchozí zástupce                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                           |
| Viz též                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                  |

## Description

## Deskriptivní

Toto makro vyrovná nakreslený drát, který není vyrovnán (není v jedné rovině), do roviny, která odpovídá střední výšce nevyrovnaných drátů.

## Skript

ToolBar Icon
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/cs&oldid=1086158>"
