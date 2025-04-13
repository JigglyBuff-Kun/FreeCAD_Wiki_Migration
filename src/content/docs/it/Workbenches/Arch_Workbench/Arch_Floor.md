---
title: Arch Piano
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Piano                                                                                                                                                                                                                                      |
| Posizione nel menu                                                                                                                                                                                                                         |
| Arch → Piano                                                                                                                                                                                                                               |
| Ambiente                                                                                                                                                                                                                                   |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                                                                                                                                             |
| Avvio veloce                                                                                                                                                                                                                               |
| L V                                                                                                                                                                                                                                        |
| Introdotto nella versione                                                                                                                                                                                                                  |
| -                                                                                                                                                                                                                                          |
| Vedere anche                                                                                                                                                                                                                               |
| [Arch Edificio](/index.php?title=Arch%CC%9E_Building/it&action=edit&redlink=1 "Arch̞ Building/it (page does not exist)"), [Arch Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"), [Arch Sito](/Arch_Site/it "Arch Site/it") |
|                                                                                                                                                                                                                                            |

## Descrizione

Il Piano del modulo Arch è un gruppo speciale di oggetti di FreeCAD che possiede alcune proprietà aggiuntive particolarmente utili nella costruzione dei piani. In particolare, possiede la proprietà di altezza, che i suoi oggetti figli, i muri ([muri](/Arch_Wall/it "Arch Wall/it") e le [strutture](/Arch_Structure/it "Arch Structure/it")), possono utilizzare per impostare automaticamente la loro altezza. I piani sono prevalentemente utilizzati per organizzare il modello.

A partire da FreeCAD 0.18, il Piano è derivato interamente dall'oggetto [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"), che è un contenitore generale per organizzare un modello di edificio non limitato a piani o pavimenti. Gli oggetti Piano creati con versioni precedenti di FreeCAD possono essere convertiti nel nuovo tipo facendo clic con il pulsante destro del mouse su di essi e scegliendo `Convert to BuildingPart`.

## Utilizzo

1. Opzionalmente, selezionare uno o più oggetti da includere nel nuovo piano.
2. Richiamare il comando Piano in uno di questi modi:
   - Premere il pulsante ![](/images/Arch_Floor.svg) Piano nella barra degli strumenti.
   - Usare la scorciatoia L V da tastiera.
   - Usare **Arch → Piano** dal menu principale.

## Opzioni

- Dopo aver creato un piano, è possibile aggiungere ad esso altri oggetti con il drag-and-drop nella struttura ad albero o utilizzando lo strumento ![](/images/Arch_Add.svg) [Aggiungi](/Arch_Add/it "Arch Add/it").
- È possibile rimuovere gli oggetti da un piano trascinandoli fuori con il drag-and-drop nella vista ad albero o utilizzando lo strumento ![](/images/Arch_Remove.svg) [Rimuovi](/Arch_Remove/it "Arch Remove/it").

## Proprietà

Un oggetto Piano condivide tutte le proprietà di una [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"), con la proprietà Dati**Ifc Type** impostata su `"Building Storey"`.

## Scripting

## Script

_Vedere anche:_ [Arch API](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Piano può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console di Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

- Crea un oggetto `Floor` da una `objectslist`, che è una lista di oggetti.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/it&oldid=1435442>"
