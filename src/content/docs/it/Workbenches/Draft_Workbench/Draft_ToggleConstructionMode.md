---
title: Draft Modalità Costruzione
---
|  |
| --- |
| Draft Modalità Costruzione |
| Posizione nel menu |
| Utilità → Attiva/Disattiva modalità di costruzione |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| Draft: C M |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Aggiungi al gruppo Costruzione](/Draft_AddConstruction/it "Draft AddConstruction/it"), [Draft Gruppo automatico](/Draft_AutoGroup/it "Draft AutoGroup/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_ToggleConstructionMode.svg) **Draft Attiva/Disattiva modalità di costruzione** attiva o disattiva la modalità di costruzione Draft. Se la modalità di costruzione è su nuovi oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it"), vengono posizionati in un gruppo dedicato e dotati di un colore predefinito. Questa funzione è destinata alla geometria di costruzione, spesso temporanea, utilizzata per fornire nuovi [punti di aggancio](/Draft_Snap/it "Draft Snap/it") per la creazione di altri oggetti. Quando la geometria di costruzione non è più necessaria, il gruppo di costruzione può essere facilmente [nascosto](/Std_HideSelection/it "Std HideSelection/it") o [eliminato](/Std_Delete/it "Std Delete/it").

![](/images/Draft_construction_mode_example.jpg)

Geometria di costruzione, in blu, utilizzata per determinare il centro e il raggio di un cerchio

## Utilizzo

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_tray_button_construction.png) nel [Vassoio di Draft](/Draft_Tray/it "Draft Tray/it"). Questo pulsante è premuto se la modalità di costruzione Draft è attualmente attiva.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Utilità → ![](/images/Draft_ToggleConstructionMode.svg) Attiva/Disattiva modalità di costruzione** dal menu, o dalla [Vista ad albero](/Tree_view/it "Tree view/it") o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
   * Draft: Usare la scorciatoia da tastiera: C poi M.
2. Il pulsante nel [Vassoio di Draft](/Draft_Tray/it "Draft Tray/it") viene aggiornato.

## Note

* Se la modalità di costruzione Draft è attivata, il [layer](/Draft_Layer/it "Draft Layer/it") attivo viene ignorato.

## Preferenze

* Per cambiare l'etichetta del gruppo di costruzione: **Modifica → Preferenze... → Draft → Generale → Etichetta gruppo di Costruzione**.
* Per cambiare il colore utilizzato: **Modifica → Preferenze... → Draft → Generale → Colore della geometria di costruzione**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleConstructionMode/it&oldid=1513776>"