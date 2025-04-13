---
title: Arch Window
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Window |
| Menyplacering |
| Arch → Window |
| Arbetsbänkar |
| [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| W I |
| Introducerad i version |
| - |
| Se även |
| [Arch Wall](/Arch_Wall/sv "Arch Wall/sv") |
|  |

## Beskrivning

The **Arch Window** tool creates a base object for all kinds of "embeddable" objects, such as windows and doors. It is designed to be either independent, or "hosted" inside another component such as an [Arch Wall](/Arch_Wall "Arch Wall"), [Arch Structure](/Arch_Structure "Arch Structure"), or [Arch Roof](/Arch_Roof "Arch Roof"). It has its own geometry, that can be made of several solid components (commonly a frame and inner panels), and also defines a volume to be subtracted from the host objects, in order to create an opening.

Window objects are based on closed 2D objects, such as [Draft Rectangles](/Draft_Rectangle "Draft Rectangle") or [Sketches](/Sketcher_Workbench "Sketcher Workbench"), that are used to define their inner components. The base 2D object must therefore contain several closed wires, that can be combined to form filled panels (one wire) or frames (several wires).

The Window tool features several [presets](#Presets). These allow the user to create common types of windows and doors with certain editable parameters, without the need to create the base 2D objects and components manually.

All information applicable to an Arch Window also applies to an [Arch Door](/Arch_Door "Arch Door"), as it's the same underlying object.

![](/images/Arch_Window_example2.jpg)

Complex window being constructed on top of a [Sketch](/Sketcher_Workbench "Sketcher Workbench"). When entering the window's edit mode you can create different components, set their thickness, and select and assign wires from the sketch to them.

## Usage

### Using a preset

1. There are several ways to invoke the tool:
   * Press the ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window") button.
   * Select the **3D/BIM → ![](/images/Arch_Window.svg) Window** option from the menu.
   * Use the keyboard shortcut: W then I.
2. Select one of the presets in the list.
3. Fill out the desired parameters.
4. In the [3D view](/3D_view "3D view"), move the window to the location where you wish to place it. If you move the pointer over an [Arch Wall](/Arch_Wall "Arch Wall"), the outline of the window should align itself with the face of that object.
5. Click on the [3D view](/3D_view "3D view") with the mouse, or press the Enter key three times to confirm the X, Y, Z coordinates of the placement.

#### Additional presets

In addition to the default presets, the window tool can also use custom presets. A custom preset is a FreeCAD file containing a single window based on a parametric sketch that has two named constrains: `Width` and `Height`. Custom presets can be placed in the following locations:

The window tool will always search this pair of locations:

$ROOT\_DIR/Arch/Doors/Custom/  
$ROOT\_DIR/Arch/Windows/Custom/

If you install the [Parts Library](/Parts_Library_Workbench "Parts Library Workbench") from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"), the window tool will also search this library for additional presets at this pair of locations:

$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Doors/Custom/  
$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Windows/Custom/

* The $ROOT\_DIR is the user directory where FreeCAD configuration files, macros, and external workbenches are stored. It can be found be entering `FreeCAD.getUserAppDataDir()` in the [Python console](/Python_console "Python console").
  + On Linux it is usually /home/username/.local/share/FreeCAD/
  + On Windows it is usually C:\Users\username\Application Data\FreeCAD\
  + On Mac OSX it is usually /Users/username/Library/Preferences/FreeCAD/
* The subdirectory name Custom is just a suggestion, any name can be used. But the files must be placed in one or more subdirectories inside the Doors or Windows directories.

Custom presets will be available in the window tool's presets dropdown menu. Presets in library locations will also be available in the Parts Library dialog.

### Creating a custom window

1. Optionally, select a face on the Arch object where you want the window to be included.
2. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
3. Create a new sketch.
4. Draw one or more closed wires (loops). Pay close attention to the creation order of these loops, the numbering of the "wires" in the [task panel](/Task_panel "Task panel") ("Window elements") depends on this.
5. Close the sketch.
6. Switch back to the [BIM Workbench](/BIM_Workbench "BIM Workbench").
7. Invoke the tool as described above.
8. To adjust the window components and various properties, enter the window [task panel](/Task_panel "Task panel") by double-clicking on the created object in the [tree view](/Tree_view "Tree view").
9. Note that since components following a hinged component will also hinge, all fixed components, such as outer frames and fixed glass panels, must be defined before any hinged components. And a glass panel in a hinged frame must be defined after that frame, and before any other hinged components.

## Presets

The following presets are available:

* ![Fixed](/images/ParametersWindowFixed.svg)

  Fixed
* ![Open 1-pane](/images/ParametersWindowSimple.svg)

  Open 1-pane
* ![Open 2-pane](/images/ParametersWindowDouble.svg)

  Open 2-pane
* ![Sash 2-pane](/images/ParametersWindowStash.svg)

  Sash 2-pane
* ![Sliding 2-pane](/images/ParametersWindowDouble.svg)

  Sliding 2-pane
* ![Simple door](/images/ParametersDoorSimple.svg)

  Simple door
* ![Glass door](/images/ParametersDoorGlass.svg)

  Glass door
* ![Sliding 4-pane](/images/ParametersWindowDouble.svg)

  Sliding 4-pane
* ![Awning](/images/ParametersWindowSimple.svg)

  Awning
* ![Opening only introduced in 1.0](/images/ParametersOpening.svg)

  Opening only [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Building components

Windows can include 4 types of components: frames, solid panels, glass panels and louvres. Panels and louvres are made from one closed wire, which gets extruded, while frames are made from 2 or more closed wire, where each one is extruded, then the smaller ones are subtracted from the biggest one. You can access, create, modify and delete components of a window in edit mode (double-click the window in the Tree view). The components have the following properties:

* **Name**: A name for the component
* **Type**: The type of component. Can be "Frame", "Glass panel", "Solid panel" or "Louvres"
* **Wires**: A comma-separated list of wires the component is based on
* **Thickness**: The extrusion thickness of the component
* **Z Offset**: The distance between the component and its base 2D wire(s)
* **Hinge**: This allows you to select an edge from the base 2D object, then set that edge as a hinge for this component and the next ones in the list
* **Opening mode**: If you defined a hinge in this component or any other earlier in the list, setting the opening mode will allow the window to appear open or to display 2D opening symbols in plan or elevation.

![](/images/Arch_Window_options.jpg)

## Options

* If the **Auto include in host object** checkbox on the Window creation task panel is unchecked, the window won't be inserted into any host object on creation.
* Add a selected window to a [wall](/Arch_Wall "Arch Wall") by selecting both, then pressing the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button.
* Remove a selected window from a [wall](/Arch_Wall "Arch Wall") by selecting the window, then pressing the ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") button.
* When using presets, it is often convenient to turn the "Near" [Draft Snap](/Draft_Snap "Draft Snap") on, so you can snap your window to an existing face.
* The hole created by a window in its host object is determined by two properties: Data**Hole Depth** and Data**Hole Wire** ([introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")). The Hole Wire number can be picked in the 3D view from the window's task panel available when double-clicking the window in the tree view
* Windows can make use of [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). The window will search in the attached Multi-Material for material layers with a same name for each of its window component, and use it if any is found. For example, a component named "OuterFrame" will search in the attached Multi-Material, for a material layer named "OuterFrame". If such material layer is found, its material will be attributed to the OuterFrame component. The thickness value of the material layer is disregarded.

## Openings

*See also:* [Tutorial for open windows](/Tutorial_for_open_windows "Tutorial for open windows")

Doors and windows can appear partially or fully open in the 3D model, or can display opening symbols both in plan and/or elevation. Consequently, these will also appear in extracted 2D views generated by [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") or [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"). To obtain this, at least one of the window components must have a hinge and an opening mode defined (see the [Building components](#Building_components) above). Then, using the Data**Opening**, Data**Symbol Plan** or Data**Symbol Elevation** properties, you can configure the appearance of the window:

![](/images/Arch_window_openings.png)

A door showing the symbol plan, symbol elevation and opening properties at work

## Defining window types

Windows can also take advantage of other tools, specifically [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workflows, to define a type. A type is an object that defines the shape of the window. This is specially well suited to work with [App Parts](/App_Part "App Part"):

![](/images/Arch_window_type_example.png)

[Download the example file shown above](https://github.com/FreeCAD/Examples/raw/master/Arch_Example_Files/Window_Type.FCStd)

### Example workflow

* Create a window frame object, a glass panel, and any other window component you need, using [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign](/PartDesign_Workbench "PartDesign Workbench") tools.
* For example, create a base rectangular sketch for your window, then a profile sketch for the frame, and create a [Part Sweep](/Part_Sweep "Part Sweep") to sweep the profile around the base sketch. Create a [Part Offset2D](/Part_Offset2D "Part Offset2D") from the base sketch, then a [Part Extrude](/Part_Extrude "Part Extrude") to create the glass panel
* Make sure all these pieces have a unique, meaningful name (for example, "Frame" or "Glass Panel")
* Create an [App Part](/App_Part "App Part"), and place all your subcomponents in it
* Create a volume to be subtracted from the wall, for example by extruding the base sketch. Add this volume to the App Part. Make sure the volume is turned off
* You can add 3 properties to your App Part, by right-clicking its properties view and selecting "Add property". Add the following properties (all of them are optional, the group doesn't matter):
  + **Height** as a PropertyLength and link it, for example, to a vertical constraint of your base sketch
  + **Width** as a PropertyLength and link it, for example, to a horizontal constraint of your base sketch
  + **Subvolume** as a PropertyLink and link it to the volume to be subtracted that we created above
  + **Tag** as a PropertyString

Our window type is now ready. We can create window objects from it, simply by selecting the App Part and pressing the window button. The "Height", "Width", "Subvolume" and "Tag" properties of the window will be linked to the corresponding property of the App Part, if existing.

### Materials

To build a material for type-based windows:

* Create a [multi-material](/Arch_MultiMaterial "Arch MultiMaterial")
* Create one entry in the multi-material for each component of your App Part. For example, one "Frame", one "Glass panel" as we used above. Make sure to use the exact same name.
* Attribute that multi-material to each of the windows derived from the same type

You can use any other kind of workflow than the one described above, the important points to remember are:

* The type object must be one object, no matter the type (App Part, PartDesign Body, Part Compound, or even another Arch Window)
* The type object must have a "Subvolume" property (linked to the window's Subvolume property) for openings in host objects to work
* The type object must have a "Group" property with different children with same names as multi-material items for multi-materials to work

## Properties

An Arch Window object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Window

* Data**Area** (`Area`): The area of this window.
* Data**Frame** (`Length`): The frame size (thickness/depth) of this window.
* Data**Height** (`Length`): The height of this window.
* Data**Hole Depth** (`Length`): The depth of the hole created by this window in its host object.
* Data**Hole Wire** (`Integer`): The number of the wire from the base object that is used to create a hole in the host object of this window. This value can be set graphically when double-clicking the window in the tree view. Setting a value of 0 will make the window automatically pick its biggest wire for the hole.
* Data**Hosts** (`LinkList`): The objects (e.g. wall) that host this window.
* Data**Louvre Spacing** (`Length`): If any of the components is set to "Louvres", this property defines the spacing between the louvre elements.
* Data**Louvre Width** (`Length`): If any of the components is set to "Louvres", this property defines the size of the louvre elements.
* Data**Normal** (`Vector`): The normal direction of this window, set (hardcoded) by the Window tool at interactive mode. Remarks: Set to (0,0,0) to make window automatically deduce the Normal direction, useful when user rotate the window's base Sketch e.g. when its host wall is rotated.
* Data**Offset** (`Length`): The offset size (from base sketch) of this window.
* Data**Opening** (`Percent`): All components that have their opening mode set, and provided a hinge is defined in them or in an earlier component in the list, will appear open by a percentage defined by this value.
* Data (Hidden)**Preset** (`Integer`): The preset number this window is based on.
* Data**Subvolume** (`Link`): An optional object that defines a volume to be subtracted from hosts of this window.
* Data**Symbol Elevation** (`Bool`): Shows 2D opening symbol in elevation.
* Data**Symbol Plan** (`Bool`): Shows 2D opening symbol in plan.
* Data**Width** (`Length`): The width of this window.
* Data (Hidden)**Window Parts** (`StringList`): The components of this window (5 strings per component).

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Window tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Window = makeWindow(baseobj=None, width=None, height=None, parts=None, name="Window")

```

* Creates a `Window` object based on `baseobj`, which should be a well formed, closed [Draft Wire](/Draft_Wire "Draft Wire") or [Sketcher Sketch](/Sketcher_Workbench "Sketcher Workbench").
* If available, sets the `width`, `height`, and `name` (label) of the Window.
* If the `baseobj` is not a closed shape, the tool may not create a proper solid figure.

Example:

```
import FreeCAD, Draft, Arch

Rect1 = Draft.makeRectangle(length=900, height=3000)
Window = Arch.makeWindow(Rect1)
FreeCAD.ActiveDocument.recompute()

```

You can also create a Window from a preset.

```
Window = makeWindowPreset(windowtype, width, height, h1, h2, h3, w1, w2, o1, o2, placement=None)

```

* Creates a `Window` object based on `windowtype`, which should be one of the names defined in `Arch.WindowPresets`.
* `width` and `height` define the total size of the object, with units in millimeters.
* The parameters `h1`, `h2`, `h3` (vertical offsets), `w1`, `w2` (widths), `o1`, and `o2` (horizontal offsets) specify different distances in millimeters, and depend on the type of preset being created.
* If a `placement` is given, it is used.

Example:

```
import FreeCAD, Arch

base = FreeCAD.Vector(2000, 0, 0)
Axis = FreeCAD.Vector(1, 0, 0)
place=FreeCAD.Placement(base, FreeCAD.Rotation(Axis, 90))

Door = Arch.makeWindowPreset("Simple door",
                             width=900, height=2000,
                             h1=100, h2=100, h3=100, w1=200, w2=100, o1=0, o2=100,
                             placement=place)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Window/sv&oldid=1560843>"