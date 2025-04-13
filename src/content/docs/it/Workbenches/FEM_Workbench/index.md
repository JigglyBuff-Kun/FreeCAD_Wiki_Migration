---
title: Ambiente FEM
---

![](/images/Workbench_FEM.svg)

L'icona dell'ambiente FEM

## Introduzione

L'Ambiente FEM offre a FreeCAD un moderno flusso di lavoro per [l'analisi agli elementi finiti](https://it.wikipedia.org/wiki/Metodo_degli_elementi_finiti) (FEA). Questo significa che tutti gli strumenti per fare una analisi degli elementi finiti sono combinati in una GUI.

![](/images/FemWorkbench.jpg)

## Flusso di lavoro

I passaggi per effettuare un'analisi ad elementi finiti sono:

1. Preelaborazione: impostazione del problema di analisi.
   1. Modellazione della geometria: creazione della geometria con FreeCAD o importazione da una diversa applicazione.
   2. Creare una analisi.
      1. Aggiungere i vincoli di simulazione quali i carichi e i supporti al modello da analizzare.
      2. Aggiungere i materiali alle parti del modello geometrico.
      3. Creare un elemento mesh finito per il modello geometrico o importarlo da una diversa applicazione.
2. Risoluzione: eseguire usando un risolutore esterno dall'interno di FreeCAD.
3. Postelaborazione: visualizzare i risultati dell'analisi dall'interno di FreeCAD, o esportare i risultati in modo che possano essere postelaborati con un'altra applicazione.

Il modulo FEM può essere usato su piattaforme Windows, Mac OSX e Linux. Dato che il modulo FEM utilizza un risolutore esterno, la quantità di interventi manuali dipende dal sistema operativo che si sta utilizzando. Consultare la pagina [Installare i componenti per l'ambiente FEM](/FEM_Install/it "FEM Install/it") per le istruzioni sulla configurazione degli strumenti esterni.

![](/images/FEM_Workbench_workflow.svg)

Flusso di lavoro del Workbench FEM; il workbench chiama due programmi esterni per eseguire il meshing di un oggetto solido e risolvere il problema degli elementi finiti

## Menu Modello

- ![](/images/Fem_Analysis.svg) [Contenitore analisi](/FEM_Analysis/it "FEM Analysis/it"): Crea un nuovo contenitore per una analisi meccanica statica. Se invece, prima di cliccare su questo strumento, viene selezionato un solido nella vista ad albero si apre la finestra di meshing.

### Materiali

- ![](/images/FEM_MaterialSolid.svg)[Materiale FEM per solidi](/FEM_MaterialSolid/it "FEM MaterialSolid/it"): Consente di selezionare un materiale solido dal database.

- ![](/images/FEM_MaterialFluid.svg) [Materiale FEM per fluidi](/FEM_MaterialFluid/it "FEM MaterialFluid/it"): Consente di selezionare un materiale fluido dal database.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Materiale non lineare](/FEM_MaterialMechanicalNonlinear/it "FEM MaterialMechanicalNonlinear/it"): Consente di aggiungere un modello di materiale meccanico non lineare.

- ![](/images/FEM_MaterialReinforced.svg) [Materiale rinforzato (calcestruzzo)](/FEM_MaterialReinforced/it "FEM MaterialReinforced/it"): Consente di selezionare dal database i materiali rinforzati costituiti da una matrice e da un rinforzo.

- ![](/images/FEM_MaterialEditor.svg) [Editor dei materiali](/FEM_MaterialEditor/it "FEM MaterialEditor/it"): Consente di aprire l'editor dei materiali per modificare i materiali.

### Geometria dell'elemento

- ![](/images/FEM_ElementGeometry1D.svg) [Sezione trasversale di trave](/FEM_ElementGeometry1D/it "FEM ElementGeometry1D/it"): Utilizzato per definire le sezioni trasversali per gli elementi trave.

- ![](/images/FEM_ElementRotation1D.svg) [Rotazione di trave](/FEM_ElementRotation1D/it "FEM ElementRotation1D/it"): Utilizzato per ruotare le sezioni trasversali degli elementi trave.

- ![](/images/FEM_ElementGeometry2D.svg) [Spessore di una lastra](/FEM_ElementGeometry2D/it "FEM ElementGeometry2D/it"): Utilizzato per definire lo spessore dell'elemento lastra.

- ![](/images/FEM_ElementFluid1D.svg) [Sezione del fluido per flusso 1D](/FEM_ElementFluid1D/it "FEM ElementFluid1D/it"): Utilizzato per creare un elemento sezione del fluido FEM per reti pneumatiche e idrauliche.

### Electromagnetic boundary conditions

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Condizione al contorno del potenziale elettrostatico](/FEM_ConstraintElectrostaticPotential/it "FEM ConstraintElectrostaticPotential/it"): Utilizzato per la definizione del potenziale elettrostatico.

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Condizione al contorno della densità di corrente](/index.php?title=FEM_ConstraintCurrentDensity/it&action=edit&redlink=1 "FEM ConstraintCurrentDensity/it (page does not exist)"): Utilizzato per definire una densità di corrente. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_ConstraintMagnetization.svg) [Condizione al contorno della magnetizzazione](/index.php?title=FEM_ConstraintMagnetization/it&action=edit&redlink=1 "FEM ConstraintMagnetization/it (page does not exist)"): Utilizzato per definire una magnetizzazione. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity"): Used to define electric charge density load. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Condizioni al contorno del fluido

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Condizione iniziale di velocità del flusso](/FEM_ConstraintInitialFlowVelocity/it "FEM ConstraintInitialFlowVelocity/it"): Utilizzato per definire una velocità di flusso iniziale per un corpo (volume).

- ![](/images/FEM_ConstraintInitialPressure.svg) [Condizione iniziale di pressione](/index.php?title=FEM_ConstraintInitialPressure/it&action=edit&redlink=1 "FEM ConstraintInitialPressure/it (page does not exist)"): Utilizzato per definire una pressione iniziale per un corpo (volume). [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Condizione al contorno della velocità del flusso](/FEM_ConstraintFlowVelocity/it "FEM ConstraintFlowVelocity/it"): Utilizzato per definire una velocità del flusso come condizione di un contorno su un bordo (2D) o una faccia (3D).

### Caratteristiche dell'analisi geometrica

- ![](/images/FEM_ConstraintPlaneRotation.svg) [Vincolo multi-punto piano](/FEM_ConstraintPlaneRotation/it "FEM ConstraintPlaneRotation/it"): Utilizzato per definire un vincolo per mantenere i nodi di una superficie planare sullo stesso piano.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Funzione di stampa della sezione](/FEM_ConstraintSectionPrint/it "FEM ConstraintSectionPrint/it"): Utilizzato per stampare le variabili di output facciali predefinite (forze e momenti) nel file di dati.

- ![](/images/FEM_ConstraintTransform.svg) [Sistema di coordinate locali](/FEM_ConstraintTransform/it "FEM ConstraintTransform/it"): Utilizzato per definire un vincolo di trasformazione su una faccia.

### Condizioni al contorno e carichi meccanici

- ![](/images/FEM_ConstraintFixed.svg) [Condizione al contorno fissa](/FEM_ConstraintFixed/it "FEM ConstraintFixed/it"): Utilizzato per definire un vincolo fisso su punto/bordo/faccia(e).

- ![](/images/FEM_ConstraintRigidBody.svg) [Vincolo di corpo rigido](/index.php?title=FEM_ConstraintRigidBody/it&action=edit&redlink=1 "FEM ConstraintRigidBody/it (page does not exist)"): Utilizzato per applicare il vincolo di corpo rigido di CalculiX che vincola il movimento dei nodi di un'entità geometrica selezionata al movimento di un punto di riferimento posizionati dall'utente. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/FEM_ConstraintDisplacement.svg) [Vincolo di dislocamento](/FEM_ConstraintDisplacement/it "FEM ConstraintDisplacement/it"): Utilizzato per definire un vincolo di dislocamento su un punto, bordo o faccia (e).

- ![](/images/FEM_ConstraintContact.svg) [Vincolo contatto](/FEM_ConstraintContact/it "FEM ConstraintContact/it"): Utilizzato per definire un vincolo contatto tra due facce.

- ![](/images/FEM_ConstraintTie.svg) [Legame di vincolo](/FEM_ConstraintTie/it "FEM ConstraintTie/it"): Utilizzato per definire un vincolo di collegamento ("contatto vincolato") tra due facce.

- ![](/images/FEM_ConstraintSpring.svg) [Vincolo molla](/index.php?title=FEM_ConstraintSpring/it&action=edit&redlink=1 "FEM ConstraintSpring/it (page does not exist)"): utilizzato per definire una molla. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

- ![](/images/FEM_ConstraintForce.svg) [Vincolo forza](/FEM_ConstraintForce/it "FEM ConstraintForce/it"): Utilizzato per definire una forza in N applicata uniformemente ad una faccia selezionabile, nella direzione definibile.

- ![](/images/FEM_ConstraintPressure.svg) [Vincolo pressione](/FEM_ConstraintPressure/it "FEM ConstraintPressure/it"): Utilizzato per definire un vincolo pressione.

- ![](/images/FEM_ConstraintCentrif.svg) [Vincolo centrifugo](/index.php?title=FEM_ConstraintCentrif/it&action=edit&redlink=1 "FEM ConstraintCentrif/it (page does not exist)"): Utilizzato per definire un vincolo di carico centrifugo sul corpo. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Vincolo peso proprio](/FEM_ConstraintSelfWeight/it "FEM ConstraintSelfWeight/it"): Utilizzato per definire una accelerazione di gravità che agisce su un modello.

### Vincoli termici

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Vincolo temperatura iniziale](/FEM_ConstraintInitialTemperature/it "FEM ConstraintInitialTemperature/it"): Utilizzato per definire un vincolo di temperatura iniziale di un corpo.

- ![](/images/FEM_ConstraintHeatflux.svg) [Vincolo scambio termico](/FEM_ConstraintHeatflux/it "FEM ConstraintHeatflux/it"): Utilizzato per definire un vincolo di scambio termico su una faccia (e).

- ![](/images/FEM_ConstraintTemperature.svg) [Vincolo temperatura](/FEM_ConstraintTemperature/it "FEM ConstraintTemperature/it"): Utilizzato per definire un vincolo di temperatura limite su un punto, bordo o faccia (e).

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Vincolo fonte di calore del corpo](/FEM_ConstraintBodyHeatSource/it "FEM ConstraintBodyHeatSource/it"): Utilizzato per definire un calore corporeo generato internamente.

### Sovrascrivere le costanti

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Permittività del vuoto costante](/FEM_ConstantVacuumPermittivity/it "FEM ConstantVacuumPermittivity/it"): Utilizzato per sovrascrivere la [costante dielettrica del vuoto](https://it.wikipedia.org/wiki/Costante_dielettrica_del_vuoto) con un valore personalizzato.

## Menu Mesh

- ![](/images/FEM_MeshNetgenFromShape.svg) [Mesh FEM da forma con Netgen](/FEM_MeshNetgenFromShape/it "FEM MeshNetgenFromShape/it"): Genera una mesh a elementi finiti per un modello utilizzando Netgen.

- ![](/images/FEM_MeshGmshFromShape.svg) [Mesh FEM da forma con Gmsh](/FEM_MeshGmshFromShape/it "FEM MeshGmshFromShape/it"): Genera una mesh agli elementi finiti per un modello usando Gmsh.

- ![](/images/FEM_MeshBoundaryLayer.svg) [Strato limite di mesh FEM](/FEM_MeshBoundaryLayer/it "FEM MeshBoundaryLayer/it"): Crea mesh anisotrope per calcoli accurati vicino ai confini.

- ![](/images/FEM_MeshRegion.svg) [Regione di mesh FEM](/FEM_MeshRegion/it "FEM MeshRegion/it"): Crea una o più aree localizzate da meshare in modo da ottimizzare il tempo di analisi.

- ![](/images/FEM_MeshGroup.svg) [Gruppo di mesh FEM](/FEM_MeshGroup/it "FEM MeshGroup/it"): Raggruppa ed etichetta insieme gli elementi di una mesh (vertice, bordo, superficie), utile per esportare la mesh a solutori esterni.

- ![](/images/FEM_CreateElementsSet.svg) [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet"): Hides elements selected by a polygon from the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_FemMesh2Mesh.svg) [Converti mesh FEM in mesh](/FEM_FemMesh2Mesh/it "FEM FemMesh2Mesh/it"): Converte la superficie di una mesh FEM in una mesh.

## Menu Risolutore

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Risolutore Calculix Standard](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it"): Crea un nuovo risolutore per questa analisi.

- ![](/images/FEM_SolverElmer.svg) [Risolutore Elmer](/FEM_SolverElmer/it "FEM SolverElmer/it"): Crea il controller del risolutore per Elmer.

- ![](/images/FEM_SolverMystran.svg) [Risolutore Mystran](/index.php?title=FEM_SolverMystran/it&action=edit&redlink=1 "FEM SolverMystran/it (page does not exist)"): Crea il controller del risolutore per il risolutore MYSTRAN. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

- ![](/images/FEM_SolverZ88.svg) [Risolutore Z88](/FEM_SolverZ88/it "FEM SolverZ88/it"): crea il controller del risolutore per Z88.

### Mechanical equations

- ![](/images/FEM_EquationElasticity.svg) [Equazione di elasticità](/FEM_EquationElasticity/it "FEM EquationElasticity/it"): Equazione per il [Risolutore Elmer](/FEM_SolverElmer/it "FEM SolverElmer/it") ![](/images/FEM_SolverElmer.svg) per eseguire analisi lineari meccaniche.

- ![](/images/FEM_EquationDeformation.svg) [Equazione di deformazione](/index.php?title=FEM_EquationDeformation/it&action=edit&redlink=1 "FEM EquationDeformation/it (page does not exist)"): Equazione per il ![](/images/FEM_SolverElmer.svg) [Risolutore Elmer](/FEM_SolverElmer/it "FEM SolverElmer/it") per eseguire analisi meccaniche non lineari (deformazioni ). [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

### Electromagnetic equations

- ![](/images/FEM_EquationElectrostatic.svg) [Equazione elettrostatica](/FEM_EquationElectrostatic/it "FEM EquationElectrostatic/it"): Equazione per il [Risolutore Elmer](/FEM_SolverElmer "FEM SolverElmer") ![](/images/FEM_SolverElmer.svg) per eseguire analisi elettrostatiche.

- ![](/images/FEM_EquationElectricforce.svg) [Equazione Electricforce](/index.php?title=FEM_EquationElectricforce/it&action=edit&redlink=1 "FEM EquationElectricforce/it (page does not exist)"): Equazione per il [Risolutore Elmer](/FEM_SolverElmer "FEM SolverElmer") ![](/images/FEM_SolverElmer.svg) per calcolare la forza elettrica sulle superfici.

- ![](/images/FEM_EquationMagnetodynamic.svg) [Equazione magnetodinamica](/index.php?title=FEM_EquationMagnetodynamic/it&action=edit&redlink=1 "FEM EquationMagnetodynamic/it (page does not exist)"): Equazione per il ![](/images/FEM_SolverElmer.svg) [Risolutore Elmer](/FEM_SolverElmer/it "FEM SolverElmer/it") per il calcolo magnetodinamico. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Equazione 2D magnetodinamica](/index.php?title=FEM_EquationMagnetodynamic2D/it&action=edit&redlink=1 "FEM EquationMagnetodynamic2D/it (page does not exist)"): Equazione per il ![](/images/FEM_SolverElmer.svg) [Risolutore Elmer](/FEM_SolverElmer/it "FEM SolverElmer/it") per il calcolo magnetodinamico 2D. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate static current conduction. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/FEM_EquationFlow.svg) [Equazione di flusso](/FEM_EquationFlow/it "FEM EquationFlow/it"): Equazione per il [Risolutore Elmer](/FEM_SolverElmer "FEM SolverElmer") ![](/images/FEM_SolverElmer.svg) per eseguire analisi di flusso.

- ![](/images/FEM_EquationFlux.svg) [Equazione di flusso](/FEM_EquationFlux/it "FEM EquationFlux/it"): Equazione per il [Risolutore Elmer](/FEM_SolverElmer "FEM SolverElmer") ![](/images/FEM_SolverElmer.svg) per eseguire analisi di flusso.

- ![](/images/FEM_EquationHeat.svg) [Equazione del calore](/FEM_EquationHeat/it "FEM EquationHeat/it"): Equazione per il [Risolutore Elmer](/FEM_SolverElmer "FEM SolverElmer") ![](/images/FEM_SolverElmer.svg) per eseguire analisi di trasferimento di calore.

- ![](/images/FEM_SolverControl.svg) [Controlli del risolutore](/FEM_SolverControl/it "FEM SolverControl/it"): Apre il menu per regolare e avviare il risolutore selezionato.

- ![](/images/Fem-run-solver.svg) [Avvia il risolutore](/FEM_SolverRun/it "FEM SolverRun/it"): Avvia il risolutore selezionato per l'analisi attiva.

## Menu Risultati

- ![](/images/Fem-purge-results.svg) [Azzera risultati](/FEM_ResultsPurge/it "FEM ResultsPurge/it"): Cancella i risultati dell'analisi attiva.

- ![](/images/FEM_ResultShow.svg) [Mostra i risultati](/FEM_ResultShow/it "FEM ResultShow/it"): Visualizza i risultati di un'analisi. Questa finestra di dialogo non è disponibile per il [Risolutore Elmer](/FEM_SolverElmer/it "FEM SolverElmer/it") poiché questo risolutore visualizza utilizzando solo l'oggetto [Post pipeline dal risultato](/FEM_PostPipelineFromResult/it "FEM PostPipelineFromResult/it").

- ![](/images/FEM_PostApplyChanges.svg) [Applicare le modifiche alla pipeline](/FEM_PostApplyChanges/it "FEM PostApplyChanges/it"): si attiva/disattiva se le modifiche alle pipeline e ai filtri vengono applicate immediatamente.

- ![](/images/FEM_PostPipelineFromResult.svg) [Post pipeline dal risultato](/FEM_PostPipelineFromResult/it "FEM PostPipelineFromResult/it"): utilizzato per aggiungere una nuova rappresentazione grafica dei risultati dell'analisi FEM (scala di colori e più opzioni di visualizzazione).

- ![](/images/FEM_PostFilterWarp.svg) [Filtro di curvatura](/FEM_PostFilterWarp/it "FEM PostFilterWarp/it"): utilizzato per visualizzare la forma deformata in scala del modello.

- ![](/images/FEM_PostFilterClipScalar.svg) [Filtro taglio scalare](/FEM_PostFilterClipScalar/it "FEM PostFilterClipScalar/it"): utilizzato per ritagliare un campo con un valore scalare specificato.

- ![](/images/FEM_PostFilterCutFunction.svg) [Filtro taglio con funzione](/FEM_PostFilterCutFunction/it "FEM PostFilterCutFunction/it"): utilizzato per visualizzare i risultati su una sfera o un piano che attraversa il modello.

- ![](/images/FEM_PostFilterClipRegion.svg) [Post Crea filtro di taglio](/FEM_PostFilterClipRegion/it "FEM PostFilterClipRegion/it"): utilizzato per ritagliare un campo con una sfera o un piano che attraversa il modello.

- ![](/images/FEM_PostFilterContours.svg) [Filtro contorni](/index.php?title=FEM_PostFilterContours/it&action=edit&redlink=1 "FEM PostFilterContours/it (page does not exist)"): utilizzato per visualizzare linee-iso (per analisi in 2D) o contorni-iso. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Post crea filtro dati lungo la linea](/FEM_PostFilterDataAlongLine/it "FEM PostFilterDataAlongLine/it"): utilizzato per tracciare i valori di un campo lungo una linea specificata.

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Grafico di linearizzazione della sollecitazione](/FEM_PostFilterLinearizedStresses/it "FEM PostFilterLinearizedStresses/it"): crea un grafico di linearizzazione delle sollecitazioni.

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Filtro di taglio dei dati in un punto](/FEM_PostFilterDataAtPoint/it "FEM PostFilterDataAtPoint/it"): utilizzato per visualizzare il valore di un campo selezionato in un determinato punto.

### Filter functions

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Funzione filtro Piano](/index.php?title=FEM_PostCreateFunctionPlane/it&action=edit&redlink=1 "FEM PostCreateFunctionPlane/it (page does not exist)"): Taglia la mesh risultante con un piano.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Funzione filtro Sfera](/index.php?title=FEM_PostCreateFunctionSphere/it&action=edit&redlink=1 "FEM PostCreateFunctionSphere/it (page does not exist)"): Taglia la mesh risultante con una sfera.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Funzione filtro Cilindro:](/index.php?title=FEM_PostCreateFunctionCylinder/it&action=edit&redlink=1 "FEM PostCreateFunctionCylinder/it (page does not exist)"): Taglia la mesh risultante con un cilindro. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Funzione filtro Box](/index.php?title=FEM_PostCreateFunctionBox/it&action=edit&redlink=1 "FEM PostCreateFunctionBox/it (page does not exist)"): Taglia la mesh risultante con un box. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

## Menu: Utilità

- ![](/images/FEM_ClippingPlaneAdd.svg) [Piano di taglio di ritaglio sulla faccia](/FEM_ClippingPlaneAdd/it "FEM ClippingPlaneAdd/it"): Aggiunge un piano di taglio per l'intera vista del modello.

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Rimuovi tutti i piani di taglio](/FEM_ClippingPlaneRemoveAll/it "FEM ClippingPlaneRemoveAll/it"): Rimuove tutti i [piani di taglio](/FEM_ClippingPlaneAdd/it "FEM ClippingPlaneAdd/it") esistenti.

- ![](/images/FEM_Examples.svg) [Apre gli esempi di FEM](/FEM_Examples/it "FEM Examples/it"): Apre la GUI per accedere agli esempi FEM.

## Menu contestuale

- ![](/images/FEM_MeshClear.svg) [Cancella mesh FEM](/FEM_MeshClear/it "FEM MeshClear/it"): Elimina il file mesh dal file FreeCAD. Utile per alleggerire un file di FreeCAD.

- ![](/images/FEM_MeshDisplayInfo.svg) [Visualizza info mesh FEM](/FEM_MeshDisplayInfo/it "FEM MeshDisplayInfo/it"): Visualizza le statistiche di base della mesh esistente - numero di nodi ed elementi di ogni tipo.

### Strumenti obsoleti

- ![](/images/FEM_ConstraintFluidBoundary.svg) [Condizione limite del fluido](/FEM_ConstraintFluidBoundary/it "FEM ConstraintFluidBoundary/it"): Utilizzato per definire una condizione al contorno del fluido.

- ![](/images/FEM_ConstraintBearing.svg) [Vincolo cuscinetto](/FEM_ConstraintBearing/it "FEM ConstraintBearing/it"): Utilizzato per definire un vincolo cuscinetto.

- ![](/images/FEM_ConstraintGear.svg) [Vincolo ingranaggio](/FEM_ConstraintGear/it "FEM ConstraintGear/it"): Utilizzato per definire un vincolo di ingranaggio.

- ![](/images/FEM_ConstraintPulley.svg) [Vincolo puleggia](/FEM_ConstraintPulley/it "FEM ConstraintPulley/it"): Utilizzato per definire un vincolo puleggia.

- ![](/images/FEM_SolverCalculiX.svg) [Risolutore CalculiX (nuovo framework)](/FEM_SolverCalculiX/it "FEM SolverCalculiX/it"): Uguale al framework originale ![](/images/FEM_SolverCalculixCxxtools.svg) [Risolutore CalculiX Standard](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it") con controlli aggiuntivi. Lo strumento era incompleto. Non disponibile in versione 0.22 e superiori.

- ![](/images/FEM_CreateNodesSet.svg) [Imposta i nodi](/FEM_CreateNodesSet/it "FEM CreateNodesSet/it"): Crea o definisce un set di nodi da mesh FEM. Lo strumento era incompleto e non poteva essere utilizzato. Non disponibile in versione 0.22 e superiori.

## Preferenze

- ![](/images/Std_DlgPreferences.svg) [Preferenze...](/FEM_Preferences/it "FEM Preferences/it"): Preferenze disponibili per gli strumenti FEM.

## Informazioni

Le seguenti pagine spiegano diversi argomenti dell'ambiente FEM.

[FEM Install](/FEM_Install/it "FEM Install/it"): una descrizione dettagliata su come impostare i programmi esterni utilizzati in questo ambiente.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): tips regarding geometry preparation for FEM and meshing.

[Mesh FEM](/FEM_Mesh/it "FEM Mesh/it"): ulteriori informazioni su come ottenere una mesh per l'analisi degli elementi finiti.

[FEM Solver](/FEM_Solver/it "FEM Solver/it"): ulteriori informazioni sui diversi solutori disponibili nel workbench e quelli che potrebbero essere utilizzati in futuro.

[FEM CalculiX](/FEM_CalculiX/it "FEM CalculiX/it"): ulteriori informazioni su CalculiX, il risolutore predefinito utilizzato nel workbench per l'analisi strutturale.

[FEM Concrete](/FEM_Concrete/it "FEM Concrete/it"): informazioni interessanti sul tema della simulazione di strutture in calcestruzzo.

## Tutorial

Tutorial 1: [FEM CalculiX Trave a sbalzo 3D](/FEM_CalculiX_Cantilever_3D/it "FEM CalculiX Cantilever 3D/it"); analisi di base di una trave.

Tutorial 2: [Tutorial di FEM](/FEM_tutorial/it "FEM tutorial/it"); semplice analisi della tensione di una struttura.

Tutorial 3: [FEM Tutorial Python](/FEM_Tutorial_Python/it "FEM Tutorial Python/it"); esempio di configurazione della trave a sbalzo interamente attraverso lo scripting in Python, inclusa la mesh.

Tutorial 4: [Taglio FEM di un blocco composito](/FEM_Shear_of_a_Composite_Block/it "FEM Shear of a Composite Block/it"); vedere la deformazione di un blocco composto da due materiali.

Tutorial 5: [Analisi FEM transitoria](/Transient_FEM_analysis/it "Transient FEM analysis/it")

Tutorial 6: [Post-elaborazione dei risultati FEM con Paraview](/Post-Processing_of_FEM_Results_with_Paraview/it "Post-Processing of FEM Results with Paraview/it")

Tutorial 7: [FEM Example Capacitance Two Balls](/FEM_Example_Capacitance_Two_Balls/it "FEM Example Capacitance Two Balls/it"); Elmer's GUI tutorial 6 "Electrostatics Capacitance Two Balls" using FEM Examples.

Tutorial di analisi meccaniche termiche di [openSIM](https://opensimsa.github.io/training.html)

Video Tutorial 1: [Articolo nel forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (con il link YouTube)

Video Tutorial 2: [Articolo nel forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (con il link YouTube)

Altri tutorial video: [anisim Open Source Engineering Software](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (in tedesco).

## Estendere l'ambiente FEM

L'ambiente FEM è in costante sviluppo. Un obiettivo del progetto è trovare i modi per interagire facilmente con i vari solutori FEM, in modo che l'utente finale possa semplificare il processo di creazione, meshing, simulazione e ottimizzazione di un problema di progettazione tecnica, tutto in FreeCAD.

Le seguenti informazioni sono rivolte agli utenti esperti e agli sviluppatori che desiderano estendere l'ambiente FEM in modi diversi. Serve avere familiarità con C++ e Python, ed è anche necessaria una certa conoscenza del sistema "document object" utilizzato in FreeCAD; queste informazioni sono disponibili nella [documentazione per utenti esperti](/Power_users_hub/it "Power users hub/it") e nella [documentazione per gli sviluppatori](/Developer_hub/it "Developer hub/it"). Notare che, poiché FreeCAD è in fase di sviluppo attivo, alcuni articoli potrebbero essere vecchi e quindi obsoleti. Le informazioni più aggiornate sono discusse nel [forum di FreeCAD](https://forum.freecadweb.org/index.php), nella sezione Development. Per discussioni, consigli o assistenza FEM sull'estensione dell'ambiente, il fare riferimento al [subforum FEM](https://forum.freecadweb.org/viewforum.php?f=18).

I seguenti articoli spiegano come è possibile estendere il workbench, ad esempio aggiungendo nuovi tipi di condizioni (vincoli) o equazioni.

- [Estendere il modulo FEM](/Extend_FEM_Module/it "Extend FEM Module/it")
- [Integrazione degli sviluppatori FEM](/Onboarding_FEM_Devs/it "Onboarding FEM Devs/it") tenta di orientare i nuovi sviluppatori su come contribuire all'ambiente di lavoro FEM.
- [Tutorial Aggiungere equazioni FEM](/Add_FEM_Equation_Tutorial/it "Add FEM Equation Tutorial/it")
- [Tutorial Aggiungere vincoli FEM](/Add_FEM_Constraint_Tutorial/it "Add FEM Constraint Tutorial/it")

Per aiutare gli utenti a comprendere la complessa base di codici di FreeCAD e le interazioni tra gli elementi principali e i singoli ambienti è stata scritta una guida per lo sviluppatore . Il libro è ospitato su github in modo che più utenti possano contribuirvi e tenerlo aggiornato.

- [Early preview of ebook: Module developer' guide to FreeCAD source](https://forum.freecadweb.org/viewtopic.php?t=17581) (forum thread)
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) (github repository)

## Estensione della documentazione di FEM Workbench

- Maggiori informazioni sull'estensione o la mancanza della documentazione FEM possono essere trovate nel forum: [FEM documentation missing on the Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/it&oldid=1568031>"
