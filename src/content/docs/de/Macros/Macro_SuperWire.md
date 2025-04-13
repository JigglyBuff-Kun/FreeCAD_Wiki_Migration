---
title: SuperWire
---

|                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SuperWire                                                                                                                                                                                                                                                                                                                                                        |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                     |
| Dieses Makro erstellt einen Draht aus ausgewählten Objekten (Linien und Bögen), auch wenn normale Drahtherstellungsmethoden (z. B. das Upgrade-Tool) fehlschlagen Versionsmakro : 0.1 Datum der letzten Änderung : 2012-05-22 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                            |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png)                                                                                                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                                                                            |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                     |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                                                                                                                                                              |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                       |
| 2012-05-22                                                                                                                                                                                                                                                                                                                                                       |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                                                                              |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                           |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                  |

## Beschreibung

Dieses Makro erstellt einen Draht aus ausgewählten Objekten (Linien und Bögen), in denen normale Draht-Erstellungsverfahren fehlschlagen.  
Achtung, Sie benötigen eine aktuelle Version von FreeCAD, damit dies funktioniert.

Achtung, Sie benötigen eine aktuelle Version von FreeCAD, damit dies funktioniert.

## Skript

Werkzeugleisten-Symbol
![](/src/assets/images/Macro_SuperWire.png)

**Macro_SuperWire.FCMacro**

```
import FreeCAD,FreeCADGui,Part
try:
    import DraftGeomUtils as fcgeo
except:
    from draftlibs import fcgeo

sel = FreeCADGui.Selection.getSelection()
if not sel:
   FreeCAD.Console.PrintWarning("Select something first!")
else:
   elist = []
   for obj in sel:
       if hasattr(obj,"Shape"):
           elist.append(obj.Shape.Edges[0])
   wire = fcgeo.superWire(elist)
   if wire:
       Part.show(wire)
   else:
       FreeCAD.Console.PrintError("SuperWire operation failed!")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SuperWire/de&oldid=1086208>"
