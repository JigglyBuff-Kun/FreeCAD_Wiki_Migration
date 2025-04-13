---
title: FEM tutorial
---

|                                                              |
| ------------------------------------------------------------ |
| Tutorial                                                     |
| Topic                                                        |
| Finite Element Analysis                                      |
| Level                                                        |
| Beginner                                                     |
| Time to complete                                             |
| 10 minutes + Solver time                                     |
| Authors                                                      |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD version                                              |
| 0.17 or above                                                |
| Example files                                                |
| _None_                                                       |
| See also                                                     |
| _None_                                                       |
|                                                              |

## Introduction

This tutorial is meant to introduce the reader to the basic workflow of the FEM Workbench, as well as most of the tools that are available to perform a static analysis.

![](/src/assets/images/FEM_tutorial_result.png)

## Requirements

- FreeCAD version 0.17 or above.
- [Netgen](http://sourceforge.net/projects/netgen-mesher/) and/or [GMSH](http://geuz.org/gmsh/) is installed on the system (included in the FreeCAD installation).
- [Calculix](http://www.calculix.de/) is installed on the system (included in the FreeCAD installation).
- The reader has the basic knowledge to use the [Part](/Part_Workbench "Part Workbench") and [PartDesign](/PartDesign_Workbench "PartDesign Workbench") Workbenches.

## Procedure

### Modeling

In this example a Cube is used as the study object, but any model created in the Part or PartDesign Workbenches can be used instead.

1. Press the ![](/src/assets/images/Std_New.svg) [Std New](/Std_New "Std New") button to create a new document.
2. Activate the ![](/src/assets/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").
3. Create a Cube.
4. Change its **Dimensions** to the following:
   1. Length: 8.000 m.
   2. Width: 1.000 m.
   3. Height: 1.000 m.

Now we have a model to work with.

### Creating the Analysis

1. Activate the ![](/src/assets/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").
2. Select the **Model → ![](/src/assets/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.

### Constraints and Forces

1. Hide the mesh from the Tree View.
2. Show the original model.
3. Select ![](/src/assets/images/FEM_ConstraintFixed.svg) [Create FEM fixed constraint](/FEM_ConstraintFixed "FEM ConstraintFixed").
4. Click Add, select the back face of the Cube object (face on the **YZ** axis) and click OK.
5. Select ![](/src/assets/images/FEM_ConstraintForce.svg) [Create FEM force constraint](/FEM_ConstraintForce "FEM ConstraintForce").
6. Click Add, select the front face of the Cube object (the face parallel to the back face) and set the **Force [N]** value to 9000000.
7. Set the **Direction** to **-Z** by selecting one of the face edges parallel to that direction.
8. Click OK.

We now have established the restrictions and forces for our static study.

### Material

1. Select ![](/src/assets/images/FEM_MaterialSolid.svg) [Material for solid](/FEM_MaterialSolid "FEM MaterialSolid") and choose Calculix-Steel as the material.
2. Click OK.

### Meshing

It is recommended to make a mesh as the last step in the analysis preparations due to association to a geometry in FreeCAD.
Depending on FreeCAD installation, there can be Netgen or GMSH meshers, you can use any of them.

#### Netgen

1. Select the model.
2. ![](/src/assets/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape"): Generates a finite element mesh for a model using Netgen.
3. In the meshing dialog, click Apply and OK.

You can also drag and drop a mesh to a Mechanical Analysis that does not have a mesh within the [Tree view](/Tree_view "Tree view").

#### GMSH

1. Select the model
2. ![](/src/assets/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"): Generates a finite element mesh for a model using Gmsh.
3. In the meshing dialog, click Apply and OK.

We have now meshed our object and are ready to add constraints and forces.

### Running the Solver

#### Standard Procedure

1. Select the solver object ![](/src/assets/images/FEM_SolverCalculixCxxtools.svg) contained in the **Analysis** container.
2. Select ![](/src/assets/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl "FEM SolverControl") from the menu.
3. Select **Write .inp File**.
4. Select **Run CalculiX**.
5. Click OK.

#### Quick Procedure

1. Select the solver object ![](/src/assets/images/FEM_SolverCalculixCxxtools.svg) contained in the **Analysis** container.
2. Click on ![](/src/assets/images/FEM_SolverRun.svg) [Run solver calculations](/FEM_SolverRun "FEM SolverRun").

### Analyzing Results

1. From the **Object Tree**, select the **CCX_Results** object.
2. Select ![](/src/assets/images/FEM_ResultShow.svg) [Show result](/FEM_ResultShow "FEM ResultShow").
3. Choose among the different Result types to view the results.
4. The slider at the bottom can be used to alter the mesh visualization. This allows us to visualize the deformation experienced by the object, keep in mind that this is an approximation.
5. To remove the results select ![](/src/assets/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge").

**Comparison to previous example file**

If you select the **Z displacement** result type, you can see that the obtained value is almost identical to the test example provided by FreeCAD. Differences may occur due to the quality of the mesh and the number of nodes it possesses.

We are now finished with the basic workflow for the [FEM Workbench](/FEM_Workbench "FEM Workbench").

## Notes

- For a video tutorial based on this written tutorial watch: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/en&oldid=1387441>"
