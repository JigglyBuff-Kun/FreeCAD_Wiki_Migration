---
title: Platta ut tråd
---
|  |
| --- |
| FlattenWire |
| Beskrivning |
| Detta makro flattar utkaststrådar som inte är planerade till sin median Z-koordinat  Versions makro : 1.0 Datum senaste ändring : 2011-08-01 FreeCAD-versionen : All Ladda ner : [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Författare : Yorik |
| Författare |
| [Yorik](/User:Yorik "User:Yorik") |
| Ladda ner |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) |
| länkar |
| [Makros recept](/Macros_recipes/sv "Macros recipes/sv") [Så här installerar du makron](/How_to_install_macros/sv "How to install macros/sv") [Hur man anpassar verktygsfält](/Customize_Toolbars/sv "Customize Toolbars/sv") |
| Makroversion |
| 1.0 |
| Datum senaste ändring |
| 2011-08-01 |
| FreeCAD Version(s) |
| All |
| Standard genväg |
| *None* |
| Se även |
| *None* |
|  |
|  |

## Description

## Deskription

Detta makro plattar ut ritlinjer som inte är parallella (i Z-axeln) till deras median Z koordinat.

## Script

ToolBar Icon
![](/images/Macro_FlattenWire.png)

**Macro\_FlattenWire.FCMacro**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/sv&oldid=1086159>"