---
title: Draft Aggancia Perpendicolare
---
|  |
| --- |
| Draft Aggancia Perpendicolare |
| Posizione nel menu |
| Aggancio → Aggancia perpendicolare |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Aggancio](/Draft_Snap/it "Draft Snap/it"), [Draft Blocca aggancio](/Draft_Snap_Lock/it "Draft Snap Lock/it") |
|  |

## Descrizione

L'opzione ![](/images/Draft_Snap_Perpendicular.svg) **Draft Aggancia Perpendicolare** esegue l'aggancio alle proiezioni perpendicolari di un punto precedente su facce ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e bordi. Le facce e gli spigoli possono appartenere ad oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it") ma anche ad oggetti creati con altri [ambienti di lavoro](/Workbenches/it "Workbenches/it").

Questa opzione di aggancio troverà anche punti su facce e bordi estesi.

![](/images/Draft_Snap_Perpendicular_example.png)

Aggancio del secondo punto di una linea al punto perpendicolare su un bordo esteso

## Utilizzo

Per informazioni generali riguardo gli agganci vedere [Draft Aggancio](/Draft_Snap/it "Draft Snap/it").

1. Assicurarsi che l'aggancio sia abilitato. Vedere ![](/images/Draft_Snap_Lock.svg) [Draft Blocca aggancio](/Draft_Snap_Lock/it "Draft Snap Lock/it").
2. Se **Draft Aggancia Perpendicolare** non è attivo, eseguire una delle seguenti operazioni:
   * Premere il pulsante ![](/images/Draft_Snap_Perpendicular.svg) Aggancia perpendicolare nella barra degli strumenti di aggancio Draft.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Tenere premuto il pulsante ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) nel [Draft snap widget](/Draft_snap_widget/it "Draft snap widget/it") e nel menu che si apre selezionare l'opzione **![](/images/Draft_Snap_Perpendicular.svg) Aggancia perpendicolare**.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Aggancio → ![](/images/Draft_Snap_Perpendicular.svg) Aggancia perpendicolare** dal menu o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
3. Scegliere un comando Draft o BIM per creare la propria geometria.
4. Tenere presente che si può anche modificare le opzioni di aggancio mentre un comando è attivo.
5. Scegliere un primo punto. Questa opzione di aggancio richiede un punto precedente. Il punto perpendicolare verrà determinato in relazione a questo punto.
6. Spostare il cursore su una faccia o un bordo.
7. La faccia o il bordo vengono evidenziati.
8. Se viene trovato un punto perpendicolare, il punto viene contrassegnato e l'icona ![](/images/Draft_Snap_Perpendicular.svg) viene visualizzata vicino al cursore.
9. Se sono presenti più punti perpendicolari: facoltativamente spostare il cursore più vicino a un altro punto perpendicolare. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
10. Fare clic per confermare il punto.

## Preferenze

Vedere [Draft Aggancio](/Draft_Snap/it#Preferenze "Draft Snap/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Perpendicular/it&oldid=1474593>"