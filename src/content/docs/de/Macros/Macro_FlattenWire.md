---
title: FlattenWire
---

|                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FlattenWire                                                                                                                                                                                                                                                                                                  |
| Beschreibung                                                                                                                                                                                                                                                                                                 |
| Dieses Makro glättet Draft-Drähte, die nicht planar bezüglich ihrer mittlere Z-Koordinate ausgerichtet sind Versionsmakro : 1.1 Datum der letzten Änderung : 2021-10-27 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                        |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                            |
| Herunterladen                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png)                                                                                                                                                                                                                            |
| Links                                                                                                                                                                                                                                                                                                        |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                 |
| Macro-Version                                                                                                                                                                                                                                                                                                |
| 1.1                                                                                                                                                                                                                                                                                                          |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                   |
| 2021-10-27                                                                                                                                                                                                                                                                                                   |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                           |
| All                                                                                                                                                                                                                                                                                                          |
| Standardverknüpfung                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                              |

## Beschreibung

Dieses Makro glättet Draft-Drähte, die nicht planar bezüglich ihrer mittleren Z-Koordinate ausgerichtet sind

## Skript

Werkzeugleisten-Symbol
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/de&oldid=1256546>"
