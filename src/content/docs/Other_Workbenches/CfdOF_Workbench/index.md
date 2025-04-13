---
title: CfdOF Workbench
---

:::caution
This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days.
:::[![Workbench CfdOF Icon](/src/assets/images/8/8b/Workbench_CfdOF.svg)](/File:Workbench_CfdOF.svg)

Workbench CfdOF Icon

## Introduction

The CfdOF Workbench provides a [Computational Fluid Dynamics (CFD)](https://en.wikipedia.org/wiki/Computational_fluid_dynamics) workflow for FreeCAD. This workbench aims to help users set up and run CFD analyses within the FreeCAD modeller, and serves as a front-end (GUI) for the popular OpenFOAM® CFD toolkit ([www.openfoam.org](http://www.openfoam.org), [www.openfoam.com](http://www.openfoam.com)). It guides the user in selecting the relevant physics, specifying the material properties, generating a mesh, assigning boundary conditions and choosing the solver settings before running the simulation. Best practices are specified to maximise the stability of the solvers.

## Features

For a list of current features, please visit the [CfdOF Features](/CfdOF_Features "CfdOF Features") page.

## Installation

The CfdOF Workbench can be used on Linux, Windows, and Mac OSX – although not widely tested. Since the workbench makes use of external solvers, the amount of manual setup will depend on the operating system that you are using.

See [CfdOF Install](/CfdOF_Install "CfdOF Install") for instructions on how to install and set up the CfdOF Workbench.

## Workflow

The steps to carry out a Computational Fluid Dynamics are:

1. Pre-processing: setting up the analysis problem.
   1. Modelling the geometry: creating the geometry with FreeCAD, or importing it from a different application.
   2. Creating an analysis.
      1. Selecting suitable models for the interesting physical and chemical phenomena.
      2. Defining the fluid properties.
      3. Specifying the appropriate chemical and physical boundary conditions at cells which coincide with or touch the domain boundary
      4. Creating and checking the mesh for the geometrical model.
2. Solving: running an external OpenFOAM® solver from within FreeCAD.
3. Post-processing: exporting the results so they can be postprocessed with [ParaView](https://www.paraview.org/).

![Workflow of the CfdOF Workbench](/src/assets/images/CfdOF_Workbench_workflow.svg)

Workflow of the CfdOF Workbench

Workflow of the CfdOF Workbench

## Menu: CfdOF

- ![](/src/assets/images/CfdOF_analysis.svg) [Analysis Container](/CfdOF_Analysis "CfdOF Analysis"): Creates a new container for Computational Fluid Dynamics.

- ![](/src/assets/images/CfdOF_Physics_Model.svg) [Physics Model](/CfdOF_Physics_Model "CfdOF Physics Model"): Lets you select the solver that is to be used in the CFD study.

- ![](/src/assets/images/CfdOF_Fluid_Properties.svg) [Fluid Properties](/CfdOF_Fluid_Properties "CfdOF Fluid Properties"): Lets you input the properties of the fluids to be used in the simulation.

- ![](/src/assets/images/CfdOF_CFD_Mesh.svg) [CFD Mesh](/CfdOF_CFD_Mesh "CfdOF CFD Mesh"): Lets you build the backgroud, or base, mesh from the geometry.

- ![](/src/assets/images/CfdOF_Mesh_Refinement.svg) [Mesh Refinement](/CfdOF_Mesh_Refinement "CfdOF Mesh Refinement"): Lets you refine the mesh on the surface and for a volume. Also lets you extrude a mesh.

- ![](/src/assets/images/CdfOF_Mesh_Dynamic.svg) [Interface Dynamic Refinement & Shockwave Dynamic Refinement](/index.php?title=CfdOF_Interface_Dynamic_Refinement_%26_Shockwave_Dynamic_Refinement&action=edit&redlink=1 "CfdOF Interface Dynamic Refinement & Shockwave Dynamic Refinement (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_Fluid_Boundary.svg) [Fluid Boundary](/index.php?title=CfdOF_Fluid_Boundary&action=edit&redlink=1 "CfdOF Fluid Boundary (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_Initialise_Flow_Fields.svg) [Initialise Flow Fields](/index.php?title=CfdOF_Initialise_Flow_Fields&action=edit&redlink=1 "CfdOF Initialise Flow Fields (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_Initialisation_Zones.svg) [Initialisation Zones](/index.php?title=CfdOF_Initialisation_Zones&action=edit&redlink=1 "CfdOF Initialisation Zones (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_Porous_Zone.svg) [Porous Zone](/index.php?title=CfdOF_Porous_Zone&action=edit&redlink=1 "CfdOF Porous Zone (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_Reporting_Function.svg) [Reporting Function](/index.php?title=CfdOF_Reporting_Function&action=edit&redlink=1 "CfdOF Reporting Function (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_Scalar_Transport_Function.svg) [Scalar Transport Function](/index.php?title=CfdOF_Scalar_Transport_Function&action=edit&redlink=1 "CfdOF Scalar Transport Function (page does not exist)"): Lets you...

- ![](/src/assets/images/CfdOF_CFD_Solver.svg) [CFD Solver](/CfdOF_CFD_Solver "CfdOF CFD Solver"): Lets you...

## Information

The following pages give further information on different topics of the CfdOF Workbench.

- [Meshing](/index.php?title=CfdOF_Meshing&action=edit&redlink=1 "CfdOF Meshing (page does not exist)"): tips regarding meshing.
- [Viewing Mesh](/index.php?title=CfdOF_Viewing_Mesh&action=edit&redlink=1 "CfdOF Viewing Mesh (page does not exist)"):
- [Checking Mesh](/index.php?title=CfdOF_Checking_Mesh&action=edit&redlink=1 "CfdOF Checking Mesh (page does not exist)"):
- [Solver](/index.php?title=CfdOF_Solver&action=edit&redlink=1 "CfdOF Solver (page does not exist)"):
- [Paraview](/index.php?title=CfdOF_Paraview&action=edit&redlink=1 "CfdOF Paraview (page does not exist)"):

## Tutorials

## Disclaimer

This offering is not approved or endorsed by OpenCFD Limited, producer and distributor of the OpenFOAM software via [www.openfoam.com](http://www.openfoam.com), and owner of the OPENFOAM® and OpenCFD® trade marks.

Retrieved from "<http://wiki.freecad.org/index.php?title=CfdOF_Workbench&oldid=1440671>"
