---
title: Path Workbench/Atelierul Traiectorii
---

![](/images/Workbench_CAM.svg)

CAM workbench icon

## Introducere

Atelierul traiectorii este folosit pentru producerea unor instrucţiuni [CNC machines](https://en.wikipedia.org/wiki/CNC_router) pornind de la un model FreeCAD 3D. Acestea produc obeicte reale 3D pe mașini CNC ca frezele, strungurile, mașinile de tăiat cu laser, sau similare.În mod tipic instrucțiile sunt un dialect [G-Code](https://en.wikipedia.org/wiki/G-Code) .

![](/images/Pathwb.png)

Algoritmul pentru crearea acestor instrucțiuni în FreeCAD, în limbajul G-cod, este următorul:

- Un model 3D este obiectul de bază, creat în mod obișnuit folosind una sau mai multe tabele de lucru [Part Design](/PartDesign_Workbench/ro "PartDesign Workbench/ro"), [Part](/Part_Workbench/ro "Part Workbench/ro") sau [Draft](/Draft_Workbench/ro "Draft Workbench/ro").
- O [Job](/CAM_Job/ro "CAM Job/ro") este creată în Path Workbench. Aceasta conține toate informațiile necesare pentru a genera codul G necesar pentru a procesa lucrarea pe o moară CNC: există material stoc, moara are un anumit [set de instrumente](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") și urmează anumite comenzi care controlează viteza și mișcările (de obicei, Codul G).
- Instrumentele sunt selectate după cum este cerut de Operațiunile de Lucru.
- Căile de frezare sunt create folosind, de ex. [Contour](/CAM_Profile/ro "CAM Profile/ro") și [Pocket](/CAM_Pocket_3D/ro "CAM Pocket 3D/ro") Operații. Aceste Obiecte de cale folosesc dialectul intern al FreeCAD G, independent de mașina CNC.
- Exportați lucrarea cu un cod g, care se potrivește cu mașina dvs.

## General concepts

## Concepte generale

Path Workbench generează G-Code care definește căile necesare pentru a mula Proiectul reprezentat de modelul 3D pe miezul țintă [[the Path Job Operations FreeCAD G-Code dialect](https://www.freecadweb.org/wiki/Path_scripting#FreeCAD.27s_internal_GCode_format) ], care ulterior se traduce în dialectul corespunzător pentru controlerul CNC țintă prin selectarea postprocesorului adecvat.

Codul G este generat de directivele și operațiile conținute într-o traiectorie. Fluxul de lucru al joburilor le afișează în ordinea în care vor fi executate. Lista este populată prin adăugarea operațiunilor de deplasare, a traiectoriile suplimentare(Dressup), a comenzilor parțiale ale traiectorilor și a modificărilor de parcurs - din meniul Path sau prin butoanele GUI.

The G-code is generated from directives and Operations contained in a CAM Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding CAM Operations, Path Dressups, Supplemental Commands, and Path Modifications from the CAM Menu, or GUI buttons.

Path Workbench oferă un Manager de instrumente (Library, Tool-Table) și G-Code Inspection și instrumente de simulare. Acesta leagă postprocesorul și permite importarea și exportul șabloanelor de lucrări.

Path Workbench include dependențe externe:

1. Unitățile de măsură ale modelului FreeCAD 3D sunt definite în **Edit → Preference → General → Units tab's Units settings**.. Configurația Postprocesorului definește unitățile finale de cod G.
2. Fișierul Macro al traiectorie, and Geometric toleranțe, sunt definite în **Edit → Preferences → Path → Job Preferences** .
3. Culorile sunt definite in the **Edit → Preferences → Path → Path colors** tab.
4. Parametrii Punților de susținere (Holding tag) sunt definite în **Edit → Preferences → Path → Dressups** tab.
5. Calitatea modelului 3D de bază acceptă cerințele Path WB, passes Check Geometry.

## Limitations

Some current limitations of which you should be aware are:

- Most of the CAM Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") (which is still an [experimental feature](/CAM_experimental "CAM experimental") as of November 2020).
- Most of CAM workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in CAM workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations.
- The operations within the CAM workbench are not aware of clamping mechanisms in use to secure the model to your machine. Consequently, please review and simulate the paths you generate prior to sending the code to your machine. If necessary, model your clamping mechanisms in FreeCAD in order to better inspect the paths generated. Look for possible collisions with clamps or other obstacles along the paths.

## Unități de măsură

Unitatea de măsură în Traiectorie poate crea confuzii. Există mai multe puncte de înțeles:

1. În FreeCAD unitățile de măsură pentru lungime și timp sunt 'mm' and 's' respectively. Viteza este în 'mm/s'. Aceasta este stocată intern în FreeCAD indiferent de orice altceva
2. Schema default de Unități de măsură utilizează unitățile implicite. Dacă utilizați schema implicită și introduceți o rată de alimentare fără a specifică unitățile de măsură, aceasta va fi introdusă ca 'mm/s'
3. Majoritatea mașinilor CNC se așteaptă ca rata de alimentare să fie sub formă de fie 'mm/min' or 'in/min'. Cele mai multe postprocesoare vor converti automat unitatea atunci când generează gcode.

Scheme:

1. Schimbarea schemei din preferințe modifică șirul de unități implicit pentru câmpurile de introducere. Dacă sunteți un utilizator Path și preferați să proiectați în metrice, este foarte recomandat să utilizați schema "Metric Small Parts & CNC". Dacă proiectați în unități din SUA, fie Decimalul Imperial și Clădirea SUA vor funcționa
2. Schimbarea schemei de unități preferate nu va avea niciun efect asupra ieșirii, dar va ajuta la evitarea erorilor de intrare

Ieşire:

1. Generarea unității corecte în ieșire este responsabilitatea postprocesorului și se face numai la momentul respectiv
2. Unitatea de ieșire a mașinii nu are nicio legătură cu schema unității selectată
3. Postprocesoarele produc fie ieșire metrică (G21), ieșire Imperial (G20), fie configurabile.
4. Implicit post-procesor configurabil la metric (G21)
5. Dacă doriți ca postprocesorul dvs. configurabil să emită gcode imperiale (G20), Setați argumentul corect în configurația de ieșire a jobului (de ex. --Inches pentru linuxcnc). Acest lucru poate fi stocat într-un șablon de lucru și setat ca șablon implicit pentru al face automat pentru toate lucrările viitoare

Căi de inspecție:

1. Dacă utilizați instrumentul Path Inspect pentru a vedea codul g, îl veți vedea în 'mm/s' deoarece nu este post-procesat

## Heights and depths

## Comenzi pentru Traiectorie

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

## Commands

Some commands are experimental and not available by default. To enable them see [CAM experimental](/CAM_experimental "CAM experimental").

### Project Commands

- ![](/images/Path-Job.png) [Job](/CAM_Job/ro "CAM Job/ro"): Creează un nou CNC job

* [File:CAM PostProcess.png](/index.php?title=Special:Upload&wpDestFile=CAM_PostProcess.png "File:CAM PostProcess.png") [Post Process](/CAM_Post/ro "CAM Post/ro"): Exportă un proiect ca G-code

* [File:CAM Sanity.png](/index.php?title=Special:Upload&wpDestFile=CAM_Sanity.png "File:CAM Sanity.png") [CAM Errors](/index.php?title=CAM_Sanity/ro&action=edit&redlink=1 "CAM Sanity/ro (page does not exist)"): Verifică lucrarea selectată pentru valori lipsă

- ![](/images/Path-ExportTemplate.png) [Export Template](/CAM_ExportTemplate/ro "CAM ExportTemplate/ro"): Exportă job-ul curent ca șablon

### Tool Commands

- [File:CAM Inspect.png](/index.php?title=Special:Upload&wpDestFile=CAM_Inspect.png "File:CAM Inspect.png") [G-Code Inspector](/CAM_Inspect/ro "CAM Inspect/ro"): Arată G-code pentru verificare

- [File:CAM Simulator.png](/index.php?title=Special:Upload&wpDestFile=CAM_Simulator.png "File:CAM Simulator.png") [Simulator](/CAM_Simulator/ro "CAM Simulator/ro"): Arată operațiunile de frezare ca și cum ar fi fost deja făcute pe mașina-unealtă

* ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

* ![](/images/Path-CompleteLoop.png) [Complete Loop](/CAM_SelectLoop/ro "CAM SelectLoop/ro"): Completează o buclă de la două muchii selceționate

* ![](/images/CAM_OpActiveToggle.svg) [Toggle the Active State of the Operation](/CAM_OpActiveToggle "CAM OpActiveToggle"): Activates or de-activates a path operation.

* ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

* ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Basic Operations

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"): Creates a profile operation of the entire model, or from one or more selected faces or edges.

* [File:CAM Pocket.png](/index.php?title=Special:Upload&wpDestFile=CAM_Pocket.png "File:CAM Pocket.png") [Pocket](/index.php?title=CAM_Pocket_Shape/ro&action=edit&redlink=1 "CAM Pocket Shape/ro (page does not exist)"): Creează o operație de realizare a unor adâncituri dreptunghiulare pornind de la una sau mai multe buzunare -pocket(s)

* [File:CAM Drilling.png](/index.php?title=Special:Upload&wpDestFile=CAM_Drilling.png "File:CAM Drilling.png") [Drilling](/CAM_Drilling/ro "CAM Drilling/ro"): Realizează un ciclu de găurire

- ![](/images/Path-Face.png) [Mill Face](/CAM_MillFace/ro "CAM MillFace/ro"): Creează o traiectorie de suprafață

- ![](/images/Path-Helix.png) [Helix](/CAM_Helix/ro "CAM Helix/ro"): Creează o traiectorie elicoidală

- ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive"): Creates an adaptive clearing and profiling operation.

- ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot"): Creates a slotting operation from selected features or custom points. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/Path-Engrave.png) [Engrave](/CAM_Engrave/ro "CAM Engrave/ro"): Creează o gravură

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

### Traiectorie suplimentară

### 3D Operations

- ![](/images/Path-3DPocket.png) [3D Pocket](/CAM_Pocket_3D/ro "CAM Pocket 3D/ro"): Creează o traiectorie pentru o adâncitură 3D- 3D pocket

- ![](/images/Path-3DSurface.png) [3D Surface](/CAM_Surface/ro "CAM Surface/ro"): Creează o traiectorie de uzinare pentru o suprafață 3D

- ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline"): Creates a waterline path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

### Path Dressup

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Boundary](/CAM_DressupPathBoundary "CAM DressupPathBoundary"): Adds a boundary dressup modification to a selected path.

* [File:CAM DressupDogbone.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupDogbone.png "File:CAM DressupDogbone.png") [Dogbone Dressup](/CAM_DressupDogbone/ro "CAM DressupDogbone/ro"): Adaugă modificări de traiectorie pentru colțurile interne (dogbone)

* [File:CAM DressupDragKnife.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupDragKnife.png "File:CAM DressupDragKnife.png") [Dragknife Dressup](/CAM_DressupDragKnife/ro "CAM DressupDragKnife/ro"): Adaugă o traiectorie suplimentară pentru un dragknife la traiectoria selectată

* [File:CAM DressupLeadInOut.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupLeadInOut.png "File:CAM DressupLeadInOut.png") [Lead In Dressup](/index.php?title=CAM_DressupLeadInOut/ro&action=edit&redlink=1 "CAM DressupLeadInOut/ro (page does not exist)"):Adaugă un punct de intrare și / sau un punct de ieșire la o traiectorie selectată

* [File:CAM DressupRampEntry.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupRampEntry.png "File:CAM DressupRampEntry.png") [Ramp Entry Dressup](/CAM_DressupRampEntry/ro "CAM DressupRampEntry/ro"): Adaugă o traiectorie suplimentară de intrare intrare în șpan

* [File:CAM DressupTag.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupTag.png "File:CAM DressupTag.png") [Tag Dressup](/CAM_DressupTag/ro "CAM DressupTag/ro"): Adaugă punți de susținere (holding tag) la traiectoria selectată

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Comenzi Speciale

- [File:CAM Fixture.png](/index.php?title=Special:Upload&wpDestFile=CAM_Fixture.png "File:CAM Fixture.png") [Fixture](/CAM_Fixture/ro "CAM Fixture/ro"): Schimbă poziția punctului de fixare

- [File:CAM Comment.png](/index.php?title=Special:Upload&wpDestFile=CAM_Comment.png "File:CAM Comment.png") [Comment](/CAM_Comment/ro "CAM Comment/ro"): Inserează un comentariu în G-codul traiectoriei

- [File:CAM Stop.png](/index.php?title=Special:Upload&wpDestFile=CAM_Stop.png "File:CAM Stop.png") [Stop](/CAM_Stop/ro "CAM Stop/ro"): Introduce o oprire completă a mașinii

- [File:CAM Custom.png](/index.php?title=Special:Upload&wpDestFile=CAM_Custom.png "File:CAM Custom.png") [Custom](/CAM_Custom/ro "CAM Custom/ro"): Inserează G-cod personalizat

* ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

* ![](/images/CAM_Shape.svg) [From Shape](/CAM_Shape/ro "CAM Shape/ro"): Creează un obiect traiectorie dintr-un obiect Piesă selectat

### Modificarea Traiectoriei

- [File:CAM Copy.png](/index.php?title=Special:Upload&wpDestFile=CAM_Copy.png "File:CAM Copy.png") [Copy](/CAM_Copy/ro "CAM Copy/ro"): Creează o Copie parametrică a obiectului traiectorie selectat

- [File:CAM Array.png](/index.php?title=Special:Upload&wpDestFile=CAM_Array.png "File:CAM Array.png") [Array](/CAM_Array/ro "CAM Array/ro"): Creează o matrice de multiplicare a traiectoriei selectate

- [File:CAM SimpleCopy.png](/index.php?title=Special:Upload&wpDestFile=CAM_SimpleCopy.png "File:CAM SimpleCopy.png") [Simple Copy](/CAM_SimpleCopy/ro "CAM SimpleCopy/ro"): Creează o copie neparametrică a unui obiect traiectorie selectat

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/Path-Area.png) [Feature area](/index.php?title=CAM_Area/ro&action=edit&redlink=1 "CAM Area/ro (page does not exist)"): Creează o zonă de caracteristici din obiectele selectate

- ![](/images/Path-Area-Workplane.png) [Feature area workplane](/index.php?title=CAM_Area_Workplane/ro&action=edit&redlink=1 "CAM Area Workplane/ro (page does not exist)"): Creează un plan de lucru pentru zona de caracteristici

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Other

Path Workbench partajează mai multe concepte cu alte pachete software CAM, dar are propriile particularități. Dacă ceva pare rău, ar putea fi un loc bun pentru a începe.

### Preferințe

- ![](/images/Std_DlgParameter.png) [Preferences...](/index.php?title=CAM_Preferences/ro&action=edit&redlink=1 "CAM Preferences/ro (page does not exist)"): Preferințe disponibile în Atelierul Traiectorie.

## Script

A se vedea pagina [CAM scripting](/Path_scripting/ro "Path scripting/ro").

## Tutorials

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/ro&oldid=1494604>"
