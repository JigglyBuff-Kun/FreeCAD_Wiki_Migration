---
title: Arch Griglia
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| Griglia                                                                                           |
| Posizione nel menu                                                                                |
| Arch → Strumenti per assi → Griglia                                                               |
| Ambiente                                                                                          |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                    |
| Avvio veloce                                                                                      |
| _Nessuno_                                                                                         |
| Introdotto nella versione                                                                         |
| -                                                                                                 |
| Vedere anche                                                                                      |
| [Asse](/Arch_Axis/it "Arch Axis/it"), [Sistema di assi](/Arch_AxisSystem/it "Arch AxisSystem/it") |
|                                                                                                   |

## Descrizione

Lo strumento ![](/images/Arch_Grid.svg) Griglia consente di posizionare nel documento un oggetto simile a una griglia. Questo oggetto ha lo scopo di fungere da base per costruire oggetti Arch che richiedono una trama regolare ma complessa, come finestre, facciate continue, griglie di colonne, ringhiere, ecc. L'oggetto Grid è modificabile come un foglio di calcolo, dove è possibile aggiungere o rimuovere colonne e righe, definire le loro dimensioni e unire le celle.

La Griglia è un oggetto 2D e quindi può essere utilizzato ovunque sia necessaria una forma 2D, ad esempio in un [Disegno](/Draft_Workbench/it "Draft Workbench/it") o uno [Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma può anche comportarsi come un [Sistema di assi](/Arch_AxisSystem/it "Arch AxisSystem/it"), e può essere utilizzato per propagare il posizionamento di altri oggetti Arch.

![](/images/Arch_Grid_example.jpg)

Una serie di colonne, un sistema di ringhiere e una finestra, ciascuna basata su un oggetto Griglia.

## Utilizzo

1. Presmere il pulsante ![](/images/Arch_Grid.svg) Griglia.
2. Impostare **Larghezza** e **Altezza** della griglia nelle proprietà.
3. Entrare nella modalità di modifica facendo doppio clic sull'oggetto griglia nella vista ad albero.
4. Aggiungere righe e colonne.
5. Impostare la larghezza e l'altezza desiderate di righe e colonne facendo doppio clic sulle intestazioni delle righe o colonne.

## Opzioni

- Una larghezza di colonna o altezza di riga pari a 0 significa che le sue dimensioni saranno adattate automaticamente per adattarsi alla larghezza o altezza totale della griglia.
- Le celle possono essere unite e separate selezionandole e facendo clic sul pulsante appropriato.
- Quando viene usata come proprietà Dati**Axis** di altri oggetti Arch, la griglia guida il posizionamento di questi oggetti. La proprietà Dati**Points Output** definisce come sono posizionati gli oggetti sulla griglia: ai vertici, nei punti medi del bordo o al centri delle facce.
- Impostando le proprietà Dati**Auto Height** o Dati**Auto Width** su un valore diverso da zero, il numero totale di righe o colonne e le loro altezze o larghezze individuali viene ignorato. Invece, viene automaticamente creato il numero massimo di colonne o righe della larghezza o altezza automatica specificata.

## Proprietà

- Dati**Rows**: Numero di righe
- Dati**Columns**: Numero di colonne
- Dati**Row Size**: Dimensione delle righe
- Dati**Column Size**: Dimensione delle colonne
- Dati**Points Output**: Il tipo di punti 3D prodotti da questo oggetto griglia
- Dati**Width**: La larghezza totale di questa griglia
- Dati**Height**: L'altezza totale di questa griglia
- Dati**Auto Width**: Crea divisioni di colonna automatiche (impostare su 0 per disabilitare)
- Dati**Auto Height**: Crea divisioni di riga automatiche (impostare su 0 per disabilitare)
- Dati**Reorient**: Quando si trova in modalità punto medio, stabilisce se questa griglia deve riorientamento i propri figli lungo le normali del bordo o meno
- Dati**Hidden Faces**: Gli indici delle facce da nascondere

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Griglia può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Grid = makeGrid(name="Grid")

```

- Crea un oggetto `Grid`.

I suoi attributi `Width`, `Height`, `Rows`, e `Columns` possono essere modificati direttamente per definire l'aspetto della griglia.

```
import FreeCAD, Draft, Arch
Grid = Arch.makeGrid()

Grid.Width = 5000
Grid.Height = 5000
Grid.Rows = 4
Grid.Columns = 6
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = Grid
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/it&oldid=1435464>"
