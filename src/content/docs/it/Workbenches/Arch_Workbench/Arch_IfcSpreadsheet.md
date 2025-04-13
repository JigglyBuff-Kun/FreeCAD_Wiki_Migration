---
title: Arch Crea un foglio di calcolo Ifc
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| Crea foglio di calcolo Ifc                                                                        |
| Posizione nel menu                                                                                |
| Arch → Utilità → Crea foglio di calcolo Ifc...                                                    |
| Ambiente                                                                                          |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                    |
| Avvio veloce                                                                                      |
| I P                                                                                               |
| Introdotto nella versione                                                                         |
| -                                                                                                 |
| Vedere anche                                                                                      |
| [File IFC](/Arch_IFC/it "Arch IFC/it"), [Esplora Ifc](/Arch_IfcExplorer/it "Arch IfcExplorer/it") |
|                                                                                                   |

## Descrizione

Questo strumento crea un foglio di calcolo per memorizzare le proprietà [IFC](/Arch_IFC/it "Arch IFC/it") di un oggetto.

## Uso

1. Selezionare un oggetto.
2. Richiamare il comando utilizzando uno di questi metodi:
   - Premereil pulsante ![](/images/Arch_IfcSpreadsheet.svg) Crea un foglio di calcolo IFC nella barra degli strumenti.
   - Usare la scorciatoia da tastiera I P.
   - Usare la voce **Arch → Utilità → ![](/images/Arch_IfcSpreadsheet.svg) Crea un foglio di calcolo IFC** del menu principale.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
spreadsheet = makeIfcSpreadsheet(archobj=None)

```

- Crea un oggetto `spreadsheet`. Optionalmente può essere dato un `archobj`.

Esempio:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

spreadsheet = Arch.makeIfcSpreadsheet(Wall)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IfcSpreadsheet/it&oldid=1455958>"
