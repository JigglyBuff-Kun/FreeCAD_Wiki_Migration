---
title: Ambiente CAM
---

![](/images/Workbench_CAM.svg)

L'icona di Path

## Introduzione

L'Ambiente CAM ![](/images/Workbench_CAM.svg) viene utilizzato per produrre istruzioni macchina per [Macchine CNC](https://en.wikipedia.org/wiki/CNC_router) da un modello 3D di FreeCAD. Questi producono oggetti 3D del mondo reale su macchine CNC come frese, torni, taglio laser e simili. In genere, le istruzioni sono un dialetto [G-code](https://en.wikipedia.org/wiki/G-code). Di seguito viene presentato un [esempio generale di simulazione della sequenza del percorso utensile del tornio CNC](https://www.ange-softs.com/SIMULCNCHTML/index.html).

![](/images/Pathwb.png)

L'ambiente CAM di FreeCAD crea le istruzioni macchina con il seguente flusso di lavoro:

- Un modello 3D è l'oggetto di base, generalmente creato utilizzando uno o più ambienti tra ![](/images/Workbench_PartDesign.svg) [Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it"), ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") o ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it").
- Viene creata una [Lavorazione](/CAM_Job/it "CAM Job/it") nell'ambiente CAM. Questa contiene tutte le informazioni necessarie per generare il G-code necessario per elaborare la lavorazione su una fresa CNC: c'è il pezzo grezzo, la fresa ha un certo [set di utensili](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") e segue determinati comandi che controllano velocità e movimenti (di solito G-code).
- Gli [Utensili](/index.php?title=CAM_Tools/it&action=edit&redlink=1 "CAM Tools/it (page does not exist)") vengono selezionati come richiesto dalle operazioni di lavorazione.
- I percorsi di fresatura sono creati utilizzando, ad es. le operazioni di [Profilo](/CAM_Profile/it "CAM Profile/it") e [Cavità 3D](/CAM_Pocket_3D/it "CAM Pocket 3D/it"). Questi oggetti Percorso (CAM) utilizzano il linguaggio G-code interno di FreeCAD, indipendente dalla macchina CNC.
- Si può esportare la lavorazione con un G-code, corrispondente alla propria macchina. Questo passaggio è chiamato "post-elaborazione"; sono disponibili diversi post processori.

## Concetti generali

L'ambiente CAM genera un G-code che definisce i percorsi richiesti per fresare il Progetto rappresentato dal modello 3D nel [linguaggio G-code usato da FreeCAD per le operazioni di lavorazione di CAM](/CAM_scripting#The_FreeCAD_Internal_GCode_Format/it "CAM scripting"), che viene successivamente tradotto nel codice appropriato per il controllo CNC di destinazione selezionando il post processore appropriato.

Il G-code è generato dalle direttive e dalle operazioni contenute in un percorso di lavorazione. Il flusso di lavorazione le elenca nell'ordine in cui verranno eseguiti. L'elenco può essere popolato aggiungendo operazioni sui percorsi, ottimizzazioni dei percorsi, comandi parziali dei percorsi e modifiche ai percorsi, dal menu CAM o dai pulsanti della GUI.

CAM offre un Gestore degli utensili (Libreria, Tabella utensili), un analizzatore del G-code e strumenti di simulazione. Collega il post processore e consente di importare ed esportare i modelli di lavorazioni.

L'ambiente CAM ha delle dipendenze esterne tra cui:

1. Le unità del modello 3D di FreeCAD sono definite nelle impostazioni **Modifica → Preferenze ... → Generale → Sistema di unità:**. La configurazione del postprocessore definisce le unità G-code finali.
2. Il percorso del file macro e le tolleranze geometriche sono definiti nella scheda **Modifica → Preferenze ... → CAM → Preferenze lavorazione**.
3. I colori sono definiti in **Modifica → Preferenze ... → CAM → GUI**.
4. I parametri dei lembi di fermo pezzo (tag) sono definiti nella scheda **Modifica → Preferenze ... → CAM → Ottimizzazione**.
5. Se la qualità del modello Base 3D supporta i requisiti di CAM, supera la Verifica della geometria.

## Limitazioni

Alcune limitazioni attuali di cui dovreste essere consapevoli sono:

- La maggior parte degli strumenti CAM non sono veri strumenti 3D ma solo 2.5D. Questo significa che prendono una forma 2D fissa e possono tagliarla fino ad una data profondità. Tuttavia, ci sono due strumenti che producono veri percorsi 3D: ![](/images/CAM_3DPocket.svg) [Cavità 3D](/CAM_Pocket_3D/it "CAM Pocket 3D/it") and ![](/images/CAM_Surface.svg) [Sfacciatura 3D](/CAM_Surface/it "CAM Surface/it") (Sono una [caratteristica sperimentale](/CAM_experimental/it "CAM experimental/it") iniziata a novembre del 2020).
- La maggior parte dell'ambiente CAM è progettato per una semplice fresa/router CNC standard a 3 assi (xyz), ma gli strumenti per il tornio sono in fase di sviluppo nella 0.19_pre.
- La maggior parte delle operazioni nell'ambiente CAM restituirà percorsi basati solo su un utensile/bit standard, indipendentemente dal tipo di utensile/bit assegnato in un dato controllore di utensili, ad eccezione delle operazioni ![](/images/CAM_Engrave.svg) [Incisione](/CAM_Engrave/it "CAM Engrave/it") e ![](/images/CAM_Surface.svg) [Sfacciatura 3D](/CAM_Surface/it "CAM Surface/it").
- Le operazioni all'interno dell'ambiente CAM non sono a conoscenza dei meccanismi di bloccaggio in uso per fissare il modello alla vostra macchina. Di conseguenza, si prega di rivedere e simulare i percorsi generati prima di inviare il codice alla macchina. Se necessario, modellare i propri meccanismi di serraggio in FreeCAD per controllare meglio i percorsi generati. Cercare le possibili collisioni con i morsetti o altri ostacoli lungo i percorsi.

## Unità di misura

La gestione delle unità di misura in CAM può essere fonte di confusione. Ci sono alcuni punti da chiarire:

1. Le unità base di FreeCAD per lunghezza e tempo sono rispettivamente 'mm' e 's'. La velocità è quindi 'mm/s'. Questo è ciò che FreeCAD salva internamente a prescindere da qualsiasi altra cosa
2. Lo schema predefinito delle unità utilizza le unità predefinite. Se si utilizza lo schema predefinito e si inserisce una velocità di avanzamento senza una stringa di unità, essa viene immessa come 'mm/s'
3. La maggior parte delle macchine CNC prevede una velocità di avanzamento sotto forma di "mm/min" o "in/min". La maggior parte dei post-processori converte automaticamente l'unità durante la generazione del G-Code.

Schemi delle unità di misura:

1. La modifica dello schema delle unità nelle preferenze modifica la stringa dell'unità predefinita per i campi di input. Se siete utenti di CAM e preferite progettare nel sistema metrico, si consiglia vivamente di utilizzare lo schema "Metric Small Parts & CNC". Se progettate in unità USA, funzionano Imperial Decimal e Building US
2. La modifica dello schema delle unità preferite non ha alcun effetto sull'output, ma aiuta a evitare errori di input

Output:

1. La generazione dell'unità corretta in uscita è responsabilità del post-processore e viene eseguita solo in quel momento.
2. L'unità di output della macchina non è in nessun modo correlata allo schema dell'unità selezionata.
3. I post-processori producono un output metrico (G21), imperiale (G20) o configurabile.
4. Post processori configurabili predefiniti per il sistema metrico (G21).
5. Se si desidera che il post-processore configurabile emetta il G-Code nel sistema imperiale (G20), impostare l'argomento corretto nella configazione dell'output della lavorazione (es. --Inches per linuxcnc). Questo può essere memorizzato in un modello di lavorazione e impostato come modello predefinito per renderlo automatico per tutte le lavorazioni future.

Ispezionare il codice CAM:

1. Se si usa lo strumento Ispeziona il G-Code per vedere il codice, lo si vede in 'mm/s' perché non è ancora stato post-elaborato.

## Altezze e profondità

Molti comandi hanno varie altezze e profondità:

![](/images/Path-DepthsAndHeights.gif)

Riferimento visivo per le proprietà Depth (impostazioni)

## Comandi

Alcuni comandi sono sperimentali e non disponibili per impostazione predefinita. Per abilitarli, vedere [CAM sperimentale](/CAM_experimental/it "CAM experimental/it").

### Comandi del progetto

- ![](/images/CAM_Job.svg) [Lavorazione](/CAM_Job/it "CAM Job/it"): Crea una nuova lavorazione CNC.

- ![](/images/CAM_Post.svg) [Post elaborazione](/CAM_Post/it "CAM Post/it"): Esporta un progetto in G-code.

- ![](/images/CAM_Sanity.svg) [Controllare il percorso del lavoro per errori comuni](/CAM_Sanity/it "CAM Sanity/it"): Controlla la lavorazione CAM selezionata alla ricerca di valori mancanti.

- ![](/images/CAM_ExportTemplate.svg) [Esporta come modello](/CAM_ExportTemplate/it "CAM ExportTemplate/it"): Esporta la lavorazione corrente come modello.

### Comandi Utensile

- ![](/images/CAM_Inspect.svg) [Ispeziona i comandi CAM](/CAM_Inspect/it "CAM Inspect/it"): Mostra il G-code per verifica.

- ![](/images/CAM_Simulator.svg) [Simulatore CAM](/CAM_Simulator/it "CAM Simulator/it"): Mostra l'operazione di fresatura così come viene eseguita sulla macchina

- ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/index.php?title=CAM_SimulatorGL/it&action=edit&redlink=1 "CAM SimulatorGL/it (page does not exist)"): abilita il nuovo simulatore CAM migliorato. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/CAM_SelectLoop.svg) [Chiudi il ciclo](/CAM_SelectLoop/it "CAM SelectLoop/it"): Completa un ciclo basato su due bordi selezionati

- ![](/images/CAM_OpActiveToggle.svg) [Attiva o disattiva l'operazione](/CAM_OpActiveToggle/it "CAM OpActiveToggle/it"): Attivare o disattivare un'operazione di lavorazione.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [Editor della libreria delle geometrie utensile](/index.php?title=CAM_ToolBitLibraryOpen/it&action=edit&redlink=1 "CAM ToolBitLibraryOpen/it (page does not exist)"): Apre un editor per gestire le librerie delle geometrie utensile.

- ![](/images/CAM_ToolBitDock.svg) [Pannello geometrie utensile](/index.php?title=CAM_ToolBitDock/it&action=edit&redlink=1 "CAM ToolBitDock/it (page does not exist)"): Apre un editor per gestire le librerie delle geometrie utensile.

### Operazioni di Base

- ![](/images/CAM_Profile.svg) [Profila](/CAM_Profile/it "CAM Profile/it"): Crea un'operazione di profilo dell'intero modello o da una o più facce o spigoli selezionati.

- ![](/images/CAM_Pocket_Shape.svg) [Tasca](/CAM_Pocket_Shape/it "CAM Pocket Shape/it"): Crea un'operazione di scavo da uno o più scavi selezionati.

- ![](/images/CAM_Drilling.svg) [Foratura](/CAM_Drilling/it "CAM Drilling/it"): Esegue un ciclo di perforazione.

- ![](/images/CAM_MillFace.svg) [Sfacciatura](/CAM_MillFace/it "CAM MillFace/it"): Crea un percorso di sfacciatura.

- ![](/images/CAM_Helix.svg) [Elica](/CAM_Helix/it "CAM Helix/it"): Crea un percorso elicoidale.

- ![](/images/CAM_Adaptive.svg) [Adattiva](/CAM_Adaptive/it "CAM Adaptive/it"): Crea un'operazione adattiva di compensazione e profilazione.

- ![](/images/CAM_Slot.svg) [Scanalatura](/CAM_Slot/it "CAM Slot/it"): Crea un'operazione di scanalatura da funzioni selezionate o punti personalizzati. [_Sperimentale_](/CAM_experimental/it "CAM experimental/it").

- ![](/images/CAM_Engrave.svg) [Incisione](/CAM_Engrave/it "CAM Engrave/it"): Crea un percorso di incisione.

- ![](/images/CAM_Deburr.svg) [Sbavatura](/index.php?title=CAM_Deburr/it&action=edit&redlink=1 "CAM Deburr/it (page does not exist)"): Crea un percorso di sbavatura.

- ![](/images/CAM_Vcarve.svg) [Incisione a V](/CAM_Vcarve/it "CAM Vcarve/it"): Crea un percorso di incisione utilizzando una forma dello strumento V.

### Operazioni 3D

- ![](/images/CAM_Pocket_3D.svg) [Tasca 3D](/CAM_Pocket_3D/it "CAM Pocket 3D/it"): Crea un percorso per una tasca 3D.

- ![](/images/CAM_Surface.svg) [Sfacciatura 3D](/CAM_Surface/it "CAM Surface/it"): crea un percorso per una sfacciatura 3D. [_Sperimentale_](/CAM_experimental/it "CAM experimental/it").

- ![](/images/CAM_Waterline.svg) [Piani orizzontali](/CAM_Waterline/it "CAM Waterline/it"): Crea un percorso di lavorazione per piani orizzontali per una superficie 3D. [_Sperimentale_](/CAM_experimental/it "CAM experimental/it").

### Ottimizzazione del percorso

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/index.php?title=CAM_DressupAxisMap/it&action=edit&redlink=1 "CAM DressupAxisMap/it (page does not exist)"): Rimappa un asse su un altro.

- ![](/images/CAM_DressupPathBoundary.svg) [Contorno](/CAM_DressupPathBoundary/it "CAM DressupPathBoundary/it"): aggiunge un contorno di limitazione del percorso ad un percorso selezionato.

- ![](/images/CAM_DressupDogbone.svg) [Lavorazione degli angoli](/CAM_DressupDogbone/it "CAM DressupDogbone/it"): Aggiunge una modifica di adattamento osso-di-cane (dogbone) per la lavorazione degli angoli ad un percorso selezionato.

- ![](/images/CAM_DressupDragKnife.svg) [Percorso di lama](/CAM_DressupDragKnife/it "CAM DressupDragKnife/it"): Aggiunge una modifica di percorso di lama (dragknife) a un percorso selezionato.

- ![](/images/CAM_DressupLeadInOut.svg) [Mascheratura di LeadInOut](/CAM_DressupLeadInOut/it "CAM DressupLeadInOut/it"): Aggiunge un punto di entrata o di uscita ad un percorso selezionato.

- ![](/images/CAM_DressupRampEntry.svg) [Rampa d'ingresso](/CAM_DressupRampEntry/it "CAM DressupRampEntry/it"): Aggiunge la modifica di dressup Rampa di ingresso a un percorso selezionato.

- ![](/images/CAM_DressupTag.svg) [Lembi di fermo](/CAM_DressupTag/it "CAM DressupTag/it"): Aggiunge un lembo ferma pezzo a un percorso di lavorazione selezionato.

- ![](/images/CAM_DressupZCorrect.svg) [Mascheratura della Correzione di Profondità Z](/index.php?title=CAM_DressupZCorrect/it&action=edit&redlink=1 "CAM DressupZCorrect/it (page does not exist)"): Corregge la profondità Z utilizzando Probe Map.

### Comandi Supplementari

- ![](/images/CAM_Fixture.svg) [Punto di fissaggio](/CAM_Fixture/it "CAM Fixture/it"): Cambia la posizione del punto di fissaggio.

- ![](/images/CAM_Comment.svg) [Commento](/CAM_Comment/it "CAM Comment/it"): Inserisce un commento nel codice G di un percorso.

- ![](/images/CAM_Stop.svg) [Stop](/CAM_Stop/it "CAM Stop/it"): Inserisce un punto di fermo macchina.

- ![](/images/CAM_Custom.svg) [Personalizza](/CAM_Custom/it "CAM Custom/it"): Inserisce del G-code personalizzato.

- ![](/images/CAM_Probe.svg) [Sonda](/index.php?title=CAM_Probe/it&action=edit&redlink=1 "CAM Probe/it (page does not exist)"): Crea una griglia di tastatura da uno stock di lavoro.

- ![](/images/CAM_Shape.svg) [Percorso da una forma](/CAM_Shape/it "CAM Shape/it"): Crea un oggetto percorso da un oggetto Parte selezionato. [_Sperimentale_](/CAM_experimental/it "CAM experimental/it").

### Modifica del percorso

- ![](/images/CAM_Copy.svg) [Copia l'operazione nella lavorazione](/CAM_Copy/it "CAM Copy/it"): Crea una copia parametrica di un oggetto percorso selezionato.

- ![](/images/CAM_Array.svg) [Copia in serie](/CAM_Array/it "CAM Array/it"): Crea una serie duplicando un percorso selezionato.

- ![](/images/CAM_SimpleCopy.svg) [Copia semplice](/CAM_SimpleCopy/it "CAM SimpleCopy/it"): Crea una copia non parametrica di un oggetto percorso selezionato.

### Operazioni speciali

- ![](/images/CAM_ThreadMilling.svg) [Filettatura](/index.php?title=CAM_ThreadMilling/it&action=edit&redlink=1 "CAM ThreadMilling/it (page does not exist)"): Crea un percorso per un'operazione CAM di filettatura con fresa dalle caratteristiche di un oggetto di base. [_Experimental_](/CAM_experimental/it "CAM experimental/it").

### Varie

- ![](/images/CAM_Area.svg) [Area](/CAM_Area/it "CAM Area/it"): Crea un'area caratteristica dagli oggetti selezionati. [_Sperimentale_](/CAM_experimental/it "CAM experimental/it").

- ![](/images/CAM_Area_Workplane.svg) [Piano di lavoro](/CAM_Area_Workplane/it "CAM Area Workplane/it"): Crea un piano di lavoro di un'area operativa. [_Sperimentale_](/CAM_experimental/it "CAM experimental/it").

## Architettura utensile

Gestisce utensili, geometrie e la Libreria degli strumenti. Basato sull'architettura utensile.

- [Percorso Utensile](/index.php?title=CAM_Tools/it&action=edit&redlink=1 "CAM Tools/it (page does not exist)")
- [Percorso Forma Utensile](/index.php?title=CAM_ToolShape/it&action=edit&redlink=1 "CAM ToolShape/it (page does not exist)")
- [Percorso Geometria Utensile](/index.php?title=CAM_ToolBit/it&action=edit&redlink=1 "CAM ToolBit/it (page does not exist)")
- [Percorso Libreria Geometria Utensile](/index.php?title=CAM_ToolBit_Library/it&action=edit&redlink=1 "CAM ToolBit Library/it (page does not exist)")
- [Percorso Controllore Utensile](/CAM_ToolController/it "CAM ToolController/it")

## Altro

- [FAQ di CAM](/CAM_FAQ/it "CAM FAQ/it"): L'ambiente CAM condivide molti concetti con altri pacchetti software CAM ma ha le sue peculiarità. Se qualcosa sembra sbagliato, questo è un buon punto di partenza.
- [Scheda di configurazione di CAM](/CAM_SetupSheet/it "CAM SetupSheet/it"): È possibile utilizzare una scheda di configurazione per personalizzare il modo in cui vengono calcolati i diversi valori delle proprietà per le operazioni.
- [Personalizzazione del postprocessore di CAM](/CAM_Postprocessor_Customization/it "CAM Postprocessor Customization/it"): Se si dispone di una macchina speciale che non può utilizzare uno dei post-processori disponibili, potrebbe essere necessario scrivere il proprio post-processore.
- [CAM a quattro assi](/CAM_fourth_axis/it "CAM fourth axis/it"): Fresatura sperimentale a quattro assi.

## Preferenze

- ![](/images/Preferences-cam.svg) [Preferenze...](/CAM_Preferences/it "CAM Preferences/it"): Preferenze disponibili per l'Ambiente CAM.

## Script

Vedere la pagina [Script di CAM](/CAM_scripting/it "CAM scripting/it").

## Tutorial

- [Guida per gli impazienti](/CAM_Walkthrough_for_the_Impatient/it "CAM Walkthrough for the Impatient/it"): un breve tutorial per familiarizzare con CAM.

## Video

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): Una playlist con una serie di 5 video in inglese di sliptonic. Questa serie mostra come lavorare con l'Ambiente Path.
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): Una playlist con una serie di 7 video lezioni di CAD CAM in inglese .
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): Una playlist con una serie di 8 video lezioni di CAD CAM in inglese.
- Vedere anche la [Sezione Computer-Aided Manufacturing (CAM)](</Video_tutorials/it#Computer-Aided_Manufacturing_(CAM)> "Video tutorials/it") della pagina wiki [Video tutorial](/Video_tutorials/it "Video tutorials/it").

## Tabella di marcia

- [Tabella di marcia per lo sviluppo di CAM](/CAM_Development_Roadmap "CAM Development Roadmap"): Leggi questo se sei uno sviluppatore e vuoi contribuire a CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/it&oldid=1495254>"
