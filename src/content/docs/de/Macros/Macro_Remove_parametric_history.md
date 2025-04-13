---
title: Remove parametric history
---

|                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Remove parametric history                                                                                                                                                                                                                                                                                                        |
| Beschreibung                                                                                                                                                                                                                                                                                                                     |
| Dadurch wird die gesamte parametrische Assoziativität eines Objekts entfernt und bleibt als "dumme" Form erhalten Versionsmakro : 0.1 Datum der letzten Änderung : 2011-08-01 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                                            |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                |
| Herunterladen                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png)                                                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                                            |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                     |
| Macro-Version                                                                                                                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                                                                                                                              |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                       |
| 2011-08-01                                                                                                                                                                                                                                                                                                                       |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                                              |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                           |
| Siehe auch                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                  |

## Beschreibung

Dadurch wird die gesamte parametrische Assoziativität eines Objekts entfernt und bleibt als "dumme" Form erhalten.

Vorher und nachher:

![](/src/assets/images/RPH_before.png)

![](/src/assets/images/RPH_after.png)

## Skript

ToolBar Icon ![](/src/assets/images/Macro_Remove_parametric_history.png)

**Remove parametric history.FCMacro**

```
originalObject = FreeCAD.ActiveDocument.ActiveObject
newShape = originalObject.Shape.copy()
newName = FreeCAD.ActiveDocument.ActiveObject.Name
FreeCAD.ActiveDocument.removeObject(newName)
newObject = FreeCAD.ActiveDocument.addObject("Part::Feature",newName)
newObject.Shape = newShape
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Remove_parametric_history/de&oldid=692473>"
