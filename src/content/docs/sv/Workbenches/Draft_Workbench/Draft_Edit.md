---
title: Draft Edit/sv
---
|  |
| --- |
| Draft\_Edit |
| Menyplacering |
| Draft → Edit |
| Arbetsbänkar |
| [Skiss](/Draft_Workbench/sv "Draft Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

## Beskrivning

Detta verktyg tillåter dig att grafiskt redigera vissa egenskaper av det markerade objektet, som hörnen i en tråd, eller längden och bredden på en Rektangel, eller radien på en Cirkel.

![](/images/Draft_Edit_example.png)

4 objects in Draft Edit mode: a Draft Wire (red), a Draft Arc (black), a Draft BSpline (green) and a Draft BezCurve (magenta)

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Optionally select one or more objects. Note that although multiple objects can be in Draft Edit mode, objects can only be edited one at a time.
2. There are several ways to invoke the command:
   * If you have not yet selected an object: double-click an object in the [Tree view](/Tree_view "Tree view"). This only works for supported Draft objects.
   * Press the ![](/images/Draft_Edit.svg) [Edit](/Draft_Edit "Draft Edit") button.
   * Select the **Modification → ![](/images/Draft_Edit.svg) Edit** option from the menu.
   * Use the keyboard shortcut: D then E.
   * For a single object: select the **Edit** option from the [Tree view](/Tree_view "Tree view") context menu. This only works for supported Draft objects. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The selected objects are marked with temporary nodes, and the [Main task panel](#Main_task_panel) opens. See [Options](#Options) for more information.
5. Optionally use a node or edge context menu. These context menus are only available for some Draft objects. See [Supported objects](#Supported_objects) for more information.
   * Do one of the following:
     + On all operating systems: hold down E and click the node or edge. To use E you may have to click in the [3D view](/3D_view "3D view") once to ensure that it has the focus.
     + On Windows: hold down Alt and click the node or edge.
     + On Linux: hold down Shift+Alt, Ctrl+Alt or Alt, and click the node or edge.
     + On macOS: hold down Option and click the node or edge.
   * Select an option from the context menu.
   * If the selected option requires point input:
     + The [Edit node task panel](#Edit_node_task_panel) opens. See [Options](#Options) for more information.
     + Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
6. Optionally move a node:
   * Click the node in the [3D view](/3D_view "3D view").
   * The [Edit node task panel](#Edit_node_task_panel) opens. See [Options](#Options) for more information.
   * Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
   * The result depends on the object and the selected node.
7. Press Esc or the Close button (the button at the top of the task panel, without the image) to finish the command.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

### Main task panel

* Press Esc or the Close button to finish the command.

### Edit node task panel

* Redigeringsverktyget fungerar endast på ett markerat objekt åt gången.
* Redigeringsläget fungerar endast på Skiss Trådar, Rektanglar, Cirklar och Cirkelbågar. Andra objekttyper måste först konverteras till Skissobjekt.
* Klicka på ett redigeringshörn för att flytta det, klicka igen för att släppa det.
* Nedtryckning av CTRL kommer att [snäppa](/Draft_Snap/sv "Draft Snap/sv") din punkt till tillgängliga snäpp-punkter.
* Nedtryckning av SKIFT kommer att koppla ihop x och y värdena , så att formen behålls
* Om du trycker på ESC så avbryts funktionen.
* Om du klickar på redigeringskanppen igen så avslutas redigeringsläget
* Skriv in siffror för att manuellt mata in en koordinat.

## Supported objects

### [Draft Line](/Draft_Line "Draft Line") and [Draft Wire](/Draft_Wire "Draft Wire")

* If the start or end node of an open wire is moved so that they coincide, the wire is closed.
* Node context menu: `Delete point`. At least two points must remain.
* Edge context menu: `Add point`, `Open wire`/`Close wire` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and `Reverse wire`.

### [Draft Arc](/Draft_Arc "Draft Arc") and [Draft Arc 3Points](/Draft_Arc_3Points "Draft Arc 3Points")

* Center node context menu: `Move arc`.
* Start node context menu: `Set first angle`.
* End node context menu: `Set last angle`.
* Mid node context menu: `Set radius`.
* Edge context menu: `Invert arc`.

### [Draft Circle](/Draft_Circle "Draft Circle")

* No context menus for this object.

### [Draft Ellipse](/Draft_Ellipse "Draft Ellipse")

* No context menus for this object.

### [Draft Rectangle](/Draft_Rectangle "Draft Rectangle")

* No context menus for this object.

### [Draft Polygon](/Draft_Polygon "Draft Polygon")

* No context menus for this object.

### [Draft BSpline](/Draft_BSpline "Draft BSpline")

* If the start or end node of an open spline is moved so that they coincide, the spline is closed.
* Node context menu: `Delete point`. At least two points must remain for an open spline. For a closed spline the minimum number of points is three.
* Edge context menu: `Add point`, `Open wire`/`Close wire` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and `Reverse spline` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

### [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") and [Draft BezCurve](/Draft_BezCurve "Draft BezCurve")

* If the start or end node of an open curve is moved so that they coincide, the curve is closed.
* Node context menu: `Delete point`, `Make sharp`, `Make tangent` and `Make symmetric`.
* Edge context menu: `Add point`, `Open wire`/`Close wire` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and `Reverse curve` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

### [Draft Dimension](/Draft_Dimension "Draft Dimension")

* Angular dimensions cannot be edited.
* The start and end nodes of parametric dimensions cannot be moved.
* No context menus for this object.

### [Arch Wall](/Arch_Wall "Arch Wall")

* A single node to control the height of the wall is displayed above the Data**Placement** of the wall.
* No context menus for this object.

### [Arch Structure](/Arch_Structure "Arch Structure")

* No context menus for this object.

### [Arch Window](/Arch_Window "Arch Window")

* No context menus for this object.

### [Arch Space](/Arch_Space "Arch Space")

* No context menus for this object.

### [Arch Panel Cut](/Arch_Panel_Cut "Arch Panel Cut")

* No context menus for this object.

### [Arch Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet")

* No context menus for this object.

### [Part Box](/Part_Box "Part Box")

* No context menus for this object.

### [Part Cylinder](/Part_Cylinder "Part Cylinder")

* No context menus for this object.

### [Part Sphere](/Part_Sphere "Part Sphere")

* No context menus for this object.

### [Part Cone](/Part_Cone "Part Cone")

* No context menus for this object.

### [Part Line](/Part_Line "Part Line")

* No context menus for this object.

### [Sketcher Sketch](/Sketcher_NewSketch "Sketcher NewSketch")

* Only sketches that contain a single unconstrained line can be edited.
* No context menus for this object.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* The color of the temporary nodes is the same as the color of the snap symbols. This color can be changed in the preferences: **Edit → Preferences... → Draft → Grid and snapping → Snap symbol color**. Note that this color is not used for the temporary nodes displayed for [Draft BezCurves](/Draft_BezCurve "Draft BezCurve"). These nodes use the Vy**Line Color** of the curve instead.
* The size of the nodes depends on: **Edit → Preferences... → Display → 3D View → Marker size**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

There is no Python method to Draft Edit objects. To emulate the results of the command geometric properties of objects have to be modified.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Edit/sv&oldid=1513486>"