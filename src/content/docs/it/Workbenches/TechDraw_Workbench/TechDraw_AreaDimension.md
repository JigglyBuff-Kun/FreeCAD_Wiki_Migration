---
title: TechDrawː Quota Area
---
|  |
| --- |
| TechDraw AreaDimension |
| Menu location |
| TechDraw → Dimensions → Insert Area Annotation |
| Workbenches |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.0 |
| See also |
| [TechDraw ExtensionAreaAnnotation](/TechDraw_ExtensionAreaAnnotation "TechDraw ExtensionAreaAnnotation") |
|  |

## Description

The **TechDraw AreaDimension** tool adds an area dimension to a face in a Part View.

![](/images/TechDraw_AreaDimension_Example.png)

Area Dimension of a face with a hole. See [Limitations](#Limitations).

## Usage

1. Select a face. The geometry may be selected in the [3D view](/3D_view "3D view") or in the drawing.
2. If you have selected geometry in the 3D view: add the correct TechDraw View to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   * If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/TechDraw_AreaDimension.svg) Insert Area Annotation** option from the dropdown.
   * If this preference has a different value: press the ![](/images/TechDraw_AreaDimension.svg) [Insert Area Annotation](/TechDraw_AreaDimension "TechDraw AreaDimension") button.
   * Select the **TechDraw → Dimensions → ![](/images/TechDraw_AreaDimension.svg) Insert Area Annotation** option from the menu.
4. A dimension is added to the view.
5. The dimension may be dragged to the desired position.
6. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

## Limitations

* 1.0 and below: The tool can only detect holes (islands) in faces selected in the 3D view. To get the correct area for such a face selected in the drawing do the following:
  1. Set the correct Dati**References 3D** with ![](/images/TechDraw_DimensionRepair.svg) [TechDraw DimensionRepair](/TechDraw_DimensionRepair "TechDraw DimensionRepair").
  2. Change the Dati**Measure Type** property to `True`.
  3. Invoke ![](/images/Std_Refresh.svg) [Std Refresh](/Std_Refresh "Std Refresh") if required.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_AreaDimension/it&oldid=1512593>"