---
title: Ambienti di Lavoro
---

FreeCAD, come molte applicazioni moderne di progettazione come [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit) o [CATIA](https://en.wikipedia.org/wiki/CATIA), è basato sul concetto di [Ambiente di Lavoro](https://en.wikipedia.org/wiki/Workbench). Un ambiente di lavoro può essere considerato come un insieme di strumenti appositamente raggruppati per un certo compito. In un tradizionale laboratorio di mobili, avresti un tavolo da lavoro per la persona che lavora con il legno, un altro per quello che lavora con i pezzi di metallo, e forse un terzo per quello che monta tutti i pezzi insieme.

In FreeCAD, viene applicato lo stesso concetto. Gli strumenti sono raggruppati per ambienti di lavoro in base ai compiti correlati.

Quando si passa da un ambiente di lavoro ad un altro, cambiano anche gli strumenti disponibili visualizzati sull'interfaccia. Le barre degli strumenti, le barre dei comandi e eventualmente altre parti dell'interfaccia si adattano al nuovo ambiente, ma il contenuto della scena visualizzata non cambia. Si può, ad esempio, iniziare a disegnare forme 2D utilizzando l'ambiente **Draft** e poi continuare a lavorare su di esse con l'ambiente **Part**.

Notare che a volte un Ambiente viene indicato come un _Modulo_. Gli Ambienti e i Moduli sono però entità diverse. Un Modulo è un'estensione di FreeCAD, mentre un Ambiente di lavoro è un tipo speciale di modulo con una GUI configurata (barre degli strumenti e menu).

## Ambienti incorporati

### Attuale

I seguenti ambienti di lavoro sono inclusi in ogni installazione di FreeCAD:

- ![](/images/Freecad.svg) [Menu di Base](/Std_Base/it "Std Base/it"). Questo non è realmente un ambiente di lavoro, ma piuttosto una categoria di comandi e strumenti "standard" che possono essere utilizzati in tutti gli ambienti di lavoro.

- ![](/images/Workbench_Assembly.svg) [Ambiente Assembly](/Assembly_Workbench/it "Assembly Workbench/it") per costruire e risolvere assiemi meccanici. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Workbench_BIM.svg) [Ambiente BIM](/BIM_Workbench/it "BIM Workbench/it") per lavorare con elementi architettonici e creare modelli [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Combina l'ambiente Arch e l'ambiente BIM precedentemente disponibile come ambiente complementare nella versione 0.21 e precedenti.

- ![](/images/Workbench_CAM.svg) [Ambiente CAM](/CAM_Workbench/it "CAM Workbench/it") viene utilizzato per produrre istruzioni G-Code. Questo ambiente di lavoro era chiamato "Path Workbench" nella versione 0.21 e precedenti.

- ![](/images/Workbench_Draft.svg) [Ambiente Draft](/Draft_Workbench/it "Draft Workbench/it") contiene strumenti 2D e operazioni CAD 2D e 3D di base.

- ![](/images/Workbench_FEM.svg) [Ambiente FEM](/FEM_Workbench/it "FEM Workbench/it") fornisce un flusso di lavoro di analisi agli elementi finiti (FEA).

- ![](/images/Workbench_Inspection.svg) [Ambiente Inspection](/Inspection_Workbench/it "Inspection Workbench/it") è realizzato per fornirti strumenti specifici per l'esame delle forme. È ancora nelle prime fasi di sviluppo.

- ![](/images/Workbench_Material.svg) [Ambiente Material](/Material_Workbench/it "Material Workbench/it") gestisce il sistema dei materiali di FreeCAD. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/Workbench_Mesh.svg) [Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it") per lavorare con maglie triangolari.

- ![](/images/Workbench_OpenSCAD.svg) [Ambiente OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it") per l'interoperabilità con OpenSCAD e la riparazione della cronologia del modello della [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it") (CSG).

- ![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench/it "Part Workbench/it") per lavorare con primitive geometriche ed operazioni booleane.

- ![](/images/Workbench_PartDesign.svg) [Ambiente Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it") per la costruzione di forme di parti da schizzi.

- ![](/images/Workbench_Points.svg) [Ambiente Punti](/Points_Workbench/it "Points Workbench/it") per lavorare con nuvole di punti.

- ![](/images/Workbench_Reverse_Engineering.svg) [Ambiente Ingegneria inversa](/Reverse_Engineering_Workbench/it "Reverse Engineering Workbench/it") ha lo scopo di fornire strumenti specifici per convertire forme/solidi/mesh in forme parametriche compatibili con FreeCAD.

- ![](/images/Workbench_Robot.svg) [Ambiente Robot](/Robot_Workbench/it "Robot Workbench/it") per lo studio dei movimenti dei robot. Attualmente non mantenuto.

- ![](/images/Workbench_Sketcher.svg) [Ambiente Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") per lavorare con schizzi a geometria vincolata.

- ![](/images/Workbench_Spreadsheet.svg) [Ambiente Foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") per la creazione e la manipolazione di dati in un foglio di calcolo.

- ![](/images/Workbench_Surface.svg) [Ambiente Superficie](/Surface_Workbench/it "Surface Workbench/it") fornisce strumenti per creare e modificare le superfici. È simile al [Part Builder](/Part_Builder/it "Part Builder/it") con l'opzione faccia dai bordi.

- ![](/images/Workbench_TechDraw.svg) [Ambiente TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") per la produzione di disegni tecnici da modelli 3D. È il successore dell'[Ambiente Disegno Tecnico](/Drawing_Workbench/it "Drawing Workbench/it").

- ![](/images/Workbench_Test.svg) [Ambiente di Test](/Testing/it "Testing/it") serve per il debug di FreeCAD.

### Obsoleto

I seguenti ambienti di lavoro non sono più inclusi dalla versione 0.21:

- ![](/images/Workbench_Start.svg) [Ambiente Start](/Start_Workbench/it "Start Workbench/it") consente di passare rapidamente agli ambienti di lavoro più comuni. Questo ambiente è stato sostituito dalla Pagina iniziale (Start page) a cui è possibile accedere tramite il [Menu Aiuto](/Std_Help_Menu/it "Std Help Menu/it").

- ![](/images/Workbench_Web.svg) [Ambiente Web](/Web_Workbench/it "Web Workbench/it") fornisce una finestra del browser invece della [vista 3D](/3D_view/it "3D view/it") all'interno di FreeCAD.

I seguenti ambienti di lavoro non sono più inclusi dopo la versione 0.20:

- ![](/images/Workbench_Drawing.svg) [Drawing](/Drawing_Workbench/it "Drawing Workbench/it") è stato utilizzato per la produzione di disegni tecnici. L'[Ambiente TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") è il suo sostituto più avanzato. [obsoleto dalla versione 0.17](/Release_notes_0.17/it "Release notes 0.17/it")

- ![](/images/Workbench_Image.svg) L'[Ambiente Immagine](/Image_Workbench/it "Image Workbench/it") è stato utilizzato per lavorare con immagini bitmap. La sua funzionalità è stata integrata nel menù [Base](/Std_Base/it "Std Base/it"). Vedere [File:Importa](/Std_Import/it "Std Import/it") e [Strumenti: Carica Immagine](/Std_ViewLoadImage/it "Std ViewLoadImage/it").

- ![](/images/Workbench_Raytracing.svg) [Ambiente Raytracing](/Raytracing_Workbench/it "Raytracing Workbench/it") è stato utilizzato per il ray-tracing (rendering). Al suo posto dovrebbe essere usato l'ambiente esterno [Render Workbench](https://github.com/FreeCAD/FreeCAD-render).

## Ambienti aggiuntivi

Gli ambienti di lavoro per FreeCAD sono facilmente programmabili in [Python](/Python/it "Python/it"), quindi ci sono molte persone che stanno sviluppando degli ambienti aggiuntivi al di fuori dell'area principale di sviluppo di FreeCAD.

La pagina [Ambienti complementari](/External_workbenches/it "External workbenches/it") elenca tutti quelli che sono noti a questa comunità. La maggior parte è facilmente installabile da FreeCAD, usando [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), che si trova nel menu **Strumenti → ![](/images/Std_AddonMgr.svg) Addon manager**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/it&oldid=1544601>"
