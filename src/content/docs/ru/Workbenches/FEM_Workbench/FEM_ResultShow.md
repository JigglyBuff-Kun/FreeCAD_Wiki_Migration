---
title: FEM Показать результат
---
|  |
| --- |
| FEM ShowResult |
| Расположение в меню |
| Results → Показать результаты |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| S R |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

The **ResultShow** command opens the dialog for a FEM results object. A Result object is automatically created when a FEM analysis was performed using either the solver [Calculix](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") or [Z88](/FEM_SolverZ88 "FEM SolverZ88").

A Result object holds the resulting mesh and can visualize the results. It is designed and therefore limited to thermomechanical results. Except for the [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer"), it can be used as an alternative to a [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). A result pipeline can be used to visualize any kind of results (also electrical etc.).

The units used for the Result object are those of the set [unit system](/Preferences_Editor#Units "Preferences Editor") while for result pipelines, the units are [SI](https://en.wikipedia.org/wiki/International_System_of_Units).

The visualization of the results is only active when the dialog is open. However, the dialog settings are stored in the FreeCAD model file.

## Применение

1. Select the result object in the [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ResultShow.svg) [Show result](/FEM_ResultShow "FEM ResultShow") button.
   * Select the **Results → ![](/images/FEM_ResultShow.svg) Show result** option from the menu.
   * Use the keyboard shortcut: R then S.
3. Alternatively you can also double-click on the result object in the Tree view.

When the dialog is open, the result mesh will automatically be shown.

![](/images/FEM_Result-Object-Dialog.png)

The dialog is shown at the left and offers the following features:

* Select a result type and the minimum and maximum will be displayed in the dialog. The result mesh will be colored accordingly.

* Click on the button **Histogram** to get a histogram what amount of result mesh nodes have a certain result. The histogram plot can be modified by the buttons in its toolbar. it is also possible to save the histogram as image using the save button from its toolbar.

* Check the option **Show** to enable the slider and to visualize the result mesh deformation. The slider value is a factor by which the result *Displacement Magnitude* is multiplied.  
  **Note**: The slider only affects the Displacement Magnitude, not its X, Y, Z components. You can set the **Factor** directly and change **Slider Max** to adjust the range of the slider.

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): Click the **Start Animation** button to animate the results with the currently set deformation scale factor. Click **Stop Animation** or close the task panel to stop running the animation. You can set **Number of Steps per Cycle** (how many deformation states/steps up to the defined factor are shown in each loop), **Number of Cycles** (how many loops the animation does) and **Frame Rate** (how fast the animation goes - steps per second).

* With the button **Calculate** you can perform calculations of the results. Input in the text box below the button an equation of your choice. Predefined is the equation *P1-P3*. This means the result *Min Principal Stress* is subtracted from the *Max Principal Stress*. The variables for the possible results are explained in the box **User defined equation**.  
  After you input an equation press the button and the result will be shown in the fields displaying the minimum and maximum. The result mesh will be colored accordingly.  
  **Note**: The calculation results always have the unit MPa, mm or T, no matter what [unit system](/Preferences_Editor#Units "Preferences Editor") you use.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ResultShow/ru&oldid=1569207>"