---
title: Note di rilascio della versione 0.16
---
FreeCAD 0.16 è stato rilasciato il 18 aprile 2016, ed è scaricabile da [GitHub](https://github.com/FreeCAD/FreeCAD/releases/tag/0.16). Questo è un riassunto dei cambiamenti più interessanti. L'elenco completo delle modifiche è disponibile in [Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php). Versioni precedenti in: [0.15](/Release_notes_0.15/it "Release notes 0.15/it") - [0.14](/Release_notes_0.14/it "Release notes 0.14/it") - [0.13](/Release_notes_0.13/it "Release notes 0.13/it") - [0.12](/Release_notes_0.12/it "Release notes 0.12/it") - [0.11](/Release_notes_0.11/it "Release notes 0.11/it")

![](/images/Satnogs_Rotator_FreeCAD.jpg)

Satnogs Rotator (<https://satnogs.org/>)

## In evidenza

È stato introdotto il supporto **[Espressione](/Expressions/it "Expressions/it")**, che consente di definire le relazioni tra le proprietà degli oggetti sotto forma di formule. Il supporto espressione è un importante passo in avanti per creare dei modelli parametrici migliori con FreeCAD. Le espressioni offrono una interfaccia semplice per realizzare dei modelli controllati da fogli di calcolo.

![](/images/Expressions-demo.png)

È stato ulteriormente migliorato il comportamento del **Risolutore Sketcher**. È diventato più veloce e più stabile, inoltre non indugia più sugli schizzi irrisolvibili. Ora l'innesco del ricalcolo automatico dei documenti dopo ogni piccola correzione del disegno può essere disattivato, consentendo di modificare facilmente anche gli schizzi sepolti in profondità, sotto le dipendenze.

![](/images/Sketcher-v0.16-demo.png)

Ora FreeCAD supporta la navigazione con il tocco dello schermo 3D, il touchscreen. Ciò rende possibile l'uso di FreeCAD senza mouse su un computer portatile convertibile con touchscreen e penna, lontano da una scrivania.

L'ambiente **FEM** ha fatto molti miglioramenti. Si è dimostrato che è utilizzabile per vari tipi di analisi meccanica.

![](/images/Multiple_material.jpg)

## In generale

* Supporto per espressioni o formule
* Tre nuovi stili di navigazione: Gesture (con il supporto touchscreen per Windows), Maya, e OpenCascade.
* Personalizzazione della lista degli ambienti lavoro (la lista può essere riordinata, e ogni ambiente può essere reso nascosto dalla lista)
* Strumento di recupero
* Nuove opzioni di salvataggio (Ripristina, Salva come copia)
* Nuova homepage

## Ambiente Part

* Nuovi strumenti per congiungere oggetti con "pareti" (es. tubazioni): [Congiungi](/Part_JoinConnect/it "Part JoinConnect/it"), [Incastra](/Part_JoinEmbed/it "Part JoinEmbed/it") e [Asporta](/Part_JoinCutout/it "Part JoinCutout/it")
* Nuova funzionalità: creare una faccia parametrica da uno schizzo

## Ambienti Part Design & Sketcher

* Nuova funzionalità: Commutazione tra [Vincoli guida o di riferimento](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it") e definitivi
* Nuova funzionalità: Modalità di creazione Continua
* Nuova funzionalità: Vincoli definitivi (in alternativa ai vincoli Guida)
* Maggiore velocità
* Controlli avanzati del risolutore
* Nuove funzionalità: Strumenti per la duplicazione, la riflessione e la schiera rettangolare
* Supporto per l'impiego di [espressioni o formule](/Expressions/it "Expressions/it") nei vincoli e nelle proprietà

## Ambiente Spreadsheet

* Aggiunte le funzioni: round, trunc, ceil, e floor.

## Ambiente Draft

* **Nuovo importatore DXF**: Ora l'ambiente Draft è dotato di un nuovo importatore DXF, completamente scritto in C ++, ereditato da [HeeksCad](https://github.com/Heeks/heekscad), che non ha più bisogno di scaricare dei componenti esterni, ed è molto più veloce e in grado di caricare dei file DXF molto più grandi. Una opzione nelle preferenze per i file DXF permette di tornare al vecchio importatore, se questo è necessario.
* Il nuovo strumento **[Specchio](/Draft_Mirror/it "Draft Mirror/it")** permette di riflettere gli oggetti nel modo Draft.
* Sono stati aggiunti molti **modelli DXF** incorporati nei corrispondenti modelli SVG, migliorando l'esportazione in DXF delle pagine di Disegno (Drawing).
* Ora i [Rettangoli](/Draft_Rectangle/it "Draft Rectangle/it"), le [linee e polilinee](/Draft_Wire/it "Draft Wire/it") possono essere **suddivisi**, consentendo tutti i tipi di nuove combinazioni della forma.

![](/images/Draft_subdivisions.jpg)

## Ambiente Drawing

* Il nuovo strumento **[Vista foglio di calcolo](/Drawing_SpreadsheetView/it "Drawing SpreadsheetView/it")** permette di inserire un intervallo di celle di un [foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") in una pagina di Drawing.

![](/images/Drawing_spreadsheetview.jpg)

## Ambiente Arch

* **[Supporto Materiali](/Arch_SetMaterial/it "Arch SetMaterial/it")**: Ora gli oggetti Arch possono essere associati a un [materiale](/Material "Material"), che utilizza la struttura dei materiali interna a FreeCAD. I materiali sono condivisi con gli altri ambienti, e sono pienamente supportati nell'importazione ed esportazione IFC.
* **[Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it")**: Ora il piano di sezione può tagliare la vista 3D, e mostrare la sezione in tempo reale.

![](/images/Arch_clip_plane.jpg)

* Diversi miglioramenti all'**importatore IFC**, come le nuove opzioni per il trattamento dei grandi file IFC, un migliore supporto per le estrusioni (ora rilevate durante l'importazione) e i segmenti curvi, e il supporto di oggetti di annotazione 2D. È stata aggiunta l'importazione IFC analitica. Al momento è supportata l'importazione delle rappresentazioni geometriche di tutti gli oggetti analitici.
* Migliorate le **opzioni meshing** per i formati DAE e IFC.
* Un nuovo strumento [Scheda](/Arch_Schedule/it "Arch Schedule/it") di Arch permette di creare diversi tipi di schede da un modello BIM.
* Gli **attributi IFC** ora possono essere importati, modificati ed esportati. Essi sono fondamentalmente un oggetto foglio di calcolo collegato a un oggetto Arch.

## Ambiente FEM

* Ora i comandi **GUI** di FEM hanno le scorciatoie da tastiera. È stato introdotto un dialogo delle preferenza per FEA. Il percorso per il binario di calculix è una delle impostazioni delle preferenze.
* Nel **contenitore GUI delle analisi** i componenti dell'analisi usano drag & drop. Essi possono essere spostati dentro e fuori da un contenitore dell'analisi. Poiché ora non vi è il supporto per analisi multiple, un membro può essere spostato anche in un'altra analisi. In un'analisi si possono creare dei vincoli multipli.
* **GUI analisi rapida** Alla GUI è stato aggiunto un pulsante per l'analisi rapida. Esso purga i risultati, scrive il file Calculix di input e esegue l'analisi per il risolutore selezionato. Viene rilevato se per Calculix è disponibile il multithreading e usa il massimo possibile di thread.
* **File di Input** L'editor interno a FreeCAD supporta la modifica dei file di input calculix (\*.inp). È anche stata implementata l'evidenziazione della sintassi.
* **Oggetti mesh Netgen** La GUI e l'editor delle proprietà degli oggetti mesh NetGen sono stati rielaborati. Sono supportati gli elementi tetraedri meshing oltre il primo e secondo ordine, e anche la regolazione dei parametri di meshing.
* **Oggetti Vincolo forza e Vincolo fissaggio** Ora è possibile aggiungere dei Vincoli forze e fissaggio sui bordi e sui vertici.
* **Oggetto Vincolo pressione** È stato aggiunto un nuovo oggetto per il carico di pressione sulle facce. La pressione (carico sull'area) viene passata direttamente a Calculix, il che significa che i carichi sul nodo non sono calcolati da FreeCAD, ma da Calculix.
* **Oggetto Vincolo spostamento prescritto** È stato aggiunto un nuovo oggetto per gli spostamenti prescritti. Lo spostamento prescritto può essere aggiunto a vertici, spigoli e facce. Per l'analisi dei solai e delle travi è possibile fissare i gradi di libertà rotazionali.
* **Oggetto Sezione di trave** Il nuovo oggetto sezione della trave consente di definire sezione rettangolare per una trave FEM. In un'analisi, definendo una forma di riferimento per ogni sezione trasversale, si ha il supporto per le diverse sezioni della trave.
* **Shell thickness object** The new shell thickness object allows to define thicknesses of shell plates. Like in beam section there is support for multiple shell thicknesses in one analysis by defining reference shapes.
* **Oggetto Materiale** Multiple materials are supported for edge, shell and solid meshes. Like for the beam section and shell thickness objects a appropriate FEM Mesh is needed to use the multiple material.
* **Oggetto Solver** Come base per molteplici risolutori è stato implementato un oggetto risolutore. E tutte le proprietà dell'analisi spostate dall'analisi alla risolutore.
* **Analisi di Frequenza** Si può eseguire l'analisi della frequenza. Il dati eigenvalue o eigenshape possono essere regolati nella GUI delle preferenze.
* **View provider** Solai e Travi FEM-mesh possono essere visualizzati in FreeCAD e, quindi, anche i risultati di tali analisi.
* **API Python** Sono stati aggiunti i metodi per lavorare con le mesh FEM e per eseguire una analisi con python.
* **Macro GMSH** Uno sviluppo esterno interessante è la [Macro GMSH](/Macro_GMSH/it "Macro GMSH/it") che rende possibile l'uso di GMSH per il meshing. Molto utile per tutti coloro che non sono in grado di compilare FreeCAD con NetGen o per meshing shell or edge meshes.
* **Miglioramenti generali** Dato il suo consistente sviluppo, ci sono stati molti miglioramenti nel codice di base del modulo FEM.

## Ambiente Path

![](/images/Exercise_path_02.jpg)

A FreeCAD è stato aggiunto il nuovo ambiente [Path](/Path_Workbench/it "Path Workbench/it"). Questo ambiente è ancora in fase di sviluppo, ma implementa già alcune operazioni CAM, e permette di esportare un programma completo in [G-code](https://en.wikipedia.org/wiki/G-code) per una varietà di macchine CNC.

Allo stato attuale, l'ambiente permette di creare profili e tasche basate su un oggetto [Part](/Part_Workbench/it "Part Workbench/it"), di creare percorsi complessi unendo diversi percorsi parziali, di controllare e modificare i contenuti del G-code dei percorsi, di gestire la tabella utensili, e di scegliere tra diversi script di pre-elaborazione e post-elaborazione per l'importazione e l'esportazione del G-code. Fornisce già anche una completa [API python](/Path_scripting/it "Path scripting/it").

## Moduli aggiuntivi

I membri della comunità hanno creato alcuni [ambienti aggiuntivi](https://github.com/FreeCAD/FreeCAD-addons). Questi ambienti sono facilmente inseribili in qualsiasi installazione di FreeCAD esistente. Tra di loro ci sono:

* Un [Ambiente Animazione](https://github.com/microelly2/Animation) che permette di creare delle animazioni dai modelli di FreeCAD, definendo il movimento di una macchina fotografica ed esportando una sequenza di immagini.
* Una macro per [esportare in Kerkythea](https://github.com/marmni/FreeCAD-Kerkythea) che permette di esportare i documenti di FreeCAD nel [free renderer Kerkythea](http://www.kerkythea.net/cms/).
* È anche già disponibile un [Menu Pie](http://forum.freecadweb.org/viewtopic.php?f=22&t=10892%7C), ancora in lavorazione.
* Infine, è stato creato un [addons repository](https://github.com/FreeCAD/FreeCAD-addons) per riunire tutti i nuovi ambienti interessanti, i moduli e le altre macro che stanno fiorendo intorno a FreeCAD. Questo repository è dotato di un programma di installazione che si occupa per voi della sua installazione e dell'aggiornamento di questi addons.

![](/images/Macro_installer_02.jpg)

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.16/it&oldid=1259859>"