---
title: FEM PostPipelineFromResult
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| FEM PostPipelineFromResult                                                                          |
| Menu location                                                                                       |
| Results → Post pipeline from result                                                                 |
| Workbenches                                                                                         |
| [FEM](/FEM_Workbench "FEM Workbench")                                                               |
| Default shortcut                                                                                    |
| _None_                                                                                              |
| Introduced in version                                                                               |
| 0.17                                                                                                |
| See also                                                                                            |
| [FEM Result object](/FEM_ResultShow "FEM ResultShow"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                                                                                     |

## Description

Pipeline is a result object, which creates a new graphical representation of FEM analysis results on the analyzed part. It adds a color scale and display options.

## Usage

1. Select a result object.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostPipelineFromResult.svg) [Post pipeline from result](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") button.
   - Select the **Results → ![](/src/assets/images/FEM_PostPipelineFromResult.svg) Post pipeline from result** option from the menu.
3. A new object called "Pipeline" is added to your analysis.
4. Double-click the new Pipeline object in the [Tree view](/Tree_view "Tree view") and select a display mode and the result field. For example for the mode `Surface` and the field `Von Mises stress` the pipeline will look like this:

![](/src/assets/images/Pipeline.PNG)

If you see no model in the graphical area, go to and enable **Edit → Preferences → Display → 3D View → Rendering → Backlight color**.

If you use a [SI](https://en.wikipedia.org/wiki/International_System_of_Units)-derived FreeCAD [unit system](/Preferences_Editor#Units "Preferences Editor"), the values in the output scale are based on SI units as well. This means the displacement is in meter, the stress is in Pascal and the temperature is in Kelvin.

## Properties

### Dialog box

This pipeline dialog box has the following settings:

- **Mode**: How to draw the results. The possible modes are
  - **Outline**: The outline of the result mesh. In fact, it displays no results but only the borders of the mesh.
  - **Nodes**: The result mesh nodes.
  - **Surface**: This is the default and displays the surface of the result mesh.
  - **Surface with Edges**: Like **Surface** but with the mesh outline edges and the surface mesh node connection lines.
- **Field**: Which result property to draw.
- **Vector**: Is only active if the **Field** is a vector. You can select whether to display the vector _Magnitude_ or its X, Y, Z components.

### Scale

If you double-click on the scale, you get this settings dialog box:

![](/src/assets/images/SIMTUT_05.PNG)

and you can modify these properties:

- **Gradient**: You can select reversed order of the default color gradient, _Red-White-Blue_, _Black-White_ or _White-Black_.
- **Style**: The default option _Flow_ uses the full color gradient range. The option _Zero_ uses only the color gradient range starting form the color that would display the mean value to the maximum.
- **Visibility**: The option _Out grayed_ will color all mesh nodes whose values are outside the set minimum/maximum range in gray. The option _Out transparent_ will make these mesh nodes transparent.
- **Parameter range**: Minimum and maximum values are filled-in automatically. You can modify them, however make sure you know what you are doing. You can also change the number of displayed decimal places and the number of labels distributed over the parameter range.

### Property Editor

In the [property editor](/Property_editor "Property editor") you can set in the _View_ tab the settings from the dialog box. In the _Data_ tab you can additionally set this:

- Data**Mode**: How the filters used in the pipeline will be treated. These modes are possible:
  - **Serial**: In this mode every filter takes the previous filter as input. The order is hereby the order of creation. The first created filter takes the pipeline as input. Its **Input** property is therefore empty.
  - **Parallel**: In this mode all filters take the pipeline as input.
  - **Custom**: This is the default and keeps the input of the filters as they are. Therefore it allows to have e.g. two filters that take the pipeline as input, and a third filter that takes one of the two filters as input.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostPipelineFromResult/en&oldid=1569224>"
