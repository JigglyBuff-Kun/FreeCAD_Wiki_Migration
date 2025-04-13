---
title: Sketcher Vincolo distanza verticale
---
|  |
| --- |
| Sketcher Vincolo distanza verticale |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo distanza verticale |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| I |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo distanza orizzontale](/Sketcher_ConstrainDistanceX/it "Sketcher ConstrainDistanceX/it"), [Sketcher Vincolo distanza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainDistanceY.svg) Sketcher Vincolo distanza verticale
fissa la distanza verticale tra due punti o gli estremi di una linea. Se viene preselezionato un punto singolo, la distanza è relativa all'origine dello schizzo.

![](/images/Sketcher_ConstraintDistanceY_example.png)

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Se la [preferenza](/Sketcher_Preferences/it#General "Sketcher Preferences/it") **Vincoli dimensionali** è impostata su `Strumento singolo` (predefinito): premere la freccia giù a destra del Pulsante ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) e selezionare il pulsante **![](/images/Sketcher_ConstrainDistanceY.svg) Vincolo distanza verticale** dal menu a discesa.
   * Se questa preferenza ha un valore diverso (e in versione 0.21 e precedenti): premere il pulsante ![](/images/Sketcher_ConstrainDistanceY.svg) Vincolo distanza verticale.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainDistanceY.svg) Vincolo distanza verticale** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Dimensione → ![](/images/Sketcher_ConstrainDistanceY.svg) Vincolo distanza verticale** dal menu contestuale.
   * Usare la scorciatoia da tastiera: I.
3. Per ulteriori passaggi vedere [Sketcher Vincolo distanza orizzontale](/Sketcher_ConstrainDistanceX/it#Continue_mode "Sketcher ConstrainDistanceX/it")

### Modalità di esecuzione una sola volta

Vedere [Sketcher Vincolo distanza orizzontale](/Sketcher_ConstrainDistanceX/it#Run-once_mode "Sketcher ConstrainDistanceX/it").

## Script

Distanza dall'origine:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distanza tra due vertici:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Tratto verticale della linea (la GUI consente di selezionare il bordo stesso, ma è solo una scorciatoia per utilizzare le due estremità della stessa linea):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `Edge`, `Edge1`, `Edge2`, `PointOfEdge`,  `PuntoOfEdge1`,  `PointOfEdge2` e `Line` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceY/it&oldid=1505928>"