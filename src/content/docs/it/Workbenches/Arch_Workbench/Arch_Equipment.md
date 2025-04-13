---
title: Arch Arredo
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arredo                                         |
| Posizione nel menu                             |
| Arch → Arredo                                  |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| E Q                                            |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| [3 viste](/Arch_3Views/it "Arch 3Views/it")    |
|                                                |

## Descrizione

Lo strumento Arredo offre un modo semplice e comodo per inserire nei progetti degli elementi autonomi non strutturali come ad esempio i mobili, le attrezzature idrosanitarie o gli apparecchi elettrici. Gli Arredi sono basati su [forme Part](/Part_Workbench/it "Part Workbench/it"), che permettono loro di beneficiare della solidità e delle possibilità delle geometrie BRep, e che generano una bella vista durante il rendering dei piani e viste in sezione.

![](/images/Arch_equipment_example.jpg)

Oggetti di arredamento racchiusi in un oggetto Arredo. Le proiezioni piatte possono essere ottenute dallo strumento [Vista 2D di Draft](/Draft_Shape2DView/it "Draft Shape2DView/it")

A partire dalla versione 0.17, gli oggetti arredo hanno anche una proprietà Dati**HiRes** in cui può essere collegato un oggetto [Mesh](/Mesh_Workbench/it "Mesh Workbench/it"). Gli oggetti arredo possono essere creati in modo che nella vista 3D sia visualizzata tale mesh invece che la loro forma, e questo permette di utilizzare qualsiasi oggetto mesh ad alta risoluzione, ad esempio i mobili dettagliati che si trovano comunemente sui siti web.

![](/images/Arch_equipment_mesh.jpg)

Oggetti di arredamento racchiusi in un oggetto Arredo, con allegata una mesh ad alta risoluzione

Quando si utilizza l'esportatore OBJ di Arch, tutti gli oggetti arredo che si trovano in modalità di visualizzazione Mesh vengono esportati come loro mesh, invece della loro forma.

## Utilizzo

1. Selezionare una forma [Part](/Part_Workbench/it "Part Workbench/it") e, opzionalmente, un oggetto [Mesh](/Mesh_Workbench/it "Mesh Workbench/it").
2. Premere il pulsante ![](/images/Arch_Equipment.svg) Arredo, o premere i tasti E poi Q.

## Proprietà

- Gli elementi Arredo condividono le proprietà e i comportamenti comuni di tutti i [Componenti Arch](/Arch_Component/it "Arch Component/it")

- Dati**Model**: Una descrizione del modello di questo arredo.
- Dati**Url**: Un URL della pagina del prodotto dove si possono trovare maggiori informazioni su questo arredo.
- Dati**Mesh**: Una rappresentazione [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") da utilizzare per questo arredo. Quando è impostata, diventa disponibile la modalità di visualizzazione **Mesh**.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Arredo può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

- Crea un oggetto `Equipment` dal `baseobj` dato, che può essere una `Part` o una `Mesh`.
- Se viene dato un `placement`, esso viene utilizzato.
- Restituisce `None` se l'operazione fallisce.

Esempio:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/it&oldid=1539665>"
