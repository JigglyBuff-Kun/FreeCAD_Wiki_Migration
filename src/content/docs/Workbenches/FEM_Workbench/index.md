---
title: FEM Workbench
---

![](/src/assets/images/Workbench_FEM.svg)

FEM workbench icon

## Introduction

The [FEM Workbench](/FEM_Workbench "FEM Workbench") provides a modern [finite element analysis](https://en.wikipedia.org/wiki/Finite_element_analysis) (FEA) workflow for FreeCAD. Mainly this means all tools to make an analysis are combined into one graphical user interface (GUI).

![](/src/assets/images/FemWorkbench.jpg)

## Workflow

The steps to carry out a finite element analysis are:

1. Preprocessing: setting up the analysis problem.
   1. Modeling the geometry: creating the geometry with FreeCAD, or importing it from a different application.
   2. Creating an analysis.
      1. Adding simulation constraints such as loads and fixed supports to the geometric model.
      2. Adding materials to the parts of the geometric model.
      3. Creating a finite element mesh for the geometrical model, or importing it from a different application.
2. Solving: running an external solver from within FreeCAD.
3. Postprocessing: visualizing the analysis results from within FreeCAD, or exporting the results so they can be postprocessed with another application.

The FEM Workbench can be used on Linux, Windows, and Mac OSX. Since the workbench makes use of external solvers, the amount of manual setup will depend on the operating system that you are using. See [FEM Install](/FEM_Install "FEM Install") for instructions on setting up the external tools.

![](/src/assets/images/FEM_Workbench_workflow.svg)

Workflow of the FEM Workbench; the workbench calls two external programs to perform meshing of a solid object, and perform the actual solution of the finite element problem

## Menu: Model

- ![](/src/assets/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis "FEM Analysis"): Creates a new container for a mechanical analysis.

### Materials

- ![](/src/assets/images/FEM_MaterialSolid.svg) [Material for solid](/FEM_MaterialSolid "FEM MaterialSolid"): Lets you select a solid material from the database.

- ![](/src/assets/images/FEM_MaterialFluid.svg) [Material for fluid](/FEM_MaterialFluid "FEM MaterialFluid"): Lets you select a fluid material from the database.

- ![](/src/assets/images/FEM_MaterialMechanicalNonlinear.svg) [Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear"): Lets you add a nonlinear mechanical material model.

- ![](/src/assets/images/FEM_MaterialReinforced.svg) [Reinforced material (concrete)](/FEM_MaterialReinforced "FEM MaterialReinforced"): Lets you select reinforced materials consisting of a matrix and a reinforcement from the database.

- ![](/src/assets/images/FEM_MaterialEditor.svg) [Material editor](/FEM_MaterialEditor "FEM MaterialEditor"): Lets you open the material editor to edit materials.

### Element Geometry

- ![](/src/assets/images/FEM_ElementGeometry1D.svg) [Beam cross section](/FEM_ElementGeometry1D "FEM ElementGeometry1D"): Used to define cross sections for beam elements.

- ![](/src/assets/images/FEM_ElementRotation1D.svg) [Beam rotation](/FEM_ElementRotation1D "FEM ElementRotation1D"): Used to rotate cross sections of beam elements.

- ![](/src/assets/images/FEM_ElementGeometry2D.svg) [Shell plate thickness](/FEM_ElementGeometry2D "FEM ElementGeometry2D"): Used to define shell element thickness.

- ![](/src/assets/images/FEM_ElementFluid1D.svg) [Fluid section for 1D flow](/FEM_ElementFluid1D "FEM ElementFluid1D"): Used to create fluid section element for pneumatic and hydraulic networks.

### Electromagnetic boundary conditions

- ![](/src/assets/images/FEM_ConstraintElectrostaticPotential.svg) [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential"): Used to define electrostatic potential.

- ![](/src/assets/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity"): Used to define a current density. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization"): Used to define a magnetization. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity"): Used to define electric charge density load. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Fluid boundary conditions

- ![](/src/assets/images/FEM_ConstraintInitialFlowVelocity.svg) [Initial flow velocity condition](/FEM_ConstraintInitialFlowVelocity "FEM ConstraintInitialFlowVelocity"): Used to define an initial flow velocity for a body (volume).

- ![](/src/assets/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure"): Used to define an initial pressure for a body (volume). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_ConstraintFlowVelocity.svg) [Flow velocity boundary condition](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity"): Used to define a flow velocity as a boundary condition at an edge (2D) or face (3D).

### Geometrical analysis features

- ![](/src/assets/images/FEM_ConstraintPlaneRotation.svg) [Plane multi-point constraint](/FEM_ConstraintPlaneRotation "FEM ConstraintPlaneRotation"): Used to define a constraint for keeping the nodes on a planar surface on the same plane.

- ![](/src/assets/images/FEM_ConstraintSectionPrint.svg) [Section print feature](/FEM_ConstraintSectionPrint "FEM ConstraintSectionPrint"): Used to print the predefined facial output variables (forces and moments) to the data file.

- ![](/src/assets/images/FEM_ConstraintTransform.svg) [Local coordinate system](/FEM_ConstraintTransform "FEM ConstraintTransform"): Used to define a local coordinate system for a face.

### Mechanical boundary conditions and loads

- ![](/src/assets/images/FEM_ConstraintFixed.svg) [Fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed"): Used to define a fixed boundary condition on point/edge/face(s).

- ![](/src/assets/images/FEM_ConstraintRigidBody.svg) [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"): Used to apply the CalculiX's rigid body constraint that constrains the motion of the nodes of a selected geometrical entity to the motion of a reference point positioned by the user. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/src/assets/images/FEM_ConstraintDisplacement.svg) [Displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement"): Used to define a displacement boundary condition on point/edge/face(s).

- ![](/src/assets/images/FEM_ConstraintContact.svg) [Contact constraint](/FEM_ConstraintContact "FEM ConstraintContact"): Used to define a contact constraint between two faces.

- ![](/src/assets/images/FEM_ConstraintTie.svg) [Tie constraint](/FEM_ConstraintTie "FEM ConstraintTie"): Used to define a tie constraint ("bonded contact") between two faces, or, [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"), cyclic symmetry.

- ![](/src/assets/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring"): Used to define a spring. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/src/assets/images/FEM_ConstraintForce.svg) [Force load](/FEM_ConstraintForce "FEM ConstraintForce"): Used to define a force in [N] applied uniformly to the selected face in the defined direction.

- ![](/src/assets/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure"): Used to define a pressure load.

- ![](/src/assets/images/FEM_ConstraintCentrif.svg) [Centrifugal load](/FEM_ConstraintCentrif "FEM ConstraintCentrif"): Used to define a centrifugal force body load. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/src/assets/images/FEM_ConstraintSelfWeight.svg) [Gravity load](/FEM_ConstraintSelfWeight "FEM ConstraintSelfWeight"): Used to define a gravity acceleration acting on a model.

### Thermal boundary conditions and loads

- ![](/src/assets/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature"): Used to define the initial temperature of a body.

- ![](/src/assets/images/FEM_ConstraintHeatflux.svg) [Heat flux load](/FEM_ConstraintHeatflux "FEM ConstraintHeatflux"): Used to define a heat flux load on a face(s).

- ![](/src/assets/images/FEM_ConstraintTemperature.svg) [Temperature boundary condition](/FEM_ConstraintTemperature "FEM ConstraintTemperature"): Used to define a temperature boundary condition on a point/edge/face(s).

- ![](/src/assets/images/FEM_ConstraintBodyHeatSource.svg) [Body heat source](/FEM_ConstraintBodyHeatSource "FEM ConstraintBodyHeatSource"): Used to define an internally generated body heat.

### Overwrite Constants

- ![](/src/assets/images/FEM_ConstantVacuumPermittivity.svg) [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity "FEM ConstantVacuumPermittivity"): Used to overwrite the [permittivity of vacuum](https://en.wikipedia.org/wiki/Vacuum_permittivity) with a custom value.

## Menu: Mesh

- ![](/src/assets/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape"): Generates a finite element mesh for a model using Netgen.

- ![](/src/assets/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"): Generates a finite element mesh for a model using Gmsh.

- ![](/src/assets/images/FEM_MeshBoundaryLayer.svg) [FEM mesh boundary layer](/FEM_MeshBoundaryLayer "FEM MeshBoundaryLayer"): Creates anisotropic meshes for accurate calculations near boundaries.

- ![](/src/assets/images/FEM_MeshRegion.svg) [FEM mesh region](/FEM_MeshRegion "FEM MeshRegion"): Creates a localized area(s) to mesh which highly optimizes analysis time.

- ![](/src/assets/images/FEM_MeshGroup.svg) [FEM mesh group](/FEM_MeshGroup "FEM MeshGroup"): Groups and labels elements of a mesh (vertex, edge, surface) together, useful for exporting the mesh to external solvers.

- ![](/src/assets/images/FEM_CreateElementsSet.svg) [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet"): Hides elements selected by a polygon from the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/src/assets/images/FEM_FemMesh2Mesh.svg) [FEM mesh to mesh](/FEM_FemMesh2Mesh "FEM FemMesh2Mesh"): Converts surfaces of 3D elements or whole 2D elements of a selected FEM mesh to surface mesh.

## Menu: Solve

- ![](/src/assets/images/FEM_SolverCalculixCxxtools.svg) [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"): Creates a new solver for this analysis.

- ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer"): Creates the solver controller for Elmer.

- ![](/src/assets/images/FEM_SolverMystran.svg) [Solver Mystran](/FEM_SolverMystran "FEM SolverMystran"): Creates the solver controller for the MYSTRAN solver. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/src/assets/images/FEM_SolverZ88.svg) [Solver Z88](/FEM_SolverZ88 "FEM SolverZ88"): Creates the solver controller for Z88.

### Mechanical equations

- ![](/src/assets/images/FEM_EquationElasticity.svg) [Elasticity equation](/FEM_EquationElasticity "FEM EquationElasticity"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform linear mechanical analyses.

- ![](/src/assets/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform nonlinear mechanical analyses (deformations). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Electromagnetic equations

- ![](/src/assets/images/FEM_EquationElectrostatic.svg) [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform electrostatic analyses.

- ![](/src/assets/images/FEM_EquationElectricforce.svg) [Electricforce equation](/FEM_EquationElectricforce "FEM EquationElectricforce"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate the electric force on surfaces.

- ![](/src/assets/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics in 2D. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate static current conduction. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/src/assets/images/FEM_EquationFlow.svg) [Flow equation](/FEM_EquationFlow "FEM EquationFlow"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform flow analyses.

- ![](/src/assets/images/FEM_EquationFlux.svg) [Flux equation](/FEM_EquationFlux "FEM EquationFlux"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform flux analyses.

- ![](/src/assets/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat"): Equation for the ![](/src/assets/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform heat transfer analyses.

- ![](/src/assets/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl "FEM SolverControl"): Opens the menu to adjust and start the selected solver.

- ![](/src/assets/images/FEM_SolverRun.svg) [Run solver calculations](/FEM_SolverRun "FEM SolverRun"): Runs the selected solver of the active analysis.

## Menu: Results

- ![](/src/assets/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge"): Deletes the results of the active analysis.

- ![](/src/assets/images/FEM_ResultShow.svg) [Show result](/FEM_ResultShow "FEM ResultShow"): Used to display the result of an analysis. This dialog is not available for the [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") as this solver visualizes using the [Post pipeline from result](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") object only.

- ![](/src/assets/images/FEM_PostApplyChanges.svg) [Apply changes to pipeline](/FEM_PostApplyChanges "FEM PostApplyChanges"): Toggles if changes to pipelines and filters are applied immediately.

- ![](/src/assets/images/FEM_PostPipelineFromResult.svg) [Post pipeline from result](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"): Used to add a new graphical representation of FEM analysis results (color scale and more display options).

- ![](/src/assets/images/FEM_PostFilterWarp.svg) [Warp filter](/FEM_PostFilterWarp "FEM PostFilterWarp"): Used to visualize the scaled deformed shape of the model.

- ![](/src/assets/images/FEM_PostFilterClipScalar.svg) [Scalar clip filter](/FEM_PostFilterClipScalar "FEM PostFilterClipScalar"): Used to clip a field with a specified scalar value.

- ![](/src/assets/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction "FEM PostFilterCutFunction"): Used to display the results on a sphere or a plane cutting through the model.

- ![](/src/assets/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion"): Used to clip a field with a sphere or a plane cutting through the model.

- ![](/src/assets/images/FEM_PostFilterContours.svg) [Contours filter](/FEM_PostFilterContours "FEM PostFilterContours"): Used to display iso-lines (for analyses in 2D) or iso-contours. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_PostFilterDataAlongLine.svg) [Line clip filter](/FEM_PostFilterDataAlongLine "FEM PostFilterDataAlongLine"): Used to plot the values of a field along a specified line.

- ![](/src/assets/images/FEM_PostFilterLinearizedStresses.svg) [Stress linearization plot](/FEM_PostFilterLinearizedStresses "FEM PostFilterLinearizedStresses"): Creates a stress linearization plot.

- ![](/src/assets/images/FEM_PostFilterDataAtPoint.svg) [Data at point clip filter](/FEM_PostFilterDataAtPoint "FEM PostFilterDataAtPoint"): Used to display value of a selected field at a given point.

### Filter functions

- ![](/src/assets/images/FEM_PostCreateFunctionPlane.svg) [Plane](/FEM_PostCreateFunctionPlane "FEM PostCreateFunctionPlane"): Cuts the result mesh with a plane.

- ![](/src/assets/images/FEM_PostCreateFunctionSphere.svg) [Sphere](/FEM_PostCreateFunctionSphere "FEM PostCreateFunctionSphere"): Cuts the result mesh with a sphere.

- ![](/src/assets/images/FEM_PostCreateFunctionCylinder.svg) [Cylinder](/FEM_PostCreateFunctionCylinder "FEM PostCreateFunctionCylinder"): Cuts the result mesh with a cylinder. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/src/assets/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox"): Cuts the result mesh with a box. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Menu: Utilities

- ![](/src/assets/images/FEM_ClippingPlaneAdd.svg) [Clipping plane on face](/FEM_ClippingPlaneAdd "FEM ClippingPlaneAdd"): Adds a clipping plane for the whole model view.

- ![](/src/assets/images/FEM_ClippingPlaneRemoveAll.svg) [Remove all clipping planes](/FEM_ClippingPlaneRemoveAll "FEM ClippingPlaneRemoveAll"): Removes all existing [clipping planes](/FEM_ClippingPlaneAdd "FEM ClippingPlaneAdd").

- ![](/src/assets/images/FEM_Examples.svg) [Open FEM examples](/FEM_Examples "FEM Examples"): Open the GUI to access FEM examples.

## Context Menu

- ![](/src/assets/images/FEM_MeshClear.svg) [Clear FEM mesh](/FEM_MeshClear "FEM MeshClear"): Deletes the mesh file from the FreeCAD file. Useful to make a FreeCAD file lighter.

- ![](/src/assets/images/FEM_MeshDisplayInfo.svg) [Display FEM mesh info](/FEM_MeshDisplayInfo "FEM MeshDisplayInfo"): Displays basic statistics of existing mesh - number of nodes and elements of each type.

## Obsolete tools

- ![](/src/assets/images/FEM_ConstraintFluidBoundary.svg) [Fluid boundary condition](/FEM_ConstraintFluidBoundary "FEM ConstraintFluidBoundary"): Used to define a fluid boundary condition. Did not have a solver. Not available in 1.0 and above.

- ![](/src/assets/images/FEM_ConstraintBearing.svg) [Constraint bearing](/FEM_ConstraintBearing "FEM ConstraintBearing"): Used to define a bearing constraint. Did not have a solver. Not available in 1.0 and above.

- ![](/src/assets/images/FEM_ConstraintGear.svg) [Constraint gear](/FEM_ConstraintGear "FEM ConstraintGear"): Used to define a gear constraint. Did not have a solver. Not available in 1.0 and above.

- ![](/src/assets/images/FEM_ConstraintPulley.svg) [Constraint pulley](/FEM_ConstraintPulley "FEM ConstraintPulley"): Used to define a pulley constraint. Did not have a solver. Not available in 1.0 and above.

- ![](/src/assets/images/FEM_SolverCalculiX.svg) [Solver CalculiX (new framework)](/FEM_SolverCalculiX "FEM SolverCalculiX"): Same as the original framework ![](/src/assets/images/FEM_SolverCalculixCxxtools.svg) [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") with extra checks. Tool was unfinished. Not available in 1.0 and above.

- ![](/src/assets/images/FEM_CreateNodesSet.svg) [Nodes set](/FEM_CreateNodesSet "FEM CreateNodesSet"): Creates/defines a node set from FEM mesh. Tool was unfinished and couldn't be used. Not available in 1.0 and above.

## Preferences

- ![](/src/assets/images/Std_DlgPreferences.svg) [Preferences...](/FEM_Preferences "FEM Preferences"): Preferences available in FEM Tools.

## Information

The following pages explain different topics of the FEM Workbench.

[FEM Install](/FEM_Install "FEM Install"): a detailed description on how to set up the external programs used in the workbench.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): tips regarding geometry preparation for FEM and meshing.

[FEM Mesh](/FEM_Mesh "FEM Mesh"): details about meshes in the FEM workbench.

[FEM Solver](/FEM_Solver "FEM Solver"): further information on the different solvers available in the workbench, and those that could be used in the future.

[FEM CalculiX](/FEM_CalculiX "FEM CalculiX"): further information on CalculiX, the default solver used in the workbench for structural analysis.

[FEM Concrete](/FEM_Concrete "FEM Concrete"): interesting information on the topic of simulating concrete structures.

## Tutorials

Tutorial 1: [FEM CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D "FEM CalculiX Cantilever 3D"); basic simply supported beam analysis.

Tutorial 2: [FEM Tutorial](/FEM_tutorial "FEM tutorial"); simple tension analysis of a structure.

Tutorial 3: [FEM Tutorial Python](/FEM_Tutorial_Python "FEM Tutorial Python"); set up the cantilever example entirely through scripting in Python, including the mesh.

Tutorial 4: [FEM Shear of a Composite Block](/FEM_Shear_of_a_Composite_Block "FEM Shear of a Composite Block"); see the deformation of a block that is comprised of two materials.

Tutorial 5: [Transient FEM analysis](/Transient_FEM_analysis "Transient FEM analysis")

Tutorial 6: [Post-Processing of FEM Results with Paraview](/Post-Processing_of_FEM_Results_with_Paraview "Post-Processing of FEM Results with Paraview")

Tutorial 7: [FEM Example Capacitance Two Balls](/FEM_Example_Capacitance_Two_Balls "FEM Example Capacitance Two Balls"); Elmer's GUI tutorial 6 "Electrostatics Capacitance Two Balls" using FEM Examples.

Coupled thermal mechanical analysis tutorials by [openSIM](https://opensimsa.github.io/training.html)

Video tutorial 1: [FEM video for beginner](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (including YouTube link)

Video tutorial 2: [FEM video for beginner](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (including YouTube link)

Many video tutorials: [anisim Open Source Engineering Software](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (in German)

## Extending the FEM Workbench

The FEM Workbench is under constant development. An objective of the project is to find ways to easily interact with various FEM solvers, so that the end user can streamline the process of creating, meshing, simulating, and optimizing an engineering design problem, all within FreeCAD.

The following information is aimed at power users and developers who want to extend the FEM Workbench in different ways. Familiarity with C++ and Python is expected, and also some knowledge of the "document object" system used in FreeCAD is necessary; this information is available in the [Power users hub](/Power_users_hub "Power users hub") and the [Developer hub](/Developer_hub "Developer hub"). Please notice that since FreeCAD is under active development, some articles may be too old, and thus obsolete. The most up to date information is discussed in the [FreeCAD forums](https://forum.freecadweb.org/index.php), in the Development section. For FEM discussions, advice or assistance in extending the workbench, the reader should refer to the [FEM subforum](https://forum.freecadweb.org/viewforum.php?f=18).

The following articles explain how the workbench can be extended, for example, by adding new types of boundary conditions (constraints), or equations.

- [Extend FEM Module](/Extend_FEM_Module "Extend FEM Module")
- [Onboarding FEM Devs](/Onboarding_FEM_Devs "Onboarding FEM Devs") attempts to orient new devs on how to contribute to the FEM workbench.
- [Add FEM Constraint Tutorial](/Add_FEM_Constraint_Tutorial "Add FEM Constraint Tutorial")
- [Add FEM Equation Tutorial](/Add_FEM_Equation_Tutorial "Add FEM Equation Tutorial")

A developer's guide has been written to help power users in understanding the complex FreeCAD codebase and the interactions between the core elements and the individual workbenches. The book is hosted at github so multiple users can contribute to it and keep it updated.

- [Early preview of ebook: Module developer' guide to FreeCAD source](https://forum.freecadweb.org/viewtopic.php?t=17581) forum thread.
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) github repository.

## Extending the FEM Workbench documentation

- More information regarding extending or missing FEM documentation can be found in the forum: [FEM documentation missing on the Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/en&oldid=1568041>"
