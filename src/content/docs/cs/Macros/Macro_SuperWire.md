---
title: SuperDrát
---

|                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SuperWire                                                                                                                                                                                                                                                                                                                                                     |
| Popis                                                                                                                                                                                                                                                                                                                                                         |
| Toto makro vytváří drát (lomenou čáru) z vybraných objektů (přímek a oblouků) i v případech kdy běžné metody pro vytváření drátů (např. nástroj pro aktualizaci) selžou Version macro : 0.1 Date last modification : 2012-05-22 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) Autor: Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                         |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                             |
| Download                                                                                                                                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png)                                                                                                                                                                                                                                                                               |
| Odkazy                                                                                                                                                                                                                                                                                                                                                        |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                                | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                         |
| 0.1                                                                                                                                                                                                                                                                                                                                                           |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                         |
| 2012-05-22                                                                                                                                                                                                                                                                                                                                                    |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                                 |
| All                                                                                                                                                                                                                                                                                                                                                           |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                        |
| Viz též                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                               |

## Description

## Deskriptivní

Toto makro vytváří drát (lomenou čáru) z vybraných objektů (přímek a oblouků) i v případech kdy běžné metody pro vytváření drátů (např. nástroj pro aktualizaci) selžou.

Pozor, aby to fungovalo, potřebujete nejnovější verzi FreeCADu.

## Skript

ToolBar Icon
![](/images/Macro_SuperWire.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SuperWire/cs&oldid=1086210>"
