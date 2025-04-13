---
title: Odebrat historii parametrů
---

|                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Remove parametric history                                                                                                                                                                                                                                                                 |
| Popis                                                                                                                                                                                                                                                                                     |
| Odebere všechny parametrické asociace z objektu ponechajíc ho jako osamocené těleso Version macro : 0.1 Date last modification : 2011-08-01 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                     |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png)                                                                                                                                                                                           |
| Odkazy                                                                                                                                                                                                                                                                                    |
| [Makro recepty                                                                                                                                                                                                                                                                            | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                     |
| 0.1                                                                                                                                                                                                                                                                                       |
| Datum poslední úpravy                                                                                                                                                                                                                                                                     |
| 2011-08-01                                                                                                                                                                                                                                                                                |
| Verze FreeCAD                                                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                                                       |
| Výchozí zástupce                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                    |
| Viz též                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                           |

## Popis

Odebere všechny parametrické asociace z objektu ponechajíc ho jako osamocené těleso

Před a po:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Remove_parametric_history/cs&oldid=692466>"
