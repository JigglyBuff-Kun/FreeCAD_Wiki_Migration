---
title: Part Design Smusso
---
|  |
| --- |
| Smusso |
| Posizione nel menu |
| PartDesign → Smusso |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [PartDesign Raccordo](/PartDesign_Fillet/it "PartDesign Fillet/it"),[Part Smusso](/Part_Chamfer/it "Part Chamfer/it") |
|  |

## Descrizione

Questo strumento applica degli smussi ai bordi di un oggetto selezionato. All'albero del Progetto viene aggiunto un nuovo elemento **Chamfer** (Smusso) (seguito da un numero sequenziale se non è il primo smusso creato nel documento).

## Utilizzo

### Add a chamfer

* Selezionare uno spigolo, o una faccia su un oggetto, quindi avviare lo strumento facendo clic sul oulsante ![PartDesign Chamfer](/images/PartDesign_Chamfer.svg) [Smusso](/PartDesign_Chamfer "PartDesign Chamfer") o usare PartDesign → Smusso dal menu principale. Nel caso in cui sia selezionata una faccia lo smusso viene applicato a tutti i suoi bordi.
* Nei Parametri smusso del [pannello Azioni](/Task_panel/it "Task panel/it") si può definire lo smusso in 3 modi:
  + **Stessa distanza**: I bordi degli smussi sono equidistanti dal bordo del corpo.
  + **Due distanze**: Vengono specificate le distanze dal bordo dello smusso al bordo del corpo. È possibile invertire la direzione della distanza. [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")
  + **Distanza e angolo**: Viene specificata una distanza dal bordo dello smusso al bordo del corpo. Il secondo bordo dello smusso è definito dall'angolo dello smusso. È possibile invertire la direzione della distanza. [disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")
* Nei Parametri smusso del [pannello Azioni](/Task_panel/it "Task panel/it"), impostare la dimensione dello smusso inserendo il valore o facendo clic sulle frecce su o giù. Lo smusso applicato è mostrato in tempo reale.
* Se si desidera aggiungere altri bordi o facce fare prima clic sul pulsante Aggiungi e quindi selezionare il bordo o la faccia.
* Se si desidera rimuovere bordi o facce,
  + selezionare il bordo o la faccia nell'elenco della finestra di dialogo e premere il tasto Canc. *Nota*: poiché deve esserci almeno un bordo per la funzione, l'ultimo bordo o faccia rimanente nell'elenco non può essere rimosso.
  + oppure fare clic sul pulsante Rimuovi. Tutti i bordi e le facce precedentemente selezionate sono evidenziati in viola. Selezionare il bordo o la faccia da rimuovere.
* Fare click su OK per convalidare.
* Per una catena di spigoli tangenti tra loro, è possibile selezionare un singolo bordo; lo smusso si propaga lungo la catena.
* Per modificare lo smusso dopo che la funzione è stata convalidata, fare doppio clic sull'etichetta Smusso nella struttura del progetto, oppure fare clic con il pulsante destro del mouse su di essa e selezionare **Modifica smusso**.

### Edit a chamfer

1. Do one of the following:
   * Double-click the Chamfer object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Chamfer object in the [Tree view](/Tree_view "Tree view") and select **Edit Chamfer** from the context menu.
2. The **Chamfer parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* To add edges do one of the following:
  + Press the Add button to start selecting edges and/or faces in the [3D view](/3D_view "3D view").
  + To select all remaining edges do the following:
    1. If required press the Add button.
    2. Use the Ctrl+Shift+A keyboard shortcut, or right-click the list and select **Add all edges** from the context menu.
* To remove edges do one of the following:
  + Press the Remove button to start deselecting edges and/or faces in the [3D view](/3D_view "3D view"). Selected elements are highlighted in purple.
  + Select one or more elements in the list and press the Del key, or right-click the list and select **Remove** from the context menu.
* Specify a chamfer **Type**:
  + **Equal distance**: One distance is used to place both chamfer edges.
  + **Two distances**: Two distances are used to place the chamfer edges.
  + **Distance and angle**: A distance is used to place one chamfer edge, the placement of the other chamfer edge is defined by the angle of the chamfer.
* Press the ![](/images/PartDesign_Flip_Direction.svg) Flip direction button to flip the direction of the chamfer (deactivated for **Equal distance**).
* Set the **Size** of the chamfer.
* Set the **Size2** of the chamfer (only available if **Two distances** is selected).
* Set the **Angle** of the chamfer (only available if **Distance and angle** is selected).
* Check the **Use all edges** checkbox to select all edges of the previous feature. This deactivates the selection list and the related buttons.

## Notes

## Lo smusso di PartDesign e smusso di Parte

**Lo smusso di PartDesign non deve essere confuso con lo [smusso di Part](/Part_Chamfer/it "Part Chamfer/it")**.
Anche se condividono la stessa icona, questi strumenti sono diversi e si utilizzano in modo diverso.
La differenza principale è che lo smusso di PartDesign crea una voce smusso separata (seguita da un numero sequenziale se esistono già smussi) nella struttura del progetto per il corpo corrente. Lo smusso di Part diventa il genitore dell'oggetto a cui è stato applicato.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Chamfer object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Dati**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Dati**Use All Edges** is `true`.
* Dati**Support Transform** (`Bool`): If `true` the chamfered shape of the additive/subtractive parent feature will be used when the chamfer object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the chamfer itself will be used. The default is `false`.
* Dati (hidden)**Add Sub Shape** (`PartShape`)
* Dati (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Dati (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Chamfer

* Dati**Chamfer Type** (`Enumeration`): The chamfer type: `Equal distance` (default), `Two distances` or `Distance and Angle`.
* Dati**Size** (`QuantityConstraint`): The first chamfer distance. The default is `1 mm`.
* Dati**Size2** (`QuantityConstraint`): The second chamfer distance. Only used if Dati**Chamfer Type** is `Two distances`. The default is `1 mm`.
* Dati**Angle** (`Angle`): The chamfer angle. Only used if Dati**Chamfer Type** is `Distance and Angle`. The default is `45 °`.
* Dati**Flip Direction** (`Bool`): If `true` the direction of the chamfer is flipped. Not used if Dati**Chamfer Type** is `Equal distance`. The default is `false`.
* Dati**Use All Edges** (`Bool`): If `true` all edges of the feature are chamfered, and the edges specified by Dati**Base** are ignored. The default is `false`.

Part Design

* Dati**Refine** (`Bool`): If `true` redundant edges are removed from the result of the operation. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

## Known issues

See [PartDesign Fillet](/PartDesign_Fillet#Known_issues "PartDesign Fillet").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Chamfer/it&oldid=1515553>"