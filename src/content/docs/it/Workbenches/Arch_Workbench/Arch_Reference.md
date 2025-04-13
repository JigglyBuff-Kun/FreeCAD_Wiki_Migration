---
title: Arch Riferimento
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                   |
| ----------------------------------------------------------------- |
| Riferimento                                                       |
| Posizione nel menu                                                |
| Arch → Riferimento                                                |
| Ambiente                                                          |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                    |
| Avvio veloce                                                      |
| _Nessuno_                                                         |
| Introdotto nella versione                                         |
| -                                                                 |
| Vedere anche                                                      |
| [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it") |
|                                                                   |

## Descrizione

Lo strumento Riferimento consente di posizionare nel documento corrente un oggetto che copia la sua forma e i suoi colori da un oggetto basato su [Part](/Part_Workbench/it "Part Workbench/it") (incluso [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it")) e memorizzato in un altro file di FreeCAD. Se il file di FreeCAD cambia, l'oggetto di riferimento viene contrassegnato per essere ricaricato.

![](/images/Arch_reference_screenshot.png)

## Utilizzo

1. Premere il pulsante ![](/images/Arch_Reference.svg) **Riferimento**.
2. Premere il pulsante "Choose file..." e selezionare un file FreeCAD esistente.
3. Selezionare uno degli oggetti Part-based inclusi dall'elenco a discesa
4. Premere **OK**.

## Opzioni

- L'oggetto di riferimento può essere spostato e ruotato, la posizione corrente verrà mantenuta dopo il ricaricamento dell'oggetto.
- Se l'oggetto originale viene spostato nel file contenitore, questo movimento si riflette nell'oggetto riferimento.
- Facendo clic con il pulsante destro del mouse su un oggetto riferimento nella vista ad albero, si dispone delle opzioni per ricaricare l'oggetto originale o aprire il file contenitore.
- Per fare riferimento a più oggetti contemporaneamente, posizionali all'interno di una [Parte di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it").
- Quando si disattiva la proprietà vista **Update Colors** del Riferimento, non si ricaricano più i colori originali, quindi è possibile cambiarli in modo sicuro.

## Proprietà

- Dati**File**: il file base su cui è costruito questo componente
- Dati**Part**: la parte da utilizzare dal file di base
- Vista**Update Colors**: se è true, i colori del file collegato vengono aggiornati

## Script

Lo strumento Riferimento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console di Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
reference = makeReference([filepath], [partname], [name])

```

crea un oggetto Riferimento dall'oggetto dato nel file specificato.

Esempio:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/it&oldid=1481128>"
