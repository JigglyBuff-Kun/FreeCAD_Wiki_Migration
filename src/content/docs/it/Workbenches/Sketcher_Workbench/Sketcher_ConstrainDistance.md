---
title: Sketcher Vincolo distanza
---
|  |
| --- |
| Sketcher Vincolo distanza |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo distanza |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K D |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo distanza orizzontale](/index.php?title=Sketcher_ConstrainDistanceX/iy&action=edit&redlink=1 "Sketcher ConstrainDistanceX/iy (page does not exist)"), [Sketcher Vincolo distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainDistance.svg) Sketcher Vincolo distanza fissa la lunghezza di una linea, la distanza tra due punti, la distanza perpendicolare tra un punto e una linea; oppure, [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"), la distanza tra i bordi di due cerchi o archi, o tra il bordo di un cerchio o arco e una linea; o, [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"), la lunghezza di un arco.

![](/images/Sketcher_ConstrainDistance_example.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare **![](/images/Sketcher_ConstrainDistance.svg) Vincolo distanza**  dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainDistance.svg) Vincolo distanza.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainDistance.svg) Vincolo distanza** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_ConstrainDistance.svg) Vincolo distanza** dalla menu contestuale.
   * Usare la scorciatoia da tastiera K quindi D.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare una singola linea.
   * Selezionare due punti.
   * Selezionare un punto e una linea (in quest'ordine).
5. Se viene creato un [vincolo dimensionale guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"), a seconda delle [preferenze](/Sketcher_Preferences/it#Display "Sketcher Preferences/it"), si apre una finestra di dialogo per [modificarne il valore](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
6. Viene aggiunto un vincolo.
7. Facoltativamente, continuare a creare vincoli.
8. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare una singola linea.
   * Selezionare due punti.
   * Selezionare un punto e una linea (in qualsiasi ordine).
   * Selezionare i bordi di due cerchi o archi.
   * Selezionare il bordo di un cerchio o arco e una linea (idem).
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Selezionare il bordo di un singolo arco.
2. Richiamare lo strumento come spiegato sopra.
3. Facoltativamente [modificare il valore del vincolo](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
4. Viene aggiunto un vincolo.

## Note

* Se applicabile, considerare l'utilizzo dei vincoli [Distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it") o [Distanza verticale](/Sketcher_ConstrainDistanceY/it "Sketcher ConstrainDistanceY/it"). Sono più efficienti.

## Script

Distanza dall'origine:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distanza tra due vertici:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Lunghezza della linea (la GUI consente di selezionare il bordo stesso, ma è solo una scorciatoia per utilizzare le due estremità della stessa linea):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Distanza dal punto (`Edge, PointOfEdge`) al punto perpendicolare sulla linea (`Line`):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Distanza tra i bordi di due cerchi:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2`, `Line`, `Circle1` e `Circle2` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/it&oldid=1506041>"