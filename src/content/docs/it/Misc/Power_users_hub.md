---
title: Hub degli utenti esperti
---
![](/images/Power_user_hub.png)

---

Questo è il posto per esplorare più a fondo FreeCAD. Qui si può imparare a personalizzazione e estendere FreeCAD secondo le proprie esigenze.

FreeCAD è estendibile con il codice [Python](/Python/it "Python/it") che viene eseguito direttamente nella [Console Python](/Python_console/it "Python console/it") o che viene caricato dai moduli all'avvio. Questo significa che è possibile modificare FreeCAD senza dover ricompilare il programma. Ad esempio, è possibile:

* **Creare e modificare elementi di geometria**: serve un particolare oggetto (forma o linea speciale) che non è presente nell'installazione di default FreeCAD? Si può facilmente creare un nuovo tipo di oggetto, sia partendo da zero che adattando un tipo di oggetto esistente.
* **Creare strumenti e comandi personalizzati**: aggiungere un set di strumenti che eseguono il proprio codice.
* **Modificare l'interfaccia**: creare delle barre degli strumenti per mettere i propri strumenti, creare finestre, pannelli o interfacce speciali per interagire con i propri strumenti.
* **Modificare il grafo della scena**: per costruire e calcolare la geometria, FreeCAD usa processi diversi da quelli che usa per visualizzare la geometria sullo schermo. Si ha accesso totale al modo in cui i contenuti della scena vengono visualizzati sullo schermo, quindi è possibile modificare tale rappresentazione, interagire con essa, o aggiungere tutti i tipi di comportamenti personalizzati e agli accessori dello schermo, quali, ad esempio, informazioni, opzioni di trascinamento, ancoraggio o entità temporanee.

Se si desidera contribuire con contenuti a queste pagine, richiedere un account wiki con autorizzazioni dell'editor [nel forum](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) e leggere le [WikiPages](/WikiPages "WikiPages") per le linee guida generali da seguire. Per gli altri modi di contribuire al progetto, vedere la pagina [Contribuire a FreeCAD](/Help_FreeCAD/it "Help FreeCAD/it").

## Personalizzare FreeCAD

* [Personalizzare l'interfaccia](/Interface_Customization/it "Interface Customization/it"): Cominciando dall'inizio: le barre degli strumenti e i tasti di scelta rapida
* [Operare con le Macro](/Macros/it "Macros/it"): Registrare semplicemente le operazioni che vengono ripetute spesso o creare il codice Python
* [Esempi di macro](/Macros_recipes/it "Macros recipes/it")
* [Personalizzare la barra degli strumenti](/Customize_Toolbars/it "Customize Toolbars/it")
* [Installare ambienti aggiuntivi](/Installing_more_workbenches/it "Installing more workbenches/it")

## Script in FreeCAD

### Generale

* [Scripting e Macros](/Scripting_and_macros/it "Scripting and macros/it") - Un elenco di pagine wiki rilevanti
* [Introduzione a Python](/Introduction_to_Python/it "Introduction to Python/it") - Vedere anche altri tutorial Python in fondo a questa pagina
* [Guida agli script in FreeCAD](/Python_scripting_tutorial/it "Python scripting tutorial/it") - Uno sguardo generale agli script in Python FreeCAD
* [Script base in FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"): Gli script di base.
* [Manuale FreeCAD - Sezione Python Scripting](/Manual:A_gentle_introduction/it "Manual:A gentle introduction/it"): Introduzione in più capitoli agli script Python in FreeCAD
* [Comandi dell'interfaccia grafica](/Gui_Command/it "Gui Command/it") : Aggiungere comandi personalizzati alla GUI
* [Unità](/Units/it "Units/it"): utilizzare unità miste in FreeCAD
* [Profilazione](/Profiling/it "Profiling/it") del codice Python
* [Debugging](/Debugging/it#Eliminare_errori_Python "Debugging/it") del codice Python
* [Python Development Environment](/Python_Development_Environment/it "Python Development Environment/it") - Un ambiente di sviluppo semplicistico per Python all'interno di FreeCAD

### Moduli

Le funzionalità di FreeCAD sono suddivise in moduli che trattano tipi specifici di dati e di applicazioni. FreeCAD è composto da moduli built-in e da moduli di estensione (plug-in). Quando i moduli plugin sono installati, sono disponibili come i moduli built-in. I moduli descritti di seguito sono i moduli di default, inclusi in ogni installazione FreeCAD.

* I [Moduli builtin](/Builtin_modules/it "Builtin modules/it") sono i moduli principali di FreeCAD. Essi contengono gli strumenti per manipolare le configurazioni generali di FreeCAD, i documenti e il loro contenuto.
* La pagina [Creare un Ambiente di lavoro](/Workbench_creation/it "Workbench creation/it") spiega come creare un proprio ambiente di lavoro.

#### Lavorare con Meshes

* [Script per Mesh](/Mesh_Scripting/it "Mesh Scripting/it"): Come interagire con il [Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it")

#### Lavorare con Parts

* [L'ambiente Part](/Part_Workbench/it "Part Workbench/it"): Come sono utilizzati gli strumenti e la struttura di [Open CASCADE Technology](http://en.wikipedia.org/wiki/Open_CASCADE) in FreeCAD
* [Script di dati topologici](/Topological_data_scripting/it "Topological data scripting/it"): Come interagire con il Modulo Parte
* [PythonOCC](/PythonOCC "PythonOCC") - [PythonOCC](/PythonOCC/it "PythonOCC/it"): Come utilizzare tutta la potenza di Open CASCADE
* [Da Mesh a Parte](/Mesh_to_Part/it "Mesh to Part/it"): Conversione tra tipi di oggetti

#### Accedere alla scenografia di Coin

* [La grafica di scena di Coin/Inventor](/Scenegraph/it "Scenegraph/it"): Come funziona la rappresentazione della scena in FreeCAD
* [Pivy](/Pivy/it "Pivy/it"): Come accedere alla grafica della scena e come modificarla

### Controllare l'interfaccia di Qt

* [PySide](/PySide/it "PySide/it"): Come accedere alla gestione dell'interfaccia e modificare il suo contenuto
* [Using the FreeCAD GUI](/Embedding_FreeCADGui "Embedding FreeCADGui") - [Utlizzare l'interfaccia grafica utente di FreeCAD](/Embedding_FreeCADGui/it "Embedding FreeCADGui/it") in una diversa applicazione Qt tramite PyQt

### Lavorare con oggetti parametrici

* [Script di oggetti](/Scripted_objects/it "Scripted objects/it"): come realizzare oggetti con script Python al 100%.
  + [Oggetti creati da script con parti associate](/Scripted_objects_with_attachment/it "Scripted objects with attachment/it"): come rendere gli oggetti creati da script associabili ad altri oggetti.
  + [Oggetti creati da script che salvano gli attributi](/Scripted_objects_saving_attributes/it "Scripted objects saving attributes/it"): come salvare e ripristinare gli attributi della classe proxy con `dumps` e `loads`.
  + [Migrazione di oggetti creati da script](/Scripted_objects_migration/it "Scripted objects migration/it"): come migrare dei vecchi oggetti creati da script in una nuova classe.

### Esempi

* [Parti di codici](/Code_snippets/it "Code snippets/it") : Una raccolta di esempi di codice Python di FreeCAD, da utilizzare negli script ...
* [Funzione per tracciare linee](/Line_drawing_function/it "Line drawing function/it"): Come costruire un semplice strumento per tracciare linee
* [Creare finestre di dialogo](/Dialog_creation/it "Dialog creation/it"): Come creare finestre di dialogo con Qt designer, e come utilizzarle in FreeCAD
* [Incorporare FreeCAD](/Embedding_FreeCAD/it "Embedding FreeCAD/it"): Come importare FreeCAD sotto forma di un modulo Python in altre applicazioni
* L'[Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it") aggiunge a FreeCAD funzioni base di disegno 2D. E 'scritto interamente in Python, e costituisce un valido esempio per scrivere moduli personali.
* [FreeCAD vector math library](/FreeCAD_vector_math_library "FreeCAD vector math library") - [Libreria di matematica vettoriale di FreeCAD](/FreeCAD_vector_math_library/it "FreeCAD vector math library/it") : Un paio di funzioni utili per manipolare i vettori in FreeCAD. Questa libreria è inclusa anche nel modulo Draft.

## Funzioni API

La documentazione completa di FreeCAD si trova in <http://www.freecadweb.org/api/> . Essa contiene le API C++ e Python, e non è ancora del tutto formattata, il che può essere fonte di confusione quando si cerca solo il codice Python. Una versione delle API più facile da esplorare si trova [in questa pagina in inglese](/Category:API "Category:API") e [in questa in italiano](/Category:API/it "Category:API/it"). Ricordare che può essere incompleta in quanto viene aggiornata manualmente. Per informazioni più accurate, esplorare i moduli direttamente dalla console di FreeCAD.

Relazionato: [Exposing C++ to Python](/Exposing_C%2B%2B_to_Python "Exposing C++ to Python")

## Modifiche avanzate

* [Avvio e configurazione](/Start_up_and_Configuration/it "Start up and Configuration/it"): Avvio e opzioni della riga di comando
* [Installare in Windows](/Install_on_Windows/it "Install on Windows/it"): Utlizzando l'installatore di Windows
* [Compilare FreeCAD in Windows](/Compile_on_Windows/it "Compile on Windows/it") e [Compilare FreeCAD in Linux](/Compile_on_Linux/it "Compile on Linux/it")
* [Marchiare e Personalizzare](/Branding/it "Branding/it"): Semplici modifiche che si possono apportare al codice sorgente per modificare alcuni aspetti del FreeCAD
* [Moduli extra in Python](/Extra_python_modules/it "Extra python modules/it") : Potenzia l'interprete di Python in FreeCAD con questi moduli aggiuntivi!

## Guide di Python

Questi sono buoni tutorial generici, non specifici per FreeCAD, che possono interessare chi è totalmente nuovo a Python.

**Python**

* [Official python tutorial](https://docs.python.org/3/tutorial/index.html) - Una guida molto completa per scoprire Python
* [Non-programmer tutorial per Python](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - Un eccellente wiki
* [Python per novizi](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - Un grande manuale che si occupa di tutti i concetti base

**PySide** - Come creare e gestire l'interfaccia Qt di FreeCAD con Python

* [PySide tutorial](http://zetcode.com/gui/pysidetutorial/) : Una piattaforma che funge da tutorial mostrando esempi sull'uso di PySide
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/) : Un tutorial di facile lettura con esempi che riguardano PySide e PyQt
* [PySide documentation](http://qt-project.org/wiki/PySideDocumentation) : dal Progetto Qt
* [Using QtCreator in PySide](http://qt-project.org/wiki/QtCreator_and_PySide) : anche dal Progetto Qt
* [PySide reference](http://srinikom.github.io/pyside-docs/index.html) : infiniti dettagli sulle minuzie di PySide e Qt, una fonte di riferimento attendibile
* [PySide code snippets](http://nullege.com/codes/search?cq=PySide) : un ricercato database di parti di codice di PySide

I seguenti sono due riferimenti specifici di PyQt (non di PySide) che possono offrire alcune informazioni sul suo utilizzo:

* [Tutorial base di PyQt](http://www.cs.usfca.edu/~afedosov/qttut/) : Un semplice e breve tutorial basato su Linux che spiega come lavorare con PyQt e Qt Designer
* [Programmare Applicazioni Qt in Python](http://vizzzion.org/?id=pyqt) : Un tutorial molto approfondito che copre tutti i processi di lavoro con Qt e Python.

**Pivy** - Come interagire con le scene 3D di FreeCAD

* [Pivy - Embedding a Dynamic Scripting Language into a Scene Graph Library](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf) : Tesi che illustra Pivy nel dettaglio
* [High Level 3D Graphics Programming in Python](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/) : esempio Pivy da Pycon 2004
* [Introducing Pivy into studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [(Mirror)](https://www.researchgate.net/publication/228737136_Integrating_Pivy_into_Studierstube_42) : Uno scritto che non è un vero tutorial, ma illustra bene come Pivy funziona (richiede un account accademico)

## Progetti della comunità

Nel [Portale della comunità](/FreeCAD_Community_Portal/it "FreeCAD Community Portal/it"), è possibile trovare altri progetti basati su FreeCAD e gestiti dalla comunità degli utenti di FreeCAD. Quando si avvia un nuovo progetto con FreeCAD, ricordarsi di riferirlo nel Portale!

È anche disponibile una pagina dove è descritto come [Contribuire a FreeCAD](/Help_FreeCAD/it "Help FreeCAD/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/it&oldid=1463657>"