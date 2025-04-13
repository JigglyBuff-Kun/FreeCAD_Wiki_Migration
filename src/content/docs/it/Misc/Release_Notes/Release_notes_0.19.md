---
title: Note di rilascio della versione 0.19
---
**FreeCAD 0.19** è stato rilasciato il **20 marzo 2021**, scaricalo dalla pagina [Download](/Download/it "Download/it"). Questa è una sintesi delle modifiche più interessanti. L'elenco completo delle modifiche è disponibile nel [MantisBT bugtracker FC 0.19 changelog](https://www.freecadweb.org/tracker/changelog_page.php?version_id=122).

Le note di rilascio delle versioni precedenti di FreeCAD sono disponibili alla pagina [Funzionalità](/Feature_list/it#Note_di_rilascio "Feature list/it").

![](/images/FreeCAD_release_0.19_main.jpg)

*Simpson e Shipton motore a vapore a corsa breve del 1845 (circa), con pistone rotante orizzontale, realizzato da "un1corn", [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=24&t=39024).*

## Punti salienti

|  |  |
| --- | --- |
|  | Motore a vapore orizzontale a 4 cilindri con valvola rotante, realizzato da "un1corn", [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=24&t=38602). |

|  |  |
| --- | --- |
|  | Progettazione preliminare di MAORY, un modulo di ottica adattiva (AO) per l'European Extremely Large Telescope (E-ELT); qui è montato sulla piattaforma E-ELT Nasmyth. Questo assieme è stato realizzato da "Zolko", autore del nuovo [Assembly4](/Assembly4_Workbench/it "Assembly4 Workbench/it"), che utilizza il nuovo potente oggetto [App Link](/App_Link/it "App Link/it") per importare migliaia di parti e sottoassiemi diversi, disponendoli in posizioni specificate mediante espressioni matematiche. Vedere [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=24&t=42624).  Per questo modello, le parti non sono state progettate in FreeCAD, sono state solo importate in formato STEP e successivamente disposte con Assembly4. |

|  |  |
| --- | --- |
|  | Giunto omocinetico M. GECIK, dell'utente "ppemawm", vedere [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=20&p=379220#p377075). Il modello è decodificato dai singoli file STL di Thingiverse dall'autore originale, [NOP21](https://www.thingiverse.com/thing:4191753). Si prega di notare la licenza dei file originali. I file STL sono stati scaricati, salvati e importati in FreeCAD e sono stati assemblati manualmente utilizzando lo strumento [Trasforma](/Std_TransformManip/it "Std TransformManip/it"); questa [mesh](/Mesh/it "Mesh/it") [assembly](/Assembly "Assembly") è stata utilizzata come riferimento per creare [bodies](/Body/it "Body/it") solidi con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") e successivamente assemblarli utilizzando il nuovo [Assembly4](/Assembly4_Workbench/it "Assembly4 Workbench/it").  La modellazione è iniziata con Assembly4 e ogni parte è stata creata nel contesto facendo riferimento al modello STL per la quoatatura degli [schizzi](/Sketch/it "Sketch/it"); gli schizzi sono stati creati in scala 1:1 con il modello STL sullo sfondo. |

|  |  |
| --- | --- |
|  | Il  [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it"), che ha sostituito l'ambiente  [Drawing](/Drawing_Workbench/it "Drawing Workbench/it") in  [v0.17](/Release_notes_0.17/it "Release notes 0.17/it"), è stato aggiornato in modo importante. Ha molte nuove funzionalità rispetto a [v0.18](/Release_notes_0.18/it "Release notes 0.18/it"), che lo rendono molto più utile per produrre illustrazioni tecniche di solidi 3D. Tra i tanti piccoli miglioramenti, le nuove funzionalità includono: le quote sono ora conformi a uno degli standard ISO 129-1 o ASME Y14.5M; nuove [pallinature](/TechDraw_Balloon/it "TechDraw Balloon/it") per includere il testo all'interno di una forma circolare o poligonale; nuove [blocchi di testo](/TechDraw_RichTextAnnotation/it "TechDraw RichTextAnnotation/it") per includere grandi paragrafi formattati in grassetto o corsivo; [vertici cosmetici](/TechDraw_CosmeticVertex/it "TechDraw CosmeticVertex/it") e [linee di centro](/TechDraw_FaceCenterLine/it "TechDraw FaceCenterLine/it") che non fanno parte del modello originale ma che possono essere utilizzati per creare dimensioni personalizzate; supporto di base per [informazioni di saldatura](/TechDraw_WeldSymbol/it "TechDraw WeldSymbol/it"); nuova modalità [vista attiva](/TechDraw_ActiveView/it "TechDraw ActiveView/it") per scattare una "istantanea" della [Vista 3D](/3D_view/it "3D view/it"); nuovi modelli di base per i formati ISO (da A0 a A4), nonché modelli in lingua russa e cinese; nuove quote orizzontali e verticali che misurano la [estensione orizzontale](/TechDraw_HorizontalExtentDimension/it "TechDraw HorizontalExtentDimension/it"); I tratteggi faccia SVG sono ora disponibili quando la pagina viene esportata in SVG; il nuovo oggetto [App Link](/App_Link/it "App Link/it") è ora supportato anche come origine per la creazione di viste, utile quando si lavora con [assemblaggi](/Assembly/it "Assembly/it"). |

## Aspetti generali

Con oltre 8128 commit nel ramo master dalla versione 0.18, questa è una delle versioni più estese di sempre, con diversi nuovi componenti come il nuovo oggetto "App::Link", oltre a molti nuovi strumenti nell'ambiente [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") che rendono FreeCAD ancora più potente per la modellazione e l'assemblaggio di solidi 3D. Inoltre, l'ecosistema di FreeCAD ha continuato a crescere con ulteriori [ambienti di lavoro esterni](/External_workbenches/it "External workbenches/it") specializzati.

### Python 3 e Qt5

Lo sforzo di migrare da Python 2 e Qt4 a Python 3 e Qt5 è sostanzialmente completo e la maggior parte degli sviluppatori è passata agli strumenti di Python3 e Qt5.

Indubbiamente ci sono bug imprevisti; questi saranno affrontati man mano che vengono segnalati. Qualsiasi dipendenza esistente da Python 2 o Qt4 non sarà supportata oltre il 1 ° gennaio 2020, data in cui Python 2 diventerà ufficialmente non più supportato dalla Python Foundation. Notare che alcuni componenti aggiuntivi non sono stati ancora portati su Python3 e Qt5. Ciò può essere dovuto a diversi motivi tra cui la mancanza di tempo da parte dei loro sviluppatori o dipendenze interrotte che potrebbero non essere facilmente risolvibili o semplicemente perché l'addon è considerato obsoleto. Le persone interessate alla migrazione di un particolare ambiente di lavoro o strumento sono incoraggiate a partecipare al [forum di FreeCAD](https://forum.freecadweb.org/); vedere anche [Python3 and Qt5 Compatible Addon Workbenches (in preparazione per 0.18)](https://forum.freecadweb.org/viewtopic.php?f=10&t=30624).

#### Alcuni problemi

Risolto il problema con la visibilità dei contenitori [Part](/Std_Part/it "Std Part/it") quando il viewport è visualizzato a schermo intero in Qt5:

* Impostato `Qt::AA_ShareOpenGLContexts` per Qt 5.9 e superiori; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=3&t=36744#p312444), [commit 2a1dd8415](https://github.com/FreeCAD/FreeCAD/commit/2a1dd8415) e [https: //github.com/FreeCAD/FreeCAD/commit/57b3ca6f77c3bc3a7fdb802f2e8a9fcf466f5e3a commit 57b3ca6f77].
* Disabilitato il supporto del pulsante ESC in `View3DInventor::keyEvent()` per Qt5 per evitare artefatti di rendering correlati alla modalità di visualizzazione MDI; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=3&t=36744#p312444), [commit 960d612547](https://github.com/FreeCAD/FreeCAD/commit/960d6125473ee27f37835145348be382436dd274).
* Risolto bug in `MainWindow::setActiveWindow` per evitare un crash al ritorno dallo schermo intero; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?p=326093#p326093), [commit c4e34ed9b](https://github.com/FreeCAD/FreeCAD/commit/c4e34ed9b).
* Risolto [issue #4088](https://freecadweb.org/tracker/view.php?id=4088) relativo alla visibilità dell'origine di una parte che cambia quando si sgancia la vista 3D; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?p=326093#p326093), [commit 1e19ef5be](https://github.com/FreeCAD/FreeCAD/commit/1e19ef5be).
* Risolto [issue #3130](https://freecadweb.org/tracker/view.php?id=0003130) sui bug Qt5 quando si utilizza un monitor esterno ad alta risoluzione; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=10&t=34916), [commit 2f2d505359](https://github.com/FreeCAD/FreeCAD/commit/2f2d5053599785fdc8db481682746066911033b4).

### Sviluppo

Per [compilare FreeCAD sotto Windows](/Compile_on_Windows/it "Compile on Windows/it"), sono disponibili diversi Libpack (librerie preconfezionate):

* Libpack per Windows con Qt 5.12, OCC 7.3 e Python 3.6; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=4&t=35789).
* Libpack per Windows con Qt 5.12.6, OCC 7.4; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=4&t=42945), [pull request #2944](https://github.com/FreeCAD/FreeCAD/pull/2944).
* [Libpack 12.5.1](https://github.com/apeltauer/FreeCAD/releases/tag/LibPack_12.5.1) per Windows con Qt 5.15, OCC 7.5 e Python 3.8; [discussione nel forum](https://forum.freecadweb.org/viewtopic.php?f=10&t=55077&start=150#p482128)

Altre notizie sullo sviluppo:

* C'è un nuovo contenitore Docker per compilare FreeCAD, vedi [Compilazione con Docker](/Compile_on_Docker/it "Compile on Docker/it"); [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=4&t=42954).
* L'infrastruttura del bug tracker e del wiki è stata spostata su un server dedicato, in modo che sia più facile da gestire da parte degli amministratori del progetto; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=8&t=42795).

### Documentazione

* La pagina [Compilare su Linux](/Compile_on_Linux/it "Compile on Linux/it") è stata rivista per spiegare meglio i requisiti per compilare su diverse distribuzioni Linux. Poiché molti sviluppatori utilizzano sistemi basati su Debian, questa sezione ha ricevuto la massima attenzione. Gli utenti di altre distribuzioni Linux sono incoraggiati a mantenere la documentazione per la loro particolare distribuzione.
* Anche la pagina [Compilare su Windows](/Compile_on_Windows/it "Compile on Windows/it") è stato riscritta per spiegare come usare il LibPack per la compilazione.
* [Compilazione su Docker](/Compile_on_Docker/it "Compile on Docker/it") è stato creato per descrivere la compilazione in questo sistema.
* Anche la pagina [Documentazione del codice sorgente](/Source_documentation/it "Source documentation/it") ha ricevuto una pulizia per spiegare meglio come produrre la documentazione di programmazione (API) dai sorgenti C++ e Python.
* La pagina [Doxygen](/Doxygen/it "Doxygen/it") è stata rivista ed estesa per fornire maggiori dettagli sulla sintassi utilizzata nei file C++ per produrre la documentazione di programmazione.
* Anche la pagina [Gestione del codice sorgente](/Source_code_management/it "Source code management/it") è stata rielaborata con migliori descrizioni ed esempi sull'uso di `git` per gestire rami e contribuire al codice.
* La pagina [Ambienti di lavoro esterni](/External_workbenches/it "External workbenches/it") è stata riorganizzata, in modo da elencare tutti gli ambienti ricchi di funzionalità e disponibili al pubblico. Se si desideri aggiungere un workbench a questa pagina, comunicarlo nel forum e fornire le informazioni di supporto come il manuale dell'utente, le pagine wiki e un link al suo repository. Quindi spingere per includerlo in [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it").
* Sono stati apportati miglioramenti alle pagine [Tutorial](/Tutorials/it "Tutorials/it") e [Video tutorial](/Video_tutorials/it "Video tutorials/it"). In particolare, è stato sottolineato ai lettori che dovrebbero prendere in considerazione solo i tutorial video realizzati con le versioni 0.17 e successive.

### Limitazioni note

* Schermo nero a causa dei driver della scheda video, durante l'esecuzione di FreeCAD all'interno di una macchina virtuale; [problema #3939](https://freecadweb.org/tracker/view.php?id=3939).
* Il joystick USB Logitech Wingman può causare un comportamento irregolare durante la rotazione e lo zoom della vista; [discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=3&t=36712&start=10).
* La navigazione gestuale è completamente supportata per Windows ma deve ancora essere mantenuta in Linux e MacOS. Problema: lo sviluppatore, DeepSOIC, non ha una macchina MacOS con il suo trackpad speciale, e non l'ha nemmeno testata su Linux; [discussione nel forum](https://forum.freecadweb.org/viewtopic.php?p=308403#p308402).

## Interfaccia utente

|  |  |
| --- | --- |
|  | Il cubo di navigazione ha subito alcuni ritocchi; ora utilizza la trasparenza per facilitare la vista e le frecce sono più grandi per migliorare il clic su di esse. [Discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=34&t=35523), [pull request](https://github.com/FreeCAD/FreeCAD/pull/2076). |
|  | Il cubo di navigazione può essere ampliato dall'addon CubeMenu, che consente di configurare il menu che si apre, nonché la dimensione del cubo stesso. Ciò è particolarmente utile per schermi ad altissima risoluzione, in cui la dimensione predefinita è troppo piccola. Questo è uno strumento esterno che può essere installato da [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). [Discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=34&t=43338); Repository [CubeMenu](https://github.com/triplus/CubeMenu) (LGPL 2.1). |
|  | C'è una nuova [opzione delle preferenze](/Preferences_Editor/it#Selezione "Preferences Editor/it") per visualizzare le caselle di selezione davanti a ogni elemento della [vista ad albero](/Tree_view/it "Tree view/it"). Ciò è utile, ad esempio, per selezionare diversi elementi tramite un touchscreen. [Discussione del forum](https://forum.freecadweb.org/viewtopic.php?f=34&t=53065); [richiesta pull](https://github.com/FreeCAD/FreeCAD/pull/4250). |
|  | New COIL icon theme developed by user *1D\_Inc*. This is a minimalistic icon set inspired on Blender's 2.8 outline-style icons (a coil of threads or strands alludes to the appearance of the icons). The intention is to have professional-looking icons that can be used with different color themes, including light, dark, and monochrome. [Forum discussion 1](https://forum.freecadweb.org/viewtopic.php?p=287840#p287840) (old thread), [discussion 2](https://forum.freecadweb.org/viewtopic.php?f=34&t=34687) (main thread), [1D\_SVG\_Tools repository](https://github.com/formjune/1D_SVG_Tools). |
|  | New icon theme management developed by user *triplus*. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=17901&start=30#p294975). |
|  | New dark stylesheet developed by user *userzmp2000*. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=11419&start=120#p305844), [BlenderLike-dark.qss](https://github.com/zmp2000/FreeCAD/blob/master/src/Gui/Stylesheets/BlenderLike-dark.qss). |
|  | Dark themes by user *pablogil*. Blue, green, and orange variations, which are darker than previous templates. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=38851), [pull request #2433](https://github.com/FreeCAD/FreeCAD/pull/2433), [#2920](https://github.com/FreeCAD/FreeCAD/pull/2920), [#2933](https://github.com/FreeCAD/FreeCAD/pull/2933). |
|  | The [Std ViewScreenShot](/Std_ViewScreenShot "Std ViewScreenShot") tool now supports transparency. Options are available by clicking the Extended button and changing the **Image Properties** section. [Wiki](https://wiki.freecadweb.org/Std_ViewScreenShot#Creation_method), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=41950&start=10), [commit 8e5151002](https://github.com/FreeCAD/FreeCAD/commit/8e5151002). |

## App::Link e assemblaggio

![](/images/Link.svg) ![](/images/AppLink.png)

![](/images/AppLink.png)

L'oggetto "App::Link" consente il collegamento leggero di oggetti in un documento e da documenti esterni.

Dopo 2,5 anni di sviluppo, l'oggetto "[Link](/Std_LinkMake/it "Std LinkMake/it")", o più formalmente `App::Link`, è stato introdotto in FreeCAD. Questo è un tipo speciale di `App::DocumentObject` con alcune proprietà che, si spera, consentiranno di semplificare gli assemblaggi.

Un "Link" consente agli oggetti di utilizzare i dati di un altro oggetto, come la geometria o anche la loro rappresentazione visiva 3D, negli stessi file o in file diversi. Può essere pensato come un leggero clone assoluto o come lo stesso oggetto che vive in due "istanze" diverse. Alcune funzionalità offerte da un "Link" sono già presenti in alcuni ambienti come [Arch](/Arch_Workbench/it "Arch Workbench/it") e [BIM](/BIM_Workbench/it "BIM Workbench/it") ([cloni](/Draft_Clone/it "Draft Clone/it"), [riferimenti esterni](/Arch_Reference/it "Arch Reference/it") ), ma l'implementazione di "Link" è al livello principale e può quindi essere utilizzato da tutti gli ambienti in diversi modi.

Il componente "Link" è stato pensato e sviluppato quasi interamente dall'utente *realthunder*. Le motivazioni e le implementazioni progettuali alla base di questo progetto sono descritte nella sua pagina GitHub, [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link). Per realizzare questa funzione, sono state apportate diverse modifiche fondamentali a FreeCAD; queste modifiche sono ampiamente documentate in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

La storia di "Link" può essere rintracciata tramite alcune discussioni essenziali del forum:

* [Why an object can only be inside one App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) (March 2017)
* [Introducing App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) (March 2017)
* [Links](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) (May 2017)
* [Realthunder Link implementation: Architecture discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) (June 2017)
* [PR #876: Link, stage one, context aware selection](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) (July 2017)
* [Preview: Link, stage two, API groundwork](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) (July 2017)
* [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (December 2017)
* [Merging of my Link branch](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) (June 2018)

Finally, the pull request and merge happened:

* [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), old thread (July 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (the BIG merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge).
* [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), main thread (July 2019)
* [A simple path description of Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (August 2019)
* [PR#2559: expose link and navigation actions](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), an introduction to the Link feature in 0.19 (September 2019).

The "App Link" object prepares FreeCAD for the phase that was scheduled to happen after the redesign of [PartDesign in FreeCAD 0.17](/Release_notes_0.17 "Release notes 0.17"), which is working with assemblies.

[Assembly3](/Assembly3_Workbench "Assembly3 Workbench") is an assembly workbench written in Python by realthunder, that makes use of the "App Link" functionality. The workbench served as a testbed for this component during its development. While Assembly3 is still not officially part of FreeCAD, with the inclusion of "App Link" in the master branch, it is a matter of time for Assembly3 to be provided as an installable add-on, just like [A2plus](/A2plus_Workbench "A2plus Workbench") and [Assembly4](/Assembly4_Workbench "Assembly4 Workbench") are provided currently.

## Core system, App, Base, and Gui namespaces

Beside the introduction of [App Link](/App_Link "App Link"), the "LinkMerge" branch also introduced some changes visible to the user with regards to object properties, [expressions](/Expressions "Expressions"), [visual selection](/Selection_methods "Selection methods"), and the [tree view](/Tree_view "Tree view"). These are described in the [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes) page.

|  |  |
| --- | --- |
|  | Dynamic properties can be added to any C++ or Python object. This can make macros such as [Macro PropertyMemo](/Macro_PropertyMemo "Macro PropertyMemo") obsolete. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=328913#p328913), [animated GIF](http://www.freecadweb.org/wiki/images/3/3d/Custom-property.gif) example. |
|  | These dynamic properties were added in the [App Link](/App_Link "App Link") merge; [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350). |
|  | Selected elements hidden by other elements are highlighted to indicate their position within the model. These selection enhancement were also introduced in the [App Link](/App_Link "App Link") merge; [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350). |
|  | After two years being stalled, there have been improvements in the way the program handles backup files. Now they can include a timestamp in the format `%Y%m%d-%H%M%S`, instead of a simple number. This can be set in the [preferences editor](/Preferences_Editor "Preferences Editor"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=26965&start=20#p217186), [pull request #1148](https://github.com/FreeCAD/FreeCAD/pull/1148). |
|  | New input field to quickly search for parameters in the [parameter editor](/Std_DlgParameter "Std DlgParameter"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=44169), [pull request #3173](https://github.com/FreeCAD/FreeCAD/pull/3173). |
|  | The [Macro menu](/Std_Macro_Menu "Std Macro Menu") now shows a shortcut to recently used [macros](/Macros "Macros"), which can be called with a key combination, for example, Ctrl+Shift+1. This can be configured in the [Macro preferences](/Preferences_Editor "Preferences Editor"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=48342), [pull request #3616](https://github.com/FreeCAD/FreeCAD/pull/3616). |

* Added support for existing Python virtual environments; [pull request #2021](https://github.com/FreeCAD/FreeCAD/pull/2021).
* Pre-select name filter in the import/export dialog; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=8093), [commit e239994](http://github.com/FreeCAD/FreeCAD/commit/e239994),
* Fixed missing application ID and icon on GNOME/Wayland; [pull request #2466](https://github.com/FreeCAD/FreeCAD/pull/2466).
* Added support for Hertz as a physical unit, and added the Frequency [property](/Property "Property"); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=39485), [commit 3500451a0](https://github.com/FreeCAD/FreeCAD/commit/3500451a0), [commit d7ca604c9](https://github.com/FreeCAD/FreeCAD/commit/d7ca604c9).
* Added [Std TextDocument](/Std_TextDocument "Std TextDocument") tool to insert an object to store arbitrary text in the document; [commit 13db5b0560](http://github.com/FreeCAD/FreeCAD/commit/13db5b0560), [commit 53b01f08f9](http://github.com/FreeCAD/FreeCAD/commit/53b01f08f9).
* Added support for further units, Gauss, Weber, Oersted; [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=358223), [pull request #2863](https://github.com/FreeCAD/FreeCAD/pull/2863).
* New commands to get information on the graphical commands, and the shortcuts; `Gui.getCommandInfo(...)`, `Gui.getCommandShortcut(...)`, `Gui.setCommandShortcut(...)`; [forum thread](https://forum.freecadweb.org/viewtopic.php?t=44973&start=30#p417043), [pull request #3710](https://github.com/FreeCAD/FreeCAD/pull/3710).
* New [glTF](/Import_Export#Overview_of_file_formats "Import Export") support (requires OCC 7.5.0) [commit](https://github.com/FreeCAD/FreeCAD/commit/74b866ed3)
* New [WebGL](/Import_Export#Overview_of_file_formats "Import Export") exporter [pull request #4025](https://github.com/FreeCAD/FreeCAD/pull/4025)

## Addon Manager

|  |  |
| --- | --- |
|  | The [Addon Manager](/Std_AddonMgr "Std AddonMgr") was upgraded; it is now able to display more complete information on all [external workbenches](/External_workbenches "External workbenches") and [macros](/Macros_recipes "Macros recipes"), and show an icon for each of them. It also allows checking for updates on start, and using custom repositories. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=37394). |
|  | It will also show information on whether the addon is obsolete, already installed, or available for update. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=37394&p=340109#p340109), [pull request #2605](https://github.com/FreeCAD/FreeCAD/pull/2605). |

## Ambiente Arch

Keep with the latest developments to the [Arch Workbench](/Arch_Workbench "Arch Workbench"), and the [BIM Workbench](/BIM_Workbench "BIM Workbench") that depends on it, by following the main author of this workbench, at
[Uncreated](https://yorik.uncreated.net/blog/freecad). The updates are also posted to the forum, [BIM/Arch development news articles from Yorik's blog](https://forum.freecadweb.org/viewtopic.php?f=23&t=17498).

The developers of [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench"), and [BIM Workbenches](/BIM_Workbench "BIM Workbench") also collaborate with the greater [OSArch community](https://osarch.org), with the ultimate goal of improving building design by using entirely free software.

|  |  |
| --- | --- |
|  | The [Arch Site](/Arch_Site "Arch Site") tool once more is able to produce sun path diagrams if the given latitude, longitude, and declination are provided. This requires Pysolar 0.7 or above, and only works with Python 3. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=36162), [commit 2177f4437](https://github.com/FreeCAD/FreeCAD/commit/2177f4437), [commit c05bc0990](https://github.com/FreeCAD/FreeCAD/commit/c05bc0990). |
|  | The [Arch Site](/Arch_Site "Arch Site") tool now can display a compass to show the direction of the "true North" (declination) in the model. By the default, North is aligned to the Y axis. This is useful when working in real world coordinates. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=34669), [pull request #2111](https://github.com/FreeCAD/FreeCAD/pull/2111), [commit ff1fb11af](https://github.com/FreeCAD/FreeCAD/commit/ff1fb11af), [pull request #2360](https://github.com/FreeCAD/FreeCAD/pull/2360). |
|  | The [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane") tool now has the ability of clipping the view, to act as a camera. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=35861), [commit 9a64f3fad9](https://github.com/FreeCAD/FreeCAD/commit/9a64f3fad9e253b806729137061e83b82adbe9c7). |
|  | The [Arch Fence](/Arch_Fence "Arch Fence") tool was added to produce fence objects starting from a post and a path. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=36149), [pull request #2151](https://github.com/FreeCAD/FreeCAD/pull/2151), [pull request #2173](https://github.com/FreeCAD/FreeCAD/pull/2173), [pull request #2263](https://github.com/FreeCAD/FreeCAD/pull/2263), [pull request #2270](https://github.com/FreeCAD/FreeCAD/pull/2270).  [Arch Fence in action](https://forum.freecadweb.org/viewtopic.php?f=24&t=37121). |
|  | Improvements in the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), which extends the [Arch Rebar](/Arch_Rebar "Arch Rebar") tool. Automated reinforcement graphical user interface: the intention is to facilitate the automatic creation of simple and complex rebars. This development was carried out as a [Google Summer of Code 2019](/Google_Summer_of_Code_2019 "Google Summer of Code 2019") project: [Suraj\_Dadral/gsoc\_proposal](/User:Suraj_Dadral/gsoc_proposal "User:Suraj Dadral/gsoc proposal").  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=35077), [FreeCAD-Reinforcement](https://github.com/amrit3701/FreeCAD-Reinforcement) (master code), [SurajDadral/FreeCAD-Reinforcement](https://github.com/SurajDadral/FreeCAD-Reinforcement) (development fork). |
|  | New rendering modes for [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane") that can be selected when using [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView"), Dati**Render Mode**, `Coin` and `Coin mono`. The section plane generates an SVG that is simply displayed in a TechDraw page; with these new modes, the SVG generation is performed by Coin, so it is faster than using `Wireframe` and `Solid`, which use the internal OCCT kernel to calculate the SVG projection. The tradeoff is between speed and precision; the Coin modes are faster but less precise, while the original modes are more precise but relatively slow. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=38526&start=30#p328350), [commits f93a986b5a](https://github.com/FreeCAD/FreeCAD/commit/f93a986b5a), [ed0eff0248](https://github.com/FreeCAD/FreeCAD/commit/ed0eff0248). |
|  | New [Arch CutLine](/Arch_CutLine "Arch CutLine") tool to cut solid objects, like [Arch Walls](/Arch_Wall "Arch Wall") and [Arch Structure](/Arch_Structure "Arch Structure"), using an edge, like a [Draft Line](/Draft_Line "Draft Line"). This works similar to the existing [Arch CutPlane](/Arch_CutPlane "Arch CutPlane"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40600), [pull request #2701](https://github.com/FreeCAD/FreeCAD/pull/2701), [#2870](https://github.com/FreeCAD/FreeCAD/pull/2870). |
|  | Arch now includes a Shapefile importer, which is commonly used in GIS applications. The importer uses the `shapefile.py` library from the [pyshp](https://github.com/GeospatialPython/pyshp) project; this library should be downloaded on first run. [Forum thread](https://www.forum.freecadweb.org/viewtopic.php?f=9&p=396940#p396536), [commit 916a42397c](https://github.com/FreeCAD/FreeCAD/commit/916a42397c). Image of a site shared by @HnsaCAD for @gemeentearnhem. |
|  | New [Arch Truss](/Arch_Truss "Arch Truss") tool to create a variety of trusses. Like [Arch Walls](/Arch_Wall "Arch Wall") they are constructed from a baseline, and different properties define the shape of the truss, its height, and the intermediate elements. It also supports [Arch MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial") to assign different materials to the bottom, top, and intermediate elements.  [Commit 0c96f77184](https://github.com/FreeCAD/FreeCAD/commit/0c96f77184). |
|  | New [Arch CurtainWall](/Arch_CurtainWall "Arch CurtainWall") tool to create various types of walls. This tool needs a base surface to work on. If none is selected, you can simply draw a line between two points, like the standard [Arch Wall](/Arch_Wall "Arch Wall"). The surface is then subdivided into rows and columns, and four points extracted from the surface subdivisions, forming quadrangular facets. [Commit e42a26fba1](https://github.com/FreeCAD/FreeCAD/commit/e42a26fba1), [commit 7c12c8688c](https://github.com/FreeCAD/FreeCAD/commit/7c12c8688c). |

## Ambiente Draft

|  |  |
| --- | --- |
|  | The [Draft Edit](/Draft_Edit "Draft Edit") tool was upgraded to allow editing many Draft objects at the same time, and also display better trackers. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=33941&start=50#p290648), [pull request #1968](https://github.com/FreeCAD/FreeCAD/pull/1968), [commit 272a8dfcc9](https://github.com/FreeCAD/FreeCAD/commit/272a8dfcc9f91097f6abcd228a3cc18fbecc37db), [commit 7de2248bb](https://github.com/FreeCAD/FreeCAD/commit/7de2248bb), [pull request #2108](https://github.com/FreeCAD/FreeCAD/pull/2108), [pull request #2430](https://github.com/FreeCAD/FreeCAD/pull/2430); [animated GIF](https://www.freecadweb.org/wiki/images/f/f7/V0ODfsN9nY.gif) example.  The tool was also moved into its own module: [commit a4e2df115d](https://github.com/FreeCAD/FreeCAD/commit/a4e2df115d), [commit c351b9094](https://github.com/FreeCAD/FreeCAD/commit/c351b9094). |
|  | New [Draft SubelementHighlight](/Draft_SubelementHighlight "Draft SubelementHighlight") tool to highlight the nodes and edges of certain objects, like [Draft Wires](/Draft_Wire "Draft Wire"), in order to edit them using modifiers like [Draft Move](/Draft_Move "Draft Move"), [Draft Rotate](/Draft_Rotate "Draft Rotate"), and [Draft Scale](/Draft_Scale "Draft Scale"). It allows you to select multiple objects to edit instead of just one. Once the objects are highlighted, you can select specific sub-elements, vertices and edges, and transform (move, rotate, scale) only these. This tool was particularly developed to help edit the shape of [Arch Walls](/Arch_Wall "Arch Wall") that are based on [Draft Wires](/Draft_Wire "Draft Wire"). When various walls are selected, and the tool is used, the base wires automatically become visible, and display their nodes prominently.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=34114), [pull request #1975](https://github.com/FreeCAD/FreeCAD/pull/1975); [video demonstration 1](https://peertube.social/videos/watch/d39d4f3c-b3c8-4a18-b8c4-6719d0f70f48), [2](https://peertube.social/videos/watch/861af3cb-b053-415c-ba31-fae332e916f4). |
|  | New [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") tool, to create 3rd degree Bezier curves in a way similar to Inkscape. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=35397), [pull request #2072](https://github.com/FreeCAD/FreeCAD/pull/2072); [animated GIF](https://www.freecadweb.org/wiki/images/9/97/Draft_3rd_degree_bezier.gif) example. |
|  | New [Draft Arc 3Points](/Draft_Arc_3Points "Draft Arc 3Points") tool, to create circular arcs by specifying three points through which the arc passes. Originally developed in the [BIM Workbench](/BIM_Workbench "BIM Workbench") and then migrated to Draft. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=36332), [commit 4f19a65559](https://github.com/FreeCAD/FreeCAD/commit/4f19a65559), [commit 0b905fade0](https://github.com/FreeCAD/FreeCAD/commit/0b905fade0), [pull request #2286](https://github.com/FreeCAD/FreeCAD/pull/2286).  A proper command line interface as well as unit test are also provided.  [Pull request #3004](https://github.com/FreeCAD/FreeCAD/pull/3004), [#3005](https://github.com/FreeCAD/FreeCAD/pull/3005). |
|  | New [Draft Layer](/Draft_Layer "Draft Layer") tool that replaces the seldom used Draft VisGroup, providing a true layer system as it exists in other CAD systems. Draft Layer supports adding objects by drag-and-drop, controls object visibility and, optionally, object color. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=39&t=36669) (development), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=36852) (announcement), [commit 5ee99ca4ee](https://github.com/FreeCAD/FreeCAD/commit/5ee99ca4ee), [commit 36bc48c9bf](https://github.com/FreeCAD/FreeCAD/commit/36bc48c9bf). |
|  | Improvements in the Draft SVG routines to improve inclusion of 2D projections in [TechDraw](/TechDraw_Workbench "TechDraw Workbench") pages. This benefits tools like [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") and [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), when used with [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") and [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView"). A new Dati**Override Style** property is added to [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView"), in order to choose whether the appearance of Draft objects is kept (new) or is overridden by the TechDraw page (old behavior).  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38940), [commit 3e323fee14](https://github.com/FreeCAD/FreeCAD/commit/3e323fee14). |
|  | New [Draft Fillet](/Draft_Fillet "Draft Fillet") tool that creates a fillet (rounded corner) or a chamfer (straight line) between two simple [Draft Lines](/Draft_Line "Draft Line"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=38715), [pull request #2441](https://github.com/FreeCAD/FreeCAD/pull/2441), [#2492](https://github.com/FreeCAD/FreeCAD/pull/2492). |
|  | The introduction of the [App Link](/App_Link "App Link") object made it possible to create arrays which have many exact references to an existing object instead of shape duplicates (simple copies). This results in more memory efficient arrays. This is possible with the new [Draft LinkArray](/Draft_LinkArray "Draft LinkArray") and [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray") tools. [Draft LinkArray](/Draft_LinkArray "Draft LinkArray") works in three modes, "ortho", "polar", and the new "circular" mode, which was introduced in a separate commit. [Pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350).  After the creation of the Link arrays, a new command called [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") now replaces both [Draft Array](/Draft_Array "Draft Array") and [Draft LinkArray](/Draft_LinkArray "Draft LinkArray"). This [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") is used to create exclusively orthogonal arrays. It shows a task panel similar to [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") and [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"). Therefore, from the toolbar it is now possible to create "orthogonal", "polar" and "circular" arrays from separate buttons. Moreover, the array buttons are collected in a group so that they are organized.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=41816&p=365888#p365878), [pull request #2988](https://github.com/FreeCAD/FreeCAD/pull/2988), [#2972](https://github.com/FreeCAD/FreeCAD/pull/2972). |
|  | New [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") tool to create polar arrays directly. Previously, the same could be done by using the old [Draft Array](/Draft_Array "Draft Array") command, and then modifying the properties of the created object. This [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") tool can create the new [App Link](/App_Link "App Link") objects or the traditional copies.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=41816), [pull request #2824](https://github.com/FreeCAD/FreeCAD/pull/2824). |
|  | The Array object has a new "circular" mode. This is controlled by new properties: Dati**RadialDistance**, Dati**TangentialDistance**, Dati**NumberCircles**, and Dati**Symmetry**. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=13&t=39726), [pull request #2585](https://github.com/FreeCAD/FreeCAD/pull/2585).  Moreover, a new [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") tool was developed to create these circular arrays directly. This tool can create the new [App Link](/App_Link "App Link") objects or the traditional copies.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=41816), [pull request #2824](https://github.com/FreeCAD/FreeCAD/pull/2824). |
|  | The unit tests of the workbench were rewritten and expanded, so that now it is easier to test for errors and regressions when new code is merged. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40405), [pull request #2668](https://github.com/FreeCAD/FreeCAD/pull/2668), [#2727](https://github.com/FreeCAD/FreeCAD/pull/2727), [#2881](https://github.com/FreeCAD/FreeCAD/pull/2881), [#3005](https://github.com/FreeCAD/FreeCAD/pull/3005).  Also, a script is provided in `Mod/Draft/drafttests/draft_test_objects.py`, that produces a test file with most objects of the workbench. This file is useful to learn scripting in Draft, and can also be used to test regressions in the underlying code of the objects.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40405&p=368819#p368819), [pull request #3012](https://github.com/FreeCAD/FreeCAD/pull/3012). |
|  | New icons were provided for the Draft objects in the [tree view](/Tree_view "Tree view"). The objective is to more quickly distinguish the objects at a glance, particularly if the default label is changed. This makes it easier to recognize objects which are lines, curves, geometrical elements, linear, radial, or angular dimensions, or other objects. In addition, all icons were converted to the new standard pixel resolution of 96 dpi, and were saved as Plain SVG, so that we don't introduce non-standard SVG tags.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=43439), [pull request #3051](https://github.com/FreeCAD/FreeCAD/pull/3051), [#3058](https://github.com/FreeCAD/FreeCAD/pull/3058), [#3060](https://github.com/FreeCAD/FreeCAD/pull/3060), [#3070](https://github.com/FreeCAD/FreeCAD/pull/3070), [#3170](https://github.com/FreeCAD/FreeCAD/pull/3170), [#3402](https://github.com/FreeCAD/FreeCAD/pull/3402). |
|  | Undergoing efforts to split tools into their own module files to ease maintenance of the codebase for the future, and facilitate the addition of new tools. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=38593), [overall structure](https://forum.freecadweb.org/viewtopic.php?f=23&t=38593&start=120#p428304).  Some of the functions and classes that have already been moved: [commit 5ee99ca4ee](https://github.com/FreeCAD/FreeCAD/commit/5ee99ca4ee) ([Draft Layer](/Draft_Layer "Draft Layer")), [commit 16c26cb3b1](https://github.com/FreeCAD/FreeCAD/commit/16c26cb3b1) ([Draft Edit](/Draft_Edit "Draft Edit")), [commit 9fb6aec313](https://github.com/FreeCAD/FreeCAD/commit/9fb6aec313) ([Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane")), [pull requests #2823](https://github.com/FreeCAD/FreeCAD/pull/2823) (GuiCommandBase), [#2829](https://github.com/FreeCAD/FreeCAD/pull/2829) (utilities), [#2830](https://github.com/FreeCAD/FreeCAD/pull/2830) (GUI utilities), [#2831](https://github.com/FreeCAD/FreeCAD/pull/2831) (ToDo class), [#2832](https://github.com/FreeCAD/FreeCAD/pull/2832) (translate function), [#3091](https://github.com/FreeCAD/FreeCAD/pull/3091) ([Draft Snap](/Draft_Snap "Draft Snap")), [#3092](https://github.com/FreeCAD/FreeCAD/pull/3092) (Draft Trackers), [#3094](https://github.com/FreeCAD/FreeCAD/pull/3094) ([Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane")), [#3095](https://github.com/FreeCAD/FreeCAD/pull/3095) ([Draft ShapeString](/Draft_ShapeString "Draft ShapeString") task panel), [#3096](https://github.com/FreeCAD/FreeCAD/pull/3096) ([Draft Scale](/Draft_Scale "Draft Scale") task panel), [#3097](https://github.com/FreeCAD/FreeCAD/pull/3097) ([Draft Edit](/Draft_Edit "Draft Edit")), [#3157](https://github.com/FreeCAD/FreeCAD/pull/3157) ([Draft WorkingPlaneProxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy")), [#3182](https://github.com/FreeCAD/FreeCAD/pull/3182) (various Gui Commands), [#3291](https://github.com/FreeCAD/FreeCAD/pull/3291) (base classes `DraftTool`, `Creator`, `Modifier`), [#3299](https://github.com/FreeCAD/FreeCAD/pull/3299), (`Creator` tools), [#3308](https://github.com/FreeCAD/FreeCAD/pull/3308) (`Modifier` tools).  For an overall view of the pull requests, see [#2429](https://github.com/FreeCAD/FreeCAD/pull/2429).  This is a work in progress that requires advancing carefully as we aim to maintain compatibility with previous versions of Draft. Most refactoring is complete, but there is still room for improving many aspects of the workbench. We invite enthusiastic developers to join the effort. |
|  | New [Annotation style editor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor") tool to create styles for annotations. These styles can define things like text font, size, color, and arrows, which can be applied to any of your texts, dimensions or labels. We started by implementing an editor and a system to store the styles in the document. Next steps will be adapting the different annotation objects to support the styles. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=44051), [commit 1b887fa0f5](https://github.com/FreeCAD/FreeCAD/commit/1b887fa0f5), [commit 4555a77663](https://github.com/FreeCAD/FreeCAD/commit/4555a77663), [commit 5b3fea59e0](https://github.com/FreeCAD/FreeCAD/commit/5b3fea59e0). |

### Altro

* The [Draft Wire](/Draft_Wire "Draft Wire") tool now is called "Polyline" in the menu, instead of "DWire"; all options and functionality remain the same, so this doesn't break compatibility; [commit 39e748229e](https://github.com/FreeCAD/FreeCAD/commit/39e748229e67fa93e924e355c0ce0897c870d756).
* A "DraftEditPickRadius" preference was added to control the area of influence of the pointer when picking vertices in edit mode [Draft Edit](/Draft_Edit "Draft Edit"); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40060), [pull request #2642](https://github.com/FreeCAD/FreeCAD/pull/2642), [issue #4162](https://freecadweb.org/tracker/view.php?id=4162).
* Undergoing efforts to document the Python source code (adding complete docstrings), in order to produce better programming documentation that can be used by both users and developers. See [Source documentation](/Source_documentation "Source documentation") for instructions on generating the documentation with [Doxygen](/Doxygen "Doxygen").
* The "Toolbar mode" when launching the Draft tools has been removed. This was an interface that was used in the past but became obsolete as the [task panel](/Task_panel "Task panel") became the predominant interface; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=34&t=42782), [pull request #2973](https://github.com/FreeCAD/FreeCAD/pull/2973).
* `Draft.copy` now works with any document object, thanks to the new `Document.copyObject()` method introduced with the LinkMerge; pull request [#3658](https://github.com/FreeCAD/FreeCAD/pull/3658).

## Ambiente FEM

|  |  |
| --- | --- |
|  | After half a year in development and testing the "femconcrete" branch was added to the FEM Workbench. This provides tools to estimate the level of reinforcement required in a concrete structure to prevent brittle failure under tension or shear. In essence, it is a post processing routine for the CalculiX solver, which calculates the principal tensile stresses in the concrete from an elastic analysis and uses those to determine the minimum reinforcement in the three coordinate directions required to prevent failure. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=33106), [pull request #2267](https://github.com/FreeCAD/FreeCAD/pull/2267); [Analysis of reinforced concrete with FEM](/Analysis_of_reinforced_concrete_with_FEM "Analysis of reinforced concrete with FEM") (tutorial). |
|  | After a few months in development the "fcFEM" macro was published. It implements a finite element solver entirely in Python. Its author designed it to overcome the limitations of other external solvers, like CalculiX and z88. Some of the intended improvements include creating mixed mesh analyses, improved beam and shell elements, arc-length control for overcoming limit points in elastic-plastic analyses, implementation of zero-thickness interface elements for different applications, and others. In due time this solver could be distributed together with the FEM Workbench, meaning that the FreeCAD project would have its own finite element solver for doing mechanical and structural analyses.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=33974); [fcFEM](https://github.com/HarryvL/fcFEM) repository (LGPL 2). |
|  | Topology optimization has long been a feature desired for those working with FEM. In 2016 the BESO (Bi-directional Evolutionary Structural Optimization) project was started, implementing an iterative method with the CalculiX solver that removes ineffective elements from a mesh in order to optimize the mass of the design. In the 0.19 development cycle, a simple graphical interface has been developed to facilitate generating the beso configuration files. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=15460); [beso](https://github.com/fandaL/beso) repository (LGPL 3). |
|  | Similar to beso, the ToOptix project also provides a macro to perform topology optimization; it currently only works in structural and heat transfer studies. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=273794#p273794) (just a mention); [ToOptixFreeCADAddon](https://github.com/DMST1990/ToOptixFreeCADAddon) repository (GPL 2). |
|  | The FEM workbench has now a browsable set of example simulations: They are available via the menu **Utilities →  [Open FEM examples](/FEM_Examples "FEM Examples")**. [commit ff3ce49139](https://github.com/FreeCAD/FreeCAD/commit/ff3ce49139) |
|  | There are two new constraints available: menu **Model → Geometrical Constraints →  [Constraint Section Print](/FEM_ConstraintSectionPrint "FEM ConstraintSectionPrint")** menu **Model → Mechanical Constraints →  [Constraint Tie](/FEM_ConstraintTie "FEM ConstraintTie")**, one new solver: menu **Solve →  [Electricforce equation](/FEM_EquationElectricforce "FEM EquationElectricforce")**  and a possibility to overwrite a constant: menu **Model → Overwrite Constraints →  [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity "FEM ConstantVacuumPermittivity")**. |

### Altro

* The Elmer project has developed a library for handling batch type pre-processing for the ElmerSolver, using the FEM Workbench. This includes creating mesh objects for FreeCAD, manipulating the mesh sizes of solids, creating finite element meshes using Gmsh, running ElmerGrid and exporting the mesh for ElmerSolver, and selecting and naming bodies and boundaries for ElmerSolver; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=38950), [elmerfem](https://github.com/ElmerCSC/elmerfem) repository (Elmer main repository), [FreeCADBatchFEMTools](https://github.com/ElmerCSC/elmerfem/tree/devel/ElmerWorkflows/FreeCADBatchFEMTools) repository (library to interact with FEM Workbench, LGPL 2.1).
* The integration of the OOFem solver, which started in 2018, is progressing, so it is now another option that can be used for structural analysis in FreeCAD. This solver is interesting in that it has interface elements, as well as arc-length control, in addition to many non-linear material models. The integration of OOFEM into FEM has been carried in various commits that together serve as documentation on how to integrate similar solvers; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=31288), [femoofem](https://github.com/berndhahnebach/FreeCAD_bhb/tree/femoofem) branch, [OOFEM](http://www.oofem.org/) main website, [oofem](https://github.com/oofem/oofem) repository (LGPL 2.1).
* Updated coding standards that strive for PEP8 compliance with Python; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=12833), [commit ad03ee9bdf](https://github.com/FreeCAD/FreeCAD/commit/ad03ee9bdfeeb23d5c79cf462ba4a5b5566c5bc1), [commit 27cb54009b](https://github.com/FreeCAD/FreeCAD/commit/27cb54009b57c1938f7ff97026c8b35c1688233f).

## Importazione

* Improved import/export compatibility with proprietary CAD systems, when using compressed STEP, or STPZ; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=37469), [pull request #2323](https://github.com/FreeCAD/FreeCAD/pull/2323), [commit 7de89cf62e](https://github.com/FreeCAD/FreeCAD/commit/7de89cf62e0411dcd).

## Material handling

*None*

## Mesh

|  |  |
| --- | --- |
|  | [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") is now able to create [meshes](/Mesh "Mesh") using [Gmsh](https://en.wikipedia.org/wiki/Gmsh). This mesher is an external program that must be installed in the system before it can be used. Gmsh was already one of the options to create [finite element meshes](/FEM_Mesh "FEM Mesh") with the [FEM Workbench](/FEM_Workbench "FEM Workbench"). Moreover, now the [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") dialog will remember the settings that you used the last time.  [Commit 1cb4625bf](https://github.com/FreeCAD/FreeCAD/commit/1cb4625bf). |
|  | The mesh workbench has now several toolbars to quickly access the different features. [Forum thread](https://forum.freecadweb.org/viewtopic.php?f=34&t=47494), [Pull request #4462](https://github.com/FreeCAD/FreeCAD/pull/4462) |

### Ulteriori miglioramenti

* It is now possible to take an OpenInventor mesh file (.iv), and export it to STL; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=43926#p378032), [commit 601ac707b2](https://github.com/FreeCAD/FreeCAD/commit/601ac707b2).
* It is now possible to export a [Mesh](/Mesh "Mesh") to [Asymptote format](/Asymptote "Asymptote") (.asy ); [forum thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=48915), [commits 4badaba5](https://github.com/FreeCAD/FreeCAD/commit/4badaba5), [50bbd522](https://github.com/FreeCAD/FreeCAD/commit/50bbd522), [58a92681](https://github.com/FreeCAD/FreeCAD/commit/58a92681), [dd7afa72](https://github.com/FreeCAD/FreeCAD/commit/dd7afa72), [b0f78f5a](https://github.com/FreeCAD/FreeCAD/commit/b0f78f5a).
* Most tools of the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") now have a proper icon so it is easier to recognize the function in the menu and toolbars; [forum thread](https://forum.freecadweb.org/viewtopic.php?f=34&t=47494), pull request [#3816](https://github.com/FreeCAD/FreeCAD/pull/3816), [#3864](https://github.com/FreeCAD/FreeCAD/pull/3864).

## Ambiente Part

|  |  |
| --- | --- |
|  | New command [Part PointsFromMesh](/Part_PointsFromMesh "Part PointsFromMesh") to create an object made of points from an imported mesh. Then the points can be used as reference objects to do further operations, such as define a plane, and draw a sketch. This can be used to reverse engineer or remodel meshes by creating solid objects. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=38670&p=328959#p328959) (and video), [pull request #2450](https://github.com/FreeCAD/FreeCAD/pull/2450). |
|  | Existing [primitives](/Part_Workbench#Primitives "Part Workbench") can now be edited in a dialog that also shows the changes as live preview. To do this, click on the primitive in the model tree and the dialog opens. [commit 6d831627](https://github.com/FreeCAD/FreeCAD/commit/6d831627), [commit f23187cd](https://github.com/FreeCAD/FreeCAD/commit/f23187cd), [commit dabf65cc](https://github.com/FreeCAD/FreeCAD/commit/dabf65cc) and [commit 7251a90f](https://github.com/FreeCAD/FreeCAD/commit/7251a90f) |
|  | When inserting [primitives](/Part_Primitives "Part Primitives") the location can be set using translation and rotation. |
|  | The  [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") tool has been expanded to include more information about the [Part TopoShape](/Part_TopoShape "Part TopoShape") that is contained in all solid objects of the program, not including [Mesh](/Mesh "Mesh")-type objects. [Forum discusion](https://forum.freecadweb.org/viewtopic.php?f=22&t=48792), [2](https://forum.freecadweb.org/viewtopic.php?f=8&t=48994), [announcement](https://forum.freecadweb.org/viewtopic.php?f=9&t=50153); [pull request #3747](https://github.com/FreeCAD/FreeCAD/pull/3747). |
|  | A script is provided in `Mod/Part/parttests/part_test_objects.py`, that produces a test file with the [Part Primitives](/Part_Primitives "Part Primitives"). This file is useful to learn scripting in Part, and can also be used to test regressions in the underlying code of the objects. [Pull request #3078](https://github.com/FreeCAD/FreeCAD/pull/3078). |

### Ulteriori miglioramenti

* The dialog to edit [Prisms](/Part_Prism "Part Prism") allows now to specify an angle in respect to the normal of the chosen attachment plane. This way one can create skew prisms. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=49343#p422857), [pull request #3793](https://github.com/FreeCAD/FreeCAD/pull/3793)
* New Face method: `Part.Face.cutHoles(list_of_wires)` to cut holes into a face. The face usually needs to be validated after operation.
* The [App Link](/App_Link "App Link") merge introduced two new commands, [Part TransformedCopy](/Part_TransformedCopy "Part TransformedCopy") and [Part ElementCopy](/Part_ElementCopy "Part ElementCopy"). These commands create non-parametric copies of a body with a transformed placement, and of an element (vertex, edge, or face); [commit 6da72b9859](https://github.com/FreeCAD/FreeCAD/commit/6da72b9859f6d21119831d44a8d132c8e2dfb544). These operations essentially make the [Macro Repro Wire](/Macro_Repro_Wire "Macro Repro Wire") obsolete.
* It is now possible to set [expressions](/Expressions "Expressions") for all parameters of [primitives](/Part_Workbench#Primitives "Part Workbench"). [commit dd4874d2](https://github.com/FreeCAD/FreeCAD/commit/dd4874d2) and [commit 7405dd0e](https://github.com/FreeCAD/FreeCAD/commit/7405dd0e).
* Fixed broken support for "INCH" units when exporting to STEP/IGES formats; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=36808&p=314172#p314172), [commit 1b26173580](https://github.com/FreeCAD/FreeCAD/commit/1b2617358).

## Ambiente PartDesign

|  |  |
| --- | --- |
|  | [Features](/PartDesign_Feature "PartDesign Feature") that have an ["Attachment"](/Part_EditAttachment "Part EditAttachment") property now show when the attachment mode is "deactivated" by displaying a small overlay to the left of the icon in the [tree view](/Tree_view "Tree view"). Features that are attached to a plane or other reference don't display this overlay. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=37074&p=315344#p315344), [pull request #2272](https://github.com/FreeCAD/FreeCAD/pull/2272). |
|  | The dialog to edit [chamfers](/PartDesign_Chamfer "PartDesign Chamfer") allows now to define chamfers also either  * using 2 values * a value and an angle   These 2 parameters can also be flipped using the dialog. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=46205), [pull request #3456](https://github.com/FreeCAD/FreeCAD/pull/3456) |
|  | The dialog to edit [pads](/PartDesign_Pad "PartDesign Pad") allows now to specify a direction in which the sketch is padded. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=49343), [pull request #3794](https://github.com/FreeCAD/FreeCAD/pull/3794) |
|  | [PartDesign LinearPattern](/PartDesign_LinearPattern "PartDesign LinearPattern") and [PolarPattern](/PartDesign_PolarPattern "PartDesign PolarPattern") now can be used with dress-up features ([fillets](/PartDesign_Fillet "PartDesign Fillet"), [chamfers](/PartDesign_Chamfer "PartDesign Chamfer"), [thickness](/PartDesign_Thickness "PartDesign Thickness") and [draft](/PartDesign_Draft "PartDesign Draft")) and with primitives ([Additives](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive") and [Subtractives](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive")). A new property Dati**Support Transform** in these [features](/PartDesign_Feature "PartDesign Feature"), controls whether the feature supports the pattern or not. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=43312), [pull request #3045](https://github.com/FreeCAD/FreeCAD/pull/3045), [#3155](https://github.com/FreeCAD/FreeCAD/pull/3155), [#3226](https://github.com/FreeCAD/FreeCAD/pull/3226). |
|  | The dialog to edit [Prisms](/PartDesign_AdditivePrism "PartDesign AdditivePrism") (additive and subtractive) allows now to specify an angle in respect to the normal of the chosen attachment plane. This way one can create skew prisms. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=49343#p422857), [pull request #3793](https://github.com/FreeCAD/FreeCAD/pull/3793) |
|  | It is now possible to create [additive](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix") and [subtractive](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix") helices. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=53714), [pull request #4209](https://github.com/FreeCAD/FreeCAD/pull/4209) |
|  | It is now possible to select several features in the document tree before executing a [transformation](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"). This way several features can easily be transformed at once. The order of the features in the transformation dialog can be changed by dragging a feature to the desired position. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=48998), [pull request #3748](https://github.com/FreeCAD/FreeCAD/pull/3748), [#3760](https://github.com/FreeCAD/FreeCAD/pull/3760). |
|  | The dialogs to edit [fillets](/PartDesign_Fillet "PartDesign Fillet"), [chamfers](/PartDesign_Chamfer "PartDesign Chamfer"), [thickness](/PartDesign_Thickness "PartDesign Thickness"), and [draft](/PartDesign_Draft "PartDesign Draft") features were improved to allow selecting several sub-elements (edges and faces) at once. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=19&t=43383), [pull request #3050](https://github.com/FreeCAD/FreeCAD/pull/3050), [animated GIF](https://www.freecadweb.org/wiki/images/b/b8/FC019-PD-Multiple-Selection.gif) example. |
|  | The [hole dialog](/PartDesign_Hole "PartDesign Hole") offers now to select a norm to create cuts for counterbores and countersinks [Forum discussion](https://forum.freecadweb.org/viewtopic.php?t=51403), [pull request #3999](https://github.com/FreeCAD/FreeCAD/pull/3999). |
|  | The new feature [Sprocket](/PartDesign_Sprocket "PartDesign Sprocket") allows to create chain sprockets. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=44525), [pull request #3280](https://github.com/FreeCAD/FreeCAD/pull/3280). |

### Ulteriori miglioramenti

* The [hole dialog](/PartDesign_Hole "PartDesign Hole") has been overhauled to create norm-conform clearance and threaded hole dimensions.
* It is now possible to set [expressions](/Expressions "Expressions") for all parameters of [additive](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive") and [subtractive primitives](/PartDesign_CompPrimitiveSubtractive "PartDesign CompPrimitiveSubtractive"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=36458), [pull request #3225](https://github.com/FreeCAD/FreeCAD/pull/3225).
* It is now possible to set [expressions](/Expressions "Expressions") for the attachment angles of additive and subtractive primitives. Formerly, expressions were only available for the direction offsets. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=44346), [commit 1cfe6d2cc7](https://github.com/FreeCAD/FreeCAD/commit/1cfe6d2cc7).
* It is now possible to change the list items in the different dialogs. For example [in this forum post](https://forum.freecadweb.org/viewtopic.php?f=27&t=48998#p420352) there is a good example why the item list matters for transformations. [Here](https://forum.freecadweb.org/viewtopic.php?f=19&t=50222#p430499) is another example for the sketch order for lofts. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=48998), [pull request #3760](https://github.com/FreeCAD/FreeCAD/pull/3760), [commit 94ca4388e](https://github.com/FreeCAD/FreeCAD/commit/94ca4388e).

## Ambiente Path

|  |  |
| --- | --- |
|  | Added coolant modes for coolant management. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=38852&start=10#p329868), [pull request #2463](https://github.com/FreeCAD/FreeCAD/pull/2463). |

* New Tool Management system (Toolbits) [Wiki Page](https://wiki.freecadweb.org/Path_Tools), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=54521)

* Added [Path DressupPathBoundary](/Path_DressupPathBoundary "Path DressupPathBoundary") for excluding parts of a path

* PathPocket: Extensions (For milling open pockets).
* New unified Profile operation: The pre-existing Contour, Profile Faces, and Profile Edges of version 0.18.x are now combined into a single Profile operation. The new Profile operation maintains features and capabilities of the three individual source operations. [forum discussion](https://forum.freecadweb.org/viewtopic.php?style=1&f=15&t=39915), [pull request #3443](https://github.com/FreeCAD/FreeCAD/pull/3443).
* Profile Edges: Open Edges support added. **Note:** *The Profile Edges operation is now merged into the Profile operation.* [forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=43434), [pull request #3068](https://github.com/FreeCAD/FreeCAD/pull/3068).
* First attempt of 4th-axis support: Profile (limited to full contour and profiling of faces), PathPocket, and Drilling

* Fixed issue [#3993](https://freecadweb.org/tracker/view.php?id=0003993), Python 3 memory leak; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=36703), [commit 3c205946e](https://github.com/FreeCAD/FreeCAD/commit/3c205946e).
* Ability to use an arbitrary number of an object as the base model for a Path.Job, each one being positionable individually; [pull request #2056](https://github.com/FreeCAD/FreeCAD/pull/2056).
* PathDeburr: Added direction selection. Fixed DressupLeadInOut problem.
* MillFace
  + Clear edges feature added.
  + Exclude raised areas feature added; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=37873), [pull request #2367](https://github.com/FreeCAD/FreeCAD/pull/2367).
  + Added `Face Region` option to boundary options. This allows the cutter to access areas smaller than cutter diameter, but physically accessible within the part geometry. [forum mention](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=46881), [pull request #3534](https://github.com/FreeCAD/FreeCAD/pull/3534).
* Adaptive Clearing improvements.
  + Adaptive can now use feature outline
* 3D Pocket: Reduction of air-milling above inclined pockets; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=37869), [pull request #2366](https://github.com/FreeCAD/FreeCAD/pull/2366).
* 3D Surface
  + Improvements to general surfacing algorithm.
  + Initial 4th-axis support; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=36018), [pull request #2114](https://github.com/FreeCAD/FreeCAD/pull/2114).
  + Selection of individual faces; [forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=41997), [pull request #2849](https://github.com/FreeCAD/FreeCAD/pull/2849).
  + Fixes to and addition of various cut patterns: Line, Circular, CircularZigZag, Offset, Spiral, ZigZag. [pull request #3327](https://github.com/FreeCAD/FreeCAD/pull/3327) and other pull requests.
* New operation: **Waterline**.
  + The independent operation was split from 3D Surface; [forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=44473), [pull request #3268](https://github.com/FreeCAD/FreeCAD/pull/3268).
  + Experimental algorithm added using a combination of Path.Area() offsets of model cross-sections.
* Post Processing
  + Update of Post Processors (GRBL, LinuxCNC, Centroid).
  + Mach3/Mach4 Post Processor; [pull request #3195](https://github.com/FreeCAD/FreeCAD/pull/3195).
  + Support tool height offset in the LinuxCNC Post Processor; [pull request #2479](https://github.com/FreeCAD/FreeCAD/pull/2479).
  + Task Panel for LeadInOut Dressup

* New operation: **Slot**. Allows for creation of a horizontal slotting operation based on two custom points; the selection of one or more faces or edges; or the selection of two vertices. [forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=47693), [initial pull request #3624](https://github.com/FreeCAD/FreeCAD/pull/3624).

|  |  |  |
| --- | --- | --- |
| V-Carve example | New operation: **V-Carve** Allows for center-line engraving with V-bit. | [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=36135), [initial pull request #3879](https://github.com/FreeCAD/FreeCAD/pull/3879). |

* General:
  + Added cycle time calculations to operations and total cycle time to the job; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=26864), [pull request #3378](https://github.com/FreeCAD/FreeCAD/pull/3378).
  + Added ability to import Base Geometry from existing operations within the same Job; [forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=46922), [pull request #3537](https://github.com/FreeCAD/FreeCAD/pull/3537).
  + Added icons to section headings in the Tasks Editor window for Base Geometry, Depths, Heights, and Operation; [pull request #3631](https://github.com/FreeCAD/FreeCAD/pull/3631).
  + Added support for conical entry helix in Adaptive Operation.
  + Prefernces to enable features which depend on openCAMLib
  + Prefernces to suppress common warnings

* Job:
  + Added new group in Job to collect all ToolControllers
  + Support for gcode WCS (work coordinate system) offsets aka 'fixtures'
    - Gcode can be generated for any or multiple offsets
    - Output can be ordered by tool, operation, or fixture to minimize toolchanges or transit time.
    - Gcode can be split into multiple output files

## Ambiente Render

Added support for Blender's standalone "Cycles" renderer; [commit 759067912f](https://github.com/FreeCAD/FreeCAD-render/commit/759067912f0640e4b3dac41b104d2372978f94a1); [FreeCAD-render](https://github.com/FreeCAD/FreeCAD-render) repository. The Cycles standalone renderer usually needs to be compiled from source, as the binary is normally not provided by itself in a complete Blender distribution.

Besides this, the Render Workbench already has support for Pov-Ray, Luxrender and Appleseed.

## Ambiente Sketcher

|  |  |
| --- | --- |
|  | In the Sketcher's [task panel](/Task_panel "Task panel"), in the "Elements" section there is now a "Mode" filter to select "normal", "construction", "external", or "all" geometry. This is useful to perform an action with only one type of geometry. For example, one use case is selecting only the "construction" edges, and deleting them after being used. |
|  | New [Sketcher ToggleActiveConstraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint") tool to temporarily deactivate a constraint without removing it entirely. This is helpful to test the movement of the sketch before fully constraining it. [Pull request #2283](https://github.com/FreeCAD/FreeCAD/pull/2283), [commit 159b8e7bdf](https://github.com/FreeCAD/FreeCAD/commit/159b8e7bdf). |
|  | It is now possible to make a dimension constraint a [reference constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") directly in the dialog. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=33705), [2](https://forum.freecadweb.org/viewtopic.php?f=3&t=36433); [pull request #3201](https://github.com/FreeCAD/FreeCAD/pull/3201), [commit 06f479622c](https://github.com/FreeCAD/FreeCAD/commit/06f479622c). |
|  | It is now possible to display the [weight of B-spline control points](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight"). [commit 65c96a3b](https://github.com/FreeCAD/FreeCAD/commit/65c96a3b). |
|  | Sketches have a new color scheme to indicate parts of the sketch that are already fully constrained. In the image at the left you can see that the triangle and the arc are fully constrained and thus displayed by default in light green. The fully constrained construction circle around the triangle appears by default in light blue. The colors can be changed in the [Sketcher Preferences](/Sketcher_Preferences#Colors "Sketcher Preferences").  [forum thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=53466). |

* It is now possible to  [decrease the knot multiplicity](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree") of B-Splines. [commit fc89f4eb0](https://github.com/FreeCAD/FreeCAD/commit/fc89f4eb0).
* The  [fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") tool preserves now all possible existing constraints of the touched lines. [pull request #4296](https://github.com/FreeCAD/FreeCAD/pull/4296) , [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=54179)
* New method to get the geometrical index of a [sketch](/Sketcher_SketchObject "Sketcher SketchObject"), `SketchObject.getGeoVertexIndex(index)`; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=48707), [pull request #3713](https://github.com/FreeCAD/FreeCAD/pull/3713).

## Ambiente Spreadsheet

The introduction of [App Link](/App_Link "App Link") also brought some improvements to the [expressions](/Expressions "Expressions") capabilities of FreeCAD, which are visible in the [property editor](/Property_editor "Property editor"), and the [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench"). These are described in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes) and this [forum thread](https://forum.freecadweb.org/viewtopic.php?f=27&t=38974).

* A new expression syntax is introduced to unambiguously reference a property of the owner object, by omitting the object reference and starting with a leading dot (`.`), similar to Python relative import syntax. So instead of `Cylinder.Height`, now you can use `.Height`.
* You can refer to an object by its `Name` or by its `Label`. In the case of a `Label`, it must be enclosed in `<<` and `>>` symbols, such as `<<Label>>`. For example, `<<Metal_cylinder>>.Height`.
* Improved spreadsheet recomputation logic, and cell copy and paste functions. [Pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350), [#2475](https://github.com/FreeCAD/FreeCAD/pull/2475).

The previous commits changed the way the autocompletion works with [expressions](/Expressions "Expressions"), particularly when used with [Sketcher](/Sketcher_Workbench "Sketcher Workbench") constraints, which was seen as a regression for many use cases. A new set of commits were proposed to restore this functionality; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=43412), [pull request #3062](https://github.com/FreeCAD/FreeCAD/pull/3062).

|  |  |
| --- | --- |
|  | Aliases for table cells can now be set easier with a new input field at the upper right of the spreadsheet. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=43957), [pull request #3154](https://github.com/FreeCAD/FreeCAD/pull/3154), [#3162](https://github.com/FreeCAD/FreeCAD/pull/3162), [#3233](https://github.com/FreeCAD/FreeCAD/pull/3233).  The alias stability has also been improved: [Pull request #4232](https://github.com/FreeCAD/FreeCAD/pull/4232), [Pull request #4305](https://github.com/FreeCAD/FreeCAD/pull/4305) |

Data entered into a cell is not tested anymore as an expression by default. Now an expression needs to start with an equal sign `=` instead. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=39665), [pull request #4215](https://github.com/FreeCAD/FreeCAD/pull/4215).

## Ambiente Start

|  |  |
| --- | --- |
|  | Re-added example files to the Start page with saved thumbnails in their icons. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=34586&start=110), [pull request #2316](https://github.com/FreeCAD/FreeCAD/pull/2316). |

## Ambiente Surface

|  |  |
| --- | --- |
|  | The [Surface Sections](/Surface_Sections "Surface Sections") object has been added to create surfaces from edges that represent transversal sections. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=46895), [commit 3a8a6aae1b](https://github.com/FreeCAD/FreeCAD/commit/3a8a6aae1b). |
|  | The [Surface Workbench documentation](/Surface_Workbench "Surface Workbench") has been rewritten, and expanded with more images and scripting examples, in order to showcase better the tools of the workbench. All commands are now available from the toolbar: [Surface Filling](/Surface_Filling "Surface Filling"), [Surface GeomFillSurface](/Surface_GeomFillSurface "Surface GeomFillSurface"), [Surface Sections](/Surface_Sections "Surface Sections"), [Surface ExtendFace](/Surface_ExtendFace "Surface ExtendFace"), and [Surface CurveOnMesh](/Surface_CurveOnMesh "Surface CurveOnMesh"). Likewise, the icons have been updated to be more visually attractive. |

## Ambiente TechDraw

|  |  |
| --- | --- |
|  | Improved placing and scaling of a 3D viewport screenshot in a TechDraw page. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=34539#p290451). |
|  | New [Balloon](/TechDraw_Balloon "TechDraw Balloon") tool to add balloon decorators to create notes with numbers, letters, and text. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=34484), [pull request #2013](https://github.com/FreeCAD/FreeCAD/pull/2013). |
|  | New [TechDraw LeaderLine](/TechDraw_LeaderLine "TechDraw LeaderLine") and [TechDraw RichTextAnnotation](/TechDraw_RichTextAnnotation "TechDraw RichTextAnnotation") tools to create better annotations in the drawing page. [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36169), [commit 7f07195f93](https://github.com/FreeCAD/FreeCAD/commit/7f07195f938eb76294c1de72339da5ff50093e8f), [commit 6c699887c0](https://github.com/FreeCAD/FreeCAD/commit/6c699887c02268c697a580aceaf0687d4dc53df0); testing and bug fixing [commit ab986d9a00](https://github.com/FreeCAD/FreeCAD/commit/ab986d9a00), [commit 15f440525e](https://github.com/FreeCAD/FreeCAD/commit/15f440525e), [commit 8ef3f13fbb](https://github.com/FreeCAD/FreeCAD/commit/8ef3f13fbb), [commit bf38ae958f](https://github.com/FreeCAD/FreeCAD/commit/bf38ae958f), [commit 74737f71fd](https://github.com/FreeCAD/FreeCAD/commit/74737f71fd), [commit be257182ba](https://github.com/FreeCAD/FreeCAD/commit/be257182ba), [commit de3715908e](https://github.com/FreeCAD/FreeCAD/commit/de3715908e), [commit 916fe7ced3](https://github.com/FreeCAD/FreeCAD/commit/916fe7ced3). |
|  | New [TechDraw CosmeticVertex](/TechDraw_CosmeticVertex "TechDraw CosmeticVertex"), [TechDraw Midpoints](/TechDraw_Midpoints "TechDraw Midpoints"), and [TechDraw Quadrant](/TechDraw_Quadrants "TechDraw Quadrants") tools, which allow the user to place fake or "cosmetic" vertices that can be used to create dimensions. The midpoint and quadrant vertices can be used to add more points to straight and curved edges (circular arcs), respectively; the "CosmeticVertex" tool can add a point anywhere on the drawing view without requiring being based on existing geometry. [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36614), [commit 59e47de506](https://github.com/FreeCAD/FreeCAD/commit/59e47de5064e3112e65c51a0d32b1ad4584b6a80), [commit 94b167f3a2](https://github.com/FreeCAD/FreeCAD/commit/94b167f3a200f0a84365dccafcfeb3542f7a6795). |
|  | New [TechDraw FaceCenterLine](/TechDraw_FaceCenterLine "TechDraw FaceCenterLine"), [TechDraw 2LineCenterLine](/TechDraw_2LineCenterLine "TechDraw 2LineCenterLine"), and [TechDraw 2PointCenterLine](/TechDraw_2PointCenterLine "TechDraw 2PointCenterLine") tools, to add a line in the center of a face, or between two existing edges, or between two existing points, respectively. Also, [TechDraw DecorateLine](/TechDraw_DecorateLine "TechDraw DecorateLine") to change the appearance of single edges, and [TechDraw CosmeticEraser](/TechDraw_CosmeticEraser "TechDraw CosmeticEraser") to remove any of the cosmetic features from the view.  [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36875) (v1, alpha), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=37749) (v2), [commit 656e1654ff](https://github.com/FreeCAD/FreeCAD/commit/656e1654ff0825173a7d03f9b1b9ca8866d59adb), [commit 93431edfba](https://github.com/FreeCAD/FreeCAD/commit/93431edfba377c58dc1e49d68c39574057111523), [commit f25826bba3](https://github.com/FreeCAD/FreeCAD/commit/f25826bba3124f46e267d9a4cf078dda7e6c031d), [commit 11d8aaed61](https://github.com/FreeCAD/FreeCAD/commit/11d8aaed616b81eda8658f2d63bd97db5b4a87c7), [commit 941968b37c](https://github.com/FreeCAD/FreeCAD/commit/941968b37cd45505a5668a1df17ba9b8d6f9a66b). |
|  | New [TechDraw WeldSymbol](/TechDraw_WeldSymbol "TechDraw WeldSymbol") tool to provide welding symbols. One of the most requested features from the older Drawing Workbench is finally in TechDraw. Russian standard (GOST) symbols are also added. [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=38560) (testing), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38762) (main thread); [pull request #2446](https://github.com/FreeCAD/FreeCAD/pull/2446), [#3110](https://github.com/FreeCAD/FreeCAD/pull/3110).  [Old welding symbols](https://github.com/hamish2014/FreeCAD_drawing_dimensioning/tree/master/Gui/Resources/icons) from Drawing Workbench. |
|  | New [TechDraw ActiveView](/TechDraw_ActiveView "TechDraw ActiveView") tool. It produces a static image from the active 3D view, and puts it in a new TechDraw view. The result is a snapshot that doesn't update with changes to the model, and which is very fast to produce because it doesn't perform hidden line removal calculations. It is intended for rapid visualization of models, or to display flat projections of models without needing to add dimensions, a workflow that may be interesting for architectural visualization. Together with [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane") and [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView"), [TechDraw ActiveView](/TechDraw_ActiveView "TechDraw ActiveView") hopes to improve the interaction between [Arch](/Arch_Workbench "Arch Workbench") and [TechDraw](/TechDraw_Workbench "TechDraw Workbench") to document building models. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38957), [commit 13676bfe57](https://github.com/FreeCAD/FreeCAD/commit/13676bfe57). |
|  | New page templates for the architectural paper sizes Arch B, C, D, E. Also, the possibility to use arbitrary "Custom" paper sizes for TechDraw PDF export and printing is now available. The user still needs to create or download an SVG template matching the desired output paper size. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=54512), [pull request #4292](https://github.com/FreeCAD/FreeCAD/pull/4292). |
|  | New page templates, Russian State Standard of Technical Documentation (Unified system for design documentation), GOST 2.104-2006, GOST Р 21.1101-2013. [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36957), [pull request #2249](https://github.com/FreeCAD/FreeCAD/pull/2249). |
|  | New page templates, the People's Republic of China Templates A series; please use with font family "HYSWLongFangSong". [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=37459), [2](https://forum.freecadweb.org/viewtopic.php?f=17&t=48854), [pull request #2322](https://github.com/FreeCAD/FreeCAD/pull/2322). |
|  | New page templates, A-size, Slovenian (GPL 2). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38623), [FreeCADTemplates](https://github.com/WandererFan/FreeCADTemplates) repository.  Only LGPL2 compatible code can be provided directly with TechDraw; code contributed under GPL2 or GPL3 needs to be stored in a separate repository. |
|  | The drawing of dimensions was completely rewritten. Now any drawn dimension is fully compliant with one of ISO 129-1 or ASME Y14.5M standards. There are four styles to choose from: ISO oriented (rotated value), ISO Referencing (horizontal value), ASME Inlined (horizontal value), ASME Referencing (value connected by a reference line). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=39571), [pull request #2552](https://github.com/FreeCAD/FreeCAD/pull/2552). |
|  | New [TechDraw HorizontalExtentDimension](/TechDraw_HorizontalExtentDimension "TechDraw HorizontalExtentDimension") and [TechDraw VerticalExtentDimension](/TechDraw_VerticalExtentDimension "TechDraw VerticalExtentDimension"), to obtain the maximum dimensions in a view. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=40037), [pull request 2680](https://github.com/FreeCAD/FreeCAD/pull/2680), [commit a7d9661b1d](http://github.com/FreeCAD/FreeCAD/commit/a7d9661b1d5c5795). |
|  | Improved handling and display of tolerances in combination of a new task dialog to set up [Dimensions](/TechDraw_Workbench#Dimensions "TechDraw Workbench"). With this and the new Balloon tool it is possible to use create 2D-[Geometric dimensioning and tolerancing](/TechDraw_Geometric_dimensioning_and_tolerancing "TechDraw Geometric dimensioning and tolerancing") tags for drawings. |
|  | New task dialog to set up [Detail Views](/TechDraw_DetailView "TechDraw DetailView"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=45236). |
|  | New pyramid arrow style for dimensions and balloon annotations. [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?p=356630), [pull request #2853](https://github.com/FreeCAD/FreeCAD/pull/2853). |
|  | SVG face hatches are now available when the page is exported to SVG. The SVG hatches are converted to bitmaps and clipped to fit the face before export. The example image shows the exported SVG page when it is opened in Inkscape. [Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=47013), [commit a9b718d1e0](https://github.com/FreeCAD/FreeCAD/commit/a9b718d1e0). |

### Altro

* There has been discussions about changing the standard behavior of TechDraw. Instead of keeping the drawing pages updated automatically, they would be updated only on demand; this would mitigate the effects of TechDraw slowing down the rest of FreeCAD when modelling. Moreover, now that [App Link](/App_Link "App Link") is included in FreeCAD, TechDraw pages may be stored in a separate file, and loaded on demand; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=35086) (main discussion), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38822) (alternatives).
* Improvements on the handling of sectional views with [TechDraw SectionView](/TechDraw_SectionView "TechDraw SectionView"); [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=40639), [pull request #2737](https://github.com/FreeCAD/FreeCAD/pull/2737).
* Fixed font size issues when exporting to SVG; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=27108), [pull request #2219](https://github.com/FreeCAD/FreeCAD/pull/2219).
* Fixed regression in caption handling and hide caption property where not applicable; [pull request #2228](https://github.com/FreeCAD/FreeCAD/pull/2228).
* Added options for page size, line width and background when saving to SVG; this improves Draft/Arch and TechDraw integration; [pull request #2455](https://github.com/FreeCAD/FreeCAD/pull/2455).
* New panning of the page using the middle mouse button; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=29679#p327695), [pull request #2458](https://github.com/FreeCAD/FreeCAD/pull/2458).
* Finer control of drawing updates; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38956), [pull request #2468](https://github.com/FreeCAD/FreeCAD/pull/2468), [commit 5bed53f858](https://github.com/FreeCAD/FreeCAD/commit/5bed53f858), [commit b2d8eeeb65](https://github.com/FreeCAD/FreeCAD/commit/b2d8eeeb65).
* Also new [TechDraw RedrawPage](/TechDraw_RedrawPage "TechDraw RedrawPage") tool to force a drawing page update while ignoring the state of the options "Update with 3d", "Allow page override", or "KeepUpdated". This tool disappeared in 0.18, but was re-implemented for 0.19; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38956).
* The new [App Link](/App_Link "App Link") object is now supported as a source for creating views; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=41973), [commit 37b578bf49](http://github.com/FreeCAD/FreeCAD/commit/37b578bf49).
* The center marks created from circular edges, can now be printed; [pull request #2335](https://github.com/FreeCAD/FreeCAD/pull/2335), [#2962](https://github.com/FreeCAD/FreeCAD/pull/2962).
* It is now possible to override displayed values for tolerances, for example to use text in tolerances. Furthermore, one can now use a custom display format for each, over- and undertolerance. [pull request #4087](https://github.com/FreeCAD/FreeCAD/pull/4087)
* The [LineGroup](/TechDraw_LineGroup "TechDraw LineGroup") to set the default line widths for drawings can now be selected from the available groups in the [preferences](/TechDraw_Preferences#Annotation "TechDraw Preferences"). [pull request #4083](https://github.com/FreeCAD/FreeCAD/pull/4083)

## Web

* QtWebEngine support for Qt 5.7 and above, and fallback to QWebkit for Qt 5.6 and below; [pull request #1937](https://github.com/FreeCAD/FreeCAD/pull/1937).

## Macro

See [Macros recipes](/Macros_recipes "Macros recipes") for many more macros.

|  |  |
| --- | --- |
|  | Automatic light-gauge steel frame creator and panelizer. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=26092); [FreeCAD-Steel\_Frame](https://gitlab.com/Oriond/FreeCAD-Steel_Frame) repository (GPL 3), [video](https://peertube.social/videos/watch/cbd2efd0-f763-41ac-9e38-2e0034c56703) example. |

## Moduli aggiuntivi

*Note:* these are the new workbenches created in this development cycle, or older workbenches that received updates. See [external workbenches](/External_workbenches "External workbenches") for more workbenches that can be installed, and which cover a wide variety of topics. If you want to see your workbench added, join the [forum](https://forum.freecadweb.org/index.php) and present your code.

### Strumenti per stampa 3D

|  |  |
| --- | --- |
|  | Previously it was called "MeshTools". It has utilities for working with imported STL meshes which could be used for 3D printing, like scaling the mesh up and down, scale it to fit a 3D printer, make objects transparent, hide and show objects, change colors and line widths of groups of objects, and others. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=36564); [3D Printing Tools](https://github.com/mark1791/3D_Printing_Tools) repository (LGPL 2.1). |

### A2plus

|  |  |
| --- | --- |
|  | The successor to the Assembly2 workbench, [A2plus](/A2plus_Workbench "A2plus Workbench") is the most mature assembly workbench, and has received important updates in this development cycle, like an improved point on plane constraint, and point on line constraint, using the center of a sphere as the point; this improves the constraining of spheres. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=29207); [A2plus](https://github.com/kbwbe/A2plus) repository (LGPL 2.1).  Please note: A2plus is not compatible with Assembly2 or other assembly workbenches. If you have previous assemblies, they will need to be re-created entirely in A2plus. |

### Assembly3

|  |  |
| --- | --- |
|  | [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") is an assembly workbench created by developer *realthunder*, that is inspired by [Assembly2](/Assembly2_Workbench "Assembly2 Workbench"), but is not compatible with it. Assembly3 makes use of realthunder's [App Link](/App_Link "App Link") object and various significant changes to the internal code of FreeCAD. Because of this reason, Assembly3 cannot be installed simply from the Addon Manager. Instead, realthunder provides a pre-compiled version of FreeCAD that includes Assembly3. This workbench serves as a testing environment for the [App Link](/App_Link "App Link") object, and other changes that realthunder plans to submit to the main FreeCAD source code. The Assembly3 workbench can also be tested in the development [AppImage](/AppImage "AppImage").  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (massive thread); [FreeCAD\_assembly3](https://github.com/realthunder/FreeCAD_assembly3) repository (GPL 3).  Please note: Assembly3 is not compatible with Assembly2 or other assembly workbenches. If you have previous assemblies, they will need to be re-created entirely in Assembly3. |

### Assembly4

|  |  |
| --- | --- |
|  | [Assembly4](/Assembly4_Workbench "Assembly4 Workbench") is an assembly workbench created by developer *Zolko*, that uses realthunder's [App Link](/App_Link "App Link") object and many other changes to the base FreeCAD system, particularly the new [expression engine](/Expressions "Expressions"). Because of this, Assembly4 doesn't work with versions below 0.19. Assembly4 can be installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). Unlike [A2plus](/A2plus_Workbench "A2plus Workbench") and [Assembly3](/Assembly3_Workbench "Assembly3 Workbench"), Assembly4 tries to perform assembly without using a constraint solver, but rather with the concept of arranging local coordinate systems (LCS) and setting relationships through [mathematical expressions](/Expressions "Expressions").  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=32843) (original idea), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=34806) (main thread); [FreeCAD\_Assembly4](https://github.com/Zolko-123/FreeCAD_Assembly4) repository (LGPL 2.1).  Please note: Assembly4 is not compatible with Assembly3 or other assembly workbenches. If you have previous assemblies, they will need to be re-created entirely in Assembly4. |

### ArchTextures

|  |  |
| --- | --- |
|  | The ArchTextures Workbench was developed to provide basic texture support to [Arch Workbench](/Arch_Workbench "Arch Workbench") elements like walls and roofs, in order to quickly visualize a building. It is not intended to produce photo-realistic renderings, just simple texturing of materials like wood, brick, and concrete. It also provides lights (directional, point, and spot), which makes it more feature complete to set up a scene. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=38222) (help requests), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=38223) (development), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=31598) (only announcements), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=39031) (announcement of lights); [FreeCAD-ArchTextures](https://github.com/furti/FreeCAD-ArchTextures) repository (MIT). |

### BOLTSFC

|  |  |
| --- | --- |
|  | BOLTS is an "open library of technical specifications"; it is meant to provide free, standardized parts defined parametrically that can be used in different CAD systems like OpenSCAD and FreeCAD. The BOLTS library was launched in 2013 but received little maintenance since 2016. Now, with a new maintainer and repository, the project has revived with the BOLTSFC workbench that provides an interface to insert the different parametric objects. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=4549); [Homepage](https://www.bolts-library.org/en/index.html), [BOLTSFC](https://github.com/boltsparts/BOLTSFC) repository, [BOLTS](https://github.com/boltsparts/BOLTS) main repository (GPL 3). |

### CurvedShapes Workbench

|  |  |
| --- | --- |
|  | The CurvedShapes workbench has tools for designing 3D surfaces starting from a skeleton of multiple curves in the XY, XZ, or YZ planes. It was created particularly to simplify the modelling of the wings of aircrafts. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=36989); [CurvedShapesWorkbench](https://github.com/chbergmann/CurvedShapesWorkbench) repository (LGPL 3). |

### Dodo (formerly Flamingo)

|  |  |
| --- | --- |
|  | Dodo is the successor to the [Flamingo Workbench](/Flamingo_Workbench "Flamingo Workbench"), a workbench specialized in creating piping and frames. While Flamingo was developed for Python 2 and Qt4, Dodo is meant to work with Python 3 and Qt5. It provides the same features as Flamingo, but has improved tools and interfaces. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=22711) (main thread), [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=304165#p304165) (Dodo announcement), [tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=38464); [dodo](https://github.com/oddtopus/dodo/) repository (LGPL 3), [flamingo](https://github.com/oddtopus/flamingo) repository (LGPL 3). |

### Fasteners

|  |  |
| --- | --- |
|  | The [Fasteners Workbench](/Fasteners_Workbench "Fasteners Workbench") to generate standard ISO screws, bolts, washers, and other fasteners, was updated to work with Python 3 and Qt5. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?t=11429); [FreeCAD\_FasternersWB](https://github.com/shaise/FreeCAD_FastenersWB) repository (GPL 2), [additional details](http://theseger.com/projects/2015/07/generating-holes-for-countersunk-screws-in-freecad/). |

### MeshRemodel Workbench

|  |  |
| --- | --- |
|  | This workbench helps convert a mesh, for example, an imported STL file, into a native FreeCAD object. It will not do the conversion automatically, but it will help re-build, or re-model, the imported mesh. The general workflow is to select the mesh object, then create a "points" object from it; then these points can be used as references for creating FreeCAD objects such as lines, polygons, circles, arcs, and BSplines. These wires can then be turned into a [Sketch](/Sketcher_Workbench "Sketcher Workbench") object, which can be padded to create a 3D solid with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=38670) (only announcement); [MeshRemodel](https://github.com/mwganson/MeshRemodel) repository (LGPL 2.1). |

### MOOC Workbench

|  |  |
| --- | --- |
|  | The MOOC workbench is an educational tool that offers interactive tutorials and exercise evaluations to learn to use FreeCAD. It was developed as part of a series of courses on Digital Manufacturing. At this moment, the workbench is only offered in the French language.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=37584); [mooc-workbench](https://framagit.org/freecad-france/mooc-workbench) repository (GPL 2). |

### NodeEditor (PyFlow)

|  |  |
| --- | --- |
|  | The NodeEditor workbench implements a system of nodes that can be used to dynamically control the properties of objects, similar to Blender's node system to edit materials. The NodeEditor is based on a slightly modified version of the PyFlow framework, which is under active development. A node editor has been a requested feature for a very long time, at least since 2014 (see [this thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=7442)). A fully working node editor has the potential of simplifying the drawing of complex shapes using generative algorithms that produce a shape based on the values of its inputs. This could be used to create various types of meshes and surfaces with many applications in architecture and mechanical design.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=36299); [NodeEditor](https://github.com/microelly2/NodeEditor) repository (MIT License), [PyFlow](https://github.com/microelly2/PyFlow) customized fork (Apache 2.0 license), [PyFlow](https://github.com/wonderworks-software/PyFlow) original project (Apache 2.0 license). |

### Trails, PyTrails, Turns, pivy\_trackers, and Geomatics

|  |  |
| --- | --- |
|  | The **Trails** workbench was formerly known as the "Transportation Engineering" workbench. It consists of a toolset for developing highway and railway designs, including horizontal alignments, vertical profiles, and 3D models. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=6973) (original thread that started the project), [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=22277) (main thread, very long); [freecad.trails](https://github.com/joelgraff/freecad.trails) repository (LGPL 2.1), [video example](https://www.youtube.com/watch?v=QRTd7056yy8&feature=youtu.be).  Most of the functions used in the Trails workbench have been placed in a new Python library called **PyTrails**. The expectation is that Trails serves as a FreeCAD based graphical interface for PyTrails, while PyTrails remains a general purpose library that can be used outside FreeCAD in other projects.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=334760#p334760) (PyTrails announcement); [PyTrails](https://github.com/joelgraff/PyTrails) repository (LGPL 2.1). |
|  | The **Turns** workbench is a small component that was created during development of the Trails workbench. It performs vehicle swept-path analysis (turning analysis) for highway intersections and other entrances. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=333290#p333290) (main thread); [freecad.turns](https://github.com/joelgraff/freecad.turns) repository (LGPL 2.1), [animated GIF](https://wiki.freecadweb.org/images/8/86/Turns_vehicle.gif) example. |
|  | After working with Trails and Turns, the author decided to split the tracker code into a separate library called **pivy\_trackers**. This is a general library that could be included in other workbenches to generate tracker objects and perform actions in the scene, like dragging lines, dragging points, and changing certain geometrical elements on the fly. [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=39939), ([2](https://forum.freecadweb.org/viewtopic.php?t=43831), [3](https://forum.freecadweb.org/viewtopic.php?f=8&t=22277&start=890#p373426)); [pivy\_trackers](https://github.com/joelgraff/pivy_trackers) repository (LGPL 2.1), [examples](https://github.com/joelgraff/pivy_trackers/wiki/Examples), [animated GIF](https://wiki.freecadweb.org/images/b/bd/Pivy_trackers_example.gif) example. |
|  | The **Geomatics** workbench provides functionality specific to survey engineering, such as importing geodata information, and creating surfaces from clouds of points. There are some issues with rendering objects that use large coordinates (kilometers) and importing large DXF files. If you want to help solving these issues, please contact the developers. This workbench started as a fork of the older [Geodata](https://github.com/microelly2/geodata) workbench by microelly2. Eventually it became a separate project by HakanSeven12. Now its code has been merged into the **Trails** workbench as it provides complementary functions to it. Therefore, in the future, please use Trails instead of the older Geomatics repository.  [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=34371); [FreeCAD-Geomatics-Workbench](https://github.com/HakanSeven12/FreeCAD-Geomatics-Workbench) repository (LGPL 2.1). |

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.19/it&oldid=1493678>"