---
title: Draft Layer
---
|  |
| --- |
| Draft Layer |
| Posizione nel menu |
| Draft → Utilità → Nuovo layer |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Il comando ![](/images/Draft_Layer.svg) **Draft Layer** crea un layer Draft. Un layer è un tipo speciale di gruppo con un numero di [proprietà visive](#View). Queste proprietà e qualsiasi modifica apportata ad esse vengono propagate agli oggetti posizionati all'interno del layer. I layer stessi vengono inseriti in un altro gruppo speciale: Draft LayerContainer.

## Utilizzo

1. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Draft_Layer.svg) Layer.
   * Selezionare l'opzione **Utilità → ![](/images/Draft_Layer.svg) Nuovo layer** dal menu, o dalla [Vista ad albero](/Tree_view/it "Tree view/it") o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
   * Se il contenitore del layer esiste già: fare clic con il tasto destro del mouse nella [Vista ad albero](/Tree_view/it "Tree view/it") e selezionare l'opzione **![](/images/Draft_NewLayer.svg) Aggiungi nuovo layer** dal menu contestuale .
2. Se non esiste, viene creato prima il contenitore del layer.
3. Viene creato un layer e inserito nel contenitore del layer.
4. Facoltativamente modificare le [proprietà](#Properties) del layer.
5. Facoltativamente, inserire gli oggetti nel layer trascinandoli sul layer nella [Vista ad albero](/Tree_view/it "Tree view/it"). Gli oggetti possono anche essere inseriti in un layer modificando la proprietà Dati**Group** del layer.
6. Facoltativamente [attivare](#Layer_options) il layer.

## Menù contestuale

### Opzioni del contenitore dei layer

Per un Draft LayerContainer queste opzioni aggiuntive sono disponibili nel menu contestuale [Vista ad albero](/Tree_view/it "Tree view/it"):

* **![](/images/Draft_NewLayer.svg) Aggiungi nuovo layer**: aggiunge un nuovo layer al documento corrente.
* **![](/images/Draft_SetStyle.svg) Riassegna le proprietà di tutti i layer**: rimuove [sovrascritture](#Overrides) dagli oggetti in tutti i layer riassegnando le proprietà del layer in cui si trovano. [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")
* **![](/images/Draft_Layers.svg) Unisci layer duplicati**: unisce tutti i layer con la stessa etichetta di base.

:   L'etichetta di base di un layer è la sua Dati**Label** privata delle cifre finali e degli spazi. Tutti i layer con la stessa etichetta di base vengono uniti in un singolo layer con Dati**Label** impostato su quell'etichetta di base.

### Opzioni dei layer

Per un layer Draft queste opzioni aggiuntive sono disponibili nel menu contestuale [Vista ad albero](/Tree_view/it "Tree view/it"):

* **![](/images/Button_right.svg) [Attiva questo layer](/Draft_AutoGroup/it "Draft AutoGroup/it")**: attiva il layer selezionato.
* **![](/images/Draft_SetStyle.svg) Riassegna le proprietà del layer**: rimuove [overrides](#Overrides) dagli oggetti nel layer riassegnando le proprietà del layer. [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")
* **![](/images/Draft_SelectGroup.svg) [Seleziona contenuto layer](/Draft_SelectGroup/it "Draft SelectGroup/it")**: seleziona gli oggetti all'interno del layer selezionato.

## Comportamento trascina e rilascia

[disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Se si rilascia un oggetto da un  [Gruppo](/Std_Group/it "Std Group/it"), o un oggetto simile a un gruppo come un [Parte di edificio Arch](/Arch_BuildingPart/it "Arch BuildingPart/it"), su un layer nella [Vista ad albero](/Tree_view/it "Tree view/it"), è non rimosso dal gruppo e viceversa. Per rimuovere un oggetto da un layer è necessario rilasciarlo su un altro layer o sul nodo del documento. Non è necessario tenere premuto il tasto Ctrl durante il trascinamento o il rilascio su un layer.

## Sovrascritture

[disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")

Gli oggetti all'interno di un layer possono avere sovrascritture (overrides). Si applica la seguente logica:

* Quando un oggetto viene inserito in un layer adotta sempre le proprietà di quel layer.
* Una proprietà dell'oggetto che viene successivamente modificata è considerata una sovrascrittura.
* Quando una proprietà del layer, o l'oggetto nel layer, viene modificata in modo che corrisponda di nuovo, non esiste più una sovrascrittura e la proprietà viene nuovamente sincronizzata.

Il contenitore dei layer e tutti i layer hanno un'opzione [menu contestuale](#Context_menu) per riassegnare le proprietà e quindi rimuovere le sovrascritture.

## Note

* È anche possibile creare un nuovo layer con il comando [Draft Gruppo automatico](/Draft_AutoGroup/it "Draft AutoGroup/it") o or con il [Draft Gestore dei layer](/Draft_LayerManager/it "Draft LayerManager/it").

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft Layer deriva da un oggetto [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Layer

* Dati**Group** (`LinkList`): specifica gli oggetti che si trovano all'interno del layer.

### Vista

Layer

Le proprietà in questa sezione vengono applicate agli oggetti inseriti all'interno del layer. Qualsiasi modifica a queste proprietà gli viene propagata. Per due proprietà, Vista**Line Color** e Vista**Shape Color**, questo comportamento è facoltativo.

* Vista**Draw Style** (`Enumeration`): specifica lo stile di disegno del layer: `Solid`, `Dashed`, `Punteggiato` o `Dashdot`
* Vista**Line Color** (`Color`): specifica il colore della linea del layer.
* Vista**Line Width** (`Float`): specifica la larghezza della linea del layer.
* Vista**Override Shape Appearance Children** (`Bool`): specifica se le modifiche a Vista**Shape Appearance** del layer vengono propagate agli oggetti all'interno del layer, [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it").
* Vista**Override Shape Color Children** (`Bool`): specifica se le modifiche a Vista**Shape Color** del layer vengono propagate agli oggetti all'interno del layer.
* Vista**Shape Appearance** (`MaterialList`): specifica l'aspetto della forma del layer, [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it").
* Vista (hidden)**Shape Color** (`Color`): specifica il colore della forma del layer. Viene mantenuto sincronizzato con **Diffuse Color** di Vista**Shape Appearance**.
* Vista**Transparency** (`Percent`): specifica la trasparenza del layer. Viene mantenuto sincronizzato con **Transparency** di Vista**Shape Appearance**.

Print

* Vista**Line Print Color** (`Color`): specifica il colore di stampa della linea del layer.
* Vista**Use Print Color** (`Bool`): specifica se il Vista**Line Print Color** del layer viene utilizzato quando una [TechDraw Vista di Draft](/TechDraw_DraftView/it "TechDraw DraftView/it") viene creata dagli oggetti interni al layer.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare un Layer Draft utilizzare il metodo `make_layer` del modulo Draft. Per aggiungere o rimuovere oggetti da un layer, modificare la sua proprietà `Group`.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

layer = Draft.make_layer(line_color=(1.0, 0.0, 0.0, 0.0),
                         shape_color=(1.0, 1.0, 0.0, 0.0))

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)
layer.Group = [polygon1, polygon2, polygon3]

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Layer/it&oldid=1552950>"