---
title: Tutorial di Draft
---
|  |
| --- |
| Tutorial |
| Argomento |
| Draft |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| 30 minuti |
| Autori |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) e vocx |
| Versione di FreeCAD |
| 0.19 |
| Files di esempio |
| [Draft tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43651) |
| Vedere anche |
| *Nessuno* |
|  |

## Introduzione

Questo tutorial è stato originariamente scritto da Drei ed è stato riscritto e illustrato da vocx.

Questo tutorial ha lo scopo di introdurre il lettore al flusso di lavoro di base di ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it").

Il lettore si eserciterà:

* nella creazione di linee, archi e poligoni
* nell'uso di piani di lavoro
* nella la creazione di dimensioni, testo e stringhe di forma
* nella realizzazione di un disegno tecnico

Questo tutorial utilizza la notazione `(x, y, z)` per indicare le coordinate richieste per definire i punti in un oggetto. L'unità predefinita è il millimetro `mm`.

![](/images/00_Dr01_Draft_Tutorial_final.png)

Disegno finale comprendente vari oggetti Draft.

## Setup

1. Aprire FreeCAD, creare un nuovo documento vuoto con **File → ![](/images/Std_New.svg) [Nuovo](/Std_New/it "Std New/it")**.

:   1.1. Passare a [Draft](/Draft_Workbench/it "Draft Workbench/it") dal [selettore degli ambienti](/Std_Workbench/it "Std Workbench/it") o dal menu **Visualizza → Ambiente → ![](/images/Workbench_Draft.svg) Draft**.
:   1.2. Assicurarsi di comprendere come utilizzare l'[editor delle proprietà](/Property_editor/it "Property editor/it"), in particolare le schede **Data** e **View** per modificare le proprietà. Quando si modificano le proprietà, potrebbe essere necessario eseguire un comando ![](/images/Std_Refresh.svg) [Aggiorna](/Std_Refresh/it "Std Refresh/it") per vedere il risultato nella [vista 3D](/3D_view/it "3D view/it").
:   1.3. Poiché gli oggetti Draft sono forme planari, è meglio visualizzarli dall'alto. Utilizzare ![](/images/Std_ViewTop.svg) [Dall'alto](/Std_ViewTop/it "Std ViewTop/it") per impostare la [Vista 3D](/3D_view/it "3D view/it").
:   1.4. Sebbene non venga utilizzata in questo tutorial, la griglia Draft è utile per posizionare gli elementi geometrici. Utilizzare le ![](/images/Draft_SelectPlane.svg) [Impostazioni del piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") per impostare sia il piano di lavoro che la griglia, quindi mostrare e nascondere la griglia con ![](/images/Draft_ToggleGrid.svg) [Attiva/disattiva griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it").

## Barra degli strumenti di snap

2. La [Barra degli strumenti Draft Snap](/Draft_Snap/it "Draft Snap/it") viene normalmente attivata quando si passa a [Draft](/Draft_Workbench/it "Draft Workbench/it").

:   2.1. Per assicurarsi che sia sempre disponibile, andare su [Preferenze Draft](/Draft_Preferences/it "Draft Preferences/it"), **Modifica → Preferenze → Draft → Scheda Griglia e snap**.
:   2.2. Verificare che la spunta **Mostra la barra degli strumenti di aggangio Draft** sia selezionata.

In questa medesima finestra si possono modificare anche la visibilità e le proprietà della griglia Draft.

## Piani di lavoro

La maggior parte degli oggetti Draft sono forme planari, quindi sono naturalmente basati su un *piano di lavoro*. Un piano di lavoro può essere uno dei principali piani di coordinate globali XY, XZ e YZ, oppure può essere un piano parallelo ad essi con un offset positivo o negativo, oppure può essere un piano definito dalla faccia di un oggetto solido.

3. Premere ![](/images/Draft_SelectPlane.svg) [Seleziona piano](/Draft_SelectPlane/it "Draft SelectPlane/it"), oppure andare al menu **Utilità → ![](/images/Draft_SelectPlane.svg) [Seleziona piano](/Draft_SelectPlane/it "Draft SelectPlane/it")**, per aprire [pannello delle attività](/Task_panel/it "Task panel/it") per il piano di lavoro.

:   3.1. Premere ![](/images/Std_ViewTop.svg) Dall'alto (XY).

Prima di premere il pulsante è inoltre possibile modificare il valore dell'offset in millimetri, nonché la spaziatura della griglia, le linee principali e il raggio di aggancio.

## Linee e Archi

4. Si creeranno archi e linee.

:   4.1. Premere ![](/images/Draft_Arc.svg) [Arco](/Draft_Arc/it "Draft Arc/it").
:   4.2. Impostare il **Centro** su `(0, 0, 0)` e premere Invio.
:   4.3. Impostare **Raggio** su `30 mm` e premere Invio.
:   4.4. Impostare **Angolo iniziale** su `60.0°` e premere Invio.
:   4.5. Impostare **Angolo di apertura** su `60.0°` e premere Invio.
:   4.6 Ripetere la stessa procedura per un secondo arco con raggio di `25 mm` e con le altre proprietà invariate.

5. Ora si creerà un profilo chiuso collegando gli archi con delle linee.

:   5.1. Cliccare il pulsante ![](/images/Draft_Line.svg) [Linea](/Draft_Line/it "Draft Line/it").
:   5.2. Nella [barra degli strumenti Snap](/Draft_Snap "Draft Snap") assicurarsi che ![](/images/Draft_Snap_Lock.svg) [Attiva/disattiva snap](/Draft_Snap_Lock/it "Draft Snap Lock/it") sia attivo e che sia selezionato solo ![](/images/Draft_Snap_Endpoint.svg) [Snap punto finale](/Draft_Snap_Endpoint/it "Draft Snap Endpoint/it"). Quando si sposta il ​​puntatore sull'arco vicino a uno dei suoi punti finali, dovrebbe apparire l'icona ![](/images/Draft_Snap_Endpoint.svg) [Punto finale](/Draft_Snap_Endpoint/it "Draft Snap Endpoint/it"). Inoltre, il punto agganciato viene evidenziato con un grande punto bianco. Fare clic per selezionare questo punto.
:   5.3. Spostare il puntatore sul punto finale più vicino dell'altro arco per unire assieme i due archi.
:   5.4. Ripetere la procedura per l'altro lato dell'arco per chiudere il profilo.

![](/images/01_Dr01_Draft_Arc_profile.png)

Profilo chiuso creato da due archi e due linee.

## Fusione o composizione

Ora ci sono diversi oggetti nella [vista ad albero](/Tree_view/it "Tree view/it") che formano un profilo chiuso. Tuttavia questo profilo è ancora composto da oggetti disconnessi; ognuno di essi può essere modificato e spostato indipendentemente dagli altri. È possibile continuare a lavorare con gli elementi in questo modo, ma è anche possibile fonderli in un unico oggetto.

6a. Tenere presente che la fusione degli oggetti in un singolo oggetto creerà un oggetto che non è più parametrico, quindi le sue proprietà non potranno più essere modificate.

:   6a.1. Selezionare tutti e quattro gli oggetti nella [vista ad albero](/Tree_view/it "Tree view/it"), oppure tenendo premuto Ctrl e selezionandoli nella [vista 3D](/3D_view/it "3D view/it").
:   6a.2. Con questi oggetti selezionati, fare clic su ![](/images/Draft_Upgrade.svg) [Promuovi](/Draft_Upgrade/it "Draft Upgrade/it").
:   6a.3. Così si uniranno i quattro oggetti in un singolo `Wire`.

6b. Se si desidera mantenere la natura parametrica degli oggetti si può invece creare un composto.

:   6b.1. Passare a ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it").
:   6b.2. Dopo aver selezionato gli oggetti, fare clic su ![](/images/Part_Compound.svg) [Crea un composto](/Part_Compound/it "Part Compound/it").

## Rettangoli, circonferenze e poligoni

7. Si disegnerà un rettangolo. (Tornare a ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it")).

:   7.1. Fare click su ![](/images/Draft_Rectangle.svg) [Rettangolo](/Draft_Rectangle/it "Draft Rectangle/it").
:   7.2. Inserire i valori del primo punto `(-100, -60, 0)` e premere Invio.
:   7.3. Assicurarsi che l'opzione **Relativo** sia deselezionata, poiché utilizzeremo unità assolute. Si può premere R sulla tastiera per attivare e disattivare rapidamente questa opzione.
:   7.4. Inserire i valori per il secondo punto `(140, 90, 0)` e premere Invio.

Verrà disegnato il rettangolo. Andare nell'[editor delle proprietà](/Property_editor/it "Property editor/it") per modificarne le proprietà. Se non si desidera che il rettangolo crei una faccia, impostare Dati**Make Face** su `false`. Se si desidera creare la faccia, ma vedere solo i bordi di quell'oggetto, mantenere Dati**Make Face** su `true` e impostare Vista**Display Mode** su `Wireframe`.

8. Si disegnerà un cerchio.

:   8.1. Premere ![](/images/Draft_Circle.svg) [Cerchio](/Draft_Circle/it "Draft Circle/it").
:   8.2. Inserire i valori del centro `(0, 0, 0)` e premere Invio.
:   8.3. Impostare il raggio su `15 mm` e premere Invio.

9. Si disegnerà un poligono regolare.

:   9.1. Premere ![](/images/Draft_Polygon.svg) [Poligono](/Draft_Polygon/it "Draft Polygon/it").
:   9.2. Inserire i valori del centro `(0, 0, 0)` e premere Invio.
:   9.3. Impostare il numero di lati su `6` e premere Invio.
:   9.4. Impostare il raggio su `50 mm` e premere Invio.

Ancora una volta, se lo si desidera, si può modificare le proprietà Dati**Make Face** e Vista**Display Mode** nell'[editor delle proprietà](/Property_editor/it "Property editor/it").

Il rettangolo, il cerchio, il poligono e la maggior parte degli altri oggetti creati con [Draft](/Draft_Workbench/it "Draft Workbench/it") condividono molti dati e proprietà di visualizzazione perché derivano dalla stessa classe base, [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it").

![](/images/02_Dr01_Draft_Rectangle_circle_polygon.png)

Aggiunti rettangolo, cerchio e poligono.

## Serie

Le serie vengono utilizzate per replicare un oggetto più volte in una direzione ortogonale (X, Y, Z), attorno a un asse di rivoluzione o lungo un percorso.

10. Creeremo una serie polare.

:   10.1. Selezionare l'oggetto `Wire` che è stato precedentemente creato con lo strumento ![](/images/Draft_Upgrade.svg) [Promuovi](/Draft_Upgrade/it "Draft Upgrade/it") o l'oggetto {{Value|Composto} } creato con lo strumento ![](/images/Part_Compound.svg) [Crea un composto](/Part_Compound/it "Part Compound/it").
:   10.2. Fare click su ![](/images/Draft_PolarArray.svg) [Serie polare](/Draft_PolarArray/it "Draft PolarArray/it").
:   10.3. Impostare l'angolo polare su `360°`.
:   10.4. Impostare il numero di elementi su `4`.
:   10.5. Inserire i valori per il centro di rotazione `(0, 0, 0)` e premere Invio.

L'oggetto Array mostra le copie dell'oggetto attorno all'origine.

![](/images/03_Dr01_Draft_PolarArray.png)

Serie polare del profilo piccolo centrata attorno all'origine.

## Quote

Le quote lineari funzionano meglio quando si utilizzano i metodi [Snap](/Draft_Snap/it "Draft Snap/it") appropriati per selezionare punti e bordi da misurare. Tuttavia, possono anche essere creati specificando le coordinate assolute.

11. Creare dimensioni per i diversi oggetti.

:   11.1. Cliccare ![](/images/Draft_Dimension.svg) [Dimensione](/Draft_Dimension/it "Draft Dimension/it").
:   11.2. Sceglere il primo punto. In questo tutorial il primo punto sarà sempre l'origine `(0, 0, 0)`.
:   11.3. Nella [barra degli strumenti Snap](/Draft_Snap/it "Draft Snap/it") assicurarsi che ![](/images/Draft_Snap_Lock.svg) [Attiva/disattiva snap](/Draft_Snap_Lock/it "Draft Snap Lock/it") sia attivo e che solo ![](/images/Draft_Snap_Midpoint.svg) [Punto centrale](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it") sia selezionato. Mentre ci si sposta col ​​puntatore sul bordo superiore del poligono, dovrebbe apparire l'icona del ![](/images/Draft_Snap_Midpoint.svg) [Punto centrale](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it"); fare clic per selezionare questo punto.
:   11.4. Spostare il cursore a destra per specificare la posizione della quota, quindi fare clic per impostare la posizione finale, attorno a `(100, 20, 0)`. La quota mostrerà automaticamente il valore della lunghezza misurata tra i due punti.
:   11.5. Selezionare l'oggetto dimensione nella [vista ad albero](/Tree_view/it "Tree view/it") e, nell'[editor delle proprietà](/Property_editor/it "Property editor/it"), modificare Vista**Font Size** in `6 mm`, impostare Vista**Ext Lines** su `45 mm` e Vista**Show Unit** su `false`.

12. Ripetere l'operazione per i due archi del profilo chiuso. Il primo punto della misura sarà ancora l'origine e il secondo punto utilizzerà il ![](/images/Draft_Snap_Midpoint.svg) [punto medio](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it") dell'arco.

13. Ripetere la ​​procedura per il cerchio situato al centro. Il primo punto della misurazione sarà comunque l'origine. Per selezionare il secondo punto assicurarsi che lo ![](/images/Draft_Snap_Lock.svg) [snap](/Draft_Snap_Lock/it "Draft Snap Lock/it") sia attivo e che sia selezionato solo ![](/images/Draft_Snap_Angle.svg) [Angolo](/Draft_Snap_Angle/it "Draft Snap Angle/it"). Mentre ci si sposta col ​​puntatore sulla parte superiore del cerchio, dovrebbe apparire l'icona ![](/images/Draft_Snap_Angle.svg) [Angolo](/Draft_Snap_Angle/it "Draft Snap Angle/it"); fare clic per selezionare questo punto. Quindi spostare il cursore a destra e fare clic per fissare la dimensione.

Ricordare di impostare Vista**Font Size** e le altre proprietà per visualizzare correttamente la quota.

![](/images/04_Dr01_Draft_Dimension.png)

Quote per misurare la distanza verticale dall'origine alla parte superiore del cerchio, degli archi e del poligono.

## Annotazioni e Testi

14. Gli oggetti di testo sono semplici figure planari create nella [vista 3D](/3D_view/it "3D view/it") ma non hanno una vera e propria "[shape](/Shape/it "Shape/it")" sottostante. Ciò significa che non possono essere utilizzati in operazioni complesse con forme come estrusioni o operazioni booleane.

:   14.1. Premere ![](/images/Draft_Text.svg) [Testo](/Draft_Text/it "Draft Text/it").
:   14.2. Selezionare il punto di riferimento nella [vista 3D](/3D_view/it "3D view/it"). Nella [barra degli strumenti Snap](/Draft_Snap/it "Draft Snap/it") assicurarsi che ![](/images/Draft_Snap_Lock.svg) [Attiva/disattiva snap](/Draft_Snap_Lock/it "Draft Snap Lock/it") sia attivo e che sia selezionato solo ![](/images/Draft_Snap_Midpoint.svg) [Punto centrale](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it"). Spostare il puntatore sul bordo superiore dell'arco più alto, in modo che venga visualizzata l'icona ![](/images/Draft_Snap_Midpoint.svg) [Punto centrale](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it"); fare clic per selezionare questo punto.
:   14.3. Inserire il **Testo** desiderato e premere Invio una volta per iniziare una nuova riga; aggiungere più righe di testo a seconda della necessità.
:   14.4. Quando sei pronto per terminare la creazione, premere Invio due volte.
:   14.5. Selezionare l'oggetto di testo nella [vista ad albero](/Tree_view/it "Tree view/it") e nell'[editor delle proprietà](/Property_editor/it "Property editor/it"), modificare Vista**Font Size** in `6 mm` e Vista**Justification** a `Center`.

15. Gli oggetti ShapeString sono shape costituite da linee primitive che seguono le linee indicate da un determinato carattere. Ciò significa che questi oggetti hanno una vera "[shape](/Shape/it "Shape/it")" sottostante e quindi possono essere utilizzati in operazioni complesse come estrusioni e operazioni booleane.

:   15.1. Premere ![](/images/Draft_ShapeString.svg) [Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it").
:   15.2. Spostare il puntatore nella posizione desiderata nella [vista 3D](/3D_view/it "3D view/it") sopra il poligono regolare e fare clic una volta. Ciò risolverà il punto base per la ShapeString. Le coordinate possono essere inserite anche manualmente, ad esempio `(-20, 65, 0)`.
:   15.3. Inserire la **Stringa** desiderata e impostare la **Altezza** desiderata.
:   15.4. Se non è presente un file di font predefinito, è necessario fare clic sui puntini di sospensione ... per aprire una finestra di dialogo per scegliere la posizione del font nel sistema.
:   15.5. Una volta specificato un file di font valido, è possibile procedere facendo clic su OK o premendo Invio.

![](/images/05_Dr01_Draft_Text_ShapeString.png)

Aggiunta di annotazione e testo.

Per estrudere lettere e inciderle su solidi, vedere il [Tutorial ShapeString](/Draft_ShapeString_tutorial/it "Draft ShapeString tutorial/it").

## Creazione di disegni tecnici

Così com'è adesso, gli oggetti che abbiamo creato possono essere salvati, esportati in altri formati come [SVG](/SVG/it "SVG/it") o [DXF](/DXF/it "DXF/it"), o stampati.

Se lo si desidera, si puoi creare un disegno tecnico per visualizzare questi oggetti insieme a informazioni aggiuntive come una cornice.

Prima di procedere, nascondere la griglia Draft premendo ![](/images/Draft_ToggleGrid.svg) [Attiva/disattiva griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it").

16. Passare a ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it").

:   16.1. Creare una pagina standard premendo ![](/images/TechDraw_PageDefault.svg) [Nuovo disegno standard](/TechDraw_PageDefault/it "TechDraw PageDefault/it").
:   16.2. Nella [vista ad albero](/Tree_view/it "Tree view/it") selezionare tutti gli oggetti creati, ad eccezione della pagina, quindi premere ![](/images/TechDraw_ActiveView.svg) [Vista 3D attiva](/TechDraw_ActiveView/it "TechDraw ActiveView/it"). Premere OK con le opzioni predefinite; potrebbero essere necessari alcuni secondi per creare la visualizzazione nella pagina.
:   16.3. Selezionando l'oggetto Pagina nella [vista ad albero](/Tree_view/it "Tree view/it") verrà automaticamente visualizzata la pagina nella finestra principale. Con la pagina selezionata, andare nell'[editor delle proprietà](/Property_editor/it "Property editor/it") e modificare Dati**Scale** in `0.75`.
:   16.4. Espandere l'oggetto Pagina nella [vista ad albero](/Tree_view/it "Tree view/it") per selezionare l'oggetto ActiveView. Con questa visualizzazione selezionata, entrare nell'[editor delle proprietà](/Property_editor/it "Property editor/it") e modificare Dati**Scale Type** in `Page`.
:   16.5. Ricalcolare il modello utilizzando ![](/images/Std_Refresh.svg) [Aggiorna](/Std_Refresh/it "Std Refresh/it") o premendo F5.
:   16.6. Nascondere le cornici degli oggetti premendo ![](/images/TechDraw_ToggleFrame.svg) [Attiva o dissattiva le cornici](/TechDraw_ToggleFrame/it "TechDraw ToggleFrame/it").

Scopri di più su [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") leggendo il [Tutorial di base di TechDraw](/Basic_TechDraw_Tutorial/it "Basic TechDraw Tutorial/it").

![](/images/06_Dr01_Draft_TechDraw_page.png)

Pagina di TechDraw con una proiezione delle forme create con Draft Workbench.

TechDraw funziona meglio con oggetti che hanno una [TopoShape](/Part_TopoShape/it "Part TopoShape/it"). Poiché alcuni oggetti di Draft, come [Testi](/Draft_Text/it "Draft Text/it") e [Dimensioni](/Draft_Dimension/it "Draft Dimension/it"), non hanno tali "[Shapes](/Shape/it "Shape/it")", alcune operazioni di TechDraw non funzionano con questi elementi.

Strumenti come ![](/images/TechDraw_ActiveView.svg) [Vista 3D attiva](/TechDraw_ActiveView/it "TechDraw ActiveView/it"), {{Button|![](/images/TechDraw_DraftView.svg) [[TechDraw\_DraftView/it|Vista di Draft] ]}} e ![](/images/TechDraw_ArchView.svg) [Vista di Arch](/TechDraw_ArchView/it "TechDraw ArchView/it") funzionano ricevendo un'immagine SVG interna generata dalle funzioni Draft interne; pertanto, TechDraw non ha molto controllo sul modo in cui vengono visualizzate queste visualizzazioni. Una maggiore integrazione di Draft e TechDraw è un lavoro in corso.

## Osservazioni finali

L'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it") è per molti aspetti simile a [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), poiché entrambi sono destinati a produrre forme 2D. La differenza principale sta nel modo in cui ogni ambiente gestisce i sistemi di coordinate e nel modo in cui vengono posizionati gli oggetti. In Draft, gli oggetti vengono posizionati liberamente nel sistema di coordinate globali, solitamente agganciando i loro punti a una griglia o ad altri oggetti. In Sketcher, un "[oggetto schizzo](/Sketch/it "Sketch/it")" definisce un sistema di coordinate locale che funge da riferimento per tutti gli elementi geometrici all'interno di quello schizzo. Inoltre, lo schizzo si basa su "vincoli" per definire la posizione finale dei suoi punti.

* L'ambiente [Draft](/Draft_Workbench "Draft Workbench") è destinato ai disegni 2D adatti ad essere disegnati su una griglia. [BIM](/BIM_Workbench/it "BIM Workbench/it") si basa principalmente sugli strumenti definiti in [Draft](/Draft_Workbench/it "Draft Workbench/it").

* Lo [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") è destinato ai disegni 2D che richiedono relazioni precise tra i suoi punti. Non si basa su una griglia, ma su regole di posizionamento (vincoli) per determinare dove verranno posizionati i punti e i bordi. Lo [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") viene utilizzato principalmente insieme a [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") per la creazione di [corpi](/Body/it "Body/it") solidi.

* È possibile trasformare un oggetto Draft in uno [Sketch](/Sketch/it "Sketch/it"), e viceversa, utilizzando lo strumento ![](/images/Draft_Draft2Sketch.svg) [Draft2Sketch](/Draft_Draft2Sketch/it "Draft Draft2Sketch/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_tutorial/it&oldid=1457458>"