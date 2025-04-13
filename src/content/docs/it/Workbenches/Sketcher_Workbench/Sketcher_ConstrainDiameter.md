---
title: Sketcher Vincolo diametro
---
|  |
| --- |
| Sketcher Vincolo diametro |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo diametro |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K O |
| Introdotto nella versione |
| 0.18 |
| Vedere anche |
| [Sketcher Vincolo raggio/diametro](/Sketcher_ConstrainRadiam/it "Sketcher ConstrainRadiam/it"), [Sketcher Vincolo raggio](/Sketcher_ConstrainRadius/it "Sketcher ConstrainRadius/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainDiameter.svg) Sketcher Vincolo diametro fissa il diametro di cerchi e archi. Non può essere utilizzato per [Cerchi peso B-spline](/Sketcher_CreateBSpline/it#Notes "Sketcher CreateBSpline/it").

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare il pulsante {{MenuCommand|[[Image:Sketcher\_ConstrainDiameter.svg|16px] ] Vincolo diametro}} dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainDiameter.svg) Vincolo diametro.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainDiameter.svg) Vincolo diametro** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_ConstrainDiameter.svg) Vincolo diametro** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: K quindi O.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Selezionare il bordo di un cerchio o di un arco.
5. Se viene creato un [vincolo dimensionale guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"), a seconda delle [preferenze](/Sketcher_Preferences/it#Display "Sketcher Preferences/it"), si apre una finestra di dialogo per [modificarne il valore](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
6. Viene aggiunto un vincolo.
7. Facoltativamente, continuare a creare vincoli.
8. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Selezionare il bordo di uno o più cerchi o archi.
2. Richiamare lo strumento come spiegato sopra.
3. Facoltativamente [modificare il valore del vincolo](/Sketcher_Workbench/it#Edit_constraints "Sketcher Workbench/it").
4. A seconda della selezione vengono aggiunti uno o più vincoli, vedere [Note](#Note).

## Note

* Se vengono creati [vincoli guida](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it") e sono stati preselezionati più elementi che non sono [geometria esterna](/Sketcher_External/it "Sketcher External/it"), solo il primo di questi riceve un vincolo dimensionale, mentre tra il primo e gli altri vengono applicati [Vincoli uguale](/Sketcher_ConstrainEqual/it "Sketcher ConstrainEqual/it").

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `ArcOrCircle` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDiameter/it&oldid=1506204>"