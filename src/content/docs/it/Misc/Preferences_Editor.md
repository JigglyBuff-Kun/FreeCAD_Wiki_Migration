---
title: Impostare le preferenze
---
## Introduzione

Per avviare l' **Editor delle preferenze** selezionare l'opzione dal menu **Modifica → Preferenze...** o ([disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")) usare la scorciatoia da tastiera Ctrl+,. Su macOS invece, l'opzione **Preferenze...** appare nel menu **FreeCAD** (questa è la posizione predefinita per le preferenze su Mac).

FreeCAD utilizza il concetto di ambiente di lavoro, in cui ogni ambiente di lavoro è responsabile di attività e funzioni specifiche. Un ambiente di lavoro può avere le sue proprie preferenze. Queste appariranno nell'editor delle Preferenze, di solito in un gruppo dedicato, se l'ambiente di lavoro è stato caricato nella sessione corrente di FreeCAD. Alcuni ambienti di lavoro aggiungono il supporto per formati di importazione ed esportazione specifici. Se sono presenti preferenze correlate, verranno visualizzate in una o più pagine aggiuntive nel gruppo [Import-Export](#Import-Export) dell'editor delle preferenze.

Per preservare le risorse, FreeCAD non carica automaticamente tutti gli ambienti di lavoro disponibili. Vedi [Ambienti di lavoro](#Ambienti_di_lavoro) per maggiori informazioni. Per un elenco delle preferenze relative all'ambiente, vedere [Preferenze relative agli Ambienti di Lavoro](#Preferenze_relative_agli_Ambienti_di_Lavoro).

Se non è stato caricato alcun ambiente di lavoro, nell'editor delle Preferenze appaiono sette gruppi: [Generale](#Generale), [Visualizzazione](#Visualizzazione), [Ambienti di lavoro](#Ambienti_di_lavoro), [Python](#Python), [Addon Manager](#Addon_Manager), [Import-Export](#Import-Export) e [Measure](#Measure). Tutti gli ambienti di lavoro che sono stati caricati e hanno le proprie preferenze verranno visualizzati di seguito.

Premendo il pulsante Ripristina nell'angolo in basso a sinistra della finestra di dialogo Preferenze si apre un menu ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) con opzioni per ripristinare le preferenze ai valori predefiniti. Si possono reimpostare la pagina corrente, il gruppo corrente o tutte le preferenze. Nella versione 0.21 e precedenti il pulsante ripristinerà **tutte** le preferenze.

Alcune preferenze avanzate possono essere modificate solo in [Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it"). La pagina [Ottimizzare l'installazione](/Fine-tuning/it "Fine-tuning/it") ne elenca alcuni.

Questa pagina è stata aggiornata per la versione 1.0.

## Generale

Questo gruppo delle preferenze ha sette pagine: Generale, Documento, Selezione, Cache, Area di notifica, Report e Aiuto.

In versione 0.21 e precedenti la settima pagina, Aiuto, è disponibile solo se il [Help Addon](https://github.com/FreeCAD/FreeCAD-Help) è stato [installato](/Std_AddonMgr/it "Std AddonMgr/it").

### Generale

![](/images/Preferences_General_Page_General.png)

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Lingua** | Lingua dell'interfaccia utente dell'applicazione. |
| **Sistema di unità predefinito** | Sistema di unità per tutte le parti dell'applicazione. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): utilizzato come predefinito per il [sistema di unità documento](/Std_ProjectInfo/it "Std ProjectInfo/it") dei nuovi documenti. |
| **Numero di decimali** | Il numero di decimali che devono essere visualizzati per numeri e quote. |
| **Ignora il sistema di unità del progetto e usa quello predefinito** [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") | Se selezionati, i sistemi di unità del progetto vengono ignorati e non sovrascrivono il sistema di unità predefinito. |
| **Pollici frazionari minimi** | Il pollice frazionario minimo che deve essere mostrato per numeri e dimensioni. Disponibile solo per sistemi di unità con pollici frazionari. |
| **Formato numero** [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it") | Specifica il formato del numero. Le opzioni sono:  * **Sistema operativo**: viene utilizzato il separatore decimale definito dal sistema operativo. * **Lingua selezionata**: Viene utilizzato il separatore decimale della lingua dell'interfaccia di FreeCAD selezionata. * **C/POSIX**: Come separatore decimale viene utilizzato un punto. |
| **Sostituisci separatore decimale** [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it") | Se selezionato, il separatore decimale del tastierino numerico verrà sostituito con il separatore definito dall'impostazione **Number format**. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"): Notare che se questa preferenza è abilitata, utilizzando il separatore decimale del tastierino numerico verrà sempre stampato un punto/punto nella [Console Python](/Python_console "Python console") e nell'[[Std\_DlgMacroExecute/it#Modifica|Macro editor] ]. |
| **Tema** | Specifica un [tema](/Interface_Customization/it#Temi "Interface Customization/it") per personalizzare l'aspetto dell'interfaccia utente. |
| **Dimensione delle icone della barra degli strumenti** | Specifica la dimensione delle icone della barra degli strumenti. Le opzioni sono:  * **Piccolo (16px)** * **Medio (24px)** * **Grande (32px)** * **Extra grande (48px)** |
| **Modalità di visualizzazione ad albero** | Definisce come viene visualizzata la vista ad albero nell'interfaccia utente (è necessario il riavvio). Le opzioni sono:  * **Vista combinata**: Combina la vista ad albero e la vista delle proprietà in un unico pannello. * **Vista ad albero e proprietà**: divide la vista ad albero e la vista delle proprietà in pannelli separati. * **Entrambi**: Mostra tutti e tre i pannelli. versione 0.21 e precedenti |
| **Dimensione dell'elenco dei file recenti** | Specifica quanti file devono essere elencati nell'elenco dei file recenti. Facoltativamente, è possibile escludere i file importati da questo elenco e includere i file esportati. Vedere [Ottimizzare l'installazione](/Fine-tuning/it "Fine-tuning/it"). |
| **Abilita lo sfondo a mosaico** | Se selezionato, lo sfondo della finestra principale di FreeCAD sarà costituito per impostazione predefinita dai riquadri di questa immagine:  Questa opzione ha effetto solo se non è selezionato alcun **Foglio di stile**.  L'immagine può essere cambiata aggiungendo le cartelle Gui/Images nella cartella:  [%APPDATA%](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)/FreeCAD (per Windows),  $HOME/.FreeCAD (su Linux) o  $HOME/Library/Preferences/FreeCAD (su macOS).  Inserire un file chiamato background.png nella cartella Images, e deselezionare/selezionare questa opzione per vedere il file modificato. |
| **Abilita la schermata iniziale all'avvio** | Se selezionato, all'avvio di FreeCAD viene mostrata una schermata iniziale. L'immagine della schermata iniziale può essere modificata inserendo un file denominato splash\_image.png nella cartella Images già menzionata in **Abilita lo sfondo a mosaico**. |
| **Abilita il lampeggiamento del cursore** | Se selezionato, il cursore del testo nella [Python console](/Python_console/it "Python console/it") e l'[Macro editor](/Std_DlgMacroExecute#Edit "Std DlgMacroExecute") lampeggeranno. |
| **Attiva gestione overlay** [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") | Se selezionate, le finestre ancorate possono essere gestite come sovrapposizioni trasparenti. |
| **Pacchetti di preferenze** | Elenca i [pacchetti preferenze](/Preference_Packs/it "Preference Packs/it") disponibili e consente inoltre di importarli, salvarli, gestirli e ripristinarli. |

### Documento

![](/images/Preferences_General_Page_Document.png)

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Crea un nuovo documento all'avvio** | Se selezionato, FreeCAD crea un nuovo documento quando viene avviato |
| **Livello di compressione di salvataggio del documento** | Specifica del livello di compressione per i file FCStd. I file FCStd sono file compressi ZIP. Quindi puoi rinominare il loro suffisso .FCStd in .zip e aprirli con un programma di archivio ZIP. |
| **Utlizza Annulla/Ripristina sui documenti** | Se selezionato, tutti i cambiamenti nei documenti sono memorizzati in modo che possano essere annullati o ripristinati |
| **Massimo numero di passaggi Annulla/Ripristina** | Specifica quanti passaggi Annulla/Ripristina devono essere registrati |
| **Esegui il salvataggio automatico all'avvio** | Se è disponibile un file di ripristino FreeCAD esegue automaticamente un ripristino del file all'avvio. In questo modo è possibile ripristinare i file in caso di arresto anomalo. |
| **Salva le informazioni di autorecupero ogni** | Specifica la frequenza con cui viene scritto un file di ripristino. |
| **Salva la miniatura nel file del progetto al salvataggio del documento** | Se selezionato, quando il documento viene salvato viene salvata anche una miniatura. Ad esempio, la miniatura viene visualizzata nell'elenco dei file recenti nell'ambiente [Start](/Start_Workbench/it "Start Workbench/it"). |
| **Aggiungi il logo del programma alla miniatura generata** | Se selezionato, il logo del programma FreeCAD  viene aggiunto alla miniatura. Questa opzione ha effetto solo se viene usato **Salva la miniatura nel file del progetto al salvataggio del documento**. |
| **Numero massimo di file di backup da conservare quando si salva nuovamente il documento** | Se selezionato, i file di backup vengono conservati quando si salva il documento. È possibile specificare il numero di file di backup da conservare. Contengono la versione del documento salvata in precedenza. Il primo file di backup ha il suffisso del file .FCStd1, il secondo .FCStd2 e così via. |
| **Usa l'estensione data e FCBak** | Se selezionato, i file di backup avranno l'estensione .FCbak e i loro nomi di file avranno un suffisso di data in base al **formato data** specificato. Per una descrizione del formato della data, vedere [Cheatsheet sui formati di data e ora](https://devhints.io/datetime). Con le impostazioni predefinite un file di backup riceverà, ad esempio, questo nome TD-Cube.20200315-215654.FCBak (il nome file originale è TD-Cube.FCStd). |
| **Consenti la duplicazione delle etichette degli oggetti nello stesso documento** | Se selezionato, gli oggetti possono avere la stessa etichetta o nome. Ad esempio, parti o caratteristiche diverse possono avere lo stesso nome nello stesso documento. |
| **Disabilita il caricamento parziale di oggetti collegati esterni** | Se è abilitato il caricamento parziale di oggetti collegati esterni, verranno caricati solo gli oggetti di riferimento e le relative dipendenze quando il documento collegato viene aperto automaticamente insieme al documento principale. Un tale documento caricato parzialmente non può essere modificato. Fare doppio clic sull'icona del documento nella vista ad albero per ricaricarlo completamente. Una spiegazione più dettagliata di questa funzione può essere trovata nella [Documentazione di Assembly3](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes#partial-document-loading). |
| **Nome autore** | Tutti i documenti che vengono creati ottengono il nome dell'autore specificato. Lasciare il campo dell'autore vuoto per un autore anonimo. Se viene selezionata l'opzione **Imposta su salva**, il campo *Ultima modifica effettuata da:* sarà impostato sull'autore specificato al momento del salvataggio del file. Questo campo può essere visualizzato utilizzando il menu **File → Informazioni sul progetto**. |
| **Azienda** | Tutti i documenti creati ottengono il nome della società specificata |
| **Licenza di default** | Selezione di una licenza predefinita per nuovi documenti. Per la licenza predefinita, **URL della licenza** viene automaticamente impostato di conseguenza. Selezionare 'Altro' per una licenza propria o speciale. |
| **URL della licenza** | Specifica un URL che descrive la licenza selezionata in **Licenza di default** |

### Selezione

![](/images/Preferences_General_Page_Selection.png)

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Passa automaticamente alla vista 3D contenente l'elemento selezionato** | Abilita la modalità [Sincronizza la vista](/Std_TreeSyncView/it "Std TreeSyncView/it"). |
| **Espande automaticamente la struttura quando l'oggetto corrispondente viene selezionato nella vista 3D** | Abilita la modalità [Sincronizza la selezione](/Std_TreeSyncSelection/it "Std TreeSyncSelection/it"). |
| **Preseleziona l'oggetto nella vista 3D quando il mouse sopra l'elemento ad albero** | Abilita la modalità [Preselezione](/Std_TreePreSelection/it "Std TreePreSelection/it"). |
| **Registra la selezione nella vista ad albero per andare indietro/avanti usando il pulsante di navigazione** | Abilita la modalità [Registra la selezione](/Std_TreeRecordSelection/it "Std TreeRecordSelection/it"). |
| **Aggiunge caselle di selezione nell'albero del modello** | Ogni oggetto nella [Vista ad albero](/Tree_view/it "Tree view/it") sarà dotato di una casella di controllo. Questo è utile, ad esempio, per selezionare più elementi su un touchscreen. |

Note that objects created while this option is not checked will have their Vista**Selectable** property set to `false`. With that value they are not selectable in the 3D view, even if this option is checked again.
|-
| **Pick radius (px)**
| Sets the area for picking elements in the [3D view](/3D_view "3D view"). Larger value makes it easier to pick things, but can make some small features impossible to select.
|-
| **Auto switch to the 3D view containing the selected item**
| Enables the [Tree view SyncView mode](/Std_TreeSyncView "Std TreeSyncView").
|-
| **Auto expand tree item when the corresponding object is selected in 3D view**
| Enables the [Tree view SyncSelection mode](/Std_TreeSyncSelection "Std TreeSyncSelection").
|-
| **Preselect the object in 3D view when mouse over the tree item**
| Enables the [Tree view PreSelection mode](/Std_TreePreSelection "Std TreePreSelection").
|-
| **Record selection in tree view in order to go back/forward using navigation button**
| Enables the [Tree view RecordSelection mode](/Std_TreeRecordSelection "Std TreeRecordSelection").
|-
| **Add checkboxes for selection in document tree**
| Each [Tree view](/Tree_view "Tree view") item will get a checkbox. This is for example useful for selecting multiple items on a touchscreen.
|}

### Cache

![](/images/Preferences_General_Page_Cache.png)

Queste preferenze sono correlate alla directory della cache in cui FreeCAD memorizza i file temporanei.

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Posizione** | Specifica il percorso della cartella della cache. |
| **Controlla periodicamente all'avvio del programma** | Controlla la frequenza con cui viene verificata la dimensione della cartella. Le opzioni sono:  * **Sempre** * **Giornaliero** * **Settimanale** * **Mensilmente** * **Annualmente** * **Mai** |
| **Limite dimensione della cache** | Specifica la dimensione massima della cartella. Sarai avvisato se viene eseguito un controllo e la dimensione supera questo valore. Le opzioni sono:  * **100 MB** * **300 MB** * **500 MB** * **1 GB** * **2 GB** * **3 GB** |
| **Dimensione attuale cache** | Mostra la dimensione corrente della directory, se disponibile. Premi il pulsante Controlla ora... per aggiornare il valore. |

### Area di notifica

![](/images/Preferences_General_Page_Notification_Area.png)

Queste preferenze controllano l'area di notifica e le relative notifiche.

In questa pagina ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Abilita area di notifica** | Se selezionato, l'Area di notifica apparirà nella barra di stato. |
| **Abilita notifiche non intrusive** | Se selezionato, le notifiche non intrusive appariranno accanto all'area di notifica nella barra di stato. |
| **Errori** | Se selezionato, gli errori verranno visualizzati nell'area di notifica. |
| **Avvisi** | Se selezionato, gli avvisi appariranno nell'area di notifica. |
| **Durata massima** | Durata massima durante la quale vengono visualizzate le notifiche (a meno che non si faccia clic sui pulsanti del mouse). |
| **Durata minima** | Durata minima (idem). |
| **Numero massimo di notifiche** | Numero massimo di notifiche mostrate contemporaneamente. |
| **Ampiezza notifica** | Larghezza dell'area di notifica in pixel. |
| **Nascondi quando viene attivata un'altra finestra** | Se selezionato, le notifiche aperte scompariranno quando viene attivata un'altra finestra. |
| **Non mostrare quando inattivo** | Se selezionato, le notifiche non verranno visualizzate se la finestra di FreeCAD non è la finestra attiva. |
| **Numero massimo di messaggi (0 = nessun limite)** | Il numero massimo di messaggi conservati nell'elenco. Impostare su 0 per nessun limite. |
| **Rimozione automatica notifiche utente** | Se selezionato, le notifiche verranno rimosse dall'elenco dei messaggi quando la **Durata massima** sarà scaduta. |

### Report

![](/images/Preferences_General_Page_Report_view.png)

Queste preferenze controllano il comportamento della [Finestra dei Report](/Report_view/it "Report view/it"). Questo pannello può essere aperto utilizzando l'opzione di menu **Visualizza → Panelli → Report**.

The Report view uses the same font settings as the [Macro editor](#Editor).

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Registra i messaggi normali** | Se selezionato, verranno registrati i messaggi normali. Verranno emessi nel pannello [Report](/Report_view/it "Report view/it") con il colore impostato in **Messaggi normali**. |
| **Registra i messaggi di log** | Se selezionato, verranno registrati anche i messaggi di log. Verranno emessi nel pannello [Report](/Report_view/it "Report view/it") con il colore impostato in **Messaggi di log**. |
| **Registra gli avvisi** | Se selezionato, verranno registrati gli avvisi. Verranno emessi nel pannello [Report](/Report_view/it "Report view/it") con il colore impostato in **Avvisi**. |
| **Registra i messaggi di errore** | Se selezionato, verranno registrati i messaggi di errore. Verranno emessi nel pannello [Report](/Report_view/it "Report view/it") con il colore impostato in **Errori** |
| **Mostra la vista report in caso di errore** | Se selezionato, il pannello [Report](/Report_view/it "Report view/it") viene visualizzato automaticamente non appena viene registrato un errore. |
| **Mostra la vista report in caso di avviso** | Se selezionato, il pannello [Report](/Report_view/it "Report view/it") viene visualizzato automaticamente non appena viene registrato un avviso. |
| **Mostra la vista report per i messaggi** | Se selezionato, il pannello [Report](/Report_view/it "Report view/it") viene visualizzato automaticamente non appena viene registrato un avviso. |
| **Mostra la vista report per i messaggi di log** | Se selezionato, il pannello [Report](/Report_view/it "Report view/it") viene visualizzato automaticamente non appena viene registrato un messaggio di log. |
| **Inserisci il codice temporale per ogni voce** | Se selezionato, ogni messaggio e avviso riceverà un codice temporale. |
| **Messaggi normali** | Specifica il colore del carattere per i messaggi normali. |
| **Messaggi di log** | Specifica il colore del carattere per i messaggi di log. |
| **Avvisi** | Specifica il colore del carattere per i messaggi di avviso. |
| **Errori** | Specifica il colore del carattere per i messaggi di errore. |
| **Reindirizza l'output interno di Python alla finestra di report** | Se selezionato, l'output interno di Python verrà reindirizzato dalla [console di Python](/Python_console/it "Python console/it") al pannello [Report](/Report_view "Report view"). |
| **Reindirizza gli errori interni di Python alla finestra di report** | Se selezionato, i messaggi di errore interni di Python verranno reindirizzati dalla [console di Python](/Python_console/it "Python console/it") al pannello [Report](/Report_view/it "Report view/it"). |

### Help

![](/images/Preferences_General_Page_Help.png)

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Help location** | Specifica la posizione dei file della Guida. Le opzioni sono:  * **Online**: Immettere l'URL o lasciare vuoto per utilizzare automaticamente l'[URL di GitHub](https://github.com/FreeCAD/FreeCAD-documentation/tree/main/wiki).   **Translation suffix**: Se viene utilizzato `https://wiki.freecad.org/`, può essere indicato [il suffisso della lingua](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Usa ad esempio `fr` per la traduzione francese. Deve essere vuoto per l'URL di GitHub.   * **From disk location**: Immettere il percorso in cui è possibile trovare la documentazione di FreeCAD scaricata. Per scaricare la documentazione selezionare l'addon *offline-documentation* dall'elenco degli Ambienti di Lavoro nell'[Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). |
| **Display** | Specifica dove deve essere visualizzata la documentazione. Le opzioni sono:  * **In a new FreeCAD tab**: La documentazione viene visualizzata in una nuova scheda nell'[Area della vista principale](/Main_view_area/it "Main view area/it"). * **In your default web browser**: La documentazione viene visualizzata nel browser Web predefinito. * **In a separate, embeddable, dialog**: La documentazione viene visualizzata in una finestra di dialogo separata. Questa finestra di dialogo può essere agganciata, ad esempio, alla parte superiore della [Vista combinata](/Combo_view/it "Combo view/it"). |
| **Custom stylesheet** | Specifica un foglio di stile personalizzato opzionale. Non utilizzato per l'URL del wiki. |

## Visualizzazione

Questa sezione delle preferenze ha tre schede standard: Vista 3D, Navigazione e Colori. Una quarta scheda, Visualizzazione Mesh, viene aggiunta se è stato caricato l'[Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it").

### Vista 3D

![](/images/Preferences_Display_Page_3D_View.png)

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Mostra il sistema di coordinate all'angolo** | Se selezionato, il sistema di coordinate principale verrà mostrato nell'angolo inferiore destro della [Vista 3D](/3D_view/it "3D view/it"). La **Dimensione relativa** ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")) definisce la dimensione della rappresentazione come percentuale della dimensione della vista (il minimo della sua altezza e larghezza). |
| **Mostra di default il sitema di assi** | Se selezionato, la croce dell'asse verrà mostrata di default nella [Vista 3D](/3D_view/it "3D view/it"). |
| **Mostra contatore frame per secondo** | Se selezionato, il tempo necessario per l'ultima operazione e la risultante [frequenza dei fotogrammi](https://it.wikipedia.org/wiki/Frequenza_dei_fotogrammi) verrà visualizzato nell'angolo inferiore sinistro della [Vista 3D](/3D_view/it "3D view/it"). |
| **Usa software OpenGL** | Se selezionato, [OpenGL](https://it.wikipedia.org/wiki/OpenGL) utilizzerà la CPU invece della GPU. Questa opzione è utile per la risoluzione dei problemi relativi alla scheda grafica e ai driver. La modifica di questa opzione richiede il riavvio dell'applicazione. |
| **Usa OpenGL VBO (Vertex Buffer Object)** | Se selezionato, [Vertex Buffer Objects](https://en.wikipedia.org/wiki/Vertex_Buffer_Object) (VBO) sarà usato. Un VBO è [OpenGL OpenGL](https://it.wikipedia.org/wiki/OpenGL) una funzionalità che fornisce metodi per caricare i dati dei vertici (posizione, vettore normale, colore, ecc.) sulla scheda grafica. I VBO offrono notevoli miglioramenti delle prestazioni perché i dati risiedono nella memoria grafica anziché nella memoria di sistema e quindi possono essere visualizzati direttamente dalla GPU. Per ulteriori informazioni di base, vedere [Understanding OpenGL Objects](https://www.haroldserrano.com/blog/understanding-opengl-objects). |
| **Rendering accelerato** | "Render Cache" or "Render Acceleration" è spiegato più dettagliatamente in [FreeCAD assembly3 render-caching](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link#render-caching). Le opzioni sono:  * **Auto**: Lascia che Coin3D decida dove memorizzare nella cache (impostazione predefinita). * **Distribuita**: Attiva manualmente la cache per tutti i nodi radice del provider di viste. * **Centralizzata**: Disattiva manualmente la cache in tutti i nodi di tutti i provider di viste e memorizza nella cache solo il nodo radice del grafico della scena. Ciò offre la massima velocità di rendering, ma una risposta più lenta a qualsiasi cambio di scena. |
| **Anti-Aliasing** | Specifica se e di che tipo di [multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing) è utilizzato. |
| **Oggetti trasparenti** | Specifica il tipo di rendering degli oggetti trasparenti. Le opzioni sono:  * **Un passaggio**: Il rendering viene eseguito in un passaggio (impostazione predefinita). Questo può portare a artefatti triangolari. Se questi capita, può essere utilizzato il tipo **Passa per le facce nascoste** per evitarlo. * **Passa per le facce nascoste**: Il rendering viene eseguito in due passaggi. I poligoni rivolti all'indietro vengono visualizzati nel primo passaggio e i poligoni rivolti in avanti nel secondo passaggio. |
| **Grandezza segnaposto** | Specifica la dimensione dei [vertici](/Glossary/it#Vertex "Glossary/it") (points) nell'[Ambiente Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"). L'area cliccabile dei punti può essere ulteriormente ampliata aumentando il **raggio di selezione**. |
| **Raggio di selezione (px)** | Imposta l'area per il prelievo degli elementi in [Vista 3D](/3D_view/it "3D view/it"). Un valore maggiore semplifica la selezione delle cose, ma può rendere impossibile la selezione di alcune piccole funzionalità. |
| **Distanza tra gli occhi per la modalità stereo** | Specifica la distanza tra gli occhi utilizzata per le proiezioni stereo. Il valore specificato è un fattore che verrà moltiplicato per la dimensione del [rettangolo di selezione](/Property_editor/it#Vista "Property editor/it") dell'oggetto 3D attualmente visualizzato. |
| **Colore di retroilluminazione** | Se selezionata, la retroilluminazione è abilitata con il colore definito. La retroilluminazione viene utilizzata per il rendering dei lati posteriori delle facce. Di solito, non li vedi nei solidi, a meno che non ne tagli uno con un piano di ritaglio o se le facce non sono orientate correttamente. È usato solo per gli oggetti la cui proprietà Illuminazione (nella scheda Visualizza) è impostata su **Un lato**. Se disabilitato, il lato posteriore delle facce di quegli oggetti sarà nero. La corrispondente impostazione **Intensità** specifica l'intensità della retroilluminazione. |
| **Tipo di camera** | Specifica il tipo di proiezione della telecamera. Le opzioni sono:  * **Vista in prospettiva**: Gli oggetti appariranno in una [vista prospettica](https://it.wikipedia.org/wiki/Prospettiva). * **Vista ortografica**: Gli oggetti appariranno in una [vista ortografica](https://en.wikipedia.org/wiki/Orthographic_projection). |

### Light Sources

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

![](/images/Preferences_Display_Page_Light_Sources.png)

In questa pagina si può specificare quanto segue:

| Name | Description |
| --- | --- |
| **Light source** | If checked, the objects in the [3D view](/3D_view "3D view") are lit by a directional light source and the specified color will be used for it. Without this all objects appear as solid black. |
| **Intensity** | Move the slider to change the intensity of the light. |
| **Direction** | The preview shows the XY plane and a sphere, indicating the light source, connected by a line to a cone, indicating the direction. All elements in the preview, the sphere, the small cone directly attached to it, the line and the large cone, can be dragged to change the direction of the light. For more precision the direction vector can be set by specifying the **x**, **y** and **z** values or the **q0** - **q3** [quaternion](https://en.wikipedia.org/wiki/Quaternion) values. You can zoom the preview in and out with the buttons in the lower left corner. |

### UI

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

![](/images/Preferences_Display_Page_UI.png)

### Navigazione

![](/images/Preferences_Display_Page_Navigation.png)

In questa pagina si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Cubo di navigazione** | Se selezionato, il [Cubo di navigazione](/Navigation_Cube/it "Navigation Cube/it") verrà mostrato nella [Vista 3D](/3D_view/it "3D view/it"). **Passi di rotazione** definisce il numero di passi necessari per una rotazione completa quando si utilizzano le frecce di rotazione del Cubo di navigazione.  Se **Ruota verso il più vicino** è selezionato, la vista 3D viene ruotata secondo logica alla posizione più vicina, in base all'orientamento corrente del cubo, quando si fa clic su una faccia del cubo. In caso contrario, fare clic su una faccia comporterà sempre la stessa rotazione. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")  **Dimensione cubo** definisce la dimensione del cubo. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")  **Color** imposta il colore base di tutti gli elementi. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")  **Corner** definisce dove viene visualizzato il cubo di navigazione nella [Vista 3D](/3D_view/it "3D view/it"). Le opzioni sono:   * **In alto a sinistra** * **In alto a destra** * **In basso a sinistra** * **In basso a destra**   **Nome carattere** specifica il carattere usato per i testi del cubo. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")  **Opacity when inactive** Opacity of the Navigation cube when not hovered by the mouse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Rotation center indicator** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, the rotation center of the view is shown when dragging. The **Sphere size** and the **Color and transparency** of the indicator can be specified.  **Colore pulsanti** imposta il colore di tutti gli elementi intorno al cubo. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |
| **Navigazione 3D** | Specifica uno [stile di navigazione col mouse](/Mouse_navigation/it "Mouse navigation/it"). Per vedere i dettagli di ogni stile, selezionalo e poi premi il pulsante Mouse.... |
| **Stile orbita** | Specifica lo stile dell'orbita di rotazione utilizzato in modalità rotazione. Le opzioni sono:  * **Piatto**: Muovendo il mouse orizzontalmente, la vista ruoterà attorno all'asse Z. * **Trackball**: Spostando il mouse orizzontalmente la vista ruoterà attorno all'asse Y. * **Piatto Libero**: Simile a **Piatto**, ma se possibile l'asse di rotazione viene mantenuto collineare con l'asse della vista 3D globale. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |
| **Modalità di rotazione** | Definisce il centro di rotazione. Le opzioni sono:  * **Centro finestra** * **Trascina al cursore** * **Centro oggetto** |
| **Orientamento predefinito della camera** | Specifica l'orientamento della fotocamera per i nuovi documenti. Questa impostazione viene utilizzata anche dal comando [ViewHome](/Std_ViewHome "Std ViewHome").. |
| **Zoom fotocamera** | Influisce sul livello di zoom iniziale della fotocamera per i nuovi documenti. Il valore impostato è il diametro di una sfera che si adatta alla [Vista 3D](/3D_view/it "3D view/it"). Il valore predefinito è 100 mm. Imposta anche la dimensione iniziale delle feature di origine (piani di base nei nuovi [Corpi Part Design](/PartDesign_Body/it "PartDesign Body/it") e [Parti](/Std_Part/it "Std Part/it")). |
| **Abilita animazione** | Se selezionato e **Navigazione 3D** è impostato su **CAD**, le rotazioni possono essere animate. Se si sposta il mouse mentre si premono la rotellina e il pulsante destro del mouse, la vista viene ruotata. Se si mantiene il mouse in movimento mentre si rilascia il pulsante destro del mouse, la rotazione continuerà. Per terminare questa animazione, fare clic con il tasto sinistro del mouse. |
| **Ingrandimento al cursore** | Se selezionata, le operazioni di zoom verranno eseguite nella posizione del puntatore del mouse. In caso contrario, le operazioni di zoom verranno eseguite al centro della vista corrente. Il **Fattore di zoom** definisce quanto verrà ingrandito. Un passo di zoom di **1** significa un fattore di 7,5 per ogni passo di zoom. |
| **Inverti lo zoom** | Se selezionato, la direzione delle operazioni di zoom sarà invertita. |
| **Disattiva l'inclinazine dai gesti del touch screen** | Se selezionato e **Navigazione 3D** è impostato su **Gesture**, il gesto di inclinazione sarà disabilitato per lo zoom con le dita (zoom con due dita). |
| **Abilita indicazione centro di rotazione** | Se questa opzione è selezionata, durante il trascinamento viene visualizzato il centro di rotazione della vista. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it") |

|-
| **Enable support of legacy space mouse devices** [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
| If checked, legacy space mouse devices can be used. May be backported to version 1.0.1.

|-
| **Animations**
| If checked, view rotations and zooms, except those invoked by mouse actions, are animated. The **Animation duration** can be specified.

**Enable spinning animations** if checked, and if **3D Navigation** is set to **CAD**, rotations invoked by the mouse can be animated as well. If the mouse is moved while the scroll wheel and the right mouse button are pressed, the view is rotated. If one keeps the mouse moving while releasing the right mouse button, the rotation will continue. To end this animation left-click with the mouse.
|}

### Colori

![](/images/Preferences_Display_Page_Colors.png)

Nella scheda *Colori* si può specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Attiva l'evidenziamento di preselezione** | Se selezionato, la preselezione è attivata e verrà utilizzato il colore specificato. La preselezione significa che ad esempio i bordi delle parti verranno evidenziati passandoci sopra con il mouse per indicare che possono essere selezionati. |
| **Attiva l'evidenziamento di selezione** | Se selezionato, l'evidenziazione della selezione è attivata e verrà utilizzato il colore specificato. |
| **Colore semplice** | Se selezionato, lo sfondo della [Vista 3D](/3D_view/it "3D view/it") avrà il colore selezionato. |
| **Gradiente di colore** | Se selezionato, lo sfondo della [Vista 3D](/3D_view/it "3D view/it") avrà una sfumatura di colore verticale. Il primo colore è il colore nella parte superiore della vista 3D, il secondo il colore in basso. |
| Commuta | Premere questo pulsante per commutare la cima ed il fondo dei colori del gradiente. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |
| **Colore centrale** | Questa opzione è abilitata solo se è selezionato **Gradiente di colore**. Se selezionato, il gradiente di colore applicherà il colore selezionato come colore centrale. |
| **Oggetto in fase di modifica** | Specifica il colore di sfondo per gli oggetti nella vista ad albero che sono attualmente in modifica. |
| **Contenitore attivo** | Specifica il colore di sfondo per i contenitori attivi nella vista ad albero. Ad esempio, un [corpo attivo di PartDesign](/PartDesign_Body/it#Stato_attivo "PartDesign Body/it") avrà questo colore. |

### Advanced

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_Advanced.png)

### Visualizzazione Mesh

![](/images/Preferences_Display_Page_Mesh_view.png)

Questa scheda è disponibile solo se è stato caricato l'[Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it").

Nella scheda *Visualizzazione Mesh* puoi specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Colore predefinito della mesh** | Specifica il colore predefinito della faccia. |
| **Colore predefinito della linea** | Specifica il colore predefinito della linea. |
| **Trasparenza della mesh** | Specifica la trasparenza predefinita della mesh. |
| **Trasparenza della linea** | Specifica la trasparenza predefinita della linea. |
| **Render di entrambi i lati** | Se selezionato, il valore predefinito per la proprietà Vista**Lighting** è `Two side` invece di `One side`. `Two side` significa che il colore del lato interno delle facce è lo stesso del colore del lato esterno. `One side` significa che il loro colore è il [Colore di retroilluminazione](#Vista_3D), se abilitato, o il nero. |
| **Mostra contenitore per le mesh evidenziate o selezionate** | Se selezionato, il valore predefinito per la proprietà Vista**Selection Style** è `BoundBox` invece di `Shape`. `BoundBox` significa che viene visualizzato un riquadro di delimitazione evidenziato se le mesh sono evidenziate o selezionate. `Shape` significa che la forma stessa viene quindi evidenziata. |
| **Definisci le normali per vertice** | Se selezionato, viene utilizzato il [Phong shading](https://it.wikipedia.org/wiki/Phong_shading), altrimenti un'ombreggiatura piatta. L'ombreggiatura definisce l'aspetto delle superfici. Con l'ombreggiatura piatta le normali alla superficie non sono definite per vertice. Ciò porta a un aspetto irrealistico per le superfici curve. Mentre l'ombreggiatura Phong porta a un aspetto più realistico e più liscio. |
| **Angolo di piega** | L'angolo di piega è un angolo di soglia tra due facce. Può essere impostato solo se viene utilizzata l'opzione **Definisci le normali per vertice**. Se l'angolo della faccia ≥ angolo di piega, viene utilizzata l'ombreggiatura della sfaccettatura.  Se l'angolo della faccia < l'angolo di piega, viene utilizzata l'ombreggiatura uniforme. |

## Ambienti di lavoro

Questa sezione delle preferenze ha un'unica scheda: Ambienti di Lavoro Disponibili.

### Ambienti Disponibili

![](/images/Preferences_Workbenches_Page_Available_Workbenches.png)

Queste preferenze controllano il caricamento dell'ambiente.

Nella scheda *Ambienti di Lavoro Disponibili* è possibile specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Ambienti di Lavoro Disponibili** | L'elenco visualizza tutti gli ambienti di lavoro installati. L'elenco può essere riordinato trascinandolo ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e ordinato facendo clic con il pulsante destro del mouse sull'elenco e selezionando **Ordina alfabeticamente** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")). L'ordine dell'elenco determina anche l'ordine del [Selettore dell'ambiente di lavoro](/Std_Workbench/it "Std Workbench/it").  * [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it"): **Prima casella di spunta in ogni riga**: Se selezionata, il workbench sarà disponibile nel selettore degli ambienti di lavoro nella prossima sessione di FreeCAD. L'ambiente di avvio non può essere deselezionato. Gli ambienti di lavoro non selezionati vengono spostati in fondo all'elenco. * **Autocaricamento**: Se selezionato, l'ambiente verrà caricato automaticamente all'avvio di FreeCAD. Il caricamento di più ambienti renderà l'avvio più lento, ma il passaggio tra ambienti, che sono già stati caricati, è più veloce. * Carica adesso: Premere questo pulsante per caricare l'ambiente di lavoro nella sessione corrente di FreeCAD. |
| **Autocaricamento** | L'ambiente di lavoro che viene caricato all'avvio di FreeCAD. |
| **Posizione selettore ambiente di lavoro** [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") | Definisce dove appare il [selettore Workbench](/Std_Workbench/it "Std Workbench/it"). Le opzioni sono:  * **Toolbar**: In una barra degli strumenti dedicata. * **Angolo sinistro**: Nell'angolo sinistro della barra dei menu. * **Angolo destro**: Nell'angolo destro della barra dei menu. |
| **Ricorda il workbench attivo nella scheda** | Se selezionato, FreeCAD ricorderà e ripristinerà l'ambiente di lavoro che era attivo per ciascuna scheda nell'[Area di visualizzazione principale](/Main_view_area/it "Main view area/it"). |

## Python

Questa sezione delle preferenze ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) ha tre schede: Macro, Console Python ed Editor.

### Macro

![](/images/Preferences_Python_Page_Macro.png)

Nella scheda *Macro* è possibile specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Esegui le macro in ambiente locale** | Se selezionato, le variabili definite dalle macro vengono create come variabili locali, altrimenti come variabile Python globali |
| **Percorso macro** | Specifica il percorso dei file macro |
| **Registra i comandi GUI** | Se selezionato, le [macro registrate](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it") conterranno anche i comandi dell'interfaccia utente |
| **Registra come commento** | Se selezionato, le [macro registrate](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it") conterranno anche i comandi dell'interfaccia utente ma come commenti. Ciò è utile se non si desidera eseguire azioni visibili durante l'esecuzione della macro ma per rendere visibile cosa si potrebbe fare. |
| **Mostra lo script dei comandi nella console Python** | Se selezionato, i comandi eseguiti dagli script macro vengono visualizzati nella console Python. Questa console viene visualizzata utilizzando il menu **Visualizza → Pannelli → Console Python**. |
| **Dimensione dell'elenco delle macro recenti** | Controlla il numero di macro recenti da visualizzare nel menu. |
| **Keyboard Shortcut count** | Controlla il numero di macro recenti a cui vengono assegnate in modo dinamico le scorciatoie. |
| **Modificatori tastiera** | Controlla quali modificatori di tastiera vengono utilizzati per le scorciatoie, ad esempio **Ctrl+Shift+** crea scorciatoie sotto forma di **Ctrl+Shift+1**, **Ctrl+Shift+2**, eccetera. |

### Console Python

![](/images/Preferences_Python_Page_General.png)

Queste preferenze controllano il comportamento della [console Python](/Python_console/it "Python console/it"). Questa console può essere aperta utilizzando l'opzione di menu **Visualizza → Pannelli → Console Python**.

Nota che le impostazioni di colore e carattere per la console sono definite nella scheda [Editor](#Editor).

Nella scheda *Console Python* ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")) puoi specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Abilita il ritorno a capo automatico** | Se selezionata, le parole andranno a capo se superano lo spazio orizzontale disponibile nella console. |
| **Abilita il cursore a blocco** | Se selezionato, il cursore avrà la forma di un blocco. |
| **Salva la cronologia** | Se selezionata, la cronologia di Python viene salvata tra le sessioni. |

### Editor

![](/images/Preferences_Python_Page_Editor.png)

Queste preferenze controllano il comportamento dell'[Editor macro](/Std_DlgMacroExecute/it#Edit "Std DlgMacroExecute/it"). Questo editor può essere aperto utilizzando l'opzione di menu **Macro → Macro... → Modifica** o **Crea**.

Le impostazioni del colore e del carattere vengono utilizzate anche dalla [console Python](#Python_console/it).

Nella scheda *Editor* è possibile specificare quanto segue

| Nome | Descrizione |
| --- | --- |
| **Abilita la numerazione delle righe** | Se selezionato, le righe del codice saranno numerate. |
| **Abilita il cursore a blocco** | Se selezionato, il cursore avrà la forma di un blocco. |
| **Dimensione della tabulazione** | Specifica il raster della tabulatore (quanti spazi). Se ad esempio è impostato su **6**, premendo Tab si passerà al carattere 7 o 13 o 19 ecc., a seconda della posizione corrente del cursore. Questa impostazione viene utilizzata solo se è selezionato **Mantieni le tabulazioni**. |
| **Dimensione dell'indentazione** | Specifica quanti spazi verranno inseriti quando si preme Tab. Questa impostazione viene utilizzata solo se è selezionato **Inserisci gli spazi**. |
| **Mantieni le tabulazioni** | Se selezionato, premendo Tab verrà inserita una tabulazione con il raster definito da **Dimensione della tabulazione**. |
| **Inserisci gli spazi** | Se selezionato, premendo Tab verrà inserito il numero di spazi definito da **Dimensione dell'indentazione**. |
| **Visualizza gli elementi** | Selezione del tipo di codice. Le impostazioni di colore e di carattere verranno applicate al tipo selezionato. Il risultato può essere visto nel campo **Anteprima**. |
| **Tipo di carattere** | Specifica la famiglia di caratteri che deve essere utilizzata per il tipo di codice selezionato |
| **Dimensione** | Specifica la dimensione del carattere da utilizzare per il tipo di codice selezionato |
| **Colore** | Specifica il colore da utilizzare per il tipo di codice selezionato. |

## Addon Manager

Questa sezione delle preferenze ha un'unica scheda: Opzioni di Addon manager.

### Opzioni di Addon manager

![](/images/Preferences_Addon_Manager_Page_Addon_manager_options.png)

Queste preferenze controllano il comportamento dell'[Addon manager](/Std_AddonMgr/it "Std AddonMgr/it").

Nella scheda *Opzioni di Addon manager* ([disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")) puoi specificare quanto segue:

| Nome | Descrizione |
| --- | --- |
| **Controlla automaticamente gli aggiornamenti all'avvio (richiede git)** | Se selezionato, il gestore dei componenti aggiuntivi verificherà la presenza di aggiornamenti all'avvio. Git deve essere installato affinché funzioni. |
| **Scarica Macro metadati (circa 10MB)** | Se selezionato, i metadati delle macro vengono scaricati per la visualizzazione nell'elenco dei componenti aggiuntivi principali del gestore dei componenti aggiuntivi. Questi dati vengono memorizzati nella cache locale. |
| **Frequenza aggiornamento cache** | Controlla la frequenza con cui vengono aggiornate le informazioni sui metadati e sulla disponibilità del componente aggiuntivo memorizzato nella cache locale. Le opzioni sono:  * **Manuale (nessun aggiornamento automatico)** * **Giornaliero** * **Settimanale** |
| **Nascondi Addons contrassegnati con solo Python 2** | Se selezionato, i componenti aggiuntivi contrassegnati come "Solo Python 2" non sono inclusi nell'elenco. È improbabile che questi componenti aggiuntivi funzionino nella versione corrente di FreeCAD. |
| **Nascondi gli Addons contrassegnati obsoleti** | Se selezionato, i componenti aggiuntivi contrassegnati come "Obsoleti" non sono inclusi nell'elenco. |
| **Nascondi gli addons che richiedono una nuova versione di FreeCAD** | Se selezionato, i componenti aggiuntivi che richiedono una versione più recente di FreeCAD non sono inclusi nell'elenco. |
| **Repository personalizzati** | I repository personalizzati possono essere specificati qui. Per aggiungere un repository premere il pulsante . Sia il **Repository URL** che il **Branch**, tipicamente `master` o `main`, devono essere specificati nella finestra di dialogo che si apre. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")  Per rimuovere un repository selezionalo nell'elenco e premere il pulsante . [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |
| **Proxy** | Il gestore Addon include il supporto sperimentale per i proxy che richiedono l'autenticazione, impostati come proxy definiti dall'utente. |
| **Eseguibile Python (opzionale)** | Il gestore Addon tenta di determinare l'eseguibile Python da utilizzare per l'installazione automatica basata su pip delle dipendenze Python. Per ignorare questa selezione, è possibile impostare qui il percorso dell'eseguibile. |
| **git eseguibile (opzionale)** | Il gestore Addon tenta di determinare l'eseguibile git. Per ignorare questa selezione, è possibile impostare qui il percorso dell'eseguibile. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |
| **Mostra l'opzione per cambiare i rami (richiede git)** | Se selezionato, il gestore Addon fornisce un'interfaccia nella schermata dei dettagli dell'addon che consente di cambiare quale ramo git è attualmente estratto. Questo è destinato solo agli utenti esperti, poiché è possibile che una versione non primaria di un componente aggiuntivo possa causare problemi di instabilità e compatibilità. Git deve essere installato affinché funzioni. Usare con cautela. |
| **Disabilita git (torna solo agli scaricamenti ZIP)** | Se selezionato, i download di git sono disabilitati. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |
| **Addon modalità sviluppatore** | Se selezionato, vengono attivate le opzioni del gestore Addon destinate agli sviluppatori di addons. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it") |

## Import-Export

Le preferenze Importa/Esporta influiscono sulla modalità di importazione ed esportazione dei file. Sono descritte nella pagina [Preferenze di Importa/Esporta](/Import_Export_Preferences/it "Import Export Preferences/it").

## Measure

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This preferences group has a single page: Appearance.

### Appearance

![](/images/Preferences_Measure_Page_Appearance.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Text size** | Specifies the size of the text in pixels. |
| **Text color** | Specifies the color of the text. |
| **Line color** | Specifies the color of the line connecting the text label with the measured element(s). |
| **Background color** | Specifies the background color of the text label. |

## Preferenze relative agli Ambienti di Lavoro

Le preferenze per gli ambienti di lavoro integrati sono elencate nei link seguenti. Questi collegamenti sono elencati anche in [Category:Preferences](/Category:Preferences "Category:Preferences"). Alcuni ambienti di lavoro non hanno preferenze.

* [Preferenze dell'ambiente Arch](/Arch_Preferences/it "Arch Preferences/it")
* [Preferenze dell'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it")
* [Preferenze dell'ambiente FEM](/FEM_Preferences/it "FEM Preferences/it")
* Preferenze dell'ambiente Inspection (nessuna)
* [Preferenze dell'ambiente Mesh](/Mesh_Workbench/it#Preferenze "Mesh Workbench/it")
* [Preferenze dell'ambiente OpenSCAD](/OpenSCAD_Preferences/it "OpenSCAD Preferences/it")
* Preferenze dell'ambiente Part: l'ambiente di lavoro Part utilizza le [Preferenze dell'ambiente PartDesign](/PartDesign_Preferences/it "PartDesign Preferences/it")
* [Preferenze dell'ambiente PartDesign](/PartDesign_Preferences/it "PartDesign Preferences/it")
* [Preferenze dell'ambiente Path](/Path_Preferences/it "Path Preferences/it")
* Preferenze dell'ambiente Points (nessuna)
* [Preferenze dell'ambiente Raytracing](/Raytracing_Preferences/it "Raytracing Preferences/it")
* Preferenze dell'ambiente Reverse Engineering (nessuna)
* Preferenze dell'ambiente Robot (nessuna)
* [Preferenze dell'ambiente Sketcher](/Sketcher_Preferences/it "Sketcher Preferences/it")
* [Preferenze dell'ambiente Spreadsheet](/Spreadsheet_Preferences/it "Spreadsheet Preferences/it")
* [Preferenze dell'ambiente Start](/Start_Preferences/it "Start Preferences/it")
* Preferenze dell'ambiente Surface (nessuna)
* [Preferenze dell'ambiente TechDraw](/TechDraw_Preferences/it "TechDraw Preferences/it")
* Preferenze dell'ambiente Test Framework (nessuna)
* Preferenze dell'ambiente Web (nessuna)

## Scripting

See [Std DlgParameter](/Std_DlgParameter#Scripting "Std DlgParameter").

## Correlazioni

* [Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it")
* [Ottimizzare l'installazione](/Fine-tuning/it "Fine-tuning/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Preferences_Editor/it&oldid=1542523>"