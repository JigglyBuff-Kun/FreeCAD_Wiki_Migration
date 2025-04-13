---
title: Draftː Aggancia Speciale
---
|  |
| --- |
| Draft Aggancia Speciale |
| Posizione nel menu |
| Aggancio → Aggancia speciale |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Draft Aggancio](/Draft_Snap/it "Draft Snap/it"), [Draft Blocca aggancio](/Draft_Snap_Lock/it "Draft Snap Lock/it") |
|  |

## Descrizione

L'opzione ![](/images/Draft_Snap_Special.svg) **Draft Aggancia Speciale** esegue l'aggancio ai [punti speciali](#Supported_special_points) definiti dall'oggetto. Gli oggetti supportati sono [Arch Muri](/Arch_Wall/it "Arch Wall/it"), [Arch Strutture](/Arch_Structure/it "Arch Structure/it") e [Arch Arredamento](/Arch_Equipment/it "Arch Equipment/it").

![](/images/Draft_Snap_Special_example.png)

Aggancio del secondo punto di una linea a un punto speciale di un muro ad arco, che è un vertice del suo oggetto Base

## Utilizzo

Per informazioni generali riguardo gli agganci vedere [Draft Aggancio](/Draft_Snap/it "Draft Snap/it").

1. Assicurarsi che l'aggancio sia abilitato. Vedere ![](/images/Draft_Snap_Lock.svg) [Draft Blocca aggancio](/Draft_Snap_Lock "Draft Snap Lock").
2. Se **Draft Aggancia Speciale** non è attivo, eseguire una delle seguenti operazioni:
   * Premiere il pulsante ![](/images/Draft_Snap_Special.svg) Aggancia speciale nella barra degli strumenti di aggancio di Draft.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Tenere premuto il pulsante ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) nel [Draft snap widget](/Draft_snap_widget/it "Draft snap widget/it") e nel menu che si apre selezionare l'opzione **![](/images/Draft_Snap_Special.svg) Aggancia speciale**.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Aggancio → ![](/images/Draft_Snap_Special.svg) Aggancia speciale** dal menu o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it") .
3. Scegliere un comando Draft o BIM per creare la propria geometria.
4. Tenere presente che si può anche modificare le opzioni di aggancio mentre un comando è attivo.
5. Spostare il cursore su un oggetto supportato.
6. L'oggetto viene evidenziato.
7. Se viene trovato un punto speciale, il punto viene contrassegnato e l'icona ![](/images/Draft_Snap_Special.svg) viene visualizzata vicino al cursore.
8. Se l'oggetto ha più punti speciali: opzionalmente spostare il cursore più vicino a un altro punto speciale.
9. Fare clic per confermare il punto.

## Punti speciali supportati

* I vertici dell'oggetto Dati**Base** di ![](/images/Arch_Wall.svg) [Arch Muri](/Arch_Wall/it "Arch Wall/it").
* Il punto Dati**Placement** di ![](/images/Arch_Structure.svg) [Arch Strutture](/Arch_Structure/it "Arch Structure/it").
* I Dati**Snap Points** di ![](/images/Arch_Equipment.svg) [Arch Arredamento](/Arch_Equipment/it "Arch Equipment/it").

## Preferenze

Vedere [Draft Aggancio](/Draft_Snap/it#Preferenze "Draft Snap/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Special/it&oldid=1474599>"