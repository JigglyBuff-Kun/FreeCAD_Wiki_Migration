---
title: Sketcher Attiva/disattiva vincolo
---
|  |
| --- |
| Sketcher Attiva/disattiva vincolo |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Attiva/disattiva vincolo |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| K Z |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Sketcher Attiva/disattiva vincolo di guida/riferimento](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ToggleActiveConstraint.svg) Sketcher Attiva/disattiva vincolo attiva o disattiva i vincoli selezionati. La disattivazione dei vincoli consente di testare altre disposizioni geometriche senza eliminare i vincoli.

Questo strumento è simile a [Sketcher Attiva/disattiva vincolo di guida/riferimento](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it"), ma contrariamente a quello strumento funziona anche per i vincoli geometrici ed i valori dei vincoli dimensionali disattivati ​​vengono conservati.

## Utilizzo

1. Selezionare uno o più vincoli.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ToggleActiveConstraint.svg) Attiva/disattiva vincolo.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ToggleActiveConstraint.svg) Attiva/disattiva vincolo** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ToggleActiveConstraint.svg) Attiva/disattiva vincolo** dalla menu contestuale.
   * Nella sezione **Vincolo** della [Finestra di dialogo Sketchcher](/Sketcher_Dialog/it "Sketcher Dialog/it") selezionare l'opzione **Attiva** o **Disattiva** dal menu contestuale. L'opzione offerta dipende dallo stato del vincolo sotto il cursore.
   * Usare la scorciatoia da tastiera: K quindi Z.
3. I vincoli selezionati attivi vengono disattivati ​​e diventano grigi (predefinito [color](/Sketcher_Preferences/it#Appearance "Sketcher Preferences/it")), mentre i vincoli selezionati disattivati ​​vengono attivati ​​e tornano al rosso (colore predefinito).

## Esempio

![](/images/Sketcher_ToggleActiveConstraint_example_active.png)

Uno schizzo completamente vincolato‎.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_1.png)

Uno dei vincoli angolari è stato disattivato, lo schizzo non è più completamente vincolato.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_2.png)

La geometria non vincolata può essere spostata. Il vincolo disattivato è ancora disponibile e può essere riattivato per ritornare allo schizzo completamente vincolato.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo stato attivo di un vincolo può essere controllato in [macro](/Macros/it "Macros/it") e dalla [Console Python](/Python_console/it "Python console/it").

```
SketchObject.toggleActive(index)

```

Utilizzare il metodo `toggleActive` di un [Oggetto schizzo](/Sketcher_SketchObject/it "Sketcher SketchObject/it") esistente e l'`index` del vincolo per attivarlo o disattivarlo. L'indice inizia da `0` fino a `N-1`, dove `N` è il numero totale di vincoli.

Esempio:

```
import FreeCAD as App

sketch = App.ActiveDocument.Sketch
sketch.toggleActive(3)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleActiveConstraint/it&oldid=1509949>"