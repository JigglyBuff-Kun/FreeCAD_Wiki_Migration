---
title: FEM NachbearbeitungFilterVerformung
---
|  |
| --- |
| FEM NachbereitungFilterVerformung |
| Menüeintrag |
| Ergebnisse → Verformungsfilter |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM NachbereitungPipelineVonErgebnis](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de"), [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Displays the deformed shape of the model using a specified scale factor. Therefore a warp filter only has an effect for result vectors that deform the shape.

The result will be the same like with the *Displacement* slider of the [result show](/FEM_ResultShow "FEM ResultShow") dialog with the difference that the displacement is for the Warp filter in the SI unit meter. For example if you use a [unit system](/Preferences_Editor#Units "Preferences Editor") where the length unit is mm and set a displacement factor of 100 in the [result show](/FEM_ResultShow "FEM ResultShow") dialog, you need to set for the Warp filter a factor of 100.000 to get the same result.

![](/images/FEM_Warp-Filter-Example.gif)

A warp filter of the displacement of a beam clamped on one side.

## Anwendung

1. Select a previously created [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult").
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_PostFilterWarp.svg) [Warp filter](/FEM_PostFilterWarp "FEM PostFilterWarp") button.
   * Select the **Results → ![](/images/FEM_PostFilterWarp.svg) Warp filter** option from the menu.
3. Adjust the **Result display options** like for the [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). Hide that pipeline to see the effect of a Warp Filter.
4. Specify the **Warp factor** directly or use the slider to set it. The **Min warp** and **Max warp** fields allow you to adjust the range of the slider.
5. Click the OK button to finish the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterWarp/de&oldid=1569237>"