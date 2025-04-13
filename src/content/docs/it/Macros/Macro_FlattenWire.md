---
title: Wire appiattita su piano mediano
---

|                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wire appiattita su piano mediano                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                    |
| Questa macro appiattisce i contorni che non sono su un unico piano al valore mediano della loro coordinata Z Versione macro: 1.1 Ultima modifica: 2021-10-27 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                                         |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png)                                                                                                                                                                                                              |
| Link                                                                                                                                                                                                                                                                                           |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                       |
| Versione macro                                                                                                                                                                                                                                                                                 |
| 1.1                                                                                                                                                                                                                                                                                            |
| Data ultima modifica                                                                                                                                                                                                                                                                           |
| 2021-10-27                                                                                                                                                                                                                                                                                     |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                            |
| Tutte                                                                                                                                                                                                                                                                                          |
| Scorciatoia                                                                                                                                                                                                                                                                                    |
| _Nessuna_                                                                                                                                                                                                                                                                                      |
| Vedere anche                                                                                                                                                                                                                                                                                   |
| _Nessuno_                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                |

## Descrizione

Questa macro appiattisce i contorni che non sono su un unico piano al valore mediano della loro coordinata Z

## Script

Icona barra strumenti
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/it&oldid=1197495>"
