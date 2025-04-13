---
title: Sketcher Crea uno schizzo
---
|  |
| --- |
| Sketcher Crea schizzo |
| Posizione nel menu |
| Schizzo → Crea uno schizzo |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [PartDesign: Nuovo schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it"), [Mappa uno schizzo](/Sketcher_MapSketch/it "Sketcher MapSketch/it"), [Riposiziona lo schizzo](/Sketcher_ReorientSketch/it "Sketcher ReorientSketch/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_NewSketch.svg) Sketcher Crea schizzo crea un nuovo schizzo e apre la finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it") per modificarlo.

Si noti che ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") ha il proprio strumento [nuovo schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it"). Quando si lavora su un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") dovrebbe essere usato quello strumento.

## Utilizzo

1. Se lo schizzo deve essere [associato](/Part_EditAttachment/it "Part EditAttachment/it") alla geometria esistente: selezionare un oggetto con una forma, o uno o più vertici, bordi e/o facce e/o un piano.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_NewSketch.svg) Crea schizzo.
   * Selezionare l'opzione **Sketch → ![](/images/Sketcher_NewSketch.svg) Crea schizzo** dal menu.
3. Se è stata selezionata la geometria:
   1. Si apre la finestra di dialogo **Associazione Schizzo**.
   2. Selezionare un [metodo di associazione](/Part_EditAttachment/it#Attachment_modes "Part EditAttachment/it") dall'elenco a discesa. Oppure selezionare **Non associare** per ignorare la selezione.
   3. Premere il pulsante OK.
4. Se non è presente alcuna selezione o è stato selezionato **Non associare** nel passaggio precedente:
   1. Si apre la finestra di dialogo **Scegli orientamento**.
   2. Specificare il piano per l'orientamento. Il piano è relativo al sistema di coordinate locali in cui si trova lo schizzo:
      * Se la casella di controllo **Inverti direzione** non è selezionata:
        + In alto: **Piano XY**
        + Davanti: **XZ-Plane**
        + Destra: **Piano YZ**
      * Se la casella di controllo **Direzione inversa** è selezionata:
        + In basso: **Piano XY**
        + Posteriore: **XZ-Plane**
        + A sinistra: **Piano YZ**
   3. Facoltativamente modificare l**Offset**. L'offset viene misurato lungo l'asse Z, Y o X del sistema di coordinate locale.
   4. Premere il pulsante OK.
5. Viene creato uno schizzo.
6. Lo schizzo viene messo in modalità di modifica e si apre la finestra di [Dialogo Sketcher](/Sketcher_Dialog "Sketcher Dialog").
7. Per terminare la modalità di modifica, vedere ![](/images/Sketcher_LeaveSketch.svg) [Sketcher Esci](/Sketcher_LeaveSketch/it "Sketcher LeaveSketch/it").

## Note

* Gli schizzi esistenti possono essere associati a (diversi) oggetti con [Sketcher Mappa schizzo](/Sketcher_MapSketch/it "Sketcher MapSketch/it") o staccati e riorientati con [Sketcher Riposiziona schizzo](/Sketcher_ReorientSketch/it "Sketcher ReorientSketch/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/it&oldid=1495358>"