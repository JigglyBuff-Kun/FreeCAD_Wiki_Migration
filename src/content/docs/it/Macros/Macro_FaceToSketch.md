---
title: Da Faccia a Schizzo
---

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Da Faccia a Schizzo                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                       |
| Converte la faccia selezionata in uno Sketch senza vincoli. Versione macro: 1.0 Ultima modifica: 2013-12-23 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) Autore: Jreinhardt |
| Autore                                                                                                                                                                                                                                            |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                                      |
| Download                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png)                                                                                                                                                                |
| Link                                                                                                                                                                                                                                              |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                          |
| Versione macro                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                               |
| Data ultima modifica                                                                                                                                                                                                                              |
| 2013-12-23                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                               |
| Scorciatoia                                                                                                                                                                                                                                       |
| _Nessuna_                                                                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                                                                      |
| _Nessuno_                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                   |

## Descrizione

Questa macro rompe la forma con la funzione ![](/images/Draft_Downgrade.svg) [Draft Downgrade](/Draft_Downgrade/it "Draft Downgrade/it") e trasforma la faccia selezionata in uno schizzo senza vincoli e pronto per essere modificato.

## Script

Icona barra strumenti ![](/images/Macro_FaceToSketch.png)

**Macro_FaceToSketch.FCMacro**

```
import Draft

wires,_faces = Draft.downgrade(FreeCADGui.Selection.getSelection(),delete=True)

sketch = Draft.makeSketch(wires[0:1])
for wire in wires[1:]:
    Draft.makeSketch([wire],addTo=sketch)

for wire in wires:
    FreeCAD.ActiveDocument.removeObject(wire.Name)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FaceToSketch/it&oldid=1225763>"
