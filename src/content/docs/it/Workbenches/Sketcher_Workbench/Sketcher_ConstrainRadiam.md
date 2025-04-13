---
title: Sketcher Vincolo raggio/diametro automatico
---
|  |
| --- |
| Sketcher Vincolo raggio/diametro automatico |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo raggio/diametro automatico |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K S |
| Introdotto nella versione |
| 0.20 |
| Vedere anche |
| [Sketcher Vincolo raggio](/Sketcher_ConstrainRadius/it "Sketcher ConstrainRadius/it"), [Sketcher Vincolo diametro](/Sketcher_ConstrainDiameter/it "Sketcher ConstrainDiameter/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainRadiam.svg) Sketcher Vincolo raggio/diametro automatico fissa il raggio degli archi e [Cerchi di peso B-spline](/Sketcher_CreateBSpline/it#Notes "Sketcher CreateBSpline/it") e il diametro dei cerchi.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del Pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare il pulsante **![](/images/Sketcher_ConstrainRadiam.svg) Vincolo raggio/diametro automatico** dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainRadiam.svg) Vincolo raggio/diametro automatico.
   * Selezionare l'opzione **Sketch → Vincoli Sketcher → ![](/images/Sketcher_ConstrainRadiam.svg) Vincolo raggio/diametro automatico** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare **Dimensione → ![](/images/Sketcher_ConstrainRadiam.svg) Vincolo raggio/diametro automatico** dal menu contestuale.
   * Usare la scorciatoia da tastiera: K quindi S.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare il bordo di un cerchio o di un arco.
   * Selezionare il bordo di un cerchio di peso B-spline.
5. Se viene creato un [vincolo dimensionale guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"), a seconda delle [preferenze](/Sketcher_Preferences/it#Display "Sketcher Preferences/it"), si apre una finestra di dialogo per [modificarne il valore](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
6. Viene aggiunto un vincolo.
7. Facoltativamente, continuare a creare vincoli.
8. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare il bordo di uno o più cerchi o archi.
   * Selezionare il bordo di uno o più cerchi di peso B-spline.
2. Richiamare lo strumento come spiegato sopra.
3. Facoltativamente [modificare il valore del vincolo](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
4. A seconda della selezione vengono aggiunti uno o più vincoli, vedere [Note](#Note).

## Note

* Se vengono creati [vincoli guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it") e sono stati preselezionati più elementi che non sono [geometria esterna](/Sketcher_External/it "Sketcher External/it"), solo il primo di questi riceve un vincolo dimensionale, mentre tra il primo e gli altri vengono applicati [Vincoli uguale](/Sketcher_ConstrainEqual/it "Sketcher ConstrainEqual/it").

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('246.0 mm')))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `ArcOrCircle` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadiam/it&oldid=1506075>"