---
title: Rimozione della cronologia
---

|                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rimozione della cronologia                                                                                                                                                                                                                                                                        |
| Descrizione                                                                                                                                                                                                                                                                                       |
| Questa operazione rimuove tutte le associazioni parametriche da un oggetto, lasciandolo come _muto_ Versione macro: 0.1 Ultima modifica: 2011-08-01 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png) Autore: Yorik |
| Autore                                                                                                                                                                                                                                                                                            |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png)                                                                                                                                                                                                   |
| Link                                                                                                                                                                                                                                                                                              |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                          |
| Versione macro                                                                                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                                                                                               |
| Data ultima modifica                                                                                                                                                                                                                                                                              |
| 2011-08-01                                                                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                               |
| Scorciatoia                                                                                                                                                                                                                                                                                       |
| _Nessuna_                                                                                                                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                                                                                                                      |
| _Nessuno_                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                   |

## Descrizione

Questa operazione rimuove tutte le associazioni parametriche da un oggetto, lasciandolo come _muto_.

Prima e dopo :

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Remove_parametric_history/it&oldid=692471>"
