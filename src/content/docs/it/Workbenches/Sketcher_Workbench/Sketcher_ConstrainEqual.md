---
title: Sketcher Vincolo uguale
---
|  |
| --- |
| Sketcher Vincolo uguale |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo uguale |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| E |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainEqual.svg) [Sketcher Vincolo uguale](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") vincola i bordi ad avere la stessa lunghezza (linee) o curvatura (altri bordi eccetto [B-spline](/Sketcher_CreateBSpline/it "Sketcher CreateBSpline/it")). I bordi selezionati devono avere la stessa tipologia. Cerchi e archi circolari sono dello stesso tipo (i loro raggi sono resi uguali), così come lo sono le ellissi e gli archi ellittici (i loro raggi maggiore e minore sono resi uguali).

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainEqual.svg) Vincolo uguale.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainEqual.svg) Vincolo uguale** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Vincolo → ![](/images/Sketcher_ConstrainEqual.svg) Vincolo uguale** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: E.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Selezionare due bordi dello stesso tipo.
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Selezionare due o più bordi dello stesso tipo.
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainEqual.svg) Vincolo uguale** dal menu contestuale .
3. A seconda della selezione vengono aggiunti uno o più vincoli.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Edge1` e `Edge2` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/it&oldid=1509663>"