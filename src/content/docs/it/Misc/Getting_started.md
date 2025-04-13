---
title: Per iniziare
---
## Prefazione

FreeCAD è una [applicazione per la modellazione parametrica](/About_FreeCAD/it "About FreeCAD/it"). È realizzato principalmente per la progettazione meccanica, ma serve anche in tutti casi in cui è necessario modellare degli oggetti 3D con precisione e avere il controllo dello storico della modellazione.

FreeCAD è in fase di sviluppo dal 2002 e offre un ampio elenco di [funzioni](/Feature_list/it "Feature list/it"), anche se alcune mancano ancora, è però abbastanza potente per uso hobbistico e per molte piccole officine. C'è una comunità in rapida crescita di utenti entusiasti che partecipano al [forum FreeCAD](http://forum.freecad.org/index.php), e si possono già trovare [molti esempi](https://forum.freecad.org/viewforum.php?f=24) di progetti di qualità sviluppati con FreeCAD.

Come tutti i progetti di software libero, FreeCAD dipende dalla sua comunità per crescere, acquisire funzionalità e correggere i bug. Non dimenticate questo quando usate FreeCAD; se vi piace, potete [donare](/Donate/it "Donate/it") e [aiutare FreeCAD](/Help_FreeCAD/it "Help FreeCAD/it") in vari modi, come scrivere documentazione e fare traduzioni.

Vedi anche:

* [Migrare a FreeCAD da Fusion360](/Migrating_to_FreeCAD_from_Fusion360/it "Migrating to FreeCAD from Fusion360/it")
* [Which workbench should I choose?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutorials](/Tutorials/it "Tutorials/it")
* [Video tutorials](/Video_tutorials/it "Video tutorials/it")

## Installazione

Prima di tutto, scaricare e installare FreeCAD. Consultare la pagina [Download](/Download/it "Download/it") per informazioni sulle versioni, sugli aggiornamenti correnti e per le istruzioni di installazione per il tuo sistema operativo ([Windows](/Installing_on_Windows/it "Installing on Windows/it"), [Linux](/Installing_on_Linux/it "Installing on Linux/it") o [macOS](/Installing_on_Mac/it "Installing on Mac/it")). FreeCAD è disponibile dai gestori di pacchetti di molte distribuzioni Linux. Poiché FreeCAD è open-source, puoi anche scaricare il codice sorgente e [compilare](/Compiling/it "Compiling/it") tu stesso.

## Interfaccia di FreeCAD

![](/images/FreeCAD_interface_base_divisions.svg)

Interfaccia standard di FreeCAD

*Vedere la spiegazione completa in [Interfaccia](/Interface/it "Interface/it").*

:   1. L'[area della vista principale](/Main_view_area/it "Main view area/it"), che può contenere diverse finestre a schede, principalmente la [vista 3D](/3D_view/it "3D view/it").
:   2. La [vista 3D](/3D_view/it "3D view/it"), che visualizza gli oggetti geometrici contenuti nel documento.
:   3. La [vista ad albero](/Tree_view/it "Tree view/it") (parte della [vista combinata](/Combo_view/it "Combo view/it")), che mostra la gerarchia e lo storico di costruzione degli oggetti nel documento; può anche visualizzare il [pannello delle azioni](/Task_panel/it "Task panel/it") per i comandi attivi.
:   4. L'[editor delle proprietà](/Property_editor/it "Property editor/it") (parte della [vista combinata](/Combo_view/it "Combo view/it")), che consente di visualizzare e modificare le proprietà degli oggetti selezionati.
:   5. La [vista selezione](/Selection_view/it "Selection view/it"), che indica gli oggetti o i sotto-elementi degli oggetti (facce, vertici) che sono selezionati.
:   6. La [finestra dei report](/Report_view/it "Report view/it") dove FreeCAD stampa i messaggi di avvisi o di errori.
:   7. La [console Python](/Python_console/it "Python console/it") dove sono visibili tutti i comandi eseguiti da FreeCAD, e in cui è possibile inserire il codice [Python](/Python/it "Python/it").
:   8. La [barra di stato](/Status_bar/it "Status bar/it"), dove compaiono alcuni messaggi e suggerimenti.
:   9. L'area della barra degli strumenti, dove sono ancorate le barre degli strumenti.
:   10. Il [selettore degli ambienti](/Std_Workbench/it "Std Workbench/it"), dove si seleziona l'[ambiente](/Workbenches/it "Workbenches/it") attivo.
:   11. Il [menu standard](/Standard_Menu/it "Standard Menu/it"), che ospita le operazioni di base del programma.

Il concetto principale è che, dietro la sua interfaccia, FreeCAD è suddiviso in [ambienti di lavoro](/Workbenches/it "Workbenches/it"). Ogni ambiente raggruppa gli strumenti idonei a svolgere un compito specifico, come ad esempio lavorare con gli oggetti [mesh](/Mesh_Workbench/it "Mesh Workbench/it"), oppure disegnare [oggetti 2D](/Draft_Workbench/it "Draft Workbench/it") o [schizzi vincolati](/Sketcher_Workbench/it "Sketcher Workbench/it"). È possibile cambiare l'ambiente corrente con il [selettore degli ambienti](/Std_Workbench/it "Std Workbench/it"). Si può [personalizzare](/Interface_Customization/it "Interface Customization/it") il set di strumenti inclusi in ogni ambiente, aggiungere degli strumenti da altri ambienti o anche aggiungere strumenti di propria creazione, che chiamiamo [macro](/Macros/it "Macros/it"). Punti di partenza ampiamente utilizzati sono [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") e [Part](/Part_Workbench/it "Part Workbench/it").

Al primo avvio di FreeCAD viene visualizzato la pagina iniziale. Ecco come appare nella versione 0.18:

![](/images/Start_center_0.19_screenshot.png)

La Pagina Iniziale permette di passare rapidamente a uno degli ambienti di lavoro più comuni, di aprire uno dei file recenti, oppure di vedere le ultime novità dal mondo di FreeCAD. Nelle [preferenze](/Preferences_Editor/it "Preferences Editor/it") è possibile modificare l'ambiente di lavoro predefinito.

## Navigare nello spazio 3D

FreeCAD ha diverse [modalità di navigazione](/Mouse_navigation/it "Mouse navigation/it"), che modificano il modo con cui usi il tuo mouse, per interagire con gli oggetti nella vista 3D e con la vista stessa. Uno di questi è specifico per la [navigazione touchpad](/Mouse_navigation/it#Navigazione_Touchpad "Mouse navigation/it"), dove il bottone centrale non è utilizzato. La modalità di navigazione di default è [navigazione CAD](/Mouse_navigation/it#CAD_navigation "Mouse navigation/it").
Puoi rapidamente cambiare la modalità di navigazione utilizzando il bottone ![](/images/NavigationCAD_dark.svg) nella [barra di stato](/Status_bar/it "Status bar/it") o cliccando col tasto destro in un area vuota della [vista 3D](/3D_view/it "3D view/it").

Inoltre, sono disponibili alcune viste preconfigurate (dall'alto, laterale, frontale, ecc) accessibili dal menu Visualizza⁫ → Viste standard oppure tramite i pratici comandi veloci dei tasti numerici ( 1, 2, 3 etc...). Facendo clic con il pulsante destro su un oggetto o un'area vuota della vista 3D, si ha accesso rapido ad alcune operazioni comuni, come l'impostazione di una vista particolare, o l'individuazione di un oggetto nella vista ad albero.

## Primi passi con FreeCAD

L'obiettivo di FreeCAD è quello di consentire di creare dei modelli 3D di alta precisione mantenendo uno stretto controllo sui modelli per essere in grado di tornare indietro nello storico della modellazione e di variare i parametri, e alla fine di costruire quei modelli (attraverso la stampa 3D, CNC o anche la costruzione in cantiere). È quindi molto diverso da alcune applicazioni 3D realizzate per altri scopi, come ad esempio per i film di animazione o per i giochi. La sua curva di apprendimento può essere ripida, specialmente se questo è il primo contatto con la modellazione 3D. Quando si rimane bloccati in un certo punto, ricordarsi che nel [FreeCAD forum](http://forum.freecad.org/index.php) c'è una comunità amichevole di utenti può essere in grado di fornire un aiuto in breve tempo.

L'ambiente di lavoro con cui iniziare a lavorare in FreeCAD dipende dal tipo di lavoro si intende realizzare. Quando si ha intenzione di lavorare su modelli meccanici, o più in generale su qualsiasi oggetto di piccole dimensioni, probabilmente si vuole provare [Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it"). Se si lavora in 2D, allora conviene passare all'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it"), o all'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") quando servono i vincoli. Se si vuole fare BIM, avviare l'ambiente [BIM](/BIM_Workbench/it "BIM Workbench/it"). Se si proviene dal mondo di OpenSCAD, si può provare l'ambiente [OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it"). Ci sono anche molti [Ambienti complementari](/External_workbenches/it "External workbenches/it") sviluppati dalla comunità.

È possibile commutare gli ambienti di lavoro in qualsiasi momento, e anche [personalizzare](/Interface_Customization/it "Interface Customization/it") il proprio ambiente preferito aggiungendovi degli strumenti di altri ambienti.

## Lavorare con gli ambienti PartDesign e Sketcher

[PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") è fatto appositamente per costruire oggetti complessi, partendo da forme semplici a cui aggiungere o rimuovere dei pezzi (chiamate "funzioni"), fino a ottenere l'oggetto finale. Tutte le caratteristiche applicate durante il processo di modellazione vengono memorizzate in una vista separata denominata [vista a albero](/Document_structure/it "Document structure/it"), che contiene anche gli altri oggetti del documento. Si può pensare ad un oggetto di PartDesign come a una successione di operazioni, ciascuna applicata al risultato di quella precedente, formando una grande catena. Nella vista ad albero, si vede l'oggetto finale, ma è possibile espanderla e recuperare tutti gli stati precedenti, e modificare i loro parametri, questo aggiorna automaticamente l'oggetto finale.

L'ambiente PartDesign fa uso importante di un altro ambiente, l'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"). Sketcher permette di disegnare forme 2D vincolate, il che significa che alcune parti della forma 2D possono avere dei vincoli. Ad esempio, è possibile disegnare un rettangolo e impostare un vincolo di lunghezza per uno dei suoi lati. Quel lato quindi non può più essere ridimensionato, fino a quando il vincolo non viene modificato.

Queste forme 2D realizzate con lo sketcher sono molto utilizzate in PartDesign, ad esempio per creare i volumi 3D o per disegnare le aree sulle facce dell'oggetto che devono essere scavate dal volume principale. Ecco un tipico flusso di lavoro PartDesign:

1. Creare un nuovo schizzo
2. Disegnare un contorno chiuso (assicurarsi che tutti i punti sono uniti)
3. Chiudere lo schizzo
4. Espandere lo schizzo in un solido 3D con lo strumento Pad
5. Selezionare una faccia del solido
6. Creare un secondo schizzo (questa volta sarà disegnato sulla faccia selezionata)
7. Disegnare una forma chiusa
8. Chiudere lo schizzo
9. Creare uno scavo con il secondo schizzo, sul primo oggetto

Si ottiene un oggetto simile a questo:

![](/images/Partdesign_example.jpg)

In qualsiasi momento è possibile selezionare gli schizzi originali e modificarli oppure modificare i parametri delle operazioni di estrusione o di scavo, l'oggetto finale viene automaticamente aggiornato.

## Lavorare con gli ambienti Draft e BIM

Gli ambienti [Draft](/Draft_Workbench/it "Draft Workbench/it") e [BIM](/BIM_Workbench/it "BIM Workbench/it") si comportano in modo un po' diverso dagli altri ambienti di lavoro di cui sopra, anche se seguono le regole comuni di FreeCAD. In breve, Sketcher e PartDesign sono utilizzati principalmente per la progettazione di singoli pezzi, invece Draft e BIM sono concepiti per facilitare il lavoro quando si opera con diversi oggetti semplici.

L'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it") offre degli strumenti 2D in parte simili a quelli che si possono trovare nelle applicazioni tradizionali di CAD 2D quali [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). Però, il disegno 2D è lontano dagli scopi di FreeCAD, quindi non aspettatevi di trovare in esso la gamma completa di strumenti offerta da queste applicazioni dedicate. La maggior parte degli strumenti di Draft lavorano, non solo in un piano 2D, ma anche nello spazio 3D, e beneficiano degli speciali sistemi di supporto come il [Piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") e lo [Snapping](/Draft_Snap/it "Draft Snap/it").

L'ambiente [BIM](/BIM_Workbench/it "BIM Workbench/it") aggiunge a FreeCAD gli strumenti [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) che consentono di costruire i modelli architettonici con degli oggetti parametrici. L'ambiente BIM si basa ampiamente sugli altri moduli come Draft e Sketcher. Tutti gli strumenti di Draft sono presenti anche nell'ambiente BIM e molti strumenti di BIM usano i sistemi di supporto di Draft.

Un tipico flusso di lavoro con gli ambienti BIM e Draft potrebbe essere:

1. Disegnare un paio di linee con lo strumento Linea di Draft
2. Selezionare tutte le linee e premere lo strumento Muro per costruire un muro su ciascuna di esse
3. Unire le pareti selezionandole e premendo lo strumento Aggiungi di BIM
4. Creare un oggetto pavimento e nella vista ad albero trascinare i muri sull'oggetto pavimento
5. Creare un oggetto edificio e nella vista ad albero trascinare il pavimento (che ora include i muri) sull'oggetto edificio
6. Creare una Finestra cliccando sullo strumento Finestra, selezionare un modello predefinito nel suo pannello, quindi fare clic su una faccia di un muro
7. Aggiungere le Quote impostando prima il piano di lavoro, se necessario, quindi utilizzando lo strumento Dimension di Draft

Si ottiene un oggetto simile a questo:

![](/images/Arch_workflow_example.jpg)

Maggiori informazioni si trovano nella sezione [Tutorial](/Tutorials/it "Tutorials/it").

## Componenti aggiuntivi

Ogni utente può sviluppare le proprie nuove funzionalità per FreeCAD e renderle disponibili alla comunità di FreeCAD come [addon](/Addon/it "Addon/it").

Esistono tre tipi di componenti aggiuntivi:

* [Macro](/Macros/it "Macros/it"): breve frammento di codice [Python](/Python/it "Python/it") che fornisce un nuovo strumento o una nuova funzionalità in un singolo file con estensione `.FCMacro`.
* [Ambienti complementari](/External_workbenches/it "External workbenches/it"): raccolte di file Python che forniscono [Comandi GUI](/Gui_Command/it "Gui Command/it") (strumenti) correlati incentrati su un particolare argomento.
* [Pacchetti di Preferenze](/Preference_Packs/it "Preference Packs/it"): raccolte di preferenze utente distribuibili.

## Script

Infine, una delle più potenti caratteristiche di FreeCAD è l'ambiente di [scripting](/Power_users_hub/it#Scripting_in_FreeCAD "Power users hub/it"). Dalla console Python integrata (o tramite qualsiasi altro script Python esterno), è possibile accedere a quasi tutte le parti di FreeCAD, creare o modificare le geometrie, modificare la rappresentazione degli oggetti nella vista 3D, oppure accedere e modificare l'interfaccia di FreeCAD. Gli script Python possono essere utilizzati anche all'interno delle [macro](/Macros/it "Macros/it") che forniscono un metodo facile e veloce per creare combinazioni di comandi personalizzati.

## Aggiornamenti

* Vedere le [Note di rilascio](/Feature_list/it#Note_di_rilascio "Feature list/it") per l'elenco dettagliato delle funzionalità.

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/it&oldid=1489633>"