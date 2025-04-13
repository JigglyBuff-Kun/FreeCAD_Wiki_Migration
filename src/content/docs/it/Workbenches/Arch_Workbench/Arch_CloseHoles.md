---
title: Arch Chiudere i fori
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Chiudi fori                                    |
| Posizione nel menu                             |
| Arch → Utilità → Chiudi fori                   |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| [Controlla](/Arch_Check/it "Arch Check/it")    |
|                                                |

## Descrizione

Questo strumento identifica i fori (sequenza circolare di bordi aperti) in un oggetto [Forma](/Part_Workbench/it "Part Workbench/it") e tenta di chiuderlo con l'aggiunta di una nuova faccia costruita dalla sequenza dei bordi aperti. È però comunque necessario verificare se il risultato è un solido.

## Utilizzo

1. Selezionare una [Forma](/Part_Workbench/it "Part Workbench/it") (un oggetto Parte)
2. Selezionare la voce ![](/images/Arch_CloseHoles.svg) Chiudi fori nel menu **Arch → Utilità → Chiudi fori**.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
solid = closeHole(shape)

```

- Chiude un foro in una `shape`, che è una `Part.Shape`, e restituisce il nuovo oggetto `solid`.

Esempio:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute()

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/it&oldid=1432836>"
