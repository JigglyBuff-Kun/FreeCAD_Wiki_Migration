---
title: FEM CalculiX Cantilever 3D
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Tutorial                                                                    |
| Topic                                                                       |
| Finite Element Analysis                                                     |
| Level                                                                       |
| Beginner                                                                    |
| Time to complete                                                            |
| 10 minutes                                                                  |
| Authors                                                                     |
| [Bernd](http://www.freecadweb.org/wiki/index.php?title=User:Berndhahnebach) |
| FreeCAD version                                                             |
| 0.16.6377 or above                                                          |
| Example files                                                               |
| _None_                                                                      |
| See also                                                                    |
| _None_                                                                      |
|                                                                             |

## Introduction

This example is meant to show how a simple Finite Element Analysis (**FEA**) in FreeCAD's [FEM Workbench](/FEM_Workbench "FEM Workbench") looks like in the FreeCAD interface and how the results can be visualized. It illustrates how to trigger a FEA and how to change the load value and load direction. Furthermore, since the example file is provided with any FreeCAD installation, it a useful and easy check to run for the purpose of ascertaining if the the FEM Workbench is set up properly.

![](/images/FEM_example01_pic10.png)

## Requirements

- A compatible version of FreeCAD designated in the tutorial overview.

  : Use the **Help → About FreeCAD** to see the version of FreeCAD installed

- No external software is needed for loading the example file, viewing the mesh and geometry as well as for visualizing the results.
- For rerunning the FEA the solver software CalculiX has to be installed on your computer. Probably the solver has been installed together with FreeCAD already. If the solver CalculiX is not installed see [FEM Install](/FEM_Install "FEM Install").

## Set up the example file

### Load the example file

- Start FreeCAD.
- If the Start Workbench is not activated, load it and open the start page.
- Open the example "FemCalculixCantilever3D.FcStd".

![](/images/FEM_example01_pic11.png)

### Activate the analysis container

- To work with an analysis the analysis has to be activated.
- In the [tree view](/Tree_view "Tree view"), double click on the ![](/images/FEM_Analysis.svg) Analysis,
- or right click on the ![](/images/FEM_Analysis.svg) Analysis and choose Activate analysis.

![](/images/FEM_example01_pic12.png)

### Analysis container and its objects

- If the analysis is activated, FreeCAD itself will change the current workbench to FEM.
- There are at least 5 objects needed to make a static mechanical analysis.

* ![](/images/FEM_Analysis.svg) analysis container

1. ![](/images/FEM_SolverCalculixCxxtools.svg) a solver
2. ![](/images/FEM_MaterialSolid.svg) a material
3. ![](/images/FEM_ConstraintFixed.svg) a fixed boundary condition
4. ![](/images/FEM_ConstraintForce.svg) a force load
5. ![](/images/FEM_FEMMesh.svg) a FEM mesh

- In this example, results ![](/images/FEM_ResultShow.svg) are already included as well.

### Visualizing Results

1. Be sure the analysis is activated.
2. Be sure the analysis still contains the result object, if not just reload the example file.
3. Double click the result object ![](/images/FEM_ResultShow.svg), or select it and click the ![](/images/FEM_ResultShow.svg) [Show result](/FEM_ResultShow "FEM ResultShow") button in the FEM toolbar.
4. In the task window, choose `z-Displacement`. It shows `-86.93 mm` in negative z-direction. This makes sense since the force is in negative z-direction as well.
5. Activate the check box besides the bottom slider of displacement show.
6. The slider can be used to alter the mesh to view the deformation in a simplified manner.
7. Choose among the different Result types to view all in the GUI available result types.

![](/images/FEM_example01_pic13.png)

### Purging Results

1. Be sure the analysis is activated.
2. To remove the results: select in the icon toolbar the ![](/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge") button.

### Running the FEA

- In the [tree view](/Tree_view "Tree view") double click on the solver object ![](/images/FEM_SolverCalculixCxxtools.svg).
- In the [task panel](/Task_panel "Task panel") of the solver object make sure static analysis is selected.
- Click on Write .inp file in the same task window. Watch the log window until it prints "write completed."
- Click on Run CalculiX. Since this is a very small analysis it should take less than a second to run.
- In the text window it should print in green letters "CalculiX done without error!" and in the next line "loading result sets ..."
- You just have finished your first FEA in FreeCAD if there has not been any error message.
- Click on Close in the task window.
- A new result object should be created. You know how to visualize the results already.
- If you get an error message no solver binary or similar when triggering the analysis check [FEM Install](/FEM_Install "FEM Install").

![](/images/FEM_example01_pic14.png)

### Running the FEA the fast Way

- In tree view select the solver object ![](/images/FEM_SolverCalculixCxxtools.svg) of the analysis ![](/images/FEM_Analysis.svg).
- In the icon toolbar click on ![](/images/FEM_SolverRun.svg) [Run solver calculations](/FEM_SolverRun "FEM SolverRun").
- The Calculix input file will be written, CalculiX will be triggered and the result object should be created.

### Changing Load Direction and Load Value

- In the [tree view](/Tree_view "Tree view") expand ![](/images/FEM_ResultShow.svg) CCX_Results and select the ![](/images/FEM_MeshResult.svg) ResultMesh object and press the Space key.
  - **Result:** The visibility of the FEM mesh will be turned off. The geometrical model is still visible.
- In the [tree view](/Tree_view "Tree view") double click on the ![](/images/FEM_ConstraintForce.svg) FEMConstraintForce object to open its [task panel](/Task_panel "Task panel")
- In the task window change the load value to **500000000 N = 500 MN** (**Note:** force unit in task window has to be in N)
- On the geometrical model click on one of the long edges in x-direction.
- Click on the Direction button.
  - **Result:** The red arrows that illustrate force will change their direction in x-direction. They indicate the force direction.
- Since tension should be applied to the box the Reverse Direction needs to be triggered by clicking on it.
- The red arrows of the force will change their direction.
- Click on OK in task window.

![](/images/FEM_example01_pic15.png)

- You know how to trigger an analysis and how to visualize results already.
- The deformation in x-direction should be 18.95 mm.

![](/images/FEM_example01_pic16.png)

## What next?

- We are now finished with the basic workflow for the [FEM Workbench](/FEM_Workbench "FEM Workbench").
- You are now prepared to do the second [FEM tutorial](/FEM_tutorial "FEM tutorial").
- We will create the CalculiX cantilever by ourselves and compare the results with the beam theory.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX_Cantilever_3D/en&oldid=1334229>"
