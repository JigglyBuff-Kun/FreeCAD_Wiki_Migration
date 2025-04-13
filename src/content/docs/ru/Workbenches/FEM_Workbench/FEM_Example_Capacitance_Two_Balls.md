---
title: FEM Example Capacitance Two Balls/ru
---
|  |
| --- |
| Руководство |
| Тема |
| Анализ конечных элементов |
| Уровень |
| Начинающие |
| Время для завершения |
|  |
| Авторы |
| [Sudhanshu Dubey](https://wiki.freecadweb.org/User:Sudhanshu_Dubey) |
| FreeCAD версия |
| 0.19 или выше |
| Примеры файлов |
|  |
| Смотрите также |
| *None* |
|  |

## Введение

This example is meant to show how to simulate the 6th example of [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf), **Electrostatic equation – Capacitance of two balls**, using the new [FEM Examples](/FEM_Examples "FEM Examples"). It illustrates how to setup the example, study it's various parts, solve it using the [Elmer Solver](/FEM_SolverElmer "FEM SolverElmer") and visualize the results using [Clip Filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").

![](/images/Two_balls_result_2.png)

The final result of this tutorial

## Requirements

* A compatible version of FreeCAD designated in the tutorial overview.

  :   Use the **Help → About FreeCAD** to see the version of FreeCAD installed
* No external software is needed for loading the example, viewing the mesh and geometry as well as for visualizing the results.
* For solving the finite element analysis (FEA), the solver software Elmer must be installed on your computer. See [this page](/FEM_SolverElmer#Installation "FEM SolverElmer") for how to install Elmer.

## Set up the example

### Load FEM Workbench

* Start FreeCAD, the Start Workbench should be loaded
* Switch to ![](/images/Workbench_FEM.svg) [FEM workbench](/FEM_Workbench "FEM Workbench").

### Load the example

* Go to **Utilities → ![](/images/FEM_Examples.svg) Open FEM examples**.
* When the GUI opens, find and open "Electrostatics Capacitance Two Balls". You can easily find the example in **All** or in **Solvers → Elmer**. For opening the example, either double click on it or select it and click Setup.

![](/images/Two_balls_selection.png)

## Understanding the Simulation Case

This case presents the solution of the capacitance of perfectly conducting balls in free space. A voltage difference between the balls results to electric charge being introduced to the system. The balls have also self-capacitance that comes from the voltage difference with the far field. Therefore a symmetric capacitance matrix with of size 2 × 2 needs to be solved. The capacitances may be computed from two different voltage configurations.

## Understanding the Model

* The model contains three spheres.

1. The two smaller ones are the perfectly conducting balls.
2. The bigger one is to simulate the surrounding air.

* The two smaller spheres are fused together and then that fusion is is cut from the bigger sphere.

![](/images/Two_balls_model_full.png)

The initial model

## Analysis container and its objects

The objects used in this electrostatic analysis:

1. ![](/images/FEM_Analysis.svg) Analysis container
2. ![](/images/FEM_SolverElmer.svg) SolverElmer
3. ![](/images/FEM_EquationElectrostatic.svg) Electrostatic, the electrostatics equation
4. ![](/images/FEM_MaterialFluid.svg) FemMaterial, a fluid material to represent the surrounding air
5. ![](/images/FEM_ConstraintElectrostaticPotential.svg) ElectrostaticPotential, constraints (3 of them)
6. ![](/images/FEM_ConstantVacuumPermittivity.svg) ConstantVaccumPermittivity, optional
7. ![](/images/FEM_MeshGmshFromShape.svg) Mesh, a [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") mesh
8. ![](/images/FEM_MeshRegion.svg) MeshRegion, a mesh region for the smaller spheres

![](/images/Two_balls_analysis.png)

The objects as they appear in the [Tree view](/Tree_view "Tree view")

## Running the FEA

* In [Tree view](/Tree_view "Tree view") double click on the solver object ![](/images/FEM_SolverElmer.svg).
* Click on Write file in the same task panel. Watch the log window until it prints "write completed." You can ignore the warning about the vacuum permittivity that might appear.
* Click on Run. Since this is a small analysis it should take a few seconds to run so wait till you see "ELMER SOLVER FINISHED AT" in the output.
* Click on Close in the task panel after the run is finished.
* Two new result objects should be created in the tree view, ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult and ![](/images/TextDocument.svg) SolverElmerOutput.

If you get an error message on solver binary or similar when triggering the analysis, check [the installation](/FEM_SolverElmer#Installation "FEM SolverElmer") of Elmer.

## Visualizing Results

* Make sure the mesh is invisible. If not, select the ![](/images/FEM_MeshGmshFromShape.svg) Mesh object and press Space to toggle the visibility.
* Also make sure the Cut object is invisible.
* Double click on the ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult object to open its task dialog.
* Change the "Field" to "potential" and press OK.
* You will notice that the color of the sphere has changed to blue and that the gradient on the right is showing values from 0 to 1. It should look something like this:

![](/images/Two_balls_potential.png)

## Post Processing the Result

* While we have successfully visualised the potential result, currently we are only seeing the zero potential in the air surrounding the two balls. To view the potential on the balls we need to apply a [clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").
* In the tree view select the ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult object and then from the tool bar click on the button ![](/images/FEM_PostFilterClipRegion.svg) Region Clip Filter.
* This will open a dialog with the filter configurations. Click there on the button ![](/images/List-add.svg) Create and choose ![](/images/FEM_PostCreateFunctionPlane.svg) Plane. This adds a plane through the center of the sphere at which the result mesh is cut. To smooth the cut face, check the option **Cut Cells**. Eventually click Apply.

![](/images/Two_balls_postcreate.png)

* In the tree view there is a new entry called Functions. It contains the created ![](/images/FEM_PostCreateFunctionPlane.svg) Plane. Make it invisible using Space.
* Double-click on the ![](/images/FEM_PostFilterClipRegion.svg) Clip object in the tree view.
* Change the "Field" to "potential" and press OK.
* Toggle the visibility of the ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult object using Space and you should see something like this:

![](/images/Two_balls_result.png)

Now we can clearly see that potential distribution in and around the balls.

Note that when ![](/images/FEM_PostApplyChanges.svg) [Apply Changes](/FEM_PostApplyChanges "FEM PostApplyChanges") is on, you would have been able to select the "Field" in the clip dialog directly and not to reopen it after the plane was created.

## Finding the Capacitance

* Our actual focus is to find the capacitance which is contained in the ![](/images/TextDocument.svg) SolverElmerOutput.
* Double click on ![](/images/TextDocument.svg) SolverElmerOutput to open it. Scroll down till you find:

```
StatElecSolve: Capacitance matrix computation performed (i,j,C_ij)
StatElecSolve:   1  1    5.07016E+00
StatElecSolve:   1  2    1.69328E+00
StatElecSolve:   2  2    5.07201E+00

```

* Here, our desired result is `C12 = 1.69328`. This value is close to the `1.691` given in the [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf). We can get an even closer value by making a finer [Mesh Region](/FEM_MeshRegion "FEM MeshRegion") but this activity is left for the user. Also, the user is advised to play with the [Clip Filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion") to get a visual result similar to the first picture of this tutorial.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Example_Capacitance_Two_Balls/ru&oldid=1340757>"