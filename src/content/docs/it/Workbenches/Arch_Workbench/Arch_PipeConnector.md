---
title: Arch Raccordo
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                        |
| -------------------------------------------------------------------------------------- |
| Raccordo                                                                               |
| Posizione nel menu                                                                     |
| Arch → Strumenti di Tubo → Raccordo                                                    |
| Ambiente                                                                               |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                         |
| Avvio veloce                                                                           |
| P C                                                                                    |
| Introdotto nella versione                                                              |
| 0.17                                                                                   |
| Vedere anche                                                                           |
| [Tubo](/Arch_Pipe/it "Arch Pipe/it"), [Arredo](/Arch_Equipment/it "Arch Equipment/it") |
|                                                                                        |

## Descrizione

Questo strumento crea una connessione a angolo o un tee (raccordo) tra 2 o 3 [Tubi](/Arch_Pipe/it "Arch Pipe/it") selezionati .

## Utilizzo

1. Selezionare 2 o 3 [Tubi](/Arch_Pipe/it "Arch Pipe/it"). Se si selezionano 3 tubi, due di loro devono essere perfettamente allineati.
2. Premere il pulsante ![](/images/Arch_PipeConnector.svg) Raccordo, o premere P e poi C.

## Proprietà

- Dati**Radius**: Il raggio di curvatura del raccordo

## Flusso di lavoro tipico

Vedere in [Tubo](/Arch_Pipe/it "Arch Pipe/it") le informazioni per il flusso di lavoro sull'uso dei tubi e la creazione di raccordi.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Pipe Connector può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
Connector = makePipeConnector(pipes, radius=0, name="Connector")

```

- Crea un oggetto `Connector` dai `pipes` dati, che sono una lista di [Tubi](/Arch_Pipe/it "Arch Pipe/it"), e facoltativamente un `radius` di curvatura.
  - Gli oggetti di base [Wire](/Draft_Wire/it "Draft Wire/it") dei [Tubi](/Arch_Pipe/it "Arch Pipe/it") dovrebbero condividere un punto finale per creare un raccordo corretto e regolare.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(-1000, 0, 0)
p2 = FreeCAD.Vector(-2000, 0, 0)
p3 = FreeCAD.Vector(-2000, 0, 0)
p4 = FreeCAD.Vector(-2000, -1000, 0)
p5 = FreeCAD.Vector(-2000, -1000, 0)
p6 = FreeCAD.Vector(-4000, -1000, 0)
Line1 = Draft.makeWire([p1, p2])
Line2 = Draft.makeWire([p3, p4])
Line3 = Draft.makeWire([p5, p6])

Pipe1 = Arch.makePipe(Line1, 150)
Pipe2 = Arch.makePipe(Line2, 150)
Pipe3 = Arch.makePipe(Line3, 150)
FreeCAD.ActiveDocument.recompute()

Conn = Arch.makePipeConnector([Pipe1, Pipe2])
Conn2 = Arch.makePipeConnector([Pipe2, Pipe3])
FreeCAD.ActiveDocument.recompute()

Line4 = Draft.move(Line1, FreeCAD.Vector(-500, 1000, 0), copy=True)
Line5 = Draft.move(Line2, FreeCAD.Vector(-500, 1000, 0), copy=True)
Pipe4 = Arch.makePipe(Line4, 100)
Pipe5 = Arch.makePipe(Line5, 100)
FreeCAD.ActiveDocument.recompute()

Conn3 = Arch.makePipeConnector([Pipe4, Pipe5], radius=400)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_PipeConnector/it&oldid=1437710>"
