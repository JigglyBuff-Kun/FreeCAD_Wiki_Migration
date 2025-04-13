---
title: Sketcher Vincolo raggio
---
|  |
| --- |
| Sketcher Vincolo raggio |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo raggio |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K R |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo raggio/diametro](/Sketcher_ConstrainRadiam/it "Sketcher ConstrainRadiam/it"), [Sketcher Vincolo diametro](/Sketcher_ConstrainDiameter/it "Sketcher ConstrainDiameter/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainRadius.svg) Sketcher Vincolo raggio fissa il raggio di cerchi, archi e [Cerchi di peso B-spline](/Sketcher_CreateBSpline/it#Notes "Sketcher CreateBSpline/it").

![](/images/Sketcher_ConstrainRadius_example.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare il pulsante {{MenuCommand|[[Image:Sketcher\_ConstrainRadius.svg|16px] ] Vincolo raggio}} dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainRadius.svg) Vincolo raggio.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainRadius.svg) Vincolo raggio** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_ConstrainRadius.svg) Vincolo raggio** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: K quindi R.
3. Per ulteriori passaggi vedere [Sketcher Vincolo raggio/diametro](/Sketcher_ConstrainRadiam/it#Continue_mode "Sketcher ConstrainRadiam/it").

### Modalità di esecuzione una sola volta

Vedere [Sketcher Vincolo raggio/diametro](/Sketcher_ConstrainRadiam/it#Run-once_mode "Sketcher ConstrainRadiam/it").

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `ArcOrCircle` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/it&oldid=1506173>"