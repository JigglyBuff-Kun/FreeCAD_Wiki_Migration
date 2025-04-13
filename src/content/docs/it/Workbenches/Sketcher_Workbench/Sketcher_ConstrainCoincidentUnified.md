---
title: Sketcher Vincolo coincidente (unificato)
---
|  |
| --- |
| Sketcher Vincolo coincidente (unificato) |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo coincidente |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| C |
| Introdotto nella versione |
| 1.0 |
| Vedere anche |
| [Sketcher Vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it"), [Sketcher Vincolo punto sull'oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Sketcher Vincolo coincidente (unificato) crea un vincolo coincidente tra punti, fissa i punti sui bordi o sugli assi (le linee vengono quindi trattate come infinite e anche le curve aperte vengono virtualmente estese), oppure crea un vincolo concentrico tra cerchi, archi e/o ellissi (facendo coincidere i loro centri).

Questo strumento sostituisce gli strumenti [Sketcher Vincolo coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") e [Sketcher Vincolo punto sull'oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") se l'opzione **Unifica Coincidente e Punto su oggetto** è selezionata nelle [preferenze](/Sketcher_Preferences/it#General "Sketcher Preferences/it").

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Vincolo coincidente.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Vincolo coincidente** dal menu.
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Vincolo → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Vincolo coincidente** dal menu contestuale.
   * Usare la scorciatoia da tastiera: C.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare due punti.
   * Selezionare due bordi di cerchi, archi, ellissi o archi di ellissi.
   * Selezionare un singolo punto e un singolo bordo (in qualsiasi ordine).
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare due o più punti.
   * Selezionare due o più bordi di cerchi, archi, ellissi o archi di ellissi.
   * Selezionare un singolo punto e un singolo bordo (in qualsiasi ordine).
   * Selezionare più punti e un singolo bordo (idem).
   * Selezionare un singolo punto e più bordi (idem).
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainCoincidentUnified.svg) Vincolo coincidente** dal menu contestuale.
3. A seconda della selezione vengono aggiunti uno o più vincoli.

## Note

* [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): I punti con vincoli coincidenti sono contrassegnati con i **Simboli di vincolo** [colore](/Sketcher_Preferences/it#Display "Sketcher Preferences/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincidentUnified/it&oldid=1506531>"