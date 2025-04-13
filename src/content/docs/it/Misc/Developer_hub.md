---
title: Hub degli sviluppatori di FreeCAD
---

![](/images/Crystal_Clear_app_tutorials.png)

---

Questo è il posto giusto per contribuire allo sviluppo del software di FreeCAD.

Queste pagine sono in fase iniziale di sviluppo. Se non è possibile trovare le informazioni cercate, o se da altre parti si trovano informazioni utili non collegate, si prega di lasciare un commento nella pagina delle [discussioni nel forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) in modo che qualcuno se ne possa occupare (oppure, modificare direttamente questa pagina).

## Documentazione per gli sviluppatori

La documentazione per gli sviluppatori comprende le seguenti sezioni:

### Compilare FreeCAD

- [Github repo](https://github.com/FreeCAD/FreeCAD). Se sei nuovo su git, leggi [Gestione del codice sorgente](/Source_code_management/it "Source code management/it")
- [Compilazione con Docker](/Compile_on_Docker/it "Compile on Docker/it")
- [Compilare in Windows](/Compile_on_Windows/it "Compile on Windows/it")
- [Compilare in Linux](/Compile_on_Linux/it "Compile on Linux/it")
- [Compilare in MacOS](/Compile_on_MacOS/it "Compile on MacOS/it")
- [Licenze](/License/it "License/it") - Dettagli sulle licenze FreeCAD
- [Librerie di terze parti](/Third_Party_Libraries/it "Third Party Libraries/it")
- [Strumenti di terze parti](/Third_Party_Tools/it "Third Party Tools/it")
- [Avvio e configurazione](/Start_up_and_Configuration/it "Start up and Configuration/it")
- [Documentazione del codice sorgente](/Source_documentation/it "Source documentation/it")
- Usare il [bug Tracker](/Tracker/it "Tracker/it") quando quando si ha un problema o si pensa di aver trovato un bug

### Packaging

Il [Packaging](/Packaging/it "Packaging/it") consiste nel prendere i binari compilati e i file sorgente di Python di FreeCAD e distribuirli per l'uso in un particolare sistema.

- [Linux packaging](/Linux_packaging "Linux packaging")
  - [Debian development](/Debian_development "Debian development")
  - [Debian Unstable](/Debian_Unstable "Debian Unstable")
  - [Git buildpackage](/Git_buildpackage "Git buildpackage")
- [Windows packaging](/Windows_packaging "Windows packaging")
- [MacOS packaging](/MacOS_packaging "MacOS packaging")

### Costruire Strumenti di Supporto

- [Strumenti per costruire FreeCAD](/FreeCAD_Build_Tool/it "FreeCAD Build Tool/it")
  - [Creare un Ambiente di lavoro](/Workbench_creation/it "Workbench creation/it") a FreeCAD
- [Mettere a punto](/Debugging/it "Debugging/it") FreeCAD
- [Testare](/Testing/it "Testing/it") FreeCAD
- [Compilare FreeCAD in modo veloce](</Compiling_(Speeding_up)/it> "Compiling (Speeding up)/it")
- [Integrazione continua](/Continuous_Integration/it "Continuous Integration/it")

### Modificare FreeCAD

- Comprendere il [Codice sorgente di FreeCAD](/The_FreeCAD_source_code/it "The FreeCAD source code/it")
- [Inviare patch](/Tracker/it#Inviare_patch "Tracker/it")
- Aggiungere [Funzioni](/Gui_Command/it "Gui Command/it") a FreeCAD o a un Ambiente di lavoro
- [Marchiare e Personalizzare](/Branding/it "Branding/it"), oppure _come dare un aspetto uniforme a FreeCAD_
- [Materiale grafico](/Artwork/it "Artwork/it") creato per FreeCAD, liberamente riutilizzabile
- [Linee guida](/Artwork_Guidelines/it "Artwork Guidelines/it") standard per le icone
- [Tradurre FreeCAD](/Localisation/it "Localisation/it"), le voci dell'interfaccia grafica
- [Moduli extra in Python](/Extra_python_modules/it "Extra python modules/it"), o _come estendere le funzionalità di python all'interno FreeCAD_
- [Google Summer of Code](/Google_Summer_of_Code "Google Summer of Code") get involved via Google's student support program
- [Fine-tuning](/Fine-tuning/it "Fine-tuning/it") Mostra varie regolazioni e impostazioni che è possibile utilizzare per perfezionare l'installazione di FreeCAD o per risolvere determinati problemi
- [Wrapping a C++ class in Python](/Wrapping_a_Cplusplus_class_in_Python "Wrapping a Cplusplus class in Python") mostra come creare il wrapper Python per una classe C++
- [Lista di controllo per l'aggiunta di una caratteristica ad un ambiente C++](/NewFeatureCheckList_C%2B%2B "NewFeatureCheckList C++") fornisce un aiuto per i contributori.

- [Traduzione di un ambiente esterno](/Translating_an_external_workbench/it "Translating an external workbench/it")

### Guida per gli sviluppatori del modulo

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): Si tratta di un ebook in fase di scrittura su GitHub, si prega di creare una biforcazione e di inviare una richiesta di pull per contribuire.

Capitoli:

- Overview and Software Architecture
- Source code structure
- Base and App module
- Gui module
- Python wrapping
- Modular design
- Fem module source analysis (mixed C++ and Python)
- Development of CFD Module (pure Python)
- Module testing and debugging
- Contribute code with git

L'ultima anteprima del pdf può essere scaricata dalla [cartella dei pdf](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) di questo repo git

### Moduli interni

#### Documentazione di OpenCascade

OpenCascade è una piattaforma di sviluppo software per la modellazione 3D di superfici e solidi, lo scambio di dati CAD e la visualizzazione, principalmente sotto forma di librerie C++.

- [Roman Lygin's tutorials](http://opencascade.wikidot.com/romansarticles)
- [Full Online Documentation](https://dev.opencascade.org/doc/overview/html/index.html)
- [Reference Manual](https://dev.opencascade.org/doc/refman/html/index.html)
- [Il wiki di openCascade](http://opencascade.wikidot.com)

#### Formato dei file

[Formato dei file FCStd](/File_Format_FCStd/it "File Format FCStd/it"). I file creati con FreeCAD sono file `.zip` che includono la geometria [BREP](https://en.wikipedia.org/wiki/Boundary_representation), nonché i dati XML che descrivono il documento.

#### Solutore di Sketcher

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (forum thread), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) in GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) in the FreeCAD source code; important files are [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) and [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Recent Several Sketcher improvements](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

Il risolutore di sketcher non è perfetto, in quanto vi sono alcuni problemi con la precisione numerica quando si utilizzano valori elevati, vedere [Adventure of fixing sketcher solver for large sketches](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

Lo sviluppo di una nuova architettura di risolutore potrebbe migliorare il modo in cui il risolutore viene utilizzato sia in [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), sia per l'assemblaggio di corpi 3D. Vedere [Reimplementing constraint solver](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Mappa delle fasi di sviluppo

Anche se già utilizzabile in diverse parti, FreeCAD è solo all'inizio di un lungo cammino nell'ambiente del CAD.

Serve ancora molto lavoro prima che possa competere con i software commerciali.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Community

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,synchronized with [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Development forum](https://forum.freecad.org/viewforum.php?f=6)

- [Piano di sviluppo](/Development_roadmap/it "Development roadmap/it")

## Crediti

[Collaboratori](/Contributors/it "Contributors/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/it&oldid=1394905>"
