---
title: Sketcher Vincolo fissa
---
|  |
| --- |
| Sketcher Vincolo fissa |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo fissa |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K L |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo blocca](/Sketcher_ConstrainBlock/it "Sketcher ConstrainBlock/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainLock.svg) Sketcher Vincolo fissa applica i vincoli [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it") e [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it") ai punti. Se viene selezionato un singolo punto, i vincoli fanno riferimento all'origine dello schizzo. Se vengono selezionati due o più punti, i vincoli fanno riferimento all'ultimo punto della selezione.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare il pulsante **![](/images/Sketcher_ConstrainLock.svg) Vincolo fissa** dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainLock.svg) Vincolo fissa.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainLock.svg) Vincolo fissa** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_ConstrainLock.svg) Vincolo fissa** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: K quindi L.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Selezionare un singolo punto.
5. Vengono aggiunti due vincoli.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Selezionare uno o più punti.
2. Richiamare lo strumento come spiegato sopra.
3. A seconda della selezione vengono aggiunti due o più vincoli.

## Note

* Non esiste una richiesta automatica per modificare i valori dei vincoli. Se richiesti, i valori possono essere [modificati manualmente](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/it&oldid=1506317>"