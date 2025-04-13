---
title: Normal Vector
---

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vettore normale                                                                                                                                                                                                                                   |
| Descrizione                                                                                                                                                                                                                                       |
| Fornisce un vettore normale alla faccia prescelta Versione macro: 1.0 Ultima modifica: 2016-09-26 Versione FreeCAD: Tutte versione Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png) Autore: ulrich1a |
| Autore                                                                                                                                                                                                                                            |
| [ulrich1a](/index.php?title=User:Ulrich1a&action=edit&redlink=1 "User:Ulrich1a (page does not exist)")                                                                                                                                            |
| Download                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png)                                                                                                                                                               |
| Link                                                                                                                                                                                                                                              |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                          |
| Versione macro                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                               |
| Data ultima modifica                                                                                                                                                                                                                              |
| 2016-09-26                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                               |
| Tutte versione                                                                                                                                                                                                                                    |
| Scorciatoia                                                                                                                                                                                                                                       |
| _Nessuna_                                                                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                                                                      |
| _Nessuno_                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                   |

## Descrizione

Macro semplice per ottenere l'output nella console python di un vettore normale alla faccia selezionata in precedenza nella vista 3D.

## Utilizzo

- Selezionare una faccia nella vista 3D.
- Copiare il codice della Macro nella console python.
- FreeCAD visualizza le informazioni del vettore normale nella console python.
- Utilizzare questi valori per impostare la direzione mentre si crea una vista di disegno.

## Script

Icona barra strumenti
![](/images/Macro_Normal_Vector.png)

**Macro_Normal_Vector.FCMacro**

```
Gui.Selection.getSelectionEx()[0].SubObjects[0].Faces[0].normalAt(0,0)
```

## Link

[La discossione nel forum, in tedesco](http://forum.freecadweb.org/viewtopic.php?f=13&t=10959)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Normal_Vector/it&oldid=1303384>"
