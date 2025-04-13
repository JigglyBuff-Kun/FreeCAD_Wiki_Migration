---
title: Note di rilascio della versione 1.0
---
**FreeCAD 1.0** è stato rilasciato il **18 Novembre2024**, scaricalo dalla pagina [Download](/Download/it "Download/it"). Questa pagina elenca tutte le nuove funzionalità e modifiche.

Le note di rilascio delle versioni precedenti di FreeCAD sono disponibili alla pagina [Funzionalità](/Feature_list/it#Note_di_rilascio "Feature list/it").

## In memoriam: Bradley McLean (bgbsww)

Per quanto siamo lieti di presentarvi questa nuova versione, siamo anche tristi di annunciare che il nostro amico e prolifico sviluppatore di FreeCAD [bgbsww](https://github.com/bgbsww) è venuto a mancare poche settimane prima dell'uscita di questa versione. È stato uno dei principali artefici della risoluzione del problema di denominazione topologica, ha scritto parecchio codice e test aggiuntivi ed è diventato lo specialista TNP di FreeCAD. Ha anche aiutato praticamente tutti gli altri sviluppatori ad adattarsi al nuovo algoritmo. A lui è dedicata questa edizione.

## Aspetti generali

|  |  |
| --- | --- |
|  | L'annoso [Problema di denominazione topologica](/Topological_naming_problem/it "Topological naming problem/it") è stato finalmente affrontato grazie allo sforzo congiunto e al duro lavoro di diversi sviluppatori. La [Realthunder algorithm](https://github.com/realthunder/FreeCAD_assembly3/wiki/Topological-Naming-Algorithm) è stata attentamente implementata e migliorata per funzionare nella versione master di FreeCAD. Il progetto ha richiesto più di un anno, e l'implementazione iniziale è stata finalizzata con la seguente PR che ne ha consentito il miglioramento. Il problema TNP non è stato completamente risolto e nella prossima versione seguiranno ulteriori miglioramenti. [Pull request #13705](https://github.com/FreeCAD/FreeCAD/pull/13705) |

|  |  |
| --- | --- |
|  | FreeCAD ha un nuovo [Ambiente Assemblarore](/Assembly_Workbench/it "Assembly Workbench/it") integrato, basato sul lavoro originale svolto per quello che chiamavamo "[the other FreeCAD](https://www.askoh.com/freecad/what_is_freecad/index.html)", un altro software, anch'esso chiamato FreeCAD, con funzionalità di simulazione del movimento creato contemporaneamente al nostro. Il porting è stato effettuato dallo stesso autore di FreeCAD, [Dr. Aik-Siong Koh](https://www.askoh.com), e con questa mossa sensazionale entrambi i FreeCAD sono ora finalmente uniti. Leggere di seguito per [ulteriori informazioni](#Assembly_Workbench/it). [Pull request #10427](https://github.com/FreeCAD/FreeCAD/pull/10427) |

|  |  |
| --- | --- |
|  | FreeCAD ha un nuovo logo. È stato selezionato tra i 5 vincitori del concorso pubblico. Le linee guida per il suo utilizzo ed un kit sono disponibili alla pagina [Linee guida per il marchio di FreeCAD](https://fpa.freecad.org/handbook/process/logo.html). [Pull request #14284](https://github.com/FreeCAD/FreeCAD/pull/14284) |

## Interfaccia utente

|  |  |
| --- | --- |
|  | È stato aggiunto un indicatore del centro di rotazione. Questo indicatore viene visualizzato quando la vista viene ruotata trascinando il mouse. Facoltativamente può essere disabilitato nelle preferenze. Ci sono anche impostazioni per colore, trasparenza e dimensione. [Pull request #9909](https://github.com/FreeCAD/FreeCAD/pull/9909) e [Pull request #10790](https://github.com/FreeCAD/FreeCAD/pull/10790) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | Sono stati aggiunti [Filtri di selezione](/Part_SelectFilter/it "Part SelectFilter/it") , facilitando la selezione di vertici, bordi e facce. [Pull request #10271](https://github.com/FreeCAD/FreeCAD/pull/10271) |

|  |  |
| --- | --- |
|  | Per una maggiore flessibilità, il pannello delle attività è ora un widget agganciabile autonomo. Può essere [ancorato](/Combo_view/it#Dock_Task_panel_on_top_of_Combo_view "Combo view/it") sopra la vista Combinata per ottenere il layout compatto delle versioni precedenti. [Pull request #10681](https://github.com/FreeCAD/FreeCAD/pull/10681) e [Pull request #10848](https://github.com/FreeCAD/FreeCAD/pull/10848) |

|  |  |
| --- | --- |
|  | L'aspetto dello strumento [Trasforma](/Std_TransformManip/it "Std TransformManip/it") è stato migliorato. Ora dispone anche di una serie di trascinatori planari per spostare gli oggetti lungo i 3 piani predefiniti. [Pull request #10706](https://github.com/FreeCAD/FreeCAD/pull/10706) |

|  |  |
| --- | --- |
|  | È stata aggiunta la funzionalità di Realthunder che consente la sovrapposizione dei widget del dock (trasparenza dell'albero e delle attività). [Pull request #7888](https://github.com/FreeCAD/FreeCAD/pull/7888) |

|  |  |
| --- | --- |
|  | La posizione della sorgente luminosa può ora essere impostata nelle preferenze (*Preferenze → Display*). [Pull request #11146](https://github.com/FreeCAD/FreeCAD/pull/11146) e [Pull request #15877](https://github.com/FreeCAD/FreeCAD/pull/15877) |

|  |  |
| --- | --- |
|  | La finestra Preferenze è stata ridisegnata per sostituire le schede con una visualizzazione ad albero. [Pull request #11018](https://github.com/FreeCAD/FreeCAD/pull/11018) |

|  |  |
| --- | --- |
|  | È stato aggiunto il selettore TabBar degli ambienti di lavoro. Può essere abilitato e configurato in *Preferenze → Ambienti di lavoro*. [Pull request #12270](https://github.com/FreeCAD/FreeCAD/pull/12270) |

|  |  |
| --- | --- |
|  | È stato aggiunto un nuovo [strumento di misurazione universale](/Std_Measure/it "Std Measure/it") , in sostituzione dei vecchi [Strumenti di misurazione Part](/Part_Workbench/it#Misura "Part Workbench/it"). [Pull request #9750](https://github.com/FreeCAD/FreeCAD/pull/9750) e seguenti |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | È stato aggiunto lo strumento [Allinea alla selezione](/Std_AlignToSelection/it "Std AlignToSelection/it"), che consente di inserire viste normali alle facce o seguendo le direzioni dei bordi. [Pull request #13906](https://github.com/FreeCAD/FreeCAD/pull/13906) |

### Ulteriori miglioramenti dell'interfaccia utente

* È stato introdotto un sistema di unità di progetto. [Pull request #9521](https://github.com/FreeCAD/FreeCAD/pull/9521)
* Lo strumento [Taglio sezione persistente](/Part_SectionCut/it "Part SectionCut/it") ora funziona anche in una vista prospettica. [Pull request #10143](https://github.com/FreeCAD/FreeCAD/pull/10143)
* È stata aggiunta un'opzione per ordinare gli ambienti di lavoro in ordine alfabetico (disponibile dopo aver fatto clic con il tasto destro in *Preferenze → Ambienti di lavoro*). [Pull request #10363](https://github.com/FreeCAD/FreeCAD/pull/10363)
* Un filtro **Trova file** e un filtro **Trova nei file** sono stati aggiunti alla finestra di dialogo [Esegui la macro](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it"). [Pull request #10714](https://github.com/FreeCAD/FreeCAD/pull/10714)
* Il [Menu Visualizza](/Std_View_Menu/it "Std View Menu/it") e la barra degli strumenti Visualizza sono stati rivisti. [Pull request #10761](https://github.com/FreeCAD/FreeCAD/pull/10761)
* Il pulsante di arresto è stato rimosso dalla [barra degli strumenti Macro](/Macros/it "Macros/it"). Il [pulsante di registrazione](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it") ora è diventato un pulsante di arresto quando la registrazione è in corso. [Pull request #10836](https://github.com/FreeCAD/FreeCAD/pull/10836)
* Il pulsante di ripristino nelle Preferenze ora mostra un menu con opzioni per ripristinare le impostazioni a diversi livelli: tutto, nel gruppo corrente o nella scheda corrente. [Pull request #10688](https://github.com/FreeCAD/FreeCAD/pull/10688) e [Pull request #11038](https://github.com/FreeCAD/FreeCAD/pull/11038)
* Il modulo Guida è stato unificato in modo che non sia più necessario scaricare un componente aggiuntivo per utilizzarlo. [Pull request #11008](https://github.com/FreeCAD/FreeCAD/pull/11008)
* Sono state aggiunte le preferenze per personalizzare il tema corrente. [Pull request #10238](https://github.com/FreeCAD/FreeCAD/pull/10238)
* Le impostazioni di selezione predefinite sono state modificate per rendere più semplice la selezione degli oggetti nella finestra 3D. [Pull request #11187](https://github.com/FreeCAD/FreeCAD/pull/11187)
* È stato aggiunto uno schema di unità solo per metri denominato **Metro decimale** poiché il sistema MKS (m/kg/s/gradi) non sempre comporta la visualizzazione delle dimensioni in metri: i millimetri vengono ancora utilizzati per i valori inferiori 0,1 m mentre per alcune applicazioni (ad es. ingegneria civile) è utile un sistema di unità che converta effettivamente la visualizzazione di tutte le dimensioni in metri. [Pull request #11365](https://github.com/FreeCAD/FreeCAD/pull/11365)
* Ulteriori dimensioni dei marcatori (20, 25 e 30px) sono state aggiunte a *Preferenze → Display → Vista 3D → Dimensioni marcatore* per assistere gli utenti di schermi 4K. [Pull request #11524](https://github.com/FreeCAD/FreeCAD/pull/11524)
* Un'opzione "Attiva/disattiva trasparenza" è stata aggiunta ai menu Vista e contestuali per attivare o disattivare rapidamente la trasparenza per gli oggetti selezionati. [Pull request #10805](https://github.com/FreeCAD/FreeCAD/pull/10805)
* È stato aggiunto il comando Blocca barre degli strumenti. Con esso le posizioni della barra degli strumenti possono essere bloccate o sbloccate. È disponibile nel menu Visualizza e nel menu contestuale dell'area degli strumenti. [Pull request #11596](https://github.com/FreeCAD/FreeCAD/pull/11596)
* Il colore predefinito della forma (shape) è stato modificato per migliorare l'aspetto dei modelli. [Pull request #12380](https://github.com/FreeCAD/FreeCAD/pull/12380) e [Pull request #12488](https://github.com/FreeCAD/FreeCAD/pull/12488)
* Gli elementi all'interno dei contenitori Part e Gruppo ora possono essere ordinati trascinandoli. [Pull request #12293](https://github.com/FreeCAD/FreeCAD/pull/12293)
* Le icone di visibilità (simbolo dell'occhio) vengono aggiunte agli oggetti dell'albero se l'opzione Mostra icona di visibilità è selezionata in *Preferenze → Visualizzazione → IU*. [Pull request #12298](https://github.com/FreeCAD/FreeCAD/pull/12298)
* È stato aggiunto uno stato [congelato](/Std_ToggleFreeze/it "Std ToggleFreeze/it")(opzione *Attiva/disattiva congelamento* nel menu contestuale in [vista ad albero](/Tree_view/it "Tree view/it")), rendendo possibile disattivare il comportamento parametrico di un oggetto (in modo che non cambi nemmeno se gli oggetti da cui dipende cambiano). [Pull request #12580](https://github.com/FreeCAD/FreeCAD/pull/12580)
* È stata aggiunta una proprietà "Soppresso" per disattivare temporaneamente una funzionalità. Attualmente, è nascosto nell'ambiente PartDesign (fare clic con il pulsante destro del mouse su [Editor proprietà](/Property_editor/it "Property editor/it") e selezionare *Mostra tutto* per vederlo) fino al completamento della correzione del [TNP](/Topological_naming_problem/it "Topological naming problem/it"). [Pull request #12096](https://github.com/FreeCAD/FreeCAD/pull/12096) e [Pull request #12412](https://github.com/FreeCAD/FreeCAD/pull/12412)
* Le animazioni di navigazione sono state migliorate. Le animazioni ora utilizzano una funzione di andamento e hanno una durata fissa che può essere modificata in *Preferenze → Visualizzazione → Navigazione*. [Pull request #10881](https://github.com/FreeCAD/FreeCAD/pull/10881) e [Pull request #12205](https://github.com/FreeCAD/FreeCAD/pull/12205)
* I pulsanti per le visualizzazioni predefinite sono ora raggruppati sotto un unico pulsante. I singoli pulsanti sono ancora disponibili nella barra degli strumenti aggiuntiva *Viste individuali*. [Pull request #12878](https://github.com/FreeCAD/FreeCAD/pull/12878)
* Il nome del documento attivo corrente viene ora visualizzato anche nella barra del titolo della finestra. [Pull request #12035](https://github.com/FreeCAD/FreeCAD/pull/12035)
* È stato aggiunto un comando per visualizzare il pannello [Vista proprietà](/Property_editor/it "Property editor/it"). [Pull request #12024](https://github.com/FreeCAD/FreeCAD/pull/12024)
* L'integrazione dei dispositivi 3Dconnexion con FreeCAD su Windows è stata migliorata. [Pull request #12929](https://github.com/FreeCAD/FreeCAD/pull/12929)
* È stata aggiunta una funzione Misura Rapida. Utilizza la [Barra di stato](/Status_bar/it "Status bar/it") per visualizzare le informazioni chiave sulla misurazione (lunghezza del bordo, area della faccia, distanza/angolo tra punti/bordi e raggio di bordi circolari/facce cilindriche) sulla selezione corrente nella vista 3D. [Pull request #12217](https://github.com/FreeCAD/FreeCAD/pull/12217)
* Le barre degli strumenti ora possono essere trascinate e rilasciate sulle barre di stato e dei menu. [Pull request #13571](https://github.com/FreeCAD/FreeCAD/pull/13571)
* È stato aggiunto un pulsante *Ricarica foglio di stile* per facilitare lo sviluppo del foglio di stile. Per impostazione predefinita non appartiene a nessuna barra degli strumenti, deve essere aggiunto manualmente da *Strumenti → Personalizza → Barre degli strumenti → Visualizza*. [Pull request #13982](https://github.com/FreeCAD/FreeCAD/pull/13982)
* Le icone dei documenti (incluse quelle [Apri](/Std_Open/it "Std Open/it") e [Salva](/Std_Save/it "Std Save/it"), tra le altre) sono state migliorate e unificate. [Pull request #13865](https://github.com/FreeCAD/FreeCAD/pull/13865)
* L'icona [Visualizza tutto](/Std_ViewFitAll/it "Std ViewFitAll/it") è stata sostituita per maggiore chiarezza. [Pull request #14180](https://github.com/FreeCAD/FreeCAD/pull/14180)
* Sono state migliorate ulteriori icone principali (come [Nuovo](/Std_New/it "Std New/it")). [Pull request #14278](https://github.com/FreeCAD/FreeCAD/pull/14278), [Pull request #14434](https://github.com/FreeCAD/FreeCAD/pull/14434) e [.com/FreeCAD/FreeCAD/pull/14154 Pull request #14154](https://github)
* Le icone delle intestazioni dei pannelli attività Sketcher e Part Design sono state migliorate. [Pull request #13968](https://github.com/FreeCAD/FreeCAD/pull/13968)
* In [modalità headless](/index.php?title=Headless_FreeCAD/it&action=edit&redlink=1 "Headless FreeCAD/it (page does not exist)") la console interattiva Python ora dispone del completamento con tabulazioni, a condizione che il modulo [readline](https://docs.python.org/3/library/readline.html) sia disponibile. [Pull request #14213](https://github.com/FreeCAD/FreeCAD/pull/14213)
* È stata aggiunta un'opzione per visualizzare i nomi interni nella visualizzazione ad albero. È disabilitata per impostazione predefinita e può essere attivata in *Preferenze → Visualizzazione → Interfaccia utente → Nascondi nomi interni*. [Pull request #14237](https://github.com/FreeCAD/FreeCAD/pull/14237)
* Il pulsante Guida è stato rimosso dalle Preferenze perché non funzionante. [Pull request #14695](https://github.com/FreeCAD/FreeCAD/pull/14695)
* I fogli di stile predefiniti sono stati migliorati in modo significativo e ora sono offerti in due varianti oltre a quelle classiche: chiara e scura. [Pull request #13772](https://github.com/FreeCAD/FreeCAD/pull/13772)
* Le pagine Tema e UI nel gruppo Visualizzazione delle Preferenze sono state riorganizzate e combinate. Alcune preferenze sono state spostate nella nuova pagina Avanzate. [Pull request #14974](https://github.com/FreeCAD/FreeCAD/pull/14974)
* Le preferenze di controllo e perfezionamento di Part/Part Design sono ora attivate per impostazione predefinita. [Pull request #14406](https://github.com/FreeCAD/FreeCAD/pull/14406)
* È stato aggiunto un nuovo parametro: **BaseApp/Preferences/Bitmaps/Theme/UseIconTheme** (booleano): impostarlo su true per forzare Qt a utilizzare le icone del tema delle icone del sistema. Il valore predefinito è false quindi FreeCAD utilizzerà le proprie icone. Non influisce su altri meccanismi del tema delle icone Qt come finestre di dialogo di sistema, pulsanti e altro. Questi dovrebbero sempre utilizzare le icone del tema di sistema. [Pull request #16018](https://github.com/FreeCAD/FreeCAD/pull/16018)
* Le informazioni su fogli di stile, temi e QtStyle sono ora incluse in *Aiuto → Informazioni su FreeCAD*. [Pull request #16281](https://github.com/FreeCAD/FreeCAD/pull/16281)
* La schermata iniziale viene ora selezionata casualmente all'avvio da più immagini, inclusi modelli utente e presentazioni di alcuni ambienti di lavoro aggiuntivi. [Pull request #16071](https://github.com/FreeCAD/FreeCAD/pull/16071)
* È stata aggiunta una modalità provvisoria che può essere attivata tramite *Aiuto → Riavvia in modalità provvisoria*. Disabilita temporaneamente le configurazioni utente, i componenti aggiuntivi, i temi e altre personalizzazioni per eseguire FreeCAD in uno stato di "ripristino delle impostazioni di fabbrica" ​​per il debug. [Pull request #16858](https://github.com/FreeCAD/FreeCAD/pull/16858)

## Modifiche al formato del file

Sebbene siano state prese precauzioni per garantire che i file creati con la nuova versione 1.0 possano ancora essere aperti nelle versioni precedenti di FreeCAD, alcune nuove funzionalità introdotte nella 1.0 non possono essere comprese dalle versioni precedenti e possono causare la rottura o la comparsa di problemi dei modelli salvati con la 1.0. quando aperto in versioni precedenti di FreeCAD. Di seguito è riportato un riepilogo dei possibili problemi che si potrebbe riscontrare e la relativa soluzione. La comunità del forum può fornire aiuto per risolvere i problemi di compatibilità.

* la proprietà **Attachment** è stata rinominata in **AttachmentSupport**. Ciò significa che le funzionalità che si basano su tale proprietà (in particolare i modelli che utilizzano il componente aggiuntivo Assembly4) dovranno essere corrette per essere aperte in una versione precedente di FreeCAD. Una [macro è disponibile qui](/Macro_Convert_021 "Macro Convert 021") per correggere questi file.

## Sistema principale e API

### Sistema principale

* Le funzioni vettoriali della [API dei vettori](/Vector_API/it "Vector API/it") ora possono essere utilizzate nelle [Espressioni](/Expressions/it "Expressions/it"). [Pull request #8603](https://github.com/FreeCAD/FreeCAD/pull/10237).
* L'editor Python adesso, quando si preme il tasto Invio, fa corrispondere il rientro della riga precedente [Pull request #11356](https://github.com/FreeCAD/FreeCAD/pull/11356).
* Il nome della proprietà che contiene gli oggetti di riferimento di un allegato è cambiato da Dati**Support** a Dati**AttachmentSupport**. [Pull request #12714](https://github.com/FreeCAD/FreeCAD/pull/12714).
* Un contenitore di proprietà, App::VarSet, è stato introdotto come funzionalità principale. Un VarSet consente agli utenti di definire proprietà che possono essere utilizzate nei modelli proprio come alias di fogli di calcolo e altri contenitori di proprietà precedenti (Dynamic Data, Path PropertyBags, e Assembly 4 Variables). [Pull request #12135](https://github.com/FreeCAD/FreeCAD/pull/12135)

### API

#### API Python nuove

* `getUpDirection`: Ottiene la direzione verso l'alto da una vista View3DInventor. [Pull request #10060](https://github.com/FreeCAD/FreeCAD/pull/10060)

#### API Python modificate

* Per salvare/ripristinare dati personalizzati da una feature Python, i metodi precedentemente chiamati `__getstate__`/`__setstate__` sono stati rinominati in `dumps`/`loads`. Ciò è dovuto a cambiamenti interni in Python-3.11. [Pull request #10769](https://github.com/FreeCAD/FreeCAD/pull/10769) e [Pull request #12243](https://github.com/FreeCAD/FreeCAD/pull/12243).

## Start

L'Ambiente Start è stato sostituito da una pagina iniziale, un'app basata su QtWidgets. Può essere visualizzato utilizzando l'opzione *Aiuto → Start*. [Pull request #13134](https://github.com/FreeCAD/FreeCAD/pull/13134)

Le prime due richieste pull menzionate di seguito appartengono all'Ambiente Start, ma hanno caratterizzato il layout della pagina iniziale.

![](/images/Start_page_template_buttons_new_relnotes_1.0.png)

|  |
| --- |
| Alla pagina iniziale è stata aggiunta una sezione **Nuovo file** che include una serie di pulsanti di avvio rapido. [Pull request #10171](https://github.com/FreeCAD/FreeCAD/pull/10171) |

|  |  |
| --- | --- |
|  | Il design visivo della pagina iniziale è stato revisionato. Ora sembra più moderno e coerente. [Pull request #10391](https://github.com/FreeCAD/FreeCAD/pull/10391) |

|  |  |
| --- | --- |
|  | È stato aggiunto un semplice widget di primo avvio che verrà esteso nel prossimo futuro. [Pull request #13650](https://github.com/FreeCAD/FreeCAD/pull/13650) |

## Ambiente Assembly

|  |  |
| --- | --- |
|  | Un ambiente di lavoro [Assembly](/Assembly_Workbench/it "Assembly Workbench/it") integrato è stato finalmente aggiunto a FreeCAD. Utilizza il risolutore open source [Ondsel](https://github.com/Ondsel-Development/OndselSolver). Le funzionalità di base (giunti) sono già disponibili. Ulteriori sviluppi sono in corso. [Pull request #10427](https://github.com/FreeCAD/FreeCAD/pull/10427), [Pull request #10764](https://github.com/FreeCAD/FreeCAD/pull/10764), [Pull request #12406](https://github.com/FreeCAD/FreeCAD/pull/12406) and more |

### Ulteriori miglioramenti di Assembly

* È stata aggiunta una [Vista esplosa](/index.php?title=Assembly_CreateView/it&action=edit&redlink=1 "Assembly CreateView/it (page does not exist)"). [Pull request #12419](https://github.com/FreeCAD/FreeCAD/issues/12419)
* Le icone Assembly sono state aggiornate e le funzionalità sperimentali sono state esposte. [Pull request #13866](https://github.com/FreeCAD/FreeCAD/pull/13866)
* Sono stati aggiunti i giunti angolari, perpendicolari e paralleli. [Pull request #14008](https://github.com/FreeCAD/FreeCAD/pull/14008)
* È stata aggiunta una funzionalità [Distinta materiali](/Assembly_CreateBom "Assembly CreateBom"). [Pull request #14198](https://github.com/FreeCAD/FreeCAD/pull/14198)
* È stato aggiunto il supporto per il codice di mitigazione [TNP](/Topological_naming_problem/it "Topological naming problem/it"). [Pull request #14674](https://github.com/FreeCAD/FreeCAD/pull/14674)
* È stato aggiunto il supporto flessibile dei sottoassiemi. I sottoassiemi aggiunti ad un assieme padre possono essere definiti come rigidi (un'unità solida) o flessibili (consentono il movimento dei singoli componenti). Per i sottoassiemi aggiunti durante il ciclo di sviluppo prima dell'unione di questa funzionalità sono necessari passaggi manuali. Tali assiemi dovranno essere rimossi e aggiunti nuovamente all'assieme padre. [Pull request #15629](https://github.com/FreeCAD/FreeCAD/pull/15629)

## Ambiente BIM

|  |  |
| --- | --- |
|  | L'Ambiente Arch è stato finalmente fuso con [BIM](/BIM_Workbench/it "BIM Workbench/it"), diventando il nuovo ambiente BIM. Il nuovo workbench BIM mantiene tutti gli strumenti di Arch, ne aggiunge alcuni altri e apporta molti miglioramenti all'intero flusso di lavoro BIM e di progettazione architettonica, oltre a migliori strumenti di configurazione e gestione e un migliore supporto IFC. [Pull request #13783](https://github.com/FreeCAD/FreeCAD/pull/13783) |

### Ulteriori miglioramenti di BIM

* Provenendo dall'ambiente BIM, alcuni strumenti Arch "tutto in uno" sono stati suddivisi per diversi casi d'uso: lo strumento [Arch Parte Edificio](/Arch_BuildingPart/it "Arch BuildingPart/it") è stato suddiviso in [BIM Edificio](/Arch_Building/it "Arch Building/it") e [BIM Livello](/Arch_Floor/it "Arch Floor/it"), lo strumento [Arch Struttura](/Arch_Structure/it "Arch Structure/it") è stato suddiviso in [BIM Colonna](/index.php?title=BIM_Column/it&action=edit&redlink=1 "BIM Column/it (page does not exist)"), [BIM Trave](/index.php?title=BIM_Beam/it&action=edit&redlink=1 "BIM Beam/it (page does not exist)") e [BIM Lastra](/index.php?title=BIM_Slab/it&action=edit&redlink=1 "BIM Slab/it (page does not exist)"), e lo strumento [Arch Finestra](/Arch_Window/it "Arch Window/it") è stato suddiviso in [BIM Finestra](/Arch_Window/it "Arch Window/it") e [BIM Porta](/BIM_Door/it "BIM Door/it"). Internamente, questi strumenti producono ancora lo stesso oggetto, solo con diversi tipi IFC e preimpostazioni applicate. [Pull request #13783](https://github.com/FreeCAD/FreeCAD/pull/13783)
* Anche [NativeIFC](https://github.com/yorikvanhavre/FreeCAD-NativeIFC) è stato unito al nuovo ambiente di lavoro BIM. Con NativeIFC, ora è possibile lavorare sui file IFC in FreeCAD in modo nativo, senza più traduzioni da e verso il formato di file di FreeCAD. Maggiori informazioni sulla pagina [NativeIFC](/index.php?title=NativeIFC/it&action=edit&redlink=1 "NativeIFC/it (page does not exist)"). [Pull request #13783](https://github.com/FreeCAD/FreeCAD/pull/13783)
* Il comando [Arch Taglio con piano](/Arch_CutPlane/it "Arch CutPlane/it") è stato migliorato. Ora è in grado di riconoscere la nidificazione e il collegamento e la selezione è più flessibile. È anche possibile selezionare i bordi rendendo obsoleto il comando Arch CutLine. [Pull request #11254](https://github.com/FreeCAD/FreeCAD/pull/11254) e [Pull request #11792](https://github.com/FreeCAD/FreeCAD/pull/11792)
* Le preferenze di BIM sono state controllate e migliorate. Le pagine nell'[Editor Preferenze](/Preferences_Editor/it "Preferences Editor/it") hanno un nuovo layout. [Pull request #11940](https://github.com/FreeCAD/FreeCAD/pull/11940) e [Pull request #12038](https://github.com/FreeCAD/FreeCAD/pull/12038)
* Al comando [Arch Finestra](/Arch_Window "Arch Window") è stata aggiunta la preimpostazione *Sola apertura*. [Pull request #12209](https://github.com/FreeCAD/FreeCAD/pull/12209)
* L'oggetto [Arch Tetto](/Arch_Roof/it "Arch Roof/it") ora ha una proprietà *Subvolume*. Ciò consente di utilizzare un oggetto solido personalizzato come volume di sottrazione per un tetto. [Pull request #12346](https://github.com/FreeCAD/FreeCAD/pull/12346)
* Inoltre per un oggetto [Arch Tetto](/Arch_Roof/it "Arch Roof/it") che utilizza un oggetto solido come *Base* viene ora generato automaticamente un volume di sottrazione appropriato. Proprio come un tetto basato su polilinea, un tetto di questo tipo può essere sottratto dalle pareti di un edificio con [Arch Rimuovi](/Arch_Remove/it "Arch Remove/it"). [Pull request #13221](https://github.com/FreeCAD/FreeCAD/pull/13221)
* Lo strumento [Arch Riferimento](/Arch_Reference/it "Arch Reference/it") è stato aggiornato: gli oggetti di riferimento ora possono utilizzare l'intero contenuto del file invece di dover scegliere una parte, è stato aggiunto il supporto per i file DXF e IFC. [Pull request #13287](https://github.com/FreeCAD/FreeCAD/pull/13287)
* FreeCAD ora ha un nuovo file di esempio BIM. [Pull request #14937](https://github.com/FreeCAD/FreeCAD/pull/14937)
* Il nuovo ambiente BIM offre anche una serie di nuovi strumenti di gestione, per aiutarti a impostare il tuo progetto o gestire in blocco le proprietà IFC dei tuoi oggetti. Maggiori informazioni sulla pagina [Ambiente BIM](/BIM_Workbench/it "BIM Workbench/it").
* [IfcOpenShell](/IfcOpenShell/it "IfcOpenShell/it"), un altro software open source necessario per lavorare con i file IFC in FreeCAD, è ora incluso in tutti i pacchetti di installazione ufficiali offerti dal team di FreeCAD. Se si ottiene FreeCAD da un fornitore di terze parti, come la propria distribuzione Linux, dove IfcOpenShell non è ancora stato reso disponibile come pacchetto ufficiale, l'ambiente BIM offre uno strumento di utilità per scaricare e installare IfcOpenShell. E se non serve IFC, l'ambiente BIM funziona ancora al 100% senza IfcOpenShell.
* Le barre degli strumenti e i menu del BIM Workbench sono stati rielaborati. [Pull request #14087](https://github.com/FreeCAD/FreeCAD/pull/14087)

## Ambiente CAM

* L'ambiente Path è ora denominato CAM. [​​Pull request #12665](https://github.com/FreeCAD/FreeCAD/pull/12665)

### Ulteriori miglioramenti di CAM

* La lavorazione del materiale residuo (Rest machining) è stata reimplementata per prendere input dal G-code delle operazioni precedenti (invece di utilizzare gli interni delle operazioni [Area](/CAM_Area/it "CAM Area/it")). Ciò abilita il supporto per la lavorazione del materiale residuo nelle operazioni di area dopo quelle non di area (in particolare adattiva). [Pull request #11939](https://github.com/FreeCAD/FreeCAD/pull/11939)
* La compensazione dell'altezza utensile G43 è stata aggiunta al post-processore CAM del baricentro. [Pull request #12652](https://github.com/FreeCAD/FreeCAD/pull/12652)
* È stata aggiunta l'opzione "Feed retract" alle impostazioni delle operazioni di alesatura e foratura. [Pull request #13254](https://github.com/FreeCAD/FreeCAD/pull/13254)
* È stato aggiunto un nuovo simulatore CAM basato su funzioni OpenGL di basso livello (più veloce e preciso). [Pull request #13884](https://github.com/FreeCAD/FreeCAD/pull/13884) e [Pull request #15597](https://github.com/FreeCAD/FreeCAD/pull/15597)
* L'operazione [Vcarve](/CAM_Vcarve/it "CAM Vcarve/it") è stata rielaborata per includere funzionalità comunemente disponibili in altri software CAM (Step down, passaggio di finitura, ottimizzazione del movimento della testa e metodo debugVoronoi) rendendo possibile migliorare drasticamente la qualità della superficie scolpita aumentando la velocità di intaglio fino a 50%. [Pull request #14093](https://github.com/FreeCAD/FreeCAD/pull/14093)
* Sono stati aggiunti modelli di materiali lavorabili e diversi materiali. [Pull request #14460](https://github.com/FreeCAD/FreeCAD/pull/14460), [Pull request #15910](https://github.com/FreeCAD/FreeCAD/pull/15910) e [Pull request #16021](https://github.com/FreeCAD/FreeCAD/pull/16021)

## Ambiente Draft

* Un'opzione di giustificazione e diverse proprietà correlate sono state aggiunte a [Draft Forma da Testo](/Draft_ShapeString/it "Draft ShapeString/it"). [Pull request #10233](https://github.com/FreeCAD/FreeCAD/pull/10233)
* Le [Quote radiali](/Draft_Dimension/it#Usage_radial_dimension "Draft Dimension/it") ora mostrano solo una singola freccia. [Pull request #10655](https://github.com/FreeCAD/FreeCAD/pull/10655)
* Una proprietà Angolo obliquo è stata aggiunta a [Draft Forma da Testo](/Draft_ShapeString/it "Draft ShapeString/it"). [Pull request #10783](https://github.com/FreeCAD/FreeCAD/pull/10783)
* È stato aggiunto il supporto per i collegamenti ipertestuali. I collegamenti ipertestuali a file e URL locali e remoti, in [Draft Testi](/Draft_Text/it "Draft Text/it") e [Draft Etichette](/Draft_Label/it "Draft Label/it") possono essere aperti dal menu contestuale [Vista ad albero](/Tree_view/it "Tree view/it") o [Vista 3D](/3D_view/it "3D view/it"). [Pull request #10878](https://github.com/FreeCAD/FreeCAD/pull/10878)
* Il codice [Piano di lavoro Draft](/Draft_SelectPlane/it "Draft SelectPlane/it") è stato rielaborato. Ora c'è un piano di lavoro per vista 3D. [Pull request #11010](https://github.com/FreeCAD/FreeCAD/pull/11010)
* La funzionalità della cronologia e le opzioni di allineamento del comando [Draft Seleziona Piano](/Draft_SelectPlane/it "Draft SelectPlane/it") sono state migliorate. [Pull request #11062](https://github.com/FreeCAD/FreeCAD/pull/11062)
* Il comportamento della [griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it") è stato migliorato. La sua visibilità è ora memorizzata per vista 3D. Quando si passa a un ambiente di lavoro diverso, tutte le griglie vengono nascoste (è disponibile un parametro [fine-tuning](/Fine-tuning/it "Fine-tuning/it") per disabilitarlo). [Pull request #11336](https://github.com/FreeCAD/FreeCAD/pull/11336)
* Le preferenze Draft sono state controllate e migliorate. Sono state aggiunte alcune preferenze, quelle obsolete sono state rimosse. Le pagine nell'[Editor Preferenze](/Preferences_Editor/it "Preferences Editor/it") hanno un nuovo layout e mostrano le unità ove applicabile. Non è più necessario riavviare FreeCAD dopo aver modificato una preferenza Draft. [Pull request #11379](https://github.com/FreeCAD/FreeCAD/pull/11379), [Pull request #11503](https://github.com/FreeCAD/FreeCAD/pull/11503), [.com/FreeCAD/FreeCAD/pull/11512 Pull request #11512](https://github), [Pull request #11550](https://github.com/FreeCAD/FreeCAD/pull/11550), [/pull/11579 Pull request #11579](https://github.com/FreeCAD/FreeCAD), [Pull request #11585](https://github.com/FreeCAD/FreeCAD/pull/11585), [Pull request #11677](https://github.com/FreeCAD/FreeCAD/pull/11677), [Pull request #11694](https://github.com/FreeCAD/FreeCAD/pull/11694) e [Pull request #16603](https://github.com/FreeCAD/FreeCAD/pull/16603)
* Una nuova impostazione "Ritardo del mouse" è stata aggiunta alle preferenze di Aggancio. Se è diverso da zero (il valore predefinito è 1), dopo aver immesso un numero in uno dei campi di input del pannello attività, il movimento del mouse verrà disabilitato e quindi non modificherà il valore nel campo di input per un dato periodo di tempo. L'impostazione di un valore molto grande praticamente disabilita il movimento del mouse fino al termine del comando. [Pull request #12624](https://github.com/FreeCAD/FreeCAD/pull/12624)
* Un pulsante per cambiare rapidamente il colore della griglia è stato aggiunto al pannello delle attività del comando [Draft Seleziona Piano](/Draft_SelectPlane/it "Draft SelectPlane/it"). [Pull request #13051](https://github.com/FreeCAD/FreeCAD/pull/13051)
* Una proprietà *Fuse* è stata aggiunta a [Draft Serie su Punti](/Draft_PointArray/it "Draft PointArray/it"), [Draft Serie su tracciato](/Draft_PathArray/it "Draft PathArray/it") e Draft PathTwistedArrays. [Pull request #13172](https://github.com/FreeCAD/FreeCAD/pull/13172) e [Pull request #13191](https://github.com/FreeCAD/FreeCAD/pull/13191)
* Il pulsante del [Attiva/disattiva griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it") ora si comporta come un pulsante di attivazione/disattivazione, fornendo un feedback visivo dello stato della griglia (visibile o nascosto). [Pull request #14452](https://github.com/FreeCAD/FreeCAD/pull/14452)

### Ulteriori miglioramenti di Draft

* [Draft Lega facce](/Draft_Facebinder/it "Draft Facebinder/it") ora può gestire facce appartenenti a collegamenti e facce nidificate in [Std Parti](/Std_Part/it "Std Part/it"). [Pull request #11081](https://github.com/FreeCAD/FreeCAD/pull/11081)
* Alcune impostazioni sono state aggiunte al comando [Draft Imposta stile](/Draft_SetStyle/it "Draft SetStyle/it"). [Pull request #11593](https://github.com/FreeCAD/FreeCAD/pull/11593), [Pull request #11694](https://github.com/FreeCAD/FreeCAD/pull/11694) e [Pull request #13914](https://github.com/FreeCAD/FreeCAD/pull/13914)
* Sono state aggiunte impostazioni anche al comando [Draft Applica stile](/Draft_ApplyStyle/it "Draft ApplyStyle/it"). [Pull request #11610](https://github.com/FreeCAD/FreeCAD/pull/11610) e [Pull request #13914](https://github.com/FreeCAD/FreeCAD/pull/13914)
* I marcatori di cattura, modifica e tracciamento ora utilizzano la preferenza [Dimensione marcatore](/Preferences_Editor/it#Vista_3D "Preferences Editor/it"). [Pull request #11688](https://github.com/FreeCAD/FreeCAD/pull/11688) e [Pull request #16603](https://github.com/FreeCAD/FreeCAD/pull/16603)
* Alcune icone Draft sono state modificate per migliorarne l'aspetto. [Pull request #13585](https://github.com/FreeCAD/FreeCAD/pull/13585)
* L'[Oggetto Draft Layer](/Draft_Layer/it "Draft Layer/it") è stato aggiornato per il nuovo sistema di gestione dei materiali. Ora ha una proprietà "Aspetto forma" e una proprietà "Sostituisci figli aspetto forma". [Pull request #13949](https://github.com/FreeCAD/FreeCAD/pull/13949)
* [Draft Raccorda](/Draft_Fillet/it "Draft Fillet/it") ora può essere applicato anche agli archi. [Pull request #14774](https://github.com/FreeCAD/FreeCAD/pull/14774)

## Ambiente FEM

|  |  |
| --- | --- |
|  | La posizione delle etichette della legenda dei colori è stata modificata per rendere meno probabile che quelle in alto vengano coperte dal cubo di navigazione. Il carattere e il colore predefiniti delle etichette sono stati modificati per aumentare la visibilità e sono state aggiunte preferenze per consentire la modifica del colore e delle dimensioni dell'etichetta. [Pull request #10552](https://github.com/FreeCAD/FreeCAD/pull/10552) |

|  |  |
| --- | --- |
|  | Il comando [FEM PostFilterLinearizedStresses](/FEM_PostFilterLinearizedStresses "FEM PostFilterLinearizedStresses") ora può utilizzare i componenti del tensore di sollecitazione per i calcoli di sollecitazione linearizzata. In precedenza, a questo scopo potevano essere utilizzate solo le sollecitazioni Von Mises, Tresca e principali (maggiori/intermedie/minori). [Pull request #11724](https://github.com/FreeCAD/FreeCAD/pull/11724) |

|  |  |
| --- | --- |
|  | È stato aggiunto il supporto per la simmetria ciclica tramite [Legame di vincolo](/FEM_ConstraintTie/it "FEM ConstraintTie/it") in CalculiX, rendendo possibile l'analisi di modelli con simmetria periodica rotazionale utilizzando un singolo settore ripetitivo. [Pull request #12289](https://github.com/FreeCAD/FreeCAD/pull/12289) |

|  |  |
| --- | --- |
|  | È stato aggiunto il supporto per le analisi 2D (sollecitazione piana, deformazione piana e assialsimmetrica) per il [Solutore CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"). Sono configurate allo stesso modo delle simulazioni con elementi shell ma ci sono alcune restrizioni aggiuntive descritte nella pagina wiki sopra menzionata. La nuova opzione *Spazio modello* deve essere impostata correttamente. [Pull request #12562](https://github.com/FreeCAD/FreeCAD/pull/12562) |

|  |  |
| --- | --- |
|  | Come primo passo verso il supporto degli elementi esaedrici, la loro generazione utilizzando la tecnica di suddivisione Gmsh è ora possibile grazie alla nuova proprietà Gmsh *Algoritmo di suddivisione*. Può essere utilizzata anche per creare elementi quadrilateri. [Pull request #12698](https://github.com/FreeCAD/FreeCAD/pull/12698) |

|  |  |
| --- | --- |
|  | Sono state aggiunte nuove proprietà di visualizzazione agli oggetti della pipeline dei risultati. Il colore e la larghezza del bordo della mesh ora possono essere modificati per la modalità di visualizzazione "Superficie con bordi". La dimensione del nodo può essere modificata per la modalità *Nodi*. C'è anche un'impostazione di trasparenza per tutte le modalità. [Pull request #13066](https://github.com/FreeCAD/FreeCAD/pull/13066) |

|  |  |
| --- | --- |
|  | I vincoli FEM possono ora essere soppressi (fare clic con il tasto destro su un vincolo e selezionare *Sopprimi*) e quindi ignorati dai solutori. In questo modo è possibile modificare l'impostazione dell'analisi senza dover eliminare i vincoli attualmente non necessari. [Pull request #12359](https://github.com/FreeCAD/FreeCAD/pull/12359) |

|  |  |
| --- | --- |
|  | È stato aggiunto il supporto per il [vincolo del corpo rigido](/index.php?title=FEM_ConstraintRigidBody/it&action=edit&redlink=1 "FEM ConstraintRigidBody/it (page does not exist)") di CalculiX, rendendo finalmente possibile simulare la torsione di componenti arbitrari e applicare carichi remoti, tra gli altri. [Pull request #13900](https://github.com/FreeCAD/FreeCAD/pull/13900) |

### Ulteriori miglioramenti di FEM

* Il menu **Model → Vincoli senza risolutore** è stato rimosso dalla GUI. Non è stato possibile utilizzare i vincoli elencati. [Pull request #10457](https://github.com/FreeCAD/FreeCAD/pull/10457) e [Pull request #10459](https://github.com/FreeCAD/FreeCAD/pull/10459)
* La parola "vincolo" è stata rimossa dai nomi e dalle descrizioni della maggior parte delle funzionalità nell'ambiente FEM per garantire la nomenclatura corretta. I nomi sono stati modificati in modo tale da adattarsi agli standard del settore FEA e renderli intuitivi per i nuovi utenti. [Pull request #10519](https://github.com/FreeCAD/FreeCAD/pull/10519) e [Pull request #10799](https://github.com/FreeCAD/FreeCAD/pull/10799)
* Sono state aggiunte nuove icone per [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"), [Controllo lavoro risolutore](/FEM_SolverControl/it "FEM SolverControl/it") e [Esegui calcoli risolutore](/FEM_SolverRun/it "FEM SolverRun/it") per una maggiore intuitività.
* Il risolutore CalculiX (nuovo framework) è stato rimosso dalla GUI poiché al momento non è completato e non è necessario. [Pull request #10823](https://github.com/FreeCAD/FreeCAD/pull/10823)
* Il layout di alcuni pannelli attività degli strumenti di postelaborazione è stato migliorato per ridurre la dimensione dello spazio orizzontale da essi occupato. [Pull request #11066](https://github.com/FreeCAD/FreeCAD/pull/11066)
* Il pannello delle attività [FEM ConstraintTemperature](/FEM_ConstraintTemperature/it "FEM ConstraintTemperature/it") è stato rielaborato per risolvere i problemi durante la modifica di questa funzionalità. [Pull request #11126](https://github.com/FreeCAD/FreeCAD/pull/11126)
* Un vecchio problema relativo alla capacità di [FEM PostFilterDataAlongLine](/FEM_PostFilterDataAlongLine/it "FEM PostFilterDataAlongLine/it") di tracciare solo la grandezza e non i componenti vettoriali di una variabile di output selezionata è stato finalmente risolto. [Pull request #10992](https://github.com/FreeCAD/FreeCAD/pull/10992)
* Il [FEM ConstraintForce](/FEM_ConstraintForce/it "FEM ConstraintForce/it") e il [FEM ConstraintPressure](/FEM_ConstraintPressure/it "FEM ConstraintPressure/it") sono stati revisionati per farli funzionare meglio sul lato del codice sorgente. [Pull request #10935](https://github.com/FreeCAD/FreeCAD/pull/10935) e [Pull request #10923](https://github.com/FreeCAD/FreeCAD/pull/10923)
* Il [FEM PostFilterDataAtPoint](/FEM_PostFilterDataAtPoint/it "FEM PostFilterDataAtPoint/it") ora ha una proprietà PointSize per impostare la dimensione del simbolo del punto per una maggiore visibilità. [Pull request #11054](https://github.com/FreeCAD/FreeCAD/pull/11054)
* Per chiarezza, il comando [Regione mesh FEM](/FEM_MeshRegion "FEM MeshRegion") è stato rinominato in *Rifinimento mesh FEM* nella GUI (il nome del comando rimane invariato). [Pull request #11489](https://github.com/FreeCAD/FreeCAD/pull/11489)
* L'entità dell'accelerazione di gravità ora può essere modificata utilizzando le proprietà di [FEM Vincolo peso proprio](/FEM_ConstraintSelfWeight/it "FEM ConstraintSelfWeight/it"). [Pull request #12044](https://github.com/FreeCAD/FreeCAD/pull/12044)
* [Vincolo contatto](/FEM_ConstraintContact/it "FEM ConstraintContact/it") e [vincolo di collegamento](/FEM_ConstraintTie/it "FEM ConstraintTie/it") sono stati notevolmente migliorati. La rigidità del contatto ora utilizza l'unità corretta ed è possibile specificare il valore della pendenza dell'asta per l'attrito nel contatto. Inoltre, è possibile specificare la regolazione del gioco per il contatto mentre il vincolo di vincolo può avere la regolazione abilitata o disabilitata. [Pull request #12133](https://github.com/FreeCAD/FreeCAD/pull/12133)
* PaStiX e Pardiso sono stati aggiunti ai [Solutori di matrici CalculiX](/FEM_SolverCalculixCxxtools/it#Proprietà "FEM SolverCalculixCxxtools/it") supportati. Sono i solutori ccx più veloci ma la possibilità di utilizzarli dipende dalla versione binaria di CalculiX e dalle librerie aggiuntive disponibili. [Pull request #12478](https://github.com/FreeCAD/FreeCAD/pull/12478)
* La proprietà *Integrazione fascio ridotto* (impostata su *true* per impostazione predefinita) è stata aggiunta a [Impostazioni risolutore CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"). Consente uno schema di integrazione ridotto per gli elementi della trave, rendendo possibile l'utilizzo della sezione della trave tubolare ed eliminando, tra gli altri, problemi di precisione nelle analisi con la plasticità. [Pull request #12513](https://github.com/FreeCAD/FreeCAD/pull/12513)
* Lo strumento incompleto [Set di nodi](/FEM_CreateNodesSet/it "FEM CreateNodesSet/it") è stato rimosso dalla GUI. Non poteva essere utilizzato. [Pull request #12611](https://github.com/FreeCAD/FreeCAD/pull/12611)
* La procedura di analisi Check Mesh CalculiX ora genera correttamente la mesh dei risultati. [Pull request #12612](https://github.com/FreeCAD/FreeCAD/pull/12612)
* È stato chiarito nel pannello delle azioni che il diametro utilizzato dalla sezione della trave tubolare è il diametro esterno. [Pull request #12609](https://github.com/FreeCAD/FreeCAD/pull/12609)
* La proprietà *Beam Shell Result Output 3D* del [Risolutore CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it") è ora impostata su *true* per impostazione predefinita per fornire risultati per gli elementi trave e fornire risultati significativi per gli elementi shell. [Pull request #12493](https://github.com/FreeCAD/FreeCAD/pull/12493)
* I simboli delle funzionalità di analisi ora vengono posizionati correttamente quando il corpo (o il contenitore di parti) ha modificato la proprietà di posizionamento. [Pull request #12527](https://github.com/FreeCAD/FreeCAD/pull/12527)
* [Vincolo di pressione](/FEM_ConstraintPressure/it "FEM ConstraintPressure/it") ora funziona correttamente per le shell indipendentemente dall'impostazione dei gruppi di mesh. Questa impostazione può essere modificata nelle Preferenze. [Pull request #12437](https://github.com/FreeCAD/FreeCAD/pull/12437)
* L'indurimento semplice in [FEM MaterialMechanicalNonlinear](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear") è stato rinominato in indurimento isotropico. Inoltre, è stato aggiunto l'indurimento cinematico. [Pull request #12666](https://github.com/FreeCAD/FreeCAD/pull/12666)
* Ora la non linearità geometrica non viene attivata automaticamente e non è richiesta quando viene utilizzato un materiale non lineare. Queste sono forme indipendenti di non linearità. [Pull request #12703](https://github.com/FreeCAD/FreeCAD/pull/12703)
* Le mesh miste costituite da elementi sia triangolari che quadrilateri ora vengono visualizzate correttamente nella pipeline dei risultati. [Pull request #12740](https://github.com/FreeCAD/FreeCAD/pull/12740)
* La proprietà *Frequenza di output* è stata aggiunta a [Impostazioni risolutore CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"). Definisce la frequenza di scrittura dell'output in incrementi. [Pull request #12672](https://github.com/FreeCAD/FreeCAD/pull/12672)
* Ora è possibile generare elementi quadrilateri del secondo ordine. In precedenza, l'impostazione Gmsh di 2° ordine generava elementi quad di 1° ordine a causa della mancanza di un comando Gmsh *SecondOrderIncomplete* che ora viene utilizzato internamente. Questi elementi possono essere utilizzati anche per analisi 2D. [Pull request #12698](https://github.com/FreeCAD/FreeCAD/pull/12698) e [Pull request #12774](https://github.com/FreeCAD/FreeCAD/pull/12774)
* La determinazione dell'orientamento della sezione trasversale della trave è stata parzialmente corretta. A causa di un bug nell'attuale versione di CalculiX, potrebbero esserci ancora problemi con alcuni orientamenti. [Pull request #12833](https://github.com/FreeCAD/FreeCAD/pull/12833)
* Gli esempi FEM di cantilever nella pagina iniziale sono stati aggiornati ed è stato aggiunto uno nuovo che utilizza elementi 1D. [Pull request #12871](https://github.com/FreeCAD/FreeCAD/pull/12871)
* Il formato in cui FreeCAD scrive il [vincolo di forza](/FEM_ConstraintForce/it "FEM ConstraintForce/it") è ora compatibile con il formato CalculiX, eliminando rari problemi con numeri troppo lunghi. [Pull request #12932](https://github.com/FreeCAD/FreeCAD/pull/12932)
* Ora è possibile esportare la [pipeline dei risultati](/FEM_PostPipelineFromResult/it "FEM PostPipelineFromResult/it") nel formato VTK. [Pull request #12987](https://github.com/FreeCAD/FreeCAD/pull/12987)
* Nuove proprietà di controllo dell'incremento sono state aggiunte a [Impostazioni del risolutore CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"). Attualmente, oltre alla dimensione dell'incremento iniziale e al periodo di tempo del passaggio, è possibile specificare la dimensione dell'incremento minima e massima. Inoltre, la proprietà "Iterations Thermo Mech Maximum" è stata rinominata "Iterations Maximum" poiché ora può essere utilizzata anche per analisi statiche (non termomeccaniche). [Pull request #12662](https://github.com/FreeCAD/FreeCAD/pull/12662)
* Il valore predefinito [Spessore elemento 2D](/FEM_ElementGeometry2D/it "FEM ElementGeometry2D/it") è stato modificato da 20 mm a 1 mm perché ha più senso nella pratica. [Pull request #13077](https://github.com/FreeCAD/FreeCAD/pull/13077)
* Molte icone FEM sono state notevolmente migliorate per ridurre la loro somiglianza e rendere più chiaro cosa fanno gli strumenti. [​​Pull request #13130](https://github.com/FreeCAD/FreeCAD/pull/13130)
* La proprietà *Thermo Mech Type* è stata aggiunta a [Impostazioni risolutore CalculiX](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"). Permette di passare da un'analisi termomeccanica regolare (accoppiata) a un'analisi disaccoppiata o di puro trasferimento di calore. [Pull request #13296](https://github.com/FreeCAD/FreeCAD/pull/13296)
* *Min. La proprietà Size* è stata aggiunta per [Netgen mesher](/FEM_MeshNetgenFromShape/it "FEM MeshNetgenFromShape/it") per impedire la generazione di elementi troppo piccoli durante la mesh di geometrie più complesse. [Pull request #12794](https://github.com/FreeCAD/FreeCAD/pull/12794)
* Un vecchio problema con una proprietà di scala dei simboli non funzionante per i vincoli FEM è stato finalmente risolto e la proprietà *Scala* ora può essere utilizzata per regolare la dimensione dei simboli di un vincolo selezionato. [Pull request #13274](https://github.com/FreeCAD/FreeCAD/pull/13274)
* Il ridimensionamento automatico dei vincoli FEM è stato migliorato per gestire meglio oggetti molto piccoli e molto grandi. [Pull request #13586](https://github.com/FreeCAD/FreeCAD/pull/13586)
* [Vincolo del flusso di calore](/FEM_ConstraintHeatflux "FEM ConstraintHeatflux") ora dispone di una modalità di flusso di calore per radiazione per modellare la radiazione superficiale rispetto all'ambiente. [Pull request #13466](https://github.com/FreeCAD/FreeCAD/pull/13466)

* Sono state rimosse alcune proprietà della vista dei simboli di vincolo inutilizzati. [Pull request #13569](https://github.com/FreeCAD/FreeCAD/pull/13569)
* Nuove proprietà di visualizzazione (di cui la principale è *Modalità colore*) sono state aggiunte agli oggetti mesh FEM in modo che le impostazioni personalizzate di colore e trasparenza per le mesh possano essere salvate e ripristinate. [Pull request #13698](https://github.com/FreeCAD/FreeCAD/pull/13698)
* Ora solo l'ultimo filtro aggiunto sotto ciascun oggetto della pipeline dei risultati è visibile per impostazione predefinita. [Pull request #13820](https://github.com/FreeCAD/FreeCAD/pull/13820)
* I suggerimenti del pannello azioni di diversi vincoli sono stati modificati per riflettere effettivamente le regole di selezione della geometria per tali vincoli. [Pull request #13921](https://github.com/FreeCAD/FreeCAD/pull/13921) e [Pull request #14002](https://github.com/FreeCAD/FreeCAD/pull/14002)
* Il supporto per i risultati del flusso di calore dalle analisi termomeccaniche è stato aggiunto alla pipeline dei risultati. [Pull request #14019](https://github.com/FreeCAD/FreeCAD/pull/14019)
* La [funzionalità di stampa della sezione](/FEM_ConstraintSectionPrint "FEM ConstraintSectionPrint") è stata migliorata, aggiungendo il supporto per i risultati del flusso di calore e dello stress da trascinamento (non ancora disponibili poiché le analisi dei fluidi 3D con CalculiX non sono ancora state implementate). [Pull request #14046](https://github.com/FreeCAD/FreeCAD/pull/14046)
* [Fonte di calore corporea](/FEM_ConstraintBodyHeatSource/it "FEM ConstraintBodyHeatSource/it") ora può essere utilizzato con CalculiX e dispone di due modalità di input: velocità di dissipazione [W/kg] e potenza totale [W]. [Pull request #14417](https://github.com/FreeCAD/FreeCAD/pull/14417)
* Le proprietà di rotazione del [Sistema di coordinate locali](/FEM_ConstraintTransform/it "FEM ConstraintTransform/it") sono state sostituite con una singola proprietà *Rotazione* per coerenza. [Pull request #14353](https://github.com/FreeCAD/FreeCAD/pull/14353)
* È stato aggiunto uno strumento [Cancella elementi](/index.php?title=FEM_CreateElementsSet/it&action=edit&redlink=1 "FEM CreateElementsSet/it (page does not exist)") per poter nascondere gli elementi di una mesh selezionata con un poligono. [Pull request #11492](https://github.com/FreeCAD/FreeCAD/pull/11492)
* I tre esempi FEM nella pagina iniziale sono stati sostituiti con uno contenente tutte e tre le varianti del modello della trave a sbalzo (1D, 2D e 3D) nei contenitori [Gruppo](/Std_Group/it "Std Group/it"). [Pull request #15786](https://github.com/FreeCAD/FreeCAD/pull/15786)
* Le proprietà ridondanti *Fix* e le caselle di controllo del [FEM ConstraintDisplacement](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") sono state rimosse. [Pull request #15531](https://github.com/FreeCAD/FreeCAD/pull/15531)
* Il comportamento dei pulsanti Annulla nei pannelli delle attività dei mesher [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") e [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") è stato corretto in modo che possano essere utilizzati per interrompere il meshing in corso, il che è particolarmente importante quando si effettua un'ipotesi iniziale riguardante la dimensione dell'elemento è troppo bassa. Inoltre è stato implementato il mesher Netgen, rendendone finalmente possibile l'utilizzo su tutti i sistemi, compreso Linux. [Richiesta pull n. 16515](https://github.com/FreeCAD/FreeCAD/pull/16515) e [Pull request #16433](https://github.com/FreeCAD/FreeCAD/pull/16433)
* L'algoritmo 2D *Quasi-strutturato* mancante nel mesher Gmsh è stato aggiunto insieme ad altre correzioni. [Pull request #15624](https://github.com/FreeCAD/FreeCAD/pull/15624)

## Ambiente Material

|  |  |
| --- | --- |
|  | Il sistema di gestione dei materiali, compreso l'editor, è stato completamente rielaborato. Seguiranno ulteriori miglioramenti in questo senso. [Pull request #10690](https://github.com/FreeCAD/FreeCAD/pull/10690) |

|  |  |
| --- | --- |
|  | È stata aggiunta l'anteprima dell'aspetto per mostrare i materiali nello stesso modo in cui verranno visualizzati nei documenti. [Pull request #11628](https://github.com/FreeCAD/FreeCAD/pull/11628) |

|  |  |
| --- | --- |
|  | Il nuovo sistema di materiali viene ora utilizzato per le proprietà estetiche. [Pull request #13294](https://github.com/FreeCAD/FreeCAD/pull/13294) |

### Ulteriori miglioramenti di Material

* Sono state aggiunte e rese disponibili finestre di dialogo per visualizzare le proprietà Aspetto e Materiale di un oggetto come strumenti "Ispeziona aspetto" e "Ispeziona materiale". [Pull request #13967](https://github.com/FreeCAD/FreeCAD/pull/13967)

## Ambiente Part

|  |  |
| --- | --- |
|  | Lo strumento [Part Scala](/Part_Scale/it "Part Scale/it") è stato aggiunto per consentire un facile ridimensionamento delle forme senza dover utilizzare gli strumenti dell'ambiente Draft. [Pull request #10583](https://github.com/FreeCAD/FreeCAD/pull/10583) |

|  |  |
| --- | --- |
|  | [Part Specchia](/Part_Mirror/it "Part Mirror/it") ora supporta oggetti di riferimento, come un [Part Piano](/Part_Plane/it "Part Plane/it") per definire un piano speculare arbitrario oltre ai piani XY, XZ e YZ standard. [Pull request #11535](https://github.com/FreeCAD/FreeCAD/pull/11535) |

### Ulteriori miglioramenti di Part

* La proprietà *Frenet* è ora abilitata per impostazione predefinita per lo strumento [Part Sweep](/Part_Sweep/it "Part Sweep/it") per evitare un problema di rendering comune. [Pull request #11590](https://github.com/FreeCAD/FreeCAD/pull/11590)
* Una nuova [modalità di associazione](/Part_EditAttachment/it#Modalità_di_associazione "Part EditAttachment/it") chiamata *Intersezione* è stata aggiunta alla linea del motore. Trova l'intersezione di due facce planari. [Pull request #12328](https://github.com/FreeCAD/FreeCAD/pull/12328)
* Lo strumento [Part Proiezione su superficie](/Part_ProjectionOnSurface/it "Part ProjectionOnSurface/it") ora è parametrico. [Pull request #13158](https://github.com/FreeCAD/FreeCAD/pull/13158)
* Ora tutte le icone di Part utilizzano il tema blu e le primitive utilizzano la stessa icona per la barra degli strumenti e l'albero. [Pull request #14074](https://github.com/FreeCAD/FreeCAD/pull/14074)
* Il comando [Crea schizzo](/Sketcher_NewSketch/it "Sketcher NewSketch/it") è stato aggiunto alla barra degli strumenti e al menu Part poiché operazioni come l'estrusione in genere utilizzano schizzi come input. [Pull request #14318](https://github.com/FreeCAD/FreeCAD/pull/14318)
* È stata aggiunta all'Engine Plane e all Engine 3D una nuova [modalità di attacco](/Part_EditAttachment/it#Attachment_modes "Part EditAttachment/it") chiamata *XY parallelo al piano*. Il risultato è un collegamento simile a *XY dell'oggetto* ma con il piano XY traslato per passare attraverso un vertice selezionato. A differenza della modalità di collegamento "Traduci origine", non sposta l'origine in 2D/Sketcher. Può essere utilizzato con piani di origine, piani di Riferimento e schizzi, ma anche con qualsiasi oggetto dotato di proprietà *Posizionamento*. [Pull request #14372](https://github.com/FreeCAD/FreeCAD/pull/14372)

## Ambiente PartDesign

|  |  |
| --- | --- |
|  | Sono state aggiunte altre modalità alle funzionalità [rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it") e [gola](/PartDesign_Groove/it "PartDesign Groove/it"): dalla prima/ultima, fino alla faccia e due quote. [Pull request #7193](https://github.com/FreeCAD/FreeCAD/pull/7193) |

|  |  |
| --- | --- |
|  | I pannelli attività [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") e [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it") sono stati migliorati (elementi dell'interfaccia utente riordinati, opzione **Seleziona faccia** nascosta quando non necessaria e così via). [Pull request #10392](https://github.com/FreeCAD/FreeCAD/pull/10392) |

|  |  |
| --- | --- |
|  | La modalità offset è stata aggiunta per le Serie [lineare](/PartDesign_LinearPattern/it "PartDesign LinearPattern/it") e [polare](/PartDesign_PolarPattern/it "PartDesign PolarPattern/it"). La modalità precedente è stata rinominata **Overall Length**. [Pull request #10377](https://github.com/FreeCAD/FreeCAD/pull/10377) |

|  |  |
| --- | --- |
|  | È stato aggiunto il supporto sperimentale per più solidi all'interno di un [Corpo](/PartDesign_Body/it "PartDesign Body/it"). Può essere abilitato nelle preferenze (per nuovi Corpi) o nelle proprietà di un Corpo esistente. [Pull request #13960](https://github.com/FreeCAD/FreeCAD/pull/13960) |

|  |  |
| --- | --- |
|  | È stata aggiunta la modalità "Fino alla forma" per Pad e Pocket, rendendo possibile terminarli su più facce, in contrapposizione alla modalità "Fino alla faccia" che consente la selezione di una sola faccia. [Pull request #11392](https://github.com/FreeCAD/FreeCAD/pull/11392) e [Pull request #14433](https://github.com/FreeCAD/FreeCAD/pull/14433) |

### Ulteriori miglioramenti di PartDesign

* L'opzione *Crea spessore verso l'interno* è ora abilitata per impostazione predefinita per lo strumento [Spessore](/PartDesign_Thickness/it "PartDesign Thickness/it"). [Pull request #7488](https://github.com/FreeCAD/FreeCAD/pull/7488)
* I punti di Riferimento ora cambiano colore quando evidenziati o selezionati (come altri Datum). [Pull request #12439](https://github.com/FreeCAD/FreeCAD/pull/12439)
* Le icone di Part Design sono state leggermente migliorate per coerenza. [Pull request #13109](https://github.com/FreeCAD/FreeCAD/pull/13109)
* È stata aggiunta una proprietà "Soppresso" per disattivare temporaneamente una funzionalità. [Richiesta pull n. 12096](https://github.com/FreeCAD/FreeCAD/pull/12096) e [Pull request #12412](https://github.com/FreeCAD/FreeCAD/pull/12412)
* Le barre degli strumenti di Part Design sono state aggiornate: i riferimenti e le azioni basate sullo schizzo ora sono raggruppati, [Part Controllo geometria](/Part_CheckGeometry/it "Part CheckGeometry/it") è stato aggiunto alla barra degli strumenti e al menu e le barre degli strumenti sono state divise in singole barre per rendere possibile la riorganizzazione . [Pull request #13833](https://github.com/FreeCAD/FreeCAD/pull/13833)
* Ora tutte le funzionalità di Part Design utilizzano le stesse icone per la barra degli strumenti e l'albero. [Pull request #14074](https://github.com/FreeCAD/FreeCAD/pull/14074)
* Una nuova modalità "Trasforma corpo" è stata aggiunta agli strumenti di Serie e specchiatura di Part Design, rendendo possibile trasformare la forma dell'intera feature di base invece delle forme dei singoli strumenti delle feature additive e sottrattive. [Pull request #12589](https://github.com/FreeCAD/FreeCAD/pull/12589)
* Il layout della finestra di dialogo dello strumento [Foro](/PartDesign_Hole/it "PartDesign Hole/it") è stato migliorato. [Pull request #14031](https://github.com/FreeCAD/FreeCAD/pull/14031)
* Lo strumento [Migrate](/PartDesign_Migrate/it "PartDesign Migrate/it") è stato rimosso dalla GUI poiché era utile solo per le migrazioni tra versioni che ora sono molto obsolete. [Pull request #15196](https://github.com/FreeCAD/FreeCAD/pull/15196)

## Ambiente Sketcher

|  |  |
| --- | --- |
|  | L'implementazione di una sovrapposizione di cerchi per gli archi (per risolvere il problema dei vincoli che appaiono lontani da essi) è stata completata con un comando [comando per scambiarli](/Sketcher_ArcOverlay "Sketcher ArcOverlay"). [Pull request #9703](https://github.com/FreeCAD/FreeCAD/pull/9703) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | È stato aggiunto un vincolo di quota contestuale [Quota](/Sketcher_Dimension/it "Sketcher Dimension/it") per consentire una quotatura rapida e intuitiva con un unico strumento versatile. [Pull request #9810](https://github.com/FreeCAD/FreeCAD/pull/9810) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | Sono stati aggiunti degli [Strumenti parametri](/Sketcher_Workbench#On-View-Parameters "Sketcher Workbench") per consentire la quotatura in movimento (durante il disegno di forme). A seconda dell'impostazione delle preferenze, i parametri On-View, possono essere disabilitati, ridotti solo alle dimensioni (nessuna coordinata iniziale) o completamente abilitati. Inoltre, sono state aggiunte modalità per gli strumenti forma. Possono essere selezionati utilizzando il tasto M o un elenco a discesa nel pannello delle attività. Alcuni strumenti dispongono di impostazioni aggiuntive sotto forma di caselle di controllo nel pannello delle attività e scorciatoie da tastiera aggiuntive. Attualmente le nuove funzionalità sono disponibili per punti, linee, archi, ellissi, rettangoli, poligoni, asole e B-splines. [Pull request #11048](https://github.com/FreeCAD/FreeCAD/pull/11048), [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) e seguenti |

|  |  |
| --- | --- |
|  | È stato aggiunto uno strumento [Offset](/index.php?title=Sketcher_Offset/it&action=edit&redlink=1 "Sketcher Offset/it (page does not exist)") per consentire l'offset delle curve. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) |

|  |  |
| --- | --- |
|  | La modalità [rettangolo](/Sketcher_CompCreateRectangles/it "Sketcher CompCreateRectangles/it") da tre punti è stata aggiunta in due versioni: 3 angoli o centro e 2 angoli. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) |

|  |  |
| --- | --- |
|  | È stato aggiunto uno strumento [Asola ad arco](/Sketcher_CreateArcSlot/it "Sketcher CreateArcSlot/it") con due modalità (estremità ad arco ed estremità piatte) per consentire la creazione di asole curve [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | È stato aggiunto un [Vincolo orizzontale/verticale](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"). Applica automaticamente il vincolo orizzontale se una linea è più vicina all'orientamento orizzontale o il vincolo verticale se è più vicino all'orientamento verticale. [Pull request #11538](https://github.com/FreeCAD/FreeCAD/pull/11538) |

|  |  |
| --- | --- |
|  | Il rendering dei vincoli angolare e radiale è stato migliorato. I vincoli angolari ora hanno linee di estensione complete. [Pull request #11507](https://github.com/FreeCAD/FreeCAD/pull/11507) |

|  |  |
| --- | --- |
|  | È stato aggiunto uno strumento di [Trasformazione polare](/index.php?title=Sketcher_Rotate/it&action=edit&redlink=1 "Sketcher Rotate/it (page does not exist)") per consentire la rotazione e le serie circolari delle geometrie dello sketcher. [Pull request #11264](https://github.com/FreeCAD/FreeCAD/pull/11264) |

|  |  |
| --- | --- |
| Fare clic sull'immagine se l'animazione non si avvia. | Ora è possibile copiare/tagliare e incollare la geometria dello schizzo (con vincoli) utilizzando le tipiche scorciatoie da tastiera: Ctrl+C, Ctrl+X e Ctrl+V. Non solo all'interno di un singolo schizzo ma anche tra diversi schizzi o addirittura diverse istanze di FreeCAD. La geometria viene copiata sotto forma di comandi Python in modo che possa essere utilizzata anche in altri modi (ad esempio condivisa sul forum). [Pull request #11537](https://github.com/FreeCAD/FreeCAD/pull/11537) |

|  |  |
| --- | --- |
|  | È stato aggiunto uno strumento di trasformazione[Scala](/index.php?title=Sketcher_Scale/it&action=edit&redlink=1 "Sketcher Scale/it (page does not exist)"), che rende possibile scalare la geometria nello schizzo utilizzando un punto centrale selezionato e un fattore di scala o due punti di riferimento. [Pull request #11265](https://github.com/FreeCAD/FreeCAD/pull/11265) |

|  |  |
| --- | --- |
| Fare clic sull'immagine se l'animazione non si avvia. | È stata aggiunta la tangenza al bordo della B-spline, eliminando invece la necessità di utilizzare punti finali e varie soluzioni alternative. [Pull request #11853](https://github.com/FreeCAD/FreeCAD/pull/11853) |

|  |  |
| --- | --- |
|  | Gli strumenti [Serie rettangolare](/Sketcher_RectangularArray/it "Sketcher RectangularArray/it"), [Sposta](/Sketcher_Move/it "Sketcher Move/it"), [Copia](/Sketcher_Copy/it "Sketcher Copy/it") e [Clona](/Sketcher_Clone/it "Sketcher Clone/it") sono stati sostituiti con un singolo strumento [Array trasforma](/Sketcher_Translate/it "Sketcher Translate/it"). [Pull request #11267](https://github.com/FreeCAD/FreeCAD/pull/11267) |

|  |  |
| --- | --- |
|  | È stato aggiunto uno strumento [Smusso](/Sketcher_CreateChamfer/it "Sketcher CreateChamfer/it") con un'opzione per passare alla modalità [Raccordo](/Sketcher_CreateFillet/it "Sketcher CreateFillet/it"). Inoltre, non esiste più uno strumento di raccordo separato per la preservazione degli angoli. Un'opzione "Preserva angolo" (selezionata per impostazione predefinita) è stata aggiunta allo strumento [Raccordo](/Sketcher_CreateFillet/it "Sketcher CreateFillet/it"). [Pull request #12898](https://github.com/FreeCAD/FreeCAD/pull/12898) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | Lo strumento [Simmetria](/Sketcher_Symmetry/it "Sketcher Symmetry/it") è stato rielaborato. Ora funziona preselezionando la geometria e selezionando una linea o un punto attorno al quale la geometria verrà specchiata. Viene mostrata un'anteprima e il comportamento dello strumento può essere controllato tramite le impostazioni dello strumento. [Pull request #11853](https://github.com/FreeCAD/FreeCAD/pull/11853) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | [Vincolo simmetrico](/Sketcher_ConstrainSymmetric/it "Sketcher ConstrainSymmetric/it") viene ora applicato automaticamente quando viene selezionato il punto medio di una linea. [Pull request #13147](https://github.com/FreeCAD/FreeCAD/pull/13147) |

|  |  |
| --- | --- |
|  | [Vincolo distanza](/Sketcher_ConstrainDistance/it "Sketcher ConstrainDistance/it") ora può essere utilizzato per i vincoli di lunghezza dell'arco (l'arco circolare deve essere preselezionato). [Pull request #12602](https://github.com/FreeCAD/FreeCAD/pull/12602) |

|  |  |
| --- | --- |
|  | Il colore di rendering dei punti è ora diverso a seconda che si tratti di semplice punto/punto-finale (bianco, ora creato per impostazione predefinita quando si utilizza lo strumento [Crea punto](/Sketcher_CreatePoint/it "Sketcher CreatePoint/it")), un punto di costruzione/punto-centrale (blu) o un punto coincidente con un altro (rosso). [Pull request #13098](https://github.com/FreeCAD/FreeCAD/pull/13098) |

|  |  |
| --- | --- |
| Clicca sull'immagine se l'animazione non si avvia. | Lo strumento [Ritaglia bordo](/Sketcher_Trimming/it "Sketcher Trimming/it") ora può essere utilizzato in modalità premi e trascina. [Pull request #13188](https://github.com/FreeCAD/FreeCAD/pull/13188) |

### Ulteriori miglioramenti di Sketcher

* È stata aggiunta la modalità Cornice per lo strumento Rettangolo. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174)
* Sono state aggiunte due nuove modalità per lo strumento Linea: *Punto, lunghezza, angolo* e *Punto, larghezza, altezza*. [Pull request #11174](https://github.com/FreeCAD/FreeCAD/pull/11174)
* Le icone [Geometria di costruzione](/Sketcher_ToggleConstruction/it "Sketcher ToggleConstruction/it") e [Attiva/disattiva vincolo di guida/riferimento](/Sketcher_ToggleDrivingConstraint/it "Sketcher ToggleDrivingConstraint/it") sono state modificate. Ora il primo non è così simile a [Copia carbone](/Sketcher_CarbonCopy "Sketcher CarbonCopy") ed entrambe le icone di attivazione/disattivazione cambiano quando vengono cliccate. [Pull request #11500](https://github.com/FreeCAD/FreeCAD/pull/11500)
* Le icone dello sketcher sono state revisionate per unificarne l'aspetto (larghezza del tratto, colori e dimensioni in punti). [Pull request #11785](https://github.com/FreeCAD/FreeCAD/pull/11785)
* È stato introdotto un nuovo, opzionale, [strumento di vincolo Coincidente unificato](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"). Questo strumento combina gli strumenti di vincolo [Coincidente](/Sketcher_ConstrainCoincident/it "Sketcher ConstrainCoincident/it") e [PointOnObject](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). [Pull request #11494](https://github.com/FreeCAD/FreeCAD/pull/11494)
* È stato migliorato il rendering dei vincoli di angolo di arco, angolo di linea e distanza di arco. [Pull request #12012](https://github.com/FreeCAD/FreeCAD/pull/12012)
* I tipi di bordo ora possono essere personalizzati non solo modificando il colore ma anche il motivo e le dimensioni. Ciò consente ad es. linee di costruzione tratteggiate. [Pull request #11996](https://github.com/FreeCAD/FreeCAD/pull/11996)
* Il menu contestuale è ora contestuale e include anche i comandi B-spline. [Pull request #11884](https://github.com/FreeCAD/FreeCAD/pull/11884) e [Pull request #11973](https://github.com/FreeCAD/FreeCAD/pull/11973)
* Facendo doppio clic su un bordo ora si seleziona tutta la geometria ad esso connessa. [Pull request #11925](https://github.com/FreeCAD/FreeCAD/pull/11925)
* Le barre degli strumenti dello Sketcher sono state leggermente riorganizzate per maggiore chiarezza e coerenza. [Pull request #13407](https://github.com/FreeCAD/FreeCAD/pull/13407) e [Pull request #13763](https://github.com/FreeCAD/FreeCAD/pull/13763)
* Le icone dello strumento [Carbon copy](/Sketcher_CarbonCopy/it "Sketcher CarbonCopy/it") sono state migliorate per una migliore visibilità. [Pull request #15074](https://github.com/FreeCAD/FreeCAD/pull/15074)

## Ambiente Spreadsheet

### Ulteriori miglioramenti di Spreadsheet

* Facendo doppio clic su un foglio di calcolo nella visualizzazione ad albero ora si passa a questo ambiente di lavoro. [Pull request #13137](https://github.com/FreeCAD/FreeCAD/pull/13137)
* Le icone del Foglio di calcolo sono state migliorate. [Pull request #13996](https://github.com/FreeCAD/FreeCAD/pull/13996)

## Ambiente TechDraw

|  |  |
| --- | --- |
|  | Lo strumento [Cerchio cosmetico](/TechDraw_CosmeticCircle/it "TechDraw CosmeticCircle/it") è stato aggiunto per consentire la creazione di cerchi cosmetici selezionando il centro e inserendo il raggio. [Pull request #10763](https://github.com/FreeCAD/FreeCAD/pull/10763) |

|  |  |
| --- | --- |
|  | Lo strumento [ArcLengthAnnotation](/TechDraw_ExtensionArcLengthAnnotation/it "TechDraw ExtensionArcLengthAnnotation/it") è stato aggiunto per creare annotazioni simili a quote della lunghezza dell'arco dei bordi selezionati. [Pull request #11532](https://github.com/FreeCAD/FreeCAD/pull/11532) |

|  |  |
| --- | --- |
|  | Lo strumento [AddOffsetVertex](/index.php?title=TechDraw_CommandAddOffsetVertex/it&action=edit&redlink=1 "TechDraw CommandAddOffsetVertex/it (page does not exist)") è stato aggiunto per creare vertici cosmetici come offset dai vertici selezionati. [Pull request #11655](https://github.com/FreeCAD/FreeCAD/pull/11655) |

|  |  |
| --- | --- |
|  | Lo strumento [Vista interrotta](/TechDraw_BrokenView/it "TechDraw BrokenView/it") è stato aggiunto per rappresentare facilmente oggetti lunghi. [Pull request #13331](https://github.com/FreeCAD/FreeCAD/pull/13331) |

|  |  |
| --- | --- |
| Fai clic sull'immagine se l'animazione non si avvia. | È stato aggiunto un nuovo strumento di quotatura contestuale basato su [quello introdotto nello Sketcher](/Sketcher_Dimension/it "Sketcher Dimension/it"). [Pull request #13525](https://github.com/FreeCAD/FreeCAD/pull/13525) |

### Ulteriori miglioramenti di TechDraw

* Le sezioni basate su altre sezioni ora utilizzano la forma originale (non tagliata) per impostazione predefinita. Questo può essere modificato nelle impostazioni della sezione per utilizzare invece la sezione precedente. [Pull request #10281](https://github.com/FreeCAD/FreeCAD/pull/10281)
* Gli oggetti cosmetici e le linee centrali ora possono essere eliminati selezionandoli e premendo il tasto Elimina. In precedenza, ciò comportava la cancellazione dell'intera vista. [Pull request #10695](https://github.com/FreeCAD/FreeCAD/pull/10695) e [Pull request #10813](https://github.com/FreeCAD/FreeCAD/pull/10813)
* È stata aggiunta una nuova icona più intuitiva per lo strumento [Saldatura](/TechDraw_WeldSymbol/it "TechDraw WeldSymbol/it"). [Pull request #10936](https://github.com/FreeCAD/FreeCAD/pull/10936)
* Il comportamento della modalità punto + bordo di [Quotatura Lunghezza](/TechDraw_LengthDimension/it "TechDraw LengthDimension/it") è stato corretto. [Pull request #10860](https://github.com/FreeCAD/FreeCAD/pull/10860)
* È stato aggiunto un indicatore di selezione per il pulsante [ToggleFrame](/TechDraw_ToggleFrame "TechDraw ToggleFrame") in modo che un utente possa vedere se il pulsante è attivato o meno. [Pull request #11240](https://github.com/FreeCAD/FreeCAD/pull/11240)
* Il comportamento dello strumento [DecorateLine](/TechDraw_DecorateLine/it "TechDraw DecorateLine/it") è stato migliorato. Ora facendo doppio clic su una riga si richiama questo strumento. E gli stili di linea vengono ripristinati correttamente se l'utente preme *Annulla*. In precedenza non c'era differenza tra premere "OK" e "Annulla". [Pull request #11188](https://github.com/FreeCAD/FreeCAD/pull/11188)
* Ora è possibile impostare il colore e la trasparenza delle facce per la vista. [Pull request #11315](https://github.com/FreeCAD/FreeCAD/pull/11315)
* È stata aggiunta la modalità di selezione multipla che può essere abilitata nelle Preferenze. In questa modalità, è possibile selezionare più vertici, bordi e facce facendo clic con il tasto sinistro su di essi, senza dover tenere premuto il tasto Ctrl. [Pull request #11417](https://github.com/FreeCAD/FreeCAD/pull/11417)
* [ExtensionAreaAnnotation](/TechDraw_ExtensionAreaAnnotation/it "TechDraw ExtensionAreaAnnotation/it") ora può calcolare aree di facce arbitrarie. [Pull request #11473](https://github.com/FreeCAD/FreeCAD/pull/11473)
* Le linee non continue ora seguiranno gli standard ISO/ANSI anziché uno stile di linea Qt. È stata aggiunta una nuova preferenza per selezionare lo standard. [Pull request #11594](https://github.com/FreeCAD/FreeCAD/pull/11594)
* Il comportamento dello strumento [AxoLengthDimension](/TechDraw_AxoLengthDimension/it "TechDraw AxoLengthDimension/it") è stato migliorato. Ora, quando si quotano i bordi paralleli agli assi del sistema di coordinate globali, il valore effettivo (3D) viene calcolato automaticamente e inserito nella proprietà Format Spec (come testo). [Pull request #11678](https://github.com/FreeCAD/FreeCAD/pull/11678)
* Lo strumento [ExtensionPositionSectionView](/TechDraw_ExtensionPositionSectionView/it "TechDraw ExtensionPositionSectionView/it") ora può essere utilizzato selezionando un bordo in una vista in sezione e un vertice nella vista di origine. [Pull request #11797](https://github.com/FreeCAD/FreeCAD/pull/11797)
* È stato aggiunto lo strumento [ExtensionInsertRepetition](/TechDraw_ExtensionInsertRepetition "TechDraw ExtensionInsertRepetition"), per inserire un conteggio di funzioni ripetute. [Pull request #12509](https://github.com/FreeCAD/FreeCAD/pull/12509)
* Sono stati apportati piccoli ma importanti miglioramenti all'usabilità: facendo doppio clic sulla pagina TechDraw ora si accede a questo ambiente di lavoro e lo strumento TechDraw MoveView è stato sostituito dal semplice trascinamento della selezione nell' [albero](/Tree_view/it "Tree view/it"). Anche gli strumenti TechDraw ClipGroupAdd e TechDraw ClipGroupRemove sono stati sostituiti dal comportamento di trascinamento della selezione dell'albero. [Pull request #13063](https://github.com/FreeCAD/FreeCAD/pull/13063)
* I modelli di disegno vengono ora compilati automaticamente con le informazioni disponibili (come data e titolo). [Pull request #13005](https://github.com/FreeCAD/FreeCAD/pull/13005)
* Lo strumento [Forma progetto](/TechDraw_ProjectShape "TechDraw ProjectShape") è stato rimosso da TechDraw poiché è ereditato dal vecchio ambiente Drawing e non ha nulla a che fare con una pagina TechDraw. [Pull request #13655](https://github.com/FreeCAD/FreeCAD/pull/13655)
* Lo strumento [Inserisci vista](/TechDraw_View/it "TechDraw View/it") è stato migliorato in modo che possa gestire più tipi di oggetti e impostazioni. Ciò ha consentito di rimuovere i seguenti strumenti dalla barra degli strumenti: [SpreadsheetView](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), [ArchView](/TechDraw_ArchView "TechDraw ArchView"), [Symbol](/TechDraw_Symbol "TechDraw Symbol"), [Image](/TechDraw_Image "TechDraw Image") e [[TechDraw\_ProjectionGroup|ProjectionGroup] ]. [Pull request #13219](https://github.com/FreeCAD/FreeCAD/pull/13219)
* È stato aggiunto lo snap per consentire l'allineamento automatico di viste e quote. Lo snap può essere temporaneamente disabilitato con il tasto modificatore Alt. [Pull request #13659](https://github.com/FreeCAD/FreeCAD/pull/13659)
* La gestione dei cosmetici è stata migliorata in vari modi. [Pull request #14216](https://github.com/FreeCAD/FreeCAD/pull/14216)
* Molte icone TechDraw sono state migliorate. [Pull request #14873](https://github.com/FreeCAD/FreeCAD/pull/14873) e seguenti
* Il pannello delle attività dello strumento [Simboli finitura superficiale](/TechDraw_SurfaceFinishSymbols/it "TechDraw SurfaceFinishSymbols/it") è stato notevolmente migliorato visivamente. [Pull request #16147](https://github.com/FreeCAD/FreeCAD/pull/16147)

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.0/it&oldid=1509562>"