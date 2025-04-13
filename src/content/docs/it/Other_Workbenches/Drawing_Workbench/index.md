---
title: Ambiente Drawing
---

:::caution
L'ambiente Drawingnon è più incluso dopo la versione 0.20.L'ambienteTechDrawè il suo sostituto più avanzato.
:::
![](/images/Workbench_Drawing.svg)

L'icona di Drawing

## Introduzione

L'ambiente Disegno (Drawing) consente di trasferire su carta il lavoro realizzato in 3D.

Permette di produrre delle viste (proiezioni sul piano) del modello, di posizionarle in una finestra 2D e di inserire la finestra in una tavola, ad esempio, in un foglio con il bordo, il titolo e il logo e, infine, di stampare la tavola.

![](/images/Drawing_extraction.png)

## Strumenti

Questi strumenti permettono di creare, configurare e esportare le proiezioni dei solidi come disegni 2D.

- ![](/images/Drawing_New.png) [Apri SVG](/Drawing_Open_SVG/it "Drawing Open SVG/it"): apre un foglio di disegno preventivamente salvato in un file SVG.

- ![](/images/Drawing_Landscape_A3.png) [Nuovo Disegno A3](/Drawing_Landscape_A3/it "Drawing Landscape A3/it"): crea un nuovo disegno su un foglio di default A3 orizzontale di FreeCAD.

- ![](/images/Drawing_View.png) [Inserisci vista nel disegno](/Drawing_View/it "Drawing View/it"): inserisce nel foglio di lavoro attivo una vista in proiezione dell'oggetto selezionato.

- ![](/images/Drawing_Annotation.png) [Annotazione](/Drawing_Annotation/it "Drawing Annotation/it"): aggiunge una annotazione al foglio di disegno corrente.

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip/it "Drawing Clip/it"): aggiunge un gruppo di clip al foglio di disegno corrente.

- ![](/images/Drawing_Openbrowser.png) [Apri finestra browser](/Drawing_Openbrowser/it "Drawing Openbrowser/it"): apre un'anteprima del foglio corrente nel browser

- ![](/images/Drawing_Orthoviews.png) [Inserisci viste ortogonali](/Drawing_Orthoviews/it "Drawing Orthoviews/it"): crea automaticamente le viste ortogonali di un oggetto nel foglio di disegno corrente

- ![](/images/Drawing_Symbol.png) [Simbolo](/Drawing_Symbol/it "Drawing Symbol/it"): aggiunge il contenuto di un file in formato SVG come un simbolo nel foglio di disegno corrente

- ![](/images/Drawing_DraftView.png) [Vista Draft](/Draft_Drawing/it "Draft Drawing/it"): Inserisce una speciale vista Draft dell'oggetto selezionato nel foglio del disegno corrente

- ![](/images/Drawing_SpreadsheetView.png) [Vista foglio di calcolo](/Drawing_SpreadsheetView/it "Drawing SpreadsheetView/it"): Inserisce una vista di un foglio di calcolo selezionato nel foglio del disegno corrente

- ![](/images/Drawing_Save.png) [Esporta pagina](/Drawing_Save/it "Drawing Save/it"): salva il progetto o le sue modifiche in un file SVG.

* [Proietta le forme](/Drawing_ProjectShape/it "Drawing ProjectShape/it"): proietta le forme su un piano, nella vista 3D.

* _Nota:_ lo strumento [Drawing di Draft](/Draft_Drawing/it "Draft Drawing/it") è usabile con oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it"). Ha alcune funzionalità aggiuntive rispetto agli strumenti di disegno e supporta oggetti specifici come le [dimensioni di Draft](/Draft_Dimension/it "Draft Dimension/it").

## Flusso di lavoro

Il documento contiene un oggetto di forma 3D (Schenkel) da si vuole produrre un disegno. Pertanto viene creata una "Pagina". Una pagina è istanziata da un modello, ad esempio il modello "A3_Landscape". Il modello è un documento [SVG](/SVG/it "SVG/it") che può contenere una cornice di pagina, un logo e altri elementi.

Nella pagina si possono inserire una o più viste.
Ogni vista ha una posizione nella pagina, un fattore di scala (proprietà di scala) e delle proprietà aggiuntive.
Ogni volta che la pagina, la vista o l'oggetto a cui si fa riferimento subiscono delle modifiche, la pagina viene rigenerata e viene anche aggiornata la sua visualizzazione.

## Script

Per ora le funzioni offerte dall'interfaccia grafica (GUI) sono molto limitate, quindi gli script API sono più interessanti.

Vedere la pagina [Esempi dell'API di Drawing](/Drawing_API_example/it "Drawing API example/it") per una descrizione delle funzioni utilizzate per creare pagine e viste di disegno.

## Estendere il modulo Drawing

Alcune ulteriori note sulla programmazione del Modulo Disegno sono contenute nella pagina [Drawing Documentation (en)](/Drawing_Documentation "Drawing Documentation") [Drawing Documentation (it)](/Drawing_Documentation/it "Drawing Documentation/it"). Dette note aiutano a capire rapidamente come lavora questo modulo e permettono ai programmatori di avviare rapidamente la programmazione per esso.

## Collegamenti esterni

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/it&oldid=1462055>"
