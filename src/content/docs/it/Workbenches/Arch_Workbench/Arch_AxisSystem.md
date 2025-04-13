---
title: Arch Sistema di assi
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                               |
| ----------------------------------------------------------------------------- |
| Sistema di assi                                                               |
| Posizione nel menu                                                            |
| Arch → Strumenti per assi → Sistema di assi                                   |
| Ambiente                                                                      |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                |
| Avvio veloce                                                                  |
| _Nessuno_                                                                     |
| Introdotto nella versione                                                     |
| -                                                                             |
| Vedere anche                                                                  |
| [Assi](/Arch_Axis/it "Arch Axis/it"), [Griglia](/Arch_Grid/it "Arch Grid/it") |
|                                                                               |

## Descrizione

Lo strumento Sistema di assi consente di combinare 2 o 3 oggetti [Assi](/Arch_Axis/it "Arch Axis/it").

Questo è utile per definire i punti di intersezione tra i diversi assi. Gli oggetti Arch possono quindi utilizzare questo sistema per duplicare la loro forma sui diversi punti di intersezione.

![](/images/Arch_AxisSystem_example.jpg)

Tre oggetti [Assi](/Arch_Axis/it "Arch Axis/it") combinati in un unico Sistema di assi. Un oggetto [Struttura](/Arch_Structure/it "Arch Structure/it") usa questo sistema come sua proprietà Dati**Axis**, per duplicare la sua forma in ogni punto di intersezione.

## Utilizzo

1. Facoltativamente, selezionare gli oggetti [Assi](/Arch_Axis/it "Arch Axis/it") che si desidera includere in questo sistema.
2. Premere il pulsante ![](/images/Arch_AxisSystem.svg) Sistema di assi.
3. Fare clic con il tasto destro del mouse sull'oggetto Sistema di assi appena creato nella vista ad albero per aggiungere o modificare gli oggetti [Assi](/Arch_Axis/it "Arch Axis/it") incluso in questo sistema.
4. Selezionare qualsiasi [Asse](/Arch_Axis/it "Arch Axis/it") esistente e premere i pulsanti ![](/images/Arch_Add.svg) [Aggiungi](/Arch_Add/it "Arch Add/it") o ![](/images/Arch_Remove.svg) [Rimuovi](/Arch_Remove/it "Arch Remove/it") per aggiungerlo o rimuoverlo dal sistema.
5. Impostare le proprietà Dati**Axis** per fare in modo che un oggetto Arch punti a questo sistema, e la sua forma venga duplicata nei punti di intersezione di questo sistema

## Opzioni

- Uno stesso oggetto [Asse](/Arch_Axis/it "Arch Axis/it") può essere parte di più di un sistema
- Qualsiasi oggetto basato su una forma può anche essere usato come proprietà **Asse** di oggetti Arch. In questo caso, la forma dell'oggetto viene duplicata lungo i vertici dell'oggetto Axis

## Script

_Vedere anche:_ [Arch API](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Sistema di assi può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

- Crea un oggetto `AxisSystem` da un dato `axes`, che è un singolo [Asse](/Arch_Axis/it "Arch Axis/it"), o un elenco di assi.

Esempio:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/it&oldid=1432785>"
