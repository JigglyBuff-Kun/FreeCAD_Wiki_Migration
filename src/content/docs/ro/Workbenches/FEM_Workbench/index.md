---
title: Atelierul MEF
---

![](/images/Workbench_FEM.svg)

FEM workbench icon

## Introducere

[FEM Workbench](/FEM_Workbench "FEM Workbench") oferă un flux modern de analiză prin metoda elementelor finite (MEF) pentru FreeCAD. În principal, acest lucru înseamnă că toate instrumentele pentru a face o analiză prin Metoda Elementului Finit sunt combinate într-o singură interfață grafică(GUI).

![](/images/FemWorkbench.jpg)

## Plan de lucru

Pașii pentru a face AEF în Atelierul AEF din FreeCAD GUI sunt:

- Preprocesare, setting up the analysis problem.
  - Modelarea geometriei, în care FreeCAD este deja un software aproape dezvoltat: creating the geometry with FreeCAD, or importing it from a different application.
  - Creați o analiză:
    - Creați o Plasă AEF din modelul geometric.
    - Adăugați la modelul de analiză constrângeri, cum ar fi sarcini și corecții de asistență.
    - Adăugați un material la modelul de analiză
- Rezolvarea: Rezolvați sistemul de ecuații din cadrul GUI-ului FreeCAD.
- Postprocesare: Vezi rezultatele din FreeCAD GUI.

Începând cu versiunea 0.15 a FreeCAD, Atelierul AEF poate fi folosit pe platforme Windows, Mac OSX și Linux. Deoarece Atelierul AEF folosește software extern, cantitatea de intervenție manuală până când Atelierul AEF este gata de utilizare va depinde de sistemul de operare pe care îl utilizați. Verificați [FEM Install](/FEM_Install "FEM Install") page for instructions on setting up the external tools.

![](/images/FEM_Workbench_workflow.svg)

Workflow of the FEM Workbench; the workbench calls two external programs to perform meshing of a solid object, and perform the actual solution of the finite element problem

## Meniu: Model

- ![](/images/Fem-analysis.svg) [Analysis container](/FEM_Analysis/ro "FEM Analysis/ro"): Creează un nou container pentru analiza mecanică. Dacă un solid este selectat în vederea arborescentă înainte de a face click pe el dialogul plasei de discretizare va fi deschis alături

### Materiale

- ![](/images/Fem-material.svg) [FEM material for solid](/FEM_MaterialSolid/ro "FEM MaterialSolid/ro"): Vă permite să selectați un material din baza de date.

- ![](/images/Fem-material-fluid.svg) [Material for fluid](/FEM_MaterialFluid "FEM MaterialFluid"): Lets you select a material from the database.

- ![](/images/Fem-material-nonlinear.svg) [Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear/ro "FEM MaterialMechanicalNonlinear/ro"): Vă permite să selectați un material din baza de date..

- ![](/images/FEM_MaterialReinforced.svg) [Reinforced material (concrete)](/FEM_MaterialReinforced "FEM MaterialReinforced"): Lets you select reinforced materials consisting of a matrix and a reinforcement from the database.

- ![](/images/FEM_MaterialEditor.svg) [Material editor](/FEM_MaterialEditor "FEM MaterialEditor"):: Lets you open the material editor to edit materials

### Element Geometry

- ![](/images/Fem-beam-section.svg) [Beam cross section](/FEM_ElementGeometry1D "FEM ElementGeometry1D"):

- ![](/images/Fem-beam-rotation.svg) [Beam rotation](/FEM_ElementRotation1D "FEM ElementRotation1D"):

- ![](/images/Fem-shell-thickness.svg) [Shell plate thickness](/FEM_ElementGeometry2D "FEM ElementGeometry2D"):

- ![](/images/Fem-fluid-section.svg) [Fluid section for 1D flow](/FEM_ElementFluid1D "FEM ElementFluid1D"):

### Electromagnetic boundary conditions

- ![](/images/Fem-constraint-electrostatic-potential.svg) [Constraint electrostatic potential](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential"):

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity"): Used to define a current density. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization"): Used to define a magnetization. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity"): Used to define electric charge density load. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Fluid constraints

- ![](/images/Fem-constraint-initial-flow-velocity.svg) [Constraint initial flow velocity](/FEM_ConstraintInitialFlowVelocity "FEM ConstraintInitialFlowVelocity"):

- ![](/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure"): Used to define an initial pressure for a body (volume). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Fem-constraint-flow-velocity.svg) [Constraint flow velocity](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity"):

### Geometrical analysis features

- ![](/images/Fem-constraint-planerotation.svg) [Constraint plane rotation](/FEM_ConstraintPlaneRotation/ro "FEM ConstraintPlaneRotation/ro"): Vă permite să definiți o constrângere de rotație a planului pe o fațetă plană

- ![](/images/FEM_ConstraintSectionPrint.svg) [Section print feature](/FEM_ConstraintSectionPrint "FEM ConstraintSectionPrint"): Used to print the predefined facial output variables (forces and moments) to the data file.

- ![](/images/Fem-constraint-transform.svg) [Constraint transform](/FEM_ConstraintTransform "FEM ConstraintTransform"):

### Constrângeri Mecanice

- ![](/images/Fem-constraint-fixed.svg) [Constraint fixed](/FEM_ConstraintFixed/ro "FEM ConstraintFixed/ro"):Se utilizează pentru a defini o constrângere fixă pe punct/margine/fațetă (e)..

- ![](/images/FEM_ConstraintRigidBody.svg) [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"): Used to apply the CalculiX's rigid body constraint that constrains the motion of the nodes of a selected geometrical entity to the motion of a reference point positioned by the user. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Fem-constraint-displacement.svg) [Constraint displacement](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement"): Used to define a displacement constraint on point/edge/face(s).

- ![](/images/Fem-constraint-contact.svg) [Constraint contact](/FEM_ConstraintContact/ro "FEM ConstraintContact/ro"): Utilizat pentru a defini contactul de constrângere între două fațete.

- ![](/images/FEM_ConstraintTie.svg) [Tie constraint](/FEM_ConstraintTie "FEM ConstraintTie"): Used to define a tie constraint ("bonded contact") between two faces, or, [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"), cyclic symmetry.

- ![](/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring"): Used to define a spring. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Fem-constraint-force.svg) [Constraint force](/FEM_ConstraintForce/ro "FEM ConstraintForce/ro"): Utilizat pentru a defini o forță exprimată în [N] aplicată unifrom pe fațetă selectată într-o direcție definibilă.

- ![](/images/Fem-constraint-pressure.svg) [Constraint pressure](/FEM_ConstraintPressure/ro "FEM ConstraintPressure/ro"): Utilizat pentru a defini constrângere de presiune.

- ![](/images/FEM_ConstraintCentrif.svg) [Centrifugal load](/FEM_ConstraintCentrif "FEM ConstraintCentrif"): Used to define a centrifugal force body load. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Fem-constraint-selfweight.svg) [Constraint self weight](/FEM_ConstraintSelfWeight/ro "FEM ConstraintSelfWeight/ro"): Utilizat pentru a defini accelerația gravitațională care acționează asupra modelului.

### Constrângeri termice

- ![](/images/Fem-constraint-InitialTemperature.svg) [Constraint initial temperature](/FEM_ConstraintInitialTemperature/ro "FEM ConstraintInitialTemperature/ro"): Utilizat pentru a defini temperatura inițială a corpului.

- ![](/images/Fem-constraint-heatflux.svg) [Constraint heatflux](/FEM_ConstraintHeatflux/ro "FEM ConstraintHeatflux/ro"): Utilizat pentru a defini fluxul de căldură constrâns pe o fațetă(e).

- ![](/images/Fem-constraint-temperature.svg) [Constraint temperature](/FEM_ConstraintTemperature/ro "FEM ConstraintTemperature/ro"): Utilizat pentru a defini constrângerea de temperatură pe un punct/muchie/fațetă(e).

- ![](/images/Fem-constraint-heatflux.svg) [Constraint body heat source](/index.php?title=FEM_ConstraintBodyHeatSource/ro&action=edit&redlink=1 "FEM ConstraintBodyHeatSource/ro (page does not exist)"):

### Overwrite Constants

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity "FEM ConstantVacuumPermittivity"): Used to overwrite the [permittivity of vacuum](https://en.wikipedia.org/wiki/Vacuum_permittivity) with a custom value.

## Meniu plase/Mesh

- ![](/images/Fem-femmesh-netgen-from-shape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape"):

- ![](/images/Fem-femmesh-gmsh-from-shape.svg) [FEM mesh from shape by GMSH](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"):

- ![](/images/Fem-femmesh-boundary-layer.svg) [FEM mesh boundary layer](/FEM_MeshBoundaryLayer "FEM MeshBoundaryLayer"):

- ![](/images/Fem-femmesh-region.svg) [FEM mesh region](/FEM_MeshRegion "FEM MeshRegion"):

- ![](/images/Fem-femmesh-from-shape.svg) [FEM mesh group](/FEM_MeshGroup "FEM MeshGroup"):

- ![](/images/FEM_CreateElementsSet.svg) [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet"): Hides elements selected by a polygon from the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Fem-femmesh-to-mesh.svg) [FEM mesh to mesh](/FEM_FemMesh2Mesh "FEM FemMesh2Mesh"): Convert the surface of a FEM mesh to a mesh.

## Meniu Rezolvitori

- ![](/images/Fem-solver.svg) [Solver Calculix CCX tools](/FEM_SolverCalculixCxxtools/ro "FEM SolverCalculixCxxtools/ro"): Creează un nou rezolvitor pentru această analiză. În cele mai multe cazuri rezolvitorul este creat împreună cu analiza.

- ![](/images/Fem-elmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer"):

- ![](/images/FEM_SolverMystran.svg) [Solver Mystran](/FEM_SolverMystran "FEM SolverMystran"): Creates the solver controller for the MYSTRAN solver. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Fem-solver.svg) [Solver Z88](/FEM_SolverZ88 "FEM SolverZ88"):

### Mechanical equations

- ![](/images/Fem-equation-elasticity.svg) [Equation elasticity](/FEM_EquationElasticity "FEM EquationElasticity"):

- ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform nonlinear mechanical analyses (deformations). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Electromagnetic equations

- ![](/images/Fem-equation-electrostatic.svg) [Equation electrostatic](/FEM_EquationElectrostatic "FEM EquationElectrostatic"):

- ![](/images/FEM_EquationElectricforce.svg) [Electricforce equation](/FEM_EquationElectricforce "FEM EquationElectricforce"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate the electric force on surfaces.

- ![](/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics in 2D. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate static current conduction. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Fem-equation-flow.svg) [Equation flow](/FEM_EquationFlow "FEM EquationFlow"):

- ![](/images/FEM_EquationFlux.svg) [Equation fluxsolver](/FEM_EquationFlux "FEM EquationFlux"):

- ![](/images/Fem-equation-heat.svg) [Equation heat](/FEM_EquationHeat "FEM EquationHeat"):

- ![](/images/Fem-control-solver.svg) [Solver job control](/index.php?title=FEM_SolverControl/ro&action=edit&redlink=1 "FEM SolverControl/ro (page does not exist)"): Deschide meniul pentru a ajusta și porni rezolvitorul selectat.

- ![](/images/Fem-run-solver.svg) [Solver run calculation](/index.php?title=FEM_SolverRun/ro&action=edit&redlink=1 "FEM SolverRun/ro (page does not exist)"): Rulează rezolvitorul selectat al analizei active.

## Meniu Rezultate

- ![](/images/Fem-purge-results.svg) [Results purge](/index.php?title=FEM_ResultsPurge/ro&action=edit&redlink=1 "FEM ResultsPurge/ro (page does not exist)"): Șterge rezultatul analizei active.

- ![](/images/Fem-result.svg) [Result show](/index.php?title=FEM_ResultShow/ro&action=edit&redlink=1 "FEM ResultShow/ro (page does not exist)"): Utilizează afișarea rezultatelor analizei

- ![](/images/FEM_PostApplyChanges.png) [Post Apply changes](/FEM_PostApplyChanges "FEM PostApplyChanges"):

- ![](/images/Fem-data.svg) [Post Pipeline from result](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"):

- ![](/images/FEM_PostFilterWarp.svg) [Warp filter](/index.php?title=FEM_PostFilterWarp/ro&action=edit&redlink=1 "FEM PostFilterWarp/ro (page does not exist)"):

- ![](/images/FEM_PostFilterClipScalar.svg) [Scalar clip filter](/index.php?title=FEM_PostFilterClipScalar/ro&action=edit&redlink=1 "FEM PostFilterClipScalar/ro (page does not exist)"):

- ![](/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/index.php?title=FEM_PostFilterCutFunction/ro&action=edit&redlink=1 "FEM PostFilterCutFunction/ro (page does not exist)"):

- ![](/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/index.php?title=FEM_PostFilterClipRegion/ro&action=edit&redlink=1 "FEM PostFilterClipRegion/ro (page does not exist)"):

- ![](/images/FEM_PostFilterContours.svg) [Contours filter](/FEM_PostFilterContours "FEM PostFilterContours"): Used to display iso-lines (for analyses in 2D) or iso-contours. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Line clip filter](/index.php?title=FEM_PostFilterDataAlongLine/ro&action=edit&redlink=1 "FEM PostFilterDataAlongLine/ro (page does not exist)"):

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Stress linearization plot](/index.php?title=FEM_PostFilterLinearizedStresses/ro&action=edit&redlink=1 "FEM PostFilterLinearizedStresses/ro (page does not exist)"):

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Data at point clip filter](/index.php?title=FEM_PostFilterDataAtPoint/ro&action=edit&redlink=1 "FEM PostFilterDataAtPoint/ro (page does not exist)"):

### Filter functions

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Plane](/FEM_PostCreateFunctionPlane "FEM PostCreateFunctionPlane"): Cuts the result mesh with a plane.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Sphere](/FEM_PostCreateFunctionSphere "FEM PostCreateFunctionSphere"): Cuts the result mesh with a sphere.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Cylinder](/FEM_PostCreateFunctionCylinder "FEM PostCreateFunctionCylinder"): Cuts the result mesh with a cylinder. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox"): Cuts the result mesh with a box. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Meniu: Utilități

- ![](/images/Fem-clipping-plane-add.svg) [Clipping plane on face](/FEM_ClippingPlaneAdd "FEM ClippingPlaneAdd"):

- ![](/images/Fem-clipping-plane-remove-all.svg) [Remove all clipping planes](/FEM_ClippingPlaneRemoveAll "FEM ClippingPlaneRemoveAll"):

- ![](/images/FEM_Examples.svg) [Open FEM examples](/FEM_Examples "FEM Examples"): Open the GUI to access FEM examples.

## Meniu de Context

- ![](/images/Fem-femmesh-clear-mesh.svg) [FEM mesh clear](/FEM_MeshClear "FEM MeshClear"):

- ![](/images/FEM_MeshDisplayInfo.svg) [Display FEM mesh info](/index.php?title=FEM_MeshDisplayInfo/ro&action=edit&redlink=1 "FEM MeshDisplayInfo/ro (page does not exist)"): Displays basic statistics of existing mesh - number of nodes and elements of each type.

## Obsolete tools

- ![](/images/Fem-constraint-fluid-boundary.svg) [Constraint fluid boundary](/FEM_ConstraintFluidBoundary "FEM ConstraintFluidBoundary"):

- ![](/images/Fem-constraint-bearing.svg) [Constraint bearing](/FEM_ConstraintBearing/ro "FEM ConstraintBearing/ro"): Utilizat pentru a defini o constrângere de rulment.

- ![](/images/Fem-constraint-gear.svg) [Constraint gear](/index.php?title=FEM_ConstraintGear/ro&action=edit&redlink=1 "FEM ConstraintGear/ro (page does not exist)"): Utilizat pentru a defini o constrângere de angrenaj de roți dințate.

- ![](/images/Fem-constraint-pulley.svg) [Constraint pulley](/FEM_ConstraintPulley/ro "FEM ConstraintPulley/ro"): Utilizat pentru a defini o constrângere de tip fulie.

- ![](/images/Fem-solver.svg) [Solver CalculiX](/FEM_SolverCalculiX "FEM SolverCalculiX"):

- ![](/images/Fem-femmesh-create-node-by-poly.svg) [Nodes set](/FEM_CreateNodesSet "FEM CreateNodesSet"): Creates/defines a node set from FEM mesh.

## Preferințe

!!FUZZY!!\- ![](/images/Std_DlgParameter.svg) [Preferences...](/FEM_Preferences "FEM Preferences"): Preferințe disponibile în Instrumentele MEF.

## Links

[FEM Install](/FEM_Install "FEM Install") pentru o detaliată descriere a modului cum lucrează Modului MEF.

The following pages explain different topics of the FEM Workbench.

[FEM Install](/FEM_Install "FEM Install"): a detailed description on how to set up the external programs used in the workbench.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): tips regarding geometry preparation for FEM and meshing.

[FEM Mesh](/FEM_Mesh "FEM Mesh") pentru informații suplimentere privind AEF asupra Plaselor în Modulul MEF din FreeCAD

[FEM Solver](/FEM_Solver "FEM Solver") for further Informations about FEM Solvers in FEM Module,

[FEM CalculiX](/FEM_CalculiX "FEM CalculiX") Pentru informații suplimentare despre Calculix, cel mai folosit ți bine dezvoltat rezolvitor în Modulul MEF

[FEM Concrete](/FEM_Concrete "FEM Concrete") for informations about analysis's of concrete structures.

## Tutorials

## Tutoriale

Tutorial 1 [FEM CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D "FEM CalculiX Cantilever 3D")

Tutorial 2 [FEM Tutorial](/FEM_tutorial "FEM tutorial")

Tutorial 3 [FEM Tutorial Python](/FEM_Tutorial_Python "FEM Tutorial Python")

Tutorial 4 [FEM Shear of a Composite Block](/FEM_Shear_of_a_Composite_Block "FEM Shear of a Composite Block")

Tutorial 5: [Transient FEM analysis](/Transient_FEM_analysis "Transient FEM analysis")

Tutorial 6: [Post-Processing of FEM Results with Paraview](/Post-Processing_of_FEM_Results_with_Paraview "Post-Processing of FEM Results with Paraview")

Tutorial 7: [FEM Example Capacitance Two Balls](/FEM_Example_Capacitance_Two_Balls "FEM Example Capacitance Two Balls"); Elmer's GUI tutorial 6 "Electrostatics Capacitance Two Balls" using FEM Examples.

Cuprins tutoriale de analiză termică la piese mecanice [PDF's](https://opensimsa.github.io/training.html)

Video Tutorial 1 [Forum post with you tube link](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353)

Video Tutorial 2 [Forum post with you tube link](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321)

Further video Tutorials [Forum post with you tube link](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162640)

## Extending the FEM Workbench

The FEM Workbench is under constant development. An objective of the project is to find ways to easily interact with various FEM solvers, so that the end user can streamline the process of creating, meshing, simulating, and optimizing an engineering design problem, all within FreeCAD.

The following information is aimed at power users and developers who want to extend the FEM Workbench in different ways. Familiarity with C++ and Python is expected, and also some knowledge of the "document object" system used in FreeCAD is necessary; this information is available in the [Power users hub](/Power_users_hub "Power users hub") and the [Developer hub](/Developer_hub "Developer hub"). Please notice that since FreeCAD is under active development, some articles may be too old, and thus obsolete. The most up to date information is discussed in the [FreeCAD forums](https://forum.freecadweb.org/index.php), in the Development section. For FEM discussions, advice or assistance in extending the workbench, the reader should refer to the [FEM subforum](https://forum.freecadweb.org/viewforum.php?f=18).

- [Extend FEM Module](/Extend_FEM_Module "Extend FEM Module")
  - [Add FEM Equation Tutorial](/Add_FEM_Equation_Tutorial "Add FEM Equation Tutorial")
  - [Add FEM Constraint Tutorial](/Add_FEM_Constraint_Tutorial "Add FEM Constraint Tutorial")

A developer's guide has been written to help power users in understanding the complex FreeCAD codebase and the interactions between the core elements and the individual workbenches. The book is hosted at github so multiple users can contribute to it and keep it updated.

- [Early preview of ebook: Module developer' guide to FreeCAD source](https://forum.freecadweb.org/viewtopic.php?t=17581) forum thread.
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) github repository.

## Extending the FEM Workbench documentation

- More information regarding extending or missing FEM documentation can be found in the forum: [FEM documentation missing on the Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/ro&oldid=1568039>"
