---
title: Forza Wire
---

|                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forza Wire                                                                                                                                                                                                                                                                                                                                                                  |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                 |
| Questa macro crea una polilinea da oggetti selezionati (linee e archi), anche quando i normali metodi di creazione delle polilinee, per esempio lo strumento di aggiornamento, non funzionano Versione macro: 0.1 Ultima modifica: 2012-05-22 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                                                                                                                      |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png)                                                                                                                                                                                                                                                                                             |
| Link                                                                                                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                    |
| Versione macro                                                                                                                                                                                                                                                                                                                                                              |
| 0.1                                                                                                                                                                                                                                                                                                                                                                         |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                        |
| 2012-05-22                                                                                                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                             |

## Descrizione

Questa macro crea una polilinea da oggetti selezionati (linee e archi), anche quando i normali metodi di creazione delle polilinee, per esempio lo strumento di aggiornamento, non funzionano.

Attenzione, funziona solo con le versioni recenti di FreeCAD

## Script

Icona barra strumenti
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SuperWire/it&oldid=1188070>"
