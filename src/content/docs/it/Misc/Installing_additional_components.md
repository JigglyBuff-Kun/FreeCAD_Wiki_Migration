---
title: Installare componenti aggiuntivi
---
## Introduzione

Dopo aver installato FreeCAD sul tuo sistema operativo ([Windows](/Installing_on_Windows/it "Installing on Windows/it"), [Linux](/Installing_on_Linux/it "Installing on Linux/it") o [Mac](/Installing_on_Mac/it "Installing on Mac/it")), si può prendere in considerazione l'installazione di uno o più dei seguenti componenti aggiuntivi.

# File di aiuto

Vedere [Installazione del file della Guida](/Installing_Helpfile/it "Installing Helpfile/it").

# Ambienti di lavoro esterni

Oltre ai pacchetti degli [ambienti di lavoro](/Workbenches/it "Workbenches/it") forniti di default con FreeCAD, vi è un'ampia collezione di utili [ambienti complementari](/External_workbenches/it "External workbenches/it") realizzati dai membri della comunità.

## Software di terze parti

FreeCAD supporta molti pacchetti software di terze parti pronti all'uso. In molti casi l'unica cosa da fare è installare il software e quando FreeCAD viene riavviato lo troverà automaticamente e sarà in grado di usarlo. Questa sezione intende fornire un elenco di tali pacchetti software, insieme ad alcune informazioni su dove vengono utilizzati in FreeCAD e da dove possono essere scaricati.

## Supporti

### GitPython

[GitPython](https://github.com/gitpython-developers/GitPython) è una libreria python che viene utilizzata per interagire con i repository Git. L'[Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it") può usare questa libreria. GitPython è incluso nei programmi di installazione di FreeCAD per Windows e Mac.

### GraphViz

[GraphViz](https://www.graphviz.org) è un software di visualizzazione di grafici open source. È utilizzato dallo strumento [Grafico delle dipendenze](/Std_DependencyGraph/it "Std DependencyGraph/it").

### OpenCAMLib

[OpenCAMLib](http://www.anderswallin.net/CAM) è una libreria open source di algoritmi di produzione assistita da computer (CAM). È utilizzata nell'ambiente [CAM](/CAM_Workbench/it "CAM Workbench/it"). Vedere la pagina [OpenCamLib](/OpenCamLib/it "OpenCamLib/it") per le istruzioni d'installazione.

### OpenSCAD

[OpenSCAD](https://www.openscad.org) è un modellatore solido 3D. L'ambiente [OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it") dipende da questo software e [Mesh Workbench](/Mesh_Workbench/it "Mesh Workbench/it") lo utilizza per i suoi strumenti booleani. È richiesto anche per l'importazione di file SCAD con lo strumento [Std Import](/Std_Import/it "Std Import/it").

## Formati file

Tutto il software in questa sezione viene utilizzato dagli strumenti [Importa](/Std_Import/it "Std Import/it") o [Esporta](/Std_Export/it "Std Export/it").

### CADExchanger

[CADExchanger](https://cadexchanger.com) è un'applicazione commerciale per lo scambio di vari formati di file CAD. Esiste un [ambiente di lavoro esterno](https://github.com/yorikvanhavre/CADExchanger) per utilizzare questa applicazione in FreeCAD.

### DXF Importer

FreeCAD ha un importatore ed esportatore nativo per file DXF, programmato in C++. Attualmente non implementa tutte le funzionalità del formato DXF. Per queste funzionalità sono ancora disponibili l'importatore ed esportatore Python legacy. Questi richiedono la libreria Python [Draft-dxf-importer](https://github.com/yorikvanhavre/Draft-dxf-importer). Vedere la pagina [Importare i file DXF in FreeCAD](/FreeCAD_and_DXF_Import/it "FreeCAD and DXF Import/it") per maggiori informazioni.

### Convertitori DWG

FreeCAD non può leggere e scrivere direttamente file DWG. Per convertire file DXF in file DWG e viceversa, FreeCAD si affida a convertitori esterni. È disponibile il supporto integrato per i seguenti convertitori DWG:

* [LibreDWG](https://www.gnu.org/software/libredwg) (open-source, manca il supporto per alcune entità DWG).
* [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) (free, ma non open-source).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commerciale). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

Vedere [Preferenze di Importa/Esporta](/Import_Export_Preferences/it#DWG "Import Export Preferences/it") e [Importare i file DWG in FreeCAD](/FreeCAD_and_DWG_Import/it "FreeCAD and DWG Import/it") per maggiori informazioni.

### IfcOpenShell

[IfcOpenShell](http://ifcopenshell.org) è una libreria per lavorare con il formato file Industry Foundation Classes (IFC) utilizzato nella progettazione architettonica. La libreria è utilizzata anche dagli strumenti [Arch IfcExplorer](/Arch_IfcExplorer/it "Arch IfcExplorer/it") (0.18 and below) e [BIM IfcExplorer](/BIM_IfcExplorer/it "BIM IfcExplorer/it"). IfcOpenShell è incluso nei programmi di installazione di FreeCAD per Windows e Mac.

### IfcJson

[IfcJson](https://github.com/buildingSMART/ifcJSON) è una libreria necessaria per l'esportazione nel formato file IFCJSON. IFCJSON è un nuovo formato IFC che non è ancora supportato da molte applicazioni.

### Pycollada

[Pycollada](https://github.com/pycollada/pycollada/releases), noto anche come python-collada, è una libreria Python per leggere e scrivere file Collada (DAE). Pycollada è incluso nei programmi di installazione di FreeCAD per Windows e Mac.

## Rendering

### LuxCoreRender

[LuxCoreRender](https://www.luxcorerender.org) è un motore di rendering, reboot del progetto [LuxRender](/index.php?title=LuxRender/it&action=edit&redlink=1 "LuxRender/it (page does not exist)"). Ufficialmente non è supportato dall'ambiente [Raytracing](/Raytracing_Workbench/it "Raytracing Workbench/it"), ma potrebbe valere la pena di provarlo. È ufficialmente supportato dal nuovo ambiente [Render](https://github.com/FreeCAD/FreeCAD-render), inteso come futuro sostituto dell'ambiente Raytracing. Vedere la pagina [LuxCoreRender](/index.php?title=LuxCoreRender/it&action=edit&redlink=1 "LuxCoreRender/it (page does not exist)") per ulteriori informazioni e istruzioni di installazione.

### LuxRender

[LuxRender](https://luxcorerender.org/history/) è uno dei due motori di rendering supportati dall'ambiente [Raytracing](/Raytracing_Workbench/it "Raytracing Workbench/it"). Nel 2013 il progetto è stato riavviato diventando [LuxCoreRender/it](/index.php?title=LuxCoreRender/it&action=edit&redlink=1 "LuxCoreRender/it (page does not exist)"), con un'importante riscrittura del codice e modifiche alla compatibilità. Ufficialmente l'ambiente Raytracing supporta solo [LuxRender](/LuxRender "LuxRender") che è stato dismesso (l'ultima versione è la 1.6 del 28/12/2017), mentre il nuovo ambiente [Render](https://github.com/FreeCAD/FreeCAD-render) (destinato in futuro a sostituire l'ambiente Raytracing) supporta LuxCoreRender ed ha abbandonato il supporto per LuxRender. Comunque, anche se ufficialmente non supportato, [LuxCoreRender](/index.php?title=LuxCoreRender/it&action=edit&redlink=1 "LuxCoreRender/it (page does not exist)") potrebbe funzionare con l'ambiente Raytracing, potrebbe valere la pena di provarlo. Vedere la pagina [LuxRender](/index.php?title=LuxRender/it&action=edit&redlink=1 "LuxRender/it (page does not exist)") per ulteriori informazioni e istruzioni di installazione e [LuxCoreRender](/index.php?title=LuxCoreRender/it&action=edit&redlink=1 "LuxCoreRender/it (page does not exist)") se si desidera provare un software più moderno.

### POV-Ray

[POV-Ray](https://www.povray.org) è un noto ray-tracer che può rendere immagini fotorealistiche. È uno dei due motori di rendering attualmente supportati dall'ambiente [Raytracing](/Raytracing_Workbench/it "Raytracing Workbench/it"). Consulta la pagina [POV-Ray](/index.php?title=POV-Ray/it&action=edit&redlink=1 "POV-Ray/it (page does not exist)") per ulteriori informazioni e istruzioni di installazione.

## Elementi finiti

### CalculiX

[CalculiX](http://calculix.de) è una suite di due pacchetti di elementi finiti: CalculiX CrunchiX, un risolutore FEM, e CalculiX GraphiX, un frontend GUI. Solo il risolutore è supportato da FreeCAD. Viene utilizzato dallo strumento [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools").

### Gmsh

[Gmsh](http://gmsh.info) è un generatore automatico di mesh agli elementi finiti. è utilizzato dagli strumenti [FEM MeshGmshFromShape](/FEM_MeshGmshFromShape/it "FEM MeshGmshFromShape/it") e [Mesh FromPartShape](/Mesh_FromPartShape/it "Mesh FromPartShape/it").

### Elmer

[Elmer](https://www.csc.fi/web/elmer) è un software di simulazione multifisica, che è stato reso open source nel 2005. In FreeCAD i suoi moduli Grid e Solver sono utilizzati dallo strumento [FEM SolverElmer](/FEM_SolverElmer/it "FEM SolverElmer/it").

### FEniCS

[FEniCS](https://fenicsproject.org) è una piattaforma di calcolo per risolvere equazioni differenziali alle derivate parziali (PDE), ampiamente utilizzate per la risoluzione di problemi FEM. Viene utilizzato dall'ambiente [FEM](/FEM_Workbench/it "FEM Workbench/it").

### Z88

[Z88](https://en.z88.de) è un altro programma FEM, contenente un mesher, un risolutore e convertitori. Viene utilizzato dallo strumento [FEM SolverZ88](/FEM_SolverZ88/it "FEM SolverZ88/it"). FreeCAD richiede il pacchetto open source Z88OS.

### OpenFOAM

[OpenFOAM](https://openfoam.org) è una vasta raccolta di librerie per simulazioni di fluidodinamica computazionale (CFD). OpenFOAM è utilizzato dall'ambiente [Cfd](/Cfd_Workbench/it "Cfd Workbench/it") e [CfdOF](https://github.com/jaheyns/CfdOF) [external\_workbench](/External_workbench "External workbench").

# Pagine correlate

* [Importazione ed Esportazione](/Import_Export/it "Import Export/it")
* [Preferenze d'Importazione ed Esportazione](/Import_Export_Preferences/it "Import Export Preferences/it")
* [Librerie di terze parti](/Third_Party_Libraries/it "Third Party Libraries/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_additional_components/it&oldid=1476712>"