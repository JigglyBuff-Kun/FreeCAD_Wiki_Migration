---
title: Ambiente OpenSCAD
---

![](/images/Workbench_OpenSCAD.svg)

L'icona dell'ambiente OpenSCAD

## Introduzione

L'Ambiente OpenSCAD ![](/images/Workbench_OpenSCAD.svg) serve per offrire interoperabilità con il software open source [OpenSCAD](http://www.openscad.org/). Questo programma non è distribuito come parte di FreeCAD, ma dovrebbe essere installato per poter sfruttare appieno questo ambiente. OpenSCAD non deve essere confuso con [OpenCASCADE](/OpenCASCADE/it "OpenCASCADE/it"), che è il kernel geometrico che FreeCAD utilizza per costruire la geometria sullo schermo. Le librerie OpenCASCADE sono sempre necessarie per utilizzare FreeCAD, mentre l'eseguibile OpenSCAD è del tutto opzionale.

Contiene un importatore [CSG](/OpenSCAD_CSG/it "OpenSCAD CSG/it") che permette di aprire i file CSG di OpenSCAD, e un esportatore per produrre un albero basato su CSG. La geometria che non è basata su operazioni CSG viene esportata come mesh.

Questo ambiente contiene le funzioni per modificare l'albero delle caratteristiche CSG e riparare i modelli. Contiene anche strumenti per scopi generali che non richiedono l'installazione di OpenSCAD; essi possono essere utilizzati in combinazione con altri ambienti di lavoro. Ad esempio, l'ambiente [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") utilizza internamente le funzioni di OpenSCAD per eseguire le operazioni con le [mesh](/Mesh/it "Mesh/it"), poiché sono abbastanza robuste.

![](/images/OpenSCADexamaple1.png)

## Dipendenze

In FreeCAD 0.19, il modulo Ply (Python-Lex-Yacc), utilizzato per importare i file CSG, è stato rimosso dal codice sorgente di FreeCAD, in quanto è una libreria di terze parti non sviluppata da FreeCAD. Di conseguenza, ora è necessario installare Ply prima di utilizzare l'ambiente OpenSCAD. Quando si utilizza una versione preconfezionata e stabile di FreeCAD, questa dipendenza dovrebbe essere installata automaticamente su tutte le piattaforme; in altri casi, ad esempio, quando si [compila](/Compiling/it "Compiling/it") dal sorgente, potrebbe essere necessario installarlo da un repository online.

In openSUSE questo viene fatto da:

```
sudo zypper install python3-ply

```

Nei sistemi basati su Debian/Ubuntu questo è fatto in questo modo.

```
sudo apt install python3-ply

```

L'installazione generale in tutte le piattaforme può essere eseguita dall'indice del pacchetto Python.

```
pip3 install --user ply

```

## Linguaggio e formato dei file OpenSCAD

Il linguaggio OpenSCAD consente l'utilizzo di variabili e loop. Esso consente di specificare sotto-moduli per riutilizzare la geometria e il codice. Questo alto grado di flessibilità rende l'analisi sintattica molto complessa. Attualmente il modulo OpenSCAD in FreeCAD non in grado di gestire il linguaggio nativo di OpenSCAD.
Invece, se OpenSCAD è installato, può essere utilizzato per convertire l'ingresso in un formato di output denominato 'CSG'. È un sottoinsieme del linguaggio OpenSCAD e può essere utilizzato come ingresso di OpenSCAD per una ulteriore elaborazione.

Durante la conversione si perde tutto il comportamento parametrico - tutti i nomi delle variabili vengono eliminati, i loop espansi e le espressioni matematiche valutate.

## Strumenti

- ![](/images/OpenSCAD_ColorCodeShape.svg) [Codice colore della forma](/OpenSCAD_ColorCodeShape/it "OpenSCAD ColorCodeShape/it"): Cambia il colore della forma selezionata o di tutte le forme in base alla loro validità.
- ![](/images/OpenSCAD_ReplaceObject.svg) [Sostituisci un oggetto](/OpenSCAD_ReplaceObject/it "OpenSCAD ReplaceObject/it"): Sostituisce un oggetto nell'albero delle operazioni. Selezionare l'oggetto vecchio, il nuovo e il genitore.
- ![](/images/OpenSCAD_RemoveSubtree.svg) [Elimina un ramo](/OpenSCAD_RemoveSubtree/it "OpenSCAD RemoveSubtree/it"): Rimuove gli oggetti selezionati e tutti i suoi figli che non sono referenziati da altri oggetti.
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Affina la forma](/OpenSCAD_RefineShapeFeature/it "OpenSCAD RefineShapeFeature/it"): Pulisce le linee non necessarie.
- ![](/images/OpenSCAD_MirrorMeshFeature.svg) [Specchia la mesh](/OpenSCAD_MirrorMeshFeature/it "OpenSCAD MirrorMeshFeature/it"): Crea una funzione mesh speculare.
- ![](/images/OpenSCAD_ScaleMeshFeature.svg) [Scala la mesh](/OpenSCAD_ScaleMeshFeature/it "OpenSCAD ScaleMeshFeature/it"): Scala una funzione mesh.
- ![](/images/OpenSCAD_ResizeMeshFeature.svg) [Ridimensiona la mesh](/OpenSCAD_ResizeMeshFeature/it "OpenSCAD ResizeMeshFeature/it"): Ridimensiona una funzione mesh.
- ![](/images/OpenSCAD_IncreaseToleranceFeature.svg) [Incrementa la tolleranza](/OpenSCAD_IncreaseToleranceFeature/it "OpenSCAD IncreaseToleranceFeature/it"): Aumenta la tolleranza di bordi/facce/vertici degli oggetti selezionati.
- ![](/images/OpenSCAD_Edgestofaces.svg) [Converti i bordi in facce](/OpenSCAD_Edgestofaces/it "OpenSCAD Edgestofaces/it"): Converte i bordi (contorni) in facce. Utile per preparare la geometria DXF importata per essere estrusa.
- ![](/images/OpenSCAD_ExpandPlacements.svg) [Espandi le posizioni](/OpenSCAD_ExpandPlacements/it "OpenSCAD ExpandPlacements/it"): Espande tutte le posizioni della struttura delle operazioni verso il basso.
- ![](/images/OpenSCAD_ExplodeGroup.svg) [Esplodi il gruppo](/OpenSCAD_ExplodeGroup/it "OpenSCAD ExplodeGroup/it"): Separa le primitive delle parti fuse.
- ![](/images/OpenSCAD_AddOpenSCADElement.svg) [Aggiungi un elemento OpenSCAD](/OpenSCAD_AddOpenSCADElement/it "OpenSCAD AddOpenSCADElement/it"): Aggiunge un elemento OpenSCAD inserendo il codice OpenSCAD nel pannello delle azioni.
- ![](/images/OpenSCAD_MeshBoolean.svg) [Booleana su mesh...](/OpenSCAD_MeshBoolean/it "OpenSCAD MeshBoolean/it"): Crea un nuovo oggetto mesh da un'operazione booleana sulle forme.
- ![](/images/OpenSCAD_Hull.svg) [Hull](/OpenSCAD_Hull/it "OpenSCAD Hull/it"): Applica un inviluppo Hull di forme selezionate.
- ![](/images/OpenSCAD_Minkowski.svg) [Minkowski](/OpenSCAD_Minkowski/it "OpenSCAD Minkowski/it"): Applica una somma Minkowski di forme selezionate.

## Preferenze

- ![](/images/Std_DlgParameter.svg) [Preferenze](/OpenSCAD_Preferences/it "OpenSCAD Preferences/it"): Preferenze disponibili in OpenSCAD.

## Limitazioni

OpenSCAD crea una geometria solida costruttiva, importa i file mesh e estrude la geometria 2D da file [DXF](/DXF/it "DXF/it"). FreeCAD consente anche di creare CSG con primitive. Il kernel di geometria di FreeCAD (OCCT) funziona utilizzando la rappresentazione dei limiti. Pertanto la conversione da CSG a BREP dovrebbe, in teoria, essere possibile, mentre la conversione da BREP a CSG, in generale, non lo è.

OpenSCAD lavora internamente su maglie. Alcune operazioni che sono utili con le maglie non sono significative su un modello BREP e attualmente non possono essere completamente supportate. Tra queste ci sono convex hull, minkowski sum, glide e subdiv. Attualmente si può eseguire il binario OpenSCAD al fine di eseguire le operazioni hull e minkwoski e importare il risultato. Ciò significa che la geometria coinvolta sarà triangolata. In OpenSCAD è spesso usata la scalatura non uniforme, che non crea alcun problema quando si utilizzano mesh. Nel nostro kernel geometrico le primitive geometriche (linee, sezioni circolari, ecc) vengono convertite in BSpline prima di eseguire queste deformazioni. Le bspline sono note per causare problemi nelle successive operazioni booleane. Al momento non è disponibile nessuna soluzione automatica. Non esitate a postare sul forum se si verificano tali problemi. Spesso tali problemi possono essere risolti rimodellamento piccole parti. Una deformazione di un cilindro può sostituita da una estrusione di una ellisse.

## Importare testo

L'importazione di codice OpenSCAD con testi richiede che i font utilizzati siano installati correttamente sul sistema. Puoi verificarlo aprendo OpenSCAD come strumento autonomo e controllando l'elenco in **Aiuto → Font List**. L'elenco ti darà anche i nomi dei caratteri corretti. Se un font non viene visualizzato nell'elenco dopo l'installazione, potrebbe essere necessario copiare manualmente il file del font nella directory di sistema appropriata.

L'importazione di testi è relativamente lenta. Dietro le quinte FreeCAD utilizza un file DXF creato da OpenSCAD. Più contorni ci sono, più lenta sarà l'importazione.

Può essere una buona idea importare prima un semplice test case (sostituire `NameOfFont` con il nome del carattere corretto):

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

Il parametro `script="Latn"` può essere omesso qui, ma è obbligatorio se la stringa di testo non contiene lettere, ma solo punteggiatura e/o numeri.

Tieni presente che le istruzioni `use <FONT>;` nei file sorgente vengono ignorate durante l'importazione in FreeCAD. Sotto OpenSCAD l'effetto di un'istruzione `use` è che il file di font fornito viene temporaneamente aggiunto all'elenco dei font conosciuti (sebbene anche lì l'istruzione non funzioni quando uno script viene modificato in modo interattivo).

## Suggerimenti

Quando si importano [DXF](/DXF/it "DXF/it") impostare la precisione del progetto a un valore adeguato, in modo che vengano individuati i bordi connessi.

Per impostare la precisione nell'ambiente Draft: _Modifica → Preferenze → Draft → Importa/Esporta → Opzioni del formato DXF → Segmento Spline massimo_

Se FreeCAD va in crash durante l'importazione CSG, si consiglia vivamente di attivare 'controllare automaticamente il modello dopo l'operazione booleana' in: **Modifica → Preferenze → Part Design → Impostazione del modello**.

## Tutorials

- [Importare codice OpenSCAD](/Import_OpenSCAD_code/it "Import OpenSCAD code/it")

## Links

- Il repository ufficiale del codice sorgente del progetto OpenSCAD è ospitato su [GitHub](https://github.com/openscad/openscad)
- Aprire un ticket etichettato "OpenSCAD" su [FreeCAD Github Issue tracker](https://github.com/FreeCAD/FreeCAD/labels/WB%20OpenSCAD). Ci sono anche ticket sull'ormai archiviato [mantis bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD).
- Modelli etichettati con "OpenSCAD" su [Thingiverse](http://www.thingiverse.com/tag:openscad)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/it&oldid=1515996>"
