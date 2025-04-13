---
title: Draft Aggancia Centro
---
|  |
| --- |
| Draft Aggancia Centro |
| Posizione nel menu |
| Aggancio → Aggancia centro |
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

L'opzione ![](/images/Draft_Snap_Center.svg) **Draft Aggancia Centro** esegue l'aggancio al punto centrale delle facce e dei bordi circolari e al punto Dati**Placement** di [Draft Piani di Lavoro Proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") e [Arch Parti di Edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"). Le facce e gli spigoli possono appartenere ad oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it") ma anche ad oggetti creati con altri [ambienti di lavoro](/Workbenches/it "Workbenches/it").

![](/images/Draft_Snap_Center_example_arc.png)

Aggancio del secondo punto di una linea al centro di un bordo circolare

![](/images/Draft_Snap_Center_example_buildingpart.png)

Aggancio del secondo punto di una linea al punto di Posizionamento di un Arch Parte di Edificio

## Utilizzo

Per informazioni generali riguardo gli agganci vedere [Draft Aggancio](/Draft_Snap/it "Draft Snap/it").

1. Assicurarsi che l'aggancio sia abilitato. Vedere ![](/images/Draft_Snap_Lock.svg) [Draft Blocca aggancio](/Draft_Snap_Lock "Draft Snap Lock").
2. Se **Draft Aggancia Centro** non è attivo, eseguire una delle seguenti operazioni:
   * Premere il pulsante ![](/images/Draft_Snap_Center.svg) Aggancia centero nella barra degli strumenti di aggancio Draft.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Tenere premuto il pulsante ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) nel [Draft snap widget](/Draft_snap_widget/it "Draft snap widget/it") e nel menu che si apre selezionare l'opzione **![](/images/Draft_Snap_Center.svg) Aggancia centro**.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Aggancio → ![](/images/Draft_Snap_Center.svg) Aggancia centro** dal menu o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
3. Scegliere un comando Draft o BIM per creare la propria geometria.
4. Tenere presente che si può anche modificare le opzioni di aggancio mentre un comando è attivo.
5. Effettuare una delle seguenti operazioni:
   * Per selezionare il punto centrale di una faccia o di un bordo circolare:
     + Spostare il cursore sulla faccia o sul bordo.
     + La faccia o il bordo vengono evidenziati.
   * Per selezionare il punto Dati**Placement** di un [Draft Piano di Lavoro Proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it"):
     + Spostare il cursore su qualsiasi elemento del piano di lavoro proxy.
     + Il piano di lavoro proxy non è evidenziato.
   * Per selezionare il punto Dati**Placement** di un [Arch Parte di Edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"):
     + Spostare il cursore su uno dei bordi del simbolo dell'asse piccolo della Parte di Edificio, o sul testo accanto ad esso che visualizza la Dati**Label** della Parte di Edificio e il suo livello.
     + Vengono evidenziati solo i bordi del simbolo dell'asse. Il testo non è evidenziato.
6. Se viene trovato un punto, il punto viene contrassegnato e l'icona ![](/images/Draft_Snap_Center.svg) viene visualizzata vicino al cursore.
7. Fare clic per confermare il punto.

## Preferenze

Vedere [Draft Aggancio](/Draft_Snap/it#Preferenze "Draft Snap/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Center/it&oldid=1474585>"