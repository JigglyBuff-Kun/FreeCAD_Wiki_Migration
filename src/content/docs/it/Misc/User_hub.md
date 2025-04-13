---
title: Hub degli utenti
---

![](/images/User_hub.png)

---

Questa è l'area principale di aiuto per i nuovi utenti di FreeCAD.

FreeCAD è in continuo sviluppo, quindi potrebbero esserci informazioni mancanti o obsolete. Se non riuscite a trovare le informazioni di cui avete bisogno, non esitate a chiedere nel [forum di FreeCAD](https://forum.freecad.org).

Se vuoi contribuire a FreeCAD, per favore [dona](/Donate/it "Donate/it"), e vedi la pagina [Aiuto FreeCAD](/Help_FreeCAD/it "Help FreeCAD/it") per contribuire in altro modo. Se vuoi modificare questo wiki, richiedi un account wiki con i permessi dell'editor [nel forum](https://forum.freecad.org/viewtopic.php?f=21&t=6830), e leggi le [WikiPages](/WikiPages "WikiPages") per le linee guida generali che dovresti seguire.

Se volete sapere come anni fa è iniziato lo sviluppo di FreeCAD visitate la pagina [History](/History/it "History/it").

## Utilizzare FreeCAD

### Introduzione

- [Panoramica sull'applicazione](/About_FreeCAD/it "About FreeCAD/it"): Informazioni generali su FreeCAD
- Come installare FreeCAD in [Windows](/Install_on_Windows/it "Install on Windows/it"), [Linux](/Install_on_Linux/it "Install on Linux/it") e [Mac](/Install_on_Mac/it "Install on Mac/it")
- [Installazione dei file della guida](/Installing_Helpfile/it "Installing Helpfile/it"): come installare la documentazione offline basata su questo wiki.
- [Installare componenti aggiuntivi](/Installing_additional_components/it "Installing additional components/it"): come installare componenti aggiuntivi di terze parti che possono essere utilizzati con FreeCAD.
- [Per iniziare](/Getting_started/it "Getting started/it"): Una veloce panoramica degli strumenti disponibili
- [FAQ](/Frequently_asked_questions/it "Frequently asked questions/it"): Domande più frequenti
- [Tutorial](/Tutorials/it "Tutorials/it") che coprono diverse parti di FreeCAD

#### Migrare da altro software?

- [Workarounds](/Workarounds "Workarounds")
- [Migrare in FreeCAD da Fusion360](/Migrating_to_FreeCAD_from_Fusion360/it "Migrating to FreeCAD from Fusion360/it")
- [Migrare in FreeCAD da OnShape](/Migrating_to_FreeCAD_from_OnShape/it "Migrating to FreeCAD from OnShape/it")
- [Migrare in FreeCAD da SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks "Migrating to FreeCAD from SolidWorks")
- [Migrare in FreeCAD da Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [tabella di compatibilità delle applicazioni BIM](/BIM_application_compatibility_table/it "BIM application compatibility table/it")

### Concetti base dell'applicazione

- [Interfaccia](/Interface/it "Interface/it"): l'interfaccia di FreeCAD è composta da vari elementi grafici sullo schermo, inclusi la [vista 3D](/3D_view/it "3D view/it"), l'[albero della struttura](/Tree_view/it "Tree view/it"), l'[editor delle proprietà](/Property_editor/it "Property editor/it"), il [pannello delle azioni](/Task_panel/it "Task panel/it"), e la [console Python](/Python_console/it "Python console/it").
- [Navigazione con il mouse](/Mouse_navigation/it "Mouse navigation/it"): i diversi tipi di utilizzo del mouse o del trackpad per navigare nella vista 3D.
- [Metodi di selezione](/Selection_methods/it "Selection methods/it"): i diversi metodi di selezione degli oggetti nel software.
- [Denominazione degli oggetti](/Object_name/it "Object name/it"): gli oggetti FreeCAD hanno un nome `Name` di sola lettura che li identifica in modo univoco e una etichetta `Label` che è modificabile dall'utente.
- [Editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"): il sistema che consente di controllare molte proprietà del sistema di base e dei singoli ambienti di lavoro.
- [Formati di file](/Import_Export/it "Import Export/it"): i diversi formati di file che FreeCAD può leggere e scrivere.

### Ambienti di lavoro

Gli [ambienti di lavoro](/Workbenches/it "Workbenches/it") sono raccolte di strumenti che vengono utilizzate per specifiche attività. Questi sono gli ambienti di lavoro di base presenti fin da subito dopo ogni installazione di FreeCAD:

- ![](/images/Freecad.svg) [Standard tools](/Std_Base "Std Base"). Questi comandi e strumenti sono presenti in tutti gli ambienti.

- ![](/images/Workbench_Assembly.svg) [Ambiente Assembly](/Assembly_Workbench/it "Assembly Workbench/it") per costruire e risolvere assiemi meccanici. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Workbench_BIM.svg) [Ambiente BIM](/BIM_Workbench/it "BIM Workbench/it") per lavorare con elementi architettonici e creare modelli [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Combina l'ambiente Arch e l'ambiente BIM precedentemente disponibile come ambiente complementare nella versione 0.21 e precedenti.

- ![](/images/Workbench_CAM.svg) [Ambiente CAM](/CAM_Workbench/it "CAM Workbench/it") viene utilizzato per produrre istruzioni G-Code. Questo ambiente di lavoro era chiamato "Path Workbench" nella versione 0.21 e precedenti.

- ![](/images/Workbench_Draft.svg) [Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it") contiene strumenti 2D e operazioni CAD 2D e 3D di base.

- ![](/images/Workbench_FEM.svg) [Ambiente FEM](/FEM_Workbench/it "FEM Workbench/it") fornisce un flusso di lavoro di analisi agli elementi finiti (FEA).

- ![](/images/Workbench_Inspection.svg) [Ambiente Inspection](/Inspection_Workbench/it "Inspection Workbench/it") è realizzato per fornirti strumenti specifici per l'esame delle forme. È ancora nelle prime fasi di sviluppo.

- ![](/images/Workbench_Material.svg) L'[Ambiente Materiali](/Material_Workbench/it "Material Workbench/it") gestisce il sistema dei materiali di FreeCAD. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Workbench_Mesh.svg) [Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it") per lavorare con maglie triangolari.

- ![](/images/Workbench_OpenSCAD.svg) [Ambiente OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it") per l'interoperabilità con OpenSCAD e la riparazione della cronologia del modello della [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it") (CSG).

- ![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench/it "Part Workbench/it") per lavorare con primitive geometriche ed operazioni booleane.

- ![](/images/Workbench_PartDesign.svg) [Ambiente Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it") per la costruzione di forme di parti da schizzi.

- ![](/images/Workbench_Points.svg) [Ambiente Points](/Points_Workbench/it "Points Workbench/it") per lavorare con nuvole di punti.

- ![](/images/Workbench_Reverse_Engineering.svg) [Ambiente Reverse Engineering](/Reverse_Engineering_Workbench/it "Reverse Engineering Workbench/it") ha lo scopo di fornire strumenti specifici per convertire forme/solidi/mesh in forme parametriche compatibili con FreeCAD.

- ![](/images/Workbench_Robot.svg) [Ambiente Robot](/Robot_Workbench/it "Robot Workbench/it") per lo studio dei movimenti dei robot. Attualmente non mantenuto.

- ![](/images/Workbench_Sketcher.svg) [Ambiente Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") per lavorare con schizzi a geometria vincolata.

- ![](/images/Workbench_Spreadsheet.svg) [Ambiente Foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") per la creazione e la manipolazione di dati in un foglio di calcolo.

- ![](/images/Workbench_Surface.svg) [Ambiente Superficie](/Surface_Workbench/it "Surface Workbench/it") fornisce strumenti per creare e modificare le superfici. È simile al [Part Builder](/Part_Builder/it "Part Builder/it") con l'opzione faccia dai bordi.

- ![](/images/Workbench_TechDraw.svg) [Ambiente TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") per la produzione di disegni tecnici da modelli 3D.

- ![](/images/Workbench_Test.svg) [Ambiente di Test](/Testing/it "Testing/it") serve per il debug di FreeCAD.

### Macro

Le [macro](/Macros/it "Macros/it") sono frammenti relativamente piccoli di codice [Python](/Python/it "Python/it") che eseguono un'attività semplice o complessa che non è disponibile nel sistema FreeCAD di base.

Gli utenti esperti hanno anche scritto varie [macro](/Macros/it "Macros/it") per migliorare le capacità di FreeCAD.

Da FreeCAD 0.17 molte macro possono essere installate usando [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). Per un elenco delle macro fare riferimento alla pagina [Raccolta di macro](/Macros_recipes/it "Macros recipes/it").
Per installare manualmente le macro fare riferimento al tutorial [Come installare le macro](/How_to_install_macros/it "How to install macros/it").

### Ambienti esterni

Quando molte macro o funzioni vengono sviluppate insieme e organizzate in barre degli strumenti e menu, possono diventare un nuovo ambiente di lavoro.

Gli [ambienti esterni](/External_workbenches/it "External workbenches/it") sono raccolte di funzioni che non fanno parte del sistema FreeCAD di base, generalmente sviluppate da utenti esperti e che si rivolgono a un'esigenza particolare.

Da FreeCAD 0.17 molti ambienti possono essere installati usando [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it").
Per l'installazione manuale di questi ambienti fare riferimento al tutorial [Come installare ambienti aggiuntivi](/How_to_install_additional_workbenches/it "How to install additional workbenches/it").

## Riferimenti

- [Elenco dei comandi](/List_of_Commands/it "List of Commands/it"): Una lista completa dei comandi disponibili in FreeCAD.

## Aiuto in linea

Questa è la guida ufficiale di FreeCAD online. Si prega di notare che l'intero sistema della Guida in linea è attualmente in rilavorazione. Sarà usata per generare un file .CHM, che verrà distribuito con i pacchetti binari di FreeCAD. Al momento la guida in linea riassume alcune delle sezioni più complete di questo wiki.

- [Aiuto in linea - Indice dei contenuti](/Online_Help_Toc/it "Online Help Toc/it")

## Altro

- Il [Power users hub](/Power_users_hub/it "Power users hub/it") è il riferimento per vedere un uso più avanzato di FreeCAD
- Il [Portale della comunità](/FreeCAD_Community_Portal/it "FreeCAD Community Portal/it") elenca i progetti realizzati dai membri della comunità di FreeCAD.
- Non capite come viene usato un termine o una frase in FreeCAD? Provate a guardare la pagina [Glossario](/Glossary/it "Glossary/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/it&oldid=1509209>"
