---
title: Arch Rimuovere una forma
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| Rimuovi forma                                                                                                        |
| Posizione nel menu                                                                                                   |
| Arch → Utilità → Rimuovi forma                                                                                       |
| Ambiente                                                                                                             |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                       |
| Avvio veloce                                                                                                         |
| _Nessuno_                                                                                                            |
| Introdotto nella versione                                                                                            |
| -                                                                                                                    |
| Vedere anche                                                                                                         |
| [Dividi mesh](/Arch_SplitMesh/it "Arch SplitMesh/it"), [Da Mesh a Forma](/Arch_MeshToShape/it "Arch MeshToShape/it") |
|                                                                                                                      |

## Descrizione

Questo strumento tenta di eliminare una forma cubica (un parallelepipedo) incorporata in un ![](/images/Arch_Wall.svg) [Muro](/Arch_Wall/it "Arch Wall/it") o in una ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it") e di regolare le sue proprietà per rendere l'oggetto rimanente totalmente parametrico. Questo strumento funziona solo se la forma da eliminare è cubica (con 6 facce e tutti gli angoli retti).

## Utilizzo

1. Selezionare un ![](/images/Arch_Wall.svg) [Muro](/Arch_Wall/it "Arch Wall/it") o una ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it").
2. Premere il pulsante ![](/images/Arch_RemoveShape.svg) o usare Arch → Utilità → ![](/images/Arch_RemoveShape.svg) Rimuovi forma dal menu in alto.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Questo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
removeShape(objs, mark=True)

```

Prende una lista di oggetti Arch (`objs`) costruiti su una forma cubica, e rimuove la forma interna, conservando la sua lunghezza, larghezza e altezza come proprietà dell'oggetto Arch.

- - `objs` è un singolo oggetto [Parete](/Arch_Wall/it "Arch Wall/it") o [Struttura](/Arch_Structure/it "Arch Structure/it"), o un loro elenco.
- Se `mark` è `True`, gli oggetti che non possono essere elaborati da questa funzione diventano rossi.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/it&oldid=1437835>"
