---
title: Sketcher Vincolo parallelo
---
|  |
| --- |
| Sketcher Vincolo parallelo |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo parallelo |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| P |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainParallel.svg) Sketcher Vincolo parallelo vincola le linee ad essere parallele.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainParallel.svg) Vincolo parallelo.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainParallel.svg) Vincolo parallelo** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Vincolo → ![](/images/Sketcher_ConstrainParallel.svg) Vincolo parallelo** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: P.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Selezionare due linee.
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Selezionare due o più linee. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): i punti possono essere inclusi nella selezione, ma verranno ignorati.
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainParallel.svg) Vincolo parallelo** dal menu contestuale .
3. A seconda della selezione vengono aggiunti uno o più vincoli.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Parallel', Line1, Line2))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Line1` e `Line2` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainParallel/it&oldid=1509194>"