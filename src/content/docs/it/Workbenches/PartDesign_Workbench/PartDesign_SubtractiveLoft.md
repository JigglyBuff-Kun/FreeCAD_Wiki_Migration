---
title: PartDesign Loft sottrattivo
---
|  |
| --- |
| Loft sottrattivo |
| Posizione nel menu |
| Part Design → Loft sottrattivo |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Loft additivo](/PartDesign_AdditiveLoft/it "PartDesign AdditiveLoft/it"), [Sweep sottrattivo](/PartDesign_SubtractivePipe/it "PartDesign SubtractivePipe/it") |
|  |

## Descrizione

**Loft sottrattivo** crea un solido sottrattivo nel corpo attivo eseguendo una transizione tra due o più schizzi (indicati anche come sezioni trasversali). La sua forma viene quindi sottratta dal solido esistente.

## Utilizzo

### Flusso di lavoro basato su dialogo

1. Press the ![](/images/PartDesign_SubtractiveLoft.svg) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft") button.
2. In the **Select feature** dialog, select a sketch to be used as base profile object and click OK.
   * Alternatively, either a single sketch or the face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")) can be selected prior to pressing the subtractive loft button.
3. In the **Loft parameters**, press the Add Section button.
4. Select the next sketch in the [3D view](/3D_view "3D view"). Repeat to select more sketches in the order you want them to be lofted through. (You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
5. Set options if needed and click OK.

### Flusso di lavoro basato su selezione

1. Select several sketches. It is hereby important in what order you select them:
   * The sketch selected at first will become the base profile object in the next step
   * The sketches selected after the first one will become the loft sections. Also here the selection order is important: The sketch selected as second will become the first loft section, the one selected as third becomes the second section and so on. (You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
   * The first or last selection can also be a face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"))
2. Press the ![](/images/PartDesign_SubtractiveLoft.svg) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft") button.
3. Set options if needed and click OK.

## Opzioni

* **Ruled surface**: effettua transizioni diritte tra le sezioni trasversali. Non si applica a un loft con due sezioni trasversali. Se non viene selezionato, le transizioni sono fluide.
* **Closed**: effettua una transizione dall'ultima sezione trasversale alla prima, creando un loop.
* Premere il pulsante Rimuovi sezione per rimuovere uno schizzo, selezionandolo nella vista 3D.

## Proprietà

* Dati**Label**: nome dato all'operazione, questo nome può essere cambiato a piacere.
* Dati**Sections**: elenca le sezioni utilizzate.
* Dati**Ruled**: vedere [Opzioni](#Opzioni).
* Dati**Closed**: vedere [Opzioni](#Opzioni).
* Dati**Midplane**: N/A
* Dati**Reversed**: N/A
* Dati**Refine**: vero o falso. Se impostato su true, pulisce il solido dai bordi residui lasciati dalle operazioni. Per maggiori dettagli vedere [Affina forma](/Part_RefineShape/it "Part RefineShape/it").

## Note

* Gli schizzi devono formare profili chiusi.
* Non è possibile eseguire il loft su un vertice.
* Una sezione trasversale non può giacere sullo stesso piano di quella immediatamente precedente.
* Per controllare meglio la forma del loft, è consigliabile che tutte le sezioni abbiano lo stesso numero di segmenti. Ad esempio, per un loft tra un rettangolo e un cerchio, il cerchio può essere suddiviso in 4 archi collegati.

## Link

* [Dettagli tecnici di Loft di Part](/Part_Loft_Technical_Details/it "Part Loft Technical Details/it") spiega come viene creato un [Loft di Part](/Part_Loft/it "Part Loft/it"), e gran parte del suo contenuto è rilevante anche per il loft sottrattivo di PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveLoft/it&oldid=1570679>"