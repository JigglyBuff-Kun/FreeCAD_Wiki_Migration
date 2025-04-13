---
title: PartDesign Spessore
---
|  |
| --- |
| Spessore |
| Posizione nel menu |
| Part Design → Spessore |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Spessore di Parte](/Part_Thickness/it "Part Thickness/it") |
|  |

## Descrizione

Lo strumento **Spessore** funziona su un corpo solido e lo trasforma in un oggetto cavo, con almeno una faccia aperta, e assegna a ciascuna delle sue facce rimanenti uno spessore uniforme. Su alcuni solidi permette di velocizzare significativamente il lavoro ed evita di fare estrusioni e tasche.

![](/images/PartDesign_Thickness_example.svg)

Base solid (A) → Solid with selected face to be opened (B) → Resulting hollow object (C)

## Utilizzo

### Add a thickness

1. Selezionare una o più facce nel corpo attivo.
2. Premere il pulsante ![](/images/PartDesign_Thickness.svg) **Spessore**.
3. Definire i **Parametri dello spessore** (vedere le [Opzioni](#Options/it)).
4. Per aggiungere più facce da aprire, premere su Aggiungi faccia e selezionare una faccia nella vista 3D.
5. Per rimuovere una faccia selezionata in precedenza, premere su Rimuovi faccia e selezionare una faccia nella vista 3D o fare clic con il tasto destro sull'etichetta della faccia nell'elenco e selezionare *Rimuovi*.
6. Premere OK.

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Edit a thickness

1. Do one of the following:
   * Double-click the Thickness object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Thickness object in the [Tree view](/Tree_view "Tree view") and select **Edit Thickness** from the context menu.
2. The **Thickness parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Opzioni

* **Thickness**: Spessore della parete dell'oggetto risultante. Impostare il valore desiderato.
* **Mode**
  + *Skin*: Selezionare questa opzione per ottenere un oggetto simile ad un vaso, senza testa ma con il fondo
  + *Pipe*: Selezionare questa opzione per ottenere un oggetto simile ad un tubo, senza testa e senza fondo. In questo caso può essere conveniente selezionare le facce da eliminare prima di avviare lo strumento. Aiutarsi con i pulsanti delle viste predefinite o utilizzare i tasti numerici.
  + *Recto Verso*:
* **Join Type**
  + *Arc*: rimuove i bordi esterni e crea un raccordo con un raggio uguale allo spessore definito.
  + *Intersection*: quando le facce sono spostate verso l'esterno, gli spigoli tra le facce vengono mantenuti.
* **Make thickness inwards**: quando è selezionato, le facce sono spostate verso l'interno.

## Notes

* Deve essere selezionata almeno una faccia da aprire.
* Se lo spessore va verso l'interno, il valore deve essere inferiore alla dimensione più piccola del corpo.
* Il comando potrebbe non riuscire con forme complesse. In questo contesto la superficie di un cono deve già essere considerata complessa.
  + [Sweep additivi](/PartDesign_AdditivePipe/it "PartDesign AdditivePipe/it") o [Loft additivo](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") possono funzionare meglio per creare forme complesse

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Thickness object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Dati**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Dati**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Dati (hidden)**Add Sub Shape** (`PartShape`)
* Dati (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Dati (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Part Design

* Dati**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Thickness

* Dati**Value** (`Length`): Thickness value. Default: `1 mm`.
* Dati**Mode** (`Enumeration`): Mode. `Skin` (default), `Pipe` or `Recto verso`. Only `Skin` is implemented.
* Dati**Join** (`Enumeration`): Join type. `Arc` (default) or `Intersection`.
* Dati**Reversed** (`Bool`): Apply the thickness towards the solids interior. Default: `false`.
* Dati**Intersection** (`Bool`): Enable intersection-handling. Default: `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Thickness/it&oldid=1336116>"