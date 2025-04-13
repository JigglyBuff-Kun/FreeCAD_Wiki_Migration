---
title: Sketcher Vincolo coincidente
---
|  |
| --- |
| Sketcher Vincolo coincidente |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo coincidente |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| C |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo coincidente (unificato)](/Sketcher_ConstrainCoincidentUnified/it "Sketcher ConstrainCoincidentUnified/it"), [Sketcher Vincolo punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainCoincident.svg) Sketcher Vincolo coincidente crea un vincolo coincidente tra punti o ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) un vincolo concentrico tra cerchi, archi e/o ellissi (facendo coincidere i loro centri).

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): questo strumento è sostituito dallo strumento [Sketcher Vincolo coincidente (unificato)](/Sketcher_ConstrainCoincidentUnified/it "Sketcher ConstrainCoincidentUnified/it") se l'opzione **Unifica Coincidente e Punto su oggetto** è selezionata nelle [preferenze](/Sketcher_Preferences/it#General "Sketcher Preferences/it").

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainCoincident.svg) Vincolo coincidente.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainCoincident.svg) Vincolo coincidente** dal menu.
   * Usare la scorciatoia da tastiera: C.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare due punti.
   * Selezionare due bordi di cerchi, archi, ellissi o archi di ellissi.
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare due o più punti.
   * Selezionare due o più bordi di cerchi, archi, ellissi o archi di ellissi.
2. Richiamare lo strumento come spiegato sopra.
3. A seconda della selezione vengono aggiunti uno o più vincoli.

## Note

* [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): I punti con vincolo coincidente sono contrassegnati con i **Simboli di vincolo** [colore](/Sketcher_Preferences/it#Display "Sketcher Preferences/it").

## Script

Il vincolo può essere creato da [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando il seguente comando:

```
Sketch.addConstraint(Sketcher.Constraint('Coincident',LineFixed,PointOfLineFixed,LineMoving,PointOfLineMoving))

```

dove:

* `Sketch` è un oggetto schizzo.
* `LineFixed` è il numero della linea, che non deve muoversi applicando il vincolo.
* `PointOfLineFixed` indica quale vertice di `LineFixed` deve soddisfare il vincolo
* `LineMoving` è il numero della linea che si sposterà applicando il vincolo
* `PointOfLineMoving` indica quale vertice di `LineMoving` deve soddisfare il vincolo

Come indicano i nomi `LineFixed` e `LineMoving`, se entrambi i vertici vincolati sono liberi di muoversi in qualsiasi direzione, il primo (il primo ad essere selezionato nella Gui) rimarrà fisso e l'altro si muoverà. In presenza di vincoli esistenti, però, entrambi i bordi potrebbero spostarsi.

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `LineFixed`, `PointOfLineFixed`, `LineMoving` e `PointOfLineMoving`, e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincident/it&oldid=1507673>"