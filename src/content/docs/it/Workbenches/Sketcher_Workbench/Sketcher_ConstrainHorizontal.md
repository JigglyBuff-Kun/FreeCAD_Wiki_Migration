---
title: Sketcher Vincolo orizzontale
---
|  |
| --- |
| Sketcher Vincolo orizzontale |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo orizzontale |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| H |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo Orizzontale/verticale](/Sketcher_ConstrainHorVer/it "Sketcher ConstrainHorVer/it"), [Sketcher Vincolo verticale](/Sketcher_ConstrainVertical/it "Sketcher ConstrainVertical/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainHorizontal.svg) Sketcher Vincolo orizzontale vincola le linee o le coppie di punti ad essere orizzontali (parallele all'asse orizzontale dello schizzo).

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): nella maggior parte dei casi è consigliabile utilizzare invece lo strumento combinato [Sketcher Vincolo orizzontale/verticale](/Sketcher_ConstrainHorVer/it "Sketcher ConstrainHorVer/it").

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Strumento automatico per orizzontale/verticale** è selezionata (predefinito): premere la freccia giù a destra del pulsante ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare l'opzione **![](/images/Sketcher_ConstrainHorizontal.svg) Vincolo orizzontale** dal menu a discesa.
   * Se questa preferenza non è selezionata (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainHorizontal.svg) Vincolo orizzontale.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainHorizontal.svg) Vincolo orizzontale** dal menu.
   * Usare la scorciatoia da tastiera: H.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare due punti.
   * Selezionare una singola riga.
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare due o più punti.
   * Selezionare una o più righe. I punti possono essere inclusi nella selezione, ma verranno ignorati.
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainHorizontal.svg) Vincolo orizzontale** dal menu contestuale .
3. A seconda della selezione vengono aggiunti uno o più vincoli.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Line` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/it&oldid=1508475>"