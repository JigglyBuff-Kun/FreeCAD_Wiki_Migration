---
title: Arch Rimuovi componente
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rimuovi Componente                                                                                                                                                      |
| Posizione nel menu                                                                                                                                                      |
| Arch → Rimuovi componente                                                                                                                                               |
| Ambiente                                                                                                                                                                |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                                                                          |
| Avvio veloce                                                                                                                                                            |
| _Nessuno_                                                                                                                                                               |
| Introdotto nella versione                                                                                                                                               |
| -                                                                                                                                                                       |
| Vedere anche                                                                                                                                                            |
| [Taglio con una linea](/Arch_CutLine/it "Arch CutLine/it"), [Taglio con piano](/Arch_CutPlane/it "Arch CutPlane/it"), [Aggiungi componente](/Arch_Add/it "Arch Add/it") |
|                                                                                                                                                                         |

# Descrizione

Lo strumento Rimuovi permette di eseguire 2 tipi di operazioni:

- Rimuovere un sotto-componente di un oggetto Architettura, ad esempio rimuovere il cubo che è stato inserito in una parete per descrivere il comando ![](/images/Arch_Add.svg) [Aggiungi componente](/Arch_Add/it "Arch Add/it").
- Rimuovere un oggetto basato su [forme](/Part_Workbench/it "Part Workbench/it"), tipo un ![](/images/Arch_Wall.svg) [muro](/Arch_Wall/it "Arch Wall/it") o una ![](/images/Arch_Structure.svg) [struttura](/Arch_Structure/it "Arch Structure/it"), da un oggetto di Arch.

La controparte di questo strumento è lo strumento ![](/images/Arch_Add.svg) [Aggiungi](/Arch_Add/it "Arch Add/it").

![](/images/Arch_Remove_example.jpg)

Un parallelepipedo sottratto da un muro, lasciando un buco in esso.

## Utilizzo

1. Selezionare un sotto-componente all'interno di un oggetto di Arch.
2. Premere il pulsante ![](/images/Arch_Remove.svg), o utilizzare Arch → ![](/images/Arch_Remove.svg) Rimuovi componente dal menù principale.

Oppure

1. Selezionare gli oggetti da sottrarre, l'ultimo oggetto selezionato deve essere l'oggetto Arch dal quale verranno sottratti gli altri oggetti.
2. Premere il pulsante ![](/images/Arch_Remove.svg), o utilizzare Arch → ![](/images/Arch_Remove.svg) Rimuovi componente dal menù principale.

## Scripting

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Rimuovi può essere usato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
removeComponents(objectsList, host=None)

```

- Rimuove dal genitore il componente o i componenti della lista `objectsList` fornita.
- Se viene specificato un oggetto `host`, questa funzione prova invece ad aggiungere gli oggetti alla `objectsList`, come fori a `host`.

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

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/it&oldid=1437752>"
