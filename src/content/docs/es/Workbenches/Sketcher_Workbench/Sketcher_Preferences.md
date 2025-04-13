---
title: Sketcher Preferences/es
---
## Introduction

The preferences for the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") can be found in the [Preferences Editor](/Preferences_Editor "Preferences Editor"). In the menu select **Edit → Preferences...** and then **![](/images/Workbench_Sketcher.svg) Sketcher**. This group is only available if the Sketcher Workbench has been loaded in the current FreeCAD session.

There are four pages: [General](#General), [Grid](#Grid), [Display](#Display) and [Appearance](#Appearance).

Some advanced preferences can only be changed in the [Parameter editor](/Std_DlgParameter "Std DlgParameter"). See [Fine-tuning](/Fine-tuning#Sketcher_Workbench "Fine-tuning").

This page has been updated for version 1.0.

In 0.21 and below the [Appearance](#Appearance) page is labeled "Colors".

## General

![](/images/Preferences_Sketcher_Page_General.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Show section 'Advanced solver control'** | If checked, the [sketcher dialog](/Sketcher_Dialog "Sketcher Dialog") will show the section *Advanced solver control* to adjust solver settings. |
| **Improve solving while dragging** | If checked, a special solver algorithm will be used while dragging sketch elements. This avoids that the sketch flips around while dragging. It is an improvement for most cases, however for complex sketches this option can increase the time to solve the sketch. |
| **Auto remove redundants** | If checked, new constraints that are redundant are automatically removed. |
| **Esc can leave sketch edit mode** | If checked, the Esc key can trigger exiting sketch edit mode. The option to disable this may be useful for users who are used to pressing Esc as part of their workflow in other CAD solutions but don't necessarily want to exit a sketch. |
| **Disable shading in edit mode** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, the shaded view is disabled when entering sketch edit mode. |
| **Notify automatic constraint substitutions** | If checked, you will be informed with a dialog about constraint substitutions. For example if the endpoints of two arcs are connected with the [coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and you reconnect the arcs using the [tangent constraint](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"), the coincidence constraint will be substituted by the tangent constraint and you will get a popup dialog telling you this. |
| **Unify Coincident and PointOnObject** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, the [Coincident constraint tool](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [PointOnObject constraint tool](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are unified in a [single tool](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"). *After changing this preference you must restart FreeCAD.* |
| **Auto tool for Horizontal/Vertical** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, the [Automatic horizontal/vertical constraint tool](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer") is added to the toolbar (it is always available in the menu and through its shortcut), and the [Horizontal constraint tool](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical constraint tool](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") are grouped below it in a dropdown. *After changing this preference you must restart FreeCAD.* |
| **Always add external geometry as reference** [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") | If checked, [external geometry](/Sketcher_External "Sketcher External") is always added as reference geometry regardless of the current [construction mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"). |
| **Dimensioning constraints** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | Specifies the dimensional constraint tools for the toolbar (all dimensional tools are always available in the menu and through their shortcuts). The options are:  * **Single tool**: A combined [Dimension tool](/Sketcher_Dimension "Sketcher Dimension") for all dimensional constraints. The separate tools are grouped below it in a dropdown. * **Separated tools**: Only the separate tools. * **Both**: Both the combined [Dimension tool](/Sketcher_Dimension "Sketcher Dimension") and the separated tools.   *After changing this preference you must restart FreeCAD.* |
| **Dimension tool diameter/radius mode** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | Specifies how the combined [Dimension tool](/Sketcher_Dimension "Sketcher Dimension") handles circles and arcs. The options are:  * **Auto**: First apply a radius dimension to arcs and a diameter dimension to circles. Before picking the point that will position the dimension, it is possible to switch with the M key. * **Diameter**: Always first apply a diameter dimension. Idem. * **Radius**: Always first apply a radius dimension. Idem. |
| **On-View-Parameters** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | Specifies the visibility mode for the On-View-Parameters. The options are:  * **None**: On-View-Parameters are completely disabled. * **Dimensions only**: Only dimensional On-View-Parameters are enabled. They are the most useful. For example the radius of a circle. * **Position and dimensions**: Both positional and dimensional On-View-Parameters are enabled. Positional parameters are the position of the cursor. For example for the center of a circle. |

## Grid

![](/images/Preferences_Sketcher_Page_Grid.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Grid** | If checked, a grid will be shown while the sketch is in edit mode. Used for new sketches. Is stored in the Vista**Show Grid** property of sketches. |
| **Grid Auto Spacing** | If checked, grid spacing is automatically adapted based on the view dimensions. Used for new sketches. Is stored in the Vista**Grid Auto** property of sketches. |
| **Grid spacing** | The distance between two subsequent grid lines. Used as a base value if **Grid Auto Spacing** is enabled. Used for new sketches. Is stored in the Vista**Grid Size** property of sketches. |
| **Pixel size threshold** | The grid spacing threshold in pixels. Only used if **Grid Auto Spacing** is enabled. If the onscreen spacing is smaller than this value, physical grid spacing is multiplied by the **Major grid lines every** value. If the onscreen spacing is larger than the threshold value times the **every** value, physical grid spacing is divided by the **every** value. If the **every** value is set to 1, 10 is used instead in these calculations. |
| **Minor grid lines** | For minor grid lines you can specify:  * **Line pattern** * **Line width** * **Line color** |
| **Major grid lines** | For major grid lines you can specify:  * **Major grid lines every**: The number of squares between major grid lines. Set to 1 to disable major grid lines. * **Line pattern** * **Line width** * **Line color** |

## Display

![](/images/Preferences_Sketcher_Page_Display.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Font size** | The font size used for the labels and constraints in the sketch. |
| **View scale ratio** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | The 3D view is scaled based on this factor. |
| **Segments per geometry** | Curves are approximated by polygon segments for visualization. This value defines the number of segments. The lower limit is 50 segments. Higher values refine the visualization but can lead to longer calculation times, especially for [B-splines](/Sketcher_CreateBSpline "Sketcher CreateBSpline"). |
| **Ask for value after creating a dimensional constraint** | If checked, a dialog will pop up to input a value for new dimensional constraints. |
| **Geometry creation "Continue Mode"** | If checked, geometry creation tools will remain active after creating an element. You can leave a tool any time by right-clicking in the sketch. |
| **Constraint creation "Continue Mode"** | If checked, constraint creation tools will remain active after creating a constraint. You can leave a tool any time by right-clicking in the sketch. |
| **Hide base length units for supported unit systems** | If checked, the length unit from the selected [unit system](/Preferences_Editor#Units "Preferences Editor") is used but not displayed in sketch constraints. Only for supported unit systems. |
| **Show coordinates beside cursor while editing** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, cursor coordinates are displayed beside the cursor while editing a sketch. |
| **Use system decimals setting for cursor coordinates** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, cursor coordinates will use the system decimals setting instead of the short form. |
| **Show dimensional constraint name with format** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, the names of dimensional constraints (if available) are displayed using the given format:  * **%N**: Parameter name. * **%V**: Dimension value. |
| **Hide all objects that depend on the sketch** | If checked, all objects that depend on the sketch will be hidden when the sketch is opened. Note that this may have no effect if the **Show objects used for external geometry** and/or **Show objects that the sketch is attached to** options are selected. |
| **Show objects used for external geometry** | If checked, hidden objects used for external geometry will be shown when the sketch is opened. |
| **Show objects that the sketch is attached to** | If checked, hidden objects the sketch is attached to will be shown when the sketch is opened. |
| **Restore camera position after editing** | If checked, the camera position is moved back to where it was before the sketch was opened. |
| **Force orthographic camera when entering edit** | If checked, camera mode will be forced to orthographic when the sketch is opened. Camera mode will be restored when leaving edit mode. This preference is only available if **Restore camera position after editing** is activated. |
| **Open sketch in Section View mode** | If checked, the sketch will open with 'Section View' active. |
| **Apply to existing sketches** | If pressed, the **Visibility automation** settings will be applied to existing sketches too. Otherwise they will only be used for new sketches. |

## Appearance

![](/images/Preferences_Sketcher_Page_Appearance.png)

Unless otherwise stated these preferences are only used while a sketch is in edit mode.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Creating line** | The color used for sketch elements while they are being created. |
| **Coordinate text** | The color used for the coordinates displayed while creating sketch elements. |
| **Cursor crosshair** | The color used for the crosshair cursor displayed while creating sketch elements. |
| **Geometry** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The colors used for constrained and unconstrained normal geometry. The line pattern and line width can also be specified. |
| **Construction geometry** | The colors used for constrained and unconstrained [construction geometry](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The line pattern and line width can also be specified. |
| **Internal alignment edge** | The colors used for constrained and unconstrained [internal alignment edges](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The line pattern and line width can also be specified. |
| **External geometry** | The color used for [external geometry](/Sketcher_External "Sketcher External"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The line pattern and line width can also be specified. |
| **Fully constrained Sketch** | The color used for a fully constrained sketch. |
| **Invalid Sketch** | The color used for an invalid sketch. |
| **Constraint symbols** | The color used for [driving geometric constraints](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"). |
| **Dimensional constraint** | The color used for [driving dimensional constraints](/Sketcher_Dimension "Sketcher Dimension"). |
| **Reference constraint** | The color used for [reference dimensional constraints](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"). |
| **Expression dependent constraint** | The color used for [expression](/Expressions "Expressions") dependent dimensional constraints. |
| **Deactivated constraint** | The color used for [deactivated constraints](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"). |
| **Colors outside Sketcher: Vertex** | The color used for [vertices](/Glossary#Vertex "Glossary") (points) when not in edit mode. |
| **Colors outside Sketcher: Edge** | The color used for [edges](/Glossary#Edge "Glossary") when not in edit mode. |

The colors for selections while a sketch is in edit mode are controlled by the global settings **Enable preselection highlighting** and **Enable selection highlighting**, see the [Preferences Editor](/Preferences_Editor#Selection "Preferences Editor").

The size of the vertices in edit mode is controlled by the **Marker size** [setting](/Preferences_Editor#3D_View "Preferences Editor").

## Note

There is another preference that has an influence on sketches. If the **Transparent objects** preference on the [Display → 3D View](/Preferences_Editor#3D_View "Preferences Editor") tab is set to `Backface pass`, arrowheads on one end of sketch dimensions are hidden on some systems. When viewed from the rear the dimension value can then also be hidden. Versions 0.19 to 0.21 (except Link branch) are affected. In versions 0.19 and 0.20 the effect only occurs if **Show grid** is deactivated in the [Edit controls](/Sketcher_Dialog#Edit_controls "Sketcher Dialog") section of the [Task panel](/Task_panel "Task panel") as shown below.

See [forum topic](https://forum.freecad.org/viewtopic.php?t=70975&start=10).

![](/images/Sketcher-Preferences-Note-Arrowhead-01.png) ![](/images/Sketcher-Preferences-Note-Arrowhead-02.png)

Front view, grid enabled and grid disabled

![](/images/Sketcher-Preferences-Note-Arrowhead-03.png) ![](/images/Sketcher-Preferences-Note-Arrowhead-04.png)

Rear view, grid enabled and grid disabled hiding arrowheads on the opposite end as well as the dimension value

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Preferences/es&oldid=1539579>"