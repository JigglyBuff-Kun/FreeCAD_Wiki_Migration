---
title: Arch Edificio
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| Edificio                                                                                                |
| Posizione nel menu                                                                                      |
| Arch → Edificio                                                                                         |
| Ambiente                                                                                                |
| [Architettura](/Arch_Workbench/it "Arch Workbench/it")                                                  |
| Avvio veloce                                                                                            |
| B U                                                                                                     |
| Introdotto nella versione                                                                               |
| -                                                                                                       |
| Vedere anche                                                                                            |
| [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"), [Sito](/Arch_Site/it "Arch Site/it") |
|                                                                                                         |

## Descrizione

L'Edificio di Arch è un gruppo speciale di oggetti di FreeCAD particolarmente adatto per rappresentare un edificio completo. Viene prevalentemente utilizzato per organizzare gli oggetti [Piano](/Arch_Floor/it "Arch Floor/it") nel modello che li contiene.

## Utilizzo

1. Selezionare uno o più oggetti da includere nel nuovo edificio.
2. Premere il pulsante ![](/images/Arch_Building.svg) Edificio, oppure premere i tasti B e U.

## Opzioni

- A partire dalla versione 0.18 di FreeCAD, l'oggetto Edificio è in realtà una [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it") con la proprietà Dati**IFC Type** impostata su "Building". È possibile convertire qualsiasi BuildingPart, Parte di edificio, in un edificio semplicemente modificando il suo tipo IFC.
- Dopo aver creato un edificio, è possibile aggiungere ad esso altri oggetti con il drag-and-drop nella struttura ad albero o utilizzando lo strumento ![](/images/Arch_Add.svg) [Aggiungi](/Arch_Add/it "Arch Add/it").
- È possibile rimuovere gli oggetti da un edificio trascinandoli fuori con il drag-and-drop nella vista ad albero o utilizzando lo strumento ![](/images/Arch_Remove.svg) [Rimuovi](/Arch_Remove/it "Arch Remove/it").

## Proprietà

- Dati**Building Type**: Il tipo di edificio, da scegliere da una lista

## Scripting

## Script

_Vedere anche:_ [Arch API](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Edificio può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

- Crea un oggetto `Building` da una `objectslist`, che è una lista di oggetti, o da un `baseobj`, che è una `Shape`.

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

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/it&oldid=1432803>"
