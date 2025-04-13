---
title: Sketcher Vincolo distanza orizzontale
---
|  |
| --- |
| Sketcher Vincolo distanza orizzontale |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo distanza orizzontale |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| L |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it"), [Sketcher Vincolo distanza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainDistanceX.svg) Sketcher Vincolo distanza orizzontale
fissa la distanza orizzontale tra due punti o gli estremi di una linea. Se viene preselezionato un punto singolo, la distanza è relativa all'origine dello schizzo.

![](/images/Constraint_H_Distance.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del Pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare il pulsante **![](/images/Sketcher_ConstrainDistanceX.svg) Vincolo distanza orizzontale** dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainDistanceX.svg) Vincolo distanza orizzontale.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainDistanceX.svg) Vincolo distanza orizzontale** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_ConstrainDistanceX.svg) Vincolo distanza orizzontale** dal menu contestuale.
   * Usare la scorciatoia da tastiera: L.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare due punti (uno dei quali può essere l'origine).
   * Selezionare una singola linea.
5. Se viene creato un [vincolo dimensionale guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"), a seconda delle [preferenze](/Sketcher_Preferences/it#Display "Sketcher Preferences/it"), si apre una finestra di dialogo per [modificarne il valore](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
6. Viene aggiunto un vincolo.
7. Facoltativamente, continuare a creare vincoli.
8. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare uno o due punti.
   * Selezionare una singola linea.
2. Richiamare lo strumento come spiegato sopra.
3. Facoltativamente [modificare il valore del vincolo](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
4. Viene aggiunto un vincolo.

## Script

Distanza dall'origine:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distanza tra due vertici:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Tratto orizzontale della linea (la GUI consente di selezionare il bordo stesso, ma è solo una scorciatoia per utilizzare le due estremità della stessa linea):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Edge`, `Edge1`, `Edge2`, `PointOfEdge`,  `PuntoOfEdge1`,  `PointOfEdge2` e `Line` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceX/it&oldid=1504939>"