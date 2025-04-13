---
title: FEM CalculiX
---
## Introduction

## Introduzione

Questa pagina raccoglie le informazioni sul risolutore di elementi finiti [CalculiX](http://www.calculix.de/), il risolutore predefinito per l'analisi strutturale e termo-meccanica nell'ambiente ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/it "FEM Workbench/it") a partire da FreeCAD 0.17. A seconda del sistema operativo su cui si sta lavorando, è necessario installare CalculiX prima di eseguire la prima simulazione. Si prega di consultare [Installare FEM](/FEM_Install/it "FEM Install/it").

Il risolutore è in grado di eseguire calcoli lineari e non lineari, per problemi statici, dinamici e termici. Il risolutore funziona su un file di input Abaqus (`.inp`), il che significa che può essere utilizzato con diversi pre-processori che supportano questo formato. Il programma include un proprio preprocessore grafico che, tuttavia, non viene utilizzato da FreeCAD, ma solo dal risolutore.

CalculiX è progettato per funzionare su piattaforme Unix come Linux e Irix ma anche su MS-Windows. CalculiX è stato sviluppato dagli ingegneri di MTU Aero Engines, Monaco di Baviera, Germania, per assisterli nella progettazione di macchinari come le turbine a getto. Il software è attualmente rilasciato al pubblico secondo i termini della GPL versione 2.

## Integration with FreeCAD

## Integrazione con FreeCAD

L'interazione tra l'ambiente [FEM](/FEM_Workbench/it "FEM Workbench/it") e CalculiX avviene attraverso la scrittura e la lettura di file di testo. La sequenza delle operazioni è la seguente:

1. Viene creato un file di input CalculiX con i dettagli necessari per eseguire la simulazione.
2. Viene avviato il risolutore CalculiX con questo file di input.
3. Viene registrato l'output del solutore.
4. Vengono letti i file di output del risolutore, se disponibili.

```
Lo strumento FEM Control Solver gestisce l'intero processo. L'interazione dell'utente nel processo è possibile.

```

## Preprocessing interface

## Interfaccia di Pre-processo

Il file di input che CalculiX utilizza può essere preparato e modificato prima dell'avvio del solver. Le unità utilizzate nel file di input sono indipendenti dalle unità impostate in FreeCAD; sono sempre millimetri (mm) e Newton (N).

*(Da fare: controllare questo. Cosa succede con la mesh se in FreeCAD si usa inch? Siccome è stata introdotta la densità, con questo abbiamo kg e s, e non più N?! Cosa ne pensate di questo?!)*

L'interfaccia di CalculiX supporta i seguenti oggetti:

### FEM Elements

### Elementi FEM

* Tet4 and Tet10
* S3 and S6
* B31 and B32
* e quelli descritti in [FEM Mesh CalculiX](/FEM_Mesh_CalculiX/it "FEM Mesh CalculiX/it")

### Analysis

### Analisi

* Analisi statica lineare
* Analisi delle frequenze
* Analisi termo-strutturale accoppiata

### Materials

### Materiali

* Materiale isotropo elastico lineare (uniforme in tutte le direzioni)
* Materiale multiplo è in fase di sviluppo

## Postprocessing interface

## Interfaccia di post-processo

L'ambiente FEM può leggere lo stress risultante (Von Mises) e tutti gli spostamenti.

Reaction forces can be found in *ccx\_dat\_file* which contains reaction force components (fx, fy, fz) for each fixed boundary condition and for each displacement boundary condition which constrains translation degrees of freedom.

## Related

* [FEM Mesh CalculiX](/FEM_Mesh_CalculiX "FEM Mesh CalculiX")
* [CalculiX preferences](/FEM_Preferences#CalculiX "FEM Preferences") dialog menu in the FEM Workbench preferences menu

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX/it&oldid=1479447>"