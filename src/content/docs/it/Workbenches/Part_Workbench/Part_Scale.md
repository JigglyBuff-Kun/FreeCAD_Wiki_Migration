---
title: Partː Scala
---
|  |
| --- |
| Part Scala |
| Posizione nel menu |
| Parte → Scala... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 1.0 |
| Vedere anche |
| [Draft Clona](/Draft_Clone/it "Draft Clone/it"), [Draft Scala](/Draft_Scale "Draft Scale") |
|  |

## Descrizione

**Part Scala** ridimensiona le forme in base a un fattore specificato in tutte le direzioni o in base a fattori distinti in ciascuna direzione cardinale. Nel caso di fattori distinti, le forme potrebbero risultare distorte.

![](/images/Part_Scale_demo.png)

Esempio di ridimensionamento

## Utilizzo

1. Selezionare una o più forme nella [Vista 3D](/3D_view/it "3D view/it") o nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Part_Scale.svg) Scala....
   * Selezionare l'opzione **Parte → ![](/images/Part_Scale.svg) Scala...** dal menu.
3. Si apre un [pannello delle azioni](#Task_panel/it).
4. Scegliere **Ridimensionamento uniforme** o **Ridimensionamento non uniforme**.
5. Impostare i fattori di scala.
6. Fare clic su OK.

In alternativa, la selezione può essere effettuata dopo aver lanciato il comando, selezionando una o più forme dalla lista nel [pannello delle Azioni](#Task_panel/it).

La Vista ad albero elencherà tanti oggetti Scala quante sono le forme selezionate. Ogni forma di input viene posizionata sotto il relativo oggetto Scala.

## Pannello Azioni

![](/images/Part_Scale_dialog.png)

* Il pulsante OK crea l'oggetto ridimensionato e chiude il pannello delle attività.
* Il pulsante Chiudi chiude il pannello delle attività senza fare nulla.
* Il pulsante Applica crea gli oggetti ridimensionati, ma non chiude il pannello delle attività. E' possibile quindi selezionare un'altra forma dall'elenco in basso e creare più oggetti in scala.
* Elenco **Forma**: qui è possibile selezionare quali forme ridimensionare. Se vengono selezionate più forme, vengono creati più oggetti Scala.

## Note

* Il ridimensionamento non uniforme trasformerà tutti i bordi in curve B-spline e tutte le facce in superfici B-spline. Questi sono computazionalmente più pesanti.
* I punti/vertici non possono essere ridimensionati poiché sono adimensionali.
* È inoltre possibile ridimensionare gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno.
* Il pannello delle Azioni non offre ancora un'anteprima. Applica creerà un oggetto in scala ogni volta che si clicca su di esso, che può essere utile come anteprima. Tuttavia, l'oggetto specchiato rimarrà e ne verrà creato uno ulteriore quando si farà clic su su OK. [Annulla](/Std_Undo/it "Std Undo/it") può essere utile per ripulirli prima di fare clic su OK.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Part Specchio deriva da un oggetto [Funzione Part](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Scale

* Dati**Base** (`Link`): la forma di input (la forma su cui è stata applicata la scala della parte).
* Dati**Uniform** (`Bool`): controlla il ridimensionamento uniforme e non uniforme
* Dati**Uniform Scale** (`Float`): il fattore di scala per il ridimensionamento uniforme
* Dati**XScale** (`Float`): il fattore di scala X per il ridimensionamento non uniforme.
* Dati**YScale** (`Float`): il fattore di scala Y, idem.
* Dati**ZScale** (`Float`): il fattore di scala Z, idem.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Scale/it&oldid=1405545>"