---
title: Sketcher Vincolo blocca
---
|  |
| --- |
| Sketcher Vincolo blocca |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo blocca |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K B |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Sketcher Vincolo fissa](/Sketcher_ConstrainLock/it "Sketcher ConstrainLock/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainBlock.svg) Sketcher Vincolo blocca blocca i bordi in posizione con un singolo vincolo. È destinato principalmente alle [B-spline](/Sketcher_CreateBSpline/it "Sketcher CreateBSpline/it"), che altrimenti possono essere difficile da vincolare completamente.

Il vincolo blocca influisce solo sulle parti liberamente mobili di un bordo. I bordi bloccati possono avere altri vincoli e l'applicazione di vincoli aggiuntivi a un bordo bloccato può modificarlo.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainBlock.svg) Vincolo blocca.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainBlock.svg) Vincolo blocca** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Vincolo → ![](/images/Sketcher_ConstrainBlock.svg) Vincolo blocca** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: K quindi B.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Selezionare un singolo bordo.
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Selezionare uno o più bordi.
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainBlock.svg) Vincolo blocca** dal menu contestuale .
3. A seconda della selezione vengono aggiunti uno o più vincoli.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Edge` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/it&oldid=1506315>"