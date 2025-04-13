---
title: Analisi FEM transitoria
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                        |
| ---------------------- |
| Tutorial               |
| Argomento              |
| Transient FEM analysis |
| Livello di difficoltà  |
|                        |
| Tempo di esecuzione    |
|                        |
| Autori                 |
|                        |
| Versione di FreeCAD    |
|                        |
| Files di esempio       |
|                        |
| Vedere anche           |
| _Nessuno_              |
|                        |

## Introduzione

## Creare il modello

1. Starting with a blank FreeCAD project, we build our bimetal strip in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench")
2. Draw a ![](/images/Part_Box.svg) [Cube](/Part_Box "Part Box") Solid and rename it to `aluminium`.
3. Give it the dimensions 100 x 10 x 2 mm (length x width x height).
4. Create a second [Cube](/Part_Box "Part Box") Solid 'steel' with the same dimensions
5. Offset this part by 2 mm along the Z-axis (via **Placement → Position → z**).
6. Select both solids (using the Shift key + mouse click) and create ![](/images/Part_BooleanFragments.svg) [Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments") from them
7. Rename these Boolean Fragments to `bimetal strip`
8. In the [Property editor](/Property_editor "Property editor"), we change the mode from Vista**Standard** to Vista**CompSolid**. (It should also work by using the [Part Compound](/Part_Compound "Part Compound") command instead of ![](/images/Part_BooleanFragments.svg) [Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), however, with more complex intersecting shapes, there might be trouble with the FEM analysis later. So, better get used to using Boolean Fragments in the first place.) The result should look like this:

[![](/images/Transient_FEM_Bimetal_%281%29.JPG)

## Preparazione ed esecuzione dell'analisi FEM

### Assegnazione dei materiali

In the FEM workbench we create a new ![](/images/FEM_Analysis.svg) analysis and add a new ![](/images/FEM_MaterialSolid.svg) material to the analysis. In the upcoming task window, we select one of the predefined aluminium alloys. Under 'geometry reference selector', we assign the material to the lower strip of our model by setting the selection mode to 'solid', clicking 'add' and selecting a face or an edge of the lower strip. In the list view, 'BooleanFragments:Solid1' should show up.

![](/images/Transient_FEM_Bimetal_%282%29.JPG)

We close the task window and repeat the steps to create a second material 'Steel' (material card 'CalculiX-Steel') and assign it to the top strip ('BooleanFragments:Solid2').

### Creating the mesh

Since a Finite Element Analysis obviously needs elements to work with, we have to dissect our model into a so-called mesh. The FEM workbench offers two meshing tools: Netgen and GMSH. We will go with Netgen here: With the Boolean Fragments objects 'bimetal strip' selected, we click on the ![](/images/FEM_MeshNetgenFromShape.svg) Netgen icon in the FEM workbench. In the upcoming task window, we have to make different selections, starting from the top:

- Max. size is the maximum size (in millimetres) of an element. The smaller the maximum element size, the more elements we get – usually the result will get more precise, but with a dramatic increase in computing time. We set it to 10.
- Second order means, that in each element, additional nodes will be created. This increases computing time, but is usually a good choice if it comes to bending as in our analysis. We leave it checked.
- Fineness: Select, how finely the model should be cut into elements. For more complex models with curvatures and intersections, we can increase the element number in those regions to get better results (at the cost of more computing time, of course). Expert users can also set it to User-defined and set the following parameters. For our simple rectangular model, the fineness selection has not much of an impact, we keep it at moderate level.
- Optimize: Some kind of post-processing after meshing. We keep it checked.

A click on 'Apply' runs the mesher, and – the time depending on your computer – a wireframe appears on our model. The mesher should have created about 4,000 nodes.

![](/images/Transient_FEM_Bimetal_%283%29.JPG)

### Assigning boundary conditions

An FEM analysis now would result in nothing, because nothing is happening to our model yet. So let’s add some temperature: Use the ![](/images/FEM_ConstraintInitialTemperature.svg) initial temperature from the FEM workbench and set the temperature to 300 K. Here, no parts of the model can be selected, since this setting applies to the complete model.

Next, we use ![](/images/FEM_ConstraintTemperature.svg) temperature acting on a face. We select the two faces at one end of the strip (Ctrl + Left mouse key) and click 'add' in the task window. Two faces of the Boolean Fragments object should appear in the list and little temperature icons on the model. We set the temperature to 400 K and close the task window. At the beginning of the analysis, the selected faces will get an instantaneous temperature rise from 300 to 400 K. The heat will be conducted along the metal strips and cause the bending of the strip.

![](/images/Transient_FEM_Bimetal_%284%29.JPG)

Before we can run the analysis, an additional boundary condition has to be set: The analysis can only run, if our model is fixed somewhere in space. With ![](/images/FEM_ConstraintFixed.svg) we select the same two faces as for the 400 K above, and add them to the list. Red bars will appear on the model, visualising that those faces are fixed in space and not able to move around during the analysis.

![](/images/Transient_FEM_Bimetal_%285%29.JPG)

### Eseguire l'analisi

The analysis should already contain a solver object '[CalculiXccx Tools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools")'. If not, we add one by using the ![](/images/FEM_SolverCalculixCxxtools.svg) solver icon from the toolbar. (There are two identical icons, the experimental solver should also work.) The solver object has a list of properties below in the left section of the window. Here we select the following options (leave the ones unmentioned unchanged):

- Analysis Type: We want to run a thermomechanical analysis. Other options would be only static (no temperature effects), frequency (oscillations), or only to check the model validity.
- Thermo Mech Steady State: Steady state means, the solver will return one single result with the physics reaching equilibrium. We do NOT want to do that, we would like to get multiple, time-resolved results (transient analysis). So set it to false.
- Time end: We would like our analysis to stop after 60 seconds (i.e., simulation time, not real time).

![](/images/Transient_FEM_Bimetal_%286%29.JPG)

After double-clicking the solver object, we check that 'thermomechanical' is selected and run 'write .inp file'. This usually takes some seconds (or a lot more for bigger models) and returns a message 'write completed' in the box below. Now we start the calculation with 'run CalculiX'. After some time, the last messages 'CalculiX done without error!' and 'Loading result sets...' should appear. When the timer at the bottom has stopped, we close the task window. (With larger models and/or slower computers, FreeCAD may freeze and we won’t see the timer running. But be patient, in most of the cases, CalculiX is still running in the background and will eventually produce results.)

We should now have multiple ![](/images/FEM_ResultShow.svg) FEM result objects listed. By double-clicking, we can open each one of it and visualise the calculated temperatures, displacements, and stresses. We can visualise the bending by selecting 'Show' in the 'Displacement' section. Since the absolute displacements are small, we use the 'Factor' to exaggerate the values.

![](/images/Transient_FEM_Bimetal_%287%29.JPG)

Within FreeCAD, we can use ![](/images/FEM_PostPipelineFromResult.svg) [pipelines](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") to do some post-processing of the results. Alternatively, we can export the results in the VTK format and import them into dedicated post-processors like ParaView. For the export of multiple results (as for this analysis), there is a [macro](/Macro_export_transient_FEM_results "Macro export transient FEM results") available.

## Download

- [File di esempio senza risultati (200 kB)](https://drive.google.com/file/d/1m3RiJ-JM7QSJ6YDhZnafHIbyL92V6sYU/view?usp=sharing)

- [File di esempio con i risultati (10 MB)](https://drive.google.com/file/d/157aIdVpIyfpVW9WxL-ReGz0FIsQebH_q/view?usp=sharing)

## Other Example

- [Analytical bimetall example](https://forum.freecadweb.org/viewtopic.php?f=18&t=43040&start=10#p366664). The analytical example presented in the forum is included in FreeCAD FEM examples. It can be started by Python with

```
from femexamples.thermomech_bimetall import setup
setup()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Transient_FEM_analysis/it&oldid=1251798>"
