---
title: Part Offset 3D
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Offset 3D |
| Posizione nel menu |
| Part → Offset 3D... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Part Spessore](/Part_Thickness/it "Part Thickness/it"), [Part Offset 2D](/Part_Offset2D/it "Part Offset2D/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_Offset.svg) **Part Offset 3D** crea copie parallele di una forma selezionata ad una certa distanza dalla forma base, restituendo un nuovo oggetto.

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

## Utilizzo

1. Selezionare un oggetto da sfalsare.
2. Premere il pulsante ![](/images/Part_Offset.svg) 3D Offset.
3. Regolare la distanza e i parametri in base all'oggetto originale e alla validità degli oggetti risultanti.

## Note

* Gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno possono essere utilizzati anche come oggetti di origine. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Esempi

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

Oggetto con angoli sfalsati e arrotondati (arco).

![](/images/PartOffset3.png)

Stesso oggetto con angoli acuti (intersezione).

![](/images/PartOffset2.png)

Lo stesso oggetto con una distanza notevole sovraccaricando lo spazio anteriore sinistro e consentendo incroci.

![](/images/PartOffset4.png)

Forma arbitraria ([Draft Polilinea](/Draft_Wire/it "Draft Wire/it")) con un offset 3D (ignora il parametro MODE)

![](/images/PartOffset5.png)

Stessa forma con un offset 3D come SKIN e *filled*.

![](/images/PartOffset6.png)

offset "riempito" con 2 cilindri che creano tagli booleani. Il cilindro A passa attraverso il RIEMPIMENTO mentre il cilindro B passa solo attraverso il RIEMPIMENTO e NON attraverso la forma 2D sorgente.

## Proprietà

* Dati**Offset**: Distanza a cui sfalsare le facce della forma.
* Dati**Mode**: Modalità di creazione. *Skin* crea una nuova forma attorno alla forma sorgente. *Pipe* ( todo ) . *RectoVerso* ( todo ).
* Dati**Join type**: Come si costruiscono i nuovi angoli. *Intersection* dà angoli acuti sull'estensione lineare dei bordi. *Arc* e *Tangent* danno angoli arrotondati.

1. Optionː Intersectionː Consente gli offset rivolti verso l'interno per "sovrapporre" il gap intersecando la forma risultante fino a raggiungere le facce opposte.
2. Optionː Self Intersectionː (todo).
3. Optionː Fill Offsetː Quando la forma è bidimensionale, lo spazio tra le 2 forme viene riempito. Il riempimento ora è un solido, ma la forma sorgente non è un solido. Quindi le operazioni booleane possono portare a risultati strani. (vedi esempio sotto).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset/it&oldid=1476473>"