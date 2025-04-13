---
title: Sketcher Attiva/disattiva vincolo di guida/riferimento
---
|  |
| --- |
| Sketcher Attiva/disattiva vincolo di guida/riferimento |
| Posizione nel menu |
| *Nessuno* |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K X |
| Introdotto nella versione |
| 0.16 |
| Vedere anche |
| [Sketcher Attiva/disattiva vincolo](/Sketcher_ToggleActiveConstraint/it "Sketcher ToggleActiveConstraint/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ToggleDrivingConstraint.svg) Sketcher Attiva/disattiva vincolo di guida/riferimento alterna gli [strumenti di creazione di vincoli dimensionali](/Sketcher_Workbench/it#Sketcher_CompDimensionTools "Sketcher Workbench/it") tra la modalità di guida e quella di riferimento oppure alterna i vincoli dimensionali selezionati tra quelli modalità.

Contrariamente ai vincoli guida, i vincoli di riferimento non vincolano lo schizzo, il loro valore dipende da altri vincoli e sono guidati. Possono essere utili per verificare le misurazioni. Possono essere utilizzati in [espressioni](/Expressions/it "Expressions/it"), ma non nello schizzo stesso.

![](/images/Sketcher_ToggleConstraint_example.png)

Un vincolo guida di distanza orizzontale (50 mm), un vincolo guida di distanza verticale (30 mm) e un vincolo guida di angolo (75°) sono stati impostati per definire il profilo; è stata aggiunta una quota di riferimento sul segmento di linea obliqua per conoscerne la lunghezza (31,0583 mm).

## Utilizzo

### Attiva/disattiva strumenti

1. Assicurarsi che non siano stati selezionati vincoli dimensionali.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ToggleDrivingConstraint.svg) Attiva/disattiva vincolo di guida/riferimento.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ToggleDrivingConstraint.svg) Attiva/disattiva vincolo di guida/riferimento** dal menu.
   * Usare la scorciatoia da tastiera: K quindi X.
3. La modalità degli strumenti di creazione dei vincoli dimensionali viene attivata:
   * In modalità guida le icone del menu e della barra degli strumenti sono rosse e creano vincoli di guida (predefinito [color](/Sketcher_Preferences/it#Appearance "Sketcher Preferences/it") rosso). L'icona di questo strumento è quindi: ![](/images/Sketcher_ToggleConstraint.svg).
   * In modalità riferimento le icone dei menu e della barra degli strumenti sono blu e creano vincoli di riferimento (colore predefinito blu). L'icona di questo strumento è quindi: ![](/images/Sketcher_ToggleConstraint_Driven.svg).

### Attiva/disattiva vincoli

1. Selezionare uno o più vincoli dimensionali.
2. Richiamare lo strumento come descritto sopra o con una delle seguenti opzioni aggiuntive:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ToggleDrivingConstraint.svg) Attiva/disattiva vincolo di guida/riferimento** da il menu contestuale.
   * Fare clic con il pulsante destro del mouse sulla sezione **Vincoli** della [Finestra di dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it") e selezionare l'opzione **Attiva/disattiva da/in riferimento** dal menu contestuale.
3. I vincoli selezionati vengono modificati dalla modalità di guida alla modalità di riferimento o viceversa. Il loro aspetto cambia di conseguenza.
4. La modalità degli strumenti di creazione dei vincoli dimensionali non viene modificata.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleDrivingConstraint/it&oldid=1509863>"