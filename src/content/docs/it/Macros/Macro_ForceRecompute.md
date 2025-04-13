---
title: Ricalcola
---

|                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Force Recompute                                                                                                                                                                                                    |
| Descrizione                                                                                                                                                                                                              |
| Forza il ricalcolo manuale del modello Versione macro: 1.0 Ultima modifica: 2014-09-01 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/88/Force_Recompute.png) Autore: shoogen   |
| Autore                                                                                                                                                                                                                   |
| [shoogen](/index.php?title=User:Shoogen&action=edit&redlink=1 "User:Shoogen (page does not exist)")                                                                                                                      |
| Download                                                                                                                                                                                                                 |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/88/Force_Recompute.png)                                                                                                                                          |
| Link                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it") |
| Versione macro                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                     |
| 2014-09-01                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                      |
| Scorciatoia                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                             |
| _Nessuno_                                                                                                                                                                                                                |
|                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                          |

## Descrizione

A volte in FreeCAD l'utente applica delle modifiche al modello, ma FreeCAD sembra non riconoscerle e l'icona blu ![](/images/View-refresh.svg) rimane grigia. Questa piccola macro impone un ricalcolo manuale del modello.

Sometimes when a user applies changes to the model, FreeCAD does not seem to recognize/integrate them. In addition to that, the blue ![](/images/Std_Refresh.svg) [Refresh/Recompute](/Std_Refresh "Std Refresh") button remains greyed out. Hence this small macro was designed to force a manual recompute of the model.

Da FreeCAD v0.17, l'azione di questa macro può essere ottenuta tramite GUI. Nella vista a albero del modello, fare clic destro sul progetto e scegliere "Marca da ricalcolare" dal menu contestuale. Dopo di che, premere il pulsante [Ricalcola](/Std_Refresh/it "Std Refresh/it").

## Uso

Avviare la macro quando serve.

Run the macro when necessary.

## Script

ToolBar Icon
![](/images/Force_Recompute.png)

**Macro Force_Recompute.py**

```
# -*- coding: utf-8 -*-
# Force Recompute
# macro provided by shoogen

import FreeCAD
for obj in FreeCAD.ActiveDocument.Objects:
 obj.touch()
FreeCAD.ActiveDocument.recompute()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ForceRecompute/it&oldid=1121498>"
