---
title: Draft SelectPlane/sv
---
|  |
| --- |
| Draft\_Workingplane |
| Menyplacering |
| Drafting → SelectPlane |
| Arbetsbänkar |
| [Skiss](/Draft_Workbench/sv "Draft Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

## Description

#### Beskrivning

Detta verktyg väntar på att användaren ska markera en existerande yta i 3D vyn eller att välja ett av de förinställda planen. Arbetsplanet kommer då att ställas in till det planet, och alla efterföljande 2D operationer kommer endast att hända på detta plan.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): For each 3D view a separate working plane is stored.

The ![](/images/Draft_tray_button_plane.png) button in the [Draft Tray](/Draft_Tray "Draft Tray") changes depending on the current working plane. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the working plane is not set to **Auto** an asterisk (**\***) is appended to the button label if the origin of the working plane does not match the global origin.

![](/images/WorkingPlane_example.png)

Shapes created on different working planes

## Usage with pre-selection

1. Do one of the following:
   * Select a single object. The following objects are supported:
     + [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): the Vy**View Data** (the camera position) and the Vy**Visibility Map** (the saved visibility of objects) of the working plane proxy are also restored.
     + [Arch Axes](/Arch_Axis "Arch Axis") ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
     + [Arch AxisSystems](/Arch_AxisSystem "Arch AxisSystem") ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
     + [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart")
     + [Arch SectionPlanes](/Arch_SectionPlane "Arch SectionPlane")
     + [Std Parts](/Std_Part "Std Part"): to avoid selecting subelements it is advisable to select these in the [Tree view](/Tree_view "Tree view").
     + Non-solid objects that consist of a single flat face or a single curved edge, or ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) that have three or more vertices.
     + Solid objects or objects without a shape that have a Data**Placement** property. ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
   * Select one or more subelements. You can select:
     + A flat face.
     + A curved edge.
     + Three vertices.
     + An edge and a vertex, or two edges. The combined vertices must define a plane. ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_tray_button_plane.png) button in the [Draft Tray](/Draft_Tray "Draft Tray").
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Utilities → ![](/images/Draft_SelectPlane.svg) Select plane** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   * Draft: Use the keyboard shortcut: W then P.
3. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Usage with post-selection

1. Invoke the command as explained above.
2. The **Working plane setup** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   * Select a single object. See the [previous paragraph](#Usage_with_pre-selection).
   * Select one or more subelements. See the [previous paragraph](#Usage_with_pre-selection).
4. Click anywhere in the [3D view](/3D_view "3D view") to confirm the selection and finish the command.
5. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Usage with presets

1. Invoke the command as explained above.
2. The **Working plane setup** task panel opens. See [Options](#Options) for more information.
3. Press any of the buttons to finish the command.
4. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Options

* Press the ![](/images/View-top.svg) Top (XY) button to align the working plane with the XY plane of the global coordinate system.
* Press the ![](/images/View-front.svg) Front (XZ) button to align the working plane with the XZ plane of the global coordinate system.
* Press the ![](/images/View-right.svg) Side (YZ) button to align the working plane with the YZ plane of the global coordinate system.
* Press the ![](/images/View-isometric.svg) Align to view button to align the working plane with the current [3D view](/3D_view "3D view"). If the **Center plane on view** checkbox is not checked the working plane origin will match the origin of the global coordinate system, else it will match the center of the current [3D view](/3D_view "3D view").
* Press the ![](/images/View-axonometric.svg) Automatic button to set the working plane to **Auto**. A working plane set to **Auto** will automatically align with the current [3D view](/3D_view "3D view") whenever a Draft or [BIM](/BIM_Workbench "BIM Workbench") command requiring point input is started. This is equivalent to pressing the ![](/images/View-isometric.svg) Align to view button before using the command. Additionally the working plane will align to planar faces that have been selected before starting the command, or when points on planar faces are picked during the command.
* The **Offset** defines the perpendicular distance between the calculated plane and the actual working plane.
* Check the **Center plane on view** checkbox to put the origin of the working plane in the center of to the current [3D view](/3D_view "3D view"). This option can be useful in combination with the ![](/images/View-isometric.svg) Align to view button.
* Select a vertex in the [3D view](/3D_view "3D view") and press the ![](/images/Draft_Move.svg) Move working plane button to move the working plane so that its origin matches the position of the selected vertex.
* The **Grid color** button allows to quickly change the color of the grid. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* The **Grid spacing** defines the distance between grid lines.
* The **Major lines every** value determines where major grid lines are drawn. Major grid lines are slightly thicker than minor grid lines. For example if the grid spacing is `0.5 m` and there is a main line every `10 squares`, such a line will occur every `5 m`.
* The **Grid size** value determines the number of squares in the X and Y direction of the grid.
* The **Snapping radius** is the maximum distance at which [Draft Snap Grid](/Draft_Snap_Grid "Draft Snap Grid") detects the intersections of grid lines.
* Press the ![](/images/View-fullscreen.svg) Center view button to align the [3D view](/3D_view "3D view") with the current working plane.
* Press the ![](/images/Sel-back.svg) Previous button to reset the working plane to its previous position.
* Press the Next ![](/images/Sel-forward.svg) button to reset the working plane to its next position. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Press Esc or the Close button to abort the command.

## Notes

* It can be useful to align the [3D view](/3D_view "3D view") with the selected Draft working plane. For example after switching the working plane to Front you may want to switch to the [Front view](/Std_ViewFront "Std ViewFront") as well.
* The grid can be toggled with the [Draft ToggleGrid](/Draft_ToggleGrid "Draft ToggleGrid") command.
* By double-clicking [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") in the [Tree view](/Tree_view "Tree view") you can quickly switch between working planes.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* The grid settings in the task panel as well as several other grid settings are available as preferences: **Edit → Preferences... → Draft → Grid and snapping**.
* The Snapping radius can also be changed on-the-fly (see [Draft Snap](/Draft_Snap#Preferences "Draft Snap")) or by changing: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → snapRange**.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):

The WorkingPlane module offers two classes to create working plane objects: the `PlaneBase` class and the `PlaneGui` class. The second class inherits from the first. Objects of the `PlaneGui` class interact with the GUI (the [Draft Tray](/Draft_Tray "Draft Tray") button), the [3D view](/3D_view "3D view") and the [grid](/Draft_Snap_Grid "Draft Snap Grid"). `PlaneBase` objects do not.

Use the `get_working_plane()` method of the WorkingPlane module to get an instance of the `PlaneGui` class linked to the current 3D view. The method either returns the existing working plane linked to the view or creates a new working plane if required.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

The `PlaneBase` class can be used to create working planes independent of the GUI:

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/sv&oldid=1473285>"