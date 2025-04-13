---
title: Draft Attiva/disattiva Griglia
---
|  |
| --- |
| Draft Attiva/disattiva Griglia |
| Posizione nel menu |
| Utilità → Attiva/disattiva Griglia Aggancio → Attiva/disattiva Griglia |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| G R |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Aggancia Griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it"), [Draft Seleziona Piano](/Draft_SelectPlane/it "Draft SelectPlane/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_ToggleGrid.svg) **Draft Attiva/disattiva Griglia** modifica la visibilità della griglia.

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Ogni [Vista 3D](/3D_view/it "3D view/it") ha la propria griglia che può essere sempre visibile, visibile solo durante i comandi o invisibile. La visibilità iniziale della griglia nelle nuove visualizzazioni dipende dalle [preferenze](#Preferenze).

## Utilizzo

1. Il comando può essere utilizzato mentre è attivo un altro comando.
2. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Draft_ToggleGrid.svg) [Attiva/disattiva Griglia](/Draft_ToggleGrid "Draft ToggleGrid") nella barra degli strumenti di aggancio di Draft.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Premere il pulsante ![](/images/Draft_ToggleGrid.svg) [Attiva/disattiva Griglia](/Draft_ToggleGrid "Draft ToggleGrid") nel [Draft snap widget](/Draft_snap_widget/it "Draft snap widget/it").
   * Draft: Selezionare l'opzione **Utilità → ![](/images/Draft_ToggleGrid.svg) Attiva/disattiva griglia** dal menu o dalla [Vista ad albero](/Tree_view/it "Tree view/it") o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it") .
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Snapping → ![](/images/Draft_ToggleGrid.svg) Attiva/disattiva Griglia** dal menu o dal menu contestuale della vista 3D.
   * Usare la scorciatoia da tastiera: G quindi R. Questa scorciatoia non può essere utilizzata se è attivo un altro comando.
3. La visibilità della griglia appartenente alla vista 3D corrente è cambiata:
   * Se nessun altro comando è attivo:
     + Se la griglia era invisibile ora è sempre visibile.
     + Se la griglia era visibile ora non è più sempre visibile, ma la visibilità della griglia durante i comandi rimane invariata.
   * Se è attivo un altro comando:
     + Se la griglia era invisibile ora è visibile solo durante i comandi.
     + Se la griglia era visibile ora non è più visibile durante i comandi e non è più sempre visibile.

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Sono disponibili diverse preferenze della griglia: **Modifica → Preferenze... → Draft → Griglia e aggancio**.
* Per mantenere la griglia attiva quando si passa ad altri ambienti di lavoro vedere [Ottimizzazione](/Fine-tuning/it#Draft_Workbench "Fine-tuning/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleGrid/it&oldid=1503320>"