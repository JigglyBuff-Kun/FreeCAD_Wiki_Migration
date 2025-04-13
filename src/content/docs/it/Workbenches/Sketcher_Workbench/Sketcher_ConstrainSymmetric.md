---
title: Sketcher Vincolo simmetrico
---
|  |
| --- |
| Sketcher Vincolo simmetrico |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo simmetrico |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| S |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainSymmetric.svg) Sketcher Vincolo simmetrico vincola due punti ad essere simmetrici intorno ad una linea o asse, o intorno ad un terzo punto.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainSymmetric.svg) Vincolo simmetrico.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainSymmetric.svg) Vincolo simmetrico** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e seleziona l'opzione **Vincolo → ![](/images/Sketcher_ConstrainSymmetric.svg) Vincolo simmetrico** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: S.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare due punti e un punto di simmetria (in questo ordine).
   * Selezionare due punti e una linea di simmetria (idem).
   * Selezionare un punto, una linea di simmetria e un altro punto (idem).
   * Selezionare una linea e un punto di simmetria (idem).
5. Viene aggiunto un vincolo.
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare due punti e un punto di simmetria (in questo ordine).
   * Selezionare due punti e una linea di simmetria (in qualsiasi ordine).
   * Selezionare una linea e un punto di simmetria (idem).
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainSymmetric.svg) Vincolo simmetrico** dal menu contestuale .
3. Viene aggiunto un vincolo.

## Note

* Le frecce di questo vincolo mostrano il colore dei vincoli dimensionali.

## Script

Due punti e una linea di simmetria:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line1, PointOfLine1, Line2, PointOfLine2, SymmetryLine))

```

Due punti e un punto di simmetria:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line1, PointOfLine1, Line2, PointOfLine2, LineS, PointOfLineS))

```

Una linea e un punto di simmetria (Nella GUI è possibile selezionare una linea e un punto, ma internamente utilizza la stessa forma di sopra, con le due estremità della stessa linea):

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line, 1, Line, 2, LineS, PointOfLineS))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Line1`, `Line2`, `LineS`, `Line`, `PointOfLine1`, `PointOfLine2` e `PointOfLineS` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainSymmetric/it&oldid=1509695>"